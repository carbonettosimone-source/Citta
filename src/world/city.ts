import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { biomeAzimuth, eastTangent, frameQuaternion, northTangent, shift } from './planet';

/**
 * Nucleo urbano attorno all'hub. Coordinate in metri locali:
 * +nord verso il faro, +est verso la menta (l'ovest scende verso lanterne e dune).
 * I lotti già in piazza e le sei case del corallo non si spostano.
 */
const COLAT = 0.2;
const AZ = biomeAzimuth(0);

const NAVY = 0x2c2640;
const INK = 0x241c22;
const AMBER = 0xffb22e;
const WALLS = [0xfff2f6, 0xeef6ff, 0xf4eeff, 0xeefcf8] as const;
const ROOFS = [0xff4d86, 0x7c4dff, 0x22c8ee, 0xff7a3a, 0x2ad4a0] as const;

export const MARKET_PLAZA = shift(COLAT, AZ, 0, 24);
export const BOTTEGHE_PLAZA = shift(COLAT, AZ, 0, -24);
export const SOUTH_PLAZA = shift(COLAT, AZ, -20, 0);
export const GAMES_PLAZA = shift(COLAT, AZ, 11, 24);
export const TERRACE = shift(COLAT, AZ, 26.2, 0);
export const DUNE_GATE = shift(COLAT, AZ, 0, -31);

type Pad = { x: number; y: number; z: number; r2: number };
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

type Home = {
  n: number;
  e: number;
  spin: number;
  sx: number;
  sy: number;
  sz: number;
  hip: boolean;
  wall: number;
  roof: number;
};

const HOMES: readonly Home[] = [
  { n: 17.2, e: -13.55, spin: -Math.PI / 2, sx: 0.86, sy: 0.94, sz: 0.76, hip: true, wall: 0xfff2f6, roof: 0xff4d86 },
  { n: 23.1, e: -13.7, spin: -Math.PI / 2, sx: 0.66, sy: 1.3, sz: 0.72, hip: false, wall: 0xeef6ff, roof: 0x7c4dff },
  { n: 26.15, e: -13.45, spin: -Math.PI / 2, sx: 0.98, sy: 0.8, sz: 0.78, hip: true, wall: 0xeefcf8, roof: 0x22c8ee },
  { n: 11.3, e: -21.4, spin: 0, sx: 0.96, sy: 1.02, sz: 0.88, hip: true, wall: 0xf4eeff, roof: 0xff7a3a },
  { n: -11.1, e: -27.5, spin: Math.PI, sx: 0.78, sy: 1.24, sz: 0.84, hip: false, wall: 0xeef6ff, roof: 0x2ad4a0 },
];

/** Angoli della piazza civica, fuori dagli assi e dai lotti già occupati. */
const CIVIC_COLUMNS: readonly (readonly [number, number])[] = [
  [7.7, 4.5],
  [4.5, 7.7],
  [7.7, -4.5],
  [4.5, -7.7],
  [-7.4, 4.9],
  [-4.5, 7.5],
  [-6.5, -6.6],
  [-5.2, -8.6],
];

export function addCityPads(pads: Pad[]): void {
  const put = (n: number, e: number, r: number) => {
    pads.push({ ...shift(COLAT, AZ, n, e), r2: r * r });
  };
  put(0, 0, 8.5);
  for (let n = -36; n <= -13.2; n += 2.1) put(n, 0, 2.15);
  put(-20, 0, 5.35);
  for (let e = 16.4; e <= 36; e += 2.1) put(0, e, 2.15);
  put(0, 24, 5.5);
  for (let e = -36; e <= -16.4; e += 2.1) put(0, e, 2.15);
  put(0, -24, 5.05);
  for (let n = -8; n <= 16.2; n += 2) put(n, 24, 2.05);
  put(11, 24, 4.65);
  for (let n = 6; n <= 12.2; n += 2) put(n, 18.2, 1.4);
  for (let e = 18.2; e <= 24; e += 1.8) put(14, e, 1.35);
  for (let n = -6; n <= 6; n += 2) put(n, -24, 1.75);
  for (let e = 29.2; e <= 37.2; e += 1.5) put(6.8, e, 0.95);
  for (let e = -37.4; e <= -29.2; e += 1.5) put(-6.6, e, 0.95);
  for (let n = 16.2; n <= 28.4; n += 1.6) put(n, -15.4, 1.02);
  for (let e = -16.2; e <= -10; e += 1.7) put(20, e, 1.45);
  put(26.2, 0, 3.15);
  for (const home of HOMES) {
    const reach = Math.hypot(1.25 * home.sx, 1.15 * home.sz) + 0.3;
    put(home.n, home.e, reach);
  }
  const stalls: readonly (readonly [number, number])[] = [
    [3.55, 20.3],
    [3.55, 27.7],
    [-3.55, 20.3],
    [-3.55, 27.7],
    [8.7, 28.7],
    [13.3, 28.7],
    [3.55, -20.3],
    [3.55, -27.7],
    [-3.55, -20.3],
    [-3.55, -27.7],
  ];
  for (const [n, e] of stalls) put(n, e, 1.7);
}

export function addCity(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const columns: Stamp[] = [];
  const capitals: Stamp[] = [];
  const posts: Stamp[] = [];
  const lamps: Stamp[] = [];
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
  const stalls: Stamp[] = [];
  const awnings: Stamp[] = [];
  const banners: Stamp[] = [];
  const benches: Stamp[] = [];
  const shrines: Stamp[] = [];
  const shrineCaps: Stamp[] = [];
  const pots: Stamp[] = [];
  const leaves: Stamp[] = [];
  const rails: Stamp[] = [];

  const put = (list: Stamp[], p: { x: number; y: number; z: number }, q: THREE.Quaternion, sx: number, sy: number, sz: number, color: number) => {
    list.push({ x: p.x, y: p.y, z: p.z, qx: q.x, qy: q.y, qz: q.z, qw: q.w, sx, sy, sz, color });
  };
  const pose = (n: number, e: number, spin: number) => {
    const p = shift(COLAT, AZ, n, e);
    const q = frameQuaternion(p.x, p.y, p.z, Math.sin(AZ), 0, Math.cos(AZ));
    q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spin));
    return { p, q };
  };
  const lamp = (n: number, e: number) => {
    const at = pose(n, e, 0);
    put(posts, at.p, at.q, 0.58, 0.9, 0.58, NAVY);
    const len = Math.hypot(at.p.x, at.p.y, at.p.z) || 1;
    const h = 2.12;
    lamps.push({
      x: at.p.x + (at.p.x / len) * h,
      y: at.p.y + (at.p.y / len) * h,
      z: at.p.z + (at.p.z / len) * h,
      qx: at.q.x,
      qy: at.q.y,
      qz: at.q.z,
      qw: at.q.w,
      sx: 0.28,
      sy: 0.28,
      sz: 0.28,
      color: AMBER,
    });
    blockers.push({ ...at.p, r: 0.16, h: 2.15 });
  };
  const column = (n: number, e: number, tint: number) => {
    const at = pose(n, e, 0);
    put(columns, at.p, at.q, 1, 1, 1, NAVY);
    put(capitals, at.p, at.q, 1, 1, 1, tint);
    blockers.push({ ...at.p, r: 0.34, h: 3.45 });
  };
  const banner = (n: number, e: number, color: number) => {
    const at = pose(n, e, 0);
    put(posts, at.p, at.q, 0.48, 1.02, 0.48, NAVY);
    put(banners, at.p, at.q, 1, 1, 1, color);
    blockers.push({ ...at.p, r: 0.18, h: 2.25 });
  };
  const planter = (n: number, e: number, color: number) => {
    const at = pose(n, e, 0);
    put(pots, at.p, at.q, 0.85, 0.85, 0.85, NAVY);
    put(leaves, at.p, at.q, 0.8, 0.8, 0.8, color);
    blockers.push({ ...at.p, r: 0.24, h: 0.7 });
  };

  for (let i = 0; i < CIVIC_COLUMNS.length; i += 1) {
    const spot = CIVIC_COLUMNS[i];
    if (!spot) continue;
    column(spot[0], spot[1], ROOFS[i % ROOFS.length] ?? AMBER);
  }
  for (const spot of [
    [-16.4, 3.55],
    [-23.6, 3.55],
    [-16.4, -3.55],
    [-23.6, -3.55],
  ] as const) {
    column(spot[0], spot[1], 0x22c8ee);
  }

  banner(8.15, 3.45, 0xff4d86);
  banner(8.15, -3.45, 0x22c8ee);
  banner(-8.15, 3.45, 0x7c4dff);
  banner(-8.15, -3.45, 0xff7a3a);

  for (const n of [-18, -24, -30.5, -35]) {
    lamp(n, 2.5);
    lamp(n, -2.5);
  }
  for (const e of [20.2, 29.4, 34.6, -20.2, -28.6, -34.8]) {
    lamp(2.5, e);
    lamp(-2.5, e);
  }
  for (const n of [-5.2, 5.1, 16.1]) {
    lamp(n, 21.35);
    lamp(n, 26.85);
  }
  for (const n of [17.6, 22.4, 26.6]) lamp(n, -16.62);

  for (const home of HOMES) {
    const { p, q } = pose(home.n, home.e, home.spin);
    put(walls, p, q, home.sx, home.sy, home.sz, home.wall);
    put(home.hip ? hips : roofs, p, q, home.sx, home.sy, home.sz, home.roof);
    put(doors, p, q, home.sx, home.sy, home.sz, INK);
    put(windows, p, q, home.sx, home.sy, home.sz, 0x3aa0ff);
    put(frames, p, q, home.sx, home.sy, home.sz, home.roof);
    put(lintels, p, q, home.sx, home.sy, home.sz, home.roof);
    put(eaves, p, q, home.sx, home.sy, home.sz, home.roof);
    put(steps, p, q, home.sx, home.sy, home.sz, 0xc8c4dc);
    put(plaques, p, q, home.sx, home.sy, home.sz, 0xffe14a);
    if (home.hip) put(porches, p, q, home.sx, home.sy, home.sz, AMBER);
    else put(chimneys, p, q, home.sx, home.sy, home.sz, 0xe04848);
    blockers.push({ ...p, r: Math.hypot(1.25 * home.sx, 1.15 * home.sz) + 0.04, h: 3.4 * home.sy });
  }

  const stallAt = (n: number, e: number, spin: number, cloth: number) => {
    const at = pose(n, e, spin);
    put(stalls, at.p, at.q, 1, 1, 1, WALLS[(Math.abs(Math.round(n + e)) ) % WALLS.length] ?? 0xfff2f6);
    put(awnings, at.p, at.q, 1, 1, 1, cloth);
    blockers.push({ ...at.p, r: 1.16, h: 1.7 });
  };
  stallAt(3.55, 20.3, 0, 0xff4d86);
  stallAt(3.55, 27.7, 0, 0x22c8ee);
  stallAt(-3.55, 20.3, Math.PI, 0xff7a3a);
  stallAt(-3.55, 27.7, Math.PI, 0x7c4dff);
  stallAt(8.7, 28.7, -Math.PI / 2, 0xff4d86);
  stallAt(13.3, 28.7, -Math.PI / 2, 0xffc43a);
  stallAt(3.55, -20.3, 0, 0x2ad4a0);
  stallAt(3.55, -27.7, 0, 0x7c4dff);
  stallAt(-3.55, -20.3, Math.PI, 0xff4d86);
  stallAt(-3.55, -27.7, Math.PI, 0x22c8ee);

  banner(15.85, 22.15, 0xff4d86);
  banner(15.85, 25.85, 0x22c8ee);
  const benchAt = (n: number, e: number, spin: number) => {
    const at = pose(n, e, spin);
    put(benches, at.p, at.q, 1, 1, 1, 0x6d8cff);
    blockers.push({ ...at.p, r: 0.5, h: 0.62 });
  };
  benchAt(-20, 4.15, Math.PI / 2);
  benchAt(-20, -4.15, -Math.PI / 2);
  benchAt(12.55, 21.85, Math.PI / 2);
  benchAt(9.45, 21.85, -Math.PI / 2);

  const shrineAt = (n: number, e: number, color: number) => {
    const at = pose(n, e, 0);
    put(shrines, at.p, at.q, 1, 1, 1, NAVY);
    put(shrineCaps, at.p, at.q, 1, 1, 1, color);
    blockers.push({ ...at.p, r: 0.4, h: 1.55 });
  };
  shrineAt(28.35, -15.4, 0xff4d86);
  shrineAt(6.8, 37.15, 0xffc43a);
  shrineAt(-6.6, -37.35, 0x7c4dff);

  planter(2.35, 22.4, 0xff4d86);
  planter(-2.35, 25.6, 0x7c4dff);
  planter(2.35, -22.4, 0x22c8ee);
  planter(-2.35, -25.6, 0xff7a3a);
  planter(-17.2, 4.7, 0xff4d86);
  planter(-22.8, -4.7, 0x22c8ee);

  for (const rail of [
    [25.15, 2.15],
    [25.15, -2.15],
    [26.2, 2.35],
    [26.2, -2.35],
    [27.35, 2.05],
    [27.35, -2.05],
  ] as const) {
    const at = pose(rail[0], rail[1], 0);
    put(rails, at.p, at.q, 1, 1, 1, NAVY);
    blockers.push({ ...at.p, r: 0.16, h: 0.95 });
  }

  arch(scene, gradient, blockers, -27.2, 0, 'north', 0x7c4dff);
  arch(scene, gradient, blockers, 0, 17.5, 'east', 0xff4d86);
  arch(scene, gradient, blockers, 0, -31, 'east', 0x22c8ee);
  hoop(scene, -20, 0, 3.5, 0xff4d86);
  hoop(scene, 0, 24, 3.7, 0x22c8ee);
  hoop(scene, 11, 24, 3.15, 0xffc43a);
  hoop(scene, 0, -24, 3.35, 0x7c4dff);

  const paint = (geo: THREE.BufferGeometry, list: readonly Stamp[], flat = false) => {
    if (list.length === 0) return;
    const mesh = new THREE.InstancedMesh(geo, flat ? new THREE.MeshBasicMaterial({ color: 0xffffff }) : toonInstances(gradient), list.length);
    mesh.frustumCulled = false;
    for (let i = 0; i < list.length; i += 1) {
      const s = list[i];
      if (!s) continue;
      setInstanceQuat(mesh, i, s.x, s.y, s.z, s.sx, s.sy, s.sz, s.qx, s.qy, s.qz, s.qw, s.color);
    }
    commit(mesh);
    scene.add(mesh);
  };

  paint(cylinder(0.26, 0.34, 3.3, 1.65), columns);
  paint(capital(), capitals);
  paint(cylinder(0.15, 0.18, 2.25, 1.12), posts);
  paint(bulb(), lamps, true);
  paint(box(2.5, 2.3, 2.3, 1.15), walls);
  paint(coneRoof(1.85, 1.15, 2.85), roofs);
  paint(coneRoof(2.05, 0.7, 2.55), hips);
  paint(door(), doors);
  paint(windowsGeo(), windows);
  paint(frameGeo(), frames);
  paint(lintel(), lintels);
  paint(eave(), eaves);
  paint(step(), steps);
  paint(chimney(), chimneys);
  paint(porchGeo(), porches, true);
  paint(plaqueGeo(), plaques, true);
  paint(box(1.9, 1.15, 1.25, 0.58), stalls);
  paint(box(2.15, 0.12, 1.55, 1.28), awnings, true);
  paint(bannerCloth(), banners);
  paint(benchGeo(), benches);
  paint(cylinder(0.28, 0.36, 1.15, 0.58), shrines);
  paint(coneRoof(0.42, 0.55, 1.35), shrineCaps);
  paint(cylinder(0.28, 0.34, 0.42, 0.22), pots);
  paint(leaf(), leaves, true);
  paint(cylinder(0.1, 0.12, 0.85, 0.42), rails);
}

function arch(
  scene: THREE.Scene,
  gradient: THREE.Texture,
  blockers: Blocker[],
  n: number,
  e: number,
  facing: 'north' | 'east',
  color: number,
): void {
  const at = shift(COLAT, AZ, n, e);
  const face = facing === 'north' ? northTangent(COLAT, AZ) : eastTangent(AZ);
  const gate = new THREE.Mesh(new THREE.TorusGeometry(2.12, 0.14, 8, 18), toonMaterial(gradient, color));
  gate.position.set(at.x, at.y, at.z);
  gate.quaternion.copy(frameQuaternion(at.x, at.y, at.z, face.x, face.y, face.z));
  const up = new THREE.Vector3(at.x, at.y, at.z).normalize();
  gate.position.addScaledVector(up, 2.12);
  const key = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe14a }));
  key.position.y = 2.05;
  const cloth = bannerGeo();
  const left = new THREE.Mesh(cloth, toonMaterial(gradient, 0xff4d86));
  left.position.set(-0.55, 1.15, 0.02);
  const right = new THREE.Mesh(cloth, toonMaterial(gradient, 0x22c8ee));
  right.position.set(0.55, 1.05, 0.02);
  gate.add(key, left, right);
  scene.add(gate);
  const leg = 1.92;
  if (facing === 'north') {
    blockers.push({ ...shift(COLAT, AZ, n, e - leg), r: 0.36, h: 2.3 });
    blockers.push({ ...shift(COLAT, AZ, n, e + leg), r: 0.36, h: 2.3 });
  } else {
    blockers.push({ ...shift(COLAT, AZ, n - leg, e), r: 0.36, h: 2.3 });
    blockers.push({ ...shift(COLAT, AZ, n + leg, e), r: 0.36, h: 2.3 });
  }
}

function hoop(scene: THREE.Scene, n: number, e: number, radius: number, color: number): void {
  const at = shift(COLAT, AZ, n, e);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.08, 5, 18),
    new THREE.MeshBasicMaterial({ color }),
  );
  ring.position.set(at.x, at.y, at.z);
  ring.quaternion.copy(frameQuaternion(at.x, at.y, at.z, 1, 0, 0));
  const up = new THREE.Vector3(at.x, at.y, at.z).normalize();
  ring.position.addScaledVector(up, 0.1);
  scene.add(ring);
}

function box(w: number, h: number, d: number, lift: number): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(w, h, d);
  geo.translate(0, lift, 0);
  return geo;
}

function cylinder(rt: number, rb: number, h: number, lift: number): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(rt, rb, h, 6);
  geo.translate(0, lift, 0);
  return geo;
}

function coneRoof(radius: number, height: number, lift: number): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(radius, height, 4);
  geo.translate(0, lift, 0);
  return geo;
}

function capital(): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(0.5, 0.38, 6);
  geo.translate(0, 3.5, 0);
  return geo;
}

function bulb(): THREE.SphereGeometry {
  return new THREE.SphereGeometry(1, 7, 6);
}

function door(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.55, 0.85, 0.08);
  geo.translate(0, 0.46, 1.18);
  return geo;
}

function eave(): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(1.95, 1.95, 0.12, 6);
  geo.translate(0, 2.32, 0);
  return geo;
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

function chimney(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.28, 0.62, 0.28);
  geo.translate(0.62, 3.2, -0.15);
  return geo;
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

function bannerCloth(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.48, 0.78, 0.04);
  geo.translate(0, 1.7, 0.16);
  return geo;
}

function bannerGeo(): THREE.BoxGeometry {
  const geo = new THREE.BoxGeometry(0.36, 0.86, 0.04);
  geo.translate(0, 0, 0);
  return geo;
}

function leaf(): THREE.SphereGeometry {
  const geo = new THREE.SphereGeometry(0.32, 6, 5);
  geo.translate(0, 0.62, 0);
  return geo;
}

function benchGeo(): THREE.BufferGeometry {
  const seat = new THREE.BoxGeometry(1.15, 0.08, 0.36);
  seat.translate(0, 0.42, 0);
  const back = new THREE.BoxGeometry(1.15, 0.36, 0.06);
  back.translate(0, 0.62, -0.16);
  return mergePair(seat, back);
}

function windowsGeo(): THREE.BufferGeometry {
  const geo = new THREE.BoxGeometry(0.36, 0.4, 0.06);
  const left = geo.clone();
  left.translate(-0.58, 1.38, 1.2);
  const right = geo.clone();
  right.translate(0.58, 1.38, 1.2);
  return mergePair(left, right);
}

function frameGeo(): THREE.BufferGeometry {
  const geo = new THREE.BoxGeometry(0.5, 0.54, 0.04);
  const left = geo.clone();
  left.translate(-0.58, 1.38, 1.16);
  const right = geo.clone();
  right.translate(0.58, 1.38, 1.16);
  return mergePair(left, right);
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
