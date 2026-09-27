/**
 * Da una tessera voxelizzata (voxelizeChunk.js) a quad.
 *
 * Top: due casi distinti, per materiale.
 *  - "flat" (terrazzi/gradini: quota fissa per poligono, un vero gradino voluto) — fusi in
 *    rettangoli il più grandi possibile (greedy meshing classico), come prima.
 *  - "smooth" (strada/marciapiede/spiaggia/prato/terreno: quota dal campo liscio) — un quad per
 *    cella, ma con la quota vera di ognuno dei 4 spigoli (non un valore arrotondato costante): il
 *    tetto risultante è una rampa continua che segue la pendenza reale, non un gradinato.
 *    Niente fusione qui: celle vicine hanno quasi sempre spigoli leggermente diversi (è il punto),
 *    quindi il rettangolo più grande possibile è quasi sempre 1×1.
 *
 * Pareti (risers): solo dove il dislivello è VERO, non un effetto di arrotondamento — cioè al
 * bordo fra materiali diversi (il cordolo) o fra due celle "flat" con quota diversa (i gradini dei
 * terrazzi). Fra due celle "smooth" dello stesso materiale il dislivello ai due spigoli condivisi è
 * sempre ~0 per costruzione (stesso campo, stesso lift): nessuna parete, la rampa combacia da sola.
 */
import { CHUNK, MAT, VOXEL, liftOf } from './voxelConfig.js';

const RISER_STEP_VOX = 0.35 / VOXEL; // soglia cordolo/muro, in celle (confrontata su quote in "unità voxel")
const EPS = 0.01; // m: sotto questa soglia un dislivello è rumore numerico, non un vero gradino

/**
 * @param {{mat:Uint8Array, h:Int32Array, flat:Uint8Array, field:Float32Array, size:number, curb:number}} tile da voxelizeChunk
 * @returns {{top: Array, risers: Array}}
 *   top: {kind:'flat', i,j,w,d,mat,h} oppure {kind:'smooth', i,j,mat,y00,y10,y11,y01} (y* in metri).
 *   risers: {i,j,edge:'n'|'s'|'e'|'w', mat, ya:[nei,self], yb:[nei,self]} (metri), i,j locali (0..CHUNK-1).
 */
export function greedyMesh(tile) {
  const { mat, h, flat, field, size, curb } = tile;
  const FS = size + 1;
  const at = (i, j) => (j + 1) * size + (i + 1); // i,j locali (-1..CHUNK) → indice cella (con margine)
  const cornerAt = (ci, cj) => cj * FS + ci; // ci,cj = indice cella +1 (stesso margine): spigolo "min" della cella (i,j)

  // altezza (metri) della cella all'indice-cella k, in uno dei suoi 4 spigoli (ci,cj indicizzati
  // come sopra): per una cella "flat" è costante ovunque; per una "smooth" segue il campo.
  function cellCornerY(k, ci, cj) {
    if (flat[k]) return h[k] * VOXEL;
    return field[cornerAt(ci, cj)] + liftOf(mat[k], curb);
  }

  // ---- top
  const used = new Uint8Array(CHUNK * CHUNK);
  const top = [];
  for (let j = 0; j < CHUNK; j++) {
    for (let i = 0; i < CHUNK; i++) {
      const li = j * CHUNK + i;
      if (used[li]) continue;
      const k = at(i, j);
      const m = mat[k];
      if (m === MAT.AIR) { used[li] = 1; continue; }

      if (!flat[k]) {
        used[li] = 1;
        const ci0 = i + 1, cj0 = j + 1, ci1 = ci0 + 1, cj1 = cj0 + 1;
        top.push({
          kind: 'smooth', i, j, mat: m,
          y00: cellCornerY(k, ci0, cj0),
          y10: cellCornerY(k, ci1, cj0),
          y11: cellCornerY(k, ci1, cj1),
          y01: cellCornerY(k, ci0, cj1),
        });
        continue;
      }

      const hh = h[k];
      used[li] = 1;
      let w = 1;
      while (i + w < CHUNK && !used[j * CHUNK + i + w] && flat[at(i + w, j)] && mat[at(i + w, j)] === m && h[at(i + w, j)] === hh) w++;
      let d = 1;
      outer:
      while (j + d < CHUNK) {
        for (let di = 0; di < w; di++) {
          const kk = at(i + di, j + d);
          if (used[(j + d) * CHUNK + i + di] || !flat[kk] || mat[kk] !== m || h[kk] !== hh) break outer;
        }
        d++;
      }
      for (let dj = 0; dj < d; dj++) for (let di = 0; di < w; di++) used[(j + dj) * CHUNK + i + di] = 1;
      top.push({ kind: 'flat', i, j, w, d, mat: m, h: hh });
    }
  }

  // ---- pareti: ogni cella interna contro i 4 vicini (il vicino può essere nel margine, cioè
  // in un chunk adiacente non ancora generato: già campionato in voxelizeChunk, quindi la quota
  // è nota comunque — niente gradino fittizio ai bordi del chunk).
  // Per ogni lato si guardano i DUE spigoli condivisi con il vicino: il dislivello reale (cordolo,
  // muro, gradino di terrazzo) può variare lungo il bordo se una delle due celle è "smooth" e in
  // pendenza — la parete diventa un trapezio, non un rettangolo, e segue la pendenza come farebbe
  // un vero cordolo su una strada in salita.
  const risers = [];
  // edge → [cornerA(ci,cj), cornerB(ci,cj)] della cella (i,j), stesso ordine "a/b" usato in
  // buildChunkGeometry.js per gli estremi del lato in coordinate mondo.
  const EDGE_CORNERS = {
    n: (ci0, cj0, ci1, cj1) => [[ci0, cj0], [ci1, cj0]],
    s: (ci0, cj0, ci1, cj1) => [[ci1, cj1], [ci0, cj1]],
    e: (ci0, cj0, ci1, cj1) => [[ci1, cj0], [ci1, cj1]],
    w: (ci0, cj0, ci1, cj1) => [[ci0, cj1], [ci0, cj0]],
  };
  const NEI = [['n', 0, -1], ['s', 0, 1], ['e', 1, 0], ['w', -1, 0]];
  for (let j = 0; j < CHUNK; j++) {
    for (let i = 0; i < CHUNK; i++) {
      const k = at(i, j);
      const m = mat[k];
      if (m === MAT.AIR) continue;
      const ci0 = i + 1, cj0 = j + 1, ci1 = ci0 + 1, cj1 = cj0 + 1;
      for (const [edge, di, dj] of NEI) {
        const nk = at(i + di, j + dj);
        if (mat[nk] === MAT.AIR) continue;
        const [[caI, caJ], [cbI, cbJ]] = EDGE_CORNERS[edge](ci0, cj0, ci1, cj1);
        const selfA = cellCornerY(k, caI, caJ), selfB = cellCornerY(k, cbI, cbJ);
        const neiA = cellCornerY(nk, caI, caJ), neiB = cellCornerY(nk, cbI, cbJ);
        const dropA = selfA - neiA, dropB = selfB - neiB;
        if (dropA <= EPS && dropB <= EPS) continue; // il vicino non è più basso da nessuna parte del bordo
        const maxDrop = Math.max(dropA, dropB);
        const rmat = maxDrop < RISER_STEP_VOX * VOXEL ? MAT.CURB : MAT.WALL;
        risers.push({
          i, j, edge, mat: rmat,
          ya: [Math.min(neiA, selfA), selfA],
          yb: [Math.min(neiB, selfB), selfB],
        });
      }
    }
  }
  return { top, risers };
}
