/**
 * Genera/rimuove i chunk attorno al giocatore (streaming): mai l'intera città in RAM o sulla
 * GPU, solo un raggio attorno a dove si guarda davvero — l'unico modo per reggere una città
 * intera a 0,25 m per cella (vedi voxelConfig.js).
 */
import * as THREE from 'three';
import { CHUNK, VOXEL } from './voxelConfig.js';
import { voxelizeChunk } from './voxelizeChunk.js';
import { greedyMesh } from './greedyMesh.js';
import { buildChunkGeometry } from './buildChunkGeometry.js';

const CHUNK_M = CHUNK * VOXEL;

export class ChunkManager {
  /**
   * @param {object} levelIndex da levelIndex.js
   * @param {THREE.Scene} scene
   * @param {{radius?:number, material?:THREE.Material}} [opts]
   */
  constructor(levelIndex, scene, opts = {}) {
    this.levelIndex = levelIndex;
    this.scene = scene;
    this.radius = opts.radius ?? 90; // m
    this.material = opts.material || new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide });
    this.chunks = new Map(); // "cx:cz" -> { mesh, cx, cz }
    this.group = new THREE.Group();
    this.group.name = 'voxel-chunks';
    scene.add(this.group);
    this._lastCx = null;
    this._lastCz = null;
  }

  key(cx, cz) { return `${cx}:${cz}`; }

  /** Da chiamare quando il giocatore si muove: genera i chunk mancanti nel raggio, toglie i lontani. */
  update(playerX, playerZ) {
    const cx = Math.floor(playerX / CHUNK_M), cz = Math.floor(playerZ / CHUNK_M);
    if (cx === this._lastCx && cz === this._lastCz) return { generated: 0, removed: 0 };
    this._lastCx = cx; this._lastCz = cz;
    const rc = Math.ceil(this.radius / CHUNK_M);
    const wanted = new Set();
    let generated = 0;
    for (let j = -rc; j <= rc; j++) {
      for (let i = -rc; i <= rc; i++) {
        const ccx = cx + i, ccz = cz + j;
        const dx = (ccx * CHUNK_M + CHUNK_M / 2) - playerX, dz = (ccz * CHUNK_M + CHUNK_M / 2) - playerZ;
        if (dx * dx + dz * dz > this.radius * this.radius) continue;
        const k = this.key(ccx, ccz);
        wanted.add(k);
        if (this.chunks.has(k)) continue;
        this._generate(ccx, ccz, k);
        generated++;
      }
    }
    let removed = 0;
    for (const [k, c] of this.chunks) {
      if (wanted.has(k)) continue;
      this.group.remove(c.mesh);
      c.mesh.geometry.dispose();
      this.chunks.delete(k);
      removed++;
    }
    return { generated, removed };
  }

  _generate(cx, cz, k) {
    const tile = voxelizeChunk(this.levelIndex, cx, cz);
    const mesh = greedyMesh(tile);
    if (!mesh.top.length && !mesh.risers.length) { this.chunks.set(k, { mesh: null, cx, cz }); return; }
    const geo = buildChunkGeometry(mesh, tile.originX, tile.originZ);
    const obj = new THREE.Mesh(geo, this.material);
    obj.name = `chunk-${cx}-${cz}`;
    obj.receiveShadow = true;
    obj.castShadow = true;
    this.group.add(obj);
    this.chunks.set(k, { mesh: obj, cx, cz });
  }

  /** Quota della superficie voxel in (x,z) (mondo, metri) o null se il chunk non è ancora generato. */
  heightAt(x, z) {
    const cx = Math.floor(x / CHUNK_M), cz = Math.floor(z / CHUNK_M);
    const c = this.chunks.get(this.key(cx, cz));
    if (!c) return null;
    // ricampiona la colonna: stessa fonte del chunk (levelIndex), non serve rileggere la mesh
    const s = this.levelIndex.sampleColumn(x, z);
    return Math.round(s.height / VOXEL) * VOXEL;
  }

  dispose() {
    for (const c of this.chunks.values()) if (c.mesh) c.mesh.geometry.dispose();
    this.scene.remove(this.group);
    this.chunks.clear();
  }
}
