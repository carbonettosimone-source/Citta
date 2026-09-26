#!/usr/bin/env node
/**
 * Pipeline completa per una città: OSM → DEM → RegionProfile → Appearance.
 *   npm run bake -- <id> [--offline]
 * L'ordine conta: il profilo usa OSM+DEM; l'appearance usa il profilo come prior.
 */
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const id = args.find((a) => !a.startsWith('-'));
if (!id) {
  console.error('Uso: npm run bake -- <id-città> [--offline]');
  process.exit(1);
}
const offline = args.includes('--offline');
const steps = [
  offline ? null : ['fetch-osm.mjs', id],
  offline ? null : ['fetch-dem.mjs', id],
  ['bake-region.mjs', id, ...(offline ? ['--offline'] : [])],
  offline ? null : ['bake-horizon.mjs', id],
  offline ? null : ['fetch-appearance.mjs', id],
  ['compile-level.mjs', id],
].filter(Boolean);

for (const [script, ...rest] of steps) {
  console.log(`\n▶ ${script} ${rest.join(' ')}`);
  const r = spawnSync(process.execPath, [new URL(script, import.meta.url).pathname, ...rest], { stdio: 'inherit' });
  if (r.status !== 0) {
    // L'appearance è un arricchimento: se fallisce, la città resta giocabile
    if (script === 'fetch-appearance.mjs' || script === 'bake-horizon.mjs') {
      console.warn(`${script} fallito: arricchimento opzionale, la città resta giocabile.`);
      continue;
    }
    process.exit(r.status ?? 1);
  }
}
console.log(`\n✓ ${id} pronta → npm run dev e apri /?city=${id}`);
