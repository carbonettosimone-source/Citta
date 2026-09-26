import * as THREE from 'three';
import { CSS2DObject, CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { project, polygonCentroidLonLat } from '../geo.js';
import { sampleY } from '../terrain.js';
import { LAYER } from '../layers.js';
import {
  classifyPoi,
  POI_PRIORITY,
  italianTypeLabel,
  FOOTPRINT_KITS,
  attachPoiKit,
} from './kits/index.js';

function featureCenter(f) {
  const g = f.geometry;
  if (!g) return null;
  if (g.type === 'Point') return project(g.coordinates[0], g.coordinates[1]);
  if (g.type === 'Polygon') {
    const { lon, lat } = polygonCentroidLonLat(g.coordinates);
    return project(lon, lat);
  }
  if (g.type === 'LineString') {
    const c = g.coordinates[Math.floor(g.coordinates.length / 2)];
    return project(c[0], c[1]);
  }
  return null;
}

function makeLabel(title, subtitle) {
  const el = document.createElement('div');
  el.className = 'landmark-label';
  if (subtitle) {
    el.innerHTML = `<div class="lm-title">${title}</div><div class="lm-sub">${subtitle}</div>`;
  } else {
    el.textContent = title;
  }
  const obj = new CSS2DObject(el);
  obj.position.set(0, 0, 0);
  return obj;
}

function simpleMarker(kind, colors) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.1, 4.2, 6),
    new THREE.MeshLambertMaterial({
      color: colors.landmarkPole ?? 0xc45c3a,
      flatShading: true,
    }),
  );
  pole.position.y = 2.1;
  pole.castShadow = true;
  g.add(pole);

  let head;
  if (kind === 'fuel') {
    head = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.MeshLambertMaterial({ color: 0x3a7ab0, flatShading: true }),
    );
  } else if (kind === 'park' || kind === 'square') {
    head = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 0.25, 8),
      new THREE.MeshLambertMaterial({ color: 0x6aaa50, flatShading: true }),
    );
  } else {
    head = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 8, 6),
      new THREE.MeshLambertMaterial({
        color: colors.landmarkAccent ?? 0xf0d060,
        flatShading: true,
      }),
    );
  }
  head.position.y = 4.5;
  head.castShadow = true;
  g.add(head);
  return g;
}

/**
 * Labels + lightweight markers. Rich typology meshes are attached by BuildingBuilder
 * onto the real footprints (kits). Avoids double-drawing building volumes.
 *
 * @returns {{ group, labelRenderer, landmarks, update, onResize }}
 */
export function buildLandmarks(features, scene, camera, style = {}, opts = {}) {
  const maxLabels = opts.maxLabels ?? style.landmarks?.maxLabels ?? 12;
  const colors = style.colors || {};
  const kittedIds = opts.kittedBuildingIds || new Set();
  const plazas = opts.plazas || [];
  const candidates = [];

  for (const f of features) {
    const kind = classifyPoi(f.properties);
    if (!kind) continue;
    // Plazas come from PlazaBuilder anchors — avoid duplicate square markers
    if (kind === 'square' || kind === 'park') continue;
    const name = f.properties.name;
    if (
      !name &&
      !['church', 'cathedral', 'chapel', 'train_station', 'townhall', 'school', 'kindergarten'].includes(
        kind,
      )
    ) {
      continue;
    }
    const center = featureCenter(f);
    if (!center) continue;
    const id = f.properties.id;
    candidates.push({
      kind,
      id,
      name: name || italianTypeLabel(kind),
      subtitle: italianTypeLabel(kind),
      named: !!name,
      x: center.x,
      z: center.z,
      priority: POI_PRIORITY[kind] || 40,
      hasFootprintKit: FOOTPRINT_KITS.has(kind) && kittedIds.has(String(id)),
      feature: f,
    });
  }

  // If a POI node lacks the building id but sits on a kitted footprint, treat as kitted (label-only).
  for (const c of candidates) {
    if (c.hasFootprintKit) continue;
    if (!FOOTPRINT_KITS.has(c.kind)) continue;
    for (const f of features) {
      if (f.properties?.kind !== 'building') continue;
      const id = String(f.properties.id);
      if (!kittedIds.has(id)) continue;
      if (classifyPoi(f.properties) !== c.kind) continue;
      const bc = featureCenter(f);
      if (!bc) continue;
      if (Math.hypot(bc.x - c.x, bc.z - c.z) < 40) {
        c.hasFootprintKit = true;
        c.id = f.properties.id;
        break;
      }
    }
  }

  // Named plazas as label anchors
  const seenPlazas = new Set();
  for (const pl of plazas) {
    if (!pl?.name || pl.x == null) continue;
    const key = pl.name.toLowerCase();
    if (seenPlazas.has(key)) continue;
    seenPlazas.add(key);
    candidates.push({
      kind: 'square',
      id: `plaza-${pl.name}`,
      name: pl.name,
      subtitle: 'Piazza',
      named: true,
      x: pl.x,
      z: pl.z,
      priority: POI_PRIORITY.square,
      hasFootprintKit: true, // label only
      feature: null,
    });
  }

  candidates.sort(
    (a, b) =>
      (b.named | 0) - (a.named | 0) || b.priority - a.priority || a.name.localeCompare(b.name),
  );

  const picked = [];
  for (const c of candidates) {
    if (picked.length >= maxLabels) break;
    if (picked.some((p) => Math.hypot(p.x - c.x, p.z - c.z) < 22)) continue;
    if (
      !c.named &&
      picked.some((p) => p.kind === c.kind && !p.named && Math.hypot(p.x - c.x, p.z - c.z) < 120)
    ) {
      continue;
    }
    picked.push(c);
  }

  const group = new THREE.Group();
  group.name = 'landmarks';
  group.renderOrder = LAYER.LANDMARKS;

  const special = [];

  for (const lm of picked) {
    const y = sampleY(lm.x, lm.z);
    const anchor = new THREE.Group();
    anchor.position.set(lm.x, y, lm.z);

    // Fuel (point POI): distinctive prop, no building footprint
    if (lm.kind === 'fuel' && !lm.hasFootprintKit) {
      const fuelGroup = new THREE.Group();
      const info = attachPoiKit('fuel', fuelGroup, {
        cx: 0,
        cz: 0,
        baseY: 0,
        style,
      });
      fuelGroup.position.y = 0;
      anchor.add(fuelGroup);
      const label = makeLabel(lm.name, lm.subtitle);
      label.position.y = info?.labelY ?? 5;
      anchor.add(label);
      special.push({ kind: lm.kind, name: lm.name, method: 'fuel-kit' });
    } else if (lm.hasFootprintKit || FOOTPRINT_KITS.has(lm.kind)) {
      // Building already has typology kit mesh — label only (raised)
      const label = makeLabel(lm.name, lm.subtitle);
      label.position.y = lm.kind === 'church' || lm.kind === 'cathedral' ? 16 : 11;
      if (lm.kind === 'train_station') label.position.y = 10;
      if (lm.kind === 'townhall') label.position.y = 12;
      if (lm.kind === 'square') label.position.y = 3.5;
      anchor.add(label);
      special.push({
        kind: lm.kind,
        name: lm.name,
        method: lm.hasFootprintKit ? 'footprint-kit+label' : 'label-near-building',
      });
    } else {
      // Generic pole marker for remaining named POIs
      anchor.add(simpleMarker(lm.kind, colors));
      const label = makeLabel(lm.name, lm.subtitle);
      label.position.y = 5.4;
      anchor.add(label);
      special.push({ kind: lm.kind, name: lm.name, method: 'marker+label' });
    }

    group.add(anchor);
  }

  scene.add(group);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(innerWidth, innerHeight);
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.inset = '0';
  labelRenderer.domElement.style.pointerEvents = 'none';
  labelRenderer.domElement.style.zIndex = '5';
  document.getElementById('app')?.appendChild(labelRenderer.domElement);

  function update() {
    labelRenderer.render(scene, camera);
  }
  function onResize() {
    labelRenderer.setSize(innerWidth, innerHeight);
  }
  addEventListener('resize', onResize);

  return {
    group,
    labelRenderer,
    landmarks: picked,
    special,
    update,
    onResize,
  };
}
