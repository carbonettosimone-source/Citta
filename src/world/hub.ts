import * as THREE from 'three';
import { RACE_BARS, RACE_PATH, FINISH } from '../game/content';
import { commit, setInstanceQuat } from '../render/instance';
import { createSky } from '../render/sky';
import { toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { addDress } from './dress';
import { auditHub, flowMask, geodesicFromHub, HUB_RADIUS, SPAWN_E, SPAWN_N, smoothstep, tangentLocal } from './intensity';
import { addLandmarks } from './landmarks';
import { auditProps } from './props';
import { auditStructures } from './structures';
import { addHubModules } from './modules';
import { PLANET_R, frameQuaternion, quatAxisY } from './planet';
import { terrainSeat } from './relief';

export type Hub = {
  blockers: Blocker[];
  sky: THREE.Object3D;
};

export function createHub(scene: THREE.Scene, gradient: THREE.Texture): Hub {
  const issues = [...auditHub(), ...auditStructures(), ...auditProps()];
  if (issues.length > 0) throw new Error(`Hub Mondo-1 fuori regola:\n${issues.join('\n')}`);

  const sky = createSky();
  scene.add(sky);
  scene.add(buildSurface(gradient));

  const blockers: Blocker[] = [];
  addBeacon(scene, gradient, blockers);
  addHubModules(scene, gradient, blockers);
  addDress(scene, gradient, blockers);
  addLandmarks(scene, gradient, blockers);
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
  const local = tangentLocal(x, y, z);
  if (local && Math.hypot(local.north - SPAWN_N, local.east - SPAWN_E) < 6.4) {
    hex = 0xff6a22;
  } else if (dist < HUB_RADIUS + 1.2) {
    const edge = smoothstep(HUB_RADIUS - 1.4, HUB_RADIUS + 1.2, dist);
    hex = mixHex(hex, 0xe437a8, 0.86 * (1 - edge));
  }
  const flow = flowMask(x, y, z);
  if (flow > 0.04) hex = mixHex(hex, 0xb7b8c6, flow);
  return hex;
}

function shellTone(colat: number, az: number): number {
  const bands: readonly { at: number; hex: number }[] = [
    { at: 0.22, hex: 0x7ad7ff },
    { at: 0.55, hex: 0xc6f25a },
    { at: 0.95, hex: 0xffe14a },
    { at: 1.45, hex: 0xf24a9a },
    { at: 2.05, hex: 0x7a3ad4 },
    { at: 2.55, hex: 0x2ec8d8 },
    { at: 4, hex: 0x4a2a88 },
  ];
  let hex = 0x4a2a88;
  for (const band of bands) {
    if (colat < band.at) {
      hex = band.hex;
      break;
    }
  }
  const wedge = Math.floor(((az + Math.PI) / (Math.PI * 2)) * 6);
  if (colat > 0.35 && colat < 2.3 && wedge % 2 === 0) {
    hex = mixHex(hex, wedge % 4 === 0 ? 0xc6f25a : 0xff4fa3, 0.55);
  }
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
  const y0 = PLANET_R;
  const stripes = [0xff4fa3, 0x3ad4ff, 0xffe14a, 0xff4fa3, 0x3ad4ff, 0xf4f7ff, 0xff4fa3];
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.8, 0.7, 8), toonMaterial(gradient, 0x7a3ad4));
  foot.position.y = y0 + 0.32;
  scene.add(foot);
  stripes.forEach((color, index) => {
    const radius = 0.95 - index * 0.06;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius + 0.06, 1.85, 8), toonMaterial(gradient, color));
    band.position.y = y0 + 1.15 + index * 1.85;
    scene.add(band);
  });
  const lamp = new THREE.Mesh(
    new THREE.CylinderGeometry(1.35, 1.35, 1.2, 8),
    new THREE.MeshBasicMaterial({ color: 0xf0a03a, fog: false }),
  );
  lamp.position.y = y0 + 15.2;
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.7, 1.25, 8), toonMaterial(gradient, 0xff4fa3));
  cap.position.y = y0 + 16.4;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.14, 6, 18), new THREE.MeshBasicMaterial({ color: 0x3ad4ff, fog: false }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y0 + 0.16;
  scene.add(lamp, cap, ring);
  blockers.push({ x: 0, y: PLANET_R, z: 0, r: 2.4, h: 17 });
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
