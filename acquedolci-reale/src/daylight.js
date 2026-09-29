/**
 * Ora del giorno ad Acquedolci: posizione vera di sole e luna (formule di SunCalc / Meeus
 * semplificate, precise a qualche decimo di grado), cielo, luce, foschia, stelle e luna col la sua
 * fase (la parte illuminata la decide la direzione del sole), luci notturne.
 * Coordinate del renderer: X est, Y su, Z sud.
 */
import * as THREE from 'three';

const LAT = 38.056, LON = 14.588, rad = Math.PI / 180, E = rad * 23.4397;
const toDays = (date) => date.valueOf() / 86400000 - 0.5 + 2440588 - 2451545;
const ra = (l, b) => Math.atan2(Math.sin(l) * Math.cos(E) - Math.tan(b) * Math.sin(E), Math.cos(l));
const dec = (l, b) => Math.asin(Math.sin(b) * Math.cos(E) + Math.cos(b) * Math.sin(E) * Math.sin(l));
function horizontal(d, alpha, delta) {
  const H = rad * (280.16 + 360.9856235 * d) + rad * LON - alpha, phi = rad * LAT;
  const alt = Math.asin(Math.sin(phi) * Math.sin(delta) + Math.cos(phi) * Math.cos(delta) * Math.cos(H));
  const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(delta) * Math.cos(phi)); // da sud, verso ovest
  return { alt, az, dir: new THREE.Vector3(-Math.sin(az) * Math.cos(alt), Math.sin(alt), Math.cos(az) * Math.cos(alt)) };
}
export function sunMoon(date) {
  const d = toDays(date);
  const M = rad * (357.5291 + 0.98560028 * d);
  const L = M + rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M)) + rad * 102.9372 + Math.PI;
  const sun = horizontal(d, ra(L, 0), dec(L, 0));
  const Lm = rad * (218.316 + 13.176396 * d), Mm = rad * (134.963 + 13.064993 * d), F = rad * (93.272 + 13.22935 * d);
  const l = Lm + rad * 6.289 * Math.sin(Mm), b = rad * 5.128 * Math.sin(F);
  const moon = horizontal(d, ra(l, b), dec(l, b));
  moon.lit = (1 - sun.dir.dot(moon.dir)) / 2; // frazione illuminata (elongazione)
  return { sun, moon };
}
/** la data di oggi alle `hour` ora di Roma (ora legale compresa) */
export function romeDate(hour) {
  const now = new Date();
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Rome', year: 'numeric', month: 'numeric', day: 'numeric', timeZoneName: 'shortOffset' }).formatToParts(now).map((p) => [p.type, p.value]));
  const off = +(parts.timeZoneName.replace('GMT', '') || 0);
  return new Date(Date.UTC(+parts.year, +parts.month - 1, +parts.day, 0, 0) + (hour - off) * 3600000);
}
export function romeHourNow() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return +p.hour + +p.minute / 60;
}

/** 0 di giorno, 1 di notte: accende finestre, lampioni e monumenti */
export const NIGHT = { value: 0 };

const C = (h) => new THREE.Color(h);
const SKY = {
  dayH: C(0xd3e0ea), dayZ: C(0x3f7fc0), setH: C(0xf0b07c), setZ: C(0x36598c), nightH: C(0x18233a), nightZ: C(0x03060e),
};

export function createSky(bgScene) {
  const u = {
    uSun: { value: new THREE.Vector3(0, 1, 0) }, uSunVis: { value: 1 }, uMoon: { value: new THREE.Vector3(0, -1, 0) }, uMoonVis: { value: 0 },
    uH: { value: SKY.dayH.clone() }, uZ: { value: SKY.dayZ.clone() },
  };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(200000, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, uniforms: u,
    vertexShader: 'varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 uSun, uMoon, uH, uZ; uniform float uSunVis, uMoonVis; varying vec3 vD;
      void main() {
        float h = max(vD.y, 0.0);
        // fascia di foschia larga sull'orizzonte, poi l'azzurro
        vec3 c = mix(uH, uZ, pow(smoothstep(0.0, 0.75, h), 0.75));
        float s = max(dot(vD, uSun), 0.0);
        c += vec3(1.0, 0.9, 0.75) * (pow(s, 10.0) * 0.3 + pow(s, 900.0) * 2.0) * uSunVis;
        float m = max(dot(vD, uMoon), 0.0);
        c += vec3(0.6, 0.7, 0.9) * pow(m, 30.0) * 0.12 * uMoonVis;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  }));
  sky.renderOrder = -2; sky.frustumCulled = false;
  // stelle: punti fissi sulla volta, visibili solo di notte
  const N = 2200, p = new Float32Array(N * 3), rnd = (() => { let s = 12345; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  for (let i = 0; i < N; i++) {
    const y = 0.03 + rnd() * 0.97, a = rnd() * Math.PI * 2, r = Math.sqrt(1 - y * y);
    p.set([Math.cos(a) * r * 190000, y * 190000, Math.sin(a) * r * 190000], i * 3);
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false });
  const stars = new THREE.Points(sg, starMat); stars.renderOrder = -1; stars.frustumCulled = false;
  // luna: la fase viene dal sole (parte illuminata = emisfero rivolto al sole), sommata al cielo
  const mu = { uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uNight: NIGHT };
  const moon = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 16), new THREE.ShaderMaterial({
    uniforms: mu, transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec3 vN; void main() { vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 uSunDir; uniform float uNight; varying vec3 vN;
      float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
      void main() {
        float lit = smoothstep(-0.03, 0.12, dot(normalize(vN), uSunDir));
        // "mari" lunari: macchie scure fisse sulla faccia
        float mare = 0.82 + 0.18 * step(0.55, hash(floor(normalize(vN) * 4.0)));
        vec3 c = vec3(0.96, 0.94, 0.88) * mare * (lit * mix(0.5, 0.85, uNight) + 0.03 * uNight);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  }));
  moon.frustumCulled = false; moon.renderOrder = -1;
  bgScene.add(sky, stars, moon);
  const state = { moonDir: new THREE.Vector3() };
  return {
    u, starMat, moonU: mu, state,
    /** segue la camera: cielo, stelle e luna sono "all'infinito" */
    follow(cam) {
      sky.position.copy(cam.position); stars.position.copy(cam.position);
      moon.position.copy(cam.position).addScaledVector(state.moonDir, 150000);
      moon.visible = state.moonDir.y > -0.02;
    },
  };
}

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/**
 * Applica l'ora: ctx = { sky, sun, hemi, moonLight, fog, bgScene, basics: [materiali MeshBasic],
 * waters: [uniform dei mari], lights: bool }. Restituisce sole e luna calcolati.
 */
export function applyTime(hour, ctx) {
  const { sun: S, moon: Mo } = sunMoon(romeDate(hour));
  const el = S.alt / rad;
  const day = sstep(-5, 8, el);
  const twi = Math.exp(-(((el - 1) / 6) ** 2));                 // tramonto/alba: massimo col sole sull'orizzonte
  const moonUp = sstep(-2, 5, Mo.alt / rad);
  const H = SKY.nightH.clone().lerp(SKY.dayH, day).lerp(SKY.setH, twi * 0.75);
  const Z = SKY.nightZ.clone().lerp(SKY.dayZ, day).lerp(SKY.setZ, twi * 0.5);
  ctx.sky.u.uH.value.copy(H); ctx.sky.u.uZ.value.copy(Z);
  ctx.sky.u.uSun.value.copy(S.dir); ctx.sky.u.uSunVis.value = sstep(-3, 1, el);
  ctx.sky.u.uMoon.value.copy(Mo.dir); ctx.sky.u.uMoonVis.value = moonUp * (1 - day) * Mo.lit;
  ctx.sky.starMat.opacity = (1 - sstep(-14, -4, el)) * 0.95;
  ctx.sky.moonU.uSunDir.value.copy(S.dir);
  ctx.sky.state.moonDir.copy(Mo.dir);
  ctx.fog.color.copy(H); ctx.bgScene.background.copy(H);
  // luce diretta: sole (caldo al tramonto), poi luna azzurrina
  ctx.sun.intensity = 2.1 * sstep(-1, 8, el);
  ctx.sun.color.set(0xfff2dc).lerp(C(0xff9c55), twi * sstep(-1, 3, el));
  ctx.sun.castShadow = el > 0;
  ctx.sunDir = S.dir.clone();
  // di notte un po' di cielo e di rimbalzo: si legge la via, non è giorno
  ctx.hemi.intensity = 1.25 * (0.42 + 0.58 * day);
  ctx.hemi.color.set(0x6d82a4).lerp(C(0xdfeeff), day);
  ctx.hemi.groundColor.set(0x4a453e).lerp(C(0x8a7a66), day);
  ctx.moonLight.intensity = (1 - day) * Math.max(0.28, 0.62 * moonUp * (0.4 + 0.6 * Mo.lit));
  ctx.moonLight.position.copy(Mo.dir).multiplyScalar(1000);
  // superfici con la luce "cotta" (ortofoto, sfondo): tinta del momento
  // l'ortofoto e le montagne non hanno luce propria: di notte la tinta era quasi nera (0x121829)
  const tint = C(0x5c6e88).lerp(C(0xffffff), day).multiply(C(0xffffff).lerp(C(0xffcf9e), twi * 0.7));
  for (const m of ctx.basics) m.color.copy(tint);
  const up = el > -2;
  for (const w of ctx.waters) {
    w.uSkyH.value.copy(H); w.uSkyZ.value.copy(Z);
    w.uTint.value.copy(tint);
    w.uSun.value.copy(up ? S.dir : Mo.dir);
    w.uSpec.value = up ? 3 * sstep(-1, 6, el) : 0.8 * moonUp * Mo.lit;
  }
  NIGHT.value = ctx.lights ? 1 - sstep(-5, 3, el) : 0;
  return { sun: S, moon: Mo };
}
