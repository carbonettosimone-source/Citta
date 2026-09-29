#!/usr/bin/env node
/**
 * Tavolozza delle facciate letta dalle foto del paese su Wikimedia Commons (panoramiche dall'alto
 * di Nuccio Miraglia, CC BY-SA 2.0). Si tengono solo i pixel d'intonaco: niente cielo e mare
 * (bluastri), vegetazione (verde), coppi (arancio saturo), vetri e ombre profonde (scuri).
 * Output: data/photo-palette.json con i quantili L, a, b (CIELAB) dell'intonaco visto dal vero.
 * build-model.mjs li usa per portare i colori misurati dall'ortofoto sulla stessa distribuzione.
 *
 *   node scripts/photo-palette.mjs <cartella con le foto>
 */
import { readFileSync, writeFileSync } from 'node:fs';
import jpeg from 'jpeg-js';
import { toLab, quantiles } from './lib/lab.mjs';

const dir = process.argv[2];
// foto, fascia di righe con gli edifici (frazione dell'altezza), pagina Commons
const PHOTOS = [
  ['Acquedolci_jpg.jpg', 0.72, 1.0, 'https://commons.wikimedia.org/wiki/File:Acquedolci.jpg'],
  ['Acquedolci_2_jpg.jpg', 0.62, 1.0, 'https://commons.wikimedia.org/wiki/File:Acquedolci_(2).jpg'],
];
function hsv(r, g, b) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0; if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [(h * 60 + 360) % 360, mx ? d / mx : 0, mx / 255];
}
const L = [], A = [], B = [], kept = {};
for (const [file, y0, y1] of PHOTOS) {
  const img = jpeg.decode(readFileSync(`${dir}/${file}`), { useTArray: true });
  let n = 0;
  for (let y = Math.floor(img.height * y0); y < img.height * y1; y++) for (let x = 0; x < img.width; x++) {
    const i = (y * img.width + x) * 4, r = img.data[i], g = img.data[i + 1], b = img.data[i + 2];
    const [h, s, v] = hsv(r, g, b);
    if (v < 0.42 || s > 0.42) continue;                   // ombre, vetri, colori saturi
    if (b > r + 4) continue;                              // cielo, mare, ombre bluastre
    if (g > r + 2 && h > 60 && h < 170) continue;          // vegetazione
    if ((h < 28 || h > 340) && s > 0.3) continue;         // coppi
    const [l, a, bb] = toLab([r, g, b]);
    L.push(l); A.push(a); B.push(bb); n++;
  }
  kept[file] = n;
}
const out = { source: PHOTOS.map((p) => p[3]), license: 'foto CC BY-SA 2.0 Nuccio Miraglia; qui solo statistiche di colore', pixels: kept, L: quantiles(L), a: quantiles(A), b: quantiles(B) };
writeFileSync(new URL('../data/photo-palette.json', import.meta.url), JSON.stringify(out));
console.log(kept, 'L', out.L[10], out.L[50], out.L[90], 'a', out.a[10], out.a[50], out.a[90], 'b', out.b[10], out.b[50], out.b[90]);
