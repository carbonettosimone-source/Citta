/**
 * Terreno lontano a bassa risoluzione. Il suolo voxel fine (ChunkManager, 0,25 m) esiste solo in
 * un raggio attorno al giocatore, mentre gli edifici sono costruiti per tutta la città: senza
 * questo livello, allontanando la camera si vedevano case sospese sopra il vuoto.
 *
 * Stesso campionamento del suolo fine (levelIndex.sampleColumn: stessi materiali e quote), su una
 * griglia rada a vertici condivisi. Sta leggermente più in basso (`drop`) così dove si sovrappone
 * al suolo fine resta nascosto sotto, e ogni tessera interamente coperta dal suolo fine si spegne.
 */
import * as THREE from 'three';
import { MAT_COLOR } from './voxelConfig.js';

export class FarGround {
  /**
   * @param {(x:number,z:number)=>{mat:number,height:number,color?:number}} sample quota/materiale
   *   in un punto; `color` (opzionale) sovrascrive il colore per materiale — usato oltre il bordo
   *   della città per colorare il rilievo vero (roccia) senza inventare un materiale apposta.
   * @param {THREE.Scene} scene
   * @param {{rect:{minX:number,maxX:number,minZ:number,maxZ:number}, cell:number, cells:number,
   *          radius:number, hideRadius:number, drop:number, name?:string}} o
   */
  constructor(sample, scene, o) {
    this.sample = sample;
    this.o = o;
    this.size = o.cell * o.cells;
    this.chunks = new Map();
    this.group = new THREE.Group();
    this.group.name = o.name || 'far-ground';
    this.material = new THREE.MeshLambertMaterial({ vertexColors: true });
    scene.add(this.group);
    this._lx = Infinity;
    this._lz = Infinity;
  }

  update(px, pz) {
    if (Math.hypot(px - this._lx, pz - this._lz) < this.o.cell * 2) return 0;
    this._lx = px;
    this._lz = pz;
    const { rect, radius, hideRadius } = this.o;
    const S = this.size;
    const i0 = Math.floor(Math.max(rect.minX, px - radius) / S), i1 = Math.floor(Math.min(rect.maxX, px + radius) / S);
    const j0 = Math.floor(Math.max(rect.minZ, pz - radius) / S), j1 = Math.floor(Math.min(rect.maxZ, pz + radius) / S);
    const wanted = new Set();
    let generated = 0;
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const cx = (i + 0.5) * S, cz = (j + 0.5) * S;
        if (Math.hypot(cx - px, cz - pz) > radius + S) continue;
        const k = `${i}:${j}`;
        wanted.add(k);
        let c = this.chunks.get(k);
        if (!c) { c = this._generate(i, j); this.chunks.set(k, c); generated++; }
        // spento se tutti e 4 gli angoli stanno dentro il raggio coperto da un livello più fine
        let far = 0;
        for (const [x, z] of [[i * S, j * S], [(i + 1) * S, j * S], [i * S, (j + 1) * S], [(i + 1) * S, (j + 1) * S]]) {
          far = Math.max(far, Math.hypot(x - px, z - pz));
        }
        c.visible = far > hideRadius;
      }
    }
    for (const [k, c] of this.chunks) {
      if (wanted.has(k)) continue;
      this.group.remove(c);
      c.geometry.dispose();
      this.chunks.delete(k);
    }
    return generated;
  }

  _generate(ci, cj) {
    const { cell, cells, drop } = this.o;
    const N = cells + 1;
    const x0 = ci * this.size, z0 = cj * this.size;
    const pos = new Float32Array(N * N * 3);
    const col = new Float32Array(N * N * 3);
    const c = new THREE.Color();
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const x = x0 + i * cell, z = z0 + j * cell;
        const s = this.sample(x, z);
        const k = (j * N + i) * 3;
        pos[k] = x; pos[k + 1] = s.height - drop; pos[k + 2] = z;
        c.setHex(s.color ?? MAT_COLOR[s.mat] ?? 0xc4b48a);
        col[k] = c.r; col[k + 1] = c.g; col[k + 2] = c.b;
      }
    }
    const idx = [];
    for (let j = 0; j < cells; j++) {
      for (let i = 0; i < cells; i++) {
        const a = j * N + i, b = a + 1, d = a + N, e = d + 1;
        idx.push(a, d, b, b, d, e); // normale verso l'alto
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, this.material);
    mesh.receiveShadow = true;
    this.group.add(mesh);
    return mesh;
  }
}
