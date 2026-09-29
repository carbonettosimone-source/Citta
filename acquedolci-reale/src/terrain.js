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

function gridMesh(tile, step, heightAt, origin, texture, drop = 0, bounds = null) {
  const [OX, OY] = origin;
  // la tessera dell'ortofoto può uscire dal MDT: lì il terreno si ferma e comanda lo sfondo
  const x0 = bounds ? Math.max(tile.xmin, bounds.xmin) : tile.xmin, x1 = bounds ? Math.min(tile.xmax, bounds.xmax) : tile.xmax;
  const y0 = bounds ? Math.max(tile.ymin, bounds.ymin) : tile.ymin, y1 = bounds ? Math.min(tile.ymax, bounds.ymax) : tile.ymax;
  if (x1 <= x0 || y1 <= y0) return null;
  const nx = Math.max(2, Math.round((x1 - x0) / step) + 1);
  const ny = Math.max(2, Math.round((y1 - y0) / step) + 1);
  const pos = new Float32Array(nx * ny * 3), uv = new Float32Array(nx * ny * 2);
  for (let j = 0; j < ny; j++) {
    const y = y0 + ((y1 - y0) * j) / (ny - 1);
    for (let i = 0; i < nx; i++) {
      const x = x0 + ((x1 - x0) * i) / (nx - 1);
      const X = x - OX, Z = OY - y;
      const k = j * nx + i;
      pos[k * 3] = X; pos[k * 3 + 1] = heightAt(X, Z) - drop; pos[k * 3 + 2] = Z;
      uv[k * 2] = (x - tile.xmin) / (tile.xmax - tile.xmin); uv[k * 2 + 1] = (y - tile.ymin) / (tile.ymax - tile.ymin);
    }
  }
  const idx = [];
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
    // visti dall'alto (+Y): Z cresce verso sud, y verso nord — ordine scelto per la faccia in su
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  const m = new THREE.Mesh(g, orthoMaterial(texture, { nearNeutral: true }));
  m.receiveShadow = true;
  return m;
}

export function buildTerrain({ orthoMeta, textures, heightAt, origin, bounds }) {
  const group = new THREE.Group();
  group.name = 'terrain';
  for (const t of orthoMeta.tiles) {
    const tex = textures.get(t.file);
    if (!tex) continue;
    const m = t.level === 'base' ? gridMesh(t, 12, heightAt, origin, tex, 0.6, bounds) : gridMesh(t, 6, heightAt, origin, tex, 0, bounds);
    if (m) group.add(m);
  }
  return group;
}
