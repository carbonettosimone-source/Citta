import * as THREE from 'three';
import { RACE_BARS, RACE_PATH, FINISH } from '../game/content';
import { commit, setInstanceQuat } from '../render/instance';
import { createSky } from '../render/sky';
import { toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { addDress } from './dress';
import { auditHub, flowMask, geodesicFromHub, HUB_RADIUS } from './intensity';
import { auditStructures } from './structures';
import { addHubModules } from './modules';
import { PLANET_R, frameQuaternion, quatAxisY } from './planet';
import { terrainSeat } from './relief';

export type Hub = {
  blockers: Blocker[];
  sky: THREE.Object3D;
};

export function createHub(scene: THREE.Scene, gradient: THREE.Texture): Hub {
  const issues = [...auditHub(), ...auditStructures()];
  if (issues.length > 0) throw new Error(`Hub Mondo-1 fuori regola:\n${issues.join('\n')}`);

  const sky = createSky();
  scene.add(sky);
  scene.add(buildSurface(gradient));

  const blockers: Blocker[] = [];
  addBeacon(scene, gradient, blockers);
  addHubModules(scene, gradient, blockers);
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
    const lifted = terrainSeat(x, y, z);
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
  const tone = shellTone(colat, az);
  const dist = geodesicFromHub(x, y, z);
  let hex = tone;
  if (dist < HUB_RADIUS) {
    const quiet = 1 - dist / HUB_RADIUS;
    hex = mixHex(hex, 0xc8c2b4, quiet * 0.28);
  }
  const flow = flowMask(x, y, z);
  if (flow > 0.04) hex = mixHex(hex, 0xd5d0ea, flow);
  return hex;
}

function shellTone(colat: number, az: number): number {
  const n = Math.sin(az * 1.4 + colat * 1.8) * 0.5 + 0.5;
  let hex = mixHex(0xc6b7a2, 0xa9baa6, n * 0.65);
  if (colat < 0.24) hex = mixHex(hex, 0x9eb6ef, (1 - colat / 0.24) * 0.74);
  if (colat > 2.45) hex = mixHex(hex, 0x6a5a96, Math.min(1, (colat - 2.45) / 0.55) * 0.4);
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
  const stone = toonMaterial(gradient, 0xf4f0ff);
  const y0 = PLANET_R;
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 3.3, 0.8, 8), stone);
  foot.position.y = y0 + 0.32;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 1.05, 14.2, 8), stone);
  shaft.position.y = y0 + 7.5;
  const lamp = new THREE.Mesh(
    new THREE.CylinderGeometry(1.45, 1.45, 1.35, 8),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  lamp.position.y = y0 + 15.4;
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.3, 8), toonMaterial(gradient, 0xff4d6a));
  cap.position.y = y0 + 16.7;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.6, 0.16, 6, 18),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y0 + 0.14;
  scene.add(foot, shaft, lamp, cap, ring);
  blockers.push({ x: 0, y: PLANET_R, z: 0, r: 2.7, h: 17 });
}

/** Stub dell'arena: il tracciato resta lontano, senza paese intorno. */
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
  for (let i = 0; i < RACE_PATH.length; i += 1) {
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
