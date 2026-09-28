#!/usr/bin/env node
/**
 * Ortofoto 2022 a 20 cm (SITR Regione Siciliana, CC BY 4.0) via ImageServer exportImage, riproiettata
 * in EPSG:25833. Due livelli, perché l'intero bbox a piena risoluzione non sta in una pagina web:
 *  - "core": il paese, tile da TILE px a CORE_RES m/px — texture del suolo e dei TETTI (colori veri);
 *  - "base": tutto il bbox a BASE_RES m/px — colline e campagna intorno.
 * Output: data/ortho/*.jpg + data/ortho.json
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { utmBox } from './geo.mjs';

const CORE_RES = +(process.env.CORE_RES || 0.5);
const BASE_RES = 2.5;
const TILE = 2048;
const QUALITY = +(process.env.JPEG_Q || 72);
const city = JSON.parse(readFileSync(new URL('../city.json', import.meta.url)));
const dir = new URL('../data/ortho/', import.meta.url);
mkdirSync(dir, { recursive: true });
const S = 'https://map.sitr.regione.sicilia.it/gis/rest/services/ortofoto/ortofoto_2022_20cm_sicilia/ImageServer/exportImage';

async function grab(x0, y0, x1, y1, w, h, file) {
  const q = new URLSearchParams({
    bbox: `${x0},${y0},${x1},${y1}`, bboxSR: '25833', imageSR: '25833', size: `${w},${h}`,
    format: 'jpg', compressionQuality: String(QUALITY), interpolation: 'RSP_BilinearInterpolation', f: 'image',
  });
  for (let k = 0; k < 3; k++) {
    const r = await fetch(`${S}?${q}`);
    const buf = Buffer.from(await r.arrayBuffer());
    if (r.ok && buf[0] === 0xff && buf[1] === 0xd8) { writeFileSync(new URL(file, dir), buf); return buf.length; }
    await new Promise((res) => setTimeout(res, 1500));
  }
  throw new Error(`ortofoto fallita: ${file}`);
}

const tiles = [];
const span = TILE * CORE_RES;
const c = utmBox(city.coreLonLat);
const cx0 = Math.floor(c.xmin / span) * span, cy0 = Math.floor(c.ymin / span) * span;
let bytes = 0;
for (let y = cy0; y < c.ymax; y += span) {
  for (let x = cx0; x < c.xmax; x += span) {
    const file = `core_${Math.round(x)}_${Math.round(y)}.jpg`;
    bytes += await grab(x, y, x + span, y + span, TILE, TILE, file);
    tiles.push({ file, xmin: x, ymin: y, xmax: x + span, ymax: y + span, level: 'core' });
    console.log('core', file, (bytes / 1e6).toFixed(1), 'MB');
  }
}
const b = utmBox(city.bboxLonLat);
const bw = Math.ceil((b.xmax - b.xmin) / BASE_RES), bh = Math.ceil((b.ymax - b.ymin) / BASE_RES);
bytes += await grab(b.xmin, b.ymin, b.xmin + bw * BASE_RES, b.ymin + bh * BASE_RES, bw, bh, 'base.jpg');
tiles.push({ file: 'base.jpg', xmin: b.xmin, ymin: b.ymin, xmax: b.xmin + bw * BASE_RES, ymax: b.ymin + bh * BASE_RES, level: 'base' });
writeFileSync(new URL('../data/ortho.json', import.meta.url), JSON.stringify({
  source: 'Ortofoto 2022 20 cm — SITR Regione Siciliana (CC BY 4.0)', epsg: 25833, coreRes: CORE_RES, baseRes: BASE_RES, tiles,
}, null, 1));
console.log(`ortofoto: ${tiles.length} immagini, ${(bytes / 1e6).toFixed(1)} MB`);
