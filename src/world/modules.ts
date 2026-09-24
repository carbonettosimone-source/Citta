import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { WORLD_SEED, unit } from './hash';
import {
  BOARD_E,
  BOARD_H,
  BOARD_N,
  EXIT_E,
  EXIT_N,
  HUB_AZ,
  HUB_COLAT,
  HUB_MODULES,
  PREP_E,
  PREP_H,
  PREP_N,
  Q2_E,
  Q2_H,
  Q2_LOBE_DIR,
  Q2_N,
  SPAWN_E,
  SPAWN_N,
  VENDOR_E,
  VENDOR_H,
  VENDOR_N,
  deckHeight,
  lifted,
  pathHalf,
  tangentVector,
} from './intensity';
import { frameQuaternion, quatAxisY, shift } from './planet';
import { seat } from './relief';

const STONE = 0xd7d2ec;
const INK = 0x2a3144;
const GOLD = 0xf0a03a;
const CYAN = 0x3ad4ff;

export function addHubModules(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const stone = toonMaterial(gradient, STONE);
  stone.side = THREE.DoubleSide;
  addFlow(scene, stone);
  addInlay(scene, 5.6, -23.6, 0.4, 0.31, GOLD);
  addApproach(scene);
  addPad(scene, stone, BOARD_N, BOARD_E, 2.55, 2.25);
  addPad(scene, stone, VENDOR_N, VENDOR_E, 2.25, 2.35);
  addPad(scene, stone, PREP_N, PREP_E, 2.45, 2.15);
  addDisk(scene, stone, Q2_N, Q2_E, 2.55, Q2_H);
  addLobe(scene, stone);
  addRamps(scene, stone);
  addBoard(scene, gradient, blockers);
  addVendor(scene, gradient, blockers);
  addPrep(scene, gradient, blockers);
  addRead(scene, gradient, blockers);
  addExit(scene, blockers);
  addSpawn(scene);
  addChevrons(scene);
  addFillers(scene, gradient, blockers);
}

function addFlow(scene: THREE.Scene, material: THREE.Material): void {
  const samples: { n: number; e: number; h: number; half: number }[] = [];
  for (let north = 11.7; north >= -26.5; north -= 1.05) {
    samples.push({ n: north, e: 0, h: 0.22, half: Math.max(1.4, pathHalf(north) - 0.12) });
  }
  scene.add(stripMesh(samples, material));
}

function addInlay(
  scene: THREE.Scene,
  n0: number,
  n1: number,
  half: number,
  h: number,
  color: number,
): void {
  const samples: { n: number; e: number; h: number; half: number }[] = [];
  const step = n0 > n1 ? -1.15 : 1.15;
  for (let north = n0; step < 0 ? north >= n1 : north <= n1; north += step) {
    samples.push({ n: north, e: 0, h, half });
  }
  const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
  scene.add(stripMesh(samples, mat));
}

function addApproach(scene: THREE.Scene): void {
  const samples: { n: number; e: number; h: number; half: number }[] = [];
  for (let i = 0; i <= 7; i += 1) {
    const t = i / 7;
    samples.push({
      n: 6.2 + (2.5 - 6.2) * t,
      e: 0.35 + (4.2 - 0.35) * t,
      h: 0.3,
      half: 0.34,
    });
  }
  const mat = new THREE.MeshBasicMaterial({ color: CYAN, side: THREE.DoubleSide });
  scene.add(stripMesh(samples, mat));
}

function addRamps(scene: THREE.Scene, material: THREE.Material): void {
  const climbs: readonly { n0: number; e0: number; n1: number; e1: number }[] = [
    { n0: 2.5, e0: 4.45, n1: -6.5, e1: 6.85 },
    { n0: -2.1, e0: -4.65, n1: -4.9, e1: -11.05 },
    { n0: -8.8, e0: 4.65, n1: -13.1, e1: 8.35 },
    { n0: 9.5, e0: -4.7, n1: 3.1, e1: -6.9 },
    { n0: 3.1, e0: -6.9, n1: 5.35, e1: -9.55 },
  ];
  for (const climb of climbs) scene.add(rampMesh(climb.n0, climb.e0, climb.n1, climb.e1, 1.35, material));
}

function addPad(
  scene: THREE.Scene,
  material: THREE.Material,
  cn: number,
  ce: number,
  hn: number,
  he: number,
): void {
  const geo = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const steps = 4;
  const grid: number[] = [];
  for (let j = 0; j <= steps; j += 1) {
    for (let i = 0; i <= steps; i += 1) {
      const n = cn + ((i / steps) * 2 - 1) * hn;
      const e = ce + ((j / steps) * 2 - 1) * he;
      const h = Math.max(deckHeight(n, e), 0.22);
      const p = lifted(n, e, h);
      grid.push(positions.length / 3);
      positions.push(p.x, p.y, p.z);
      const len = Math.hypot(p.x, p.y, p.z) || 1;
      normals.push(p.x / len, p.y / len, p.z / len);
    }
  }
  const row = steps + 1;
  for (let j = 0; j < steps; j += 1) {
    for (let i = 0; i < steps; i += 1) {
      const a = grid[j * row + i] ?? 0;
      const b = grid[j * row + i + 1] ?? 0;
      const c = grid[(j + 1) * row + i] ?? 0;
      const d = grid[(j + 1) * row + i + 1] ?? 0;
      indices.push(a, c, b, b, c, d);
    }
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  const mesh = new THREE.Mesh(geo, material);
  mesh.frustumCulled = false;
  scene.add(mesh);
}

function addDisk(scene: THREE.Scene, material: THREE.Material, cn: number, ce: number, radius: number, h: number): void {
  const geo = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const center = lifted(cn, ce, h);
  positions.push(center.x, center.y, center.z);
  const cl = Math.hypot(center.x, center.y, center.z) || 1;
  normals.push(center.x / cl, center.y / cl, center.z / cl);
  const segs = 14;
  for (let i = 0; i <= segs; i += 1) {
    const ang = (i / segs) * Math.PI * 2;
    const p = lifted(cn + Math.cos(ang) * radius, ce + Math.sin(ang) * radius, h);
    positions.push(p.x, p.y, p.z);
    const len = Math.hypot(p.x, p.y, p.z) || 1;
    normals.push(p.x / len, p.y / len, p.z / len);
    if (i > 0) indices.push(0, i, i + 1);
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  const mesh = new THREE.Mesh(geo, material);
  mesh.frustumCulled = false;
  scene.add(mesh);
}

function addLobe(scene: THREE.Scene, material: THREE.Material): void {
  const n1 = Q2_N + Q2_LOBE_DIR.north * 3.7;
  const e1 = Q2_E + Q2_LOBE_DIR.east * 3.7;
  scene.add(rampMesh(Q2_N, Q2_E, n1, e1, 0.78, material, Q2_H));
  const gold = new THREE.MeshBasicMaterial({ color: GOLD, side: THREE.DoubleSide });
  scene.add(rampMesh(Q2_N + Q2_LOBE_DIR.north * 1.2, Q2_E + Q2_LOBE_DIR.east * 1.2, n1, e1, 0.42, gold, Q2_H + 0.06));
}

function addBoard(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const face = tangentVector(BOARD_N, BOARD_E, 2.5 - BOARD_N, 4.45 - BOARD_E);
  const backN = BOARD_N - (2.5 - BOARD_N) * 0.12;
  const backE = BOARD_E - (4.45 - BOARD_E) * 0.12;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.15, 0.16), toonMaterial(gradient, INK));
  frame.geometry.translate(0, 1.35, -0.55);
  stand(frame, backN, backE, BOARD_H, face);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 3.4, 0.55), toonMaterial(gradient, 0x1b2436));
  fin.geometry.translate(1.15, 1.7, -0.7);
  stand(fin, backN, backE, BOARD_H, face);
  scene.add(frame, fin);
  const at = lifted(backN, backE, BOARD_H);
  blockers.push({ x: at.x, y: at.y, z: at.z, r: 0.85, h: 2.4 });
}

function addVendor(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const face = tangentVector(VENDOR_N, VENDOR_E, -2.1 - VENDOR_N, -4.65 - VENDOR_E);
  const counter = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.15, 0.7), toonMaterial(gradient, INK));
  counter.geometry.translate(0, 0.58, -0.35);
  stand(counter, VENDOR_N, VENDOR_E, VENDOR_H, face);
  const screen = new THREE.Mesh(
    new THREE.BoxGeometry(1.15, 0.72, 0.06),
    new THREE.MeshBasicMaterial({ color: 0x7dffc4 }),
  );
  screen.geometry.translate(0, 1.45, -0.15);
  stand(screen, VENDOR_N, VENDOR_E, VENDOR_H, face);
  scene.add(counter, screen);
  const at = lifted(VENDOR_N, VENDOR_E, VENDOR_H);
  blockers.push({ x: at.x, y: at.y, z: at.z, r: 0.7, h: 1.7 });
}

function addPrep(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const face = tangentVector(PREP_N, PREP_E, -8.8 - PREP_N, 4.65 - PREP_E);
  const postGeo = new THREE.BoxGeometry(0.22, 2.5, 0.22);
  postGeo.translate(0, 1.25, 0);
  const left = new THREE.Mesh(postGeo, toonMaterial(gradient, INK));
  const right = new THREE.Mesh(postGeo.clone(), toonMaterial(gradient, INK));
  left.geometry.translate(-1.15, 0, 0);
  right.geometry.translate(1.15, 0, 0);
  const truss = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.16, 0.16), toonMaterial(gradient, 0xe0b15a));
  truss.geometry.translate(0, 2.45, 0);
  stand(left, PREP_N, PREP_E, PREP_H, face);
  stand(right, PREP_N, PREP_E, PREP_H, face);
  stand(truss, PREP_N, PREP_E, PREP_H, face);
  scene.add(left, right, truss);
  const at = lifted(PREP_N, PREP_E, PREP_H);
  blockers.push({ ...offsetLocal(at, face, -1.15, 0), r: 0.28, h: 2.5 });
  blockers.push({ ...offsetLocal(at, face, 1.15, 0), r: 0.28, h: 2.5 });
}

function addRead(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const face = tangentVector(Q2_N, Q2_E, 0, -1);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.1, 0.7), toonMaterial(gradient, 0xfff4ea));
  fin.geometry.translate(0, 1.15, 0);
  const westN = Q2_N;
  const westE = Q2_E - 2.05;
  stand(fin, westN, westE, Q2_H, face);
  scene.add(fin);
  const at = lifted(westN, westE, Q2_H);
  blockers.push({ x: at.x, y: at.y, z: at.z, r: 0.36, h: 2.2 });
}

function addExit(scene: THREE.Scene, blockers: Blocker[]): void {
  const at = lifted(EXIT_N, EXIT_E, 0.28);
  const ringGeo = new THREE.TorusGeometry(2.15, 0.1, 6, 22);
  ringGeo.rotateX(Math.PI / 2);
  const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: GOLD }));
  ring.position.set(at.x, at.y, at.z);
  ring.quaternion.copy(frameQuaternion(at.x, at.y, at.z, 1, 0, 0));
  const pin = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.1, 1.7, 6),
    new THREE.MeshBasicMaterial({ color: GOLD }),
  );
  const pinAt = lifted(EXIT_N, EXIT_E, 1.15);
  pin.position.set(pinAt.x, pinAt.y, pinAt.z);
  pin.quaternion.copy(frameQuaternion(pinAt.x, pinAt.y, pinAt.z, 1, 0, 0));
  scene.add(ring, pin);
  blockers.push({ x: at.x, y: at.y, z: at.z, r: 0.16, h: 1.7 });
}

function addSpawn(scene: THREE.Scene): void {
  const at = lifted(SPAWN_N, SPAWN_E, 0.28);
  const geo = new THREE.TorusGeometry(0.85, 0.06, 6, 18);
  geo.rotateX(Math.PI / 2);
  const ring = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xf4f7ff }));
  ring.position.set(at.x, at.y, at.z);
  ring.quaternion.copy(frameQuaternion(at.x, at.y, at.z, 1, 0, 0));
  scene.add(ring);
}

function addChevrons(scene: THREE.Scene): void {
  const spots: number[] = [];
  for (let north = 4.2; north >= -22.4; north -= 3.15) spots.push(north);
  const geo = new THREE.ConeGeometry(0.42, 1.15, 4);
  geo.translate(0, 0.15, 0);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: GOLD }), spots.length);
  mesh.frustumCulled = false;
  spots.forEach((north, index) => {
    const dir = tangentVector(north, 0, -1, 0);
    const q = quatAxisY(dir.x, dir.y, dir.z, 0, 1, 0);
    const p = lifted(north, 0, 0.42);
    setInstanceQuat(mesh, index, p.x, p.y, p.z, 1, 1, 1, q.x, q.y, q.z, q.w, GOLD);
  });
  commit(mesh);
  scene.add(mesh);

  const big = new THREE.Mesh(geo.clone().scale(2.1, 2.1, 2.1), new THREE.MeshBasicMaterial({ color: GOLD }));
  const exitDir = tangentVector(EXIT_N, EXIT_E, -1, 0);
  const q = quatAxisY(exitDir.x, exitDir.y, exitDir.z, 0, 1, 0);
  const p = lifted(EXIT_N + 1.1, EXIT_E, 0.5);
  big.position.set(p.x, p.y, p.z);
  big.quaternion.copy(q);
  scene.add(big);
}

function addFillers(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const fillers = HUB_MODULES.filter((mod) => mod.tag === 'filler');
  if (fillers.length === 0) return;
  const bodies = new THREE.InstancedMesh(box(1.35, 1.15, 1.35, 0.58), toonInstances(gradient), fillers.length);
  const caps = new THREE.InstancedMesh(box(1.05, 0.12, 1.05, 1.2), toonInstances(gradient), fillers.length);
  bodies.frustumCulled = false;
  caps.frustumCulled = false;
  fillers.forEach((mod, index) => {
    const raw = shift(HUB_COLAT, HUB_AZ, mod.north, mod.east);
    const p = seat(raw.x, raw.y, raw.z);
    const yaw = unit(WORLD_SEED, mod.slot, 3) * Math.PI * 2;
    const face = tangentVector(mod.north, mod.east, Math.cos(yaw), Math.sin(yaw));
    const q = frameQuaternion(p.x, p.y, p.z, face.x, face.y, face.z);
    const edge = Math.hypot(mod.north, mod.east) >= 20;
    const s = (edge ? 0.72 : 1) * (0.86 + unit(WORLD_SEED, mod.slot, 8) * 0.28);
    setInstanceQuat(bodies, index, p.x, p.y, p.z, s, s, s, q.x, q.y, q.z, q.w, edge ? 0x4a556c : 0x343e56);
    setInstanceQuat(caps, index, p.x, p.y, p.z, s, s, s, q.x, q.y, q.z, q.w, 0x8fd0ff);
    blockers.push({ x: raw.x, y: raw.y, z: raw.z, r: 0.78 * s, h: 1.35 * s });
  });
  commit(bodies);
  commit(caps);
  scene.add(bodies, caps);
}

function stand(
  mesh: THREE.Mesh,
  north: number,
  east: number,
  height: number,
  face: { x: number; y: number; z: number },
): void {
  const p = lifted(north, east, height);
  mesh.position.set(p.x, p.y, p.z);
  mesh.quaternion.copy(frameQuaternion(p.x, p.y, p.z, face.x, face.y, face.z));
}

function offsetLocal(
  at: { x: number; y: number; z: number },
  face: { x: number; y: number; z: number },
  rightM: number,
  fwdM: number,
): { x: number; y: number; z: number } {
  const q = frameQuaternion(at.x, at.y, at.z, face.x, face.y, face.z);
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
  const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
  return {
    x: at.x + right.x * rightM + fwd.x * fwdM,
    y: at.y + right.y * rightM + fwd.y * fwdM,
    z: at.z + right.z * rightM + fwd.z * fwdM,
  };
}

function rampMesh(
  n0: number,
  e0: number,
  n1: number,
  e1: number,
  half: number,
  material: THREE.Material,
  fixed?: number,
): THREE.Mesh {
  const samples: { n: number; e: number; h: number; half: number }[] = [];
  const len = Math.hypot(n1 - n0, e1 - e0);
  const steps = Math.max(2, Math.ceil(len / 0.85));
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const n = n0 + (n1 - n0) * t;
    const e = e0 + (e1 - e0) * t;
    samples.push({ n, e, h: fixed ?? Math.max(deckHeight(n, e), 0.22), half });
  }
  return stripMesh(samples, material);
}

function stripMesh(samples: readonly { n: number; e: number; h: number; half: number }[], material: THREE.Material): THREE.Mesh {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  samples.forEach((sample, index) => {
    const prev = samples[Math.max(0, index - 1)] ?? sample;
    const next = samples[Math.min(samples.length - 1, index + 1)] ?? sample;
    const dn = next.n - prev.n;
    const de = next.e - prev.e;
    const len = Math.hypot(dn, de) || 1;
    const pn = -de / len;
    const pe = dn / len;
    const left = lifted(sample.n + pn * sample.half, sample.e + pe * sample.half, sample.h);
    const right = lifted(sample.n - pn * sample.half, sample.e - pe * sample.half, sample.h);
    pushVert(positions, normals, left);
    pushVert(positions, normals, right);
    if (index > 0) {
      const a = (index - 1) * 2;
      indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  const mesh = new THREE.Mesh(geo, material);
  mesh.frustumCulled = false;
  return mesh;
}

function pushVert(positions: number[], normals: number[], p: { x: number; y: number; z: number }): void {
  positions.push(p.x, p.y, p.z);
  const len = Math.hypot(p.x, p.y, p.z) || 1;
  normals.push(p.x / len, p.y / len, p.z / len);
}

function box(w: number, h: number, d: number, lift: number): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(w, h, d);
  geo.translate(0, lift, 0);
  return geo;
}
