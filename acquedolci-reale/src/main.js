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
import { buildBackground } from './background.js';
import { createSky, applyTime, romeHourNow, NIGHT } from './daylight.js';
import { createIntro } from './intro.js';
import { createPost } from './post.js';
import { attachGoogleClip } from './google-clip.js';
import { createGoogleLayer } from './google-tiles.js';

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
scene.background = null; // il colore di fondo lo mette la passata dello sfondo
// foschia esponenziale: il paese resta nitido, l'orizzonte velato, le Eolie sagome azzurrine
scene.fog = new THREE.FogExp2(HAZE, 2.6e-5);
// sfondo lontano (background.js): scena e camera a parte, disegnate prima del paese
renderer.autoClear = false;
const bgScene = new THREE.Scene();
bgScene.background = new THREE.Color(HAZE);
bgScene.fog = scene.fog;
const bgCamera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 50, 250000);
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.5, 12000);

// luci: sole (con ombre), cielo/terreno, luna. Le governa l'ora del giorno (daylight.js)
const hemi = new THREE.HemisphereLight(0xdfeeff, 0x8a7a66, 1.25);
const sun = new THREE.DirectionalLight(0xfff2dc, 2.1);
sun.position.set(300, 500, 350);
sun.castShadow = true;
sun.shadow.mapSize.set(touch ? 1024 : 2048, touch ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -300, right: 300, top: 300, bottom: -300, near: 10, far: 1500 });
sun.shadow.bias = -0.0005;
const moonLight = new THREE.DirectionalLight(0x9fb2d6, 0);
scene.add(hemi, sun, sun.target, moonLight);
const sky = createSky(bgScene);

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
  const bounds = { xmin: dtmMeta.xmin, xmax: dtmMeta.xmin + (dtmMeta.width - 1) * dtmMeta.step, ymax: dtmMeta.ymax, ymin: dtmMeta.ymax - (dtmMeta.height - 1) * dtmMeta.step };
  scene.add(buildTerrain({ orthoMeta, textures, heightAt, origin: model.origin, bounds }));
  const water = buildWater(sun.position.clone().sub(sun.target.position));
  scene.add(water.mesh);
  say('litorale ed Eolie');
  const farSea = buildWater(sun.position.clone().sub(sun.target.position), { far: true });
  bgScene.add(farSea.mesh);
  const d = dtmMeta, inner = { x0: d.xmin - model.origin[0], x1: d.xmin + d.width * d.step - model.origin[0], z0: model.origin[1] - d.ymax, z1: model.origin[1] - d.ymax + d.height * d.step };
  const bg = await buildBackground(model.origin, inner);
  bgScene.add(bg.group);
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
  return { model, heightAt, collider, trees, streets, hr, water, farSea, farLabels: bg.labels };
}

const { model, heightAt, collider, trees, streets, hr, water, farSea, farLabels } = await load();
$('loader').classList.add('hide');

// ---------- etichette dei luoghi (nomi OSM)
const labels = model.pois.map((p) => {
  const el = document.createElement('div');
  el.className = 'lbl'; el.textContent = p.name;
  $('labels').appendChild(el);
  return { el, v: new THREE.Vector3(p.x, p.y + 14, p.z) };
});
// isole e paesi lontani: etichette sempre visibili, alla quota della cima meno la curvatura terrestre
for (const p of farLabels) {
  const el = document.createElement('div');
  el.className = 'lbl far'; el.textContent = p.name;
  $('labels').appendChild(el);
  labels.push({ el, far: true, v: new THREE.Vector3(p.x, p.y, p.z), top: p.y });
}
const tmp = new THREE.Vector3();
function updateLabels() {
  if (!settings.names) { for (const l of labels) l.el.style.display = 'none'; return; }
  // le più vicine per prime; una etichetta che si sovrappone a una già messa non si mostra
  const maxD = walker.on ? 260 : 900;
  const placed = [];
  const order = labels.map((l) => ({ l, d: camera.position.distanceTo(l.v) })).sort((a, b) => a.d - b.d);
  for (const { l, d } of order) {
    if (l.far) { const dx = l.v.x - camera.position.x, dz = l.v.z - camera.position.z; l.v.y = l.top + 120 - (dx * dx + dz * dz) / 1.465e7; }
    // i lontani si proiettano con la camera dello sfondo (il paese ha il far a 12 km)
    tmp.copy(l.v).project(l.far ? bgCamera : camera);
    let show = tmp.z < 1 && Math.abs(tmp.x) < 1.05 && Math.abs(tmp.y) < 1.05 && (l.far ? d > 3000 : d < maxD);
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

// ---------- impostazioni: nomi dei luoghi, ora del giorno, luci notturne (ricordate nel browser)
const settings = { names: false, hour: 11, lights: true, sharp: true };
const post = createPost(renderer);
try { Object.assign(settings, JSON.parse(localStorage.getItem('acq-settings') || '{}')); } catch { /* niente memoria: valori di base */ }
const saveSettings = () => { try { localStorage.setItem('acq-settings', JSON.stringify(settings)); } catch { /* pazienza */ } };
const basics = new Set();
for (const sc of [scene, bgScene]) sc.traverse((o) => { const m = o.material; if (o.isMesh && m?.isMeshBasicMaterial && m.blending === THREE.NormalBlending) basics.add(m); });
const lamps = scene.getObjectByName('lamps');
const plazaProps = scene.getObjectByName('plaza-props');
const dayCtx = { sky, sun, hemi, moonLight, fog: scene.fog, bgScene, basics: [...basics], waters: [water.uniforms, farSea.uniforms], lights: true, sunDir: new THREE.Vector3(0, 1, 0) };
const hhmm = (h) => `${String(Math.floor(h) % 24).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;
/** applica un'ora senza salvarla (l'intro ha le sue ore) */
function applyHour(h) {
  dayCtx.lights = settings.lights;
  const { sun: S, moon: M } = applyTime(h, dayCtx);
  lamps?.userData.night?.(NIGHT.value);
  plazaProps?.userData.night?.(NIGHT.value);
  $('optTime').value = h; $('timeOut').textContent = hhmm(h);
  const moonTxt = M.alt > 0 ? `luna ${Math.round(M.lit * 100)}% alta ${Math.round(M.alt * 57.3)}°` : 'luna sotto l\'orizzonte';
  $('sunInfo').textContent = `sole ${Math.round(S.alt * 57.3)}° · ${moonTxt}`;
}
function setHour(h) { settings.hour = h; applyHour(h); saveSettings(); }
$('optNames').checked = settings.names;
$('optLights').checked = settings.lights;
$('optNames').onchange = (e) => { settings.names = e.target.checked; saveSettings(); };
$('optLights').onchange = (e) => { settings.lights = e.target.checked; setHour(settings.hour); };
$('optSharp').checked = settings.sharp;
$('optSharp').onchange = (e) => { settings.sharp = e.target.checked; saveSettings(); };
$('optTime').oninput = (e) => setHour(+e.target.value);
$('bNow').onclick = () => setHour(Math.round(romeHourNow() * 4) / 4);
$('bSet').onclick = () => { const p = $('settings'); p.hidden = !p.hidden; $('bSet').setAttribute('aria-expanded', String(!p.hidden)); $('bSet').classList.toggle('on', !p.hidden); };
setHour(settings.hour);

// assi all'origine (Municipio): rosso = est, verde = su, blu = sud. Servono a controllare l'allineamento.
function makeAxes(y0) {
  const g = new THREE.Group();
  g.name = 'origin-axes';
  g.renderOrder = 10;
  const mat = (color) => new THREE.MeshBasicMaterial({ color, fog: false, depthTest: false, toneMapped: false });
  const add = (dir, color) => {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 64, 12), mat(color));
    const head = new THREE.Mesh(new THREE.ConeGeometry(3.4, 8, 12), mat(color));
    shaft.position.copy(dir).multiplyScalar(32);
    head.position.copy(dir).multiplyScalar(68);
    const lay = (m) => {
      if (Math.abs(dir.x) > 0.5) m.rotation.z = -Math.PI / 2;
      if (Math.abs(dir.z) > 0.5) m.rotation.x = Math.PI / 2;
      m.renderOrder = 10;
      g.add(m);
    };
    lay(shaft); lay(head);
  };
  add(new THREE.Vector3(1, 0, 0), 0xff2a2a);
  add(new THREE.Vector3(0, 1, 0), 0x2adf4a);
  add(new THREE.Vector3(0, 0, 1), 0x3a6dff);
  const o = new THREE.Mesh(new THREE.SphereGeometry(2.4, 16, 12), mat(0xffffff));
  o.renderOrder = 10;
  g.add(o);
  g.position.y = y0 + 1.2;
  g.visible = false;
  return g;
}
attachGoogleClip(scene);
const axes = makeAxes(g0);
scene.add(axes);
axes.visible = !!settings.axes;
$('optAxes').checked = axes.visible;
$('optAxes').onchange = (e) => { settings.axes = e.target.checked; axes.visible = settings.axes; saveSettings(); };

const google = createGoogleLayer({
  scene, renderer, origin: model.origin, heightAt,
  onStatus: (t) => { $('gStatus').textContent = t; },
  onAttrib: (show, text) => {
    $('gAttrib').hidden = !show;
    $('gCopy').textContent = text;
    const logo = $('gLogo');
    if (show && !logo.getAttribute('src')) logo.src = 'https://maps.gstatic.com/mapfiles/api-3/images/google4.png';
  },
});
const envKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '').trim();
let storedKey = '';
try { storedKey = (localStorage.getItem('acq-gkey') || '').trim(); } catch { /* niente memoria */ }
if (storedKey) $('optGKey').value = storedKey;
let keyTimer = 0;
function applyGKey() {
  const typed = $('optGKey').value.trim();
  try {
    if (typed) localStorage.setItem('acq-gkey', typed);
    else localStorage.removeItem('acq-gkey');
  } catch { /* il browser ha bloccato la memoria */ }
  google.setKey(typed || envKey);
}
$('optGKey').addEventListener('keydown', (e) => {
  e.stopPropagation();
  if (e.key === 'Enter') { e.preventDefault(); clearTimeout(keyTimer); applyGKey(); }
});
$('optGKey').addEventListener('input', () => { clearTimeout(keyTimer); keyTimer = setTimeout(applyGKey, 500); });
$('optGKey').addEventListener('change', () => { clearTimeout(keyTimer); applyGKey(); });
applyGKey();

// ---------- intro: panoramiche e titolo (intro.js), poi il paese libero dalla vista di partenza
const intro = createIntro({
  camera, controls, heightAt, setTime: applyHour,
  onEnd() {
    applyHour(settings.hour);
    controls.target.set(-60, g0, -20); camera.position.set(-10, g0 + 90, 190); controls.update();
  },
});
$('bIntro').onclick = () => { $('settings').hidden = true; $('bSet').classList.remove('on'); if (walker.on) setMode(false); intro.start(); };
intro.start();

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
  if (intro.active) intro.update(dt); else if (walker.on) stepWalk(dt); else controls.update();
  // l'ombra segue ciò che si guarda
  const focus = walker.on ? walker.pos : controls.target;
  const sd = dayCtx.sunDir.y > 0.02 ? dayCtx.sunDir : new THREE.Vector3(0.4, 0.6, 0.45).normalize();
  sun.position.set(focus.x + sd.x * 800, focus.y + sd.y * 800, focus.z + sd.z * 800);
  sun.target.position.copy(focus);
  trees.update(camera);
  sky.follow(camera);
  hr.update(focus);
  water.update(clock.elapsedTime);
  farSea.update(clock.elapsedTime, camera);
  bgCamera.position.copy(camera.position); bgCamera.quaternion.copy(camera.quaternion);
  if (bgCamera.fov !== camera.fov || bgCamera.aspect !== camera.aspect) { bgCamera.fov = camera.fov; bgCamera.aspect = camera.aspect; bgCamera.updateProjectionMatrix(); }
  updateLabels();
  google.update(camera, walker);
  // con la nitidezza la scena passa da un buffer con antialiasing (post.js), altrimenti dritta a schermo
  renderer.setRenderTarget(settings.sharp ? post.target : null);
  renderer.clear();
  renderer.render(bgScene, bgCamera);
  renderer.clearDepth();
  renderer.render(scene, camera);
  if (settings.sharp) post.present();
}
frame();
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); post.resize(); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });
window.__acq = { camera, controls, walker, heightAt, setMode, scene, renderer, bgScene, bgCamera, setHour, settings, intro, axes, googleActive: () => google.active() };
