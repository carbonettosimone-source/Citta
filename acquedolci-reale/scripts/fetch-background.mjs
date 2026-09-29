#!/usr/bin/env node
/**
 * Sfondo lontano, a bassa risoluzione, dalle stesse fonti del paese (stessi colori):
 *  - il litorale da Cefalù a Capo d'Orlando con le colline di Madonie e Nebrodi alle spalle;
 *  - le sette isole Eolie, nella loro posizione vera.
 * MDT 2013 (SITR, CC BY 4.0) e ortofoto 2022 (SITR, CC BY 4.0) via ImageServer exportImage in EPSG:25833.
 * Output: data/bg/<nome>.json (quote Int16 in m, base64; il mare è -30) + data/bg/<nome>.jpg
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fromArrayBuffer } from 'geotiff';
import { toUtm33 } from './geo.mjs';

const S = 'https://map.sitr.regione.sicilia.it/gis/rest/services';
// nome, [ovest, sud, est, nord], passo MDT (m), passo foto (m)
const REGIONS = [
  ['litorale', [13.98, 37.86, 14.84, 38.21], 100, 25],
  ['alicudi', [14.315, 38.515, 14.385, 38.565], 40, 12],
  ['filicudi', [14.52, 38.54, 14.62, 38.605], 40, 12],
  ['salina', [14.78, 38.51, 14.90, 38.605], 40, 12],
  ['lipari', [14.89, 38.42, 15.01, 38.54], 40, 12],
  ['vulcano', [14.92, 38.355, 15.03, 38.43], 40, 12],
  ['panarea', [15.04, 38.61, 15.11, 38.66], 40, 12],
  ['stromboli', [15.17, 38.76, 15.26, 38.83], 40, 12],
];
const dir = new URL('../data/bg/', import.meta.url);
mkdirSync(dir, { recursive: true });
async function get(url, check) {
  for (let t = 0; ; t++) {
    const r = await fetch(url); const b = Buffer.from(await r.arrayBuffer());
    if (r.ok && check(b)) return b;
    if (t > 3) throw new Error(`fallito ${url.slice(0, 120)}`);
    await new Promise((res) => setTimeout(res, 2000));
  }
}
for (const [name, [w, s, e, n], step, px] of REGIONS) {
  // bbox UTM che contiene il rettangolo geografico, allineato al passo del MDT
  const c = [toUtm33(w, s), toUtm33(e, s), toUtm33(w, n), toUtm33(e, n)];
  const x0 = Math.floor(Math.min(...c.map((p) => p[0])) / step) * step, x1 = Math.ceil(Math.max(...c.map((p) => p[0])) / step) * step;
  const y0 = Math.floor(Math.min(...c.map((p) => p[1])) / step) * step, y1 = Math.ceil(Math.max(...c.map((p) => p[1])) / step) * step;
  const W = (x1 - x0) / step + 1, H = (y1 - y0) / step + 1; // vertici della maglia (celle centrate sui nodi)
  const bbox = `${x0 - step / 2},${y0 - step / 2},${x1 + step / 2},${y1 + step / 2}`;
  const tif = await get(`${S}/modelli_digitali/mdt_2013/ImageServer/exportImage?${new URLSearchParams({ bbox, bboxSR: '25833', imageSR: '25833', size: `${W},${H}`, format: 'tiff', pixelType: 'F32', noData: '-9999', interpolation: 'RSP_BilinearInterpolation', f: 'image' })}`, (b) => b[0] === 0x49 || b[0] === 0x4d);
  const img = await (await fromArrayBuffer(tif.buffer.slice(tif.byteOffset, tif.byteOffset + tif.byteLength))).getImage();
  const [band] = await img.readRasters();
  const h = new Int16Array(W * H); let max = 0, land = 0;
  for (let i = 0; i < h.length; i++) { const v = band[i]; if (v > 0.5) { h[i] = Math.round(v); max = Math.max(max, v); land++; } else h[i] = -30; }
  const PW = Math.round((x1 - x0 + step) / px), PH = Math.round((y1 - y0 + step) / px);
  const jpg = await get(`${S}/ortofoto/ortofoto_2022_20cm_sicilia/ImageServer/exportImage?${new URLSearchParams({ bbox, bboxSR: '25833', imageSR: '25833', size: `${PW},${PH}`, format: 'jpg', compressionQuality: '72', interpolation: 'RSP_BilinearInterpolation', f: 'image' })}`, (b) => b[0] === 0xff && b[1] === 0xd8);
  writeFileSync(new URL(`${name}.jpg`, dir), jpg);
  writeFileSync(new URL(`${name}.json`, dir), JSON.stringify({
    name, source: 'MDT 2013 e ortofoto 2022 — SITR Regione Siciliana (CC BY 4.0)', epsg: 25833, step,
    xmin: x0, ymax: y1, width: W, height: H, max: Math.round(max), data: Buffer.from(h.buffer).toString('base64'),
  }));
  console.log(`${name}: ${W}×${H} a ${step} m, quota max ${max.toFixed(0)} m, terra ${(land / h.length * 100).toFixed(0)}%, foto ${PW}×${PH} ${(jpg.length / 1e6).toFixed(1)} MB`);
}
