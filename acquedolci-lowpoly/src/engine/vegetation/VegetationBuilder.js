import * as THREE from 'three';
import { project, ringToLocalPts, ptsToShape } from '../geo.js';
import { sampleY, getOriginElev, localToLonLat } from '../terrain.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { hash32, hashXZ, mulberry32, unit } from '../rng.js';
import { pickSpecies, speciesFromTags, habitatOf, SPECIES_BY_ID } from '../region/vegetation.js';
import { isSoftVegetation, shouldSkipGroundFill, LAYER } from '../layers.js';
import { distToRoads, nearestRoad } from '../roads/RoadBuilder.js';

function vegColor(subtype, colors) {
  switch (subtype) {
    case 'forest':
    case 'wood':
      return colors.forest ?? 0x5e7e48;
    case 'orchard':
      return colors.orchard ?? 0x7a9e58;
    case 'vineyard':
      return colors.vine ?? 0x6d8f4e;
    case 'farmland':
    case 'allotments':
      return colors.farmland ?? 0xb8b078;
    case 'scrub':
      return colors.scrub ?? 0xa8a066;
    case 'meadow':
    case 'grassland':
      return colors.meadow ?? 0xa0b874;
    case 'park':
    case 'garden':
      return colors.park ?? colors.grass ?? 0x8fad6a;
    default:
      return colors.grass ?? 0x8fad6a;
  }
}

function pointInPoly(x, z, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].x;
    const zi = pts[i].z;
    const xj = pts[j].x;
    const zj = pts[j].z;
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi) inside = !inside;
  }
  return inside;
}

function scatterInPolygon(pts, spacing, maxN, rand) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const p of pts) {
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
  }
  const out = [];
  const jitter = spacing * 0.35;
  for (let x = minX; x <= maxX && out.length < maxN; x += spacing) {
    for (let z = minZ; z <= maxZ && out.length < maxN; z += spacing) {
      const jx = x + (rand() - 0.5) * jitter;
      const jz = z + (rand() - 0.5) * jitter;
      if (pointInPoly(jx, jz, pts)) out.push({ x: jx, z: jz });
    }
  }
  return out;
}

export function buildWater(features, scene, style = {}) {
  const colors = style.colors || {};
  const group = new THREE.Group();
  group.name = 'water';
  group.renderOrder = LAYER.WATER;
  const mat = new THREE.MeshLambertMaterial({ color: colors.water ?? 0x5ea8c0, flatShading: true });
  let count = 0;
  for (const f of features) {
    if (f.properties.kind !== 'water') continue;
    if (f.geometry.type !== 'Polygon') continue;
    const pts = ringToLocalPts(f.geometry.coordinates[0]);
    if (pts.length < 3) continue;
    try {
      const geom = new THREE.ShapeGeometry(ptsToShape(pts));
      geom.rotateX(-Math.PI / 2);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        pos.setY(i, sampleY(pos.getX(i), pos.getZ(i)) + 0.04);
      }
      pos.needsUpdate = true;
      geom.computeVertexNormals();
      group.add(new THREE.Mesh(geom, mat));
      count++;
    } catch { /* skip */ }
  }
  scene.add(group);
  return { group, count };
}

/**
 * Soft vegetation ground fills (never blanket residential) + instanced trees.
 */
export function buildVegetation(features, scene, style = {}, buildingAabbs = [], opts = {}, roadPolylines = []) {
  const doGround = opts.ground !== false;
  const doTrees = opts.trees !== false;
  const colors = style.colors || {};
  const maxTrees = style.maxTrees ?? 2200;
  const group = new THREE.Group();
  group.name = 'vegetation';
  group.renderOrder = LAYER.SOFT_VEG;

  if (doGround) for (const f of features) {
    const kind = f.properties.kind;
    if (kind !== 'vegetation' && kind !== 'landuse') continue;
    if (f.geometry.type !== 'Polygon') continue;
    const subtype = f.properties.subtype || f.properties.landuse || f.properties.natural;
    if (opts.levelMode && subtype === 'orchard') continue; // i frutteti li dispone TreeRules in filari
    if (shouldSkipGroundFill(kind, subtype)) continue;
    if (!isSoftVegetation(kind, subtype) && kind === 'landuse') continue;
    const pts = ringToLocalPts(f.geometry.coordinates[0]);
    if (pts.length < 3) continue;
    try {
      // Skip soft-veg patches that sit mostly under asphalt (reduces z-fight)
      if (roadPolylines?.length) {
        let onRoad = 0;
        const samples = Math.min(12, pts.length);
        for (let i = 0; i < samples; i++) {
          const p = pts[Math.floor((i / samples) * pts.length)];
          if (distToRoads(p.x, p.z, roadPolylines) < 4.5) onRoad++;
        }
        if (onRoad / samples > 0.55) continue;
      }
      const geom = new THREE.ShapeGeometry(ptsToShape(pts));
      geom.rotateX(-Math.PI / 2);
      const pos = geom.attributes.position;
      const yOff = style.softVegY ?? 0.03;
      for (let i = 0; i < pos.count; i++) {
        pos.setY(i, sampleY(pos.getX(i), pos.getZ(i)) + yOff);
      }
      pos.needsUpdate = true;
      geom.computeVertexNormals();
      const mesh = new THREE.Mesh(
        geom,
        new THREE.MeshLambertMaterial({
          color: vegColor(subtype, colors),
          flatShading: true,
          polygonOffset: true,
          polygonOffsetFactor: 1,
          polygonOffsetUnits: 1,
          depthWrite: true,
        }),
      );
      mesh.receiveShadow = true;
      mesh.renderOrder = LAYER.SOFT_VEG;
      group.add(mesh);
    } catch { /* skip */ }
  }

  /** @type {{x:number,z:number,species:string}[]} */
  const placements = [];
  if (!doTrees) {
    scene.add(group);
    return { group, treeGroup: null, treeCount: 0 };
  }

  // Contesto regionale: specie scelte PER PUNTO (quota → temperatura, habitat, evidenza)
  const vegProfile = style.region?.vegetation ?? { archetypeWeights: { mediterranean: 1 }, boosts: {} };
  const tempAtElev = style.regionRuntime?.tempAtElev ?? (() => 17);
  const isSea = style.regionRuntime?.isSea ?? (() => false);
  const originElev = getOriginElev();
  const density = style.region ? Math.max(0.15, vegProfile.density / 0.6) : 1;

  const blockedByBuilding = (x, z) => {
    for (const b of buildingAabbs) if (x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ) return true;
    return false;
  };
  const blockedByRoad = (x, z) => {
    if (!roadPolylines?.length) return false;
    const nr = nearestRoad(x, z, roadPolylines);
    return !!nr && nr.dist < nr.halfW + 0.8;
  };
  const onSea = (x, z) => {
    const { lon, lat } = localToLonLat(x, z);
    return isSea(lon, lat);
  };
  const speciesAt = (x, z, habitat, salt) => {
    const t = tempAtElev(sampleY(x, z) + originElev);
    return pickSpecies(vegProfile, t, habitat, unit(hashXZ(x, z, salt)));
  };

  // 1) Alberi mappati singolarmente: specie dal tag se c'è, altrimenti dal punto
  for (const f of features) {
    if (f.properties.kind !== 'tree') continue;
    const [lon, lat] = f.geometry.coordinates;
    const p = project(lon, lat);
    const sp = speciesFromTags(f.properties) || speciesAt(p.x, p.z, 'urban', 1);
    if (sp) placements.push({ x: p.x, z: p.z, species: sp });
  }

  // 1b) Alberi pianificati a regole (viali, frutteti in filari, giardini) — biome/TreeRules.js
  for (const e of opts.extraPlacements || []) {
    if (placements.length >= maxTrees) break;
    const sp = speciesAt(e.x, e.z, e.habitat, 4);
    if (sp) placements.push({ x: e.x, z: e.z, species: sp });
  }

  // 2) Poligoni di vegetazione: densità dal profilo, specie per habitat e quota
  const polys = features
    .filter((f) => f.properties.kind === 'vegetation' && f.geometry.type === 'Polygon')
    .sort((a, b) => String(a.properties.id).localeCompare(String(b.properties.id)));
  for (const f of polys) {
    if (placements.length >= maxTrees) break;
    const pts = ringToLocalPts(f.geometry.coordinates[0]);
    if (pts.length < 3) continue;
    const subtype = f.properties.subtype || f.properties.landuse || f.properties.natural;
    let spacing = 14, maxN = 80;
    if (subtype === 'orchard') { spacing = 7; maxN = 120; }
    else if (subtype === 'vineyard') { spacing = 5; maxN = 100; }
    else if (subtype === 'forest' || subtype === 'wood') { spacing = 9; maxN = 150; }
    else if (subtype === 'park' || subtype === 'garden') { spacing = 12; maxN = 40; }
    else if (subtype === 'scrub' || subtype === 'meadow' || subtype === 'grass') { spacing = 18; maxN = 25; }
    else if (subtype === 'farmland') { spacing = 22; maxN = 15; }
    spacing /= Math.sqrt(density);
    maxN = Math.round(maxN * density);
    const habitat = habitatOf(subtype);
    const rand = mulberry32(hash32(f.properties.id ?? pts.length));
    for (const s of scatterInPolygon(pts, spacing, maxN, rand)) {
      if (placements.length >= maxTrees) break;
      if (blockedByRoad(s.x, s.z)) continue;
      const sp = speciesAt(s.x, s.z, habitat, 2);
      if (sp) placements.push({ x: s.x, z: s.z, species: sp });
    }
  }

  // 3) Riempitivo deterministico se OSM è povero: solo su terra, fuori da strade/edifici
  if (!opts.levelMode && placements.length < 80 && buildingAabbs.length) {
    let cx = 0, cz = 0;
    for (const b of buildingAabbs) { cx += (b.minX + b.maxX) / 2; cz += (b.minZ + b.maxZ) / 2; }
    cx /= buildingAabbs.length; cz /= buildingAabbs.length;
    const rand = mulberry32(hash32(`fill:${Math.round(cx)}:${Math.round(cz)}`));
    const target = Math.round(120 * density);
    for (let i = 0, added = 0; i < target * 6 && added < target && placements.length < maxTrees; i++) {
      const x = cx + (rand() - 0.5) * 900;
      const z = cz + (rand() - 0.5) * 700;
      if (blockedByBuilding(x, z) || onSea(x, z) || blockedByRoad(x, z)) continue;
      const sp = speciesAt(x, z, 'urban', 3);
      if (sp) { placements.push({ x, z, species: sp }); added++; }
    }
  }

  const treeGroup = new THREE.Group();
  treeGroup.name = 'trees';
  treeGroup.renderOrder = LAYER.TREES;

  // Un InstancedMesh per specie (tronco+chioma fusi con vertex color): 1 draw call per specie
  const bySpecies = new Map();
  for (const pl of placements) {
    if (!bySpecies.has(pl.species)) bySpecies.set(pl.species, []);
    bySpecies.get(pl.species).push(pl);
  }
  const material = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const dummy = new THREE.Object3D();
  const tint = new THREE.Color();
  for (const [id, list] of bySpecies) {
    const spec = SPECIES_BY_ID[id];
    if (!spec) continue;
    const geo = treeGeometry(spec);
    const mesh = new THREE.InstancedMesh(geo, material, list.length);
    mesh.name = `trees-${id}`;
    mesh.castShadow = true;
    mesh.renderOrder = LAYER.TREES;
    list.forEach((e, i) => {
      const h = hashXZ(e.x, e.z, 11);
      const r = mulberry32(h);
      const s = 0.75 + r() * 0.5;
      dummy.position.set(e.x, sampleY(e.x, e.z), e.z);
      dummy.rotation.set(0, r() * Math.PI * 2, 0);
      dummy.scale.set(s * (0.9 + r() * 0.2), s, s * (0.9 + r() * 0.2));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      const k = 0.88 + r() * 0.24;
      mesh.setColorAt(i, tint.setRGB(k, k, k));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    treeGroup.add(mesh);
  }

  scene.add(group);
  scene.add(treeGroup);
  const speciesCount = Object.fromEntries([...bySpecies].map(([k, v]) => [k, v.length]));
  return { group, treeGroup, treeCount: placements.length, speciesCount };
}

// ---------------------------------------------------------------------------
// Geometrie low-poly per forma, con vertex color sRGB→lineare. Cache per specie.

const geoCache = new Map();

function colored(geo, rgb) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const c = new THREE.Color().setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, THREE.SRGBColorSpace);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  g.deleteAttribute('uv');
  return g;
}

function trunk(h, r0, r1, rgb) {
  const g = new THREE.CylinderGeometry(r1, r0, h, 5);
  g.translate(0, h / 2, 0);
  return colored(g, rgb);
}

function treeGeometry(spec) {
  if (geoCache.has(spec.id)) return geoCache.get(spec.id);
  const C = spec.canopy;
  const T = spec.trunk;
  const parts = [];
  switch (spec.shape) {
    case 'olive': {
      parts.push(trunk(1.5, 0.28, 0.18, T));
      const a = new THREE.IcosahedronGeometry(1.4, 0); a.scale(1.25, 0.7, 1.1); a.translate(0.2, 2.1, 0);
      const b = new THREE.IcosahedronGeometry(1.0, 0); b.scale(1.1, 0.7, 1.1); b.translate(-0.7, 2.5, 0.4);
      parts.push(colored(a, C), colored(b, C));
      break;
    }
    case 'umbrella': {
      const h = spec.h * 0.7;
      parts.push(trunk(h, 0.32, 0.2, T));
      const a = new THREE.IcosahedronGeometry(spec.h * 0.28, 0); a.scale(1, 0.34, 1); a.translate(0, h + 0.4, 0);
      parts.push(colored(a, C));
      break;
    }
    case 'column': {
      parts.push(trunk(1, 0.2, 0.15, T));
      const a = new THREE.ConeGeometry(0.85, spec.h * 0.85, 6); a.translate(0, 0.6 + spec.h * 0.42, 0);
      parts.push(colored(a, C));
      break;
    }
    case 'palm': {
      const h = spec.h * 0.8;
      parts.push(trunk(h, 0.26, 0.17, T));
      for (let i = 0; i < 7; i++) {
        const f = new THREE.ConeGeometry(0.42, 3.2, 3);
        f.scale(1, 1, 0.3);
        f.rotateZ(-Math.PI / 2 - 0.35);
        f.translate(1.5, h - 0.2, 0);
        f.rotateY((i / 7) * Math.PI * 2);
        parts.push(colored(f, C));
      }
      break;
    }
    case 'spire': {
      parts.push(trunk(2, 0.3, 0.2, T));
      const k = spec.h / 16;
      [[2.3, 4.2, 3.4], [1.8, 3.6, 5.7], [1.2, 3.0, 7.9]].forEach(([r, hh, y]) => {
        const c = new THREE.ConeGeometry(r * k, hh * k, 7); c.translate(0, y * k + 0.6, 0);
        parts.push(colored(c, C));
      });
      break;
    }
    case 'slim': {
      parts.push(trunk(spec.h * 0.55, 0.16, 0.11, T));
      const a = new THREE.IcosahedronGeometry(1.3, 0); a.scale(0.85, 1.7, 0.85); a.translate(0, spec.h * 0.6, 0);
      parts.push(colored(a, C));
      break;
    }
    case 'bush': {
      const a = new THREE.IcosahedronGeometry(0.9, 0); a.scale(1.25, 0.7, 1.15); a.translate(0, 0.55, 0);
      const b = new THREE.IcosahedronGeometry(0.6, 0); b.translate(0.7, 0.45, 0.3);
      parts.push(colored(a, C), colored(b, C));
      break;
    }
    case 'round':
    default: {
      const k = spec.h / 11;
      parts.push(trunk(2.2 * k + 0.4, 0.28, 0.2, T));
      const a = new THREE.IcosahedronGeometry(2.2 * k + 0.4, 0); a.translate(0, 3.4 * k + 0.8, 0);
      parts.push(colored(a, C));
      break;
    }
  }
  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  merged.computeVertexNormals();
  geoCache.set(spec.id, merged);
  return merged;
}
