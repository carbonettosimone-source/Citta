/**
 * Alberi veri (posizione, altezza e raggio della chioma misurati: mappa Meta/WRI a 1 m). Un solo
 * InstancedMesh per tronchi e uno per chiome: decine di migliaia di alberi in due draw call.
 */
import * as THREE from 'three';

export function buildTrees(flat) {
  const n = flat.length / 5;
  const group = new THREE.Group();
  group.name = 'trees';
  if (!n) return group;
  const crownGeo = new THREE.IcosahedronGeometry(1, 1);
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1, 5);
  trunkGeo.translate(0, 0.5, 0);
  const crowns = new THREE.InstancedMesh(crownGeo, new THREE.MeshLambertMaterial({ flatShading: true }), n);
  const trunks = new THREE.InstancedMesh(trunkGeo, new THREE.MeshLambertMaterial({ color: 0x5b4632 }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const x = flat[i * 5], z = flat[i * 5 + 1], y = flat[i * 5 + 2], h = Math.max(3, flat[i * 5 + 3]), r = Math.max(1.2, flat[i * 5 + 4]);
    const crownH = Math.min(h * 0.6, r * 1.6);
    const trunkH = h - crownH * 0.7;
    q.setFromAxisAngle(p.set(0, 1, 0), (i * 2.39996) % (Math.PI * 2));
    m.compose(p.set(x, y, z), q, s.set(1, trunkH, 1)); trunks.setMatrixAt(i, m);
    m.compose(p.set(x, y + h - crownH / 2, z), q, s.set(r, crownH / 2, r)); crowns.setMatrixAt(i, m);
    // verdi mediterranei: pini e ulivi scuri, un po' di variazione
    const t = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    c.setHSL(0.24 + Math.abs(t) * 0.06, 0.35 + Math.abs(t) * 0.15, 0.2 + Math.abs(t) * 0.1);
    crowns.setColorAt(i, c);
  }
  crowns.castShadow = true;
  group.add(trunks, crowns);
  return group;
}
