#!/usr/bin/env node
/**
 * Silhouette reale dell'orizzonte per una città: node scripts/bake-horizon.mjs <id>
 * Scarica tile Terrarium z10 (~150 m/px) nel raggio di 65 km (cache in .cache/horizon-tiles),
 * calcola 720 azimut × 3 fasce → public/data/horizon/<id>.json (~15 KB).
 * Il motore lo legge da solo: il cielo disegna rilievi e isole reali, velati per distanza.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { computeHorizon } from '../src/engine/sky/horizonCompute.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2] || 'acquedolci';
const cfg = JSON.parse(readFileSync(join(ROOT, 'src/cities', `${id}.json`), 'utf8'));
const { lat, lon } = cfg.origin;
const Z = 10;
const RADIUS = 66000;
const CACHE = join(ROOT, '.cache/horizon-tiles');
mkdirSync(CACHE, { recursive: true });

const lon2tile = (lo) => Math.floor(((lo + 180) / 360) * 2 ** Z);
const lat2tile = (la) => Math.floor(((1 - Math.log(Math.tan((la * Math.PI) / 180) + 1 / Math.cos((la * Math.PI) / 180)) / Math.PI) / 2) * 2 ** Z);
const dLat = RADIUS / 111320;
const dLon = RADIUS / (111320 * Math.cos((lat * Math.PI) / 180));
const x0 = lon2tile(lon - dLon), x1 = lon2tile(lon + dLon);
const y0 = lat2tile(lat + dLat), y1 = lat2tile(lat - dLat);

const tiles = new Map();
console.log(`Orizzonte "${id}": tile z${Z} ${x1 - x0 + 1}×${y1 - y0 + 1}`);
for (let y = y0; y <= y1; y++) {
  for (let x = x0; x <= x1; x++) {
    const path = join(CACHE, `${Z}_${x}_${y}.png`);
    if (!existsSync(path)) {
      const url = `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${Z}/${x}/${y}.png`;
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`${url} HTTP ${res.status}`);
      writeFileSync(path, Buffer.from(await res.arrayBuffer()));
    }
    tiles.set(`${x}_${y}`, PNG.sync.read(readFileSync(path)));
  }
}

function sampleElev(la, lo) {
  const n = 2 ** Z;
  const fx = ((lo + 180) / 360) * n;
  const s = Math.log(Math.tan((la * Math.PI) / 180) + 1 / Math.cos((la * Math.PI) / 180));
  const fy = ((1 - s / Math.PI) / 2) * n;
  const tx = Math.floor(fx), ty = Math.floor(fy);
  const png = tiles.get(`${tx}_${ty}`);
  if (!png) return null;
  const px = Math.min(255, Math.floor((fx - tx) * 256)), py = Math.min(255, Math.floor((fy - ty) * 256));
  const o = (py * 256 + px) * 4;
  return png.data[o] * 256 + png.data[o + 1] + png.data[o + 2] / 256 - 32768;
}

// Occhio: quota urbana dal RegionProfile se c'è, altrimenti dal DEM grossolano + 1,7 m
let eye = sampleElev(lat, lon) ?? 0;
const regionPath = join(ROOT, 'public/data/region', `${id}.json`);
if (existsSync(regionPath)) eye = JSON.parse(readFileSync(regionPath, 'utf8')).terrain?.townElev ?? eye;
const H = computeHorizon({ lat, lon, eyeElev: eye + 1.7, sampleElev });

const outDir = join(ROOT, 'public/data/horizon');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, `${id}.json`), JSON.stringify({ ...H, source: 'AWS Terrain Tiles (Terrarium) z10', generatedAt: new Date().toISOString() }));
const peak = H.bands.map((b) => Math.max(...b.angles).toFixed(1));
console.log(`→ public/data/horizon/${id}.json · occhio ${(eye + 1.7).toFixed(0)} m · angolo max per fascia (lontana/media/vicina): ${peak.join(' / ')}°`);
