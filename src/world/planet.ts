import * as THREE from 'three';

/**
 * Raggio del pianeta. 160 m è dieci volte il guscio precedente (16 m):
 * il giro dell'equatore passa da ~100 m a ~1000 m.
 */
export const PLANET_R = 160;

export const BIOME_COUNT = 6;

export type Biome = {
  id: string;
  name: string;
  ground: number;
  patch: number;
  deep: number;
  plant: number;
};

/** Sei spicchi. Nessuna pianta terrestre: ogni famiglia è inventata. */
export const BIOMES: readonly Biome[] = [
  { id: 'coral', name: 'Mesa corallo', ground: 0xf25b78, patch: 0xff8faf, deep: 0xd42858, plant: 0xff4d86 },
  { id: 'mint', name: 'Prateria menta', ground: 0x3dce8a, patch: 0x8ef0c4, deep: 0x178a58, plant: 0x1ed98a },
  { id: 'violet', name: 'Giardino viola', ground: 0xb06af0, patch: 0xd4a6ff, deep: 0x6a32c8, plant: 0x9a4ae8 },
  { id: 'crystal', name: 'Campo di cristalli', ground: 0x2ec8d8, patch: 0x8eecf6, deep: 0x1288b4, plant: 0x22d4f0 },
  { id: 'dune', name: 'Dune pesca', ground: 0xff8a3c, patch: 0xffc48a, deep: 0xe06020, plant: 0xff6a2a },
  { id: 'lantern', name: 'Bosco di lanterne', ground: 0xf24a9a, patch: 0xff9ad4, deep: 0xd42878, plant: 0xffc43a },
];

export const PATH_COLOR = 0xffe4f2;
export const SEAM_COLOR = 0x4a3b38;
const RING = 1.02;
const RING_HALF = 3.1 / PLANET_R;
const SPOKE_HALF = 2.4;

export function biomeAzimuth(index: number): number {
  return -Math.PI + (index + 0.5) * ((Math.PI * 2) / BIOME_COUNT);
}

export function biomeIndex(x: number, z: number): number {
  const u = (Math.atan2(x, z) + Math.PI) / (Math.PI * 2);
  return Math.min(BIOME_COUNT - 1, Math.max(0, Math.floor(u * BIOME_COUNT)));
}

export function onSphere(colatitude: number, azimuth: number, radius = PLANET_R): { x: number; y: number; z: number } {
  const s = Math.sin(colatitude);
  return {
    x: s * Math.sin(azimuth) * radius,
    y: Math.cos(colatitude) * radius,
    z: s * Math.cos(azimuth) * radius,
  };
}

/** Tangente verso il polo nord (+Y). */
export function northTangent(colatitude: number, azimuth: number): { x: number; y: number; z: number } {
  const s = Math.sin(colatitude);
  const c = Math.cos(colatitude);
  return { x: -c * Math.sin(azimuth), y: s, z: -c * Math.cos(azimuth) };
}

export function eastTangent(azimuth: number): { x: number; y: number; z: number } {
  return { x: Math.cos(azimuth), y: 0, z: -Math.sin(azimuth) };
}

export function project(x: number, y: number, z: number, radius = PLANET_R): { x: number; y: number; z: number } {
  const len = Math.hypot(x, y, z) || 1;
  const s = radius / len;
  return { x: x * s, y: y * s, z: z * s };
}

export function shift(colatitude: number, azimuth: number, northM: number, eastM: number): { x: number; y: number; z: number } {
  const p = onSphere(colatitude, azimuth);
  const n = northTangent(colatitude, azimuth);
  const e = eastTangent(azimuth);
  return project(p.x + n.x * northM + e.x * eastM, p.y + n.y * northM + e.y * eastM, p.z + n.z * northM + e.z * eastM);
}

/** 1 sul selciato, 0 fuori dalla spalla. I piedi e il guscio usano la stessa curva. */
export function pathBlend(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const colat = Math.acos(Math.min(1, Math.max(-1, y / len)));
  const az = Math.atan2(x, z);
  const ringM = Math.abs(colat - RING) * PLANET_R;
  const southM = Math.abs(colat - (Math.PI - RING)) * PLANET_R;
  let w = bandFalloff(ringM, 3.1, 5.6);
  w = Math.max(w, bandFalloff(southM, 2.6, 4.8));
  if (colat > 0.1 && colat < 2.9) {
    let best = Math.PI;
    for (let i = 0; i < BIOME_COUNT; i += 1) {
      const d = angleDiff(az, biomeAzimuth(i));
      if (d < best) best = d;
    }
    const spokeM = best * Math.sin(colat) * PLANET_R;
    w = Math.max(w, bandFalloff(spokeM, SPOKE_HALF, SPOKE_HALF + 2.4));
  }
  return w;
}

export function bandFalloff(dist: number, inner: number, outer: number): number {
  if (dist <= inner) return 1;
  if (dist >= outer) return 0;
  const t = (dist - inner) / (outer - inner);
  return 1 - t * t * (3 - 2 * t);
}

export function angles(x: number, y: number, z: number): { colat: number; az: number } {
  const len = Math.hypot(x, y, z) || 1;
  return {
    colat: Math.acos(Math.min(1, Math.max(-1, y / len))),
    az: Math.atan2(x, z),
  };
}

export function onPath(x: number, y: number, z: number): boolean {
  const len = Math.hypot(x, y, z) || 1;
  const colat = Math.acos(Math.min(1, Math.max(-1, y / len)));
  const az = Math.atan2(x, z);
  if (Math.abs(colat - RING) < RING_HALF) return true;
  if (Math.abs(colat - (Math.PI - RING)) < RING_HALF * 0.85) return true;
  if (colat < 0.12 || colat > 2.85) return false;
  let best = Math.PI;
  for (let i = 0; i < BIOME_COUNT; i++) {
    const d = angleDiff(az, biomeAzimuth(i));
    if (d < best) best = d;
  }
  return best * Math.sin(colat) * PLANET_R < SPOKE_HALF;
}

/** Distanza in metri dal confine di spicchio più vicino. Grande vicino al centro del bioma. */
export function edgeMeters(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const colat = Math.acos(Math.min(1, Math.max(-1, y / len)));
  const az = Math.atan2(x, z);
  const u = ((az + Math.PI) / (Math.PI * 2)) * BIOME_COUNT;
  const frac = u - Math.floor(u);
  const edge = Math.min(frac, 1 - frac);
  return edge * ((Math.PI * 2) / BIOME_COUNT) * Math.sin(colat) * PLANET_R;
}

/** Punto sul guscio, a `meters` dal centro del segmento, nel piano tangente. */
export function beside(
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  meters: number,
): { x: number; y: number; z: number } {
  up.set(ax + bx, ay + by, az + bz).multiplyScalar(0.5);
  const px = up.x;
  const py = up.y;
  const pz = up.z;
  if (up.lengthSq() < 1e-8) up.set(0, 1, 0);
  up.normalize();
  fwd.set(bx - ax, by - ay, bz - az);
  fwd.addScaledVector(up, -fwd.dot(up));
  if (fwd.lengthSq() < 1e-8) fwd.set(1, 0, 0);
  fwd.normalize();
  right.crossVectors(fwd, up).normalize();
  return project(px + right.x * meters, py + right.y * meters, pz + right.z * meters);
}

export function angleDiff(a: number, b: number): number {
  let d = a - b;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return Math.abs(d);
}

const up = new THREE.Vector3();
const fwd = new THREE.Vector3();
const right = new THREE.Vector3();
const basis = new THREE.Matrix4();
const quat = new THREE.Quaternion();

/** +Y locale verso la normale, +Z lungo la tangente. */
export function frameQuaternion(px: number, py: number, pz: number, fx: number, fy: number, fz: number): THREE.Quaternion {
  up.set(px, py, pz);
  if (up.lengthSq() < 1e-8) up.set(0, 1, 0);
  up.normalize();
  fwd.set(fx, fy, fz);
  if (fwd.lengthSq() < 1e-8) fwd.set(0, 0, 1);
  fwd.addScaledVector(up, -fwd.dot(up));
  if (fwd.lengthSq() < 1e-6) {
    fwd.set(1, 0, 0).addScaledVector(up, -up.x);
  }
  fwd.normalize();
  right.crossVectors(up, fwd).normalize();
  basis.makeBasis(right, up, fwd);
  return quat.setFromRotationMatrix(basis).clone();
}

/** +Y locale verso un asse qualunque (frecce lungo il sentiero). */
export function quatAxisY(yx: number, yy: number, yz: number, hintX: number, hintY: number, hintZ: number): THREE.Quaternion {
  up.set(yx, yy, yz);
  if (up.lengthSq() < 1e-8) up.set(0, 1, 0);
  up.normalize();
  fwd.set(hintX, hintY, hintZ);
  fwd.addScaledVector(up, -fwd.dot(up));
  if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, 1).addScaledVector(up, -up.z);
  fwd.normalize();
  right.crossVectors(up, fwd).normalize();
  basis.makeBasis(right, up, fwd);
  return quat.setFromRotationMatrix(basis).clone();
}
