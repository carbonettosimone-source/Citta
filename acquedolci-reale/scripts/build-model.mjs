#!/usr/bin/env node
/**
 * Fonde i dati reali in un solo modello per il renderer (public/data/model.json):
 *  - pianta: DBTR 2013 (SITR)
 *  - altezza: LiDAR MASE — DSM − DTM dello STESSO rilievo (nessun errore di datum)
 *  - quota del piede: MDT 2013 SITR (lo stesso terreno che disegna il renderer), minimo sul perimetro
 *  - tetto: piano o a falde dalla dispersione dei punti DSM sul tetto
 *  - facciata: tavolozza reale (data/facade-palette.json, da foto street-level) se presente
 * Coordinate locali: X = est, Z = sud, metri, origine al Municipio.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { toUtm33 } from './geo.mjs';

const root = new URL('..', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root)));
const city = read('city.json');
const { buildings } = read('data/buildings.json');
const lidar = existsSync(new URL('data/lidar-cache.json', root)) ? read('data/lidar-cache.json') : {};
const dtmMeta = read('data/dtm.json');
const dtmBuf = readFileSync(new URL('data/dtm.bin', root));
const dtm = new Float32Array(dtmBuf.buffer, dtmBuf.byteOffset, dtmBuf.byteLength / 4);
// colori di facciata misurati dall'ortofoto (facade-from-ortho.mjs); per gli edifici dove la
// facciata non si vede si pesca dalla distribuzione di QUELLI misurati: tavolozza reale del paese
const facade = existsSync(new URL('data/facade-colors.json', root)) ? read('data/facade-colors.json').buildings : {};
const palette = Object.values(facade).map((f) => f.c);

const [OX, OY] = toUtm33(city.originLonLat.lon, city.originLonLat.lat).map((v) => Math.round(v));

function terrainAt(x, y) {
  const c = (x - dtmMeta.xmin) / dtmMeta.step, r = (dtmMeta.ymax - y) / dtmMeta.step;
  const c0 = Math.max(0, Math.min(dtmMeta.width - 2, Math.floor(c))), r0 = Math.max(0, Math.min(dtmMeta.height - 2, Math.floor(r)));
  const fx = Math.min(1, Math.max(0, c - c0)), fy = Math.min(1, Math.max(0, r - r0));
  const g = (i, j) => dtm[j * dtmMeta.width + i];
  return g(c0, r0) * (1 - fx) * (1 - fy) + g(c0 + 1, r0) * fx * (1 - fy) + g(c0, r0 + 1) * (1 - fx) * fy + g(c0 + 1, r0 + 1) * fx * fy;
}

function hash(n) { let h = n * 2654435761 >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822519) >>> 0; h ^= h >>> 13; return (h >>> 0) / 4294967296; }
function area(ring) { let a = 0; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) a += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1]; return Math.abs(a) / 2; }

/** Rettangolo orientato minimo (per i tetti a falde): asse lungo, lati, rettangolarità. */
function obb(ring) {
  let best = null;
  for (let i = 0; i < ring.length - 1; i++) {
    const [ax, ay] = ring[i], [bx, by] = ring[i + 1];
    const L = Math.hypot(bx - ax, by - ay); if (L < 0.5) continue;
    const ux = (bx - ax) / L, uy = (by - ay) / L;
    let a0 = Infinity, a1 = -Infinity, b0 = Infinity, b1 = -Infinity;
    for (const [x, y] of ring) { const p = x * ux + y * uy, q = -x * uy + y * ux; a0 = Math.min(a0, p); a1 = Math.max(a1, p); b0 = Math.min(b0, q); b1 = Math.max(b1, q); }
    const A = (a1 - a0) * (b1 - b0);
    if (!best || A < best.A) best = { A, ux, uy, a0, a1, b0, b1 };
  }
  return best;
}

// quota tipica per tipo quando il LiDAR non copre (colline a sud della striscia costiera)
function fallbackHeight(code, A, id) {
  if (code === 'B006') return 2.6 + hash(id) * 0.8;           // baracca
  if (code === 'B007') return 3.0;                            // tettoia
  if (code === 'B010') return 3.5;                            // serra
  if (code === 'B003') return 12;                             // chiesa
  if (A < 60) return 3.2 + hash(id) * 1.5;
  return 6.3 + Math.round(hash(id) * 1.4) * 3.1;              // 2-3 piani, il tipico delle frazioni
}

const DEFAULT_PALETTE = [[228, 214, 190], [236, 226, 206], [214, 196, 168], [226, 206, 170], [200, 188, 170], [232, 220, 196], [218, 180, 150], [206, 204, 196], [188, 170, 150], [240, 232, 214]];
const pal = palette?.length ? palette : DEFAULT_PALETTE;

const stats = { lidar: 0, fallback: 0, pitched: 0, flat: 0, clamped: 0 };
const out = [];
for (const b of buildings) {
  const ring = b.rings[0];
  const A = area(ring);
  if (A < 4) continue;
  let base = Infinity;
  for (const [x, y] of ring) base = Math.min(base, terrainAt(x, y));
  const L = lidar[b.id];
  const vals = (L?.dsm || []).filter((v) => v != null && L.dtm != null).map((v) => v - L.dtm);
  let h, ridge = 0;
  if (vals.length && L.dtm != null) {
    stats.lidar++;
    vals.sort((a, c) => a - c);
    const med = vals[vals.length >> 1], lo = vals[0], hi = vals[vals.length - 1];
    h = med;
    const o = obb(ring);
    const rect = o ? A / o.A : 0;
    // falde: dispersione sul tetto ≥1,2 m, pianta quasi rettangolare, colmo plausibile
    if (vals.length >= 3 && hi - lo >= 1.2 && hi - lo <= 6 && rect > 0.8 && b.code !== 'B007') {
      h = Math.max(2.4, lo - 0.3); ridge = Math.min(6, hi - h);
      stats.pitched++;
    } else stats.flat++;
    const cap = b.code === 'B006' ? 5 : b.code === 'B007' ? 6 : 40;
    if (h < 2.2 || h > cap) {
      // basso: baracche e tettoie lo sono davvero (il pixel da 2 m si mescola al suolo); un
      // edificio civile sotto i 2 m vuol dire pianta più piccola del pixel o costruito dopo il volo
      // LiDAR — lì il dato non rappresenta l'edificio e vale la stima per tipo. Alto oltre il
      // plausibile per il tipo: chioma d'albero sopra una baracca.
      stats.clamped++;
      const small = b.code === 'B006' || b.code === 'B007' || b.code === 'B010';
      h = h > cap ? fallbackHeight(b.code, A, b.id) : small ? 2.4 + hash(b.id) * 0.4 : fallbackHeight(b.code, A, b.id);
      ridge = 0;
    }
  } else {
    stats.fallback++;
    h = fallbackHeight(b.code, A, b.id);
    stats.flat++;
  }
  // suolo "vero" dell'edificio: al centro (dove il LiDAR ha misurato il DTM), non il minimo del
  // perimetro — su un lotto in pendenza il tetto si misura dal centro, i muri scendono fino al piede
  let cx = 0, cy = 0; for (const [x, y] of ring) { cx += x; cy += y; } cx /= ring.length; cy /= ring.length;
  const [gx, gy] = L?.pts?.[0] || [cx, cy];
  const ground = Math.max(base, terrainAt(gx, gy));
  const floors = Math.max(1, Math.round(h / 3.1));
  const measuredColor = facade[b.id]?.c;
  const color = measuredColor || pal[Math.floor(hash(b.id + 7) * pal.length) % pal.length];
  const r = [];
  for (const [x, y] of ring.slice(0, -1)) r.push(+(x - OX).toFixed(2), +(-(y - OY)).toFixed(2));
  const o = ridge ? obb(ring) : null;
  out.push({
    id: b.id, t: b.code, r,
    b: +base.toFixed(2), g: +ground.toFixed(2), h: +h.toFixed(2), k: +ridge.toFixed(2), f: floors, c: color,
    ...(o ? { ax: [+o.ux.toFixed(4), +(-o.uy).toFixed(4)] } : {}),
    src: vals.length ? 'lidar' : 'stima',
    ...(measuredColor ? { cm: 1 } : {}),
  });
}

// POI: nomi veri da OSM (già scaricato dal vecchio motore) → coordinate locali
const pois = [];
const osmPath = new URL('../acquedolci-lowpoly/public/data/acquedolci.json', root);
if (existsSync(osmPath)) {
  const osm = JSON.parse(readFileSync(osmPath));
  for (const f of osm.features) {
    const p = f.properties;
    if (!p.name) continue;
    const interesting = p.amenity || p.railway === 'station' || p.place === 'square' || p.tourism || p.historic || p.leisure === 'park';
    if (!interesting) continue;
    let lon, lat;
    if (f.geometry.type === 'Point') [lon, lat] = f.geometry.coordinates;
    else { const cs = f.geometry.type === 'Polygon' ? f.geometry.coordinates[0] : f.geometry.coordinates; lon = cs.reduce((s, c) => s + c[0], 0) / cs.length; lat = cs.reduce((s, c) => s + c[1], 0) / cs.length; }
    const [x, y] = toUtm33(lon, lat);
    pois.push({ name: p.name, kind: p.amenity || p.railway || p.place || p.tourism || p.historic || p.leisure, x: +(x - OX).toFixed(1), z: +(-(y - OY)).toFixed(1), y: +terrainAt(x, y).toFixed(1) });
  }
}

// Alberi veri: mappa globale delle chiome Meta/WRI (1 m, CC BY 4.0) già scaricata dal vecchio
// motore, in coordinate equirettangolari centrate su (38.056, 14.585) → UTM → locali. Fuori dagli
// edifici DBTR (le chiome sopra i tetti sono spesso falsi positivi del modello).
const trees = [];
const canopyPath = new URL('../acquedolci-lowpoly/public/data/canopy/acquedolci.json', root);
if (existsSync(canopyPath)) {
  const can = JSON.parse(readFileSync(canopyPath));
  const LAT0 = 38.056, LON0 = 14.585, MLAT = 111320, MLON = 111320 * Math.cos((LAT0 * Math.PI) / 180);
  const grid = new Map(), CELL = 20;
  for (const bb of out) {
    for (let i = 0; i < bb.r.length; i += 2) {
      const k = `${Math.floor(bb.r[i] / CELL)},${Math.floor(bb.r[i + 1] / CELL)}`;
      if (!grid.has(k)) grid.set(k, new Set()); grid.get(k).add(bb);
    }
  }
  const inside = (x, z) => {
    const set = grid.get(`${Math.floor(x / CELL)},${Math.floor(z / CELL)}`); if (!set) return false;
    for (const bb of set) { const r = bb.r; let ins = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) { if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) ins = !ins; } if (ins) return true; }
    return false;
  };
  // diradamento: al più un albero (il più alto) per cella da 6 m — resta la forma dei boschi e dei
  // filari, non 157 mila istanze
  const best = new Map();
  for (const t of can.trees) { const k = `${Math.floor(t.x / 6)},${Math.floor(t.z / 6)}`; const o = best.get(k); if (!o || t.height > o.height) best.set(k, t); }
  for (const t of best.values()) {
    const lon = LON0 + t.x / MLON, lat = LAT0 - t.z / MLAT;
    const [ux, uy] = toUtm33(lon, lat);
    const x = ux - OX, z = -(uy - OY);
    if (inside(x, z)) continue;
    trees.push(+x.toFixed(1), +z.toFixed(1), +terrainAt(ux, uy).toFixed(1), +Math.min(22, t.height).toFixed(1), +Math.min(8, t.crownRadius || 2).toFixed(1));
  }
}
console.log('alberi', trees.length / 5);

mkdirSync(new URL('public/data', root), { recursive: true });
writeFileSync(new URL('public/data/model.json', root), JSON.stringify({
  origin: [OX, OY], epsg: 25833, buildings: out, pois, trees,
  sources: ['Edifici: DBTR 2013 CTR 1:10.000 — SITR Regione Siciliana (CC BY 4.0)', 'Altezze: LiDAR PST — MASE Geoportale Nazionale', 'Terreno: MDT 2013 — SITR (CC BY 4.0)', 'Ortofoto 2022 — SITR (CC BY 4.0)', 'Nomi: © OpenStreetMap contributors', 'Alberi: Meta/WRI High Resolution Canopy Height (CC BY 4.0)'],
}));
console.log(`modello: ${out.length} edifici, ${pois.length} POI`, stats);

// terreno e ortofoto accanto al modello: il renderer li legge con percorsi relativi (data/...)
import { cpSync, rmSync } from 'node:fs';
// terreno per il web: quote in decimetri (Uint16, 10 cm bastano) in base64 dentro un JSON — un
// .bin non è un tipo servito dove si pubblica, e così pesa meno della metà dei Float32
{
  const dm = new Uint16Array(dtm.length);
  for (let i = 0; i < dtm.length; i++) dm[i] = Math.max(0, Math.min(65535, Math.round(dtm[i] * 10)));
  writeFileSync(new URL('public/data/dtm.json', root), JSON.stringify({ ...dtmMeta, encoding: 'uint16-dm-base64', data: Buffer.from(dm.buffer).toString('base64') }));
  rmSync(new URL('public/data/dtm.bin', root), { force: true });
}
cpSync(new URL('data/ortho.json', root), new URL('public/data/ortho.json', root));
cpSync(new URL('data/ortho/', root), new URL('public/data/ortho/', root), { recursive: true });
console.log('→ public/data (model.json, dtm, ortofoto)');
