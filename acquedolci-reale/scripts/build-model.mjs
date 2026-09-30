#!/usr/bin/env node
/**
 * Fonde i dati reali in un solo modello per il renderer (public/data/model.json):
 *  - pianta: DBTR 2013 (SITR)
 *  - altezza: LiDAR MASE — DSM − DTM dello STESSO rilievo (nessun errore di datum)
 *  - quota del piede: MDT 2013 SITR (lo stesso terreno che disegna il renderer), minimo sul perimetro
 *  - tetto: a falde se lo dicono il LiDAR (dispersione dei punti sul tetto) o il colore dei coppi
 *    nell'ortofoto; falde su qualunque pianta con lo straight skeleton (padiglione); sulle terrazze
 *    parapetto, casotti scala dove il LiDAR vede un volume sopra il tetto, cisterne e solari
 *  - facciata: colore letto dall'ortofoto (facade-from-ortho.mjs) o dalla distribuzione di quelli
 * Coordinate locali: X = est, Z = sud, metri, origine al Municipio.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { toUtm33 } from './geo.mjs';
import { toLab, fromLab, quantiles, rankIn, atRank } from './lib/lab.mjs';
import { decodePNG } from './lib/png.mjs';

// straight skeleton (CGAL compilato in Wasm, solo per il web): ambiente minimo per caricarlo in Node
globalThis.self = globalThis; globalThis.window = globalThis; globalThis.document = { currentScript: { src: 'http://localhost/' } };
const { SkeletonBuilder } = createRequire(import.meta.url)('straight-skeleton');
await SkeletonBuilder.init();
delete globalThis.window; delete globalThis.document;

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
const palette = Object.values(facade).filter((f) => f.c).map((f) => f.c);

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

/**
 * Calibrazione sulle foto dal vero (photo-palette.mjs): l'ortofoto vede le facciate di sbieco e le
 * tinge di rosa-malva (a* mediano 6 contro 1 nelle foto). La luminosità misurata resta; la tinta
 * (a*, b*) passa per quantili sulla distribuzione dell'intonaco fotografato: l'edificio più giallo
 * resta il più giallo, ma i colori tornano quelli che si vedono per strada.
 */
const photoPal = existsSync(new URL('data/photo-palette.json', root)) ? read('data/photo-palette.json') : null;
const srcQ = photoPal && pal.length > 50 ? [1, 2].map((k) => quantiles(pal.map((c) => toLab(c)[k]))) : null;
function calibrate(c) {
  if (!srcQ) return c;
  const [l, a, b] = toLab(c);
  return fromLab([l, atRank(photoPal.a, rankIn(srcQ[0], a)), atRank(photoPal.b, rankIn(srcQ[1], b))]);
}

function hsv([r, g, b]) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0;
  if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [(h * 60 + 360) % 360, mx ? d / mx : 0, mx / 255];
}
/** coppi visti dall'alto: arancio-terracotta abbastanza saturo */
function tileColored(c) { if (!c) return false; const [h, s, v] = hsv(c); return (h < 40 || h > 340) && s >= 0.25 && v >= 0.3; }

/** Tetto a padiglione su qualsiasi pianta: straight skeleton sull'anello UTM (antiorario per CGAL). */
function skeleton(ring) {
  const pts = ring.slice(0, -1);
  let a2 = 0; for (let i = 0; i < pts.length; i++) { const [ax, ay] = pts[i], [bx, by] = pts[(i + 1) % pts.length]; a2 += ax * by - bx * ay; }
  const ccw = a2 < 0 ? pts.slice().reverse() : pts.slice();
  // coordinate relative al primo vertice: CGAL lavora meglio vicino all'origine
  const [ox, oy] = ccw[0];
  const rel = ccw.map(([x, y]) => [x - ox, y - oy]);
  rel.push(rel[0]);
  let res = null;
  try { res = SkeletonBuilder.buildFromPolygon([rel]); } catch { return null; }
  if (!res?.polygons?.length) return null;
  let tmax = 0;
  const v = [];
  for (const [x, y, t] of res.vertices) { tmax = Math.max(tmax, t); v.push(+(x + ox - OX).toFixed(2), +(-(y + oy - OY)).toFixed(2), +t.toFixed(2)); }
  return { v, f: res.polygons, tmax };
}

const stats = { lidar: 0, fallback: 0, pitched: 0, pitchedByColor: 0, flat: 0, clamped: 0, skeletonFail: 0, casotti: 0, parapets: 0 };
const out = [];
const TAN_DEFAULT = Math.tan((20 * Math.PI) / 180); // coppi siciliani: 30-40% di pendenza
for (const b of buildings) {
  const ring = b.rings[0];
  const A = area(ring);
  if (A < 4) continue;
  let base = Infinity;
  for (const [x, y] of ring) base = Math.min(base, terrainAt(x, y));
  const L = lidar[b.id];
  const pairs = (L?.dsm || []).map((v, i) => ({ v: v != null && L.dtm != null ? v - L.dtm : null, p: L.pts?.[i] })).filter((q) => q.v != null);
  const vals = pairs.map((q) => q.v).sort((a, c) => a - c);
  const roofC = facade[b.id]?.roof;
  const tile = tileColored(roofC);
  let h, med = null, spread = 0, measured = false;
  if (vals.length) {
    stats.lidar++;
    med = vals[vals.length >> 1]; spread = vals[vals.length - 1] - vals[0];
    h = med; measured = true;
    const cap = b.code === 'B006' ? 5 : b.code === 'B007' ? 6 : 40;
    if (h < 2.2 || h > cap) {
      // basso: baracche e tettoie lo sono davvero (pixel da 2 m mescolato al suolo); un edificio
      // civile sotto i 2 m = pianta più piccola del pixel o costruito dopo il volo → stima per tipo.
      // Alto oltre il plausibile per il tipo: chioma d'albero sopra una baracca.
      stats.clamped++; measured = false;
      const small = b.code === 'B006' || b.code === 'B007' || b.code === 'B010';
      h = h > cap ? fallbackHeight(b.code, A, b.id) : small ? 2.4 + hash(b.id) * 0.4 : fallbackHeight(b.code, A, b.id);
    }
  } else { stats.fallback++; h = fallbackHeight(b.code, A, b.id); }

  // ---- falde o terrazza
  const n = measured ? vals.length : 0;
  const canPitch = A >= 20 && !['B007', 'B010', 'B009'].includes(b.code);
  const byLidar = n >= 3 && spread >= 1.0 && spread <= 7;
  const byLidarAndColor = n >= 3 && tile && spread >= 0.6;
  const byColor = n < 3 && tile;
  let roof = null;
  if (canPitch && (byLidar || byLidarAndColor || byColor || b.code === 'B003')) {
    const sk = skeleton(ring);
    if (sk && sk.tmax > 0.5) {
      let tanP = TAN_DEFAULT;
      if (byLidar || byLidarAndColor) {
        // pendenza misurata: salita colmo−gronda (dispersione + i 0,8 m di margine dai muri) sulla
        // mezza larghezza dello scheletro
        tanP = Math.min(Math.tan(0.61), Math.max(Math.tan(0.24), (spread + 0.4) / sk.tmax));
        h = Math.max(2.4, vals[0] - 0.3);
      } else if (measured) {
        h = Math.max(2.4, med - 0.45 * sk.tmax * tanP); // la mediana cade a metà falda
      }
      if (sk.tmax * tanP > 8) tanP = 8 / sk.tmax;
      roof = { v: sk.v, f: sk.f, tan: +tanP.toFixed(3) };
      stats.pitched++; if (byColor) stats.pitchedByColor++;
    } else stats.skeletonFail++;
  }
  if (!roof) stats.flat++;

  // ---- suolo "vero" al centro (dove il LiDAR ha misurato il DTM), muri giù fino al piede
  let cx = 0, cy = 0; for (const [x, y] of ring) { cx += x; cy += y; } cx /= ring.length; cy /= ring.length;
  const [gx, gy] = L?.pts?.[0] || [cx, cy];
  const ground = Math.max(base, terrainAt(gx, gy));
  const floors = Math.max(1, Math.round(h / 3.1));
  const measuredColor = facade[b.id]?.c;
  const color = calibrate(measuredColor || pal[Math.floor(hash(b.id + 7) * pal.length) % pal.length]);
  const r = [];
  for (const [x, y] of ring.slice(0, -1)) r.push(+(x - OX).toFixed(2), +(-(y - OY)).toFixed(2));
  const loc = ([x, y]) => [+(x - OX).toFixed(2), +(-(y - OY)).toFixed(2)];

  // ---- terrazza: parapetto e ciò che sta sopra il tetto
  const extras = [];
  let parapet = 0;
  if (!roof && b.code === 'B001' && h >= 5) {
    parapet = 1; stats.parapets++;
    // casotto scala / volume tecnico: un punto LiDAR sul tetto 1,6–5 m sopra la mediana è un
    // volume vero, misurato — lì va il casotto, alto quanto il LiDAR dice
    const used = [];
    if (measured && n >= 3) {
      for (const q of pairs) {
        const dz = q.v - med;
        if (dz >= 1.6 && dz <= 5 && q.p && !used.some(([ux, uy]) => Math.hypot(ux - q.p[0], uy - q.p[1]) < 4)) {
          used.push(q.p); extras.push([0, ...loc(q.p), +Math.min(3.2, dz).toFixed(1)]); stats.casotti++;
        }
      }
    }
    // cisterne (onnipresenti sui tetti siciliani) e solari termici sui punti interni del tetto
    const spots = (L?.pts || []).filter((p) => !used.some(([ux, uy]) => Math.hypot(ux - p[0], uy - p[1]) < 3));
    const nt = spots.length ? 1 + Math.floor(hash(b.id * 3) * 2) : 0;
    for (let i = 0; i < nt && i < spots.length; i++) extras.push([1, ...loc(spots[Math.floor(hash(b.id + i * 17) * spots.length)])]);
    if (spots.length > 1 && hash(b.id * 5) < 0.3) extras.push([2, ...loc(spots[Math.floor(hash(b.id * 7) * spots.length)])]);
    if (hash(b.id * 11) < 0.35 && spots.length) extras.push([3, ...loc(spots[0])]);
  } else if (roof && b.code === 'B001' && hash(b.id * 11) < 0.3) {
    extras.push([3, ...loc([cx, cy])]); // antenna
  }

  out.push({
    id: b.id, t: b.code, r,
    b: +base.toFixed(2), g: +ground.toFixed(2), h: +h.toFixed(2), f: floors, c: color,
    ...(roof ? { roof } : {}),
    ...(parapet ? { pp: 1 } : {}),
    ...(extras.length ? { x: extras } : {}),
    src: measured ? 'lidar' : 'stima',
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

// ---- spazio libero davanti a ogni lato (m): 0 = muro in comune con il vicino (parete cieca, niente
// finestre), ≥4 = facciata su strada o cortile (finestre, balconi). Raggi dal lato verso l'esterno.
{
  const segsB = [];
  out.forEach((bb, bi) => { const r = bb.r; for (let i = 0; i < r.length; i += 2) { const j = (i + 2) % r.length; segsB.push([r[i], r[i + 1], r[j], r[j + 1], bi]); } });
  const C = 10, g2 = new Map();
  segsB.forEach((sg, i) => { for (let x = Math.floor(Math.min(sg[0], sg[2]) / C); x <= Math.floor(Math.max(sg[0], sg[2]) / C); x++) for (let z = Math.floor(Math.min(sg[1], sg[3]) / C); z <= Math.floor(Math.max(sg[1], sg[3]) / C); z++) { const k = `${x},${z}`; if (!g2.has(k)) g2.set(k, []); g2.get(k).push(i); } });
  const cast = (px, pz, dx, dz, self, maxT) => {
    let best = maxT; const seen = new Set();
    for (let t = 0; t <= maxT + C; t += C / 2) {
      for (const i of g2.get(`${Math.floor((px + dx * t) / C)},${Math.floor((pz + dz * t) / C)}`) || []) {
        if (seen.has(i)) continue; seen.add(i);
        const [ax, az, bx, bz, bi] = segsB[i]; if (bi === self) continue;
        const ex = bx - ax, ez = bz - az, den = dx * ez - dz * ex; if (Math.abs(den) < 1e-9) continue;
        const tt = ((ax - px) * ez - (az - pz) * ex) / den, u = ((ax - px) * dz - (az - pz) * dx) / den;
        if (tt > -0.05 && u >= 0 && u <= 1 && tt < best) best = Math.max(0, tt);
      }
      if (t > best) break;
    }
    return best;
  };
  const inR = (x, z, r) => { let ins = false; for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) if ((r[i + 1] > z) !== (r[j + 1] > z) && x < ((r[j] - r[i]) * (z - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) ins = !ins; return ins; };
  out.forEach((bb, bi) => {
    const r = bb.r, e = [];
    for (let i = 0; i < r.length; i += 2) {
      const j = (i + 2) % r.length, ax = r[i], az = r[i + 1], bx = r[j], bz = r[j + 1];
      const L = Math.hypot(bx - ax, bz - az); if (L < 0.05) { e.push(0); continue; }
      let nx = -(bz - az) / L, nz = (bx - ax) / L;
      const mx = (ax + bx) / 2, mz = (az + bz) / 2;
      if (inR(mx + nx * 0.1, mz + nz * 0.1, r)) { nx = -nx; nz = -nz; }
      // mediana di tre raggi (25/50/75%): un vicino che copre solo un pezzo di lato non lo accieca
      const d = [0.25, 0.5, 0.75].map((f) => cast(ax + (bx - ax) * f + nx * 0.05, az + (bz - az) * f + nz * 0.05, nx, nz, bi, 30)).sort((a, c) => a - c)[1];
      e.push(+d.toFixed(1));
    }
    bb.e = e;
  });
  const blind = out.reduce((s, bb) => s + bb.e.filter((d) => d < 0.4).length, 0), all = out.reduce((s, bb) => s + bb.e.length, 0);
  console.log(`lati: ${all}, ciechi (muro in comune) ${blind}`);
}

// ---- specie: aree agricole DBTR (uliveti, frutteti, macchia) + forma misurata della chioma
const vegAreas = existsSync(new URL('data/dbtr-extra.json', root)) ? read('data/dbtr-extra.json').vegAreas : [];
const vegIdx = vegAreas.map((f) => {
  const ring = f.parts[0]; let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const [x, y] of ring) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return { code: f.code, ring, x0, x1, y0, y1 };
});
function inRingXY(x, y, ring) { let ins = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const [xi, yi] = ring[i], [xj, yj] = ring[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ins = !ins; } return ins; }
/** vicino al mare: quota MDT ~0 entro 140 m in una delle 8 direzioni (lungomare, spiaggia) */
function nearSea(x, y) { for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4; if (terrainAt(x + Math.cos(a) * 140, y + Math.sin(a) * 140) < 0.5) return true; } return false; }
/** 0 latifoglia · 1 pino domestico · 2 ulivo · 3 agrume · 4 palma */
function species(x, y, h, r) {
  for (const v of vegIdx) {
    if (x < v.x0 || x > v.x1 || y < v.y0 || y > v.y1 || !inRingXY(x, y, v.ring)) continue;
    if (v.code === 'G007') return 2;
    if (v.code === 'G008') return 3;
    if (v.code === 'G009') return h >= 8 ? 1 : 0;
  }
  if (h >= 9 && r >= 3.5) return 1;                         // chioma alta e larga: pino domestico
  if (r <= 2.3 && h >= 5 && h <= 13 && nearSea(x, y)) return 4; // chioma stretta sul lungomare: palma
  if (h <= 6 && r <= 3.5 && terrainAt(x, y) > 40) return 2;  // alberelli bassi in collina: ulivi sparsi
  return 0;
}

// Alberi veri: mappa globale delle chiome Meta/WRI (1 m, CC BY 4.0) già scaricata dal vecchio
// motore, in coordinate equirettangolari centrate su (38.056, 14.585) → UTM → locali. Fuori dagli
// edifici DBTR (le chiome sopra i tetti sono spesso falsi positivi del modello).
const trees = [];
// copertura del suolo (build-landcover.mjs): niente alberi né cespugli in mare o sulla spiaggia —
// lì le "chiome" Meta/WRI e il verde dell'ortofoto sono falsi positivi (ombrelloni, alghe, onde)
const lcPath = new URL('data/landcover.png', root);
const lcMeta = existsSync(lcPath) ? read('data/landcover.json') : null;
const lc = lcMeta ? decodePNG(readFileSync(lcPath)) : null;
function onBeach(ux, uy) {
  if (!lc) return false;
  const cx = Math.floor((ux - lcMeta.xmin) / lcMeta.step), cy = Math.floor((lcMeta.ymax - uy) / lcMeta.step);
  if (cx < 0 || cy < 0 || cx >= lc.width || cy >= lc.height) return false;
  const i = (cy * lc.width + cx) * 3;
  if (lc.data[i] > 0 || lc.data[i + 1] > 60) return true;
  // niente piante a meno di 12 m dal mare
  for (let dy = -6; dy <= 6; dy++) for (let dx = -6; dx <= 6; dx++) {
    const x = cx + dx, y = cy + dy;
    if (x >= 0 && y >= 0 && x < lc.width && y < lc.height && lc.data[(y * lc.width + x) * 3] > 0) return true;
  }
  return false;
}
let beachDropped = 0;

// ---- distanze per non far toccare le chiome a edifici e strade
const CELL = 8;
const cellKey = (x, z) => `${Math.floor(x / CELL)},${Math.floor(z / CELL)}`;
const bGrid = new Map(); // celle da 8 m → piante degli edifici (anelli in coordinate locali)
for (const b of out) {
  const R = []; for (let i = 0; i < b.r.length; i += 2) R.push([b.r[i], b.r[i + 1]]);
  const xs = R.map((p) => p[0]), zs = R.map((p) => p[1]);
  for (let gx = Math.floor(Math.min(...xs) / CELL); gx <= Math.floor(Math.max(...xs) / CELL); gx++) for (let gz = Math.floor(Math.min(...zs) / CELL); gz <= Math.floor(Math.max(...zs) / CELL); gz++) { const k = `${gx},${gz}`; if (!bGrid.has(k)) bGrid.set(k, []); bGrid.get(k).push(R); }
}
const segDist = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1e-9; const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / L2)); return Math.hypot(x - ax - dx * t, z - az - dz * t); };
/** distanza dalla pianta più vicina (m); −1 se il punto è dentro un edificio */
function distBuilding(x, z) {
  let best = Infinity;
  const gx = Math.floor(x / CELL), gz = Math.floor(z / CELL);
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const R of bGrid.get(`${gx + i},${gz + j}`) || []) {
    if (inRingXY(x, z, R)) return -1;
    for (let k = 0; k < R.length; k++) { const [ax, az] = R[k], [bx, bz] = R[(k + 1) % R.length]; best = Math.min(best, segDist(x, z, ax, az, bx, bz)); }
  }
  return best;
}
// strade (build-streets.mjs): asse e larghezza della carreggiata; se il file non c'è, nessun vincolo
const streetsPath = new URL('public/data/streets.json', root);
const rGrid = new Map();
if (existsSync(streetsPath)) {
  for (const rd of JSON.parse(readFileSync(streetsPath)).roads) {
    for (let i = 0; i + 3 < rd.p.length; i += 2) {
      const s = [rd.p[i], rd.p[i + 1], rd.p[i + 2], rd.p[i + 3], rd.cw / 2];
      for (let gx = Math.floor(Math.min(s[0], s[2]) / CELL); gx <= Math.floor(Math.max(s[0], s[2]) / CELL); gx++) for (let gz = Math.floor(Math.min(s[1], s[3]) / CELL); gz <= Math.floor(Math.max(s[1], s[3]) / CELL); gz++) { const k = `${gx},${gz}`; if (!rGrid.has(k)) rGrid.set(k, []); rGrid.get(k).push(s); }
    }
  }
}
/** distanza dal bordo dell'asfalto più vicino (m); negativa se il punto è sulla carreggiata */
function distRoad(x, z) {
  let best = Infinity;
  const gx = Math.floor(x / CELL), gz = Math.floor(z / CELL);
  for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const s of rGrid.get(`${gx + i},${gz + j}`) || []) best = Math.min(best, segDist(x, z, s[0], s[1], s[2], s[3]) - s[4]);
  return best;
}
/**
 * Scala vera degli alberi. Le chiome Meta/WRI (1 m) sono larghe e basse: nel mondo 3D sembrano cupole
 * che toccano case e strade. Qui la chioma si stringe (×0,55, mai oltre 3,5 m di raggio) e l'albero si alza
 * (×1,3 + 0,8 m). Poi il raggio si limita alla distanza libera da edifici e asfalto (0,25 m di margine):
 * se il centro sta su un edificio o sulla carreggiata, o non c'è posto per almeno 0,7 m, l'albero si toglie.
 */
let squeezed = 0, removedClear = 0;
function fitTree(x, z, h0, r0) {
  let r = Math.min(3.5, Math.max(0.8, r0 * 0.55));
  const h = Math.min(26, h0 * 1.3 + 0.8);
  const room = Math.min(distBuilding(x, z), distRoad(x, z)) - 0.25;
  if (room < 0.7) { removedClear++; return null; }
  if (room < r) { r = room; squeezed++; }
  return [h, r];
}
// chiome Meta/WRI estratte da scripts/fetch-canopy.mjs, già in UTM e già senza quelle sui tetti DBTR
const canopyPath = new URL('data/canopy.json', root);
if (existsSync(canopyPath)) {
  const can = JSON.parse(readFileSync(canopyPath)).trees;
  // diradamento: al più un albero (il più alto) per cella da 5 m — restano la forma dei boschi, dei
  // filari e delle pinete, non 166 mila istanze
  const best = new Map();
  for (const t of can) { const k = `${Math.floor(t[0] / 5)},${Math.floor(t[1] / 5)}`; const o = best.get(k); if (!o || t[2] > o[2]) best.set(k, t); }
  for (const [ux, uy, h0, r0] of best.values()) {
    if (onBeach(ux, uy)) { beachDropped++; continue; }
    const x = ux - OX, z = -(uy - OY);
    const hc = Math.min(22, h0), rc = Math.min(8, r0 || 2);
    const sp = species(ux, uy, hc, rc); // la specie si sceglie sulle misure originali della chioma
    const fit = fitTree(x, z, hc, rc);
    if (!fit) continue;
    trees.push(+x.toFixed(1), +z.toFixed(1), +terrainAt(ux, uy).toFixed(1), +fit[0].toFixed(1), +fit[1].toFixed(1), sp);
  }
}
// Cespugli: dove l'ortofoto è verde (copertura del suolo, build-landcover.mjs) ma non c'è né un
// albero Meta/WRI, né un edificio, né la spiaggia. Uno ogni ~2 celle da 2 m, alto 0,5-1,8 m.
let shrubs = 0;
if (lc) {
  const treeGrid = new Map(); // celle da 4 m coperte da una chioma
  for (let i = 0; i < trees.length; i += 6) {
    const [x, z, , , r] = trees.slice(i, i + 6), R = r * 0.9;
    for (let gx = Math.floor((x - R) / 4); gx <= Math.floor((x + R) / 4); gx++) for (let gz = Math.floor((z - R) / 4); gz <= Math.floor((z + R) / 4); gz++) treeGrid.set(`${gx},${gz}`, 1);
  }
  for (let cy = 0; cy < lc.height; cy++) for (let cx = 0; cx < lc.width; cx++) {
    const i = (cy * lc.width + cx) * 3;
    if (lc.data[i] || lc.data[i + 1] > 40 || lc.data[i + 2] < 150) continue; // mare, spiaggia, poco verde
    const hsh = hash(cy * 7919 + cx);
    if (hsh > 0.5) continue;
    const ux = lcMeta.xmin + (cx + hash(cx * 31 + cy)) * lcMeta.step, uy = lcMeta.ymax - (cy + hash(cy * 17 + cx)) * lcMeta.step;
    const x = ux - OX, z = -(uy - OY);
    if (treeGrid.has(`${Math.floor(x / 4)},${Math.floor(z / 4)}`)) continue;
    if (onBeach(ux, uy)) { beachDropped++; continue; }
    // i cespugli non stanno né sugli edifici né sull'asfalto e non li toccano
    const room = Math.min(distBuilding(x, z), distRoad(x, z)) - 0.15;
    if (room < 0.4) continue;
    const h = 0.5 + hsh * 2.6, r = Math.min(0.6 + hash(cx * 13 + cy * 3) * 0.9, room);
    trees.push(+x.toFixed(1), +z.toFixed(1), +terrainAt(ux, uy).toFixed(1), +h.toFixed(1), +r.toFixed(1), 5);
    shrubs++;
  }
}
console.log('cespugli dal verde dell\'ortofoto:', shrubs, '· tolti da spiaggia e mare:', beachDropped, '· alberi ristretti dagli ingombri:', squeezed, '· tolti perché su edifici o strada:', removedClear);
const spCount = [0, 0, 0, 0, 0, 0]; for (let i = 5; i < trees.length; i += 6) spCount[trees[i]]++;
console.log('alberi', trees.length / 6, 'per specie [latifoglia, pino, ulivo, agrume, palma, cespuglio]:', spCount);

// ---- luoghi d'interesse modellati a mano (src/landmarks.js) da foto di riferimento (Wikimedia
// Commons): qui solo dove sono e quanto misurano, dai dati. Il renderer generico li salta.
const LANDMARK_IDS = { 1302565: 'municipio', 1300978: 'chiesa' }; // DBTR: Municipio, Chiesa Madre S. Benedetto il Moro
for (const bb of out) if (LANDMARK_IDS[bb.id]) bb.lm = LANDMARK_IDS[bb.id];
const landmarks = {};
{
  const osmL = JSON.parse(readFileSync(new URL('../acquedolci-lowpoly/public/data/acquedolci.json', root)));
  // Fontana dei Delfini (1924): il poligono OSM dell'acqua in Piazza Vittorio Emanuele III
  const f = osmL.features.find((ft) => ft.properties.amenity === 'fountain' && ft.geometry.type === 'Polygon');
  if (f) {
    const pts = f.geometry.coordinates[0].map(([lon, lat]) => toUtm33(lon, lat));
    const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const r = pts.reduce((a, p) => a + Math.hypot(p[0] - cx, p[1] - cy), 0) / pts.length;
    landmarks.fountain = { x: +(cx - OX).toFixed(2), z: +(-(cy - OY)).toFixed(2), y: +terrainAt(cx, cy).toFixed(2), r: +Math.max(r, 3.4).toFixed(2) };
    // il poligono OSM è la vasca d'acqua: sull'ortofoto a 25 cm il bordo in pietra arriva a 3,4 m di raggio
  }
  // ruderi DBTR (B005): muri in pietra; quello più vicino alla Chiesa di San Giuseppe alla Torre è il
  // Castello Larcan-Gravina — le torri tonde sono gli archi di segmenti corti nel suo tracciato
  const extraL = read('data/dbtr-extra.json');
  const ruins = [];
  for (const ft of extraL.otherStructures || []) if (ft.code === 'B005') for (const part of ft.parts) {
    const P = part.map(([x, y]) => [+(x - OX).toFixed(2), +(-(y - OY)).toFixed(2)]);
    let gy = Infinity; for (const [x, y] of part) gy = Math.min(gy, terrainAt(x, y));
    ruins.push({ p: P.flat(), g: +gy.toFixed(2) });
  }
  const sg = pois.find((p) => /San Giuseppe/.test(p.name));
  if (sg) {
    const near = ruins.filter((r) => { for (let i = 0; i < r.p.length; i += 2) if (Math.hypot(r.p[i] - sg.x, r.p[i + 1] - sg.z) < 60) return true; return false; });
    const main = near.sort((a, b) => b.p.length - a.p.length)[0];
    if (main) {
      main.castle = 1;
      // torri: sequenze di ≥4 lati corti (<2,5 m) = arco di cerchio → centro medio e raggio
      const P = []; for (let i = 0; i < main.p.length; i += 2) P.push([main.p[i], main.p[i + 1]]);
      const towers = []; let run = [];
      const flush = () => { if (run.length >= 4) { const cx = run.reduce((a, p) => a + p[0], 0) / run.length, cz = run.reduce((a, p) => a + p[1], 0) / run.length; const r = run.reduce((a, p) => a + Math.hypot(p[0] - cx, p[1] - cz), 0) / run.length; towers.push([+cx.toFixed(2), +cz.toFixed(2), +Math.max(1.8, r + 0.6).toFixed(2)]); } run = []; };
      for (let i = 1; i < P.length; i++) { const L = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); if (L < 2.5) { if (!run.length) run.push(P[i - 1]); run.push(P[i]); } else flush(); }
      flush();
      landmarks.castle = { towers, chapel: sg ? [sg.x, sg.z] : null };
      for (const r of near) r.castleArea = 1;
    }
  }
  landmarks.ruins = ruins;
  console.log('luoghi:', Object.values(LANDMARK_IDS).join(', '), '· fontana', !!landmarks.fountain, '· ruderi', ruins.length, '· torri castello', landmarks.castle?.towers.length);
}

mkdirSync(new URL('public/data', root), { recursive: true });
writeFileSync(new URL('public/data/model.json', root), JSON.stringify({
  origin: [OX, OY], epsg: 25833, buildings: out, pois, trees, landmarks,
  sources: ['Edifici: DBTR 2013 CTR 1:10.000 — SITR Regione Siciliana (CC BY 4.0)', 'Altezze: LiDAR PST — MASE Geoportale Nazionale', 'Terreno: MDT 2013 — SITR (CC BY 4.0)', 'Ortofoto 2022 — SITR (CC BY 4.0)', 'Nomi: © OpenStreetMap contributors', 'Alberi: Meta/WRI High Resolution Canopy Height (CC BY 4.0)'],
}));
console.log(`modello: ${out.length} edifici, ${pois.length} POI`, stats);

// terreno e ortofoto accanto al modello: il renderer li legge con percorsi relativi (data/...)
import { cpSync, rmSync } from 'node:fs';
// terreno per il web: quote in decimetri (Uint16, 10 cm bastano) in base64 dentro un JSON — un
// .bin non è un tipo servito dove si pubblica, e così pesa meno della metà dei Float32
{
  // MDT con la costa corretta da build-landcover.mjs (fondale sotto il mare), se c'è; quote in
  // decimetri sopra OFFSET, così anche il fondale negativo sta in un Uint16
  const seaPath = new URL('data/dtm-sea.bin', root);
  const src = existsSync(seaPath) ? (() => { const b = readFileSync(seaPath); return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4); })() : dtm;
  const OFFSET = -10;
  const dm = new Uint16Array(src.length);
  for (let i = 0; i < src.length; i++) dm[i] = Math.max(0, Math.min(65535, Math.round((src[i] - OFFSET) * 10)));
  writeFileSync(new URL('public/data/dtm.json', root), JSON.stringify({ ...dtmMeta, encoding: 'uint16-dm-base64', offset: OFFSET, data: Buffer.from(dm.buffer).toString('base64') }));
  rmSync(new URL('public/data/dtm.bin', root), { force: true });
}
cpSync(new URL('data/ortho.json', root), new URL('public/data/ortho.json', root));
// copertura del suolo (build-landcover.mjs): mare, spiaggia, verde
// sfondo lontano (fetch-background.mjs): litorale ed Eolie
if (existsSync(new URL('data/bg/', root))) cpSync(new URL('data/bg/', root), new URL('public/data/bg/', root), { recursive: true });
for (const f of ['landcover.png', 'landcover.json']) if (existsSync(new URL(`data/${f}`, root))) cpSync(new URL(`data/${f}`, root), new URL(`public/data/${f}`, root));
cpSync(new URL('data/ortho/', root), new URL('public/data/ortho/', root), { recursive: true });
// ortofoto a 25 cm a tessere (fetch-ortho-hr.mjs), caricata a pezzi intorno a chi guarda
if (existsSync(new URL('data/ortho-hr25.json', root))) {
  cpSync(new URL('data/ortho-hr25.json', root), new URL('public/data/ortho-hr.json', root));
  cpSync(new URL('data/ortho-hr25/', root), new URL('public/data/ortho-hr/', root), { recursive: true });
}
console.log('→ public/data (model.json, dtm, ortofoto)');
