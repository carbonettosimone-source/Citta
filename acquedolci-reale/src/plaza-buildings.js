/**
 * Primo lotto di palazzi unici sulle tre piazze. Non è lo streaming di Google e non usa pixel di
 * Street View: la pianta è il perimetro DBTR, l'altezza e il tetto a falde sono il LiDAR già nel
 * modello, i piani sono `b.f`. Cornici, finestre, persiane e balconi sono geometria nostra, con un
 * ritmo diverso per ogni edificio. I muri in comune (apertura < 0,4 m, campo `e`) restano ciechi.
 *
 * Municipio, Fontana dei Delfini e Chiesa Madre stanno in landmarks.js. Qui i palazzi intorno:
 *  - 1302566, 1302564 — fianchi di Piazza Vittorio Emanuele III
 *  - 1302693, 1302678 — Piazza Libertà, ai lati della Chiesa Madre
 *  - 1302669, 1302648 — intorno a Piazza Giovanni Paolo II
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { NIGHT } from './daylight.js';

/** @type {Record<number, {name:string, title:string, piazza:string, facing:[number,number], wall:number, trim:number, stone:number, shutter:number, roof:number, bay:number, balcony:'alt'|'every'|'center', ground?:'archi'|'bottega', top?:'loggia', pilastri?:boolean}>} */
export const PIAZZA = {
  1302566: {
    name: 'palazzo-ve3-ovest', title: 'Palazzo a ovest del Municipio', piazza: 'Vittorio Emanuele III',
    facing: [1, -0.2], wall: 0xae947d, trim: 0xefe4d2, stone: 0xc8bfae, shutter: 0x2f4d38, roof: 0xb5623d,
    bay: 3.15, balcony: 'alt', ground: 'archi',
  },
  1302564: {
    name: 'palazzo-ve3-est', title: 'Palazzo chiaro a est del Municipio', piazza: 'Vittorio Emanuele III',
    facing: [-1, 0.1], wall: 0xf2efe8, trim: 0xf7f4ee, stone: 0xd9d3c6, shutter: 0x3e6b45, roof: 0xb5623d,
    bay: 2.85, balcony: 'every',
  },
  1302693: {
    name: 'palazzo-liberta-alto', title: 'Palazzo alto a ovest della Chiesa Madre', piazza: 'Libertà',
    facing: [1, 0.15], wall: 0x8f857e, trim: 0xe4dccb, stone: 0xb7aea2, shutter: 0x3a342e, roof: 0x9a9086,
    bay: 2.55, balcony: 'alt', top: 'loggia',
  },
  1302678: {
    name: 'palazzetto-liberta-est', title: 'Palazzetto a est della Chiesa Madre', piazza: 'Libertà',
    facing: [-1, 0], wall: 0xf0ebe3, trim: 0xf6f1e6, stone: 0xd4cdc0, shutter: 0x6a4a32, roof: 0xb5623d,
    bay: 2.6, balcony: 'every',
  },
  1302669: {
    name: 'villa-gp2', title: 'Villa chiara a sud del giardino', piazza: 'Giovanni Paolo II',
    facing: [0, -1], wall: 0xf6f3ec, trim: 0xfaf7f1, stone: 0xddd6c8, shutter: 0x2c5a3c, roof: 0xb5623d,
    bay: 3.3, balcony: 'center',
  },
  1302648: {
    name: 'schiera-gp2', title: 'Schiera a ovest del giardino', piazza: 'Giovanni Paolo II',
    facing: [0, -1], wall: 0xa58882, trim: 0xe7d8cc, stone: 0xc4b5a4, shutter: 0x4d5e52, roof: 0xb5623d,
    bay: 4.3, balcony: 'every', ground: 'bottega', pilastri: true,
  },
};

const GLASS = 0x243038;
const DOOR = 0x5c3d28;
const IRON = 0x2a2e32;
const SHOP = 0x8f9396;

export function isPlazaBuilding(id) { return !!PIAZZA[id]; }

class Parts {
  constructor() { this.parts = []; }
  add(geo, hex) {
    const src = geo.index ? geo.toNonIndexed() : geo;
    const pos = src.getAttribute('position');
    if (!pos?.count) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', pos);
    const c = new THREE.Color(hex), a = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) a.set([c.r, c.g, c.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(a, 3));
    this.parts.push(g);
  }
  mesh(name) {
    if (!this.parts.length) return null;
    const g = mergeGeometries(this.parts);
    g.computeVertexNormals();
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uNight = NIGHT;
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float uNight;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.22;');
    };
    const m = new THREE.Mesh(g, mat);
    m.name = name;
    m.castShadow = m.receiveShadow = true;
    return m;
  }
}

function ringPts(r) {
  const pts = [];
  for (let i = 0; i < r.length; i += 2) pts.push([r[i], r[i + 1]]);
  return pts;
}
function insideRing(pts, x, z) {
  let ins = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i][0], zi = pts[i][1], xj = pts[j][0], zj = pts[j][1];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) ins = !ins;
  }
  return ins;
}
function outward(a, b, pts) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  let nx = -(b[1] - a[1]) / L, nz = (b[0] - a[0]) / L;
  const mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2;
  if (insideRing(pts, mx + nx * 0.45, mz + nz * 0.45)) { nx = -nx; nz = -nz; }
  return { nx, nz, L, tx: (b[0] - a[0]) / L, tz: (b[1] - a[1]) / L, mx, mz };
}
function frame(px, pz, tx, tz, nx, nz) {
  return new THREE.Matrix4().makeBasis(new THREE.Vector3(tx, 0, tz), new THREE.Vector3(0, 1, 0), new THREE.Vector3(nx, 0, nz)).setPosition(px, 0, pz);
}
function orientedBox(parts, px, pz, tx, tz, nx, nz, y0, y1, halfU, z0, z1, hex) {
  if (y1 - y0 < 0.02 || z1 - z0 < 0.01 || halfU < 0.02) return;
  const g = new THREE.BoxGeometry(halfU * 2, y1 - y0, z1 - z0);
  g.translate(0, (y0 + y1) / 2, (z0 + z1) / 2);
  g.applyMatrix4(frame(px, pz, tx, tz, nx, nz));
  parts.add(g, hex);
}
function addArch(parts, px, pz, tx, tz, nx, nz, y0, crown, width, hex, z0, z1) {
  const r = width / 2, ys = crown - r;
  if (ys < y0 + 0.25) { orientedBox(parts, px, pz, tx, tz, nx, nz, y0, crown, r, z0, z1, hex); return; }
  const s = new THREE.Shape();
  s.moveTo(-r, y0); s.lineTo(r, y0); s.lineTo(r, ys); s.absarc(0, ys, r, 0, Math.PI, false); s.lineTo(-r, y0);
  const g = new THREE.ExtrudeGeometry(s, { depth: z1 - z0, bevelEnabled: false, curveSegments: 8 });
  g.translate(0, 0, z0);
  g.applyMatrix4(frame(px, pz, tx, tz, nx, nz));
  parts.add(g, hex);
}

function sides(parts, pts, y0, y1, open, hex) {
  const pos = [];
  for (let i = 0; i < pts.length; i++) {
    if ((open[i] ?? 30) < 0.4) continue;
    const [x0, z0] = pts[i], [x1, z1] = pts[(i + 1) % pts.length];
    pos.push(x0, y0, z0, x1, y0, z1, x1, y1, z1, x0, y0, z0, x1, y1, z1, x0, y1, z0);
  }
  if (!pos.length) return;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  parts.add(g, hex);
}
function cap(parts, pts, y, hex) {
  let tris;
  try { tris = THREE.ShapeUtils.triangulateShape(pts.map((p) => new THREE.Vector2(p[0], p[1])), []); } catch { return; }
  const pos = [];
  for (const [i, j, k] of tris) {
    const a = pts[i], c = pts[j], d = pts[k];
    const abx = c[0] - a[0], abz = c[1] - a[1], acx = d[0] - a[0], acz = d[1] - a[1];
    const up = abz * acx - abx * acz >= 0;
    const p = up ? [a, c, d] : [a, d, c];
    for (const q of p) pos.push(q[0], y, q[1]);
  }
  if (!pos.length) return;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  parts.add(g, hex);
}
function measuredRoof(parts, b, top, hex) {
  const V = b.roof.v, tanP = b.roof.tan;
  const vert = (k) => [V[k * 3], top + V[k * 3 + 2] * tanP, V[k * 3 + 1]];
  for (const face of b.roof.f) {
    if (face.length < 3) continue;
    const fp = face.map(vert);
    let tris;
    try { tris = THREE.ShapeUtils.triangulateShape(fp.map((p) => new THREE.Vector2(p[0], p[2])), []); } catch { continue; }
    const pos = [];
    for (const [i, j, k] of tris) {
      let a = fp[i], c = fp[j], d = fp[k];
      if ((c[2] - a[2]) * (d[0] - a[0]) - (c[0] - a[0]) * (d[2] - a[2]) < 0) [c, d] = [d, c];
      pos.push(...a, ...c, ...d);
    }
    if (!pos.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    parts.add(g, hex);
  }
}

function buildOne(b) {
  const spec = PIAZZA[b.id];
  const pts = ringPts(b.r);
  if (pts.length < 3) return null;
  const open = b.e || [];
  const foot = Math.min(b.b, b.g) - 0.4;
  const top = b.g + b.h;
  const floors = Math.max(1, b.f || 1);
  const fh = b.h / floors;
  const parts = new Parts();
  sides(parts, pts, foot, top, open, spec.wall);
  if (b.roof) measuredRoof(parts, b, top, spec.roof);
  else {
    cap(parts, pts, top, spec.roof);
    for (let i = 0; i < pts.length; i++) {
      if ((open[i] ?? 30) < 0.4) continue;
      const o = outward(pts[i], pts[(i + 1) % pts.length], pts);
      orientedBox(parts, o.mx, o.mz, o.tx, o.tz, o.nx, o.nz, top, top + 0.9, o.L / 2, -0.06, 0.16, spec.wall);
    }
  }

  let portal = -1, portalScore = -Infinity;
  for (let i = 0; i < pts.length; i++) {
    if ((open[i] ?? 30) < 4) continue;
    const o = outward(pts[i], pts[(i + 1) % pts.length], pts);
    if (o.L < 5) continue;
    const s = o.nx * spec.facing[0] + o.nz * spec.facing[1] + o.L * 0.008;
    if (s > portalScore) { portalScore = s; portal = i; }
  }

  let peak = top;
  if (b.roof) {
    const V = b.roof.v;
    for (let k = 0; k < V.length; k += 3) peak = Math.max(peak, top + V[k + 2] * b.roof.tan);
  }

  for (let i = 0; i < pts.length; i++) {
    if ((open[i] ?? 30) < 4) continue;
    const o = outward(pts[i], pts[(i + 1) % pts.length], pts);
    if (o.L < 3.2) continue;
    const { mx, mz, tx, tz, nx, nz, L } = o;
    orientedBox(parts, mx, mz, tx, tz, nx, nz, foot, b.g + Math.min(0.85, fh * 0.28), L / 2, 0.01, 0.07, spec.stone);
    for (let f = 1; f < floors; f++) orientedBox(parts, mx, mz, tx, tz, nx, nz, b.g + f * fh - 0.08, b.g + f * fh + 0.06, L / 2, 0.01, 0.09, spec.trim);
    orientedBox(parts, mx, mz, tx, tz, nx, nz, top - 0.28, top + 0.06, L / 2, 0.0, 0.16, spec.trim);

    const nBay = Math.max(1, Math.round(L / spec.bay));
    const mid = Math.floor(nBay / 2);
    const isPortal = i === portal;
    if (spec.pilastri) {
      for (let k = 0; k <= nBay; k++) {
        const t = k / nBay;
        orientedBox(parts, mx + tx * (t - 0.5) * L, mz + tz * (t - 0.5) * L, tx, tz, nx, nz, b.g + 0.7, top - 0.2, 0.11, 0.02, 0.13, spec.trim);
      }
    }
    for (let k = 0; k < nBay; k++) {
      const t = (k + 0.5) / nBay;
      const px = mx + tx * (t - 0.5) * L, pz = mz + tz * (t - 0.5) * L;
      for (let f = 0; f < floors; f++) {
        const yFloor = b.g + f * fh;
        const bottega = f === 0 && spec.ground === 'bottega' && L > 12;
        const door = f === 0 && isPortal && k === mid && !bottega;
        const arch = (f === 0 && spec.ground === 'archi') || (f === floors - 1 && spec.top === 'loggia');
        if (door) {
          const y1 = yFloor + Math.min(2.35, fh * 0.86);
          orientedBox(parts, px, pz, tx, tz, nx, nz, yFloor + 0.08, y1, 0.72, 0.02, 0.1, spec.trim);
          orientedBox(parts, px, pz, tx, tz, nx, nz, yFloor + 0.12, y1 - 0.08, 0.52, 0.08, 0.14, DOOR);
          continue;
        }
        if (bottega) {
          const y1 = yFloor + fh * 0.78;
          orientedBox(parts, px, pz, tx, tz, nx, nz, yFloor + 0.08, y1, Math.min(1.15, spec.bay * 0.32), 0.03, 0.1, SHOP);
          continue;
        }
        const y0 = yFloor + fh * 0.28;
        const y1 = yFloor + fh * (arch ? 0.86 : 0.74);
        const hw = Math.min(arch ? 0.72 : 0.58, spec.bay * 0.22);
        if (arch) {
          addArch(parts, px, pz, tx, tz, nx, nz, y0 - 0.06, y1 + 0.08, hw * 2 + 0.22, spec.trim, 0.02, 0.07);
          addArch(parts, px, pz, tx, tz, nx, nz, y0, y1, hw * 2, GLASS, 0.07, 0.12);
        } else {
          orientedBox(parts, px, pz, tx, tz, nx, nz, y0 - 0.08, y1 + 0.08, hw + 0.1, 0.02, 0.07, spec.trim);
          orientedBox(parts, px, pz, tx, tz, nx, nz, y0, y1, hw, 0.07, 0.12, GLASS);
          if (spec.shutter) {
            orientedBox(parts, px - tx * (hw + 0.1), pz - tz * (hw + 0.1), tx, tz, nx, nz, y0, y1, 0.07, 0.08, 0.14, spec.shutter);
            orientedBox(parts, px + tx * (hw + 0.1), pz + tz * (hw + 0.1), tx, tz, nx, nz, y0, y1, 0.07, 0.08, 0.14, spec.shutter);
          }
        }
        const wantBalcony = f > 0 && !(f === floors - 1 && spec.top === 'loggia')
          && (spec.balcony === 'every' || (spec.balcony === 'alt' && k % 2 === 0) || (spec.balcony === 'center' && isPortal && k === mid && f === 1));
        if (wantBalcony) {
          const slab = hw + 0.28;
          orientedBox(parts, px, pz, tx, tz, nx, nz, yFloor - 0.02, yFloor + 0.08, slab, 0.06, 0.78, spec.stone);
          orientedBox(parts, px, pz, tx, tz, nx, nz, yFloor + 0.82, yFloor + 0.9, slab, 0.68, 0.76, IRON);
          for (const s of [-1, 1]) orientedBox(parts, px + tx * s * (slab - 0.05), pz + tz * s * (slab - 0.05), tx, tz, nx, nz, yFloor + 0.08, yFloor + 0.9, 0.025, 0.66, 0.74, IRON);
        }
      }
    }
  }

  if (b.x) {
    for (const [type, x, z, hh] of b.x) {
      const y = b.roof ? peak : top;
      if (type === 0) orientedBox(parts, x, z, 1, 0, 0, 1, y, y + (hh || 2.4), 1.3, -1.5, 1.5, spec.wall);
      else if (type === 1) {
        const g = new THREE.CylinderGeometry(0.55, 0.55, hh || 1.2, 12);
        g.translate(x, y + (hh || 1.2) / 2, z);
        parts.add(g, 0xd8dde2);
      }
    }
  }
  return parts.mesh(spec.name);
}

export function buildPlazaBuildings(model) {
  const group = new THREE.Group();
  group.name = 'plaza-buildings';
  for (const b of model.buildings) {
    if (!PIAZZA[b.id]) continue;
    const mesh = buildOne(b);
    if (mesh) group.add(mesh);
  }
  return group;
}
