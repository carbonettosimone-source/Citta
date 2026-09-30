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

const LS_KEY = 'acq-char';

export const DEFAULT_CHAR = {
  name:  'Giocatore',
  skin:  0,
  hair:  0,
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

// ---- helper mesh -----------------------------------------------------------
function part(geo, hex) {
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: hex, flatShading: true }));
  m.castShadow = true;
  return m;
}

// ---- cappello ---------------------------------------------------------------
function buildHat(group, style, hex) {
  switch (style) {
    case 'beanie': {
      const geo = new THREE.SphereGeometry(0.120, 8, 6);
      geo.scale(1, 0.62, 1);
      const h = part(geo, hex);
      h.position.y = 1.690;
      group.add(h);
      break;
    }
    case 'fedora': {
      const hatG = new THREE.Group();
      hatG.add(part(new THREE.CylinderGeometry(0.075, 0.096, 0.155, 8), hex));
      const brim = part(new THREE.CylinderGeometry(0.210, 0.210, 0.018, 10), hex);
      brim.position.y = -0.075;
      hatG.add(brim);
      hatG.position.y = 1.745;
      group.add(hatG);
      break;
    }
    case 'cap': {
      const hatG = new THREE.Group();
      hatG.add(part(new THREE.CylinderGeometry(0.100, 0.100, 0.072, 8), hex));
      const brim = part(new THREE.BoxGeometry(0.095, 0.018, 0.185), hex);
      brim.position.set(0, -0.027, 0.148);
      hatG.add(brim);
      hatG.position.y = 1.740;
      group.add(hatG);
      break;
    }
    case 'beret': {
      const geo = new THREE.SphereGeometry(0.136, 8, 6);
      geo.scale(1, 0.36, 1);
      const h = part(geo, hex);
      h.position.set(0.036, 1.730, 0);
      group.add(h);
      break;
    }
  }
}

// ---- occhiali ----------------------------------------------------------------
function buildGlasses(group, hex) {
  // montatura
  const frame = part(new THREE.BoxGeometry(0.138, 0.007, 0.007), 0x151515);
  frame.position.set(0, 1.607, 0.110);
  group.add(frame);
  // lenti
  for (const sx of [1, -1]) {
    const lens = part(new THREE.BoxGeometry(0.052, 0.035, 0.007), hex);
    lens.position.set(sx * 0.054, 1.607, 0.111);
    group.add(lens);
  }
}

// ---- mesh del personaggio ---------------------------------------------------
export function buildPlayerMesh(data) {
  const slim = data.slim;
  const ws = slim ? 0.80 : 1.0; // scala larghezze

  const skinHex  = SKIN_OPTS[data.skin]?.hex  ?? SKIN_OPTS[0].hex;
  const hairHex  = HAIR_OPTS[data.hair]?.hex  ?? HAIR_OPTS[0].hex;
  const shirtHex = SHIRT_OPTS[data.shirt]?.hex ?? SHIRT_OPTS[0].hex;
  const pantHex  = PANT_OPTS[data.pant]?.hex  ?? PANT_OPTS[0].hex;

  const g = new THREE.Group();
  g.name = 'player';

  // testa (sfera)
  const head = part(new THREE.SphereGeometry(0.112, 8, 7), skinHex);
  head.position.y = 1.605;
  head.name = 'head';
  g.add(head);

  // capelli (calotta superiore)
  const hairGeo = new THREE.SphereGeometry(0.116, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.52);
  const hairMesh = part(hairGeo, hairHex);
  hairMesh.position.set(0, 1.655, 0);
  g.add(hairMesh);

  // collo
  const neck = part(new THREE.CylinderGeometry(0.048, 0.054, 0.090, 6), skinHex);
  neck.position.y = 1.487;
  g.add(neck);

  // torso
  const torso = part(new THREE.BoxGeometry(0.265 * ws, 0.440, 0.165 * ws), shirtHex);
  torso.position.y = 1.285;
  torso.name = 'torso';
  g.add(torso);

  // cintura
  const belt = part(new THREE.BoxGeometry(0.272 * ws, 0.068, 0.172 * ws), pantHex);
  belt.position.y = 1.057;
  g.add(belt);

  // ── braccia con pivot alla spalla ────────────────────────────────────────
  const armH = 0.500;
  const armW = 0.080 * ws;
  const armGeoBase = new THREE.BoxGeometry(armW, armH, armW * 1.15);
  armGeoBase.translate(0, -armH / 2, 0); // pivot al top (spalla)

  for (const [name, sx] of [['armLPivot', 1], ['armRPivot', -1]]) {
    const pivot = new THREE.Group();
    pivot.name = name;
    pivot.position.set(sx * 0.168 * ws, 1.440, 0);
    pivot.add(part(armGeoBase.clone(), shirtHex));
    g.add(pivot);
  }

  // ── cosce con pivot all'anca ──────────────────────────────────────────────
  const thighH = 0.440;
  const thighW = 0.100 * ws;
  const thighGeoBase = new THREE.BoxGeometry(thighW * 1.30, thighH, thighW * 1.40);
  thighGeoBase.translate(0, -thighH / 2, 0);

  for (const [pivName, shinName, sx] of [
    ['thighLPivot', 'shinLPivot', 1],
    ['thighRPivot', 'shinRPivot', -1],
  ]) {
    const thighPivot = new THREE.Group();
    thighPivot.name = pivName;
    thighPivot.position.set(sx * 0.088 * ws, 1.025, 0);
    thighPivot.add(part(thighGeoBase.clone(), pantHex));

    // stinco con pivot al ginocchio (figlio della coscia)
    const shinH = 0.370;
    const shinW = 0.085 * ws;
    const shinGeoBase = new THREE.BoxGeometry(shinW * 1.15, shinH, shinW * 1.20);
    shinGeoBase.translate(0, -shinH / 2, 0);

    const shinPivot = new THREE.Group();
    shinPivot.name = shinName;
    shinPivot.position.set(0, -thighH, 0); // al ginocchio
    shinPivot.add(part(shinGeoBase.clone(), pantHex));

    // scarpa attaccata allo stinco
    const shoeGeo = new THREE.BoxGeometry(shinW * 1.25, 0.072, shinW * 2.30);
    const shoe = part(shoeGeo, 0x181410);
    shoe.position.set(0, -shinH - 0.036, shinW * 0.65);
    shinPivot.add(shoe);

    thighPivot.add(shinPivot);
    g.add(thighPivot);
  }

  // ── accessori ────────────────────────────────────────────────────────────
  const hatOpt   = HAT_OPTS[data.hat   ?? 0];
  const glassOpt = GLASS_OPTS[data.glass ?? 0];
  if (hatOpt?.style)  buildHat(g, hatOpt.style, hatOpt.hex);
  if (glassOpt?.lens) buildGlasses(g, glassOpt.hex);

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

    const moving = (
      walker.keys?.KeyW || walker.keys?.ArrowUp ||
      walker.keys?.KeyS || walker.keys?.ArrowDown ||
      Math.hypot(walker.joy?.x || 0, walker.joy?.y || 0) > 0.1
    );

    if (moving) {
      walkPhase += dt * 5.5;
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
