import * as THREE from 'three';
import type { Controls } from '../input/controls';
import { SPAWN, SPAWN_FACE } from '../game/content';
import { toonMaterial } from '../render/toon';
import { resolve, type Blocker } from '../world/collide';
import { frameQuaternion, PLANET_R } from '../world/planet';
import { shellLift } from '../world/relief';

const WALK = 2.35;
const RUN = 4.7;
const GRAVITY = 27;
const JUMP = 5.15;
const JUMP2 = 3.85;
const RADIUS = 0.09;
const STEP = 1 / 90;
const FOLLOW = 9;

export type Gait = 'idle' | 'walk' | 'run' | 'air';

export type Player = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly gait: Gait;
  /** Raggio dei piedi disegnati. Deve coincidere con la posizione sul guscio. */
  readonly radius: number;
  update(dt: number, blockers: readonly Blocker[], frozen: boolean): void;
  consumeInteract(): boolean;
  syncCamera(camera: THREE.PerspectiveCamera, dt: number): void;
  teleport(x: number, y: number, z: number, faceX: number, faceY: number, faceZ: number): void;
  lookToward(x: number, y: number, z: number): void;
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
  let extraJump = true;
  let hopCue = 0;
  let interactEdge = false;
  let gait: Gait = 'idle';
  let rendered = PLANET_R;
  const basis = new THREE.Vector3(SPAWN_FACE.x, SPAWN_FACE.y, SPAWN_FACE.z).normalize();
  const face = basis.clone();
  const follow = new THREE.Vector3(x, y, z).normalize();

  const body = buildAvatar(scene, gradient);
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.1, 12),
    new THREE.MeshBasicMaterial({ color: 0x1a2430, transparent: true, opacity: 0.28, depthWrite: false }),
  );
  scene.add(shadow);

  const place = (bob = 0) => {
    up.set(x, y, z).normalize();
    const feet = Math.hypot(x, y, z);
    body.position.copy(up).multiplyScalar(feet + bob);
    rendered = feet + bob;
    body.quaternion.copy(frameQuaternion(up.x, up.y, up.z, face.x, face.y, face.z));
    shadow.position.copy(up).multiplyScalar(Math.max(PLANET_R, feet - alt) + 0.03);
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
    get gait() {
      return gait;
    },
    get radius() {
      return rendered;
    },
    update(dt, blockers, frozen) {
      const input = controls.sample(Math.min(dt, 0.05));
      if (!frozen && input.interact) interactEdge = true;
      const wantJump = !frozen && input.jump;
      if (!wantJump) jumpLatch = false;
      const run = !frozen && input.run;
      let left = Math.min(dt, 0.05);
      while (left > 0) {
        const h = Math.min(STEP, left);
        left -= h;
        integrate(h, blockers, frozen ? 0 : input.strafe, frozen ? 0 : input.forward, wantJump, run);
      }
      const moving = !frozen && grounded && Math.abs(input.strafe) + Math.abs(input.forward) > 0.08;
      const running = moving && run;
      if (moving) phase += dt * (running ? 15.5 : 7.6);
      const bob = moving ? Math.sin(phase * 2) * (running ? 0.02 : 0.01) : 0;
      if (!grounded && alt > 0.08) gait = 'air';
      else if (running) gait = 'run';
      else if (moving) gait = 'walk';
      else gait = 'idle';
      place(bob);
      hopCue = Math.max(0, hopCue - dt * 2.6);
      pose(gait, hopCue);
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
      const dist = portrait ? 3.15 : 3.7;
      const horiz = Math.cos(controls.pitch) * dist;
      const anchor = Math.hypot(x, y, z);
      camera.fov = portrait ? 70 : 60;
      camera.updateProjectionMatrix();
      camera.position
        .copy(follow)
        .multiplyScalar(anchor)
        .addScaledVector(follow, 0.7 + Math.sin(controls.pitch) * dist * 0.72)
        .addScaledVector(head, -horiz);
      camera.up.copy(follow);
      look.copy(follow).multiplyScalar(anchor).addScaledVector(follow, 0.2).addScaledVector(head, 1.45);
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
      extraJump = true;
      hopCue = 0;
      const shell = PLANET_R + shellLift(up.x, up.y, up.z);
      x = up.x * shell;
      y = up.y * shell;
      z = up.z * shell;
      basis.set(faceX, faceY, faceZ);
      basis.addScaledVector(up, -basis.dot(up));
      if (basis.lengthSq() < 1e-6) basis.set(1, 0, 0).addScaledVector(up, -up.x);
      basis.normalize();
      face.copy(basis);
      controls.setYaw(0, 0.4);
      follow.copy(up);
      place();
    },
    lookToward(tx, ty, tz) {
      up.set(x, y, z).normalize();
      basis.set(tx - x, ty - y, tz - z);
      basis.addScaledVector(up, -basis.dot(up));
      if (basis.lengthSq() < 1e-8) return;
      basis.normalize();
      face.copy(basis);
      controls.setYaw(0, 0.42);
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

  function integrate(
    h: number,
    blockers: readonly Blocker[],
    strafe: number,
    forward: number,
    wantJump: boolean,
    run: boolean,
  ): void {
    up.set(x, y, z).normalize();
    heading(head);
    right.crossVectors(head, up).normalize();
    if (strafe !== 0 || forward !== 0) {
      face.copy(right).multiplyScalar(strafe).addScaledVector(head, forward);
      const mag = Math.min(1, face.length());
      face.normalize();
      const pace = run ? RUN : WALK;
      x += face.x * pace * h * mag;
      y += face.y * pace * h * mag;
      z += face.z * pace * h * mag;
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
    if (wantJump && !jumpLatch) {
      if (grounded) {
        vy = JUMP;
        alt = 0.04;
        grounded = false;
        extraJump = true;
        jumpLatch = true;
      } else if (extraJump) {
        vy = JUMP2;
        extraJump = false;
        hopCue = 1;
        jumpLatch = true;
      }
    }
    vy -= GRAVITY * h;
    alt += vy * h;
    if (alt <= 0) {
      alt = 0;
      vy = 0;
      grounded = true;
      extraJump = true;
    } else {
      grounded = false;
    }
    up.set(x, y, z).normalize();
    const ground = shellLift(up.x, up.y, up.z);
    const shell = PLANET_R + ground + alt;
    x = up.x * shell;
    y = up.y * shell;
    z = up.z * shell;
  }

  return api;

  function pose(step: Gait, cue: number): void {
    const air = step === 'air';
    const run = step === 'run';
    const walk = step === 'walk';
    const swing = run ? Math.sin(phase) * 1.5 : walk ? Math.sin(phase) * 0.72 : 0;
    const legL = body.getObjectByName('legL');
    const legR = body.getObjectByName('legR');
    const armL = body.getObjectByName('armL');
    const armR = body.getObjectByName('armR');
    const torso = body.getObjectByName('torso');
    const cape = body.getObjectByName('cape');
    const puff = body.getObjectByName('puff');
    if (legL && legR) {
      legL.rotation.x = air ? 0.7 : swing;
      legR.rotation.x = air ? -0.45 : -swing;
    }
    if (armL && armR) {
      const pump = run ? 1.2 : 0.62;
      const lift = air ? (cue > 0.05 ? -1.45 : -0.85) : 0;
      armL.rotation.x = air ? lift : swing * pump;
      armR.rotation.x = air ? lift : -swing * pump;
      armL.rotation.z = run ? 0.35 : 0.08;
      armR.rotation.z = run ? -0.35 : -0.08;
    }
    if (torso) torso.rotation.x = air ? -0.22 : run ? 0.42 : walk ? 0.14 : 0;
    if (cape) {
      const stream = run ? 1.05 + Math.sin(phase * 2) * 0.22 : walk ? 0.28 + Math.sin(phase) * 0.16 : 0.1;
      cape.rotation.x = air ? 0.85 : stream;
    }
    if (puff instanceof THREE.Mesh && puff.material instanceof THREE.MeshBasicMaterial) {
      puff.material.opacity = cue * 0.9;
      puff.scale.setScalar(0.55 + (1 - cue) * 1.7);
    }
  }
}

function buildAvatar(scene: THREE.Scene, gradient: THREE.Texture): THREE.Group {
  const group = new THREE.Group();
  const cloth = toonMaterial(gradient, 0x1d6fd0);
  const skin = toonMaterial(gradient, 0xffe0c4);
  const ink = toonMaterial(gradient, 0x14283a);
  const capeMat = toonMaterial(gradient, 0x123f86);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.62, 6), cloth);
  torso.name = 'torso';
  torso.position.y = 1.22;
  group.add(torso);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.12, 5), skin);
  neck.position.y = 1.58;
  group.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.145, 8, 6), skin);
  head.position.y = 1.74;
  group.add(head);

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.055, 0.07), toonMaterial(gradient, 0xf0a03a));
  visor.position.set(0, 1.76, 0.11);
  group.add(visor);

  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.28, 0.08), ink);
  pack.position.set(0, 1.24, -0.16);
  group.add(pack);

  const cape = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.46, 0.03), capeMat);
  cape.name = 'cape';
  cape.position.set(0, 1.18, -0.2);
  cape.geometry.translate(0, -0.18, 0);
  group.add(cape);

  group.add(limb('legL', -0.09, 0.88, 0.78, 0.045, cloth));
  group.add(limb('legR', 0.09, 0.88, 0.78, 0.045, cloth));
  group.add(limb('armL', -0.2, 1.46, 0.58, 0.032, cloth));
  group.add(limb('armR', 0.2, 1.46, 0.58, 0.032, cloth));

  const puff = new THREE.Mesh(
    new THREE.TorusGeometry(0.95, 0.07, 5, 14),
    new THREE.MeshBasicMaterial({ color: 0xf6c14a, transparent: true, opacity: 0, depthWrite: false }),
  );
  puff.name = 'puff';
  puff.rotation.x = Math.PI / 2;
  puff.position.y = 0.12;
  group.add(puff);

  group.scale.setScalar(0.2);
  scene.add(group);
  return group;
}

function limb(name: string, x: number, y: number, length: number, radius: number, material: THREE.Material): THREE.Group {
  const pivot = new THREE.Group();
  pivot.name = name;
  pivot.position.set(x, y, 0);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.85, radius, length, 5), material);
  mesh.position.y = -length / 2;
  pivot.add(mesh);
  return pivot;
}
