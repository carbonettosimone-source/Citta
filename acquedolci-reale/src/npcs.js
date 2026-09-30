/**
 * Pedoni NPC low-poly — 260 figure, animazione walk con oscillazione delle
 * braccia (arm-swing). Usa 4 InstancedMesh: 2 per il corpo (slim / normal)
 * + 2 per le braccia (sinistra / destra), condivise tra tutti gli NPC.
 * 4 draw-call totali per 260 pedoni; le braccia si aggiornano ogni frame
 * con la posizione spalla calcolata in world-space dal heading dell'NPC.
 *
 * Proporzioni aggiornate: testa sferica, collo, torso credibile, belt, gambe
 * a 2 segmenti. Le braccia sono BoxGeometry(1,1,1) scalate per istanza → stesso
 * geo per slim e normal (differenziati via scala).
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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

// ---- geometria corpo (senza braccia) ----------------------------------------
function paintGeo(geo, r, g, b) {
  if (g === undefined) {
    const c = new THREE.Color(r);
    r = c.r; g = c.g; b = c.b;
  }
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i*3] = r; arr[i*3+1] = g; arr[i*3+2] = b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function buildPedBodyGeo(slim) {
  const tw = slim ? 0.17 : 0.23; // metà larghezza torso (coord normalizzate, h=1)
  const parts = [];

  // testa (sfera)
  const head = new THREE.SphereGeometry(0.107, 7, 6);
  head.translate(0, 0.880, 0);
  paintGeo(head, 0xf5d0a0); parts.push(head);

  // capelli (calotta)
  const hair = new THREE.SphereGeometry(0.111, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.50);
  hair.translate(0, 0.930, 0);
  paintGeo(hair, 0x1e1008); parts.push(hair);

  // collo
  const neck = new THREE.CylinderGeometry(0.040, 0.046, 0.075, 5);
  neck.translate(0, 0.795, 0);
  paintGeo(neck, 0xf5d0a0); parts.push(neck);

  // torso (bianco → modulato da instanceColor = colore maglia)
  const torso = new THREE.BoxGeometry(tw * 2, 0.310, tw * 1.35);
  torso.translate(0, 0.600, 0);
  paintGeo(torso, 0xffffff); parts.push(torso);

  // cintura / bordo pantalone
  const belt = new THREE.BoxGeometry(tw * 2.10, 0.060, tw * 1.40);
  belt.translate(0, 0.430, 0);
  paintGeo(belt, 0.10, 0.10, 0.12); parts.push(belt);

  // gambe — due segmenti (coscia + stinco) + scarpa
  for (const sx of [-1, 1]) {
    const lox = tw * 0.53;

    // coscia
    const ul = new THREE.BoxGeometry(tw * 0.86, 0.240, tw * 0.78);
    ul.translate(sx * lox, 0.280, 0);
    paintGeo(ul, 0.14, 0.14, 0.18); parts.push(ul);

    // stinco
    const ll = new THREE.BoxGeometry(tw * 0.76, 0.215, tw * 0.70);
    ll.translate(sx * lox, 0.055, 0);
    paintGeo(ll, 0.12, 0.12, 0.16); parts.push(ll);

    // scarpa
    const shoe = new THREE.BoxGeometry(tw * 0.77, 0.062, tw * 1.28);
    shoe.translate(sx * lox, -0.030 + 0.062 * 0.5, tw * 0.20);
    paintGeo(shoe, 0.07, 0.06, 0.05); parts.push(shoe);
  }

  return mergeGeometries(parts);
}

// ---- geometria braccio (cubo unità, pivot al top) ---------------------------
// Il pivot è a (0,0,0) e il braccio si estende verso -Y.
// Il matrix dell'istanza viene messo alla posizione spalla; la scala encode
// le dimensioni reali del braccio (proporzionali all'altezza H dell'NPC).
function buildArmGeo() {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  geo.translate(0, -0.5, 0);   // pivot al top
  paintGeo(geo, 0xffffff);     // bianco → tinto da instanceColor
  return geo;
}

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
export function createNPCs(roads, heightAt) {
  const paths = buildPedPaths(roads);
  if (!paths.length) return { group: new THREE.Group(), update() {} };

  // generatore deterministico
  const rng = (() => { let s = 137; return () => ((s = (s*16807+1)%2147483647) / 2147483647); })();

  const geoSlim   = buildPedBodyGeo(true);
  const geoNormal = buildPedBodyGeo(false);
  const geoArm    = buildArmGeo();

  const matBody = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const matArm  = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });

  const halfPool = Math.ceil(POOL / 2);
  const imBodySlim   = new THREE.InstancedMesh(geoSlim,   matBody, halfPool);
  const imBodyNormal = new THREE.InstancedMesh(geoNormal, matBody, POOL - halfPool);
  const imArmL       = new THREE.InstancedMesh(geoArm.clone(), matArm, POOL);
  const imArmR       = new THREE.InstancedMesh(geoArm.clone(), matArm, POOL);

  for (const im of [imBodySlim, imBodyNormal, imArmL, imArmR]) {
    im.castShadow = false;
    im.receiveShadow = true;
  }
  imBodySlim.name = 'ped_slim'; imBodyNormal.name = 'ped_normal';
  imArmL.name = 'ped_armL';  imArmR.name = 'ped_armR';

  // pre-alloca instanceColor per tutte le IM
  const makeInstColor = (count) =>
    new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);
  imBodySlim.instanceColor   = makeInstColor(halfPool);
  imBodyNormal.instanceColor = makeInstColor(POOL - halfPool);
  imArmL.instanceColor       = makeInstColor(POOL);
  imArmR.instanceColor       = makeInstColor(POOL);

  const group = new THREE.Group();
  group.name = 'npcs';
  group.add(imBodySlim, imBodyNormal, imArmL, imArmR);

  // ---- stato pedone --------------------------------------------------------
  const peds = [];
  // temp objects (riusati ogni frame, nessun alloc)
  const m4     = new THREE.Matrix4();
  const q      = new THREE.Quaternion();
  const qArm   = new THREE.Quaternion();
  const pv     = new THREE.Vector3();
  const sv     = new THREE.Vector3();
  const svArm  = new THREE.Vector3();
  const axisR  = new THREE.Vector3();
  const UP     = new THREE.Vector3(0, 1, 0);

  for (let i = 0; i < POOL; i++) {
    const slim     = i < halfPool;
    const im       = slim ? imBodySlim : imBodyNormal;
    const instIdx  = slim ? i : i - halfPool;
    const pathIdx  = Math.floor(rng() * paths.length);
    const dist     = rng() * paths[pathIdx].len;
    const dir      = rng() > 0.5 ? 1 : -1;
    const speed    = SPD_MIN + rng() * (SPD_MAX - SPD_MIN);
    const height   = 1.55 + rng() * 0.22;
    const shirt    = SHIRT_HEX[Math.floor(rng() * SHIRT_HEX.length)];
    const skin     = SKIN_HEX[Math.floor(rng() * SKIN_HEX.length)];
    const phase    = rng() * Math.PI * 2;

    // colore corpo (maglia): applica anche alle braccia
    const shirtC = new THREE.Color(shirt);
    im.setColorAt(instIdx, shirtC);
    imArmL.setColorAt(i, shirtC);
    imArmR.setColorAt(i, shirtC);

    peds.push({ slim, im, instIdx, globalIdx: i, pathIdx, dist, dir, speed, height, shirt, phase });
  }
  for (const im of [imBodySlim, imBodyNormal, imArmL, imArmR]) {
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
  }

  let clock  = 0;
  let frameN = 0;

  function update(dt, camera) {
    clock  += dt;
    frameN++;
    const cx = camera.position.x, cz = camera.position.z;

    for (const ped of peds) {
      const path = paths[ped.pathIdx];
      const pos  = pedPosAtDist(path, ped.dist);
      const distCam = Math.hypot(pos.x - cx, pos.z - cz);

      // ── cull / respawn ─────────────────────────────────────────────────
      if (distCam > CULL) {
        let tries = 0;
        do {
          ped.pathIdx = Math.floor(rng() * paths.length);
          ped.dist    = rng() * paths[ped.pathIdx].len;
          const rp    = pedPosAtDist(paths[ped.pathIdx], ped.dist);
          const d     = Math.hypot(rp.x - cx, rp.z - cz);
          if (d > 25 && d < CULL * 0.85) break;
        } while (++tries < 30);
        ped.dir = rng() > 0.5 ? 1 : -1;
        continue;
      }

      // ── frame-skip per pedoni lontani (ogni 3 frame) ──────────────────
      const skipTransform = distCam > 180 && (frameN % 3) !== (ped.globalIdx % 3);
      ped.dist += ped.dir * ped.speed * dt;
      if (ped.dist <= 0)         { ped.dir = 1;  ped.dist = 0; }
      if (ped.dist >= path.len)  { ped.dir = -1; ped.dist = path.len; }
      if (skipTransform) continue;

      const npos = pedPosAtDist(paths[ped.pathIdx], ped.dist);
      const y    = heightAt(npos.x, npos.z);
      const H    = ped.height;

      // heading angle
      const dx = npos.x - pos.x, dz = npos.z - pos.z;
      const ang = Math.atan2(dx, dz) + (ped.dir < 0 ? Math.PI : 0);

      // bob verticale
      ped.phase += dt * ped.speed * 2.8;
      const bob = Math.abs(Math.sin(ped.phase)) * 0.032 * H;

      // ── body matrix ──────────────────────────────────────────────────
      q.setFromAxisAngle(UP, ang);
      pv.set(npos.x, y + bob, npos.z);
      sv.set(H, H, H);
      m4.compose(pv, q, sv);
      ped.im.setMatrixAt(ped.instIdx, m4);

      // ── arm matrices ─────────────────────────────────────────────────
      // posizione spalla in world-space (offset laterale = tw*1.28 * H in coord norm.)
      const tw      = ped.slim ? 0.17 : 0.23;
      const sxNorm  = tw * 1.28;      // offset laterale normalizzato
      const syNorm  = 0.715;          // altezza spalla normalizzata

      // asse RIGHT del personaggio (perp. all'heading nel piano XZ)
      const rx = Math.cos(ang), rz = -Math.sin(ang);
      axisR.set(rx, 0, rz);

      const shoulderY = y + bob + syNorm * H;
      const sLx = npos.x + rx * sxNorm * H;
      const sLz = npos.z + rz * sxNorm * H;
      const sRx = npos.x - rx * sxNorm * H;
      const sRz = npos.z - rz * sxNorm * H;

      // oscillazione braccio (controfase alle gambe)
      const swing = Math.sin(ped.phase) * 0.44;

      // dimensioni braccio (scalate con H)
      const armW = (ped.slim ? 0.17 * 0.55 : 0.23 * 0.55) * H;
      const armH = 0.28 * H;
      svArm.set(armW, armH, armW * 1.15);

      // braccio sinistro
      qArm.setFromAxisAngle(axisR, swing);
      pv.set(sLx, shoulderY, sLz);
      m4.compose(pv, qArm, svArm);
      imArmL.setMatrixAt(ped.globalIdx, m4);

      // braccio destro (controfase)
      qArm.setFromAxisAngle(axisR, -swing);
      pv.set(sRx, shoulderY, sRz);
      m4.compose(pv, qArm, svArm);
      imArmR.setMatrixAt(ped.globalIdx, m4);
    }

    imBodySlim.instanceMatrix.needsUpdate   = true;
    imBodyNormal.instanceMatrix.needsUpdate = true;
    imArmL.instanceMatrix.needsUpdate       = true;
    imArmR.instanceMatrix.needsUpdate       = true;
  }

  return { group, update, pedCount: POOL };
}
