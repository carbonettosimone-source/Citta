/**
 * Catalogo di archetipi vegetali low-poly e scelta della specie PER PUNTO.
 * La specie dipende da: temperatura nel punto (quota!), miscela di archetipi
 * della città, habitat OSM, evidenza locale (tag OSM genus/species, GBIF).
 * Nessuna lista fissa "mediterranea": un paese dei Nebrodi a 700 m riceve
 * querce e pini sopra, ulivi e palme sulla costa.
 */
import { trap } from './archetypes.js';
import { pickWeighted } from '../rng.js';

/**
 * shape: geometria low-poly costruita da VegetationBuilder.
 * t: [min, max] temperatura media annua plausibile nel punto (°C).
 * aff: affinità per archetipo. hab: habitat OSM in cui ha senso.
 */
export const SPECIES = [
  { id: 'olive', shape: 'olive', canopy: [122, 136, 92], trunk: [96, 84, 70], h: 5, t: [13, 24], aff: { mediterranean: 1, arid: 0.5 }, hab: ['orchard', 'farmland', 'urban', 'park', 'scrub', 'meadow'], genera: ['Olea'] },
  { id: 'stonePine', shape: 'umbrella', canopy: [82, 112, 64], trunk: [110, 84, 62], h: 12, t: [12, 22], aff: { mediterranean: 1 }, hab: ['forest', 'park', 'urban'], genera: ['Pinus'] },
  { id: 'cypress', shape: 'column', canopy: [58, 86, 54], trunk: [90, 70, 56], h: 12, t: [11, 22], aff: { mediterranean: 0.7, temperate: 0.1 }, hab: ['park', 'urban'], genera: ['Cupressus'] },
  { id: 'palm', shape: 'palm', canopy: [98, 132, 68], trunk: [132, 110, 84], h: 9, t: [16, 32], aff: { mediterranean: 0.45, tropical: 1, arid: 0.6 }, hab: ['urban', 'park'], genera: ['Phoenix', 'Washingtonia', 'Chamaerops', 'Cocos', 'Roystonea', 'Trachycarpus'] },
  { id: 'citrus', shape: 'round', canopy: [70, 112, 54], trunk: [96, 80, 64], h: 4, t: [15, 27], aff: { mediterranean: 0.8, tropical: 0.5 }, hab: ['orchard', 'farmland', 'park'], genera: ['Citrus'] },
  { id: 'broadleaf', shape: 'round', canopy: [92, 132, 66], trunk: [100, 82, 64], h: 11, t: [3, 20], aff: { temperate: 1, mediterranean: 0.35, alpine: 0.35, nordic: 0.4 }, hab: ['forest', 'park', 'urban', 'meadow'], genera: ['Quercus', 'Fagus', 'Platanus', 'Tilia', 'Acer', 'Fraxinus', 'Castanea', 'Populus', 'Ulmus', 'Carpinus', 'Aesculus'] },
  { id: 'conifer', shape: 'spire', canopy: [50, 82, 56], trunk: [88, 70, 56], h: 16, t: [-7, 11], aff: { alpine: 1, nordic: 1, temperate: 0.45 }, hab: ['forest', 'park'], genera: ['Picea', 'Abies', 'Larix', 'Pseudotsuga'] },
  { id: 'birch', shape: 'slim', canopy: [142, 170, 92], trunk: [220, 216, 206], h: 10, t: [-7, 10], aff: { nordic: 1, alpine: 0.4, temperate: 0.3 }, hab: ['forest', 'park', 'meadow'], genera: ['Betula', 'Alnus'] },
  { id: 'orchardTree', shape: 'round', canopy: [102, 142, 72], trunk: [96, 80, 64], h: 4, t: [5, 15], aff: { temperate: 1, alpine: 0.4 }, hab: ['orchard', 'farmland'], genera: ['Malus', 'Pyrus', 'Prunus'] },
  { id: 'tropicalBroad', shape: 'round', canopy: [60, 120, 56], trunk: [104, 86, 66], h: 12, t: [20, 32], aff: { tropical: 1 }, hab: ['forest', 'park', 'urban'], genera: ['Ficus', 'Mangifera', 'Delonix', 'Terminalia'] },
  { id: 'acacia', shape: 'umbrella', canopy: [128, 140, 86], trunk: [110, 90, 70], h: 7, t: [17, 32], aff: { arid: 1, tropical: 0.35 }, hab: ['scrub', 'urban', 'park', 'meadow'], genera: ['Acacia', 'Prosopis', 'Vachellia'] },
  { id: 'shrub', shape: 'bush', canopy: [112, 126, 76], trunk: [90, 76, 60], h: 1.6, t: [-6, 34], aff: { mediterranean: 0.4, arid: 0.9, temperate: 0.2, alpine: 0.3, nordic: 0.2, tropical: 0.2 }, hab: ['scrub', 'meadow', 'urban'], genera: ['Opuntia', 'Nerium', 'Pistacia', 'Juniperus', 'Rosmarinus', 'Myrtus'] },
];

const BY_GENUS = new Map();
for (const s of SPECIES) for (const g of s.genera) {
  if (!BY_GENUS.has(g)) BY_GENUS.set(g, []);
  BY_GENUS.get(g).push(s.id);
}

/** Specie da tag OSM (genus/species) se riconoscibile. */
export function speciesFromTags(props) {
  const g = props?.genus || (props?.species ? String(props.species).split(/\s+/)[0] : null);
  if (!g) return null;
  const ids = BY_GENUS.get(g[0].toUpperCase() + g.slice(1).toLowerCase());
  return ids?.[0] ?? null;
}

/** Evidenza: conteggi per genere → boost per specie (1 = neutro, fino a ~3). */
export function evidenceBoosts(genusCounts = {}) {
  const raw = {};
  let total = 0;
  for (const [g, n] of Object.entries(genusCounts)) {
    const ids = BY_GENUS.get(g);
    if (!ids) continue;
    for (const id of ids) raw[id] = (raw[id] || 0) + n;
    total += n;
  }
  const out = {};
  if (!total) return out;
  for (const [id, n] of Object.entries(raw)) out[id] = +(1 + 2 * Math.sqrt(n / total)).toFixed(3);
  return out;
}

/** Mappa subtype OSM → habitat del catalogo. */
export function habitatOf(subtype) {
  switch (subtype) {
    case 'forest': case 'wood': return 'forest';
    case 'orchard': return 'orchard';
    case 'vineyard': case 'farmland': case 'allotments': return 'farmland';
    case 'park': case 'garden': case 'village_green': return 'park';
    case 'scrub': case 'heath': return 'scrub';
    case 'meadow': case 'grass': case 'grassland': return 'meadow';
    default: return 'urban';
  }
}

/**
 * Pesi delle specie in un punto.
 * @param {object} veg profile.vegetation
 * @param {number} tPoint temperatura media annua nel punto
 * @param {string} habitat
 */
export function speciesWeightsAt(veg, tPoint, habitat) {
  const blend = veg.archetypeWeights || {};
  const boosts = veg.boosts || {};
  const list = [];
  for (const s of SPECIES) {
    let aff = 0;
    for (const [k, w] of Object.entries(blend)) aff += (s.aff[k] || 0) * w;
    if (aff <= 0 && !boosts[s.id]) continue;
    const tFit = trap(tPoint, s.t[0] - 2, s.t[0], s.t[1], s.t[1] + 2);
    if (tFit <= 0) continue;
    const hFit = s.hab.includes(habitat) ? 1 : 0.08;
    const w = Math.max(aff, 0.05) * tFit * hFit * (boosts[s.id] || 1);
    if (w > 1e-4) list.push({ id: s.id, w });
  }
  return list;
}

export function pickSpecies(veg, tPoint, habitat, r) {
  const list = speciesWeightsAt(veg, tPoint, habitat);
  if (!list.length) return null;
  return pickWeighted(list, r)?.id ?? null;
}

export const SPECIES_BY_ID = Object.fromEntries(SPECIES.map((s) => [s.id, s]));
