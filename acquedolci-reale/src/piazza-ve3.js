/**
 * Piazza Vittorio Emanuele III. Pianta misurata sulla foto drone quasi nadirale:
 * asfalto, griglia di bande chiare, quattro croci ornate (due a sinistra e due a
 * destra della fontana, allineate), anello tondo, prato a semicerchio verso il mare.
 */
import * as THREE from 'three';

/** piano del lastricato, metri sul livello del mare (MDT alla fontana + il rialzo delle vie) */
export const VE3_TERRACE = 32.95;
const FX = -8.54, FZ = -31.15;

/**
 * Facciata nord del Municipio (pianta DBTR). u corre lungo il fronte verso ovest,
 * w verso la fontana e il mare.
 */
const FAX = 0.275, FAZ = -8.445;
const NWx = -0.2855, NWz = -0.9584;
const Ux = -0.9584, Uz = 0.2855;
/** prato: diametro verso la fontana, arco verso il mare */
const LAWN_U = 2, LAWN_W = 29.2, LAWN_R = 11.4;
let stairPlan = null;

function uwOf(x, z) {
  const dx = x - FAX, dz = z - FAZ;
  return [dx * Ux + dz * Uz, dx * NWx + dz * NWz];
}
function xzOf(u, w) {
  return [FAX + Ux * u + NWx * w, FAZ + Uz * u + NWz * w];
}

/** il piano copre asfalto, spina, fontana e prato, non tutta la maglia OSM */
export function ve3Keep(x, z) {
  const [u, w] = uwOf(x, z);
  if (u > -28 && u < 30 && w > 0.2 && w < 30.4) return true;
  const du = u - LAWN_U, dw = w - LAWN_W;
  return dw >= -0.5 && du * du + dw * dw <= LAWN_R * LAWN_R;
}

/** chioma sul lastricato, sull'asfalto della piazza o in mezzo al prato */
export function ve3TreeClash(x, z) {
  const [u, w] = uwOf(x, z);
  if (u > -24 && u < 28 && w > 2 && w < 32) return true;
  const du = u - LAWN_U, dw = w - LAWN_W;
  return dw > -1 && du * du + dw * dw < LAWN_R * LAWN_R;
}

export function planVe3Stair() {
  stairPlan = null;
  return null;
}

/** fuori dalla pianta delle foto il lastricato piatto non si stende */
export function ve3StairHole(x, z) {
  return !ve3Keep(x, z);
}

/** quota di cammino: sul disegno della piazza si sta sul piano */
export function ve3Floor(x, z, terrainY) {
  if (ve3Keep(x, z) && Math.hypot(x - FX, z - FZ) > 3.15) return Math.max(terrainY, VE3_TERRACE);
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

/** anello tondo: fascia di mattoni e bordo chiaro, senza dente di sega */
function ringTex() {
  const S = 1024, world = 18, mpp = world / S;
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const g = cv.getContext('2d');
  const cx = S / 2, cy = S / 2, px = (m) => m / mpp;
  g.beginPath(); g.arc(cx, cy, px(4.7), 0, Math.PI * 2); g.fillStyle = '#d9d2c4'; g.fill();
  g.beginPath(); g.arc(cx, cy, px(4.55), 0, Math.PI * 2); g.arc(cx, cy, px(3.7), 0, Math.PI * 2, true);
  g.fillStyle = '#b85a3c'; g.fill();
  for (let i = 0; i < 48; i++) {
    const a0 = (i / 48) * Math.PI * 2, a1 = ((i + 0.86) / 48) * Math.PI * 2;
    const n = Math.abs(Math.sin(i * 2.1));
    g.fillStyle = `rgb(${168 + n * 40},${82 + n * 28},${58 + n * 16})`;
    g.beginPath();
    g.moveTo(cx + Math.sin(a0) * px(3.75), cy + Math.cos(a0) * px(3.75));
    g.lineTo(cx + Math.sin(a0) * px(4.5), cy + Math.cos(a0) * px(4.5));
    g.lineTo(cx + Math.sin(a1) * px(4.5), cy + Math.cos(a1) * px(4.5));
    g.lineTo(cx + Math.sin(a1) * px(3.75), cy + Math.cos(a1) * px(3.75));
    g.fill();
  }
  g.beginPath(); g.arc(cx, cy, px(3.72), 0, Math.PI * 2); g.arc(cx, cy, px(3.45), 0, Math.PI * 2, true);
  g.fillStyle = '#f3eee4'; g.fill();
  g.globalCompositeOperation = 'destination-out';
  g.beginPath(); g.arc(cx, cy, px(3.4), 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
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

/**
 * Quattro croci misurate sulla foto nadirale (fontana a px 591,556, 0,089 m/px).
 * u lungo la facciata verso ovest, w verso il mare. Allineate a w = 17,3 m.
 */
const MOTIFS = [
  [-21.3, 17.3],
  [-10.6, 17.3],
  [16.1, 17.3],
  [26.4, 17.3],
];

function hash(i) {
  const s = Math.sin(i * 127.1) * 43758.5453;
  return s - Math.floor(s);
}

/**
 * Bande chiare della griglia e quattro motivi a rombo tessellati.
 * Canvas trasparente: il fondo rosso mattoni viene dalla mesh ve3 di streets.js.
 *
 * Bande in u: pitch 5.35 m, offset -23.975 → i quattro motivi cadono al centro delle celle.
 * Bande in w: pitch 4.6 m, partendo da 15.0 → fascia 15–19.6 è la riga dei motivi.
 *
 * I motivi sono "pareti di diamanti": rombi individuali (hs ≈ 0.50 m) tessellati in una
 * regione ellissoidale (|Δu|/RU + |Δw|/RW ≤ 0.93) con alternanza chiaro/scuro su scacchiera.
 */
function paveTex() {
  const ppm = 36;
  const u0 = -27, u1 = 29, w0 = 12.0, w1 = 27.5;
  const W = Math.ceil((u1 - u0) * ppm), H = Math.ceil((w1 - w0) * ppm);
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const Xu = (u) => (u - u0) * ppm;
  const Yw = (w) => (w - w0) * ppm;
  const bpx = Math.ceil(0.50 * ppm);

  // bande crema — cornici dei pannelli visibili nel drone
  g.fillStyle = '#d4cec1';
  g.fillRect(0, Yw(12.2), W, bpx);                            // bordo nord vicino all'asfalto
  for (let u = -23.975; u < u1; u += 5.35) {                  // bande verticali centrate nelle celle
    g.fillRect(Math.round(Xu(u)) - Math.floor(bpx / 2), 0, bpx, H);
  }
  for (let w = 15.0; w < w1; w += 4.6) {                      // bande orizzontali
    g.fillRect(0, Math.round(Yw(w)) - Math.floor(bpx / 2), W, bpx);
  }

  // quattro motivi a rombo alle posizioni misurate sul drone
  const FU = 1.97, FW = 24.28, FR2 = 5.15 * 5.15;
  const step = 1.0, hs = 0.50;
  const RU = 4.5, RW = 2.7;
  for (const [cu, cw] of MOTIFS) {
    for (let dw = -RW; dw <= RW + 1e-9; dw += step) {
      for (let du = -RU; du <= RU + 1e-9; du += step) {
        if (Math.abs(du) / RU + Math.abs(dw) / RW > 0.93) continue;
        const u = cu + du, w = cw + dw;
        const dfx = u - FU, dfz = w - FW;
        if (dfx * dfx + dfz * dfz < FR2) continue;
        const k = (Math.round(du / step) + Math.round(dw / step)) & 1;
        g.fillStyle = k ? '#e4dccf' : '#cec5b6';
        g.beginPath();
        g.moveTo(Xu(u),      Yw(w - hs));
        g.lineTo(Xu(u + hs), Yw(w));
        g.lineTo(Xu(u),      Yw(w + hs));
        g.lineTo(Xu(u - hs), Yw(w));
        g.closePath();
        g.fill();
      }
    }
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return { tex, u0, u1, w0, w1 };
}

function dryGrassTex() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 512;
  const g = cv.getContext('2d');
  g.fillStyle = '#cbb67a'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 90; i++) {
    const n = hash(i * 3.1);
    g.fillStyle = n > 0.5 ? '#b6a15e' : '#d8c48a';
    g.beginPath();
    g.ellipse(hash(i + 1) * 512, hash(i + 2) * 512, 18 + n * 70, 10 + hash(i + 4) * 28, n * 3, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < 2500; i++) {
    const n = hash(i * 1.7 + 9);
    g.strokeStyle = `rgb(${120 + n * 70},${130 + n * 50},${50 + n * 30})`;
    g.lineWidth = 1;
    const x = hash(i + 20) * 512, y = hash(i + 40) * 512;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (n - 0.5) * 8, y - 4 - n * 7); g.stroke();
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function buildVe3Plaza(heightAt, polys) {
  ve3Polys = polys;
  planVe3Stair(heightAt);
  const group = new THREE.Group(); group.name = 'piazza-ve3';
  const T = VE3_TERRACE;
  const stoneDk = lambert(0xcfc6b6);
  const leaf = lambert(0x4f7a38);
  const potC = lambert(0xc4623a);
  const potR = lambert(0xd4895a);
  const benchC = lambert(0xe7e2d6);
  const yPave = T + 0.04;

  const quad = (u0, w0, u1, w1, y, mat) => {
    const a = xzOf(u0, w0), b = xzOf(u1, w0), c = xzOf(u1, w1), d = xzOf(u0, w1);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([
      a[0], y, a[1], b[0], y, b[1], c[0], y, c[1],
      a[0], y, a[1], c[0], y, c[1], d[0], y, d[1],
    ], 3));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true;
    group.add(m);
  };

  // anello circolare della vasca
  {
    const geo = new THREE.PlaneGeometry(18, 18);
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
      map: ringTex(), transparent: true, alphaTest: 0.35, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    }));
    m.position.set(FX, T + 0.05, FZ);
    m.receiveShadow = true;
    group.add(m);
  }

  // base solida rossa: copre irregolarità del bordo del poligono OSM (bordi frastagliati)
  quad(-29, -1, 31, 34, T + 0.015, lambert(0x8a4a3e));

  // asfalto fra la facciata e il lastricato: nelle foto è una strada grigia larga, non spina
  quad(-28, 0.35, 30, 12.15, yPave, lambert(0x86888c));

  // bande della griglia e quattro motivi a rombo (trasparente: fondo mattoni da streets.js)
  {
    const { tex, u0, u1, w0, w1 } = paveTex();
    const A = xzOf(u0, w0), B = xzOf(u1, w0), C = xzOf(u1, w1), D = xzOf(u0, w1);
    const y = yPave + 0.04;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([
      A[0], y, A[1], B[0], y, B[1], C[0], y, C[1],
      A[0], y, A[1], C[0], y, C[1], D[0], y, D[1],
    ], 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
      map: tex, transparent: true, alphaTest: 0.05, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    }));
    m.receiveShadow = true;
    group.add(m);
  }

  // prato a semicerchio, erba secca, bordo morbido. Niente ringhiera.
  const grass = dryGrassTex();
  const grassMat = new THREE.MeshLambertMaterial({ map: grass, side: THREE.DoubleSide });
  grassMat.polygonOffset = true; grassMat.polygonOffsetFactor = -2; grassMat.polygonOffsetUnits = -2;
  {
    const y = yPave + 0.035;
    const [cx, cz] = xzOf(LAWN_U, LAWN_W);
    const N = 96;
    const pos = [], uv = [];
    for (let i = 0; i < N; i++) {
      const a0 = -Math.PI / 2 + (i / N) * Math.PI;
      const a1 = -Math.PI / 2 + ((i + 1) / N) * Math.PI;
      const p0 = xzOf(LAWN_U + Math.sin(a0) * LAWN_R, LAWN_W + Math.cos(a0) * LAWN_R);
      const p1 = xzOf(LAWN_U + Math.sin(a1) * LAWN_R, LAWN_W + Math.cos(a1) * LAWN_R);
      pos.push(cx, y, cz, p0[0], y, p0[1], p1[0], y, p1[1]);
      const u0 = 0.5, v0 = 0.15;
      uv.push(u0, v0, 0.5 + Math.sin(a0) * 0.45, 0.15 + Math.cos(a0) * 0.7, 0.5 + Math.sin(a1) * 0.45, 0.15 + Math.cos(a1) * 0.7);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, grassMat);
    m.receiveShadow = true;
    group.add(m);
    const apron = [], auv = [];
    for (let i = 0; i < N; i++) {
      const a0 = -Math.PI / 2 + (i / N) * Math.PI;
      const a1 = -Math.PI / 2 + ((i + 1) / N) * Math.PI;
      const inn = (a) => xzOf(LAWN_U + Math.sin(a) * LAWN_R, LAWN_W + Math.cos(a) * LAWN_R);
      const out = (a) => xzOf(LAWN_U + Math.sin(a) * (LAWN_R + 2.6), LAWN_W + Math.cos(a) * (LAWN_R + 2.6));
      const i0 = inn(a0), i1 = inn(a1), o0 = out(a0), o1 = out(a1);
      const y0 = Math.min(T, heightAt(o0[0], o0[1]) + 0.12);
      const y1 = Math.min(T, heightAt(o1[0], o1[1]) + 0.12);
      apron.push(
        i0[0], y, i0[1], o0[0], y0, o0[1], o1[0], y1, o1[1],
        i0[0], y, i0[1], o1[0], y1, o1[1], i1[0], y, i1[1],
      );
      auv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
    }
    const ag = new THREE.BufferGeometry();
    ag.setAttribute('position', new THREE.Float32BufferAttribute(apron, 3));
    ag.setAttribute('uv', new THREE.Float32BufferAttribute(auv, 2));
    ag.computeVertexNormals();
    const am = new THREE.Mesh(ag, grassMat);
    am.receiveShadow = true;
    group.add(am);
  }

  // cespugli sferici sul bordo del prato, come nel drone
  const bush = new THREE.SphereGeometry(1, 18, 14);
  const shrubs = [];
  for (let i = 0; i < 9; i++) {
    const a = -Math.PI / 2 + ((i + 0.35) / 9) * Math.PI;
    const r = LAWN_R - 0.35;
    shrubs.push([LAWN_U + Math.sin(a) * r, LAWN_W + Math.cos(a) * r, 0.42 + (i % 3) * 0.16]);
  }
  shrubs.push([LAWN_U - 2.4, LAWN_W + 3.6, 0.55], [LAWN_U + 3.1, LAWN_W + 5.2, 0.48], [LAWN_U + 0.4, LAWN_W + 7.8, 0.7], [LAWN_U - 5.2, LAWN_W + 6.4, 0.4]);
  const bushCols = [0x6d7a3e, 0x8a8448, 0x5e6a38, 0x7d8a4a];
  shrubs.forEach(([u, w, sc], i) => {
    const [x, z] = xzOf(u, w);
    const m = new THREE.Mesh(bush, lambert(bushCols[i % bushCols.length]));
    m.scale.set(sc, sc * 0.82, sc);
    m.position.set(x, T + sc * 0.7, z);
    m.castShadow = true;
    group.add(m);
  });

  const up = new THREE.Vector3(0, 1, 0);
  // +X locale lungo la facciata (verso ovest)
  const benchYaw = Math.atan2(NWx, NWz);
  const seat = new THREE.BoxGeometry(1.7, 0.1, 0.46), leg = new THREE.BoxGeometry(0.16, 0.36, 0.38);
  for (const [u, w] of [[LAWN_U - 8.4, LAWN_W - 1.1], [LAWN_U + 8.6, LAWN_W - 1.1]]) {
    const [x, z] = xzOf(u, w);
    const qn = new THREE.Quaternion().setFromAxisAngle(up, benchYaw);
    for (const [geo, mat, dy, lx, lz] of [[seat, benchC, 0.4, 0, 0], [leg, stoneDk, 0.18, -0.62, 0], [leg, stoneDk, 0.18, 0.62, 0]]) {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(lx, dy, lz).applyQuaternion(qn);
      m.position.add(new THREE.Vector3(x, T, z));
      m.quaternion.copy(qn);
      m.castShadow = true;
      group.add(m);
    }
  }

  const globeMat = new THREE.MeshLambertMaterial({ color: 0xfff4dc, emissive: 0xffe0a8, emissiveIntensity: 0.18 });
  const metal = lambert(0x2a2e30);
  for (const [u, w] of [[-24, 8.2], [26, 8.2], [-20, 26.5]]) {
    const [x, z] = xzOf(u, w);
    const qn = new THREE.Quaternion().setFromAxisAngle(up, benchYaw);
    const put = (geo, mat, px, py, pz) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, py, pz).applyQuaternion(qn);
      m.position.add(new THREE.Vector3(x, T, z));
      m.quaternion.copy(qn);
      m.castShadow = true;
      group.add(m);
    };
    put(new THREE.CylinderGeometry(0.06, 0.09, 4.2, 8), metal, 0, 2.1, 0);
    put(new THREE.BoxGeometry(1.35, 0.05, 0.05), metal, 0, 4.15, 0);
    for (const s of [-0.62, 0.62]) put(new THREE.SphereGeometry(0.2, 12, 10), globeMat, s, 4.25, 0);
  }

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
