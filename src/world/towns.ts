import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, toonMaterial, withWind } from '../render/toon';
import type { Blocker } from './collide';
import { bandFalloff, biomeAzimuth, eastTangent, frameQuaternion, northTangent, onSphere, shift } from './planet';

type Kind = 'house' | 'tower' | 'pavilion' | 'stall' | 'kiosk';

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
      { n: 11, e: 4.4, kind: 'house', spin: 0.15 },
      { n: 11, e: -4.4, kind: 'house', spin: -0.15 },
      { n: 2.35, e: 5.7, kind: 'kiosk', spin: -0.85 },
      { n: -2.2, e: 8.2, kind: 'stall', spin: 1.1 },
      { n: -2.2, e: -8.2, kind: 'house', spin: -1.1 },
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
      { n: -8, e: 2.6, kind: 'house', spin: 2.4 },
      { n: 2, e: -7.2, kind: 'stall', spin: -1.2 },
      { n: -3, e: 7.6, kind: 'house', spin: 0.9 },
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
      { n: -8.2, e: 3.2, kind: 'house', spin: 2.5 },
      { n: 2.2, e: 8.2, kind: 'stall', spin: 0.7 },
      { n: -2.4, e: -7.4, kind: 'house', spin: -1.6 },
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
      { n: -8, e: 2.4, kind: 'house', spin: 2.2 },
      { n: 2.2, e: -7.2, kind: 'stall', spin: -1.1 },
      { n: 9, e: -2.4, kind: 'pavilion', spin: 0.4 },
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
      { n: -5.2, e: 4.6, kind: 'pavilion', spin: 1.7 },
      { n: 6.4, e: 3.4, kind: 'house', spin: 0.3 },
      { n: 1.2, e: 6.4, kind: 'stall', spin: 1.2 },
    ],
  },
  {
    id: 'crystal',
    biome: 3,
    colat: 1.5,
    az: biomeAzimuth(3) - 0.11,
    plaza: 4,
    east: [-12, 12],
    north: [-6, 6],
    lots: [
      { n: 5.2, e: 4.6, kind: 'house', spin: 0.4 },
      { n: -5.2, e: 4.4, kind: 'pavilion', spin: 2.2 },
      { n: 5.2, e: -4.8, kind: 'stall', spin: -0.5 },
      { n: -4.6, e: -5, kind: 'house', spin: -2 },
      { n: 6.6, e: 6.2, kind: 'tower', spin: 1.1 },
    ],
  },
];

const hub = TOWNS[0];
const mint = TOWNS[1];
const violet = TOWNS[2];
const lantern = TOWNS[3];
const dune = TOWNS[4];
const crystal = TOWNS[5];
if (!hub || !mint || !violet || !lantern || !dune || !crystal) throw new Error('paesi incompleti');

export const HUB_PLAZA = onSphere(hub.colat, hub.az);
export const MINT_PLAZA = onSphere(mint.colat, mint.az);
export const VIOLET_PLAZA = onSphere(violet.colat, violet.az);
export const LANTERN_PLAZA = onSphere(lantern.colat, lantern.az);
export const DUNE_CAMP = onSphere(dune.colat, dune.az);
export const CRYSTAL_PLAZA = onSphere(crystal.colat, crystal.az);
export const CRYSTAL_LOOK = shift(1.62, biomeAzimuth(3) + 0.07, 0, 4.5);
/** Bacheca accanto al chiosco, fuori dal raggio del lotto così ci si può stare davanti. */
export const GAMES_BOARD = shift(hub.colat, hub.az, 4.15, 5.55);

type Dwelling = {
  n: number;
  e: number;
  spin: number;
  sx: number;
  sy: number;
  sz: number;
  hip: boolean;
  wall: number;
  roof: number;
  porch: boolean;
  potN: number;
  potE: number;
};

/** Case diverse attorno al cortile. Le porte guardano la piazza, il varco a nord resta sul faro. */
const QUARTER_HOMES: readonly Dwelling[] = [
  { n: 17.2, e: -6.6, spin: Math.PI, sx: 0.86, sy: 0.9, sz: 0.96, hip: true, wall: 0xf7f1e8, roof: 0xf26d86, porch: true, potN: 1.5, potE: -0.8 },
  { n: 17.2, e: 6.6, spin: Math.PI, sx: 0.7, sy: 1.34, sz: 0.8, hip: false, wall: 0xf3e6dc, roof: 0xd45a62, porch: false, potN: 1.55, potE: 0.75 },
  { n: 20.3, e: -8.5, spin: Math.PI / 2, sx: 1.16, sy: 0.8, sz: 1.02, hip: true, wall: 0xf6f1e6, roof: 0xe39a32, porch: true, potN: 0.85, potE: 1.65 },
  { n: 20.3, e: 8.5, spin: -Math.PI / 2, sx: 0.66, sy: 1.28, sz: 0.78, hip: false, wall: 0xf8efe4, roof: 0xc46a52, porch: false, potN: -0.7, potE: -1.5 },
  { n: 24.1, e: -5.5, spin: 0, sx: 0.92, sy: 0.96, sz: 0.88, hip: true, wall: 0xf4ebe3, roof: 0xf26d86, porch: true, potN: -1.5, potE: 0.8 },
  { n: 24.1, e: 5.5, spin: 0, sx: 1.08, sy: 0.76, sz: 0.98, hip: true, wall: 0xf6f1e6, roof: 0xe08a6a, porch: false, potN: -1.45, potE: -0.85 },
];

function houseReach(sx: number, sz: number): number {
  return Math.hypot(1.25 * sx, 1.15 * sz) + 0.35;
}

type Pad = { x: number; y: number; z: number; r2: number };
const pads: Pad[] = [];

for (const town of TOWNS) {
  const plaza = onSphere(town.colat, town.az);
  pads.push({ ...plaza, r2: town.plaza * town.plaza });
  const [e0, e1] = town.east;
  const [n0, n1] = town.north;
  for (let e = e0; e <= e1; e += 2.4) pads.push({ ...shift(town.colat, town.az, 0, e), r2: 2.15 * 2.15 });
  for (let n = n0; n <= n1; n += 2.4) pads.push({ ...shift(town.colat, town.az, n, 0), r2: 2.15 * 2.15 });
  for (const lot of town.lots) {
    const r = lot.kind === 'tower' ? 2.15 : lot.kind === 'pavilion' ? 1.75 : lot.kind === 'stall' ? 1.95 : lot.kind === 'kiosk' ? 2.3 : 2.55;
    pads.push({ ...shift(town.colat, town.az, lot.n, lot.e), r2: r * r });
  }
}

/** Cortile a nord della piazza, sulla visuale del faro. Stesso telaio della città. */
export const QUARTER_PLAZA = shift(hub.colat, hub.az, 20, 0);

for (let n = 12.4; n <= 27.2; n += 2) {
  pads.push({ ...shift(hub.colat, hub.az, n, 0), r2: 2.05 * 2.05 });
}
for (let e = -9.6; e <= 9.6; e += 2) {
  pads.push({ ...shift(hub.colat, hub.az, 20, e), r2: 1.85 * 1.85 });
}
pads.push({ ...QUARTER_PLAZA, r2: 4.7 * 4.7 });
for (const home of QUARTER_HOMES) {
  const reach = houseReach(home.sx, home.sz);
  pads.push({ ...shift(hub.colat, hub.az, home.n, home.e), r2: reach * reach });
}

/** 1 al centro di piazza, strada o lotto; scende a 0 sulla spalla. */
export function townBlend(x: number, y: number, z: number): number {
  let best = 0;
  for (let i = 0; i < pads.length; i += 1) {
    const pad = pads[i];
    if (!pad) continue;
    const dist = Math.hypot(x - pad.x, y - pad.y, z - pad.z);
    const inner = Math.sqrt(pad.r2);
    const w = bandFalloff(dist, inner, inner + 2.2);
    if (w > best) best = w;
    if (best >= 1) return 1;
  }
  return best;
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
  const dx = x - QUARTER_PLAZA.x;
  const dy = y - QUARTER_PLAZA.y;
  const dz = z - QUARTER_PLAZA.z;
  return dx * dx + dy * dy + dz * dz < (12 + margin) * (12 + margin);
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
  const hips: Stamp[] = [];
  const windows: Stamp[] = [];
  const frames: Stamp[] = [];
  const lintels: Stamp[] = [];
  const eaves: Stamp[] = [];
  const steps: Stamp[] = [];
  const chimneys: Stamp[] = [];
  const signs: Stamp[] = [];
  const crowns: Stamp[] = [];
  const lamps: Stamp[] = [];

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
        const hip = Math.round(Math.abs(lot.e) + Math.abs(lot.n)) % 2 === 0;
        stamp(walls, 1, 1, 1, WALL);
        stamp(hip ? hips : roofs, 1, 1, 1, tint);
        stamp(doors, 1, 1, 1, INK);
        stamp(windows, 1, 1, 1, 0x163044);
        stamp(frames, 1, 1, 1, 0xf4efe6);
        stamp(lintels, 1, 1, 1, AMBER);
        stamp(eaves, 1, 1, 1, hip ? tint : 0xf4efe6);
        stamp(steps, 1, 1, 1, 0xe7d3b2);
        if (!hip) stamp(chimneys, 1, 1, 1, 0xc46a52);
        blockers.push({ ...p, r: 1.72, h: 3.4 });
      } else if (lot.kind === 'tower') {
        stamp(towers, 1, 1, 1, 0xe7dfd2);
        stamp(caps, 1, 1, 1, tint);
        stamp(crowns, 1, 1, 1, AMBER);
        blockers.push({ ...p, r: 1.15, h: 7.4 });
      } else if (lot.kind === 'pavilion') {
        stamp(posts, 1, 1, 1, 0xe7dfd2);
        stamp(discs, 1, 1, 1, tint);
        blockers.push({ ...p, r: 0.55, h: 2.8 });
      } else if (lot.kind === 'kiosk') {
        stamp(stalls, 1.15, 1.05, 1.05, WALL);
        stamp(signs, 1, 1, 1, 0x143028);
        lampAt(lamps, p, facing, 3.15, 0.42);
        blockers.push({ ...p, r: 1.32, h: 2.5 });
      } else {
        stamp(stalls, 1, 1, 1, WALL);
        stamp(awnings, 1, 1, 1, AMBER);
        blockers.push({ ...p, r: 1.16, h: 1.7 });
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
    for (const [north, east] of [
      [town.plaza * 0.82, 1.85],
      [town.plaza * 0.82, -1.85],
      [-town.plaza * 0.82, 1.85],
      [-town.plaza * 0.82, -1.85],
    ] as const) {
      const postAt = shift(town.colat, town.az, north, east);
      const facingLamp = frameQuaternion(postAt.x, postAt.y, postAt.z, Math.sin(town.az), 0, Math.cos(town.az));
      posts.push({
        x: postAt.x,
        y: postAt.y,
        z: postAt.z,
        qx: facingLamp.x,
        qy: facingLamp.y,
        qz: facingLamp.z,
        qw: facingLamp.w,
        sx: 0.55,
        sy: 0.85,
        sz: 0.55,
        color: 0xe7dfd2,
      });
      lampAt(lamps, postAt, facingLamp, 2.05, 0.38);
    }
    if (town.id === 'dune') {
      const gateAt = shift(town.colat, town.az, -6.4, 3.2);
      const gate = new THREE.Mesh(
        new THREE.TorusGeometry(2.15, 0.16, 6, 14),
        toonMaterial(gradient, 0xf09a48),
      );
      gate.position.set(gateAt.x, gateAt.y, gateAt.z);
      gate.quaternion.copy(frameQuaternion(gateAt.x, gateAt.y, gateAt.z, Math.sin(town.az), 0, Math.cos(town.az)));
      const gateUp = new THREE.Vector3(gateAt.x, gateAt.y, gateAt.z).normalize();
      gate.position.addScaledVector(gateUp, 2.15);
      scene.add(gate);
    }
    addBasin(scene, gradient, blockers, town);
  }

  addQuarter(scene, gradient, blockers);

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
  paint(hipRoof(), hips);
  paint(windowsGeo(), windows);
  paint(frameGeo(), frames);
  paint(lintel(), lintels);
  paint(eave(), eaves);
  paint(step(), steps);
  paint(chimney(), chimneys);
  paint(signBoard(), signs);
  paint(crownBulb(), crowns, true);
  paint(bulb(), lamps, true);
}

function addQuarter(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const walls: Stamp[] = [];
  const roofs: Stamp[] = [];
  const hips: Stamp[] = [];
  const doors: Stamp[] = [];
  const windows: Stamp[] = [];
  const frames: Stamp[] = [];
  const lintels: Stamp[] = [];
  const eaves: Stamp[] = [];
  const steps: Stamp[] = [];
  const chimneys: Stamp[] = [];
  const porches: Stamp[] = [];
  const plaques: Stamp[] = [];
  const posts: Stamp[] = [];
  const lamps: Stamp[] = [];
  const benches: Stamp[] = [];
  const crates: Stamp[] = [];
  const fences: Stamp[] = [];
  const banners: Stamp[] = [];
  const stems: Stamp[] = [];
  const crowns: Stamp[] = [];
  const glows: Stamp[] = [];
  const bollards: Stamp[] = [];

  const put = (list: Stamp[], p: { x: number; y: number; z: number }, q: THREE.Quaternion, sx: number, sy: number, sz: number, color: number) => {
    list.push({ x: p.x, y: p.y, z: p.z, qx: q.x, qy: q.y, qz: q.z, qw: q.w, sx, sy, sz, color });
  };
  const pose = (n: number, e: number, spin: number) => {
    const p = shift(hub.colat, hub.az, n, e);
    const q = frameQuaternion(p.x, p.y, p.z, Math.sin(hub.az), 0, Math.cos(hub.az));
    q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spin));
    return { p, q };
  };

  for (const home of QUARTER_HOMES) {
    const { p, q } = pose(home.n, home.e, home.spin);
    put(walls, p, q, home.sx, home.sy, home.sz, home.wall);
    put(home.hip ? hips : roofs, p, q, home.sx, home.sy, home.sz, home.roof);
    put(doors, p, q, home.sx, home.sy, home.sz, INK);
    put(windows, p, q, home.sx, home.sy, home.sz, 0x163044);
    put(frames, p, q, home.sx, home.sy, home.sz, 0xf4efe6);
    put(lintels, p, q, home.sx, home.sy, home.sz, AMBER);
    put(eaves, p, q, home.sx, home.sy, home.sz, home.hip ? home.roof : 0xf4efe6);
    put(steps, p, q, home.sx, home.sy, home.sz, 0xe7d3b2);
    put(plaques, p, q, home.sx, home.sy, home.sz, 0xfff1d0);
    if (!home.hip) put(chimneys, p, q, home.sx, home.sy, home.sz, 0xc46a52);
    if (home.porch) put(porches, p, q, home.sx, home.sy, home.sz, AMBER);
    blockers.push({ ...p, r: Math.hypot(1.25 * home.sx, 1.15 * home.sz) + 0.04, h: 3.45 * home.sy });
    const pot = pose(home.n + home.potN, home.e + home.potE, home.spin);
    put(stems, pot.p, pot.q, 0.72, 0.72, 0.72, 0xf6f1e6);
    put(crowns, pot.p, pot.q, 0.7, 0.7, 0.7, 0xf26d86);
    blockers.push({ ...pot.p, r: 0.28, h: 0.7 });
  }

  const towers: Stamp[] = [];
  const caps: Stamp[] = [];
  const bell = pose(20.3, 11.8, 0);
  put(towers, bell.p, bell.q, 0.74, 0.86, 0.74, 0xe7dfd2);
  put(caps, bell.p, bell.q, 0.74, 0.86, 0.74, 0xf26d86);
  put(glows, raise(bell.p, 6.35), bell.q, 0.26, 0.26, 0.26, AMBER);
  blockers.push({ ...bell.p, r: 0.82, h: 6.4 });

  for (const n of [13.6, 15.8, 18.2, 21.8, 24.8]) {
    for (const e of [-2.55, 2.55]) {
      const lamp = pose(n, e, 0);
      put(posts, lamp.p, lamp.q, 0.62, 0.92, 0.62, 0xe7dfd2);
      lampAt(lamps, lamp.p, lamp.q, 2.15, 0.3);
      blockers.push({ ...lamp.p, r: 0.18, h: 2.2 });
    }
  }

  for (const gate of [
    { n: 14.2, e: -2.75, color: AMBER },
    { n: 14.2, e: 2.75, color: 0xf26d86 },
  ]) {
    const flag = pose(gate.n, gate.e, 0);
    put(posts, flag.p, flag.q, 0.5, 1.05, 0.5, 0xe7dfd2);
    put(banners, flag.p, flag.q, 1, 1, 1, gate.color);
    blockers.push({ ...flag.p, r: 0.2, h: 2.3 });
  }

  for (const seat of [
    { n: 18.4, e: -4.4, spin: Math.PI },
    { n: 18.4, e: 4.4, spin: Math.PI },
    { n: 21.6, e: -4.6, spin: 0 },
    { n: 21.6, e: 4.4, spin: 0 },
  ]) {
    const bench = pose(seat.n, seat.e, seat.spin);
    put(benches, bench.p, bench.q, 1, 1, 1, 0xe7dfd2);
    blockers.push({ ...bench.p, r: 0.52, h: 0.62 });
  }

  for (const boxAt of [
    { n: 19.9, e: -10.35, s: 0.42 },
    { n: 20.28, e: -10.55, s: 0.34 },
    { n: 20.55, e: -10.2, s: 0.38 },
  ]) {
    const crate = pose(boxAt.n, boxAt.e, 0.4);
    put(crates, crate.p, crate.q, boxAt.s, boxAt.s, boxAt.s, 0xc4894e);
    blockers.push({ ...crate.p, r: boxAt.s * 0.55, h: boxAt.s + 0.15 });
  }

  for (const wall of [
    { n: 15.4, e: -3.9 },
    { n: 15.4, e: 3.9 },
    { n: 19.4, e: -11.3 },
    { n: 21.2, e: -11.3 },
  ]) {
    const fence = pose(wall.n, wall.e, 0);
    put(fences, fence.p, fence.q, 1, 1, 1, 0xf4efe6);
    blockers.push({ ...fence.p, r: 0.62, h: 0.72 });
  }

  for (const tree of [
    { n: 18.8, e: -5.1 },
    { n: 18.8, e: 5.1 },
    { n: 22.2, e: 5.6 },
    { n: 21.2, e: -5.9 },
  ]) {
    const plant = pose(tree.n, tree.e, 0);
    put(stems, plant.p, plant.q, 1, 1, 1, 0xd45a62);
    put(crowns, plant.p, plant.q, 1.05, 1.05, 1.05, 0xf6c2b4);
    blockers.push({ ...plant.p, r: 0.2, h: 2.3 });
  }

  const wireSpin = pose(16.6, 0, 0);
  put(glows, raise(wireSpin.p, 2.55), wireSpin.q, 0.12, 0.12, 0.12, 0xfff1d0);
  for (const bulbN of [15.2, 16.2, 17.2, 18.2]) {
    put(glows, raise(shift(hub.colat, hub.az, bulbN, 0), 2.42), wireSpin.q, 0.16, 0.16, 0.16, AMBER);
  }
  const crossAt = shift(hub.colat, hub.az, 20, 0);
  const east = eastTangent(hub.az);
  const crossQ = frameQuaternion(crossAt.x, crossAt.y, crossAt.z, east.x, east.y, east.z);
  for (const bulbE of [-2.2, -0.7, 0.7, 2.2]) {
    put(glows, raise(shift(hub.colat, hub.az, 20, bulbE), 2.42), crossQ, 0.16, 0.16, 0.16, AMBER);
  }

  const fountain = pose(22.8, -3.2, 0);
  const up = new THREE.Vector3(fountain.p.x, fountain.p.y, fountain.p.z).normalize();
  const basinGeo = new THREE.TorusGeometry(0.86, 0.12, 6, 14);
  basinGeo.rotateX(Math.PI / 2);
  const basin = new THREE.Mesh(basinGeo, toonMaterial(gradient, 0xf4efe6));
  basin.position.set(fountain.p.x, fountain.p.y, fountain.p.z).addScaledVector(up, 0.16);
  basin.quaternion.copy(fountain.q);
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.62, 0.05, 12),
    new THREE.MeshBasicMaterial({ color: 0x8fd8ea }),
  );
  water.position.set(fountain.p.x, fountain.p.y, fountain.p.z).addScaledVector(up, 0.1);
  water.quaternion.copy(fountain.q);
  const jet = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.7, 6), new THREE.MeshBasicMaterial({ color: 0xe8f7fb }));
  jet.position.set(fountain.p.x, fountain.p.y, fountain.p.z).addScaledVector(up, 0.48);
  jet.quaternion.copy(fountain.q);
  scene.add(basin, water, jet);
  for (const [dn, de] of [
    [0.86, 0],
    [-0.86, 0],
    [0, 0.86],
    [0, -0.86],
  ] as const) {
    const lip = shift(hub.colat, hub.az, 22.8 + dn, -3.2 + de);
    put(bollards, lip, fountain.q, 1, 1, 1, 0xe7dfd2);
    blockers.push({ ...lip, r: 0.22, h: 0.7 });
  }

  const court = shift(hub.colat, hub.az, 20, 0);
  const courtQ = frameQuaternion(court.x, court.y, court.z, 1, 0, 0);
  const ringGeo = new THREE.TorusGeometry(3.15, 0.06, 5, 20);
  ringGeo.rotateX(Math.PI / 2);
  const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: AMBER }));
  const courtUp = new THREE.Vector3(court.x, court.y, court.z).normalize();
  ring.position.set(court.x, court.y, court.z).addScaledVector(courtUp, 0.08);
  ring.quaternion.copy(courtQ);
  scene.add(ring);

  const north = northTangent(hub.colat, hub.az);
  const northQ = frameQuaternion(wireSpin.p.x, wireSpin.p.y, wireSpin.p.z, north.x, north.y, north.z);
  const northWire = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 4.6), toonMaterial(gradient, 0x241c22));
  northWire.position.copy(raiseVec(wireSpin.p, 2.58));
  northWire.quaternion.copy(northQ);
  const crossWire = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 4.8), toonMaterial(gradient, 0x241c22));
  crossWire.position.copy(raiseVec(crossAt, 2.58));
  crossWire.quaternion.copy(crossQ);
  scene.add(northWire, crossWire);

  const paint = (geo: THREE.BufferGeometry, list: readonly Stamp[], flat = false, wind = false) => {
    if (list.length === 0) return;
    const material = flat ? new THREE.MeshBasicMaterial({ color: 0xffffff }) : toonInstances(gradient);
    if (wind) withWind(material);
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
  paint(hipRoof(), hips);
  paint(door(), doors);
  paint(windowsGeo(), windows);
  paint(frameGeo(), frames);
  paint(lintel(), lintels);
  paint(eave(), eaves);
  paint(step(), steps);
  paint(chimney(), chimneys);
  paint(porchGeo(), porches, true);
  paint(plaqueGeo(), plaques);
  paint(cylinder(0.82, 0.95, 6.2, 3.1), towers);
  paint(cap(), caps);
  paint(cylinder(0.16, 0.2, 2.3, 1.15), posts);
  paint(bulb(), lamps, true);
  paint(benchGeo(), benches);
  paint(box(1, 0.72, 0.72, 0.36), crates);
  paint(fenceGeo(), fences);
  paint(bannerCloth(), banners);
  paint(cylinder(0.08, 0.11, 1.15, 0.58), stems);
  paint(quarterCrown(), crowns, false, true);
  paint(bulb(), glows, true);
  paint(cylinder(0.14, 0.16, 0.7, 0.35), bollards);
}

function raise(p: { x: number; y: number; z: number }, height: number): { x: number; y: number; z: number } {
  const len = Math.hypot(p.x, p.y, p.z) || 1;
  return { x: p.x + (p.x / len) * height, y: p.y + (p.y / len) * height, z: p.z + (p.z / len) * height };
}

function raiseVec(p: { x: number; y: number; z: number }, height: number): THREE.Vector3 {
  const at = raise(p, height);
  return new THREE.Vector3(at.x, at.y, at.z);
}

function porchGeo(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(1.35, 0.07, 0.62);
  geo.translate(0, 1.58, 1.42);
  return geo;
}

function plaqueGeo(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.28, 0.2, 0.04);
  geo.translate(0.52, 1.18, 1.24);
  return geo;
}

function benchGeo(): THREE.BufferGeometry {
  const seat = new THREE.BoxGeometry(1.15, 0.08, 0.36);
  seat.translate(0, 0.42, 0);
  const back = new THREE.BoxGeometry(1.15, 0.36, 0.06);
  back.translate(0, 0.62, -0.16);
  return mergePair(seat, back);
}

function fenceGeo(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(1.35, 0.58, 0.1);
  geo.translate(0, 0.3, 0);
  return geo;
}

function bannerCloth(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.5, 0.82, 0.04);
  geo.translate(0, 1.72, 0.16);
  return geo;
}

function quarterCrown(): THREE.BufferGeometry {
  const low = new THREE.CylinderGeometry(0.42, 0.32, 0.16, 6);
  low.translate(0, 1.05, 0);
  const top = new THREE.CylinderGeometry(0.26, 0.2, 0.12, 5);
  top.translate(0, 1.32, 0);
  return mergePair(low, top);
}

function lampAt(list: Stamp[], p: { x: number; y: number; z: number }, facing: THREE.Quaternion, height: number, scale: number): void {
  const len = Math.hypot(p.x, p.y, p.z) || 1;
  list.push({
    x: p.x + (p.x / len) * height,
    y: p.y + (p.y / len) * height,
    z: p.z + (p.z / len) * height,
    qx: facing.x,
    qy: facing.y,
    qz: facing.z,
    qw: facing.w,
    sx: scale,
    sy: scale,
    sz: scale,
    color: AMBER,
  });
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

function hipRoof(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(2.05, 0.7, 4);
  geo.translate(0, 2.55, 0);
  return geo;
}

function addBasin(
  scene: THREE.Scene,
  gradient: THREE.Texture,
  blockers: Blocker[],
  town: Town,
): void {
  const radius = town.id === 'hub' ? 1.42 : 0.78;
  const spot = basinSpot(town, radius);
  if (!spot) return;
  const at = shift(town.colat, town.az, spot.n, spot.e);
  const facing = frameQuaternion(at.x, at.y, at.z, Math.sin(town.az), 0, Math.cos(town.az));
  const up = new THREE.Vector3(at.x, at.y, at.z).normalize();
  const ringGeo = new THREE.TorusGeometry(radius, town.id === 'hub' ? 0.16 : 0.11, 6, 16);
  ringGeo.rotateX(Math.PI / 2);
  const ring = new THREE.Mesh(ringGeo, toonMaterial(gradient, 0xf4efe6));
  ring.position.set(at.x, at.y, at.z).addScaledVector(up, 0.2);
  ring.quaternion.copy(facing);
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.72, radius * 0.72, 0.05, 14),
    new THREE.MeshBasicMaterial({ color: town.id === 'hub' ? 0x8fd8ea : 0x9ad4e0 }),
  );
  water.position.set(at.x, at.y, at.z).addScaledVector(up, 0.12);
  water.quaternion.copy(facing);
  scene.add(ring, water);
  if (town.id === 'hub') {
    const jet = new THREE.Mesh(
      new THREE.ConeGeometry(0.11, 0.85, 6),
      new THREE.MeshBasicMaterial({ color: 0xe8f7fb }),
    );
    jet.position.set(at.x, at.y, at.z).addScaledVector(up, 0.58);
    jet.quaternion.copy(facing);
    scene.add(jet);
  }
  for (let i = 0; i < 4; i += 1) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    blockers.push({ ...shift(town.colat, town.az, spot.n + Math.cos(a) * radius, spot.e + Math.sin(a) * radius), r: 0.34, h: 0.7 });
  }
}

function basinSpot(town: Town, radius: number): { n: number; e: number } | null {
  const need = radius + 1.9;
  for (const scale of [0.72, 0.85, 0.58]) {
    for (const sn of [1, -1]) {
      for (const se of [-1, 1]) {
        const n = town.plaza * scale * sn;
        const e = town.plaza * scale * se;
        const offStreet = Math.abs(n) - radius > 2.5 && Math.abs(e) - radius > 2.65;
        const clear = town.lots.every((lot) => Math.hypot(lot.n - n, lot.e - e) > need);
        if (offStreet && clear) return { n, e };
      }
    }
  }
  return null;
}

function eave(): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(1.95, 1.95, 0.12, 6);
  geo.translate(0, 2.32, 0);
  return geo;
}

function frameGeo(): THREE.BufferGeometry {
  const geo = new THREE.BoxGeometry(0.5, 0.54, 0.04);
  const left = geo.clone();
  left.translate(-0.58, 1.38, 1.16);
  const right = geo.clone();
  right.translate(0.58, 1.38, 1.16);
  return mergePair(left, right);
}

function lintel(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.82, 0.12, 0.1);
  geo.translate(0, 0.98, 1.22);
  return geo;
}

function step(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.78, 0.06, 0.32);
  geo.translate(0, 0.04, 1.38);
  return geo;
}

function windowsGeo(): THREE.BufferGeometry {
  const geo = new THREE.BoxGeometry(0.36, 0.4, 0.06);
  const left = geo.clone();
  left.translate(-0.58, 1.38, 1.2);
  const right = geo.clone();
  right.translate(0.58, 1.38, 1.2);
  return mergePair(left, right);
}

function chimney(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.28, 0.62, 0.28);
  geo.translate(0.62, 3.2, -0.15);
  return geo;
}

function signBoard(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(1.7, 0.95, 0.1);
  geo.translate(0, 2.45, 0.15);
  return geo;
}

function crownBulb(): THREE.SphereGeometry {
  const geo = new THREE.SphereGeometry(0.34, 7, 6);
  geo.translate(0, 7.55, 0);
  return geo;
}

function bulb(): THREE.SphereGeometry {
  return new THREE.SphereGeometry(1, 7, 6);
}

function mergePair(a: THREE.BufferGeometry, b: THREE.BufferGeometry): THREE.BufferGeometry {
  const ea = a.index ? a.toNonIndexed() : a;
  const eb = b.index ? b.toNonIndexed() : b;
  const geo = new THREE.BufferGeometry();
  const count = ea.getAttribute('position').count + eb.getAttribute('position').count;
  const position = new Float32Array(count * 3);
  const normal = new Float32Array(count * 3);
  const pa = ea.getAttribute('position');
  const pb = eb.getAttribute('position');
  const na = ea.getAttribute('normal');
  const nb = eb.getAttribute('normal');
  for (let i = 0; i < pa.count; i += 1) {
    position[i * 3] = pa.getX(i);
    position[i * 3 + 1] = pa.getY(i);
    position[i * 3 + 2] = pa.getZ(i);
    normal[i * 3] = na.getX(i);
    normal[i * 3 + 1] = na.getY(i);
    normal[i * 3 + 2] = na.getZ(i);
  }
  const off = pa.count;
  for (let i = 0; i < pb.count; i += 1) {
    position[(off + i) * 3] = pb.getX(i);
    position[(off + i) * 3 + 1] = pb.getY(i);
    position[(off + i) * 3 + 2] = pb.getZ(i);
    normal[(off + i) * 3] = nb.getX(i);
    normal[(off + i) * 3 + 1] = nb.getY(i);
    normal[(off + i) * 3 + 2] = nb.getZ(i);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  return geo;
}
