import * as THREE from 'three';
import { toonMaterial } from '../render/toon';
import { resolve, type Blocker } from '../world/collide';

const SPEED = 6.8;
const GRAVITY = 26;
const JUMP = 7.5;
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
};

export function createPlayer(scene: THREE.Scene, canvas: HTMLCanvasElement, gradient: THREE.Texture): Player {
  const down = new Set<string>();
  let interactEdge = false;
  let jumpLatch = false;
  let yaw = 0;
  let pitch = 0.46;
  let dragging = false;
  let x = 0;
  let y = 0;
  let z = 8;
  let vy = 0;
  let faceX = 0;
  let faceZ = -1;
  let phase = 0;
  let grounded = true;
  const follow = new THREE.Vector3(x, y, z);

  const keys = (event: KeyboardEvent, pressed: boolean) => {
    if (pressed && !event.repeat && (event.code === 'KeyE' || event.code === 'KeyF')) interactEdge = true;
    if (pressed) down.add(event.code);
    else down.delete(event.code);
    if (event.code === 'Space' || event.code.startsWith('Arrow')) event.preventDefault();
  };
  window.addEventListener('keydown', (event) => keys(event, true));
  window.addEventListener('keyup', (event) => keys(event, false));
  window.addEventListener('blur', () => {
    down.clear();
    dragging = false;
  });

  canvas.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    dragging = true;
    canvas.focus();
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    const locked = document.pointerLockElement === canvas;
    if (!locked && !dragging) return;
    yaw -= event.movementX * (locked ? 0.0022 : 0.0048);
    pitch = THREE.MathUtils.clamp(pitch + event.movementY * (locked ? 0.0018 : 0.0036), 0.18, 1.05);
  });
  const endDrag = () => {
    dragging = false;
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  const body = buildAvatar(scene, gradient);
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 12),
    new THREE.MeshBasicMaterial({ color: 0x1b3324, transparent: true, opacity: 0.28, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  scene.add(shadow);

  body.position.set(x, y, z);
  body.rotation.y = Math.atan2(faceX, faceZ);
  shadow.position.set(x, 0.03, z);

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
      if (frozen) interactEdge = false;
      const wantJump = !frozen && down.has('Space');
      if (!wantJump) jumpLatch = false;
      let left = Math.min(dt, 0.05);
      while (left > 0) {
        const h = Math.min(STEP, left);
        left -= h;
        step(h, blockers, frozen, wantJump);
      }
      const moving = !frozen && grounded && (down.has('KeyW') || down.has('KeyA') || down.has('KeyS') || down.has('KeyD') || down.has('ArrowUp') || down.has('ArrowDown'));
      if (moving) phase += dt * 9;
      const bob = moving ? Math.sin(phase) * 0.04 : 0;
      body.position.set(x, y + bob, z);
      body.rotation.y = Math.atan2(faceX, faceZ);
      const leg = moving ? Math.sin(phase) * 0.55 : 0;
      const leftLeg = body.getObjectByName('legL');
      const rightLeg = body.getObjectByName('legR');
      if (leftLeg) leftLeg.rotation.x = leg;
      if (rightLeg) rightLeg.rotation.x = -leg;
      shadow.position.set(x, 0.03, z);
      const lift = 1 - Math.min(0.4, y * 0.28);
      shadow.scale.setScalar(lift);
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
      const dist = 6.3;
      const horiz = Math.cos(pitch) * dist;
      camera.position.set(
        follow.x + Math.sin(yaw) * horiz,
        follow.y + 1.35 + Math.sin(pitch) * dist,
        follow.z + Math.cos(yaw) * horiz,
      );
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      camera.lookAt(follow.x + fx * 0.35, follow.y + 1.15, follow.z + fz * 0.35);
    },
  };

  function step(h: number, blockers: readonly Blocker[], frozen: boolean, wantJump: boolean): void {
    if (!frozen && down.has('KeyQ')) yaw += h * 1.7;
    if (!frozen && down.has('KeyR')) yaw -= h * 1.7;

    let strafe = 0;
    let forward = 0;
    if (!frozen && (down.has('KeyA') || down.has('ArrowLeft'))) strafe -= 1;
    if (!frozen && (down.has('KeyD') || down.has('ArrowRight'))) strafe += 1;
    if (!frozen && (down.has('KeyW') || down.has('ArrowUp'))) forward += 1;
    if (!frozen && (down.has('KeyS') || down.has('ArrowDown'))) forward -= 1;
    const mag = Math.hypot(strafe, forward);
    if (mag > 1) {
      strafe /= mag;
      forward /= mag;
    }
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    if (mag > 0) {
      faceX = rx * strafe + fx * forward;
      faceZ = rz * strafe + fz * forward;
      x += faceX * SPEED * h;
      z += faceZ * SPEED * h;
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
  const cloth = toonMaterial(gradient, 0x1f6fbf);
  const skin = toonMaterial(gradient, 0xffe0c4);
  const ink = toonMaterial(gradient, 0x16324a);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.62, 6), cloth);
  torso.position.y = 0.98;
  group.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 7, 6), skin);
  head.position.y = 1.48;
  group.add(head);

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.08, 0.08), toonMaterial(gradient, 0xf0a03a));
  visor.position.set(0, 1.5, 0.16);
  group.add(visor);

  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.12), ink);
  pack.position.set(0, 1.02, -0.22);
  group.add(pack);

  group.add(leg('legL', -0.1, cloth));
  group.add(leg('legR', 0.1, cloth));
  scene.add(group);
  return group;
}

function leg(name: string, x: number, material: THREE.Material): THREE.Group {
  const pivot = new THREE.Group();
  pivot.name = name;
  pivot.position.set(x, 0.7, 0);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.62, 5), material);
  mesh.position.y = -0.32;
  pivot.add(mesh);
  return pivot;
}
