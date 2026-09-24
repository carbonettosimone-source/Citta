import { WORLD_SEED, unit } from './hash';
import { PLANET_R, angles, eastTangent, northTangent, onSphere, shift } from './planet';

/**
 * Hub di Mondo-1. Regola in HUB.md.
 * I è un campo sul guscio intorno a H. I moduli entrano per tag + I_min,
 * su slot stabili del seme. Nessuna piazza, nessuno spicchio.
 */

export const HUB_RADIUS = 28;
export const CORE_R = 10;
export const MODULE_R = 20;

const WALK_MPS = 2.35;

export const HUB_COLAT = 0.3 + (unit(WORLD_SEED, 2, 5) - 0.5) * 0.008;
export const HUB_AZ = (unit(WORLD_SEED, 8, 13) * 2 - 1) * Math.PI;

/** Sud locale: colatitudine crescente, verso Paese A. Un solo azimut di uscita. */
export const EXIT_BEARING = Math.PI;

export const SPAWN_N = 7.2;
export const SPAWN_E = 0;
export const EXIT_N = -24.2;
export const EXIT_E = 0;

export const BOARD_N = -7.6;
export const BOARD_E = 7.4;
export const BOARD_H = 4.5;

export const VENDOR_N = -5.4;
export const VENDOR_E = -12.6;
export const VENDOR_H = 5.3;

export const PREP_N = -14.2;
export const PREP_E = 9.6;
export const PREP_H = 6.2;

export const Q2_N = 5.6;
export const Q2_E = -11.2;
export const Q2_H = 12;

export const I_MIN = {
  spawn: 0.8,
  bacheca: 0.55,
  vendor: 0.45,
  'prep-event': 0.4,
  filler: 0.18,
  exit: 0.08,
} as const;

export type HubTag = keyof typeof I_MIN;

export type HubModule = {
  tag: HubTag;
  iMin: number;
  north: number;
  east: number;
  intensity: number;
  deck: number;
  slot: number;
};

type Seg = {
  n0: number;
  e0: number;
  n1: number;
  e1: number;
  h0: number;
  h1: number;
  half: number;
};

type Pad = { n: number; e: number; hn: number; he: number; h: number };

/** Lead in piano sul nastro, poi salita corta fuori dal flusso. */
const RAMPS: readonly Seg[] = [
  { n0: 5.4, e0: 1.15, n1: 2.5, e1: 4.45, h0: 0.22, h1: 0.22, half: 1.45 },
  { n0: 2.5, e0: 4.45, n1: -6.5, e1: 6.85, h0: 0.22, h1: BOARD_H, half: 1.5 },
  { n0: -0.6, e0: -1.7, n1: -2.1, e1: -4.65, h0: 0.22, h1: 0.22, half: 1.4 },
  { n0: -2.1, e0: -4.65, n1: -4.9, e1: -11.05, h0: 0.22, h1: VENDOR_H, half: 1.45 },
  { n0: -6.2, e0: 1.8, n1: -8.8, e1: 4.65, h0: 0.22, h1: 0.22, half: 1.4 },
  { n0: -8.8, e0: 4.65, n1: -13.1, e1: 8.35, h0: 0.22, h1: PREP_H, half: 1.45 },
  { n0: 8.4, e0: -1.5, n1: 9.5, e1: -4.7, h0: 0.22, h1: 0.22, half: 1.35 },
  { n0: 9.5, e0: -4.7, n1: 3.1, e1: -6.9, h0: 0.22, h1: 7.4, half: 1.42 },
  { n0: 3.1, e0: -6.9, n1: 5.35, e1: -9.55, h0: 7.4, h1: Q2_H, half: 1.38 },
];

const PADS: readonly Pad[] = [
  { n: BOARD_N, e: BOARD_E, hn: 2.55, he: 2.25, h: BOARD_H },
  { n: VENDOR_N, e: VENDOR_E, hn: 2.25, he: 2.35, h: VENDOR_H },
  { n: PREP_N, e: PREP_E, hn: 2.45, he: 2.15, h: PREP_H },
];

const Q2_R = 2.55;

const exitDn = EXIT_N - Q2_N;
const exitDe = EXIT_E - Q2_E;
const exitLen = Math.hypot(exitDn, exitDe) || 1;
const lobeN = exitDn / exitLen;
const lobeE = exitDe / exitLen;

const Q2_LOBE: Seg = {
  n0: Q2_N + lobeN * 0.4,
  e0: Q2_E + lobeE * 0.4,
  n1: Q2_N + lobeN * (Q2_R + 1.35),
  e1: Q2_E + lobeE * (Q2_R + 1.35),
  h0: Q2_H,
  h1: Q2_H,
  half: 0.82,
};

export function intensity(dist: number): number {
  if (dist >= HUB_RADIUS) return 0;
  const t = dist / HUB_RADIUS;
  return Math.cos(t * Math.PI * 0.5);
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  const span = edge1 - edge0;
  if (span === 0) return x >= edge1 ? 1 : 0;
  const t = Math.min(1, Math.max(0, (x - edge0) / span));
  return t * t * (3 - 2 * t);
}

export function pathHalf(north: number): number {
  if (north >= -10 && north <= 10) return 4.05;
  if (north > 10) return 3.15;
  if (north < -20) return 2.65;
  return 2.65 + (4.05 - 2.65) * ((north + 20) / 10);
}

function pathHeight(north: number, east: number): number {
  if (north > 12.15 || north < -26.7) return 0;
  const half = pathHalf(north);
  const lateral = Math.abs(east);
  if (lateral > half) return 0;
  const across = 1 - smoothstep(half - 0.6, half, lateral);
  const ends = smoothstep(-26.7, -26.05, north) * (1 - smoothstep(11.5, 12.15, north));
  return 0.22 * across * ends;
}

function segLift(north: number, east: number, seg: Seg): number {
  const dn = seg.n1 - seg.n0;
  const de = seg.e1 - seg.e0;
  const len2 = dn * dn + de * de;
  if (len2 < 1e-6) return 0;
  const t = ((north - seg.n0) * dn + (east - seg.e0) * de) / len2;
  if (t < -0.08 || t > 1.12) return 0;
  const clamped = Math.min(1, Math.max(0, t));
  const cn = seg.n0 + dn * clamped;
  const ce = seg.e0 + de * clamped;
  const lateral = Math.hypot(north - cn, east - ce);
  if (lateral > seg.half) return 0;
  const across = 1 - smoothstep(seg.half * 0.42, seg.half, lateral);
  const fadeIn = smoothstep(-0.08, 0.04, t);
  const fadeOut = 1 - smoothstep(1.02, 1.12, t);
  const height = seg.h0 + (seg.h1 - seg.h0) * clamped;
  return height * across * Math.min(fadeIn, fadeOut);
}

function padLift(north: number, east: number, pad: Pad): number {
  const an = Math.abs(north - pad.n);
  const ae = Math.abs(east - pad.e);
  if (an > pad.hn || ae > pad.he) return 0;
  const fn = 1 - smoothstep(pad.hn - 0.85, pad.hn, an);
  const fe = 1 - smoothstep(pad.he - 0.85, pad.he, ae);
  return pad.h * Math.min(fn, fe);
}

function diskLift(north: number, east: number, cn: number, ce: number, radius: number, height: number): number {
  const dist = Math.hypot(north - cn, east - ce);
  if (dist > radius) return 0;
  return height * (1 - smoothstep(radius - 0.8, radius, dist));
}

/** Altezza dei piani Q0–Q2, in metri lungo la normale. 0 fuori dai nastri. */
export function deckHeight(north: number, east: number): number {
  let h = pathHeight(north, east);
  for (const seg of RAMPS) h = Math.max(h, segLift(north, east, seg));
  for (const pad of PADS) h = Math.max(h, padLift(north, east, pad));
  h = Math.max(h, diskLift(north, east, Q2_N, Q2_E, Q2_R, Q2_H));
  h = Math.max(h, segLift(north, east, Q2_LOBE));
  return h;
}

export function flowMask(x: number, y: number, z: number): number {
  const local = tangentLocal(x, y, z);
  if (!local) return 0;
  return Math.min(1, pathHeight(local.north, local.east) / 0.22);
}

export function hardFlat(x: number, y: number, z: number): number {
  const local = tangentLocal(x, y, z);
  if (!local) return 0;
  const deck = deckHeight(local.north, local.east);
  if (deck >= 0.2) return 1;
  if (deck > 0.02) return deck / 0.2;
  return 0;
}

export function geodesicFromHub(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const origin = onSphere(HUB_COLAT, HUB_AZ);
  const dot = (x / len) * (origin.x / PLANET_R) + (y / len) * (origin.y / PLANET_R) + (z / len) * (origin.z / PLANET_R);
  return Math.acos(Math.min(1, Math.max(-1, dot))) * PLANET_R;
}

export function tangentLocal(x: number, y: number, z: number): { north: number; east: number; dist: number } | null {
  const dist = geodesicFromHub(x, y, z);
  if (dist > HUB_RADIUS + 14) return null;
  const len = Math.hypot(x, y, z) || 1;
  const origin = onSphere(HUB_COLAT, HUB_AZ);
  const vx = (x / len) * PLANET_R - origin.x;
  const vy = (y / len) * PLANET_R - origin.y;
  const vz = (z / len) * PLANET_R - origin.z;
  const northT = northTangent(HUB_COLAT, HUB_AZ);
  const eastT = eastTangent(HUB_AZ);
  return {
    north: vx * northT.x + vy * northT.y + vz * northT.z,
    east: vx * eastT.x + vy * eastT.y + vz * eastT.z,
    dist,
  };
}

export function lifted(north: number, east: number, height: number): { x: number; y: number; z: number } {
  const p = shift(HUB_COLAT, HUB_AZ, north, east);
  const len = Math.hypot(p.x, p.y, p.z) || 1;
  const radius = PLANET_R + height;
  return { x: (p.x / len) * radius, y: (p.y / len) * radius, z: (p.z / len) * radius };
}

export function tangentVector(
  north: number,
  east: number,
  dn: number,
  de: number,
): { x: number; y: number; z: number } {
  const at = shift(HUB_COLAT, HUB_AZ, north, east);
  const pose = angles(at.x, at.y, at.z);
  const northT = northTangent(pose.colat, pose.az);
  const eastT = eastTangent(pose.az);
  const x = northT.x * dn + eastT.x * de;
  const y = northT.y * dn + eastT.y * de;
  const z = northT.z * dn + eastT.z * de;
  const len = Math.hypot(x, y, z) || 1;
  return { x: x / len, y: y / len, z: z / len };
}

const faceNorth = -0.978;
const faceEast = 0.207;

export const SPAWN_POINT = lifted(SPAWN_N, SPAWN_E, 0.22);
export const SPAWN_FACE = tangentVector(SPAWN_N, SPAWN_E, faceNorth, faceEast);
export const HUB_POINT = onSphere(HUB_COLAT, HUB_AZ);
export const EXIT_POINT = lifted(EXIT_N, EXIT_E, 0.22);
export const BOARD_POINT = lifted(BOARD_N, BOARD_E, BOARD_H);
export const BOARD_FACE = tangentVector(BOARD_N, BOARD_E, 2.5 - BOARD_N, 4.45 - BOARD_E);
export const VENDOR_POINT = lifted(VENDOR_N, VENDOR_E, VENDOR_H);
export const VENDOR_FACE = tangentVector(VENDOR_N, VENDOR_E, -2.1 - VENDOR_N, -4.65 - VENDOR_E);
export const PREP_POINT = lifted(PREP_N, PREP_E, PREP_H);
export const Q2_POINT = lifted(Q2_N, Q2_E, Q2_H);
export const FARO_POINT = onSphere(0.02, HUB_AZ);

const BOARD_ROUTE: readonly { n: number; e: number }[] = [
  { n: SPAWN_N, e: SPAWN_E },
  { n: 5.4, e: 1.15 },
  { n: 2.5, e: 4.45 },
  { n: -6.5, e: 6.85 },
  { n: BOARD_N, e: BOARD_E },
];

function reserved(north: number, east: number): boolean {
  if (deckHeight(north, east) > 0.12) return true;
  if (Math.hypot(north - EXIT_N, east - EXIT_E) < 3.4) return true;
  if (Math.hypot(north - SPAWN_N, east - SPAWN_E) < 2.4) return true;
  if (Math.hypot(north - BOARD_N, east - BOARD_E) < 3.6) return true;
  if (Math.hypot(north - VENDOR_N, east - VENDOR_E) < 3.4) return true;
  if (Math.hypot(north - PREP_N, east - PREP_E) < 3.4) return true;
  if (Math.hypot(north - Q2_N, east - Q2_E) < Q2_R + 1.6) return true;
  return false;
}

function buildFillers(): HubModule[] {
  const placed: HubModule[] = [];
  let slot = 0;
  let band = 0;
  let edge = 0;
  const rings = [11.2, 14.4, 17.6, 21.8, 25.2];
  const steps = 12;
  for (const dist of rings) {
    for (let k = 0; k < steps; k += 1) {
      const bearing = (k + 0.5) * ((Math.PI * 2) / steps);
      const north = dist * Math.cos(bearing);
      const east = dist * Math.sin(bearing);
      const id = slot;
      slot += 1;
      if (Math.abs(east) < 5.4 && north < 12.4 && north > -27) continue;
      if (dist < CORE_R - 0.4) continue;
      if (reserved(north, east)) continue;
      const jitterN = (unit(WORLD_SEED, id, 17) - 0.5) * 0.7;
      const jitterE = (unit(WORLD_SEED, id, 29) - 0.5) * 0.7;
      const n = north + jitterN;
      const e = east + jitterE;
      const d = Math.hypot(n, e);
      const field = intensity(d);
      if (field < I_MIN.filler || d > HUB_RADIUS - 0.4 || d < CORE_R) continue;
      if (reserved(n, e)) continue;
      const roll = unit(WORLD_SEED, id, 41);
      const onEdge = d >= MODULE_R;
      const accept = onEdge ? 0.34 : 0.72;
      if (roll > accept) continue;
      if (onEdge && edge >= 2) continue;
      if (!onEdge && band >= 8) continue;
      placed.push({
        tag: 'filler',
        iMin: I_MIN.filler,
        north: n,
        east: e,
        intensity: field,
        deck: 0,
        slot: id,
      });
      if (onEdge) edge += 1;
      else band += 1;
    }
  }
  return placed;
}

function functional(): HubModule[] {
  const specs: readonly { tag: HubTag; n: number; e: number; deck: number }[] = [
    { tag: 'spawn', n: SPAWN_N, e: SPAWN_E, deck: 0.22 },
    { tag: 'bacheca', n: BOARD_N, e: BOARD_E, deck: BOARD_H },
    { tag: 'vendor', n: VENDOR_N, e: VENDOR_E, deck: VENDOR_H },
    { tag: 'prep-event', n: PREP_N, e: PREP_E, deck: PREP_H },
    { tag: 'exit', n: EXIT_N, e: EXIT_E, deck: 0.22 },
  ];
  return specs.map((spec, slot) => {
    const dist = Math.hypot(spec.n, spec.e);
    return {
      tag: spec.tag,
      iMin: I_MIN[spec.tag],
      north: spec.n,
      east: spec.e,
      intensity: intensity(dist),
      deck: spec.deck,
      slot,
    };
  });
}

export const HUB_MODULES: readonly HubModule[] = [...functional(), ...buildFillers()];

export const Q2_LOBE_DIR = { north: lobeN, east: lobeE };

function polyline(points: readonly { n: number; e: number }[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1];
    const b = points[i];
    if (!a || !b) continue;
    total += Math.hypot(b.n - a.n, b.e - a.e);
  }
  return total;
}

function sampleRoute(points: readonly { n: number; e: number }[], step: number): { n: number; e: number }[] {
  const out: { n: number; e: number }[] = [];
  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1];
    const b = points[i];
    if (!a || !b) continue;
    const len = Math.hypot(b.n - a.n, b.e - a.e);
    const count = Math.max(1, Math.ceil(len / step));
    for (let k = 0; k < count; k += 1) {
      const t = k / count;
      out.push({ n: a.n + (b.n - a.n) * t, e: a.e + (b.e - a.e) * t });
    }
  }
  const last = points[points.length - 1];
  if (last) out.push(last);
  return out;
}

/** Vuoto se il layout rispetta raggi, tempi a piedi e il seme. */
export function auditHub(): string[] {
  const problems: string[] = [];
  const again = [...functional(), ...buildFillers()];
  if (again.length !== HUB_MODULES.length) problems.push('layout instabile');
  for (let i = 0; i < HUB_MODULES.length; i += 1) {
    const a = HUB_MODULES[i];
    const b = again[i];
    if (!a || !b) continue;
    if (a.tag !== b.tag || Math.abs(a.north - b.north) > 1e-6 || Math.abs(a.east - b.east) > 1e-6) {
      problems.push('slot diversi a parità di seme');
      break;
    }
    if (a.intensity + 1e-6 < a.iMin) problems.push(`${a.tag} sotto I_min`);
  }

  const bandOf = (n: number, e: number) => Math.hypot(n, e);
  const spawnD = bandOf(SPAWN_N, SPAWN_E);
  const boardD = bandOf(BOARD_N, BOARD_E);
  const exitD = bandOf(EXIT_N, EXIT_E);
  const q2d = bandOf(Q2_N, Q2_E);
  if (spawnD > CORE_R) problems.push('spawn fuori dal nucleo');
  if (boardD < CORE_R || boardD > MODULE_R) problems.push('bacheca fuori dalla fascia moduli');
  if (bandOf(VENDOR_N, VENDOR_E) < CORE_R || bandOf(VENDOR_N, VENDOR_E) > MODULE_R) problems.push('terminale fuori fascia');
  if (bandOf(PREP_N, PREP_E) < CORE_R || bandOf(PREP_N, PREP_E) > MODULE_R) problems.push('prep fuori fascia');
  if (exitD < MODULE_R || exitD > HUB_RADIUS) problems.push('uscita fuori dal bordo');
  if (Q2_H < 8 || Q2_H > 14) problems.push('Q2 fuori scala');
  if (q2d > HUB_RADIUS) problems.push('Q2 fuori dall’hub');

  const exits = HUB_MODULES.filter((mod) => mod.tag === 'exit');
  if (exits.length !== 1) problems.push('serve un solo exit');

  const fillers = HUB_MODULES.filter((mod) => mod.tag === 'filler');
  const band = fillers.filter((mod) => bandOf(mod.north, mod.east) < MODULE_R).length;
  const edge = fillers.length - band;
  if (band < 4) problems.push('densità moduli troppo bassa');
  if (edge > band) problems.push('il bordo non si rarefa');
  for (const mod of fillers) {
    const d = bandOf(mod.north, mod.east);
    if (d < CORE_R || d > HUB_RADIUS) problems.push('filler fuori fascia');
  }

  const boardMeters = polyline(BOARD_ROUTE);
  const exitMeters = Math.abs(SPAWN_N - EXIT_N);
  if (boardMeters / WALK_MPS > 12) problems.push(`bacheca a ${boardMeters.toFixed(1)} m, oltre il quarto d’ora a piedi`);
  if (exitMeters / WALK_MPS > 16) problems.push(`uscita a ${exitMeters.toFixed(1)} m, oltre i venti secondi a piedi`);

  let prev = 0.22;
  for (const sample of sampleRoute(BOARD_ROUTE, 0.35)) {
    const h = deckHeight(sample.n, sample.e);
    if (h < 0.12) problems.push('la via alla bacheca si interrompe');
    if (Math.abs(h - prev) > 0.85) problems.push('rampa della bacheca a strappo');
    prev = h;
    if (problems.length > 12) break;
  }

  for (let north = 11; north >= -26; north -= 0.8) {
    const h = deckHeight(north, 0);
    if (h < 0.16 || h > 0.3) {
      problems.push('il nastro di flusso non resta a terra');
      break;
    }
  }

  const pole = HUB_COLAT * PLANET_R;
  if (pole < HUB_RADIUS + 8) problems.push('il faro cade nell’impronta dell’hub');
  const q2ToPole = pole - Q2_N;
  const sight =
    Math.acos(PLANET_R / (PLANET_R + Q2_H)) + Math.acos(PLANET_R / (PLANET_R + 16));
  if (q2ToPole > sight * PLANET_R) problems.push('Q2 non vede il faro');

  const face = SPAWN_FACE;
  const boardDir = tangentVector(SPAWN_N, SPAWN_E, BOARD_N - SPAWN_N, BOARD_E - SPAWN_E);
  const exitDir = tangentVector(SPAWN_N, SPAWN_E, -1, 0);
  const boardDot = face.x * boardDir.x + face.y * boardDir.y + face.z * boardDir.z;
  const exitDot = face.x * exitDir.x + face.y * exitDir.y + face.z * exitDir.z;
  if (boardDot < Math.cos((20 * Math.PI) / 180)) problems.push('la bacheca non è davanti allo spawn');
  if (exitDot < Math.cos((20 * Math.PI) / 180)) problems.push('l’uscita non è davanti allo spawn');

  return problems;
}

export const HUB_AUDIT = {
  boardMeters: polyline(BOARD_ROUTE),
  exitMeters: Math.abs(SPAWN_N - EXIT_N),
  walkMps: WALK_MPS,
};
