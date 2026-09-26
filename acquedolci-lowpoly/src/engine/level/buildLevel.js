/**
 * LevelBuilder — dal file livello compilato a geometria navigabile.
 *
 * - Ogni strato è triangolato (earcut) con bordi ricampionati ogni 3 m: le quote seguono il
 *   campo lisciato (strade), il piano di progetto (isolati) o campo+cordolo (marciapiedi).
 * - TriGrid: indice dei triangoli → quota ESATTA della superficie visibile in ogni punto
 *   (camminata, alberi, edifici, scavo del terreno usano la stessa risposta).
 * - Regola unica per i bordi: dove il vicino è più basso si alza una parete fino al vicino.
 *   Ne escono da soli cordoli (15 cm), gradini dei lotti e muri di contenimento.
 */
import * as THREE from 'three';
import earcut from 'earcut';
import { buildHeightField } from '../compiler/heightField.js';

const LAYER_STYLE = {
  car: { color: 'asphalt', lift: 0 },
  alley: { color: 'alley', lift: 0 },
  beach: { color: 'sand', lift: 0 },
  sidewalk: { color: 'sidewalk', lift: 'curb' },
  ped: { color: 'ped', lift: 'curb' },
  yard: { color: 'block', lift: 'curb' },
  green: { color: 'green', lift: 'curb' },
};

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, -0.7], [0.7, -0.7], [-0.7, 0.7]];

const decodeRing = (r, u) => {
  const out = [];
  for (let i = 0; i < r.length; i += 2) out.push({ x: r[i] * u, z: r[i + 1] * u });
  return out;
};

function densify(ring, step) {
  const out = [];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    out.push(a);
    const n = Math.floor(Math.hypot(b.x - a.x, b.z - a.z) / step);
    for (let k = 1; k < n; k++) out.push({ x: a.x + ((b.x - a.x) * k) / n, z: a.z + ((b.z - a.z) * k) / n });
  }
  return out;
}

class TriGrid {
  constructor(cell = 8) {
    this.cell = cell;
    this.map = new Map();
    this.pos = []; // x,y,z per vertice
    this.tri = []; // triple di indici
    this.meta = []; // per triangolo: { layer, poly }
  }
  add(a, b, c, meta) {
    const t = this.tri.length / 3;
    this.tri.push(a, b, c);
    this.meta.push(meta);
    const P = this.pos;
    const minX = Math.min(P[a * 3], P[b * 3], P[c * 3]), maxX = Math.max(P[a * 3], P[b * 3], P[c * 3]);
    const minZ = Math.min(P[a * 3 + 2], P[b * 3 + 2], P[c * 3 + 2]), maxZ = Math.max(P[a * 3 + 2], P[b * 3 + 2], P[c * 3 + 2]);
    for (let i = Math.floor(minX / this.cell); i <= Math.floor(maxX / this.cell); i++) {
      for (let j = Math.floor(minZ / this.cell); j <= Math.floor(maxZ / this.cell); j++) {
        const k = i * 65536 + j;
        let arr = this.map.get(k);
        if (!arr) this.map.set(k, (arr = []));
        arr.push(t);
      }
    }
  }
  query(x, z) {
    const arr = this.map.get(Math.floor(x / this.cell) * 65536 + Math.floor(z / this.cell));
    if (!arr) return null;
    const P = this.pos, T = this.tri;
    for (const t of arr) {
      const a = T[t * 3] * 3, b = T[t * 3 + 1] * 3, c = T[t * 3 + 2] * 3;
      const x1 = P[a], z1 = P[a + 2], x2 = P[b], z2 = P[b + 2], x3 = P[c], z3 = P[c + 2];
      const d = (z2 - z3) * (x1 - x3) + (x3 - x2) * (z1 - z3);
      if (Math.abs(d) < 1e-12) continue;
      const l1 = ((z2 - z3) * (x - x3) + (x3 - x2) * (z - z3)) / d;
      const l2 = ((z3 - z1) * (x - x3) + (x1 - x3) * (z - z3)) / d;
      const l3 = 1 - l1 - l2;
      if (l1 >= -1e-5 && l2 >= -1e-5 && l3 >= -1e-5) {
        return { y: l1 * P[a + 1] + l2 * P[b + 1] + l3 * P[c + 1], ...this.meta[t] };
      }
    }
    return null;
  }
}

/**
 * @param {object} level JSON del compilatore
 * @param {THREE.Scene} scene
 * @param {object} style colori (style.colors) e profilo
 * @param {(x:number,z:number)=>number} demY quota grezza (terreno)
 */
export function buildLevel(level, scene, style, demY) {
  const u = level.unit || 0.1;
  const CURB = level.params?.curb ?? 0.15;
  const hp = level.params?.heightField || { step: 2, sigma: 6, margin: 40 };
  const r = level.rect;
  const field = buildHeightField(demY, { minX: r.minX - hp.margin, maxX: r.maxX + hp.margin, minZ: r.minZ - hp.margin, maxZ: r.maxZ + hp.margin }, hp);

  const colors = style.colors || {};
  const hex = (h, k = 1) => {
    const c = new THREE.Color().setHex(h);
    return [c.r * k, c.g * k, c.b * k];
  };
  const PAL = {
    asphalt: hex(colors.asphalt ?? 0x3c3c3a),
    alley: hex(0x8f8374),
    sidewalk: hex(colors.sidewalk ?? 0xddd5c4),
    ped: hex(0xcdb795),
    sand: hex(0xe3cf9c),
    block: hex(colors.plaza ?? 0xc9bb98, 0.95),
    green: hex(colors.grass ?? 0x8a9a5a, 0.92),
    curb: hex(0xa9a397),
    wall: hex(0xb9ad98, 0.85),
    steps: hex(0xbfb29d),
  };

  const grid = new TriGrid(8);
  const pos = grid.pos;
  const col = [];
  const idx = [];
  const polys = []; // per i bordi: { rings(densificati), heightAt, polyId }
  let polyId = 0;

  function addPolygon(e, layer, heightAt, color) {
    const rings = [decodeRing(e.o, u), ...(e.h || []).map((h) => decodeRing(h, u))].map((rg) => densify(rg, 3));
    if (rings[0].length < 3) return;
    const flat = [];
    const holes = [];
    for (const rg of rings) {
      if (flat.length) holes.push(flat.length / 2);
      for (const p of rg) flat.push(p.x, p.z);
    }
    const tris = earcut(flat, holes, 2);
    if (!tris.length) return;
    const base = pos.length / 3;
    for (let i = 0; i < flat.length; i += 2) {
      const x = flat[i], z = flat[i + 1];
      pos.push(x, heightAt(x, z), z);
      col.push(...color);
    }
    const id = polyId++;
    for (let i = 0; i < tris.length; i += 3) {
      idx.push(base + tris[i], base + tris[i + 2], base + tris[i + 1]);
      grid.add(base + tris[i], base + tris[i + 1], base + tris[i + 2], { layer, poly: id });
    }
    polys.push({ rings, heightAt, id, layer });
  }

  // ---- strati
  for (const [name, list] of Object.entries(level.layers)) {
    const st = LAYER_STYLE[name];
    if (!st) continue; // il mare lo disegna lo shader
    const lift = st.lift === 'curb' ? CURB : st.lift;
    for (const e of list) addPolygon(e, name, (x, z) => field.sample(x, z) + lift, PAL[st.color]);
  }
  // ---- terrazzamenti (M4): gradoni a quota costante dove il dislivello reale dell'isolato
  // supera la soglia. Ogni tessera è un poligono a sé (poly.id diverso): il muro fra due gradoni,
  // o fra un gradone e il campo continuo del vicino, nasce dalla stessa regola dei bordi qui sotto.
  for (const e of level.layers.terrace || []) {
    addPolygon(e, e.sub === 'green' ? 'green' : 'yard', () => e.c, PAL[e.sub === 'green' ? 'green' : 'block']);
  }
  // ---- scalinate (M4): ogni pedata è un poligono a quota costante; il contro-gradino fra due
  // pedate consecutive (o fra una pedata e il marciapiede d'arrivo) è, di nuovo, lo stesso bordo.
  for (const e of level.layers.steps || []) {
    addPolygon(e, 'steps', () => e.c, PAL.steps);
  }

  // ---- bordi: parete verso il vicino più basso (cordoli, gradini, muri di contenimento)
  // Il vicino "terreno" è il terreno DOPO lo scavo (stessa funzione usata per la mesh del terreno):
  // ai bordi del livello il terreno viene raccordato alla superficie, quindi niente gradino fittizio.
  const neighbourY = (x, z) => {
    const q = grid.query(x, z);
    if (q) return q;
    return { y: carve(x, z, demY(x, z)), layer: 'terrain', poly: -1 };
  };
  let walls = 0, retaining = 0, maxWall = 0;
  const hist = { lt15: 0, lt35: 0, lt100: 0, ge100: 0 };
  const pairs = {};
  for (const P of polys) {
    for (const ring of P.rings) {
      const n = ring.length;
      if (n < 3) continue;
      // lato esterno del poligono per questo anello (una sonda sul lato più lungo)
      let li = 0, lmax = 0;
      for (let i = 0; i < n; i++) {
        const a = ring[i], b = ring[(i + 1) % n];
        const L = Math.hypot(b.x - a.x, b.z - a.z);
        if (L > lmax) { lmax = L; li = i; }
      }
      const a0 = ring[li], b0 = ring[(li + 1) % n];
      const n0x = -(b0.z - a0.z) / lmax, n0z = (b0.x - a0.x) / lmax;
      const pr = grid.query((a0.x + b0.x) / 2 + n0x * 0.2, (a0.z + b0.z) / 2 + n0z * 0.2);
      const s = pr && pr.poly === P.id ? -1 : 1;
      // per vertice: quota propria e del vicino (normale media dei due lati adiacenti)
      const top = new Float32Array(n), nb = new Float32Array(n), nbL = new Array(n);
      for (let i = 0; i < n; i++) {
        const p = ring[i], pp = ring[(i - 1 + n) % n], pn = ring[(i + 1) % n];
        let nx = -(pn.z - pp.z), nz = pn.x - pp.x;
        const L = Math.hypot(nx, nz) || 1;
        nx = (nx / L) * s; nz = (nz / L) * s;
        top[i] = P.heightAt(p.x, p.z);
        const nq = neighbourY(p.x + nx * 0.25, p.z + nz * 0.25);
        nb[i] = nq.y;
        nbL[i] = nq.layer;
      }
      // strisce di parete con vertici condivisi tra tratti consecutivi
      let prevK = -1, prevI = -1;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const d = Math.max(top[i] - nb[i], top[j] - nb[j]);
        if (d < 0.03) { prevK = -1; continue; }
        const tall = d > 0.35;
        const cc = tall ? PAL.wall : PAL.curb;
        const dk = cc.map((v) => v * 0.8);
        const emit = (k) => {
          const p = ring[k];
          const base = pos.length / 3;
          pos.push(p.x, top[k], p.z, p.x, Math.min(top[k], nb[k]) - 0.02, p.z);
          col.push(...cc, ...dk);
          return base;
        };
        const ka = prevK >= 0 && prevI === i ? prevK : emit(i);
        const kb = emit(j);
        idx.push(ka, kb, kb + 1, ka, kb + 1, ka + 1);
        prevK = kb; prevI = j;
        walls++;
        if (tall) {
          retaining++;
          const key = `${P.layer}>${nbL[i]}`;
          pairs[key] = (pairs[key] || 0) + 1;
        }
        if (d < 0.15) hist.lt15++; else if (d < 0.35) hist.lt35++; else if (d < 1) hist.lt100++; else hist.ge100++;
        if (d > maxWall) maxWall = d;
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(pos.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(idx, 1) : new THREE.Uint16BufferAttribute(idx, 1));
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }));
  mesh.name = 'level-ground';
  mesh.receiveShadow = true;
  scene.add(mesh);

  const surfaceAt = (x, z) => grid.query(x, z);
  function carve(x, z, y0) {
    const here = grid.query(x, z);
    if (here) {
      // sotto le superfici: nascosto, anche tra i vertici della griglia (5 m) che interpolano
      let m = here.y;
      for (const [dx, dz] of DIRS) {
        const q = grid.query(x + dx * 4, z + dz * 4);
        if (q && q.y < m) m = q.y;
      }
      return Math.min(y0, m - 0.35);
    }
    // appena fuori dal bordo: quota del bordo PIÙ VICINO (non la minima del raggio,
    // che pescava l'altro lato della strada) → pendio continuo invece di un gradino
    for (const r of [0.7, 2, 4]) {
      let sum = 0, cnt = 0;
      for (const [dx, dz] of DIRS) {
        const q = grid.query(x + dx * r, z + dz * r);
        if (q) { sum += q.y; cnt++; }
      }
      if (cnt) return sum / cnt - 0.08;
    }
    return y0; // lontano dal livello: terreno naturale
  }

  return {
    mesh,
    surfaceAt,
    carve,
    field,
    stats: { vertices: pos.length / 3, triangles: idx.length / 3, walls, retaining, maxWall: +maxWall.toFixed(2), wallHeights: hist, tallPairs: pairs, polys: polys.length },
  };
}
