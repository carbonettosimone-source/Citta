/**
 * Tile 3D fotoreali di Google (Photorealistic 3D Tiles) e, a piedi, una panoramica
 * Street View sulle tre piazze. Si scarica solo ciò che la camera vede, dentro un
 * raggio intorno alle piazze: niente archivio, niente texture in public/.
 * La chiave arriva dal campo Impostazioni (localStorage) o da VITE_GOOGLE_MAPS_API_KEY
 * e non viene mai scritta nei messaggi.
 */
import * as THREE from 'three';
import { TilesRenderer } from '3d-tiles-renderer/three';
import { GoogleCloudAuthPlugin, ReorientationPlugin, GLTFExtensionsPlugin } from '3d-tiles-renderer/plugins';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { toUtm33 } from '../scripts/geo.mjs';
import { gFade, setPlazaCenters, patchGoogleMaterial } from './google-clip.js';

const ORIGIN_LL = { lon: 14.58815, lat: 38.05618 };
/** centri delle tre piazze (WGS84). Il raggio è il disco in cui il 3D di Google sostituisce il disegno. */
const PLAZA_LL = [
  { id: 'municipio', lon: 14.58815, lat: 38.05618 },
  { id: 'liberta', lon: 14.58572, lat: 38.05513 },
  { id: 'gp2', lon: 14.58630, lat: 38.05645 },
];
const RADIUS = 180;
const MASK_R = 250;
/** punti aperti (cortile, slargo, carreggiata) per appoggiare la mesh sul DTM, non sui tetti */
const SNAP_AT = [[-8, -32], [6, -42], [-18, -24], [-230, 55], [-200, 70], [-155, -8], [-140, -16]];

const down = new THREE.Vector3(0, -1, 0);
const raycaster = new THREE.Raycaster();

function localOf(lon, lat, origin) {
  const [e, n] = toUtm33(lon, lat);
  return { x: e - origin[0], z: origin[1] - n };
}

export function createGoogleLayer({ scene, renderer, origin, heightAt, onStatus, onAttrib }) {
  const plazas = PLAZA_LL.map((p) => ({ ...p, ...localOf(p.lon, p.lat, origin), r: RADIUS, state: 'idle' }));
  setPlazaCenters(plazas);

  const root = new THREE.Group();
  root.name = 'google-tiles';
  // il plugin mette +X a ovest e +Z a nord: un mezzo giro porta +X a est e +Z a sud, come il gioco
  root.rotation.y = Math.PI;
  root.visible = false;
  scene.add(root);

  const svGroup = new THREE.Group();
  svGroup.name = 'streetview';
  scene.add(svGroup);

  let tiles = null;
  let draco = null;
  let ktx2 = null;
  let key = '';
  let locked = false;
  let failed = false;
  let stable = 0;
  let svSession = null;
  let svPromise = null;
  let svCopy = '';
  let svShown = false;
  let attribCache = '';
  let generation = 0;

  function status(t) { onStatus(t); }

  function destroyTiles() {
    generation++;
    gFade.value = 0;
    locked = false;
    failed = false;
    stable = 0;
    root.visible = false;
    root.position.y = 0;
    if (tiles) {
      root.remove(tiles.group);
      tiles.dispose();
      tiles = null;
    }
    draco?.dispose();
    ktx2?.dispose();
    draco = null;
    ktx2 = null;
    svSession = null;
    svPromise = null;
    for (const p of plazas) {
      p.state = 'idle';
      p.copyright = '';
      if (p.mesh) {
        p.mesh.material.map?.dispose();
        p.mesh.material.dispose();
        p.mesh.geometry.dispose();
        p.mesh.removeFromParent();
        p.mesh = null;
      }
    }
    pushAttrib(false, '');
  }

  function pushAttrib(show, text) {
    const line = show ? (text || '© Google') : '';
    if (line === attribCache && show === svShown) return;
    attribCache = line;
    svShown = show;
    onAttrib(show, line);
  }

  function attribLine() {
    const parts = [];
    if (tiles && locked) {
      const list = [];
      tiles.getAttributions(list);
      for (const a of list) if (a.type === 'string' && a.value) parts.push(a.value);
    }
    if (svCopy) parts.push(svCopy);
    return parts.join(' · ') || '© Google';
  }

  /** solo le tile la cui sfera ECEF tocca una piazza: il resto del globo non si scarica */
  function maskPlugin(spheres) {
    return {
      calculateTileViewError(tile, target) {
        const bv = tile.engineData?.boundingVolume;
        if (!bv?.intersectsSphere) return false;
        for (const s of spheres) if (bv.intersectsSphere(s)) return false;
        target.inView = false;
        target.error = 0;
        target.distance = Infinity;
        return true;
      },
    };
  }

  function start(nextKey) {
    destroyTiles();
    key = nextKey;
    if (!key) {
      status('');
      return;
    }
    status('Connessione alle tile 3D…');
    tiles = new TilesRenderer();
    const ell = tiles.ellipsoid;
    const spheres = PLAZA_LL.map((p) => {
      const c = new THREE.Vector3();
      ell.getCartographicToPosition(p.lat * Math.PI / 180, p.lon * Math.PI / 180, 40, c);
      return new THREE.Sphere(c, MASK_R);
    });
    draco = new DRACOLoader();
    draco.setDecoderPath('draco/');
    ktx2 = new KTX2Loader();
    ktx2.setTranscoderPath('basis/');
    ktx2.detectSupport(renderer);
    tiles.registerPlugin(new GoogleCloudAuthPlugin({ apiToken: key, autoRefreshToken: true }));
    tiles.registerPlugin(new GLTFExtensionsPlugin({ dracoLoader: draco, ktxLoader: ktx2, meshoptDecoder: MeshoptDecoder }));
    tiles.registerPlugin(new ReorientationPlugin({
      lat: ORIGIN_LL.lat * Math.PI / 180,
      lon: ORIGIN_LL.lon * Math.PI / 180,
      height: 0,
      recenter: true,
    }));
    tiles.registerPlugin(maskPlugin(spheres));
    tiles.errorTarget = 12;
    tiles.addEventListener('load-root-tileset', () => { if (!failed) status('Allineo il modello al terreno…'); });
    tiles.addEventListener('load-error', (e) => {
      if (!e.tile && !locked) {
        failed = true;
        root.visible = false;
        gFade.value = 0;
        status('Chiave rifiutata, oppure Map Tiles API non è abilitata per questo sito.');
      }
    });
    tiles.addEventListener('load-model', ({ scene: model }) => {
      model.traverse((o) => {
        o.castShadow = false;
        o.receiveShadow = false;
        if (!o.material) return;
        const list = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of list) patchGoogleMaterial(m);
      });
    });
    root.add(tiles.group);
  }

  function trySnap() {
    if (!tiles || locked || failed || tiles.visibleTiles.size === 0) return;
    root.visible = true;
    root.updateMatrixWorld(true);
    const deltas = [];
    for (const [x, z] of SNAP_AT) {
      const gy = heightAt(x, z);
      raycaster.set(new THREE.Vector3(x, gy + 280, z), down);
      raycaster.far = 560;
      const hits = raycaster.intersectObject(tiles.group, true);
      if (!hits.length) continue;
      deltas.push(gy - hits[0].point.y);
    }
    if (deltas.length < 2) {
      root.visible = false;
      return;
    }
    deltas.sort((a, b) => a - b);
    const med = deltas[deltas.length >> 1];
    if (Math.abs(med) > 400) {
      root.visible = false;
      return;
    }
    root.position.y += med;
    stable = Math.abs(med) < 0.5 ? stable + 1 : 0;
    if (stable >= 2) {
      locked = true;
      root.visible = true;
      status('3D di Google attivo sulle tre piazze');
    } else root.visible = false;
  }

  function showTiles() {
    const on = locked && tiles && tiles.visibleTiles.size > 0;
    gFade.value = on ? 1 : 0;
    if (locked) root.visible = on;
  }

  function streetSession(gen) {
    if (svSession) return Promise.resolve(svSession);
    if (!svPromise) {
      const used = key;
      svPromise = fetch(`https://tile.googleapis.com/v1/createSession?key=${encodeURIComponent(used)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mapType: 'streetview', language: 'it-IT', region: 'IT' }),
      }).then(async (res) => {
        if (!res.ok || gen !== generation) throw new Error('session');
        const json = await res.json();
        if (!json.session || gen !== generation) throw new Error('session');
        svSession = json.session;
        return svSession;
      }).catch((err) => {
        svPromise = null;
        throw err;
      });
    }
    return svPromise;
  }

  async function stitchPano(session, panoId, z, nx, ny, tileW, tileH) {
    const canvas = document.createElement('canvas');
    canvas.width = nx * tileW;
    canvas.height = ny * tileH;
    const ctx = canvas.getContext('2d');
    let got = 0;
    const jobs = [];
    for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) {
      const url = `https://tile.googleapis.com/v1/streetview/tiles/${z}/${x}/${y}?session=${encodeURIComponent(session)}&key=${encodeURIComponent(key)}&panoId=${encodeURIComponent(panoId)}`;
      jobs.push(fetch(url).then(async (r) => {
        if (!r.ok) return;
        const blob = await r.blob();
        const img = await createImageBitmap(blob);
        ctx.drawImage(img, x * tileW, y * tileH, tileW, tileH);
        img.close();
        got++;
      }).catch(() => {}));
    }
    await Promise.all(jobs);
    return got >= Math.ceil(nx * ny * 0.5) ? canvas : null;
  }

  async function loadPano(p) {
    const gen = generation;
    p.state = 'loading';
    try {
      const session = await streetSession(gen);
      if (gen !== generation) return;
      const metaRes = await fetch(`https://tile.googleapis.com/v1/streetview/metadata?session=${encodeURIComponent(session)}&key=${encodeURIComponent(key)}&lat=${p.lat}&lng=${p.lon}&radius=60`);
      if (!metaRes.ok || gen !== generation) throw new Error('meta');
      const meta = await metaRes.json();
      const panoId = meta.panoId;
      if (!panoId) throw new Error('meta');
      const lat = meta.lat ?? p.lat;
      const lng = meta.lng ?? p.lon;
      const heading = meta.heading ?? 0;
      p.copyright = meta.copyright || 'Immagini © Google';
      const tileW = meta.tileWidth || 512;
      const tileH = meta.tileHeight || 512;
      const canvas = await stitchPano(session, panoId, 2, 4, 2, tileW, tileH)
        || await stitchPano(session, panoId, 1, 2, 1, tileW, tileH)
        || await stitchPano(session, panoId, 0, 1, 1, tileW, tileH);
      if (!canvas || gen !== generation) throw new Error('tiles');
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const geo = new THREE.SphereGeometry(36, 48, 32);
      geo.scale(-1, 1, 1);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false, fog: false });
      const mesh = new THREE.Mesh(geo, mat);
      const at = localOf(lng, lat, origin);
      mesh.position.set(at.x, heightAt(at.x, at.z) + 1.6, at.z);
      // il centro dell'equirettangolare guarda verso `heading` (0 = nord, orario)
      mesh.rotation.y = -THREE.MathUtils.degToRad(heading) - Math.PI / 2;
      mesh.visible = false;
      mesh.name = `sv-${p.id}`;
      svGroup.add(mesh);
      p.mesh = mesh;
      p.state = 'ready';
    } catch {
      if (gen === generation) p.state = 'error';
    }
  }

  function updateStreet(walker) {
    svCopy = '';
    if (!key || !walker.on) {
      for (const p of plazas) if (p.mesh) { p.mesh.visible = false; p.mesh.material.opacity = 0; }
      return;
    }
    const px = walker.pos.x, pz = walker.pos.z;
    for (const p of plazas) {
      if (p.state === 'idle' && Math.hypot(px - p.x, pz - p.z) < 48) loadPano(p);
    }
    let best = null;
    for (const p of plazas) {
      if (!p.mesh) continue;
      const d = Math.hypot(px - p.mesh.position.x, pz - p.mesh.position.z);
      if (!best || d < best.d) best = { p, d };
    }
    for (const p of plazas) {
      if (!p.mesh) continue;
      const d = Math.hypot(px - p.mesh.position.x, pz - p.mesh.position.z);
      const target = best && p === best.p && d < 26 ? THREE.MathUtils.smoothstep(26, 9, d) : 0;
      const op = p.mesh.material.opacity + (target - p.mesh.material.opacity) * 0.15;
      p.mesh.material.opacity = op;
      p.mesh.material.depthWrite = op > 0.85;
      p.mesh.visible = op > 0.02;
      if (op > 0.05 && p.copyright) svCopy = p.copyright;
    }
  }

  return {
    setKey(next) {
      const v = (next || '').trim();
      if (v === key && !failed && (v ? tiles : true)) return;
      if (!v) { key = ''; destroyTiles(); return; }
      start(v);
    },
    update(camera, walker) {
      if (tiles && !failed) {
        tiles.setCamera(camera);
        tiles.setResolutionFromRenderer(camera, renderer);
        tiles.update();
        trySnap();
        showTiles();
      }
      updateStreet(walker);
      const show = (locked && tiles && tiles.visibleTiles.size > 0) || !!svCopy;
      pushAttrib(show, show ? attribLine() : '');
    },
    active() { return gFade.value > 0.5; },
  };
}
