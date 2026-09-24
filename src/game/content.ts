import { LANDMARK_POINTS } from '../world/landmarks';
import { BIOMES, angles, beside, biomeAzimuth, onSphere, type Biome } from '../world/planet';
import {
  BOARD_FACE,
  BOARD_POINT,
  EXIT_POINT,
  FARO_POINT,
  HUB_AZ,
  HUB_POINT,
  SPAWN_FACE as SPAWN_FORWARD,
  SPAWN_POINT,
  VENDOR_FACE,
  VENDOR_H,
  lifted,
} from '../world/intensity';

export const WORLD_ID = 'Mondo-1';

/** Alza se il layout dello shard cambia: un server futuro rifiuta i client diversi. */
export const PROTO = 17;

export const SPAWN = SPAWN_POINT;
export const SPAWN_FACE = SPAWN_FORWARD;

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
  fx?: number;
  fy?: number;
  fz?: number;
  needsCourse?: boolean;
  /** Apre la bacheca dei giochi, anche se la moneta è già presa. */
  opensBoard?: boolean;
};

const faroGem = onSphere(0.05, HUB_AZ);
const vendorFront = lifted(-5.2, -11.4, VENDOR_H);

export const CHALLENGES: readonly ChallengeDef[] = [
  {
    id: 'faro',
    name: 'Faro',
    kind: 'explore',
    coins: 20,
    biome: 0,
    line: 'Il faro del polo. Resta fuori dall’hub.',
    ...faroGem,
  },
  {
    id: 'bacheca',
    name: 'Bacheca',
    kind: 'explore',
    coins: 8,
    biome: 0,
    line: 'Da qui si entra in Ostacoli.',
    x: BOARD_POINT.x,
    y: BOARD_POINT.y,
    z: BOARD_POINT.z,
    fx: BOARD_FACE.x,
    fy: BOARD_FACE.y,
    fz: BOARD_FACE.z,
    opensBoard: true,
  },
  {
    id: 'vendor',
    name: 'Terminale',
    kind: 'precision',
    coins: 6,
    biome: 0,
    line: 'Monete di sessione. Niente soldi veri.',
    x: vendorFront.x,
    y: vendorFront.y,
    z: vendorFront.z,
    fx: VENDOR_FACE.x,
    fy: VENDOR_FACE.y,
    fz: VENDOR_FACE.z,
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
    blurb: 'Giro breve. In anteprima correte in quattro. Si entra dalla bacheca sull’hub.',
  },
  {
    id: 'giro',
    name: 'Giro',
    players: '1',
    min: 0,
    max: 0,
    demoStake: 0,
    playable: false,
    blurb: 'Visita Faro, bacheca e terminale. La bacheca aggiunge 25 monete. Nessuna puntata.',
  },
];

/** Quattro quote, somma 4: il montepremi di quattro puntate torna tutto ai corridori. */
export const PAYOUT_MULT = [2.4, 1.2, 0.4, 0] as const;

export const RANK_FOR_PLACE = [9, 26, 47, 70] as const;

export type RacePoint = { x: number; y: number; z: number };

/** Stub dell’arena, lontano dall’hub. Non è un paese. */
const dune = biomeAzimuth(4);
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

export type MapKind = 'pole' | 'hub' | 'exit' | 'node';

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
  place('faro', 'Faro', 'pole', FARO_POINT),
  place('hub', 'Hub', 'hub', HUB_POINT),
  place('exit', 'Exit → A', 'exit', EXIT_POINT),
  place('paese-a', 'Paese A', 'node', LANDMARK_POINTS.paeseA),
  place('arena', 'Arena', 'node', LANDMARK_POINTS.arena),
  place('paese-b', 'Paese B', 'node', LANDMARK_POINTS.paeseB),
  place('paese-c', 'Paese C', 'node', LANDMARK_POINTS.paeseC),
  place('belvedere', 'Belvedere', 'node', LANDMARK_POINTS.belvedere),
];

export const GIRO_IDS = ['faro', 'bacheca', 'vendor'] as const;
export const GIRO_BONUS = 25;
