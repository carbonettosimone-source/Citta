import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { lineStringToLocalPts, ringToLocalPts, ptsToShape, project } from '../geo.js';
import { sampleY } from '../terrain.js';
import { LAYER } from '../layers.js';

function isPlazaFeature(p) {
  const name = (p.name || '').toLowerCase();
  if (p.place === 'square') return true;
  if (p.highway === 'pedestrian' && p.name) return true;
  if (/piazza|largo|plaza|piazzale/.test(name)) return true;
  if (p.leisure === 'park' && /piazza|largo/.test(name)) return true;
  return false;
}

/** Convex hull (Andrew monotone chain) on {x,z} */
function convexHull(pts) {
  const a = [...pts].sort((p, q) => p.x - q.x || p.z - q.z);
  if (a.length <= 2) return a;
  const cross = (o, a, b) => (a.x - o.x) * (b.z - o.z) - (a.z - o.z) * (b.x - o.x);
  const lower = [];
  for (const p of a) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  const upper = [];
  for (let i = a.length - 1; i >= 0; i--) {
    const p = a[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

function centroid(pts) {
  let x = 0;
  let z = 0;
  for (const p of pts) {
    x += p.x;
    z += p.z;
  }
  return { x: x / pts.length, z: z / pts.length };
}

function expandHull(pts, meters) {
  const c = centroid(pts);
  return pts.map((p) => {
    const dx = p.x - c.x;
    const dz = p.z - c.z;
    const len = Math.hypot(dx, dz) || 1;
    const s = (len + meters) / len;
    return { x: c.x + dx * s, z: c.z + dz * s };
  });
}

function drapePolygon(pts, yOff) {
  try {
    const geom = new THREE.ShapeGeometry(ptsToShape(pts), 12);
    geom.rotateX(-Math.PI / 2);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, sampleY(pos.getX(i), pos.getZ(i)) + yOff);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  } catch {
    return null;
  }
}

/**
 * Piazza / aree pedonali pavimentate, drapate sul DEM.
 * Walkable via sampleY (nessuna collisione con la mesh).
 */
export function buildPlazas(features, scene, style = {}) {
  const colors = style.colors || {};
  const yOff = style.plazas?.yOffset ?? 0.10;
  /** @type {Map<string,{pts:{x:number,z:number}[], name:string}>} */
  const buckets = new Map();

  for (const f of features) {
    const p = f.properties || {};
    if (!isPlazaFeature(p)) continue;
    let pts = [];
    if (f.geometry.type === 'Polygon') {
      pts = ringToLocalPts(f.geometry.coordinates[0]);
    } else if (f.geometry.type === 'LineString') {
      pts = lineStringToLocalPts(f.geometry.coordinates);
    } else if (f.geometry.type === 'Point' && p.name) {
      const q = project(f.geometry.coordinates[0], f.geometry.coordinates[1]);
      // piccolo disco attorno al POI nominato
      const r = 8;
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        pts.push({ x: q.x + Math.cos(a) * r, z: q.z + Math.sin(a) * r });
      }
    }
    if (pts.length < 3) continue;
    const key = (p.name || `plaza-${p.id || buckets.size}`).toLowerCase();
    if (!buckets.has(key)) buckets.set(key, { pts: [], name: p.name || 'Piazza' });
    buckets.get(key).pts.push(...pts);
  }

  const geos = [];
  const plazas = [];
  for (const { pts, name } of buckets.values()) {
    let hull = convexHull(pts);
    if (hull.length < 3) continue;
    // espandi leggermente per riempire lo spazio tra i bordi stradali OSM
    hull = expandHull(hull, 3.5);
    // area minima ~ 80 m²
    let area = 0;
    for (let i = 0; i < hull.length; i++) {
      const a = hull[i];
      const b = hull[(i + 1) % hull.length];
      area += a.x * b.z - b.x * a.z;
    }
    area = Math.abs(area) * 0.5;
    if (area < 60) continue;

    const geo = drapePolygon(hull, yOff);
    if (!geo) continue;
    geos.push(geo);
    const c = centroid(hull);
    plazas.push({
      name,
      x: c.x,
      z: c.z,
      y: sampleY(c.x, c.z) + yOff,
      area,
    });
  }

  const group = new THREE.Group();
  group.name = 'plazas';
  group.renderOrder = LAYER.ROADS - 1;

  if (geos.length) {
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (merged) {
      const mesh = new THREE.Mesh(
        merged,
        new THREE.MeshStandardMaterial({
          color: colors.plaza ?? 0xb0a89a,
          roughness: 0.92,
          metalness: 0.02,
          flatShading: true,
        }),
      );
      mesh.receiveShadow = true;
      mesh.renderOrder = LAYER.ROADS - 1;
      group.add(mesh);

      // bordo leggermente più chiaro (anello inset) — contrasto stile AAA low-poly
      // skip for perf: single mesh enough
    }
  }

  scene.add(group);
  return { group, plazas, count: plazas.length };
}
