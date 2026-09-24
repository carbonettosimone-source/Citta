import * as THREE from 'three';
import { commit, setInstanceQuat } from '../render/instance';
import { flatInstances, toonInstances } from '../render/toon';
import type { Blocker } from './collide';
import { WORLD_SEED, unit } from './hash';
import { HUB_AZ, HUB_COLAT, HUB_MODULES, tangentVector } from './intensity';
import { frameQuaternion, shift } from './planet';
import { seat } from './relief';

/**
 * Grammatica delle strutture strane. Tre primitive, cinque archetipi.
 * Stesso seme e stesso slot ⇒ stessa sagoma. Niente case, niente kit di villaggio.
 * Altri nodi (Paese, Arena) riusano `structureFor` quando arriveranno.
 */

const INK = 0x2a3144;
const DEEP = 0x1b2436;
const PAPER = 0xf4efe4;
const GOLD = 0xf0a03a;
const CYAN = 0x3ad4ff;

export const ARCHETYPES = ['spindle', 'halo', 'bracket', 'split', 'stack'] as const;
export type Archetype = (typeof ARCHETYPES)[number];
export type Primitive = 'box' | 'ring' | 'gem';

export type StructurePart = {
  primitive: Primitive;
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
  sz: number;
  rx: number;
  ry: number;
  rz: number;
  color: number;
};

export type StrangeStructure = {
  archetype: Archetype;
  parts: StructurePart[];
  radius: number;
  height: number;
};

type Loose = {
  primitive: Primitive;
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
  sz: number;
  rx?: number;
  ry?: number;
  rz?: number;
  color: number;
};

export function structureFor(seed: number, slot: number, scale = 1): StrangeStructure {
  const archetype = ARCHETYPES[Math.floor(unit(seed, slot, 19) * ARCHETYPES.length)] ?? 'spindle';
  const lean = (unit(seed, slot, 11) - 0.5) * 0.55;
  const twist = (unit(seed, slot, 13) - 0.5) * 0.9;
  const parts = (archetype === 'halo'
    ? halo(lean, twist)
    : archetype === 'bracket'
      ? bracket(twist)
      : archetype === 'split'
        ? split(lean, twist)
        : archetype === 'stack'
          ? stack(twist)
          : spindle(lean)
  ).map((part) => scalePart(part, scale));
  const height = parts.reduce((max, part) => Math.max(max, part.y + part.sy * 0.5), 0.4);
  return {
    archetype,
    parts,
    radius: 0.82 * scale,
    height: Math.max(1.05, height * 0.92),
  };
}

/** Vuoto se ogni filler del hub ha una sagoma stabile e non è un cubo solo. */
export function auditStructures(): string[] {
  const problems: string[] = [];
  const fillers = HUB_MODULES.filter((mod) => mod.tag === 'filler');
  const seen = new Set<Archetype>();
  for (const mod of fillers) {
    const a = structureFor(WORLD_SEED, mod.slot);
    const b = structureFor(WORLD_SEED, mod.slot);
    if (a.archetype !== b.archetype || a.parts.length !== b.parts.length) {
      problems.push('struttura instabile');
      break;
    }
    if (a.parts.length < 3) problems.push(`${a.archetype} troppo povera`);
    const kinds = new Set(a.parts.map((part) => part.primitive));
    if (kinds.size < 2) problems.push(`${a.archetype} usa una sola primitiva`);
    seen.add(a.archetype);
  }
  if (fillers.length > 0 && seen.size < 3) problems.push('il hub non varia gli archetipi');
  return problems;
}

export function addStrangeStructures(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): void {
  const fillers = HUB_MODULES.filter((mod) => mod.tag === 'filler');
  if (fillers.length === 0) return;
  let landmark = fillers[0];
  for (const mod of fillers) {
    if (!landmark || mod.intensity > landmark.intensity) landmark = mod;
  }
  const built = fillers.map((mod) => {
    const dist = Math.hypot(mod.north, mod.east);
    const edge = dist >= 20;
    const mark = mod.slot === landmark?.slot ? 1.28 : 1;
    const scale = (edge ? 0.74 : 1) * mark * (0.9 + unit(WORLD_SEED, mod.slot, 8) * 0.18);
    return { mod, spec: structureFor(WORLD_SEED, mod.slot, scale) };
  });

  const boxes = built.flatMap((item) => item.spec.parts.filter((part) => part.primitive === 'box'));
  const rings = built.flatMap((item) => item.spec.parts.filter((part) => part.primitive === 'ring'));
  const gems = built.flatMap((item) => item.spec.parts.filter((part) => part.primitive === 'gem'));
  const boxMesh = meshOf(new THREE.BoxGeometry(1, 1, 1), toonInstances(gradient), boxes.length);
  const ringMesh = meshOf(new THREE.TorusGeometry(0.48, 0.045, 6, 18), flatInstances(), rings.length);
  const gemMesh = meshOf(new THREE.OctahedronGeometry(0.22, 0), flatInstances(), gems.length);

  const cursor = { box: 0, ring: 0, gem: 0 };
  const meshes = { box: boxMesh, ring: ringMesh, gem: gemMesh };
  for (const item of built) {
    const yaw = unit(WORLD_SEED, item.mod.slot, 3) * Math.PI * 2;
    const face = tangentVector(item.mod.north, item.mod.east, Math.cos(yaw), Math.sin(yaw));
    const raw = shift(HUB_COLAT, HUB_AZ, item.mod.north, item.mod.east);
    const origin = seat(raw.x, raw.y, raw.z);
    const frame = frameQuaternion(origin.x, origin.y, origin.z, face.x, face.y, face.z);
    for (const part of item.spec.parts) {
      const posed = posePart(origin, frame, part);
      const target = meshes[part.primitive];
      const index = cursor[part.primitive];
      cursor[part.primitive] += 1;
      if (!target) continue;
      setInstanceQuat(
        target,
        index,
        posed.x,
        posed.y,
        posed.z,
        part.sx,
        part.sy,
        part.sz,
        posed.qx,
        posed.qy,
        posed.qz,
        posed.qw,
        part.color,
      );
    }
    blockers.push({ x: origin.x, y: origin.y, z: origin.z, r: item.spec.radius, h: item.spec.height });
  }

  for (const target of [boxMesh, ringMesh, gemMesh]) {
    if (!target) continue;
    commit(target);
    scene.add(target);
  }
}

function meshOf(geo: THREE.BufferGeometry, material: THREE.Material, count: number): THREE.InstancedMesh | null {
  if (count === 0) {
    geo.dispose();
    return null;
  }
  const mesh = new THREE.InstancedMesh(geo, material, count);
  mesh.frustumCulled = false;
  return mesh;
}

const euler = new THREE.Euler();
const localQ = new THREE.Quaternion();
const worldQ = new THREE.Quaternion();
const offset = new THREE.Vector3();

function posePart(
  origin: { x: number; y: number; z: number },
  frame: THREE.Quaternion,
  part: StructurePart,
): { x: number; y: number; z: number; qx: number; qy: number; qz: number; qw: number } {
  euler.set(part.rx, part.ry, part.rz, 'YXZ');
  localQ.setFromEuler(euler);
  worldQ.copy(frame).multiply(localQ);
  offset.set(part.x, part.y, part.z).applyQuaternion(frame);
  return {
    x: origin.x + offset.x,
    y: origin.y + offset.y,
    z: origin.z + offset.z,
    qx: worldQ.x,
    qy: worldQ.y,
    qz: worldQ.z,
    qw: worldQ.w,
  };
}

function scalePart(part: Loose, scale: number): StructurePart {
  return {
    primitive: part.primitive,
    x: part.x * scale,
    y: part.y * scale,
    z: part.z * scale,
    sx: part.sx * scale,
    sy: part.sy * scale,
    sz: part.sz * scale,
    rx: part.rx ?? 0,
    ry: part.ry ?? 0,
    rz: part.rz ?? 0,
    color: part.color,
  };
}

function spindle(lean: number): Loose[] {
  return [
    { primitive: 'box', x: 0, y: 0.16, z: 0, sx: 1.15, sy: 0.32, sz: 1.15, color: INK },
    { primitive: 'box', x: lean, y: 1.45, z: 0.05, sx: 0.14, sy: 2.15, sz: 0.14, rx: lean * 0.35, color: DEEP },
    { primitive: 'ring', x: lean, y: 1.35, z: 0.05, sx: 1.15, sy: 1.15, sz: 1.15, rx: Math.PI / 2, color: CYAN },
    { primitive: 'gem', x: lean, y: 2.55, z: 0.05, sx: 1, sy: 1.35, sz: 1, color: GOLD },
  ];
}

function halo(lean: number, twist: number): Loose[] {
  return [
    { primitive: 'box', x: 0, y: 0.12, z: 0, sx: 0.7, sy: 0.24, sz: 0.7, color: INK },
    { primitive: 'box', x: 0, y: 0.7, z: 0, sx: 0.16, sy: 1.05, sz: 0.16, color: DEEP },
    { primitive: 'ring', x: lean * 0.4, y: 1.35, z: 0, sx: 1.7, sy: 1.7, sz: 1.7, rx: 0.35 + twist * 0.2, ry: twist, color: GOLD },
    { primitive: 'gem', x: lean, y: 1.35, z: 0.15, sx: 0.7, sy: 0.7, sz: 0.7, color: CYAN },
  ];
}

function bracket(twist: number): Loose[] {
  return [
    { primitive: 'box', x: -0.28, y: 0.72, z: 0, sx: 1.25, sy: 0.12, sz: 0.42, ry: 0.7 + twist, rz: 0.45, color: PAPER },
    { primitive: 'box', x: 0.28, y: 0.78, z: 0.05, sx: 1.25, sy: 0.12, sz: 0.42, ry: -0.7 + twist, rz: -0.4, color: INK },
    { primitive: 'gem', x: 0, y: 0.95, z: 0, sx: 1.1, sy: 1.1, sz: 1.1, color: GOLD },
    { primitive: 'box', x: 0, y: 0.1, z: 0, sx: 0.85, sy: 0.16, sz: 0.85, color: DEEP },
  ];
}

function split(lean: number, twist: number): Loose[] {
  return [
    { primitive: 'box', x: -0.38, y: 0.85, z: 0, sx: 0.1, sy: 1.45, sz: 0.62, rz: 0.22 + lean, ry: twist, color: DEEP },
    { primitive: 'box', x: 0.38, y: 0.85, z: 0.04, sx: 0.1, sy: 1.45, sz: 0.62, rz: -0.22 - lean, ry: -twist, color: INK },
    { primitive: 'box', x: 0, y: 1.62, z: 0, sx: 0.95, sy: 0.1, sz: 0.48, color: PAPER },
    { primitive: 'ring', x: 0, y: 1.15, z: 0.2, sx: 0.85, sy: 0.85, sz: 0.85, rx: Math.PI / 2, color: CYAN },
  ];
}

function stack(twist: number): Loose[] {
  return [
    { primitive: 'box', x: 0, y: 0.1, z: 0, sx: 1.2, sy: 0.16, sz: 1.2, color: INK },
    { primitive: 'box', x: 0, y: 0.42, z: 0, sx: 0.86, sy: 0.14, sz: 0.86, ry: 0.9 + twist, color: PAPER },
    { primitive: 'box', x: 0, y: 0.72, z: 0, sx: 0.52, sy: 0.12, sz: 0.52, ry: twist * 1.4, color: DEEP },
    { primitive: 'box', x: 0, y: 1.35, z: 0, sx: 0.12, sy: 1.15, sz: 0.12, color: INK },
    { primitive: 'gem', x: 0, y: 2.05, z: 0, sx: 0.9, sy: 1.2, sz: 0.9, color: GOLD },
  ];
}
