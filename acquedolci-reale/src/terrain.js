/**
 * Terreno: MDT 2013 (SITR) come rilievo, ortofoto 2022 (SITR) come pelle. Un pezzo di terreno per
 * ogni tile dell'ortofoto del paese (texture a 0,5 m), più un fondo su tutto il bbox con l'ortofoto
 * a bassa risoluzione, un filo più in basso così i pezzi fini lo coprono senza z-fighting.
 * L'ortofoto è già una foto con la sua luce: materiale non illuminato, i colori restano quelli veri.
 */
import * as THREE from 'three';
import { orthoMaterial } from './ortho.js';

export function makeHeightSampler(meta, heights, origin) {
  const [OX, OY] = origin;
  const { width: W, height: H, step, xmin, ymax } = meta;
  /** quota del terreno in coordinate locali (X est, Z sud) */
  return function heightAt(X, Z) {
    const x = X + OX, y = OY - Z;
    const c = (x - xmin) / step, r = (ymax - y) / step;
    const c0 = Math.max(0, Math.min(W - 2, Math.floor(c))), r0 = Math.max(0, Math.min(H - 2, Math.floor(r)));
    const fx = Math.min(1, Math.max(0, c - c0)), fy = Math.min(1, Math.max(0, r - r0));
    const i = r0 * W + c0;
    return heights[i] * (1 - fx) * (1 - fy) + heights[i + 1] * fx * (1 - fy) + heights[i + W] * (1 - fx) * fy + heights[i + W + 1] * fx * fy;
  };
}

const DEEP = -5; // m: sotto questa quota il fondale non si disegna (c'è il mare)
function gridMesh(tile, step, heightAt, origin, texture, drop = 0, bounds = null, refine = null) {
  const [OX, OY] = origin;
  // la tessera dell'ortofoto può uscire dal MDT: lì il terreno si ferma e comanda lo sfondo
  const x0 = bounds ? Math.max(tile.xmin, bounds.xmin) : tile.xmin, x1 = bounds ? Math.min(tile.xmax, bounds.xmax) : tile.xmax;
  const y0 = bounds ? Math.max(tile.ymin, bounds.ymin) : tile.ymin, y1 = bounds ? Math.min(tile.ymax, bounds.ymax) : tile.ymax;
  if (x1 <= x0 || y1 <= y0) return null;
  const nx = Math.max(2, Math.round((x1 - x0) / step) + 1);
  const ny = Math.max(2, Math.round((y1 - y0) / step) + 1);
  const pos = [], uv = [];
  const vert = (x, y, h) => {
    const X = x - OX, Z = OY - y;
    pos.push(X, (h ?? heightAt(X, Z)) - drop, Z);
    uv.push((x - tile.xmin) / (tile.xmax - tile.xmin), (y - tile.ymin) / (tile.ymax - tile.ymin));
    return pos.length / 3 - 1;
  };
  const gx = (i) => x0 + ((x1 - x0) * i) / (nx - 1), gy = (j) => y0 + ((y1 - y0) * j) / (ny - 1);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) vert(gx(i), gy(j));
  // celle con scavo o riporto stradale: divise a ≈2 m, così il muro di sostegno è netto
  const SUB = Math.max(2, Math.round(step / 2)), fine = new Uint8Array((nx - 1) * (ny - 1));
  if (refine) {
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const xa = gx(i) - OX, xb = gx(i + 1) - OX, za = OY - gy(j + 1), zb = OY - gy(j);
      if (refine(xa, za, xb, zb)) fine[j * (nx - 1) + i] = 1;
    }
  }
  // oltre il bordo della tessera la cella vicina è della tessera accanto: stessa prova, stessa scelta
  const outside = new Map();
  const isFine = (i, j) => {
    if (i >= 0 && j >= 0 && i < nx - 1 && j < ny - 1) return fine[j * (nx - 1) + i] === 1;
    if (!refine) return false;
    const k = i * 100003 + j;
    if (!outside.has(k)) outside.set(k, !!refine(gx(i) - OX, OY - gy(j + 1), gx(i + 1) - OX, OY - gy(j)));
    return outside.get(k);
  };
  const idx = [];
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
    if (!isFine(i, j)) {
      // fondale profondo (oltre ~70 m dalla riva): non si disegna, lì c'è solo il mare. Senza, il bordo
      // del riquadro del paese si vedeva da lontano come un poligono scuro nel mare
      if (pos[a * 3 + 1] < DEEP && pos[b * 3 + 1] < DEEP && pos[c * 3 + 1] < DEEP && pos[d * 3 + 1] < DEEP) continue;
      // visti dall'alto (+Y): Z cresce verso sud, y verso nord — ordine scelto per la faccia in su
      idx.push(a, b, c, b, d, c);
      continue;
    }
    // sui lati verso una cella grossa i punti intermedi stanno sulla retta fra gli angoli: niente crepe
    const hA = pos[a * 3 + 1] + drop, hB = pos[b * 3 + 1] + drop, hC = pos[c * 3 + 1] + drop, hD = pos[d * 3 + 1] + drop;
    const V = [];
    for (let q = 0; q <= SUB; q++) for (let p = 0; p <= SUB; p++) {
      const u = p / SUB, v = q / SUB;
      if ((p === 0 || p === SUB) && (q === 0 || q === SUB)) { V.push(p === 0 ? (q === 0 ? a : c) : (q === 0 ? b : d)); continue; }
      const x = gx(i) + (gx(i + 1) - gx(i)) * u, y = gy(j) + (gy(j + 1) - gy(j)) * v;
      let h = null;
      if (q === 0 && !isFine(i, j - 1)) h = hA + (hB - hA) * u;
      else if (q === SUB && !isFine(i, j + 1)) h = hC + (hD - hC) * u;
      else if (p === 0 && !isFine(i - 1, j)) h = hA + (hC - hA) * v;
      else if (p === SUB && !isFine(i + 1, j)) h = hB + (hD - hB) * v;
      V.push(vert(x, y, h));
    }
    for (let q = 0; q < SUB; q++) for (let p = 0; p < SUB; p++) {
      const A = V[q * (SUB + 1) + p], B = V[q * (SUB + 1) + p + 1], C = V[(q + 1) * (SUB + 1) + p], D = V[(q + 1) * (SUB + 1) + p + 1];
      if (pos[A * 3 + 1] < DEEP && pos[B * 3 + 1] < DEEP && pos[C * 3 + 1] < DEEP && pos[D * 3 + 1] < DEEP) continue;
      idx.push(A, B, C, B, D, C);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  const m = new THREE.Mesh(g, orthoMaterial(texture, { nearNeutral: true }));
  m.receiveShadow = true;
  return m;
}

export function buildTerrain({ orthoMeta, textures, heightAt, origin, bounds, refine = null, baseAt = heightAt }) {
  const group = new THREE.Group();
  group.name = 'terrain';
  for (const t of orthoMeta.tiles) {
    const tex = textures.get(t.file);
    if (!tex) continue;
    let m;
    if (t.level === 'base') {
      // sotto le tessere fini il fondo si abbassa vicino alle vie; fuori è lui il terreno e si raffina
      const [OX, OY] = origin;
      const core = orthoMeta.tiles.filter((c) => c.level !== 'base');
      const covered = (X, Z) => core.some((c) => X + OX >= c.xmin && X + OX <= c.xmax && OY - Z >= c.ymin && OY - Z <= c.ymax);
      const at = (X, Z) => (covered(X, Z) ? baseAt(X, Z) : heightAt(X, Z));
      const fine = refine && ((x0, z0, x1, z1) => !(covered(x0, z0) && covered(x1, z1) && covered(x0, z1) && covered(x1, z0)) && refine(x0, z0, x1, z1));
      m = gridMesh(t, 12, at, origin, tex, 0.6, bounds, fine);
    } else m = gridMesh(t, 6, heightAt, origin, tex, 0, bounds, refine);
    if (m) group.add(m);
  }
  return group;
}
