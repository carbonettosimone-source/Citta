/**
 * Il giocatore sulla mappa: personaggio (character.js) o auto, sempre sotto una freccia che lo
 * indica anche da lontano. Si muove lungo il percorso calcolato da nav.js, con svolte morbide.
 */
import * as THREE from 'three';
import { VTYPES, buildCarGeo } from '../traffic.js';

const WALK = 6.5; // m/s: passo svelto da campagna elettorale

export function createPlayer(scene, character, groundAt) {
  const state = { on: true, pos: new THREE.Vector3(), yaw: 0, moving: false, stride: 9, path: null, seg: 0, car: null, speed: WALK, onArrive: null };

  // ---- freccia: cono rovesciato + anello a terra, colori da gioco, sempre visibile
  const arrow = new THREE.Group();
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.8, 16), new THREE.MeshBasicMaterial({ color: 0xffc629, depthTest: false }));
  cone.rotation.x = Math.PI; cone.position.y = 0.9;
  const rim = new THREE.Mesh(new THREE.ConeGeometry(1.05, 2.25, 16), new THREE.MeshBasicMaterial({ color: 0x3a2400, depthTest: false }));
  rim.rotation.x = Math.PI; rim.position.y = 0.9; rim.scale.set(1, 1, 1);
  arrow.add(rim, cone);
  arrow.renderOrder = 20; cone.renderOrder = 21; rim.renderOrder = 20;
  scene.add(arrow);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.25, 32), new THREE.MeshBasicMaterial({ color: 0xffc629, transparent: true, opacity: 0.85, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.renderOrder = 6;
  scene.add(ring);
  // destinazione
  const flag = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.7, 32), new THREE.MeshBasicMaterial({ color: 0x2bd4a0, transparent: true, opacity: 0.9, depthWrite: false }));
  flag.rotation.x = -Math.PI / 2; flag.visible = false; flag.renderOrder = 6;
  scene.add(flag);
  // traccia del percorso
  const trailMat = new THREE.LineDashedMaterial({ color: 0x2bd4a0, dashSize: 2, gapSize: 1.4, depthTest: false, transparent: true, opacity: 0.9 });
  let trail = null;

  // ---- auto
  let carMesh = null;
  function setCar(c) {
    state.car = c;
    if (carMesh) { scene.remove(carMesh); carMesh.geometry.dispose(); carMesh = null; }
    if (c) {
      const g = buildCarGeo(VTYPES[c.type]);
      carMesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, color: c.color }));
      carMesh.castShadow = true;
      scene.add(carMesh);
    }
    state.speed = c ? c.speed : WALK;
  }

  function place(x, z) { state.pos.set(x, groundAt(x, z), z); state.path = null; state.moving = false; }

  function go(path, onArrive) {
    state.path = path; state.seg = 0; state.onArrive = onArrive || null;
    const end = path[path.length - 1];
    flag.position.set(end[0], groundAt(end[0], end[1]) + 0.45, end[1]); flag.visible = true;
    if (trail) { scene.remove(trail); trail.geometry.dispose(); }
    const pts = path.map(([x, z]) => new THREE.Vector3(x, groundAt(x, z) + 0.6, z));
    trail = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), trailMat);
    trail.computeLineDistances(); trail.renderOrder = 7;
    scene.add(trail);
  }
  function stop() {
    state.path = null; state.moving = false; flag.visible = false;
    if (trail) { scene.remove(trail); trail.geometry.dispose(); trail = null; }
  }

  function update(dt, camera, t) {
    if (state.path) {
      let left = state.speed * dt;
      while (left > 0 && state.path) {
        const tgt = state.path[state.seg + 1];
        if (!tgt) { const cb = state.onArrive; stop(); cb?.(); break; }
        const dx = tgt[0] - state.pos.x, dz = tgt[1] - state.pos.z, d = Math.hypot(dx, dz);
        if (d <= left) { state.pos.x = tgt[0]; state.pos.z = tgt[1]; left -= d; state.seg++; continue; }
        state.pos.x += dx / d * left; state.pos.z += dz / d * left; left = 0;
        const want = Math.atan2(dx, dz);
        let dy = want - state.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
        state.yaw += dy * Math.min(1, dt * (state.car ? 6 : 10));
      }
      state.moving = !!state.path;
    } else state.moving = false;
    state.pos.y = groundAt(state.pos.x, state.pos.z);

    // personaggio o auto
    state.on = !state.car;
    if (carMesh) { carMesh.position.set(state.pos.x, state.pos.y + 0.22, state.pos.z); carMesh.rotation.y = state.yaw; }
    character.update(dt, { on: !state.car, pos: state.pos, yaw: state.yaw, moving: state.moving, stride: 9 });

    // freccia: scala con la distanza della camera, così da lassù si vede sempre
    const dist = camera.position.distanceTo(state.pos);
    const k = Math.max(1, dist / 30);
    const bob = Math.sin(t * 4) * 0.25 * k;
    arrow.scale.setScalar(k);
    arrow.position.set(state.pos.x, state.pos.y + (state.car ? 3 : 2.6) + 0.8 * k + bob, state.pos.z);
    arrow.rotation.y = t * 1.6;
    ring.scale.setScalar(Math.max(1, k * 0.7) * (state.car ? 2.2 : 1));
    ring.position.set(state.pos.x, state.pos.y + 0.42, state.pos.z);
    if (flag.visible) flag.scale.setScalar(Math.max(1, k * 0.8) * (1 + 0.12 * Math.sin(t * 5)));
  }

  return { state, place, go, stop, update, setCar };
}
