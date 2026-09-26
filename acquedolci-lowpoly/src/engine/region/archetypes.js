/**
 * Archetipi regionali = PRIOR, non categorie.
 * Il profilo di una città è una miscela pesata di questi vettori di parametri,
 * poi corretta dall'evidenza locale (OSM, satellite, rilievi).
 * Colori in [r,g,b] sRGB 0–255 (miscelabili linearmente, convertiti in hex dall'adapter).
 */

export const ARCHETYPES = {
  mediterranean: {
    roof: {
      flatShare: 0.45,
      pitchDeg: 20,
      palette: [[184, 98, 66], [170, 90, 62], [196, 120, 84], [158, 86, 60], [200, 140, 104], [176, 170, 160], [210, 204, 192]],
    },
    walls: [[242, 232, 214], [236, 222, 196], [228, 208, 172], [222, 196, 160], [240, 214, 196], [226, 220, 210], [246, 240, 228], [214, 196, 168]],
    levels: { median: 2, p90: 4, singleShare: 0.3 },
    unfinishedRate: 0.12,
    ground: {
      terrain: [184, 170, 128], grass: [150, 160, 100], meadow: [168, 170, 110], forest: [88, 110, 64],
      scrub: [160, 150, 100], farmland: [186, 172, 120], orchard: [110, 140, 80], vine: [112, 138, 74],
    },
    urban: { asphalt: [66, 66, 64], sidewalk: [214, 208, 194], plaza: [176, 164, 144], curb: [120, 116, 108], footway: [196, 184, 156] },
    atmo: { sky: [158, 201, 224], fog: [196, 214, 226], hazeM: 1400, sun: [255, 226, 184], exposure: 1.1, warmth: 0.05 },
    treeDensity: 0.6,
  },
  temperate: {
    roof: {
      flatShare: 0.2,
      pitchDeg: 38,
      palette: [[150, 64, 48], [120, 56, 44], [90, 86, 84], [70, 70, 72], [160, 80, 56], [110, 100, 96]],
    },
    walls: [[236, 230, 218], [222, 214, 198], [240, 236, 226], [210, 196, 176], [226, 220, 206], [200, 190, 176], [232, 222, 190]],
    levels: { median: 2.5, p90: 5, singleShare: 0.15 },
    unfinishedRate: 0,
    ground: {
      terrain: [120, 130, 90], grass: [104, 150, 72], meadow: [120, 160, 80], forest: [58, 96, 52],
      scrub: [110, 130, 80], farmland: [170, 160, 100], orchard: [96, 140, 70], vine: [100, 136, 70],
    },
    urban: { asphalt: [72, 74, 76], sidewalk: [180, 178, 172], plaza: [170, 166, 158], curb: [130, 130, 128], footway: [170, 160, 140] },
    atmo: { sky: [150, 190, 225], fog: [200, 212, 222], hazeM: 1200, sun: [255, 236, 214], exposure: 1.05, warmth: 0.02 },
    treeDensity: 0.8,
  },
  alpine: {
    roof: {
      flatShare: 0.08,
      pitchDeg: 30,
      palette: [[92, 88, 86], [70, 66, 64], [110, 74, 56], [128, 96, 72], [80, 80, 84]],
    },
    walls: [[240, 236, 226], [226, 218, 200], [150, 108, 72], [170, 124, 84], [232, 228, 218]],
    levels: { median: 2.5, p90: 4, singleShare: 0.1 },
    unfinishedRate: 0,
    ground: {
      terrain: [128, 132, 110], grass: [98, 142, 70], meadow: [120, 160, 84], forest: [44, 78, 48],
      scrub: [100, 120, 80], farmland: [140, 150, 96], orchard: [90, 130, 66], vine: [96, 130, 66],
    },
    urban: { asphalt: [70, 72, 76], sidewalk: [176, 174, 170], plaza: [160, 156, 150], curb: [130, 130, 130], footway: [150, 140, 120] },
    atmo: { sky: [140, 186, 232], fog: [204, 216, 230], hazeM: 2000, sun: [255, 240, 224], exposure: 1.08, warmth: 0 },
    treeDensity: 0.9,
  },
  nordic: {
    roof: {
      flatShare: 0.15,
      pitchDeg: 35,
      palette: [[60, 60, 62], [120, 48, 40], [80, 90, 96], [40, 40, 44]],
    },
    walls: [[168, 48, 40], [236, 226, 196], [220, 190, 110], [210, 220, 226], [240, 240, 236], [120, 140, 150]],
    levels: { median: 2, p90: 4, singleShare: 0.2 },
    unfinishedRate: 0,
    ground: {
      terrain: [110, 116, 96], grass: [96, 130, 70], meadow: [110, 140, 80], forest: [40, 70, 46],
      scrub: [96, 110, 76], farmland: [150, 150, 100], orchard: [90, 124, 66], vine: [90, 124, 66],
    },
    urban: { asphalt: [74, 76, 80], sidewalk: [170, 170, 168], plaza: [156, 154, 150], curb: [130, 130, 132], footway: [140, 134, 120] },
    atmo: { sky: [160, 196, 226], fog: [208, 216, 226], hazeM: 1600, sun: [255, 238, 220], exposure: 1.0, warmth: -0.01 },
    treeDensity: 0.9,
  },
  arid: {
    roof: {
      flatShare: 0.85,
      pitchDeg: 12,
      palette: [[214, 196, 164], [200, 180, 150], [180, 160, 130], [226, 214, 196]],
    },
    walls: [[226, 204, 168], [214, 186, 146], [236, 222, 196], [200, 170, 130], [244, 236, 222]],
    levels: { median: 2, p90: 4, singleShare: 0.35 },
    unfinishedRate: 0.08,
    ground: {
      terrain: [206, 182, 140], grass: [170, 160, 110], meadow: [180, 168, 118], forest: [120, 120, 80],
      scrub: [176, 160, 120], farmland: [196, 176, 130], orchard: [120, 136, 84], vine: [124, 136, 84],
    },
    urban: { asphalt: [80, 76, 70], sidewalk: [214, 200, 176], plaza: [200, 184, 156], curb: [150, 140, 124], footway: [210, 190, 156] },
    atmo: { sky: [176, 204, 222], fog: [222, 212, 192], hazeM: 1000, sun: [255, 230, 196], exposure: 1.12, warmth: 0.06 },
    treeDensity: 0.2,
  },
  tropical: {
    roof: {
      flatShare: 0.35,
      pitchDeg: 22,
      palette: [[170, 76, 56], [120, 120, 120], [190, 110, 70], [90, 110, 120]],
    },
    walls: [[240, 232, 210], [200, 226, 214], [246, 214, 170], [232, 200, 210], [214, 226, 236], [250, 244, 230]],
    levels: { median: 2, p90: 4, singleShare: 0.3 },
    unfinishedRate: 0.1,
    ground: {
      terrain: [150, 120, 80], grass: [96, 150, 64], meadow: [110, 156, 70], forest: [36, 90, 40],
      scrub: [90, 130, 60], farmland: [140, 140, 80], orchard: [70, 130, 56], vine: [80, 130, 60],
    },
    urban: { asphalt: [70, 70, 68], sidewalk: [196, 190, 176], plaza: [180, 170, 150], curb: [140, 136, 128], footway: [170, 150, 116] },
    atmo: { sky: [140, 190, 226], fog: [208, 220, 226], hazeM: 900, sun: [255, 236, 210], exposure: 1.08, warmth: 0.03 },
    treeDensity: 1.0,
  },
};

export const ARCHETYPE_IDS = Object.keys(ARCHETYPES);

/** Trapezio fuzzy: 0 fuori da [a,d], 1 in [b,c]. */
export function trap(x, a, b, c, d) {
  if (x == null || Number.isNaN(x)) return 0;
  if (x <= a || x >= d) return 0;
  if (x >= b && x <= c) return 1;
  return x < b ? (x - a) / (b - a) : (d - x) / (d - c);
}

/**
 * Pesi degli archetipi dal clima. Tutti gli input possono essere null
 * (segnale mancante): il peso relativo degrada, non si rompe.
 * @param {{tMean:number, precipMm:number|null, summerShare:number|null, absLat:number, townElev:number, coastal:boolean}} c
 */
export function archetypeWeights(c) {
  const T = c.tMean;
  const P = c.precipMm;
  const S = c.summerShare;
  const lat = c.absLat;
  const w = {};

  const pKnown = P != null;
  w.tropical = trap(T, 20, 23, 40, 41) * (pKnown ? trap(P, 700, 1100, 6000, 8000) : 0.7);
  w.arid = pKnown ? trap(P, -1, 0, 250, 450) * trap(T, 5, 12, 40, 41) : 0.12 * trap(T, 17, 21, 40, 41) * trap(lat, 12, 18, 33, 38);

  let dryFit;
  if (S != null) dryFit = trap(S, -1, 0, 0.12, 0.2);
  else dryFit = trap(lat, 28, 31, 44, 46) * (c.coastal ? 1 : 0.75);
  w.mediterranean = trap(T, 10.5, 14, 20, 23) * dryFit * (pKnown ? trap(P, 200, 350, 950, 1400) : 1);

  w.temperate = trap(T, 4, 7.5, 13, 16.5) * (pKnown ? trap(P, 400, 550, 1800, 2800) : 1) * (1 - 0.6 * dryFit);
  w.alpine = trap(T, -12, -6, 6.5, 9.5) * trap(c.townElev, 500, 900, 5000, 6000);
  w.nordic = trap(T, -16, -10, 6.5, 9.5) * trap(lat, 50, 55, 75, 85);

  let sum = 0;
  for (const k of Object.keys(w)) sum += w[k];
  if (sum < 1e-3) {
    // Nessun archetipo convince: fallback neutro temperato, dichiarato
    return { weights: { temperate: 1 }, fallback: true };
  }
  const out = {};
  for (const k of Object.keys(w)) if (w[k] / sum > 0.02) out[k] = +(w[k] / sum).toFixed(3);
  const s2 = Object.values(out).reduce((a, b) => a + b, 0);
  for (const k of Object.keys(out)) out[k] = +(out[k] / s2).toFixed(3);
  return { weights: out, fallback: false };
}
