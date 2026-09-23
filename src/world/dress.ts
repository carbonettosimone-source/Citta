import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, withWind } from '../render/toon';
import { WORLD_SEED, unit } from './hash';
import { biomeAzimuth, frameQuaternion, onPath, onSphere, shift } from './planet';
import type { Blocker } from './collide';
import { seat } from './relief';
import { nearTown, onTownGround } from './towns';

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

const ROCK = [0xd7a090, 0xb7d7c6, 0xcbb6e6, 0xb7e4ea, 0xe7c59a, 0xe7b0c8] as const;

/** Tappeto e rocce dallo stesso seme di Mondo-1. Identici a ogni caricamento. */
export function addDress(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const fans: Bit[] = [];
  const blades: Bit[] = [];
  const stalks: Bit[] = [];
  const shards: Bit[] = [];
  const scrub: Bit[] = [];
  const moss: Bit[] = [];
  const rocks: Bit[] = [];

  for (let biome = 0; biome < 6; biome += 1) {
    const center = biomeAzimuth(biome);
    const cover: Bit[] = [];
    for (let n = 0; n < 168; n += 1) {
      const az = center + (unit(biome, n, WORLD_SEED) - 0.5) * 0.9;
      const colat = 0.26 + unit(n, biome, WORLD_SEED ^ 17) * 2.4;
      if (drop(colat, az, 0.35)) continue;
      const scale = 0.85 + unit(biome, n, 4) * 0.85;
      cover.push(bit(colat, az, scale, tint(biome, n)));
      if (n % 4 === 0) {
        const extra = shift(colat, az, (unit(n, biome, 21) - 0.5) * 1.6, (unit(biome, n, 27) - 0.5) * 1.6);
        const len = Math.hypot(extra.x, extra.y, extra.z) || 1;
        const colat2 = Math.acos(Math.min(1, Math.max(-1, extra.y / len)));
        const az2 = Math.atan2(extra.x, extra.z);
        if (!drop(colat2, az2, 0.35)) cover.push(bit(colat2, az2, scale * 0.72, tint(biome, n + 9)));
      }
    }
    for (let n = 0; n < 18; n += 1) {
      const az = center + (unit(biome + 20, n, WORLD_SEED) - 0.5) * 0.8;
      const colat = 0.4 + unit(n, biome + 3, WORLD_SEED) * 2.1;
      if (drop(colat, az, 3.5)) continue;
      const scale = 0.55 + unit(biome, n, 9) * 1.35;
      const rock = bit(colat, az, scale, ROCK[biome] ?? 0xcccccc);
      rocks.push(rock);
      if (n % 3 === 0) {
        const extra = shift(colat, az, (unit(n, biome, 2) - 0.5) * 2.4, (unit(biome, n, 6) - 0.5) * 2.4);
        const len = Math.hypot(extra.x, extra.y, extra.z) || 1;
        const colat2 = Math.acos(Math.min(1, Math.max(-1, extra.y / len)));
        const az2 = Math.atan2(extra.x, extra.z);
        if (!drop(colat2, az2, 2)) rocks.push(bit(colat2, az2, scale * 0.62, ROCK[biome] ?? 0xcccccc));
      }
    }
    if (biome === 0) fans.push(...cover);
    else if (biome === 1) blades.push(...cover);
    else if (biome === 2) stalks.push(...cover);
    else if (biome === 3) shards.push(...cover);
    else if (biome === 4) scrub.push(...cover);
    else moss.push(...cover);
  }

  paint(scene, gradient, fan(), fans, false, true);
  paint(scene, gradient, blade(), blades, false, true);
  paint(scene, gradient, stalk(), stalks, false, true);
  paint(scene, gradient, shard(), shards, true, true);
  paint(scene, gradient, tuft(), scrub, false, true);
  paint(scene, gradient, tuft(), moss, false, true);
  paint(scene, gradient, boulder(), rocks, false, false);
  for (const rock of rocks) {
    blockers.push({ x: rock.x, y: rock.y, z: rock.z, r: 0.52 * rock.s, h: 1.05 * rock.s });
  }
}

function tint(biome: number, n: number): number {
  const colors = [0xf26d86, 0x3d9a62, 0x9a62e0, 0x3ec8ee, 0xe08a3e, 0xf2c14e];
  const deep = [0xd45a62, 0x2f6e48, 0x6a42b0, 0x2e96ae, 0xc46a32, 0xd24e90];
  return unit(biome, n, 8) > 0.62 ? (deep[biome] ?? 0xffffff) : (colors[biome] ?? 0xffffff);
}

function drop(colat: number, az: number, townMargin: number): boolean {
  if (colat < 0.12 || colat > 2.9) return true;
  const p = onSphere(colat, az);
  if (onPath(p.x, p.y, p.z) || onTownGround(p.x, p.y, p.z)) return true;
  return nearTown(p.x, p.y, p.z, townMargin);
}

function bit(colat: number, az: number, scale: number, color: number): Bit {
  const raw = onSphere(colat, az);
  const p = seat(raw.x, raw.y, raw.z);
  const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(az), 0, -Math.sin(az));
  return { ...p, qx: q.x, qy: q.y, qz: q.z, qw: q.w, s: scale, color };
}

function paint(
  scene: THREE.Scene,
  gradient: THREE.Texture,
  geometry: THREE.BufferGeometry,
  list: readonly Bit[],
  flat: boolean,
  wind: boolean,
): void {
  if (list.length === 0) return;
  const material = flat ? new THREE.MeshBasicMaterial({ color: 0xffffff }) : toonInstances(gradient);
  if (wind) withWind(material);
  const mesh = new THREE.InstancedMesh(geometry, material, list.length);
  mesh.frustumCulled = false;
  for (let i = 0; i < list.length; i += 1) {
    const item = list[i];
    if (!item) continue;
    setInstanceQuat(
      mesh,
      i,
      item.x,
      item.y,
      item.z,
      item.s,
      item.s,
      item.s,
      item.qx,
      item.qy,
      item.qz,
      item.qw,
      item.color,
    );
  }
  commit(mesh);
  scene.add(mesh);
}

function fan(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(0.28, 0.16, 5);
  geo.translate(0, 0.08, 0);
  return geo;
}

function blade(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(0.045, 0.32, 4);
  geo.translate(0, 0.16, 0);
  return geo;
}

function stalk(): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(0.03, 0.045, 0.36, 4);
  geo.translate(0, 0.18, 0);
  return geo;
}

function shard(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(0.08, 0.28, 4);
  geo.translate(0, 0.14, 0);
  return geo;
}

function tuft(): THREE.SphereGeometry {
  const geo = new THREE.SphereGeometry(0.16, 5, 4);
  geo.scale(1.2, 0.45, 1.2);
  geo.translate(0, 0.07, 0);
  return geo;
}

function boulder(): THREE.DodecahedronGeometry {
  const geo = new THREE.DodecahedronGeometry(0.55, 0);
  geo.translate(0, 0.28, 0);
  return geo;
}
