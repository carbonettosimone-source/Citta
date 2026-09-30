/**
 * Pedoni NPC: 260 persone con volto (occhi, bocca, naso), capelli in quattro stili, braccia e gambe
 * che si muovono. Modello condiviso col giocatore (people.js), in versione leggera.
 * Draw call: 4 corpi (uno per stile) + braccia + gambe = 6 per tutti i pedoni. La tavolozza di
 * ognuno (pelle, capelli, maglia, pantaloni) sta negli attributi per istanza.
 */
import * as THREE from 'three';
import { RIG, bodyGeometry, armGeometry, legGeometry, peopleMaterial, withPalette, setPalette } from './people.js';

// ---- parametri ---------------------------------------------------------------
const POOL      = 260;
const CULL      = 420;   // m — oltre questo distanza l'NPC viene respawnato
const SPD_MIN   = 0.8;
const SPD_MAX   = 1.6;   // m/s
const ROAD_CULL = 900;   // m — strade troppo lontane ignorati per i path

// ---- palette NPC -------------------------------------------------------------
const SHIRT_HEX = [
  0xd4503a, 0x4a7abf, 0xf0e0b8, 0x3a7a45, 0xb06028,
  0x9b3875, 0xdcd0a8, 0x2a4a6a, 0xe8c840, 0x5a8a5a,
  0xe07030, 0x5a3a8a, 0xc8d040, 0x30607a,
];
const PANT_HEX = [
  0x2a2a35, 0x3a4a5a, 0x706050, 0x4a3a2a, 0x282828,
  0x5a4a3a, 0x2a4a2a, 0x484058, 0x6a5038,
];
const SKIN_HEX = [
  0xf5d0a0, 0xe0a870, 0xc0845a, 0x8b4a2a, 0x4e2510,
  0xf8d8b0, 0xd4986a,
];
const HAIR_HEX = [
  0x180c04, 0x3a1a08, 0x5a3010, 0xd4a050,
  0x888888, 0xe8e0d8, 0x8a2818,
];

// ---- grafo strade per pedoni ------------------------------------------------
function buildPedPaths(roads) {
  const paths = [];
  for (const rd of roads) {
    if (!rd.p || rd.p.length < 4) continue;
    const n = rd.p.length >> 1;
    let cx = 0, cz = 0;
    for (let i = 0; i < n; i++) { cx += rd.p[i*2]; cz += rd.p[i*2+1]; }
    if (Math.hypot(cx/n, cz/n) > ROAD_CULL) continue;
    let len = 0;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const x = rd.p[i*2], z = rd.p[i*2+1];
      if (i > 0) len += Math.hypot(x - pts[i-1].x, z - pts[i-1].z);
      pts.push({ x, z, s: len });
    }
    if (len < 5) continue;
    const off = (rd.cw || 6) * 0.5 + 1.4;
    for (const side of [1, -1]) {
      const op = pts.map((p, i) => {
        const prev = pts[Math.max(0, i-1)], next = pts[Math.min(pts.length-1, i+1)];
        let dx = next.x - prev.x, dz = next.z - prev.z;
        const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
        return { x: p.x - dz * off * side, z: p.z + dx * off * side, s: p.s };
      });
      paths.push({ pts: op, len });
    }
  }
  return paths;
}

function pedPosAtDist(path, dist) {
  const pts = path.pts;
  const t = Math.max(0, Math.min(dist, path.len));
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i-1], curr = pts[i];
    const dl = curr.s - prev.s;
    if (t <= curr.s || i === pts.length - 1) {
      const f = dl > 0 ? (t - prev.s) / dl : 0;
      return { x: prev.x + (curr.x - prev.x) * f, z: prev.z + (curr.z - prev.z) * f };
    }
  }
  const last = pts[pts.length-1];
  return { x: last.x, z: last.z };
}

// ---- sistema NPC ------------------------------------------------------------
const STYLES = [
  { hair: 'short', female: false },
  { hair: 'long', female: true },
  { hair: 'bun', female: true },
  { hair: 'bald', female: false },
];
const OLD_HAIR = [0x9a9a9a, 0xd8d2ca, 0xbdb7ae];

export function createNPCs(roads, heightAt) {
  const paths = buildPedPaths(roads);
  if (!paths.length) return { group: new THREE.Group(), update() {} };

  // generatore deterministico
  const rng = (() => { let s = 137; return () => ((s = (s * 16807 + 1) % 2147483647) / 2147483647); })();
  const pick = (a) => a[Math.floor(rng() * a.length)];

  const mat = peopleMaterial();
  const Q = 0.5; // dettaglio ridotto: da lontano non si vede, sul telefono pesa
  // quanti per stile
  const style = Array.from({ length: POOL }, () => { const r = rng(); return r < 0.42 ? 0 : r < 0.68 ? 1 : r < 0.84 ? 2 : 3; });
  const count = [0, 0, 0, 0]; style.forEach((k) => count[k]++);
  const bodies = STYLES.map((st, k) => {
    const im = new THREE.InstancedMesh(withPalette(bodyGeometry({ ...st, q: Q }), Math.max(1, count[k])), mat, Math.max(1, count[k]));
    im.count = count[k]; im.name = `ped_body_${st.hair}`;
    return im;
  });
  const arms = new THREE.InstancedMesh(withPalette(armGeometry({ q: Q }), POOL * 2), mat, POOL * 2);
  const legs = new THREE.InstancedMesh(withPalette(legGeometry({ q: Q }), POOL * 2), mat, POOL * 2);
  arms.name = 'ped_arms'; legs.name = 'ped_legs';
  const all = [...bodies, arms, legs];
  for (const im of all) { im.castShadow = false; im.receiveShadow = true; im.frustumCulled = false; }

  const group = new THREE.Group();
  group.name = 'npcs';
  group.add(...all);

  const peds = [];
  const slot = [0, 0, 0, 0];
  for (let i = 0; i < POOL; i++) {
    const k = style[i];
    const old = k === 3 || rng() < 0.15;
    const pal = {
      skin: pick(SKIN_HEX), hair: old ? pick(OLD_HAIR) : pick(HAIR_HEX), shirt: pick(SHIRT_HEX), pants: pick(PANT_HEX),
    };
    const idx = slot[k]++;
    setPalette(bodies[k].geometry, idx, pal);
    for (const j of [i * 2, i * 2 + 1]) { setPalette(arms.geometry, j, pal); setPalette(legs.geometry, j, pal); }
    const pathIdx = Math.floor(rng() * paths.length);
    peds.push({
      body: bodies[k], idx, i, pathIdx, dist: rng() * paths[pathIdx].len, dir: rng() > 0.5 ? 1 : -1,
      speed: (SPD_MIN + rng() * (SPD_MAX - SPD_MIN)) * (old ? 0.75 : 1),
      height: (STYLES[k].female ? 1.58 : 1.68) + rng() * 0.16, wide: 0.9 + rng() * 0.25, phase: rng() * Math.PI * 2,
    });
  }
  for (const im of all) for (const k of ['iSkin', 'iHair', 'iShirt', 'iPants']) im.geometry.attributes[k].needsUpdate = true;

  const B = new THREE.Matrix4(), L = new THREE.Matrix4(), T = new THREE.Matrix4(), Rx = new THREE.Matrix4();
  const q = new THREE.Quaternion(), pv = new THREE.Vector3(), sv = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
  const limb = (im, j, x, y, ang) => { T.makeTranslation(x, y, 0); Rx.makeRotationX(ang); L.multiplyMatrices(B, T).multiply(Rx); im.setMatrixAt(j, L); };
  let frameN = 0;

  function update(dt, camera) {
    frameN++;
    const cx = camera.position.x, cz = camera.position.z;
    for (const ped of peds) {
      const path = paths[ped.pathIdx];
      const pos = pedPosAtDist(path, ped.dist);
      const distCam = Math.hypot(pos.x - cx, pos.z - cz);
      if (distCam > CULL) {
        let tries = 0;
        do {
          ped.pathIdx = Math.floor(rng() * paths.length);
          ped.dist = rng() * paths[ped.pathIdx].len;
          const rp = pedPosAtDist(paths[ped.pathIdx], ped.dist);
          const d = Math.hypot(rp.x - cx, rp.z - cz);
          if (d > 25 && d < CULL * 0.85) break;
        } while (++tries < 30);
        ped.dir = rng() > 0.5 ? 1 : -1;
        continue;
      }
      const skip = distCam > 180 && (frameN % 3) !== (ped.i % 3);
      ped.dist += ped.dir * ped.speed * dt;
      if (ped.dist <= 0) { ped.dir = 1; ped.dist = 0; }
      if (ped.dist >= path.len) { ped.dir = -1; ped.dist = path.len; }
      ped.phase += dt * ped.speed * 3.4;
      if (skip) continue;

      const np = pedPosAtDist(paths[ped.pathIdx], ped.dist);
      const y = heightAt(np.x, np.z);
      const ang = Math.atan2(np.x - pos.x, np.z - pos.z) + (ped.dir < 0 ? Math.PI : 0);
      const sc = ped.height / 1.75;
      const bob = Math.abs(Math.sin(ped.phase)) * 0.03;
      q.setFromAxisAngle(UP, ang);
      B.compose(pv.set(np.x, y + bob, np.z), q, sv.set(sc * ped.wide, sc, sc * ped.wide));
      ped.body.setMatrixAt(ped.idx, B);
      const sw = Math.sin(ped.phase) * 0.5;
      limb(arms, ped.i * 2, RIG.shoulderX, RIG.shoulderY, -sw * 0.8);
      limb(arms, ped.i * 2 + 1, -RIG.shoulderX, RIG.shoulderY, sw * 0.8);
      limb(legs, ped.i * 2, RIG.hipX, RIG.hipY, sw);
      limb(legs, ped.i * 2 + 1, -RIG.hipX, RIG.hipY, -sw);
    }
    for (const im of all) im.instanceMatrix.needsUpdate = true;
  }

  return { group, update, pedCount: POOL };
}
