/**
 * Sistema creazione personaggio — mesh player low-poly + UI overlay.
 *
 * Rig leggero con pivot corretti (spalla, anca, ginocchio) per animazioni
 * walk / idle leggibili. Proporzioni realistiche: testa ~1/8 altezza totale,
 * spalle/fianchi credibili, arti snelli. Accessori: cappello, occhiali.
 *
 * Esporta:
 *   createCharacter(scene, heightAt)
 *     → { group, update(dt, walker), rebuild(), applyData(d), data }
 */
import * as THREE from 'three';
import { RIG, bodyGeometry, armGeometry, thighGeometry, shinGeometry, paint } from './people.js';

// ---- palette disponibili nell'UI ------------------------------------------
export const SKIN_OPTS = [
  { label: 'chiara',    hex: 0xf5d0a0 },
  { label: 'media',     hex: 0xe0a870 },
  { label: 'olivacea',  hex: 0xc0845a },
  { label: 'scura',     hex: 0x8b4a2a },
  { label: 'molto sc.', hex: 0x4e2510 },
];
export const HAIR_OPTS = [
  { label: 'nero',    hex: 0x180c04 },
  { label: 'castano', hex: 0x4a2a10 },
  { label: 'biondo',  hex: 0xd4a050 },
  { label: 'rosso',   hex: 0x8a2818 },
  { label: 'grigio',  hex: 0x888888 },
  { label: 'bianco',  hex: 0xe8e0d8 },
];
export const SHIRT_OPTS = [
  { label: 'bianco',  hex: 0xf0ece4 },
  { label: 'azzurro', hex: 0x4a88cc },
  { label: 'rosso',   hex: 0xcc3820 },
  { label: 'verde',   hex: 0x3a6a38 },
  { label: 'giallo',  hex: 0xe8c048 },
  { label: 'arancio', hex: 0xe86820 },
  { label: 'viola',   hex: 0x703888 },
  { label: 'nero',    hex: 0x181818 },
];
export const PANT_OPTS = [
  { label: 'blu jeans', hex: 0x2a3f6a },
  { label: 'nero',      hex: 0x181818 },
  { label: 'grigio',    hex: 0x585858 },
  { label: 'beige',     hex: 0xc8a870 },
  { label: 'verde',     hex: 0x3a5030 },
  { label: 'marrone',   hex: 0x4a2e18 },
];
export const HAT_OPTS = [
  { label: 'nessuno',  hex: null,     style: null   },
  { label: 'berretta', hex: 0x1a1a1a, style: 'beanie' },
  { label: 'cappello', hex: 0x4a2a10, style: 'fedora' },
  { label: 'coppola',  hex: 0x3a3030, style: 'cap'    },
  { label: 'basco',    hex: 0x1a1a60, style: 'beret'  },
];
export const GLASS_OPTS = [
  { label: 'nessuno', hex: null,     lens: null    },
  { label: 'scuri',   hex: 0x0a0a0a, lens: 'dark'  },
  { label: 'chiari',  hex: 0x1a4a8a, lens: 'clear' },
];

export const HSTYLE_OPTS = [
  { label: 'corti', style: 'short' },
  { label: 'lunghi', style: 'long' },
  { label: 'chignon', style: 'bun' },
  { label: 'stempiato', style: 'bald' },
];

const LS_KEY = 'acq-char';

export const DEFAULT_CHAR = {
  name:  'Giocatore',
  skin:  0,
  hair:  0,
  hstyle: 0,
  shirt: 0,
  pant:  0,
  slim:  false,
  hat:   0,
  glass: 0,
};

export function loadChar() {
  try { return { ...DEFAULT_CHAR, ...JSON.parse(localStorage.getItem(LS_KEY) || '{}') }; }
  catch { return { ...DEFAULT_CHAR }; }
}
export function saveChar(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch { /* niente */ }
}

// ---- modello: people.js (volto con occhi, bocca, naso; capelli; arti tondi) ---------------
function part(geo, hex) {
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: hex }));
  m.castShadow = true;
  return m;
}
const R = RIG.headR, HY = RIG.headY;

// ---- cappello ---------------------------------------------------------------
function buildHat(group, style, hex) {
  switch (style) {
    case 'beanie': {
      const geo = new THREE.SphereGeometry(R * 1.12, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55);
      const h = part(geo, hex); h.position.y = HY + 0.03; group.add(h);
      const rim = part(new THREE.TorusGeometry(R * 1.02, 0.022, 8, 20), hex); rim.rotation.x = Math.PI / 2; rim.position.y = HY + 0.045; group.add(rim);
      break;
    }
    case 'fedora': {
      const hatG = new THREE.Group();
      hatG.add(part(new THREE.CylinderGeometry(R * 0.78, R * 0.95, 0.15, 16), hex));
      const band = part(new THREE.CylinderGeometry(R * 0.96, R * 0.97, 0.03, 16), 0x1a1210); band.position.y = -0.045; hatG.add(band);
      const brim = part(new THREE.CylinderGeometry(R * 1.75, R * 1.75, 0.016, 20), hex); brim.position.y = -0.07; hatG.add(brim);
      hatG.position.y = HY + 0.13; group.add(hatG);
      break;
    }
    case 'cap': { // coppola siciliana: piatta, visiera corta in avanti
      const hatG = new THREE.Group();
      const top = new THREE.SphereGeometry(R * 1.1, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.4); top.scale(1, 0.55, 1.12);
      hatG.add(part(top, hex));
      const brim = part(new THREE.CylinderGeometry(R * 0.75, R * 0.75, 0.014, 16, 1, false, -Math.PI / 2, Math.PI), hex); brim.position.set(0, 0.005, R * 0.72); hatG.add(brim);
      hatG.position.y = HY + 0.06; hatG.rotation.x = 0.12; group.add(hatG);
      break;
    }
    case 'beret': {
      const geo = new THREE.SphereGeometry(R * 1.2, 16, 8); geo.scale(1, 0.32, 1);
      const h = part(geo, hex); h.position.set(0.03, HY + 0.1, -0.01); h.rotation.z = -0.15; group.add(h);
      break;
    }
  }
}

// ---- occhiali ----------------------------------------------------------------
function buildGlasses(group, hex, dark) {
  const z = R * 0.86 + 0.03, y = HY + 0.018;
  for (const sx of [1, -1]) {
    const rimM = part(new THREE.TorusGeometry(0.034, 0.006, 6, 16), 0x151515); rimM.position.set(sx * 0.048, y, z); group.add(rimM);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.032, 16), new THREE.MeshLambertMaterial({ color: hex, transparent: !dark, opacity: dark ? 1 : 0.35 }));
    lens.position.set(sx * 0.048, y, z + 0.001); group.add(lens);
    const arm = part(new THREE.BoxGeometry(0.006, 0.006, 0.13), 0x151515); arm.position.set(sx * R * 0.9, y + 0.01, z - 0.07); group.add(arm);
  }
  const bridge = part(new THREE.BoxGeometry(0.03, 0.006, 0.006), 0x151515); bridge.position.set(0, y + 0.01, z); group.add(bridge);
}

// ---- mesh del personaggio ---------------------------------------------------
export function buildPlayerMesh(data) {
  const slim = !!data.slim;
  const pal = {
    skin: SKIN_OPTS[data.skin]?.hex ?? SKIN_OPTS[0].hex, hair: HAIR_OPTS[data.hair]?.hex ?? HAIR_OPTS[0].hex,
    shirt: SHIRT_OPTS[data.shirt]?.hex ?? SHIRT_OPTS[0].hex, pants: PANT_OPTS[data.pant]?.hex ?? PANT_OPTS[0].hex,
  };
  const style = HSTYLE_OPTS[data.hstyle ?? 0]?.style || 'short';
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const mesh = (geo) => { const m = new THREE.Mesh(paint(geo, pal), mat); m.castShadow = true; return m; };

  const g = new THREE.Group();
  g.name = 'player';
  const body = mesh(bodyGeometry({ hair: style, female: style === 'long' || style === 'bun', slim }));
  body.name = 'torso';
  g.add(body);
  const ws = slim ? 0.86 : 1;
  const armGeo = armGeometry({ slim });
  for (const [name, sx] of [['armLPivot', 1], ['armRPivot', -1]]) {
    const pivot = new THREE.Group(); pivot.name = name;
    pivot.position.set(sx * RIG.shoulderX * ws, RIG.shoulderY, 0);
    pivot.rotation.z = sx * 0.06; // braccia appena staccate dai fianchi
    pivot.add(mesh(armGeo.clone()));
    g.add(pivot);
  }
  const thighGeo = thighGeometry(), shinGeo = shinGeometry();
  for (const [pivName, shinName, sx] of [['thighLPivot', 'shinLPivot', 1], ['thighRPivot', 'shinRPivot', -1]]) {
    const thighPivot = new THREE.Group(); thighPivot.name = pivName;
    thighPivot.position.set(sx * RIG.hipX * ws, RIG.hipY, 0);
    thighPivot.add(mesh(thighGeo.clone()));
    const shinPivot = new THREE.Group(); shinPivot.name = shinName;
    shinPivot.position.set(0, -0.42, 0);
    shinPivot.add(mesh(shinGeo.clone()));
    thighPivot.add(shinPivot);
    g.add(thighPivot);
  }

  const hatOpt = HAT_OPTS[data.hat ?? 0];
  const glassOpt = GLASS_OPTS[data.glass ?? 0];
  if (hatOpt?.style) buildHat(g, hatOpt.style, hatOpt.hex);
  if (glassOpt?.lens) buildGlasses(g, glassOpt.hex, glassOpt.lens === 'dark');
  // il protagonista è un filo più grande dei passanti: dall'alto si riconosce
  g.scale.setScalar(1.12);
  return g;
}

// ---- animazione walk --------------------------------------------------------
export function animatePlayer(group, phase) {
  const swing  = Math.sin(phase) * 0.42;       // oscillazione gambe ±0.42 rad
  const swingA = Math.cos(phase) * 0.32;        // braccia in controfase

  const thighLP = group.getObjectByName('thighLPivot');
  const thighRP = group.getObjectByName('thighRPivot');
  const armLP   = group.getObjectByName('armLPivot');
  const armRP   = group.getObjectByName('armRPivot');

  if (thighLP) {
    thighLP.rotation.x = -swing;
    const sL = thighLP.getObjectByName('shinLPivot');
    // il ginocchio si piega quando la coscia è dietro (swing < 0 → caviglia torna su)
    if (sL) sL.rotation.x = Math.max(0, -Math.sin(phase)) * 0.38 + 0.06;
  }
  if (thighRP) {
    thighRP.rotation.x = swing;
    const sR = thighRP.getObjectByName('shinRPivot');
    if (sR) sR.rotation.x = Math.max(0, Math.sin(phase)) * 0.38 + 0.06;
  }
  if (armLP) armLP.rotation.x =  swingA;
  if (armRP) armRP.rotation.x = -swingA;
}

// ---- idle (respiro) ---------------------------------------------------------
function applyIdle(group, t) {
  const breathe = Math.sin(t / 1200) * 0.025;
  const aL = group.getObjectByName('armLPivot');
  const aR = group.getObjectByName('armRPivot');
  const sL = group.getObjectByName('thighLPivot')?.getObjectByName('shinLPivot');
  const sR = group.getObjectByName('thighRPivot')?.getObjectByName('shinRPivot');
  const tL = group.getObjectByName('thighLPivot');
  const tR = group.getObjectByName('thighRPivot');
  if (tL) tL.rotation.x = 0;
  if (tR) tR.rotation.x = 0;
  if (sL) sL.rotation.x = 0.06;
  if (sR) sR.rotation.x = 0.06;
  if (aL) aL.rotation.x =  breathe;
  if (aR) aR.rotation.x = -breathe;
}

// ---- sistema personaggio completo ------------------------------------------
export function createCharacter(scene, heightAt) {
  let data = loadChar();
  let playerMesh = buildPlayerMesh(data);
  scene.add(playerMesh);
  playerMesh.visible = false;

  let walkPhase = 0;

  function rebuild() {
    scene.remove(playerMesh);
    playerMesh = buildPlayerMesh(data);
    playerMesh.visible = false;
    scene.add(playerMesh);
  }

  function update(dt, walker) {
    if (!walker.on) { playerMesh.visible = false; return; }
    playerMesh.visible = true;
    const { x, z } = walker.pos;
    const groundY = heightAt(x, z);
    playerMesh.rotation.y = walker.yaw;

    const moving = walker.moving ?? (
      walker.keys?.KeyW || walker.keys?.ArrowUp ||
      walker.keys?.KeyS || walker.keys?.ArrowDown ||
      Math.hypot(walker.joy?.x || 0, walker.joy?.y || 0) > 0.1
    );

    if (moving) {
      walkPhase += dt * (walker.stride || 5.5);
      animatePlayer(playerMesh, walkPhase);
      playerMesh.position.set(x, groundY + Math.abs(Math.sin(walkPhase)) * 0.014, z);
    } else {
      applyIdle(playerMesh, performance.now());
      playerMesh.position.set(x, groundY, z);
    }
  }

  return {
    get data() { return data; },
    update,
    rebuild,
    applyData(d) { data = { ...DEFAULT_CHAR, ...d }; saveChar(data); rebuild(); },
    playerMesh: () => playerMesh,
  };
}
