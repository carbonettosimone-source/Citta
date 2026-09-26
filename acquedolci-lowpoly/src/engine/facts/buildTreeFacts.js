/**
 * Fatti "albero" risolti in un solo posto: OSM + mappa delle chiome, corretti a mano, fusi con
 * resolveFacts e ordinati per priorità. Sia `biome/TreeRules.js` (esclusione spaziale delle
 * regole) sia `vegetation/VegetationBuilder.js` (piazzamento) leggono lo STESSO risultato — prima
 * ognuno rifaceva la fusione per conto proprio e poteva vedere un insieme diverso di alberi.
 */
import { project } from '../geo.js';
import { speciesFromTags } from '../region/vegetation.js';
import { resolveFacts } from './resolveFacts.js';
import { applyCorrections } from './corrections.js';
import { sourceRank } from './priority.js';

/**
 * @param {Array} features GeoJSON del motore (per i nodi kind:'tree' di OSM)
 * @param {Array} [canopyTrees] alberi misurati (fetch-canopy.mjs), già in coordinate locali
 * @param {object} [corrections] public/data/corrections/<città>.json → .trees
 * @returns {{x:number,z:number,source:string,confidence:number,speciesTag?:string,height?:number,crownRadius?:number}[]}
 */
export function buildTreeFacts(features, canopyTrees, corrections) {
  const raw = [];
  for (const f of features) {
    if (f.properties.kind !== 'tree') continue;
    const [lon, lat] = f.geometry.coordinates;
    const p = project(lon, lat);
    raw.push({
      x: p.x, z: p.z, source: 'osm', confidence: 1,
      speciesTag: speciesFromTags(f.properties),
      height: f.properties.treeHeight ?? null,
    });
  }
  for (const t of canopyTrees || []) {
    raw.push({ x: t.x, z: t.z, source: 'measured', confidence: t.confidence, height: t.height, crownRadius: t.crownRadius });
  }
  const corrected = applyCorrections(raw, corrections);
  const resolved = resolveFacts(corrected, { radius: 2.5, enrich: ['height', 'crownRadius'] });
  resolved.sort((a, b) => sourceRank(b.source) - sourceRank(a.source) || (b.height ?? 0) - (a.height ?? 0));
  return resolved;
}
