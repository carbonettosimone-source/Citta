#!/usr/bin/env node
/**
 * Alberi veri dalla mappa globale dell'altezza delle chiome Meta/WRI "High Resolution Canopy
 * Height" (1 m, CC BY 4.0), letta a finestre dal GeoTIFF su S3 (solo il bbox, non il file intero).
 * Un albero per cima reale: picchi locali del raster (soppressione dei non-massimi a 2,6 m), raggio
 * della chioma dove il raster scende sotto metà altezza della cima.
 *
 * Unico filtro: le piante DBTR (una "chioma" sopra un tetto è quasi sempre il bordo del tetto).
 * Il vecchio motore filtrava anche con strade e aree del suo livello compilato, e così aveva
 * cancellato alberi veri — la Pineta Comunale restava vuota.
 * Output: data/canopy.json — alberi in UTM 33N {x, y, h, r}
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { fromUrl } from 'geotiff';
import { toUtm33 } from './geo.mjs';

const root = new URL('..', import.meta.url);
const city = JSON.parse(readFileSync(new URL('city.json', root)));
const BB = city.bboxLonLat;
const INDEX = 'https://dataforgood-fb-data.s3.amazonaws.com/forests/v1/alsgedi_global_v6_float/tiles.geojson';
const TILE = (t) => `https://dataforgood-fb-data.s3.amazonaws.com/forests/v1/alsgedi_global_v6_float/chm/${t}.tif`;
const MIN_H = 2.5, SPACING = 2.6, MAX_CROWN = 9;
const R = 6378137;
const toMerc = (lon, lat) => [(lon * Math.PI) / 180 * R, R * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))];
const fromMerc = (x, y) => [(x / R) * (180 / Math.PI), (2 * Math.atan(Math.exp(y / R)) - Math.PI / 2) * (180 / Math.PI)];
const retry = async (fn, n = 5) => { for (let i = 0; ; i++) { try { return await fn(); } catch (e) { if (i >= n - 1) throw e; await new Promise((r) => setTimeout(r, 500 * (i + 1))); } } };

// indice dei riquadri (cache locale del vecchio progetto se c'è)
const cachePath = new URL('../acquedolci-lowpoly/.cache/canopy-tiles.geojson', root);
const index = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath)) : await (await retry(() => fetch(INDEX))).json();
const tile = index.features.find((f) => {
  const xs = f.geometry.coordinates[0].map((p) => p[0]), ys = f.geometry.coordinates[0].map((p) => p[1]);
  return !(Math.max(...xs) < BB.west || Math.min(...xs) > BB.east || Math.max(...ys) < BB.south || Math.min(...ys) > BB.north);
})?.properties.tile;
if (!tile) throw new Error('nessun riquadro copre il bbox');
const image = await (await fromUrl(TILE(tile), { blockSize: 512 * 1024, cacheSize: 64 })).getImage();
const origin = image.getOrigin(), res = image.getResolution();
const [wx, sy] = toMerc(BB.west, BB.south), [ex, ny] = toMerc(BB.east, BB.north);
const px0 = Math.floor((wx - origin[0]) / res[0]), px1 = Math.ceil((ex - origin[0]) / res[0]);
const py0 = Math.floor((origin[1] - ny) / Math.abs(res[1])), py1 = Math.ceil((origin[1] - sy) / Math.abs(res[1]));
const W = px1 - px0, H = py1 - py0;
const data = new Float32Array(W * H);
for (let y0 = 0; y0 < H; y0 += 200) {
  const y1 = Math.min(H, y0 + 200);
  const r = await retry(() => image.readRasters({ window: [px0, py0 + y0, px1, py0 + y1], width: W, height: y1 - y0 }));
  data.set(r[0], y0 * W);
}
console.log(`raster chiome ${W}×${H} px a ${res[0].toFixed(2)} m`);

// piante DBTR per il filtro, indicizzate a griglia
const { buildings } = JSON.parse(readFileSync(new URL('data/buildings.json', root)));
const G = 20, grid = new Map();
for (const b of buildings) {
  const r = b.rings[0];
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const [x, y] of r) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  const e = { r, x0, x1, y0, y1 };
  for (let i = Math.floor(x0 / G); i <= Math.floor(x1 / G); i++) for (let j = Math.floor(y0 / G); j <= Math.floor(y1 / G); j++) { const k = `${i},${j}`; if (!grid.has(k)) grid.set(k, []); grid.get(k).push(e); }
}
const onBuilding = (x, y) => (grid.get(`${Math.floor(x / G)},${Math.floor(y / G)}`) || []).some((e) => {
  if (x < e.x0 || x > e.x1 || y < e.y0 || y > e.y1) return false;
  let ins = false; for (let i = 0, j = e.r.length - 1; i < e.r.length; j = i++) { const [xi, yi] = e.r[i], [xj, yj] = e.r[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ins = !ins; }
  return ins;
});

// picchi: dal più alto, una cima per cella da SPACING (con le 8 celle vicine libere)
const cand = [];
for (let i = 0; i < data.length; i++) if (data[i] >= MIN_H) cand.push(i);
cand.sort((a, b) => data[b] - data[a]);
const cell = Math.max(1, Math.round(SPACING / res[0])), taken = new Set(), trees = [];
let dropped = 0;
for (const i of cand) {
  const py = Math.floor(i / W), px = i % W, cx = Math.floor(px / cell), cy = Math.floor(py / cell);
  let clash = false;
  for (let a = -1; a <= 1 && !clash; a++) for (let b = -1; b <= 1; b++) if (taken.has(`${cx + a}:${cy + b}`)) { clash = true; break; }
  if (clash) continue;
  taken.add(`${cx}:${cy}`);
  const h = data[i];
  const [lon, lat] = fromMerc(origin[0] + (px0 + px + 0.5) * res[0], origin[1] - (py0 + py + 0.5) * Math.abs(res[1]));
  const [x, y] = toUtm33(lon, lat);
  if (onBuilding(x, y)) { dropped++; continue; }
  const th = Math.max(MIN_H * 0.6, h * 0.5);
  let r = 1;
  for (; r <= MAX_CROWN / res[0]; r++) {
    if (![[r, 0], [-r, 0], [0, r], [0, -r]].some(([dx, dy]) => { const X = px + dx, Y = py + dy; return X >= 0 && Y >= 0 && X < W && Y < H && data[Y * W + X] >= th; })) break;
  }
  trees.push([+x.toFixed(1), +y.toFixed(1), +h.toFixed(1), +Math.max(0.8, (r - 1) * res[0]).toFixed(1)]);
}
mkdirSync(new URL('data', root), { recursive: true });
writeFileSync(new URL('data/canopy.json', root), JSON.stringify({ source: 'Meta/WRI High Resolution Canopy Height 1 m (CC BY 4.0)', epsg: 25833, trees }));
console.log(`alberi ${trees.length} (scartati sui tetti ${dropped})`);
