import * as THREE from 'three';
import { footprintFrame } from './footprintFrame.js';
import { lineStringToLocalPts } from '../../geo.js';
import { sampleY } from '../../terrain.js';

/** Collect kit debug records for diagnosis (read via window.__poiKitDebug). */
export const poiKitDebug = [];

function mat(color) {
  return new THREE.MeshLambertMaterial({ color, flatShading: true });
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

/**
 * Parent all kit parts under an Object3D that carries yaw once.
 *
 * Convention (matches footprintFrame.yaw = atan2(ux, uz)):
 *   local +Z → length axis (ux, uz)
 *   local +X → opposite of width axis (−vx, −vz)
 * so frame width coordinate `w` is placed at localX = −w.
 *
 * Children use UNROTATED BoxGeometry(sizeW, sizeY, sizeL).
 */
function makeAnchor(frame) {
  const anchor = new THREE.Object3D();
  anchor.name = 'kit-anchor';
  anchor.position.set(frame.cx, 0, frame.cz);
  anchor.rotation.y = frame.yaw;
  return anchor;
}

function addLocalBox(anchor, lengthCoord, widthCoord, y, sizeL, sizeY, sizeW, color) {
  const sx = clamp(sizeW, 0.05, 40);
  const sy = clamp(sizeY, 0.05, 28);
  const sz = clamp(sizeL, 0.05, 50);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat(color));
  mesh.position.set(-widthCoord, y, lengthCoord);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  anchor.add(mesh);
  return mesh;
}

function footprintOk(frame, kind) {
  if (!Number.isFinite(frame.length) || !Number.isFinite(frame.width)) return false;
  if (frame.length < 3 || frame.width < 2) return false;
  if (frame.length > 80 || frame.width > 50) return false;
  return true;
}

function recordDebug(kind, frame, wallH, baseY, anchor) {
  const meshes = [];
  anchor.updateMatrixWorld(true);
  anchor.traverse((o) => {
    if (!o.isMesh) return;
    o.geometry.computeBoundingBox();
    const wb = o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld);
    const dx = wb.max.x - wb.min.x;
    const dy = wb.max.y - wb.min.y;
    const dz = wb.max.z - wb.min.z;
    meshes.push({
      color: o.material?.color?.getHexString?.(),
      world: [+dx.toFixed(2), +dy.toFixed(2), +dz.toFixed(2)],
      max: +Math.max(dx, dy, dz).toFixed(2),
    });
  });
  const rec = {
    kind,
    length: +frame.length.toFixed(2),
    width: +frame.width.toFixed(2),
    yaw: +frame.yaw.toFixed(3),
    wallH: +wallH.toFixed(2),
    baseY: +baseY.toFixed(2),
    meshes,
    maxMesh: meshes.reduce((m, x) => Math.max(m, x.max), 0),
  };
  poiKitDebug.push(rec);
  if (typeof window !== 'undefined') {
    window.__poiKitDebug = poiKitDebug;
  }
  return rec;
}

function distPointSeg(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const ab2 = abx * abx + abz * abz;
  let t = ab2 > 1e-8 ? ((px - ax) * abx + (pz - az) * abz) / ab2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + abx * t;
  const cz = az + abz * t;
  return { dist: Math.hypot(px - cx, pz - cz), nx: px - cx, nz: pz - cz };
}

function nearestRailSide(cx, cz, features) {
  let best = null;
  for (const f of features || []) {
    if (f.properties?.railway !== 'rail' && f.properties?.railway !== 'light_rail') continue;
    if (f.geometry?.type !== 'LineString') continue;
    const pts = lineStringToLocalPts(f.geometry.coordinates);
    for (let i = 0; i < pts.length - 1; i++) {
      const d = distPointSeg(cx, cz, pts[i].x, pts[i].z, pts[i + 1].x, pts[i + 1].z);
      if (d.dist > 80) continue;
      if (!best || d.dist < best.dist) {
        const len = Math.hypot(d.nx, d.nz) || 1;
        best = { dist: d.dist, nx: d.nx / len, nz: d.nz / len };
      }
    }
  }
  return best;
}

/** Church / chapel / cathedral. */
export function attachChurchKit(group, ctx) {
  const { pts, baseY, wallH, style } = ctx;
  const frame = footprintFrame(pts);
  if (!footprintOk(frame, 'church')) return null;

  const colors = style.colors || {};
  const stone = style.churchWall ?? 0xe8e0d4;
  const roofDark = style.churchRoof ?? 0x6a6860;
  const accent = colors.landmarkAccent ?? 0xf0d060;

  const anchor = makeAnchor(frame);
  const towerW = clamp(Math.min(3.0, frame.width * 0.35), 1.4, 3.0);
  const towerH = clamp(wallH + Math.max(4, wallH * 0.45), 7, 18);
  const footL = frame.maxL - towerW * 0.55;

  addLocalBox(anchor, footL, 0, baseY + towerH * 0.5, towerW, towerH, towerW, stone);
  addLocalBox(anchor, footL, 0, baseY + towerH - 1.0, towerW * 1.05, 1.2, towerW * 0.7, 0x2a2a30);

  const spire = new THREE.Mesh(
    new THREE.ConeGeometry(clamp(towerW * 0.5, 0.4, 1.6), 2.0, 4),
    mat(roofDark),
  );
  spire.position.set(0, baseY + towerH + 1.0, footL);
  spire.castShadow = true;
  anchor.add(spire);

  addLocalBox(anchor, footL, 0, baseY + towerH + 2.3, 0.12, 1.0, 0.12, accent);
  addLocalBox(anchor, footL, 0, baseY + towerH + 2.5, 0.12, 0.12, 0.65, accent);

  const portalW = clamp(Math.min(frame.width * 0.4, 4.0), 1.5, 4.0);
  const portalH = clamp(wallH * 0.65, 2.5, 10);
  const portalL = frame.minL + 0.3;
  addLocalBox(anchor, portalL, 0, baseY + portalH * 0.5, 0.5, portalH, portalW, stone);

  const rose = new THREE.Mesh(new THREE.CircleGeometry(0.5, 10), mat(0x5a7a9a));
  rose.position.set(0, baseY + wallH * 0.6, portalL);
  // Face outward along −length (local −Z)
  rose.rotation.x = Math.PI / 2;
  anchor.add(rose);

  group.add(anchor);
  recordDebug('church', frame, wallH, baseY, anchor);
  return { labelY: baseY + towerH + 3 };
}

/**
 * Railway station — fixed meter sizes relative to a sane footprint.
 * Platform + canopy toward tracks; no child yaw.
 */
export function attachStationKit(group, ctx) {
  const { pts, baseY, wallH, style, features } = ctx;
  const frame = footprintFrame(pts);
  if (!footprintOk(frame, 'train_station')) {
    console.warn('[poi-kit] skip station: bad footprint', frame.length, frame.width);
    return null;
  }

  const colors = style.colors || {};
  const canopyCol = colors.stationCanopy ?? 0x4a6a8a;
  const platformCol = colors.stationPlatform ?? 0xb8b0a4;
  const signCol = colors.landmarkAccent ?? 0xf0d060;

  const rail = nearestRailSide(frame.cx, frame.cz, features);
  let side = 1;
  if (rail) {
    // frame.vx/vz is +width; rail normal in world XZ
    const sideDot = rail.nx * frame.vx + rail.nz * frame.vz;
    side = sideDot >= 0 ? 1 : -1;
  }

  // Fixed meter sizes (clamped to footprint)
  const platW = clamp(2.6, 1.5, Math.min(3.5, frame.width * 0.45));
  const platL = clamp(frame.length * 0.85, 6, Math.min(28, frame.length));
  const wall = clamp(wallH, 3, 9);

  const anchor = makeAnchor(frame);

  // Platform outboard of façade (width side)
  const platWPos = side * (frame.width * 0.5 + platW * 0.5 + 0.15);
  // Sample terrain at platform world approx
  const platWorldX = frame.cx + frame.vx * platWPos;
  const platWorldZ = frame.cz + frame.vz * platWPos;
  const yPlat = sampleY(platWorldX, platWorldZ) + 0.25;
  addLocalBox(anchor, 0, platWPos, yPlat, platL, 0.3, platW, platformCol);

  // Canopy over platform (not on roof)
  const canopyW = 2.2;
  const canopyL = clamp(platL * 0.9, 5, 26);
  const canopyWPos = side * (frame.width * 0.5 + canopyW * 0.45);
  const canopyY = baseY + wall + 0.25;
  addLocalBox(anchor, 0, canopyWPos, canopyY, canopyL, 0.2, canopyW, canopyCol);

  // Posts platform → canopy only
  const postH = clamp(canopyY - yPlat, 2.0, 5.5);
  for (const t of [-0.3, 0.3]) {
    addLocalBox(anchor, (platL * 0.5) * t, canopyWPos, yPlat + postH * 0.5, 0.18, postH, 0.18, 0x555555);
  }

  // Street-side sign (thin)
  const signWPos = -side * (frame.width * 0.5 + 0.12);
  addLocalBox(anchor, 0, signWPos, baseY + wall + 1.0, 2.8, 0.6, 0.12, signCol);

  group.add(anchor);
  const rec = recordDebug('train_station', frame, wallH, baseY, anchor);
  console.info('[poi-kit] station', rec);
  return { labelY: baseY + wall + 3 };
}

/** School / kindergarten — compact yard hint. */
export function attachSchoolKit(group, ctx) {
  const { pts, baseY, wallH, style } = ctx;
  const frame = footprintFrame(pts);
  if (!footprintOk(frame, 'school')) return null;

  const yardCol = style.colors?.schoolYard ?? 0x8fad6a;
  const accent = 0x5a9a6a;
  const anchor = makeAnchor(frame);

  const yardW = clamp(Math.min(5, frame.width * 0.7), 2, 5);
  const yardL = clamp(Math.min(frame.length * 0.55, 10), 3, 10);
  const yardWPos = frame.width * 0.5 + yardW * 0.55;
  const yx = frame.cx + frame.vx * yardWPos;
  const yz = frame.cz + frame.vz * yardWPos;
  const y0 = sampleY(yx, yz) + 0.05;
  addLocalBox(anchor, 0, yardWPos, y0, yardL, 0.08, yardW, yardCol);
  addLocalBox(anchor, -yardL * 0.2, frame.width * 0.5 + yardW * 0.35, y0 + 0.65, 1.1, 1.3, 1.1, accent);
  addLocalBox(anchor, frame.minL + 0.45, 0, baseY + 2.5, 0.8, 0.12, clamp(Math.min(3.5, frame.width * 0.45), 1.2, 3.5), 0xe8e4d0);

  group.add(anchor);
  recordDebug('school', frame, wallH, baseY, anchor);
  return { labelY: baseY + wallH + 2.2 };
}

/** Town hall — DISABLED (was producing paper-thin huge cornice / flag spikes). */
export function attachTownhallKit(group, ctx) {
  // Temporarily disabled per visual audit — keep labels only.
  return null;
}

/** Fuel — DISABLED temporarily. */
export function attachFuelKit(group, ctx) {
  return null;
}

export function attachPoiKit(kind, group, ctx) {
  switch (kind) {
    case 'church':
    case 'cathedral':
    case 'chapel':
      return attachChurchKit(group, ctx);
    case 'train_station':
      return attachStationKit(group, ctx);
    case 'school':
    case 'kindergarten':
    case 'university':
      return attachSchoolKit(group, ctx);
    case 'townhall':
      return attachTownhallKit(group, ctx);
    case 'fuel':
      return attachFuelKit(group, ctx);
    default:
      return null;
  }
}
