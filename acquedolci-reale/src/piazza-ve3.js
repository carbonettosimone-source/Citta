/**
 * Piazza Vittorio Emanuele III. La pianta è quella delle foto drone: asfalto fra il
 * Municipio e il lastricato, sei rombi chiari grandi sulla spina rossa, anello tondo
 * della fontana, prato a semicerchio verso il mare. Niente ringhiere dove il drone
 * non ne mostra, niente dente di sega, niente griglia di riquadri.
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

  // asfalto fra la facciata e il lastricato: nelle foto è una strada grigia larga, non spina
  quad(-28, 0.35, 30, 12.15, yPave, lambert(0x86888c));

  // sei motivi grandi, ognuno una griglia di mattonelle chiare a rombo (come nel drone),
  // non una losanga piena. Tre fra la strada e la vasca, tre più avanti: il centrale
  // si ferma prima dell'anello.
  {
    const ppm = 36;
    const u0 = -26, u1 = 28, w0 = 12.2, w1 = 27.2;
    const W = Math.ceil((u1 - u0) * ppm), H = Math.ceil((w1 - w0) * ppm);
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    const Xu = (u) => (u - u0) * ppm, Yw = (w) => (w - w0) * ppm;
    const panels = [
      [-13, 14.55, 6.05, 2.15],
      [2, 14.55, 6.05, 2.15],
      [17, 14.55, 6.05, 2.15],
      [-13, 18.85, 5.5, 1.85],
      [2, 18.35, 3.6, 1.35],
      [17, 18.85, 5.5, 1.85],
    ];
    const step = 1.42, hs = 0.7;
    for (const [cu, cw, ru, rw] of panels) {
      for (let w = cw - rw; w <= cw + rw + 1e-6; w += step) {
        for (let u = cu - ru; u <= cu + ru + 1e-6; u += step) {
          if (Math.abs(u - cu) / ru + Math.abs(w - cw) / rw > 0.94) continue;
          const du = u - 1.97, dw = w - 24.28;
          if (du * du + dw * dw < 5.15 * 5.15) continue;
          const n = ((Math.round(u / step) + Math.round(w / step)) & 1) ? 18 : 0;
          g.fillStyle = `rgb(${236 + n},${228 + n},${214 + n})`;
          g.beginPath();
          g.moveTo(Xu(u), Yw(w - hs));
          g.lineTo(Xu(u + hs * 0.92), Yw(w));
          g.lineTo(Xu(u), Yw(w + hs));
          g.lineTo(Xu(u - hs * 0.92), Yw(w));
          g.fill();
        }
      }
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    const A = xzOf(u0, w0), B = xzOf(u1, w0), C = xzOf(u1, w1), D = xzOf(u0, w1);
    const y = yPave + 0.025;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([
      A[0], y, A[1], B[0], y, B[1], C[0], y, C[1],
      A[0], y, A[1], C[0], y, C[1], D[0], y, D[1],
    ], 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
      map: tex, transparent: true, alphaTest: 0.2, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
    }));
    m.receiveShadow = true;
    group.add(m);
  }

  // prato a semicerchio verso il mare, erba secca come nel drone
  {
    const pos = [];
    const y = yPave;
    const [cx, cz] = xzOf(LAWN_U, LAWN_W);
    const N = 36;
    for (let i = 0; i < N; i++) {
      const a0 = -Math.PI / 2 + (i / N) * Math.PI;
      const a1 = -Math.PI / 2 + ((i + 1) / N) * Math.PI;
      const p0 = xzOf(LAWN_U + Math.sin(a0) * LAWN_R, LAWN_W + Math.cos(a0) * LAWN_R);
      const p1 = xzOf(LAWN_U + Math.sin(a1) * LAWN_R, LAWN_W + Math.cos(a1) * LAWN_R);
      pos.push(cx, y, cz, p0[0], y, p0[1], p1[0], y, p1[1]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, lambert(0xc2b06a));
    m.receiveShadow = true;
    group.add(m);
    // scivolo d'erba sul ciglio verso la via inferiore: niente muro, niente ringhiera
    const apron = [];
    for (let i = 0; i < N; i++) {
      const a0 = -Math.PI / 2 + (i / N) * Math.PI;
      const a1 = -Math.PI / 2 + ((i + 1) / N) * Math.PI;
      const inn = (a) => xzOf(LAWN_U + Math.sin(a) * LAWN_R, LAWN_W + Math.cos(a) * LAWN_R);
      const out = (a) => xzOf(LAWN_U + Math.sin(a) * (LAWN_R + 2.4), LAWN_W + Math.cos(a) * (LAWN_R + 2.4));
      const i0 = inn(a0), i1 = inn(a1), o0 = out(a0), o1 = out(a1);
      const y0 = Math.min(T, heightAt(o0[0], o0[1]) + 0.18);
      const y1 = Math.min(T, heightAt(o1[0], o1[1]) + 0.18);
      apron.push(
        i0[0], y, i0[1], o0[0], y0, o0[1], o1[0], y1, o1[1],
        i0[0], y, i0[1], o1[0], y1, o1[1], i1[0], y, i1[1],
      );
    }
    const ag = new THREE.BufferGeometry();
    ag.setAttribute('position', new THREE.Float32BufferAttribute(apron, 3));
    ag.computeVertexNormals();
    const am = new THREE.Mesh(ag, lambert(0xb7a45e));
    am.receiveShadow = true;
    group.add(am);
  }

  // cespugli radi sul prato, come nel drone: non una siepe lungo l'arco
  const bush = new THREE.IcosahedronGeometry(1, 1);
  const shrubs = [
    [LAWN_U - 6.2, LAWN_W + 2.4, 0.55],
    [LAWN_U - 2.1, LAWN_W + 5.6, 0.7],
    [LAWN_U + 3.4, LAWN_W + 4.2, 0.48],
    [LAWN_U + 7.1, LAWN_W + 1.8, 0.6],
    [LAWN_U + 0.6, LAWN_W + 8.6, 0.85],
    [LAWN_U - 4.4, LAWN_W + 8.0, 0.42],
    [LAWN_U + 5.2, LAWN_W + 7.4, 0.5],
  ];
  for (const [u, w, sc] of shrubs) {
    const [x, z] = xzOf(u, w);
    const m = new THREE.Mesh(bush, leaf);
    m.scale.set(sc, sc * 0.65, sc);
    m.position.set(x, T + sc * 0.4, z);
    m.castShadow = true;
    group.add(m);
  }

  const up = new THREE.Vector3(0, 1, 0);
  // +X locale lungo la facciata (verso ovest)
  const benchYaw = Math.atan2(NWx, NWz);
  const seat = new THREE.BoxGeometry(1.7, 0.1, 0.46), leg = new THREE.BoxGeometry(0.16, 0.36, 0.38);
  for (const [u, w] of [[-24, 16.5], [28, 16.5], [LAWN_U - 9.5, LAWN_W - 0.8], [LAWN_U + 9.5, LAWN_W - 0.8]]) {
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
