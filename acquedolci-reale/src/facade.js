/**
 * Modulo facciata 3,5 m × 3,1 m (bianco × vertex color). Proporzioni e tipi tipici di Acquedolci:
 * finestre rettangolari modeste, persiane marroni o verdi (chiuse o socchiuse), piano terra con
 * persiane alte o saracinesca — come nelle foto panoramiche del paese (solo statistiche, niente pixel).
 */
import * as THREE from 'three';
import { NIGHT } from './daylight.js';

export const BAY = 3.5, FLOOR = 3.1;
export const UPPER_VARIANTS = 14;
export const GROUND_VARIANTS = 4;

function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Marrone legno e verde persiana — palette plaza-buildings / foto Commons */
const BROWN = ['#6d4a34', '#7a5234', '#6a4832', '#6e4a30'];
const GREEN = ['#2e6a3c', '#3a5c40', '#2c5c38', '#3f5f45'];
const FRAME = '#3a3a38';
const GLASS = '#8a9aa8';

function tex(cv) {
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function plaster(g, w, h, r) {
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 180; i++) {
    g.fillStyle = `rgba(0,0,0,${r() * 0.04})`;
    g.fillRect(r() * w, r() * h, 1.5, 1.5);
  }
  g.fillStyle = 'rgba(0,0,0,0.09)';
  g.fillRect(0, h - 4, w, 4);
}

function shutterSlats(g, x, y, sw, sh, col) {
  g.fillStyle = col;
  g.fillRect(x, y, sw, sh);
  g.fillStyle = 'rgba(0,0,0,0.2)';
  for (let ly = y + 3; ly < y + sh - 2; ly += 5) g.fillRect(x + 1, ly, sw - 2, 1);
}

/** Finestra siciliana standard: vano, vetro, persiane ai lati, davanzale in pietra */
function sicilianWindow(g, r, opts = {}) {
  const W = 128, H = 114;
  const ww = opts.wide ? 52 : 44;
  const wh = opts.tall ? 62 : 54;
  const wx = (W - ww) / 2;
  const wy = opts.low ? 30 : 26;
  const brown = r() < 0.68;
  const sc = brown ? BROWN[Math.floor(r() * BROWN.length)] : GREEN[Math.floor(r() * GREEN.length)];
  const sw = 12;
  const halfOpen = r() < 0.12;

  g.fillStyle = FRAME;
  g.fillRect(wx - 1, wy - 1, ww + 2, wh + 2);
  g.fillStyle = GLASS;
  g.fillRect(wx + 2, wy + 2, ww - 4, wh - 4);
  g.fillStyle = 'rgba(180,200,215,0.35)';
  g.fillRect(wx + 3, wy + 3, ww - 6, (wh - 6) * (halfOpen ? 0.55 : 0.42));

  if (halfOpen) {
    shutterSlats(g, wx - sw, wy, sw, wh * 0.92, sc);
    shutterSlats(g, wx + ww, wy, sw, wh * 0.92, sc);
    g.fillStyle = sc;
    g.fillRect(wx - sw + 2, wy + wh * 0.5, sw - 3, wh * 0.45);
    g.fillRect(wx + ww + 1, wy + wh * 0.5, sw - 3, wh * 0.45);
  } else {
    shutterSlats(g, wx - sw + 1, wy, sw - 1, wh, sc);
    shutterSlats(g, wx + ww, wy, sw - 1, wh, sc);
  }

  g.fillStyle = '#e0ddd4';
  g.fillRect(wx - 3, wy + wh, ww + 6, 4);
  g.fillStyle = 'rgba(0,0,0,0.08)';
  g.fillRect(wx - 3, wy + wh + 3, ww + 6, 1);
}

function drawUpper(seed) {
  const W = 128, H = 114;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const r = seeded(seed);
  plaster(g, W, H, r);
  const mode = seed % 5;
  if (mode === 0) sicilianWindow(g, r, {});
  else if (mode === 1) sicilianWindow(g, r, { wide: true });
  else if (mode === 2) sicilianWindow(g, r, { tall: true });
  else if (mode === 3) {
    sicilianWindow(g, r, { low: true });
    g.fillStyle = 'rgba(0,0,0,0.06)';
    g.fillRect(8, H - 12, W - 16, 2);
  } else {
    sicilianWindow(g, r, {});
    if (r() > 0.5) {
      g.fillStyle = 'rgba(0,0,0,0.07)';
      g.fillRect(10, 8, W - 20, 3);
    }
  }
  return tex(cv);
}

function drawGround(seed) {
  const W = 128, H = 114;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const r = seeded(seed + 4000);
  plaster(g, W, H, r);
  g.fillStyle = 'rgba(0,0,0,0.11)';
  g.fillRect(0, H - 12, W, 12);
  const v = seed % 4;
  const sx = 12, sw = W - 24, sy = 28, sh = H - 30;
  if (v === 0) {
    const sc = r() < 0.55 ? BROWN[0] : GREEN[1];
    shutterSlats(g, sx, sy, sw, sh, sc);
    g.fillStyle = FRAME;
    g.fillRect(sx + sw * 0.38, sy + sh * 0.15, sw * 0.24, sh * 0.7);
  } else if (v === 1) {
    g.fillStyle = '#8f9396';
    g.fillRect(sx, sy, sw, sh);
    g.fillStyle = 'rgba(0,0,0,0.2)';
    for (let y = sy + 4; y < H - 4; y += 5) g.fillRect(sx, y, sw, 1);
    g.fillStyle = '#d5d2ca';
    g.fillRect(sx - 2, sy - 5, sw + 4, 5);
  } else if (v === 2) {
    const sc = BROWN[Math.floor(r() * BROWN.length)];
    shutterSlats(g, sx, sy, sw * 0.42, sh, sc);
    g.fillStyle = '#5a4030';
    g.fillRect(sx + sw * 0.44, sy + 6, sw * 0.48, sh - 12);
    g.fillStyle = '#3a2820';
    g.fillRect(sx + sw * 0.48, sy + 12, sw * 0.4, sh - 24);
  } else {
    const sc = GREEN[Math.floor(r() * GREEN.length)];
    shutterSlats(g, sx + 4, sy, sw - 8, sh * 0.88, sc);
    g.fillStyle = FRAME;
    g.fillRect(sx + sw * 0.35, sy + sh * 0.55, sw * 0.3, sh * 0.35);
  }
  return tex(cv);
}

function litWindows(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = NIGHT;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        if (uNight > 0.0) {
          vec2 cell = floor(vMapUv), f = fract(vMapUv);
          float win = step(0.32, f.x) * step(f.x, 0.68) * step(0.28, f.y) * step(f.y, 0.72);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.3 ? vec3(1.0, 0.74, 0.42) : vec3(0.82, 0.88, 1.0);
          totalEmissiveRadiance += win * step(h, 0.32) * uNight * warm * 1.15;
        }`);
  };
  return m;
}

export function facadeMaterials() {
  const mats = [];
  for (let i = 0; i < UPPER_VARIANTS; i++) {
    mats.push(litWindows(new THREE.MeshLambertMaterial({
      map: drawUpper(8000 + i * 6151),
      vertexColors: true,
      side: THREE.DoubleSide,
    })));
  }
  for (let i = 0; i < GROUND_VARIANTS; i++) {
    mats.push(litWindows(new THREE.MeshLambertMaterial({
      map: drawGround(12000 + i * 3571),
      vertexColors: true,
      side: THREE.DoubleSide,
    })));
  }
  return mats;
}
