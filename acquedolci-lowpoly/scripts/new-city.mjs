#!/usr/bin/env node
/**
 * Crea il profilo di una città qualsiasi partendo dal nome.
 *   node scripts/new-city.mjs "Cortina d'Ampezzo, Italia" [--id=cortina] [--half=900]
 *   node scripts/new-city.mjs --lat=46.54 --lon=12.14 --id=cortina
 * Poi: npm run bake -- <id>   (OSM → DEM → RegionProfile → Appearance)
 *
 * Il bbox è centrato sul centro abitato, lato 2×half metri (default 1,8 km):
 * oltre, Overpass e il main thread del telefono soffrono finché non c'è lo streaming a chunk.
 */
import { writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const opt = (k) => argv.find((a) => a.startsWith(`--${k}=`))?.split('=').slice(1).join('=');
const query = argv.filter((a) => !a.startsWith('--')).join(' ').trim();
const half = Math.min(2500, Math.max(300, Number(opt('half') || 900)));

const slug = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);

let lat = opt('lat') != null ? Number(opt('lat')) : null;
let lon = opt('lon') != null ? Number(opt('lon')) : null;
let name = query || null;
let region = '';

if (lat == null || lon == null) {
  if (!query) {
    console.error('Uso: new-city.mjs "Nome città, Paese" [--id=..] [--half=metri]');
    process.exit(1);
  }
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&addressdetails=1&accept-language=it&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CityLowPoly/0.6 (new-city)' }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`Nominatim HTTP ${res.status}`);
  const [hit] = await res.json();
  if (!hit) {
    console.error('Nessun risultato per', query);
    process.exit(1);
  }
  lat = +hit.lat;
  lon = +hit.lon;
  name = hit.name || query.split(',')[0];
  const a = hit.address || {};
  region = [a.county || a.province, a.state, a.country].filter(Boolean).join(', ');
}

const id = opt('id') || slug(name || `${lat}-${lon}`);
const dLat = half / 111320;
const dLon = half / (111320 * Math.cos((lat * Math.PI) / 180));
const r6 = (v) => +v.toFixed(6);

const cfg = {
  id,
  name: name || id,
  region,
  origin: { lat: r6(lat), lon: r6(lon) },
  bbox: { south: r6(lat - dLat), west: r6(lon - dLon), north: r6(lat + dLat), east: r6(lon + dLon) },
  data: { osm: `/data/${id}.json`, demMeta: `/data/dem/${id}/meta.json` },
  regionProfile: `/data/region/${id}.json`,
  appearance: `/data/appearance/${id}.json`,
  dna: `/data/dna/${id}.json`,
  spawn: { offsetX: 0, offsetZ: 0 },
  landmarks: { maxLabels: 12 },
  terrain: { step: 10 },
  buildings: { roadClearance: 1.1 },
  look: { post: true, bloom: true },
};

const out = join(ROOT, 'src/cities', `${id}.json`);
if (existsSync(out) && !argv.includes('--force')) {
  console.error(`Esiste già ${out} (usa --force per sovrascrivere)`);
  process.exit(1);
}
writeFileSync(out, JSON.stringify(cfg, null, 2));
console.log(`✓ ${out}\n  ${cfg.name} — ${region || `${lat}, ${lon}`}\n  Ora: npm run bake -- ${id}   poi apri /?city=${id}`);
