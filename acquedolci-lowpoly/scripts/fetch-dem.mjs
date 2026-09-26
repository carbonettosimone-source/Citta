#!/usr/bin/env node
/**
 * Scarica tile Terrarium (AWS) per il bbox della città e genera heightmap.bin
 * Uso: node scripts/fetch-dem.mjs acquedolci
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function parseArgs(argv) {
  let city = process.env.CITY || 'acquedolci';
  for (const a of argv) {
    if (a.startsWith('--city=')) city = a.slice(7);
    else if (!a.startsWith('-')) city = a;
  }
  return city;
}

const cityId = parseArgs(process.argv.slice(2));
const configPath = join(ROOT, 'src/cities', `${cityId}.json`);
if (!existsSync(configPath)) {
  console.error(`Config città mancante: ${configPath}`);
  process.exit(1);
}
const city = JSON.parse(readFileSync(configPath, 'utf8'));
const BBOX = city.bbox;
const demRel = (city.data?.demMeta || '/data/dem/meta.json').replace(/^\//, '');
const OUT = join(ROOT, 'public', dirname(demRel));
mkdirSync(OUT, { recursive: true });

const Z = 14;
const UA = `CityLowPoly/0.5 (${cityId}; educational; terrain cache)`;

function lon2tile(lon, z) {
  return Math.floor(((lon + 180) / 360) * 2 ** z);
}
function lat2tile(lat, z) {
  const r = (lat * Math.PI) / 180;
  return Math.floor(((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * 2 ** z);
}
function tile2lon(x, z) {
  return (x / 2 ** z) * 360 - 180;
}
function tile2lat(y, z) {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** z;
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

const x0 = lon2tile(BBOX.west, Z);
const x1 = lon2tile(BBOX.east, Z);
const y0 = lat2tile(BBOX.north, Z);
const y1 = lat2tile(BBOX.south, Z);

for (let y = y0; y <= y1; y++) {
  for (let x = x0; x <= x1; x++) {
    const path = join(OUT, `${Z}_${x}_${y}.png`);
    if (existsSync(path)) continue;
    const url = `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${Z}/${x}/${y}.png`;
    console.log('fetch', url);
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(path, Buffer.from(await res.arrayBuffer()));
  }
}

const TS = 256;
const cols = x1 - x0 + 1;
const rows = y1 - y0 + 1;
const W = cols * TS;
const H = rows * TS;
const heights = new Float32Array(W * H);
let minH = Infinity;
let maxH = -Infinity;
for (let ty = y0; ty <= y1; ty++) {
  for (let tx = x0; tx <= x1; tx++) {
    const png = PNG.sync.read(readFileSync(join(OUT, `${Z}_${tx}_${ty}.png`)));
    const ox = (tx - x0) * TS;
    const oy = (ty - y0) * TS;
    for (let py = 0; py < TS; py++) {
      for (let px = 0; px < TS; px++) {
        const i = (py * TS + px) << 2;
        const elev = png.data[i] * 256 + png.data[i + 1] + png.data[i + 2] / 256 - 32768;
        heights[(oy + py) * W + (ox + px)] = elev;
        minH = Math.min(minH, elev);
        maxH = Math.max(maxH, elev);
      }
    }
  }
}
writeFileSync(join(OUT, 'heightmap.bin'), Buffer.from(heights.buffer));
const meta = {
  source: 'AWS Terrain Tiles (Terrarium PNG)',
  attribution: 'Mapzen / Nextzen Terrarium via AWS Open Data',
  encoding: 'terrarium',
  z: Z,
  bbox: BBOX,
  tiles: { x0, x1, y0, y1 },
  tileSize: TS,
  mosaic: {
    west: tile2lon(x0, Z),
    east: tile2lon(x1 + 1, Z),
    north: tile2lat(y0, Z),
    south: tile2lat(y1 + 1, Z),
  },
  width: W,
  height: H,
  minElev: minH,
  maxElev: maxH,
  heightmap: 'heightmap.bin',
  origin: city.origin,
  city: cityId,
};
writeFileSync(join(OUT, 'meta.json'), JSON.stringify(meta, null, 2));
console.log(`OK DEM ${W}x${H} elev ${minH.toFixed(1)}…${maxH.toFixed(1)} → ${OUT}`);
