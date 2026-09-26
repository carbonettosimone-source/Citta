#!/usr/bin/env node
/**
 * Compila il livello di una città: node scripts/compile-level.mjs <id>
 * Input: OSM + DEM (+ RegionProfile per la maschera del mare) già scaricati.
 * Output: public/data/level/<id>.json (partizione del suolo, isolati, edifici puliti, test).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerData } from '../src/engine/data/dataSource.js';
import { setOrigin, project } from '../src/engine/geo.js';
import { loadTerrain, sampleDemY, localToLonLat } from '../src/engine/terrain.js';
import { seaMaskSampler } from '../src/engine/region/signals.js';
import { compileLevel } from '../src/engine/compiler/compileLevel.js';
import { createRequire } from 'node:module';

// straight-skeleton (CGAL→Wasm) è compilato solo per il web: ambiente minimo per caricarlo in Node
globalThis.self = globalThis;
globalThis.window = globalThis;
globalThis.document = { currentScript: { src: 'http://localhost/' } };
let skeleton = null;
try {
  const { SkeletonBuilder } = createRequire(import.meta.url)('straight-skeleton');
  await SkeletonBuilder.init();
  skeleton = SkeletonBuilder;
} catch (e) {
  console.warn('straight-skeleton non disponibile: niente tetti su piante irregolari', e.message);
}
delete globalThis.window;
delete globalThis.document;

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2] || 'acquedolci';
const cfg = JSON.parse(readFileSync(join(ROOT, 'src/cities', `${id}.json`), 'utf8'));
const pub = (u) => join(ROOT, 'public', u.replace(/^\//, ''));

setOrigin(cfg.origin.lat, cfg.origin.lon);
const meta = JSON.parse(readFileSync(pub(cfg.data.demMeta), 'utf8'));
registerData(cfg.data.demMeta, meta);
const binUrl = `${dirname(cfg.data.demMeta)}/${meta.heightmap || 'heightmap.bin'}`;
const bin = readFileSync(pub(binUrl));
registerData(binUrl, bin.buffer.slice(bin.byteOffset, bin.byteOffset + bin.byteLength));
await loadTerrain(cfg.data.demMeta);

const osm = JSON.parse(readFileSync(pub(cfg.data.osm), 'utf8'));
const regionPath = pub(cfg.regionProfile || `/data/region/${id}.json`);
const profile = existsSync(regionPath) ? JSON.parse(readFileSync(regionPath, 'utf8')) : null;
const seaLL = profile?.coast?.coastal ? seaMaskSampler(profile.coast.seaMask) : null;
const isSea = seaLL ? (x, z) => { const { lon, lat } = localToLonLat(x, z); return seaLL(lon, lat); } : null;

const a = project(cfg.bbox.west, cfg.bbox.north), c = project(cfg.bbox.east, cfg.bbox.south);
const rect = { minX: Math.min(a.x, c.x), maxX: Math.max(a.x, c.x), minZ: Math.min(a.z, c.z), maxZ: Math.max(a.z, c.z) };

console.log(`Compilo il livello "${id}" (${(rect.maxX - rect.minX).toFixed(0)}×${(rect.maxZ - rect.minZ).toFixed(0)} m)`);
const level = compileLevel({ features: osm.features, project, demY: sampleDemY, rect, isSea, skeleton });
level.city = id;
level.origin = cfg.origin;
const outDir = join(ROOT, 'public/data/level');
mkdirSync(outDir, { recursive: true });
const out = join(outDir, `${id}.json`);
writeFileSync(out, JSON.stringify(level));
for (const l of level.log) console.log('  ·', l);
console.log(`→ ${out} (${(JSON.stringify(level).length / 1024).toFixed(0)} KB)`);
