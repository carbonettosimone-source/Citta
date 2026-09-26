import * as THREE from 'three';
import { getJSON, tryJSON } from './data/dataSource.js';
import { setOrigin, project, ringToLocalPts, lineStringToLocalPts } from './geo.js';
import { loadTerrain, createTerrainMesh, sampleY, sampleDemY, getOriginElev, localToLonLat, setSurfaceOverride } from './terrain.js';
import { buildLevel } from './level/buildLevel.js';
import { planTrees } from './biome/TreeRules.js';
import { buildRoads, highwayWidth } from './roads/RoadBuilder.js';
import { compileStreetNetwork, CAR_HW } from './streets/StreetNetwork.js';
import { meshStreetNetwork } from './streets/StreetMesher.js';
import { buildBuildings } from './buildings/BuildingBuilder.js';
import { buildWater, buildVegetation } from './vegetation/VegetationBuilder.js';
import { buildLandmarks } from './landmarks/LandmarkBuilder.js';
import { buildPlazas } from './plazas/PlazaBuilder.js';
import { buildBarriers, buildLotFences } from './barriers/BarrierBuilder.js';
import { buildCoastFeatures } from './coast/CoastBuilder.js';
import { loadCityDna, applyDnaToStyle } from './dna/applyCityDna.js';
import { loadAppearance, appearanceIndex } from './appearance/loadAppearance.js';
import { resolveStylePack } from '../stylePacks/mediterraneanCoast.js';
import { profileToStyle, cloneStyle } from './region/profileToStyle.js';
import { makeTerrainColorAt } from './region/terrainColor.js';

async function loadRegionProfile(url) {
  return tryJSON(url);
}

/**
 * Orchestratore città: DEM → OSM → layer in ordine fisso.
 * terrain → water → soft veg → roads → buildings → trees → landmarks
 */
export async function buildCity(cityConfig, scene, camera, opts = {}) {
  const progress = opts.onProgress || (() => {});
  // RegionProfile (bake-region) → style dinamico; senza profilo: style pack clonato (mai mutare il modulo condiviso)
  progress('Profilo regionale…');
  // `region` nel config è il testo "Provincia, Regione" (UI): il path del profilo è `regionProfile`
  const regionUrl = cityConfig.regionProfile || `/data/region/${cityConfig.id}.json`;
  const profile = await loadRegionProfile(regionUrl);
  let style = profile ? profileToStyle(profile) : cloneStyle(resolveStylePack(cityConfig.stylePack));
  if (cityConfig.buildings?.roadClearance != null) {
    style.buildingRoadClearance = cityConfig.buildings.roadClearance;
  }
  progress('City DNA…');
  const dna = await loadCityDna(cityConfig.dna || cityConfig.data?.dna);
  if (dna) style = applyDnaToStyle(style, dna);

  progress('City Appearance…');
  const appearance = await loadAppearance(cityConfig.appearance || cityConfig.data?.appearance);
  if (appearance) {
    style.appearanceMap = appearanceIndex(appearance);
    style.appearance = appearance;
  }
  setOrigin(cityConfig.origin.lat, cityConfig.origin.lon);

  scene.background = new THREE.Color(style.colors.sky);
  scene.fog = new THREE.Fog(style.colors.fog, style.fogNear ?? 280, style.fogFar ?? 1400);

  progress('Caricamento DEM…');
  let demInfo = null;
  let demOk = false;
  try {
    demInfo = await loadTerrain(cityConfig.data.demMeta);
    demOk = true;
  } catch (err) {
    console.warn('DEM fallito, piano di fallback', err);
  }

  progress('Caricamento OSM…');
  const data = await getJSON(cityConfig.data.osm);
  const features = data.features || [];

  // La città nasce dalle strade: prima la rete (profili lisciati, incroci, marciapiedi),
  // poi il terreno che si adatta a lei, poi tutto il resto appoggiato sul terreno vero.
  // Livello compilato (scripts/compile-level.mjs): se c'è, sostituisce rete, strade e piazze del prototipo
  const levelData = demOk ? await tryJSON(cityConfig.level || `/data/level/${cityConfig.id}.json`) : null;
  setSurfaceOverride(null);

  progress('Rete stradale…');
  const carWays = [];
  const buildingPts = [];
  const minCar = style.roads?.minCarWidth ?? 4.8;
  for (const f of features) {
    const p = f.properties;
    if (p.kind === 'highway' && f.geometry.type === 'LineString' && CAR_HW.has(p.highway) && !(p.tunnel && p.tunnel !== 'no')) {
      const pts = lineStringToLocalPts(f.geometry.coordinates);
      if (pts.length >= 2) carWays.push({ pts, width: Math.max(highwayWidth(p), minCar * 0.9), highway: p.highway, id: p.id });
    } else if (p.kind === 'building' && f.geometry.type === 'Polygon') {
      const r = ringToLocalPts(f.geometry.coordinates[0]);
      if (r.length) {
        let x = 0, z = 0;
        for (const q of r) { x += q.x; z += q.z; }
        buildingPts.push({ x: x / r.length, z: z / r.length });
      }
    }
  }
  const network = levelData ? null : compileStreetNetwork(carWays, sampleDemY, buildingPts, {
    sidewalkWidth: style.roads?.sidewalkWidth ?? 1.6,
    curbHeight: style.roads?.curbHeight ?? 0.15,
    carveFlat: 1.5 * (cityConfig.terrain?.nearStep ?? 5),
  });

  // Il fondale scende sotto il livello del mare: il terreno Terrarium in mare vale ~0 m
  // ed entrerebbe in z-fighting con la superficie dell'acqua.
  const isSeaLL = style.regionRuntime?.isSea;
  const seaY = -getOriginElev();
  let level = null;
  if (levelData) {
    progress('Livello compilato…');
    // Impronte già pulite dal compilatore: niente arretramenti euristici dalle strade
    style._compiledFootprints = true;
    level = buildLevel(levelData, scene, style, sampleDemY);
  }
  const seaAwareCarve = (x, z, y) => {
    let v = level ? level.carve(x, z, y) : network.carve(x, z, y);
    if (isSeaLL && v < seaY + 0.3) {
      const { lon, lat } = localToLonLat(x, z);
      if (isSeaLL(lon, lat)) v = Math.min(v, seaY - 1.5);
    }
    return v;
  };

  if (demOk) {
    progress('Terreno…');
    const seaHex = style.colors.sea ?? 0x6aadc8;
    const seaRgb = [(seaHex >> 16) & 255, (seaHex >> 8) & 255, seaHex & 255];
    const bb = cityConfig.bbox;
    const a = project(bb.west, bb.north);
    const c = project(bb.east, bb.south);
    const M = cityConfig.terrain?.nearMargin ?? 150;
    createTerrainMesh(scene, {
      step: cityConfig.terrain?.step ?? 10,
      nearStep: cityConfig.terrain?.nearStep ?? 5,
      near: { minX: Math.min(a.x, c.x) - M, maxX: Math.max(a.x, c.x) + M, minZ: Math.min(a.z, c.z) - M, maxZ: Math.max(a.z, c.z) + M },
      carve: seaAwareCarve,
      covered: level ? (x, z) => !!level.surfaceAt(x, z) : null,
      color: style.colors.terrain,
      colorAt: style.region ? makeTerrainColorAt(style.region, style.regionRuntime, seaRgb) : null,
    });
  } else {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(2500, 2500),
      new THREE.MeshLambertMaterial({ color: style.colors.groundFallback }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    ground.name = 'terrain-fallback';
    scene.add(ground);
  }

  // Orizzonte (opzionale, da scripts/bake-horizon.mjs): silhouette reali fino a ~65 km
  const horizon = await tryJSON(cityConfig.horizon || `/data/horizon/${cityConfig.id}.json`);

  progress('Acqua…');
  const water = buildWater(features, scene, style);

  // Da qui in poi tutto ciò che si appoggia a terra usa la superficie compilata
  if (level) setSurfaceOverride((x, z) => level.surfaceAt(x, z)?.y ?? null);

  progress('Piazze…');
  const plazas = level ? { count: levelData.layers.ped?.length ?? 0 } : buildPlazas(features, scene, style);

  progress('Strade…');
  const osmCrossings = features
    .filter((f) => f.properties.kind === 'crossing' && f.geometry.type === 'Point')
    .map((f) => ({ ...project(f.geometry.coordinates[0], f.geometry.coordinates[1]), crossing: f.properties.crossing }));
  const streets = level ? { vertices: level.stats.vertices, crossings: 0 } : meshStreetNetwork(network, scene, style, osmCrossings);
  const roads = buildRoads(features, scene, style, level ? { polylinesOnly: true } : { network });
  // Impronte compilate: stessa identità OSM, geometria ritagliata sugli isolati
  if (levelData) {
    const u = levelData.unit || 0.1;
    const byId = new Map(levelData.buildings.map((b) => [String(b.id), b.o]));
    // tetti su qualsiasi pianta (straight skeleton compilato)
    style._skeletonRoofs = new Map(levelData.buildings.filter((b) => b.r).map((b) => [String(b.id), b.r]));
    for (const f of features) {
      if (f.properties.kind !== 'building' || f.geometry.type !== 'Polygon') continue;
      const o = byId.get(String(f.properties.id));
      if (!o) { f.properties._dropped = true; continue; }
      const ring = [];
      for (let i = 0; i < o.length; i += 2) {
        const ll = localToLonLat(o[i] * u, o[i + 1] * u);
        ring.push([ll.lon, ll.lat]);
      }
      ring.push(ring[0]);
      f.geometry = { type: 'Polygon', coordinates: [ring] };
    }
  }

  // Indice dei luoghi della città (vie, piazze, punti d'interesse) per la ricerca locale
  const places = [];
  for (const f of features) {
    const p = f.properties;
    if (!p.name) continue;
    if (f.geometry.type === 'LineString' && p.kind === 'highway') {
      const pts = lineStringToLocalPts(f.geometry.coordinates);
      if (pts.length) places.push({ name: p.name, kind: 'via', x: pts[pts.length >> 1].x, z: pts[pts.length >> 1].z });
    } else if (f.geometry.type === 'Point') {
      const q = project(f.geometry.coordinates[0], f.geometry.coordinates[1]);
      places.push({ name: p.name, kind: p.place === 'square' ? 'piazza' : 'luogo', x: q.x, z: q.z });
    } else if (f.geometry.type === 'Polygon' && (p.kind === 'building' || p.kind === 'poi' || p.kind === 'plaza' || p.highway === 'pedestrian')) {
      const r = ringToLocalPts(f.geometry.coordinates[0]);
      if (!r.length) continue;
      let x = 0, z = 0;
      for (const q of r) { x += q.x; z += q.z; }
      places.push({ name: p.name, kind: p.highway === 'pedestrian' || p.place === 'square' ? 'piazza' : 'luogo', x: x / r.length, z: z / r.length });
    }
  }

  /** Quota percorribile: marciapiede/carreggiata compilati, altrimenti terreno visibile. */
  const surfaceY = level ? (x, z) => sampleY(x, z) : (x, z) => network.surfaceAt(x, z)?.y ?? sampleY(x, z);

  progress('Vegetazione (suolo)…');
  buildVegetation(features, scene, style, [], { ground: true, trees: false }, roads.polylines);

  progress('Edifici…');
  const buildings = buildBuildings(level ? features.filter((f) => !f.properties._dropped) : features, scene, roads.polylines, 0.55, style, network);

  progress('Barriere OSM…');
  const barriers = buildBarriers(features, scene, style);
  const lotFences = level ? buildLotFences(levelData, scene, style) : { count: 0 };
  const coast = level ? buildCoastFeatures(levelData, scene, style, seaY) : { cliffCount: 0, pierCount: 0 };

  progress('Alberi…');
  // Alberi veri (M5): picchi della mappa globale delle chiome (Meta/WRI, 1 m, CC BY 4.0), già
  // fusi con gli OSM a monte in fetch-canopy.mjs solo per il filtro strade/edifici — la fusione
  // vera e propria (facts/resolveFacts.js) avviene qui, alberi OSM + misurati insieme.
  const canopy = await tryJSON(cityConfig.canopy || `/data/canopy/${cityConfig.id}.json`);
  let treePlan = null;
  if (level) {
    const G = buildings.footprintGrid;
    const q = [];
    treePlan = planTrees({
      roads: roads.polylines,
      features,
      level: levelData,
      surfaceAt: level.surfaceAt,
      nearBuilding: (x, z, r) => G.query(x, z, r, q).some((f) => {
        // distanza punto-poligono entro r (circolo contro i lati)
        const P = f.pts;
        for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
          const ax = P[j].x, az = P[j].z, bx = P[i].x, bz = P[i].z;
          const L = (bx - ax) ** 2 + (bz - az) ** 2;
          let t = L > 1e-9 ? ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / L : 0;
          t = Math.max(0, Math.min(1, t));
          if (Math.hypot(x - ax - (bx - ax) * t, z - az - (bz - az) * t) < r) return true;
        }
        return false;
      }),
      ringLocal: ringToLocalPts,
      measuredTrees: canopy?.trees || [],
    });
  }
  const vegetation = buildVegetation(features, scene, style, buildings.aabbs, {
    ground: false,
    trees: true,
    levelMode: !!level,
    extraPlacements: treePlan?.placements || [],
    canopy,
  }, roads.polylines);

  progress('Landmark…');
  const landmarks = buildLandmarks(features, scene, camera, style, {
    maxLabels: cityConfig.landmarks?.maxLabels ?? 12,
    kittedBuildingIds: buildings.kittedBuildingIds || new Set(),
    plazas: plazas?.plazas || [],
  });

  let cx = 0;
  let cz = 0;
  let n = 0;
  for (const b of buildings.aabbs) {
    cx += (b.minX + b.maxX) * 0.5;
    cz += (b.minZ + b.maxZ) * 0.5;
    n++;
  }
  if (n) {
    cx /= n;
    cz /= n;
  }

  function hitsBuilding(x, z) {
    for (const b of buildings.aabbs) {
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) return true;
    }
    return false;
  }

  // Spawn preferibilmente sul centro di una strada carrozzabile vicina al centro città
  const spawn = {
    x: cx + (cityConfig.spawn?.offsetX ?? 8),
    z: cz + (cityConfig.spawn?.offsetZ ?? 35),
    y: 0,
  };
  let best = null;
  for (const road of roads.polylines) {
    const hw = road.highway || '';
    if (['footway', 'path', 'steps', 'cycleway'].includes(hw)) continue;
    if ((road.width || 0) < 4) continue;
    for (let i = 0; i < road.pts.length; i++) {
      const p = road.pts[i];
      if (hitsBuilding(p.x, p.z)) continue;
      const d = Math.hypot(p.x - cx, p.z - cz);
      if (!best || d < best.d) best = { x: p.x, z: p.z, d };
    }
  }
  if (best) {
    spawn.x = best.x;
    spawn.z = best.z;
  } else {
    for (let attempt = 0; attempt < 80; attempt++) {
      const a = (attempt / 80) * Math.PI * 2;
      const r = 25 + (attempt % 20) * 3;
      const tx = cx + Math.cos(a) * r;
      const tz = cz + Math.sin(a) * r;
      if (!hitsBuilding(tx, tz)) {
        spawn.x = tx;
        spawn.z = tz;
        break;
      }
    }
  }
  // Quota asfalto: DEM + piccolo offset carreggiata
  spawn.y = surfaceY(spawn.x, spawn.z);

  return {
    cityConfig,
    style,
    demInfo,
    features,
    water,
    vegetation,
    roads,
    buildings,
    landmarks,
    plazas,
    barriers,
    lotFences,
    coast,
    dna: style.dna || null,
    appearance: style.appearance || null,
    spawn,
    sampleY,
    surfaceY,
    network,
    level: level ? { stats: level.stats, tests: levelData.tests, areas: levelData.areas, trees: treePlan?.stats, surfaceAt: level.surfaceAt, data: levelData } : null,
    horizon,
    places,
    streets,
    region: style.region || null,
    meta: data.meta || null,
  };
}
