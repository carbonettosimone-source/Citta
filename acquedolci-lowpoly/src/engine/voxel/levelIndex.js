/**
 * Indice spaziale sul livello compilato (compiler/compileLevel.js), per rispondere in fretta
 * "che materiale e che quota ha il mondo continuo in (x,z)?" — la stessa domanda che
 * level/buildLevel.js faceva per generare la mesh continua, qui serve per riempire una colonna
 * della griglia voxel. Il compilatore non cambia: cambia solo cosa si fa con la sua risposta.
 *
 * Un solo anello (la carreggiata "car") ha 13.036 vertici (l'intera rete stradale è UN poligono
 * con buchi): con ~50 milioni di colonne da voxelizzare in tutta Acquedolci, un test punto-in-
 * poligono O(lati) per colonna contro quell'anello da solo costa svariate ore. Ogni anello viene
 * quindi indicizzato una volta sola per fasce di quota Z (5 m): il test in un punto scorre solo i
 * lati della sua fascia, non tutto l'anello.
 */
import { buildHeightField } from '../compiler/heightField.js';
import { MAT } from './voxelConfig.js';

const Z_BUCKET = 5; // m

/** Anello → indice per fasce di Z: ring[j] resta per il segno del test, gli edge sono ripartiti. */
function indexRing(points) {
  const buckets = new Map();
  const n = points.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const a = points[j], b = points[i];
    const zmin = Math.min(a.z, b.z), zmax = Math.max(a.z, b.z);
    const b0 = Math.floor(zmin / Z_BUCKET), b1 = Math.floor(zmax / Z_BUCKET);
    for (let bk = b0; bk <= b1; bk++) {
      let arr = buckets.get(bk);
      if (!arr) buckets.set(bk, (arr = []));
      arr.push(a.x, a.z, b.x, b.z);
    }
  }
  return buckets;
}
function pointInIndexedRing(x, z, buckets) {
  const arr = buckets.get(Math.floor(z / Z_BUCKET));
  if (!arr) return false;
  let inside = false;
  for (let k = 0; k < arr.length; k += 4) {
    const xi = arr[k], zi = arr[k + 1], xj = arr[k + 2], zj = arr[k + 3];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
function decodeRing(flat, unit) {
  const out = [];
  for (let i = 0; i < flat.length; i += 2) out.push({ x: flat[i] * unit, z: flat[i + 1] * unit });
  return out;
}
function bboxOf(points) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const p of points) {
    if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
    if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
  }
  return { minX, maxX, minZ, maxZ };
}
function pointInEntry(x, z, entry) {
  if (!pointInIndexedRing(x, z, entry.outerIdx)) return false;
  for (const h of entry.holesIdx) if (pointInIndexedRing(x, z, h)) return false;
  return true;
}

const BUCKET = 40; // m: più grande della maggior parte dei poligoni del livello, poche celle da testare
class SpatialIndex {
  constructor() { this.map = new Map(); }
  key(i, j) { return i * 200003 + j; }
  add(entry) {
    const i0 = Math.floor(entry.bbox.minX / BUCKET), i1 = Math.floor(entry.bbox.maxX / BUCKET);
    const j0 = Math.floor(entry.bbox.minZ / BUCKET), j1 = Math.floor(entry.bbox.maxZ / BUCKET);
    for (let i = i0; i <= i1; i++) {
      for (let j = j0; j <= j1; j++) {
        const k = this.key(i, j);
        let arr = this.map.get(k);
        if (!arr) this.map.set(k, (arr = []));
        arr.push(entry);
      }
    }
  }
  candidates(x, z) {
    return this.map.get(this.key(Math.floor(x / BUCKET), Math.floor(z / BUCKET))) || EMPTY;
  }
}
const EMPTY = [];

// Ordine di priorità: il primo strato che contiene il punto vince (gli strati del compilatore
// sono già una partizione senza sovrapposizioni; l'ordine è solo una rete di sicurezza).
const LAYER_ORDER = ['terrace', 'steps', 'car', 'alley', 'sidewalk', 'ped', 'beach', 'yard', 'green', 'sea'];
const LIFT = { car: 0, alley: 0, beach: 0, sidewalk: 1, ped: 1, yard: 1, green: 1, sea: 0 }; // ×CURB
const MAT_OF = { car: MAT.CAR, alley: MAT.ALLEY, sidewalk: MAT.SIDEWALK, ped: MAT.PED, beach: MAT.BEACH, yard: MAT.YARD, green: MAT.GREEN, sea: MAT.SEA };

/**
 * @param {object} level JSON del compilatore
 * @param {(x:number,z:number)=>number} demY quota locale grezza (per il terreno naturale e il campo lisciato)
 */
export function buildLevelIndex(level, demY) {
  const unit = level.unit || 0.1;
  const hp = level.params?.heightField || { step: 2, sigma: 6, margin: 40 };
  const r = level.rect;
  const field = buildHeightField(demY, { minX: r.minX - hp.margin, maxX: r.maxX + hp.margin, minZ: r.minZ - hp.margin, maxZ: r.maxZ + hp.margin }, hp);
  const CURB = level.params?.curb ?? 0.15;

  const idx = new SpatialIndex();
  for (const name of LAYER_ORDER) {
    for (const e of level.layers[name] || []) {
      const outer = decodeRing(e.o, unit);
      const holes = (e.h || []).map((h) => decodeRing(h, unit));
      const entry = {
        layer: name,
        bbox: bboxOf(outer),
        outerIdx: indexRing(outer),
        holesIdx: holes.map(indexRing),
      };
      if (name === 'terrace') { entry.mat = e.sub === 'green' ? MAT.GREEN : MAT.YARD; entry.height = e.c; }
      else if (name === 'steps') { entry.mat = MAT.STEPS; entry.height = e.c; }
      else { entry.mat = MAT_OF[name]; entry.lift = (LIFT[name] || 0) * CURB; }
      idx.add(entry);
    }
  }

  /**
   * Materiale e quota (metri, mondo) nel punto (x,z). Fuori da ogni strato → terreno naturale.
   * `flat`: true per terrazzi/gradini (quota fissa `c` per poligono, un vero gradino voluto),
   * false per le superfici che seguono il campo liscio (strada, marciapiede, spiaggia, prato…) —
   * la distinzione conta per il motore voxel: solo le prime restano "a blocco", le seconde
   * diventano una rampa continua invece di un gradinato per arrotondamento (vedi voxelizeChunk.js).
   */
  function sampleColumn(x, z) {
    for (const c of idx.candidates(x, z)) {
      if (x < c.bbox.minX || x > c.bbox.maxX || z < c.bbox.minZ || z > c.bbox.maxZ) continue;
      if (!pointInEntry(x, z, c)) continue;
      if (c.height != null) return { mat: c.mat, height: c.height, flat: true };
      return { mat: c.mat, height: field.sample(x, z) + c.lift, flat: false };
    }
    return { mat: MAT.TERRAIN, height: field.sample(x, z), flat: false };
  }

  return { sampleColumn, field, rect: r, unit, seaY: level.seaY ?? null, curb: CURB };
}
