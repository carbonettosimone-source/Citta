import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, withWind } from '../render/toon';
import { FINISH } from '../game/content';
import type { Blocker } from './collide';
import { WORLD_SEED, unit } from './hash';
import { geodesicFromHub, HUB_RADIUS } from './intensity';
import { frameQuaternion, onSphere } from './planet';
import { seat } from './relief';

type Bit = {
  x: number;
  y: number;
  z: number;
  qx: number;
  qy: number;
  qz: number;
  qw: number;
  s: number;
  color: number;
};

const TONES = [0xb7aa9a, 0x8aa48c, 0xc6b59a, 0x9aa6b0] as const;

/** Guscio rado, stesso seme. Niente famiglie per spicchio. */
export function addDress(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const tufts: Bit[] = [];
  const rocks: Bit[] = [];
  for (let i = 0; i < 280; i += 1) {
    const colat = Math.acos(Math.min(1, Math.max(-1, 1 - 2 * unit(WORLD_SEED, i, 3))));
    const az = (unit(WORLD_SEED, i, 11) * 2 - 1) * Math.PI;
    if (colat < 0.14 || colat > Math.PI - 0.16) continue;
    const raw = onSphere(colat, az);
    if (skip(raw.x, raw.y, raw.z)) continue;
    const p = seat(raw.x, raw.y, raw.z);
    const faceX = Math.cos(az);
    const faceZ = -Math.sin(az);
    const q = frameQuaternion(raw.x, raw.y, raw.z, faceX, 0, faceZ);
    const bit: Bit = {
      x: p.x,
      y: p.y,
      z: p.z,
      qx: q.x,
      qy: q.y,
      qz: q.z,
      qw: q.w,
      s: 0.7 + unit(WORLD_SEED, i, 4) * 0.7,
      color: TONES[i % TONES.length] ?? TONES[0],
    };
    if (i % 4 === 0) {
      rocks.push(bit);
      if (bit.s > 1.15) blockers.push({ x: raw.x, y: raw.y, z: raw.z, r: 0.45 * bit.s, h: 0.7 * bit.s });
    } else tufts.push(bit);
  }
  paint(scene, tuft(), gradient, tufts, true);
  paint(scene, rock(), gradient, rocks, false);
}

function skip(x: number, y: number, z: number): boolean {
  if (geodesicFromHub(x, y, z) < HUB_RADIUS + 18) return true;
  const dx = x - FINISH.x;
  const dy = y - FINISH.y;
  const dz = z - FINISH.z;
  return dx * dx + dy * dy + dz * dz < 14 * 14;
}

function paint(scene: THREE.Scene, geometry: THREE.BufferGeometry, gradient: THREE.Texture, bits: readonly Bit[], wind: boolean): void {
  if (bits.length === 0) return;
  const material = toonInstances(gradient);
  if (wind) withWind(material);
  const mesh = new THREE.InstancedMesh(geometry, material, bits.length);
  mesh.frustumCulled = false;
  for (let i = 0; i < bits.length; i += 1) {
    const bit = bits[i];
    if (!bit) continue;
    setInstanceQuat(mesh, i, bit.x, bit.y, bit.z, bit.s, bit.s, bit.s, bit.qx, bit.qy, bit.qz, bit.qw, bit.color);
  }
  commit(mesh);
  scene.add(mesh);
}

function tuft(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(0.42, 1.15, 5);
  geo.translate(0, 0.55, 0);
  return geo;
}

function rock(): THREE.DodecahedronGeometry {
  const geo = new THREE.DodecahedronGeometry(0.55, 0);
  geo.scale(1.1, 0.45, 0.9);
  geo.translate(0, 0.2, 0);
  return geo;
}
