/**
 * Texture di facciata disegnate a canvas: un modulo = una campata (3,5 m) × un piano (3,1 m), in
 * bianco — il colore vero dell'intonaco arriva dal vertex color dell'edificio (moltiplica). Quattro
 * varianti tipiche del paese: persiane verdi, persiane marroni, balcone con ringhiera, tapparella
 * (le palazzine del dopoguerra che dominano le foto panoramiche).
 *
 * Nuove varianti (indici ≥ 4) usate dal sistema di override per strada (street-overrides.js):
 *  4 — SHOP: vetrina commerciale a piano terra (vetro + infisso metallico + awning)
 *  5 — TALL_GREEN: finestra alta con persiana verde (proporzione street-view siciliana)
 *  6 — TALL_BROWN: finestra alta con persiana marrone
 *  7 — GROUND_SHOP_OPEN: piano terra aperto con vetrina (shop mixed)
 *  8 — CORNICE: piano terra con marcapiano decorativo, usato per override 'cornices'
 */
import * as THREE from 'three';
import { NIGHT } from './daylight.js';

export const BAY = 3.5, FLOOR = 3.1;

function tex(cv) {
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function makeCanvas(W, H) {
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  return { cv, g: cv.getContext('2d') };
}

/** grana dell'intonaco: leggero rumore granulare bianco */
function stucco(g, W, H, n = 260) {
  for (let i = 0; i < n; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.04})`; g.fillRect(Math.random() * W, Math.random() * H, 1.5, 1.5); }
}

/** zoccolo basso di base e fascia marcapiano */
function baseStripes(g, W, H) {
  g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(0, H - 5, W, 5);   // fascia inferiore
}

/**
 * Finestra standard: persiane ai lati, vetro scuro, davanzale.
 * @param {CanvasRenderingContext2D} g
 * @param {number} wx, wy, ww, wh — posizione e dimensioni del vano finestra
 * @param {string} shutterHex — colore persiane
 * @param {boolean} hasDavanzale — davanzale sporgente
 */
function drawWindow(g, wx, wy, ww, wh, shutterHex, hasDavanzale = true) {
  // vano
  g.fillStyle = '#242a30'; g.fillRect(wx, wy, ww, wh);
  // vetro con lieve riflesso
  g.fillStyle = 'rgba(160,195,215,0.30)'; g.fillRect(wx + 2, wy + 2, ww - 4, wh * 0.48);
  g.fillStyle = 'rgba(255,255,255,0.06)'; g.fillRect(wx + 4, wy + 4, ww * 0.35, wh * 0.22);
  // infisso (taglio di montante centrale)
  g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(wx + ww / 2 - 1, wy, 2, wh);
  // persiane aperte ai lati (non chiuse: si vedono le lamelle)
  g.fillStyle = shutterHex;
  const sw = Math.max(11, ww * 0.28);
  g.fillRect(wx - sw - 1, wy, sw, wh); g.fillRect(wx + ww + 1, wy, sw, wh);
  g.fillStyle = 'rgba(0,0,0,0.22)';
  const step = 4.5;
  for (let y = wy + step; y < wy + wh; y += step) {
    g.fillRect(wx - sw - 0.5, y, sw - 1, 1);
    g.fillRect(wx + ww + 1.5, y, sw - 1, 1);
  }
  // davanzale
  if (hasDavanzale) { g.fillStyle = '#e0dcd4'; g.fillRect(wx - 4, wy + wh, ww + 8, 3.5); }
}

/**
 * Finestra alta (proporzione street-view siciliana): più stretta e allungata, testa ad arco
 * ribassato o architrave retta. Usata nelle vie principali degli anni '70–'80.
 */
function drawTallWindow(g, wx, wy, ww, wh, shutterHex) {
  // vano
  g.fillStyle = '#1e2428'; g.fillRect(wx, wy, ww, wh);
  // arco ribassato nella metà superiore
  g.fillStyle = 'rgba(160,195,215,0.32)'; g.fillRect(wx + 2, wy + 2, ww - 4, wh * 0.52);
  g.fillStyle = 'rgba(255,255,255,0.07)'; g.fillRect(wx + 4, wy + 4, ww * 0.3, wh * 0.18);
  // battente centrale
  g.fillStyle = 'rgba(255,255,255,0.10)'; g.fillRect(wx + ww / 2 - 1, wy, 1.5, wh);
  // persiane
  g.fillStyle = shutterHex;
  const sw = Math.max(10, ww * 0.26);
  g.fillRect(wx - sw - 1, wy, sw, wh); g.fillRect(wx + ww + 1, wy, sw, wh);
  g.fillStyle = 'rgba(0,0,0,0.20)';
  for (let y = wy + 4; y < wy + wh; y += 4) {
    g.fillRect(wx - sw - 0.5, y, sw - 1, 1);
    g.fillRect(wx + ww + 1.5, y, sw - 1, 1);
  }
  // davanzale in marmo bianco — è la caratteristica delle palazzine siciliane
  g.fillStyle = '#ececea'; g.fillRect(wx - 6, wy + wh, ww + 12, 4);
  // ombra sotto il davanzale
  g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(wx - 6, wy + wh + 3, ww + 12, 2);
}

/**
 * Piano terra con saracinesca metallica (garage/negozio chiuso).
 * Linee orizzontali ravvicinate e architrave.
 */
function drawGround() {
  const W = 128, H = 114;
  const { cv, g } = makeCanvas(W, H);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  stucco(g, W, H);
  // zoccolo scuro
  g.fillStyle = 'rgba(0,0,0,0.14)'; g.fillRect(0, H - 16, W, 16);
  // saracinesca metallica
  const sx = 12, sw = 104, sy = 30, sh = H - 30 - 16;
  g.fillStyle = '#8c9296'; g.fillRect(sx, sy, sw, sh);
  // sbarre orizzontali ravvicinate (ogni 3.5px)
  g.fillStyle = 'rgba(0,0,0,0.20)';
  for (let y = sy + 3; y < sy + sh; y += 3.5) g.fillRect(sx, y, sw, 1);
  // maniglia/lucchetto centrale basso
  g.fillStyle = '#5a5e62'; g.fillRect(sx + sw / 2 - 6, sy + sh - 14, 12, 10);
  // architrave
  g.fillStyle = '#d2cec6'; g.fillRect(sx - 4, sy - 5, sw + 8, 5);
  // fascia marcapiano sopra
  g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(0, 0, W, 6);
  const t = tex(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

/**
 * Piano terra con vetrina commerciale: negozio aperto / inferriate + tenda a rullo.
 * Usato lungo le vie primarie (groundFloor: 'shops' o 'mixed').
 */
function drawShopFront() {
  const W = 128, H = 114;
  const { cv, g } = makeCanvas(W, H);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  stucco(g, W, H);
  // zoccolo (rivestimento in marmo chiaro)
  g.fillStyle = '#c8c0b4'; g.fillRect(0, H - 16, W, 16);
  g.fillStyle = 'rgba(0,0,0,0.06)';
  for (let x = 0; x < W; x += 20) g.fillRect(x, H - 16, 1, 16); // fughe verticali
  // vetrina: grande apertura con vetro riflettente
  const vx = 6, vy = 28, vw = 116, vh = H - 28 - 16;
  g.fillStyle = '#1c2226'; g.fillRect(vx, vy, vw, vh);
  // riflessi sul vetro
  g.fillStyle = 'rgba(180,210,230,0.22)'; g.fillRect(vx + 2, vy + 2, vw - 4, vh * 0.55);
  g.fillStyle = 'rgba(255,255,255,0.08)'; g.fillRect(vx + 6, vy + 4, vw * 0.25, vh * 0.3);
  // montante centrale in alluminio
  g.fillStyle = '#a8adb0'; g.fillRect(W / 2 - 2, vy, 4, vh);
  // montanti laterali
  g.fillStyle = '#a0a5a8'; g.fillRect(vx, vy, 4, vh); g.fillRect(vx + vw - 4, vy, 4, vh);
  // profilo superiore: architrave in alluminio anodizzato scuro
  g.fillStyle = '#5a6068'; g.fillRect(vx - 2, vy - 6, vw + 4, 6);
  // fascia marcapiano in alto
  g.fillStyle = 'rgba(0,0,0,0.09)'; g.fillRect(0, 0, W, 7);
  const t = tex(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

/**
 * Piano terra misto: porta pedonale + mezza vetrina, tipico dei piccoli commerci siciliani
 * (farmacia, barbiere, banca). Portone centrale, vetrina laterale.
 */
function drawMixedGroundFloor() {
  const W = 128, H = 114;
  const { cv, g } = makeCanvas(W, H);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  stucco(g, W, H);
  // zoccolo
  g.fillStyle = 'rgba(0,0,0,0.13)'; g.fillRect(0, H - 14, W, 14);
  // portoncino a sinistra
  const dx = 8, dy = 26, dw = 38, dh = H - 26 - 14;
  g.fillStyle = '#3a3022'; g.fillRect(dx, dy, dw, dh);
  // pannelli del portone
  g.fillStyle = 'rgba(255,255,255,0.07)';
  g.fillRect(dx + 4, dy + 4, dw - 8, dh * 0.42);
  g.fillRect(dx + 4, dy + dh * 0.5, dw - 8, dh * 0.38);
  // maniglia
  g.fillStyle = '#c0a840'; g.fillRect(dx + dw - 10, dy + dh * 0.42, 4, 14);
  // vetrina a destra
  const vx = dx + dw + 8, vy = 28, vw = W - vx - 6, vh = H - 28 - 14;
  g.fillStyle = '#1c2226'; g.fillRect(vx, vy, vw, vh);
  g.fillStyle = 'rgba(180,210,230,0.25)'; g.fillRect(vx + 2, vy + 2, vw - 4, vh * 0.5);
  g.fillStyle = 'rgba(255,255,255,0.09)'; g.fillRect(vx + 4, vy + 4, vw * 0.3, vh * 0.25);
  g.fillStyle = '#8a9098'; g.fillRect(vx, vy, 3, vh); g.fillRect(vx + vw - 3, vy, 3, vh);
  // architrave
  g.fillStyle = '#d0cac0'; g.fillRect(dx - 2, dy - 5, W - dx + 2, 5);
  // fascia marcapiano
  g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(0, 0, W, 6);
  const t = tex(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

/** Campata normale con tapparella: palazzina anni '60–'80 (invariato, indice 3) */
function drawRoller(W, H) {
  const { cv, g } = makeCanvas(W, H);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  stucco(g, W, H);
  baseStripes(g, W, H);
  const ww = 40, wh = 64, wx = (W - ww) / 2, wy = 18;
  g.fillStyle = '#242a30'; g.fillRect(wx, wy, ww, wh);
  g.fillStyle = 'rgba(160,190,210,0.32)'; g.fillRect(wx + 2, wy + wh * 0.5, ww - 4, wh * 0.44);
  const th = wh * (0.32 + Math.random() * 0.28);
  g.fillStyle = '#ccc8bc'; g.fillRect(wx, wy, ww, th);
  g.fillStyle = 'rgba(0,0,0,0.16)'; for (let y = wy + 2; y < wy + th; y += 3) g.fillRect(wx, y, ww, 1);
  g.fillStyle = 'rgba(0,0,0,0.14)'; g.fillRect(wx - 3, wy - 5, ww + 6, 5); // cassonetto
  g.fillStyle = '#eceae4'; g.fillRect(wx - 5, wy + wh, ww + 10, 4);
  return tex(cv);
}

/**
 * Campata con finestra alta e persiana colorata: variante principale delle vie primarie.
 * La finestra occupa circa il 45% della larghezza e il 65% dell'altezza, con persiane ampie.
 * kind: 0 = verde, 1 = marrone, 2 = grigi (tipo Sicilia anni '70)
 */
function drawTall(kind) {
  const W = 128, H = 128; // canvas leggermente più alto per le proporzioni street-view
  const { cv, g } = makeCanvas(W, H);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  stucco(g, W, H);
  // fascia decorativa marcapiano superiore e inferiore
  g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(0, H - 6, W, 6);
  // sottile modanatura superiore
  g.fillStyle = 'rgba(0,0,0,0.06)'; g.fillRect(0, 0, W, 4);
  const shutter = kind === 0 ? '#3a5a40' : kind === 1 ? '#62432e' : '#72756e';
  const ww = 44, wh = 72; // finestra più alta
  const wx = (W - ww) / 2, wy = 16;
  drawTallWindow(g, wx, wy, ww, wh, shutter);
  return tex(cv);
}

/**
 * Campata classica (variante standard): finestra con persiana.
 * kind: 0 = verde, 1 = marrone
 */
function draw(kind) {
  const W = 128, H = 114;
  const { cv, g } = makeCanvas(W, H);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  stucco(g, W, H);
  baseStripes(g, W, H);
  const shutter = kind === 0 ? '#3f5f45' : kind === 1 ? '#6a4a32' : '#8a8a86';
  const ww = 40, wh = 58, wx = (W - ww) / 2, wy = 24;
  // vano finestra
  g.fillStyle = '#242a30'; g.fillRect(wx, wy, ww, wh);
  g.fillStyle = 'rgba(160,190,210,0.32)'; g.fillRect(wx + 2, wy + 2, ww - 4, wh / 2 - 3);
  // persiane socchiuse ai lati
  g.fillStyle = shutter;
  g.fillRect(wx - 13, wy, 13, wh); g.fillRect(wx + ww, wy, 13, wh);
  g.fillStyle = 'rgba(0,0,0,0.24)';
  for (let y = wy + 4; y < wy + wh; y += 4.5) {
    g.fillRect(wx - 12.5, y, 11.5, 1); g.fillRect(wx + ww + 1, y, 11.5, 1);
  }
  // balcone (kind 2): davanzale e ringhiera
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

/**
 * Di notte una parte delle finestre si accende: il vano (stesso rettangolo disegnato in draw) emette
 * luce calda o fredda. Quali finestre, lo decide un hash della campata/piano (parte intera delle uv)
 * mescolato col colore dell'edificio, così ogni palazzo ha il suo schema.
 *
 * La formula è la stessa per tutti gli indici di texture (coordinate uv in campate×piani).
 */
function litWindows(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = NIGHT;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        if (uNight > 0.0) {
          vec2 cell = floor(vMapUv), f = fract(vMapUv);
          float win = step(0.33, f.x) * step(f.x, 0.67) * step(0.25, f.y) * step(f.y, 0.80);
          float h = fract(sin(dot(cell + vColor.rg * 97.0, vec2(12.9898, 78.233))) * 43758.5453);
          vec3 warm = h < 0.27 ? vec3(1.0, 0.72, 0.4) : vec3(0.85, 0.90, 1.0);
          totalEmissiveRadiance += win * step(h, 0.36) * uNight * warm * 1.4;
        }`);
  };
  return m;
}

/**
 * Crea tutti i materiali di facciata. Restituisce un array indicizzato:
 *  [0] persiana verde  [1] persiana marrone  [2] balcone grezzo  [3] tapparella
 *  [4] piano terra saracinesca (UPPER)
 *  [5] vetrina commerciale (SHOP)
 *  [6] piano terra misto porta+vetrina (MIXED)
 *  [7] finestra alta verde (TALL_GREEN)
 *  [8] finestra alta marrone (TALL_BROWN)
 *  [9] finestra alta grigia (TALL_GREY)
 */
export const MAT_IDX = {
  GREEN: 0, BROWN: 1, BALCONY: 2, ROLLER: 3,
  GROUND: 4, SHOP: 5, MIXED_GF: 6,
  TALL_GREEN: 7, TALL_BROWN: 8, TALL_GREY: 9,
};

export function facadeMaterials() {
  // piani superiori (indici 0-3): classici con litWindows notturne
  const upperBase = [draw(0), draw(1), draw(2), drawRoller(128, 114)];
  const uppers = upperBase.map((map) => litWindows(new THREE.MeshLambertMaterial({ map, vertexColors: true, side: THREE.DoubleSide })));
  // piano terra saracinesca (indice 4)
  const ground = new THREE.MeshLambertMaterial({ map: drawGround(), vertexColors: true, side: THREE.DoubleSide });
  // piano terra vetrina commerciale (indice 5)
  const shop = new THREE.MeshLambertMaterial({ map: drawShopFront(), vertexColors: true, side: THREE.DoubleSide });
  // piano terra misto porta+vetrina (indice 6)
  const mixed = new THREE.MeshLambertMaterial({ map: drawMixedGroundFloor(), vertexColors: true, side: THREE.DoubleSide });
  // piani superiori con finestre alte — varianti per via Ricca e altre vie primarie (7-9)
  const tallMats = [0, 1, 2].map((k) => litWindows(new THREE.MeshLambertMaterial({ map: drawTall(k), vertexColors: true, side: THREE.DoubleSide })));
  return [...uppers, ground, shop, mixed, ...tallMats];
}
