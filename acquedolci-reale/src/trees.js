/**
 * Alberi veri (posizione, altezza e raggio della chioma misurati: mappa Meta/WRI a 1 m) con la
 * specie dai dati: ulivi negli uliveti DBTR, agrumi nei frutteti, pini domestici dove la chioma è
 * alta e larga, latifoglie altrove (scripts/build-model.mjs → species()).
 *
 * Prestazioni: geometrie da 20-40 triangoli per specie, alberi raggruppati in blocchi da 400 m
 * (un InstancedMesh per blocco e specie, col suo bounding sphere → il frustum culling scarta i
 * blocchi fuori vista) e blocchi oltre DRAW_DIST nascosti. Prima: 8,4 milioni di triangoli.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ve3TreeClash } from './piazza-ve3.js';

const BLOCK = 400, DRAW_DIST = 1400;

/** geometria unitaria (altezza 1, raggio chioma 1) con vertex color: tronco + chioma */
function speciesGeometry(kind) {
  const paint = (g, hex) => { const c = new THREE.Color(hex); const n = g.attributes.position.count; const a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g.toNonIndexed ? g.toNonIndexed() : g; };
  const trunk = (h, r, hex = 0x5b4632) => { const g = new THREE.CylinderGeometry(r * 0.7, r, h, 5, 1, true); g.translate(0, h / 2, 0); return paint(g, hex); };
  const blob = (sx, sy, sz, y, hex, detail = 0) => { const g = new THREE.IcosahedronGeometry(1, detail); g.scale(sx, sy, sz); g.translate(0, y, 0); return paint(g, hex); };
  // le misure sono frazioni: y in unità di altezza, x/z in unità di raggio chioma (scalate dopo)
  switch (kind) {
    case 1: // pino domestico: fusto nudo alto, ombrello piatto
      return mergeGeometries([trunk(0.72, 0.035, 0x6a4a34), blob(1, 0.16, 1, 0.8, 0x2f4a2a), blob(0.7, 0.12, 0.7, 0.9, 0x3a5a33)]);
    case 2: // ulivo: tronco corto e storto, chioma grigio-argento irregolare
      return mergeGeometries([trunk(0.4, 0.06, 0x6b5a48), blob(1, 0.38, 0.85, 0.64, 0x7d8a64)]);
    case 3: // agrume: chioma tonda, verde scuro lucido, quasi a terra
      return mergeGeometries([trunk(0.25, 0.05), blob(1, 0.5, 1, 0.55, 0x2c4f25)]);
    case 4: // palma: stipite sottile, ciuffo di foglie a stella
      return mergeGeometries([trunk(0.9, 0.03, 0x8a7258), blob(1, 0.1, 1, 0.92, 0x46612f)]);
    case 5: // cespuglio / macchia bassa: niente tronco, due masse schiacciate
      return mergeGeometries([blob(1, 0.6, 0.9, 0.45, 0x55713a)]);
    default: // latifoglia mediterranea
      return mergeGeometries([trunk(0.45, 0.05), blob(1, 0.45, 1, 0.64, 0x3b5a2c)]);
  }
}

export function buildTrees(flat) {
  const group = new THREE.Group();
  group.name = 'trees';
  const n = Math.floor(flat.length / 6);
  if (!n) return { group, update() {} };
  const geos = [0, 1, 2, 3, 4, 5].map(speciesGeometry);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  // raggruppa per blocco e specie
  const blocks = new Map();
  for (let i = 0; i < n; i++) {
    const x = flat[i * 6], z = flat[i * 6 + 1];
    if (ve3TreeClash(x, z)) continue;
    const key = `${Math.floor(x / BLOCK)},${Math.floor(z / BLOCK)},${flat[i * 6 + 5]}`;
    if (!blocks.has(key)) blocks.set(key, []);
    blocks.get(key).push(i);
  }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), c = new THREE.Color();
  const meshes = [];
  for (const [key, list] of blocks) {
    const sp = +key.split(',')[2];
    const im = new THREE.InstancedMesh(geos[sp], mat, list.length);
    list.forEach((i, k) => {
      const x = flat[i * 6], z = flat[i * 6 + 1], y = flat[i * 6 + 2];
      let h = sp === 5 ? flat[i * 6 + 3] : Math.max(sp === 3 ? 2.5 : 3, flat[i * 6 + 3]);
      let r = sp === 5 ? flat[i * 6 + 4] : Math.max(1, flat[i * 6 + 4]);
      // le chiome da 8 m del rilievo coprivano lastricato e prato: intorno alla piazza restano alberi normali
      if (sp !== 5 && Math.hypot(x + 8.54, z + 31.15) < 48) {
        if (r > 3.3) r = 3.3;
        if (h > 5.5) h = 5.5;
      }
      q.setFromAxisAngle(up, (i * 2.39996) % (Math.PI * 2));
      m.compose(p.set(x, y, z), q, s.set(r, h, r));
      im.setMatrixAt(k, m);
      const t = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1; // variazione di tono tra albero e albero
      im.setColorAt(k, c.setScalar(0.85 + t * 0.3));
    });
    im.computeBoundingSphere();
    im.castShadow = sp !== 5;
    im.userData.far = sp === 5 ? 450 : DRAW_DIST; // i cespugli si vedono solo da vicino
    meshes.push(im);
    group.add(im);
  }
  /** nasconde i blocchi lontani: ciò che resta lo scarta il frustum culling */
  function update(cam) {
    for (const im of meshes) im.visible = im.boundingSphere.center.distanceTo(cam.position) - im.boundingSphere.radius < im.userData.far;
  }
  return { group, update };
}
