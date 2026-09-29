import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { makeHeightSampler, buildTerrain } from './terrain.js';
import { buildBuildings, makeCollider } from './buildings.js';
import { buildTrees } from './trees.js';
import { facadeMaterials } from './facade.js';
import { buildStreets } from './streets.js';
import { buildLandmarks } from './landmarks.js';
import { createOrthoHR } from './ortho-hr.js';
import { initGround } from './ground.js';
import { buildWater } from './water.js';

const $ = (id) => document.getElementById(id);
const say = (m) => { $('lmsg').textContent = m; };
const touch = matchMedia('(pointer: coarse)').matches;
if (touch) document.body.classList.add('touch');

const renderer = new THREE.WebGLRenderer({ canvas: $('c'), antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
// ombre anche sul telefono (mappa più piccola): danno profondità a vie e cortili
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = touch ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const HAZE = 0xcfdde8;
scene.background = new THREE.Color(HAZE);
scene.fog = new THREE.Fog(HAZE, 1500, 5200);
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.5, 12000);

// luce di tarda mattinata da sud-est (come il volo dell'ortofoto: ombre verso nord-ovest)
scene.add(new THREE.HemisphereLight(0xdfeeff, 0x8a7a66, 1.25));
const sun = new THREE.DirectionalLight(0xfff2dc, 2.1);
sun.position.set(300, 500, 350);
sun.castShadow = true;
sun.shadow.mapSize.set(touch ? 1024 : 2048, touch ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -300, right: 300, top: 300, bottom: -300, near: 10, far: 1500 });
sun.shadow.bias = -0.0005;
scene.add(sun, sun.target);

// cielo: cupola con sfumatura foschia → azzurro e alone attorno al sole, segue la camera
const sky = new THREE.Mesh(new THREE.SphereGeometry(9000, 32, 16), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  uniforms: { uSun: { value: sun.position.clone().normalize() }, uH: { value: new THREE.Color(HAZE) }, uZ: { value: new THREE.Color(0x3f7fc0) } },
  vertexShader: 'varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform vec3 uSun, uH, uZ; varying vec3 vD;
    void main() {
      float h = max(vD.y, 0.0);
      vec3 c = mix(uH, uZ, pow(h, 0.55));
      float s = max(dot(vD, uSun), 0.0);
      c += vec3(1.0, 0.93, 0.8) * (pow(s, 12.0) * 0.25 + pow(s, 900.0) * 2.0);
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`,
}));
sky.renderOrder = -1; sky.frustumCulled = false;
scene.add(sky);

async function load() {
  say('modello degli edifici');
  const [model, dtmMeta, orthoMeta, streets] = await Promise.all([
    fetch('data/model.json').then((r) => r.json()),
    fetch('data/dtm.json').then((r) => r.json()),
    fetch('data/ortho.json').then((r) => r.json()),
    fetch('data/streets.json').then((r) => r.json()),
  ]);
  const hrMeta = await fetch('data/ortho-hr.json').then((r) => (r.ok ? r.json() : null)).catch(() => null);
  // quote in decimetri, Uint16 in base64 (vedi build-model.mjs)
  const raw = atob(dtmMeta.data);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  const dm = new Uint16Array(bytes.buffer);
  const heights = new Float32Array(dm.length);
  const off = dtmMeta.offset || 0; // fondale marino sotto zero (build-landcover.mjs)
  for (let i = 0; i < dm.length; i++) heights[i] = dm[i] / 10 + off;
  const heightAt = makeHeightSampler(dtmMeta, heights, model.origin);

  say('ortofoto 2022');
  const loader = new THREE.TextureLoader();
  const textures = new Map();
  await Promise.all(orthoMeta.tiles.map((t) => new Promise((res) => {
    loader.load(`data/ortho/${t.file}`, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      textures.set(t.file, tex); res();
    }, undefined, () => res());
  })));

  // copertura del suolo (mare, spiaggia, verde): materiali da vicino e superficie del mare
  const lcMeta = await fetch('data/landcover.json').then((r) => (r.ok ? r.json() : null)).catch(() => null);
  if (lcMeta) {
    const lcTex = await new THREE.TextureLoader().loadAsync('data/landcover.png').catch(() => null);
    if (lcTex) initGround(lcTex, lcMeta, model.origin);
  }
  say('terreno');
  scene.add(buildTerrain({ orthoMeta, textures, heightAt, origin: model.origin }));
  const water = buildWater(sun.position.clone().sub(sun.target.position));
  scene.add(water.mesh);
  say('edifici');
  const { group, footprints } = buildBuildings({ model, orthoMeta, textures, facadeMats: facadeMaterials() });
  scene.add(group);
  const collider = makeCollider(footprints);
  say('strade');
  scene.add(buildStreets(streets, heightAt, collider));
  say('luoghi d\'interesse');
  scene.add(buildLandmarks(model, heightAt));
  say('alberi');
  const trees = buildTrees(model.trees || []);
  scene.add(trees.group);

  const nLidar = model.buildings.filter((b) => b.src === 'lidar').length;
  $('sub').textContent = `${model.buildings.length} edifici reali · ${nLidar} con altezza LiDAR`;
  const hr = hrMeta ? createOrthoHR(hrMeta, model.origin, renderer) : { update() {} };
  return { model, heightAt, collider, trees, streets, hr, water };
}

const { model, heightAt, collider, trees, streets, hr, water } = await load();
$('loader').classList.add('hide');

// ---------- etichette dei luoghi (nomi OSM)
const labels = model.pois.map((p) => {
  const el = document.createElement('div');
  el.className = 'lbl'; el.textContent = p.name;
  $('labels').appendChild(el);
  return { el, v: new THREE.Vector3(p.x, p.y + 14, p.z) };
});
const tmp = new THREE.Vector3();
function updateLabels() {
  // le più vicine per prime; una etichetta che si sovrappone a una già messa non si mostra
  const maxD = walker.on ? 260 : 900;
  const placed = [];
  const order = labels.map((l) => ({ l, d: camera.position.distanceTo(l.v) })).sort((a, b) => a.d - b.d);
  for (const { l, d } of order) {
    tmp.copy(l.v).project(camera);
    let show = tmp.z < 1 && Math.abs(tmp.x) < 1.05 && Math.abs(tmp.y) < 1.05 && d < maxD;
    const x = (tmp.x * 0.5 + 0.5) * innerWidth, y = (-tmp.y * 0.5 + 0.5) * innerHeight;
    const w = l.el.textContent.length * 7 + 16;
    if (show && placed.some((p) => Math.abs(p.x - x) < (p.w + w) / 2 && Math.abs(p.y - y) < 24)) show = false;
    l.el.style.display = show ? '' : 'none';
    if (show) { placed.push({ x, y, w }); l.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`; }
  }
}

// ---------- drone (orbita) — parte sopra Piazza Vittorio Emanuele III e il Municipio
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 8; controls.maxDistance = 3500;
const g0 = heightAt(0, 0);
controls.target.set(-60, g0, -20);
camera.position.set(-10, g0 + 90, 190);
controls.update();

// ---------- a piedi
const walker = { on: false, pos: new THREE.Vector3(), yaw: 0, pitch: 0, keys: {}, joy: { x: 0, y: 0 } };
addEventListener('keydown', (e) => { walker.keys[e.code] = true; });
addEventListener('keyup', (e) => { walker.keys[e.code] = false; });
let drag = null;
renderer.domElement.addEventListener('pointerdown', (e) => { if (walker.on) drag = { x: e.clientX, y: e.clientY, id: e.pointerId }; });
addEventListener('pointerup', (e) => { if (drag?.id === e.pointerId) drag = null; });
addEventListener('pointermove', (e) => {
  if (!walker.on || !drag || drag.id !== e.pointerId) return;
  walker.yaw -= (e.clientX - drag.x) * 0.004; walker.pitch = Math.max(-1.2, Math.min(1.2, walker.pitch - (e.clientY - drag.y) * 0.004));
  drag.x = e.clientX; drag.y = e.clientY;
});
const joy = $('joy'), knob = joy.querySelector('i');
joy.addEventListener('pointerdown', (e) => { joy.setPointerCapture(e.pointerId); moveJoy(e); e.stopPropagation(); });
joy.addEventListener('pointermove', (e) => { if (joy.hasPointerCapture(e.pointerId)) moveJoy(e); });
joy.addEventListener('pointerup', () => { walker.joy.x = walker.joy.y = 0; knob.style.transform = ''; });
function moveJoy(e) {
  const r = joy.getBoundingClientRect();
  let x = (e.clientX - r.left) / r.width * 2 - 1, y = (e.clientY - r.top) / r.height * 2 - 1;
  const l = Math.hypot(x, y); if (l > 1) { x /= l; y /= l; }
  walker.joy.x = x; walker.joy.y = y;
  knob.style.transform = `translate(${x * 34}px, ${y * 34}px)`;
}

function setMode(walk) {
  walker.on = walk;
  document.body.classList.toggle('walk', walk);
  $('bWalk').classList.toggle('on', walk); $('bDrone').classList.toggle('on', !walk);
  controls.enabled = !walk;
  if (walk) {
    // si scende dove guarda il drone, in mezzo alla via più vicina, rivolti lungo la strada
    const t = controls.target.clone();
    let best = null;
    for (const rd of streets.roads) for (let i = 0; i + 3 < rd.p.length; i += 2) {
      const d = Math.hypot(rd.p[i] - t.x, rd.p[i + 1] - t.z);
      if (!best || d < best.d) best = { d, x: rd.p[i], z: rd.p[i + 1], dx: rd.p[i + 2] - rd.p[i], dz: rd.p[i + 3] - rd.p[i + 1] };
    }
    const { x, z } = best || { x: t.x, z: t.z };
    walker.pos.set(x, heightAt(x, z), z);
    walker.yaw = best ? Math.atan2(-best.dx, -best.dz) : 0;
    walker.pitch = 0;
    camera.fov = 70; camera.updateProjectionMatrix();
  } else if (walker.pos.lengthSq() > 0) {
    // ritorno dal pedone: il drone riparte sopra il punto dove si stava camminando
    controls.target.copy(walker.pos);
    camera.position.set(walker.pos.x - 60, walker.pos.y + 70, walker.pos.z + 90);
    camera.fov = 55; camera.updateProjectionMatrix();
  }
  $('hint').textContent = walk
    ? (touch ? 'joystick: cammina · trascina: guarda' : 'WASD / frecce: cammina · Shift: corri · trascina: guarda')
    : (touch ? 'trascina: ruota · pizzica: zoom · due dita: sposta' : 'trascina: ruota · rotella: zoom · tasto destro: sposta');
}
$('bWalk').onclick = () => setMode(true);
$('bDrone').onclick = () => setMode(false);
setMode(false);

const clock = new THREE.Clock();
function stepWalk(dt) {
  const k = walker.keys;
  let f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0) - walker.joy.y;
  let s = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0) + walker.joy.x;
  const len = Math.hypot(f, s);
  if (len > 0.05) {
    const sp = (k.ShiftLeft || k.ShiftRight ? 9 : 3.2) * dt / Math.max(1, len);
    const fx = -Math.sin(walker.yaw), fz = -Math.cos(walker.yaw);
    const dx = (fx * f - fz * s) * sp, dz = (fz * f + fx * s) * sp;
    // un asse alla volta: contro un muro si scivola lungo di esso
    if (!collider(walker.pos.x + dx, walker.pos.z)) walker.pos.x += dx;
    if (!collider(walker.pos.x, walker.pos.z + dz)) walker.pos.z += dz;
  }
  walker.pos.y = heightAt(walker.pos.x, walker.pos.z);
  camera.position.set(walker.pos.x, walker.pos.y + 1.7, walker.pos.z);
  camera.rotation.set(walker.pitch, walker.yaw, 0, 'YXZ');
}

function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  if (walker.on) stepWalk(dt); else controls.update();
  // l'ombra segue ciò che si guarda
  const focus = walker.on ? walker.pos : controls.target;
  sun.position.set(focus.x + 300, focus.y + 500, focus.z + 350);
  sun.target.position.copy(focus);
  trees.update(camera);
  sky.position.copy(camera.position);
  hr.update(focus);
  water.update(clock.elapsedTime);
  updateLabels();
  renderer.render(scene, camera);
}
frame();
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });
window.__acq = { camera, controls, walker, heightAt, setMode, scene, renderer };
