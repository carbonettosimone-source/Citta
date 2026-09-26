/**
 * Scogliere e frangiflutti/moli (M4), letti da OSM (`natural=cliff`, `man_made=breakwater|
 * groyne|pier|mole`) e compilati in `level.cliffs` / `level.piers` (compileLevel.js).
 * Se il bbox non li mappa gli array sono vuoti: nessuna costa inventata, solo la spiaggia
 * geometrica di sempre.
 * - Scogliera: parete a doppia faccia fra la quota alta e quella bassa del bordo costiero.
 * - Molo: cresta rialzata sul livello del mare lungo la linea OSM, sponde inclinate (pietrame).
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

function cliffQuad(ax, az, topY, botY, bx, bz, topY2, botY2) {
  const pos = [
    ax, botY, az, bx, botY2, bz, bx, topY2, bz,
    ax, botY, az, bx, topY2, bz, ax, topY, az,
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex([0, 1, 2, 3, 4, 5, 2, 1, 0, 5, 4, 3]); // doppia faccia: visibile da entrambi i lati
  geo.computeVertexNormals();
  return geo;
}

function pierSegment(ax, az, bx, bz, seaY, crest, halfW) {
  const dx = bx - ax, dz = bz - az;
  const len = Math.hypot(dx, dz);
  if (len < 0.2) return null;
  const nx = -dz / len, nz = dx / len;
  const yTop = seaY + crest, yBase = seaY - 0.3; // scende un poco sotto il livello del mare
  const L0 = [ax + nx * halfW, yBase, az + nz * halfW], R0 = [ax - nx * halfW, yBase, az - nz * halfW];
  const L1 = [bx + nx * halfW, yBase, bz + nz * halfW], R1 = [bx - nx * halfW, yBase, bz - nz * halfW];
  const Lt0 = [ax + nx * halfW * 0.55, yTop, az + nz * halfW * 0.55], Rt0 = [ax - nx * halfW * 0.55, yTop, az - nz * halfW * 0.55];
  const Lt1 = [bx + nx * halfW * 0.55, yTop, bz + nz * halfW * 0.55], Rt1 = [bx - nx * halfW * 0.55, yTop, bz - nz * halfW * 0.55];
  const pos = [...L0, ...R0, ...L1, ...R1, ...Lt0, ...Rt0, ...Lt1, ...Rt1];
  const idx = [
    0, 1, 3, 0, 3, 2, // fondo
    4, 6, 7, 4, 7, 5, // cresta
    0, 2, 6, 0, 6, 4, // fianco sinistro (in pendenza verso la cresta)
    1, 5, 7, 1, 7, 3, // fianco destro
    0, 4, 5, 0, 5, 1, // testata iniziale
    2, 3, 7, 2, 7, 6, // testata finale
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/**
 * @param {object} level livello compilato (level.cliffs, level.piers)
 * @param {THREE.Scene} scene
 * @param {object} style style.colors.cliffRock / pierRock
 * @param {number} seaY quota locale del livello del mare
 */
export function buildCoastFeatures(level, scene, style = {}, seaY = 0) {
  const group = new THREE.Group();
  group.name = 'coast';
  const cliffs = level?.cliffs || [];
  const piers = level?.piers || [];

  let cliffCount = 0;
  if (cliffs.length) {
    const geos = [];
    for (const c of cliffs) {
      const g = cliffQuad(c.ax, c.az, c.topY, c.botY, c.bx, c.bz, c.topY, c.botY);
      geos.push(g);
      cliffCount++;
    }
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (merged) {
      const mesh = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({
        color: style.colors?.cliffRock ?? 0x8a8072, flatShading: true, side: THREE.DoubleSide,
      }));
      mesh.castShadow = true; mesh.receiveShadow = true;
      group.add(mesh);
    }
  }

  let pierCount = 0;
  if (piers.length) {
    const geos = [];
    for (const p of piers) {
      const halfW = (p.w || 3) / 2;
      for (let i = 0; i < p.pts.length - 1; i++) {
        const [ax, az] = p.pts[i], [bx, bz] = p.pts[i + 1];
        const g = pierSegment(ax, az, bx, bz, seaY, 1.1, halfW);
        if (g) geos.push(g);
      }
      pierCount++;
    }
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (merged) {
      const mesh = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({
        color: style.colors?.pierRock ?? 0x9a9284, flatShading: true,
      }));
      mesh.castShadow = true; mesh.receiveShadow = true;
      group.add(mesh);
    }
  }

  scene.add(group);
  return { group, cliffCount, pierCount };
}
