/**
 * Un chunk = una tessera CHUNK×CHUNK celle (vedi voxelConfig.js) del terreno, generata al volo
 * campionando levelIndex.sampleColumn al centro di ogni cella. Per calcolare bene le pareti sui
 * bordi del chunk (dove la quota del vicino può stare in un chunk diverso, non ancora generato)
 * si campiona anche un margine di 1 cella tutto intorno: il chunk risultante conosce già i propri
 * vicini senza dover aspettare che esistano.
 *
 * Oltre a materiale e quota arrotondata (per i pochi materiali davvero "a gradino": terrazzi e
 * scale, quota fissa per poligono), si campiona anche il campo liscio agli SPIGOLI di cella. È
 * quello che rende il tetto delle strade/marciapiedi/spiagge una rampa continua invece di uno
 * scalino ogni 0,25 m: due celle vicine dello stesso materiale leggono lo STESSO spigolo dallo
 * stesso campo, quindi combaciano esattamente, qualunque sia la pendenza reale (vedi greedyMesh.js).
 */
import { VOXEL, CHUNK } from './voxelConfig.js';

const SIZE = CHUNK + 2; // con il margine di 1 cella per lato
const FS = SIZE + 1; // spigoli: uno in più delle celle su ogni lato

/**
 * @param {{sampleColumn:(x:number,z:number)=>{mat:number,height:number,flat:boolean}, field:{sample:Function}, curb:number}} levelIndex
 * @param {number} cx indice chunk lungo X
 * @param {number} cz indice chunk lungo Z
 * @returns {{mat:Uint8Array, h:Int32Array, flat:Uint8Array, field:Float32Array, size:number, originX:number, originZ:number, curb:number}}
 *   griglie SIZE×SIZE (margine incluso) per mat/h/flat; field è FS×FS (spigoli). h in UNITÀ VOXEL
 *   (intero) ed è significativa solo dove flat=1 (terrazzi/gradini); altrove la quota vera è nel
 *   campo liscio (field), non in h.
 */
export function voxelizeChunk(levelIndex, cx, cz) {
  const originX = cx * CHUNK * VOXEL;
  const originZ = cz * CHUNK * VOXEL;
  const mat = new Uint8Array(SIZE * SIZE);
  const h = new Int32Array(SIZE * SIZE);
  const flat = new Uint8Array(SIZE * SIZE);
  for (let j = 0; j < SIZE; j++) {
    const z = originZ + (j - 1 + 0.5) * VOXEL;
    for (let i = 0; i < SIZE; i++) {
      const x = originX + (i - 1 + 0.5) * VOXEL;
      const s = levelIndex.sampleColumn(x, z);
      const k = j * SIZE + i;
      mat[k] = s.mat;
      h[k] = Math.round(s.height / VOXEL);
      flat[k] = s.flat ? 1 : 0;
    }
  }
  const field = new Float32Array(FS * FS);
  for (let j = 0; j < FS; j++) {
    const z = originZ + (j - 1) * VOXEL;
    for (let i = 0; i < FS; i++) {
      const x = originX + (i - 1) * VOXEL;
      field[j * FS + i] = levelIndex.field.sample(x, z);
    }
  }
  return { mat, h, flat, field, size: SIZE, originX, originZ, curb: levelIndex.curb ?? 0.15 };
}
