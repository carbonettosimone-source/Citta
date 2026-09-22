export const WORLD_ID = 'Mondo-1';

/** Alza se il layout dello shard cambia: un server futuro rifiuta i client diversi. */
export const PROTO = 3;

export const SPAWN = { x: 0, z: 2.8, yaw: 0 };

export type ChallengeKind = 'race' | 'logic' | 'precision' | 'explore' | 'obstacle';

export type ChallengeDef = {
  id: string;
  name: string;
  kind: ChallengeKind;
  coins: number;
  line: string;
  x: number;
  z: number;
  needsCourse?: boolean;
};

export const CHALLENGES: readonly ChallengeDef[] = [
  {
    id: 'faro',
    name: 'Corsa del faro',
    kind: 'race',
    coins: 20,
    line: 'Il faro ti segna come esploratore.',
    x: 0,
    z: -7.6,
  },
  {
    id: 'anello',
    name: 'Anello di precisione',
    kind: 'precision',
    coins: 12,
    line: 'Centro. La precisione paga poco, ma paga.',
    x: 14,
    z: 0,
  },
  {
    id: 'pietre',
    name: 'Pietre logiche',
    kind: 'logic',
    coins: 30,
    line: 'L’enigma, per ora, è una moneta grossa.',
    x: -13,
    z: 11,
  },
  {
    id: 'belvedere',
    name: 'Belvedere',
    kind: 'explore',
    coins: 16,
    line: 'Sei arrivato al bordo del mondo.',
    x: -13,
    z: -11,
  },
  {
    id: 'cancello',
    name: 'Cancello ostacoli',
    kind: 'obstacle',
    coins: 18,
    line: 'Il cancello si ricorda di chi ha corso.',
    x: 4.2,
    z: 10.6,
    needsCourse: true,
  },
];

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
    blurb: 'Parcours breve. In anteprima correte in quattro.',
  },
];

/** Quattro quote, somma 4: il montepremi di quattro puntate torna tutto ai corridori. */
export const PAYOUT_MULT = [2.4, 1.2, 0.4, 0] as const;

export const RANK_FOR_PLACE = [9, 26, 47, 70] as const;

export type RacePoint = { x: number; z: number };

export const RACE_PATH: readonly RacePoint[] = [
  { x: 6.2, z: 13.85 },
  { x: 10.3, z: 13.85 },
  { x: 11.15, z: 9.85 },
  { x: 14.85, z: 9.85 },
  { x: 15.7, z: 13.85 },
  { x: 18.7, z: 12.35 },
];

export const RACE_BARS: readonly { x: number; minZ: number; maxZ: number }[] = [
  { x: 9.15, minZ: 9.15, maxZ: 12.05 },
  { x: 12.55, minZ: 11.95, maxZ: 14.85 },
  { x: 16.05, minZ: 9.15, maxZ: 12.05 },
];

/** Tempi pensati per il pollice: una corsa pulita batte Rami, una lenta prende il terzo. */
export const RACE_GHOSTS: readonly { name: string; seconds: number; color: number }[] = [
  { name: 'Rami', seconds: 5.6, color: 0xf0a03a },
  { name: 'Lea', seconds: 7.6, color: 0x7c6cff },
  { name: 'Nico', seconds: 10.5, color: 0x3dcf78 },
];

export const RACE_YAW = -Math.PI / 2;
export const RACE_LIMIT = 24;

const finish = RACE_PATH[RACE_PATH.length - 1];
export const FINISH = { x: finish?.x ?? 19, z: finish?.z ?? 12.2, r: 1.45 };

export function payoutFor(place: number, stake: number): number {
  const mult = PAYOUT_MULT[place - 1] ?? 0;
  return Math.round(stake * mult);
}
