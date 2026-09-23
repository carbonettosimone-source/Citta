import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { addCity, addCityPads, CAPITAL_COLAT, CORALLO, GAMES_PLAZA, inCapital } from './city';
import { bandFalloff, biomeAzimuth, frameQuaternion, northTangent, onSphere, shift } from './planet';

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
    colat: CAPITAL_COLAT,
    az: homeAz,
    plaza: 8,
    east: [0, 0],
    north: [0, 0],
    lots: [],
  },
  {
    id: 'mint',
    biome: 1,
    colat: 1.32,
    az: biomeAzimuth(1) + 0.09,
    plaza: 4.4,
    east: [-18, 8],
    north: [-8, 24],
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
      { n: 6.4, e: -12, kind: 'house', spin: 0.2 },
      { n: -6.4, e: -12, kind: 'house', spin: 2.4 },
      { n: 6.2, e: -16.4, kind: 'pavilion', spin: 0.5 },
      { n: -6, e: -16.2, kind: 'house', spin: -2.2 },
      { n: 12.2, e: 6.3, kind: 'house', spin: 1.4 },
      { n: 12.2, e: -6.3, kind: 'house', spin: -1.4 },
      { n: 17, e: 6.3, kind: 'house', spin: 1.6 },
      { n: 17, e: -6.3, kind: 'stall', spin: -1.2 },
      { n: 21.6, e: 6.5, kind: 'pavilion', spin: 0.8 },
      { n: 21.6, e: -6.5, kind: 'house', spin: -0.8 },
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
      { n: 6.2, e: -12.4, kind: 'house', spin: 0.3 },
      { n: -6.2, e: -12.6, kind: 'house', spin: 2.3 },
      { n: 5.8, e: -16.2, kind: 'stall', spin: 0.6 },
      { n: -5.6, e: -16, kind: 'pavilion', spin: -2.1 },
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
/** Bacheca al centro di piazza dei giochi, senza un lotto addosso. */
export const GAMES_BOARD = GAMES_PLAZA;

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

/** Corte del corallo: sul meridiano, verso il polo, non su una griglia piana. */
export const QUARTER_PLAZA = CORALLO;
addCityPads(pads);

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
  return inCapital(x, y, z, margin);
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

const WALL = 0xfff4f8;
const INK = 0x241c22;
const AMBER = 0xffb22e;
const NAVY = 0x2c2640;
const SHUTTERS = [0xff4d86, 0x2ad4a0, 0x7c4dff, 0x22c8ee, 0xff7a3a, 0xffc43a] as const;
const STUCCO = [0xfff2f6, 0xeef6ff, 0xf4eeff, 0xeefcf8] as const;

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
    let lotIndex = 0;
    for (const lot of town.lots) {
      const accent = SHUTTERS[(town.biome + lotIndex) % SHUTTERS.length] ?? tint;
      const stucco = STUCCO[(town.biome + lotIndex) % STUCCO.length] ?? WALL;
      lotIndex += 1;
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
        stamp(walls, 1, 1, 1, stucco);
        stamp(hip ? hips : roofs, 1, 1, 1, tint);
        stamp(doors, 1, 1, 1, INK);
        stamp(windows, 1, 1, 1, 0x3aa0ff);
        stamp(frames, 1, 1, 1, accent);
        stamp(lintels, 1, 1, 1, accent);
        stamp(eaves, 1, 1, 1, tint);
        stamp(steps, 1, 1, 1, 0xc8c4dc);
        if (!hip) stamp(chimneys, 1, 1, 1, 0xe04848);
        blockers.push({ ...p, r: 1.72, h: 3.4 });
      } else if (lot.kind === 'tower') {
        stamp(towers, 1, 1, 1, 0xf4f0ff);
        stamp(caps, 1, 1, 1, tint);
        stamp(crowns, 1, 1, 1, AMBER);
        blockers.push({ ...p, r: 1.15, h: 7.4 });
      } else if (lot.kind === 'pavilion') {
        stamp(posts, 1, 1, 1, NAVY);
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
    if (town.id !== 'hub') {
    const center = onSphere(town.colat, town.az);
    const ringGeo = new THREE.TorusGeometry(town.plaza * 0.72, 0.08, 5, 18);
    ringGeo.rotateX(Math.PI / 2);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: AMBER }));
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
        color: NAVY,
      });
      lampAt(lamps, postAt, facingLamp, 2.05, 0.38);
    }
    }
    if (town.id === 'mint') {
      const gateAt = shift(town.colat, town.az, 9.2, 0);
      const face = northTangent(town.colat, town.az);
      const gate = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.16, 8, 16), toonMaterial(gradient, 0x2ad4a0));
      gate.position.set(gateAt.x, gateAt.y, gateAt.z);
      gate.quaternion.copy(frameQuaternion(gateAt.x, gateAt.y, gateAt.z, face.x, face.y, face.z));
      const gateUp = new THREE.Vector3(gateAt.x, gateAt.y, gateAt.z).normalize();
      gate.position.addScaledVector(gateUp, 2.15);
      scene.add(gate);
      blockers.push({ ...shift(town.colat, town.az, 9.2, -2.15), r: 0.32, h: 2.3 });
      blockers.push({ ...shift(town.colat, town.az, 9.2, 2.15), r: 0.32, h: 2.3 });
      for (const north of [13.5, 19]) {
        for (const east of [-3.5, 3.5]) {
          const postAt = shift(town.colat, town.az, north, east);
          const facingLamp = frameQuaternion(postAt.x, postAt.y, postAt.z, face.x, face.y, face.z);
          posts.push({
            x: postAt.x, y: postAt.y, z: postAt.z,
            qx: facingLamp.x, qy: facingLamp.y, qz: facingLamp.z, qw: facingLamp.w,
            sx: 0.55, sy: 0.85, sz: 0.55, color: NAVY,
          });
          lampAt(lamps, postAt, facingLamp, 2.05, 0.36);
          blockers.push({ ...postAt, r: 0.16, h: 2.1 });
        }
      }
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
    if (town.id !== 'hub') addBasin(scene, gradient, blockers, town);
  }

  addCity(scene, gradient, blockers);

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
  const tints = [0xff4d86, 0x2fce8c, 0x9a4ae8, 0x22d4f0, 0xff7a3a, 0xffc43a];
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
  const ring = new THREE.Mesh(ringGeo, toonMaterial(gradient, 0xeef6ff));
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
