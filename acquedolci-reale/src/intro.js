/**
 * Intro cinematografica di "The Lord of the Sweetwater": quattro inquadrature in movimento sul paese
 * vero, ognuna alla sua ora del giorno, bande nere, dissolvenze in nero e didascalie; poi la
 * panoramica finale al tramonto col titolo. Si salta con il pulsante, Esc o Invio.
 *
 * Ogni inquadratura: da → a in `dur` secondi, camera e punto guardato con quota SOPRA IL TERRENO
 * (h), così i movimenti seguono il rilievo vero. Movimento con accelerazione dolce.
 */
import * as THREE from 'three';

// viste da lontano e dall'alto: il modello rende bene a colpo d'occhio, non da vicino
const SHOTS = [
  { // carrellata laterale parallela alla costa, poche centinaia di metri al largo
    hour: 8.25, dur: 9, caption: 'Acquedolci, costa tirrenica. Primavera 2027.',
    from: { cam: [-750, 85, -760], look: [-420, 25, 60] }, to: { cam: [450, 95, -800], look: [250, 25, 40] },
  },
  { // giro largo attorno al castello Larcan-Gravina
    hour: 10.25, dur: 8.5, caption: 'Qui il potere si tramanda da secoli…', orbit: { c: [222, -248], r0: 230, r1: 190, a0: 3.7, a1: 5.1, h0: 110, h1: 85, look: 5 },
  },
  { // dall'alto sulla piazza e sul Municipio
    hour: 16.5, dur: 8.5, caption: '…di famiglia in famiglia, di favore in favore.',
    from: { cam: [-60, 150, -330], look: [-8, 5, -20] }, to: { cam: [40, 95, -230], look: [-6, 8, -5] },
  },
  { // la Chiesa Madre e il suo quartiere, salendo
    hour: 17.75, dur: 8.5, caption: 'Tutti si conoscono. Tutti devono qualcosa a qualcuno.',
    from: { cam: [-150, 75, 330], look: [-212, 12, 110] }, to: { cam: [-60, 150, 420], look: [-200, 10, 60] },
  },
  { // panoramica finale: si sale sopra il paese verso il mare, le Eolie all'orizzonte
    hour: 18.6, dur: 14, final: true,
    from: { cam: [60, 110, 560], look: [0, 20, -300] }, to: { cam: [-40, 280, 860], look: [0, 60, -1800] },
  },
];

const ease = (t) => t * t * (3 - 2 * t);
const lerp3 = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

export function createIntro({ camera, controls, heightAt, setTime, onEnd }) {
  const $ = (id) => document.getElementById(id);
  const ui = $('intro');
  let i = -1, t = 0, active = false, fade = 1;
  const cam = new THREE.Vector3(), look = new THREE.Vector3();
  const put = (v, [x, h, z]) => v.set(x, Math.max(heightAt(x, z), 0) + h, z);

  function pose(s, k) {
    const e = ease(k);
    if (s.orbit) {
      const o = s.orbit, a = o.a0 + (o.a1 - o.a0) * e, r = o.r0 + (o.r1 - o.r0) * e;
      put(cam, [o.c[0] + Math.cos(a) * r, o.h0 + (o.h1 - o.h0) * e, o.c[1] + Math.sin(a) * r]);
      put(look, [o.c[0], o.look, o.c[1]]);
    } else {
      // l'inquadratura finale rallenta ancora verso la fine: il titolo si legge su un cielo quasi fermo
      const f = s.final ? 1 - (1 - k) ** 3 : e;
      put(cam, lerp3(s.from.cam, s.to.cam, f));
      put(look, lerp3(s.from.look, s.to.look, f));
    }
    // mai sotto il terreno
    cam.y = Math.max(cam.y, heightAt(cam.x, cam.z) + 2);
    camera.position.copy(cam); controls.target.copy(look); camera.lookAt(look);
  }
  function shot(n) {
    i = n; t = 0;
    const s = SHOTS[i];
    setTime(s.hour);
    $('introCap').textContent = s.caption || '';
    $('introCap').classList.remove('show');
    if (s.final) { ui.classList.add('final'); }
  }
  function start() {
    active = true; ui.hidden = false; ui.classList.remove('final', 'out');
    document.body.classList.add('intro');
    camera.fov = 45; camera.updateProjectionMatrix();
    controls.enabled = false;
    shot(0);
  }
  function stop() {
    if (!active) return;
    active = false;
    ui.classList.add('out');
    setTimeout(() => { ui.hidden = true; ui.classList.remove('out', 'final'); }, 700);
    document.body.classList.remove('intro');
    camera.fov = 55; camera.updateProjectionMatrix();
    controls.enabled = true;
    onEnd();
  }
  $('introSkip').onclick = () => stop();
  $('introPlay').onclick = () => stop();
  addEventListener('keydown', (e) => { if (active && (e.key === 'Escape' || (e.key === 'Enter' && ui.classList.contains('final')))) stop(); });

  function update(dt) {
    if (!active) return;
    const s = SHOTS[i];
    t += dt;
    const k = Math.min(1, t / s.dur);
    pose(s, s.final ? Math.min(1, t / s.dur) : k);
    // dissolvenza in nero all'inizio e alla fine di ogni inquadratura (la finale resta aperta)
    const FADE = 0.8;
    fade = s.final ? Math.max(0, 1 - t / 1.2) : Math.max(0, 1 - t / FADE, 1 - (s.dur - t) / FADE);
    $('introFade').style.opacity = fade.toFixed(3);
    $('introCap').classList.toggle('show', !!s.caption && t > 1.0 && t < s.dur - 1.2);
    if (s.final) {
      ui.classList.toggle('title', t > 2.5);
      ui.classList.toggle('play', t > 5.5);
      return; // resta sulla panoramica finale finché non si entra
    }
    if (t >= s.dur) shot(i + 1);
  }
  return { start, stop, update, get active() { return active; } };
}
