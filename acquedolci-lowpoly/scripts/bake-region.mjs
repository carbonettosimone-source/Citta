#!/usr/bin/env node
/**
 * Bake del RegionProfile per una città: node scripts/bake-region.mjs <id> [--offline] [--refresh]
 *
 * Segnali locali (sempre): statistiche OSM + DEM (quota urbana, maschera mare).
 * Segnali online (cache in public/data/region/<id>.signals.json):
 *   - clima: Open-Meteo archive 2015–2024 (uso gratuito NON commerciale: per il commerciale serve piano API)
 *   - paese/regione: Nominatim reverse (max 1 req/s, User-Agent obbligatorio)
 *   - generi vegetali: GBIF occurrence facets (solo conteggi aggregati)
 * Ogni segnale è opzionale: se manca, il resolver ripiega sui prior con confidenza più bassa.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { osmStats, demStats } from '../src/engine/region/signals.js';
import { offlineClimate, fromDailySeries, LAPSE_C_PER_M } from '../src/engine/region/climate.js';
import { resolveRegionProfile } from '../src/engine/region/resolveRegionProfile.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const cityId = args.find((a) => !a.startsWith('-')) || process.env.CITY || 'acquedolci';
const OFFLINE = args.includes('--offline');
const REFRESH = args.includes('--refresh');
const UA = `CityLowPoly/0.6 (${cityId}; region-bake; contact: repo owner)`;

const cfgPath = join(ROOT, 'src/cities', `${cityId}.json`);
if (!existsSync(cfgPath)) {
  console.error('Config città mancante:', cfgPath);
  process.exit(1);
}
const city = JSON.parse(readFileSync(cfgPath, 'utf8'));
const pub = (rel) => join(ROOT, 'public', rel.replace(/^\//, ''));

// ---- OSM
const osm = JSON.parse(readFileSync(pub(city.data.osm), 'utf8'));
const features = osm.features || [];
const osmS = osmStats(features);

// ---- DEM
const demMeta = JSON.parse(readFileSync(pub(city.data.demMeta), 'utf8'));
const hmPath = join(dirname(pub(city.data.demMeta)), demMeta.heightmap || 'heightmap.bin');
const buf = readFileSync(hmPath);
const heights = new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
const centroids = [];
for (const f of features) {
  if (f.properties?.kind !== 'building' || f.geometry?.type !== 'Polygon') continue;
  const ring = f.geometry.coordinates[0];
  let lon = 0, lat = 0;
  for (let i = 0; i < ring.length - 1; i++) { lon += ring[i][0]; lat += ring[i][1]; }
  const n = Math.max(1, ring.length - 1);
  centroids.push({ lon: lon / n, lat: lat / n });
}
const demS = demStats(heights, demMeta, centroids);

const lat = city.origin.lat;
const lon = city.origin.lon;

// ---- Segnali online con cache
const outDir = join(ROOT, 'public/data/region');
mkdirSync(outDir, { recursive: true });
const cachePath = join(outDir, `${cityId}.signals.json`);
let cache = existsSync(cachePath) && !REFRESH ? JSON.parse(readFileSync(cachePath, 'utf8')) : {};

async function getJson(url, label) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/json' }, signal: AbortSignal.timeout(25000) });
  if (!res.ok) throw new Error(`${label} HTTP ${res.status}`);
  return res.json();
}

async function climateOnline() {
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}` +
    '&start_date=2015-01-01&end_date=2024-12-31&daily=temperature_2m_mean,precipitation_sum,snowfall_sum&timezone=UTC';
  const j = await getJson(url, 'Open-Meteo');
  const c = fromDailySeries(j.daily || {}, lat, j.elevation ?? 0);
  if (!c) throw new Error('serie vuota');
  return { ...c, gridElev: j.elevation ?? null };
}

async function countryOnline() {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=10&accept-language=it`;
  const j = await getJson(url, 'Nominatim');
  const a = j.address || {};
  return {
    code: a.country_code || null,
    name: a.country || null,
    admin: [a.state, a.county || a.province].filter(Boolean).join(' / ') || null,
    source: 'nominatim',
  };
}

async function gbifOnline() {
  // bbox allargato ~5 km: servono abbastanza osservazioni per una statistica
  const pad = 0.045;
  const b = city.bbox;
  const q = `kingdomKey=6&hasCoordinate=true&decimalLatitude=${(b.south - pad).toFixed(4)},${(b.north + pad).toFixed(4)}` +
    `&decimalLongitude=${(b.west - pad).toFixed(4)},${(b.east + pad).toFixed(4)}&limit=0&facet=genusKey&facetLimit=60`;
  const j = await getJson(`https://api.gbif.org/v1/occurrence/search?${q}`, 'GBIF');
  const counts = j.facets?.[0]?.counts || [];
  const genera = {};
  for (let i = 0; i < counts.length; i += 6) {
    const batch = counts.slice(i, i + 6);
    const names = await Promise.all(batch.map((c) =>
      getJson(`https://api.gbif.org/v1/species/${c.name}`, 'GBIF species').then((s) => s.canonicalName).catch(() => null)));
    batch.forEach((c, k) => { if (names[k]) genera[names[k]] = c.count; });
  }
  return { genera, records: j.count ?? null, source: 'gbif-facets' };
}

async function signal(key, fn) {
  if (OFFLINE) return cache[key] ?? null;
  if (cache[key]) return cache[key];
  try {
    const v = await fn();
    cache[key] = v;
    console.log(`  ✓ ${key}`);
    return v;
  } catch (e) {
    console.warn(`  ✗ ${key}: ${e.message} (uso i prior)`);
    return null;
  }
}

console.log(`Bake regione "${cityId}" — ${OFFLINE ? 'offline' : 'online con cache'}`);
const online = await signal('climate', climateOnline);
if (!OFFLINE && !cache.country) await new Promise((r) => setTimeout(r, 1100)); // rispetto policy Nominatim
const country = await signal('country', countryOnline);
const gbif = await signal('gbif', gbifOnline);
writeFileSync(cachePath, JSON.stringify(cache, null, 2));

const offline = offlineClimate({ lat, townElev: demS.townElev, coastal: demS.seaFraction > 0.02 || osmS.coastline > 0 });
// Il clima online è campionato alla quota della cella meteo: lo riporto alla quota urbana
const onlineAtTown = online
  ? { ...online, tMean: +(online.tSeaLevel - LAPSE_C_PER_M * Math.max(0, demS.townElev)).toFixed(2) }
  : null;

const profile = resolveRegionProfile({
  lat, lon, bbox: city.bbox,
  osm: osmS,
  dem: demS,
  climate: { offline, online: onlineAtTown },
  country,
  gbif,
});

const outPath = join(outDir, `${cityId}.json`);
writeFileSync(outPath, JSON.stringify(profile));
const w = Object.entries(profile.archetypes.weights).map(([k, v]) => `${k} ${(v * 100).toFixed(0)}%`).join(', ');
console.log(`→ ${outPath}`);
console.log(`  archetipi: ${w}${profile.archetypes.fallback ? ' (fallback)' : ''}`);
console.log(`  clima: ${profile.climate.source} T=${profile.climate.tMean}°C P=${profile.climate.precipMm ?? 'n/d'} mm`);
console.log(`  costa: ${profile.coast.coastal} (${profile.coast.source}, mare ${(profile.coast.seaFraction * 100).toFixed(1)}%)`);
console.log(`  tetti: piatti ${(profile.roof.flatShare * 100).toFixed(0)}%, falda ${profile.roof.pitchDeg}° [${profile.roof.source}]`);
console.log(`  piani: mediana ${profile.levels.median}, p90 ${profile.levels.p90} [${profile.levels.source}]`);
