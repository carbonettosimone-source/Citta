#!/usr/bin/env node
/**
 * Ortofoto 2022 alla risoluzione nativa (SITR, 20 cm, servita a 25 cm) per il paese, a tessere da
 * 256 m (1024 px): il renderer carica solo le 3×3 intorno a chi guarda (vedi src/ortho-hr.js).
 * Niente upscaler: il dettaglio in più è quello vero del volo, non inventato.
 * Si scaricano solo le tessere con almeno MIN_B edifici e le loro vicine.
 * Output: data/ortho-hr25/*.jpg + data/ortho-hr25.json
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';

const S = 256, PX = 1024, MIN_B = 3, Q = +(process.env.JPEG_Q || 70);
const model = JSON.parse(readFileSync(new URL('../public/data/model.json', import.meta.url)));
const [OX, OY] = model.origin;
const dir = new URL('../data/ortho-hr25/', import.meta.url);
mkdirSync(dir, { recursive: true });
const URL_ = 'https://map.sitr.regione.sicilia.it/gis/rest/services/ortofoto/ortofoto_2022_20cm_sicilia/ImageServer/exportImage';

const count = new Map();
for (const b of model.buildings) {
  const k = `${Math.floor((b.r[0] + OX) / S)},${Math.floor((OY - b.r[1]) / S)}`;
  count.set(k, (count.get(k) || 0) + 1);
}
const keys = new Set();
for (const [k, n] of count) if (n >= MIN_B) {
  const [i, j] = k.split(',').map(Number);
  for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) if ((count.get(`${i + di},${j + dj}`) || 0) > 0 || (di === 0 && dj === 0)) keys.add(`${i + di},${j + dj}`);
}
const tiles = [];
let bytes = 0;
for (const k of [...keys].sort()) {
  const [i, j] = k.split(',').map(Number);
  const x0 = i * S, y0 = j * S, file = `hr_${i}_${j}.jpg`, path = new URL(file, dir);
  if (!existsSync(path)) {
    const q = new URLSearchParams({ bbox: `${x0},${y0},${x0 + S},${y0 + S}`, bboxSR: '25833', imageSR: '25833', size: `${PX},${PX}`,
      format: 'jpg', compressionQuality: String(Q), interpolation: 'RSP_BilinearInterpolation', f: 'image' });
    for (let t = 0; ; t++) {
      const r = await fetch(`${URL_}?${q}`);
      const buf = Buffer.from(await r.arrayBuffer());
      if (r.ok && buf[0] === 0xff && buf[1] === 0xd8) { writeFileSync(path, buf); break; }
      if (t > 3) throw new Error(`fallita ${file}`);
      await new Promise((res) => setTimeout(res, 2000));
    }
  }
  bytes += statSync(path).size;
  tiles.push([i, j]);
  if (tiles.length % 20 === 0) console.log(tiles.length, '/', keys.size, (bytes / 1e6).toFixed(1), 'MB');
}
writeFileSync(new URL('../data/ortho-hr25.json', import.meta.url), JSON.stringify({
  source: 'Ortofoto 2022 20 cm — SITR Regione Siciliana (CC BY 4.0)', epsg: 25833, size: S, px: PX, tiles,
}));
console.log(`${tiles.length} tessere, ${(bytes / 1e6).toFixed(1)} MB`);
