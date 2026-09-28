#!/usr/bin/env node
/**
 * Altezze VERE degli edifici dal LiDAR del Piano Straordinario di Telerilevamento (MASE, Geoportale
 * Nazionale), servizio LIDAR_SICILIA: DSM "first pulse" e DTM a 2 m. Il WCS non espone coperture e
 * il GetMap restituisce solo immagini colorate, quindi i valori grezzi si leggono punto per punto
 * con GetFeatureInfo (EPSG:32633 = UTM 33N, coincide con 25833 del DBTR al centimetro).
 *
 * Per ogni edificio: DSM su una griglia di punti INTERNI alla pianta (a ≥0,8 m dai muri, così il
 * pixel da 2 m cade sul tetto e non sulla strada), DTM al centro (terreno interpolato sotto
 * l'edificio, stesso datum del DSM). Altezza = DSM − DTM, forma del tetto dalla dispersione dei DSM.
 *
 * Cache ripristinabile in data/lidar-cache.json: si può interrompere e rilanciare.
 * Uso: NODE_USE_ENV_PROXY=1 node scripts/fetch-lidar.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const M = 'http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/servizi-LiDAR/LIDAR_SICILIA.map';
const DSM = 'EL.LIDAR.SICILIA.2x2.DSM_FIRST';
const DTM = 'EL.LIDAR.SICILIA.2x2.DTM';
const CONCURRENCY = 8;
const cachePath = new URL('../data/lidar-cache.json', import.meta.url);
const { buildings } = JSON.parse(readFileSync(new URL('../data/buildings.json', import.meta.url)));
const cache = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath)) : {};

async function sample(layer, x, y, tries = 3) {
  const d = 1; // m: bbox 2×2 m attorno al punto, pixel centrale
  const u = `${M}&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=${layer}&QUERY_LAYERS=${layer}&STYLES=`
    + `&SRS=EPSG:32633&BBOX=${x - d},${y - d},${x + d},${y + d}&WIDTH=3&HEIGHT=3&X=1&Y=1&INFO_FORMAT=text/plain`;
  for (let k = 0; k < tries; k++) {
    try {
      const t = await (await fetch(u)).text();
      // "... @9 Stretched value;Pixel Value; 60;46.696999;" → ultimo numero dell'ultimo segmento
      const seg = t.split('@').at(-1);
      if (/NoData/i.test(seg)) return null;
      const nums = seg.match(/-?\d+(\.\d+)?/g);
      if (nums && nums.length >= 2) return parseFloat(nums.at(-1));
    } catch { /* ritenta */ }
    await new Promise((r) => setTimeout(r, 500 * (k + 1)));
  }
  return null;
}

function pointInRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function distToRing(x, y, ring) {
  let best = Infinity;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [ax, ay] = ring[j], [bx, by] = ring[i];
    const L = (bx - ax) ** 2 + (by - ay) ** 2;
    const t = L > 0 ? Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (y - ay) * (by - ay)) / L)) : 0;
    best = Math.min(best, Math.hypot(x - ax - (bx - ax) * t, y - ay - (by - ay) * t));
  }
  return best;
}

/** Punti di campionamento: griglia interna, ~1 ogni 30 m², da 1 a 12; ripiega sul punto più interno. */
function samplePoints(ring) {
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  for (const [x, y] of ring) { xmin = Math.min(xmin, x); xmax = Math.max(xmax, x); ymin = Math.min(ymin, y); ymax = Math.max(ymax, y); }
  let area = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) area += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
  area = Math.abs(area) / 2;
  const target = Math.max(1, Math.min(12, Math.round(area / 30)));
  const step = Math.max(2, Math.sqrt(area / target));
  const pts = [];
  let deepest = null, deepD = -1;
  for (let x = xmin + step / 2; x < xmax; x += step) {
    for (let y = ymin + step / 2; y < ymax; y += step) {
      if (!pointInRing(x, y, ring)) continue;
      const d = distToRing(x, y, ring);
      if (d > deepD) { deepD = d; deepest = [x, y]; }
      if (d >= 0.8) pts.push([x, y]);
    }
  }
  // pianta stretta: la griglia può non avere punti a 0,8 m dai muri — si prende il più interno
  if (!pts.length) {
    const fine = Math.max(0.5, step / 4);
    for (let x = xmin; x <= xmax; x += fine) for (let y = ymin; y <= ymax; y += fine) {
      if (!pointInRing(x, y, ring)) continue;
      const d = distToRing(x, y, ring);
      if (d > deepD) { deepD = d; deepest = [x, y]; }
    }
    if (deepest) pts.push(deepest);
  }
  return { pts: pts.slice(0, 12), area, deepest: deepest || pts[0] };
}

const todo = buildings.filter((b) => !cache[b.id]);
console.log(`edifici: ${buildings.length}, già in cache: ${buildings.length - todo.length}, da fare: ${todo.length}`);
let done = 0, nreq = 0, next = 0;
const t0 = Date.now();
function save() { writeFileSync(cachePath, JSON.stringify(cache)); }

async function worker() {
  while (next < todo.length) {
    const b = todo[next++];
    const { pts, deepest } = samplePoints(b.rings[0]);
    if (!pts.length) { cache[b.id] = { dsm: [], dtm: null, pts: [] }; continue; }
    const dsm = [];
    for (const [x, y] of pts) { dsm.push(await sample(DSM, x, y)); nreq++; }
    const dtm = await sample(DTM, deepest[0], deepest[1]); nreq++;
    cache[b.id] = { dsm, dtm, pts: pts.map(([x, y]) => [+x.toFixed(1), +y.toFixed(1)]) };
    if (++done % 50 === 0) {
      save();
      const s = (Date.now() - t0) / 1000;
      console.log(`${done}/${todo.length} edifici · ${nreq} richieste · ${(nreq / s).toFixed(1)} req/s · ETA ${Math.round(((todo.length - done) * s) / done / 60)} min`);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
save();
console.log(`fatto: ${done} edifici, ${nreq} richieste in ${Math.round((Date.now() - t0) / 1000)} s → data/lidar-cache.json`);
