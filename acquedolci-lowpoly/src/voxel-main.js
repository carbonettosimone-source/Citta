/**
 * Punto d'ingresso MINIMO per il motore voxel (M6, V1: solo il suolo, streaming a chunk).
 * Niente edifici/alberi/collisioni ancora: serve solo a vedere e camminare sul terreno voxel
 * vero, per giudicare la qualità della mesh prima di costruirci sopra il resto.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildCityVoxel } from './engine/buildCityVoxel.js';
import { createTouchControls } from './touchControls.js';

const CITIES = import.meta.glob('./cities/*.json', { eager: true, import: 'default' });

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
// near 0,5 (non 0,1): con 0,1 la precisione del depth buffer a 200 m è ~2 cm e finestre/porte
// (5 cm davanti al muro) sfarfallavano; con 0,5 scende a ~5 mm.
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.5, 2500);
const controls = new OrbitControls(camera, canvas);
controls.enablePan = false;
controls.minDistance = 4;
controls.maxDistance = 220;
controls.maxPolarAngle = Math.PI * 0.49;

const player = new THREE.Object3D();
const keys = {};
addEventListener('keydown', (e) => { keys[e.code] = true; });
addEventListener('keyup', (e) => { keys[e.code] = false; });
const touch = createTouchControls({ onZoom: (d) => { camera.position.addScaledVector(camera.position.clone().sub(controls.target).normalize(), d * 0.1); } });

const loaderEl = document.getElementById('loader');
const loaderMsg = document.getElementById('loader-msg');
const statsEl = document.getElementById('stats');
function loaderText(msg) { if (loaderMsg) loaderMsg.textContent = msg; }

async function load() {
  const id = new URLSearchParams(location.search).get('city') || 'acquedolci';
  const cityConfig = CITIES[`./cities/${id}.json`] || CITIES['./cities/acquedolci.json'];
  const city = await buildCityVoxel(cityConfig, scene, camera, renderer, { onProgress: loaderText });

  player.position.set(city.spawn.x, city.spawn.y, city.spawn.z);
  controls.target.set(city.spawn.x, city.spawn.y + 1.4, city.spawn.z);
  camera.position.set(city.spawn.x + 30, city.spawn.y + 22, city.spawn.z + 38);
  controls.update();

  const title = document.querySelector('header h1');
  if (title) title.textContent = `${cityConfig.name} — voxel`;
  const subtitle = document.querySelector('header .subtitle');
  if (subtitle) subtitle.textContent = `${city.buildings.count} edifici reali · suolo a 0,25 m`;

  loaderEl?.classList.add('hide');

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(0.05, clock.getDelta());

    // movimento relativo alla camera (stessa idea di main.js): avanti = dove guarda l'orbit
    let mx = 0, mz = 0;
    if (keys.KeyW || keys.ArrowUp) mz -= 1;
    if (keys.KeyS || keys.ArrowDown) mz += 1;
    if (keys.KeyA || keys.ArrowLeft) mx -= 1;
    if (keys.KeyD || keys.ArrowRight) mx += 1;
    if (touch.state.active) { mx += touch.state.x; mz += touch.state.y; }
    const sprint = keys.ShiftLeft || keys.ShiftRight || touch.state.sprint;
    const len = Math.hypot(mx, mz);
    if (len > 0.05) {
      const yaw = Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z);
      const fx = Math.sin(yaw), fz = Math.cos(yaw);
      const rx = Math.sin(yaw + Math.PI / 2), rz = Math.cos(yaw + Math.PI / 2);
      const speed = (sprint ? 9 : 4.2) * dt / len;
      const dx = (fx * -mz + rx * mx) * speed;
      const dz = (fz * -mz + rz * mx) * speed;
      const p = player.position;
      // Collisione con gli edifici, un asse alla volta: contro un muro si scivola lungo di esso
      // invece di fermarsi. Se si è già dentro (spawn sfortunato) si lascia uscire.
      const stuck = city.blocked(p.x, p.z);
      if (stuck || !city.blocked(p.x + dx, p.z)) p.x += dx;
      if (stuck || !city.blocked(p.x, p.z + dz)) p.z += dz;
    }
    const targetY = city.sampleY(player.position.x, player.position.z);
    player.position.y += (targetY - player.position.y) * Math.min(1, dt * 12);

    const off = camera.position.clone().sub(controls.target);
    controls.target.set(player.position.x, player.position.y + 1.4, player.position.z);
    camera.position.copy(controls.target).add(off);
    controls.update();
    // L'orbita limita l'angolo rispetto al giocatore, non al terreno: su una strada in pendenza la
    // camera finiva sotto il suolo (si vedeva il cielo "sotto" e il terreno dal rovescio).
    const groundY = city.sampleY(camera.position.x, camera.position.z) + 1.0;
    if (camera.position.y < groundY) {
      camera.position.y = groundY;
      camera.lookAt(controls.target);
    }

    const r = city.update(player.position.x, player.position.z);
    if (r.generated || r.removed) {
      let tris = 0;
      for (const c of city.chunks.chunks.values()) if (c.mesh) tris += c.mesh.geometry.index.count / 3;
      statsEl.innerHTML = `chunk vivi: <strong>${city.chunks.chunks.size}</strong> · triangoli: <strong>${Math.round(tris / 1000)}k</strong> · voxel 0,25 m`;
    }

    renderer.render(scene, camera);
  }
  animate();
}

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

load().catch((err) => {
  console.error(err);
  loaderText(`Errore: ${err.message}`);
});
