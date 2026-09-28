#!/usr/bin/env node
/**
 * Build single-file del motore VOXEL per la prova su claude.ai (Artifact):
 *   node scripts/build-artifact-voxel.mjs [cityId]
 * Copia di build-artifact.mjs ma solo per i dati che buildCityVoxel legge davvero
 * (OSM, DEM, level compilato, regionProfile) — niente canopy/dna/appearance/horizon,
 * il voxel non li usa: bundle molto più leggero.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2] || 'acquedolci';
const cfg = JSON.parse(readFileSync(join(ROOT, 'src/cities', `${id}.json`), 'utf8'));
const pub = (u) => join(ROOT, 'public', u.replace(/^\//, ''));

const urls = [cfg.data.osm, cfg.data.demMeta, cfg.level || `/data/level/${id}.json`, cfg.regionProfile || `/data/region/${id}.json`].filter(Boolean);
const meta = JSON.parse(readFileSync(pub(cfg.data.demMeta), 'utf8'));
const binUrl = `${dirname(cfg.data.demMeta)}/${meta.heightmap || 'heightmap.bin'}`;

const map = {};
for (const u of urls) if (existsSync(pub(u))) map[u] = { kind: 'json', text: readFileSync(pub(u), 'utf8') };
map[binUrl] = { kind: 'bin', b64: readFileSync(pub(binUrl)).toString('base64') };
writeFileSync(join(ROOT, 'src/artifact/embedded-voxel.gen.js'), `export const EMBEDDED = ${JSON.stringify(map)};\n`);
console.log('Incorporati:', Object.keys(map).join(', '));

await build({
  root: ROOT,
  logLevel: 'warn',
  plugins: [viteSingleFile()],
  build: { outDir: 'dist-artifact-voxel', emptyOutDir: true, rollupOptions: { input: join(ROOT, 'artifact-voxel.html') }, chunkSizeWarningLimit: 20000 },
});
console.log('→ dist-artifact-voxel/artifact-voxel.html');
