import { PLANET_R } from './planet';

export type Blocker = {
  x: number;
  y: number;
  z: number;
  /** Raggio sul piano tangente, in metri. */
  r: number;
  /** Altezza oltre la quale il salto passa. */
  h: number;
};

const dir = { x: 0, y: 0, z: 0 };

/**
 * Spinta sul guscio. I piedi sopra `h` scavalcano.
 * La gravità verso il centro la tiene il giocatore: qui si scivola solo di lato.
 */
export function resolve(
  x: number,
  y: number,
  z: number,
  altitude: number,
  radius: number,
  blockers: readonly Blocker[],
): { x: number; y: number; z: number } {
  let px = x;
  let py = y;
  let pz = z;
  const radial = Math.hypot(px, py, pz) || 1;
  px /= radial;
  py /= radial;
  pz /= radial;

  for (let pass = 0; pass < 2; pass++) {
    for (const block of blockers) {
      if (altitude >= block.h - 0.02) continue;
      const bl = Math.hypot(block.x, block.y, block.z) || 1;
      const bx = block.x / bl;
      const by = block.y / bl;
      const bz = block.z / bl;
      const dot = Math.min(1, Math.max(-1, px * bx + py * by + pz * bz));
      const dist = Math.acos(dot) * PLANET_R;
      const min = radius + block.r;
      if (dist >= min) continue;
      let tx = bx - px * dot;
      let ty = by - py * dot;
      let tz = bz - pz * dot;
      const tl = Math.hypot(tx, ty, tz);
      if (tl < 1e-6) {
        tx = 1;
        ty = 0;
        tz = 0;
      } else {
        tx /= tl;
        ty /= tl;
        tz /= tl;
      }
      const push = (min - dist) / PLANET_R;
      px -= tx * push;
      py -= ty * push;
      pz -= tz * push;
      const n = Math.hypot(px, py, pz) || 1;
      px /= n;
      py /= n;
      pz /= n;
    }
  }

  const shell = PLANET_R + altitude;
  dir.x = px * shell;
  dir.y = py * shell;
  dir.z = pz * shell;
  return { x: dir.x, y: dir.y, z: dir.z };
}
