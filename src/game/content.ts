export const WORLD_ID = 'Mondo-1';

/**
 * Versione del layout. Un server futuro rifiuta i client se non coincide,
 * come il PROTO del prototipo precedente: meglio un rifiuto che uno shard
 * che diverge in silenzio.
 */
export const PROTO = 1;

export type ChallengeKind = 'race' | 'logic' | 'precision' | 'explore' | 'obstacle';

export type ChallengeDef = {
  id: string;
  name: string;
  kind: ChallengeKind;
  coins: number;
  x: number;
  z: number;
  /** Le monete arrivano solo dopo il corridoio locale. */
  needsCourse?: boolean;
};

export const CHALLENGES: readonly ChallengeDef[] = [
  {
    id: 'faro',
    name: 'Corsa del faro',
    kind: 'race',
    coins: 15,
    x: 0,
    z: -16,
  },
  {
    id: 'anello',
    name: 'Anello di precisione',
    kind: 'precision',
    coins: 10,
    x: 15,
    z: 0,
  },
  {
    id: 'pietre',
    name: 'Pietre logiche',
    kind: 'logic',
    coins: 25,
    x: -14,
    z: 12,
  },
  {
    id: 'belvedere',
    name: 'Belvedere',
    kind: 'explore',
    coins: 12,
    x: -14,
    z: -12,
  },
  {
    id: 'cancello',
    name: 'Cancello ostacoli',
    kind: 'obstacle',
    coins: 20,
    x: 6,
    z: 12,
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
};

/** Anteprima dei modi BR. La puntata la incassa solo il server, in una stanza effimera. */
export const EVENTS: readonly EventMode[] = [
  {
    id: 'corsa',
    name: 'Corsa',
    players: '20–40',
    min: 20,
    max: 40,
    blurb: 'Primo al traguardo. Gli altri lasciano la puntata sul tavolo.',
  },
  {
    id: 'logica',
    name: 'Logica',
    players: '20–60',
    min: 30,
    max: 60,
    blurb: 'Enigmi a eliminazione, a tempo.',
  },
  {
    id: 'precisione',
    name: 'Precisione',
    players: '20–50',
    min: 20,
    max: 50,
    blurb: 'Piattaforme e finestre strette.',
  },
  {
    id: 'ostacoli',
    name: 'Ostacoli',
    players: '40–100',
    min: 40,
    max: 100,
    blurb: 'Parcours. Resta in piedi fino alla fine.',
  },
];

export const FINISH = { x: 18.6, z: 12, r: 1.35 };
