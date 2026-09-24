import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setInstanceQuat, commit } from '../render/instance';
import { toonMaterial, withWind } from '../render/toon';
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
import treeFatUrl from '../../assets/kenney/nature/tree_fat.glb?url';
import pineUrl from '../../assets/kenney/nature/tree_pineSmallC.glb?url';
import treeUrl from '../../assets/kenney/nature/tree_simple.glb?url';
import treeTallUrl from '../../assets/kenney/nature/tree_tall.glb?url';
import type { Blocker } from './collide';
import { WORLD_SEED, unit } from './hash';
import {
  HUB_AZ,
  HUB_COLAT,
  HUB_MODULES,
  SPAWN_E,
  SPAWN_N,
  hubOccupied,
  pathHalf,
  tangentVector,
} from './intensity';
import { frameQuaternion, shift } from './planet';
import { seat } from './relief';

/**
 * Diorama del hub: radura, spalle del nastro, tre boschetti, due giardini di sassi.
 * Stesso seme ⇒ stessi ciuffi. Non è un anello uniforme. Vedi PLACE.md e ASSETS.md.
 */

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
  rockSmall: { url: rockSmallUrl, scale: 1.9, radius: 0.22, height: 0.19, wind: false },
  rockLarge: { url: rockLargeUrl, scale: 1.85, radius: 0.42, height: 0.26, wind: false },
  rockTall: { url: rockTallUrl, scale: 1.55, radius: 0.38, height: 1, wind: false },
  tree: { url: treeUrl, scale: 1.4, radius: 0.16, height: 1.52, wind: false },
  treeFat: { url: treeFatUrl, scale: 1.35, radius: 0.22, height: 1.15, wind: false },
  treeTall: { url: treeTallUrl, scale: 1.45, radius: 0.16, height: 1.69, wind: false },
} as const;

type PropId = keyof typeof MODELS;
type FocusKind = 'grove' | 'rocks' | 'shoulder' | 'clearing' | 'q2';

const GROVE: readonly PropId[] = ['treeFat', 'tree', 'pine', 'bush', 'bushSmall', 'mushroom', 'mushroomTall', 'grass', 'flower', 'rockSmall', 'stump'];
const ROCKS: readonly PropId[] = ['rockTall', 'rockLarge', 'rockSmall', 'grass', 'log'];
const SHOULDER: readonly PropId[] = ['bushSmall', 'bush', 'rockSmall'];
const LAWN: readonly PropId[] = ['grass', 'flower'];
const THIN: readonly PropId[] = ['bushSmall', 'grass', 'flower'];
const TALL = new Set<PropId>(['tree', 'treeFat', 'treeTall', 'pine', 'rockTall', 'mushroomTall']);

type Focus = {
  id: string;
  kind: FocusKind;
  n: number;
  e: number;
  r: number;
  count: number;
  pool: readonly PropId[];
  /** Raggio minimo, frazione di r. I boschetti sono più densi al centro. */
  inner: number;
};

/** Foci in metri locali (nord, est). La radura di spawn non è un focus pieno: solo un orlo d'erba. */
const FOCI: readonly Focus[] = [
  { id: 'grove-east', kind: 'grove', n: 4, e: 15.2, r: 3.15, count: 9, pool: GROVE, inner: 0.12 },
  { id: 'grove-west', kind: 'grove', n: -3.2, e: -18.4, r: 3.05, count: 8, pool: GROVE, inner: 0.12 },
  { id: 'grove-south', kind: 'grove', n: -19.2, e: 6.6, r: 1.85, count: 7, pool: GROVE, inner: 0.16 },
  { id: 'grove-exit', kind: 'grove', n: -20.4, e: -4.3, r: 1.55, count: 6, pool: GROVE, inner: 0.18 },
  { id: 'rocks-ne', kind: 'rocks', n: 16.2, e: 3.6, r: 2.15, count: 6, pool: ROCKS, inner: 0.08 },
  { id: 'rocks-sw', kind: 'rocks', n: -15.4, e: -13.6, r: 2.05, count: 5, pool: ROCKS, inner: 0.08 },
  { id: 'sh-n-w', kind: 'shoulder', n: 10.8, e: -5.5, r: 0.65, count: 3, pool: SHOULDER, inner: 0.25 },
  { id: 'sh-n-e', kind: 'shoulder', n: 4.2, e: 7.6, r: 0.8, count: 3, pool: SHOULDER, inner: 0.2 },
  { id: 'sh-m-w', kind: 'shoulder', n: -4.2, e: -6.8, r: 0.8, count: 3, pool: SHOULDER, inner: 0.2 },
  { id: 'sh-m-e', kind: 'shoulder', n: -2.4, e: 8.6, r: 0.75, count: 2, pool: SHOULDER, inner: 0.25 },
  { id: 'sh-s-w', kind: 'shoulder', n: -16.2, e: -5.6, r: 0.85, count: 2, pool: SHOULDER, inner: 0.2 },
  { id: 'sh-s-e', kind: 'shoulder', n: -16.4, e: 5.8, r: 0.85, count: 2, pool: SHOULDER, inner: 0.2 },
  { id: 'clearing', kind: 'clearing', n: SPAWN_N, e: SPAWN_E, r: 5.4, count: 8, pool: LAWN, inner: 0.72 },
  { id: 'q2-w', kind: 'q2', n: 3.4, e: -16.4, r: 1.05, count: 3, pool: THIN, inner: 0.15 },
  { id: 'q2-s', kind: 'q2', n: 1.2, e: -14.6, r: 0.95, count: 2, pool: THIN, inner: 0.2 },
];

export type PropPlacement = {
  model: PropId;
  focus: string;
  north: number;
  east: number;
  yaw: number;
  scale: number;
  slot: number;
};

export function propLayout(seed: number): PropPlacement[] {
  const placed: PropPlacement[] = [];
  let slot = 0;
  for (const focus of FOCI) {
    let accepted = 0;
    let attempts = 0;
    while (accepted < focus.count && attempts < focus.count * 10) {
      const id = slot;
      slot += 1;
      attempts += 1;
      const ang = unit(seed, id, 3) * Math.PI * 2;
      const u = unit(seed, id, 5);
      const rad = focus.r * (focus.inner + (1 - focus.inner) * Math.sqrt(u));
      const north = focus.n + Math.cos(ang) * rad;
      const east = focus.e + Math.sin(ang) * rad;
      if (!fits(north, east, placed)) continue;
      const model = pickModel(seed, id, focus, accepted);
      if (TALL.has(model) && blocksFaro(north, east)) continue;
      if (TALL.has(model) && inClearing(north, east)) continue;
      const spec = MODELS[model];
      placed.push({
        model,
        focus: focus.id,
        north,
        east,
        yaw: unit(seed, id, 17) * Math.PI * 2,
        scale: spec.scale * (0.9 + unit(seed, id, 19) * 0.18) * (focus.id === 'grove-south' || focus.id === 'grove-exit' ? 1.85 : 1),
        slot: id,
      });
      accepted += 1;
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
    if (left.model !== right.model || left.focus !== right.focus || Math.abs(left.north - right.north) > 1e-6) {
      problems.push('props instabili');
      break;
    }
  }
  const live = propLayoutFromWorld();
  if (live.length < 28) problems.push(`diorama troppo rado (${live.length})`);
  if (live.length > 70) problems.push(`diorama troppo fitto (${live.length})`);
  const ids = new Set(live.map((item) => item.model));
  if (ids.size < 6) problems.push('catalogo props troppo stretto');
  for (const name of ['grove-east', 'grove-west', 'grove-south', 'grove-exit']) {
    const n = live.filter((item) => item.focus === name).length;
    if (n < 5) problems.push(`boschetto ${name} troppo rado (${n})`);
  }
  for (const name of ['rocks-ne', 'rocks-sw']) {
    const n = live.filter((item) => item.focus === name).length;
    if (n < 3) problems.push(`giardino ${name} troppo rado (${n})`);
  }
  const shoulders = live.filter((item) => item.focus.startsWith('sh-')).length;
  if (shoulders < 6) problems.push(`spalle del nastro troppo rade (${shoulders})`);
  for (const item of live) {
    if (hubOccupied(item.north, item.east) || onRibbon(item.north, item.east)) problems.push('prop sul nastro');
    if (TALL.has(item.model) && inClearing(item.north, item.east)) problems.push('albero nella radura');
    if (TALL.has(item.model) && blocksFaro(item.north, item.east)) problems.push('vista del faro chiusa');
  }
  return problems;
}

const CONE_IDS = new Set<PropId>([
  'grass',
  'flower',
  'bushSmall',
  'bush',
  'mushroom',
  'mushroomTall',
  'pine',
  'tree',
  'treeFat',
  'treeTall',
]);
const CONE_COLORS = [0xff4fa3, 0x2ee0c5, 0xc6f25a, 0xffe14a, 0x7a5cff] as const;

export async function loadHubProps(scene: THREE.Scene, gradient: THREE.Texture, blockers: Blocker[]): Promise<void> {
  const layout = propLayoutFromWorld();
  const cones: PropPlacement[] = [];
  const byModel = new Map<PropId, PropPlacement[]>();
  for (const item of layout) {
    if (CONE_IDS.has(item.model)) {
      cones.push(item);
      continue;
    }
    const list = byModel.get(item.model) ?? [];
    list.push(item);
    byModel.set(item.model, list);
  }
  paintCones(scene, gradient, cones, blockers);
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

function paintCones(scene: THREE.Scene, gradient: THREE.Texture, items: readonly PropPlacement[], blockers: Blocker[]): void {
  if (items.length === 0) return;
  const geo = new THREE.ConeGeometry(0.42, 1.45, 6);
  geo.translate(0, 0.72, 0);
  const material = toonMaterial(gradient, 0xffffff);
  const mesh = new THREE.InstancedMesh(geo, material, items.length);
  mesh.frustumCulled = false;
  items.forEach((item, index) => {
    const face = tangentVector(item.north, item.east, Math.cos(item.yaw), Math.sin(item.yaw));
    const raw = shift(HUB_COLAT, HUB_AZ, item.north, item.east);
    const at = seat(raw.x, raw.y, raw.z);
    const q = frameQuaternion(at.x, at.y, at.z, face.x, face.y, face.z);
    const scale = coneScale(item);
    setInstanceQuat(mesh, index, at.x, at.y, at.z, scale, scale, scale, q.x, q.y, q.z, q.w, CONE_COLORS[item.slot % CONE_COLORS.length]);
    const spec = MODELS[item.model];
    if (spec.radius > 0.12) {
      blockers.push({
        x: raw.x,
        y: raw.y,
        z: raw.z,
        r: spec.radius * (item.scale / spec.scale) * 0.8,
        h: Math.max(0.8, scale * 0.9),
      });
    }
  });
  commit(mesh);
  scene.add(mesh);
}

function coneScale(item: PropPlacement): number {
  if (item.model === 'grass' || item.model === 'flower') return item.scale * 0.28;
  if (item.model === 'bushSmall' || item.model === 'mushroom') return item.scale * 0.42;
  if (item.model === 'bush' || item.model === 'mushroomTall') return item.scale * 0.5;
  return item.scale * 0.95;
}

function propLayoutFromWorld(): PropPlacement[] {
  return propLayout(WORLD_SEED);
}

function pickModel(seed: number, id: number, focus: Focus, accepted: number): PropId {
  if (focus.kind === 'grove' && accepted < 2) {
    const trees: Partial<Record<string, readonly PropId[]>> = {
      'grove-east': ['treeTall', 'pine'],
      'grove-west': ['treeFat', 'tree'],
      'grove-south': ['pine', 'treeTall'],
      'grove-exit': ['tree', 'pine'],
    };
    return trees[focus.id]?.[accepted] ?? 'tree';
  }
  if (focus.kind === 'rocks' && accepted === 0) return 'rockTall';
  return focus.pool[Math.floor(unit(seed, id, 13) * focus.pool.length)] ?? focus.pool[0] ?? 'grass';
}

function fits(north: number, east: number, placed: readonly PropPlacement[]): boolean {
  if (hubOccupied(north, east) || onRibbon(north, east) || nearModule(north, east)) return false;
  for (const item of placed) {
    if (Math.hypot(north - item.north, east - item.east) < 0.58) return false;
  }
  return true;
}

/** Nastro d'oro: la fascia camminabile resta vuota, le spalle stanno fuori. */
function onRibbon(north: number, east: number): boolean {
  if (north > 12.2 || north < -26.8) return false;
  return Math.abs(east) < pathHalf(north) - 0.15;
}

/** Disco interno della radura di spawn, e il corridoio che guarda il nastro. */
function inClearing(north: number, east: number): boolean {
  if (Math.hypot(north - SPAWN_N, east - SPAWN_E) < 5.6) return true;
  return north < 12 && north > 0.5 && Math.abs(east) < 3.1;
}

/** Cuneo a nord di Q2: il faro sta sul polo, stessa longitudine dell'hub. */
function blocksFaro(north: number, east: number): boolean {
  return north > 7.2 && Math.abs(east + 11.2) < 5.2;
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
  if (material && 'color' in material && material.color instanceof THREE.Color) return recolor(material.color);
  return 0xf4efe6;
}

/** Kenney Nature Kit riletto su una tavolozza sola: salvia, mora, legno, carta, pietra. */
function recolor(color: THREE.Color): number {
  const hsl = { h: 0, s: 0, l: 0 };
  color.getHSL(hsl);
  if (hsl.s < 0.16) return hsl.l > 0.55 ? 0xffb15a : 0xff5a45;
  if (hsl.h > 0.18 && hsl.h < 0.48) return hsl.l > 0.42 ? 0xc6f25a : 0x2ee0c5;
  if (hsl.h < 0.04 || hsl.h > 0.94) return 0xff4fa3;
  if (hsl.h < 0.16) return hsl.l > 0.55 ? 0xff8a3c : 0xe437a8;
  return color.getHex();
}
