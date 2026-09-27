/**
 * Orchestratore città — motore voxel (M6, V1: suolo; V2: edifici). Stessa origine/DEM/cielo del
 * motore continuo (buildCity.js): cambia solo come suolo ed edifici diventano geometria — a
 * blocchi invece che earcut su poligoni Clipper. Alberi e mare a onde restano da portare (V3).
 */
import * as THREE from 'three';
import { tryJSON } from './data/dataSource.js';
import { setOrigin } from './geo.js';
import { loadTerrain, sampleDemY, setSurfaceOverride } from './terrain.js';
import { buildLevelIndex } from './voxel/levelIndex.js';
import { ChunkManager } from './voxel/ChunkManager.js';
import { buildBuildingsVoxel } from './voxel/buildBuildingsVoxel.js';
import { createAtmosphere } from './sky/atmosphere.js';
import { createLook } from './look/createLook.js';
import { resolveStylePack } from '../stylePacks/mediterraneanCoast.js';
import { cloneStyle } from './region/profileToStyle.js';

export async function buildCityVoxel(cityConfig, scene, camera, renderer, opts = {}) {
  const progress = opts.onProgress || (() => {});
  progress('Origine e DEM…');
  setOrigin(cityConfig.origin.lat, cityConfig.origin.lon);
  setSurfaceOverride(null);
  await loadTerrain(cityConfig.data.demMeta);

  progress('Livello compilato…');
  const level = await tryJSON(cityConfig.level || `/data/level/${cityConfig.id}.json`);
  if (!level) throw new Error('Livello compilato mancante: lancia prima npm run compile-level.');
  const levelIndex = buildLevelIndex(level, sampleDemY);
  setSurfaceOverride((x, z) => levelIndex.sampleColumn(x, z).height);

  progress('Voxel del suolo…');
  const style = cloneStyle(resolveStylePack(cityConfig.stylePack));
  const chunks = new ChunkManager(levelIndex, scene, { radius: opts.radius ?? 110 });

  const spawnX = cityConfig.spawn?.offsetX ?? 0;
  const spawnZ = cityConfig.spawn?.offsetZ ?? 0;
  chunks.update(spawnX, spawnZ); // genera subito i chunk attorno allo spawn
  const spawnY = levelIndex.sampleColumn(spawnX, spawnZ).height;

  progress('Edifici…');
  const osmData = await tryJSON(cityConfig.data.osm);
  const buildings = buildBuildingsVoxel(osmData?.features || [], level, levelIndex);
  scene.add(buildings.group);

  progress('Cielo e luce…');
  const look = createLook(renderer, scene, camera, style);
  const atmosphere = createAtmosphere({
    scene, look, style, cityConfig,
    timeOverride: new URLSearchParams(location.search).get('ora') || '16:30',
  });

  return {
    engine: 'voxel',
    style,
    look,
    atmosphere,
    chunks,
    buildings,
    rect: level.rect,
    spawn: { x: spawnX, y: spawnY, z: spawnZ },
    sampleY: (x, z) => levelIndex.sampleColumn(x, z).height,
    update(playerX, playerZ) { return chunks.update(playerX, playerZ); },
  };
}
