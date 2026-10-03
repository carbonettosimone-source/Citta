#!/usr/bin/env node
/**
 * Assembla GitHub Pages: Minimondo (acquedolci-lowpoly) alla root del sito, Sweetwaters in /acquedolci-reale/.
 * I dati di gioco (model.json, streets.json, …) si copiano da origin/gh-pages se mancano in public/.
 */
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(root, '_site');
const reale = join(root, 'acquedolci-reale');
const lowpoly = join(root, 'acquedolci-lowpoly');
const realePub = join(reale, 'public', 'data');
const ghData = join(root, '_gh-data', 'acquedolci-reale', 'data');

function run(cmd, cwd, env = {}) {
  execSync(cmd, { cwd, stdio: 'inherit', env: { ...process.env, ...env } });
}

if (!existsSync(join(realePub, 'model.json'))) {
  console.log('Copia dati gioco da origin/gh-pages…');
  rmSync(join(root, '_gh-data'), { recursive: true, force: true });
  mkdirSync(join(root, '_gh-data'), { recursive: true });
  run('git archive origin/gh-pages acquedolci-reale/data | tar -x -C _gh-data', root);
  mkdirSync(join(reale, 'public', 'data'), { recursive: true });
  cpSync(ghData, realePub, { recursive: true });
}

run('npm ci', lowpoly);
run('npm run build', lowpoly, { PAGES_BASE: '/Citta/' });

run('npm ci', reale);
run('npm run build', reale, { PAGES_BASE: '/Citta/acquedolci-reale/' });

rmSync(site, { recursive: true, force: true });
mkdirSync(site, { recursive: true });
cpSync(join(lowpoly, 'dist'), site, { recursive: true });
cpSync(join(reale, 'dist'), join(site, 'acquedolci-reale'), { recursive: true });
writeFileSync(join(site, '.nojekyll'), '');
console.log(`Sito pronto in ${site}`);
