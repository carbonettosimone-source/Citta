/**
 * Pedoni NPC low-poly — pool di 60 figure, walk-animation con bob della testa e oscillazione
 * delle gambe. Camminano lungo le vie (offset sul marciapiede). Cull oltre 380 m dalla camera.
 *
 * Ogni figura è 1 InstancedMesh unificato con vertex color:
 *   - testa: tono carnagione (predefinito nel vertex color)
 *   - corpo: colore maglia (modulato da instanceColor)
 *   - gambe: colore pantalone (vertex color scuro fisso, mix col colore istanza)
 *
 * Per varietà: 3 sagome (slim, normal, stocky) × colori random.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---- parametri ---------------------------------------------------------------
const POOL      = 260;
const CULL      = 420;   // m
const SPD_MIN   = 0.8;
const SPD_MAX   = 1.6;   // m/s
const ROAD_CULL = 900;

// ---- palette ped (maglia, pantalone, carnagione) ----------------------------
const SHIRT_HEX = [
  0xd4503a, 0x4a7abf, 0xf0e0b8, 0x3a7a45, 0xb06028,
  0x9b3875, 0xdcd0a8, 0x2a4a6a, 0xe8c840, 0x5a8a5a,
];
const PANT_HEX = [
  0x2a2a35, 0x3a4a5a, 0x706050, 0x4a3a2a, 0x282828,
  0x5a4a3a, 0x2a4a2a, 0x484058,
];
const SKIN_HEX = [
  0xf4c89c, 0xe0a87a, 0xc87a5a, 0x8b5e3c, 0x4a2e1a,
  0xf8d8b0, 0xd4986a,
];

// ---- geometria pedone -------------------------------------------------------
// silhouette (corpo a 3 sezioni: testa, torso, gambe) con vertex color
// w/h in proporzione all'altezza 1.0. Poi scala l'istanza all'altezza reale.
function buildPedGeo(slim) {
  const tw = slim ? 0.18 : 0.24; // larghezza torso (in h)
  const parts = [];
  // testa
  const head = new THREE.SphereGeometry(0.105, 6, 5);
  head.translate(0, 0.87, 0);
  paintGeo(head, 0xf4c89c); parts.push(head); // carnagione media (variata via colore capelli)

  // capelli
  const hair = new THREE.SphereGeometry(0.109, 6, 4);
  hair.scale(1, 0.6, 1);
  hair.translate(0, 0.92, 0);
  paintGeo(hair, 0x2a1a0a); parts.push(hair);

  // torso (con shirt = bianco → modulato da instanceColor)
  const torso = new THREE.BoxGeometry(tw * 2, 0.32, tw * 1.4);
  torso.translate(0, 0.585, 0);
  paintGeo(torso, 0xffffff); parts.push(torso); // bianco → tinto da instanceColor

  // braccia
  for (const sx of [-1, 1]) {
    const arm = new THREE.BoxGeometry(tw * 0.55, 0.28, tw * 0.55);
    arm.translate(sx * (tw + tw * 0.28), 0.575, 0);
    paintGeo(arm, 0xffffff); parts.push(arm);
    // mano
    const hand = new THREE.SphereGeometry(tw * 0.27, 4, 3);
    hand.translate(sx * (tw + tw * 0.28), 0.41, 0);
    paintGeo(hand, 0xf4c89c); parts.push(hand);
  }

  // gambe (colore pantaloni — scuro fisso, ignorato da instanceColor)
  const legW = tw * 0.85, legH = 0.34;
  for (const sx of [-1, 1]) {
    const leg = new THREE.BoxGeometry(legW, legH, legW);
    leg.translate(sx * tw * 0.52, 0.26, 0);
    paintGeo(leg, 0.12, 0.12, 0.15); parts.push(leg); // scuro = pantalone fisso
    // scarpa
    const shoe = new THREE.BoxGeometry(legW * 0.9, legH * 0.2, legW * 1.35);
    shoe.translate(sx * tw * 0.52, 0.09, legW * 0.18);
    paintGeo(shoe, 0.08, 0.07, 0.06); parts.push(shoe);
  }
  return mergeGeometries(parts);
}

function paintGeo(geo, r, g, b) {
  // accetta (geo, hex) o (geo, r, g, b)
  if (g === undefined) {
    const c = new THREE.Color(r);
    r = c.r; g = c.g; b = c.b;
  }
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i*3] = r; arr[i*3+1] = g; arr[i*3+2] = b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo.toNonIndexed ? geo.toNonIndexed() : geo;
}

// ---- grafo strade per pedoni (laterale: offset sul marciapiede) -------------
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
    // offset laterale: a destra o sinistra del segmento (marciapiede)
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
  let t = Math.max(0, Math.min(dist, path.len));
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i-1], curr = pts[i];
    const dl = curr.s - prev.s;
    if (t <= curr.s || i === pts.length - 1) {
      const f = dl > 0 ? (t - prev.s) / dl : 0;
      return {
        x: prev.x + (curr.x - prev.x) * f,
        z: prev.z + (curr.z - prev.z) * f,
      };
    }
  }
  const last = pts[pts.length-1];
  return { x: last.x, z: last.z };
}

// ---- sistema NPC ------------------------------------------------------------
export function createNPCs(roads, heightAt) {
  const paths = buildPedPaths(roads);
  if (!paths.length) return { group: new THREE.Group(), update() {} };

  const rng = (() => { let s = 137; return () => ((s = (s*16807+1)%2147483647) / 2147483647); })();

  const geoSlim   = buildPedGeo(true);
  const geoNormal = buildPedGeo(false);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const imSlim   = new THREE.InstancedMesh(geoSlim,   mat, Math.ceil(POOL/2));
  const imNormal = new THREE.InstancedMesh(geoNormal, mat, Math.floor(POOL/2));
  imSlim.name = 'ped_slim'; imNormal.name = 'ped_normal';
  imSlim.castShadow = imNormal.castShadow = false; // shadow map troppo costosa con 260 istanze
  imSlim.receiveShadow = imNormal.receiveShadow = true;
  imSlim.instanceColor   = new THREE.InstancedBufferAttribute(new Float32Array(Math.ceil(POOL/2)*3), 3);
  imNormal.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(Math.floor(POOL/2)*3), 3);

  const group = new THREE.Group(); group.name = 'npcs';
  group.add(imSlim, imNormal);

  // stato pedone
  const peds = [];
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(1,1,1), pv = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0);

  function makeColors() {
    return { shirt: SHIRT_HEX[Math.floor(rng() * SHIRT_HEX.length)], height: 1.55 + rng() * 0.22 };
  }

  for (let i = 0; i < POOL; i++) {
    const slim = i < Math.ceil(POOL/2);
    const im = slim ? imSlim : imNormal;
    const instIdx = slim ? i : i - Math.ceil(POOL/2);
    const pathIdx = Math.floor(rng() * paths.length);
    const dist = rng() * paths[pathIdx].len;
    const dir = rng() > 0.5 ? 1 : -1;
    const speed = SPD_MIN + rng() * (SPD_MAX - SPD_MIN);
    const { shirt, height } = makeColors();
    const phase = rng() * Math.PI * 2;
    peds.push({ slim, im, instIdx, pathIdx, dist, dir, speed, shirt, height, phase });
    im.setColorAt(instIdx, new THREE.Color(shirt));
  }
  imSlim.instanceColor.needsUpdate = true;
  imNormal.instanceColor.needsUpdate = true;

  let clock = 0;
  let frameN = 0; // contatore frame per frame-skip pedoni lontani

  function update(dt, camera) {
    clock += dt;
    frameN++;
    const cx = camera.position.x, cz = camera.position.z;
    for (const ped of peds) {
      const path = paths[ped.pathIdx];
      const pos = pedPosAtDist(path, ped.dist);
      const distCam = Math.hypot(pos.x - cx, pos.z - cz);

      // cull: troppo lontano → respawn
      if (distCam > CULL) {
        // trova un path non troppo vicino e non troppo lontano
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

      // frame-skip: pedoni > 180 m aggiornano transform ogni 3 frame
      const skipTransform = distCam > 180 && (frameN % 3) !== (ped.instIdx % 3);

      // avanza sempre (posizione logica coerente anche quando si salta il repaint)
      ped.dist += ped.dir * ped.speed * dt;
      if (ped.dist <= 0) { ped.dir = 1; ped.dist = 0; }
      if (ped.dist >= path.len) { ped.dir = -1; ped.dist = path.len; }

      if (skipTransform) continue;

      const npos = pedPosAtDist(paths[ped.pathIdx], ped.dist);
      const y = heightAt(npos.x, npos.z);

      // walk bob
      const bob = Math.abs(Math.sin(clock * 3.2 + ped.phase)) * 0.04 * ped.height;
      // heading
      const dx = npos.x - pos.x, dz = npos.z - pos.z;
      const ang = Math.atan2(dx, dz) + (ped.dir < 0 ? Math.PI : 0);
      q.setFromAxisAngle(UP, ang);
      pv.set(npos.x, y + bob, npos.z);
      m4.compose(pv, q, sv.set(ped.height, ped.height, ped.height));
      ped.im.setMatrixAt(ped.instIdx, m4);
    }
    imSlim.instanceMatrix.needsUpdate = true;
    imNormal.instanceMatrix.needsUpdate = true;
  }

  return { group, update, pedCount: POOL };
}
