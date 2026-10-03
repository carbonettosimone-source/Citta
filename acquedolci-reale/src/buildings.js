/**
 * Edifici: pianta DBTR estrusa all'altezza misurata dal LiDAR. Il tetto è la foto vera: ogni tetto
 * è texturizzato con l'ortofoto 2022 proiettata dall'alto, quindi coppi, terrazze, pannelli solari
 * e cisterne sono quelli reali di QUEL tetto. Le facciate usano il modulo campata×piano (facade.js)
 * tinto col colore dell'edificio.
 *
 * Il sistema di override per strada (street-overrides.js) sovrascrive la selezione del materiale
 * di facciata per gli edifici censiti lungo i segmenti stradali configurati: finestre più alte,
 * piano terra con vetrina, balconi a densità superiore ecc.
 */
import * as THREE from 'three';
import { BAY, FLOOR, MAT_IDX } from './facade.js';
import { orthoMaterial } from './ortho.js';
import { isPlazaBuilding } from './plaza-buildings.js';
import { getSegmentOverride } from './street-overrides.js';

const NO_WINDOWS = new Set(['B006', 'B007', 'B009', 'B010']); // baracca, tettoia, cabina, serra

function hash(n) { let h = Math.imul(n, 2654435761) >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822519) >>> 0; h ^= h >>> 13; return (h >>> 0) / 4294967296; }

class Buf {
  constructor() { this.p = []; this.u = []; this.c = []; this.r = []; }
  tri(a, b, c, ua, ub, uc, col) {
    this.p.push(...a, ...b, ...c);
    if (ua) this.u.push(...ua, ...ub, ...uc);
    if (col) for (let i = 0; i < 3; i++) this.c.push(col.r, col.g, col.b);
  }
  geometry() {
    if (!this.p.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    if (this.u.length) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    if (this.c.length) g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    if (this.r.length) g.setAttribute('ruv', new THREE.Float32BufferAttribute(this.r, 3));
    g.computeVertexNormals();
    g.computeBoundingSphere();
    return g;
  }
}

export function buildBuildings({ model, orthoMeta, textures, facadeMats }) {
  const [OX, OY] = model.origin;
  const group = new THREE.Group();
  group.name = 'buildings';
  const walls = facadeMats.map(() => new Buf());
  const plain = new Buf(); // baracche, tettoie, timpani: senza finestre
  const roofs = new Map(); // file ortofoto → Buf
  const core = orthoMeta.tiles.filter((t) => t.level === 'core');
  const base = orthoMeta.tiles.find((t) => t.level === 'base');
  const col = new THREE.Color();
  const footprints = [];
  const roofItems = [];
  const balconies = [];
  const cornices = []; // { pts, y, col } - marcapiani decorativi per edifici con override

  /** tile di ortofoto che contiene il punto locale (X,Z) e la sua uv */
  function tileFor(X, Z) {
    const x = X + OX, y = OY - Z;
    return core.find((t) => x >= t.xmin && x < t.xmax && y >= t.ymin && y < t.ymax) || base;
  }
  const uvIn = (t, X, Z) => [((X + OX) - t.xmin) / (t.xmax - t.xmin), ((OY - Z) - t.ymin) / (t.ymax - t.ymin)];
  const roofBuf = (t) => { if (!roofs.has(t.file)) roofs.set(t.file, new Buf()); return roofs.get(t.file); };

  for (const b of model.buildings) {
    const pts = [];
    for (let i = 0; i < b.r.length; i += 2) pts.push([b.r[i], b.r[i + 1]]);
    if (pts.length < 3) continue;
    const top = b.g + b.h;
    if (b.lm || isPlazaBuilding(b.id)) {
      // modellato a parte (landmarks.js o plaza-buildings.js): qui resta solo l'ingombro per le collisioni
      footprints.push({ pts, top, minX: Math.min(...pts.map((p) => p[0])), maxX: Math.max(...pts.map((p) => p[0])), minZ: Math.min(...pts.map((p) => p[1])), maxZ: Math.max(...pts.map((p) => p[1])), canopy: false });
      continue;
    }
    const foot = Math.min(b.b, b.g) - 0.4; // interrato di poco: niente fessure sui lotti in pendenza
    col.setRGB(b.c[0] / 255, b.c[1] / 255, b.c[2] / 255, THREE.SRGBColorSpace);
    const windows = !NO_WINDOWS.has(b.t) && b.h >= 2.6;
    let cx = 0, cz = 0; for (const [x, z] of pts) { cx += x; cz += z; } cx /= pts.length; cz /= pts.length;
    const tile = tileFor(cx, cz);
    const rb = roofBuf(tile);
    const isCanopy = b.t === 'B007';

    // --- override per via/segmento ---
    const ov = windows ? getSegmentOverride(b.id, cx, cz) : null;

    // selezione materiale facciata superiore:
    //   con override + windowStyle 'tall' → varianti con finestra alta (indici TALL_*)
    //   altrimenti → variante standard scelta per hash
    let wbufIdx;
    if (ov?.windowStyle === 'tall') {
      const shutHue = ov.shutterColor === 'green' ? MAT_IDX.TALL_GREEN : ov.shutterColor === 'brown' ? MAT_IDX.TALL_BROWN : MAT_IDX.TALL_GREY;
      wbufIdx = shutHue;
    } else {
      // indici 0-3 (MAX = facadeMats.length - 5 per non sconfinare nel piano terra e nelle nuove varianti)
      const baseUpper = 4; // quante varianti "standard" ci sono (0,1,2,3)
      wbufIdx = Math.floor(hash(b.id) * baseUpper);
    }
    const wbuf = windows ? walls[wbufIdx] : plain;

    // selezione materiale piano terra:
    //   con override groundFloor 'shops' → vetrina (SHOP)
    //   con override groundFloor 'mixed' → porta+vetrina (MIXED_GF)
    //   altrimenti → saracinesca (GROUND)
    let gbufIdx = MAT_IDX.GROUND;
    if (ov?.groundFloor === 'shops') gbufIdx = MAT_IDX.SHOP;
    else if (ov?.groundFloor === 'mixed') gbufIdx = MAT_IDX.MIXED_GF;
    const gbuf = windows ? walls[gbufIdx] : plain;

    // stile dei balconi per edificio: 0 nessuno, 1 ogni campata, 2 a campate alterne
    const hb = hash(b.id * 3 + 1);
    let balconyStyle;
    if (ov) {
      // con override: la soglia per "nessun balcone" scende molto (quasi tutti ce l'hanno)
      balconyStyle = hb < (1 - ov.balconyRate) ? 0 : hb < 0.6 ? 1 : 2;
    } else {
      balconyStyle = hb < 0.15 ? 0 : hb < 0.65 ? 1 : 2;
    }

    // --- muri: una parete per lato, uv in campate e piani a partire dal suolo al centro
    let s = 0;
    for (let i = 0; i < pts.length; i++) {
      const [x0, z0] = pts[i], [x1, z1] = pts[(i + 1) % pts.length];
      const L = Math.hypot(x1 - x0, z1 - z0);
      if (L < 0.05) continue;
      if (isCanopy) {
        // tettoia: solo il bordo della lastra, aperta sotto
        const y0 = top - 0.25;
        plain.tri([x0, y0, z0], [x1, y0, z1], [x1, top, z1], null, null, null, col);
        plain.tri([x0, y0, z0], [x1, top, z1], [x0, top, z0], null, null, null, col);
        continue;
      }
      const s0 = s;
      const u0 = s / BAY, u1 = (s + L) / BAY; s += L;
      const open = b.e ? b.e[i] : 30;
      // balconi sulle facciate libere (strada o cortile davanti ≥ 4 m), allineati alle aperture della
      // texture: le campate contano dall'inizio del perimetro, come le uv
      if (windows && open >= 4 && b.f >= 2 && L >= 2.5 && balconyStyle) {
        const tx = (x1 - x0) / L, tz = (z1 - z0) / L;
        let nx = -tz, nz = tx;
        if (insideRing(pts, (x0 + x1) / 2 + nx * 0.1, (z0 + z1) / 2 + nz * 0.1)) { nx = -nx; nz = -nz; }
        for (let j = Math.ceil(s0 / BAY - 0.5); ; j++) {
          const t = (j + 0.5) * BAY - s0;
          if (t > L - 0.9) break;
          if (t < 0.9 || (balconyStyle === 2 && j % 2)) continue;
          for (let k = 1; k < b.f; k++) {
            const y = b.g + k * FLOOR;
            if (y + 1.2 > top) break;
            balconies.push({ x: x0 + tx * t + nx * 0.45, z: z0 + tz * t + nz * 0.45, y, ang: Math.atan2(nx, nz) });
          }
        }
      }
      if (open < 0.4 && windows) {
        // muro in comune col vicino: parete cieca, niente finestre dipinte sul muro divisorio
        plain.tri([x0, foot, z0], [x1, foot, z1], [x1, top, z1], null, null, null, col);
        plain.tri([x0, foot, z0], [x1, top, z1], [x0, top, z0], null, null, null, col);
        continue;
      }
      // piano terra (saracinesche e portoni) fino al primo marcapiano, finestre sopra
      const split = Math.min(top, b.g + FLOOR);
      const quad = (buf, ya, yb) => {
        if (yb - ya < 0.02) return;
        const v0 = (ya - b.g) / FLOOR, v1 = (yb - b.g) / FLOOR;
        const A = [x0, ya, z0], B = [x1, ya, z1], C = [x1, yb, z1], D = [x0, yb, z0];
        buf.tri(A, B, C, [u0, v0], [u1, v0], [u1, v1], col);
        buf.tri(A, C, D, [u0, v0], [u1, v1], [u0, v1], col);
      };
      quad(gbuf, foot, split);
      quad(wbuf, split, top);
      // marcapiano decorativo: una fascia sporgente di 7 cm ogni piano, solo con override cornices
      if (ov?.cornices && windows && open >= 0.4) {
        for (let k = 1; k < b.f; k++) {
          const y = b.g + k * FLOOR;
          if (y >= top - 0.3) break;
          cornices.push({ x0, z0, x1, z1, y, col: col.clone() });
        }
      }
    }

    // --- tetto
    let peak = top;
    if (b.roof) {
      // a padiglione su qualunque pianta (straight skeleton precalcolato): ogni vertice sale di
      // t·tan(pendenza), t = distanza dal bordo. Sopra, la foto vera di quel tetto.
      const V = b.roof.v, tanP = b.roof.tan;
      const vert = (k) => [V[k * 3], top + V[k * 3 + 2] * tanP, V[k * 3 + 1]];
      for (const face of b.roof.f) {
        if (face.length < 3) continue;
        const fp = face.map(vert);
        let tris;
        try { tris = THREE.ShapeUtils.triangulateShape(fp.map((p) => new THREE.Vector2(p[0], p[2])), []); } catch { continue; }
        // riferimento della falda per i coppi: e lungo la gronda (orizzontale), s su per la pendenza
        const fr = roofFrame(fp);
        for (const [i, j, k] of tris) {
          let a = fp[i], c = fp[j], d = fp[k];
          // falda rivolta verso l'alto: (c−a)×(d−a) con componente y positiva
          if ((c[2] - a[2]) * (d[0] - a[0]) - (c[0] - a[0]) * (d[2] - a[2]) < 0) [c, d] = [d, c];
          rb.tri(a, c, d, uvIn(tile, a[0], a[2]), uvIn(tile, c[0], c[2]), uvIn(tile, d[0], d[2]));
          // terzo valore: 1 + tinta dell'edificio (0..1), per il cotto procedurale
          for (const q of [a, c, d]) rb.r.push(...(fr ? [fr.eu(q), fr.sv(q), 1 + hash(b.id * 7 + 3) * 0.999] : [0, 0, 0]));
          peak = Math.max(peak, a[1], c[1], d[1]);
        }
      }
    } else {
      // terrazza: la pianta triangolata alla quota del tetto, foto vera sopra
      const shape = pts.map(([x, z]) => new THREE.Vector2(x, z));
      let tris;
      try { tris = THREE.ShapeUtils.triangulateShape(shape, []); } catch { tris = []; }
      for (const [i, j, k] of tris) {
        const a = [pts[i][0], top, pts[i][1]], bb = [pts[j][0], top, pts[j][1]], c = [pts[k][0], top, pts[k][1]];
        rb.tri(a, bb, c, uvIn(tile, a[0], a[2]), uvIn(tile, bb[0], bb[2]), uvIn(tile, c[0], c[2]));
        rb.r.push(0, 0, 0, 0, 0, 0, 0, 0, 0); // terrazza: resta la foto (cisterne, pannelli, lastrici)
      }
      if (b.pp) {
        // parapetto da 1 m sul filo della facciata, colore dell'intonaco un filo più scuro
        const pc = col.clone().multiplyScalar(0.92);
        for (let i = 0; i < pts.length; i++) {
          const [x0, z0] = pts[i], [x1, z1] = pts[(i + 1) % pts.length];
          plain.tri([x0, top, z0], [x1, top, z1], [x1, top + 1, z1], null, null, null, pc);
          plain.tri([x0, top, z0], [x1, top + 1, z1], [x0, top + 1, z0], null, null, null, pc);
        }
        peak = top + 1;
      }
    }
    // volumi sul tetto: casotti scala misurati dal LiDAR, cisterne, solari termici, antenne
    if (b.x) {
      let ang = 0, best = 0;
      for (let i = 0; i < pts.length; i++) { const [x0, z0] = pts[i], [x1, z1] = pts[(i + 1) % pts.length]; const L = Math.hypot(x1 - x0, z1 - z0); if (L > best) { best = L; ang = Math.atan2(x1 - x0, z1 - z0); } }
      for (const [type, x, z, hh] of b.x) roofItems.push({ type, x, z, y: b.roof ? peak : top, h: hh, ang, col: col.clone() });
    }
    footprints.push({ pts, top: peak, minX: Math.min(...pts.map((p) => p[0])), maxX: Math.max(...pts.map((p) => p[0])), minZ: Math.min(...pts.map((p) => p[1])), maxZ: Math.max(...pts.map((p) => p[1])), canopy: isCanopy });
  }

  walls.forEach((w, i) => { const g = w.geometry(); if (g) { const m = new THREE.Mesh(g, facadeMats[i]); m.castShadow = m.receiveShadow = true; group.add(m); } });
  const pg = plain.geometry();
  if (pg) { const m = new THREE.Mesh(pg, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })); m.castShadow = m.receiveShadow = true; group.add(m); }
  for (const [file, buf] of roofs) {
    const g = buf.geometry(); if (!g) continue;
    // la foto porta già la luce del giorno del volo: materiale non illuminato, colori veri
    const m = new THREE.Mesh(g, orthoMaterial(textures.get(file), { roof: true }));
    m.receiveShadow = true;
    group.add(m);
  }
  group.add(buildRoofItems(roofItems));
  group.add(buildBalconies(balconies));
  if (cornices.length) group.add(buildCornices(cornices));
  return { group, footprints };
}

/**
 * Riferimento di una falda: normale dal primo triangolo non degenere, e = orizzontale lungo la
 * gronda, s = in salita lungo la falda. Coordinate in metri: i coppi (ortho.js) corrono lungo s.
 */
function roofFrame(fp) {
  const n = new THREE.Vector3();
  for (let i = 1; i + 1 < fp.length && n.lengthSq() < 1e-6; i++) {
    const A = new THREE.Vector3(...fp[0]), B = new THREE.Vector3(...fp[i]), C = new THREE.Vector3(...fp[i + 1]);
    n.crossVectors(B.sub(A), C.sub(A));
  }
  if (n.lengthSq() < 1e-6) return null;
  n.normalize(); if (n.y < 0) n.negate();
  if (n.y > 0.995) return null; // quasi piana: niente coppi
  const e = new THREE.Vector3(0, 1, 0).cross(n).normalize(), sl = new THREE.Vector3().crossVectors(n, e).normalize();
  return { eu: (q) => q[0] * e.x + q[1] * e.y + q[2] * e.z, sv: (q) => q[0] * sl.x + q[1] * sl.y + q[2] * sl.z };
}

/** Collisione: griglia a secchi sulle piante, punto-in-poligono. */
export function makeCollider(footprints) {
  const CELL = 16, grid = new Map();
  for (const f of footprints) {
    if (f.canopy) continue;
    for (let i = Math.floor(f.minX / CELL); i <= Math.floor(f.maxX / CELL); i++) for (let j = Math.floor(f.minZ / CELL); j <= Math.floor(f.maxZ / CELL); j++) {
      const k = `${i},${j}`; if (!grid.has(k)) grid.set(k, []); grid.get(k).push(f);
    }
  }
  return function inside(x, z) {
    for (const f of grid.get(`${Math.floor(x / CELL)},${Math.floor(z / CELL)}`) || []) {
      if (x < f.minX || x > f.maxX || z < f.minZ || z > f.maxZ) continue;
      let ins = false;
      const P = f.pts;
      for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > z) !== (P[j][1] > z) && x < ((P[j][0] - P[i][0]) * (z - P[i][1])) / (P[j][1] - P[i][1]) + P[i][0]) ins = !ins;
      if (ins) return true;
    }
    return false;
  };
}

/** Casotti, cisterne, solari termici e antenne sulle terrazze: InstancedMesh, poche draw call. */
function buildRoofItems(items) {
  const g = new THREE.Group();
  g.name = 'roof-items';
  const byType = [0, 1, 2, 3].map((t) => items.filter((i) => i.type === t));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const make = (geo, mat, list, place, colorOf) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((it, i) => { place(it); im.setMatrixAt(i, m); if (colorOf) im.setColorAt(i, colorOf(it)); });
    im.castShadow = im.receiveShadow = true;
    g.add(im);
  };
  // casotto scala: volume intonacato, alto quanto misurato dal LiDAR
  const box = new THREE.BoxGeometry(1, 1, 1); box.translate(0, 0.5, 0);
  make(box, new THREE.MeshLambertMaterial(), byType[0], (it) => {
    q.setFromAxisAngle(up, it.ang); m.compose(p.set(it.x, it.y, it.z), q, s.set(2.6, it.h || 2.4, 3.0));
  }, (it) => it.col);
  // cisterna: serbatoio in polietilene, bianco o blu
  const tank = new THREE.CylinderGeometry(0.55, 0.55, 1.2, 12); tank.translate(0, 0.6, 0);
  const tc = [new THREE.Color(0xe8e8e2), new THREE.Color(0x3a6ea8), new THREE.Color(0x2b2b2b)];
  make(tank, new THREE.MeshLambertMaterial(), byType[1], (it) => {
    q.setFromAxisAngle(up, 0); m.compose(p.set(it.x, it.y, it.z), q, s.set(1, 1, 1));
  }, (it) => tc[Math.abs(Math.round(it.x * 7 + it.z * 13)) % tc.length]);
  // solare termico: pannello inclinato a sud con il serbatoio orizzontale sopra
  const sol = new THREE.BoxGeometry(2, 0.08, 1.2); sol.rotateX(-0.7); sol.translate(0, 0.7, 0);
  make(sol, new THREE.MeshLambertMaterial({ color: 0x1d2a3a }), byType[2], (it) => {
    q.setFromAxisAngle(up, 0); m.compose(p.set(it.x, it.y, it.z), q, s.set(1, 1, 1));
  });
  // antenna TV
  const ant = new THREE.CylinderGeometry(0.03, 0.03, 3, 4); ant.translate(0, 1.5, 0);
  make(ant, new THREE.MeshLambertMaterial({ color: 0x777777 }), byType[3], (it) => {
    m.compose(p.set(it.x, it.y, it.z), q.identity(), s.set(1, 1, 1));
  });
  return g;
}

function insideRing(pts, x, z) {
  let ins = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) if ((pts[i][1] > z) !== (pts[j][1] > z) && x < ((pts[j][0] - pts[i][0]) * (z - pts[i][1])) / (pts[j][1] - pts[i][1]) + pts[i][0]) ins = !ins;
  return ins;
}

/**
 * Marcapiani decorativi (cornices): fasce sporgenti di ~7 cm a ogni intersezione piano/parete.
 * Costruite come geometry piatta (top + fronte della modanatura), colore leggermente più scuro
 * rispetto all'intonaco dell'edificio per dare ombra e leggibilità alla sezione del palazzo.
 */
function buildCornices(list) {
  const pos = [], colr = [];
  const c = new THREE.Color();
  for (const { x0, z0, x1, z1, y, col } of list) {
    const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz);
    if (L < 0.05) continue;
    const nx = -dz / L, nz = dx / L; // normale esterna
    const T = 0.08, H = 0.10; // sporgenza e altezza della modanatura
    // colore leggermente più scuro
    c.set(col).multiplyScalar(0.88);
    // piano superiore della modanatura (top)
    const A = [x0, y, z0], B = [x1, y, z1], C = [x1 + nx * T, y, z1 + nz * T], D = [x0 + nx * T, y, z0 + nz * T];
    // faccia frontale verticale
    const E = [x0 + nx * T, y - H, z0 + nz * T], F = [x1 + nx * T, y - H, z1 + nz * T];
    for (const tri of [[A, B, C, D], [C, D, E, F]].flatMap(([p0, p1, p2, p3]) => [[p0, p1, p2], [p0, p2, p3]])) {
      for (const pt of tri) { pos.push(...pt); colr.push(c.r, c.g, c.b); }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  mesh.castShadow = mesh.receiveShadow = true;
  mesh.name = 'cornices';
  return mesh;
}

/**
 * Balcone siciliano: soletta in calcestruzzo con nervatura, ringhiera in ferro battuto con bacchette
 * verticali ravvicinate e corrimano. La soletta sporge 90 cm dalla facciata (aggetto tipico per un
 * balcone abitabile). Le bacchette sono più fitte di una ringhiera generica (ogni ~9 cm), con
 * traverso orizzontale basso e corrimano a sezione rettangolare.
 */
function buildBalconies(list) {
  const g = new THREE.Group(); g.name = 'balconies';
  if (!list.length) return g;

  // soletta: più spessa sul bordo frontale (nervatura), colorazione calcestruzzo chiaro
  const slab = new THREE.BoxGeometry(1.8, 0.14, 0.95); slab.translate(0, 0.07, 0);
  // nervatura frontale (fascia più spessa sul fronte)
  const nerv = new THREE.BoxGeometry(1.8, 0.08, 0.08); nerv.translate(0, -0.04, 0.435);

  // corrimano orizzontale
  const handrail = new THREE.BoxGeometry(1.84, 0.06, 0.06); handrail.translate(0, 0.92, 0.44);
  // traverso basso
  const lowBar = new THREE.BoxGeometry(1.84, 0.04, 0.04); lowBar.translate(0, 0.14, 0.44);

  const sideL = new THREE.BoxGeometry(0.04, 0.92, 0.96); sideL.translate(-0.9, 0.46, 0);
  const sideR = sideL.clone(); sideR.translate(1.8, 0, 0);

  const concrete = new THREE.MeshLambertMaterial({ color: 0xd2cec4 });
  const nervMat  = new THREE.MeshLambertMaterial({ color: 0xc4c0b6 });
  const handrailMat = new THREE.MeshLambertMaterial({ color: 0x2a2e2c });

  // ringhiera a bacchette verticali ravvicinate: corrimano + traverso + montanti ogni ~9 cm
  // il canvas è wide per la ripetizione lungo la larghezza del balcone
  const cv = document.createElement('canvas'); cv.width = 192; cv.height = 80;
  const c2 = cv.getContext('2d');
  c2.clearRect(0, 0, 192, 80);
  c2.fillStyle = '#fff';
  // corrimano in cima
  c2.fillRect(0, 0, 192, 7);
  // traverso basso
  c2.fillRect(0, 68, 192, 6);
  // montanti verticali ogni ~9 px (scala: 192px = ~1.8 m → ~1 px/cm)
  for (let x = 3; x < 192; x += 9) c2.fillRect(x, 0, 3, 74);
  const bars = new THREE.CanvasTexture(cv); bars.colorSpace = THREE.SRGBColorSpace;
  const iron = new THREE.MeshLambertMaterial({ color: 0x2e3230, map: bars, alphaTest: 0.45, side: THREE.DoubleSide, transparent: true });

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);

  // ringhiera frontale: piano in ferro, tettoia del balcone
  const railFront = new THREE.BoxGeometry(1.8, 0.78, 0.04); railFront.translate(0, 0.53, 0.44);

  for (const [geo, mat] of [
    [slab, concrete], [nerv, nervMat],
    [handrail, handrailMat], [lowBar, handrailMat],
    [sideL, iron], [sideR, iron], [railFront, iron],
  ]) {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((b, i) => { q.setFromAxisAngle(up, b.ang); m.compose(p.set(b.x, b.y, b.z), q, s); im.setMatrixAt(i, m); });
    im.castShadow = true; im.receiveShadow = true;
    g.add(im);
  }
  return g;
}
