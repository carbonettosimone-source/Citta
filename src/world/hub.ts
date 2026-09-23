import * as THREE from 'three';
import { CHALLENGES, FINISH, RACE_BARS, RACE_PATH } from '../game/content';
import { commit, setInstanceQuat } from '../render/instance';
import { createSky } from '../render/sky';
import { toonInstances, toonMaterial, withWind } from '../render/toon';
import type { Blocker } from './collide';
import { addDress } from './dress';
import { unit } from './hash';
import { seat } from './relief';
import { addTowns, nearTown, townBlend } from './towns';
import {
  BIOMES,
  PLANET_R,
  angleDiff,
  biomeAzimuth,
  biomeIndex,
  edgeMeters,
  frameQuaternion,
  northTangent,
  onPath,
  pathBlend,
  quatAxisY,
  shift,
  type Biome,
} from './planet';

export type Hub = {
  blockers: Blocker[];
  sky: THREE.Object3D;
};

type Plant = {
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

export function createHub(scene: THREE.Scene, gradient: THREE.Texture): Hub {
  const sky = createSky();
  scene.add(sky);

  const surface = buildSurface(gradient);
  scene.add(surface);

  const blockers: Blocker[] = [];
  addBeacon(scene, gradient, blockers);
  addTowns(scene, gradient, blockers);
  addApproach(scene, gradient, blockers);
  scatter(scene, gradient, blockers);
  addDress(scene, gradient, blockers);
  addCourse(scene, gradient, blockers);

  return { blockers, sky };
}

function buildSurface(gradient: THREE.Texture): THREE.Mesh {
  const source = new THREE.SphereGeometry(PLANET_R, 192, 112);
  const geo = source.toNonIndexed();
  source.dispose();
  const pos = geo.getAttribute('position');
  const colors = new Float32Array(pos.count * 3);
  const color = new THREE.Color();
  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const lifted = seat(x, y, z);
    pos.setXYZ(i, lifted.x, lifted.y, lifted.z);
    color.setHex(vertexColor(x, y, z));
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshToonMaterial({ color: 0xffffff, vertexColors: true, gradientMap: gradient }),
  );
  mesh.frustumCulled = false;
  return mesh;
}

function vertexColor(x: number, y: number, z: number): number {
  const len = Math.hypot(x, y, z) || 1;
  const colat = Math.acos(Math.min(1, Math.max(-1, y / len)));
  const az = Math.atan2(x, z);
  const pathW = pathBlend(x, y, z);
  const townW = townBlend(x, y, z);
  const flat = Math.max(pathW, townW);
  const stone = paveHex(colat, az, townW);
  if (flat > 0.82) return stone;
  const idx = biomeIndex(x, z);
  const biome = BIOMES[idx] ?? BIOMES[0];
  let hex = groundTone(biome, colat, az);
  const parallel = Math.hypot(x / len, z / len) * PLANET_R;
  if (parallel > 22) {
    const edge = edgeMeters(x, y, z);
    if (edge < 9) {
      const u = ((az + Math.PI) / (Math.PI * 2)) * BIOMES.length;
      const frac = u - Math.floor(u);
      const neighbor = BIOMES[(frac < 0.5 ? idx + BIOMES.length - 1 : idx + 1) % BIOMES.length] ?? biome;
      const shoulder = edge < 1.25 ? 1 : 1 - (edge - 1.25) / 7.75;
      hex = mixHex(hex, groundTone(neighbor, colat, az), shoulder * 0.72);
      if (edge < 1.25) hex = mixHex(hex, 0xefe6ff, (1 - edge / 1.25) ** 2);
    }
  }
  if (flat > 0.04) hex = mixHex(hex, stone, flat);
  return hex;
}

function groundTone(biome: Biome, colat: number, az: number): number {
  const broad = Math.sin(az * 2.2 + colat * 1.7) * 0.5 + 0.5;
  const fine = Math.sin(az * 4.6 - colat * 2.4 + 1.3) * 0.5 + 0.5;
  if (fine > 0.78) return mixHex(biome.ground, biome.deep, 0.42);
  if (broad > 0.58) return mixHex(biome.ground, biome.patch, 0.62);
  return biome.ground;
}

function paveHex(colat: number, az: number, townW: number): number {
  const along = colat * PLANET_R;
  let best = Math.PI;
  for (let i = 0; i < BIOMES.length; i += 1) {
    const d = angleDiff(az, biomeAzimuth(i));
    if (d < best) best = d;
  }
  const spokeM = best * Math.sin(Math.max(0.15, colat)) * PLANET_R;
  const tile = 1.28;
  const u = along / tile;
  const v = spokeM / tile;
  const fu = u - Math.floor(u);
  const fv = v - Math.floor(v);
  if (fu < 0.07 || fu > 0.93 || fv < 0.07 || fv > 0.93) return 0xb9a8d4;
  const checker = (Math.floor(u) + Math.floor(v)) & 1;
  if (spokeM < 0.55) return 0xffe4f2;
  if (townW > 0.72 && spokeM > 0.7) return checker ? 0xf070a8 : 0xe090c4;
  return checker ? 0xd4d0ee : 0xb7b3d4;
}

function mixHex(a: number, b: number, t: number): number {
  const k = Math.min(1, Math.max(0, t));
  const ar = (a >> 16) & 255;
  const ag = (a >> 8) & 255;
  const ab = a & 255;
  const br = (b >> 16) & 255;
  const bg = (b >> 8) & 255;
  const bb = b & 255;
  const r = Math.round(ar + (br - ar) * k);
  const g = Math.round(ag + (bg - ag) * k);
  const bl = Math.round(ab + (bb - ab) * k);
  return (r << 16) | (g << 8) | bl;
}

/** Filare lungo la via dello spawn: sta nel cono stretto del ritratto. */
function addApproach(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const az = biomeAzimuth(0);
  const colat = 0.2;
  const border: Plant[] = [];
  const pots: Plant[] = [];
  const stems: Plant[] = [];
  const crowns: Plant[] = [];
  const fruit: Plant[] = [];
  const plantAt = (list: Plant[], north: number, east: number, scale: number, color: number) => {
    const raw = shift(colat, az, north, east);
    const p = seat(raw.x, raw.y, raw.z);
    const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(az), 0, -Math.sin(az));
    list.push({ ...p, qx: q.x, qy: q.y, qz: q.z, qw: q.w, s: scale, color });
  };
  for (let n = -15.4; n <= -2.2; n += 1.55) {
    const scale = 0.95 + ((Math.abs(Math.round(n * 10)) % 3) * 0.18);
    plantAt(border, n, -0.72, scale, 0xff4d86);
    plantAt(border, n, 0.72, scale * 0.9, 0x7c4dff);
    plantAt(pots, n, -0.72, scale, 0x2c2640);
    plantAt(pots, n, 0.72, scale * 0.9, 0x22c8ee);
  }
  for (let n = -14.2; n <= -3.2; n += 3.3) {
    plantAt(stems, n, -1.48, 1, 0xd42858);
    plantAt(stems, n, 1.48, 1, 0x6a28c0);
    blockers.push({ ...shift(colat, az, n, -1.48), r: 0.22, h: 2.2 });
    blockers.push({ ...shift(colat, az, n, 1.48), r: 0.22, h: 2.2 });
    plantAt(crowns, n, -1.48, 1, 0xff4d86);
    plantAt(crowns, n, 1.48, 1, 0x22d4f0);
    plantAt(fruit, n, -1.48, 1, 0xffe14a);
    plantAt(fruit, n, 1.48, 1, 0xffe14a);
  }
  paint(scene, planterLeaf(), gradient, border, false, true);
  paint(scene, planterPot(), gradient, pots, false, false);
  paint(scene, cylinder(0.07, 0.1, 2.15, 5), gradient, stems, false, true);
  paint(scene, layeredCrown(), gradient, crowns, false, true);
  paint(scene, crownFruit(), gradient, fruit, true, true);

  const gateAt = shift(colat, az, -12.6, 0);
  const face = northTangent(colat, az);
  const gate = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.16, 8, 18),
    toonMaterial(gradient, 0xff4d86),
  );
  gate.position.set(gateAt.x, gateAt.y, gateAt.z);
  gate.quaternion.copy(frameQuaternion(gateAt.x, gateAt.y, gateAt.z, face.x, face.y, face.z));
  const up = new THREE.Vector3(gateAt.x, gateAt.y, gateAt.z).normalize();
  gate.position.addScaledVector(up, 1.55);
  const keystone = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffe14a }),
  );
  keystone.position.y = 1.52;
  const bannerA = new THREE.Mesh(bannerGeo(), toonMaterial(gradient, 0xff4d86));
  bannerA.position.set(-0.46, 0.95, 0.02);
  const bannerB = new THREE.Mesh(bannerGeo(), toonMaterial(gradient, 0x22c8ee));
  bannerB.position.set(0.46, 0.88, 0.02);
  gate.add(keystone, bannerA, bannerB);
  scene.add(gate);
  blockers.push({ ...shift(colat, az, -12.6, -1.5), r: 0.38, h: 1.7 });
  blockers.push({ ...shift(colat, az, -12.6, 1.5), r: 0.38, h: 1.7 });
}

function addBeacon(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const stone = toonMaterial(gradient, 0xf4f0ff);
  const y0 = PLANET_R;
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.1, 0.7, 8), stone);
  foot.position.y = y0 + 0.28;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 1.05, 8.4, 8), stone);
  shaft.position.y = y0 + 4.6;
  const lamp = new THREE.Mesh(
    new THREE.CylinderGeometry(1.25, 1.25, 1.15, 8),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  lamp.position.y = y0 + 9.3;
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.7, 1.15, 8), toonMaterial(gradient, 0xff4d6a));
  cap.position.y = y0 + 10.4;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.3, 0.14, 6, 18),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y0 + 0.12;
  scene.add(foot, shaft, lamp, cap, ring);
  blockers.push({ x: 0, y: PLANET_R, z: 0, r: 3.1, h: 11 });
}

function scatter(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const coral: Plant[] = [];
  const discs: Plant[] = [];
  const mintStem: Plant[] = [];
  const mintStar: Plant[] = [];
  const petals: Plant[] = [];
  const spikes: Plant[] = [];
  const ribbons: Plant[] = [];
  const poles: Plant[] = [];
  const bulbs: Plant[] = [];

  for (let biome = 0; biome < BIOMES.length; biome++) {
    const info = BIOMES[biome];
    if (!info) continue;
    const spots = floraSpots(biome);
    for (const spot of spots) {
      const raw = point(spot.colat, spot.az);
      if (onPath(raw.x, raw.y, raw.z) || tooClose(raw.x, raw.y, raw.z)) continue;
      const p = seat(raw.x, raw.y, raw.z);
      const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(spot.az), 0, -Math.sin(spot.az));
      const plant: Plant = {
        ...p,
        qx: q.x,
        qy: q.y,
        qz: q.z,
        qw: q.w,
        s: spot.scale,
        color: spot.roll > 0.72 ? info.deep : info.plant,
      };
      if (biome === 0) {
        if (spot.grove) discs.push(plant);
        else coral.push(plant);
      } else if (biome === 1) {
        mintStem.push(plant);
        mintStar.push(plant);
      } else if (biome === 2) petals.push(plant);
      else if (biome === 3) spikes.push(plant);
      else if (biome === 4) ribbons.push(plant);
      else {
        poles.push(plant);
        bulbs.push({ ...plant, color: 0xf6d36a });
      }
    }
  }

  paint(scene, cone(1.55, 0.72, 6, 0.36), gradient, coral, false, true);
  paint(scene, coralGrove(), gradient, discs, false, true);
  paint(scene, cylinder(0.09, 0.12, 2.5, 5), gradient, mintStem, false, true);
  paint(scene, star(), gradient, mintStar, false, true);
  paint(scene, cone(0.72, 3.3, 5, 1.65), gradient, petals, false, true);
  paint(scene, cone(0.38, 3.6, 4, 1.8), gradient, spikes, true, true);
  paint(scene, ribbon(), gradient, ribbons, false, true);
  paint(scene, cylinder(0.08, 0.11, 3.3, 5), gradient, poles, false, true);
  paint(scene, bulb(), gradient, bulbs, true, true);
  addTotems(scene, gradient, blockers);
}

type Spot = { colat: number; az: number; scale: number; roll: number; grove: boolean };

function floraSpots(biome: number): Spot[] {
  const center = biomeAzimuth(biome);
  const spots: Spot[] = [];
  const bands = [
    { n: 28, c0: 0.38, c1: 0.95, spread: 0.78 },
    { n: 34, c0: 1.0, c1: 1.82, spread: 0.9 },
    { n: 24, c0: 1.88, c1: 2.62, spread: 0.78 },
  ];
  let k = 0;
  for (const band of bands) {
    for (let n = 0; n < band.n; n += 1, k += 1) {
      spots.push({
        az: center + (unit(biome, k, 11) - 0.5) * band.spread,
        colat: band.c0 + unit(biome, k, 19) * (band.c1 - band.c0),
        scale: 0.82 + unit(biome, k, 4) * 0.7,
        roll: unit(biome, k, 8),
        grove: false,
      });
    }
  }
  for (let n = 0; n < 10; n += 1) {
    const baseAz = center + (unit(biome, k, 11) - 0.5) * 0.2;
    const baseC = 1.22 + unit(biome, k, 19) * 0.7;
    k += 1;
    for (let j = 0; j < 4; j += 1, k += 1) {
      spots.push({
        az: baseAz + (unit(biome, k, 3) - 0.5) * 0.028,
        colat: baseC + (unit(biome, k, 5) - 0.5) * 0.026,
        scale: (j === 0 ? 1.55 : 1.05) + unit(biome, k, 4) * 0.45,
        roll: unit(biome, k, 8),
        grove: true,
      });
    }
  }
  return spots;
}

function point(colat: number, az: number): { x: number; y: number; z: number } {
  const s = Math.sin(colat);
  return {
    x: s * Math.sin(az) * PLANET_R,
    y: Math.cos(colat) * PLANET_R,
    z: s * Math.cos(az) * PLANET_R,
  };
}

function tooClose(x: number, y: number, z: number): boolean {
  const pole = Math.abs(y) > PLANET_R * Math.cos(0.11);
  if (pole || nearTown(x, y, z, 6)) return true;
  for (const challenge of CHALLENGES) {
    const dx = x - challenge.x;
    const dy = y - challenge.y;
    const dz = z - challenge.z;
    if (dx * dx + dy * dy + dz * dz < 8 * 8) return true;
  }
  const dx = x - FINISH.x;
  const dy = y - FINISH.y;
  const dz = z - FINISH.z;
  return dx * dx + dy * dy + dz * dz < 6 * 6;
}

function paint(
  scene: THREE.Scene,
  geometry: THREE.BufferGeometry,
  gradient: THREE.Texture,
  plants: readonly Plant[],
  flat: boolean,
  wind = false,
): void {
  if (plants.length === 0) return;
  const material = flat
    ? new THREE.MeshBasicMaterial({ color: 0xffffff })
    : toonInstances(gradient);
  if (wind) withWind(material);
  const mesh = new THREE.InstancedMesh(geometry, material, plants.length);
  mesh.frustumCulled = false;
  for (let i = 0; i < plants.length; i++) {
    const plant = plants[i];
    if (!plant) continue;
    setInstanceQuat(
      mesh,
      i,
      plant.x,
      plant.y,
      plant.z,
      plant.s,
      plant.s,
      plant.s,
      plant.qx,
      plant.qy,
      plant.qz,
      plant.qw,
      plant.color,
    );
  }
  commit(mesh);
  scene.add(mesh);
}

function layeredCrown(): THREE.BufferGeometry {
  const low = new THREE.CylinderGeometry(0.95, 0.72, 0.22, 7);
  low.translate(0, 1.78, 0);
  const mid = new THREE.CylinderGeometry(0.64, 0.5, 0.18, 6);
  mid.translate(0.06, 2.22, 0.04);
  const top = new THREE.CylinderGeometry(0.34, 0.26, 0.14, 5);
  top.translate(-0.04, 2.58, -0.03);
  return mergeFlat([low, mid, top]);
}

function crownFruit(): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(0.14, 6, 5);
  geo.translate(0.18, 2.28, 0.08);
  return geo;
}

function planterLeaf(): THREE.BufferGeometry {
  const leaf = new THREE.ConeGeometry(0.4, 0.82, 5);
  leaf.translate(0, 0.72, 0);
  const bud = new THREE.SphereGeometry(0.12, 6, 5);
  bud.translate(0, 1.12, 0);
  return mergeFlat([leaf, bud]);
}

function planterPot(): THREE.BufferGeometry {
  const geo = new THREE.CylinderGeometry(0.3, 0.22, 0.24, 6);
  geo.translate(0, 0.12, 0);
  return geo;
}

function bannerGeo(): THREE.BufferGeometry {
  const cloth = new THREE.BoxGeometry(0.38, 0.92, 0.045);
  const hem = new THREE.BoxGeometry(0.42, 0.08, 0.05);
  hem.translate(0, -0.46, 0);
  return mergeFlat([cloth, hem]);
}

function coralGrove(): THREE.BufferGeometry {
  const stem = new THREE.CylinderGeometry(0.09, 0.14, 1.7, 5);
  stem.translate(0, 0.85, 0);
  const low = new THREE.CylinderGeometry(1.05, 0.72, 0.28, 6);
  low.translate(0, 1.85, 0);
  const mid = new THREE.CylinderGeometry(0.7, 0.5, 0.22, 6);
  mid.translate(0.08, 2.32, 0.04);
  const top = new THREE.CylinderGeometry(0.36, 0.26, 0.16, 5);
  top.translate(-0.05, 2.68, -0.02);
  return mergeFlat([stem, low, mid, top]);
}

function mergeFlat(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const chunks = parts.map((part) => (part.index ? part.toNonIndexed() : part));
  let count = 0;
  for (const chunk of chunks) count += chunk.getAttribute('position').count;
  const position = new Float32Array(count * 3);
  const normal = new Float32Array(count * 3);
  let offset = 0;
  for (const chunk of chunks) {
    const p = chunk.getAttribute('position');
    const n = chunk.getAttribute('normal');
    for (let i = 0; i < p.count; i += 1) {
      const o = offset + i;
      position[o * 3] = p.getX(i);
      position[o * 3 + 1] = p.getY(i);
      position[o * 3 + 2] = p.getZ(i);
      normal[o * 3] = n.getX(i);
      normal[o * 3 + 1] = n.getY(i);
      normal[o * 3 + 2] = n.getZ(i);
    }
    offset += p.count;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  return geo;
}

function cone(radius: number, height: number, sides: number, lift: number): THREE.ConeGeometry {
  const geo = new THREE.ConeGeometry(radius, height, sides);
  geo.translate(0, lift, 0);
  return geo;
}

function cylinder(rt: number, rb: number, height: number, sides: number): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(rt, rb, height, sides);
  geo.translate(0, height / 2, 0);
  return geo;
}

function star(): THREE.OctahedronGeometry {
  const geo = new THREE.OctahedronGeometry(1.15, 0);
  geo.scale(1.25, 0.22, 1.25);
  geo.translate(0, 2.7, 0);
  return geo;
}

function ribbon(): THREE.TorusGeometry {
  const geo = new THREE.TorusGeometry(1.25, 0.16, 5, 8, Math.PI);
  geo.translate(0, 1.25, 0);
  return geo;
}

function bulb(): THREE.SphereGeometry {
  const geo = new THREE.SphereGeometry(0.42, 6, 5);
  geo.translate(0, 3.45, 0);
  return geo;
}

const TOTEM_R = [1.7, 0.5, 1.05, 0.7, 2.05, 0.42] as const;
const TOTEM_H = [3.2, 4.6, 4.2, 5.2, 2.6, 5.2] as const;

function addTotems(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  for (let biome = 0; biome < BIOMES.length; biome++) {
    const info = BIOMES[biome];
    if (!info) continue;
    const az = biomeAzimuth(biome) + 0.07;
    const colat = 1.62;
    const raw = point(colat, az);
    const p = seat(raw.x, raw.y, raw.z);
    const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(az), 0, -Math.sin(az));
    const group = totem(biome, gradient, info.plant, info.deep);
    group.position.set(p.x, p.y, p.z);
    group.quaternion.copy(q);
    scene.add(group);
    blockers.push({ x: raw.x, y: raw.y, z: raw.z, r: TOTEM_R[biome] ?? 0.8, h: TOTEM_H[biome] ?? 4 });
  }
}

function totem(biome: number, gradient: THREE.Texture, plant: number, deep: number): THREE.Group {
  const group = new THREE.Group();
  const main = toonMaterial(gradient, plant);
  const alt = toonMaterial(gradient, deep);
  if (biome === 0) {
    for (let i = 0; i < 3; i++) {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.9 - i * 0.42, 1.9 - i * 0.42, 0.38, 6), i === 1 ? alt : main);
      disc.position.y = 0.4 + i * 0.7;
      group.add(disc);
    }
  } else if (biome === 1) {
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 4.2, 5), alt);
    stem.position.y = 2.1;
    const cap = new THREE.Mesh(new THREE.OctahedronGeometry(1.8, 0), main);
    cap.scale.set(1.3, 0.22, 1.3);
    cap.position.y = 4.5;
    group.add(stem, cap);
  } else if (biome === 2) {
    for (let i = 0; i < 3; i++) {
      const petal = new THREE.Mesh(new THREE.ConeGeometry(0.7, 2.2, 5), i === 2 ? alt : main);
      petal.position.set(Math.cos(i * 2.1) * 0.45, 1.2 + i * 1.15, Math.sin(i * 2.1) * 0.45);
      group.add(petal);
    }
  } else if (biome === 3) {
    const shard = new THREE.Mesh(new THREE.ConeGeometry(0.55, 5.6, 4), new THREE.MeshBasicMaterial({ color: plant }));
    shard.position.y = 2.8;
    const side = new THREE.Mesh(new THREE.ConeGeometry(0.35, 3.1, 4), new THREE.MeshBasicMaterial({ color: deep }));
    side.position.set(0.7, 1.5, 0.2);
    side.rotation.z = 0.25;
    group.add(shard, side);
  } else if (biome === 4) {
    const arch = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.22, 5, 10, Math.PI), main);
    arch.position.y = 2.3;
    group.add(arch);
  } else {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 4.8, 5), main);
    pole.position.y = 2.4;
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.62, 8, 6), new THREE.MeshBasicMaterial({ color: 0xf6d36a }));
    lamp.position.y = 5.1;
    group.add(pole, lamp);
  }
  return group;
}

function addCourse(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  for (const bar of RACE_BARS) {
    blockers.push({ x: bar.x, y: bar.y, z: bar.z, r: 0.62, h: 2.55 });
    const q = frameQuaternion(bar.x, bar.y, bar.z, 0, 1, 0);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.3, 1.7), toonMaterial(gradient, 0xd07a45));
    mesh.position.set(bar.x, bar.y, bar.z);
    mesh.quaternion.copy(q);
    const up = mesh.position.clone().normalize();
    mesh.position.addScaledVector(up, 1.15);
    scene.add(mesh);
  }

  const arrows = new THREE.InstancedMesh(
    new THREE.ConeGeometry(0.34, 0.95, 4),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
    RACE_PATH.length,
  );
  arrows.frustumCulled = false;
  for (let i = 0; i < RACE_PATH.length; i++) {
    const pointA = RACE_PATH[i];
    const pointB = RACE_PATH[i + 1] ?? pointA;
    if (!pointA || !pointB) continue;
    const q = quatAxisY(pointB.x - pointA.x, pointB.y - pointA.y, pointB.z - pointA.z, pointA.x, pointA.y, pointA.z);
    const n = Math.hypot(pointA.x, pointA.y, pointA.z) || 1;
    setInstanceQuat(
      arrows,
      i,
      pointA.x + (pointA.x / n) * 0.35,
      pointA.y + (pointA.y / n) * 0.35,
      pointA.z + (pointA.z / n) * 0.35,
      1,
      1,
      1,
      q.x,
      q.y,
      q.z,
      q.w,
      0xf0a03a,
    );
  }
  commit(arrows);
  scene.add(arrows);

  const padQ = frameQuaternion(FINISH.x, FINISH.y, FINISH.z, 1, 0, 0);
  const pad = new THREE.Mesh(
    new THREE.CylinderGeometry(FINISH.r, FINISH.r, 0.08, 18),
    new THREE.MeshBasicMaterial({ color: 0x1eb8c8 }),
  );
  const finishN = new THREE.Vector3(FINISH.x, FINISH.y, FINISH.z).normalize();
  pad.position.copy(finishN).multiplyScalar(PLANET_R + 0.05);
  pad.quaternion.copy(padQ);
  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.09, 2.1, 6),
    new THREE.MeshBasicMaterial({ color: 0x1eb8c8 }),
  );
  mast.position.copy(finishN).multiplyScalar(PLANET_R + 1.05);
  mast.quaternion.copy(padQ);
  const flag = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 0.32, 0.05),
    new THREE.MeshBasicMaterial({ color: 0xf7f4ec }),
  );
  flag.position.copy(finishN).multiplyScalar(PLANET_R + 1.9);
  flag.quaternion.copy(padQ);
  scene.add(pad, mast, flag);
}
