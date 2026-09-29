/**
 * Strade in 3D sopra l'ortofoto: carreggiata in asfalto, marciapiedi rialzati 12 cm con cordolo,
 * mezzeria tratteggiata sulle provinciali, strisce pedonali e panchine dove le segna OSM, vialetti
 * e scalinate. Larghezze misurate facciata-facciata (scripts/build-streets.mjs).
 * Tutto segue il terreno MDT, sollevato di pochi centimetri.
 */
import * as THREE from 'three';
import { VE3_TERRACE, ve3StairHole, planVe3Stair, buildVe3Plaza } from './piazza-ve3.js';

function canvasTex(w, h, draw, repeat = true) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function rnd(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

/** asfalto: grana fine, rappezzi e crepe — 4 m × 4 m per ripetizione */
const asphaltTex = () => canvasTex(512, 512, (g, w, h) => {
  const r = rnd(7);
  g.fillStyle = '#5c5d5f'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 18; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '40,40,42' : '105,105,102'},${0.04 + r() * 0.05})`; g.beginPath(); g.ellipse(r() * w, r() * h, 20 + r() * 90, 10 + r() * 50, r() * 3, 0, 7); g.fill(); }
  for (let i = 0; i < 16000; i++) { const v = 50 + r() * 70; g.fillStyle = `rgba(${v},${v},${v - 4},0.5)`; g.fillRect(r() * w, r() * h, 1.5, 1.5); }
  g.strokeStyle = 'rgba(20,20,20,0.35)'; g.lineWidth = 1.2;
  for (let i = 0; i < 5; i++) { g.beginPath(); let x = r() * w, y = r() * h; g.moveTo(x, y); for (let k = 0; k < 8; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; g.lineTo(x, y); } g.stroke(); }
});
/** marciapiede: mattonelle di cemento 40 cm, chiare, con fughe */
const sidewalkTex = () => canvasTex(256, 256, (g, w, h) => {
  const r = rnd(11);
  g.fillStyle = '#b9b3a8'; g.fillRect(0, 0, w, h);
  const n = 5, s = w / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const v = 170 + r() * 30; g.fillStyle = `rgb(${v},${v - 5},${v - 14})`; g.fillRect(i * s + 1, j * s + 1, s - 2, s - 2); }
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.08})`; g.fillRect(r() * w, r() * h, 1, 1); }
});
/**
 * Basolato chiaro (calcare / pietra di paese): lastre sfalsate, fuga scura larga abbastanza da
 * leggersi anche dal drone. Niente upscaler: è un disegno, non una foto inventata.
 */
const pavingTex = () => canvasTex(512, 512, (g, w, h) => {
  const r = rnd(5);
  g.fillStyle = '#5e584f'; g.fillRect(0, 0, w, h);
  const bh = 64, bw = 104;
  for (let y = 0; y < h; y += bh) {
    const off = (y / bh) % 2 ? bw / 2 : 0;
    for (let x = -bw; x < w + bw; x += bw) {
      const v = 196 + r() * 38, warm = r() * 16;
      g.fillStyle = `rgb(${Math.min(255, v + warm * 0.15)},${v - 8},${v - 26 - warm})`;
      g.fillRect(x + off + 4, y + 4, bw - 8, bh - 8);
      g.strokeStyle = `rgba(255,250,240,${0.04 + r() * 0.05})`;
      g.strokeRect(x + off + 4.5, y + 4.5, bw - 9, bh - 9);
      g.strokeStyle = `rgba(70,62,52,${0.12 + r() * 0.12})`;
      g.beginPath();
      g.moveTo(x + off + 12, y + 14 + r() * 10);
      g.lineTo(x + off + bw - 16, y + bh - 16);
      g.stroke();
    }
  }
});

/**
 * Spina di mattoni 2:1 a 45° (corso sfalsato, ruotato). La tela è multipla del modulo, così la
 * ripetizione non taglia i mattoni. `beige` è il sagrato della fontana; `red` le fasce pedonali.
 * Disegno, non una foto di Street View.
 */
function bondTex(tone) {
  return canvasTex(512, 512, (g, w, h) => {
    const img = g.createImageData(w, h), d = img.data;
    const P = 64, Q = 32;
    const hsh = (i) => { const s = Math.sin(i * 127.1) * 43758.5453; return s - Math.floor(s); };
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const u = x + y, v = -x + y;
      const row = Math.floor(v / Q);
      const u2 = u - (row & 1) * (P / 2);
      const fu = ((u2 % P) + P) % P;
      const fv = ((v % Q) + Q) % Q;
      const jointW = tone === 'brick' ? 5.2 : 3.5;
      const joint = fu < jointW || fv < jointW;
      const n = hsh(Math.floor(u2 / P) * 13 + row * 7);
      let r, gg, b;
      if (tone === 'brick') { r = 168 + n * 48; gg = 86 + n * 28; b = 62 + n * 16; }
      else if (tone === 'red') { r = 158 + n * 46; gg = 86 + n * 30; b = 68 + n * 18; }
      else { r = 208 + n * 34; gg = 190 + n * 28; b = 162 + n * 20; }
      if (joint) { r *= 0.62; gg *= 0.6; b *= 0.58; }
      else if (hsh(x * 17 + y * 3) > 0.9) { r *= 0.9; gg *= 0.9; b *= 0.88; }
      const i4 = (y * w + x) * 4;
      d[i4] = r; d[i4 + 1] = gg; d[i4 + 2] = b; d[i4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  });
}
/** prato del giardino: fili, non l'ortofoto ingrandita */
function grassTex() {
  return canvasTex(256, 256, (g, w, h) => {
    const r = rnd(9);
    g.fillStyle = '#5d7a3e'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) {
      const x = r() * w, y = r() * h, l = 3 + r() * 6, a = -Math.PI / 2 + (r() - 0.5) * 1.1, v = r();
      g.strokeStyle = `rgb(${70 + v * 60},${110 + v * 70},${40 + v * 30})`; g.lineWidth = 1;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
  });
}

function ringCentroid(ring) {
  let a = 0, cx = 0, cz = 0;
  for (let i = 0; i < ring.length; i += 2) {
    const x0 = ring[i], z0 = ring[i + 1], x1 = ring[(i + 2) % ring.length], z1 = ring[(i + 3) % ring.length];
    const cr = x0 * z1 - x1 * z0;
    a += cr; cx += (x0 + x1) * cr; cz += (z0 + z1) * cr;
  }
  a *= 0.5;
  if (Math.abs(a) < 1e-3) return { x: ring[0], z: ring[1], a: 0 };
  return { x: cx / (6 * a), z: cz / (6 * a), a: Math.abs(a) };
}

/**
 * Tipo di superficie dal baricentro del pezzo (metri locali, origine al Municipio).
 * Non è una texture campionata da Street View: è la scelta che corrisponde a ciò che si vede.
 *  - ve3: terrazzo di Piazza Vittorio Emanuele III, piano, mattoni rossastri a spina
 *  - brick: ritagli della stessa piazza che restano sul terreno (stesso mattone)
 *  - herring: sagrato della Chiesa Madre, mattoni chiari a spina
 *  - drive: piazzale davanti alla facciata nord della chiesa (Piazza Libertà), asfalto non pietra
 *  - garden: interno di Piazza Giovanni Paolo II, prato (la carreggiata resta la mesh delle vie)
 *  - red: ritagli pedonali piccoli intorno a quel giardino
 *  - other: basolato delle altre piazze (Federico II, slarghi)
 */
function inVe3(x, z) {
  return z < -4 && z > -68 && x > -50 && x < 36 && Math.hypot(x + 12, z + 36) < 42;
}
function plazaKind(x, z, area) {
  if (inVe3(x, z) && area > 400) return 've3';
  if (inVe3(x, z)) return 'brick';
  if (z < -8 && z > -62 && x > -198 && x < -120 && Math.hypot(x + 156, z + 32) < 42) return area > 400 ? 'garden' : 'red';
  if (z > 16 && z < 93 && x > -262 && x < -168 && Math.hypot(x + 224, z - 58) < 78) return 'drive';
  if (Math.hypot(x + 212, z - 112) < 28) return 'herring';
  return 'other';
}
function splitPlazas(polys) {
  const out = { herring: [], drive: [], garden: [], red: [], other: [], ve3: [], brick: [] };
  for (const rings of polys || []) {
    const c = ringCentroid(rings[0]);
    out[plazaKind(c.x, c.z, c.a)].push(rings);
  }
  return out;
}

class Strip {
  constructor() { this.p = []; this.u = []; }
  quad(a, b, c, d, ua, ub, uc, ud) { this.p.push(...a, ...b, ...c, ...a, ...c, ...d); this.u.push(...ua, ...ub, ...uc, ...ua, ...uc, ...ud); }
  tri(a, b, c, ua, ub, uc) { this.p.push(...a, ...b, ...c); this.u.push(...ua, ...ub, ...uc); }
  mesh(mat, order = 0) {
    if (!this.p.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.renderOrder = order;
    return m;
  }
}

/** bordo che sfuma: aFade 1 sul contorno vero, 0 un metro più in fuori */
class FadeStrip {
  constructor() { this.p = []; this.u = []; this.a = []; }
  quad(a, b, c, d, ua, ub, uc, ud, aa, ab, ac, ad) {
    this.p.push(...a, ...b, ...c, ...a, ...c, ...d);
    this.u.push(...ua, ...ub, ...uc, ...ua, ...uc, ...ud);
    this.a.push(aa, ab, ac, aa, ac, ad);
  }
  tri(a, b, c, ua, ub, uc, aa, ab, ac) {
    this.p.push(...a, ...b, ...c); this.u.push(...ua, ...ub, ...uc); this.a.push(aa, ab, ac);
  }
  mesh(mat, order = 0) {
    if (!this.p.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.setAttribute('aFade', new THREE.Float32BufferAttribute(this.a, 1));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.renderOrder = order;
    return m;
  }
}

/** anche-dispari, con i buchi: un punto è sulla superficie se attraversa un numero dispari di anelli */
function PolyIndex(polys) {
  this.rings = []; this.grid = new Map(); this.CELL = 48;
  for (const rings of polys || []) for (const r of rings) {
    if (!r || r.length < 6) continue;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (let i = 0; i < r.length; i += 2) { x0 = Math.min(x0, r[i]); x1 = Math.max(x1, r[i]); z0 = Math.min(z0, r[i + 1]); z1 = Math.max(z1, r[i + 1]); }
    const id = this.rings.length; this.rings.push(r);
    for (let x = Math.floor(x0 / this.CELL); x <= Math.floor(x1 / this.CELL); x++) for (let z = Math.floor(z0 / this.CELL); z <= Math.floor(z1 / this.CELL); z++) {
      const k = `${x},${z}`; if (!this.grid.has(k)) this.grid.set(k, []); this.grid.get(k).push(id);
    }
  }
}
PolyIndex.prototype.contains = function (x, z) {
  const ids = this.grid.get(`${Math.floor(x / this.CELL)},${Math.floor(z / this.CELL)}`);
  if (!ids) return false;
  let ins = false;
  for (const id of ids) {
    const r = this.rings[id];
    for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) {
      const yi = r[i + 1], yj = r[j + 1];
      if ((yi > z) !== (yj > z) && x < ((r[j] - r[i]) * (z - yi)) / (yj - yi) + r[i]) ins = !ins;
    }
  }
  return ins;
};

const FEATHER = 0.85; // m: passaggio morbido strada ↔ piazza ↔ suolo
/**
 * Gonna esterna sul bordo che dà sul suolo nudo. Dove incontra l'asfalto, la piazza ha un cordolo
 * basso invece della sfumatura. I tagli fra tessere e i lati contro una facciata non si toccano.
 */
function addSkirts(polys, yInner, yOuter, uvScale, heightAt, inBuilding, blockers, skirts, curbStrip, tile, wantCurb) {
  if (!polys?.length) return;
  const self = new PolyIndex(polys);
  const onTileEdge = (x0, z0, x1, z1) => (Math.abs(x0 - x1) < 0.01 && Math.abs(x0 / tile - Math.round(x0 / tile)) < 1e-4) || (Math.abs(z0 - z1) < 0.01 && Math.abs(z0 / tile - Math.round(z0 / tile)) < 1e-4);
  const put = (x, z, y) => [x, heightAt(x, z) + y, z];
  for (const rings of polys) for (const r of rings) {
    const n = r.length >> 1;
    if (n < 3) continue;
    const edges = [];
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x0 = r[i * 2], z0 = r[i * 2 + 1], x1 = r[j * 2], z1 = r[j * 2 + 1];
      const e = { x0, z0, x1, z1, mode: 'skip', ox: 0, oz: 0 };
      edges.push(e);
      const L = Math.hypot(x1 - x0, z1 - z0);
      if (L < 0.08 || onTileEdge(x0, z0, x1, z1)) continue;
      const nx = -(z1 - z0) / L, nz = (x1 - x0) / L, mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      let out = false;
      for (const s of [1, -1]) if (!self.contains(mx + nx * s * 0.35, mz + nz * s * 0.35)) { e.ox = nx * s; e.oz = nz * s; out = true; break; }
      if (!out || inBuilding(mx + e.ox * 0.55, mz + e.oz * 0.55)) continue;
      let hit = null;
      for (const b of blockers) if (b.index.contains(mx + e.ox * 0.7, mz + e.oz * 0.7)) { hit = b.kind; break; }
      // il marciapiede ha già il suo cordolo: qui solo il gradino basso piazza → asfalto
      if (hit) { if (wantCurb && hit === 'asphalt') e.mode = 'curb'; continue; }
      e.mode = 'skirt';
    }
    for (const e of edges) {
      const L = Math.hypot(e.x1 - e.x0, e.z1 - e.z0), seg = Math.max(1, Math.ceil(L / MAXE));
      for (let k = 0; k < seg; k++) {
        const ax = e.x0 + (e.x1 - e.x0) * k / seg, az = e.z0 + (e.z1 - e.z0) * k / seg;
        const bx = e.x0 + (e.x1 - e.x0) * (k + 1) / seg, bz = e.z0 + (e.z1 - e.z0) * (k + 1) / seg;
        if (e.mode === 'skirt') {
          const ax2 = ax + e.ox * FEATHER, az2 = az + e.oz * FEATHER, bx2 = bx + e.ox * FEATHER, bz2 = bz + e.oz * FEATHER;
          const uv = (x, z) => [x / uvScale, z / uvScale];
          skirts.quad(put(ax, az, yInner), put(bx, bz, yInner), put(bx2, bz2, yOuter), put(ax2, az2, yOuter), uv(ax, az), uv(bx, bz), uv(bx2, bz2), uv(ax2, az2), 1, 1, 0, 0);
        } else if (e.mode === 'curb') {
          const ya = heightAt(ax, az) + yOuter, yb = heightAt(bx, bz) + yOuter, h = yInner - yOuter;
          curbStrip.quad([ax, ya, az], [bx, yb, bz], [bx, yb + h, bz], [ax, ya + h, az], [0, 0], [1, 0], [1, 1], [0, 1]);
        }
      }
    }
    for (let i = 0; i < n; i++) {
      const prev = edges[(i - 1 + n) % n], e = edges[i];
      if (prev.mode !== 'skirt' || e.mode !== 'skirt') continue;
      const x = e.x0, z = e.z0, p1x = x + prev.ox * FEATHER, p1z = z + prev.oz * FEATHER, p2x = x + e.ox * FEATHER, p2z = z + e.oz * FEATHER;
      if (Math.hypot(p1x - p2x, p1z - p2z) < 0.04) continue;
      const uv = (px, pz) => [px / uvScale, pz / uvScale];
      skirts.tri(put(x, z, yInner), put(p1x, p1z, yOuter), put(p2x, p2z, yOuter), uv(x, z), uv(p1x, p1z), uv(p2x, p2z), 1, 0, 0);
    }
  }
}

/** fascia interna di pietra sul bordo di un prato: il centro resta erba */
function addBorder(polys, width, y, uvScale, heightAt, tile, out) {
  if (!polys?.length) return;
  const self = new PolyIndex(polys);
  const onTileEdge = (x0, z0, x1, z1) => (Math.abs(x0 - x1) < 0.01 && Math.abs(x0 / tile - Math.round(x0 / tile)) < 1e-4) || (Math.abs(z0 - z1) < 0.01 && Math.abs(z0 / tile - Math.round(z0 / tile)) < 1e-4);
  const put = (x, z) => [x, heightAt(x, z) + y, z];
  const uv = (x, z) => [x / uvScale, z / uvScale];
  for (const rings of polys) for (const r of rings) {
    const n = r.length >> 1;
    if (n < 3) continue;
    const edges = [];
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x0 = r[i * 2], z0 = r[i * 2 + 1], x1 = r[j * 2], z1 = r[j * 2 + 1];
      const e = { x0, z0, x1, z1, ix: 0, iz: 0, on: false };
      edges.push(e);
      const L = Math.hypot(x1 - x0, z1 - z0);
      if (L < 0.15 || onTileEdge(x0, z0, x1, z1)) continue;
      const nx = -(z1 - z0) / L, nz = (x1 - x0) / L, mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      for (const s of [1, -1]) {
        if (self.contains(mx + nx * s * 0.4, mz + nz * s * 0.4) && !self.contains(mx - nx * s * 0.4, mz - nz * s * 0.4)) {
          e.ix = nx * s; e.iz = nz * s; e.on = true; break;
        }
      }
      if (!e.on) continue;
      const seg = Math.max(1, Math.ceil(L / MAXE));
      for (let k = 0; k < seg; k++) {
        const ax = x0 + (x1 - x0) * k / seg, az = z0 + (z1 - z0) * k / seg;
        const bx = x0 + (x1 - x0) * (k + 1) / seg, bz = z0 + (z1 - z0) * (k + 1) / seg;
        const ax2 = ax + e.ix * width, az2 = az + e.iz * width, bx2 = bx + e.ix * width, bz2 = bz + e.iz * width;
        out.quad(put(ax, az), put(bx, bz), put(bx2, bz2), put(ax2, az2), uv(ax, az), uv(bx, bz), uv(bx2, bz2), uv(ax2, az2));
      }
    }
    for (let i = 0; i < n; i++) {
      const prev = edges[(i - 1 + n) % n], e = edges[i];
      if (!prev.on || !e.on) continue;
      const x = e.x0, z = e.z0;
      const p1x = x + prev.ix * width, p1z = z + prev.iz * width, p2x = x + e.ix * width, p2z = z + e.iz * width;
      if (Math.hypot(p1x - p2x, p1z - p2z) < 0.04) continue;
      out.tri(put(x, z), put(p1x, p1z), put(p2x, p2z), uv(x, z), uv(p1x, p1z), uv(p2x, p2z));
    }
  }
}

function fadeMat(map) {
  const m = new THREE.MeshLambertMaterial({
    map, side: THREE.DoubleSide, alphaToCoverage: true,
    polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
  });
  m.customProgramCacheKey = () => 'surf-fade';
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aFade;\nvarying float vFade;')
      .replace('#include <uv_vertex>', '#include <uv_vertex>\nvFade = aFade;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vFade;')
      .replace('vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;', 'diffuseColor.a *= vFade;\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;');
  };
  return m;
}

/** punti ogni ≤3 m (per seguire il terreno) con tangente e normale sinistra */
function densify(flat, extra = []) {
  const pts = [];
  for (let i = 0; i < flat.length; i += 2) pts.push({ x: flat[i], z: flat[i + 1], e: extra.map((a) => a[i / 2]) });
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], L = Math.hypot(b.x - a.x, b.z - a.z), n = Math.max(1, Math.ceil(L / 3));
    for (let k = 1; k <= n; k++) out.push({ x: a.x + (b.x - a.x) * k / n, z: a.z + (b.z - a.z) * k / n, e: a.e.map((v, j) => v + (b.e[j] - v) * k / n) });
  }
  let s = 0;
  out.forEach((p, i) => {
    const a = out[Math.max(0, i - 1)], b = out[Math.min(out.length - 1, i + 1)];
    let tx = b.x - a.x, tz = b.z - a.z; const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
    p.nx = -tz; p.nz = tx;
    if (i) s += Math.hypot(p.x - out[i - 1].x, p.z - out[i - 1].z);
    p.s = s;
  });
  return out;
}

/**
 * Poligono con buchi → triangoli che seguono il terreno. Ogni lato più lungo di MAXE viene diviso a
 * metà (bisezione del lato più lungo): la divisione dipende solo dal lato, quindi due triangoli
 * vicini lo dividono negli stessi punti e non restano fessure.
 */
const MAXE = 6;
function fillPolys(polys, heightAt, yOff, uvScale, out, yAbs = null, skipTri = null) {
  for (const rings of polys) {
    // contorno già diviso in tratti ≤ MAXE (in parti uguali: due poligoni con un lato in comune lo
    // dividono negli stessi punti), così la triangolazione non fa lunghe schegge da ridividere
    const toV = (r) => {
      const v = [];
      for (let i = 0; i < r.length; i += 2) {
        const x0 = r[i], z0 = r[i + 1], x1 = r[(i + 2) % r.length], z1 = r[(i + 3) % r.length];
        const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / MAXE));
        for (let k = 0; k < n; k++) v.push(new THREE.Vector2(x0 + (x1 - x0) * k / n, z0 + (z1 - z0) * k / n));
      }
      return v;
    };
    const outer = toV(rings[0]), holes = rings.slice(1).map(toV);
    const all = outer.concat(...holes);
    const faces = THREE.ShapeUtils.triangulateShape(outer, holes);
    const stack = faces.map(([a, b, c]) => [[all[a].x, all[a].y], [all[b].x, all[b].y], [all[c].x, all[c].y]]);
    while (stack.length) {
      const t = stack.pop();
      let li = -1, lm = (MAXE * 1.6) ** 2;
      for (let i = 0; i < 3; i++) { const p = t[i], q = t[(i + 1) % 3]; const d = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2; if (d > lm) { lm = d; li = i; } }
      if (li < 0) {
        if (skipTri) {
          const cx = (t[0][0] + t[1][0] + t[2][0]) / 3, cz = (t[0][1] + t[1][1] + t[2][1]) / 3;
          if (skipTri(cx, cz)) continue;
        }
        for (const [x, z] of t) { out.p.push(x, yAbs != null ? yAbs : heightAt(x, z) + yOff, z); out.u.push(x / uvScale, z / uvScale); }
        continue;
      }
      const a = t[li], b = t[(li + 1) % 3], c = t[(li + 2) % 3], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      stack.push([a, m, c], [m, b, c]);
    }
  }
}

/** bordo basso del terrazzo di VE3: dove il salto è piccolo la spina sfuma, il muro alto lo fa piazza-ve3 */
function addVe3LowSkirt(polys, yAbs, uvScale, heightAt, skirts) {
  if (!polys?.length) return;
  const self = new PolyIndex(polys);
  for (const rings of polys) {
    const r = rings[0]; const n = r.length >> 1;
    if (n < 3) continue;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x0 = r[i * 2], z0 = r[i * 2 + 1], x1 = r[j * 2], z1 = r[j * 2 + 1];
      const L = Math.hypot(x1 - x0, z1 - z0);
      if (L < 0.2) continue;
      let nx = -(z1 - z0) / L, nz = (x1 - x0) / L;
      const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      if (self.contains(mx + nx * 0.4, mz + nz * 0.4)) { nx = -nx; nz = -nz; }
      if (self.contains(mx + nx * 0.45, mz + nz * 0.45)) continue;
      if (yAbs - heightAt(mx + nx, mz + nz) > 0.48) continue;
      const seg = Math.max(1, Math.ceil(L / MAXE));
      for (let k = 0; k < seg; k++) {
        const ax = x0 + (x1 - x0) * k / seg, az = z0 + (z1 - z0) * k / seg;
        const bx = x0 + (x1 - x0) * (k + 1) / seg, bz = z0 + (z1 - z0) * (k + 1) / seg;
        const ax2 = ax + nx * FEATHER, az2 = az + nz * FEATHER, bx2 = bx + nx * FEATHER, bz2 = bz + nz * FEATHER;
        const uv = (x, z) => [x / uvScale, z / uvScale];
        const inn = (x, z) => [x, yAbs, z], out = (x, z) => [x, heightAt(x, z) + 0.2, z];
        skirts.quad(inn(ax, az), inn(bx, bz), out(bx2, bz2), out(ax2, az2), uv(ax, az), uv(bx, bz), uv(bx2, bz2), uv(ax2, az2), 1, 1, 0, 0);
      }
    }
  }
}

export function buildStreets(data, heightAt, inBuilding = () => false) {
  const group = new THREE.Group(); group.name = 'streets';
  const asphalt = new Strip(), walk = new Strip(), curb = new Strip(), mark = new Strip(), paving = new Strip();
  const herring = new Strip(), cobble = new Strip(), drive = new Strip(), garden = new Strip(), red = new Strip(), rim = new Strip();
  const ve3 = new Strip(), brick = new Strip();
  const skirtA = new FadeStrip(), skirtP = new FadeStrip(), skirtH = new FadeStrip(), skirtO = new FadeStrip(), skirtD = new FadeStrip(), skirtR = new FadeStrip(), skirtV = new FadeStrip();
  const Y = 0.2, CURB = 0.12, PLAZA = 0.08; // 20 cm sul modello del terreno: tra i vertici della maglia il terreno sporge di qualche cm. La piazza in pietra è 8 cm sopra l'asfalto.
  const junc = data.junctions;
  const nearJunction = (x, z, pad) => junc.some(([jx, jz, r]) => Math.abs(jx - x) < r + pad && Math.abs(jz - z) < r + pad && Math.hypot(jx - x, jz - z) < r + pad);

  // superfici vere (build-streets.mjs): carreggiata = unione delle vie, marciapiede = fascia fino alle
  // facciate, vialetti in basolato. I poligoni di piazza si dividono per tipo (splitPlazas): spina,
  // asfalto del piazzale, prato, fascia rossa, basolato. La carreggiata sotto non si ridisegna.
  const S = data.surf;
  S.plaza = S.plaza || [];
  const kinds = splitPlazas(S.plaza);
  fillPolys(S.asphalt, heightAt, Y, 4, asphalt);
  fillPolys(S.walk, heightAt, Y + CURB, 1.6, walk);
  fillPolys(S.paving, heightAt, Y + 0.04, 2.2, paving);
  planVe3Stair(heightAt);
  fillPolys(kinds.ve3, heightAt, 0, 2.2, ve3, VE3_TERRACE, ve3StairHole);
  fillPolys(kinds.brick, heightAt, Y + PLAZA, 2.2, brick);
  addVe3LowSkirt(kinds.ve3, VE3_TERRACE, 2.2, heightAt, skirtV);
  fillPolys(kinds.herring, heightAt, Y + PLAZA, 2.4, herring);
  fillPolys(kinds.other, heightAt, Y + PLAZA, 2.8, cobble);
  fillPolys(kinds.drive, heightAt, Y + 0.012, 4, drive);
  fillPolys(kinds.garden, heightAt, Y - 0.02, 3.2, garden);
  fillPolys(kinds.red, heightAt, Y + 0.06, 2.2, red);
  addBorder(kinds.garden, 2.6, Y + 0.08, 2.2, heightAt, S.tile, rim);
  const idx = {
    asphalt: new PolyIndex(S.asphalt), walk: new PolyIndex(S.walk),
    paving: new PolyIndex(S.paving), plaza: new PolyIndex(S.plaza),
  };
  const block = (...names) => names.map((kind) => ({ kind, index: idx[kind] }));
  const hard = block('asphalt', 'walk', 'paving', 'plaza');
  // ~0,85 m di sfumatura verso il suolo nudo; il cordolo solo dove la pietra incontra l'asfalto
  addSkirts(S.asphalt, Y, Y, 4, heightAt, inBuilding, block('walk', 'paving', 'plaza'), skirtA, curb, S.tile, false);
  addSkirts(S.paving, Y + 0.04, Y + 0.04, 2.2, heightAt, inBuilding, block('asphalt', 'walk', 'plaza'), skirtP, curb, S.tile, false);
  addSkirts(kinds.herring, Y + PLAZA, Y, 2.4, heightAt, inBuilding, hard, skirtH, curb, S.tile, true);
  addSkirts(kinds.other, Y + PLAZA, Y, 2.8, heightAt, inBuilding, hard, skirtO, curb, S.tile, true);
  addSkirts(kinds.drive, Y + 0.012, Y, 4, heightAt, inBuilding, hard, skirtD, curb, S.tile, false);
  addSkirts(kinds.red, Y + 0.06, Y, 2.2, heightAt, inBuilding, hard, skirtR, curb, S.tile, true);
  // cordolo: un gradino lungo tutto il contorno dei marciapiedi, tranne i tagli fra tessere
  const onTileEdge = (x0, z0, x1, z1) => (Math.abs(x0 - x1) < 0.01 && Math.abs(x0 / S.tile - Math.round(x0 / S.tile)) < 1e-4) || (Math.abs(z0 - z1) < 0.01 && Math.abs(z0 / S.tile - Math.round(z0 / S.tile)) < 1e-4);
  for (const rings of S.walk) for (const r of rings) {
    for (let i = 0; i < r.length; i += 2) {
      const j = (i + 2) % r.length, x0 = r[i], z0 = r[i + 1], x1 = r[j], z1 = r[j + 1];
      if (onTileEdge(x0, z0, x1, z1)) continue;
      // contro una facciata il gradino non si vede: si salta
      const L = Math.hypot(x1 - x0, z1 - z0) || 1, mx = (x0 + x1) / 2, mz = (z0 + z1) / 2, ox = -(z1 - z0) / L * 0.4, oz = (x1 - x0) / L * 0.4;
      if (inBuilding(mx + ox, mz + oz) || inBuilding(mx - ox, mz - oz)) continue;
      const n = Math.max(1, Math.ceil(L / MAXE));
      for (let k = 0; k < n; k++) {
        const ax = x0 + (x1 - x0) * k / n, az = z0 + (z1 - z0) * k / n, bx = x0 + (x1 - x0) * (k + 1) / n, bz = z0 + (z1 - z0) * (k + 1) / n;
        const ya = heightAt(ax, az) + Y, yb = heightAt(bx, bz) + Y;
        curb.quad([ax, ya, az], [bx, yb, bz], [bx, yb + CURB, bz], [ax, ya + CURB, az], [0, 0], [1, 0], [1, 1], [0, 1]);
      }
    }
  }
  // mezzeria tratteggiata (3 m pieno, 3 m vuoto), interrotta negli incroci
  for (const rd of data.roads) {
    if (!rd.mk) continue;
    const P = densify(rd.p);
    for (let i = 1; i < P.length; i++) {
      const a = P[i - 1], b = P[i];
      if (Math.floor(a.s / 3) % 2 || nearJunction(a.x, a.z, 2) || nearJunction(b.x, b.z, 2)) continue;
      const w = 0.07;
      const M = (p, o) => { const x = p.x + p.nx * o, z = p.z + p.nz * o; return [x, heightAt(x, z) + Y + 0.03, z]; };
      mark.quad(M(a, w), M(a, -w), M(b, -w), M(b, w), [0, 0], [1, 0], [1, 1], [0, 1]);
    }
  }
  // strisce pedonali: bande bianche da 50 cm lungo l'asse della via, lunghe quanto la carreggiata
  for (const [x, z, ang, cw] of data.crossings) {
    const tx = Math.sin(ang), tz = Math.cos(ang), nx = -tz, nz = tx;
    const stripes = Math.max(3, Math.floor(cw / 1.0));
    for (let k = 0; k < stripes; k++) {
      const o = -cw / 2 + 0.25 + k * (cw - 0.5) / Math.max(1, stripes - 1);
      const cx = x + nx * o, cz = z + nz * o;
      const pt = (dl, dw) => { const px = cx + tx * dl + nx * dw, pz = cz + tz * dl + nz * dw; return [px, heightAt(px, pz) + Y + 0.03, pz]; };
      mark.quad(pt(-1.5, -0.25), pt(-1.5, 0.25), pt(1.5, 0.25), pt(1.5, -0.25), [0, 0], [1, 0], [1, 1], [0, 1]);
    }
  }
  // doppia faccia: l'ordine dei vertici dei nastri dipende dal verso della via in OSM
  const polyOff = (m) => { m.side = THREE.DoubleSide; m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -2; return m; };
  const add = (m) => m && group.add(m);
  const pav = pavingTex(), asph = asphaltTex(), spine = bondTex('beige'), rose = bondTex('red'), lawn = grassTex(), bricks = bondTex('brick');
  const asphMat = polyOff(new THREE.MeshLambertMaterial({ map: asph }));
  add(asphalt.mesh(asphMat, 1));
  add(drive.mesh(asphMat, 1));
  add(walk.mesh(new THREE.MeshLambertMaterial({ map: sidewalkTex(), side: THREE.DoubleSide }), 2));
  add(curb.mesh(new THREE.MeshLambertMaterial({ color: 0xe4dcd0, side: THREE.DoubleSide }), 2));
  const markMat = polyOff(new THREE.MeshLambertMaterial({ color: 0xf2f2ee })); markMat.polygonOffsetFactor = -6; markMat.polygonOffsetUnits = -6;
  add(mark.mesh(markMat, 3));
  add(paving.mesh(polyOff(new THREE.MeshLambertMaterial({ map: pav })), 1));
  add(herring.mesh(polyOff(new THREE.MeshLambertMaterial({ map: spine })), 1));
  add(ve3.mesh(polyOff(new THREE.MeshLambertMaterial({ map: bricks })), 1));
  add(brick.mesh(polyOff(new THREE.MeshLambertMaterial({ map: bricks })), 1));
  add(cobble.mesh(polyOff(new THREE.MeshLambertMaterial({ map: pav })), 1));
  add(garden.mesh(polyOff(new THREE.MeshLambertMaterial({ map: lawn })), 1));
  const roseMat = polyOff(new THREE.MeshLambertMaterial({ map: rose }));
  add(red.mesh(roseMat, 1));
  add(rim.mesh(roseMat, 2));
  add(skirtA.mesh(fadeMat(asph), 3));
  add(skirtP.mesh(fadeMat(pav), 3));
  add(skirtH.mesh(fadeMat(spine), 3));
  add(skirtO.mesh(fadeMat(pav), 3));
  add(skirtD.mesh(fadeMat(asph), 3));
  add(skirtR.mesh(fadeMat(rose), 3));
  add(skirtV.mesh(fadeMat(bricks), 3));
  group.add(buildVe3Plaza(heightAt, kinds.ve3));
  group.add(buildBenches(data.benches, heightAt));
  group.add(buildWalls(data.walls || [], heightAt));
  group.add(buildLamps(data.lamps || [], heightAt));
  return group;
}

/** muri DBTR: divisorio intonacato, sostegno e a secco in pietra, recinzione/cancello in ferro */
function buildWalls(list, heightAt) {
  const SPEC = [[1.8, 0.25, 0xd9d1c1], [1.4, 0.4, 0xa89d8a], [1.0, 0.45, 0x958a78], [1.5, 0.05, 0x39463b]];
  const pos = [], colr = [], c = new THREE.Color();
  const box = (a, b, h, t, y0a, y0b) => {
    const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz); if (L < 0.05) return;
    const nx = (-dz / L) * t / 2, nz = (dx / L) * t / 2;
    const P = (p, s, y) => [p[0] + nx * s, y, p[1] + nz * s];
    const q = (A, B, C, D) => { pos.push(...A, ...B, ...C, ...A, ...C, ...D); for (let i = 0; i < 6; i++) colr.push(c.r, c.g, c.b); };
    for (const sd of [1, -1]) q(P(a, sd, y0a), P(b, sd, y0b), P(b, sd, y0b + h), P(a, sd, y0a + h));
    q(P(a, 1, y0a + h), P(b, 1, y0b + h), P(b, -1, y0b + h), P(a, -1, y0a + h));
  };
  for (const w of list) {
    const [h, t, hex] = SPEC[w.k]; c.setHex(hex);
    for (let i = 2; i < w.p.length; i += 2) {
      const a = [w.p[i - 2], w.p[i - 1]], b = [w.p[i], w.p[i + 1]];
      const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 8));
      for (let k = 0; k < n; k++) {
        const p0 = [a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n], p1 = [a[0] + (b[0] - a[0]) * (k + 1) / n, a[1] + (b[1] - a[1]) * (k + 1) / n];
        box(p0, p1, h, t, heightAt(...p0) - 0.3, heightAt(...p1) - 0.3);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  m.castShadow = m.receiveShadow = true; m.name = 'walls';
  return m;
}

/** lampione stradale: palo, sbraccio verso la strada, corpo illuminante */
function buildLamps(list, heightAt) {
  const g = new THREE.Group(); g.name = 'lamps';
  if (!list.length) return g;
  const pole = new THREE.CylinderGeometry(0.06, 0.09, 6.5, 6); pole.translate(0, 3.25, 0);
  const arm = new THREE.BoxGeometry(0.06, 0.06, 1.3); arm.translate(0, 6.4, 0.6);
  const head = new THREE.BoxGeometry(0.28, 0.12, 0.55); head.translate(0, 6.33, 1.2);
  const metal = new THREE.MeshLambertMaterial({ color: 0x4a4f52 });
  const light = new THREE.MeshLambertMaterial({ color: 0xfff4d6, emissive: 0xffc070, emissiveIntensity: 0.1 });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (const [geo, mat] of [[pole, metal], [arm, metal], [head, light]]) {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach(([x, z, a], i) => { q.setFromAxisAngle(up, a); m.compose(p.set(x, heightAt(x, z) + 0.3, z), q, s); im.setMatrixAt(i, m); });
    im.castShadow = true; g.add(im);
  }
  // di notte: pozza di luce sulla strada sotto ogni corpo illuminante e alone attorno alla lampada
  // alone morbido: lo zero sta ben dentro il bordo, così non resta un disco tagliato di netto
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  const c2 = cv.getContext('2d'), gr = c2.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, 'rgba(255,226,186,0.50)');
  gr.addColorStop(0.08, 'rgba(255,210,155,0.22)');
  gr.addColorStop(0.22, 'rgba(255,196,130,0.08)');
  gr.addColorStop(0.42, 'rgba(255,184,114,0.025)');
  gr.addColorStop(0.62, 'rgba(255,176,100,0)');
  gr.addColorStop(1, 'rgba(255,170,90,0)');
  c2.fillStyle = gr; c2.fillRect(0, 0, 256, 256);
  const glowTex = new THREE.CanvasTexture(cv); glowTex.colorSpace = THREE.SRGBColorSpace;
  const poolMat = new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, fog: false, polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -8 });
  const pool = new THREE.PlaneGeometry(18, 18); pool.rotateX(-Math.PI / 2);
  const pools = new THREE.InstancedMesh(pool, poolMat, list.length);
  const heads = new Float32Array(list.length * 3);
  list.forEach(([x, z, a], i) => {
    const hx = x + Math.sin(a) * 1.2, hz = z + Math.cos(a) * 1.2;
    m.compose(p.set(hx, heightAt(hx, hz) + 0.36, hz), q.identity(), s); pools.setMatrixAt(i, m);
    heads.set([hx, heightAt(x, z) + 0.3 + 6.25, hz], i * 3);
  });
  pools.renderOrder = 4; pools.frustumCulled = false;
  const hg = new THREE.BufferGeometry(); hg.setAttribute('position', new THREE.BufferAttribute(heads, 3));
  const haloMat = new THREE.PointsMaterial({ map: glowTex, size: 16, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, sizeAttenuation: true });
  const halos = new THREE.Points(hg, haloMat); halos.frustumCulled = false;
  g.add(pools, halos);
  g.userData.night = (n) => { poolMat.opacity = n * 0.4; haloMat.opacity = n * 0.85; light.emissiveIntensity = 0.2 + n * 1.2; pools.visible = halos.visible = n > 0.01; };
  return g;
}

function buildBenches(list, heightAt) {
  const g = new THREE.Group();
  if (!list.length) return g;
  const seat = new THREE.BoxGeometry(1.8, 0.08, 0.45); seat.translate(0, 0.45, 0);
  const back = new THREE.BoxGeometry(1.8, 0.45, 0.06); back.translate(0, 0.72, -0.2);
  const legs = new THREE.BoxGeometry(0.06, 0.42, 0.4); legs.translate(-0.8, 0.21, 0);
  const legs2 = new THREE.BoxGeometry(0.06, 0.42, 0.4); legs2.translate(0.8, 0.21, 0);
  const wood = new THREE.MeshLambertMaterial({ color: 0x8a5d3b }), iron = new THREE.MeshLambertMaterial({ color: 0x2f3a33 });
  const parts = [[seat, wood], [back, wood], [legs, iron], [legs2, iron]];
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  for (const [geo, mat] of parts) {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach(([x, z], i) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (x * 13 + z * 7) % 6.28); m.compose(p.set(x, heightAt(x, z) + 0.07, z), q, s); im.setMatrixAt(i, m); });
    im.castShadow = true; g.add(im);
  }
  return g;
}
