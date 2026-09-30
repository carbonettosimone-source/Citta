#!/usr/bin/env node
/**
 * Export per Blender del paese, in metri veri, stesso sistema del gioco.
 *
 *   node scripts/export-blender.mjs [cartella]
 *
 * glTF 2.0 / GLB: 1 unità = 1 metro, Y-up.
 *   X = est, Y = su (metri sul livello del mare, MDT), Z = sud.
 * Origine planimetrica = Municipio (city.json, arrotondata all'UTM come in model.json).
 * Y = 0 è il livello del mare, non il suolo: il suolo sta a circa 30 m.
 *
 * Non tocca il renderer. Legge public/data (model.json, streets.json, dtm.json).
 */
import { mkdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import earcut from 'earcut';

const root = new URL('..', import.meta.url);
const outDir = process.argv[2] || '/opt/cursor/artifacts/blender-export';

const model = JSON.parse(readFileSync(new URL('public/data/model.json', root)));
const streets = JSON.parse(readFileSync(new URL('public/data/streets.json', root)));
const dtmMeta = JSON.parse(readFileSync(new URL('public/data/dtm.json', root)));
const city = JSON.parse(readFileSync(new URL('city.json', root)));
const [OX, OY] = model.origin;

const raw = Buffer.from(dtmMeta.data, 'base64');
const dm = new Uint16Array(raw.byteLength / 2);
Buffer.from(dm.buffer).set(raw);
const OFF = dtmMeta.offset || 0;
function heightAt(x, z) {
  const { width: W, height: H, step, xmin, ymax } = dtmMeta;
  const c = (x + OX - xmin) / step, r = (ymax - (OY - z)) / step;
  const c0 = Math.max(0, Math.min(W - 2, Math.floor(c)));
  const r0 = Math.max(0, Math.min(H - 2, Math.floor(r)));
  const fx = Math.min(1, Math.max(0, c - c0)), fy = Math.min(1, Math.max(0, r - r0));
  const g = (i, j) => dm[j * W + i] / 10 + OFF;
  return g(c0, r0) * (1 - fx) * (1 - fy) + g(c0 + 1, r0) * fx * (1 - fy) + g(c0, r0 + 1) * (1 - fx) * fy + g(c0 + 1, r0 + 1) * fx * fy;
}

/** sRGB byte → lineare, come vuole baseColorFactor */
const lin = (c) => { const x = c / 255; return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; };

function ringArea(flat, n = flat.length / 2) {
  let a = 0;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    a += flat[i * 2] * flat[j * 2 + 1] - flat[j * 2] * flat[i * 2 + 1];
  }
  return a / 2;
}
function dropClose(flat) {
  const n = flat.length / 2;
  if (n >= 2 && flat[0] === flat[flat.length - 2] && flat[1] === flat[flat.length - 1]) return flat.slice(0, (n - 1) * 2);
  return flat;
}
function orient(flat, ccw) {
  const n = flat.length / 2;
  const positive = ringArea(flat, n) > 0;
  if (positive === ccw) return flat;
  const rev = new Array(flat.length);
  for (let i = 0; i < n; i++) { rev[i * 2] = flat[(n - 1 - i) * 2]; rev[i * 2 + 1] = flat[(n - 1 - i) * 2 + 1]; }
  return rev;
}

/** anelli [esterno, buchi...] in [x,z,...] → triangoli sul piano, quote da heightAt o y fisso */
function drapeRings(rings, yOf) {
  const holes = [];
  let xz = [];
  for (let ri = 0; ri < rings.length; ri++) {
    let flat = orient(dropClose(rings[ri]), ri === 0);
    if (flat.length < 6) return null;
    if (ri > 0) holes.push(xz.length / 2);
    xz = xz.concat(flat);
  }
  let idx;
  try { idx = earcut(xz, holes, 2); } catch { return null; }
  if (!idx?.length) return null;
  const pos = new Float32Array((xz.length / 2) * 3);
  for (let i = 0; i < xz.length; i += 2) {
    const x = xz[i], z = xz[i + 1], o = (i / 2) * 3;
    pos[o] = x; pos[o + 1] = yOf(x, z); pos[o + 2] = z;
  }
  return { pos, idx: Uint32Array.from(idx) };
}

function extrudeBuilding(b) {
  let flat = dropClose(b.r.slice());
  if (flat.length < 6) return null;
  flat = orient(flat, true);
  const n = flat.length / 2;
  let tri;
  try { tri = earcut(flat, null, 2); } catch { return null; }
  if (!tri?.length) return null;
  const y0 = Math.min(b.b, b.g), y1 = b.g + b.h;
  const pos = new Float32Array(n * 2 * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = flat[i * 2]; pos[i * 3 + 1] = y1; pos[i * 3 + 2] = flat[i * 2 + 1];
    pos[(n + i) * 3] = flat[i * 2]; pos[(n + i) * 3 + 1] = y0; pos[(n + i) * 3 + 2] = flat[i * 2 + 1];
  }
  const idx = [];
  for (let k = 0; k < tri.length; k++) idx.push(tri[k]);
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    idx.push(i, n + i, j, j, n + i, n + j);
  }
  return { pos, idx: Uint32Array.from(idx), y0, y1 };
}

function centroid(flat) {
  let x = 0, z = 0, n = 0;
  const m = flat.length - (flat[0] === flat[flat.length - 2] && flat[1] === flat[flat.length - 1] ? 2 : 0);
  for (let i = 0; i < m; i += 2) { x += flat[i]; z += flat[i + 1]; n++; }
  return [x / n, z / n];
}
function boundsOf(pos) {
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  for (let i = 0; i < pos.length; i += 3) {
    const x = pos[i], y = pos[i + 1], z = pos[i + 2];
    if (x < x0) x0 = x; if (x > x1) x1 = x;
    if (y < y0) y0 = y; if (y > y1) y1 = y;
    if (z < z0) z0 = z; if (z > z1) z1 = z;
  }
  return { x0, y0, z0, x1, y1, z1 };
}
function mergeBounds(list) {
  const b = { x0: Infinity, y0: Infinity, z0: Infinity, x1: -Infinity, y1: -Infinity, z1: -Infinity };
  for (const p of list) {
    b.x0 = Math.min(b.x0, p.x0); b.y0 = Math.min(b.y0, p.y0); b.z0 = Math.min(b.z0, p.z0);
    b.x1 = Math.max(b.x1, p.x1); b.y1 = Math.max(b.y1, p.y1); b.z1 = Math.max(b.z1, p.z1);
  }
  return b;
}
function inBox(x, z, box) { return x >= box.x0 && x <= box.x1 && z >= box.z0 && z <= box.z1; }
function ringHits(flat, box) {
  for (let i = 0; i < flat.length; i += 2) if (inBox(flat[i], flat[i + 1], box)) return true;
  return false;
}
const round = (v) => +v.toFixed(2);
function boxJson(b) {
  return { xMin: round(b.x0), xMax: round(b.x1), yMin: round(b.y0), yMax: round(b.y1), zMin: round(b.z0), zMax: round(b.z1),
    larghezzaEst: round(b.x1 - b.x0), profonditaSud: round(b.z1 - b.z0), quota: round(b.y1 - b.y0) };
}

// pianta misurata di VE3 (piazza-ve3.js): u lungo la facciata verso ovest, w verso il mare
const FAX = 0.275, FAZ = -8.445, NWx = -0.2855, NWz = -0.9584, Ux = -0.9584, Uz = 0.2855;
const LAWN_U = 2, LAWN_W = 29.2, LAWN_R = 11.4;
const VE3_Y = 32.95, FX = -8.54, FZ = -31.15;
const xzOf = (u, w) => [FAX + Ux * u + NWx * w, FAZ + Uz * u + NWz * w];
const uwOf = (x, z) => { const dx = x - FAX, dz = z - FAZ; return [dx * Ux + dz * Uz, dx * NWx + dz * NWz]; };
function ve3Keep(x, z) {
  const [u, w] = uwOf(x, z);
  if (u > -28 && u < 30 && w > 0.2 && w < 30.4) return true;
  const du = u - LAWN_U, dw = w - LAWN_W;
  return dw >= -0.5 && du * du + dw * dw <= LAWN_R * LAWN_R;
}
function ve3Terrace() {
  const u0 = -28, u1 = 30, w0 = 0.2, w1 = 41, step = 1;
  const nu = Math.round((u1 - u0) / step) + 1, nw = Math.round((w1 - w0) / step) + 1;
  const id = new Int32Array(nu * nw).fill(-1);
  const pos = [];
  const at = (iu, iw) => iw * nu + iu;
  for (let iw = 0; iw < nw; iw++) for (let iu = 0; iu < nu; iu++) {
    const [x, z] = xzOf(u0 + iu * step, w0 + iw * step);
    if (!ve3Keep(x, z)) continue;
    id[at(iu, iw)] = pos.length / 3;
    pos.push(x, VE3_Y, z);
  }
  const idx = [];
  for (let iw = 0; iw < nw - 1; iw++) for (let iu = 0; iu < nu - 1; iu++) {
    const a = id[at(iu, iw)], b = id[at(iu + 1, iw)], c = id[at(iu, iw + 1)], d = id[at(iu + 1, iw + 1)];
    if (a < 0 || b < 0 || c < 0 || d < 0) continue;
    idx.push(a, c, b, b, c, d);
  }
  return { pos: Float32Array.from(pos), idx: Uint32Array.from(idx) };
}
function disc(x, z, y, r, seg = 28) {
  const pos = [x, y, z], idx = [];
  for (let i = 0; i < seg; i++) {
    const a = (i / seg) * Math.PI * 2;
    pos.push(x + Math.sin(a) * r, y, z + Math.cos(a) * r);
    idx.push(0, 1 + i, 1 + (i + 1) % seg);
  }
  return { pos: Float32Array.from(pos), idx: Uint32Array.from(idx) };
}

const PLAZZE = [
  { id: 've3', nome: 'Piazza Vittorio Emanuele III', mesh: 'piazza-ve3', glbRientro: 'plaza-ve3.glb', x: -2.2, z: -0.3 },
  { id: 'liberta', nome: 'Piazza Libertà', mesh: 'piazza-liberta', glbRientro: 'plaza-liberta.glb', x: -217.9, z: 107.3 },
  { id: 'gpii', nome: 'Piazza Giovanni Paolo II', mesh: 'piazza-gpii', glbRientro: 'plaza-gpii.glb', x: -154.7, z: -28.3 },
];

function assignPlaza(flat) {
  const [x, z] = centroid(flat);
  let best = null;
  for (const p of PLAZZE) {
    const d = Math.hypot(x - p.x, z - p.z);
    if (d < 85 && (!best || d < best.d)) best = { d, p };
  }
  return best?.p || null;
}

function terrainMesh(stride, box) {
  const { width: W, height: H, step, xmin, ymax } = dtmMeta;
  const cols = [], rows = [];
  for (let c = 0; c < W; c += stride) cols.push(c);
  if (cols[cols.length - 1] !== W - 1) cols.push(W - 1);
  for (let r = 0; r < H; r += stride) rows.push(r);
  if (rows[rows.length - 1] !== H - 1) rows.push(H - 1);
  const keepC = [], keepR = [];
  for (const c of cols) {
    const x = xmin + c * step - OX;
    if (!box || (x >= box.x0 - step * stride && x <= box.x1 + step * stride)) keepC.push(c);
  }
  for (const r of rows) {
    const z = OY - (ymax - r * step);
    if (!box || (z >= box.z0 - step * stride && z <= box.z1 + step * stride)) keepR.push(r);
  }
  const nc = keepC.length, nr = keepR.length;
  const pos = new Float32Array(nc * nr * 3);
  for (let j = 0; j < nr; j++) for (let i = 0; i < nc; i++) {
    const c = keepC[i], r = keepR[j];
    const x = xmin + c * step - OX, z = OY - (ymax - r * step);
    const o = (j * nc + i) * 3;
    pos[o] = x; pos[o + 1] = dm[r * W + c] / 10 + OFF; pos[o + 2] = z;
  }
  const idx = [];
  for (let j = 0; j < nr - 1; j++) for (let i = 0; i < nc - 1; i++) {
    const a = j * nc + i, b = a + 1, c = a + nc, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  return { pos, idx: Uint32Array.from(idx) };
}

function concat(parts) {
  let nv = 0, ni = 0;
  for (const p of parts) { nv += p.pos.length; ni += p.idx.length; }
  const pos = new Float32Array(nv), idx = new Uint32Array(ni);
  let vo = 0, io = 0, base = 0;
  for (const p of parts) {
    pos.set(p.pos, vo);
    for (let k = 0; k < p.idx.length; k++) idx[io + k] = p.idx[k] + base;
    base += p.pos.length / 3; vo += p.pos.length; io += p.idx.length;
  }
  return { pos, idx };
}

class Glb {
  constructor() { this.nodes = []; this.empties = []; }
  mesh(name, pos, idx, color, extras, lines = false) {
    if (!idx.length) return;
    this.nodes.push({ name, pos, idx, color, extras, lines });
  }
  empty(name, x, y, z, extras) { this.empties.push({ name, x, y, z, extras }); }
  axes(y) {
    const L = 40;
    const seg = (name, x2, y2, z2, color, nota) => {
      this.mesh(name, new Float32Array([0, y, 0, x2, y2, z2]), Uint32Array.of(0, 1), color, { tipo: 'riferimento', asse: nota }, true);
    };
    seg('asse-X-est', L, y, 0, [1, 0, 0, 1], 'X est, 40 m');
    seg('asse-Y-su', 0, y + L, 0, [0, 0.8, 0.2, 1], 'Y su, 40 m');
    seg('asse-Z-sud', 0, y, L, [0.2, 0.4, 1, 1], 'Z sud, 40 m');
  }
  toBuffer() {
    const bins = [];
    let offset = 0;
    const views = [], accs = [], meshes = [], nodes = [], mats = [];
    const matOf = new Map();
    const align = () => { while (offset % 4) { bins.push(Buffer.alloc(1)); offset++; } };
    const push = (buf) => { align(); const o = offset; bins.push(buf); offset += buf.length; return o; };
    const colorKey = (c) => c.map((v) => v.toFixed(4)).join(',');
    const material = (c) => {
      const k = colorKey(c);
      if (matOf.has(k)) return matOf.get(k);
      const i = mats.length;
      mats.push({ pbrMetallicRoughness: { baseColorFactor: c, metallicFactor: 0, roughnessFactor: 1 }, doubleSided: true, name: `m${i}` });
      matOf.set(k, i);
      return i;
    };
    const addGeom = (pos, idx, asLines) => {
      const pbuf = Buffer.from(pos.buffer, pos.byteOffset, pos.byteLength);
      const ibuf = Buffer.from(idx.buffer, idx.byteOffset, idx.byteLength);
      const po = push(pbuf);
      views.push({ buffer: 0, byteOffset: po, byteLength: pbuf.length, target: 34962 });
      const pAcc = accs.length;
      let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
      for (let i = 0; i < pos.length; i += 3) {
        x0 = Math.min(x0, pos[i]); x1 = Math.max(x1, pos[i]);
        y0 = Math.min(y0, pos[i + 1]); y1 = Math.max(y1, pos[i + 1]);
        z0 = Math.min(z0, pos[i + 2]); z1 = Math.max(z1, pos[i + 2]);
      }
      accs.push({ bufferView: views.length - 1, componentType: 5126, count: pos.length / 3, type: 'VEC3', min: [x0, y0, z0], max: [x1, y1, z1] });
      const io = push(ibuf);
      const comp = idx.BYTES_PER_ELEMENT === 2 ? 5123 : 5125;
      views.push({ buffer: 0, byteOffset: io, byteLength: ibuf.length, target: 34963 });
      const iAcc = accs.length;
      accs.push({ bufferView: views.length - 1, componentType: comp, count: idx.length, type: 'SCALAR' });
      return { pAcc, iAcc, mode: asLines ? 1 : 4 };
    };
    const nodeIds = [];
    for (const n of this.nodes) {
      const g = addGeom(n.pos, n.idx, n.lines);
      const mi = meshes.length;
      meshes.push({ name: n.name, primitives: [{ attributes: { POSITION: g.pAcc }, indices: g.iAcc, material: material(n.color), mode: g.mode }] });
      const id = nodes.length;
      const node = { name: n.name, mesh: mi };
      if (n.extras) node.extras = n.extras;
      nodes.push(node);
      nodeIds.push(id);
    }
    for (const e of this.empties) {
      const id = nodes.length;
      const node = { name: e.name, translation: [e.x, e.y, e.z] };
      if (e.extras) node.extras = e.extras;
      nodes.push(node);
      nodeIds.push(id);
    }
    const json = {
      asset: { version: '2.0', generator: 'acquedolci-reale scripts/export-blender.mjs' },
      extras: {
        unita: 'metri',
        asseX: 'est', asseY: 'su, metri sul livello del mare', asseZ: 'sud',
        origine: 'Municipio di Acquedolci, X=0 Z=0; Y=0 è il livello del mare',
        epsg: 25833, originUtm: [OX, OY], originLonLat: city.originLonLat,
      },
      scene: 0,
      scenes: [{ name: 'Acquedolci', nodes: nodeIds }],
      nodes, meshes, materials: mats, accessors: accs, bufferViews: views,
      buffers: [{ byteLength: offset }],
    };
    let jsonBuf = Buffer.from(JSON.stringify(json));
    const jpad = (4 - (jsonBuf.length % 4)) % 4;
    if (jpad) jsonBuf = Buffer.concat([jsonBuf, Buffer.alloc(jpad, 0x20)]);
    let bin = Buffer.concat(bins);
    const bpad = (4 - (bin.length % 4)) % 4;
    if (bpad) bin = Buffer.concat([bin, Buffer.alloc(bpad, 0)]);
    // byteLength del buffer è senza il padding di coda: lo riallineo al bin vero
    const parsed = JSON.parse(jsonBuf.toString());
    parsed.buffers[0].byteLength = bin.length;
    jsonBuf = Buffer.from(JSON.stringify(parsed));
    const jpad2 = (4 - (jsonBuf.length % 4)) % 4;
    if (jpad2) jsonBuf = Buffer.concat([jsonBuf, Buffer.alloc(jpad2, 0x20)]);
    const total = 12 + 8 + jsonBuf.length + 8 + bin.length;
    const header = Buffer.alloc(12);
    header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(total, 8);
    const cj = Buffer.alloc(8); cj.writeUInt32LE(jsonBuf.length, 0); cj.writeUInt32LE(0x4e4f534a, 4);
    const cb = Buffer.alloc(8); cb.writeUInt32LE(bin.length, 0); cb.writeUInt32LE(0x004e4942, 4);
    return Buffer.concat([header, cj, jsonBuf, cb, bin]);
  }
}

function collectSurf(which, box) {
  const parts = [];
  for (const rings of streets.surf[which]) {
    if (box && !rings.some((r) => ringHits(r, box))) continue;
    const g = drapeRings(rings, heightAt);
    if (g) parts.push(g);
  }
  return parts.length ? concat(parts) : null;
}

function collectPlazas(box) {
  const buckets = new Map(PLAZZE.map((p) => [p.id, []]));
  const altre = [];
  for (const rings of streets.surf.plaza) {
    if (box && !rings.some((r) => ringHits(r, box))) continue;
    const g = drapeRings(rings, heightAt);
    if (!g) continue;
    const dest = assignPlaza(rings[0]);
    (dest ? buckets.get(dest.id) : altre).push(g);
  }
  const out = [];
  for (const p of PLAZZE) if (buckets.get(p.id).length) out.push({ name: p.mesh, geom: concat(buckets.get(p.id)), p });
  if (altre.length) out.push({ name: 'piazze-altre', geom: concat(altre), p: null });
  return out;
}

const y0 = heightAt(0, 0);
console.log(`origine UTM ${OX} ${OY} · suolo a (0,0) = ${y0.toFixed(2)} m s.l.m.`);

const plazaGeoms = collectPlazas(null);
const plazaBounds = {};
for (const item of plazaGeoms) if (item.p) plazaBounds[item.p.id] = boundsOf(item.geom.pos);
const terrace = ve3Terrace();
const terraceBounds = boundsOf(terrace.pos);
const around = { x0: Infinity, x1: -Infinity, z0: Infinity, z1: -Infinity, y0: 0, y1: 0 };
for (const p of PLAZZE) {
  around.x0 = Math.min(around.x0, p.x - 160); around.x1 = Math.max(around.x1, p.x + 160);
  around.z0 = Math.min(around.z0, p.z - 160); around.z1 = Math.max(around.z1, p.z + 160);
}
const union = mergeBounds([...PLAZZE.map((p) => plazaBounds[p.id]).filter(Boolean), terraceBounds, around]);
const MARGIN = 40;
const clip = { x0: union.x0 - MARGIN, x1: union.x1 + MARGIN, z0: union.z0 - MARGIN, z1: union.z1 + MARGIN, y0: 0, y1: 0 };

const clipGlb = new Glb();
clipGlb.mesh('terreno', ...(() => { const t = terrainMesh(1, clip); return [t.pos, t.idx]; })(), [0.62, 0.56, 0.42, 1], { tipo: 'mdt', passoM: dtmMeta.step });
for (const b of model.buildings) {
  const [cx, cz] = centroid(b.r);
  if (!inBox(cx, cz, clip)) continue;
  const g = extrudeBuilding(b);
  if (!g) continue;
  clipGlb.mesh(`edificio-${b.id}`, g.pos, g.idx, [lin(b.c[0]), lin(b.c[1]), lin(b.c[2]), 1], { id: b.id, tipo: b.t, src: b.src, piede: round(g.y0), tetto: round(g.y1) });
}
const surfColor = { asphalt: [0.16, 0.16, 0.17, 1], walk: [0.55, 0.52, 0.46, 1], paving: [0.45, 0.28, 0.22, 1] };
for (const k of ['asphalt', 'walk', 'paving']) {
  const g = collectSurf(k, clip);
  if (g) clipGlb.mesh(k === 'asphalt' ? 'strade-asfalto' : k === 'walk' ? 'strade-marciapiede' : 'strade-basolato', g.pos, g.idx, surfColor[k], { tipo: k });
}
for (const item of collectPlazas(clip)) {
  const col = item.p?.id === 've3' ? [0.72, 0.32, 0.24, 1] : item.p?.id === 'liberta' ? [0.78, 0.62, 0.32, 1] : item.p?.id === 'gpii' ? [0.28, 0.52, 0.34, 1] : [0.5, 0.48, 0.42, 1];
  clipGlb.mesh(item.name, item.geom.pos, item.geom.idx, col, { tipo: 'piazza-osm', nome: item.p?.nome || 'altre' });
}
clipGlb.mesh('pianta-ve3', terrace.pos, terrace.idx, [0.86, 0.48, 0.34, 1], { tipo: 'pianta misurata nel gioco', quota: VE3_Y });
clipGlb.mesh('fontana-ve3', ...(() => { const d = disc(FX, FZ, VE3_Y + 0.05, 3.35); return [d.pos, d.idx]; })(), [0.15, 0.35, 0.55, 1], { tipo: 'ingombro vasca', raggio: 3.35 });
const MOTIFS = [[-21.3, 17.3], [-10.6, 17.3], [16.1, 17.3], [26.4, 17.3]];
MOTIFS.forEach(([u, w], i) => {
  const [x, z] = xzOf(u, w);
  clipGlb.empty(`ve3-croce-${i + 1}`, x, VE3_Y, z, { u, w });
});
clipGlb.empty('facciata-municipio', FAX, VE3_Y, FAZ, { nota: 'punto sulla facciata nord, non l’origine' });
clipGlb.empty('origine', 0, 0, 0, { nota: 'X=0 Z=0 Y=0 livello del mare' });
clipGlb.empty('suolo-origine', 0, round(y0), 0, { nota: 'intersezione dell’origine planimetrica col MDT' });
clipGlb.axes(y0);

const full = new Glb();
{
  const t = terrainMesh(4, null);
  full.mesh('terreno', t.pos, t.idx, [0.62, 0.56, 0.42, 1], { tipo: 'mdt', passoM: dtmMeta.step * 4 });
}
const indice = [];
for (const b of model.buildings) {
  const g = extrudeBuilding(b);
  if (!g) continue;
  full.mesh(`edificio-${b.id}`, g.pos, g.idx, [lin(b.c[0]), lin(b.c[1]), lin(b.c[2]), 1], { id: b.id, tipo: b.t, src: b.src, piede: round(g.y0), tetto: round(g.y1) });
  const bb = boundsOf(g.pos);
  indice.push({ id: b.id, tipo: b.t, src: b.src, x: round((bb.x0 + bb.x1) / 2), z: round((bb.z0 + bb.z1) / 2), piede: round(g.y0), tetto: round(g.y1) });
}
for (const k of ['asphalt', 'walk', 'paving']) {
  const g = collectSurf(k, null);
  if (g) full.mesh(k === 'asphalt' ? 'strade-asfalto' : k === 'walk' ? 'strade-marciapiede' : 'strade-basolato', g.pos, g.idx, surfColor[k], { tipo: k });
}
for (const item of plazaGeoms) {
  const col = item.p?.id === 've3' ? [0.72, 0.32, 0.24, 1] : item.p?.id === 'liberta' ? [0.78, 0.62, 0.32, 1] : item.p?.id === 'gpii' ? [0.28, 0.52, 0.34, 1] : [0.5, 0.48, 0.42, 1];
  full.mesh(item.name, item.geom.pos, item.geom.idx, col, { tipo: 'piazza-osm', nome: item.p?.nome || 'altre' });
}
full.mesh('pianta-ve3', terrace.pos, terrace.idx, [0.86, 0.48, 0.34, 1], { tipo: 'pianta misurata nel gioco', quota: VE3_Y });
full.empty('origine', 0, 0, 0, { nota: 'livello del mare' });
full.empty('suolo-origine', 0, round(y0), 0, {});
full.axes(y0);

function writeObj(glb, objPath, mtlName) {
  const lines = [`mtllib ${mtlName}`];
  const mtl = ['# colori lineari approssimati come Kd'];
  const used = new Set();
  let vbase = 1;
  for (const n of glb.nodes) {
    const key = n.color.map((v) => v.toFixed(4)).join('_');
    const mat = `m_${key}`;
    if (!used.has(mat)) {
      used.add(mat);
      mtl.push(`newmtl ${mat}`, `Kd ${n.color[0].toFixed(4)} ${n.color[1].toFixed(4)} ${n.color[2].toFixed(4)}`, 'd 1', 'illum 1');
    }
    lines.push(`g ${n.name}`, `usemtl ${mat}`);
    for (let i = 0; i < n.pos.length; i += 3) lines.push(`v ${n.pos[i]} ${n.pos[i + 1]} ${n.pos[i + 2]}`);
    if (n.lines) for (let i = 0; i < n.idx.length; i += 2) lines.push(`l ${n.idx[i] + vbase} ${n.idx[i + 1] + vbase}`);
    else for (let i = 0; i < n.idx.length; i += 3) lines.push(`f ${n.idx[i] + vbase} ${n.idx[i + 1] + vbase} ${n.idx[i + 2] + vbase}`);
    vbase += n.pos.length / 3;
  }
  writeFileSync(objPath, lines.join('\n'));
  writeFileSync(objPath.replace(/\.obj$/, '.mtl'), mtl.join('\n'));
}

mkdirSync(outDir, { recursive: true });
const files = {};
function save(name, buf) {
  const p = join(outDir, name);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, buf);
  files[name] = statSync(p).size;
  console.log(`${name}  ${(files[name] / 1048576).toFixed(2)} MB`);
}

save('piazze.glb', clipGlb.toBuffer());
save('paese-lite.glb', full.toBuffer());
writeObj(clipGlb, join(outDir, 'piazze.obj'), 'piazze.mtl');
files['piazze.obj'] = statSync(join(outDir, 'piazze.obj')).size;
files['piazze.mtl'] = statSync(join(outDir, 'piazze.mtl')).size;
console.log(`piazze.obj  ${(files['piazze.obj'] / 1048576).toFixed(2)} MB`);

const mb = (n) => `${(n / 1048576).toFixed(2)} MB`;
const b3 = (id) => boxJson(plazaBounds[id]);
const rif = {
  unita: '1 unità = 1 metro',
  assiGlb: { x: 'est', y: 'su, metri sul livello del mare (MDT 2013)', z: 'sud' },
  assiDopoImportBlender: { x: 'est', y: 'nord (cioè −Z del glTF)', z: 'su' },
  origine: {
    nome: 'Municipio di Acquedolci',
    lon: city.originLonLat.lon, lat: city.originLonLat.lat,
    utm33: [OX, OY], epsg: 25833,
    suoloMsl: round(y0),
    nota: 'X=0, Z=0 è il punto. Y=0 è il livello del mare: il suolo lì è suoloMsl. L’empty origine è a (0,0,0); suolo-origine è sul terreno.',
  },
  facciataMunicipio: { x: FAX, z: FAZ, y: VE3_Y, nota: 'facciata nord DBTR, qualche metro a nord dell’origine' },
  fontanaVe3: { x: FX, z: FZ, y: VE3_Y, raggioAcqua: 3.35 },
  clip: { margineM: MARGIN, ...boxJson({ ...clip, y0: 0, y1: 0 }) },
  piazze: {
    ve3: { nome: PLAZZE[0].nome, osm: b3('ve3'), piantaGioco: boxJson(terraceBounds) },
    liberta: { nome: PLAZZE[1].nome, osm: b3('liberta') },
    gpii: { nome: PLAZZE[2].nome, osm: b3('gpii') },
  },
  edifici: indice.length,
};
writeFileSync(join(outDir, 'riferimento.json'), JSON.stringify(rif, null, 2));
writeFileSync(join(outDir, 'edifici.json'), JSON.stringify(indice));
files['edifici.json'] = statSync(join(outDir, 'edifici.json')).size;

const fmt = (b) => `X ${b.xMin}…${b.xMax} m (est ${b.larghezzaEst} m), Z ${b.zMin}…${b.zMax} m (sud ${b.profonditaSud} m), Y ${b.yMin}…${b.yMax} m s.l.m.`;
const readme = `# Acquedolci — export per Blender

Pacchetto di riferimento del gioco \`acquedolci-reale\`. Stesse coordinate del renderer: ci si modella sopra e i GLB di rientro si posano senza trasformazioni.

## Unità e assi

- **1 unità = 1 metro.**
- Nel **GLB** (glTF, Y-up), come nel gioco: **X = est**, **Y = su**, **Z = sud**.
- Y è la quota del MDT 2013 in **metri sul livello del mare**. Y = 0 è il mare, non il marciapiede. All’origine il suolo è a **${round(y0)} m**.
- Blender all’import converte Y-up in Z-up (rotazione standard del glTF). Dopo l’import: **X = est**, **Y = nord** (il −Z del file), **Z = su**. Non ruotare a mano.
- I segmenti \`asse-X-est\` (rosso), \`asse-Y-su\` (verde) e \`asse-Z-sud\` (blu) sono lunghi 40 m e partono dal suolo sull’origine. Si nascondono: non fanno parte del paese.
- Due empty: \`origine\` a (0, 0, 0) sul livello del mare, \`suolo-origine\` sul terreno.

## Origine

Punto del **Municipio** (\`city.json\`): longitudine ${city.originLonLat.lon}, latitudine ${city.originLonLat.lat}. Nel gioco è arrotondata a UTM 33N (EPSG:25833) **${OX} E, ${OY} N**. È l’origine di \`model.json\`.

La facciata nord del palazzo, sulla pianta DBTR, non è l’origine: sta a X = ${FAX}, Z = ${FAZ} (empty \`facciata-municipio\`). La fontana di VE3 è a X = ${FX}, Z = ${FZ}, raggio dell’acqua 3,35 m.

## File

| File | Contenuto | Peso |
| --- | --- | --- |
| \`piazze.glb\` | Ritaglio: almeno 160 m intorno al centro di ogni piazza. Terreno MDT a ${dtmMeta.step} m, volumi DBTR, asfalto, marciapiedi, basolato, poligoni piazza, pianta misurata di VE3, ingombro fontana, empty delle quattro croci | ${mb(files['piazze.glb'])} |
| \`paese-lite.glb\` | Paese intero: terreno a ${dtmMeta.step * 4} m, tutti i volumi edificio, strade e piazze | ${mb(files['paese-lite.glb'])} |
| \`piazze.obj\` + \`piazze.mtl\` | Lo stesso ritaglio, per chi preferisce OBJ | ${mb(files['piazze.obj'])} |
| \`edifici.json\` | Indice id DBTR, tipo, baricentro, piede e tetto | ${mb(files['edifici.json'])} |
| \`riferimento.json\` | Questi numeri, in forma macchina | |

I volumi edificio sono l’estrusione della pianta DBTR: piede = minimo fra \`b\` e \`g\`, tetto = \`g + h\`. Il nome dell’oggetto è \`edificio-<id>\`. Le mesh \`piazza-ve3\`, \`piazza-liberta\` e \`piazza-gpii\` sono i poligoni OSM (e i vuoti urbani il cui baricentro cade entro 85 m dal centro della piazza), appoggiati sul MDT. \`pianta-ve3\` è il lastricato com’è oggi nel gioco, piano a ${VE3_Y} m, con le quattro croci (\`ve3-croce-1\` … \`4\`).

Fonti: DBTR 2013 e MDT 2013 SITR (CC BY 4.0), assi e anelli piazza © OpenStreetMap (ODbL).

## Bounding box (metri locali)

- **Piazza Vittorio Emanuele III**, poligono OSM: ${fmt(b3('ve3'))}
- **VE3, pianta del gioco** (\`pianta-ve3\`): ${fmt(boxJson(terraceBounds))}
- **Piazza Libertà**: ${fmt(b3('liberta'))}
- **Piazza Giovanni Paolo II**: ${fmt(b3('gpii'))}

Il ritaglio \`piazze.glb\` copre X ${round(clip.x0)}…${round(clip.x1)}, Z ${round(clip.z0)}…${round(clip.z1)}.

## Rientro dei modelli

Stesso origine, stessi assi, stessa scala di questo export. In Blender: importare il GLB, modellare, esportare **glTF Binary (.glb)** con le opzioni di default (Y-up lo fa l’esportatore). Non applicare scala né rotazione extra. Gli empty di riferimento e gli assi non vanno riesportati.

Nome e posto, quando li si sostituisce nel gioco:

| File | Dove | Cosa sostituisce |
| --- | --- | --- |
| \`plaza-ve3.glb\` | \`acquedolci-reale/public/models/plaza-ve3.glb\` | la mesh di \`buildVe3Plaza\` in \`src/piazza-ve3.js\` |
| \`plaza-liberta.glb\` | \`acquedolci-reale/public/models/plaza-liberta.glb\` | la superficie di Piazza Libertà in \`buildStreets\` (\`src/streets.js\`) |
| \`plaza-gpii.glb\` | \`acquedolci-reale/public/models/plaza-gpii.glb\` | la superficie di Piazza Giovanni Paolo II, stesso punto |

Il caricatore non c’è ancora: i file vanno posati in \`public/models/\` con questa convenzione, così il passo successivo li legge a identità (niente traslazione, niente scala).

## Rigenerare

Dalla cartella \`acquedolci-reale\`, dopo \`npm install\`:

\`\`\`
node scripts/export-blender.mjs /percorso/output
\`\`\`
`;
writeFileSync(join(outDir, 'README.md'), readme);
console.log('README e riferimento scritti in', outDir);
console.log(JSON.stringify(rif.piazze, null, 2));
