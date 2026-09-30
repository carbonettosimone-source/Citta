/**
 * Sistema creazione personaggio — mesh player low-poly + UI overlay.
 *
 * Il personaggio è visibile dal drone sopra il punto del giocatore in modalità "a piedi".
 * Silhouette coerente con gli NPC (stessa proporzione testa/torso/gambe).
 * Animazione walk: oscillazione sinistra-destra delle gambe, bob testa.
 * Persistenza in localStorage ('acq-char').
 *
 * Esporta:
 *   createCharacter(scene, heightAt)
 *     → { group, update(dt, walker), showCreator(), hideCreator(), data }
 */
import * as THREE from 'three';

// ---- colori disponibili nell'UI ----------------------------------------------
export const SKIN_OPTS = [
  { label: 'chiara',   hex: 0xf8d4a8 },
  { label: 'media',    hex: 0xe0a870 },
  { label: 'olivacea', hex: 0xc8845a },
  { label: 'scura',    hex: 0x8b4a2a },
  { label: 'molto sc.', hex: 0x4e2510 },
];
export const HAIR_OPTS = [
  { label: 'nero',     hex: 0x180c04 },
  { label: 'castano',  hex: 0x4a2a10 },
  { label: 'biondo',   hex: 0xd4a050 },
  { label: 'rosso',    hex: 0x8a2818 },
  { label: 'grigio',   hex: 0x888888 },
  { label: 'bianco',   hex: 0xe8e0d8 },
];
export const SHIRT_OPTS = [
  { label: 'bianco',   hex: 0xf0ece4 },
  { label: 'azzurro',  hex: 0x4a88cc },
  { label: 'rosso',    hex: 0xcc3820 },
  { label: 'verde',    hex: 0x3a6a38 },
  { label: 'giallo',   hex: 0xe8c048 },
  { label: 'arancio',  hex: 0xe86820 },
  { label: 'viola',    hex: 0x703888 },
  { label: 'nero',     hex: 0x181818 },
];
export const PANT_OPTS = [
  { label: 'blu jeans', hex: 0x2a3f6a },
  { label: 'nero',      hex: 0x181818 },
  { label: 'grigio',    hex: 0x585858 },
  { label: 'beige',     hex: 0xc8a870 },
  { label: 'verde',     hex: 0x3a5030 },
  { label: 'marrone',   hex: 0x4a2e18 },
];

const LS_KEY = 'acq-char';

// ---- default e salvataggio --------------------------------------------------
export const DEFAULT_CHAR = {
  name:  'Giocatore',
  skin:  0,  // indice in SKIN_OPTS
  hair:  0,  // indice in HAIR_OPTS
  shirt: 0,  // indice in SHIRT_OPTS
  pant:  0,  // indice in PANT_OPTS
  slim:  false,
};

export function loadChar() {
  try { return { ...DEFAULT_CHAR, ...JSON.parse(localStorage.getItem(LS_KEY) || '{}') }; } catch { return { ...DEFAULT_CHAR }; }
}
export function saveChar(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch { /* niente */ }
}

// ---- mesh del personaggio ---------------------------------------------------
function colorAttr(geo, r, g, b) {
  const n = geo.attributes.position.count;
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i*3] = r; a[i*3+1] = g; a[i*3+2] = b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
}

function makePart(geo, hex) {
  const c = new THREE.Color(hex);
  colorAttr(geo, c.r, c.g, c.b);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: false, color: hex, flatShading: true });
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  return m;
}

const MAT = new THREE.MeshLambertMaterial({ flatShading: true });
function part(geo, hex) {
  const m = new THREE.Mesh(geo, MAT.clone());
  m.material.color.setHex(hex);
  m.castShadow = true;
  return m;
}

export function buildPlayerMesh(data) {
  const g = new THREE.Group();
  const slim = data.slim;
  const tw = slim ? 0.19 : 0.25; // half torso width

  const skinHex  = SKIN_OPTS[data.skin]?.hex  ?? SKIN_OPTS[0].hex;
  const hairHex  = HAIR_OPTS[data.hair]?.hex  ?? HAIR_OPTS[0].hex;
  const shirtHex = SHIRT_OPTS[data.shirt]?.hex ?? SHIRT_OPTS[0].hex;
  const pantHex  = PANT_OPTS[data.pant]?.hex  ?? PANT_OPTS[0].hex;

  // testa
  const headGeo = new THREE.SphereGeometry(0.12, 7, 6);
  headGeo.translate(0, 0, 0);
  const head = part(headGeo, skinHex); head.position.y = 1.57; head.name = 'head';

  // capelli (calotta superiore)
  const hairGeo = new THREE.SphereGeometry(0.124, 7, 4, 0, Math.PI*2, 0, Math.PI*0.5);
  hairGeo.translate(0, 0, 0);
  const hair = part(hairGeo, hairHex); hair.position.y = 1.62;

  // torso
  const torsoGeo = new THREE.BoxGeometry(tw*2, 0.36, tw*1.5);
  const torso = part(torsoGeo, shirtHex); torso.position.y = 1.27; torso.name = 'torso';

  // braccia
  const armGeo = new THREE.BoxGeometry(tw*0.6, 0.30, tw*0.65);
  const armL = part(armGeo.clone(), shirtHex); armL.position.set( tw+tw*0.32, 1.27, 0); armL.name = 'armL';
  const armR = part(armGeo.clone(), shirtHex); armR.position.set(-tw-tw*0.32, 1.27, 0); armR.name = 'armR';

  // cintura / bordo pantalone
  const beltGeo = new THREE.BoxGeometry(tw*2.05, 0.075, tw*1.55);
  const belt = part(beltGeo, pantHex); belt.position.y = 1.07;

  // coscia sinistra
  const thighGeo = new THREE.BoxGeometry(tw*0.88, 0.36, tw*0.85);
  const thighL = part(thighGeo.clone(), pantHex); thighL.position.set( tw*0.52, 0.88, 0); thighL.name = 'thighL';
  const thighR = part(thighGeo.clone(), pantHex); thighR.position.set(-tw*0.52, 0.88, 0); thighR.name = 'thighR';

  // stinco sinistro
  const shinGeo = new THREE.BoxGeometry(tw*0.78, 0.34, tw*0.75);
  const shinL = part(shinGeo.clone(), pantHex); shinL.position.set( tw*0.52, 0.52, 0); shinL.name = 'shinL';
  const shinR = part(shinGeo.clone(), pantHex); shinR.position.set(-tw*0.52, 0.52, 0); shinR.name = 'shinR';

  // scarpe
  const shoeGeo = new THREE.BoxGeometry(tw*0.82, 0.11, tw*1.35);
  const shoeL = part(shoeGeo.clone(), 0x201810); shoeL.position.set( tw*0.52, 0.17, tw*0.2);
  const shoeR = part(shoeGeo.clone(), 0x201810); shoeR.position.set(-tw*0.52, 0.17, tw*0.2);

  g.add(head, hair, torso, armL, armR, belt, thighL, thighR, shinL, shinR, shoeL, shoeR);
  g.name = 'player';

  return g;
}

// ---- animazione walk --------------------------------------------------------
export function animatePlayer(group, phase) {
  // fase 0→2π in ciclo continuo; leg swing ±15°
  const swing = Math.sin(phase) * 0.28;
  const swingA = Math.cos(phase) * 0.18; // braccia opposte alle gambe
  const bob = Math.abs(Math.sin(phase)) * 0.025;
  const PARTS = { head:'head', torso:'torso', thighL:'thighL', thighR:'thighR', shinL:'shinL', shinR:'shinR', armL:'armL', armR:'armR' };
  group.position.y += bob;
  for (const ch of group.children) {
    if (ch.name === 'thighL' || ch.name === 'shinL') ch.rotation.x = -swing;
    if (ch.name === 'thighR' || ch.name === 'shinR') ch.rotation.x =  swing;
    if (ch.name === 'armL')  ch.rotation.x =  swingA;
    if (ch.name === 'armR')  ch.rotation.x = -swingA;
  }
}

// ---- sistema personaggio completo -------------------------------------------
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
    const y = heightAt(x, z);
    playerMesh.position.set(x, y, z);
    playerMesh.rotation.y = walker.yaw;
    // camminata: avanza la fase se il giocatore si muove
    const moving = (walker.keys?.KeyW || walker.keys?.ArrowUp || walker.keys?.KeyS || walker.keys?.ArrowDown || Math.hypot(walker.joy?.x || 0, walker.joy?.y || 0) > 0.1);
    if (moving) {
      walkPhase += dt * 5.5;
      const bobSave = playerMesh.position.y;
      animatePlayer(playerMesh, walkPhase);
      playerMesh.position.y = bobSave;
    } else {
      // reset postura
      for (const ch of playerMesh.children) ch.rotation.x = 0;
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
