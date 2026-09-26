/**
 * Priorità di rendering e regole landuse.
 * Ordine: terrain → water → soft veg → roads → buildings → trees → landmarks.
 */

export const LAYER = {
  TERRAIN: 0,
  WATER: 1,
  SOFT_VEG: 2,
  ROADS: 10,
  BUILDINGS: 20,
  TREES: 25,
  LANDMARKS: 30,
};

/** Landuse che NON devono mai coprire le strade. */
export const BLANKET_LANDUSE = new Set([
  'residential',
  'commercial',
  'retail',
  'industrial',
  'construction',
  'garages',
  'railway',
]);

export const SOFT_VEG_SUBTYPES = new Set([
  'park',
  'garden',
  'forest',
  'wood',
  'orchard',
  'vineyard',
  'farmland',
  'allotments',
  'meadow',
  'grass',
  'grassland',
  'scrub',
  'village_green',
]);

export function isSoftVegetation(kind, subtype) {
  if (kind === 'vegetation') return !BLANKET_LANDUSE.has(subtype);
  if (kind === 'landuse') return SOFT_VEG_SUBTYPES.has(subtype) && !BLANKET_LANDUSE.has(subtype);
  return false;
}

export function shouldSkipGroundFill(kind, subtype) {
  if (kind === 'landuse' && BLANKET_LANDUSE.has(subtype)) return true;
  if (kind === 'vegetation' && BLANKET_LANDUSE.has(subtype)) return true;
  return false;
}
