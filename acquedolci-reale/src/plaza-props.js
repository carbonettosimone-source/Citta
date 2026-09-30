/**
 * Arredi tipici delle tre piazze, messi a mano sulle piante DBTR e su ciò che si vede da strada.
 * Non sono un rilievo: niente pixel di Street View, niente insegne copiate.
 *
 *  - Municipio: recinzione in ferro lungo i marciapiedi laterali, lampioni a globo
 *  - Giovanni Paolo II: aiuole rialzate, panchine, alberi nel prato, lampioni a doppio braccio
 * Scala, vasi e chiosco stanno nei modelli dei monumenti (landmarks.js).
 */
import * as THREE from 'three';

const up = new THREE.Vector3(0, 1, 0);

function yawOf(tx, tz) { return Math.atan2(-tz, tx); }

/** tratto di cancellata: piantane, barre e due correnti */
function addFence(ax, az, bx, bz, heightAt, bars, posts, rails) {
  const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz);
  if (L < 0.4) return;
  const tx = dx / L, tz = dz / L, yaw = yawOf(tx, tz);
  const n = Math.max(2, Math.round(L / 0.14));
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = ax + dx * t, z = az + dz * t, y = heightAt(x, z) + 0.28;
    const post = i % 12 === 0;
    (post ? posts : bars).push(x, y + (post ? 0.62 : 0.52), z, yaw);
  }
  const segs = Math.max(1, Math.ceil(L / 2.2));
  for (let i = 0; i < segs; i++) {
    const t = (i + 0.5) / segs, x = ax + dx * t, z = az + dz * t, y = heightAt(x, z) + 0.28;
    rails.push(x, y + 0.42, z, yaw, L / segs);
    rails.push(x, y + 1.02, z, yaw, L / segs);
  }
}

function instanced(geo, mat, list, each) {
  if (!list.length) return null;
  const im = new THREE.InstancedMesh(geo, mat, list.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  list.forEach((it, i) => { each(it, p, q, s); m.compose(p, q, s); im.setMatrixAt(i, m); });
  im.castShadow = true; im.receiveShadow = true;
  return im;
}

function lamp(group, heightAt, x, z, yaw, spec, mats) {
  const y = heightAt(x, z) + 0.25;
  const q = new THREE.Quaternion().setFromAxisAngle(up, yaw);
  const put = (geo, mat, dy, lx, lz) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(lx, dy, lz).applyQuaternion(q).add(new THREE.Vector3(x, y, z));
    mesh.quaternion.copy(q);
    mesh.castShadow = true;
    group.add(mesh);
  };
  put(spec.pole, mats.metal, spec.poleH / 2, 0, 0);
  for (const arm of spec.arms) {
    put(spec.arm, mats.metal, spec.armY, arm * 0.7, 0);
    put(spec.head, mats.light, spec.headY, arm, 0);
  }
}

export function buildPlazaDressing(heightAt) {
  const group = new THREE.Group(); group.name = 'plaza-props';
  const iron = new THREE.MeshLambertMaterial({ color: 0x1c1e22 });
  const metal = new THREE.MeshLambertMaterial({ color: 0x4a4f52 });
  const globeMat = new THREE.MeshLambertMaterial({ color: 0xfff6e0, emissive: 0xffe2b0, emissiveIntensity: 0.2 });
  const headMat = new THREE.MeshLambertMaterial({ color: 0xfff4d6, emissive: 0xffc070, emissiveIntensity: 0.12 });
  const stone = new THREE.MeshLambertMaterial({ color: 0xd5cbb8 });
  const soil = new THREE.MeshLambertMaterial({ color: 0x4a6a38 });
  const wood = new THREE.MeshLambertMaterial({ color: 0x8a5d3b });
  const trunk = new THREE.MeshLambertMaterial({ color: 0x5b4632 });
  const leaf = new THREE.MeshLambertMaterial({ color: 0x3b5a2c });

  // ---- recinzione del Municipio, sui marciapiedi dei fianchi (la facciata sulla fontana resta aperta)
  // pianta DBTR: i due lati lunghi che non guardano la fontana
  const centroid = [3.2, 1.3];
  const walls = [[[11.37, -11.75], [17.16, 7.68]], [[-5.03, 14.29], [-10.82, -5.14]]];
  const barList = [], postList = [], railList = [];
  for (const [[ax, az], [bx, bz]] of walls) {
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    let ox = mx - centroid[0], oz = mz - centroid[1], ol = Math.hypot(ox, oz) || 1;
    ox /= ol; oz /= ol;
    const off = 1.35;
    addFence(ax + ox * off, az + oz * off, bx + ox * off, bz + oz * off, heightAt, barList, postList, railList);
  }
  const pack = (flat, stride) => { const o = []; for (let i = 0; i < flat.length; i += stride) o.push(flat.slice(i, i + stride)); return o; };
  const bars = pack(barList, 4), posts = pack(postList, 4), rails = pack(railList, 5);
  const barGeo = new THREE.BoxGeometry(0.018, 1.02, 0.018);
  const postGeo = new THREE.BoxGeometry(0.055, 1.22, 0.055);
  const railGeo = new THREE.BoxGeometry(1, 0.028, 0.02);
  const orient = (it, p, q, s) => { p.set(it[0], it[1], it[2]); q.setFromAxisAngle(up, it[3]); };
  for (const im of [
    instanced(barGeo, iron, bars, orient),
    instanced(postGeo, iron, posts, orient),
    instanced(railGeo, iron, rails, (it, p, q, s) => { p.set(it[0], it[1], it[2]); q.setFromAxisAngle(up, it[3]); s.set(it[4], 1, 1); }),
  ]) if (im) group.add(im);

  // lampioni a globo: sul fianco del palazzo e ai due lati del pianerottolo (verso la fontana)
  const faceA = [-10.82, -5.14], faceB = [11.37, -11.75];
  const fmx = (faceA[0] + faceB[0]) / 2, fmz = (faceA[1] + faceB[1]) / 2;
  let fx = -8.54 - fmx, fz = -31.15 - fmz, fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
  const ux = (faceB[0] - faceA[0]), uz = (faceB[1] - faceA[1]), ul = Math.hypot(ux, uz) || 1;
  const globePos = [];
  for (const s of [-1, 1]) globePos.push([fmx + fx * 5.2 + (ux / ul) * s * 9, fmz + fz * 5.2 + (uz / ul) * s * 9]);
  for (const [[ax, az], [bx, bz]] of walls) {
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    let ox = mx - centroid[0], oz = mz - centroid[1], ol = Math.hypot(ox, oz) || 1; ox /= ol; oz /= ol;
    for (const t of [0.22, 0.55, 0.82]) globePos.push([ax + (bx - ax) * t + ox * 2.3, az + (bz - az) * t + oz * 2.3]);
  }
  const gPole = new THREE.CylinderGeometry(0.05, 0.07, 4.0, 7); 
  const gArm = new THREE.BoxGeometry(0.04, 0.04, 0.35);
  const gHead = new THREE.SphereGeometry(0.28, 12, 10);
  for (const [x, z] of globePos) lamp(group, heightAt, x, z, 0, { pole: gPole, poleH: 4, arm: gArm, arms: [0], armY: 4.05, head: gHead, headY: 4.35 }, { metal, light: globeMat });

  // ---- Giovanni Paolo II: aiuole rialzate nel prato, panchine sulla fascia, lampioni a due bracci
  const beds = [[-178, -43, -158, -30], [-154, -43, -138, -30]];
  for (const [x0, z0, x1, z1] of beds) {
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, y = heightAt(cx, cz) + 0.2;
    const dx = x1 - x0, dz = z1 - z0, wh = 0.4, t = 0.26;
    const soilM = new THREE.Mesh(new THREE.BoxGeometry(dx - t, 0.26, dz - t), soil);
    soilM.position.set(cx, y + 0.13, cz); soilM.receiveShadow = true; group.add(soilM);
    const wallsB = [
      [cx, y + wh / 2, z0, dx, wh, t, 0],
      [cx, y + wh / 2, z1, dx, wh, t, 0],
      [x0, y + wh / 2, cz, t, wh, dz, 0],
      [x1, y + wh / 2, cz, t, wh, dz, 0],
    ];
    for (const [x, yy, z, sx, sy, sz] of wallsB) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), stone);
      w.position.set(x, yy, z); w.castShadow = w.receiveShadow = true; group.add(w);
    }
  }
  const crown = new THREE.IcosahedronGeometry(1, 0), stem = new THREE.CylinderGeometry(0.1, 0.15, 1, 6);
  for (const [x, z, h, r] of [[-172, -37, 6.2, 2.3], [-164, -36.5, 5.4, 2.0], [-148, -37, 6.0, 2.2], [-142, -36, 5.2, 1.9], [-168, -33, 4.6, 1.7], [-146, -33.5, 4.4, 1.6]]) {
    const y = heightAt(x, z) + 0.35;
    const tr = new THREE.Mesh(stem, trunk); tr.scale.set(1, h * 0.45, 1); tr.position.set(x, y + h * 0.22, z); tr.castShadow = true;
    const cr = new THREE.Mesh(crown, leaf); cr.scale.set(r, h * 0.38, r); cr.position.set(x, y + h * 0.62, z); cr.castShadow = true;
    group.add(tr, cr);
  }
  const seat = new THREE.BoxGeometry(1.7, 0.08, 0.42), back = new THREE.BoxGeometry(1.7, 0.42, 0.06);
  const leg = new THREE.BoxGeometry(0.06, 0.4, 0.36);
  for (const [x, z] of [[-176, -21.2], [-160, -20.8], [-146, -21.0], [-134.2, -36]]) {
    const y = heightAt(x, z) + 0.3;
    const q = new THREE.Quaternion().setFromAxisAngle(up, 0);
    const addp = (geo, mat, dy, lx, lz) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(lx, dy, lz).applyQuaternion(q);
      m.position.add(new THREE.Vector3(x, y, z));
      m.castShadow = true; group.add(m);
    };
    addp(seat, wood, 0.46, 0, 0);
    addp(back, wood, 0.72, 0, -0.18);
    addp(leg, iron, 0.22, -0.75, 0);
    addp(leg, iron, 0.22, 0.75, 0);
  }
  const aPole = new THREE.CylinderGeometry(0.06, 0.08, 6.4, 7);
  const aArm = new THREE.BoxGeometry(1.5, 0.05, 0.05);
  const aHead = new THREE.BoxGeometry(0.28, 0.1, 0.42);
  for (const [x, z, yaw] of [[-166, -16, Math.PI / 2], [-150, -16, Math.PI / 2], [-170, -50, Math.PI / 2], [-146, -50, 0]]) {
    lamp(group, heightAt, x, z, yaw, { pole: aPole, poleH: 6.4, arm: aArm, arms: [-0.85, 0.85], armY: 6.15, head: aHead, headY: 6.05 }, { metal, light: headMat });
  }

  group.userData.night = (n) => {
    globeMat.emissiveIntensity = 0.15 + n * 1.5;
    headMat.emissiveIntensity = 0.1 + n * 1.2;
  };
  return group;
}
