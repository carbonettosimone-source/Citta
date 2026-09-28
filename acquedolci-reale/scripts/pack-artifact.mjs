#!/usr/bin/env node
/**
 * Dopo `vite build`: pagina per la pubblicazione come Artifact multi-file. L'Artifact avvolge la
 * pagina nel proprio scheletro <!doctype><html><head><body>, quindi qui si toglie il nostro e si
 * tiene il contenuto (titolo, css, markup, script). JS, css e dati restano file separati accanto
 * alla pagina, caricati con percorsi relativi. Stampa la mappa dei file per la pubblicazione.
 * Output: dist/artifact.html + dist/artifact-files.json
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const html = readFileSync(join(dist, 'index.html'), 'utf8');
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
writeFileSync(join(dist, 'artifact.html'), `${head.trim()}\n${body.trim()}\n`);

const files = {};
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (!/^(index|artifact)\.html$|artifact-files\.json$/.test(relative(dist, p))) files[relative(dist, p)] = p;
  }
})(dist);
writeFileSync(join(dist, 'artifact-files.json'), JSON.stringify(files, null, 1));
console.log(`artifact.html + ${Object.keys(files).length} file di supporto`);
