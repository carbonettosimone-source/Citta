import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setInstanceQuat, commit } from '../render/instance';
import { toonMaterial, withWind } from '../render/toon';
import cactusUrl from '../../assets/kenney/nature/cactus_tall.glb?url';
import flowerUrl from '../../assets/kenney/nature/flower_yellowA.glb?url';
import grassUrl from '../../assets/kenney/nature/grass.glb?url';
import logUrl from '../../assets/kenney/nature/log.glb?url';
import mushroomUrl from '../../assets/kenney/nature/mushroom_red.glb?url';
import mushroomTallUrl from '../../assets/kenney/nature/mushroom_redTall.glb?url';
import bushUrl from '../../assets/kenney/nature/plant_bush.glb?url';
import bushSmallUrl from '../../assets/kenney/nature/plant_bushSmall.glb?url';
import rockLargeUrl from '../../assets/kenney/nature/rock_largeA.glb?url';
import rockSmallUrl from '../../assets/kenney/nature/rock_smallA.glb?url';
import rockTallUrl from '../../assets/kenney/nature/rock_tallA.glb?url';
import stumpUrl from '../../assets/kenney/nature/stump_round.glb?url';
import blocksUrl from '../../assets/kenney/nature/tree_blocks.glb?url';
import treeFatUrl from '../../assets/kenney/nature/tree_fat.glb?url';
import pineUrl from '../../assets/kenney/nature/tree_pineSmallC.glb?url';
import treeUrl from '../../assets/kenney/nature/tree_simple.glb?url';
import treeTallUrl from '../../assets/kenney/nature/tree_tall.glb?url';
import type { Blocker } from './collide';
import { WORLD_SEED, unit } from './hash';
import {
  CORE_R,
  HUB_AZ,
  HUB_COLAT,
  HUB_MODULES,
  HUB_RADIUS,
  MODULE_R,
  hubOccupied,
  tangentVector,
} from './intensity';
import { frameQuaternion, shift } from './planet';
import { seat } from './relief';

/**
 * Props Kenney sul campo di intensità e sulla frangia leggibile.
 * Stesso seme ⇒ stessi slot. Non sono case. Vedi ASSETS.md e STRUCTURES.md.
 */

const FRINGE = 40;

const MODELS = {
  grass: { url: grassUrl, scale: 2.35, radius: 0, height: 0.25, wind: true },
  flower: { url: flowerUrl, scale: 2.5, radius: 0, height: 0.19, wind: true },
  bushSmall: { url: bushSmallUrl, scale: 2.4, radius: 0, height: 0.21, wind: true },
  bush: { url: bushUrl, scale: 2.7, radius: 0.22, height: 0.24, wind: true },
  mushroom: { url: mushroomUrl, scale: 4.6, radius: 0.16, height: 0.2, wind: false },
  mushroomTall: { url: mushroomTallUrl, scale: 5.4, radius: 0.18, height: 0.25, wind: false },
  stump: { url: stumpUrl, scale: 2.1, radius: 0.28, height: 0.21, wind: false },
  log: { url: logUrl, scale: 2.2, radius: 0.22, height: 0.17, wind: false },
  pine: { url: pineUrl, scale: 1.45, radius: 0.16, height: 1.12, wind: false },
  blocks: { url: blocksUrl, scale: 1.55, radius: 0.2, height: 1.19, wind: false },
  cactus: { url: cactusUrl, scale: 2.15, radius: 0.16, height: 0.75, wind: false },
  rockSmall: { url: rockSmallUrl, scale: 1.9, radius: 0.22, height: 0.19, wind: false },
  rockLarge: { url: rockLargeUrl, scale: 1.85, radius: 0.42, height: 0.26, wind: false },
  rockTall: { url: rockTallUrl, scale: 1.55, radius: 0.38, height: 1, wind: false },
  tree: { url: treeUrl, scale: 1.4, radius: 0.16, height: 1.52, wind: false },
  treeFat: { url: treeFatUrl, scale: 1.35, radius: 0.22, height: 1.15, wind: false },
  treeTall: { url: treeTallUrl, scale: 1.45, radius: 0.16, height: 1.69, wind: false },
} as const;

type PropId = keyof typeof MODELS;
type Band = 'core' | 'band' | 'edge' | 'wild';

const POOLS: Record<Band, readonly PropId[]> = {
  core: ['grass', 'flower', 'bushSmall', 'rockSmall', 'mushroom'],
  band: ['bush', 'bushSmall', 'mushroom', 'mushroomTall', 'stump', 'log', 'pine', 'blocks', 'rockSmall', 'rockLarge', 'cactus', 'grass', 'flower'],
  edge: ['tree', 'treeFat', 'pine', 'blocks', 'cactus', 'rockTall', 'rockLarge', 'mushroomTall', 'stump'],
  wild: ['treeTall', 'tree', 'rockLarge', 'rockTall', 'cactus', 'pine'],
};

const CAP: Record<Band, number> = { core: 18, band: 42, edge: 22, wild: 16 };

export type PropPlacement = {
  model: PropId;
  north: number;
  east: number;
  yaw: number;
  scale: number;
  slot: number;
};

export function propLayout(seed: number): PropPlacement[] {
  const placed: PropPlacement[] = [];
  const counts: Record<Band, number> = { core: 0, band: 0, edge: 0, wild: 0 };
  let slot = 0;
  for (let dist = 5.2; dist <= FRINGE - 0.4; dist += 2.15) {
    const spacing = dist < CORE_R ? 2.05 : dist < MODULE_R ? 2.3 : dist < HUB_RADIUS ? 3.05 : 4.5;
    const steps = Math.max(6, Math.round((Math.PI * 2 * dist) / spacing));
    for (let k = 0; k < steps; k += 1) {
      const id = slot;
      slot += 1;
      const turn = (Math.PI * 2) / steps;
      const bearing = (k + 0.5) * turn + (unit(seed, id, 3) - 0.5) * turn * 0.5;
      const north = dist * Math.cos(bearing) + (unit(seed, id, 5) - 0.5) * 0.7;
      const east = dist * Math.sin(bearing) + (unit(seed, id, 7) - 0.5) * 0.7;
      const d = Math.hypot(north, east);
      const where = bandAt(d);
      if (!where || counts[where] >= CAP[where]) continue;
      if (hubOccupied(north, east) || nearModule(north, east)) continue;
      const accept = where === 'core' ? 0.48 : where === 'band' ? 0.64 : where === 'edge' ? 0.42 : 0.24;
      if (unit(seed, id, 11) > accept) continue;
      const pool = POOLS[where];
      const model = pool[Math.floor(unit(seed, id, 13) * pool.length)] ?? pool[0];
      if (!model) continue;
      const spec = MODELS[model];
      placed.push({
        model,
        north,
        east,
        yaw: unit(seed, id, 17) * Math.PI * 2,
        scale: spec.scale * (0.86 + unit(seed, id, 19) * 0.28),
        slot: id,
      });
      counts[where] += 1;
    }
  }
  return placed;
}

export function auditProps(): string[] {
  const problems: string[] = [];
  const sample = 2166136261;
  const a = propLayout(sample);
  const b = propLayout(sample);
  if (a.length !== b.length) problems.push('props instabili');
  for (let i = 0; i < a.length; i += 1) {
    const left = a[i];
    const right = b[i];
    if (!left || !right) continue;
    if (left.model !== right.model || Math.abs(left.north - right.north) > 1e-6) {
      problems.push('props instabili');
      break;
    }
  }
  const live = propLayoutFromWorld();
  if (live.length < 48) problems.push(`props troppo radi (${live.length})`);
  if (live.length > 120) problems.push(`props troppo fitti (${live.length})`);
  const ids = new Set(live.map((item) => item.model));
  if (ids.size < 8) problems.push('catalogo props troppo stretto');
  for (const item of live) {
    if (hubOccupied(item.north, item.east)) problems.push('prop sul nastro');
    const d = Math.hypot(item.north, item.east);
    if (d < 4.6 || d > FRINGE) problems.push('prop fuori frangia');
  }
  return problems;
}

export async function loadHubProps(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): Promise<void> {
  const layout = propLayoutFromWorld();
  const byModel = new Map<PropId, PropPlacement[]>();
  for (const item of layout) {
    const list = byModel.get(item.model) ?? [];
    list.push(item);
    byModel.set(item.model, list);
  }
  const loader = new GLTFLoader();
  await Promise.all(
    [...byModel.entries()].map(async ([id, items]) => {
      const spec = MODELS[id];
      const pieces = await loadPieces(loader, spec.url);
      for (const piece of pieces) {
        const material = toonMaterial(gradient, piece.color);
        material.side = THREE.DoubleSide;
        if (spec.wind) withWind(material);
        const mesh = new THREE.InstancedMesh(piece.geometry, material, items.length);
        mesh.frustumCulled = false;
        items.forEach((item, index) => {
          const face = tangentVector(item.north, item.east, Math.cos(item.yaw), Math.sin(item.yaw));
          const raw = shift(HUB_COLAT, HUB_AZ, item.north, item.east);
          const at = seat(raw.x, raw.y, raw.z);
          const q = frameQuaternion(at.x, at.y, at.z, face.x, face.y, face.z);
          setInstanceQuat(mesh, index, at.x, at.y, at.z, item.scale, item.scale, item.scale, q.x, q.y, q.z, q.w);
        });
        commit(mesh);
        scene.add(mesh);
      }
      for (const item of items) {
        if (spec.radius <= 0) continue;
        const raw = shift(HUB_COLAT, HUB_AZ, item.north, item.east);
        blockers.push({
          x: raw.x,
          y: raw.y,
          z: raw.z,
          r: spec.radius * (item.scale / spec.scale),
          h: Math.max(0.45, spec.height * item.scale * 0.8),
        });
      }
    }),
  );
}

function propLayoutFromWorld(): PropPlacement[] {
  return propLayout(WORLD_SEED);
}

function bandAt(dist: number): Band | null {
  if (dist < 4.8) return null;
  if (dist < CORE_R) return 'core';
  if (dist < MODULE_R) return 'band';
  if (dist < HUB_RADIUS) return 'edge';
  if (dist <= FRINGE) return 'wild';
  return null;
}

function nearModule(north: number, east: number): boolean {
  for (const mod of HUB_MODULES) {
    if (mod.tag !== 'filler') continue;
    if (Math.hypot(north - mod.north, east - mod.east) < 1.7) return true;
  }
  return false;
}

async function loadPieces(loader: GLTFLoader, url: string): Promise<{ geometry: THREE.BufferGeometry; color: number }[]> {
  const gltf = await loader.loadAsync(url);
  gltf.scene.updateMatrixWorld(true);
  const pieces: { geometry: THREE.BufferGeometry; color: number }[] = [];
  gltf.scene.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    const groups = obj.geometry.groups;
    if (materials.length > 1 && groups.length > 0) {
      for (const group of groups) {
        const geometry = sliceGeometry(obj.geometry, group.start, group.count);
        geometry.applyMatrix4(obj.matrixWorld);
        pieces.push({ geometry, color: colorOf(materials[group.materialIndex] ?? materials[0]) });
      }
      return;
    }
    const geometry = obj.geometry.clone();
    geometry.applyMatrix4(obj.matrixWorld);
    pieces.push({ geometry, color: colorOf(materials[0]) });
  });
  return pieces;
}

function sliceGeometry(source: THREE.BufferGeometry, start: number, count: number): THREE.BufferGeometry {
  const geometry = source.clone();
  const index = geometry.getIndex();
  if (!index) return geometry;
  const copy = new Uint32Array(count);
  for (let i = 0; i < count; i += 1) copy[i] = index.getX(start + i);
  geometry.setIndex(new THREE.BufferAttribute(copy, 1));
  geometry.clearGroups();
  return geometry;
}

function colorOf(material: THREE.Material | undefined): number {
  if (material && 'color' in material && material.color instanceof THREE.Color) return material.color.getHex();
  return 0xffffff;
}
