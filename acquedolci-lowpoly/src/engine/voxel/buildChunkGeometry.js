/**
 * quad → BufferGeometry (posizione + colore per vertice, flat shading come il resto del motore).
 * Un solo mesh per chunk: pochi chunk visibili alla volta, non centinaia di piccoli draw call.
 */
import * as THREE from 'three';
import { VOXEL, MAT_COLOR } from './voxelConfig.js';

const EDGE_OFFSET = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] };

function colorOf(mat, out) {
  const hex = MAT_COLOR[mat] ?? 0xff00ff; // magenta = materiale dimenticato in MAT_COLOR: si nota apposta
  out.setHex(hex);
  return out;
}

/**
 * @param {{top:Array, risers:Array}} mesh da greedyMesh.js
 * @param {number} originX,originZ angolo del chunk nel mondo (metri)
 */
export function buildChunkGeometry({ top, risers }, originX, originZ) {
  const pos = [];
  const col = [];
  const idx = [];
  const c = new THREE.Color();

  function quad(p0, p1, p2, p3, color) {
    const base = pos.length / 3;
    for (const p of [p0, p1, p2, p3]) { pos.push(p[0], p[1], p[2]); col.push(color.r, color.g, color.b); }
    idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }

  for (const t of top) {
    colorOf(t.mat, c);
    if (t.kind === 'flat') {
      const x0 = originX + t.i * VOXEL, x1 = originX + (t.i + t.w) * VOXEL;
      const z0 = originZ + t.j * VOXEL, z1 = originZ + (t.j + t.d) * VOXEL;
      const y = t.h * VOXEL;
      // CCW vista dall'alto (+Y): normale verso l'alto
      quad([x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], c);
    } else {
      // "smooth": un quad per cella, con la quota vera di ognuno dei 4 spigoli (rampa, non gradino)
      const x0 = originX + t.i * VOXEL, x1 = originX + (t.i + 1) * VOXEL;
      const z0 = originZ + t.j * VOXEL, z1 = originZ + (t.j + 1) * VOXEL;
      quad([x0, t.y01, z1], [x1, t.y11, z1], [x1, t.y10, z0], [x0, t.y00, z0], c);
    }
  }

  for (const r of risers) {
    const [dx, dz] = EDGE_OFFSET[r.edge];
    const x0 = originX + r.i * VOXEL, z0 = originZ + r.j * VOXEL;
    colorOf(r.mat, c);
    // il lato della cella rivolto verso il vicino più basso: due punti sul bordo condiviso
    let ax, az, bx, bz;
    if (dz === -1) { ax = x0; az = z0; bx = x0 + VOXEL; bz = z0; } // nord
    else if (dz === 1) { ax = x0 + VOXEL; az = z0 + VOXEL; bx = x0; bz = z0 + VOXEL; } // sud
    else if (dx === 1) { ax = x0 + VOXEL; az = z0; bx = x0 + VOXEL; bz = z0 + VOXEL; } // est
    else { ax = x0; az = z0 + VOXEL; bx = x0; bz = z0; } // ovest
    // normale uscente (verso il vicino): a-basso, b-basso, b-alto, a-alto, CCW vista da fuori
    // (ya/yb sono già in metri, già [basso,alto]: eventuale trapezio se il dislivello varia lungo il bordo)
    quad([ax, r.ya[0], az], [bx, r.yb[0], bz], [bx, r.yb[1], bz], [ax, r.ya[1], az], c);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  return geo;
}
