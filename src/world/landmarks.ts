import * as THREE from 'three';
import { toonMaterial } from '../render/toon';
import type { Blocker } from './collide';
import { HUB_AZ, HUB_COLAT } from './intensity';
import { frameQuaternion, shift } from './planet';

/**
 * Silhouette dei nodi fuori dal hub, più la cupola e la bocca del tunnel.
 * Non sono paesi: il grafo resta Faro—Hub—A—Arena, Hub—B, Hub—C—Belvedere.
 * Vedi ART.md.
 */

const MAGENTA = 0xff4fa3;
const LIME = 0xc6f25a;
const TEAL = 0x2ee0c5;
const CYAN = 0x3ad4ff;
const YELLOW = 0xffe14a;
const ORANGE = 0xff6a22;
const GREY = 0xc8c6d4;
const INK = 0x2a1848;
const PINK = 0xff7ad4;

export const LANDMARK_POINTS = {
  paeseA: planted(-46, 8),
  arena: planted(-78, -4),
  paeseB: planted(12, 64),
  paeseC: planted(-10, -54),
  belvedere: planted(8, -86),
} as const;

export function addLandmarks(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  addDome(scene, gradient, blockers);
  addTunnel(scene, gradient);
  addSoftA(scene, gradient);
  addArena(scene, gradient);
  addSpiralB(scene, gradient, blockers);
  addOpenC(scene, gradient);
  addRidge(scene, gradient, blockers);
}

function addDome(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(3.4, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.52),
    toonMaterial(gradient, MAGENTA),
  );
  place(shell, -16.6, 15.4, 0);
  scene.add(shell);
  const lip = new THREE.Mesh(
    new THREE.TorusGeometry(3.15, 0.16, 6, 18),
    new THREE.MeshBasicMaterial({ color: CYAN, fog: false }),
  );
  place(lip, -16.6, 15.4, 0.35);
  lip.rotateX(Math.PI / 2);
  scene.add(lip);
  for (let i = 0; i < 4; i += 1) {
    const ang = i * 1.15;
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(1.35 - i * 0.18, 1.45 - i * 0.18, 0.16, 8), toonMaterial(gradient, GREY));
    place(deck, -16.6 + Math.cos(ang) * 1.15, 15.4 + Math.sin(ang) * 1.15, 0.7 + i * 0.85);
    scene.add(deck);
    const edge = new THREE.Mesh(
      new THREE.TorusGeometry(1.35 - i * 0.18, 0.05, 5, 14),
      new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? CYAN : PINK, fog: false }),
    );
    place(edge, -16.6 + Math.cos(ang) * 1.15, 15.4 + Math.sin(ang) * 1.15, 0.82 + i * 0.85);
    edge.rotateX(Math.PI / 2);
    scene.add(edge);
  }
  const raw = shift(HUB_COLAT, HUB_AZ, -16.6, 15.4);
  blockers.push({ x: raw.x, y: raw.y, z: raw.z, r: 2.4, h: 4.2 });
}

function addTunnel(scene: THREE.Scene, gradient: THREE.Texture): void {
  const ink = toonMaterial(gradient, INK);
  const postL = new THREE.Mesh(new THREE.BoxGeometry(0.45, 2.2, 0.45), ink);
  const postR = new THREE.Mesh(new THREE.BoxGeometry(0.45, 2.2, 0.45), ink);
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.35, 0.45), ink);
  place(postL, -28.4, 4.2, 1.1);
  place(postR, -28.4, 6.6, 1.1);
  place(lintel, -28.4, 5.4, 2.15);
  scene.add(postL, postR, lintel);
  const glow = new THREE.Mesh(
    new THREE.TorusGeometry(1.15, 0.06, 5, 14),
    new THREE.MeshBasicMaterial({ color: CYAN, fog: false }),
  );
  place(glow, -28.4, 5.4, 1.15);
  scene.add(glow);
  for (const east of [6.4, -6.2]) {
    const pit = new THREE.Mesh(new THREE.CircleGeometry(2.6, 8), new THREE.MeshBasicMaterial({ color: ORANGE, fog: false, side: THREE.DoubleSide }));
    place(pit, -22.4, east, 0.08);
    pit.rotateX(-Math.PI / 2);
    scene.add(pit);
  }
  const stub = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.18, 3.4), toonMaterial(gradient, GREY));
  place(stub, -31.2, 5.4, 0.2);
  scene.add(stub);
}

function addSoftA(scene: THREE.Scene, gradient: THREE.Texture): void {
  const pad = new THREE.Mesh(new THREE.CircleGeometry(7.2, 10), toonMaterial(gradient, 0xd43d92));
  place(pad, -46, 8, 0.05);
  pad.rotateX(-Math.PI / 2);
  scene.add(pad);
  cones(scene, gradient, -46, 8, 6, 5.2, [MAGENTA, TEAL, LIME]);
}

function addArena(scene: THREE.Scene, gradient: THREE.Texture): void {
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 8.2, 1.4, 10), toonMaterial(gradient, 0xc02688));
  place(bowl, -78, -4, 0.7);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(6, 10), new THREE.MeshBasicMaterial({ color: CYAN, fog: false }));
  place(floor, -78, -4, 1.35);
  floor.rotateX(-Math.PI / 2);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(7.6, 0.38, 6, 16), toonMaterial(gradient, PINK));
  place(rim, -78, -4, 1.45);
  rim.rotateX(Math.PI / 2);
  scene.add(bowl, floor, rim);
}

function addSpiralB(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const n = 12;
  const e = 64;
  for (let i = 0; i < 6; i += 1) {
    const ang = i * 1.05;
    const radius = 3.4 - i * 0.28;
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius + 0.15, 0.28, 8), toonMaterial(gradient, GREY));
    place(deck, n + Math.cos(ang) * 1.6, e + Math.sin(ang) * 1.6, 0.4 + i * 1.35);
    const edge = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.08, 5, 14),
      new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? CYAN : PINK, fog: false }),
    );
    place(edge, n + Math.cos(ang) * 1.6, e + Math.sin(ang) * 1.6, 0.58 + i * 1.35);
    edge.rotateX(Math.PI / 2);
    scene.add(deck, edge);
  }
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 8.2, 6), toonMaterial(gradient, 0x6a32c8));
  place(core, n, e, 4.1);
  scene.add(core);
  const raw = shift(HUB_COLAT, HUB_AZ, n, e);
  blockers.push({ x: raw.x, y: raw.y, z: raw.z, r: 1.1, h: 8 });
}

function addOpenC(scene: THREE.Scene, gradient: THREE.Texture): void {
  const pad = new THREE.Mesh(new THREE.CircleGeometry(8, 8), toonMaterial(gradient, 0x7a3ad4));
  place(pad, -10, -54, 0.04);
  pad.rotateX(-Math.PI / 2);
  scene.add(pad);
  cones(scene, gradient, -10, -54, 7, 6.4, [LIME, TEAL, YELLOW, MAGENTA]);
}

function addRidge(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const heights = [3.2, 6.4, 4.6, 2.6];
  heights.forEach((height, index) => {
    const block = new THREE.Mesh(new THREE.BoxGeometry(3.2, height, 2.4), toonMaterial(gradient, index % 2 === 0 ? 0x8a3ad4 : 0xff4fa3));
    const east = -86 + index * 4.2;
    place(block, 8, east, height * 0.5);
    scene.add(block);
    const raw = shift(HUB_COLAT, HUB_AZ, 8, east);
    blockers.push({ x: raw.x, y: raw.y, z: raw.z, r: 1.5, h: height });
  });
}

function cones(
  scene: THREE.Scene,
  gradient: THREE.Texture,
  north: number,
  east: number,
  count: number,
  radius: number,
  colors: readonly number[],
): void {
  const geo = new THREE.ConeGeometry(0.7, 2.1, 6);
  geo.translate(0, 1.05, 0);
  const mesh = new THREE.InstancedMesh(geo, toonMaterial(gradient, 0xffffff), count);
  mesh.frustumCulled = false;
  for (let i = 0; i < count; i += 1) {
    const ang = (i / count) * Math.PI * 2 + 0.4;
    const n = north + Math.cos(ang) * radius * (0.45 + (i % 3) * 0.2);
    const e = east + Math.sin(ang) * radius * (0.45 + (i % 2) * 0.25);
    const color = colors[i % colors.length] ?? MAGENTA;
    const dummy = new THREE.Object3D();
    const at = shift(HUB_COLAT, HUB_AZ, n, e);
    dummy.position.set(at.x, at.y, at.z);
    dummy.quaternion.copy(frameQuaternion(at.x, at.y, at.z, 1, 0, 0));
    dummy.scale.setScalar(0.8 + (i % 3) * 0.35);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    mesh.setColorAt(i, new THREE.Color(color));
  }
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  scene.add(mesh);
}

function place(mesh: THREE.Object3D, north: number, east: number, lift: number): void {
  const at = shift(HUB_COLAT, HUB_AZ, north, east);
  const len = Math.hypot(at.x, at.y, at.z) || 1;
  mesh.position.set(at.x + (at.x / len) * lift, at.y + (at.y / len) * lift, at.z + (at.z / len) * lift);
  mesh.quaternion.copy(frameQuaternion(at.x, at.y, at.z, 1, 0, 0));
}

function planted(north: number, east: number): { x: number; y: number; z: number } {
  return shift(HUB_COLAT, HUB_AZ, north, east);
}
