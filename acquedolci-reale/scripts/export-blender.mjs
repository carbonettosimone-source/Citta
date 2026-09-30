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
 * Copre tutto il modello del paese (MDT del riquadro urbano, non il litorale di sfondo).
 * Niente mare e niente skybox. Non tocca il renderer.
 */
import { mkdirSync, readFileSync, writeFileSync, statSync, unlinkSync } from 'node:fs';
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
  const pos = [];
  const idx = [];
  for (let i = 0; i < n; i++) pos.push(flat[i * 2], y1, flat[i * 2 + 1]);
  for (let i = 0; i < n; i++) pos.push(flat[i * 2], y0, flat[i * 2 + 1]);
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    idx.push(i, n + i, j, j, n + i, n + j);
  }
  let yTop = y1;
  if (b.roof) {
    // scheletro del tetto a falde (build-model.mjs): v = x, z, distanza dal bordo; quota = gronda + t·tan
    const V = b.roof.v, tan = b.roof.tan, base = pos.length / 3, nv = V.length / 3;
    for (let k = 0; k < nv; k++) {
      const y = y1 + V[k * 3 + 2] * tan;
      if (y > yTop) yTop = y;
      pos.push(V[k * 3], y, V[k * 3 + 1]);
    }
    for (const face of b.roof.f) {
      if (face.length < 3) continue;
      for (let i = 1; i + 1 < face.length; i++) idx.push(base + face[0], base + face[i], base + face[i + 1]);
    }
  } else {
    for (let k = 0; k < tri.length; k++) idx.push(tri[k]);
    if (b.pp) {
      const base = pos.length / 3;
      for (let i = 0; i < n; i++) pos.push(flat[i * 2], y1 + 1, flat[i * 2 + 1]);
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        idx.push(i, j, base + j, i, base + j, base + i);
      }
      yTop = y1 + 1;
    }
  }
  return { pos: Float32Array.from(pos), idx: Uint32Array.from(idx), y0, y1: yTop };
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
  const yAt = (k) => pos[k * 3 + 1];
  for (let j = 0; j < nr - 1; j++) for (let i = 0; i < nc - 1; i++) {
    const a = j * nc + i, b = a + 1, c = a + nc, d = c + 1;
    // fondale sotto zero: è il mare, non si esporta (niente superficie d'acqua, niente skybox)
    if (yAt(a) < 0 && yAt(b) < 0 && yAt(c) < 0 && yAt(d) < 0) continue;
    idx.push(a, c, b, b, c, d);
  }
  // solo i vertici usati: il fondale non resta nel file come punti sciolti
  const map = new Map();
  const npos = [];
  const nidx = new Uint32Array(idx.length);
  for (let k = 0; k < idx.length; k++) {
    const i = idx[k];
    let m = map.get(i);
    if (m === undefined) {
      m = npos.length / 3;
      map.set(i, m);
      npos.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
    }
    nidx[k] = m;
  }
  return { pos: Float32Array.from(npos), idx: nidx };
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
  /** EXT_mesh_gpu_instancing: un prototipo e N copie (alberi). translation/rotation/scale Float32Array */
  instances(name, pos, idx, color, translation, rotation, scale, extras) {
    if (!idx.length || !translation.length) return;
    this.nodes.push({ name, pos, idx, color, extras, instances: { translation, rotation, scale } });
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
    const floatAcc = (arr, type) => {
      const buf = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
      const o = push(buf);
      views.push({ buffer: 0, byteOffset: o, byteLength: buf.length });
      const dim = type === 'VEC4' ? 4 : 3;
      const min = Array(dim).fill(Infinity), max = Array(dim).fill(-Infinity);
      for (let i = 0; i < arr.length; i++) { const v = arr[i], k = i % dim; if (v < min[k]) min[k] = v; if (v > max[k]) max[k] = v; }
      const i = accs.length;
      accs.push({ bufferView: views.length - 1, componentType: 5126, count: arr.length / dim, type, min, max });
      return i;
    };
    let usesInstances = false;
    const nodeIds = [];
    for (const n of this.nodes) {
      const g = addGeom(n.pos, n.idx, n.lines);
      const mi = meshes.length;
      meshes.push({ name: n.name, primitives: [{ attributes: { POSITION: g.pAcc }, indices: g.iAcc, material: material(n.color), mode: g.mode }] });
      const id = nodes.length;
      const node = { name: n.name, mesh: mi };
      if (n.extras) node.extras = n.extras;
      if (n.instances) {
        usesInstances = true;
        const { translation, rotation, scale } = n.instances;
        node.extensions = { EXT_mesh_gpu_instancing: { attributes: {
          TRANSLATION: floatAcc(translation, 'VEC3'),
          ROTATION: floatAcc(rotation, 'VEC4'),
          SCALE: floatAcc(scale, 'VEC3'),
        } } };
      }
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
      ...(usesInstances ? { extensionsUsed: ['EXT_mesh_gpu_instancing'], extensionsRequired: ['EXT_mesh_gpu_instancing'] } : {}),
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

function ve3TreeClash(x, z) {
  const [u, w] = uwOf(x, z);
  if (u > -24 && u < 28 && w > 2 && w < 32) return true;
  const du = u - LAWN_U, dw = w - LAWN_W;
  return dw > -1 && du * du + dw * dw < LAWN_R * LAWN_R;
}

/** prototipo unitario (altezza 1, raggio chioma 1): tronco + chioma, come le specie del gioco */
function treeUnit() {
  const pos = [], idx = [];
  const seg = 6;
  const pushCyl = (y0, y1, r0, r1) => {
    const b = pos.length / 3;
    for (let i = 0; i < seg; i++) {
      const a = (i / seg) * Math.PI * 2, s = Math.sin(a), c = Math.cos(a);
      pos.push(s * r0, y0, c * r0, s * r1, y1, c * r1);
    }
    for (let i = 0; i < seg; i++) {
      const i0 = b + i * 2, i1 = b + ((i + 1) % seg) * 2;
      idx.push(i0, i0 + 1, i1, i1, i0 + 1, i1 + 1);
    }
  };
  pushCyl(0, 0.45, 0.06, 0.04);
  pushCyl(0.42, 0.95, 0.85, 0.15);
  return { pos: Float32Array.from(pos), idx: Uint32Array.from(idx) };
}

function stamp(glb) {
  glb.empty('origine', 0, 0, 0, { nota: 'X=0 Z=0 Y=0 livello del mare' });
  glb.empty('suolo-origine', 0, round(y0), 0, { nota: 'origine planimetrica sul MDT' });
  glb.empty('facciata-municipio', FAX, VE3_Y, FAZ, { nota: 'facciata nord, non l’origine' });
  glb.axes(y0);
}

const y0 = heightAt(0, 0);
console.log(`origine UTM ${OX} ${OY} · suolo a (0,0) = ${y0.toFixed(2)} m s.l.m.`);

const terreno = new Glb();
const tMesh = terrainMesh(1, null);
terreno.mesh('terreno', tMesh.pos, tMesh.idx, [0.62, 0.56, 0.42, 1], {
  tipo: 'mdt-paese', passoM: dtmMeta.step, nota: 'MDT del riquadro urbano. Triangoli tutti sotto zero (mare) esclusi. Niente superficie d’acqua, niente litorale di sfondo.',
});
stamp(terreno);
const townBounds = boundsOf(tMesh.pos);

const edifici = new Glb();
const indice = [];
let nFalda = 0;
for (const b of model.buildings) {
  const g = extrudeBuilding(b);
  if (!g) continue;
  if (b.roof) nFalda++;
  edifici.mesh(`edificio-${b.id}`, g.pos, g.idx, [lin(b.c[0]), lin(b.c[1]), lin(b.c[2]), 1], {
    id: b.id, tipo: b.t, src: b.src, piede: round(g.y0), tetto: round(g.y1), falda: b.roof ? 1 : 0,
  });
  const bb = boundsOf(g.pos);
  indice.push({ id: b.id, tipo: b.t, src: b.src, x: round((bb.x0 + bb.x1) / 2), z: round((bb.z0 + bb.z1) / 2), piede: round(g.y0), tetto: round(g.y1), falda: b.roof ? 1 : 0 });
}
stamp(edifici);

const surfColor = { asphalt: [0.16, 0.16, 0.17, 1], walk: [0.55, 0.52, 0.46, 1], paving: [0.45, 0.28, 0.22, 1] };
const strade = new Glb();
for (const k of ['asphalt', 'walk', 'paving']) {
  const g = collectSurf(k, null);
  if (g) strade.mesh(k === 'asphalt' ? 'strade-asfalto' : k === 'walk' ? 'strade-marciapiede' : 'strade-basolato', g.pos, g.idx, surfColor[k], { tipo: k });
}
stamp(strade);

const plazaGeoms = collectPlazas(null);
const plazaBounds = {};
for (const item of plazaGeoms) if (item.p) plazaBounds[item.p.id] = boundsOf(item.geom.pos);
const terrace = ve3Terrace();
const terraceBounds = boundsOf(terrace.pos);
const piazze = new Glb();
for (const item of plazaGeoms) {
  const col = item.p?.id === 've3' ? [0.72, 0.32, 0.24, 1] : item.p?.id === 'liberta' ? [0.78, 0.62, 0.32, 1] : item.p?.id === 'gpii' ? [0.28, 0.52, 0.34, 1] : [0.5, 0.48, 0.42, 1];
  piazze.mesh(item.name, item.geom.pos, item.geom.idx, col, { tipo: 'piazza', nome: item.p?.nome || 'altre' });
}
piazze.mesh('pianta-ve3', terrace.pos, terrace.idx, [0.86, 0.48, 0.34, 1], { tipo: 'pianta misurata nel gioco', quota: VE3_Y });
piazze.mesh('fontana-ve3', ...(() => { const d = disc(FX, FZ, VE3_Y + 0.05, 3.35); return [d.pos, d.idx]; })(), [0.15, 0.35, 0.55, 1], { tipo: 'ingombro vasca', raggio: 3.35 });
[[-21.3, 17.3], [-10.6, 17.3], [16.1, 17.3], [26.4, 17.3]].forEach(([u, w], i) => {
  const [x, z] = xzOf(u, w);
  piazze.empty(`ve3-croce-${i + 1}`, x, VE3_Y, z, { u, w });
});
stamp(piazze);

const SPECIE = [
  { nome: 'latifoglia', color: [0.22, 0.35, 0.16, 1] },
  { nome: 'pino', color: [0.16, 0.30, 0.14, 1] },
  { nome: 'ulivo', color: [0.40, 0.45, 0.28, 1] },
  { nome: 'agrume', color: [0.16, 0.32, 0.12, 1] },
  { nome: 'palma', color: [0.24, 0.38, 0.16, 1] },
  { nome: 'cespuglio', color: [0.28, 0.40, 0.18, 1] },
];
const unit = treeUnit();
const buckets = SPECIE.map(() => ({ t: [], r: [], s: [] }));
const flatTrees = model.trees || [];
let nAlberi = 0;
for (let i = 0; i + 5 < flatTrees.length; i += 6) {
  const x = flatTrees[i], z = flatTrees[i + 1], y = flatTrees[i + 2];
  let h = flatTrees[i + 3], rad = flatTrees[i + 4], sp = flatTrees[i + 5] | 0;
  if (ve3TreeClash(x, z)) continue;
  if (sp < 0 || sp > 5) sp = 0;
  if (sp !== 5) {
    h = Math.max(sp === 3 ? 2.5 : 3, h);
    rad = Math.max(1, rad);
    if (Math.hypot(x + 8.54, z + 31.15) < 48) { if (rad > 3.3) rad = 3.3; if (h > 5.5) h = 5.5; }
  }
  const ang = (i * 2.39996) % (Math.PI * 2);
  const b = buckets[sp];
  b.t.push(x, y, z);
  b.r.push(0, Math.sin(ang / 2), 0, Math.cos(ang / 2));
  b.s.push(rad, h, rad);
  nAlberi++;
}
const alberi = new Glb();
buckets.forEach((b, sp) => {
  if (!b.t.length) return;
  alberi.instances(`alberi-${SPECIE[sp].nome}`, unit.pos, unit.idx, SPECIE[sp].color,
    Float32Array.from(b.t), Float32Array.from(b.r), Float32Array.from(b.s),
    { tipo: 'istanze', specie: SPECIE[sp].nome, n: b.t.length / 3 });
});
stamp(alberi);

mkdirSync(outDir, { recursive: true });
const files = {};
function save(name, buf) {
  const p = join(outDir, name);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, buf);
  files[name] = statSync(p).size;
  console.log(`${name}  ${(files[name] / 1048576).toFixed(2)} MB`);
}

for (const stale of ['paese-lite.glb', 'piazze.obj', 'piazze.mtl']) {
  try { unlinkSync(join(outDir, stale)); } catch { /* export precedente */ }
}
save('terreno.glb', terreno.toBuffer());
save('edifici.glb', edifici.toBuffer());
save('strade.glb', strade.toBuffer());
save('piazze.glb', piazze.toBuffer());
save('alberi.glb', alberi.toBuffer());

const mb = (n) => `${(n / 1048576).toFixed(2)} MB`;
const b3 = (id) => boxJson(plazaBounds[id]);
const rif = {
  copertura: 'tutto il modello del paese (MDT urbano). Niente mare, niente litorale di sfondo, niente skybox.',
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
  paese: boxJson(townBounds),
  facciataMunicipio: { x: FAX, z: FAZ, y: VE3_Y, nota: 'facciata nord DBTR, qualche metro a nord dell’origine' },
  fontanaVe3: { x: FX, z: FZ, y: VE3_Y, raggioAcqua: 3.35 },
  piazze: {
    ve3: { nome: PLAZZE[0].nome, osm: b3('ve3'), piantaGioco: boxJson(terraceBounds) },
    liberta: { nome: PLAZZE[1].nome, osm: b3('liberta') },
    gpii: { nome: PLAZZE[2].nome, osm: b3('gpii') },
  },
  edifici: indice.length,
  edificiConFalda: nFalda,
  alberi: nAlberi,
};
writeFileSync(join(outDir, 'riferimento.json'), JSON.stringify(rif, null, 2));
writeFileSync(join(outDir, 'edifici.json'), JSON.stringify(indice));
files['edifici.json'] = statSync(join(outDir, 'edifici.json')).size;

const fmt = (b) => `X ${b.xMin}…${b.xMax} m (est ${b.larghezzaEst} m), Z ${b.zMin}…${b.zMax} m (sud ${b.profonditaSud} m), Y ${b.yMin}…${b.yMax} m s.l.m.`;
const readme = `# Acquedolci — export per Blender

Tutto il modello del paese in \`acquedolci-reale\`, spezzato perché pesa. Stessa origine in ogni file: si importano insieme e coincidono.

Non c’è il mare (né la superficie dell’acqua né il fondale sotto zero) e non c’è lo sfondo (niente ortofoto del litorale fino a Cefalù e alle Eolie, niente cielo).

## Unità e assi

- **1 unità = 1 metro.**
- Nel **GLB** (glTF, Y-up), come nel gioco: **X = est**, **Y = su**, **Z = sud**.
- Y è la quota del MDT 2013 in **metri sul livello del mare**. Y = 0 è il mare, non il marciapiede. All’origine il suolo è a **${round(y0)} m**.
- Blender all’import converte Y-up in Z-up (rotazione standard del glTF). Dopo l’import: **X = est**, **Y = nord** (il −Z del file), **Z = su**. Non ruotare a mano.
- In ogni file: empty \`origine\` a (0, 0, 0), \`suolo-origine\` sul terreno, \`facciata-municipio\`, e tre assi da 40 m (\`asse-X-est\` rosso, \`asse-Y-su\` verde, \`asse-Z-sud\` blu). Non fanno parte del paese.

## Origine

Punto del **Municipio** (\`city.json\`): longitudine ${city.originLonLat.lon}, latitudine ${city.originLonLat.lat}. Nel gioco è arrotondata a UTM 33N (EPSG:25833) **${OX} E, ${OY} N**.

La facciata nord del palazzo sta a X = ${FAX}, Z = ${FAZ}. La fontana di VE3 è a X = ${FX}, Z = ${FZ}, raggio dell’acqua 3,35 m.

## File

Tutti coprono **l’intero paese**, non un ritaglio. Si importano nello stesso blend.

| File | Contenuto | Peso |
| --- | --- | --- |
| \`terreno.glb\` | MDT del riquadro urbano, passo ${dtmMeta.step} m. I triangoli tutti sotto il livello del mare sono tolti | ${mb(files['terreno.glb'])} |
| \`edifici.glb\` | ${indice.length} volumi DBTR, di cui ${nFalda} con tetto a falde (scheletro del modello). Oggetto \`edificio-<id>\` | ${mb(files['edifici.glb'])} |
| \`strade.glb\` | Asfalto, marciapiedi e basolato di tutto il paese, appoggiati sul MDT | ${mb(files['strade.glb'])} |
| \`piazze.glb\` | Tutte le superfici di piazza, più la pianta misurata di VE3, la fontana e le quattro croci | ${mb(files['piazze.glb'])} |
| \`alberi.glb\` | ${nAlberi} alberi misurati, istanze leggere (un prototipo per specie). In Blender: import glTF con le istanze | ${mb(files['alberi.glb'])} |
| \`edifici.json\` | Indice id, tipo, baricentro, piede, tetto | ${mb(files['edifici.json'])} |

Il volume di un edificio parte da \`min(b, g)\` e arriva a \`g + h\` (gronda). Se c’è la falda, i vertici del tetto salgono di \`t · tan\`. Sulle terrazze con parapetto, il muretto è alto 1 m.

Estensione del terreno esportato: ${fmt(boxJson(townBounds))}.

Fonti: DBTR 2013 e MDT 2013 SITR (CC BY 4.0), strade e piazze © OpenStreetMap (ODbL), alberi Meta/WRI (CC BY 4.0).

## Bounding box delle tre piazze (metri locali)

- **Piazza Vittorio Emanuele III**, poligono: ${fmt(b3('ve3'))}
- **VE3, pianta del gioco** (\`pianta-ve3\`): ${fmt(boxJson(terraceBounds))}
- **Piazza Libertà**: ${fmt(b3('liberta'))}
- **Piazza Giovanni Paolo II**: ${fmt(b3('gpii'))}

## Rientro dei modelli

Stesso origine, stessi assi, stessa scala. In Blender: importare questi GLB, modellare, esportare **glTF Binary** con le opzioni di default (Y-up lo fa l’esportatore). Non applicare scala né rotazione. Gli assi e gli empty non vanno riesportati.

| File | Dove | Cosa sostituisce |
| --- | --- | --- |
| \`plaza-ve3.glb\` | \`acquedolci-reale/public/models/plaza-ve3.glb\` | la mesh di \`buildVe3Plaza\` in \`src/piazza-ve3.js\` |
| \`plaza-liberta.glb\` | \`acquedolci-reale/public/models/plaza-liberta.glb\` | la superficie di Piazza Libertà in \`buildStreets\` (\`src/streets.js\`) |
| \`plaza-gpii.glb\` | \`acquedolci-reale/public/models/plaza-gpii.glb\` | la superficie di Piazza Giovanni Paolo II, stesso punto |

Il caricatore non c’è ancora: i file vanno posati in \`public/models/\` a identità (niente traslazione, niente scala).

## Rigenerare

Dalla cartella \`acquedolci-reale\`, dopo \`npm install\`:

\`\`\`
node scripts/export-blender.mjs /percorso/output
\`\`\`
`;
writeFileSync(join(outDir, 'README.md'), readme);
console.log('README e riferimento scritti in', outDir);
console.log(JSON.stringify(rif.piazze, null, 2));
