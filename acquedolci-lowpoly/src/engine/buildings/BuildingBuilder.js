import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ringToLocalPts, ptsToShape } from '../geo.js';
import { distToRoads, nearestRoad } from '../roads/RoadBuilder.js';
import { footprintBaseY, sampleY } from '../terrain.js';
import { rgbToHex, jitterRgb } from '../appearance/loadAppearance.js';
import { classifyPoi, FOOTPRINT_KITS, attachPoiKit } from '../landmarks/kits/index.js';
import { hash32, unit } from '../rng.js';
import { PolygonGrid } from '../spatial/grid.js';
import earcut from 'earcut';

const LEVEL_H = 3.05;

const WALL_PALETTE = [
  0xf5ead8, // whitewash
  0xf0e0c8, // cream
  0xe8d5b0, // ochre light
  0xe2c9a0,
  0xf2d4c4, // pale pink
  0xe8c8b8,
  0xd8d0c8, // light gray
  0xe6dcc8,
  0xf8f0e4,
  0xdcc8a8,
];

const ROOF_PALETTE = [
  0xb85a3a, 0xc46842, 0xa84e32, 0xd07048, 0x9e4a30, 0xbc6040, 0xad5538, 0xc87850, 0xa05038,
];

const CHURCH_WALL = 0xe8e0d4;
const CHURCH_ROOF = 0x6a6860;
const GARAGE_WALL = 0xc8c0b4;

/** [0,1) deterministico dall'id OSM (anche id > 2^31, che con `id | 0` collassavano). */
function hashId(id) {
  return unit(hash32(id));
}

/** Normale standard deterministica (Box–Muller da due hash). */
function gaussian(key) {
  const u1 = Math.max(1e-6, hashId(`${key}:u1`));
  const u2 = hashId(`${key}:u2`);
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

/**
 * Piani per edifici non taggati, dalla distribuzione del RegionProfile:
 * quota di monopiano + lognormale con mediana e p90 regionali.
 */
function floorsFromRegion(levels, id) {
  if (hashId(`${id}:single`) < levels.singleShare) return 1;
  const med = Math.max(1, levels.median);
  const p90 = Math.max(med + 0.2, levels.p90);
  const sigma = Math.log(p90 / med) / 1.2816;
  const f = med * Math.exp(gaussian(`${id}:floors`) * sigma);
  // singleShare è la quota TOTALE di monopiano: il resto parte da 2 piani
  return Math.max(2, Math.min(Math.round(p90 * 1.6), Math.round(f)));
}

function buildingHeight(props, id, region = null) {
  if (props.height && !Number.isNaN(+props.height)) return Math.max(2.5, +props.height);
  if (props.levels && !Number.isNaN(+props.levels)) return Math.max(2.8, +props.levels * LEVEL_H);

  const t = (props.building || '').toLowerCase();
  if (t === 'garage' || t === 'carport' || t === 'shed') return 2.8 + hashId(id) * 0.6;
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return 10 + hashId(id) * 6;
  if (t === 'school' || t === 'public') return 8 + hashId(id) * 4;
  if (t === 'apartments' || t === 'residential') return 6 + hashId(`${id}:apt`) * 6; // 2–4 floors
  if (t === 'house' || t === 'detached' || t === 'semidetached_house') {
    return 3.2 + hashId(id) * 4.5; // 1–2.5 floors
  }
  if (region?.levels) {
    return floorsFromRegion(region.levels, id) * LEVEL_H + 0.3 + hashId(`${id}:h`) * 0.6;
  }
  // Fallback senza profilo (comportamento storico)
  const r = hashId(`${id}:legacy`);
  if (r < 0.35) return 3.2 + r * 2; // 1 piano
  if (r < 0.7) return 5.5 + r * 2; // 2 piani
  if (r < 0.92) return 8 + r * 2.5; // 3 piani
  return 11 + r * 3; // 4+
}

function floorCount(props, height) {
  if (props.levels && !Number.isNaN(+props.levels)) return Math.max(1, Math.round(+props.levels));
  return Math.max(1, Math.round(height / LEVEL_H));
}

function footprintOBB(pts) {
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;
  let cxx = 0;
  let czz = 0;
  let cxz = 0;
  for (const p of pts) {
    const dx = p.x - cx;
    const dz = p.z - cz;
    cxx += dx * dx;
    czz += dz * dz;
    cxz += dx * dz;
  }
  const yaw = 0.5 * Math.atan2(2 * cxz, cxx - czz);
  const c = Math.cos(-yaw);
  const s = Math.sin(-yaw);
  let minL = Infinity;
  let maxL = -Infinity;
  let minW = Infinity;
  let maxW = -Infinity;
  for (const p of pts) {
    const dx = p.x - cx;
    const dz = p.z - cz;
    const l = dx * c - dz * s;
    const w = dx * s + dz * c;
    minL = Math.min(minL, l);
    maxL = Math.max(maxL, l);
    minW = Math.min(minW, w);
    maxW = Math.max(maxW, w);
  }
  const length = Math.max(0.8, maxL - minL);
  const width = Math.max(0.8, maxW - minW);
  const midL = (minL + maxL) * 0.5;
  const midW = (minW + maxW) * 0.5;
  const cos = Math.cos(yaw);
  const sin = Math.sin(yaw);
  return {
    cx: cx + midL * cos - midW * sin,
    cz: cz + midL * sin + midW * cos,
    yaw,
    length,
    width,
    aspect: length / width,
  };
}

function footprintArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % pts.length];
    a += p.x * q.z - q.x * p.z;
  }
  return Math.abs(a) * 0.5;
}

function pickRoofKind(props, aspect, id, rectness = 1, region = null, anyShape = false) {
  const shape = (props.roofShape || '').toLowerCase();
  if (shape === 'flat') return 'flat';
  const t = (props.building || '').toLowerCase();
  if (t === 'garage' || t === 'industrial' || t === 'warehouse' || t === 'shed') return 'flat';
  // Footprint irregolare → flat (stesso ExtrudeGeometry dei muri = allineamento perfetto)
  if (rectness < 0.82 && !anyShape) return 'flat';
  if (shape.includes('hip') || shape === 'pyramidal' || shape === 'dome') return 'hip';
  if (shape.includes('gable') || shape === 'skillion') return 'gable';
  if (t === 'church' || t === 'cathedral') return 'hip';
  const flatShare = region?.roof?.flatShare ?? 0.22;
  if (hashId(`${id}:roof`) < flatShare) return 'flat';
  const elongated = aspect > 1.4 || aspect < 1 / 1.4;
  if (!elongated) return 'hip';
  if (region?.roof) return hashId(`${id}:hip`) < region.roof.hipOfPitched ? 'hip' : 'gable';
  return 'gable';
}

function roofHeightFor(props, width, length, region = null) {
  if (props.roofLevels && !Number.isNaN(+props.roofLevels)) return Math.max(1.2, +props.roofLevels * 2.2);
  if (region?.roof?.pitchDeg) {
    // Altezza colmo dalla pendenza regionale (neve/pioggia → falde più ripide)
    const half = Math.min(width, length) * 0.5;
    return THREE.MathUtils.clamp(half * Math.tan((region.roof.pitchDeg * Math.PI) / 180), 0.9, 7);
  }
  return THREE.MathUtils.clamp(Math.min(width, length) * 0.28, 1.4, 4.2);
}

function wallColorFor(props, id, style = {}) {
  const t = (props.building || '').toLowerCase();
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return style.churchWall ?? CHURCH_WALL;
  if (t === 'garage' || t === 'shed') return style.garageWall ?? GARAGE_WALL;
  const palette = style.walls?.length ? style.walls : WALL_PALETTE;
  return palette[Math.abs(id * 7) % palette.length];
}

function roofColorFor(props, id, style = {}) {
  const t = (props.building || '').toLowerCase();
  if (t === 'church' || t === 'cathedral') return style.churchRoof ?? CHURCH_ROOF;
  if (t === 'garage') return 0x7a7870;
  const palette = style.roofs?.length ? style.roofs : ROOF_PALETTE;
  return palette[Math.abs(id * 13 + 3) % palette.length];
}



/**
 * Longest edge direction of footprint (NOT an OBB rectangle replacement).
 * Ridge axis stays a property of the real polygon edges.
 */
function longestEdgeAxis(pts) {
  let bestLen = -1;
  let ux = 1;
  let uz = 0;
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    if (len > bestLen) {
      bestLen = len;
      ux = dx / len;
      uz = dz / len;
    }
  }
  return { cx, cz, ux, uz, halfSpan: bestLen * 0.55 };
}

/**
 * Safe gable: eave loop = exact wall footprint verts.
 * Ridge = projection of each eave onto the longest-edge axis through centroid,
 * clamped so the ridge stays near the building core.
 * Only call for near-rectangular convex footprints.
 */
function makeGabledRoof(pts, wallH, roofH, color, baseY) {
  const { cx, cz, ux, uz, halfSpan } = longestEdgeAxis(pts);
  const y0 = baseY + wallH;
  const y1 = baseY + wallH + roofH;
  const n = pts.length;
  const pos = [];
  for (const p of pts) pos.push(p.x, y0, p.z);
  for (const p of pts) {
    const dx = p.x - cx;
    const dz = p.z - cz;
    let t = dx * ux + dz * uz;
    t = Math.max(-halfSpan, Math.min(halfSpan, t));
    pos.push(cx + t * ux, y1, cz + t * uz);
  }
  const idx = [];
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const ri = n + i;
    const rj = n + j;
    idx.push(i, j, rj, i, rj, ri);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(faceUp(idx, pos));
  geo.computeVertexNormals();
  return paint(geo, color, { y0: baseY + wallH, h: roofH, min: 0.86 });
}

/** Hip/pyramid: eaves = exact footprint, apex = polygon centroid (inside). */
function makeHipRoof(pts, wallH, roofH, color, baseY) {
  const y0 = baseY + wallH;
  const y1 = baseY + wallH + roofH;
  const n = pts.length;
  const pos = [];
  let acx = 0;
  let acz = 0;
  for (const p of pts) {
    pos.push(p.x, y0, p.z);
    acx += p.x;
    acz += p.z;
  }
  acx /= n;
  acz /= n;
  pos.push(acx, y1, acz);
  const apex = n;
  const idx = [];
  for (let i = 0; i < n; i++) idx.push(i, (i + 1) % n, apex);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(faceUp(idx, pos));
  geo.computeVertexNormals();
  return paint(geo, color, { y0: baseY + wallH, h: roofH, min: 0.86 });
}

function makeFlatRoof(pts, wallH, color, baseY) {
  const geom = new THREE.ExtrudeGeometry(ptsToShape(pts), { depth: 0.32, bevelEnabled: false });
  geom.rotateX(-Math.PI / 2);
  geom.translate(0, baseY + wallH, 0);
  return paint(geom, color);
}

// ---------------------------------------------------------------------------
// Vertex color al posto di un materiale per colore: prima ~2.000 mesh (un
// bucket per ogni colore muro jitterato + un mesh/materiale per ogni tetto),
// ora 2 mesh per chunk. AO finto nei vertici: base dei muri più scura.

const _col = new THREE.Color();

/** Orienta ogni triangolo verso l'alto: le falde possono usare FrontSide (niente acne da DoubleSide). */
function faceUp(idx, pos) {
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
    const ux = pos[b] - pos[a], uz = pos[b + 2] - pos[a + 2];
    const vx = pos[c] - pos[a], vz = pos[c + 2] - pos[a + 2];
    if (uz * vx - ux * vz < 0) { const k = idx[t + 1]; idx[t + 1] = idx[t + 2]; idx[t + 2] = k; }
  }
  return idx;
}

/**
 * Geometria → non indicizzata, senza uv, con attributo color (lineare).
 * @param {{y0:number,h:number,min:number}|null} ao gradiente verticale: min alla quota y0, 1 a y0+h
 */
function paint(geo, hex, ao = null) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g !== geo) geo.dispose();
  if (g.attributes.uv) g.deleteAttribute('uv');
  if (!g.attributes.normal) g.computeVertexNormals();
  _col.setHex(hex); // sRGB → lineare, come faceva `new MeshLambertMaterial({ color })`
  const pos = g.attributes.position;
  const arr = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    let k = 1;
    if (ao) {
      const t = Math.min(1, Math.max(0, (pos.getY(i) - ao.y0) / Math.max(0.1, ao.h)));
      k = ao.min + (1 - ao.min) * t;
    }
    arr[i * 3] = _col.r * k;
    arr[i * 3 + 1] = _col.g * k;
    arr[i * 3 + 2] = _col.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  g.clearGroups();
  return g;
}

const CHUNK = 250; // m: abbastanza grande da tenere poche draw call, abbastanza piccolo per il culling

/**
 * Decide roof topology. Appearance table wins when present; otherwise
 * flat for concave / low-rectness, gable only for near-rectangular houses.
 */
/**
 * @param {boolean} anyShape esiste un tetto compilato (straight skeleton): le falde non
 *   richiedono più una pianta rettangolare convessa.
 */
function resolveRoofKind(app, props, rectness, convex, id, region = null, aspect = null, anyShape = false) {
  if (app?.roofKind === 'flat' || app?.roofKind === 'gable' || app?.roofKind === 'hip') {
    // Un "piatto" deciso solo perché la pianta era irregolare era un limite del motore, non un dato:
    // con il tetto compilato si decide di nuovo (regione, tag OSM).
    const geometricFlat = app.roofKind === 'flat' && (app.convex === false || (app.rectness ?? 1) < 0.86);
    if (!(geometricFlat && anyShape)) {
      if (app.roofKind !== 'flat' && (!convex || rectness < 0.86) && !anyShape) return 'flat';
      return app.roofKind;
    }
  }
  // Prima qui passava 1/rectness come "aspect": mai allungato → mai gable senza appearance
  return pickRoofKind(props, aspect ?? 1.2, id, rectness, region, anyShape);
}

/**
 * Tetto dallo scheletro compilato. t = distanza dal bordo della pianta allargata di 35 cm
 * (gronda): sul filo del muro la falda è alla quota del muro, fuori scende un poco.
 */
function makeSkeletonRoof(r, wallTopY, tanP, color) {
  const V = r.v;
  const n = V.length / 3;
  const rise = r.tmax * tanP;
  if (!(rise > 0.2) || rise > 7.5) return null;
  const pos = new Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = V[i * 3] / 100;
    pos[i * 3 + 1] = wallTopY + (V[i * 3 + 2] / 100 - 0.35) * tanP;
    pos[i * 3 + 2] = V[i * 3 + 1] / 100;
  }
  const idx = [];
  for (const face of r.f) {
    if (face.length < 3) continue;
    if (face.length === 3) { idx.push(face[0], face[1], face[2]); continue; }
    const flat = [];
    for (const k of face) flat.push(pos[k * 3], pos[k * 3 + 2]);
    const tris = earcut(flat);
    for (let t = 0; t < tris.length; t += 3) idx.push(face[tris[t]], face[tris[t + 1]], face[tris[t + 2]]);
  }
  if (!idx.length) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(faceUp(idx, pos));
  geo.computeVertexNormals();
  return paint(geo, color, { y0: wallTopY - 0.35 * tanP, h: rise, min: 0.86 });
}

/**
 * Muri a fasce (sostituisce l'estrusione): zoccolo scuro fino a 0,9 m sopra il piano terra,
 * corpo con leggero gradiente, fascia di coronamento chiara sotto la gronda.
 * Colori piatti per fascia (vertici duplicati ai confini) → linee nette come intonaci veri.
 */
function makeBandedWalls(pts, bottomY, baseY, topY, hex, floors) {
  let area2 = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    area2 += a.x * b.z - b.x * a.z;
  }
  // normale del quad (a0,b0,b1) = sinistra del lato: l'esterno deve stare a sinistra
  const ring = area2 > 0 ? pts.slice().reverse() : pts;
  const base = new THREE.Color().setHex(hex);
  const mul = (k) => [base.r * k, base.g * k, base.b * k];
  const plinthTop = Math.min(topY - 0.5, baseY + 0.9);
  const bands = [[bottomY, plinthTop, mul(0.7), mul(0.72)]];
  if (floors >= 2 && topY - plinthTop > 2.2) {
    bands.push([plinthTop, topY - 0.45, mul(0.88), mul(1.0)]);
    bands.push([topY - 0.45, topY, mul(1.07), mul(1.07)]);
  } else {
    bands.push([plinthTop, topY, mul(0.88), mul(1.0)]);
  }
  const pos = [], col = [];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    if (Math.hypot(b.x - a.x, b.z - a.z) < 1e-3) continue;
    for (const [y0, y1, c0, c1] of bands) {
      if (y1 - y0 < 0.01) continue;
      pos.push(a.x, y0, a.z, b.x, y0, b.z, b.x, y1, b.z, a.x, y0, a.z, b.x, y1, b.z, a.x, y1, a.z);
      col.push(...c0, ...c0, ...c1, ...c0, ...c1, ...c1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  return geo;
}

function findStreetEdge(pts, roadPolylines) {
  let best = 0;
  let bestScore = -Infinity;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    if (len < 1.5) continue;
    const mx = (a.x + b.x) * 0.5;
    const mz = (a.z + b.z) * 0.5;
    const dRoad = roadPolylines.length ? distToRoads(mx, mz, roadPolylines) : 40;
    const score = len * 2 - dRoad * 3;
    if (score > bestScore) {
      bestScore = score;
      best = i;
    }
  }
  return best;
}

/** Apertura come quadrato staccato 4 cm dal muro: 2 triangoli invece dei 12 di una scatola. */
function facadeQuad(mx, mz, y, nx, nz, width, height) {
  const geo = new THREE.PlaneGeometry(width, height);
  const m = new THREE.Matrix4();
  const quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(nx, nz));
  m.compose(new THREE.Vector3(mx + nx * 0.04, y, mz + nz * 0.04), quat, new THREE.Vector3(1, 1, 1));
  geo.applyMatrix4(m);
  geo.deleteAttribute('uv');
  return geo;
}

/**
 * Davanzale come mensola orizzontale (2 triangoli, non i 12 di una scatola): la normale rivolta
 * in su prende la luce in modo diverso dal muro verticale, la stessa riga d'ombra di un vero
 * aggetto ma al costo di una finestra in più, non di 6× una finestra.
 */
function sillLedge(mx, mz, yBottom, nx, nz, width, depth) {
  const geo = new THREE.PlaneGeometry(width, depth);
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.Matrix4();
  const quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(nx, nz));
  m.compose(new THREE.Vector3(mx + nx * (depth * 0.5 + 0.02), yBottom, mz + nz * (depth * 0.5 + 0.02)), quat, new THREE.Vector3(1, 1, 1));
  geo.applyMatrix4(m);
  geo.deleteAttribute('uv');
  return geo;
}

// Persiane/infissi mediterranei: qualche tinta plausibile invece di un blu-grigio unico su
// tutta la città. Una per edificio (non per finestra): coerente sulla stessa facciata.
const WINDOW_TINTS = [
  [0x5a, 0x7a, 0x9a], // blu-grigio (originale)
  [0x4f, 0x6b, 0x4a], // persiana verde scuro
  [0x6b, 0x4a, 0x3a], // legno/persiana marrone
  [0xc9, 0xc2, 0xb0], // infisso chiaro/crema
  [0x3d, 0x5a, 0x5c], // petrolio/teal spento
];
function pickWindowTint(seed) {
  const rgb = WINDOW_TINTS[Math.floor(unit(hash32(`${seed}:wtint`)) * WINDOW_TINTS.length) % WINDOW_TINTS.length];
  return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
}
/** Colora tutti i vertici di una geometria con un rgb fisso (0..1): per la varietà di tinta. */
function tintGeometry(geo, rgb) {
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = rgb[0]; arr[i * 3 + 1] = rgb[1]; arr[i * 3 + 2] = rgb[2]; }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3));
  return geo;
}

function facadeBox(mx, mz, y, nx, nz, width, height, depth) {
  const geo = new THREE.BoxGeometry(width, height, depth);
  const m = new THREE.Matrix4();
  const pos = new THREE.Vector3(
    mx + nx * (depth * 0.5 + 0.03),
    y,
    mz + nz * (depth * 0.5 + 0.03),
  );
  const quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(nx, nz));
  m.compose(pos, quat, new THREE.Vector3(1, 1, 1));
  geo.applyMatrix4(m);
  return geo;
}

function addFacadeDetails(pts, height, floors, streetIdx, collectors, baseY, props, isParty = null, seed = '0') {
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;

  const t = (props.building || '').toLowerCase();
  const isChurch = t === 'church' || t === 'cathedral' || t === 'chapel';
  const isGarage = t === 'garage' || t === 'shed';
  // Varietà per edificio (non per finestra, coerente sulla stessa facciata): dimensione ±15% e
  // tinta di infissi/persiane. Prima ogni finestra della città era un rettangolo identico.
  const sizeJitter = 0.85 + unit(hash32(`${seed}:wsize`)) * 0.3;
  const winScale = (isChurch ? 1.25 : isGarage ? 0.6 : 1) * sizeJitter;
  const winTint = pickWindowTint(seed);

  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    if (len < 1.8) continue;
    const tx = dx / len;
    const tz = dz / len;
    let nx = -tz;
    let nz = tx;
    const mx = (a.x + b.x) * 0.5;
    const mz = (a.z + b.z) * 0.5;
    if (nx * (mx - cx) + nz * (mz - cz) < 0) {
      nx = -nx;
      nz = -nz;
    }

    // muro in comune con un altro edificio: niente finestre, porte, balconi, cornicione
    if (isParty && isParty(a, b, nx, nz)) continue;
    const isStreet = i === streetIdx;
    const margin = 0.7;
    // cornicione in aggetto sotto la gronda (edifici da 2 piani in su): linea d'ombra netta
    if (floors >= 2 && len > 2.5 && !isGarage) {
      collectors.cornices.push(facadeBox(mx, mz, baseY + height - 0.22, nx, nz, len + 0.3, 0.26, 0.32));
    }
    const usable = len - margin * 2;
    if (usable < 1) continue;

    if (isStreet && !isGarage) {
      collectors.doors.push(
        facadeQuad(mx, mz, baseY + 1.05, nx, nz, isChurch ? 1.6 : 1.1, isChurch ? 2.8 : 2.1),
      );
    }

    if (isGarage) continue;

    const winSpacing = isChurch ? 2.8 : floors >= 3 ? 2.0 : 2.3;
    for (let floor = 0; floor < floors; floor++) {
      const yCenter = baseY + floor * LEVEL_H + 1.4;
      if (yCenter + 0.6 > baseY + height - 0.25) continue;
      const nWin = Math.max(1, Math.floor(usable / winSpacing));
      for (let k = 0; k < nWin; k++) {
        const tt = margin + ((k + 0.5) / nWin) * usable;
        if (isStreet && floor === 0 && Math.abs(tt - len * 0.5) < 1.2) continue;
        const wx = a.x + tx * tt, wz = a.z + tz * tt;
        const wW = 0.9 * winScale, wH = 1.15 * winScale;
        collectors.windows.push(tintGeometry(facadeQuad(wx, wz, yCenter, nx, nz, wW, wH), winTint));
        // Davanzale: piccola mensola in aggetto sotto il vetro — la linea d'ombra che manca a
        // un rettangolo piatto è quello che fa leggere una finestra vera, non un adesivo sul muro.
        collectors.sills.push(sillLedge(wx, wz, yCenter - wH * 0.5 - 0.03, nx, nz, wW + 0.22, 0.14));
      }

      // Balconi su piani superiori, più densi sugli appartamenti
      const wantBalcony =
        isStreet &&
        floor >= 1 &&
        floors >= 2 &&
        len > 4 &&
        !isChurch &&
        (t === 'apartments' || floors >= 2);
      if (wantBalcony) {
        const balW = Math.min(len * 0.45, 3.2);
        const balY = baseY + floor * LEVEL_H + 0.08;
        collectors.balconies.push(facadeBox(mx, mz, balY, nx, nz, balW, 0.12, 0.85));
        const rail = facadeBox(mx, mz, balY + 0.42, nx, nz, balW * 0.92, 0.5, 0.06);
        rail.translate(nx * 0.72, 0, nz * 0.72);
        collectors.rails.push(rail);
      }
    }
  }
}

/**
 * @returns {{ count: number, aabbs: {minX,maxX,minZ,maxZ,minY,maxY}[] }}
 */

/**
 * Ritira il footprint dai bordi strada: ogni vertice troppo vicino all'asfalto
 * viene spinto lungo la normale uscente (clearance metri dal bordo carreggiata).
 * Mantiene muri verticali (solo XZ). Ritorna { pts, insetApplied }.
 */
function insetFootprintFromRoads(pts, roadPolylines, clearance = 1.0) {
  if (!roadPolylines?.length || pts.length < 3) return { pts, insetApplied: false };
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;

  let changed = false;
  const out = pts.map((p) => {
    const info = nearestRoad(p.x, p.z, roadPolylines);
    if (!info) return { x: p.x, z: p.z };
    // Se siamo dentro o troppo vicini al bordo asfalto (+clearance)
    const need = info.halfW + clearance;
    if (info.dist >= need) return { x: p.x, z: p.z };
    const push = need - info.dist;
    changed = true;
    return {
      x: p.x + info.nx * push,
      z: p.z + info.nz * push,
    };
  });

  // Evita footprint degeneri: se area collassa, scala verso centroide in modo soft
  let area = 0;
  for (let i = 0; i < out.length; i++) {
    const a = out[i];
    const b = out[(i + 1) % out.length];
    area += a.x * b.z - b.x * a.z;
  }
  area = Math.abs(area) * 0.5;
  if (area < 4) {
    // fallback: uniforme 8% verso centroide
    return {
      pts: pts.map((p) => ({
        x: cx + (p.x - cx) * 0.92,
        z: cz + (p.z - cz) * 0.92,
      })),
      insetApplied: true,
    };
  }
  return { pts: out, insetApplied: changed };
}

/**
 * Quota del piano terra e del piede dei muri.
 * - piano terra = quota del marciapiede/strada davanti (porte a livello strada);
 *   senza strada vicina: mediana del terreno;
 * - piede = punto più basso del terreno lungo il perimetro − 0,5 m: i muri scendono
 *   fino a terra anche in pendenza (prima il lato a valle restava sospeso).
 */
function groundLevels(pts, network) {
  const ys = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    ys.push(sampleY(a.x, a.z));
    const L = Math.hypot(b.x - a.x, b.z - a.z);
    const n = Math.min(6, Math.floor(L / 4));
    for (let k = 1; k <= n; k++) {
      const t = k / (n + 1);
      ys.push(sampleY(a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t));
    }
  }
  const sorted = ys.slice().sort((x, y) => x - y);
  let base = sorted[sorted.length >> 1];
  let street = null;
  if (network) {
    let best = null;
    for (const p of pts) {
      const n = network.nearestSeg(p.x, p.z, 6);
      if (n && !n.s.node && (!best || n.d - n.s.hw < best.gap)) best = { gap: n.d - n.s.hw, n };
    }
    if (best && best.gap < (best.n.s.sw ? network.SW : 0) + 3) {
      const s = best.n.s;
      street = s.ay + (s.by - s.ay) * best.n.t + (s.sw ? network.CURB : 0);
      base = street;
    }
  }
  let bottom = Math.min(base, sorted[0]) - 0.5;
  if (network) {
    // anche sotto il marciapiede/strada adiacente, se più basso
    for (const p of pts) {
      const sf = network.surfaceAt(p.x, p.z);
      if (sf) bottom = Math.min(bottom, sf.y - 0.5);
    }
  }
  return { base, bottom, street };
}

export function buildBuildings(features, scene, roadPolylines, playerRadius, style = {}, network = null) {
  const group = new THREE.Group();
  group.name = 'buildings';
  const aabbs = [];
  const collectors = { windows: [], doors: [], balconies: [], rails: [], cornices: [], sills: [] };

  // Pre-passata: tutte le piante, per riconoscere i muri condivisi (edifici in aderenza)
  const allFp = [];
  for (const f of features) {
    if (f.properties.kind !== 'building' || f.geometry.type !== 'Polygon') continue;
    const r = ringToLocalPts(f.geometry.coordinates[0]);
    if (r.length < 3) continue;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const p of r) { x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); z0 = Math.min(z0, p.z); z1 = Math.max(z1, p.z); }
    allFp.push({ id: String(f.properties.id), pts: r, minX: x0, maxX: x1, minZ: z0, maxZ: z1 });
  }
  const fpGrid = new PolygonGrid(allFp, 24);
  const _pq = [];
  const insideOther = (x, z, selfId) => {
    for (const q of fpGrid.query(x, z, 0.01, _pq)) {
      if (q.id === selfId) continue;
      let inside = false;
      const P = q.pts;
      for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
        if ((P[i].z > z) !== (P[j].z > z) && x < ((P[j].x - P[i].x) * (z - P[i].z)) / (P[j].z - P[i].z) + P[i].x) inside = !inside;
      }
      if (inside) return true;
    }
    return false;
  };
  let partyEdges = 0;
  const chunks = new Map(); // "i:j" -> { walls: geo[], roofs: geo[] }
  const footprints = [];
  const chunkOf = (pts) => {
    let x = 0, z = 0;
    for (const p of pts) { x += p.x; z += p.z; }
    const k = `${Math.floor(x / pts.length / CHUNK)}:${Math.floor(z / pts.length / CHUNK)}`;
    let c = chunks.get(k);
    if (!c) chunks.set(k, (c = { walls: [], roofs: [] }));
    return c;
  };
  let count = 0;
  let insetCount = 0;
  const MAX_DETAIL = 650;
  if (!style._roofStats) style._roofStats = { flat: 0, gable: 0, hip: 0 };
  const kittedBuildingIds = new Set();
  const poiGroup = new THREE.Group();
  poiGroup.name = 'poi-kits';

  for (const f of features) {
    if (f.properties.kind !== 'building') continue;
    if (f.geometry.type !== 'Polygon') continue;
    const ring = f.geometry.coordinates[0];
    if (!ring || ring.length < 4) continue;

    const rawPts = ringToLocalPts(ring);
    if (rawPts.length < 3) continue;

    const clearance = style.buildingRoadClearance ?? 1.1;
    const inset = style._compiledFootprints ? { pts: rawPts, insetApplied: false } : insetFootprintFromRoads(rawPts, roadPolylines, clearance);
    let pts = inset.pts;
    if (pts.length < 3) continue;
    if (inset.insetApplied) insetCount++;

    const id = f.properties.id || count;
    const levels = groundLevels(pts, network);
    const baseY = levels.base;
    const bottomY = levels.bottom;
    let h = buildingHeight(f.properties, id, style.region);
    {
      const ap = style.appearanceMap?.get(String(id));
      if (ap?.typology === 'garage') h = Math.min(h, 3.2);
      if (ap?.typology === 'apartments' && !f.properties.levels && !f.properties.height) h = Math.max(h, 6.5);
      if (ap?.typology === 'church') h = Math.max(h, 10);
    }
    const floors = floorCount(f.properties, h);


    const poiKind = classifyPoi(f.properties);
    if (poiKind === 'church' || poiKind === 'cathedral') {
      h = Math.max(h, 12);
      if (!f.properties.levels && !f.properties.height) h = Math.max(h, 14);
    } else if (poiKind === 'train_station') {
      h = Math.min(Math.max(h, 5.5), 9);
    } else if (poiKind === 'townhall') {
      h = Math.max(h, 9);
    } else if (poiKind === 'school' || poiKind === 'kindergarten') {
      h = Math.max(h, 6);
    }
    let wallGeom;
    try {
      wallGeom = makeBandedWalls(pts, bottomY, baseY, baseY + h, 0xffffff, floors); // colore applicato sotto
    } catch {
      continue;
    }

    const appEarly = style.appearanceMap?.get(String(id)) || null;
    let wallColor = wallColorFor(f.properties, id, style);
    if (appEarly?.wallColor) {
      const hex = rgbToHex(jitterRgb(appEarly.wallColor, id * 3, 14));
      if (hex != null) wallColor = hex;
    }
    if (poiKind === 'church' || poiKind === 'cathedral' || poiKind === 'chapel') {
      wallColor = style.churchWall ?? 0xe8e0d4;
    } else if (poiKind === 'school' || poiKind === 'kindergarten') {
      wallColor = 0xf2e6c8;
    } else if (poiKind === 'townhall') {
      wallColor = 0xece4d6;
    } else if (poiKind === 'train_station') {
      wallColor = 0xd8d2c6;
    }
    const chunk = chunkOf(pts);
    {
      // i colori delle fasce sono moltiplicatori: applico il colore del muro (sRGB → lineare)
      const wc = new THREE.Color().setHex(wallColor);
      const c = wallGeom.attributes.color;
      for (let i = 0; i < c.count; i++) c.setXYZ(i, c.getX(i) * wc.r, c.getY(i) * wc.g, c.getZ(i) * wc.b);
    }
    chunk.walls.push(wallGeom);

    // Collisione da ring originale con clearance più aggressivo (AABB non invade carreggiata)
    const collInset = style._compiledFootprints ? { pts: rawPts, insetApplied: false } : insetFootprintFromRoads(rawPts, roadPolylines, clearance + 1.35);
    const collPts = collInset.pts;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const p of collPts) {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minZ = Math.min(minZ, p.z);
      maxZ = Math.max(maxZ, p.z);
    }
    const pad = Math.max(0.15, playerRadius * 0.45);
    // Collisione precisa: footprint visivo (muri reali), non l'AABB ruotato
    {
      let fx0 = Infinity, fx1 = -Infinity, fz0 = Infinity, fz1 = -Infinity;
      for (const p of pts) {
        fx0 = Math.min(fx0, p.x); fx1 = Math.max(fx1, p.x);
        fz0 = Math.min(fz0, p.z); fz1 = Math.max(fz1, p.z);
      }
      footprints.push({ id, pts, minX: fx0, maxX: fx1, minZ: fz0, maxZ: fz1, minY: baseY, maxY: baseY + h });
    }
    aabbs.push({
      minX: minX - pad,
      maxX: maxX + pad,
      minZ: minZ - pad,
      maxZ: maxZ + pad,
      minY: baseY,
      maxY: baseY + h,
    });

    const obb = footprintOBB(pts);
    const area = footprintArea(pts);
    const rectness = area / Math.max(1e-3, obb.length * obb.width);
    // convexity quick check in local XZ
    let convex = true;
    {
      let sign = 0;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % pts.length];
        const c = pts[(i + 2) % pts.length];
        const cross = (b.x - a.x) * (c.z - b.z) - (b.z - a.z) * (c.x - b.x);
        if (Math.abs(cross) < 1e-8) continue;
        const s = cross > 0 ? 1 : -1;
        if (!sign) sign = s;
        else if (s !== sign) { convex = false; break; }
      }
    }

    const appMap = style.appearanceMap;
    const app = appMap?.get(String(id)) || appMap?.get(String(f.properties.id)) || null;
    const typology = app?.typology || null;

    let roofColor = roofColorFor(f.properties, id, style);
    if (app?.roofColor) {
      const hex = rgbToHex(jitterRgb(app.roofColor, id, 16));
      if (hex != null) roofColor = hex;
    }
    if ((poiKind === 'church' || poiKind === 'cathedral' || poiKind === 'chapel') && !app?.roofColor) {
      roofColor = style.churchRoof ?? 0x6a6860;
    } else if (poiKind === 'train_station' && !app?.roofColor) {
      roofColor = 0x5a6878;
    }
    const skel = style._skeletonRoofs?.get(String(f.properties.id)) || null;
    let kind = resolveRoofKind(app, f.properties, rectness, convex, id, style.region, obb.aspect, !!skel);
    if (poiKind === 'church' || poiKind === 'cathedral') {
      kind = convex && rectness >= 0.75 ? 'hip' : 'flat';
    } else if (poiKind === 'train_station') {
      kind = 'flat';
    }
    const roofH = Math.min(
      roofHeightFor(f.properties, obb.width, obb.length, style.region),
      typology === 'church' ? 4.5 : style.region ? 7 : 2.6,
    );

    // Always a flat deck from the SAME ExtrudeGeometry path as walls (pixel-perfect eaves).
    chunk.roofs.push(makeFlatRoof(pts, h, roofColor, baseY));
    // Optional pitch ON TOP — eaves still exact pts; only near-rectangular convex footprints.
    if (kind === 'gable' && convex && rectness >= 0.86) {
      chunk.roofs.push(makeGabledRoof(pts, h + 0.34, roofH, roofColor, baseY));
      if (style._roofStats) style._roofStats.gable++;
    } else if (kind === 'hip' && convex && rectness >= 0.86) {
      chunk.roofs.push(makeHipRoof(pts, h + 0.34, roofH * 0.85, roofColor, baseY));
      if (style._roofStats) style._roofStats.hip++;
    } else {
      // pianta irregolare: falde dallo scheletro compilato (prima diventava sempre piatto)
      const pitch = ((style.region?.roof?.pitchDeg ?? 22) * Math.PI) / 180;
      const g = (kind === 'gable' || kind === 'hip') && skel ? makeSkeletonRoof(skel, baseY + h + 0.34, Math.tan(pitch), roofColor) : null;
      if (g) {
        chunk.roofs.push(g);
        if (style._roofStats) style._roofStats.skeleton = (style._roofStats.skeleton || 0) + 1;
      } else if (style._roofStats) {
        style._roofStats.flat++;
      }
    }


    if (poiKind && FOOTPRINT_KITS.has(poiKind)) {
      const kitGroup = new THREE.Group();
      kitGroup.name = `poi-${poiKind}-${id}`;
      const kitInfo = attachPoiKit(poiKind, kitGroup, {
        pts,
        baseY,
        wallH: h,
        style,
        features,
        cx: obb.cx,
        cz: obb.cz,
      });
      poiGroup.add(kitGroup);
      kittedBuildingIds.add(String(id));
      // Prefer darker church roofs
      if ((poiKind === 'church' || poiKind === 'cathedral') && !app?.roofColor) {
        /* roof already added; kit adds tower */
      }
    }

    if (count < MAX_DETAIL) {
      addFacadeDetails(
        pts,
        h,
        floors,
        findStreetEdge(pts, roadPolylines),
        collectors,
        baseY,
        f.properties,
        (a, b, nx, nz) => {
          // 2 campioni su 3 dentro un altro edificio a 30 cm dal muro = muro in comune
          let hit = 0;
          for (const t of [0.25, 0.5, 0.75]) {
            if (insideOther(a.x + (b.x - a.x) * t + nx * 0.3, a.z + (b.z - a.z) * t + nz * 0.3, String(f.properties.id))) hit++;
          }
          if (hit >= 2) { partyEdges++; return true; }
          return false;
        },
        String(f.properties.id),
      );
    }
    count++;
  }

  const wallMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  // Gronde sporgenti visibili anche da sotto: doppia faccia, ma in ombra solo il retro (niente acne)
  const roofMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide, shadowSide: THREE.BackSide });
  let chunkMeshes = 0;
  for (const [k, c] of chunks) {
    for (const [list, mat, tag] of [[c.walls, wallMat, 'walls'], [c.roofs, roofMat, 'roofs']]) {
      if (!list.length) continue;
      const merged = mergeGeometries(list, false);
      list.forEach((g) => g.dispose());
      if (!merged) {
        console.warn('[buildings] merge fallito nel chunk', k, tag);
        continue;
      }
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, mat);
      mesh.name = `buildings-${tag}-${k}`;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      chunkMeshes++;
    }
  }

  function addMerged(list, color, cast = true, name = '') {
    if (!list.length) return;
    const merged = mergeGeometries(list, false);
    list.forEach((g) => g.dispose());
    if (!merged) return;
    const mesh = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ color, flatShading: true }));
    mesh.name = name;
    mesh.castShadow = cast;
    group.add(mesh);
  }

  /** Come addMerged ma la tinta è già nei vertici (una per edificio: pickWindowTint/tintGeometry). */
  function addMergedVertexColor(list, cast = true, name = '') {
    if (!list.length) return;
    const merged = mergeGeometries(list, false);
    list.forEach((g) => g.dispose());
    if (!merged) return;
    const mesh = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    mesh.name = name;
    mesh.castShadow = cast;
    group.add(mesh);
  }

  // Finestre e porte sono quasi complanari ai muri: niente ombra portata
  // (erano i "denti di sega" su mobile) e un passaggio d'ombra in meno.
  addMergedVertexColor(collectors.windows, false, 'buildings-windows'); // tinta per edificio, non un blu-grigio unico
  addMerged(collectors.doors, 0x5a4030, false, 'buildings-doors');
  addMerged(collectors.balconies, 0xd8c8b0, true, 'buildings-balconies');
  addMerged(collectors.rails, 0xe8e4dc, false, 'buildings-rails');
  addMerged(collectors.cornices, 0xe9e1d2, true, 'buildings-cornices'); // cornicioni: proiettano ombra (linea sotto la gronda)
  addMerged(collectors.sills, 0xe8ddc7, true, 'buildings-sills'); // davanzali: la linea d'ombra che rende reali le finestre

  group.add(poiGroup);
  scene.add(group);
  return {
    count,
    aabbs,
    footprints,
    footprintGrid: new PolygonGrid(footprints, 32),
    chunkMeshes,
    insetCount,
    roofStats: style._roofStats || null,
    partyEdges,
    kittedBuildingIds,
  };
}

