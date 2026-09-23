import * as THREE from 'three';
import type { Controls } from '../input/controls';
import { SPAWN, SPAWN_FACE } from '../game/content';
import { toonMaterial } from '../render/toon';
import { resolve, type Blocker } from '../world/collide';
import { frameQuaternion, PLANET_R } from '../world/planet';

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
  teleport(x: number, y: number, z: number, faceX: number, faceY: number, faceZ: number): void;
  aim(): { x: number; y: number; z: number };
};

const up = new THREE.Vector3();
const head = new THREE.Vector3();
const right = new THREE.Vector3();
const spin = new THREE.Quaternion();
const look = new THREE.Vector3();

export function createPlayer(scene: THREE.Scene, gradient: THREE.Texture, controls: Controls): Player {
  let x = SPAWN.x;
  let y = SPAWN.y;
  let z = SPAWN.z;
  let alt = 0;
  let vy = 0;
  let phase = 0;
  let grounded = true;
  let jumpLatch = false;
  let interactEdge = false;
  const basis = new THREE.Vector3(SPAWN_FACE.x, SPAWN_FACE.y, SPAWN_FACE.z).normalize();
  const face = basis.clone();
  const follow = new THREE.Vector3(x, y, z).normalize();

  const body = buildAvatar(scene, gradient);
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.46, 14),
    new THREE.MeshBasicMaterial({ color: 0x1a2430, transparent: true, opacity: 0.28, depthWrite: false }),
  );
  scene.add(shadow);

  const place = (bob = 0) => {
    up.set(x, y, z).normalize();
    const lift = PLANET_R + alt + bob;
    body.position.copy(up).multiplyScalar(lift);
    body.quaternion.copy(frameQuaternion(up.x, up.y, up.z, face.x, face.y, face.z));
    shadow.position.copy(up).multiplyScalar(PLANET_R + 0.05);
    spin.setFromUnitVectors(look.set(0, 0, 1), up);
    shadow.quaternion.copy(spin);
    shadow.scale.setScalar(1 - Math.min(0.45, alt * 0.28));
  };
  place();

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
      const moving = !frozen && grounded && Math.abs(input.strafe) + Math.abs(input.forward) > 0.08;
      if (moving) phase += dt * 8;
      const bob = moving ? Math.sin(phase) * 0.045 : 0;
      place(bob);
      const swing = moving ? Math.sin(phase) * 0.7 : 0;
      const leftLeg = body.getObjectByName('legL');
      const rightLeg = body.getObjectByName('legR');
      if (leftLeg) leftLeg.rotation.x = swing;
      if (rightLeg) rightLeg.rotation.x = -swing;
    },
    consumeInteract() {
      const hit = interactEdge;
      interactEdge = false;
      return hit;
    },
    syncCamera(camera, dt) {
      const k = 1 - Math.exp(-dt * FOLLOW);
      up.set(x, y, z).normalize();
      follow.lerp(up, k).normalize();
      heading(head);
      const portrait = window.innerHeight > window.innerWidth;
      const dist = portrait ? 5.35 : 6.35;
      const horiz = Math.cos(controls.pitch) * dist;
      const anchor = PLANET_R + alt;
      camera.position
        .copy(follow)
        .multiplyScalar(anchor)
        .addScaledVector(follow, 1.2 + Math.sin(controls.pitch) * dist)
        .addScaledVector(head, -horiz);
      camera.up.copy(follow);
      look.copy(follow).multiplyScalar(anchor).addScaledVector(follow, 1.05).addScaledVector(head, 0.45);
      camera.lookAt(look);
    },
    aim() {
      heading(head);
      return { x: head.x, y: head.y, z: head.z };
    },
    teleport(nx, ny, nz, faceX, faceY, faceZ) {
      up.set(nx, ny, nz).normalize();
      alt = 0;
      vy = 0;
      grounded = true;
      x = up.x * PLANET_R;
      y = up.y * PLANET_R;
      z = up.z * PLANET_R;
      basis.set(faceX, faceY, faceZ);
      basis.addScaledVector(up, -basis.dot(up));
      if (basis.lengthSq() < 1e-6) basis.set(1, 0, 0).addScaledVector(up, -up.x);
      basis.normalize();
      face.copy(basis);
      controls.setYaw(0, 0.5);
      follow.copy(up);
      place();
    },
  };

  function heading(out: THREE.Vector3): void {
    up.set(x, y, z).normalize();
    spin.setFromAxisAngle(up, controls.yaw);
    out.copy(basis).applyQuaternion(spin);
    out.addScaledVector(up, -out.dot(up));
    if (out.lengthSq() < 1e-6) out.set(0, 0, 1);
    out.normalize();
  }

  function integrate(h: number, blockers: readonly Blocker[], strafe: number, forward: number, wantJump: boolean): void {
    up.set(x, y, z).normalize();
    heading(head);
    right.crossVectors(head, up).normalize();
    if (strafe !== 0 || forward !== 0) {
      face.copy(right).multiplyScalar(strafe).addScaledVector(head, forward);
      const mag = Math.min(1, face.length());
      face.normalize();
      x += face.x * SPEED * h * mag;
      y += face.y * SPEED * h * mag;
      z += face.z * SPEED * h * mag;
    }
    const solved = resolve(x, y, z, alt, RADIUS, blockers);
    x = solved.x;
    y = solved.y;
    z = solved.z;
    up.set(x, y, z).normalize();
    basis.addScaledVector(up, -basis.dot(up));
    if (basis.lengthSq() < 1e-6) basis.set(1, 0, 0).addScaledVector(up, -up.x);
    basis.normalize();
    face.addScaledVector(up, -face.dot(up));
    if (face.lengthSq() < 1e-6) face.copy(basis);
    else face.normalize();
    if (grounded && wantJump && !jumpLatch) {
      vy = JUMP;
      alt = 0.02;
      grounded = false;
      jumpLatch = true;
    }
    vy -= GRAVITY * h;
    alt += vy * h;
    if (alt <= 0) {
      alt = 0;
      vy = 0;
      grounded = true;
    } else {
      grounded = false;
    }
    up.set(x, y, z).normalize();
    const shell = PLANET_R + alt;
    x = up.x * shell;
    y = up.y * shell;
    z = up.z * shell;
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
