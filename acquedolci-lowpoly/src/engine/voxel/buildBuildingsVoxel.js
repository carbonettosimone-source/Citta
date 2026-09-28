/**
 * Edifici per il motore voxel (M6 V2): stessa idea del motore continuo (BuildingBuilder.js) —
 * altezza/piani/colore muro/tetto/tinta infissi tutti derivati da un hash deterministico
 * dell'id OSM, non un unico rettangolo ripetuto.
 *
 * Pareti e tetto seguono la pianta compilata (già pulita dal compilatore), non la sua versione
 * voxelizzata: a 0,25 m i lati diagonali diventavano scale di gradini da 25 cm che sullo schermo
 * leggevano come righe e bordi seghettati. La griglia voxel della pianta resta, ma solo per la
 * collisione (solidAt).
 *
 * Tetti dal profilo regionale (region.roof): una quota di terrazze piane con parapetto (tipiche
 * della costa siciliana), il resto a falde dallo scheletro compilato (level.buildings[].r), che
 * funziona su qualunque pianta, anche concava.
 *
 * Costruiti tutti in un colpo solo (non in streaming a chunk come il terreno): gli edifici sono
 * ordini di grandezza meno delle celle del terreno.
 */
import * as THREE from 'three';
import { VOXEL } from './voxelConfig.js';
import { hash32, unit } from '../rng.js';

const LEVEL_H = 3.05;
const PARAPET = 0.9; // m sopra la terrazza

const WALL_PALETTE = [
  0xf5ead8, 0xf0e0c8, 0xe8d5b0, 0xe2c9a0, 0xf2d4c4,
  0xe8c8b8, 0xd8d0c8, 0xe6dcc8, 0xf8f0e4, 0xdcc8a8,
];
// Foto drone reali: coppi arancio caldo molto uniformi in tutto il centro, non il rosso mattone
// scuro/marrone di prima — pochi valori, vicini fra loro, non una tavolozza "a caso".
const PITCHED_PALETTE = [0xc2703f, 0xcc7a4a, 0xb96a3c, 0xd4824f, 0xc07444];
const FLAT_PALETTE = [0xb0aaa0, 0xd2ccc0, 0xc4bdb0, 0xbab2a4, 0xd8d0c2];
const WINDOW_TINTS = [
  [0x5a, 0x7a, 0x9a], [0x4f, 0x6b, 0x4a], [0x6b, 0x4a, 0x3a], [0xc9, 0xc2, 0xb0], [0x3d, 0x5a, 0x5c],
];
const DOOR_COLOR = 0x5a4030;
const CHURCH_WALL = 0xe8e0d4, CHURCH_ROOF = 0x6a6860, GARAGE_WALL = 0xc8c0b4;

function hashId(id) { return unit(hash32(id)); }

function buildingHeight(props, id) {
  if (props.height && !Number.isNaN(+props.height)) return Math.max(2.5, +props.height);
  if (props.levels && !Number.isNaN(+props.levels)) return Math.max(2.8, +props.levels * LEVEL_H);
  const t = (props.building || '').toLowerCase();
  if (t === 'garage' || t === 'carport' || t === 'shed') return 2.8 + hashId(id) * 0.6;
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return 10 + hashId(id) * 6;
  if (t === 'school' || t === 'public') return 8 + hashId(id) * 4;
  if (t === 'apartments' || t === 'residential') return 6 + hashId(`${id}:apt`) * 6;
  if (t === 'house' || t === 'detached' || t === 'semidetached_house') return 3.2 + hashId(id) * 4.5;
  const r = hashId(`${id}:legacy`);
  if (r < 0.35) return 3.2 + r * 2;
  if (r < 0.7) return 5.5 + r * 2;
  if (r < 0.92) return 8 + r * 2.5;
  return 11 + r * 3;
}
function floorCount(props, h) {
  if (props.levels && !Number.isNaN(+props.levels)) return Math.max(1, Math.round(+props.levels));
  return Math.max(1, Math.round(h / LEVEL_H));
}
function wallColorFor(props, id) {
  const t = (props.building || '').toLowerCase();
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return CHURCH_WALL;
  if (t === 'garage' || t === 'shed') return GARAGE_WALL;
  return WALL_PALETTE[Math.abs(id * 7) % WALL_PALETTE.length];
}
/** Colore muro per singola casa di una schiera: come wallColorFor ma da una chiave qualsiasi
 *  (id:segmento), non da un id numerico — l'hash di wallColorFor richiede una moltiplicazione. */
function segWallColor(props, key) {
  const t = (props.building || '').toLowerCase();
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return CHURCH_WALL;
  if (t === 'garage' || t === 'shed') return GARAGE_WALL;
  return WALL_PALETTE[Math.floor(unit(hash32(key)) * WALL_PALETTE.length) % WALL_PALETTE.length];
}

const ROW_HOUSE_MIN_LEN = 11; // m: sotto è già una casa sola, non vale dividerla

/**
 * OSM qui non ha numeri civici (verificato: 0 tag addr:* su 854 edifici) — non si può "leggere"
 * la vera divisione in case. Si stima dalla FORMA: un lato dritto lungo quanto un'intera via è
 * quasi sempre una fila di case a schiera unite in un solo poligono dal rilievo catastale/OSM,
 * non un edificio vero. Diviso in tronchi larghi 4,5-7,5 m (fronte tipico di una casa a schiera
 * qui), ognuno con colore/tinta/porta propri: è una stima, non i confini catastali veri, ma
 * rompe la "facciata di un solo colore lunga quanto la via" con qualcosa di plausibile.
 */
function splitEdge(g, seedBase) {
  if (g.L <= ROW_HOUSE_MIN_LEN) return [g];
  const target = 4.5 + hashId(`${seedBase}:w`) * 3;
  const n = Math.max(2, Math.round(g.L / target));
  const segs = [];
  for (let i = 0; i < n; i++) {
    const t0 = (i / n) * g.L, t1 = ((i + 1) / n) * g.L;
    segs.push({
      x0: g.x0 + g.tx * t0, z0: g.z0 + g.tz * t0,
      tx: g.tx, tz: g.tz, nx: g.nx, nz: g.nz,
      L: t1 - t0, flip: g.flip, key: `${seedBase}:${i}`,
    });
  }
  return segs;
}

function windowTintFor(id) {
  const rgb = WINDOW_TINTS[Math.floor(unit(hash32(`${id}:wtint`)) * WINDOW_TINTS.length) % WINDOW_TINTS.length];
  return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
}

/** Tavolozze del profilo regionale: rossastri → coppi, il resto → terrazze in cemento/intonaco. */
function roofPalettes(roof) {
  const pitched = [], flat = [];
  for (const c of roof?.palette || []) {
    const hex = (c[0] << 16) | (c[1] << 8) | c[2];
    (c[0] > c[1] + 30 ? pitched : flat).push(hex);
  }
  return {
    pitched: pitched.length ? pitched : PITCHED_PALETTE,
    flat: flat.length >= 2 ? [...flat, ...FLAT_PALETTE] : FLAT_PALETTE,
  };
}

function decodeRing(flat, u) {
  const out = [];
  for (let i = 0; i < flat.length; i += 2) out.push({ x: flat[i] * u, z: flat[i + 1] * u });
  return out;
}

function pointInRing(x, z, ring) {
  let inside = false;
  for (let a = 0, b = ring.length - 1; a < ring.length; b = a++) {
    const pa = ring[b], pb = ring[a];
    if (pa.z > z !== pb.z > z && x < ((pb.x - pa.x) * (z - pa.z)) / (pb.z - pa.z) + pa.x) inside = !inside;
  }
  return inside;
}

/** Pianta → griglia booleana (dentro/fuori) alla risoluzione voxel del terreno: solo collisione. */
function voxelizeFootprint(ring, bb) {
  const originX = Math.floor(bb.minX / VOXEL) * VOXEL;
  const originZ = Math.floor(bb.minZ / VOXEL) * VOXEL;
  const W = Math.max(1, Math.ceil((bb.maxX - originX) / VOXEL));
  const H = Math.max(1, Math.ceil((bb.maxZ - originZ) / VOXEL));
  const grid = new Uint8Array(W * H);
  for (let j = 0; j < H; j++) {
    const z = originZ + (j + 0.5) * VOXEL;
    for (let i = 0; i < W; i++) {
      if (pointInRing(originX + (i + 0.5) * VOXEL, z, ring)) grid[j * W + i] = 1;
    }
  }
  return { grid, W, H, originX, originZ };
}

/**
 * Pareti dai lati VERI della pianta compilata, non dalla sua versione a scalini. A 0,25 m una
 * parete diagonale voxelizzata diventa una scala di gradini N/E larghi 25 cm, ognuno illuminato
 * in modo diverso: sullo schermo leggeva come righe sottili (e i tetti come bordi seghettati).
 * Un lato = una parete piana, ombreggiatura uniforme. Normale uscente verificata con un punto di
 * prova appena fuori dal lato (robusto anche per piante concave e per qualunque verso dell'anello).
 */
function edgeGeoms(ring) {
  const out = [];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    const dx = b.x - a.x, dz = b.z - a.z;
    const L = Math.hypot(dx, dz);
    if (L < 0.05) continue;
    const tx = dx / L, tz = dz / L;
    let nx = -tz, nz = tx;
    const mx = (a.x + b.x) * 0.5, mz = (a.z + b.z) * 0.5;
    if (pointInRing(mx + nx * 0.05, mz + nz * 0.05, ring)) { nx = -nx; nz = -nz; }
    out.push({ x0: a.x, z0: a.z, tx, tz, nx, nz, L });
  }
  return out;
}

/** Triangola un poligono (punti {x,z}) e orienta ogni triangolo verso l'alto. */
function upTriangles(pts) {
  const tris = THREE.ShapeUtils.triangulateShape(pts.map((p) => new THREE.Vector2(p.x, p.z)), []);
  for (const t of tris) {
    const a = pts[t[0]], b = pts[t[1]], c = pts[t[2]];
    // y di (b-a)×(c-a) = uz*vx - ux*vz: negativa = verso il basso → inverti
    if ((b.z - a.z) * (c.x - a.x) - (b.x - a.x) * (c.z - a.z) < 0) { const k = t[1]; t[1] = t[2]; t[2] = k; }
  }
  return tris;
}

/**
 * Tetto a falde dallo scheletro compilato (stessa formula di BuildingBuilder.makeSkeletonRoof):
 * v = [x·100, z·100, t·100] con t = distanza dal bordo della pianta allargata di 35 cm (gronda),
 * quindi sul filo del muro la falda è alla quota del muro e fuori scende un poco.
 * @returns {{pos:number[], tris:number[][]}|null}
 */
function skeletonRoof(r, wallTopY, tanP) {
  const V = r.v;
  const n = V.length / 3;
  const rise = r.tmax * tanP;
  if (!(rise > 0.2) || rise > 7.5) return null;
  const pts = [];
  for (let i = 0; i < n; i++) {
    pts.push({ x: V[i * 3] / 100, y: wallTopY + (V[i * 3 + 2] / 100 - 0.35) * tanP, z: V[i * 3 + 1] / 100 });
  }
  const tris = [];
  for (const face of r.f) {
    if (face.length < 3) continue;
    const fp = face.map((k) => pts[k]);
    for (const t of upTriangles(fp)) tris.push([face[t[0]], face[t[1]], face[t[2]]]);
  }
  return tris.length ? { pts, tris } : null;
}

const _c = new THREE.Color();
function pushIdx(idx, base, flip) {
  if (flip) idx.push(base, base + 2, base + 1, base, base + 3, base + 2);
  else idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
}
function pushQuad(pos, col, idx, p0, p1, p2, p3, hex, flip = false, k = 1) {
  _c.setHex(hex);
  const base = pos.length / 3;
  for (const p of [p0, p1, p2, p3]) { pos.push(p[0], p[1], p[2]); col.push(_c.r * k, _c.g * k, _c.b * k); }
  pushIdx(idx, base, flip);
}
function pushQuadRGB(pos, col, idx, p0, p1, p2, p3, rgb, flip = false) {
  const base = pos.length / 3;
  for (const p of [p0, p1, p2, p3]) { pos.push(p[0], p[1], p[2]); col.push(rgb[0], rgb[1], rgb[2]); }
  pushIdx(idx, base, flip);
}

/**
 * Un quad verticale [a-basso, b-basso, b-alto, a-alto] con a→b lungo la tangente t ha normale
 * t × su = (-tz, 0, tx). Se punta DENTRO l'edificio va invertito: con materiale a faccia singola
 * la GPU scarta le facce rivolte altrove, e prima metà delle pareti (tutti i lati nord ed est)
 * erano invisibili — le "strisce" con il cielo in mezzo.
 */
function needsFlip(g) {
  return -g.tz * g.nx + g.tx * g.nz < 0;
}

const BUCKET = 20; // m

/** Indice a secchi su tutte le piante: vicini (muri in comune) e collisione. */
function buildIndex(entries) {
  const map = new Map();
  const key = (i, j) => `${i}:${j}`;
  for (const e of entries) {
    const i0 = Math.floor(e.minX / BUCKET), i1 = Math.floor(e.maxX / BUCKET);
    const j0 = Math.floor(e.minZ / BUCKET), j1 = Math.floor(e.maxZ / BUCKET);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const k = key(i, j);
      let arr = map.get(k);
      if (!arr) map.set(k, (arr = []));
      arr.push(e);
    }
  }
  return (x, z) => map.get(key(Math.floor(x / BUCKET), Math.floor(z / BUCKET))) || [];
}

/**
 * @param {Array} features feature OSM (per altezza/tipologia reale, quando presente)
 * @param {object} level JSON del compilatore (level.buildings: impronte pulite sugli isolati)
 * @param {{sampleColumn:Function}} levelIndex
 * @param {{roof?:{flatShare?:number,pitchDeg?:number,palette?:number[][]}}} [region] profilo regionale
 */
export function buildBuildingsVoxel(features, level, levelIndex, region = null) {
  const group = new THREE.Group();
  group.name = 'buildings-voxel';
  const empty = { group, count: 0, footprints: [], solidAt: () => false, insideBuilding: () => false, stats: {} };
  if (!level?.buildings?.length) return empty;

  const u = level.unit || 0.1;
  const propsById = new Map();
  for (const f of features) {
    if (f.properties?.kind === 'building') propsById.set(String(f.properties.id), f.properties);
  }
  const flatShare = region?.roof?.flatShare ?? 0.35;
  const tanP = Math.tan(((region?.roof?.pitchDeg ?? 22) * Math.PI) / 180);
  const pal = roofPalettes(region?.roof);

  // ---- pre-passata: ogni edificio conosce quota e altezza propria PRIMA di disegnare i muri,
  // così un lato in comune con un vicino più basso si disegna solo sopra il tetto del vicino.
  const entries = [];
  for (const b of level.buildings) {
    const ring = decodeRing(b.o, u);
    if (ring.length < 3) continue;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const p of ring) {
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
    }
    const id = b.id;
    const props = propsById.get(String(id)) || {};
    const t = (props.building || '').toLowerCase();
    // quota: mediana sul perimetro per il piano terra; il piede dei muri 1 m sotto il punto più
    // basso (lotti in pendenza, e il terreno lontano sta volutamente più in basso di quello vicino)
    const ys = ring.map((p) => levelIndex.sampleColumn(p.x, p.z).height).sort((a, z) => a - z);
    const baseY = ys[ys.length >> 1];
    const h = buildingHeight(props, id);
    const forcedFlat = props.roofShape === 'flat' || t === 'garage' || t === 'shed' || t === 'industrial' || t === 'warehouse';
    const isChurch = t === 'church' || t === 'cathedral' || t === 'chapel';
    const slope = isChurch ? tanP * 1.3 : tanP;
    const rise = b.r ? b.r.tmax * slope : 0;
    // falde solo se lo scheletro dà un colmo plausibile (20 cm – 7,5 m), altrimenti terrazza
    const flat = forcedFlat || (!isChurch && hashId(`${id}:roof`) < flatShare) || !(rise > 0.2 && rise <= 7.5);
    entries.push({
      id, b, ring, props, t, minX, maxX, minZ, maxZ,
      baseY, bottomY: ys[0] - 1.0, h, top: baseY + h, flat, slope,
      // quota più alta di ciò che occupa il lato visto da un vicino: il parapetto conta
      solidTop: baseY + h + (flat ? PARAPET : 0),
    });
  }
  const candidates = buildIndex(entries);
  /** Edificio (diverso da `self`) che contiene (x,z), o null. */
  const buildingAt = (x, z, self = null) => {
    for (const e of candidates(x, z)) {
      if (e === self) continue;
      if (x < e.minX || x > e.maxX || z < e.minZ || z > e.maxZ) continue;
      if (pointInRing(x, z, e.ring)) return e;
    }
    return null;
  };

  const wallPos = [], wallCol = [], wallIdx = [];
  const parPos = [], parCol = [], parIdx = [];
  const roofPos = [], roofCol = [], roofIdx = [];
  const winPos = [], winCol = [], winIdx = [];
  const doorPos = [], doorCol = [], doorIdx = [];
  const footprints = [];
  const stats = { flat: 0, pitched: 0, partyEdges: 0, partialPartyEdges: 0 };

  for (const e of entries) {
    const { id, ring, props, t, baseY, bottomY, h } = e;
    const edges = edgeGeoms(ring);
    if (edges.length < 3) continue;
    const floors = floorCount(props, h);
    const wallColor = wallColorFor(props, id);
    const winTint = windowTintFor(id);
    const isGarage = t === 'garage' || t === 'shed';
    const wallTop = e.solidTop;

    // Vicino sul lato: 2 campioni su 3 appena fuori dal lato nello STESSO edificio → muro in comune.
    const neighbourOf = (g) => {
      const seen = new Map();
      for (const s of [0.25, 0.5, 0.75]) {
        const n = buildingAt(g.x0 + g.tx * g.L * s + g.nx * 0.15, g.z0 + g.tz * g.L * s + g.nz * 0.15, e);
        if (n) seen.set(n, (seen.get(n) || 0) + 1);
      }
      for (const [n, c] of seen) if (c >= 2) return n;
      return null;
    };

    let front = null;
    const ext = [];
    for (const g of edges) {
      const n = neighbourOf(g);
      g.flip = needsFlip(g);
      if (!n) { ext.push(g); if (!front || g.L > front.L) front = g; continue; }
      // Muro in comune: il vicino copre il lato fino alla SUA quota; sopra, questo edificio è
      // esposto (prima restava un buco sul fianco della casa più alta). Stesso colore del muro.
      stats.partyEdges++;
      const y0 = Math.max(bottomY, n.solidTop);
      if (wallTop - y0 > 0.05) {
        stats.partialPartyEdges++;
        const x1 = g.x0 + g.tx * g.L, z1 = g.z0 + g.tz * g.L;
        pushQuad(wallPos, wallCol, wallIdx, [g.x0, y0, g.z0], [x1, y0, z1], [x1, wallTop, z1], [g.x0, wallTop, g.z0], wallColor, g.flip);
      }
    }

    for (let ei = 0; ei < ext.length; ei++) {
      const g = ext[ei];
      const isFrontEdge = g === front;
      // Un lato lungo quanto una via diventa N case a schiera: colore, quota del piano terra
      // (campionata LOCALMENTE, non sulla mediana di tutto l'edificio — è quello che mandava le
      // finestre "in cantina" dove il terreno scende) e porta propri per ognuna.
      const segs = isGarage ? [g] : splitEdge(g, `${id}:e${ei}`);
      const multi = segs.length > 1;
      for (const seg of segs) {
        const flip = seg.flip;
        const x1 = seg.x0 + seg.tx * seg.L, z1 = seg.z0 + seg.tz * seg.L;
        const segColor = multi ? segWallColor(props, seg.key) : wallColor;
        // Campionato 0,5 m DENTRO la pianta (contro la normale), non sul filo del muro: sul filo,
        // per una casa in riva al mare, si può finire a leggere la quota del MARE (-16 m misurato,
        // non un limite teorico) invece del terreno sotto la casa. Il tetto (`clamp`) resta comunque
        // ±3 m dalla mediana di tutto l'edificio: un segmento non può "sprofondare" per un campione
        // comunque sbagliato.
        const midX = seg.x0 + seg.tx * seg.L * 0.5, midZ = seg.z0 + seg.tz * seg.L * 0.5;
        const rawLocal = multi ? levelIndex.sampleColumn(midX - seg.nx * 0.5, midZ - seg.nz * 0.5).height : baseY;
        const segBaseY = Math.max(baseY - 3, Math.min(baseY + 3, rawLocal));
        const segBottomY = multi ? segBaseY - 1.0 : bottomY;
        pushQuad(wallPos, wallCol, wallIdx, [seg.x0, segBottomY, seg.z0], [x1, segBottomY, z1], [x1, wallTop, z1], [seg.x0, wallTop, seg.z0], segColor, flip);
        if (e.flat) {
          // faccia interna del parapetto (verso la terrazza), un po' più scura: in ombra propria
          pushQuad(parPos, parCol, parIdx, [seg.x0, e.top, seg.z0], [x1, e.top, z1], [x1, wallTop, z1], [seg.x0, wallTop, seg.z0], segColor, !flip, 0.8);
        }

        if (isGarage) continue;
        const margin = 0.3;
        const usable = seg.L - margin * 2;
        if (usable < 0.5) continue;
        const segWinTint = multi ? windowTintFor(seg.key) : winTint;
        const winSpacing = floors >= 3 ? 2.0 : 2.3;
        for (let floor = 0; floor < floors; floor++) {
          const yC = segBaseY + floor * LEVEL_H + 1.4;
          if (yC + 0.55 > e.top - 0.2) continue;
          const nWin = Math.max(1, Math.floor(usable / winSpacing));
          for (let k = 0; k < nWin; k++) {
            const s = margin + ((k + 0.5) / nWin) * usable;
            if (isFrontEdge && floor === 0 && Math.abs(s - seg.L * 0.5) < 0.9) continue; // spazio per la porta
            const ox = seg.x0 + seg.tx * s + seg.nx * 0.05, oz = seg.z0 + seg.tz * s + seg.nz * 0.05;
            const ux = seg.tx * 0.4, uz = seg.tz * 0.4, hh = 0.5;
            pushQuadRGB(winPos, winCol, winIdx,
              [ox - ux, yC - hh, oz - uz], [ox + ux, yC - hh, oz + uz],
              [ox + ux, yC + hh, oz + uz], [ox - ux, yC + hh, oz - uz], segWinTint, flip);
          }
        }
        if (isFrontEdge) {
          const ox = seg.x0 + seg.tx * seg.L * 0.5 + seg.nx * 0.05, oz = seg.z0 + seg.tz * seg.L * 0.5 + seg.nz * 0.05;
          const ux = seg.tx * 0.5, uz = seg.tz * 0.5;
          pushQuad(doorPos, doorCol, doorIdx,
            [ox - ux, segBaseY, oz - uz], [ox + ux, segBaseY, oz + uz],
            [ox + ux, segBaseY + 2, oz + uz], [ox - ux, segBaseY + 2, oz - uz], DOOR_COLOR, flip);
        }
      }
    }

    // ---- tetto
    let pitched = null;
    if (!e.flat) pitched = skeletonRoof(e.b.r, e.top, e.slope);
    if (pitched) {
      const hex = e.t === 'church' || e.t === 'cathedral' ? CHURCH_ROOF : pal.pitched[Math.abs(id * 13 + 3) % pal.pitched.length];
      _c.setHex(hex);
      const rb = roofPos.length / 3;
      for (const p of pitched.pts) {
        roofPos.push(p.x, p.y, p.z);
        // falde leggermente più chiare verso il colmo: si leggono le pendenze anche controluce
        const k = 0.88 + 0.12 * Math.min(1, (p.y - e.top) / 1.5 + 0.3);
        roofCol.push(_c.r * k, _c.g * k, _c.b * k);
      }
      for (const tr of pitched.tris) roofIdx.push(rb + tr[0], rb + tr[1], rb + tr[2]);
      stats.pitched++;
    } else {
      _c.setHex(pal.flat[Math.abs(id * 13 + 3) % pal.flat.length]);
      const rb = roofPos.length / 3;
      for (const p of ring) { roofPos.push(p.x, e.top, p.z); roofCol.push(_c.r, _c.g, _c.b); }
      for (const tr of upTriangles(ring)) roofIdx.push(rb + tr[0], rb + tr[1], rb + tr[2]);
      stats.flat++;
    }

    const vox = voxelizeFootprint(ring, e);
    footprints.push({ id, ...vox, minX: e.minX, maxX: e.maxX, minZ: e.minZ, maxZ: e.maxZ, minY: bottomY, maxY: e.top });
  }

  const solidCandidates = buildIndex(footprints);
  /** La cella voxel in (x,z) è dentro un edificio? Stessa griglia della pianta: collisione esatta. */
  function solidAt(x, z) {
    for (const f of solidCandidates(x, z)) {
      if (x < f.originX || z < f.originZ) continue;
      const i = Math.floor((x - f.originX) / VOXEL), j = Math.floor((z - f.originZ) / VOXEL);
      if (i < f.W && j < f.H && f.grid[j * f.W + i]) return true;
    }
    return false;
  }

  function addMesh(pos, col, idx, name, doubleSide = false) {
    if (!idx.length) return;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
      vertexColors: true, flatShading: true, side: doubleSide ? THREE.DoubleSide : THREE.FrontSide,
    }));
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  addMesh(wallPos, wallCol, wallIdx, 'buildings-walls');
  addMesh(parPos, parCol, parIdx, 'buildings-parapets');
  // tetti a doppia faccia: le gronde sporgono e si vedono anche da sotto
  addMesh(roofPos, roofCol, roofIdx, 'buildings-roofs', true);
  addMesh(winPos, winCol, winIdx, 'buildings-windows');
  addMesh(doorPos, doorCol, doorIdx, 'buildings-doors');

  return {
    group,
    count: footprints.length,
    footprints,
    solidAt,
    insideBuilding: (x, z) => !!buildingAt(x, z),
    stats,
  };
}
