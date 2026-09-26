#!/usr/bin/env node
/**
 * Scarica OSM per una città definita in src/cities/<id>.json
 * Uso:
 *   node scripts/fetch-osm.mjs acquedolci
 *   node scripts/fetch-osm.mjs --city=acquedolci
 *   CITY=acquedolci npm run fetch-osm
 *
 * Fallback: Overpass → OSM API 0.6 /map
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';
import { buildOverpassQuery, featureFromWay, featureFromNode, overpassToFeatures } from '../src/engine/osm/overpass.js';

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
const bb = `${BBOX.south},${BBOX.west},${BBOX.north},${BBOX.east}`;
const outRel = (city.data?.osm || `/data/${cityId}.json`).replace(/^\//, '');
const OUT = join(ROOT, 'public', outRel);
mkdirSync(dirname(OUT), { recursive: true });

const UA = `CityLowPoly/0.5 (${cityId}; educational; OSM attribution)`;

const overpassQuery = buildOverpassQuery(BBOX);

async function fromOverpass() {
  console.log('Overpass…', bb);
  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': UA },
    body: `data=${encodeURIComponent(overpassQuery)}`,
  });
  if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`);
  const json = await res.json();
  return overpassToFeatures(json);
}

async function fromMapApi() {
  console.log('OSM API /map fallback…');
  const url = `https://api.openstreetmap.org/api/0.6/map?bbox=${BBOX.west},${BBOX.south},${BBOX.east},${BBOX.north}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`OSM map HTTP ${res.status}`);
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const doc = parser.parse(xml);
  const osm = doc.osm;
  const nodeArr = Array.isArray(osm.node) ? osm.node : osm.node ? [osm.node] : [];
  const wayArr = Array.isArray(osm.way) ? osm.way : osm.way ? [osm.way] : [];
  const nodes = new Map();
  for (const n of nodeArr) nodes.set(+n['@_id'], [+n['@_lon'], +n['@_lat']]);

  function tagsOf(el) {
    const t = el.tag;
    if (!t) return {};
    const arr = Array.isArray(t) ? t : [t];
    const out = {};
    for (const x of arr) out[x['@_k']] = x['@_v'];
    return out;
  }

  const features = [];
  for (const n of nodeArr) {
    const tags = tagsOf(n);
    const f = featureFromNode(+n['@_id'], tags, +n['@_lon'], +n['@_lat']);
    if (f) features.push(f);
  }
  for (const w of wayArr) {
    const tags = tagsOf(w);
    const nd = w.nd;
    const arr = Array.isArray(nd) ? nd : nd ? [nd] : [];
    const coords = arr.map((d) => nodes.get(+d['@_ref'])).filter(Boolean);
    const f = featureFromWay(+w['@_id'], tags, coords);
    if (f) features.push(f);
  }
  return features;
}

let features;
try {
  features = await fromOverpass();
} catch (err) {
  console.warn('Overpass fallito:', err.message);
  features = await fromMapApi();
}

const fc = {
  type: 'FeatureCollection',
  meta: {
    city: cityId,
    bbox: BBOX,
    origin: city.origin,
    generatedAt: new Date().toISOString(),
    attribution: '© OpenStreetMap contributors',
  },
  features,
};
writeFileSync(OUT, JSON.stringify(fc));
console.log(`OK ${features.length} features → ${OUT}`);
