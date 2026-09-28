/**
 * Motore voxel (M6): sostituisce le mesh continue (Clipper→earcut) con una griglia di cubi.
 * Non è un vezzo estetico: una griglia non può avere schegge o triangoli degeneri — o una cella
 * è di un materiale o è vuota, per costruzione. Il "compilatore" (compiler/compileLevel.js) resta:
 * decide ancora QUALE materiale sta in ogni punto; qui si rasterizza quella decisione sulla griglia
 * invece di trasformarla in poligoni continui.
 *
 * Dimensione cella: 0,25 m (16× più fine di un blocco Minecraft) — abbastanza per un davanzale o
 * uno stipite come cubi distinti, non così fine da rendere insostenibile una città intera in RAM:
 * per questo la generazione è A CHUNK (16×16 celle = 4×4 m), su richiesta, mai l'intera città
 * in un colpo solo.
 */
export const VOXEL = 0.25; // m per cella
export const CHUNK = 16; // celle per lato di un chunk (4 m)
export const CHUNK_M = CHUNK * VOXEL;

export const AIR = 0;
export const MAT = {
  AIR: 0,
  CAR: 1,
  ALLEY: 2,
  SIDEWALK: 3,
  PED: 4,
  BEACH: 5,
  YARD: 6,
  GREEN: 7,
  STEPS: 8,
  TERRAIN: 9,
  CURB: 10, // faccia verticale bassa (< 0,35 m) fra due celle di quota diversa
  WALL: 11, // faccia verticale alta (muro di contenimento) fra due celle di quota diversa
  SEA: 12,
  BUILDING_WALL: 13,
  BUILDING_ROOF: 14,
  WINDOW: 15,
  DOOR: 16,
  TRUNK: 17,
  LEAF: 18,
  SAND_WET: 19,
};

// Stessa tavolozza mediterranea del motore continuo (stylePacks/mediterraneanCoast.js), così il
// confronto prima/dopo è a parità di colori: cambia solo come i colori diventano geometria.
export const MAT_COLOR = {
  // NB: più chiaro del grigio "reale" (0x3c3c3a, uguale al motore continuo): con l'ACES tone
  // mapping di createLook.js un grigio così scuro rende PRATICAMENTE NERO in schermata (misurato:
  // ~20/255 invece del ~60/255 nominale) — è la causa della "strada nera" osservata negli
  // screenshot, non un bug di geometria o di luce. Qui si compensa sul colore invece di toccare
  // l'esposizione globale (già tarata sul resto della scena).
  [MAT.CAR]: 0x827c6e,
  [MAT.ALLEY]: 0x8f8374,
  [MAT.SIDEWALK]: 0xddd5c4,
  [MAT.PED]: 0xcdb795,
  // Foto drone reali: spiaggia di CIOTTOLI grigi (tipica della costa tirrenica qui), non sabbia
  // gialla — prima era 0xe3cf9c (sabbia chiara), sbagliato per questo tratto di costa.
  [MAT.BEACH]: 0x9a9488,
  [MAT.YARD]: 0xc9bb98,
  [MAT.GREEN]: 0x8a9a5a,
  [MAT.STEPS]: 0xbfb29d,
  [MAT.TERRAIN]: 0xc4b48a,
  [MAT.CURB]: 0xa9a397,
  [MAT.WALL]: 0xb9ad98,
  [MAT.SEA]: 0x2f6f8f,
  [MAT.BUILDING_WALL]: 0xd8c8a8,
  [MAT.BUILDING_ROOF]: 0xa8503c,
  [MAT.WINDOW]: 0x5a7a9a,
  [MAT.DOOR]: 0x5a4030,
  [MAT.TRUNK]: 0x6b4a3a,
  [MAT.LEAF]: 0x5e7e48,
  [MAT.SAND_WET]: 0x6f7268, // ciottoli bagnati: più scuri e più freddi, non più sabbia
};

export const worldToChunk = (x) => Math.floor(x / CHUNK_M);
export const worldToCell = (x) => Math.floor(x / VOXEL);

// Stesso "lift" del compilatore (level/buildLevel.js, tabella LIFT), qui per materiale voxel
// invece che per nome strato: serve a voxelizeChunk.js per ricostruire il cordolo (marciapiede
// più alto della strada) come un vero gradino netto allo spigolo condiviso, senza dover
// arrotondare la quota di ogni cella — che è la causa del gradinato/corduroy su una strada in
// pendenza (ogni colonna arrotondata indipendentemente crea un micro-scalino quasi ovunque).
export function liftOf(mat, curb) {
  switch (mat) {
    case MAT.SIDEWALK:
    case MAT.PED:
    case MAT.YARD:
    case MAT.GREEN:
      return curb;
    default:
      return 0;
  }
}
