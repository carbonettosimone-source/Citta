/** Style pack: costa mediterranea (Sicilia / Calabria / similari). */
export const mediterraneanCoast = {
  id: 'mediterranean-coast',
  label: 'Costa mediterranea',
  colors: {
    sky: 0x9ec9e0,
    fog: 0xb5d4e4,
    terrain: 0xb5a878,
    groundFallback: 0xc9c89a,
    sea: 0x6aadc8,
    water: 0x5ea8c0,
    grass: 0x8fad6a,
    meadow: 0xa0b874,
    orchard: 0x7a9e58,
    forest: 0x5e7e48,
    scrub: 0xa8a066,
    farmland: 0xb8b078,
    vine: 0x6d8f4e,
    park: 0x8fad6a,
    asphalt: 0x2a2e32,
    plaza: 0xb0a89a,
    curb: 0x3a3834,
    sidewalk: 0xe8e4d8,
    centerLine: 0xf2eee2,
    footway: 0xc8b898,
    junction: 0x32363a,
    trunk: 0x6b5340,
    player: 0x3d7ea6,
    landmarkPole: 0xc45c3a,
    landmarkAccent: 0xf0d060,
  },
  walls: [0xf5ead8, 0xf0e0c8, 0xe8d5b0, 0xe2c9a0, 0xf2d4c4, 0xe8c8b8, 0xd8d0c8, 0xe6dcc8, 0xf8f0e4, 0xdcc8a8],
  roofs: [0xb85a3a, 0xc46842, 0xa84e32, 0xd07048, 0x9e4a30, 0xbc6040, 0xad5538, 0xc87850, 0xa05038],
  churchWall: 0xe8e0d4,
  churchRoof: 0x6a6860,
  garageWall: 0xc8c0b4,
  roads: {
    sidewalkWidth: 1.55,
    curbWidth: 0.22,
    // Strict DEM-relative stack (avoids z-fight on slopes):
    // softVeg 0.03 | plaza 0.10 | foot 0.14 | sidewalk 0.18 | curb 0.22 | asphalt 0.26 | junc 0.27 | line 0.28
    yAsphalt: 0.26,
    yCurb: 0.22,
    ySidewalk: 0.18,
    yLine: 0.28,
    yFoot: 0.14,
    yJunction: 0.27,
    minCarWidth: 4.8,
    minFootWidth: 1.8,
  },
  plazas: { yOffset: 0.10 },
  softVegY: 0.03,
  barriers: { yOffset: 0.30, defaultHeight: 1.2 },
  landmarks: { maxLabels: 10 },
  // Alzato da 2.200 (M5): con gli alberi veri della mappa delle chiome (fetch-canopy.mjs) il
  // budget precedente tagliava via la maggioranza dei dati misurati. Non verificato su GPU reale:
  // 6.000 istanze low-poly ~= 1 scena in più di triangoli del solo terreno (poche decine di draw
  // call totali, l'instancing è per specie) — da confermare con un profiling su telefono vero.
  maxTrees: 6000,
  fogNear: 280,
  fogFar: 1500,
  fogNear: 300,
  look: {
    exposure: 1.12,
    post: true,
    bloom: true,
    warmth: 0.07,
    vignette: 0.22,
  },
};

export default mediterraneanCoast;

export const STYLE_PACKS = {
  'mediterranean-coast': mediterraneanCoast,
};

export function resolveStylePack(id) {
  return STYLE_PACKS[id] || mediterraneanCoast;
}
