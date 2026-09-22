import * as THREE from 'three';
import type { Controls } from '../input/controls';
import { SPAWN } from '../game/content';
import { toonMaterial } from '../render/toon';
import { resolve, type Blocker } from '../world/collide';

const SPEED = 5.4;
const GRAVITY = 26;
const JUMP = 7.2;
const RADIUS = 0.36;
const STEP = 1 / 90;
const FOLLOW = 12;

export type Player = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  update(dt: number, blockers: readonly Blocker[], frozen: boolean): void;
  consumeInteract(): boolean;
  syncCamera(camera: THREE.PerspectiveCamera, dt: number): void;
  teleport(x: number, z: number, yaw: number): void;
};

export function createPlayer(
  scene: THREE.Scene,
  gradient: THREE.Texture,
  controls: Controls,
): Player {
  let x = SPAWN.x;
  let y = 0;
  let z = SPAWN.z;
  let vy = 0;
  let faceX = 0;
  let faceZ = -1;
  let phase = 0;
  let grounded = true;
  let jumpLatch = false;
  let interactEdge = false;
  const follow = new THREE.Vector3(x, y, z);

  const body = buildAvatar(scene, gradient);
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.46, 14),
    new THREE.MeshBasicMaterial({ color: 0x163024, transparent: true, opacity: 0.32, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.035;
  scene.add(shadow);

  const pose = () => {
    body.position.set(x, y, z);
    body.rotation.y = Math.atan2(faceX, faceZ);
    shadow.position.set(x, 0.035, z);
  };
  pose();

  const api: Player = {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    get z() {
      return z;
    },
    update(dt, blockers, frozen) {
      const input = controls.sample(Math.min(dt, 0.05));
      if (!frozen && input.interact) interactEdge = true;
      const wantJump = !frozen && input.jump;
      if (!wantJump) jumpLatch = false;
      let left = Math.min(dt, 0.05);
      while (left > 0) {
        const h = Math.min(STEP, left);
        left -= h;
        integrate(h, blockers, frozen ? 0 : input.strafe, frozen ? 0 : input.forward, wantJump);
      }
      const moving = !frozen && grounded && (Math.abs(input.strafe) + Math.abs(input.forward) > 0.08);
      if (moving) phase += dt * 8;
      const bob = moving ? Math.sin(phase) * 0.045 : 0;
      body.position.set(x, y + bob, z);
      body.rotation.y = Math.atan2(faceX, faceZ);
      const swing = moving ? Math.sin(phase) * 0.7 : 0;
      const leftLeg = body.getObjectByName('legL');
      const rightLeg = body.getObjectByName('legR');
      if (leftLeg) leftLeg.rotation.x = swing;
      if (rightLeg) rightLeg.rotation.x = -swing;
      shadow.position.set(x, 0.035, z);
      shadow.scale.setScalar(1 - Math.min(0.45, y * 0.3));
    },
    consumeInteract() {
      const hit = interactEdge;
      interactEdge = false;
      return hit;
    },
    syncCamera(camera, dt) {
      const k = 1 - Math.exp(-dt * FOLLOW);
      follow.x += (x - follow.x) * k;
      follow.y += (y - follow.y) * k;
      follow.z += (z - follow.z) * k;
      const portrait = window.innerHeight > window.innerWidth;
      const dist = portrait ? 5.15 : 6.15;
      const horiz = Math.cos(controls.pitch) * dist;
      const yaw = controls.yaw;
      camera.position.set(
        follow.x + Math.sin(yaw) * horiz,
        follow.y + 1.45 + Math.sin(controls.pitch) * dist,
        follow.z + Math.cos(yaw) * horiz,
      );
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      camera.lookAt(follow.x + fx * 0.3, follow.y + 1.2, follow.z + fz * 0.3);
    },
    teleport(nx, nz, faceYaw) {
      x = nx;
      z = nz;
      y = 0;
      vy = 0;
      grounded = true;
      controls.setYaw(faceYaw, 0.42);
      faceX = -Math.sin(faceYaw);
      faceZ = -Math.cos(faceYaw);
      follow.set(nx, 0, nz);
      pose();
    },
  };

  function integrate(h: number, blockers: readonly Blocker[], strafe: number, forward: number, wantJump: boolean): void {
    const yaw = controls.yaw;
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    if (strafe !== 0 || forward !== 0) {
      faceX = rx * strafe + fx * forward;
      faceZ = rz * strafe + fz * forward;
      const mag = Math.hypot(faceX, faceZ) || 1;
      faceX /= mag;
      faceZ /= mag;
      x += faceX * SPEED * h * Math.min(1, Math.hypot(strafe, forward));
      z += faceZ * SPEED * h * Math.min(1, Math.hypot(strafe, forward));
    }
    const solved = resolve(x, z, y, RADIUS, blockers);
    x = solved.x;
    z = solved.z;
    if (grounded && wantJump && !jumpLatch) {
      vy = JUMP;
      y = 0.02;
      grounded = false;
      jumpLatch = true;
    }
    vy -= GRAVITY * h;
    y += vy * h;
    if (y <= 0) {
      y = 0;
      vy = 0;
      grounded = true;
    } else {
      grounded = false;
    }
  }

  return api;
}

function buildAvatar(scene: THREE.Scene, gradient: THREE.Texture): THREE.Group {
  const group = new THREE.Group();
  const cloth = toonMaterial(gradient, 0x1d6fd0);
  const skin = toonMaterial(gradient, 0xffe0c4);
  const ink = toonMaterial(gradient, 0x14283a);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.66, 6), cloth);
  torso.position.y = 1.02;
  group.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), skin);
  head.position.y = 1.56;
  group.add(head);

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.09, 0.1), toonMaterial(gradient, 0xf0a03a));
  visor.position.set(0, 1.58, 0.16);
  group.add(visor);

  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.32, 0.14), ink);
  pack.position.set(0, 1.05, -0.24);
  group.add(pack);

  group.add(leg('legL', -0.11, cloth));
  group.add(leg('legR', 0.11, cloth));
  scene.add(group);
  return group;
}

function leg(name: string, x: number, material: THREE.Material): THREE.Group {
  const pivot = new THREE.Group();
  pivot.name = name;
  pivot.position.set(x, 0.72, 0);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.64, 5), material);
  mesh.position.y = -0.32;
  pivot.add(mesh);
  return pivot;
}
