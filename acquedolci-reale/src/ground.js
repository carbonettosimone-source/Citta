/**
 * Materiali veri del suolo da vicino. L'ortofoto resta il colore di base (è la foto vera), ma da
 * vicino è una macchia sfocata: la copertura del suolo (build-landcover.mjs) dice cosa c'è sotto e
 * qui si aggiunge il dettaglio del materiale giusto — ciottoli sulla spiaggia (quella di Acquedolci è
 * di ghiaia e ciottoli grigi), erba dove è verde, terra ed erba secca altrove.
 * È il "detail mapping" dei terreni dei giochi: la tinta a bassa frequenza viene dalla foto, la
 * grana ad alta frequenza da una texture ripetuta, normalizzata sulla sua media.
 */
import * as THREE from 'three';

function rnd(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }
function canvasTex(size, draw) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const g = cv.getContext('2d');
  draw(g, size);
  // media del colore (lineare circa): serve a normalizzare il dettaglio
  const d = g.getImageData(0, 0, size, size).data; let r = 0, gg = 0, b = 0;
  for (let i = 0; i < d.length; i += 4) { r += d[i]; gg += d[i + 1]; b += d[i + 2]; }
  const n = d.length / 4, lin = (v) => Math.pow(v / n / 255, 2.2);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return { t, mean: new THREE.Vector3(lin(r), lin(gg), lin(b)) };
}
/** ciottoli di fiume/mare: ellissi grigie e beige con luce dall'alto, fra ghiaia fine */
const pebbles = () => canvasTex(512, (g, S) => {
  const r = rnd(3);
  g.fillStyle = '#8f887c'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 9000; i++) { const v = 110 + r() * 90; g.fillStyle = `rgb(${v},${v - 4},${v - 12})`; g.fillRect(r() * S, r() * S, 2, 2); }
  for (let i = 0; i < 1100; i++) {
    const x = r() * S, y = r() * S, rx = 4 + r() * 13, ry = rx * (0.55 + r() * 0.4), a = r() * Math.PI;
    const v = 120 + r() * 110, warm = r() * 18;
    for (const [dx, dy] of [[0, 0], [S, 0], [-S, 0], [0, S], [0, -S]]) {
      g.fillStyle = 'rgba(40,36,30,0.35)'; g.beginPath(); g.ellipse(x + dx + 1.5, y + dy + 2, rx, ry, a, 0, 7); g.fill();
      const gr = g.createRadialGradient(x + dx - rx * 0.3, y + dy - ry * 0.3, 1, x + dx, y + dy, rx);
      gr.addColorStop(0, `rgb(${Math.min(255, v + 30)},${Math.min(255, v + 26 - warm / 2)},${Math.min(255, v + 18 - warm)})`);
      gr.addColorStop(1, `rgb(${v - 30},${v - 34 - warm / 2},${v - 42 - warm})`);
      g.fillStyle = gr; g.beginPath(); g.ellipse(x + dx, y + dy, rx, ry, a, 0, 7); g.fill();
    }
  }
});
/** prato: fili d'erba in verdi diversi */
const grass = () => canvasTex(256, (g, S) => {
  const r = rnd(9);
  g.fillStyle = '#56733a'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 7000; i++) {
    const x = r() * S, y = r() * S, l = 3 + r() * 7, a = -Math.PI / 2 + (r() - 0.5) * 1.2, v = r();
    g.strokeStyle = `rgb(${60 + v * 70},${95 + v * 80},${35 + v * 40})`; g.lineWidth = 1;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
  }
});
/** terra battuta con erba secca e sassolini */
const dry = () => canvasTex(256, (g, S) => {
  const r = rnd(21);
  g.fillStyle = '#a08d6d'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '80,66,48' : '190,172,138'},${0.08 + r() * 0.1})`; g.beginPath(); g.ellipse(r() * S, r() * S, 10 + r() * 40, 8 + r() * 25, r() * 3, 0, 7); g.fill(); }
  for (let i = 0; i < 2500; i++) { const v = r(); g.strokeStyle = `rgba(${170 + v * 60},${150 + v * 50},${90 + v * 30},0.7)`; const x = r() * S, y = r() * S, l = 2 + r() * 6, a = r() * 6.28; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); }
  for (let i = 0; i < 500; i++) { const v = 90 + r() * 100; g.fillStyle = `rgb(${v},${v - 6},${v - 16})`; g.beginPath(); g.arc(r() * S, r() * S, 0.8 + r() * 1.8, 0, 7); g.fill(); }
});

/** pavimentato: lastre di pietra e cemento sfalsate, fughe scure, qualche macchia */
const paving = () => canvasTex(512, (g, S) => {
  const r = rnd(33);
  g.fillStyle = '#6f6a62'; g.fillRect(0, 0, S, S);
  const rows = 8, h = S / rows;
  for (let j = 0; j < rows; j++) {
    let x = -(j % 2) * 40;
    while (x < S) {
      const w = 60 + r() * 70, v = 150 + r() * 45;
      g.fillStyle = `rgb(${v},${v - 4},${v - 12})`; g.fillRect(x + 2, j * h + 2, w - 4, h - 4);
      for (let i = 0; i < 40; i++) { const t = r() * 30; g.fillStyle = `rgba(${t},${t},${t},0.08)`; g.fillRect(x + 2 + r() * (w - 6), j * h + 2 + r() * (h - 6), 2, 2); }
      x += w;
    }
  }
  for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(60,55,50,${0.05 + r() * 0.07})`; g.beginPath(); g.ellipse(r() * S, r() * S, 10 + r() * 40, 6 + r() * 20, r() * 3, 0, 7); g.fill(); }
});

/** uniform condivisi dal materiale del suolo (ortho.js) */
const blank = new THREE.DataTexture(new Uint8Array(4), 1, 1); blank.needsUpdate = true;
export const GROUND = {
  lcMap: { value: blank }, lcRect: { value: new THREE.Vector4(0, 0, 1, 1) }, // X0, Z0 (nord-ovest), larghezza, altezza in m
  pebMap: { value: blank }, pebMean: { value: new THREE.Vector3(1, 1, 1) },
  grsMap: { value: blank }, grsMean: { value: new THREE.Vector3(1, 1, 1) },
  dryMap: { value: blank }, dryMean: { value: new THREE.Vector3(1, 1, 1) },
  pavMap: { value: blank }, pavMean: { value: new THREE.Vector3(1, 1, 1) },
};

export function initGround(lcTex, lcMeta, origin) {
  const [OX, OY] = origin;
  lcTex.colorSpace = THREE.NoColorSpace; lcTex.flipY = false;
  lcTex.minFilter = THREE.LinearFilter; lcTex.generateMipmaps = false; lcTex.needsUpdate = true;
  GROUND.lcMap.value = lcTex;
  GROUND.lcRect.value.set(lcMeta.xmin - OX, OY - lcMeta.ymax, lcMeta.width * lcMeta.step, lcMeta.height * lcMeta.step);
  for (const [k, f] of [['peb', pebbles], ['grs', grass], ['dry', dry], ['pav', paving]]) { const { t, mean } = f(); GROUND[`${k}Map`].value = t; GROUND[`${k}Mean`].value = mean; }
}

/** GLSL: campiona la copertura del suolo in coordinate mondo. rgb = mare, spiaggia, verde */
export const LC_GLSL = `
uniform sampler2D lcMap; uniform vec4 lcRect;
vec4 landcover(vec2 xz) {
  vec2 uv = (xz - lcRect.xy) / lcRect.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return vec4(-1.0);
  return texture2D(lcMap, uv);
}`;
