#!/usr/bin/env node
/**
 * Colore VERO della facciata, edificio per edificio, dall'ortofoto 2022 a 20 cm.
 *
 * L'ortofoto non è una "true ortho": ogni palazzo è spostato radialmente rispetto al punto di
 * presa del fotogramma (relief displacement), quindi dall'alto si vede la facciata rivolta verso
 * l'aereo come una striscia tra il filo a terra (la pianta DBTR) e il bordo del tetto. Per ogni
 * edificio:
 *   1. colore del tetto = mediana dei pixel nel cuore della pianta (lontano dai bordi);
 *   2. per ogni lato, mediana dei pixel in una fascia di 0,2–1,6 m DENTRO la pianta;
 *   3. il lato la cui fascia è più diversa dal tetto — e plausibile come muro (non ombra, non
 *      verde, non coppo) — è la facciata vista: quel colore è l'intonaco reale.
 * Dove non si vede nessuna facciata (tetti chiari come i muri, edifici bassi, ombre) non si
 * inventa niente: l'edificio resta senza colore misurato e il modello usa la distribuzione dei
 * colori misurati sugli altri.
 *
 * Tile a 20 cm scaricati in data/ortho-hr/ (solo analisi, non pubblicati). Output: data/facade-colors.json
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import jpeg from 'jpeg-js';
import { utmBox } from './geo.mjs';

const RES = 0.2, TILE = 2048, SPAN = TILE * RES;
const root = new URL('..', import.meta.url);
const city = JSON.parse(readFileSync(new URL('city.json', root)));
const { buildings } = JSON.parse(readFileSync(new URL('data/buildings.json', root)));
const dir = new URL('data/ortho-hr/', root);
mkdirSync(dir, { recursive: true });
const S = 'https://map.sitr.regione.sicilia.it/gis/rest/services/ortofoto/ortofoto_2022_20cm_sicilia/ImageServer/exportImage';

// ---- tile ad alta risoluzione, scaricati una volta sola
const c = utmBox(city.coreLonLat);
const x0 = Math.floor(c.xmin / SPAN) * SPAN, y0 = Math.floor(c.ymin / SPAN) * SPAN;
const tiles = [];
for (let y = y0; y < c.ymax; y += SPAN) for (let x = x0; x < c.xmax; x += SPAN) tiles.push({ xmin: x, ymin: y, xmax: x + SPAN, ymax: y + SPAN, file: `hr_${Math.round(x)}_${Math.round(y)}.jpg` });
let dl = 0;
for (const t of tiles) {
  const p = new URL(t.file, dir);
  if (existsSync(p)) continue;
  const q = new URLSearchParams({ bbox: `${t.xmin},${t.ymin},${t.xmax},${t.ymax}`, bboxSR: '25833', imageSR: '25833', size: `${TILE},${TILE}`, format: 'jpg', compressionQuality: '88', f: 'image' });
  for (let k = 0; k < 3; k++) {
    const r = await fetch(`${S}?${q}`);
    const buf = Buffer.from(await r.arrayBuffer());
    if (r.ok && buf[0] === 0xff) { writeFileSync(p, buf); dl++; break; }
    await new Promise((res) => setTimeout(res, 1500));
  }
}
console.log(`tile 20 cm: ${tiles.length} (${dl} scaricati ora)`);

// ---- decodifica pigra con cache LRU minima (i tile da 2048² pesano 16 MB decodificati)
const decoded = new Map();
function tileImg(t) {
  if (decoded.has(t.file)) return decoded.get(t.file);
  if (decoded.size > 6) decoded.delete(decoded.keys().next().value);
  const p = new URL(t.file, dir);
  const img = existsSync(p) ? jpeg.decode(readFileSync(p), { useTArray: true }) : null;
  decoded.set(t.file, img);
  return img;
}
function px(x, y) {
  const t = tiles.find((tt) => x >= tt.xmin && x < tt.xmax && y >= tt.ymin && y < tt.ymax);
  if (!t) return null;
  const img = tileImg(t); if (!img) return null;
  const col = Math.floor((x - t.xmin) / RES), row = Math.floor((t.ymax - y) / RES);
  const i = (row * img.width + col) * 4;
  return [img.data[i], img.data[i + 1], img.data[i + 2]];
}

function hsv([r, g, b]) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0;
  if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [(h * 60 + 360) % 360, mx ? d / mx : 0, mx / 255];
}
const median = (arr) => { if (!arr.length) return null; const m = [0, 1, 2].map((k) => arr.map((p) => p[k]).sort((a, b) => a - b)[arr.length >> 1]); return m; };
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

function pointInRing(x, y, ring) {
  let ins = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ins = !ins;
  }
  return ins;
}
function distToRing(x, y, ring) {
  let best = Infinity;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [ax, ay] = ring[j], [bx, by] = ring[i];
    const L = (bx - ax) ** 2 + (by - ay) ** 2;
    const t = L > 0 ? Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (y - ay) * (by - ay)) / L)) : 0;
    best = Math.min(best, Math.hypot(x - ax - (bx - ax) * t, y - ay - (by - ay) * t));
  }
  return best;
}
/** plausibile come intonaco visto dall'alto: non ombra, non verde, non coppo saturo */
function wallLike(c) {
  const [h, s, v] = hsv(c);
  if (v < 0.35) return false;
  if (h > 65 && h < 170 && s > 0.2) return false;
  if ((h < 32 || h > 345) && s > 0.5) return false; // coppi/terracotta: è tetto, non muro
  return true;
}

const out = {};
let measured = 0, tried = 0;
for (const b of buildings) {
  const ring = b.rings[0].slice(0, -1);
  if (ring.length < 3 || b.code === 'B007' || b.code === 'B010') continue;
  let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  for (const [x, y] of ring) { xmin = Math.min(xmin, x); xmax = Math.max(xmax, x); ymin = Math.min(ymin, y); ymax = Math.max(ymax, y); }
  if (xmax < c.xmin || xmin > c.xmax || ymax < c.ymin || ymin > c.ymax) continue;
  tried++;
  // 1. tetto: cuore della pianta, ≥2 m dai bordi (o il più interno disponibile)
  const roof = [];
  for (let x = xmin; x <= xmax; x += 0.6) for (let y = ymin; y <= ymax; y += 0.6) {
    if (!pointInRing(x, y, ring) || distToRing(x, y, ring) < 2) continue;
    const p = px(x, y); if (p) roof.push(p);
  }
  if (roof.length < 6) continue;
  const roofC = median(roof);
  // 2. fasce lungo i lati, dentro la pianta
  let best = null;
  for (let i = 0; i < ring.length; i++) {
    const [ax, ay] = ring[i], [bx, by] = ring[(i + 1) % ring.length];
    const L = Math.hypot(bx - ax, by - ay);
    if (L < 3) continue;
    const tx = (bx - ax) / L, ty = (by - ay) / L;
    let nx = -ty, ny = tx;
    if (!pointInRing(ax + tx * L / 2 + nx * 0.5, ay + ty * L / 2 + ny * 0.5, ring)) { nx = -nx; ny = -ny; }
    const band = [];
    for (let s = 0.8; s < L - 0.8; s += 0.4) for (const d of [0.25, 0.5, 0.8, 1.1, 1.5]) {
      const p = px(ax + tx * s + nx * d, ay + ty * s + ny * d);
      // fuori i pixel che somigliano al tetto di QUESTO edificio: la fascia deve essere muro
      if (p && wallLike(p) && dist(p, roofC) > 34) band.push(p);
    }
    if (band.length < 8) continue;
    const m = median(band);
    const [mh, ms] = hsv(m);
    const mv = hsv(m)[2];
    // intonaco al sole: chiaro e poco saturo. Scuro = ombra, saturo = coppi, verde = alberi
    if (mv < 0.58 || ms > 0.35 || (mh > 60 && mh < 170 && ms > 0.12)) continue;
    const score = dist(m, roofC) * Math.min(1, band.length / 30);
    if (!best || score > best.score) best = { score, m, n: band.length };
  }
  // 3. facciata vista solo se la fascia si stacca davvero dal tetto
  if (best && best.score > 38) {
    out[b.id] = { c: best.m, roof: roofC, conf: +Math.min(1, best.score / 90).toFixed(2) };
    measured++;
  }
}
writeFileSync(new URL('data/facade-colors.json', root), JSON.stringify({
  source: 'Ortofoto 2022 20 cm SITR (CC BY 4.0) — facciate viste per relief displacement', measured, tried, buildings: out,
}));
console.log(`facciate misurate: ${measured} su ${tried} edifici nel paese`);
