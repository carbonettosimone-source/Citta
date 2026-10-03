/**
 * Texture di facciata disegnate a canvas: un modulo = una campata (3,5 m) × un piano (3,1 m), in
 * bianco — il colore vero dell'intonaco arriva dal vertex color dell'edificio (moltiplica).
 * Molte varianti procedurali (persiane, tapparelle, inferriate, portoni, saracinesche).
 */
import * as THREE from 'three';
import { NIGHT } from './daylight.js';

export const BAY = 3.5, FLOOR = 3.1;
export const UPPER_VARIANTS = 22;
export const GROUND_VARIANTS = 8;

function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const SHUTTER_PALETTE = [
  '#3f5f45', '#6a4a32', '#8a8a86', '#2e4a62', '#7a3030', '#4a3a28', '#5c6b4a', '#3d3d48',
  '#6b5c4a', '#284838', '#8b6914', '#556070',
];
const FRAME = '#2b3136';
const GLASS = 'rgba(160,190,210,0.38)';

function tex(cv) {
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function plasterGrain(g, w, h, r, amt = 260) {
  for (let i = 0; i < amt; i++) {
    g.fillStyle = `rgba(0,0,0,${r() * 0.055})`;
    g.fillRect(r() * w, r() * h, 1.5 + r() * 2, 1.5 + r() * 2);
  }
}

function floorBand(g, w, h) {
  g.fillStyle = 'rgba(0,0,0,0.10)';
  g.fillRect(0, h - 5, w, 5);
  g.fillStyle = 'rgba(0,0,0,0.07)';
  g.fillRect(0, 0, w, 3);
}

function drawWindow(g, wx, wy, ww, wh, r, opts) {
  const { shutters, shutterCol, open, grille, flower, sill } = opts;
  g.fillStyle = FRAME;
  g.fillRect(wx, wy, ww, wh);
  const paneH = open ? wh * (0.42 + r() * 0.2) : wh - 6;
  g.fillStyle = GLASS;
  g.fillRect(wx + 3, wy + 3, ww - 6, paneH);
  if (open) {
    g.fillStyle = 'rgba(200,220,240,0.25)';
    g.fillRect(wx + 4, wy + paneH + 2, ww - 8, wh - paneH - 5);
  }
  if (grille) {
    g.strokeStyle = 'rgba(40,40,44,0.55)';
    g.lineWidth = 1.2;
    for (let x = wx + 8; x < wx + ww - 4; x += 7) {
      g.beginPath(); g.moveTo(x, wy + 4); g.lineTo(x, wy + wh - 4); g.stroke();
    }
    for (let y = wy + 8; y < wy + wh - 4; y += 9) {
      g.beginPath(); g.moveTo(wx + 4, y); g.lineTo(wx + ww - 4, y); g.stroke();
    }
  }
  if (shutters) {
    const sw = 11 + Math.floor(r() * 4);
    g.fillStyle = shutterCol;
    const gap = open ? 0.35 + r() * 0.25 : 0;
    const sl = open ? sw * (1 - gap) : sw;
    g.fillRect(wx - sl - 1, wy, sl, wh);
    g.fillRect(wx + ww + 1, wy, sl, wh);
    g.fillStyle = 'rgba(0,0,0,0.22)';
    for (let y = wy + 3; y < wy + wh; y += 4 + Math.floor(r() * 2)) {
      g.fillRect(wx - sl, y, sl - 1, 1);
      g.fillRect(wx + ww + 2, y, sl - 1, 1);
    }
  }
  if (sill === 'marble') {
    g.fillStyle = '#eceae4';
    g.fillRect(wx - 5, wy + wh, ww + 10, 4);
  } else if (sill === 'stone') {
    g.fillStyle = '#d0ccc4';
    g.fillRect(wx - 3, wy + wh, ww + 6, 5);
  } else if (sill === 'balcony') {
    g.fillStyle = '#d8d6d0';
    g.fillRect(wx - 16, wy + wh, ww + 32, 5);
    g.fillStyle = '#3a3a3a';
    g.fillRect(wx - 16, wy + wh - 20, ww + 32, 2);
    for (let x = wx - 16; x <= wx + ww + 16; x += 5) g.fillRect(x, wy + wh - 20, 1.2, 20);
  } else {
    g.fillStyle = '#e8e6e0';
    g.fillRect(wx - 4, wy + wh, ww + 8, 4);
  }
  if (flower && r() > 0.35) {
    g.fillStyle = r() > 0.5 ? '#c84a3a' : '#e8a030';
    for (let i = 0; i < 4; i++) g.fillRect(wx + 6 + i * 9, wy + wh + 5, 5, 5);
  }
}

function drawUpper(seed) {
  const W = 128, H = 114;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const r = seeded(seed);
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, W, H);
  plasterGrain(g, W, H, r);
  floorBand(g, W, H);

  const kind = Math.floor(r() * 6);
  const ww = 28 + Math.floor(r() * 18);
  const wh = 48 + Math.floor(r() * 14);
  const wx = (W - ww) / 2 + (r() - 0.5) * 8;
  const wy = 20 + Math.floor(r() * 8);

  if (kind === 0) {
    drawWindow(g, wx, wy, ww, wh, r, {
      shutters: true, shutterCol: SHUTTER_PALETTE[Math.floor(r() * SHUTTER_PALETTE.length)],
      open: r() > 0.55, grille: r() > 0.7, flower: r() > 0.6, sill: r() > 0.5 ? 'balcony' : 'ledge',
    });
  } else if (kind === 1) {
    drawWindow(g, wx, wy, ww, wh, r, {
      shutters: true, shutterCol: SHUTTER_PALETTE[Math.floor(r() * SHUTTER_PALETTE.length)],
      open: false, grille: false, flower: false, sill: 'marble',
    });
  } else if (kind === 2) {
    const th = wh * (0.25 + r() * 0.45);
    g.fillStyle = FRAME; g.fillRect(wx, wy, ww, wh);
    g.fillStyle = GLASS; g.fillRect(wx + 3, wy + th, ww - 6, wh - th - 4);
    g.fillStyle = '#c9c4b8'; g.fillRect(wx, wy, ww, th);
    g.fillStyle = 'rgba(0,0,0,0.16)';
    for (let y = wy + 2; y < wy + th; y += 3) g.fillRect(wx, y, ww, 1);
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(wx - 3, wy - 5, ww + 6, 5);
    g.fillStyle = '#eceae4'; g.fillRect(wx - 4, wy + wh, ww + 8, 4);
  } else if (kind === 3) {
    drawWindow(g, wx, wy, ww, wh, r, {
      shutters: false, open: true, grille: true, flower: r() > 0.5, sill: 'stone',
    });
    g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(wx - 8, wy - 2, ww + 16, 3);
  } else if (kind === 4) {
    const n = r() > 0.5 ? 2 : 1;
    const gap = 8;
    const tw = (ww - gap * (n - 1)) / n;
    for (let i = 0; i < n; i++) {
      drawWindow(g, wx + i * (tw + gap), wy, tw, wh, r, {
        shutters: true, shutterCol: SHUTTER_PALETTE[Math.floor(r() * SHUTTER_PALETTE.length)],
        open: r() > 0.4, grille: false, flower: false, sill: 'ledge',
      });
    }
  } else {
    drawWindow(g, wx, wy, ww, wh, r, {
      shutters: true, shutterCol: '#4a4038', open: r() > 0.75, grille: r() > 0.55,
      flower: false, sill: r() > 0.66 ? 'balcony' : 'marble',
    });
    g.fillStyle = 'rgba(0,0,0,0.09)';
    g.fillRect(4, H - 18, W - 8, 2);
  }

  if (r() > 0.72) {
    g.fillStyle = 'rgba(0,0,0,0.11)';
    g.fillRect(0, H - 14, W, 12);
  }
  return tex(cv);
}

function drawGround(seed) {
  const W = 128, H = 114;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const r = seeded(seed + 9001);
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, W, H);
  plasterGrain(g, W, H, r, 220);
  g.fillStyle = 'rgba(0,0,0,0.12)';
  g.fillRect(0, H - 14, W, 14);
  g.fillStyle = 'rgba(0,0,0,0.10)';
  g.fillRect(0, 0, W, 5);

  const variant = Math.floor(r() * 5);
  const sx = 10, sw = W - 20, sy = 32, sh = H - 34;
  if (variant === 0) {
    g.fillStyle = '#8f9396'; g.fillRect(sx, sy, sw, sh);
    g.fillStyle = 'rgba(0,0,0,0.22)';
    for (let y = sy + 3; y < H; y += 4) g.fillRect(sx, y, sw, 1);
    g.fillStyle = '#d9d7d0'; g.fillRect(sx - 3, sy - 4, sw + 6, 4);
  } else if (variant === 1) {
    const dw = sw * 0.38;
    g.fillStyle = '#6a4030'; g.fillRect(sx + (sw - dw) / 2, sy, dw, sh);
    g.fillStyle = '#4a3028'; g.fillRect(sx + (sw - dw) / 2 + 4, sy + 4, dw - 8, sh - 8);
    g.fillStyle = '#8a7060'; g.fillRect(sx + (sw - dw) / 2 - 3, sy - 5, dw + 6, 5);
  } else if (variant === 2) {
    g.fillStyle = '#9a9590'; g.fillRect(sx, sy + sh * 0.35, sw, sh * 0.65);
    for (let y = sy + sh * 0.35; y < H; y += 5) { g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(sx, y, sw, 1); }
    g.fillStyle = '#7a5028'; g.fillRect(sx + sw * 0.12, sy, sw * 0.35, sh * 0.82);
    g.fillStyle = '#5a3820'; g.fillRect(sx + sw * 0.15, sy + 3, sw * 0.29, sh * 0.76);
  } else if (variant === 3) {
    g.fillStyle = '#a8a4a0'; g.fillRect(sx, sy, sw * 0.55, sh);
    g.fillStyle = 'rgba(0,0,0,0.18)'; for (let y = sy; y < H; y += 6) g.fillRect(sx, y, sw * 0.55, 1);
    g.fillStyle = '#6a5038'; g.fillRect(sx + sw * 0.48, sy + 8, sw * 0.42, sh - 16);
    g.fillStyle = '#3a2820'; g.fillRect(sx + sw * 0.52, sy + 14, sw * 0.34, sh - 28);
  } else {
    g.fillStyle = '#7a7e82'; g.fillRect(sx, sy, sw, sh * 0.55);
    g.fillStyle = 'rgba(0,0,0,0.2)'; for (let y = sy; y < sy + sh * 0.55; y += 3) g.fillRect(sx, y, sw, 1);
    g.fillStyle = '#c8c4bc'; g.fillRect(sx + 8, sy + sh * 0.58, sw - 16, sh * 0.38);
    g.fillStyle = '#4a3828'; g.fillRect(sx + sw * 0.35, sy + sh * 0.6, sw * 0.3, sh * 0.35);
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
          float win = step(0.30, f.x) * step(f.x, 0.72) * step(0.26, f.y) * step(f.y, 0.80);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.27 ? vec3(1.0, 0.72, 0.4) : vec3(0.8, 0.86, 1.0);
          totalEmissiveRadiance += win * step(h, 0.36) * uNight * warm * 1.3;
        }`);
  };
  return m;
}

export function facadeMaterials() {
  const mats = [];
  for (let i = 0; i < UPPER_VARIANTS; i++) {
    mats.push(litWindows(new THREE.MeshLambertMaterial({
      map: drawUpper(1000 + i * 7919),
      vertexColors: true,
      side: THREE.DoubleSide,
    })));
  }
  for (let i = 0; i < GROUND_VARIANTS; i++) {
    mats.push(litWindows(new THREE.MeshLambertMaterial({
      map: drawGround(2000 + i * 4177),
      vertexColors: true,
      side: THREE.DoubleSide,
    })));
  }
  return mats;
}
