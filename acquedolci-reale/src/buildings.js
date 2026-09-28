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
  constructor() { this.p = []; this.u = []; this.c = []; }
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
    const foot = Math.min(b.b, b.g) - 0.4; // interrato di poco: niente fessure sui lotti in pendenza
    col.setRGB(b.c[0] / 255, b.c[1] / 255, b.c[2] / 255, THREE.SRGBColorSpace);
    const windows = !NO_WINDOWS.has(b.t) && b.h >= 2.6;
    const wbuf = windows ? walls[Math.floor(hash(b.id) * UPPER)] : plain;
    const gbuf = windows ? walls[UPPER] : plain;
    let cx = 0, cz = 0; for (const [x, z] of pts) { cx += x; cz += z; } cx /= pts.length; cz /= pts.length;
    const tile = tileFor(cx, cz);
    const rb = roofBuf(tile);
    const isCanopy = b.t === 'B007';

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
      const u0 = s / BAY, u1 = (s + L) / BAY; s += L;
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
    if (b.k > 0 && b.ax) {
      // a falde: colmo lungo l'asse del rettangolo orientato, gronda a `top`, colmo a top+k
      const ux = b.ax[0], uz = b.ax[1], vx = -uz, vz = ux;
      let p0 = Infinity, p1 = -Infinity, q0 = Infinity, q1 = -Infinity;
      for (const [x, z] of pts) { const p = x * ux + z * uz, q = x * vx + z * vz; p0 = Math.min(p0, p); p1 = Math.max(p1, p); q0 = Math.min(q0, q); q1 = Math.max(q1, q); }
      const o = 0.3; p0 -= o; p1 += o; q0 -= o; q1 += o;
      const qm = (q0 + q1) / 2, yr = top + b.k, ye = top - 0.12;
      const P = (p, q, y) => [p * ux + q * vx, y, p * uz + q * vz];
      const E00 = P(p0, q0, ye), E10 = P(p1, q0, ye), E01 = P(p0, q1, ye), E11 = P(p1, q1, ye);
      const R0 = P(p0, qm, yr), R1 = P(p1, qm, yr);
      const U = (v) => uvIn(tile, v[0], v[2]);
      for (const [a, bb, c] of [[E00, E10, R1], [E00, R1, R0], [E11, E01, R0], [E11, R0, R1]]) rb.tri(a, bb, c, U(a), U(bb), U(c));
      // timpani: triangoli di muro sotto il colmo, colore della facciata
      plain.tri(E00, R0, E01, null, null, null, col);
      plain.tri(E10, E11, R1, null, null, null, col);
    } else {
      // piano: la pianta triangolata alla quota del tetto, foto vera sopra
      const shape = pts.map(([x, z]) => new THREE.Vector2(x, z));
      let tris;
      try { tris = THREE.ShapeUtils.triangulateShape(shape, []); } catch { tris = []; }
      for (const [i, j, k] of tris) {
        const a = [pts[i][0], top, pts[i][1]], bb = [pts[j][0], top, pts[j][1]], c = [pts[k][0], top, pts[k][1]];
        rb.tri(a, bb, c, uvIn(tile, a[0], a[2]), uvIn(tile, bb[0], bb[2]), uvIn(tile, c[0], c[2]));
      }
    }
    footprints.push({ pts, top: top + (b.k || 0), minX: Math.min(...pts.map((p) => p[0])), maxX: Math.max(...pts.map((p) => p[0])), minZ: Math.min(...pts.map((p) => p[1])), maxZ: Math.max(...pts.map((p) => p[1])), canopy: isCanopy });
  }

  walls.forEach((w, i) => { const g = w.geometry(); if (g) { const m = new THREE.Mesh(g, facadeMats[i]); m.castShadow = m.receiveShadow = true; group.add(m); } });
  const pg = plain.geometry();
  if (pg) { const m = new THREE.Mesh(pg, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })); m.castShadow = m.receiveShadow = true; group.add(m); }
  for (const [file, buf] of roofs) {
    const g = buf.geometry(); if (!g) continue;
    // la foto porta già la luce del giorno del volo: materiale non illuminato, colori veri
    const m = new THREE.Mesh(g, orthoMaterial(textures.get(file)));
    m.receiveShadow = true;
    group.add(m);
  }
  return { group, footprints };
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
