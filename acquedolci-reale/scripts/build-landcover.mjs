#!/usr/bin/env node
/**
 * Copertura del suolo dall'ortofoto 2022 (SITR, CC BY 4.0) a maglia di 2 m, sulla stessa griglia
 * del MDT: mare, spiaggia, verde, il resto (terra, erba secca). Serve al renderer per:
 *  - il MARE: dove l'ortofoto vede acqua collegata al mare aperto (le piscine no) c'è la superficie
 *    animata; la distanza da riva fa da profondità (trasparenza, schiuma, colore);
 *  - il FONDALE e la RIVA: il MDT 2013 ha il mare a 0 m e taglia la spiaggia sulla linea di costa
 *    del 2013; qui il fondo scende sotto il livello del mare e la spiaggia del 2022 resta asciutta;
 *  - i MATERIALI di dettaglio da vicino (ciottoli, prato, terra) e i cespugli (build-model).
 * Output: data/landcover.png (R distanza con segno dalla riva, G spiaggia, B verde) + .json,
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
// verde vero: più verde che blu (l'acqua turchese della battigia ha il verde alto ma anche il blu)
const isGreen = (r, g, b) => 2 * g - r - b > 18 && g > 50 && g > b + 8;

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
      // un pixel d'acqua non è mai verde: l'acqua bassa della battigia è verdastra
      cnt[k]++; if (isWater(r, g, b)) wat[k]++; else if (isGreen(r, g, b)) grn[k]++;
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
// ---- distanza euclidea esatta (Felzenszwalb): i contorni sono tondi, non ottagonali come col chamfer.
// dist(src)[k] = metri dalla cella k alla più vicina con src=1 (0 sulle celle src)
function edt(src) {
  const INF = 1e20, n = Math.max(W, H);
  const f = new Float64Array(n), d = new Float64Array(n), v = new Int32Array(n), z = new Float64Array(n + 1);
  const g = new Float32Array(N);
  for (let k = 0; k < N; k++) g[k] = src[k] ? 0 : INF;
  const line = (len) => {
    let k = 0; v[0] = 0; z[0] = -INF; z[1] = INF;
    for (let q = 1; q < len; q++) {
      let s;
      for (;;) { s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]); if (s <= z[k]) k--; else break; }
      k++; v[k] = q; z[k] = s; z[k + 1] = INF;
    }
    k = 0;
    for (let q = 0; q < len; q++) { while (z[k + 1] < q) k++; d[q] = (q - v[k]) * (q - v[k]) + f[v[k]]; }
  };
  for (let x = 0; x < W; x++) { for (let y = 0; y < H; y++) f[y] = g[y * W + x]; line(H); for (let y = 0; y < H; y++) g[y * W + x] = d[y]; }
  for (let y = 0; y < H; y++) { for (let x = 0; x < W; x++) f[x] = g[y * W + x]; line(W); for (let x = 0; x < W; x++) g[y * W + x] = d[x]; }
  for (let k = 0; k < N; k++) g[k] = Math.sqrt(g[k]) * STEP;
  return g;
}
/** sfocatura a scatola separabile (raggio in celle), ripetuta: approssima una gaussiana */
function blur(a, r, passes = 3) {
  let cur = Float32Array.from(a), tmp = new Float32Array(N);
  for (let p = 0; p < passes; p++) {
    for (let y = 0; y < H; y++) { let acc = 0; const o = y * W;
      for (let x = -r; x <= r; x++) acc += cur[o + Math.min(W - 1, Math.max(0, x))];
      for (let x = 0; x < W; x++) { tmp[o + x] = acc / (2 * r + 1); acc += cur[o + Math.min(W - 1, x + r + 1)] - cur[o + Math.max(0, x - r)]; } }
    for (let x = 0; x < W; x++) { let acc = 0;
      for (let y = -r; y <= r; y++) acc += tmp[Math.min(H - 1, Math.max(0, y)) * W + x];
      for (let y = 0; y < H; y++) { cur[y * W + x] = acc / (2 * r + 1); acc += tmp[Math.min(H - 1, y + r + 1) * W + x] - tmp[Math.max(0, y - r) * W + x]; } }
  }
  return cur;
}
// ---- costa naturale. L'ortofoto dà una riva a scalini (pixel da 2,5 m classificati a soglia) e lungo
// una spiaggia di 3 km è una retta: sfocata la maschera, poi la riva serpeggia con rumore a tre scale
// (rientranze di 100-130 m, cuspidi di 40-60 m, increspature di 10-20 m), entro ±8 m.
{
  const f0 = new Float32Array(N); for (let k = 0; k < N; k++) f0[k] = sea[k];
  const soft = blur(f0, 3);
  const m1 = new Uint8Array(N); for (let k = 0; k < N; k++) m1[k] = soft[k] > 0.5 ? 1 : 0;
  const dLand0 = edt(m1.map((v) => 1 - v)), dSea0 = edt(m1);
  const hash = (x, y) => { let h = Math.imul(x, 374761393) + Math.imul(y, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
  const vnoise = (x, y) => { const xi = Math.floor(x), yi = Math.floor(y), fx = x - xi, fy = y - yi, u = fx * fx * (3 - 2 * fx), w = fy * fy * (3 - 2 * fy);
    return (hash(xi, yi) * (1 - u) + hash(xi + 1, yi) * u) * (1 - w) + (hash(xi, yi + 1) * (1 - u) + hash(xi + 1, yi + 1) * u) * w; };
  let flipped = 0;
  for (let cy = 0; cy < H; cy++) for (let cx = 0; cx < W; cx++) {
    const k = cy * W + cx;
    const s = m1[k] ? dLand0[k] - STEP / 2 : -(dSea0[k] - STEP / 2); // >0 mare, distanza con segno dalla riva
    const near = 1 - Math.min(1, Math.abs(s) / 60);
    if (near <= 0) { sea[k] = m1[k]; continue; }
    const xm = cx * STEP, ym = cy * STEP;
    const n = (vnoise(xm / 130, ym / 130) - 0.5) * 2 * 5.5 + (vnoise(xm / 55 + 11, ym / 55 + 7) - 0.5) * 2 * 3 + (vnoise(xm / 20 + 3, ym / 20 + 9) - 0.5) * 2 * 1.3 + (vnoise(xm / 8 + 5, ym / 8 + 2) - 0.5) * 2 * 0.5;
    const s2 = s + n * near;
    // l'acqua non sale su terra alta (muri, porto, rocce)
    sea[k] = s2 > 0 && (m1[k] || cellH[k] < 2.5) ? 1 : 0;
    if (sea[k] !== m1[k]) flipped++;
  }
  console.log(`costa: maschera ammorbidita e frastagliata (${flipped} celle cambiate)`);
}
const land = sea.map((v) => 1 - v);
const toLand = edt(land), toSea = edt(sea);

const rgb = new Uint8Array(N * 3);
let nSea = 0, nBeach = 0;
for (let k = 0; k < N; k++) {
  // a meno di 14 m dal mare non c'è prato: il verde è l'acqua bassa della battigia vista dall'alto
  const g = cnt[k] && toSea[k] > 14 ? grn[k] / cnt[k] : 0;
  // R = distanza con segno dalla riva: 128 sulla riva, +1,6 per metro verso il largo (fino a 80 m),
  // -1,6 per metro verso terra. Continua attraverso la riva, così la linea d'acqua è precisa sotto la
  // cella da 2 m (con una maschera binaria una riva quasi dritta veniva a lunghe scalinate).
  rgb[k * 3] = Math.max(0, Math.min(255, Math.round(128 + 1.6 * (sea[k] ? toLand[k] - STEP / 2 : -(toSea[k] - STEP / 2)))));
  if (sea[k]) { nSea++; continue; }
  // spiaggia: terra bassa entro 90 m dal mare, non verde
  const beach = cellH[k] < 6 ? (1 - Math.min(1, Math.max(0, (toSea[k] - 60) / 30))) * (1 - Math.min(1, g * 2)) : 0;
  if (beach > 0.5) nBeach++;
  rgb[k * 3 + 1] = Math.round(beach * 255);
  rgb[k * 3 + 2] = Math.round(Math.min(1, g * 1.4) * 255);
}
writeFileSync(new URL('data/landcover.png', root), encodePNG(W, H, rgb));
writeFileSync(new URL('data/landcover.json', root), JSON.stringify({
  source: 'classificata dall\'ortofoto 2022 SITR (CC BY 4.0)', step: STEP, width: W, height: H, xmin: X0, ymax: Y1,
  channels: 'R: distanza con segno dalla riva (128 = riva, +1,6/m verso il largo, -1,6/m verso terra), G: spiaggia, B: verde',
}));

// MDT sulla costa: fondale che scende sotto il mare, spiaggia del 2022 asciutta.
// Il profilo è CONTINUO nella distanza con segno dalla riva (s > 0 mare): la quota vale 0 sulla riva e
// cresce/decresce in modo regolare. Un salto netto fra mare e spiaggia su una maglia da 4 m faceva
// scattare la linea d'acqua a gradini (la quota interpolata attraversa lo zero a scalini di una cella).
const signed = (k) => (sea[k] ? toLand[k] - STEP / 2 : -(toSea[k] - STEP / 2));
const out = Float32Array.from(dtm);
for (let r = 0; r < dtmMeta.height; r++) for (let c = 0; c < dtmMeta.width; c++) {
  const x = dtmMeta.xmin + c * dtmMeta.step, y = dtmMeta.ymax - r * dtmMeta.step;
  const cx = Math.round((x - X0) / STEP), cy = Math.round((Y1 - y) / STEP);
  if (cx < 1 || cy < 1 || cx >= W || cy >= H) continue;
  // il vertice sta all'incrocio di quattro celle da 2 m: media della distanza con segno
  const s = (signed(cy * W + cx) + signed(cy * W + cx - 1) + signed((cy - 1) * W + cx) + signed((cy - 1) * W + cx - 1)) / 4;
  const i = r * dtmMeta.width + c;
  if (s > 0) out[i] = -Math.min(6, s * 0.08);
  else if (s > -60 && out[i] < 3) {
    const d = -s, h0 = d < 10 ? d * 0.08 : 0.8 + (d - 10) * 0.02;   // pendio della battigia
    out[i] = h0 + Math.min(Math.max(out[i] - h0, 0), 0.12 * d);      // il rilievo vero sale solo piano
  }
}
writeFileSync(new URL('data/dtm-sea.bin', root), Buffer.from(out.buffer));
console.log(`copertura ${W}×${H} a ${STEP} m: mare ${(nSea * STEP * STEP / 1e6).toFixed(2)} km², spiaggia ${(nBeach * STEP * STEP / 1e4).toFixed(1)} ha`);
