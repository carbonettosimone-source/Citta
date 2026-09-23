import * as THREE from 'three';
import { CHALLENGES, FINISH, RACE_BARS, RACE_PATH } from '../game/content';
import { commit, setInstanceQuat } from '../render/instance';
import { createSky } from '../render/sky';
import { toonInstances, toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { WORLD_SEED, unit } from './hash';
import {
  BIOMES,
  PATH_COLOR,
  PLANET_R,
  biomeAzimuth,
  biomeIndex,
  frameQuaternion,
  onPath,
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
  scatter(scene, gradient);
  addCourse(scene, gradient, blockers);

  return { blockers, sky };
}

function buildSurface(gradient: THREE.Texture): THREE.Mesh {
  const source = new THREE.SphereGeometry(PLANET_R, 60, 36);
  const geo = source.toNonIndexed();
  source.dispose();
  const pos = geo.getAttribute('position');
  const colors = new Float32Array(pos.count * 3);
  const color = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    const x = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3;
    const y = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    const z = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
    color.setHex(facetColor(x, y, z, i));
    for (let k = 0; k < 3; k++) {
      colors[(i + k) * 3] = color.r;
      colors[(i + k) * 3 + 1] = color.g;
      colors[(i + k) * 3 + 2] = color.b;
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshToonMaterial({ color: 0xffffff, vertexColors: true, gradientMap: gradient }),
  );
  mesh.frustumCulled = false;
  return mesh;
}

function facetColor(x: number, y: number, z: number, index: number): number {
  if (onPath(x, y, z)) return PATH_COLOR;
  const biome = BIOMES[biomeIndex(x, z)] ?? BIOMES[0];
  const roll = unit(index, 3, WORLD_SEED);
  if (roll > 0.86) return biome.deep;
  if (roll > 0.62) return biome.patch;
  return biome.ground;
}

function addBeacon(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const stone = toonMaterial(gradient, 0xf4efe6);
  const y0 = PLANET_R;
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.45, 0.42, 8), stone);
  foot.position.y = y0 + 0.16;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.55, 2.7, 8), stone);
  shaft.position.y = y0 + 1.55;
  const lamp = new THREE.Mesh(
    new THREE.CylinderGeometry(0.52, 0.52, 0.48, 8),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  lamp.position.y = y0 + 3.05;
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.72, 0.5, 8), toonMaterial(gradient, 0xd4654a));
  cap.position.y = y0 + 3.5;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.35, 0.07, 6, 16),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y0 + 0.08;
  scene.add(foot, shaft, lamp, cap, ring);
  blockers.push({ x: 0, y: PLANET_R, z: 0, r: 0.95, h: 4 });
}

function scatter(scene: THREE.Scene, gradient: THREE.Texture): void {
  const coral: Plant[] = [];
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
    const center = biomeAzimuth(biome);
    const count = biome === 3 ? 22 : 15;
    for (let n = 0; n < count; n++) {
      const az = center + (unit(biome, n, 11) - 0.5) * 0.86;
      const colat = 0.42 + unit(biome, n, 19) * 2.15;
      const p = point(colat, az);
      if (onPath(p.x, p.y, p.z) || tooClose(p.x, p.y, p.z)) continue;
      const q = frameQuaternion(p.x, p.y, p.z, Math.cos(az), 0, -Math.sin(az));
      const roll = unit(biome, n, 8);
      const plant: Plant = {
        ...p,
        qx: q.x,
        qy: q.y,
        qz: q.z,
        qw: q.w,
        s: 0.75 + unit(biome, n, 4) * 0.55,
        color: roll > 0.72 ? info.deep : info.plant,
      };
      if (biome === 0) coral.push(plant);
      else if (biome === 1) {
        mintStem.push(plant);
        mintStar.push(plant);
      } else if (biome === 2) petals.push(plant);
      else if (biome === 3) spikes.push({ ...plant, s: plant.s * (0.7 + unit(n, biome, 2) * 0.8) });
      else if (biome === 4) ribbons.push(plant);
      else {
        poles.push(plant);
        bulbs.push({ ...plant, color: 0xf6d36a });
      }
    }
  }

  paint(scene, cone(0.72, 0.36, 6, 0.18), gradient, coral, false);
  paint(scene, cylinder(0.07, 0.09, 1.05, 5), gradient, mintStem, false);
  paint(scene, star(), gradient, mintStar, false);
  paint(scene, cone(0.5, 1.25, 5, 0.62), gradient, petals, false);
  paint(scene, cone(0.18, 1.2, 4, 0.55), gradient, spikes, true);
  paint(scene, ribbon(), gradient, ribbons, false);
  paint(scene, cylinder(0.055, 0.07, 1.45, 5), gradient, poles, false);
  paint(scene, bulb(), gradient, bulbs, true);
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
  if (y > PLANET_R * 0.95) return true;
  for (const challenge of CHALLENGES) {
    const dx = x - challenge.x;
    const dy = y - challenge.y;
    const dz = z - challenge.z;
    if (dx * dx + dy * dy + dz * dz < 2.4 * 2.4) return true;
  }
  const dx = x - FINISH.x;
  const dy = y - FINISH.y;
  const dz = z - FINISH.z;
  return dx * dx + dy * dy + dz * dz < 2.2 * 2.2;
}

function paint(
  scene: THREE.Scene,
  geometry: THREE.BufferGeometry,
  gradient: THREE.Texture,
  plants: readonly Plant[],
  flat: boolean,
): void {
  if (plants.length === 0) return;
  const material = flat
    ? new THREE.MeshBasicMaterial({ color: 0xffffff })
    : toonInstances(gradient);
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
  const geo = new THREE.OctahedronGeometry(0.62, 0);
  geo.scale(1.15, 0.28, 1.15);
  geo.translate(0, 1.2, 0);
  return geo;
}

function ribbon(): THREE.TorusGeometry {
  const geo = new THREE.TorusGeometry(0.48, 0.09, 5, 8, Math.PI);
  geo.translate(0, 0.48, 0);
  return geo;
}

function bulb(): THREE.SphereGeometry {
  const geo = new THREE.SphereGeometry(0.18, 6, 5);
  geo.translate(0, 1.55, 0);
  return geo;
}

function addCourse(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  for (const bar of RACE_BARS) {
    blockers.push({ x: bar.x, y: bar.y, z: bar.z, r: 0.5, h: 1.15 });
    const q = frameQuaternion(bar.x, bar.y, bar.z, 0, 1, 0);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.05, 1.35), toonMaterial(gradient, 0xd07a45));
    mesh.position.set(bar.x, bar.y, bar.z);
    mesh.quaternion.copy(q);
    const up = mesh.position.clone().normalize();
    mesh.position.addScaledVector(up, 0.52);
    scene.add(mesh);
  }

  const arrows = new THREE.InstancedMesh(
    new THREE.ConeGeometry(0.22, 0.62, 4),
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
