import { BIOMES, angles, beside, biomeAzimuth, northTangent, onSphere, type Biome } from '../world/planet';
import { BOTTEGHE_PLAZA, DUNE_GATE, MARKET_PLAZA, SOUTH_PLAZA, TERRACE } from '../world/city';
import { CRYSTAL_LOOK, CRYSTAL_PLAZA, DUNE_CAMP, GAMES_BOARD, HUB_PLAZA, LANTERN_PLAZA, MINT_PLAZA, QUARTER_PLAZA, VIOLET_PLAZA } from '../world/towns';

export const WORLD_ID = 'Mondo-1';

/** Alza se il layout dello shard cambia: un server futuro rifiuta i client diversi. */
export const PROTO = 9;

const homeAz = biomeAzimuth(0);
const home = onSphere(0.3, homeAz);
const homeFace = northTangent(0.3, homeAz);

export const SPAWN = home;
export const SPAWN_FACE = homeFace;

export type ChallengeKind = 'race' | 'logic' | 'precision' | 'explore' | 'obstacle';

export type ChallengeDef = {
  id: string;
  name: string;
  kind: ChallengeKind;
  coins: number;
  line: string;
  biome: number;
  x: number;
  y: number;
  z: number;
  needsCourse?: boolean;
  /** Apre la bacheca dei giochi, anche se la moneta è già presa. */
  opensBoard?: boolean;
};

const faro = HUB_PLAZA;
const anello = MINT_PLAZA;
const pietre = VIOLET_PLAZA;
const belvedere = CRYSTAL_LOOK;
const dune = biomeAzimuth(4);
const cancello = DUNE_CAMP;

export const CHALLENGES: readonly ChallengeDef[] = [
  {
    id: 'faro',
    name: 'Faro del polo',
    kind: 'race',
    coins: 20,
    biome: 0,
    line: 'La piazza del polo ti segna come esploratore.',
    ...faro,
  },
  {
    id: 'anello',
    name: 'Piazza di menta',
    kind: 'precision',
    coins: 12,
    biome: 1,
    line: 'Il paese della prateria. Paga poco, ma paga.',
    ...anello,
  },
  {
    id: 'pietre',
    name: 'Petali logici',
    kind: 'logic',
    coins: 30,
    biome: 2,
    line: 'Il paese viola, per ora, è una moneta grossa.',
    ...pietre,
  },
  {
    id: 'belvedere',
    name: 'Belvedere di cristallo',
    kind: 'explore',
    coins: 16,
    biome: 3,
    line: 'Il totem di cristallo, dove il pianeta curva via.',
    ...belvedere,
  },
  {
    id: 'cancello',
    name: 'Campo delle dune',
    kind: 'obstacle',
    coins: 18,
    biome: 4,
    line: 'Il campo ricorda chi ha corso il sentiero.',
    ...cancello,
    needsCourse: true,
  },
  {
    id: 'lanterne',
    name: 'Piazza delle lanterne',
    kind: 'explore',
    coins: 14,
    biome: 5,
    line: 'Il paese rosa, sotto le lampade.',
    ...LANTERN_PLAZA,
  },
  {
    id: 'bacheca',
    name: 'Bacheca dei giochi',
    kind: 'explore',
    coins: 8,
    biome: 0,
    line: 'Da qui si entra in Ostacoli. Il giro degli spicchi paga a parte.',
    ...GAMES_BOARD,
    opensBoard: true,
  },
];

export function biomeOf(def: ChallengeDef): Biome {
  return BIOMES[def.biome] ?? BIOMES[0];
}

export const KIND_COLOR: Record<ChallengeKind, number> = {
  race: 0xf0a03a,
  logic: 0x7c6cff,
  precision: 0x1eb8c8,
  explore: 0x3dcf78,
  obstacle: 0xf06a45,
};

export type EventMode = {
  id: string;
  name: string;
  players: string;
  min: number;
  max: number;
  blurb: string;
  /** Puntata della demo locale. Il range vero lo terrà il server. */
  demoStake: number;
  playable: boolean;
};

export const EVENTS: readonly EventMode[] = [
  {
    id: 'corsa',
    name: 'Corsa',
    players: '20–40',
    min: 20,
    max: 40,
    demoStake: 20,
    playable: false,
    blurb: 'Primo al traguardo. Gli altri lasciano la puntata sul tavolo.',
  },
  {
    id: 'logica',
    name: 'Logica',
    players: '20–60',
    min: 30,
    max: 60,
    demoStake: 30,
    playable: false,
    blurb: 'Enigmi a eliminazione, a tempo.',
  },
  {
    id: 'precisione',
    name: 'Precisione',
    players: '20–50',
    min: 20,
    max: 50,
    demoStake: 20,
    playable: false,
    blurb: 'Piattaforme e finestre strette.',
  },
  {
    id: 'ostacoli',
    name: 'Ostacoli',
    players: '40–100',
    min: 40,
    max: 100,
    demoStake: 20,
    playable: true,
    blurb: 'Giro breve sulle dune. In anteprima correte in quattro. Si entra anche dalla bacheca in città.',
  },
  {
    id: 'giro',
    name: 'Giro degli spicchi',
    players: '1',
    min: 0,
    max: 0,
    demoStake: 0,
    playable: false,
    blurb: 'Visita le sei mete del pianeta. Quando le hai tutte, la bacheca aggiunge 25 monete. Nessuna puntata.',
  },
];

/** Quattro quote, somma 4: il montepremi di quattro puntate torna tutto ai corridori. */
export const PAYOUT_MULT = [2.4, 1.2, 0.4, 0] as const;

export const RANK_FOR_PLACE = [9, 26, 47, 70] as const;

export type RacePoint = { x: number; y: number; z: number };

const raceSamples: readonly { c: number; a: number }[] = [
  { c: 1.045, a: dune - 0.016 },
  { c: 1.045, a: dune - 0.004 },
  { c: 1.068, a: dune + 0.005 },
  { c: 1.068, a: dune + 0.015 },
  { c: 1.042, a: dune + 0.021 },
  { c: 1.055, a: dune + 0.032 },
];

export const RACE_PATH: readonly RacePoint[] = raceSamples.map((sample) => onSphere(sample.c, sample.a));

function gate(index: number, side: number): RacePoint {
  const a = RACE_PATH[index];
  const b = RACE_PATH[index + 1];
  if (!a || !b) throw new Error('varco senza segmento');
  return beside(a.x, a.y, a.z, b.x, b.y, b.z, side);
}

export const RACE_BARS: readonly RacePoint[] = [gate(0, 1.25), gate(2, -1.3), gate(4, -1.2)];

export const RACE_GHOSTS: readonly { name: string; seconds: number; color: number }[] = [
  { name: 'Rami', seconds: 5.6, color: 0xf0a03a },
  { name: 'Lea', seconds: 7.6, color: 0x7c6cff },
  { name: 'Nico', seconds: 10.5, color: 0x3dcf78 },
];

export const RACE_LIMIT = 24;

const finish = RACE_PATH[RACE_PATH.length - 1];
if (!finish) throw new Error('percorso senza traguardo');
export const FINISH = { x: finish.x, y: finish.y, z: finish.z, r: 1.7 };

export function payoutFor(place: number, stake: number): number {
  const mult = PAYOUT_MULT[place - 1] ?? 0;
  return Math.round(stake * mult);
}

export type MapKind = 'pole' | 'hub' | 'village' | 'biome' | 'games' | 'venue' | 'lookout';

export type MapPlace = {
  id: string;
  name: string;
  kind: MapKind;
  colat: number;
  az: number;
};

function place(id: string, name: string, kind: MapKind, point: { x: number; y: number; z: number }): MapPlace {
  const pose = angles(point.x, point.y, point.z);
  return { id, name, kind, colat: pose.colat, az: pose.az };
}

export const MAP_PLACES: readonly MapPlace[] = [
  { id: 'pole', name: 'Faro del polo', kind: 'pole', colat: 0.04, az: homeAz },
  place('hub', 'Piazza civica', 'hub', HUB_PLAZA),
  place('quarter', 'Quartiere del corallo', 'village', QUARTER_PLAZA),
  place('mercato', 'Mercato', 'village', MARKET_PLAZA),
  place('games', 'Piazza dei giochi', 'games', GAMES_BOARD),
  place('botteghe', 'Botteghe', 'village', BOTTEGHE_PLAZA),
  place('porta', 'Porta meridionale', 'village', SOUTH_PLAZA),
  place('dune-gate', 'Porta delle dune', 'village', DUNE_GATE),
  place('terrazza', 'Terrazza del faro', 'village', TERRACE),
  place('mint', 'Paese di menta', 'village', MINT_PLAZA),
  place('violet', 'Paese viola', 'village', VIOLET_PLAZA),
  place('crystal-town', 'Borgo di cristallo', 'village', CRYSTAL_PLAZA),
  place('look', 'Belvedere', 'lookout', CRYSTAL_LOOK),
  place('dune', 'Campo ostacoli', 'venue', DUNE_CAMP),
  place('lantern', 'Piazza lanterne', 'village', LANTERN_PLAZA),
  ...BIOMES.map((biome, index) => ({
    id: `biome-${biome.id}`,
    name: biome.name,
    kind: 'biome' as const,
    colat: 0.86,
    az: biomeAzimuth(index),
  })),
];

export const GIRO_IDS = ['faro', 'anello', 'pietre', 'belvedere', 'cancello', 'lanterne'] as const;
export const GIRO_BONUS = 25;
