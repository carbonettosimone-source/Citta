import * as THREE from 'three';
import { CHALLENGES, FINISH, RACE_BARS, RACE_PATH } from '../game/content';
import { commit, setInstanceQuat } from '../render/instance';
import { createSky } from '../render/sky';
import { toonInstances, toonMaterial, withWind } from '../render/toon';
import type { Blocker } from './collide';
import { addDress } from './dress';
import { WORLD_SEED, unit } from './hash';
import { seat } from './relief';
import { addTowns, nearTown, townBlend } from './towns';
import {
  BIOMES,
  PATH_COLOR,
  PLANET_R,
  SEAM_COLOR,
  biomeAzimuth,
  biomeIndex,
  edgeMeters,
  frameQuaternion,
  onPath,
  pathBlend,
  quatAxisY,
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
  scatter(scene, gradient);
  addDress(scene, gradient);
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
  const nx = x / len;
  const nz = z / len;
  const colat = Math.acos(Math.min(1, Math.max(-1, (y / len))));
  const az = Math.atan2(x, z);
  const flat = Math.max(pathBlend(x, y, z), townBlend(x, y, z));
  if (flat > 0.82) return PATH_COLOR;
  const biome = BIOMES[biomeIndex(x, z)] ?? BIOMES[0];
  const qx = Math.round(az * 9);
  const qy = Math.round(colat * 11);
  const roll = unit(qx, qy, WORLD_SEED);
  let hex = biome.ground;
  if (roll > 0.84) hex = biome.deep;
  else if (roll > 0.58) hex = biome.patch;
  const parallel = Math.hypot(nx, nz) * PLANET_R;
  if (parallel > 22) {
    const edge = edgeMeters(x, y, z);
    if (edge < 8) {
      const t = edge < 1.15 ? 1 : 1 - (edge - 1.15) / 6.85;
      hex = mixHex(hex, SEAM_COLOR, t * t);
    }
  }
  if (flat > 0.04) hex = mixHex(hex, PATH_COLOR, flat);
  return hex;
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

function addBeacon(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const stone = toonMaterial(gradient, 0xf4efe6);
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
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.7, 1.15, 8), toonMaterial(gradient, 0xd4654a));
  cap.position.y = y0 + 10.4;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.3, 0.14, 6, 18),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y0 + 0.12;
  scene.add(foot, shaft, lamp, cap, ring);
  blockers.push({ x: 0, y: PLANET_R, z: 0, r: 2.6, h: 11 });
}

function scatter(scene: THREE.Scene, gradient: THREE.Texture): void {
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
  paint(scene, cylinder(1.15, 1.15, 0.32, 6), gradient, discs, false, true);
  paint(scene, cylinder(0.09, 0.12, 2.5, 5), gradient, mintStem, false, true);
  paint(scene, star(), gradient, mintStar, false, true);
  paint(scene, cone(0.72, 3.3, 5, 1.65), gradient, petals, false, true);
  paint(scene, cone(0.38, 3.6, 4, 1.8), gradient, spikes, true, true);
  paint(scene, ribbon(), gradient, ribbons, false, true);
  paint(scene, cylinder(0.08, 0.11, 3.3, 5), gradient, poles, false, true);
  paint(scene, bulb(), gradient, bulbs, true, true);
  addTotems(scene, gradient);
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

function addTotems(scene: THREE.Scene, gradient: THREE.Texture): void {
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
