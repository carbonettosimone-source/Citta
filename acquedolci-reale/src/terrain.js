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

function gridMesh(tile, step, heightAt, origin, texture, drop = 0) {
  const [OX, OY] = origin;
  const nx = Math.max(2, Math.round((tile.xmax - tile.xmin) / step) + 1);
  const ny = Math.max(2, Math.round((tile.ymax - tile.ymin) / step) + 1);
  const pos = new Float32Array(nx * ny * 3), uv = new Float32Array(nx * ny * 2);
  for (let j = 0; j < ny; j++) {
    const y = tile.ymin + ((tile.ymax - tile.ymin) * j) / (ny - 1);
    for (let i = 0; i < nx; i++) {
      const x = tile.xmin + ((tile.xmax - tile.xmin) * i) / (nx - 1);
      const X = x - OX, Z = OY - y;
      const k = j * nx + i;
      pos[k * 3] = X; pos[k * 3 + 1] = heightAt(X, Z) - drop; pos[k * 3 + 2] = Z;
      uv[k * 2] = i / (nx - 1); uv[k * 2 + 1] = j / (ny - 1);
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

export function buildTerrain({ orthoMeta, textures, heightAt, origin }) {
  const group = new THREE.Group();
  group.name = 'terrain';
  for (const t of orthoMeta.tiles) {
    const tex = textures.get(t.file);
    if (!tex) continue;
    if (t.level === 'base') group.add(gridMesh(t, 12, heightAt, origin, tex, 0.6));
    else group.add(gridMesh(t, 4, heightAt, origin, tex, 0));
  }
  // mare oltre i dati: piatto e lontano, sotto la costa dell'ortofoto
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(40000, 40000), new THREE.MeshLambertMaterial({ color: 0x2c6a86 }));
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -1.2;
  group.add(sea);
  return group;
}
