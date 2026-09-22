import * as THREE from 'three';
import { CHALLENGES, FINISH, RACE_BARS, RACE_PATH } from '../game/content';
import { commit, setInstance } from '../render/instance';
import { createSky } from '../render/sky';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { WORLD_SEED, hash32, unit } from './hash';

const TILE = 2;
const GRASS = [0x7dce62, 0x62c470, 0x8ed456, 0x57b868];
const LEAF = [0x2f9a48, 0x3cb85c, 0x228a4e];
const ROCK = [0x8e9aab, 0xa7b1c0, 0x738291];

const RING: readonly (readonly [number, number])[] = [
  [6.6, 6.6],
  [-6.6, 6.6],
  [6.6, -6.6],
  [-6.6, -6.6],
  [9.4, 3.5],
  [9.4, -3.5],
  [-9.4, 3.5],
  [-9.4, -3.5],
  [3.5, 9.4],
  [-3.5, 9.4],
  [3.5, -9.4],
  [-3.5, -9.4],
];

type Stamp = {
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
  sz: number;
  rotX: number;
  rotY: number;
  color: number;
};

export type Hub = {
  blockers: Blocker[];
  sky: THREE.Object3D;
  finish: { x: number; z: number; r: number };
};

export function createHub(scene: THREE.Scene, gradient: THREE.Texture): Hub {
  const sky = createSky();
  scene.add(sky);

  const tiles: Stamp[] = [];
  const trunks: Stamp[] = [];
  const crowns: Stamp[] = [];
  const rocks: Stamp[] = [];
  const blockers: Blocker[] = [];

  for (let ix = -11; ix <= 11; ix++) {
    for (let iz = -11; iz <= 11; iz++) {
      const x = ix * TILE;
      const z = iz * TILE;
      tiles.push({
        x,
        y: -0.11,
        z,
        sx: 1,
        sy: 1,
        sz: 1,
        rotX: 0,
        rotY: 0,
        color: tileColor(ix, iz, x, z),
      });
      scatter(ix, iz, x, z, trunks, crowns, rocks, blockers);
    }
  }

  for (let i = 0; i < RING.length; i++) {
    const pair = RING[i];
    if (!pair) continue;
    const [x, z] = pair;
    if (tooClose(x, z, 1.4)) continue;
    pushTree(trunks, crowns, blockers, x, z, 0.95 + (i % 3) * 0.12, i % 3, i);
  }

  const tileMesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(2.04, 0.22, 2.04),
    toonInstances(gradient),
    tiles.length,
  );
  paint(tileMesh, tiles);
  scene.add(tileMesh);

  const trunkMesh = new THREE.InstancedMesh(
    new THREE.CylinderGeometry(0.16, 0.26, 1, 5),
    toonInstances(gradient),
    trunks.length,
  );
  paint(trunkMesh, trunks);
  scene.add(trunkMesh);

  const crownMesh = new THREE.InstancedMesh(
    new THREE.ConeGeometry(1, 1, 6),
    toonInstances(gradient),
    crowns.length,
  );
  paint(crownMesh, crowns);
  scene.add(crownMesh);

  const rockMesh = new THREE.InstancedMesh(
    new THREE.DodecahedronGeometry(0.5, 0),
    toonInstances(gradient),
    Math.max(1, rocks.length),
  );
  if (rocks.length > 0) {
    paint(rockMesh, rocks);
    scene.add(rockMesh);
  }

  addMonument(scene, gradient, blockers);
  addCourse(scene, gradient, blockers);
  addWater(scene, gradient);

  return { blockers, sky, finish: FINISH };
}

function paint(mesh: THREE.InstancedMesh, stamps: readonly Stamp[]): void {
  mesh.count = stamps.length;
  mesh.frustumCulled = false;
  for (let i = 0; i < stamps.length; i++) {
    const s = stamps[i];
    if (!s) continue;
    setInstance(mesh, i, s.x, s.y, s.z, s.sx, s.sy, s.sz, s.rotX, s.rotY, s.color);
  }
  commit(mesh);
}

function tileColor(ix: number, iz: number, x: number, z: number): number {
  const dist = Math.hypot(x, z);
  if (dist < 6.2) return 0xd9d2c4;
  if (onCourse(x, z)) return 0xe4c48e;
  if (Math.abs(x) <= 2 || Math.abs(z) <= 2) return 0xf0d7a2;
  if (dist > 17.2) return 0xf4e0ae;
  if (dist < 7.5) return 0xc9c0ae;
  const chunkX = Math.floor((ix + 16) / 4);
  const chunkZ = Math.floor((iz + 16) / 4);
  const family = hash32(chunkX, chunkZ, WORLD_SEED) % GRASS.length;
  const jitter = unit(ix, iz, WORLD_SEED) > 0.84 ? 1 : 0;
  return GRASS[(family + jitter) % GRASS.length] ?? GRASS[0];
}

function onCourse(x: number, z: number): boolean {
  return z >= 10 && z <= 14 && x >= 4 && x <= 20;
}

function scatter(
  ix: number,
  iz: number,
  x: number,
  z: number,
  trunks: Stamp[],
  crowns: Stamp[],
  rocks: Stamp[],
  blockers: Blocker[],
): void {
  const dist = Math.hypot(x, z);
  const grass = dist >= 7.5 && dist <= 17.2 && !onCourse(x, z) && Math.abs(x) > 2 && Math.abs(z) > 2;
  const sand = dist > 17.2;
  if (!grass && !sand) return;
  if (tooClose(x, z, 3.2)) return;
  for (const pair of RING) {
    const dx = x - pair[0];
    const dz = z - pair[1];
    if (dx * dx + dz * dz < 4) return;
  }

  const roll = unit(ix, iz, WORLD_SEED ^ 0x51ab);
  if (grass && roll > 0.74) {
    const scale = 0.78 + unit(ix, iz, 17) * 0.5;
    const variant = hash32(ix, iz, 3) % LEAF.length;
    pushTree(trunks, crowns, blockers, x, z, scale, variant, hash32(ix, iz, 9));
    return;
  }
  const rockRoll = unit(ix, iz, WORLD_SEED ^ 0x77c3);
  if (rockRoll > (sand ? 0.9 : 0.94)) {
    const sx = 0.7 + unit(ix, 3, iz) * 0.7;
    const sy = 0.45 + unit(ix, 4, iz) * 0.4;
    const sz = 0.7 + unit(ix, 5, iz) * 0.65;
    const color = ROCK[hash32(ix, iz, 6) % ROCK.length] ?? ROCK[0];
    rocks.push({
      x,
      y: 0.42 * sy,
      z,
      sx,
      sy,
      sz,
      rotX: (unit(ix, 8, iz) - 0.5) * 0.4,
      rotY: unit(ix, 9, iz) * Math.PI,
      color,
    });
    blockers.push({ kind: 'circle', x, z, r: 0.38 * Math.max(sx, sz), h: 1.4 });
  }
}

function pushTree(
  trunks: Stamp[],
  crowns: Stamp[],
  blockers: Blocker[],
  x: number,
  z: number,
  scale: number,
  variant: number,
  yawSeed: number,
): void {
  const trunkH = 1.15 * scale;
  const coneH = 1.5 * scale;
  const yaw = (yawSeed % 7) * 0.15;
  trunks.push({
    x,
    y: trunkH / 2,
    z,
    sx: scale,
    sy: trunkH,
    sz: scale,
    rotX: 0,
    rotY: yaw,
    color: 0x8a5738,
  });
  crowns.push({
    x,
    y: trunkH * 0.62 + coneH / 2,
    z,
    sx: 0.95 * scale,
    sy: coneH,
    sz: 0.95 * scale,
    rotX: 0,
    rotY: yaw,
    color: LEAF[variant] ?? LEAF[0],
  });
  blockers.push({ kind: 'circle', x, z, r: 0.34 * scale, h: 4 });
}

function tooClose(x: number, z: number, pad: number): boolean {
  if (x * x + z * z < (2.2 + pad) * (2.2 + pad) && pad > 2) return true;
  for (const challenge of CHALLENGES) {
    const dx = x - challenge.x;
    const dz = z - challenge.z;
    if (dx * dx + dz * dz < pad * pad) return true;
  }
  const fx = x - FINISH.x;
  const fz = z - FINISH.z;
  return fx * fx + fz * fz < (FINISH.r + pad) * (FINISH.r + pad);
}

function addMonument(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const x = 4.2;
  const z = -0.4;
  const stone = toonMaterial(gradient, 0xf4efe4);
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.42, 2.7, 0.42), stone);
  const right = new THREE.Mesh(new THREE.BoxGeometry(0.42, 2.7, 0.42), stone);
  const beam = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.32, 0.48), stone);
  left.position.set(x - 0.78, 1.35, z);
  right.position.set(x + 0.78, 1.35, z);
  beam.position.set(x, 2.55, z);
  const gem = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.32, 0),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  gem.position.set(x, 3.05, z);
  const cloth = new THREE.MeshBasicMaterial({ color: 0x1d6fd0, side: THREE.DoubleSide });
  const flagL = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.36), cloth);
  const flagR = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.36), cloth);
  flagL.position.set(x - 0.95, 2.15, z + 0.02);
  flagR.position.set(x + 0.95, 2.15, z + 0.02);
  scene.add(left, right, beam, gem, flagL, flagR);
  blockers.push({ kind: 'circle', x: x - 0.78, z, r: 0.36, h: 3.4 });
  blockers.push({ kind: 'circle', x: x + 0.78, z, r: 0.36, h: 3.4 });
}

function addCourse(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const bars: Stamp[] = RACE_BARS.map((item) => bar(item.x, item.minZ, item.maxZ));
  const mesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(1, 1, 1),
    toonInstances(gradient),
    bars.length,
  );
  paint(mesh, bars);
  scene.add(mesh);
  for (const item of bars) {
    blockers.push({
      kind: 'box',
      minX: item.x - item.sx / 2,
      maxX: item.x + item.sx / 2,
      minZ: item.z - item.sz / 2,
      maxZ: item.z + item.sz / 2,
      h: item.sy,
    });
  }

  const arrows = new THREE.InstancedMesh(
    new THREE.ConeGeometry(0.28, 0.7, 4),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
    RACE_PATH.length,
  );
  arrows.frustumCulled = false;
  for (let i = 0; i < RACE_PATH.length; i++) {
    const point = RACE_PATH[i];
    const next = RACE_PATH[i + 1] ?? point;
    if (!point || !next) continue;
    const yaw = Math.atan2(next.x - point.x, next.z - point.z);
    setInstance(arrows, i, point.x, 0.42, point.z, 1, 1, 1, Math.PI / 2, yaw, 0xf0a03a);
  }
  commit(arrows);
  scene.add(arrows);

  const pad = new THREE.Mesh(
    new THREE.CylinderGeometry(FINISH.r, FINISH.r, 0.08, 20),
    new THREE.MeshBasicMaterial({ color: 0x1eb8c8 }),
  );
  pad.position.set(FINISH.x, 0.05, FINISH.z);
  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.1, 2.4, 6),
    new THREE.MeshBasicMaterial({ color: 0x1eb8c8 }),
  );
  mast.position.set(FINISH.x, 1.2, FINISH.z);
  const flag = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.36, 0.05),
    new THREE.MeshBasicMaterial({ color: 0xf7f4ec }),
  );
  flag.position.set(FINISH.x + 0.38, 2.15, FINISH.z);
  scene.add(pad, mast, flag);
  const start = RACE_PATH[0];
  if (start) {
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.08, 2.4),
      new THREE.MeshBasicMaterial({ color: 0xf7f4ec }),
    );
    line.position.set(start.x, 0.05, start.z);
    scene.add(line);
  }
}

function bar(x: number, minZ: number, maxZ: number): Stamp {
  const height = 1.12;
  return {
    x,
    y: height / 2,
    z: (minZ + maxZ) / 2,
    sx: 0.42,
    sy: height,
    sz: maxZ - minZ,
    rotX: 0,
    rotY: 0,
    color: 0xd07a45,
  };
}

function addWater(scene: THREE.Scene, gradient: THREE.Texture): void {
  const water = new THREE.Mesh(
    new THREE.CircleGeometry(70, 28),
    toonMaterial(gradient, 0x5ec8d6),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.42;
  scene.add(water);
}
