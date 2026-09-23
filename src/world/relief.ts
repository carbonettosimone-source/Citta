import { biomeIndex, pathBlend, PLANET_R } from './planet';
import { townBlend } from './towns';

const BIAS = [0.02, 0.05, 0.04, 0.1, 0.16, 0.05] as const;

/**
 * Altezza in metri sopra il raggio. Zero su strade e piazze, così i selciati
 * sono scavati nel guscio. Stessa funzione per la mesh e per i piedi.
 */
export function shellLift(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const px = (x / len) * PLANET_R;
  const py = (y / len) * PLANET_R;
  const pz = (z / len) * PLANET_R;
  const colat = Math.acos(Math.min(1, Math.max(-1, py / PLANET_R)));
  const az = Math.atan2(px, pz);
  const pole = Math.min(1, colat / 0.18, (Math.PI - colat) / 0.18);
  const biome = biomeIndex(px, pz);
  const bias = BIAS[biome] ?? 0;
  const raw =
    0.09 +
    bias * 0.45 +
    Math.sin(az * 2 + 0.4) * Math.sin(colat * 1.35) * 0.09 +
    Math.sin(az * 3.1 - colat * 1.8) * 0.045;
  const wild = Math.max(0.015, Math.min(0.28, raw)) * pole;
  const flat = Math.max(pathBlend(px, py, pz), townBlend(px, py, pz));
  return wild * (1 - flat);
}

export function seat(x: number, y: number, z: number): { x: number; y: number; z: number } {
  const len = Math.hypot(x, y, z) || 1;
  const scale = (PLANET_R + shellLift(x, y, z)) / len;
  return { x: x * scale, y: y * scale, z: z * scale };
}
