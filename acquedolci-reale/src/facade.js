/**
 * Texture di facciata disegnate a canvas: un modulo = una campata (3,5 m) × un piano (3,1 m), in
 * bianco — il colore vero dell'intonaco arriva dal vertex color dell'edificio (moltiplica). Quattro
 * varianti tipiche del paese: persiane verdi, persiane marroni, balcone con ringhiera, tapparella
 * (le palazzine del dopoguerra che dominano le foto panoramiche).
 */
import * as THREE from 'three';
import { NIGHT } from './daylight.js';

export const BAY = 3.5, FLOOR = 3.1;

function drawGround() {
  // piano terra: saracinesca di negozio/garage e portoncino, come nelle vie del paese
  const W = 128, H = 114;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; g.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
  g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, H - 14, W, 14); // zoccolo
  g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(0, 0, W, 5);        // marcapiano
  const sx = 14, sw = 100, sy = 34, sh = H - 34;
  g.fillStyle = '#8f9396'; g.fillRect(sx, sy, sw, sh);                // saracinesca
  g.fillStyle = 'rgba(0,0,0,0.22)';
  for (let y = sy + 3; y < H; y += 4) g.fillRect(sx, y, sw, 1);
  g.fillStyle = '#d9d7d0'; g.fillRect(sx - 3, sy - 4, sw + 6, 4);    // architrave
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function draw(kind) {
  const W = 128, H = 114; // proporzioni della campata 3,5 × 3,1 m
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  // leggera grana dell'intonaco
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; g.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
  // fascia marcapiano
  g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(0, H - 5, W, 5);
  const ww = 40, wh = 58, wx = (W - ww) / 2, wy = 24;
  if (kind === 3) {
    // palazzina anni '60-'80: finestra con tapparella abbassata a metà e cassonetto, davanzale in marmo
    g.fillStyle = '#2b3136'; g.fillRect(wx, wy, ww, wh);
    g.fillStyle = 'rgba(160,190,210,0.35)'; g.fillRect(wx + 3, wy + wh * 0.5, ww - 6, wh * 0.45);
    const th = wh * (0.35 + Math.random() * 0.25);
    g.fillStyle = '#c9c4b8'; g.fillRect(wx, wy, ww, th);
    g.fillStyle = 'rgba(0,0,0,0.18)'; for (let y = wy + 2; y < wy + th; y += 3) g.fillRect(wx, y, ww, 1);
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(wx - 3, wy - 6, ww + 6, 6);
    g.fillStyle = '#eceae4'; g.fillRect(wx - 5, wy + wh, ww + 10, 4);
    return tex(cv);
  }
  const shutter = kind === 0 ? '#3f5f45' : kind === 1 ? '#6a4a32' : '#8a8a86';
  // vano finestra
  g.fillStyle = '#2b3136'; g.fillRect(wx, wy, ww, wh);
  g.fillStyle = 'rgba(160,190,210,0.35)'; g.fillRect(wx + 3, wy + 3, ww - 6, wh / 2 - 4);
  // persiane socchiuse ai lati
  g.fillStyle = shutter;
  g.fillRect(wx - 13, wy, 13, wh); g.fillRect(wx + ww, wy, 13, wh);
  g.fillStyle = 'rgba(0,0,0,0.25)';
  for (let y = wy + 4; y < wy + wh; y += 5) { g.fillRect(wx - 12, y, 11, 1); g.fillRect(wx + ww + 1, y, 11, 1); }
  // davanzale / balcone
  if (kind === 2) {
    g.fillStyle = '#d8d6d0'; g.fillRect(wx - 18, wy + wh, ww + 36, 5);
    g.fillStyle = '#3a3a3a';
    g.fillRect(wx - 18, wy + wh - 22, ww + 36, 2);
    for (let x = wx - 18; x <= wx + ww + 18; x += 5) g.fillRect(x, wy + wh - 22, 1.5, 22);
  } else {
    g.fillStyle = '#e8e6e0'; g.fillRect(wx - 4, wy + wh, ww + 8, 4);
  }
  return tex(cv);
}

function tex(cv) {
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/**
 * Di notte una parte delle finestre si accende: il vano (stesso rettangolo disegnato in draw) emette
 * luce calda o fredda. Quali finestre, lo decide un hash della campata/piano (parte intera delle uv)
 * mescolato col colore dell'edificio, così ogni palazzo ha il suo schema.
 */
function litWindows(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = NIGHT;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        if (uNight > 0.0) {
          vec2 cell = floor(vMapUv), f = fract(vMapUv);
          float win = step(0.36, f.x) * step(f.x, 0.64) * step(0.30, f.y) * step(f.y, 0.77);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.27 ? vec3(1.0, 0.72, 0.4) : vec3(0.8, 0.86, 1.0);
          totalEmissiveRadiance += win * step(h, 0.34) * uNight * warm * 1.3;
        }`);
  };
  return m;
}

export function facadeMaterials() {
  const mats = [0, 1, 2, 3].map((k) => litWindows(new THREE.MeshLambertMaterial({ map: draw(k), vertexColors: true, side: THREE.DoubleSide })));
  mats.push(new THREE.MeshLambertMaterial({ map: drawGround(), vertexColors: true, side: THREE.DoubleSide }));
  return mats;
}
