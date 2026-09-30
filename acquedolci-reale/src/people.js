/**
 * Persone: un solo modello, usato dal giocatore (character.js) e dai pedoni (npcs.js).
 * Testa tonda con occhi, pupille, sopracciglia, naso, bocca e orecchie; capelli in quattro stili;
 * spalle, braccia e gambe arrotondate, mani, scarpe. Proporzioni un filo "da gioco" (testa appena
 * più grande del vero) perché si guarda dall'alto.
 *
 * Ogni vertice porta uno `slot` (pelle, capelli, maglia, pantaloni, scarpe, occhio, pupilla, bocca,
 * sopracciglio): il colore lo decide chi disegna. Il giocatore lo scrive nei vertex color; i pedoni
 * lo scelgono nello shader da una tavolozza per istanza, così 260 persone diverse stanno in 5 draw call.
 * Misure in metri per una persona alta 1,75 m, piedi a y = 0.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const SLOT = { skin: 0, hair: 1, shirt: 2, pants: 3, shoes: 4, eye: 5, pupil: 6, mouth: 7, brow: 8 };
const FIXED = { [SLOT.shoes]: 0x2a221c, [SLOT.eye]: 0xf7f4ee, [SLOT.pupil]: 0x1b1410, [SLOT.mouth]: 0x9c3b35 };

// punti di aggancio (y): spalla, anca
export const RIG = { shoulderY: 1.39, shoulderX: 0.19, hipY: 0.90, hipX: 0.085, headY: 1.58, headR: 0.135 };

function slotted(geo, slot) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  g.deleteAttribute('uv');
  const n = g.attributes.position.count;
  g.setAttribute('slot', new THREE.Float32BufferAttribute(new Float32Array(n).fill(slot), 1));
  return g;
}
const at = (geo, x, y, z) => { geo.translate(x, y, z); return geo; };

/** testa con il volto: guarda verso +Z */
function headParts(hair, female, q = 1) {
  const R = RIG.headR, y = RIG.headY, P = [];
  const n = (v, min = 4) => Math.max(min, Math.round(v * q));
  const skull = new THREE.SphereGeometry(R, n(20, 5), n(16, 4)); skull.scale(0.93, 1.06, 0.96);
  P.push(slotted(at(skull, 0, y, 0), SLOT.skin));
  // orecchie
  for (const s of [1, -1]) { const e = new THREE.SphereGeometry(0.03, n(8, 5), n(6, 4)); e.scale(0.5, 1, 0.8); P.push(slotted(at(e, s * R * 0.92, y - 0.005, -0.005), SLOT.skin)); }
  // occhi: bianco un po' schiacciato + pupilla scura davanti
  for (const s of [1, -1]) {
    const w = new THREE.SphereGeometry(0.03, n(12, 5), n(10, 4)); w.scale(1, 1.15, 0.55);
    P.push(slotted(at(w, s * 0.048, y + 0.018, R * 0.86), SLOT.eye));
    const p = new THREE.SphereGeometry(0.017, n(10, 5), n(8, 4)); p.scale(1, 1.1, 0.5);
    P.push(slotted(at(p, s * 0.046, y + 0.016, R * 0.86 + 0.014), SLOT.pupil));
    // sopracciglio
    const b = new THREE.BoxGeometry(0.056, 0.012, 0.014); b.rotateZ(s * (female ? -0.12 : -0.06));
    P.push(slotted(at(b, s * 0.05, y + 0.066, R * 0.86), SLOT.brow));
  }
  // naso
  const nose = new THREE.SphereGeometry(0.02, n(8, 5), n(6, 4)); nose.scale(0.9, 1.1, 1);
  P.push(slotted(at(nose, 0, y - 0.018, R * 0.93), SLOT.skin));
  // bocca: sorriso (mezzo toro rivolto in giù)
  const m = new THREE.TorusGeometry(0.032, 0.008, n(6, 3), n(14, 6), Math.PI); m.rotateZ(Math.PI); m.scale(1, 0.7, 1);
  P.push(slotted(at(m, 0, y - 0.052, R * 0.84), SLOT.mouth));
  // capelli
  const cap = (s = 1.07) => { const c = new THREE.SphereGeometry(R * s, n(20, 5), n(12, 4), 0, Math.PI * 2, 0, Math.PI * 0.55); c.scale(0.95, 1.04, 1); return c; };
  if (hair === 'short') {
    const c = cap(); c.rotateX(-0.28); P.push(slotted(at(c, 0, y + 0.02, -0.008), SLOT.hair));
    const f = new THREE.BoxGeometry(0.2, 0.035, 0.05); f.rotateX(0.35); P.push(slotted(at(f, 0, y + 0.1, R * 0.62), SLOT.hair));
  } else if (hair === 'long') {
    const c = cap(1.09); c.rotateX(-0.22); P.push(slotted(at(c, 0, y + 0.02, -0.01), SLOT.hair));
    // theta 0 = davanti (+Z): la ciocca gira dietro e lascia libero il viso
    const back = new THREE.CylinderGeometry(R * 0.97, R * 0.82, 0.28, n(16, 6), 1, true, Math.PI * 0.32, Math.PI * 1.36);
    P.push(slotted(at(back, 0, y - 0.07, -0.012), SLOT.hair));
  } else if (hair === 'bun') {
    const c = cap(); c.rotateX(-0.3); P.push(slotted(at(c, 0, y + 0.02, -0.008), SLOT.hair));
    P.push(slotted(at(new THREE.SphereGeometry(0.06, n(12, 5), n(8, 4)), 0, y + 0.1, -R * 0.75), SLOT.hair));
  } else { // stempiato: solo la corona dietro
    const c = new THREE.SphereGeometry(R * 1.04, n(20, 5), n(8, 4), Math.PI * 0.2, Math.PI * 1.6, Math.PI * 0.35, Math.PI * 0.3); c.rotateY(Math.PI);
    P.push(slotted(at(c, 0, y, -0.005), SLOT.hair));
  }
  return P;
}

/** corpo senza arti: testa, collo, busto, spalle, bacino */
export function bodyGeometry({ hair = 'short', female = false, slim = false, q = 1 } = {}) {
  const w = slim ? 0.86 : 1, P = headParts(hair, female, q);
  const n = (v, min = 4) => Math.max(min, Math.round(v * q));
  P.push(slotted(at(new THREE.CylinderGeometry(0.05, 0.058, 0.1, n(10, 6)), 0, 1.44, 0), SLOT.skin));
  // busto: tronco di cono ellittico, più largo alle spalle
  const t = new THREE.CylinderGeometry(0.185 * w, (female ? 0.15 : 0.16) * w, 0.52, n(16, 6)); t.scale(1, 1, 0.62);
  P.push(slotted(at(t, 0, 1.15, 0), SLOT.shirt));
  // spalle tonde
  for (const s of [1, -1]) { const sh = new THREE.SphereGeometry(0.066 * w, n(12, 5), n(8, 4)); sh.scale(1.1, 0.75, 0.85); P.push(slotted(at(sh, s * (RIG.shoulderX - 0.025) * w, RIG.shoulderY - 0.005, 0), SLOT.shirt)); }
  // colletto
  const col = new THREE.TorusGeometry(0.058, 0.014, n(6, 3), n(16, 6)); col.rotateX(Math.PI / 2);
  P.push(slotted(at(col, 0, 1.405, 0), SLOT.shirt));
  // bacino (pantaloni)
  const h = new THREE.CylinderGeometry(0.155 * w, 0.15 * w, 0.14, n(16, 6)); h.scale(1, 1, 0.66);
  P.push(slotted(at(h, 0, 0.87, 0), SLOT.pants));
  return mergeGeometries(P);
}

/** braccio: pivot alla spalla, pende verso -Y. Manica fino al gomito, avambraccio e mano */
export function armGeometry({ slim = false, q = 1 } = {}) {
  const w = slim ? 0.88 : 1, P = [];
  const n = (v, min = 4) => Math.max(min, Math.round(v * q));
  P.push(slotted(at(new THREE.CapsuleGeometry(0.052 * w, 0.2, n(4, 2), n(10, 5)), 0, -0.14, 0), SLOT.shirt));
  P.push(slotted(at(new THREE.CapsuleGeometry(0.042 * w, 0.2, n(4, 2), n(10, 5)), 0, -0.42, 0.01), SLOT.skin));
  const hand = new THREE.SphereGeometry(0.052 * w, n(10, 5), n(8, 4)); hand.scale(0.8, 1.1, 0.9);
  P.push(slotted(at(hand, 0, -0.6, 0.015), SLOT.skin));
  return mergeGeometries(P);
}

/** gamba intera per i pedoni: pivot all'anca */
export function legGeometry({ slim = false, q = 1 } = {}) {
  const w = slim ? 0.9 : 1, P = [];
  const n = (v, min = 4) => Math.max(min, Math.round(v * q));
  P.push(slotted(at(new THREE.CapsuleGeometry(0.068 * w, 0.64, n(4, 2), n(10, 5)), 0, -0.4, 0), SLOT.pants));
  P.push(slotted(shoe(w), SLOT.shoes));
  return mergeGeometries(P);
}
function shoe(w) { const s = new THREE.CapsuleGeometry(0.052 * w, 0.12, 4, 8); s.rotateX(Math.PI / 2); s.scale(1, 0.7, 1); return at(s, 0, -0.865, 0.045); }

/** gamba del giocatore in due pezzi (ginocchio che si piega) */
export function thighGeometry() { return mergeGeometries([slotted(at(new THREE.CapsuleGeometry(0.07, 0.3, 4, 10), 0, -0.2, 0), SLOT.pants)]); }
export function shinGeometry() {
  return mergeGeometries([slotted(at(new THREE.CapsuleGeometry(0.06, 0.3, 4, 10), 0, -0.2, 0), SLOT.pants), slotted(at(shoe(1), 0, 0.42, 0), SLOT.shoes)]);
}

/** vertex color dai colori scelti: per un modello non istanziato */
export function paint(geo, pal) {
  const slot = geo.attributes.slot.array, n = slot.length, col = new Float32Array(n * 3), c = new THREE.Color();
  const brow = new THREE.Color(pal.hair).multiplyScalar(0.7);
  for (let i = 0; i < n; i++) {
    const s = slot[i];
    if (s === SLOT.skin) c.setHex(pal.skin); else if (s === SLOT.hair) c.setHex(pal.hair); else if (s === SLOT.shirt) c.setHex(pal.shirt);
    else if (s === SLOT.pants) c.setHex(pal.pants); else if (s === SLOT.brow) c.copy(brow); else c.setHex(FIXED[s]);
    col.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

/**
 * Materiale per le persone istanziate: la tavolozza (pelle, capelli, maglia, pantaloni) arriva per
 * istanza negli attributi iSkin/iHair/iShirt/iPants; lo slot del vertice sceglie quale usare.
 */
export function peopleMaterial() {
  const m = new THREE.MeshLambertMaterial({ color: 0xffffff });
  m.customProgramCacheKey = () => 'people-palette';
  m.onBeforeCompile = (sh) => {
    const fixed = (hex) => { const c = new THREE.Color(hex); return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`; };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
attribute float slot; attribute vec3 iSkin; attribute vec3 iHair; attribute vec3 iShirt; attribute vec3 iPants;
varying vec3 vPal;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
float sl = floor(slot + 0.5);
vPal = sl < 0.5 ? iSkin : sl < 1.5 ? iHair : sl < 2.5 ? iShirt : sl < 3.5 ? iPants : sl < 4.5 ? ${fixed(FIXED[SLOT.shoes])}
  : sl < 5.5 ? ${fixed(FIXED[SLOT.eye])} : sl < 6.5 ? ${fixed(FIXED[SLOT.pupil])} : sl < 7.5 ? ${fixed(FIXED[SLOT.mouth])} : iHair * 0.7;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vPal;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= vPal;');
  };
  return m;
}

/** attributi per istanza della tavolozza su una geometria (clonata per ogni InstancedMesh) */
export function withPalette(geo, count) {
  const g = geo.clone();
  for (const k of ['iSkin', 'iHair', 'iShirt', 'iPants']) g.setAttribute(k, new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3));
  return g;
}
export function setPalette(geo, i, pal) {
  const c = new THREE.Color();
  for (const [k, hex] of [['iSkin', pal.skin], ['iHair', pal.hair], ['iShirt', pal.shirt], ['iPants', pal.pants]]) { c.setHex(hex); geo.attributes[k].setXYZ(i, c.r, c.g, c.b); }
}
