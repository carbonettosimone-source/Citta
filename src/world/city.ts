import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { biomeAzimuth, eastTangent, frameQuaternion, northTangent, shift } from './planet';

/**
 * Pianta ortogonale. Vedi PLAN.md.
 * Modulo 16 m. Cardo e = 0 (nord = faro). Decumano n = 0 (est = menta).
 * I nodi stanno sugli incroci. I vicoli stanno nei blocchi, sempre nord-sud.
 */
const COLAT = 0.2;
const AZ = biomeAzimuth(0);

export const PLAN_MODULE = 16;

const NAVY = 0x2c2640;
const INK = 0x241c22;
const AMBER = 0xffb22e;
const SETBACK = 5.2;
const BAY = 10;
const HOUSE_SX = 0.88;
const HOUSE_SZ = 0.8;

export const MARKET_PLAZA = shift(COLAT, AZ, 0, PLAN_MODULE);
export const BOTTEGHE_PLAZA = shift(COLAT, AZ, 0, -PLAN_MODULE);
export const GAMES_PLAZA = shift(COLAT, AZ, PLAN_MODULE, PLAN_MODULE);
export const SOUTH_PLAZA = shift(COLAT, AZ, -PLAN_MODULE * 2, 0);
export const EAST_GATE = shift(COLAT, AZ, 0, PLAN_MODULE * 2);
export const DUNE_GATE = shift(COLAT, AZ, 0, -PLAN_MODULE * 2);
export const TERRACE = shift(COLAT, AZ, 26, 0);

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

/** Due facciate per blocco interno, più una fila esterna oltre ogni strada da 16 m. */
function planHomes(): Home[] {
  const list: Home[] = [];
  for (const sn of [1, -1] as const) {
    for (const se of [1, -1] as const) {
      const wall = sn > 0 ? 0xfff2f6 : 0xeef6ff;
      const roof = se > 0 ? 0xff4d86 : 0x7c4dff;
      list.push({
        n: sn * SETBACK,
        e: se * BAY,
        spin: sn > 0 ? 0 : Math.PI,
        sx: HOUSE_SX,
        sy: 1,
        sz: HOUSE_SZ,
        hip: true,
        wall,
        roof,
      });
      list.push({
        n: sn * BAY,
        e: se * SETBACK,
        spin: se > 0 ? -Math.PI / 2 : Math.PI / 2,
        sx: HOUSE_SX,
        sy: 1,
        sz: HOUSE_SZ,
        hip: false,
        wall,
        roof,
      });
    }
  }
  const outer: readonly { n: number; e: number; spin: number; roof: number; sy: number }[] = [
    { n: 20.8, e: 8, spin: 0, roof: 0x22c8ee, sy: 1.16 },
    { n: 20.8, e: -8, spin: 0, roof: 0x22c8ee, sy: 1.16 },
    { n: -20.8, e: 8, spin: Math.PI, roof: 0xff7a3a, sy: 1 },
    { n: -20.8, e: -8, spin: Math.PI, roof: 0xff7a3a, sy: 1 },
    { n: 8, e: 21.2, spin: -Math.PI / 2, roof: 0xff4d86, sy: 1 },
    { n: -8, e: 21.2, spin: -Math.PI / 2, roof: 0xff4d86, sy: 1 },
    { n: 8, e: -21.2, spin: Math.PI / 2, roof: 0x7c4dff, sy: 1 },
    { n: -8, e: -21.2, spin: Math.PI / 2, roof: 0x7c4dff, sy: 1 },
  ];
  for (const item of outer) {
    list.push({
      n: item.n,
      e: item.e,
      spin: item.spin,
      sx: HOUSE_SX,
      sy: item.sy,
      sz: HOUSE_SZ,
      hip: true,
      wall: 0xf4eeff,
      roof: item.roof,
    });
  }
  return list;
}

const HOMES = planHomes();

/** Bancarelle agli angoli dei nodi, fuori dagli assi. */
const STALLS: readonly { n: number; e: number; spin: number; cloth: number }[] = [
  { n: 5.4, e: 13.6, spin: 0, cloth: 0xff4d86 },
  { n: -5.4, e: 13.6, spin: Math.PI, cloth: 0x22c8ee },
  { n: 5.4, e: 19.6, spin: 0, cloth: 0xffc43a },
  { n: -5.4, e: 19.6, spin: Math.PI, cloth: 0x7c4dff },
  { n: 5.4, e: -13.6, spin: 0, cloth: 0x2ad4a0 },
  { n: -5.4, e: -13.6, spin: Math.PI, cloth: 0xff4d86 },
  { n: 5.4, e: -19.6, spin: 0, cloth: 0x7c4dff },
  { n: -5.4, e: -19.6, spin: Math.PI, cloth: 0x22c8ee },
  { n: 12, e: 22, spin: -Math.PI / 2, cloth: 0xff4d86 },
  { n: 22, e: 12, spin: Math.PI, cloth: 0xffc43a },
  { n: 22, e: 22, spin: -Math.PI / 2, cloth: 0x7c4dff },
];

export function addCityPads(pads: Pad[]): void {
  const put = (n: number, e: number, r: number) => {
    pads.push({ ...shift(COLAT, AZ, n, e), r2: r * r });
  };
  const run = (n0: number, n1: number, e0: number, e1: number, r: number, step: number) => {
    if (n0 === n1) {
      for (let e = e0; e <= e1; e += step) put(n0, e, r);
      return;
    }
    for (let n = n0; n <= n1; n += step) put(n, e0, r);
  };
  put(0, 0, 7.5);
  put(0, PLAN_MODULE, 5);
  put(0, -PLAN_MODULE, 5);
  put(PLAN_MODULE, 0, 5);
  put(PLAN_MODULE, PLAN_MODULE, 5);
  put(26, 0, 3.2);
  run(-40, 28, 0, 0, 3, 2.2);
  run(0, 0, -40, 40, 3, 2.2);
  run(PLAN_MODULE, PLAN_MODULE, -24, 24, 2, 2);
  run(-PLAN_MODULE, -PLAN_MODULE, -24, 24, 2, 2);
  run(-24, 24, PLAN_MODULE, PLAN_MODULE, 2, 2);
  run(-24, 24, -PLAN_MODULE, -PLAN_MODULE, 2, 2);
  for (const sn of [1, -1]) {
    for (const se of [1, -1]) {
      const n0 = sn > 0 ? 7.4 : -13.2;
      const n1 = sn > 0 ? 13.2 : -7.4;
      for (let n = n0; n <= n1; n += 1.4) put(n, se * 8, 0.85);
    }
  }
  for (const home of HOMES) put(home.n, home.e, 1.7);
  for (const stall of STALLS) put(stall.n, stall.e, 1.55);
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
    put(posts, at.p, at.q, 0.55, 0.9, 0.55, NAVY);
    const len = Math.hypot(at.p.x, at.p.y, at.p.z) || 1;
    const h = 2.1;
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

  const columnAt: readonly (readonly [number, number])[] = [
    [6, 2.6],
    [6, -2.6],
    [-6, 2.6],
    [-6, -2.6],
    [2.6, 6],
    [2.6, -6],
    [-2.6, 6],
    [-2.6, -6],
  ];
  const caps = [0xff4d86, 0x22c8ee, 0x7c4dff, 0xffc43a] as const;
  columnAt.forEach(([n, e], index) => {
    const at = pose(n, e, 0);
    put(columns, at.p, at.q, 1, 1, 1, NAVY);
    put(capitals, at.p, at.q, 1, 1, 1, caps[index % caps.length] ?? AMBER);
    blockers.push({ ...at.p, r: 0.34, h: 3.45 });
  });

  const crossings: readonly (readonly [number, number])[] = [
    [0, 16],
    [0, -16],
    [0, 32],
    [0, -32],
    [16, 0],
    [-16, 0],
    [16, 16],
    [16, -16],
    [-16, 16],
    [-16, -16],
  ];
  for (const [n, e] of crossings) {
    for (const sn of [-1, 1]) {
      for (const se of [-1, 1]) lamp(n + sn * 3.6, e + se * 3.6);
    }
  }

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

  for (const stall of STALLS) {
    const at = pose(stall.n, stall.e, stall.spin);
    const wall = stall.n > 0 ? 0xfff2f6 : 0xeef6ff;
    put(stalls, at.p, at.q, 1, 1, 1, wall);
    put(awnings, at.p, at.q, 1, 1, 1, stall.cloth);
    blockers.push({ ...at.p, r: 1.16, h: 1.7 });
  }

  for (const rail of [
    [25.2, 3.8],
    [25.2, -3.8],
    [27.2, 3.8],
    [27.2, -3.8],
  ] as const) {
    const at = pose(rail[0], rail[1], 0);
    put(rails, at.p, at.q, 1, 1, 1, NAVY);
    blockers.push({ ...at.p, r: 0.16, h: 0.95 });
  }

  arch(scene, gradient, blockers, -32, 0, 'north', 0x7c4dff);
  arch(scene, gradient, blockers, 0, 32, 'east', 0xff4d86);
  arch(scene, gradient, blockers, 0, -32, 'east', 0x22c8ee);
  inlay(scene, 0, 16, 3.3, 0x22c8ee);
  inlay(scene, 0, -16, 3.3, 0x7c4dff);
  inlay(scene, 16, 0, 3.3, 0xff4d86);
  inlay(scene, 16, 16, 3.1, 0xffc43a);

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
  const gate = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.14, 8, 18), toonMaterial(gradient, color));
  gate.position.set(at.x, at.y, at.z);
  gate.quaternion.copy(frameQuaternion(at.x, at.y, at.z, face.x, face.y, face.z));
  const up = new THREE.Vector3(at.x, at.y, at.z).normalize();
  gate.position.addScaledVector(up, 2.4);
  const key = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe14a }));
  key.position.y = 2.32;
  const cloth = new THREE.BoxGeometry(0.36, 0.86, 0.04);
  const left = new THREE.Mesh(cloth, toonMaterial(gradient, 0xff4d86));
  left.position.set(-0.62, 1.25, 0.02);
  const right = new THREE.Mesh(cloth, toonMaterial(gradient, 0x22c8ee));
  right.position.set(0.62, 1.15, 0.02);
  gate.add(key, left, right);
  scene.add(gate);
  const leg = 2.2;
  if (facing === 'north') {
    blockers.push({ ...shift(COLAT, AZ, n, e - leg), r: 0.34, h: 2.35 });
    blockers.push({ ...shift(COLAT, AZ, n, e + leg), r: 0.34, h: 2.35 });
  } else {
    blockers.push({ ...shift(COLAT, AZ, n - leg, e), r: 0.34, h: 2.35 });
    blockers.push({ ...shift(COLAT, AZ, n + leg, e), r: 0.34, h: 2.35 });
  }
}

function inlay(scene: THREE.Scene, n: number, e: number, radius: number, color: number): void {
  const at = shift(COLAT, AZ, n, e);
  const geo = new THREE.TorusGeometry(radius, 0.07, 5, 20);
  geo.rotateX(Math.PI / 2);
  const ring = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color }));
  ring.position.set(at.x, at.y, at.z);
  ring.quaternion.copy(frameQuaternion(at.x, at.y, at.z, 1, 0, 0));
  const up = new THREE.Vector3(at.x, at.y, at.z).normalize();
  ring.position.addScaledVector(up, 0.08);
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
  const geo = new THREE.ConeGeometry(0.48, 0.36, 6);
  geo.translate(0, 3.48, 0);
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
