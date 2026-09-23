import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { toonInstances } from '../render/toon';
import type { Blocker } from './collide';
import { CAPITAL_AZ, CAPITAL_COLAT } from './city';
import { BIOMES, biomeAzimuth, frameQuaternion, northTangent, onSphere, PLANET_R, shift } from './planet';
import { nearTown, onTownGround } from './towns';

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

/**
 * Segnavia sugli archi di viaggio: meridiani dei biomi, anello, e i due
 * prolungamenti del parallelo civico verso menta e lanterne.
 * I pali stanno sulla spalla, il centro della via resta libero.
 */
export function addWays(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const posts: Stamp[] = [];
  const caps: Stamp[] = [];
  const pillars: Stamp[] = [];
  const crowns: Stamp[] = [];
  const flags: Stamp[] = [];

  const stamp = (list: Stamp[], p: { x: number; y: number; z: number }, color: number, sx = 1, sy = 1, sz = 1) => {
    const n = northTangent(Math.acos(Math.min(1, Math.max(-1, p.y / (Math.hypot(p.x, p.y, p.z) || 1)))), Math.atan2(p.x, p.z));
    const q = frameQuaternion(p.x, p.y, p.z, n.x, n.y, n.z);
    list.push({ x: p.x, y: p.y, z: p.z, qx: q.x, qy: q.y, qz: q.z, qw: q.w, sx, sy, sz, color });
  };
  const open = (p: { x: number; y: number; z: number }) => !onTownGround(p.x, p.y, p.z) && !nearTown(p.x, p.y, p.z, 2);

  for (let biome = 0; biome < BIOMES.length; biome += 1) {
    const az = biomeAzimuth(biome);
    const color = BIOMES[biome]?.plant ?? 0xff4d86;
    for (let colat = 0.7; colat <= 1.58; colat += 14 / PLANET_R) {
      const p = shift(colat, az, 0, 3.15);
      if (!open(p)) continue;
      stamp(posts, p, 0x2c2640);
      const len = Math.hypot(p.x, p.y, p.z) || 1;
      stamp(caps, { x: p.x + (p.x / len) * 1.7, y: p.y + (p.y / len) * 1.7, z: p.z + (p.z / len) * 1.7 }, color, 0.28, 0.28, 0.28);
      blockers.push({ ...p, r: 0.18, h: 1.85 });
    }
    const edge = az - Math.PI / BIOMES.length;
    for (const side of [-1, 1]) {
      const p = shift(1.02, edge, side * 2.9, 0);
      if (!open(p)) continue;
      stamp(pillars, p, color);
      blockers.push({ ...p, r: 0.28, h: 2.7 });
    }
    const cross = onSphere(1.02, az);
    if (open(shift(1.02, az, 2.5, 2.5))) {
      for (const north of [-1, 1]) {
        for (const east of [-1, 1]) {
          const p = shift(1.02, az, north * 2.55, east * 2.55);
          stamp(pillars, p, 0x2c2640, 0.7, 1, 0.7);
          blockers.push({ ...p, r: 0.22, h: 2.5 });
        }
      }
      stamp(crowns, cross, color, 1, 1, 1);
    }
  }

  const rho = Math.sin(CAPITAL_COLAT) * PLANET_R;
  const cloth = [0xff4d86, 0x22c8ee, 0xffc43a, 0x7c4dff, 0x2ad4a0];
  let flag = 0;
  for (const sign of [-1, 1]) {
    for (let daz = 0.52; daz <= Math.PI / 3 - 0.04; daz += 12 / rho) {
      const p = shift(CAPITAL_COLAT, CAPITAL_AZ + sign * daz, 3.3, 0);
      if (!open(p)) continue;
      stamp(posts, p, 0x2c2640);
      const len = Math.hypot(p.x, p.y, p.z) || 1;
      const up = { x: p.x / len, y: p.y / len, z: p.z / len };
      const n = northTangent(CAPITAL_COLAT, CAPITAL_AZ + sign * daz);
      const q = frameQuaternion(p.x, p.y, p.z, n.x, n.y, n.z);
      flags.push({
        x: p.x + up.x * 1.35,
        y: p.y + up.y * 1.35,
        z: p.z + up.z * 1.35,
        qx: q.x,
        qy: q.y,
        qz: q.z,
        qw: q.w,
        sx: 1,
        sy: 1,
        sz: 1,
        color: cloth[flag % cloth.length] ?? 0xff4d86,
      });
      flag += 1;
      blockers.push({ ...p, r: 0.16, h: 1.7 });
    }
  }

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

  const pole = new THREE.CylinderGeometry(0.1, 0.14, 1.7, 6);
  pole.translate(0, 0.85, 0);
  const cap = new THREE.SphereGeometry(1, 7, 6);
  const pillar = new THREE.CylinderGeometry(0.2, 0.26, 2.6, 6);
  pillar.translate(0, 1.3, 0);
  const crown = new THREE.CylinderGeometry(2.1, 2.1, 0.12, 8);
  crown.translate(0, 2.45, 0);
  const flagGeo = new THREE.BoxGeometry(0.08, 0.7, 0.55);
  flagGeo.translate(0, 0.15, 0.34);

  paint(pole, posts);
  paint(cap, caps, true);
  paint(pillar, pillars);
  paint(crown, crowns, true);
  paint(flagGeo, flags, true);
}
