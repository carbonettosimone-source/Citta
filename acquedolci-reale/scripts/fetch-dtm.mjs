#!/usr/bin/env node
/**
 * Terreno: MDT 2013 della Regione Siciliana (SITR, CC BY 4.0), 2 m, valori float grezzi via
 * ImageServer exportImage (TIFF F32) in EPSG:25833 — stesso sistema di edifici e ortofoto.
 * Ricampionato a STEP metri per il renderer. Output: data/dtm.bin (Float32, righe da nord) + data/dtm.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fromArrayBuffer } from 'geotiff';
import { utmBox } from './geo.mjs';

const STEP = 4; // m per cella nel renderer: 2 m reali, ricampionati (≈900×930 celle sul bbox)
const city = JSON.parse(readFileSync(new URL('../city.json', import.meta.url)));
const b = utmBox(city.bboxLonLat);
const box = { xmin: Math.floor(b.xmin / STEP) * STEP, ymin: Math.floor(b.ymin / STEP) * STEP, xmax: Math.ceil(b.xmax / STEP) * STEP, ymax: Math.ceil(b.ymax / STEP) * STEP };
const W = (box.xmax - box.xmin) / STEP, H = (box.ymax - box.ymin) / STEP;

const q = new URLSearchParams({
  bbox: `${box.xmin},${box.ymin},${box.xmax},${box.ymax}`, bboxSR: '25833', imageSR: '25833',
  size: `${W},${H}`, format: 'tiff', pixelType: 'F32', interpolation: 'RSP_BilinearInterpolation',
  noData: '-9999', f: 'image',
});
const url = `https://map.sitr.regione.sicilia.it/gis/rest/services/modelli_digitali/mdt_2013/ImageServer/exportImage?${q}`;
const r = await fetch(url);
if (!r.ok) throw new Error(`MDT HTTP ${r.status}`);
const buf = await r.arrayBuffer();
const img = await (await fromArrayBuffer(buf)).getImage();
const [band] = await img.readRasters();
if (img.getWidth() !== W || img.getHeight() !== H) throw new Error(`dimensioni inattese ${img.getWidth()}x${img.getHeight()}`);
const h = new Float32Array(W * H);
let min = Infinity, max = -Infinity, nodata = 0;
for (let i = 0; i < h.length; i++) {
  let v = band[i];
  if (!(v > -1000)) { v = 0; nodata++; } // mare/fuori copertura: livello del mare
  h[i] = v;
  if (v < min) min = v; if (v > max) max = v;
}
writeFileSync(new URL('../data/dtm.bin', import.meta.url), Buffer.from(h.buffer));
writeFileSync(new URL('../data/dtm.json', import.meta.url), JSON.stringify({
  source: 'MDT 2013 2 m — SITR Regione Siciliana (CC BY 4.0)', epsg: 25833, step: STEP, width: W, height: H,
  xmin: box.xmin, ymax: box.ymax, rowOrder: 'north-to-south', min, max, nodata,
}, null, 1));
console.log(`DTM ${W}×${H} @ ${STEP} m, quota ${min.toFixed(1)}…${max.toFixed(1)} m, nodata ${nodata}`);
