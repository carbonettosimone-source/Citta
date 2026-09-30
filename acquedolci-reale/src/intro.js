/**
 * Intro di "the lord of the sweetwater". Nessuna didascalia: solo movimenti di camera,
 * e alla fine il titolo. Esc interrompe. Poi si entra nel paese.
 *
 * Le quote sono metri sopra il terreno. Il nadir guarda dritto in basso, con il sud
 * in alto nel quadro (Municipio in alto, mare in basso, come le foto drone).
 */
import * as THREE from 'three';

const ease = (t) => t * t * (3 - 2 * t);
/** completa la corsa al 70% del tempo, poi resta quasi fermo */
const settle = (k) => ease(Math.min(1, k / 0.7));
const lerp3 = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

const SHOTS = [
  { // breve nadir: il paese dall'alto si avvicina dolcemente
    hour: 10.5, dur: 5, fov: 38, nadir: true,
    from: { cam: [-6, 520, -18], look: [-6, 0, -18] },
    to: { cam: [-6, 130, -18], look: [-6, 0, -18] },
    ease: settle,
  },
  { // dolly serale lento: si apre il paese, compare il titolo, poi si entra
    hour: 18.2, dur: 7, fov: 46, final: true,
    from: { cam: [-55, 68, -270], look: [-8, 14, -28] },
    to: { cam: [-22, 112, -370], look: [-6, 20, -36] },
  },
];

export function createIntro({ camera, controls, heightAt, setTime, onEnd }) {
  const $ = (id) => document.getElementById(id);
  const ui = $('intro');
  let i = -1, t = 0, active = false, ending = false;
  const cam = new THREE.Vector3(), look = new THREE.Vector3();
  const put = (v, [x, h, z]) => v.set(x, Math.max(heightAt(x, z), 0) + h, z);

  function pose(s, k) {
    const e = s.ease ? s.ease(k) : (s.final ? 1 - (1 - k) ** 3 : ease(k));
    if (s.nadir) {
      camera.up.set(0, 0, 1);
      put(cam, lerp3(s.from.cam, s.to.cam, e));
      put(look, lerp3(s.from.look, s.to.look, e));
    } else if (s.orbit) {
      camera.up.set(0, 1, 0);
      const o = s.orbit, a = o.a0 + (o.a1 - o.a0) * e, r = o.r0 + (o.r1 - o.r0) * e;
      put(cam, [o.c[0] + Math.cos(a) * r, o.h0 + (o.h1 - o.h0) * e, o.c[1] + Math.sin(a) * r]);
      put(look, [o.c[0], o.look, o.c[1]]);
    } else {
      camera.up.set(0, 1, 0);
      put(cam, lerp3(s.from.cam, s.to.cam, e));
      put(look, lerp3(s.from.look, s.to.look, e));
    }
    cam.y = Math.max(cam.y, heightAt(cam.x, cam.z) + 3);
    if (s.nadir) look.y = Math.min(look.y, cam.y - 20);
    const fov = s.fov || 42;
    if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
    camera.position.copy(cam);
    controls.target.copy(look);
    camera.lookAt(look);
  }

  function shot(n) {
    i = n; t = 0; ending = false;
    const s = SHOTS[i];
    setTime(s.hour);
    ui.classList.toggle('final', !!s.final);
    ui.classList.remove('title');
  }

  function start() {
    active = true; ending = false;
    ui.hidden = false;
    ui.classList.remove('final', 'out', 'title');
    document.body.classList.add('intro');
    controls.enabled = false;
    shot(0);
    pose(SHOTS[0], 0);
  }

  function stop() {
    if (!active) return;
    active = false; ending = false;
    ui.classList.add('out');
    ui.classList.remove('title');
    setTimeout(() => { ui.hidden = true; ui.classList.remove('out', 'final'); }, 700);
    document.body.classList.remove('intro');
    camera.up.set(0, 1, 0);
    camera.fov = 55; camera.updateProjectionMatrix();
    controls.enabled = true;
    onEnd();
  }

  addEventListener('keydown', (e) => { if (active && e.key === 'Escape') stop(); });

  function update(dt) {
    if (!active) return;
    const s = SHOTS[i];
    if (ending) {
      const fade = Math.min(1, +$('introFade').style.opacity + dt / 0.85);
      $('introFade').style.opacity = fade.toFixed(3);
      if (fade >= 1) stop();
      return;
    }
    t += dt;
    const k = Math.min(1, t / s.dur);
    pose(s, k);
    const FADE = 0.9;
    const fade = s.final ? Math.max(0, 1 - t / 1.1) : Math.max(0, 1 - t / FADE, 1 - (s.dur - t) / FADE);
    $('introFade').style.opacity = fade.toFixed(3);
    if (s.final) {
      ui.classList.toggle('title', t > 2.6);
      if (t >= s.dur) ending = true;
      return;
    }
    if (t >= s.dur) shot(i + 1);
  }

  function seek(n, time) {
    if (!active) start();
    shot(n);
    t = time;
    pose(SHOTS[n], Math.min(1, time / SHOTS[n].dur));
    $('introFade').style.opacity = '0';
    ui.classList.toggle('title', !!SHOTS[n].final && time > 2.6);
  }

  return {
    start, stop, update, seek,
    get active() { return active; },
    get index() { return i; },
    get time() { return t; },
  };
}
