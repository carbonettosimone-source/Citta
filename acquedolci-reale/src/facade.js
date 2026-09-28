/**
 * Texture di facciata disegnate a canvas: un modulo = una campata (3,5 m) × un piano (3,1 m), in
 * bianco — il colore vero dell'intonaco arriva dal vertex color dell'edificio (moltiplica). Tre
 * varianti tipiche del paese: persiane verdi, persiane marroni, balcone con ringhiera.
 */
import * as THREE from 'three';

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
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function facadeMaterials() {
  const mats = [0, 1, 2].map((k) => new THREE.MeshLambertMaterial({ map: draw(k), vertexColors: true, side: THREE.DoubleSide }));
  mats.push(new THREE.MeshLambertMaterial({ map: drawGround(), vertexColors: true, side: THREE.DoubleSide }));
  return mats;
}
