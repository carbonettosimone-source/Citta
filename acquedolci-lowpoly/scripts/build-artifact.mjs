#!/usr/bin/env node
/** Build single-file per la prova su claude.ai: node scripts/build-artifact.mjs [cityId] */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2] || 'acquedolci';
const cfg = JSON.parse(readFileSync(join(ROOT, 'src/cities', `${id}.json`), 'utf8'));
const pub = (u) => join(ROOT, 'public', u.replace(/^\//, ''));

const urls = [cfg.data.osm, cfg.data.demMeta, cfg.dna, cfg.appearance, cfg.regionProfile || `/data/region/${id}.json`, cfg.horizon || `/data/horizon/${id}.json`, cfg.level || `/data/level/${id}.json`].filter(Boolean);
const meta = JSON.parse(readFileSync(pub(cfg.data.demMeta), 'utf8'));
const binUrl = `${dirname(cfg.data.demMeta)}/${meta.heightmap || 'heightmap.bin'}`;

const map = {};
for (const u of urls) if (existsSync(pub(u))) map[u] = { kind: 'json', text: readFileSync(pub(u), 'utf8') };
map[binUrl] = { kind: 'bin', b64: readFileSync(pub(binUrl)).toString('base64') };
writeFileSync(join(ROOT, 'src/artifact/embedded.gen.js'), `export const EMBEDDED = ${JSON.stringify(map)};\n`);
console.log('Incorporati:', Object.keys(map).join(', '));

const html = readFileSync(join(ROOT, 'index.html'), 'utf8')
  .replace('<link rel="icon" href="/favicon.ico" />', '')
  .replace('src="/src/main.js"', 'src="/src/artifact/entry.js"')
  .replace(/window\.location|__CITY__/g, (m) => m);
writeFileSync(join(ROOT, 'artifact.html'), html.replace('?city=', '?city='));

await build({
  root: ROOT,
  logLevel: 'warn',
  plugins: [viteSingleFile()],
  build: { outDir: 'dist-artifact', emptyOutDir: true, rollupOptions: { input: join(ROOT, 'artifact.html') }, chunkSizeWarningLimit: 10000 },
});
console.log('→ dist-artifact/artifact.html');
