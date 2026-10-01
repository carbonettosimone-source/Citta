import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { makeHeightSampler, buildTerrain } from './terrain.js';
import { buildBuildings, makeCollider } from './buildings.js';
import { buildTrees } from './trees.js';
import { facadeMaterials } from './facade.js';
import { buildStreets } from './streets.js';
import { createGrade } from './grade.js';
import { buildSigns } from './signs.js';
import { buildLandmarks } from './landmarks.js';
import { ve3Floor } from './piazza-ve3.js';
import { createOrthoHR } from './ortho-hr.js';
import { HR } from './ortho.js';
import { initGround } from './ground.js';
import { buildWater } from './water.js';
import { buildBackground } from './background.js';
import { createSky, applyTime, setSkyDate, NIGHT } from './daylight.js';
import { createIntro } from './intro.js';
import { createPost } from './post.js';
import { createTraffic } from './traffic.js';
import { createNPCs } from './npcs.js';
import { createGame } from './game/index.js';
import { createCharacter, buildPlayerMesh, animatePlayer, SKIN_OPTS, HAIR_OPTS, HSTYLE_OPTS, SHIRT_OPTS, PANT_OPTS, HAT_OPTS, GLASS_OPTS } from './character.js';

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
// camera ortografica per la vista miniatura (drone, toggle impostazioni)
// near fortemente negativo: evita il piano di taglio anteriore che "affetta" gli edifici
// alle angolazioni basse (l'ortografica può avere near < 0 senza problemi di depth buffer)
const orthoCamera   = new THREE.OrthographicCamera(-1, 1, 1, -1, -8000, 15000);
const bgOrthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -8000, 250000);

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
setSkyDate(2027, 5, 20); // si vota a fine primavera: tramonti tardi, verso nord-ovest, sul mare

async function load() {
  say('modello degli edifici');
  const [model, dtmMeta, orthoMeta, streets, signsData] = await Promise.all([
    fetch('data/model.json').then((r) => r.json()),
    fetch('data/dtm.json').then((r) => r.json()),
    fetch('data/ortho.json').then((r) => r.json()),
    fetch('data/streets.json').then((r) => r.json()),
    fetch('data/signs.json').then((r) => r.ok ? r.json() : null).catch(() => null),
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
  const natural = makeHeightSampler(dtmMeta, heights, model.origin);
  // strade a sezione orizzontale e terreno spianato sotto (grade.js): tutto il resto poggia su groundAt
  const grade = createGrade(streets, natural);
  const heightAt = grade.groundAt;
  // gli edifici sul bordo di uno scavo stradale scendono fino alla quota della via
  for (const b of model.buildings) {
    for (let i = 0; i < b.r.length; i += 2) {
      const x = b.r[i], z = b.r[i + 1];
      if (grade.edgeDist(x, z) < 1.5) b.b = Math.min(b.b, grade.roadAt(x, z) - 0.2);
    }
  }

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
  scene.add(buildTerrain({ orthoMeta, textures, heightAt: grade.terrainAt, baseAt: grade.baseAt, refine: grade.refine, origin: model.origin, bounds }));
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
  scene.add(buildStreets(streets, heightAt, collider, grade));
  say('cartelli stradali');
  if (signsData) scene.add(buildSigns(signsData, heightAt));
  say('luoghi d\'interesse');
  scene.add(buildLandmarks(model, heightAt));
  say('alberi');
  const trees = buildTrees(model.trees || []);
  scene.add(trees.group);

  const hr = hrMeta ? createOrthoHR(hrMeta, model.origin, renderer) : { update() {} };
  return { model, heightAt, grade, collider, trees, streets, hr, water, farSea };
}

const { model, heightAt, grade, collider, trees, streets, hr, water, farSea } = await load();
$('loader').classList.add('hide');

// ---------- traffico + pedoni
const traffic = createTraffic(streets.roads, heightAt);
const npcs    = createNPCs(streets.roads, (x, z) => heightAt(x, z) + 0.32); // sul marciapiede, non dentro
scene.add(traffic.group, npcs.group);

// ---------- personaggio giocatore + schermata creazione
// sul terrazzo di Piazza Vittorio Emanuele III si cammina sul pavimento, non sul terreno
const floorAt = (x, z) => ve3Floor(x, z, heightAt(x, z));
const character = createCharacter(scene, (x, z) => floorAt(x, z) + 0.22);
setupCharScreen(character);

// ---------- drone (orbita) — parte sopra Piazza Vittorio Emanuele III e il Municipio
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 8; controls.maxDistance = 3500;
const g0 = heightAt(0, 0);
controls.target.set(-60, g0, -20);
camera.position.set(-10, g0 + 90, 190);
controls.update();

// ---------- vista sempre dall'alto: niente prima persona, la camera drone segue il personaggio
controls.minDistance = 7; controls.maxDistance = 1400;
controls.maxPolarAngle = 1.25; // mai sotto i ~18° sull'orizzonte: l'orizzonte e le Eolie si vedono, ma resta una vista dall'alto
controls.screenSpacePanning = false;

// ---------- impostazioni: nomi dei luoghi, ora del giorno, luci notturne (ricordate nel browser)
const settings = { names: false, hour: 11, lights: true, sharp: true, ortho: false };
const post = createPost(renderer);
try { Object.assign(settings, JSON.parse(localStorage.getItem('acq-settings') || '{}')); } catch { /* niente memoria: valori di base */ }
const saveSettings = () => { try { localStorage.setItem('acq-settings', JSON.stringify(settings)); } catch { /* pazienza */ } };
const basics = new Set();
for (const sc of [scene, bgScene]) sc.traverse((o) => { const m = o.material; if (o.isMesh && m?.isMeshBasicMaterial && m.blending === THREE.NormalBlending) basics.add(m); });
const lamps = scene.getObjectByName('lamps');
const plazaProps = scene.getObjectByName('plaza-props');
const ve3 = scene.getObjectByName('piazza-ve3');
const dayCtx = { sky, sun, hemi, moonLight, fog: scene.fog, bgScene, basics: [...basics], waters: [water.uniforms, farSea.uniforms], lights: true, sunDir: new THREE.Vector3(0, 1, 0) };
/** applica un'ora senza salvarla (l'intro ha le sue ore) */
let curHour = 9;
function applyHour(h) {
  curHour = h;
  dayCtx.lights = settings.lights;
  applyTime(h, dayCtx);
  lamps?.userData.night?.(NIGHT.value);
  plazaProps?.userData.night?.(NIGHT.value);
  ve3?.userData.night?.(NIGHT.value);
}
$('optLights').checked = settings.lights;
$('optLights').onchange = (e) => { settings.lights = e.target.checked; saveSettings(); applyHour(curHour); };
$('optSharp').checked = settings.sharp;
$('optSharp').onchange = (e) => { settings.sharp = e.target.checked; saveSettings(); };
$('optOrtho').checked = settings.ortho;
$('optOrtho').onchange = (e) => { settings.ortho = e.target.checked; saveSettings(); };
$('bSet').onclick = () => { const p = $('settings'); p.hidden = !p.hidden; $('bSet').setAttribute('aria-expanded', String(!p.hidden)); $('bSet').classList.toggle('on', !p.hidden); };
applyHour(20.1);
try { localStorage.removeItem('acq-gkey'); } catch { /* niente da togliere */ }

// ---------- schermata creazione personaggio
function setupCharScreen(char) {
  const toCSS = (h) => (h != null ? '#' + h.toString(16).padStart(6, '0') : null);

  const buildSwatches = (containerId, opts, getIdx, setIdx, onPick) => {
    const el = $(containerId);
    opts.forEach((opt, i) => {
      const sw = document.createElement('button');
      sw.type = 'button';
      sw.className = 'swatch' + (getIdx() === i ? ' sel' : '');
      if (opt.hex != null) {
        sw.style.background = toCSS(opt.hex);
      } else {
        sw.classList.add('swatch-none');
      }
      sw.title = opt.label;
      sw.addEventListener('click', () => {
        setIdx(i);
        el.querySelectorAll('.swatch').forEach((s, j) => s.classList.toggle('sel', j === i));
        if (onPick) onPick();
      });
      el.appendChild(sw);
    });
  };

  let draft = { ...char.data };

  // anteprima 3D: lo stesso modello del gioco, che gira piano su se stesso
  let pv = null;
  const initPreview = () => {
    if (pv) return pv;
    const cv = $('charCanvas');
    const r = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    r.setPixelRatio(Math.min(devicePixelRatio, 2)); r.setSize(cv.width, cv.height, false);
    r.outputColorSpace = THREE.SRGBColorSpace;
    const sc = new THREE.Scene();
    sc.add(new THREE.HemisphereLight(0xffffff, 0x8a7a66, 1.6));
    const key = new THREE.DirectionalLight(0xfff2dc, 2.2); key.position.set(2, 3, 4); sc.add(key);
    const cam = new THREE.PerspectiveCamera(30, cv.width / cv.height, 0.1, 20);
    cam.position.set(0, 1.6, 3.4); cam.lookAt(0, 1.2, 0);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.6, 32), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12 }));
    disc.rotation.x = -Math.PI / 2; sc.add(disc);
    pv = { r, sc, cam, mesh: null, t: 0, on: false };
    const loop = () => {
      if (!pv.on) return;
      requestAnimationFrame(loop);
      pv.t += 0.016;
      if (pv.mesh) { pv.mesh.rotation.y = Math.sin(pv.t * 0.7) * 0.7; animatePlayer(pv.mesh, pv.t * 2.2); }
      r.render(sc, cam);
    };
    pv.start = () => { if (!pv.on) { pv.on = true; loop(); } };
    return pv;
  };
  const updatePreview = () => {
    const p = initPreview();
    if (p.mesh) p.sc.remove(p.mesh);
    p.mesh = buildPlayerMesh(draft);
    p.sc.add(p.mesh);
    p.start();
  };
  const buildChips = (containerId, opts, getIdx, setIdx, onPick) => {
    const el = $(containerId);
    opts.forEach((opt, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'chip' + (getIdx() === i ? ' sel' : ''); b.textContent = opt.label;
      b.addEventListener('click', () => { setIdx(i); el.querySelectorAll('.chip').forEach((c, j) => c.classList.toggle('sel', j === i)); onPick?.(); });
      el.appendChild(b);
    });
  };

  const openScreen = () => {
    draft = { ...char.data };
    $('charName').value    = draft.name || 'Giocatore';
    $('charSlim').checked  = !!draft.slim;
    ['skinPicker','hairPicker','hstylePicker','shirtPicker','pantPicker','hatPicker','glassPicker']
      .forEach(id => $(id).innerHTML = '');
    buildSwatches('skinPicker',  SKIN_OPTS,  () => draft.skin,  (i) => { draft.skin  = i; }, updatePreview);
    buildSwatches('hairPicker',  HAIR_OPTS,  () => draft.hair,  (i) => { draft.hair  = i; }, updatePreview);
    buildChips('hstylePicker', HSTYLE_OPTS, () => draft.hstyle ?? 0, (i) => { draft.hstyle = i; }, updatePreview);
    buildSwatches('shirtPicker', SHIRT_OPTS, () => draft.shirt, (i) => { draft.shirt = i; }, updatePreview);
    buildSwatches('pantPicker',  PANT_OPTS,  () => draft.pant,  (i) => { draft.pant  = i; }, updatePreview);
    buildSwatches('hatPicker',   HAT_OPTS,   () => draft.hat   ?? 0, (i) => { draft.hat   = i; }, updatePreview);
    buildSwatches('glassPicker', GLASS_OPTS, () => draft.glass ?? 0, (i) => { draft.glass = i; }, updatePreview);
    updatePreview();
    $('charScreen').hidden = false;
  };

  const confirmScreen = () => {
    draft.name  = $('charName').value.trim() || 'Giocatore';
    draft.slim  = $('charSlim').checked;
    char.applyData(draft);
    $('charScreen').hidden = true;
    if (pv) pv.on = false;
    const cb = char.onConfirm; char.onConfirm = null; cb?.();
  };

  $('charConfirm').onclick = confirmScreen;
  $('charName').addEventListener('keydown', (e) => { if (e.key === 'Enter') confirmScreen(); });
  $('charSlim').onchange = (e) => { draft.slim = e.target.checked; updatePreview(); };
  $('bChar').onclick = () => { $('settings').hidden = true; $('bSet').classList.remove('on'); openScreen(); };
  char.open = (onConfirm) => { char.onConfirm = onConfirm; openScreen(); };


  return { openScreen };
}


const intro = createIntro({
  camera, controls, heightAt, setTime: applyHour,
  onEnd() {
    applyHour(20.1); // il titolo sta all'ora dorata, e l'alba della prima giornata parte da qui
    game.setTitleHour(20.1);
    controls.target.set(-60, g0, -20); camera.position.set(-10, g0 + 90, 190); controls.update();
    game.titleScreen();
  },
});
$('bIntro').onclick = () => { $('settings').hidden = true; $('bSet').classList.remove('on'); intro.start(); };

// ---------- il gioco: Sweetwaters — Road to Leadership (src/game/)
const game = createGame({
  scene, camera, controls, canvas: renderer.domElement, groundAt: floorAt, streets, character, applyHour,
  getCamera: () => (settings.ortho && !intro.active ? orthoCamera : camera),
  openCharScreen: (then) => character.open(then),
});
$('bNewGame').onclick = () => { $('settings').hidden = true; $('bSet').classList.remove('on'); game.titleScreen(); };
intro.start();

const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  if (intro.active) intro.update(dt); else { controls.update(); game.update(dt, clock.elapsedTime); }

  // l'ombra segue ciò che si guarda
  const focus = controls.target;
  const sd = dayCtx.sunDir.y > 0.02 ? dayCtx.sunDir : new THREE.Vector3(0.4, 0.6, 0.45).normalize();
  sun.position.set(focus.x + sd.x * 800, focus.y + sd.y * 800, focus.z + sd.z * 800);
  sun.target.position.copy(focus);
  trees.update(camera);
  sky.follow(camera, clock.elapsedTime);
  hr.update(focus);
  water.update(clock.elapsedTime);
  farSea.update(clock.elapsedTime, camera);
  traffic.update(dt, camera);
  npcs.update(dt, camera);
  bgCamera.position.copy(camera.position); bgCamera.quaternion.copy(camera.quaternion);
  if (bgCamera.fov !== camera.fov || bgCamera.aspect !== camera.aspect) { bgCamera.fov = camera.fov; bgCamera.aspect = camera.aspect; bgCamera.updateProjectionMatrix(); }

  // camera attiva: ortografica (drone, se abilitato) o prospettica
  const useOrtho = settings.ortho && !intro.active;
  if (useOrtho) {
    const dist = Math.max(1, camera.position.distanceTo(controls.target));
    const halfH = dist * Math.tan(camera.fov * Math.PI / 360);
    const halfW = halfH * (innerWidth / innerHeight);
    orthoCamera.left = -halfW; orthoCamera.right = halfW;
    orthoCamera.top = halfH; orthoCamera.bottom = -halfH;
    orthoCamera.position.copy(camera.position); orthoCamera.quaternion.copy(camera.quaternion);
    orthoCamera.updateProjectionMatrix();
    bgOrthoCamera.left = -halfW; bgOrthoCamera.right = halfW;
    bgOrthoCamera.top = halfH; bgOrthoCamera.bottom = -halfH;
    bgOrthoCamera.position.copy(camera.position); bgOrthoCamera.quaternion.copy(camera.quaternion);
    bgOrthoCamera.updateProjectionMatrix();
  }
  const activeCam = useOrtho ? orthoCamera : camera;
  const activeBgCam = useOrtho ? bgOrthoCamera : bgCamera;

  // con la nitidezza la scena passa da un buffer con antialiasing (post.js), altrimenti dritta a schermo
  renderer.setRenderTarget(settings.sharp ? post.target : null);
  renderer.clear();
  renderer.render(bgScene, activeBgCam);
  renderer.clearDepth();
  renderer.render(scene, activeCam);
  if (settings.sharp) post.present();
}
frame();
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); post.resize(); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); bgCamera.aspect = innerWidth / innerHeight; bgCamera.updateProjectionMatrix(); });
window.__acq = { camera, controls, game, heightAt, grade, HR, setHour: applyHour, getHour: () => curHour, scene, renderer, bgScene, bgCamera, settings, intro, orthoCamera, bgOrthoCamera, traffic, npcs, character };
