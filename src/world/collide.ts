export type CircleBlock = {
  kind: 'circle';
  x: number;
  z: number;
  r: number;
  h: number;
};

export type BoxBlock = {
  kind: 'box';
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  h: number;
};

export type Blocker = CircleBlock | BoxBlock;

const LIMIT = 20.6;

/** Spinta fuori dagli ostacoli. I piedi sopra `h` passano (salto sulle barriere). */
export function resolve(x: number, z: number, feet: number, radius: number, blockers: readonly Blocker[]): { x: number; z: number } {
  for (let pass = 0; pass < 2; pass++) {
    for (const block of blockers) {
      if (feet >= block.h - 0.02) continue;
      if (block.kind === 'circle') {
        let dx = x - block.x;
        let dz = z - block.z;
        const min = radius + block.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= min * min) continue;
        if (d2 < 1e-8) {
          dx = min;
          dz = 0;
        }
        const d = Math.hypot(dx, dz) || 1e-4;
        const push = min - d;
        x += (dx / d) * push;
        z += (dz / d) * push;
        continue;
      }

      const nearestX = Math.min(Math.max(x, block.minX), block.maxX);
      const nearestZ = Math.min(Math.max(z, block.minZ), block.maxZ);
      let dx = x - nearestX;
      let dz = z - nearestZ;
      const d2 = dx * dx + dz * dz;
      if (d2 >= radius * radius) continue;
      if (d2 > 1e-8) {
        const d = Math.hypot(dx, dz);
        const push = radius - d;
        x += (dx / d) * push;
        z += (dz / d) * push;
        continue;
      }
      const left = x - (block.minX - radius);
      const right = block.maxX + radius - x;
      const south = z - (block.minZ - radius);
      const north = block.maxZ + radius - z;
      const smallest = Math.min(left, right, south, north);
      if (smallest === left) x = block.minX - radius;
      else if (smallest === right) x = block.maxX + radius;
      else if (smallest === south) z = block.minZ - radius;
      else z = block.maxZ + radius;
    }
  }

  return {
    x: Math.min(LIMIT, Math.max(-LIMIT, x)),
    z: Math.min(LIMIT, Math.max(-LIMIT, z)),
  };
}
