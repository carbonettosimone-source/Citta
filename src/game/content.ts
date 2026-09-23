import { BIOMES, biomeAzimuth, northTangent, onSphere, shift, type Biome } from '../world/planet';

export const WORLD_ID = 'Mondo-1';

/** Alza se il layout dello shard cambia: un server futuro rifiuta i client diversi. */
export const PROTO = 4;

const homeAz = biomeAzimuth(0);
const home = onSphere(0.78, homeAz);
const homeFace = northTangent(0.78, homeAz);

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
};

const faro = onSphere(0.2, homeAz);
const anello = onSphere(1.05, biomeAzimuth(1));
const pietre = onSphere(1.42, biomeAzimuth(2));
const belvedere = onSphere(1.7, biomeAzimuth(3));
const dune = biomeAzimuth(4);
const cancello = onSphere(1.02, dune - 0.52);

export const CHALLENGES: readonly ChallengeDef[] = [
  {
    id: 'faro',
    name: 'Faro del polo',
    kind: 'race',
    coins: 20,
    biome: 0,
    line: 'Il faro del polo ti segna come esploratore.',
    ...faro,
  },
  {
    id: 'anello',
    name: 'Anello di menta',
    kind: 'precision',
    coins: 12,
    biome: 1,
    line: 'Centro della prateria. Paga poco, ma paga.',
    ...anello,
  },
  {
    id: 'pietre',
    name: 'Petali logici',
    kind: 'logic',
    coins: 30,
    biome: 2,
    line: 'L’enigma viola, per ora, è una moneta grossa.',
    ...pietre,
  },
  {
    id: 'belvedere',
    name: 'Belvedere di cristallo',
    kind: 'explore',
    coins: 16,
    biome: 3,
    line: 'Sei arrivato dove il pianeta curva via.',
    ...belvedere,
  },
  {
    id: 'cancello',
    name: 'Cancello delle dune',
    kind: 'obstacle',
    coins: 18,
    biome: 4,
    line: 'Il cancello si ricorda di chi ha corso.',
    ...cancello,
    needsCourse: true,
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
    blurb: 'Giro breve sulle dune. In anteprima correte in quattro.',
  },
];

/** Quattro quote, somma 4: il montepremi di quattro puntate torna tutto ai corridori. */
export const PAYOUT_MULT = [2.4, 1.2, 0.4, 0] as const;

export const RANK_FOR_PLACE = [9, 26, 47, 70] as const;

export type RacePoint = { x: number; y: number; z: number };

const raceSamples: readonly { c: number; a: number }[] = [
  { c: 1.02, a: dune - 0.34 },
  { c: 1.02, a: dune - 0.16 },
  { c: 1.3, a: dune - 0.02 },
  { c: 1.3, a: dune + 0.16 },
  { c: 0.98, a: dune + 0.3 },
  { c: 1.14, a: dune + 0.42 },
];

export const RACE_PATH: readonly RacePoint[] = raceSamples.map((sample) => onSphere(sample.c, sample.a));

export const RACE_BARS: readonly RacePoint[] = [
  shift(1.02, dune + 0.0, 0, 0),
  shift(1.34, dune + 0.34, 0, 0),
  shift(1.02, dune + 0.05, 0, 1.6),
];

export const RACE_GHOSTS: readonly { name: string; seconds: number; color: number }[] = [
  { name: 'Rami', seconds: 5.6, color: 0xf0a03a },
  { name: 'Lea', seconds: 7.6, color: 0x7c6cff },
  { name: 'Nico', seconds: 10.5, color: 0x3dcf78 },
];

export const RACE_LIMIT = 24;

const finish = RACE_PATH[RACE_PATH.length - 1];
if (!finish) throw new Error('percorso senza traguardo');
export const FINISH = { x: finish.x, y: finish.y, z: finish.z, r: 1.55 };

export function payoutFor(place: number, stake: number): number {
  const mult = PAYOUT_MULT[place - 1] ?? 0;
  return Math.round(stake * mult);
}
