import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances } from '../render/toon';
import type { Blocker } from './collide';
import { biomeAzimuth, frameQuaternion, onSphere, shift } from './planet';

type Kind = 'house' | 'tower' | 'pavilion' | 'stall';

type Lot = { n: number; e: number; kind: Kind; spin: number };

type Town = {
  id: string;
  biome: number;
  colat: number;
  az: number;
  plaza: number;
  east: readonly [number, number];
  north: readonly [number, number];
  lots: readonly Lot[];
};

const homeAz = biomeAzimuth(0);

/** Stesso schema per ogni clone. I lotti sono authored, non un seed diverso a ogni run. */
const TOWNS: readonly Town[] = [
  {
    id: 'hub',
    biome: 0,
    colat: 0.2,
    az: homeAz,
    plaza: 6.4,
    east: [-16, 16],
    north: [-12, 12],
    lots: [
      { n: 9, e: 8, kind: 'house', spin: 0.4 },
      { n: 9, e: -8, kind: 'house', spin: -0.4 },
      { n: -9, e: 8, kind: 'house', spin: 2.4 },
      { n: -9, e: -8, kind: 'house', spin: -2.4 },
      { n: 13, e: 7, kind: 'tower', spin: 0.2 },
      { n: 13, e: -7, kind: 'house', spin: -0.2 },
      { n: -10, e: 1.35, kind: 'pavilion', spin: 0.15 },
      { n: -8, e: 2.6, kind: 'pavilion', spin: 0.2 },
      { n: -8, e: -4.6, kind: 'house', spin: 3 },
      { n: -5, e: 3.6, kind: 'stall', spin: 0.8 },
      { n: -5, e: -3.6, kind: 'stall', spin: -0.8 },
      { n: -13, e: 6.5, kind: 'house', spin: 2.6 },
      { n: -13, e: -6.5, kind: 'house', spin: -2.6 },
      { n: 6, e: 13, kind: 'pavilion', spin: 1.4 },
      { n: 6, e: -13, kind: 'tower', spin: -1.4 },
      { n: -6, e: 13, kind: 'house', spin: 1.8 },
      { n: -6, e: -13, kind: 'house', spin: -1.8 },
      { n: 15, e: 12, kind: 'stall', spin: 0.6 },
      { n: 15, e: -12, kind: 'stall', spin: -0.6 },
    ],
  },
  {
    id: 'mint',
    biome: 1,
    colat: 1.32,
    az: biomeAzimuth(1) + 0.09,
    plaza: 4.4,
    east: [-18, 8],
    north: [-8, 8],
    lots: [
      { n: 6, e: 5, kind: 'house', spin: 0.5 },
      { n: 6, e: -5, kind: 'house', spin: -0.5 },
      { n: -6, e: 5, kind: 'stall', spin: 2 },
      { n: -6, e: -5, kind: 'house', spin: -2 },
      { n: 5.5, e: 7, kind: 'tower', spin: 1.2 },
      { n: 8, e: 4, kind: 'pavilion', spin: 0 },
    ],
  },
  {
    id: 'violet',
    biome: 2,
    colat: 1.78,
    az: biomeAzimuth(2) - 0.08,
    plaza: 4.4,
    east: [-8, 18],
    north: [-8, 8],
    lots: [
      { n: 6, e: 5, kind: 'house', spin: 0.3 },
      { n: -6, e: 5, kind: 'house', spin: 2.2 },
      { n: 6, e: -5, kind: 'stall', spin: -0.4 },
      { n: -5, e: -6, kind: 'pavilion', spin: 1 },
      { n: 5.5, e: -7, kind: 'tower', spin: -1 },
      { n: 9, e: 2, kind: 'house', spin: 0.8 },
    ],
  },
  {
    id: 'lantern',
    biome: 5,
    colat: 1.48,
    az: biomeAzimuth(5) + 0.1,
    plaza: 4.2,
    east: [-18, 8],
    north: [-7, 7],
    lots: [
      { n: 5.5, e: 5, kind: 'house', spin: 0.6 },
      { n: -5.5, e: 5, kind: 'stall', spin: 2.1 },
      { n: 5.5, e: -4.5, kind: 'house', spin: -0.5 },
      { n: -5, e: -5, kind: 'pavilion', spin: 0.2 },
      { n: 6.5, e: 6, kind: 'tower', spin: 1.5 },
    ],
  },
  {
    id: 'dune',
    biome: 4,
    colat: 1.045,
    az: biomeAzimuth(4) - 0.085,
    plaza: 3.6,
    east: [-7, 7],
    north: [-6, 6],
    lots: [
      { n: 4.5, e: 4, kind: 'stall', spin: 0.4 },
      { n: -4.5, e: 3.5, kind: 'house', spin: 2 },
      { n: 4, e: -4, kind: 'stall', spin: -0.8 },
      { n: -1, e: -5.5, kind: 'tower', spin: -1.4 },
    ],
  },
];

const hub = TOWNS[0];
const mint = TOWNS[1];
const violet = TOWNS[2];
const lantern = TOWNS[3];
const dune = TOWNS[4];
if (!hub || !mint || !violet || !lantern || !dune) throw new Error('paesi incompleti');

export const HUB_PLAZA = onSphere(hub.colat, hub.az);
export const MINT_PLAZA = onSphere(mint.colat, mint.az);
export const VIOLET_PLAZA = onSphere(violet.colat, violet.az);
export const LANTERN_PLAZA = onSphere(lantern.colat, lantern.az);
export const DUNE_CAMP = onSphere(dune.colat, dune.az);
export const CRYSTAL_LOOK = shift(1.62, biomeAzimuth(3) + 0.07, 0, 4.5);

type Pad = { x: number; y: number; z: number; r2: number };
const pads: Pad[] = [];

for (const town of TOWNS) {
  const plaza = onSphere(town.colat, town.az);
  pads.push({ ...plaza, r2: town.plaza * town.plaza });
  const [e0, e1] = town.east;
  const [n0, n1] = town.north;
  for (let e = e0; e <= e1; e += 2.4) pads.push({ ...shift(town.colat, town.az, 0, e), r2: 2.15 * 2.15 });
  for (let n = n0; n <= n1; n += 2.4) pads.push({ ...shift(town.colat, town.az, n, 0), r2: 2.15 * 2.15 });
}

export function onTownGround(x: number, y: number, z: number): boolean {
  for (let i = 0; i < pads.length; i += 1) {
    const pad = pads[i];
    if (!pad) continue;
    const dx = x - pad.x;
    const dy = y - pad.y;
    const dz = z - pad.z;
    if (dx * dx + dy * dy + dz * dz < pad.r2) return true;
  }
  return false;
}

export function nearTown(x: number, y: number, z: number, margin: number): boolean {
  for (const town of TOWNS) {
    const c = onSphere(town.colat, town.az);
    const dx = x - c.x;
    const dy = y - c.y;
    const dz = z - c.z;
    const reach = town.plaza + margin;
    if (dx * dx + dy * dy + dz * dz < reach * reach) return true;
  }
  return false;
}

type Stamp = {
  x: number;
  y: number;
  z: number;
  qx: number;
  qy: number;
  qz: number;
  qw: number;
  sx: number;
  sy: number;
  sz: number;
  color: number;
};

const WALL = 0xf6f1e6;
const INK = 0x241c22;
const AMBER = 0xe39a32;

export function addTowns(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const walls: Stamp[] = [];
  const roofs: Stamp[] = [];
  const doors: Stamp[] = [];
  const towers: Stamp[] = [];
  const caps: Stamp[] = [];
  const posts: Stamp[] = [];
  const discs: Stamp[] = [];
  const stalls: Stamp[] = [];
  const awnings: Stamp[] = [];

  for (const town of TOWNS) {
    const tint = roofTint(town.biome);
    for (const lot of town.lots) {
      const p = shift(town.colat, town.az, lot.n, lot.e);
      const facing = frameQuaternion(p.x, p.y, p.z, Math.sin(town.az), 0, Math.cos(town.az));
      facing.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), lot.spin));
      const stamp = (list: Stamp[], sx: number, sy: number, sz: number, color: number) => {
        list.push({
          x: p.x,
          y: p.y,
          z: p.z,
          qx: facing.x,
          qy: facing.y,
          qz: facing.z,
          qw: facing.w,
          sx,
          sy,
          sz,
          color,
        });
      };
      if (lot.kind === 'house') {
        stamp(walls, 1, 1, 1, WALL);
        stamp(roofs, 1, 1, 1, tint);
        stamp(doors, 1, 1, 1, INK);
        blockers.push({ ...p, r: 1.45, h: 3.4 });
      } else if (lot.kind === 'tower') {
        stamp(towers, 1, 1, 1, 0xe7dfd2);
        stamp(caps, 1, 1, 1, tint);
        blockers.push({ ...p, r: 1.15, h: 7.4 });
      } else if (lot.kind === 'pavilion') {
        stamp(posts, 1, 1, 1, 0xe7dfd2);
        stamp(discs, 1, 1, 1, tint);
        blockers.push({ ...p, r: 0.55, h: 2.8 });
      } else {
        stamp(stalls, 1, 1, 1, WALL);
        stamp(awnings, 1, 1, 1, AMBER);
        blockers.push({ ...p, r: 1.05, h: 1.7 });
      }
    }
    const center = onSphere(town.colat, town.az);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(town.plaza * 0.72, 0.08, 5, 18),
      new THREE.MeshBasicMaterial({ color: AMBER }),
    );
    ring.position.set(center.x, center.y, center.z);
    ring.quaternion.copy(frameQuaternion(center.x, center.y, center.z, 1, 0, 0));
    const lift = new THREE.Vector3(center.x, center.y, center.z).normalize();
    ring.position.addScaledVector(lift, 0.08);
    scene.add(ring);
  }

  const paint = (geo: THREE.BufferGeometry, list: readonly Stamp[], flat = false) => {
    if (list.length === 0) return;
    const material = flat ? new THREE.MeshBasicMaterial({ color: 0xffffff }) : toonInstances(gradient);
    const mesh = new THREE.InstancedMesh(geo, material, list.length);
    mesh.frustumCulled = false;
    for (let i = 0; i < list.length; i += 1) {
      const s = list[i];
      if (!s) continue;
      setInstanceQuat(mesh, i, s.x, s.y, s.z, s.sx, s.sy, s.sz, s.qx, s.qy, s.qz, s.qw, s.color);
    }
    commit(mesh);
    scene.add(mesh);
  };

  paint(box(2.5, 2.3, 2.3, 1.15), walls);
  paint(roof(), roofs);
  paint(door(), doors);
  paint(cylinder(0.82, 0.95, 6.2, 3.1), towers);
  paint(cap(), caps);
  paint(cylinder(0.16, 0.2, 2.3, 1.15), posts);
  paint(cylinder(1.85, 1.85, 0.2, 2.4), discs);
  paint(box(1.9, 1.15, 1.25, 0.58), stalls);
  paint(box(2.15, 0.12, 1.55, 1.28), awnings, true);
}

function roofTint(biome: number): number {
  const tints = [0xf26d86, 0x2fce8c, 0x9a62e0, 0x3ec8ee, 0xf09a48, 0xf2c14e];
  return tints[biome] ?? 0xf2c14e;
}

function box(w: number, h: number, d: number, lift: number): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(w, h, d);
  geo.translate(0, lift, 0);
  return geo;
}

function roof(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(1.85, 1.15, 4);
  geo.translate(0, 2.85, 0);
  return geo;
}

function cap(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(1.25, 1.35, 6);
  geo.translate(0, 6.85, 0);
  return geo;
}

function cylinder(rt: number, rb: number, h: number, lift: number): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(rt, rb, h, 6);
  geo.translate(0, lift, 0);
  return geo;
}

function door(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.55, 0.85, 0.08);
  geo.translate(0, 0.46, 1.18);
  return geo;
}
