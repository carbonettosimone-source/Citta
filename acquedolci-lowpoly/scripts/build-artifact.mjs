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

const urls = [cfg.data.osm, cfg.data.demMeta, cfg.dna, cfg.appearance, cfg.regionProfile || `/data/region/${id}.json`, cfg.horizon || `/data/horizon/${id}.json`, cfg.level || `/data/level/${id}.json`, cfg.canopy || `/data/canopy/${id}.json`].filter(Boolean);
const meta = JSON.parse(readFileSync(pub(cfg.data.demMeta), 'utf8'));
const binUrl = `${dirname(cfg.data.demMeta)}/${meta.heightmap || 'heightmap.bin'}`;

// Canopy reale (fetch-canopy.mjs, Meta/WRI 1 m) può avere centinaia di migliaia di alberi su
// un bbox grande: da solo supererebbe il limite di 16 MB di un Artifact claude.ai. Qui, solo per
// il pacchetto single-file, si tiene al massimo un albero per cella di griglia (il più alto),
// non un troncamento casuale: dirada in modo uniforme, non svuota interi quartieri. Il file su
// disco (public/data/canopy) resta quello vero, intero — usato da dev/build normali.
const CANOPY_ARTIFACT_CAP = 60000;
function thinCanopy(json) {
  const trees = json.trees || [];
  if (trees.length <= CANOPY_ARTIFACT_CAP) return json;
  let cell = 6;
  let kept;
  do {
    cell += 1;
    const grid = new Map();
    for (const t of trees) {
      const k = `${Math.floor(t.x / cell)}:${Math.floor(t.z / cell)}`;
      const cur = grid.get(k);
      if (!cur || t.height > cur.height) grid.set(k, t);
    }
    kept = [...grid.values()];
  } while (kept.length > CANOPY_ARTIFACT_CAP && cell < 40);
  console.log(`  canopy diradato per l'artifact: ${trees.length} → ${kept.length} alberi (cella ${cell} m)`);
  return { ...json, trees: kept };
}

const map = {};
for (const u of urls) {
  if (!existsSync(pub(u))) continue;
  const text = readFileSync(pub(u), 'utf8');
  const isCanopy = u === (cfg.canopy || `/data/canopy/${id}.json`);
  map[u] = { kind: 'json', text: isCanopy ? JSON.stringify(thinCanopy(JSON.parse(text))) : text };
}
map[binUrl] = { kind: 'bin', b64: readFileSync(pub(binUrl)).toString('base64') };
writeFileSync(join(ROOT, 'src/artifact/embedded.gen.js'), `export const EMBEDDED = ${JSON.stringify(map)};\n`);
console.log('Incorporati:', Object.keys(map).join(', '));

const html = readFileSync(join(ROOT, 'index.html'), 'utf8')
  .replace('<link rel="icon" href="/favicon.ico" />', '')
  .replace('src="/src/main.js"', 'src="/src/artifact/entry.js"')
  .replace('<title>Acquedolci — prototipo low poly</title>', '<title>Acquedolci — sistema completo</title>')
  .replace(/window\.location|__CITY__/g, (m) => m);
writeFileSync(join(ROOT, 'artifact.html'), html.replace('?city=', '?city='));

await build({
  root: ROOT,
  logLevel: 'warn',
  plugins: [viteSingleFile()],
  build: { outDir: 'dist-artifact', emptyOutDir: true, rollupOptions: { input: join(ROOT, 'artifact.html') }, chunkSizeWarningLimit: 10000 },
});
console.log('→ dist-artifact/artifact.html');
