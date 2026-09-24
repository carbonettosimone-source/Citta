import { RACE_PATH } from '../game/content';
import { geodesicFromHub, hardFlat, tangentLocal, deckHeight, HUB_RADIUS } from './intensity';
import { PLANET_R } from './planet';

/**
 * Terreno basso sul guscio. I piani dell'hub (Q1, Q2, nastro) stanno in
 * `deckHeight` e si sommano qui, così i piedi e i moduli usano la stessa quota.
 * La mesh del pianeta usa solo `terrainLift`, senza i piani alti.
 */

export function terrainLift(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const py = (y / len) * PLANET_R;
  const colat = Math.acos(Math.min(1, Math.max(-1, py / PLANET_R)));
  const az = Math.atan2((x / len) * PLANET_R, (z / len) * PLANET_R);
  const pole = Math.min(1, colat / 0.18, (Math.PI - colat) / 0.18);
  const raw =
    0.07 +
    Math.sin(az * 1.6 + 0.4) * Math.sin(colat * 1.2) * 0.07 +
    Math.sin(az * 2.7 - colat * 1.5) * 0.035;
  const wild = Math.max(0.012, Math.min(0.2, raw)) * pole;
  const dist = geodesicFromHub(x, y, z);
  const soft = dist < HUB_RADIUS ? 0.58 * (1 - dist / HUB_RADIUS) : 0;
  const flat = Math.max(hardFlat(x, y, z), soft, raceFlat(x, y, z));
  return wild * (1 - flat);
}

export function shellLift(x: number, y: number, z: number): number {
  const local = tangentLocal(x, y, z);
  const deck = local ? deckHeight(local.north, local.east) : 0;
  return terrainLift(x, y, z) + deck;
}

export function seat(x: number, y: number, z: number): { x: number; y: number; z: number } {
  const len = Math.hypot(x, y, z) || 1;
  const scale = (PLANET_R + shellLift(x, y, z)) / len;
  return { x: x * scale, y: y * scale, z: z * scale };
}

export function terrainSeat(x: number, y: number, z: number): { x: number; y: number; z: number } {
  const len = Math.hypot(x, y, z) || 1;
  const scale = (PLANET_R + terrainLift(x, y, z)) / len;
  return { x: x * scale, y: y * scale, z: z * scale };
}

function raceFlat(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const px = (x / len) * PLANET_R;
  const py = (y / len) * PLANET_R;
  const pz = (z / len) * PLANET_R;
  let best = 99;
  for (let i = 1; i < RACE_PATH.length; i += 1) {
    const a = RACE_PATH[i - 1];
    const b = RACE_PATH[i];
    if (!a || !b) continue;
    best = Math.min(best, segmentDistance(px, py, pz, a.x, a.y, a.z, b.x, b.y, b.z));
  }
  if (best <= 2.2) return 1;
  if (best >= 4.6) return 0;
  return 1 - (best - 2.2) / 2.4;
}

function segmentDistance(
  px: number,
  py: number,
  pz: number,
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
): number {
  const abx = bx - ax;
  const aby = by - ay;
  const abz = bz - az;
  const apx = px - ax;
  const apy = py - ay;
  const apz = pz - az;
  const ab2 = abx * abx + aby * aby + abz * abz || 1;
  const t = Math.min(1, Math.max(0, (apx * abx + apy * aby + apz * abz) / ab2));
  const dx = px - (ax + abx * t);
  const dy = py - (ay + aby * t);
  const dz = pz - (az + abz * t);
  return Math.hypot(dx, dy, dz);
}
