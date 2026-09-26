import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createTouchControls } from './touchControls.js';
import { buildCity } from './engine/buildCity.js';
import { createLook } from './engine/look/createLook.js';
import { createAtmosphere } from './engine/sky/atmosphere.js';
import { createBiome } from './engine/biome/index.js';
import { nearestRoad } from './engine/roads/RoadBuilder.js';
import { circleHitsPolygon } from './engine/spatial/grid.js';
import { generateCity, generateHorizon, NetworkBlockedError } from './engine/runtime/generateCity.js';
import { placeFromUrl, rememberPlace } from './engine/runtime/places.js';
import { createNavigation } from './ui/navigation.js';
import { createSearch } from './ui/search.js';
// Città pronte (script di bake): ?city=<id>. Città qualsiasi generate nell'app: ?luogo=lat,lon&nome=…
const CITIES = import.meta.glob('./cities/*.json', { eager: true, import: 'default' });
const BAKED = Object.values(CITIES).map((c) => ({ id: c.id, name: c.name, region: c.region }));
let cityConfig = null;

const PLAYER_R = 0.55;
const WALK = 9;
const SPRINT = 18;

const canvas = document.getElementById('c');
const statsEl = document.getElementById('stats');
let look = null;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.4, 3500);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enablePan = false;
controls.minDistance = 4;
controls.maxDistance = 140;
controls.maxPolarAngle = Math.PI * 0.48;
controls.minPolarAngle = 0.15;

function zoomBy(delta) {
  const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
  const dist = offset.length();
  const newDist = THREE.MathUtils.clamp(dist + delta, controls.minDistance, controls.maxDistance);
  offset.setLength(newDist);
  camera.position.copy(controls.target).add(offset);
  controls.update();
}

const touch = createTouchControls({
  onZoom: (d) => (camMode === 'drone' ? (drone.vy += -d * 3) : zoomBy(d)),
});

// ---------------------------------------------------------------- modalità camera
// vicina = terza persona, lontana = terza persona alta (vista d'insieme), drone = volo libero
const CAM_MODES = ['vicina', 'lontana', 'drone'];
const CAM_LABEL = { vicina: '🧍', lontana: '🗺️', drone: '🚁' };
let camMode = 'vicina';
const drone = { pos: new THREE.Vector3(), yaw: 0, pitch: -0.35, vel: new THREE.Vector3(), vy: 0, dragging: false, lx: 0, ly: 0 };

function setCamMode(mode) {
  const prev = camMode;
  camMode = mode;
  try { localStorage.setItem('cam-mode', mode); } catch { /* opzionale */ }
  const btn = document.getElementById('cam-btn');
  if (btn) { btn.textContent = CAM_LABEL[mode]; btn.setAttribute('aria-label', `Camera: ${mode}`); }
  if (mode === 'drone') {
    // il drone parte da dove sta la camera, guardando nella stessa direzione
    drone.pos.copy(camera.position);
    const dir = new THREE.Vector3().subVectors(controls.target, camera.position).normalize();
    drone.yaw = Math.atan2(-dir.x, -dir.z);
    drone.pitch = Math.asin(THREE.MathUtils.clamp(dir.y, -0.99, 0.99));
    drone.vel.set(0, 0, 0);
    drone.vy = 0;
    controls.enabled = false;
    player.visible = true;
    return;
  }
  if (prev === 'drone') {
    // atterraggio: il personaggio scende sotto il drone, sulla strada più vicina
    const back = camera.position.clone();
    teleport(drone.pos.x, drone.pos.z);
    camera.position.copy(back);
  }
  controls.enabled = true;
  if (mode === 'lontana') {
    controls.minDistance = 40;
    controls.maxDistance = 320;
    controls.maxPolarAngle = Math.PI * 0.42;
    placeOrbit(120, 0.95);
  } else {
    controls.minDistance = 4;
    controls.maxDistance = 60;
    controls.maxPolarAngle = Math.PI * 0.48;
    placeOrbit(16, 1.1);
  }
}

/** Posiziona la camera orbitale a distanza e inclinazione date, mantenendo la direzione attuale. */
function placeOrbit(dist, polar) {
  const off = new THREE.Vector3().subVectors(camera.position, controls.target);
  const az = Math.atan2(off.x, off.z);
  camera.position.set(
    controls.target.x + Math.sin(az) * Math.sin(polar) * dist,
    controls.target.y + Math.cos(polar) * dist,
    controls.target.z + Math.cos(az) * Math.sin(polar) * dist,
  );
  controls.update();
}

// sguardo del drone: trascina sul canvas
canvas.addEventListener('pointerdown', (e) => {
  if (camMode !== 'drone') return;
  drone.dragging = true; drone.lx = e.clientX; drone.ly = e.clientY;
});
addEventListener('pointermove', (e) => {
  if (camMode !== 'drone' || !drone.dragging) return;
  drone.yaw -= (e.clientX - drone.lx) * 0.005;
  drone.pitch = THREE.MathUtils.clamp(drone.pitch - (e.clientY - drone.ly) * 0.005, -1.45, 1.2);
  drone.lx = e.clientX; drone.ly = e.clientY;
});
addEventListener('pointerup', () => { drone.dragging = false; });

const _dq = [];
function updateDrone(dt) {
  const joy = touch.state;
  const fwd = new THREE.Vector3(-Math.sin(drone.yaw), 0, -Math.cos(drone.yaw));
  const right = new THREE.Vector3(Math.cos(drone.yaw), 0, -Math.sin(drone.yaw));
  const move = new THREE.Vector3();
  if (keys.KeyW || keys.ArrowUp) move.add(fwd);
  if (keys.KeyS || keys.ArrowDown) move.sub(fwd);
  if (keys.KeyD || keys.ArrowRight) move.add(right);
  if (keys.KeyA || keys.ArrowLeft) move.sub(right);
  if (Math.abs(joy.x) > 0.12 || Math.abs(joy.y) > 0.12) { move.addScaledVector(fwd, -joy.y); move.addScaledVector(right, joy.x); }
  if (keys.Space || keys.KeyE) drone.vy += 30 * dt;
  if (keys.KeyC || keys.KeyQ) drone.vy -= 30 * dt;
  const ground = sampleY(drone.pos.x, drone.pos.z);
  const alt = Math.max(0, drone.pos.y - ground);
  // più in alto = più veloce (si attraversa la città in pochi secondi, si "cammina" rasoterra)
  const speed = (12 + alt * 0.6) * (keys.ShiftLeft || keys.ShiftRight || joy.sprint ? 2.5 : 1);
  const want = move.lengthSq() ? move.normalize().multiplyScalar(speed * Math.min(1, Math.max(Math.hypot(joy.x, joy.y), move.length() ? 1 : 0))) : move;
  drone.vel.lerp(want, 1 - Math.exp(-dt * 4)); // inerzia
  drone.vy *= Math.exp(-dt * 2.5);
  drone.pos.addScaledVector(drone.vel, dt);
  drone.pos.y += drone.vy * dt;
  // quota minima: 2 m sopra terreno, strade e tetti
  let floor = ground + 2;
  if (footprintGrid) for (const f of footprintGrid.query(drone.pos.x, drone.pos.z, 1.5, _dq)) {
    if (circleHitsPolygon(drone.pos.x, drone.pos.z, 1.5, f.pts)) floor = Math.max(floor, f.maxY + 6);
  }
  if (drone.pos.y < floor) { drone.pos.y += (floor - drone.pos.y) * Math.min(1, dt * 8); drone.vy = Math.max(0, drone.vy); }
  drone.pos.y = Math.min(drone.pos.y, ground + 450);
  camera.position.copy(drone.pos);
  camera.rotation.set(drone.pitch, drone.yaw, 0, 'YXZ');
}
canvas.style.touchAction = 'none';
document.body.style.touchAction = 'none';
document.documentElement.style.touchAction = 'none';


function createPlayer(color) {
  const g = new THREE.Group();
  g.name = 'player';
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.35, 0.7, 4, 8),
    new THREE.MeshLambertMaterial({ color, flatShading: true }),
  );
  body.position.y = 0.9;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.45, 0.45),
    new THREE.MeshLambertMaterial({ color: 0xf0d5b8, flatShading: true }),
  );
  head.position.y = 1.55;
  head.castShadow = true;
  g.add(head);
  scene.add(g);
  return g;
}

/** @type {{minX:number,maxX:number,minZ:number,maxZ:number}[]} */
let buildingAABBs = [];
let footprintGrid = null;
let navigation = null;
let biome = null;
const _groundFocus = new THREE.Vector3();
let atmosphere = null;
let surfaceY = null;
/** @type {{pts:{x:number,z:number}[], width:number, highway?:string}[]} */
let roadPolylines = [];
let sampleY = (x, z) => 0;
let landmarkUpdate = () => {};
let yAsphalt = 0.26;

const player = createPlayer(0x3d7ea6);
const velocity = new THREE.Vector3();
let draggingCamera = false;
canvas.addEventListener('pointerdown', () => { draggingCamera = true; });
addEventListener('pointerup', () => { draggingCamera = false; });
addEventListener('pointercancel', () => { draggingCamera = false; });

/** Sposta giocatore e camera insieme (ricerca locale, mappa). */
function teleport(x, z) {
  let tx = x, tz = z;
  // atterra su strada/marciapiede se ce n'è uno vicino, mai dentro un edificio
  const n = cityRef?.network?.nearestSeg(x, z, 250);
  if (n && !n.s.node) {
    tx = n.s.ax + (n.s.bx - n.s.ax) * n.t;
    tz = n.s.az + (n.s.bz - n.s.az) * n.t;
  } else if (collides(x, z) && roadPolylines.length) {
    const nr = nearestRoad(x, z, roadPolylines);
    if (nr) { tx = x - nr.nx * nr.dist; tz = z - nr.nz * nr.dist; }
  }
  const ty = surfaceY ? surfaceY(tx, tz) : sampleY(tx, tz);
  const d = new THREE.Vector3(tx - player.position.x, ty - player.position.y, tz - player.position.z);
  player.position.add(d);
  controls.target.add(d);
  camera.position.add(d);
  velocity.set(0, 0, 0);
  controls.update();
}

// Loader
const loaderEl = document.getElementById('loader');
const loaderMsg = document.getElementById('loader-msg');
function loaderText(msg) { if (loaderMsg) loaderMsg.textContent = msg; statsEl.textContent = msg; }
function loaderError(title, msg) {
  loaderEl.querySelector('.l-card').innerHTML =
    `<h2 class="l-err">${title}</h2><p>${msg}</p><a href="${location.pathname}">Torna alla città di partenza</a>`;
}
let cityRef = null;
const keys = Object.create(null);
canvas.tabIndex = 0;
canvas.style.outline = 'none';
canvas.addEventListener('pointerdown', () => canvas.focus());
addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement) return; // si sta scrivendo nella ricerca
  keys[e.code] = true;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
});
addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

const _near = [];
function collides(x, z) {
  // La carreggiata resta sempre percorribile (rete di sicurezza se un footprint OSM la invade).
  // Prima il margine era halfW + 1,8 m e gli AABB ruotati bloccavano le strade diagonali:
  // ora si collide con i muri veri, e marciapiedi e cortili sono raggiungibili.
  if (roadPolylines.length) {
    const nr = nearestRoad(x, z, roadPolylines);
    if (nr && nr.dist < nr.halfW) return false;
  }
  if (footprintGrid) {
    for (const f of footprintGrid.query(x, z, PLAYER_R, _near)) {
      if (circleHitsPolygon(x, z, PLAYER_R, f.pts)) return true;
    }
    return false;
  }
  for (const b of buildingAABBs) {
    if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) return true;
  }
  return false;
}

function tryMove(dx, dz) {
  const x0 = player.position.x;
  const z0 = player.position.z;
  const x1 = x0 + dx;
  const z1 = z0 + dz;
  if (!collides(x1, z1)) {
    player.position.x = x1;
    player.position.z = z1;
    return;
  }
  if (!collides(x1, z0)) player.position.x = x1;
  else if (!collides(x0, z1)) player.position.z = z1;
}

function updatePlayer(dt) {
  const joy = touch.state;
  const sprint = keys.ShiftLeft || keys.ShiftRight || joy.sprint;
  const camOffset = new THREE.Vector3().subVectors(camera.position, controls.target);
  const yaw = Math.atan2(camOffset.x, camOffset.z);
  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
  const move = new THREE.Vector3();
  if (keys.KeyW || keys.ArrowUp) move.add(forward);
  if (keys.KeyS || keys.ArrowDown) move.sub(forward);
  if (keys.KeyD || keys.ArrowRight) move.add(right);
  if (keys.KeyA || keys.ArrowLeft) move.sub(right);
  const dead = 0.12;
  if (Math.abs(joy.x) > dead || Math.abs(joy.y) > dead) {
    move.addScaledVector(forward, -joy.y);
    move.addScaledVector(right, joy.x);
  }
  // Accelerazione/frenata morbide invece di scatti a velocità piena
  // Velocità analogica col joystick (mezza corsa = mezza velocità), piena con la tastiera
  const keyMag = keys.KeyW || keys.KeyS || keys.KeyA || keys.KeyD || keys.ArrowUp || keys.ArrowDown || keys.ArrowLeft || keys.ArrowRight ? 1 : 0;
  const joyMag = Math.min(1, Math.hypot(joy.x, joy.y));
  const mag = Math.max(keyMag, joyMag > dead ? joyMag : 0);
  const wanted = move.lengthSq() > 0 ? move.normalize().multiplyScalar((sprint ? SPRINT : WALK) * mag) : move;
  velocity.lerp(wanted, 1 - Math.exp(-dt * 9));
  if (velocity.lengthSq() > 0.01) {
    tryMove(velocity.x * dt, velocity.z * dt);
    const targetYaw = Math.atan2(velocity.x, velocity.z);
    let d = targetYaw - player.rotation.y;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    player.rotation.y += d * Math.min(1, dt * 12);
  }
  // Camera che si porta alle spalle quando si cammina in avanti (non durante lo strafe)
  const forwardIntent = (keys.KeyW || keys.ArrowUp ? 1 : 0) + (joy.y < -0.35 ? 1 : 0);
  const strafe = Math.abs(joy.x) > 0.35 || keys.KeyA || keys.KeyD || keys.ArrowLeft || keys.ArrowRight;
  if (forwardIntent && !strafe && velocity.lengthSq() > 4 && !draggingCamera) {
    const off = new THREE.Vector3().subVectors(camera.position, controls.target);
    const cur = Math.atan2(off.x, off.z);
    const behind = player.rotation.y + Math.PI;
    let d = behind - cur;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    const a = d * Math.min(1, dt * 1.6);
    off.applyAxisAngle(new THREE.Vector3(0, 1, 0), a);
    camera.position.copy(controls.target).add(off);
  }
  // Quota vera: marciapiede (+15 cm), carreggiata o terreno. Lo scalino del cordolo
  // si sale con un breve smorzamento invece che a scatto.
  const target = surfaceY ? surfaceY(player.position.x, player.position.z) : sampleY(player.position.x, player.position.z);
  const k = Math.min(1, dt * 14);
  const gy = Math.abs(target - player.position.y) > 1.5 ? target : player.position.y + (target - player.position.y) * k;
  player.position.y = gy;
  controls.target.set(player.position.x, gy + 1.2, player.position.z);
}

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  look?.resize(innerWidth, innerHeight);
});

async function load() {
  const livePlace = placeFromUrl();
  if (livePlace) {
    loaderText(`Genero ${livePlace.name}…`);
    cityConfig = await generateCity(livePlace, loaderText);
    rememberPlace(livePlace);
  } else {
    const id = new URLSearchParams(location.search).get('city') || 'acquedolci';
    cityConfig = CITIES[`./cities/${id}.json`] || CITIES['./cities/acquedolci.json'];
  }
  const city = await buildCity(cityConfig, scene, camera, { onProgress: loaderText });
  cityRef = city;

  buildingAABBs = city.buildings.aabbs;
  footprintGrid = city.buildings.footprintGrid || null;
  surfaceY = city.surfaceY || null;
  roadPolylines = city.roads?.polylines || [];
  yAsphalt = city.style?.roads?.yAsphalt ?? 0.26;
  look = createLook(renderer, scene, camera, city.style || {});
  atmosphere = createAtmosphere({
    scene,
    look,
    style: city.style,
    cityConfig,
    horizon: city.horizon,
    // niente tempo reale: ora del giorno scelta (default: luce di fine pomeriggio)
    timeOverride: new URLSearchParams(location.search).get('ora') || '17:30',
  });
  // rimuovi luci default residue se presenti
  scene.traverse((o) => {
    /* keep look-lights */
  });
  sampleY = city.sampleY;
  landmarkUpdate = city.landmarks?.update || (() => {});

  const { spawn } = city;
  player.position.set(spawn.x, spawn.y, spawn.z);
  controls.target.set(spawn.x, spawn.y + 1.2, spawn.z);
  camera.position.set(spawn.x + 55, spawn.y + 42, spawn.z + 70);
  controls.update();

  const title = document.querySelector('header h1');
  const sub = document.querySelector('header .subtitle');
  if (title) title.textContent = `${cityConfig.name} — low poly`;
  if (sub) sub.textContent = `OpenStreetMap · ${cityConfig.region || ''}`;

  const bbox = cityConfig.bbox;
  const bboxStr = bbox
    ? `${bbox.south.toFixed(3)}–${bbox.north.toFixed(3)} N, ${bbox.west.toFixed(3)}–${bbox.east.toFixed(3)} E`
    : 'n/d';
  const elevStr = city.demInfo
    ? `quota DEM ${city.demInfo.min.toFixed(0)}–${city.demInfo.max.toFixed(0)} m s.l.m.`
    : 'DEM n/d';
  const nLm = city.landmarks?.landmarks?.length ?? 0;
  const insetN = city.buildings.insetCount ?? 0;
  const nBar = city.barriers?.count ?? 0;
  const appN = city.appearance?.stats?.s2RoofSamples ?? 0;
  const roofMix = city.buildings?.roofStats;
  statsEl.innerHTML =
    `<strong>${city.buildings.count}</strong> edifici · <strong>${city.roads.wayCount}</strong> strade ` +
    `(${city.roads.segmentCount} seg.) · <strong>${city.vegetation.treeCount}</strong> alberi · ` +
    `<strong>${nLm}</strong> landmark · <strong>${city.plazas?.count ?? 0}</strong> piazze` +
    (nBar ? ` · <strong>${nBar}</strong> barriere` : '') +
    (appN ? ` · S2 tetti <strong>${appN}</strong>` : '') +
    (roofMix ? ` · tetti f/g/h ${roofMix.flat||0}/${roofMix.gable||0}/${roofMix.hip||0}` : '') +
    (city.region
      ? `<br/><span style="opacity:.75">${Object.entries(city.region.archetypes.weights)
          .map(([k, w]) => `${k} ${Math.round(w * 100)}%`)
          .join(' · ')} · T ${city.region.climate.tMean}°C (${city.region.climate.source})` +
        (city.region.location.country ? ` · ${city.region.location.country.toUpperCase()}` : '') +
        `</span>`
      : '') +
    (atmosphere
      ? `<br/><span style="opacity:.75">☀ ${atmosphere.info.time} (${atmosphere.info.mode}) · alt ${atmosphere.info.altitude}° az ${atmosphere.info.azimuth}°` +
        `${atmosphere.info.sea ? ' · mare' : ''}${atmosphere.info.horizon ? ' · orizzonte' : ''}</span>`
      : '') +
    `<br/><span style="opacity:.75">${bboxStr} · ${elevStr}` +
    (insetN ? ` · inset strade ${insetN}` : '') +
    `</span>`;

  // ---- bioma vivo (erba in streaming, particellari, gabbiani)
  biome = createBiome({ scene, city, look });

  // ---- navigazione e ricerca
  navigation = createNavigation({
    city,
    // in volo la minimappa segue il drone (heading = direzione di sguardo)
    getPlayer: () => (camMode === 'drone'
      ? { x: drone.pos.x, z: drone.pos.z, heading: drone.yaw + Math.PI }
      : { x: player.position.x, z: player.position.z, heading: player.rotation.y }),
    getYaw: () => (camMode === 'drone' ? drone.yaw : Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z)),
    onTeleport: teleport,
    nearestRoad,
  });
  const search = createSearch({
    places: city.places || [],
    bakedCities: BAKED,
    onLocal: (p) => { if (camMode === 'drone') setCamMode('vicina'); teleport(p.x, p.z); },
    // Fuori dall'anteprima claude.ai (bloccata dal CSP) la ricerca nel mondo può collegarsi a
    // Internet per davvero: Vercel o un server proprio la abilitano.
    allowWorld: true,
  });
  const camBtn = document.createElement('button');
  camBtn.id = 'cam-btn';
  camBtn.type = 'button';
  document.getElementById('ui').appendChild(camBtn);
  camBtn.addEventListener('click', () => setCamMode(CAM_MODES[(CAM_MODES.indexOf(camMode) + 1) % CAM_MODES.length]));
  addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.code === 'KeyV') setCamMode(CAM_MODES[(CAM_MODES.indexOf(camMode) + 1) % CAM_MODES.length]);
  });
  let saved = 'vicina';
  try { saved = localStorage.getItem('cam-mode') || 'vicina'; } catch { /* opzionale */ }
  setCamMode(CAM_MODES.includes(saved) ? saved : 'vicina');
  document.querySelector('header').addEventListener('click', () => search.open());
  document.getElementById('info-btn').addEventListener('click', () => statsEl.classList.toggle('open'));
  const hint = document.getElementById('hint');
  setTimeout(() => hint?.classList.add('hide'), 7000);
  document.title = `${cityConfig.name} — città low poly`;

  // Orizzonte reale per le città generate: in background, a città già visibile
  if (cityConfig.live && !city.horizon && atmosphere) {
    const eye = (city.region?.terrain?.townElev ?? 0) + 1.7;
    generateHorizon(cityConfig.origin.lat, cityConfig.origin.lon, eye)
      .then((h) => { atmosphere.sky.setHorizon(h); atmosphere.info.horizon = true; })
      .catch(() => {});
  }

  loaderEl.classList.add('hide');
  canvas.focus();
  window.__acquedolci = { camera, controls, player, sampleY, scene, city };
}

const clock = new THREE.Clock();
let lastDt = 0;
function animate() {
  requestAnimationFrame(animate);
  lastDt = Math.min(clock.getDelta(), 0.05);
  if (camMode === 'drone') {
    updateDrone(lastDt);
  } else {
    controls.enabled = !touch.state.active;
    updatePlayer(lastDt);
    controls.update();
  }
  atmosphere?.update(lastDt, camera);
  navigation?.update(lastDt);
  if (biome) {
    const src = camMode === 'drone' ? drone.pos : player.position;
    _groundFocus.set(src.x, sampleY(src.x, src.z), src.z);
    biome.update(lastDt, _groundFocus, camera, camMode, camera.position.y - _groundFocus.y);
  }
  // Camera che non entra nei muri: accorciata SOLO per il rendering, così lo zoom scelto
  // dall'utente torna appena l'edificio non è più in mezzo.
  const desired = camera.position.clone();
  const clipped = camMode === 'vicina' ? unclipCamera(desired) : null;
  if (clipped) camera.position.copy(clipped);
  if (look) {
    look.followTarget(player.position);
    look.render();
  } else renderer.render(scene, camera);
  landmarkUpdate();
  if (clipped) camera.position.copy(desired);
}

const _cq = [];
let clipDist = null;
function unclipCamera(desired) {
  if (!footprintGrid) return null;
  const t = controls.target;
  const dir = new THREE.Vector3().subVectors(desired, t);
  const dist = dir.length();
  if (dist < 1) return null;
  dir.divideScalar(dist);
  let hit = dist;
  const N = 16;
  for (let i = 1; i <= N; i++) {
    const s = (dist * i) / N;
    const x = t.x + dir.x * s, y = t.y + dir.y * s, z = t.z + dir.z * s;
    let blocked = false;
    for (const f of footprintGrid.query(x, z, 0.4, _cq)) {
      // altezza del muro + margine per i tetti
      if (y < f.maxY + 3 && circleHitsPolygon(x, z, 0.4, f.pts)) { blocked = true; break; }
    }
    if (blocked) { hit = Math.max(1.6, (dist * (i - 1)) / N - 0.5); break; }
  }
  // smorzamento: si accorcia subito, si riallunga con calma
  clipDist = clipDist == null ? hit : hit < clipDist ? hit : clipDist + (hit - clipDist) * Math.min(1, lastDt * 3);
  if (clipDist >= dist - 0.05) { clipDist = dist; return null; }
  return t.clone().addScaledVector(dir, clipDist);
}

load()
  .then(animate)
  .catch((err) => {
    console.error(err);
    if (err instanceof NetworkBlockedError) {
      loaderError('Serve Internet', 'Per generare una nuova città l’app deve collegarsi a OpenStreetMap e ai dati del terreno. L’anteprima su claude.ai blocca i siti esterni: prova nell’app pubblicata su Vercel o sul tuo server.');
    } else {
      loaderError('Non sono riuscito a creare la città', err.message);
    }
  });
