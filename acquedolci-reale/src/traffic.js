/**
 * Traffico autonomo low-poly — 5 tipi di veicolo, 30 auto attive.
 * Geometrie procedurali con vertex-color (corpo + vetri + ruote in una sola mesh per tipo).
 * InstancedMesh per tipo: 5 draw call totali per tutte le auto.
 * Path following sulle strade OSM (data.roads); respawn oltre CULL m dalla camera.
 *
 * Ogni tipo ha una geometria con vertex color codificati:
 *   bianco  (1,1,1)       → carrozzeria  — modulato da instanceColor (setColorAt)
 *   grigio scuro (0.08)   → vetri        — rimane scuro indipendente dal colore
 *   quasi nero  (0.06)    → ruote/gomme  — rimane nero
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---- parametri globali -------------------------------------------------------
const POOL      = 140;  // auto totali nel pool
const CULL      = 940;  // m — oltre questa distanza la macchina respawna
const NEAR      = 12;   // m — tolleranza per connessione tra segmenti
const ROAD_CULL = 1100; // m — usa solo strade entro questo raggio dall'origine
const HUB_NAME = /Paolo Ricca/i; // Via Paolo Ricca Salerno (OSM 199743600)

// ---- tipi di veicolo ---------------------------------------------------------
// w larghezza, h altezza del corpo basso, l lunghezza
// tH altezza tetto, tW rapporto larghezza tetto, tOff spostamento Z del tetto
// scooter = false tetto
export const VTYPES = [
  { label:'city',    w:1.70, h:1.36, l:3.55, tH:0.66, tW:0.92, tOff: 0.00 }, // utilitaria
  { label:'sedan',   w:1.84, h:1.46, l:4.50, tH:0.60, tW:0.88, tOff:-0.06 }, // berlina
  { label:'van',     w:1.92, h:1.92, l:4.85, tH:0.98, tW:0.96, tOff: 0.10 }, // furgoncino
  { label:'suv',     w:1.94, h:1.65, l:4.52, tH:0.72, tW:0.90, tOff:-0.08 }, // SUV
  { label:'scooter', w:0.60, h:0.88, l:1.86, tH:0,    tW:0,    tOff: 0     }, // scooter
];

// colori carrozzeria (BGR in Three.js è RGB normale)
const BODY_HEX = [
  0xb8c0c8, 0xe6e0d8, 0x2e4d74, 0x721c18, 0x3d6535,
  0xc8a840, 0x181818, 0x8b4820, 0x5a7090, 0xd45020,
];

// velocità in m/s per tipo (utilitaria più lenta, primaria più veloce)
const SPD = [5.0, 6.2, 4.8, 6.8, 7.5];

// ---- geometria veicolo -------------------------------------------------------
function paint(geo, r, g, b) {
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i*3] = r; arr[i*3+1] = g; arr[i*3+2] = b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo.toNonIndexed ? geo.toNonIndexed() : geo;
}

export function buildCarGeo(t) {
  const { w, h, l, tH, tW, tOff } = t;
  const parts = [];

  if (t.label === 'scooter') {
    // scooter: corpo stretto a cuneo, manubrio, ruote
    const body = new THREE.BoxGeometry(w, h * 0.55, l * 0.55);
    body.translate(0, h * 0.42, 0);
    parts.push(paint(body, 1, 1, 1));
    // forcella anteriore
    const fork = new THREE.BoxGeometry(w * 0.18, h * 0.6, 0.12);
    fork.translate(0, h * 0.38, l * 0.32);
    parts.push(paint(fork, 0.25, 0.25, 0.25));
    // sellino + fanale posteriore
    const saddle = new THREE.BoxGeometry(w * 0.6, h * 0.09, l * 0.35);
    saddle.translate(0, h * 0.76, -l * 0.06);
    parts.push(paint(saddle, 0.12, 0.12, 0.12));
    // ruote (2)
    const wr = h * 0.26, ww = w * 0.18;
    for (const wz of [l * 0.33, -l * 0.33]) {
      const whl = new THREE.CylinderGeometry(wr, wr, ww, 7);
      whl.rotateZ(Math.PI / 2);
      whl.translate(0, wr, wz);
      parts.push(paint(whl, 0.06, 0.06, 0.06));
    }
    // pilota stilizzato
    const torso = new THREE.BoxGeometry(w * 0.7, h * 0.55, w * 0.55);
    torso.translate(0, h * 1.05, -l * 0.04);
    parts.push(paint(torso, 1, 1, 1));
    const head = new THREE.SphereGeometry(w * 0.38, 6, 5);
    head.translate(0, h * 1.47, -l * 0.02);
    parts.push(paint(head, 0.78, 0.65, 0.52));
    return mergeGeometries(parts);
  }

  // --- automobili ---
  const bodyH = h * 0.58;
  const body = new THREE.BoxGeometry(w, bodyH, l);
  body.translate(0, bodyH * 0.5 + h * 0.06, 0);
  parts.push(paint(body, 1, 1, 1)); // bianco = carrozzeria colorabile

  if (tH > 0) {
    // tetto
    const rw = w * tW, rl = l * 0.52;
    const roof = new THREE.BoxGeometry(rw, tH, rl);
    roof.translate(0, bodyH + h * 0.06 + tH * 0.5, tOff * l * 0.5);
    parts.push(paint(roof, 0.95, 0.95, 0.95)); // lievemente più chiaro

    // parabrezza anteriore (inclinato dark)
    const wfH = tH * 0.92, wfL = l * 0.085;
    const wf = new THREE.BoxGeometry(rw * 0.96, wfH, wfL);
    wf.rotateX(0.42);
    wf.translate(0, bodyH + h * 0.06 + wfH * 0.42, l * 0.26 + tOff * l * 0.25 - wfL * 0.2);
    parts.push(paint(wf, 0.08, 0.09, 0.10)); // vetro scuro

    // lunotto posteriore
    const wrH = tH * 0.88, wrL = l * 0.08;
    const wr2 = new THREE.BoxGeometry(rw * 0.92, wrH, wrL);
    wr2.rotateX(-0.38);
    wr2.translate(0, bodyH + h * 0.06 + wrH * 0.40, -l * 0.24 + tOff * l * 0.25 + wrL * 0.2);
    parts.push(paint(wr2, 0.08, 0.09, 0.10));
  }

  // ruote: 4 cilindri
  const wheelR = h * 0.185, wheelW = w * 0.09;
  const wheelZF = l * 0.30, wheelZR = -l * 0.28;
  for (const [wz, wx] of [[wheelZF, w/2 + wheelW*0.1], [wheelZF, -(w/2 + wheelW*0.1)],
                           [wheelZR, w/2 + wheelW*0.1], [wheelZR, -(w/2 + wheelW*0.1)]]) {
    const whl = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 8);
    whl.rotateZ(Math.PI / 2);
    whl.translate(wx, wheelR + h * 0.05, wz);
    parts.push(paint(whl, 0.06, 0.06, 0.06)); // gomma nera
    // cerchio (leggermente più chiaro)
    const rim = new THREE.CylinderGeometry(wheelR * 0.62, wheelR * 0.62, wheelW * 1.02, 6);
    rim.rotateZ(Math.PI / 2);
    rim.translate(wx, wheelR + h * 0.05, wz);
    parts.push(paint(rim, 0.28, 0.28, 0.30));
  }

  // fanali anteriori/posteriori (bianchi/rossi piccoli)
  for (const [fz, fr, fg, fb] of [[l*0.505, 0.9, 0.9, 0.85], [-l*0.505, 0.8, 0.10, 0.08]]) {
    const lamp = new THREE.BoxGeometry(w * 0.32, h * 0.13, 0.08);
    lamp.translate(0, bodyH * 0.6 + h * 0.06, fz);
    parts.push(paint(lamp, fr, fg, fb));
  }

  return mergeGeometries(parts);
}

// ---- grafo strade ------------------------------------------------------------
function buildRoadGraph(roads) {
  // filtra strade driveable vicine all'origine
  const segs = [];
  for (const rd of roads) {
    if (rd.k === 'path' || rd.k === 'footway' || rd.k === 'cycleway' || rd.k === 'steps') continue;
    const n = rd.p.length >> 1;
    if (n < 2) continue;
    // baricentro
    let cx = 0, cz = 0;
    for (let i = 0; i < n; i++) { cx += rd.p[i*2]; cz += rd.p[i*2+1]; }
    if (Math.hypot(cx/n, cz/n) > ROAD_CULL) continue;
    // calcola lunghezza totale e lista punti
    const pts = [];
    let len = 0;
    for (let i = 0; i < n; i++) {
      const x = rd.p[i*2], z = rd.p[i*2+1];
      if (i > 0) len += Math.hypot(x - pts[i-1].x, z - pts[i-1].z);
      pts.push({ x, z, s: len });
    }
    if (len < 8) continue; // segmento troppo corto
    const hub = !!(rd.name && HUB_NAME.test(rd.name));
    const hw = rd.k === 'primary' ? 2.2 : rd.k === 'secondary' ? 0.45 : 0.7;
    segs.push({
      pts, len,
      start: pts[0],
      end: pts[pts.length-1],
      cw: rd.cw || 6,
      hub,
      weight: hub ? 14 : hw,
    });
  }

  // mappa endpoint → lista segs
  const snap = (x, z) => `${Math.round(x/NEAR)},${Math.round(z/NEAR)}`;
  const epMap = new Map();
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    for (const ep of [s.start, s.end]) {
      const k = snap(ep.x, ep.z);
      if (!epMap.has(k)) epMap.set(k, []);
      epMap.get(k).push(i);
    }
  }
  // precomputa connessioni per ogni endpoint
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    s.startConns = (epMap.get(snap(s.start.x, s.start.z)) || []).filter(j => j !== i);
    s.endConns   = (epMap.get(snap(s.end.x,   s.end.z  )) || []).filter(j => j !== i);
  }
  return segs;
}

// ---- interpolazione lungo un segmento ----------------------------------------
function posAtDist(seg, dist) {
  const pts = seg.pts;
  let t = Math.max(0, Math.min(dist, seg.len));
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i-1], curr = pts[i];
    const dl = curr.s - prev.s;
    if (t <= curr.s || i === pts.length - 1) {
      const f = dl > 0 ? (t - prev.s) / dl : 0;
      const x = prev.x + (curr.x - prev.x) * f;
      const z = prev.z + (curr.z - prev.z) * f;
      const dx = curr.x - prev.x, dz = curr.z - prev.z;
      const l = Math.hypot(dx, dz) || 1;
      return { x, z, hx: dx/l, hz: dz/l };
    }
  }
  const last = pts[pts.length-1], prev = pts[pts.length-2];
  const dx = last.x-prev.x, dz = last.z-prev.z, l = Math.hypot(dx,dz)||1;
  return { x: last.x, z: last.z, hx: dx/l, hz: dz/l };
}

// ---- sistema traffico --------------------------------------------------------
export function createTraffic(roads, heightAt) {
  const segs = buildRoadGraph(roads);
  if (!segs.length) return { group: new THREE.Group(), update() {} };

  const rng = (() => { let s = 42; return () => ((s = (s*16807+1)%2147483647) / 2147483647); })();
  const pickWeightedSeg = () => {
    let tot = 0;
    for (const s of segs) tot += s.weight;
    let r = rng() * tot;
    for (const s of segs) { r -= s.weight; if (r <= 0) return s; }
    return segs[Math.floor(rng() * segs.length)];
  };
  const pickConn = (connIdxs) => {
    if (!connIdxs.length) return null;
    let tot = 0;
    for (const j of connIdxs) tot += segs[j].weight;
    let r = rng() * tot;
    for (const j of connIdxs) { r -= segs[j].weight; if (r <= 0) return j; }
    return connIdxs[Math.floor(rng() * connIdxs.length)];
  };

  // crea InstancedMesh per tipo
  const group = new THREE.Group(); group.name = 'traffic';
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  // POOL auto distribuite tra 5 tipi: le prime floor(POOL/5) per tipo, resto al tipo 0
  const perType = Math.ceil(POOL / VTYPES.length);
  const ims = VTYPES.map((vt, ti) => {
    const count = (ti === VTYPES.length - 1)
      ? POOL - perType * (VTYPES.length - 1)
      : perType;
    const geo = buildCarGeo(vt);
    const im = new THREE.InstancedMesh(geo, mat, count);
    im.castShadow = false; // shadow map troppo costosa con 140 istanze
    im.receiveShadow = true;
    im.name = `car_${vt.label}`;
    im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3);
    group.add(im);
    return { im, count, type: vt };
  });

  // stato macchina: { typeIdx, instIdx, segIdx, dist, dir, speed, colorHex }
  const cars = [];
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(1,1,1), pv = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0); // pre-allocato, non ricreato nel loop

  function spawnCar(car, refX, refZ) {
    // scegli un segmento non troppo vicino al punto di riferimento
    let seg = null;
    for (let tries = 0; tries < 48; tries++) {
      const s = rng() < 0.82 ? pickWeightedSeg() : segs[Math.floor(rng() * segs.length)];
      const cx = (s.start.x + s.end.x) / 2, cz = (s.start.z + s.end.z) / 2;
      const d = Math.hypot(cx - refX, cz - refZ);
      if (d > 60 && d < CULL) { seg = s; break; }
    }
    if (!seg) seg = pickWeightedSeg();

    const segIdx = segs.indexOf(seg);
    const dist = rng() * seg.len;
    const dir = rng() > 0.5 ? 1 : -1;
    const speed = (car ? SPD[car.typeIdx] : SPD[0]) + (rng()-0.5) * 2;
    const colorHex = BODY_HEX[Math.floor(rng() * BODY_HEX.length)];
    if (car) {
      car.segIdx = segIdx; car.dist = dist; car.dir = dir;
      car.speed = speed; car.colorHex = colorHex;
    } else {
      return { segIdx, dist, dir, speed, colorHex };
    }
  }

  // assegna macchine ai tipi
  let ci = 0;
  for (let ti = 0; ti < ims.length; ti++) {
    for (let ii = 0; ii < ims[ti].count; ii++, ci++) {
      const car = { typeIdx: ti, instIdx: ii, segIdx: 0, dist: 0, dir: 1, speed: SPD[ti], colorHex: 0xffffff };
      spawnCar(car, 999999, 999999); // spawn lontano → spawna ovunque
      cars.push(car);
      // imposta colore istanza
      const c = new THREE.Color(car.colorHex);
      ims[ti].im.setColorAt(ii, c);
    }
    ims[ti].im.instanceColor.needsUpdate = true;
  }

  // nasconde istanza (scala a zero)
  const hide = (ti, ii) => {
    m4.makeScale(0,0,0); ims[ti].im.setMatrixAt(ii, m4);
    ims[ti].im.instanceMatrix.needsUpdate = true;
  };

  function update(dt, camera) {
    const cx = camera.position.x, cz = camera.position.z;
    for (const car of cars) {
      const seg = segs[car.segIdx];
      // cull: troppo lontano dalla camera → respawn
      const { x, z } = posAtDist(seg, car.dist);
      const distCam = Math.hypot(x - cx, z - cz);
      if (distCam > CULL) {
        spawnCar(car, cx, cz);
        const c = new THREE.Color(car.colorHex);
        ims[car.typeIdx].im.setColorAt(car.instIdx, c);
        ims[car.typeIdx].im.instanceColor.needsUpdate = true;
      }

      // avanza sempre (anche se si salta il repaint)
      car.dist += car.dir * car.speed * dt;

      // raggiunto un estremo: cerca connessione
      if (car.dist <= 0 || car.dist >= seg.len) {
        const atEnd = car.dist >= seg.len;
        const conns = atEnd ? seg.endConns : seg.startConns;
        if (conns.length > 0) {
          const nextIdx = pickConn(conns);
          const next = segs[nextIdx];
          // determina in che direzione entriamo nel prossimo segmento
          const thisEp = atEnd ? seg.end : seg.start;
          const nearStart = Math.hypot(next.start.x - thisEp.x, next.start.z - thisEp.z) <
                            Math.hypot(next.end.x   - thisEp.x, next.end.z   - thisEp.z);
          car.segIdx = nextIdx;
          car.dist   = nearStart ? 0 : next.len;
          car.dir    = nearStart ? 1 : -1;
        } else {
          // inversione
          car.dir = -car.dir;
          car.dist = Math.max(0.1, Math.min(seg.len - 0.1, car.dist));
        }
      }

      // frame-skip per auto lontane: aggiorna transform ogni 2 frame oltre 660 m
      if (distCam > 660 && (car.instIdx & 1) !== (Math.round(distCam * 0.1) & 1)) continue;

      // posiziona istanza
      const pos = posAtDist(segs[car.segIdx], car.dist);
      const y = heightAt(pos.x, pos.z);
      // offset laterale per stare sulla corsia destra
      const offX = -pos.hz * 0.9 * (car.dir > 0 ? 1 : -1);
      const offZ =  pos.hx * 0.9 * (car.dir > 0 ? 1 : -1);
      pv.set(pos.x + offX, y, pos.z + offZ);
      const ang = Math.atan2(pos.hx * car.dir, pos.hz * car.dir);
      q.setFromAxisAngle(UP, ang);
      m4.compose(pv, q, sv);
      ims[car.typeIdx].im.setMatrixAt(car.instIdx, m4);
    }
    for (const { im } of ims) im.instanceMatrix.needsUpdate = true;
  }

  return { group, update, segCount: segs.length, carCount: POOL };
}
