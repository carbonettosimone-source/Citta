import * as THREE from 'three';
import { ORIGIN, metersPerDegLon } from './geo.js';
import { getJSON, getArrayBuffer } from './data/dataSource.js';

const METERS_PER_DEG_LAT = 111320;

/** @type {Float32Array|null} */
let heights = null;
/** @type {object|null} */
let meta = null;
let originElev = 0;
let ready = false;

export function isTerrainReady() {
  return ready;
}

export function getTerrainMeta() {
  return meta;
}

export function getOriginElev() {
  return originElev;
}

/**
 * Carica heightmap Terrarium. `demUrl` es. "/data/dem/meta.json".
 * Y locale = elev_assoluta - elev_origine.
 */
export async function loadTerrain(demMetaUrl = '/data/dem/meta.json') {
  const m = await getJSON(demMetaUrl);
  const base = demMetaUrl.replace(/\/[^/]*$/, '');
  const binName = m.heightmap || 'heightmap.bin';
  const buf = await getArrayBuffer(`${base}/${binName}`);
  heights = new Float32Array(buf);
  meta = m;
  originElev = sampleAbsoluteElev(ORIGIN.lon, ORIGIN.lat);
  ready = true;
  return {
    min: m.minElev,
    max: m.maxElev,
    originElev,
    width: m.width,
    height: m.height,
  };
}

export function localToLonLat(x, z) {
  return lonLatFromLocal(x, z);
}

function lonLatFromLocal(x, z) {
  const lat = ORIGIN.lat - z / METERS_PER_DEG_LAT;
  const lon = ORIGIN.lon + x / metersPerDegLon(ORIGIN.lat);
  return { lon, lat };
}

export function sampleAbsoluteElev(lon, lat) {
  if (!heights || !meta) return 0;
  const { mosaic, width, height } = meta;
  const u = (lon - mosaic.west) / (mosaic.east - mosaic.west);
  const v = (mosaic.north - lat) / (mosaic.north - mosaic.south);
  const cu = THREE.MathUtils.clamp(u, 0, 1);
  const cv = THREE.MathUtils.clamp(v, 0, 1);
  return sampleGrid(cu * (width - 1), cv * (height - 1));
}

function sampleGrid(fx, fy) {
  const w = meta.width;
  const h = meta.height;
  const x0 = Math.floor(fx);
  const y0 = Math.floor(fy);
  const x1 = Math.min(x0 + 1, w - 1);
  const y1 = Math.min(y0 + 1, h - 1);
  const tx = fx - x0;
  const ty = fy - y0;
  const a = heights[y0 * w + x0];
  const b = heights[y0 * w + x1];
  const c = heights[y1 * w + x0];
  const d = heights[y1 * w + x1];
  return a * (1 - tx) * (1 - ty) + b * tx * (1 - ty) + c * (1 - tx) * ty + d * tx * ty;
}

/** Quota GREZZA del DEM (bilineare). Serve al compilatore delle strade, prima dello scavo. */
export function sampleDemY(x, z) {
  if (!ready) return 0;
  const { lon, lat } = lonLatFromLocal(x, z);
  return sampleAbsoluteElev(lon, lat) - originElev;
}

/** Griglie del terreno visibile (vicina fine + lontana grossa), dopo lo scavo delle strade. */
let gridNear = null;
let gridFar = null;

function inGrid(g, x, z) {
  return x >= g.minX && x <= g.minX + g.nx * g.step && z >= g.minZ && z <= g.minZ + g.nz * g.step;
}

/** Quota ESATTA del triangolo di terreno renderizzato (stessa diagonale della mesh). */
function gridSample(g, x, z) {
  const fx = Math.min(g.nx - 1e-6, Math.max(0, (x - g.minX) / g.step));
  const fz = Math.min(g.nz - 1e-6, Math.max(0, (z - g.minZ) / g.step));
  const i = Math.floor(fx), j = Math.floor(fz);
  const u = fx - i, v = fz - j;
  const W = g.nx + 1;
  const ya = g.h[j * W + i], yb = g.h[j * W + i + 1], yc = g.h[(j + 1) * W + i], yd = g.h[(j + 1) * W + i + 1];
  if (u + v <= 1) return ya + u * (yb - ya) + v * (yc - ya);
  return yd + (1 - u) * (yc - yd) + (1 - v) * (yb - yd);
}

/**
 * Quota del terreno. Dopo createTerrainMesh coincide con la superficie VISIBILE
 * (prima: bilineare del DEM ≠ triangoli da 10 m → cose sospese o affondate).
 */
let surfaceOverride = null;
/** Superficie compilata (livello): se risponde, vince sul terreno per tutto ciò che si appoggia a terra. */
export function setSurfaceOverride(fn) {
  surfaceOverride = fn;
}

export function sampleY(x, z) {
  if (!ready) return 0;
  if (surfaceOverride) {
    const y = surfaceOverride(x, z);
    if (y != null) return y;
  }
  if (gridNear && inGrid(gridNear, x, z)) return gridSample(gridNear, x, z);
  if (gridFar && inGrid(gridFar, x, z)) return gridSample(gridFar, x, z);
  return sampleDemY(x, z);
}

export function footprintBaseY(pts, mode = 'median') {
  if (!pts.length) return 0;
  const ys = pts.map((p) => sampleY(p.x, p.z)).sort((a, b) => a - b);
  if (mode === 'min') return ys[0];
  if (mode === 'mean') return ys.reduce((s, v) => s + v, 0) / ys.length;
  return ys[Math.floor(ys.length / 2)];
}

/**
 * Terreno in due griglie: VICINA (passo fine, area urbana) e LONTANA (passo grosso, fino al bordo del DEM).
 * Le strade compilate scavano il terreno (`carve`), così asfalto e marciapiedi non vengono mai bucati.
 * @param {object} opts
 * @param {number} [opts.step] passo della griglia lontana (m)
 * @param {number} [opts.nearStep] passo della griglia vicina (m)
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}|null} [opts.near] area urbana (coordinate locali)
 * @param {(x:number,z:number,y:number)=>number} [opts.carve]
 * @param {(info:{x:number,z:number,y:number,absElev:number,slopeDeg:number,lon:number,lat:number})=>number[]} [opts.colorAt]
 */
export function createTerrainMesh(scene, { step = 10, nearStep = 5, near = null, color = 0xb8b078, colorAt = null, carve = null, covered = null } = {}) {
  if (!ready || !meta) throw new Error('Terrain not loaded');
  const { mosaic } = meta;
  const sw = projectLike(mosaic.west, mosaic.south);
  const ne = projectLike(mosaic.east, mosaic.north);
  const full = { minX: Math.min(sw.x, ne.x), maxX: Math.max(sw.x, ne.x), minZ: Math.min(sw.z, ne.z), maxZ: Math.max(sw.z, ne.z) };

  const farStep = near ? Math.max(step, 14) : step;
  const far = makeGrid(full, farStep, carve);
  let nearG = null;
  if (near) {
    const r = {
      minX: Math.max(full.minX, near.minX), maxX: Math.min(full.maxX, near.maxX),
      minZ: Math.max(full.minZ, near.minZ), maxZ: Math.min(full.maxZ, near.maxZ),
    };
    nearG = makeGrid(r, nearStep, carve);
    // La griglia lontana sprofonda sotto quella vicina (niente z-fighting nella sovrapposizione)
    const W = far.nx + 1;
    for (let j = 0; j <= far.nz; j++) {
      for (let i = 0; i <= far.nx; i++) {
        const x = far.minX + i * far.step, z = far.minZ + j * far.step;
        if (x > r.minX + farStep && x < r.maxX - farStep && z > r.minZ + farStep && z < r.maxZ - farStep) far.h[j * W + i] -= 3;
      }
    }
  }
  gridFar = far;
  gridNear = nearG;

  const material = colorAt
    ? new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })
    : new THREE.MeshLambertMaterial({ color, flatShading: true });
  let minY = Infinity, maxY = -Infinity;
  const meshes = [];
  // Triangoli invisibili non disegnati: il lontano sotto la griglia vicina, il vicino sotto il livello.
  // (La quota esatta per camminare usa le griglie, non la mesh: nessun effetto su sampleY.)
  const inNear = nearG
    ? (x, z) => x > nearG.minX + farStep && x < nearG.minX + nearG.nx * nearG.step - farStep &&
        z > nearG.minZ + farStep && z < nearG.minZ + nearG.nz * nearG.step - farStep
    : null;
  for (const [g, name, hide] of [[far, 'terrain', inNear], [nearG, 'terrain-near', covered]]) {
    if (!g) continue;
    const geo = gridGeometry(g, colorAt, hide);
    const mesh = new THREE.Mesh(geo, material);
    mesh.receiveShadow = true;
    mesh.name = name;
    mesh.renderOrder = 0;
    scene.add(mesh);
    meshes.push(mesh);
    for (const v of g.h) { if (v < minY) minY = v; if (v > maxY) maxY = v; }
  }
  return { mesh: meshes[0], meshes, minY, maxY, vertices: meshes.reduce((s, m) => s + m.geometry.attributes.position.count, 0) };
}

function makeGrid(r, st, carve) {
  const nx = Math.max(1, Math.ceil((r.maxX - r.minX) / st));
  const nz = Math.max(1, Math.ceil((r.maxZ - r.minZ) / st));
  const h = new Float32Array((nx + 1) * (nz + 1));
  for (let j = 0; j <= nz; j++) {
    for (let i = 0; i <= nx; i++) {
      const x = r.minX + i * st, z = r.minZ + j * st;
      let y = sampleDemY(x, z);
      if (carve) y = carve(x, z, y);
      h[j * (nx + 1) + i] = y;
    }
  }
  return { minX: r.minX, minZ: r.minZ, step: st, nx, nz, h };
}

function gridGeometry(g, colorAt, hide = null) {
  const W = g.nx + 1;
  const count = W * (g.nz + 1);
  const pos = new Float32Array(count * 3);
  const cols = colorAt ? new Float32Array(count * 3) : null;
  const c = new THREE.Color();
  for (let j = 0; j <= g.nz; j++) {
    for (let i = 0; i <= g.nx; i++) {
      const k = j * W + i;
      const x = g.minX + i * g.step, z = g.minZ + j * g.step, y = g.h[k];
      pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = z;
      if (cols) {
        const hl = g.h[j * W + Math.max(0, i - 1)], hr = g.h[j * W + Math.min(g.nx, i + 1)];
        const hd = g.h[Math.max(0, j - 1) * W + i], hu = g.h[Math.min(g.nz, j + 1) * W + i];
        const gx = (hr - hl) / (2 * g.step), gz = (hu - hd) / (2 * g.step);
        const slopeDeg = (Math.atan(Math.hypot(gx, gz)) * 180) / Math.PI;
        const { lon, lat } = lonLatFromLocal(x, z);
        const rgb = colorAt({ x, z, y, absElev: y + originElev, slopeDeg, lon, lat });
        c.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, THREE.SRGBColorSpace);
        cols[k * 3] = c.r; cols[k * 3 + 1] = c.g; cols[k * 3 + 2] = c.b;
      }
    }
  }
  // Diagonale da (i+1,j) a (i,j+1): la stessa usata da gridSample
  let hid = null;
  if (hide) {
    hid = new Uint8Array(count);
    for (let k = 0; k < count; k++) hid[k] = hide(pos[k * 3], pos[k * 3 + 2]) ? 1 : 0;
  }
  const full = count > 65535 ? new Uint32Array(g.nx * g.nz * 6) : new Uint16Array(g.nx * g.nz * 6);
  let t = 0;
  const cen = (p, q, r) => hide((pos[p * 3] + pos[q * 3] + pos[r * 3]) / 3, (pos[p * 3 + 2] + pos[q * 3 + 2] + pos[r * 3 + 2]) / 3);
  for (let j = 0; j < g.nz; j++) {
    for (let i = 0; i < g.nx; i++) {
      const a = j * W + i, b = a + 1, cc = a + W, d = cc + 1;
      if (!(hid && hid[a] && hid[cc] && hid[b] && cen(a, cc, b))) { full[t++] = a; full[t++] = cc; full[t++] = b; } // normale verso +Y
      if (!(hid && hid[b] && hid[cc] && hid[d] && cen(b, cc, d))) { full[t++] = b; full[t++] = cc; full[t++] = d; }
    }
  }
  const idx = full.subarray(0, t);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  if (cols) geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  return geo;
}

function projectLike(lon, lat) {
  return {
    x: (lon - ORIGIN.lon) * metersPerDegLon(ORIGIN.lat),
    z: -(lat - ORIGIN.lat) * METERS_PER_DEG_LAT,
  };
}
