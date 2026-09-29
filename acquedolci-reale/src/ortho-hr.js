/**
 * Ortofoto nativa a 25 cm intorno a chi guarda. Le tessere da 256 m (fetch-ortho-hr.mjs) si caricano
 * a gruppi di 3×3 intorno al punto guardato e si compongono in una sola texture 3072×3072 (768 m);
 * suolo e tetti la campionano in coordinate mondo (ortho.js) e fuori dalla finestra resta la 0,5 m.
 * Così il dettaglio vero del volo arriva dove serve senza caricare 34 MB di immagini in una volta.
 */
import * as THREE from 'three';
import { HR } from './ortho.js';

export function createOrthoHR(meta, origin, renderer) {
  const [OX, OY] = origin;
  const { size: S, px: PX } = meta;
  const have = new Set(meta.tiles.map(([i, j]) => `${i},${j}`));
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = PX * 3;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const cache = new Map(); // "i,j" → Promise<HTMLImageElement|null>
  let cur = null, dirty = false, last = 0;

  function load(k) {
    if (!cache.has(k)) {
      const [i, j] = k.split(',');
      cache.set(k, new Promise((res) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = `data/ortho-hr/hr_${i}_${j}.jpg`; }));
      // tiene in memoria al massimo 5×5 tessere
      if (cache.size > 25) cache.delete(cache.keys().next().value);
    }
    return cache.get(k);
  }

  function update(focus) {
    const ci = Math.floor((focus.x + OX) / S), cj = Math.floor((OY - focus.z) / S);
    const key = `${ci},${cj}`;
    if (key !== cur) {
      cur = key;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      HR.rect.value.set((ci - 1) * S - OX, OY - (cj - 1) * S, 3 * S, 1);
      HR.map.value = tex;
      dirty = true;
      for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
        const k = `${ci + di},${cj + dj}`;
        if (!have.has(k)) continue;
        load(k).then((im) => {
          if (!im || cur !== key) return;
          // j cresce verso nord: la riga più a nord sta in alto nel canvas
          ctx.drawImage(im, (di + 1) * PX, (1 - dj) * PX, PX, PX);
          dirty = true;
        });
      }
    }
    // un solo caricamento sulla GPU ogni tanto, anche se arrivano più tessere di fila
    const now = performance.now();
    if (dirty && now - last > 250) { tex.needsUpdate = true; dirty = false; last = now; }
  }
  return { update };
}
