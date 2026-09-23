import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { angleDiff, biomeAzimuth, eastTangent, frameQuaternion, northTangent, onSphere, PLANET_R, shift } from './planet';

/**
 * Capitale sul guscio. Vedi PLAN.md.
 * Il meridiano è l'azimut del corallo. Il parallelo civico è colat 0.64.
 * Le facciate seguono quelle due curve. Le piazze sono calotte.
 */
export const CAPITAL_COLAT = 0.64;
export const CAPITAL_AZ = biomeAzimuth(0);
export const SPAWN_COLAT = 0.8;
const CORAL_COLAT = 0.46;
const GAMES_AZ = 0.26;
const MARKET_AZ = 0.3;
const SETBACK = 6.2;

export const MARKET_PLAZA = onSphere(CAPITAL_COLAT, CAPITAL_AZ + MARKET_AZ);
export const BOTTEGHE_PLAZA = onSphere(CAPITAL_COLAT, CAPITAL_AZ - MARKET_AZ);
export const GAMES_PLAZA = onSphere(CORAL_COLAT, CAPITAL_AZ + GAMES_AZ);
export const SOUTH_PLAZA = onSphere(0.96, CAPITAL_AZ);
export const EAST_GATE = onSphere(CAPITAL_COLAT, CAPITAL_AZ + 0.48);
export const DUNE_GATE = onSphere(CAPITAL_COLAT, CAPITAL_AZ - 0.46);
export const TERRACE = onSphere(0.34, CAPITAL_AZ);
export const CORALLO = onSphere(CORAL_COLAT, CAPITAL_AZ);

const NAVY = 0x2c2640;
const INK = 0x241c22;
const AMBER = 0xffb22e;

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
  colat: number;
  az: number;
  north: number;
  east: number;
  face: 'north' | 'south' | 'east' | 'west';
  sy: number;
  hip: boolean;
  wall: number;
  roof: number;
};

function homes(): Home[] {
  const list: Home[] = [];
  const along = [ -0.36, -0.24, -0.12, 0.12, 0.24, 0.36 ];
  for (const daz of along) {
    const east = daz > 0;
    const wall = east ? 0xfff2f6 : 0xeef6ff;
    const roof = east ? 0xff4d86 : 0x7c4dff;
    list.push({ colat: CAPITAL_COLAT, az: CAPITAL_AZ + daz, north: SETBACK, east: 0, face: 'south', sy: 1, hip: true, wall, roof });
    list.push({ colat: CAPITAL_COLAT, az: CAPITAL_AZ + daz, north: -SETBACK, east: 0, face: 'north', sy: 1, hip: false, wall, roof });
  }
  const meridian = [0.4, 0.54, 0.74];
  for (const colat of meridian) {
    list.push({
      colat,
      az: CAPITAL_AZ,
      north: 0,
      east: SETBACK,
      face: 'west',
      sy: colat < 0.5 ? 1.12 : 1,
      hip: true,
      wall: 0xf4eeff,
      roof: 0x22c8ee,
    });
    list.push({
      colat,
      az: CAPITAL_AZ,
      north: 0,
      east: -SETBACK,
      face: 'east',
      sy: 1,
      hip: false,
      wall: 0xeefcf8,
      roof: 0xff7a3a,
    });
  }
  list.push({ colat: CORAL_COLAT, az: CAPITAL_AZ, north: 0, east: 8, face: 'west', sy: 1.16, hip: true, wall: 0xfff2f6, roof: 0xff4d86 });
  list.push({ colat: CORAL_COLAT, az: CAPITAL_AZ, north: 0, east: -8, face: 'east', sy: 1.16, hip: true, wall: 0xfff2f6, roof: 0xff4d86 });
  const spur = [0.62, 0.78, 0.94];
  for (const daz of spur) {
    for (const sign of [-1, 1] as const) {
      const north = sign > 0 ? (daz < 0.8 ? 7.6 : -7.6) : daz < 0.8 ? -7.6 : 7.6;
      list.push({
        colat: CAPITAL_COLAT,
        az: CAPITAL_AZ + sign * daz,
        north,
        east: 0,
        face: north > 0 ? 'south' : 'north',
        sy: 0.92,
        hip: sign > 0,
        wall: sign > 0 ? 0xfff2f6 : 0xeefcf8,
        roof: sign > 0 ? 0x22c8ee : 0xff7a3a,
      });
    }
  }
  return list;
}

const HOMES = homes();

const STALLS: readonly { colat: number; az: number; north: number; east: number; face: Home['face']; cloth: number }[] = [
  { colat: CAPITAL_COLAT, az: CAPITAL_AZ + MARKET_AZ, north: 5.1, east: 0, face: 'south', cloth: 0xff4d86 },
  { colat: CAPITAL_COLAT, az: CAPITAL_AZ + MARKET_AZ, north: -5.1, east: 0, face: 'north', cloth: 0x22c8ee },
  { colat: CAPITAL_COLAT, az: CAPITAL_AZ - MARKET_AZ, north: 5.1, east: 0, face: 'south', cloth: 0x7c4dff },
  { colat: CAPITAL_COLAT, az: CAPITAL_AZ - MARKET_AZ, north: -5.1, east: 0, face: 'north', cloth: 0x2ad4a0 },
  { colat: CORAL_COLAT, az: CAPITAL_AZ + GAMES_AZ, north: 4.6, east: 3.2, face: 'south', cloth: 0xffc43a },
  { colat: CORAL_COLAT, az: CAPITAL_AZ + GAMES_AZ, north: -4.2, east: -3.4, face: 'north', cloth: 0xff4d86 },
];

/** Vero se il punto è sulla striscia della capitale (meridiano, parallelo, vicoli), non su un disco quadrato. */
export function inCapital(x: number, y: number, z: number, margin: number): boolean {
  const len = Math.hypot(x, y, z) || 1;
  const colat = Math.acos(Math.min(1, Math.max(-1, y / len)));
  const az = Math.atan2(x, z);
  const daz = angleDiff(az, CAPITAL_AZ);
  const lateral = daz * Math.sin(Math.max(0.25, colat)) * PLANET_R;
  if (colat > 0.26 && colat < 1.08 && lateral < 14 + margin) return true;
  const along = Math.abs(colat - CAPITAL_COLAT) * PLANET_R;
  if (daz < 0.62 && along < 14 + margin) return true;
  const signed = signedAzimuth(az);
  if (Math.abs(signed) > 0.45 && Math.abs(signed) < Math.PI / 3 + 0.06 && along < 12 + margin) return true;
  const upper = Math.abs(colat - CORAL_COLAT) * PLANET_R;
  if (daz < 0.36 && upper < 12 + margin) return true;
  return false;
}

function signedAzimuth(az: number): number {
  let d = az - CAPITAL_AZ;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export function addCityPads(pads: Pad[]): void {
  const put = (colat: number, az: number, r: number) => {
    pads.push({ ...onSphere(colat, az), r2: r * r });
  };
  for (let colat = 0.3; colat <= 1.02; colat += 2.5 / PLANET_R) put(colat, CAPITAL_AZ, 3.3);
  const rho = Math.sin(CAPITAL_COLAT) * PLANET_R;
  for (let daz = -0.5; daz <= 0.52; daz += 2.5 / rho) put(CAPITAL_COLAT, CAPITAL_AZ + daz, 3.3);
  for (let daz = 0.5; daz <= Math.PI / 3; daz += 2.6 / rho) put(CAPITAL_COLAT, CAPITAL_AZ + daz, 2.4);
  for (let daz = -0.5; daz >= -Math.PI / 3; daz -= 2.6 / rho) put(CAPITAL_COLAT, CAPITAL_AZ + daz, 2.4);
  const rhoHi = Math.sin(CORAL_COLAT) * PLANET_R;
  for (let daz = 0; daz <= 0.3; daz += 2.5 / rhoHi) put(CORAL_COLAT, CAPITAL_AZ + daz, 2.6);
  for (const side of [-1, 1]) {
    for (let colat = CAPITAL_COLAT; colat <= CAPITAL_COLAT + 0.055; colat += 1.4 / PLANET_R) {
      put(colat, CAPITAL_AZ + side * 0.18, 0.9);
    }
  }
  put(CAPITAL_COLAT, CAPITAL_AZ, 9);
  put(CAPITAL_COLAT, CAPITAL_AZ + MARKET_AZ, 5.2);
  put(CAPITAL_COLAT, CAPITAL_AZ - MARKET_AZ, 5.2);
  put(CORAL_COLAT, CAPITAL_AZ, 5.6);
  put(CORAL_COLAT, CAPITAL_AZ + GAMES_AZ, 5.2);
  put(0.34, CAPITAL_AZ, 3.4);
  for (const home of HOMES) {
    const at = shift(home.colat, home.az, home.north, home.east);
    pads.push({ ...at, r2: 1.7 * 1.7 });
  }
  for (const stall of STALLS) {
    const at = shift(stall.colat, stall.az, stall.north, stall.east);
    pads.push({ ...at, r2: 1.55 * 1.55 });
  }
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
  const faced = (colat: number, az: number, north: number, east: number, face: Home['face']) => {
    const p = shift(colat, az, north, east);
    const n = northTangent(colat, az);
    const e = eastTangent(az);
    const dir = face === 'north' ? n : face === 'south' ? { x: -n.x, y: -n.y, z: -n.z } : face === 'east' ? e : { x: -e.x, y: -e.y, z: -e.z };
    const q = frameQuaternion(p.x, p.y, p.z, dir.x, dir.y, dir.z);
    return { p, q };
  };
  const lamp = (colat: number, az: number, north: number, east: number) => {
    const at = faced(colat, az, north, east, 'north');
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

  const caps = [0xff4d86, 0x22c8ee, 0x7c4dff, 0xffc43a] as const;
  for (let i = 0; i < 8; i += 1) {
    const ang = Math.PI / 8 + i * (Math.PI / 4);
    const at = faced(CAPITAL_COLAT, CAPITAL_AZ, Math.cos(ang) * 7.4, Math.sin(ang) * 7.4, 'north');
    put(columns, at.p, at.q, 1, 1, 1, NAVY);
    put(capitals, at.p, at.q, 1, 1, 1, caps[i % caps.length] ?? AMBER);
    blockers.push({ ...at.p, r: 0.34, h: 3.45 });
  }

  for (const spot of [
    [CAPITAL_COLAT, CAPITAL_AZ + MARKET_AZ],
    [CAPITAL_COLAT, CAPITAL_AZ - MARKET_AZ],
    [CORAL_COLAT, CAPITAL_AZ],
    [CORAL_COLAT, CAPITAL_AZ + GAMES_AZ],
  ] as const) {
    for (const north of [-1, 1]) {
      for (const east of [-1, 1]) lamp(spot[0], spot[1], north * 4.4, east * 4.4);
    }
  }

  for (const home of HOMES) {
    const { p, q } = faced(home.colat, home.az, home.north, home.east, home.face);
    put(walls, p, q, 0.88, home.sy, 0.8, home.wall);
    put(home.hip ? hips : roofs, p, q, 0.88, home.sy, 0.8, home.roof);
    put(doors, p, q, 0.88, home.sy, 0.8, INK);
    put(windows, p, q, 0.88, home.sy, 0.8, 0x3aa0ff);
    put(frames, p, q, 0.88, home.sy, 0.8, home.roof);
    put(lintels, p, q, 0.88, home.sy, 0.8, home.roof);
    put(eaves, p, q, 0.88, home.sy, 0.8, home.roof);
    put(steps, p, q, 0.88, home.sy, 0.8, 0xc8c4dc);
    put(plaques, p, q, 0.88, home.sy, 0.8, 0xffe14a);
    if (home.hip) put(porches, p, q, 0.88, home.sy, 0.8, AMBER);
    else put(chimneys, p, q, 0.88, home.sy, 0.8, 0xe04848);
    blockers.push({ ...p, r: Math.hypot(1.25 * 0.88, 1.15 * 0.8) + 0.04, h: 3.4 * home.sy });
  }

  for (const stall of STALLS) {
    const at = faced(stall.colat, stall.az, stall.north, stall.east, stall.face);
    put(stalls, at.p, at.q, 1, 1, 1, stall.north > 0 ? 0xfff2f6 : 0xeef6ff);
    put(awnings, at.p, at.q, 1, 1, 1, stall.cloth);
    blockers.push({ ...at.p, r: 1.16, h: 1.7 });
  }

  for (const rail of [3.6, -3.6]) {
    const at = faced(0.34, CAPITAL_AZ, 0, rail, 'north');
    put(rails, at.p, at.q, 1, 1, 1, NAVY);
    blockers.push({ ...at.p, r: 0.16, h: 0.95 });
  }

  arch(scene, gradient, blockers, 0.96, CAPITAL_AZ, 'north', 0x7c4dff);
  arch(scene, gradient, blockers, CAPITAL_COLAT, CAPITAL_AZ + 0.48, 'east', 0xff4d86);
  arch(scene, gradient, blockers, CAPITAL_COLAT, CAPITAL_AZ - 0.46, 'east', 0x22c8ee);
  inlay(scene, CAPITAL_COLAT, CAPITAL_AZ + MARKET_AZ, 3.2, 0x22c8ee);
  inlay(scene, CAPITAL_COLAT, CAPITAL_AZ - MARKET_AZ, 3.2, 0x7c4dff);
  inlay(scene, CORAL_COLAT, CAPITAL_AZ, 3.3, 0xff4d86);
  inlay(scene, CORAL_COLAT, CAPITAL_AZ + GAMES_AZ, 3.1, 0xffc43a);

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
  colat: number,
  az: number,
  facing: 'north' | 'east',
  color: number,
): void {
  const at = onSphere(colat, az);
  const face = facing === 'north' ? northTangent(colat, az) : eastTangent(az);
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
    blockers.push({ ...shift(colat, az, 0, -leg), r: 0.34, h: 2.35 });
    blockers.push({ ...shift(colat, az, 0, leg), r: 0.34, h: 2.35 });
  } else {
    blockers.push({ ...shift(colat, az, -leg, 0), r: 0.34, h: 2.35 });
    blockers.push({ ...shift(colat, az, leg, 0), r: 0.34, h: 2.35 });
  }
}

function inlay(scene: THREE.Scene, colat: number, az: number, radius: number, color: number): void {
  const at = onSphere(colat, az);
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
