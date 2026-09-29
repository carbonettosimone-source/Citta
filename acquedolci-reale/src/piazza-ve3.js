/**
 * Piazza Vittorio Emanuele III, il terrazzo della Fontana dei Delfini.
 * La quota viene dal MDT: intorno alla fontana il suolo è ~32,7 m, verso il mare
 * (Via Giuseppe Mazzini / la via inferiore) scende sotto i 31 m. La piazza vera è un
 * piano, non quella rampa. Qui: piano, anello di basolato, muretto, scala, ringhiera,
 * aiuole, panchine, lampioni e i vasi della via sotto. Geometria nostra, niente foto.
 */
import * as THREE from 'three';

/** piano del lastricato, metri sul livello del mare (MDT alla fontana + il rialzo delle vie) */
export const VE3_TERRACE = 32.95;
const FX = -8.54, FZ = -31.15;

/** scala sul lato ovest del ciglio nord: il centro, dal satellite, è il giardino a semicerchio */
const STAIR = { x0: -40.5, x1: -28.2, zTop: -42.4, tread: 0.34 };

/**
 * Facciata nord del Municipio (pianta DBTR). u corre lungo il fronte verso ovest,
 * w esce verso la fontana. Gli otto riquadri e il basolato grigio stanno in questo riferimento,
 * così restano paralleli alla scala d'ingresso e non la coprono.
 */
const FAX = 0.275, FAZ = -8.445;
const NWx = -0.2855, NWz = -0.9584;
const Ux = -0.9584, Uz = 0.2855;
const CELL = 5.15;
const MOTIF_U0 = 2 - CELL * 2;
const MOTIF_W0 = 0.4;
const MOTIF_SPLIT = 6.15;
const MOTIF_W1 = MOTIF_SPLIT + CELL * 2;
let stairPlan = null;

export function planVe3Stair(heightAt) {
  const { x0, x1, zTop, tread } = STAIR;
  const cx = (x0 + x1) / 2;
  let n = 12;
  let yBot = heightAt(cx, zTop - 4) + 0.22;
  for (let k = 0; k < 4; k++) {
    const zg = zTop - (n + 0.4) * tread;
    yBot = heightAt(cx, zg) + 0.22;
    n = Math.max(10, Math.min(16, Math.round((VE3_TERRACE - yBot) / 0.155)));
  }
  const zBot = zTop - n * tread;
  yBot = heightAt(cx, zBot) + 0.2;
  stairPlan = { x0, x1, zTop, zBot, yTop: VE3_TERRACE, yBot, n, tread, cx };
  return stairPlan;
}

/** buco nel lastricato piatto: lì ci sono i gradini, non il piano */
export function ve3StairHole(x, z) {
  const s = stairPlan;
  if (!s) return false;
  return x > s.x0 + 0.2 && x < s.x1 - 0.2 && z < s.zTop - 0.04 && z > s.zBot - 0.3;
}

/** quota di cammino: sul terrazzo si sta sul piano, sulla scala sui gradini */
export function ve3Floor(x, z, terrainY) {
  const s = stairPlan;
  if (s && x > s.x0 - 0.05 && x < s.x1 + 0.05 && z <= s.zTop + 0.05 && z >= s.zBot - 0.15) {
    const t = (s.zTop - z) / Math.max(0.2, s.zTop - s.zBot);
    const y = s.yTop + (s.yBot - s.yTop) * Math.min(1, Math.max(0, t));
    return Math.max(terrainY, y);
  }
  if (ve3Polys && insideVe3(x, z) && Math.hypot(x - FX, z - FZ) > 3.15) return Math.max(terrainY, VE3_TERRACE);
  return terrainY;
}

let ve3Polys = null;
function insideRing(r, x, z) {
  let ins = false;
  for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) {
    const yi = r[i + 1], yj = r[j + 1];
    if ((yi > z) !== (yj > z) && x < ((r[j] - r[i]) * (z - yi)) / (yj - yi) + r[i]) ins = !ins;
  }
  return ins;
}
function insideVe3(x, z) {
  if (!ve3Polys) return false;
  for (const rings of ve3Polys) {
    if (!insideRing(rings[0], x, z)) continue;
    let hole = false;
    for (let h = 1; h < rings.length; h++) if (insideRing(rings[h], x, z)) hole = true;
    if (!hole) return true;
  }
  return false;
}

function lambert(color, extra) {
  const m = new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide, ...extra });
  m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -2;
  return m;
}

function ringTex() {
  const S = 1024, world = 26, mpp = world / S;
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const g = cv.getContext('2d');
  const cx = S / 2, cy = S / 2, px = (m) => m / mpp;
  const R0 = 5.45, tooth = 1.15, N = 28;
  const outer = (a) => {
    const p = (a * N) / (Math.PI * 2);
    const tri = 1 - Math.abs((p % 1) * 2 - 1);
    return R0 + tri * tooth;
  };
  g.beginPath();
  for (let i = 0; i <= 420; i++) {
    const a = (i / 420) * Math.PI * 2, R = outer(a);
    const x = cx + Math.sin(a) * px(R), y = cy + Math.cos(a) * px(R);
    if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
  }
  g.closePath();
  g.fillStyle = '#cfc8ba'; g.fill();
  g.save(); g.clip();
  // lastre grandi, fughe radiali e concentriche
  for (let i = 0; i < 28; i++) {
    const a0 = (i / 28) * Math.PI * 2, a1 = ((i + 1) / 28) * Math.PI * 2;
    g.fillStyle = i % 2 ? '#d9d3c6' : '#c8c1b2';
    g.beginPath();
    g.moveTo(cx + Math.sin(a0) * px(5.2), cy + Math.cos(a0) * px(5.2));
    g.lineTo(cx + Math.sin(a0) * px(7.2), cy + Math.cos(a0) * px(7.2));
    g.lineTo(cx + Math.sin(a1) * px(7.2), cy + Math.cos(a1) * px(7.2));
    g.lineTo(cx + Math.sin(a1) * px(5.2), cy + Math.cos(a1) * px(5.2));
    g.fill();
  }
  g.strokeStyle = 'rgba(70,64,56,0.55)'; g.lineWidth = 3;
  for (const R of [5.7, 6.35]) { g.beginPath(); g.arc(cx, cy, px(R), 0, Math.PI * 2); g.stroke(); }
  g.restore();
  // fascia di mattoni rossi messi in radiale
  g.save();
  g.beginPath(); g.arc(cx, cy, px(5.15), 0, 7); g.arc(cx, cy, px(4.15), 0, 7, true); g.clip();
  for (let i = 0; i < 90; i++) {
    const a0 = (i / 90) * Math.PI * 2, a1 = ((i + 1) / 90) * Math.PI * 2;
    const n = (Math.sin(i * 12.3) * 0.5 + 0.5);
    g.fillStyle = `rgb(${150 + n * 40},${72 + n * 24},${54 + n * 14})`;
    g.beginPath();
    g.moveTo(cx + Math.sin(a0) * px(4.1), cy + Math.cos(a0) * px(4.1));
    g.lineTo(cx + Math.sin(a0) * px(5.2), cy + Math.cos(a0) * px(5.2));
    g.lineTo(cx + Math.sin(a1) * px(5.2), cy + Math.cos(a1) * px(5.2));
    g.lineTo(cx + Math.sin(a1) * px(4.1), cy + Math.cos(a1) * px(4.1));
    g.fill();
  }
  g.restore();
  // anello interno di pietra chiara, a conci
  g.save();
  g.beginPath(); g.arc(cx, cy, px(4.15), 0, 7); g.arc(cx, cy, px(3.52), 0, 7, true); g.clip();
  for (let i = 0; i < 48; i++) {
    const a0 = (i / 48) * Math.PI * 2, a1 = ((i + 1) / 48) * Math.PI * 2;
    g.fillStyle = i % 2 ? '#efeae0' : '#e0d9cc';
    g.beginPath();
    g.moveTo(cx + Math.sin(a0) * px(3.55), cy + Math.cos(a0) * px(3.55));
    g.lineTo(cx + Math.sin(a0) * px(4.2), cy + Math.cos(a0) * px(4.2));
    g.lineTo(cx + Math.sin(a1) * px(4.2), cy + Math.cos(a1) * px(4.2));
    g.lineTo(cx + Math.sin(a1) * px(3.55), cy + Math.cos(a1) * px(3.55));
    g.fill();
  }
  g.restore();
  g.globalCompositeOperation = 'destination-out';
  g.beginPath(); g.arc(cx, cy, px(3.5), 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

function paintHerring(g, x, y, w, h, tone) {
  g.save();
  g.beginPath(); g.rect(x, y, w, h); g.clip();
  g.translate(x + w / 2, y + h / 2);
  g.rotate(Math.PI / 4);
  const D = Math.hypot(w, h) + 8;
  const bw = 12, bh = 5.5, gap = 1.4;
  let row = 0;
  for (let py = -D; py < D; py += bh + gap, row++) {
    const shift = (row % 2) * ((bw + gap) * 0.5);
    let col = 0;
    for (let px = -D; px < D; px += bw + gap, col++) {
      g.fillStyle = tone(Math.abs(Math.sin(row * 1.7 + col * 2.3)));
      g.fillRect(px + shift, py, bw, bh);
    }
  }
  g.restore();
}

/** otto riquadri col rombo chiaro, e il basolato grigio davanti alla scala */
function motifTex() {
  const ppm = 46;
  const du = CELL * 4, dw = MOTIF_W1 - MOTIF_W0;
  const W = Math.round(du * ppm), H = Math.round(dw * ppm);
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const Xu = (u) => (u - MOTIF_U0) * ppm;
  const Yw = (w) => (MOTIF_W1 - w) * ppm;
  const red = (n) => `rgb(${150 + n * 55 | 0},${74 + n * 40 | 0},${50 + n * 20 | 0})`;
  const grey = (n) => `rgb(${108 + n * 42 | 0},${106 + n * 40 | 0},${98 + n * 34 | 0})`;
  const gy0 = Yw(MOTIF_SPLIT), gh = Yw(MOTIF_W0) - gy0;
  g.fillStyle = '#5e5c56'; g.fillRect(0, gy0, W, gh);
  paintHerring(g, 0, gy0, W, gh, grey);
  const border = 0.30 * ppm;
  for (let row = 0; row < 2; row++) {
    const wA = MOTIF_SPLIT + row * CELL, wB = wA + CELL;
    for (let col = 0; col < 4; col++) {
      const uA = MOTIF_U0 + col * CELL, uB = uA + CELL;
      const x = Xu(uA), y = Yw(wB), ww = Xu(uB) - x, hh = Yw(wA) - y;
      g.fillStyle = '#e4dcc8'; g.fillRect(x, y, ww, hh);
      paintHerring(g, x + border, y + border, ww - border * 2, hh - border * 2, red);
      const cx = x + ww / 2, cy = y + hh / 2, r = ww * 0.25;
      g.beginPath();
      g.moveTo(cx, cy - r); g.lineTo(cx + r * 0.72, cy - r * 0.15);
      g.lineTo(cx + r, cy); g.lineTo(cx + r * 0.72, cy + r * 0.15);
      g.lineTo(cx, cy + r); g.lineTo(cx - r * 0.72, cy + r * 0.15);
      g.lineTo(cx - r, cy); g.lineTo(cx - r * 0.72, cy - r * 0.15);
      g.closePath();
      g.fillStyle = '#efe6d4'; g.fill();
      g.lineWidth = 2.5; g.strokeStyle = 'rgba(110,100,86,0.65)'; g.stroke();
    }
  }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  t.flipY = true;
  return t;
}

function settTex() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = '#6a6760'; g.fillRect(0, 0, 256, 256);
  const s = 32;
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    const off = y % 2 ? s / 2 : 0;
    const n = Math.abs(Math.sin((x + 3) * 7.1 + y * 4.3));
    const v = 150 + n * 45;
    g.fillStyle = `rgb(${v},${v - 4},${v - 12})`;
    g.fillRect(x * s + off + 2, y * s + 2, s - 4, s - 4);
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

function meshFrom(pos, mat) {
  if (pos.length < 9) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
function q(pos, a, b, c, d) { pos.push(...a, ...b, ...c, ...a, ...c, ...d); }

function outwardOf(polys, x0, z0, x1, z1) {
  const L = Math.hypot(x1 - x0, z1 - z0);
  if (L < 0.15) return null;
  let nx = -(z1 - z0) / L, nz = (x1 - x0) / L;
  const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
  if (insideVe3(mx + nx * 0.45, mz + nz * 0.45)) { nx = -nx; nz = -nz; }
  if (insideVe3(mx + nx * 0.5, mz + nz * 0.5)) return null;
  return { L, nx, nz, mx, mz };
}

export function buildVe3Plaza(heightAt, polys) {
  ve3Polys = polys;
  if (!stairPlan) planVe3Stair(heightAt);
  const s = stairPlan;
  const group = new THREE.Group(); group.name = 'piazza-ve3';
  const T = VE3_TERRACE;
  const stone = lambert(0xe4ddd0);
  const stoneDk = lambert(0xcfc6b6);
  const iron = lambert(0x1c2220);
  const leaf = lambert(0x3c6a32);
  const leafDk = lambert(0x2a5228);
  const potC = lambert(0xc4623a);
  const potR = lambert(0xd4895a);
  const benchC = lambert(0xe7e2d6);

  // anello: pietra chiara, mattoni radiali, lastre, dente di sega
  {
    const geo = new THREE.PlaneGeometry(26, 26);
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
      map: ringTex(), transparent: true, alphaTest: 0.35, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    }));
    m.position.set(FX, T + 0.03, FZ);
    m.receiveShadow = true;
    group.add(m);
  }

  // dal satellite: basolato grigio contro la facciata, poi due file di quattro riquadri col rombo
  {
    const at = (u, w) => [
      FAX + Ux * u + NWx * w,
      FAZ + Uz * u + NWz * w,
    ];
    const u1 = MOTIF_U0 + CELL * 4;
    const p00 = at(MOTIF_U0, MOTIF_W0), p10 = at(u1, MOTIF_W0), p11 = at(u1, MOTIF_W1), p01 = at(MOTIF_U0, MOTIF_W1);
    const y = T + 0.045;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([
      p00[0], y, p00[1], p10[0], y, p10[1], p11[0], y, p11[1],
      p00[0], y, p00[1], p11[0], y, p11[1], p01[0], y, p01[1],
    ], 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute([
      0, 0, 1, 0, 1, 1,
      0, 0, 1, 1, 0, 1,
    ], 2));
    geo.computeVertexNormals();
    const mat = new THREE.MeshLambertMaterial({
      map: motifTex(), side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // muretto di contenimento dove il piano sta sopra la via, ringhiera a barre
  const wall = [], coping = [];
  const barList = [], postList = [], railList = [];
  const stairX = (x) => x > s.x0 - 0.4 && x < s.x1 + 0.4;
  for (const rings of polys) {
    const r = rings[0]; const n = r.length >> 1;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x0 = r[i * 2], z0 = r[i * 2 + 1], x1 = r[j * 2], z1 = r[j * 2 + 1];
      const e = outwardOf(polys, x0, z0, x1, z1);
      if (!e) continue;
      const drop = T - heightAt(e.mx + e.nx * 0.8, e.mz + e.nz * 0.8);
      if (drop < 0.55) continue;
      if (stairX(e.mx) && e.mz < s.zTop + 1.2 && e.nz < -0.15) continue;
      const seg = Math.max(1, Math.ceil(e.L / 3));
      for (let k = 0; k < seg; k++) {
        const ax = x0 + (x1 - x0) * k / seg, az = z0 + (z1 - z0) * k / seg;
        const bx = x0 + (x1 - x0) * (k + 1) / seg, bz = z0 + (z1 - z0) * (k + 1) / seg;
        const ox = e.nx * 0.34, oz = e.nz * 0.34;
        const ya = Math.min(T - 0.02, heightAt(ax + ox, az + oz) + 0.02);
        const yb = Math.min(T - 0.02, heightAt(bx + ox, bz + oz) + 0.02);
        const top = T + 0.02;
        q(wall,
          [ax, ya, az], [bx, yb, bz], [bx + ox, yb, bz + oz], [ax + ox, ya, az + oz]);
        q(wall,
          [ax, ya, az], [ax, top, az], [bx, top, bz], [bx, yb, bz]);
        q(wall,
          [ax + ox, ya, az + oz], [bx + ox, yb, bz + oz], [bx + ox, top, bz + oz], [ax + ox, top, az + oz]);
        q(coping,
          [ax - e.nx * 0.06, top, az - e.nz * 0.06], [bx - e.nx * 0.06, top, bz - e.nz * 0.06],
          [bx + ox, top + 0.1, bz + oz], [ax + ox, top + 0.1, az + oz]);
        // ringhiera sul ciglio, lato piazza
        const Lseg = Math.hypot(bx - ax, bz - az);
        const nb = Math.max(2, Math.round(Lseg / 0.13));
        const yaw = Math.atan2(-(bz - az), bx - ax);
        for (let b = 0; b <= nb; b++) {
          const t = b / nb;
          const x = ax + (bx - ax) * t, z = az + (bz - az) * t;
          (b % 10 === 0 ? postList : barList).push(x, top + 0.52, z, yaw);
        }
        railList.push((ax + bx) / 2, top + 0.98, (az + bz) / 2, yaw, Lseg);
        railList.push((ax + bx) / 2, top + 0.12, (az + bz) / 2, yaw, Lseg);
      }
    }
  }
  const wm = meshFrom(wall, stoneDk); if (wm) group.add(wm);
  const cm = meshFrom(coping, stone); if (cm) group.add(cm);

  // scalinata: ogni alzata è un gradino; sotto, il riempimento è arretrato così la fronte resta leggibile
  const steps = [];
  const rise = (s.yTop - s.yBot) / s.n;
  const solid = (x0, x1, y0, y1, z0, z1) => {
    if (y1 - y0 < 0.02 || x1 - x0 < 0.02 || Math.abs(z1 - z0) < 0.02) return;
    q(steps, [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0]);
    q(steps, [x0, y0, z1], [x0, y1, z1], [x1, y1, z1], [x1, y0, z1]);
    q(steps, [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]);
    q(steps, [x0, y0, z1], [x1, y0, z1], [x1, y0, z0], [x0, y0, z0]);
    q(steps, [x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1]);
    q(steps, [x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0]);
  };
  const xL = s.x0 + 0.32, xR = s.x1 - 0.32;
  for (let i = 0; i < s.n; i++) {
    const y1 = s.yTop - i * rise, y0 = y1 - rise;
    const zBack = s.zTop - i * s.tread, zFront = zBack - s.tread;
    const zg = heightAt(s.cx, (zBack + zFront) / 2) - 0.06;
    solid(xL, xR, y0, y1, zFront, zBack);
    solid(xL, xR, Math.min(zg, y0), y0, zFront, zBack - 0.05);
    solid(s.x0, s.x0 + 0.3, Math.min(zg, y0), y1 + 0.32, zFront, zBack);
    solid(s.x1 - 0.3, s.x1, Math.min(zg, y0), y1 + 0.32, zFront, zBack);
  }
  const sm = meshFrom(steps, stone); if (sm) group.add(sm);
  // corrimano della scala, segue la pendenza. Le barre stanno nel corrente verticale.
  for (const x of [s.x0 + 0.15, s.x1 - 0.15]) {
    const y0 = s.yTop + 0.92, y1 = s.yBot + 0.92;
    const z0 = s.zTop, z1 = s.zBot;
    const nb = Math.max(2, Math.round(Math.abs(z1 - z0) / 0.14));
    for (let b = 0; b <= nb; b++) {
      const t = b / nb;
      (b % 8 === 0 ? postList : barList).push(x, y0 + (y1 - y0) * t - 0.45, z0 + (z1 - z0) * t, 0);
    }
  }
  // il corrimano in pendenza è un box ruotato, non il corrente orizzontale
  for (const x of [s.x0 + 0.15, s.x1 - 0.15]) {
    const y0 = s.yTop + 0.95, y1 = s.yBot + 0.95, z0 = s.zTop, z1 = s.zBot;
    const dy = y1 - y0, dz = z1 - z0, Lh = Math.hypot(dy, dz);
    const g = new THREE.BoxGeometry(0.045, 0.04, Lh);
    g.rotateX(-Math.atan2(dy, dz));
    g.translate(x, (y0 + y1) / 2, (z0 + z1) / 2);
    const m = new THREE.Mesh(g, iron); m.castShadow = true; group.add(m);
  }

  const up = new THREE.Vector3(0, 1, 0);
  const inst = (geo, mat, list, stride, each) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, mat, list.length / stride);
    const M = new THREE.Matrix4(), qn = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < list.length; i += stride) {
      each(list, i, p, qn, sc);
      M.compose(p, qn, sc); im.setMatrixAt(i / stride, M);
    }
    im.castShadow = im.receiveShadow = true;
    group.add(im);
  };
  inst(new THREE.BoxGeometry(0.016, 1.02, 0.016), iron, barList, 4, (a, i, p, qn) => {
    p.set(a[i], a[i + 1], a[i + 2]); qn.setFromAxisAngle(up, a[i + 3]);
  });
  inst(new THREE.BoxGeometry(0.05, 1.18, 0.05), iron, postList, 4, (a, i, p, qn) => {
    p.set(a[i], a[i + 1], a[i + 2]); qn.setFromAxisAngle(up, a[i + 3]);
  });
  inst(new THREE.BoxGeometry(1, 0.028, 0.022), iron, railList, 5, (a, i, p, qn, sc) => {
    p.set(a[i], a[i + 1], a[i + 2]); qn.setFromAxisAngle(up, a[i + 3]); sc.set(a[i + 4], 1, 1);
  });

  // sanpietrini della via inferiore, a nord del terrazzo
  {
    const pos = [], uv = [];
    const buildings = [[-43, -20, -74, -54], [-17, 20, -85, -62], [-60, -40, -68, -49], [30, 70, -74, -51]];
    const inB = (x, z) => buildings.some(([x0, x1, z0, z1]) => x > x0 && x < x1 && z > z0 && z < z1);
    for (let x = -48; x < 34; x += 1.7) for (let z = -72; z < -46.2; z += 1.7) {
      const cx = x + 0.85, cz = z + 0.85;
      if (insideVe3(cx, cz) || inB(cx, cz)) continue;
      if (cx > s.x0 && cx < s.x1 && cz < s.zTop && cz > s.zBot - 0.4) continue;
      const y = heightAt(cx, cz) + 0.23;
      const x0 = x, x1 = x + 1.7, z0 = z, z1 = z + 1.7;
      pos.push(x0, y, z0, x1, y, z0, x1, y, z1, x0, y, z0, x1, y, z1, x0, y, z1);
      uv.push(x0 / 1.3, z0 / 1.3, x1 / 1.3, z0 / 1.3, x1 / 1.3, z1 / 1.3, x0 / 1.3, z0 / 1.3, x1 / 1.3, z1 / 1.3, x0 / 1.3, z1 / 1.3);
    }
    if (pos.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      geo.computeVertexNormals();
      const mat = new THREE.MeshLambertMaterial({ map: settTex(), polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
      const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; m.renderOrder = 2;
      group.add(m);
    }
  }

  // giardino a semicerchio a nord della fontana: il diametro guarda la vasca, l'arco va verso il mare
  const GZ = FZ - 7.7, GR = 9.0;
  {
    const grass = new THREE.Mesh(
      new THREE.CircleGeometry(GR, 36, 0, Math.PI),
      lambert(0x6d8a42),
    );
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(FX, T + 0.025, GZ);
    grass.receiveShadow = true;
    group.add(grass);
    const arc = (r, hgt, mat, step) => {
      const n = Math.max(6, Math.round((Math.PI * r) / step));
      for (let i = 0; i < n; i++) {
        const a0 = -Math.PI / 2 + (i / n) * Math.PI;
        const a1 = -Math.PI / 2 + ((i + 1) / n) * Math.PI;
        const a = (a0 + a1) / 2;
        const box = new THREE.Mesh(new THREE.BoxGeometry(step * 0.96, hgt, 0.58), mat);
        box.position.set(FX + Math.sin(a) * r, T + hgt * 0.5, GZ - Math.cos(a) * r);
        box.rotation.y = -a;
        box.castShadow = true;
        group.add(box);
      }
    };
    arc(3.15, 0.58, leafDk, 0.72);
    arc(5.85, 0.66, leaf, 0.78);
    arc(8.45, 0.72, leafDk, 0.82);
    for (const a of [-0.85, -0.28, 0.28, 0.85]) {
      const len = 5.2;
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, len), leaf);
      const mx = FX + Math.sin(a) * (3.15 + len / 2);
      const mz = GZ - Math.cos(a) * (3.15 + len / 2);
      box.position.set(mx, T + 0.26, mz);
      box.rotation.y = -a;
      box.castShadow = true;
      group.add(box);
    }
  }
  const bush = new THREE.IcosahedronGeometry(1, 1);
  const bushes = [];
  for (const [r, n, sc] of [[8.45, 7, 0.72], [5.85, 5, 0.55]]) {
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + ((i + 0.5) / n) * Math.PI;
      bushes.push([FX + Math.sin(a) * r, GZ - Math.cos(a) * r, sc]);
    }
  }
  bushes.push([FX - GR + 0.2, GZ + 0.35, 0.85], [FX + GR - 0.2, GZ + 0.35, 0.8], [FX - 4.2, GZ - 1.4, 0.62]);
  for (const [x, z, r] of bushes) {
    const m = new THREE.Mesh(bush, leaf);
    m.scale.setScalar(r); m.position.set(x, T + r * 0.7, z); m.castShadow = true; group.add(m);
  }
  // palma sul lato ovest del verde, come si vede arrivando da sud
  {
    const x = -24.2, z = -36.2, y = T;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 3.2, 7), lambert(0x6a5438));
    trunk.position.set(x, y + 1.7, z); trunk.castShadow = true; group.add(trunk);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const fr = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 2.1), leaf);
      fr.position.set(x + Math.sin(a) * 0.85, y + 3.15, z + Math.cos(a) * 0.85);
      fr.rotation.set(-0.5, a, 0);
      fr.castShadow = true; group.add(fr);
    }
  }

  // panchine chiare in pietra, senza schienale di legno
  const seat = new THREE.BoxGeometry(1.85, 0.1, 0.48), leg = new THREE.BoxGeometry(0.16, 0.38, 0.4);
  const benchYaw = Math.atan2(NWx, NWz);
  for (const [x, z, yaw] of [
    [FX - 6.6, FZ - 6.9, 0],
    [FX + 6.6, FZ - 6.9, 0],
    [5.9, -21.9, benchYaw],
    [-16.4, -18.2, benchYaw],
  ]) {
    const y = T + 0.02;
    const qn = new THREE.Quaternion().setFromAxisAngle(up, yaw);
    for (const [geo, mat, dy, lx, lz] of [[seat, benchC, 0.42, 0, 0], [leg, stoneDk, 0.2, -0.7, 0], [leg, stoneDk, 0.2, 0.7, 0]]) {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(lx, dy, lz).applyQuaternion(qn);
      m.position.add(new THREE.Vector3(x, y, z));
      m.quaternion.copy(qn); m.castShadow = true; group.add(m);
    }
  }

  // lampioni a due globi, come sul lato ovest della piazza
  const globeMat = new THREE.MeshLambertMaterial({ color: 0xfff4dc, emissive: 0xffe0a8, emissiveIntensity: 0.18 });
  const metal = lambert(0x2a2e30);
  for (const [x, z, yaw] of [[-33.5, -26.5, 0.55], [-16.2, -16.1, benchYaw], [6.8, -20.3, benchYaw]]) {
    const y = T;
    const qn = new THREE.Quaternion().setFromAxisAngle(up, yaw);
    const put = (geo, mat, px, py, pz) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, py, pz).applyQuaternion(qn);
      m.position.add(new THREE.Vector3(x, y, z));
      m.quaternion.copy(qn); m.castShadow = true; group.add(m);
    };
    put(new THREE.CylinderGeometry(0.06, 0.09, 4.6, 8), metal, 0, 2.3, 0);
    put(new THREE.BoxGeometry(1.5, 0.05, 0.05), metal, 0, 4.45, 0);
    for (const s of [-0.72, 0.72]) {
      put(new THREE.SphereGeometry(0.22, 12, 10), globeMat, s, 4.55, 0);
    }
  }

  // vasi di cotto davanti al portico della via inferiore (i due palazzi a nord)
  const pots = [];
  const addEdgePots = (ax, az, bx, bz, step) => {
    const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz);
    let nx = -(dz) / L, nz = dx / L;
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    if ((FX - mx) * nx + (FZ - mz) * nz < 0) { nx = -nx; nz = -nz; }
    const n = Math.floor(L / step);
    for (let i = 1; i < n; i++) {
      const t = i / n;
      pots.push([ax + dx * t + nx * 1.25, az + dz * t + nz * 1.25]);
    }
  };
  addEdgePots(-21.7, -61.4, -37.6, -56.0, 1.65);
  addEdgePots(18.9, -74.6, -12.4, -64.2, 2.4);
  const potFlat = pots.flat();
  const potGeo = new THREE.CylinderGeometry(0.32, 0.22, 0.4, 10);
  const rimGeo = new THREE.CylinderGeometry(0.36, 0.34, 0.08, 10);
  const frond = new THREE.BoxGeometry(0.06, 0.015, 0.7);
  inst(potGeo, potC, potFlat, 2, (a, i, p) => { p.set(a[i], heightAt(a[i], a[i + 1]) + 0.42, a[i + 1]); });
  inst(rimGeo, potR, potFlat, 2, (a, i, p) => { p.set(a[i], heightAt(a[i], a[i + 1]) + 0.64, a[i + 1]); });
  const fronds = [];
  for (const [x, z] of pots) for (let i = 0; i < 7; i++) fronds.push(x, z, (i / 7) * Math.PI * 2);
  const tilt = new THREE.Euler(-0.7, 0, 0);
  inst(frond, leaf, fronds, 3, (a, i, p, qn) => {
    const x = a[i], z = a[i + 1], ang = a[i + 2];
    p.set(x + Math.sin(ang) * 0.22, heightAt(x, z) + 0.88, z + Math.cos(ang) * 0.22);
    tilt.y = ang; qn.setFromEuler(tilt);
  });

  group.userData.night = (n) => { globeMat.emissiveIntensity = 0.15 + n * 1.6; };
  return group;
}
