/**
 * Edifici: pianta DBTR estrusa all'altezza misurata dal LiDAR. Il tetto è la foto vera: ogni tetto
 * è texturizzato con l'ortofoto 2022 proiettata dall'alto, quindi coppi, terrazze, pannelli solari
 * e cisterne sono quelli reali di QUEL tetto. Le facciate usano il modulo campata×piano (facade.js)
 * tinto col colore dell'edificio.
 */
import * as THREE from 'three';
import { BAY, FLOOR } from './facade.js';
import { orthoMaterial } from './ortho.js';

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
  const UPPER = facadeMats.length - 1; // l'ultimo materiale è il piano terra
  const plain = new Buf(); // baracche, tettoie, timpani: senza finestre
  const roofs = new Map(); // file ortofoto → Buf
  const core = orthoMeta.tiles.filter((t) => t.level === 'core');
  const base = orthoMeta.tiles.find((t) => t.level === 'base');
  const col = new THREE.Color();
  const footprints = [];
  const roofItems = [];
  const balconies = [];

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
    if (b.lm) {
      // modellato a parte in landmarks.js: qui resta solo l'ingombro per le collisioni
      footprints.push({ pts, top, minX: Math.min(...pts.map((p) => p[0])), maxX: Math.max(...pts.map((p) => p[0])), minZ: Math.min(...pts.map((p) => p[1])), maxZ: Math.max(...pts.map((p) => p[1])), canopy: false });
      continue;
    }
    const foot = Math.min(b.b, b.g) - 0.4; // interrato di poco: niente fessure sui lotti in pendenza
    col.setRGB(b.c[0] / 255, b.c[1] / 255, b.c[2] / 255, THREE.SRGBColorSpace);
    const windows = !NO_WINDOWS.has(b.t) && b.h >= 2.6;
    const wbuf = windows ? walls[Math.floor(hash(b.id) * UPPER)] : plain;
    const gbuf = windows ? walls[UPPER] : plain;
    let cx = 0, cz = 0; for (const [x, z] of pts) { cx += x; cz += z; } cx /= pts.length; cz /= pts.length;
    const tile = tileFor(cx, cz);
    const rb = roofBuf(tile);
    const isCanopy = b.t === 'B007';
    // stile dei balconi per edificio: 0 nessuno, 1 ogni campata, 2 a campate alterne
    const hb = hash(b.id * 3 + 1);
    const balconyStyle = hb < 0.15 ? 0 : hb < 0.65 ? 1 : 2; // nelle foto quasi ogni palazzina ha balconi

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
          for (const q of [a, c, d]) rb.r.push(...(fr ? [fr.eu(q), fr.sv(q), 1] : [0, 0, 0]));
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

/** balcone: soletta in aggetto di 90 cm con ringhiera in ferro, davanti alla portafinestra */
function buildBalconies(list) {
  const g = new THREE.Group(); g.name = 'balconies';
  if (!list.length) return g;
  const slab = new THREE.BoxGeometry(1.7, 0.12, 0.9); slab.translate(0, 0.06, 0);
  const rail = new THREE.BoxGeometry(1.7, 0.95, 0.04); rail.translate(0, 0.6, 0.43);
  const sideL = new THREE.BoxGeometry(0.04, 0.95, 0.9); sideL.translate(-0.83, 0.6, 0);
  const sideR = sideL.clone(); sideR.translate(1.66, 0, 0);
  const concrete = new THREE.MeshLambertMaterial({ color: 0xd6d2c8 });
  // ringhiera a bacchette come nelle foto: corrimano, traverso basso e montanti ogni ~11 cm, il resto vuoto
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 64;
  const c2 = cv.getContext('2d'); c2.fillStyle = '#fff';
  c2.fillRect(0, 0, 128, 6); c2.fillRect(0, 56, 128, 4);
  for (let x = 1; x < 128; x += 8) c2.fillRect(x, 0, 2, 60);
  const bars = new THREE.CanvasTexture(cv); bars.colorSpace = THREE.SRGBColorSpace;
  const iron = new THREE.MeshLambertMaterial({ color: 0x3a3e3c, map: bars, alphaTest: 0.5, side: THREE.DoubleSide });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (const [geo, mat] of [[slab, concrete], [rail, iron], [sideL, iron], [sideR, iron]]) {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((b, i) => { q.setFromAxisAngle(up, b.ang); m.compose(p.set(b.x, b.y, b.z), q, s); im.setMatrixAt(i, m); });
    im.castShadow = true; im.receiveShadow = true;
    g.add(im);
  }
  return g;
}
