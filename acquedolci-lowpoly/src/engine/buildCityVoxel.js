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
import { MAT } from './voxel/voxelConfig.js';
import { ChunkManager } from './voxel/ChunkManager.js';
import { buildBuildingsVoxel } from './voxel/buildBuildingsVoxel.js';
import { FarGround } from './voxel/FarGround.js';
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
  const FINE_R = opts.radius ?? 110;
  const chunks = new ChunkManager(levelIndex, scene, { radius: FINE_R });
  // Tre anelli: voxel fini (0,25 m) vicino, 2 m fino a ~340 m, 8 m per il resto della città.
  // Ogni anello si spegne dove quello più fine lo copre e sta un po' più in basso, così una
  // sovrapposizione residua resta sotto e non sfarfalla.
  const rect = level.rect;
  const nearSample = (x, z) => levelIndex.sampleColumn(x, z);
  // Oltre il bordo compilato il campo liscio (levelIndex.field) è tarato su un margine di poche
  // decine di metri intorno alla città: appiattisce tutto, e il vero monte roccioso dietro al
  // paese (misurato: sale a ~480 m già a 2 km) spariva. Oltre quel bordo si passa alla quota DEM
  // grezza (verificata: nel mosaico già caricato), colorata da terreno a roccia nuda con la quota —
  // niente di inventato, è il rilievo vero già nei dati.
  const MARGIN = (level.params?.heightField?.margin ?? 40) + 20;
  const inRect = (x, z) => x >= rect.minX - MARGIN && x <= rect.maxX + MARGIN && z >= rect.minZ - MARGIN && z <= rect.maxZ + MARGIN;
  function rockColor(h) {
    const t = Math.max(0, Math.min(1, (h - 60) / 320));
    const a = [0x6a, 0x66, 0x40], b = [0x5c, 0x59, 0x52]; // macchia verde-bruna → roccia grigia nuda; verificato via screenshot che sotto il sole di mezzogiorno rendeva troppo chiaro/sabbioso
    const mix = (i) => Math.round(a[i] + (b[i] - a[i]) * t);
    return (mix(0) << 16) | (mix(1) << 8) | mix(2);
  }
  const farSample = (x, z) => {
    if (inRect(x, z)) return levelIndex.sampleColumn(x, z);
    const h = sampleDemY(x, z);
    if (h == null) return { mat: MAT.TERRAIN, height: 0 };
    return { mat: MAT.TERRAIN, height: h, color: rockColor(h) };
  };
  const farNear = new FarGround(nearSample, scene, { rect, cell: 2, cells: 16, radius: 340, hideRadius: FINE_R - 10, drop: 0.3, name: 'far-ground-2m' });
  const farFar = new FarGround(farSample, scene, { rect, cell: 12, cells: 16, radius: 3000, hideRadius: 320, drop: 0.9, name: 'far-ground-12m' });

  const spawnX = cityConfig.spawn?.offsetX ?? 0;
  const spawnZ = cityConfig.spawn?.offsetZ ?? 0;
  chunks.update(spawnX, spawnZ); // genera subito i chunk attorno allo spawn
  progress('Terreno lontano…');
  farNear.update(spawnX, spawnZ);
  farFar.update(spawnX, spawnZ);
  const spawnY = levelIndex.sampleColumn(spawnX, spawnZ).height;

  progress('Edifici…');
  const osmData = await tryJSON(cityConfig.data.osm);
  // profilo regionale (scripts/bake-region): quota di terrazze piane, pendenza e colori dei tetti
  const region = await tryJSON(cityConfig.regionProfile || `/data/region/${cityConfig.id}.json`);
  const buildings = buildBuildingsVoxel(osmData?.features || [], level, levelIndex, region);
  scene.add(buildings.group);

  progress('Cielo e luce…');
  const look = createLook(renderer, scene, camera, style);
  // Il monte roccioso vero dietro il paese sale oltre i 2 km (vedi farSample sopra): con la
  // nebbia tarata sul motore continuo (fogFar ~1500 m) spariva nella foschia prima di essere
  // riconoscibile. Qui, non nello style pack condiviso, per non toccare il motore continuo.
  scene.fog.far = Math.max(scene.fog.far, 4500);
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
    /** Il giocatore (raggio ~0,3 m) in (x,z) entrerebbe in un edificio? */
    blocked(x, z, r = 0.3) {
      const s = buildings.solidAt;
      return s(x, z) || s(x + r, z) || s(x - r, z) || s(x, z + r) || s(x, z - r);
    },
    update(playerX, playerZ) {
      farNear.update(playerX, playerZ);
      farFar.update(playerX, playerZ);
      return chunks.update(playerX, playerZ);
    },
  };
}
