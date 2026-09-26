import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { lineStringToLocalPts, ringToLocalPts } from '../geo.js';
import { sampleY } from '../terrain.js';

const BARRIER_TYPES = new Set([
  'wall',
  'fence',
  'retaining_wall',
  'guard_rail',
  'handrail',
  'city_wall',
  'hedge',
]);

function barrierStyle(subtype, style) {
  const hDef = style.barriers?.defaultHeight ?? 1.2;
  switch (subtype) {
    case 'wall':
    case 'city_wall':
      return { h: 1.85, w: 0.32, color: style.colors?.barrierWall ?? 0xc8b8a0 };
    case 'retaining_wall':
      return { h: 1.55, w: 0.45, color: style.colors?.barrierRetain ?? 0xa89880 };
    case 'fence':
      return { h: 1.25, w: 0.1, color: style.colors?.barrierFence ?? 0x6a6058 };
    case 'guard_rail':
      return { h: 0.75, w: 0.12, color: style.colors?.barrierRail ?? 0x8a9098 };
    case 'handrail':
      return { h: 0.95, w: 0.06, color: style.colors?.barrierRail ?? 0x8a9098 };
    case 'hedge':
      return { h: 1.2, w: 0.45, color: style.colors?.barrierHedge ?? 0x5e7a48 };
    default:
      return { h: hDef, w: 0.2, color: 0xb0a090 };
  }
}

function extrudeBarrierSegment(ax, az, bx, bz, height, halfW, yBaseOff) {
  const dx = bx - ax;
  const dz = bz - az;
  const len = Math.hypot(dx, dz);
  if (len < 0.15) return null;
  const ux = dx / len;
  const uz = dz / len;
  const nx = -uz;
  const nz = ux;
  const y0a = sampleY(ax, az) + yBaseOff;
  const y0b = sampleY(bx, bz) + yBaseOff;
  const y1a = y0a + height;
  const y1b = y0b + height;
  // 8 verts: bottom/top × left/right at A and B
  const L0 = [ax + nx * halfW, y0a, az + nz * halfW];
  const R0 = [ax - nx * halfW, y0a, az - nz * halfW];
  const L1 = [bx + nx * halfW, y0b, bz + nz * halfW];
  const R1 = [bx - nx * halfW, y0b, bz - nz * halfW];
  const L0t = [L0[0], y1a, L0[2]];
  const R0t = [R0[0], y1a, R0[2]];
  const L1t = [L1[0], y1b, L1[2]];
  const R1t = [R1[0], y1b, R1[2]];
  const pos = [...L0, ...R0, ...L1, ...R1, ...L0t, ...R0t, ...L1t, ...R1t];
  // indices: sides + top
  const idx = [
    0, 1, 3, 0, 3, 2, // bottom
    4, 6, 7, 4, 7, 5, // top
    0, 2, 6, 0, 6, 4, // left
    1, 5, 7, 1, 7, 3, // right
    0, 4, 5, 0, 5, 1, // start cap
    2, 3, 7, 2, 7, 6, // end cap
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Extrude OSM barrier ways (wall/fence/…) draped on DEM.
 */
export function buildBarriers(features, scene, style = {}) {
  const group = new THREE.Group();
  group.name = 'barriers';
  const yOff = style.barriers?.yOffset ?? 0.3;
  /** @type {Map<number, THREE.BufferGeometry[]>} */
  const buckets = new Map();
  let count = 0;
  let segmentCount = 0;

  for (const f of features) {
    if (f.properties.kind !== 'barrier') continue;
    const subtype = (f.properties.subtype || f.properties.barrier || 'wall').toLowerCase();
    if (!BARRIER_TYPES.has(subtype) && subtype !== 'wall') continue;
    const st = barrierStyle(subtype, style);
    let pts = null;
    if (f.geometry.type === 'LineString') {
      pts = lineStringToLocalPts(f.geometry.coordinates);
    } else if (f.geometry.type === 'Polygon') {
      pts = ringToLocalPts(f.geometry.coordinates[0]);
    }
    if (!pts || pts.length < 2) continue;

    if (!buckets.has(st.color)) buckets.set(st.color, []);
    const list = buckets.get(st.color);
    for (let i = 0; i < pts.length - 1; i++) {
      const g = extrudeBarrierSegment(
        pts[i].x,
        pts[i].z,
        pts[i + 1].x,
        pts[i + 1].z,
        st.h,
        st.w * 0.5,
        yOff,
      );
      if (g) {
        list.push(g);
        segmentCount++;
      }
    }
    count++;
  }

  for (const [color, geos] of buckets) {
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!merged) continue;
    const mesh = new THREE.Mesh(
      merged,
      new THREE.MeshLambertMaterial({ color, flatShading: true }),
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  scene.add(group);
  return { group, count, segmentCount };
}

/**
 * Muretti/recinzioni ai bordi dei lotti (M4, `level.fences`): compilati dal confine dei cortili
 * verso la strada, non da tag OSM (quasi assenti). Un solo draw call, quota dalla superficie
 * compilata (sampleY rispetta l'override del livello).
 */
export function buildLotFences(level, scene, style = {}) {
  const group = new THREE.Group();
  group.name = 'lot-fences';
  const fences = level?.fences;
  if (!fences || !fences.length) { scene.add(group); return { group, count: 0 }; }
  const u = level.unit || 0.1;
  const h = style.barriers?.lotFenceHeight ?? 0.85;
  const w = style.barriers?.lotFenceWidth ?? 0.16;
  const color = style.colors?.barrierLotFence ?? style.colors?.barrierWall ?? 0xc3b59a;
  const geos = [];
  for (const [ax, az, bx, bz] of fences) {
    const g = extrudeBarrierSegment(ax * u, az * u, bx * u, bz * u, h, w * 0.5, 0);
    if (g) geos.push(g);
  }
  const merged = mergeGeometries(geos, false);
  geos.forEach((g) => g.dispose());
  let count = 0;
  if (merged) {
    const mesh = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ color, flatShading: true }));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    count = fences.length;
  }
  scene.add(group);
  return { group, count };
}
