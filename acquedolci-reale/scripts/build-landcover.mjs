#!/usr/bin/env node
/**
 * Copertura del suolo dall'ortofoto 2022 (SITR, CC BY 4.0) a maglia di 2 m, sulla stessa griglia
 * del MDT: mare, spiaggia, verde, il resto (terra, erba secca). Serve al renderer per:
 *  - il MARE: dove l'ortofoto vede acqua collegata al mare aperto (le piscine no) c'è la superficie
 *    animata; la distanza da riva fa da profondità (trasparenza, schiuma, colore);
 *  - il FONDALE e la RIVA: il MDT 2013 ha il mare a 0 m e taglia la spiaggia sulla linea di costa
 *    del 2013; qui il fondo scende sotto il livello del mare e la spiaggia del 2022 resta asciutta;
 *  - i MATERIALI di dettaglio da vicino (ciottoli, prato, terra) e i cespugli (build-model).
 * Output: data/landcover.png (R profondità mare, G spiaggia, B verde) + .json,
 *         data/dtm-sea.bin (MDT corretto sulla costa, Float32 come dtm.bin)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import jpeg from 'jpeg-js';
import { encodePNG } from './lib/png.mjs';

const root = new URL('..', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root)));
const dtmMeta = read('data/dtm.json');
const dtmBuf = readFileSync(new URL('data/dtm.bin', root));
const dtm = new Float32Array(dtmBuf.buffer, dtmBuf.byteOffset, dtmBuf.byteLength / 4);
const ortho = read('data/ortho.json');

const STEP = 2;
const W = Math.round(dtmMeta.width * dtmMeta.step / STEP), H = Math.round(dtmMeta.height * dtmMeta.step / STEP);
const X0 = dtmMeta.xmin, Y1 = dtmMeta.ymax;
const N = W * H;
const cnt = new Float32Array(N), wat = new Float32Array(N), grn = new Float32Array(N);

function dtmAt(x, y) {
  const c = (x - dtmMeta.xmin) / dtmMeta.step, r = (dtmMeta.ymax - y) / dtmMeta.step;
  const c0 = Math.max(0, Math.min(dtmMeta.width - 2, Math.floor(c))), r0 = Math.max(0, Math.min(dtmMeta.height - 2, Math.floor(r)));
  const fx = Math.min(1, Math.max(0, c - c0)), fy = Math.min(1, Math.max(0, r - r0));
  const g = (i, j) => dtm[j * dtmMeta.width + i];
  return g(c0, r0) * (1 - fx) * (1 - fy) + g(c0 + 1, r0) * fx * (1 - fy) + g(c0, r0 + 1) * (1 - fx) * fy + g(c0 + 1, r0 + 1) * fx * fy;
}
// classificazione del pixel: acqua (azzurro/blu, rosso basso), verde (eccesso di verde)
const isWater = (r, g, b) => b - r > 8 && (g - r > 0 || b > 90);
const isGreen = (r, g, b) => 2 * g - r - b > 18 && g > 50;

// prima la base (2,5 m) su tutto, poi il nucleo a 0,5 m che la sostituisce dove c'è
const tiles = [ortho.tiles.find((t) => t.level === 'base'), ...ortho.tiles.filter((t) => t.level === 'core')];
for (const t of tiles) {
  const img = jpeg.decode(readFileSync(new URL(`data/ortho/${t.file}`, root)), { useTArray: true, maxMemoryUsageInMB: 1024 });
  const rx = (t.xmax - t.xmin) / img.width, ry = (t.ymax - t.ymin) / img.height;
  const touched = new Set();
  for (let py = 0; py < img.height; py++) {
    const y = t.ymax - (py + 0.5) * ry, cy = Math.floor((Y1 - y) / STEP);
    if (cy < 0 || cy >= H) continue;
    for (let px = 0; px < img.width; px++) {
      const x = t.xmin + (px + 0.5) * rx, cx = Math.floor((x - X0) / STEP);
      if (cx < 0 || cx >= W) continue;
      const k = cy * W + cx;
      if (t.level === 'core' && !touched.has(k)) { touched.add(k); cnt[k] = wat[k] = grn[k] = 0; }
      const i = (py * img.width + px) * 4, r = img.data[i], g = img.data[i + 1], b = img.data[i + 2];
      cnt[k]++; if (isWater(r, g, b)) wat[k]++; if (isGreen(r, g, b)) grn[k]++;
    }
  }
  console.log('ortofoto', t.file);
}

// mare: celle d'acqua basse collegate al bordo nord (mare aperto). Piscine e ombre bluastre restano fuori.
const cellH = new Float32Array(N);
for (let cy = 0; cy < H; cy++) for (let cx = 0; cx < W; cx++) cellH[cy * W + cx] = dtmAt(X0 + (cx + 0.5) * STEP, Y1 - (cy + 0.5) * STEP);
const wet = (k) => cnt[k] > 0 && wat[k] / cnt[k] > 0.5 && cellH[k] < 2.5;
const sea = new Uint8Array(N);
const q = [];
for (let cx = 0; cx < W; cx++) if (wet(cx) || cellH[cx] <= 0.01) { sea[cx] = 1; q.push(cx); }
while (q.length) {
  const k = q.pop(), cx = k % W, cy = (k - cx) / W;
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const nx = cx + dx, ny = cy + dy; if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
    const n = ny * W + nx;
    // senza ortofoto (fuori dal nucleo) vale il MDT: 0 m è mare
    if (!sea[n] && (wet(n) || (cnt[n] === 0 && cellH[n] <= 0.01))) { sea[n] = 1; q.push(n); }
  }
}
// distanza da riva (m) con due passate di chamfer, per il mare e per la terra
function chamfer(src) {
  const d = new Float32Array(N).fill(1e9);
  for (let k = 0; k < N; k++) if (src[k]) d[k] = 0;
  const s = STEP, dg = STEP * Math.SQRT2;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const k = y * W + x; let v = d[k];
    if (x > 0) v = Math.min(v, d[k - 1] + s);
    if (y > 0) { v = Math.min(v, d[k - W] + s); if (x > 0) v = Math.min(v, d[k - W - 1] + dg); if (x < W - 1) v = Math.min(v, d[k - W + 1] + dg); }
    d[k] = v;
  }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
    const k = y * W + x; let v = d[k];
    if (x < W - 1) v = Math.min(v, d[k + 1] + s);
    if (y < H - 1) { v = Math.min(v, d[k + W] + s); if (x < W - 1) v = Math.min(v, d[k + W + 1] + dg); if (x > 0) v = Math.min(v, d[k + W - 1] + dg); }
    d[k] = v;
  }
  return d;
}
const land = sea.map((v) => 1 - v);
const toLand = chamfer(land), toSea = chamfer(sea);

const rgb = new Uint8Array(N * 3);
let nSea = 0, nBeach = 0;
for (let k = 0; k < N; k++) {
  const g = cnt[k] ? grn[k] / cnt[k] : 0;
  if (sea[k]) { rgb[k * 3] = Math.round(30 + 225 * Math.min(1, toLand[k] / 80)); nSea++; continue; }
  // spiaggia: terra bassa entro 90 m dal mare, non verde
  const beach = cellH[k] < 6 ? (1 - Math.min(1, Math.max(0, (toSea[k] - 60) / 30))) * (1 - Math.min(1, g * 2)) : 0;
  if (beach > 0.5) nBeach++;
  rgb[k * 3 + 1] = Math.round(beach * 255);
  rgb[k * 3 + 2] = Math.round(Math.min(1, g * 1.4) * 255);
}
writeFileSync(new URL('data/landcover.png', root), encodePNG(W, H, rgb));
writeFileSync(new URL('data/landcover.json', root), JSON.stringify({
  source: 'classificata dall\'ortofoto 2022 SITR (CC BY 4.0)', step: STEP, width: W, height: H, xmin: X0, ymax: Y1,
  channels: 'R: mare (30 a riva → 255 a 80 m), G: spiaggia, B: verde',
}));

// MDT sulla costa: fondale che scende sotto il mare, spiaggia del 2022 asciutta
const out = Float32Array.from(dtm);
for (let r = 0; r < dtmMeta.height; r++) for (let c = 0; c < dtmMeta.width; c++) {
  const x = dtmMeta.xmin + c * dtmMeta.step, y = dtmMeta.ymax - r * dtmMeta.step;
  const cx = Math.floor((x - X0) / STEP), cy = Math.floor((Y1 - y) / STEP);
  if (cx < 0 || cy < 0 || cx >= W || cy >= H) continue;
  const k = cy * W + cx, i = r * dtmMeta.width + c;
  if (sea[k]) out[i] = -Math.min(6, 0.4 + toLand[k] * 0.05);
  else if (out[i] < 0.4) out[i] = 0.4 + Math.min(1.2, toSea[k] * 0.03);
}
writeFileSync(new URL('data/dtm-sea.bin', root), Buffer.from(out.buffer));
console.log(`copertura ${W}×${H} a ${STEP} m: mare ${(nSea * STEP * STEP / 1e6).toFixed(2)} km², spiaggia ${(nBeach * STEP * STEP / 1e4).toFixed(1)} ha`);
