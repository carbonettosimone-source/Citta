/**
 * Ora del giorno ad Acquedolci: posizione vera di sole e luna (formule di SunCalc / Meeus
 * semplificate, precise a qualche decimo di grado), cielo, luce, foschia, stelle e luna col la sua
 * fase (la parte illuminata la decide la direzione del sole), luci notturne.
 * Coordinate del renderer: X est, Y su, Z sud.
 */
import * as THREE from 'three';
import { FOG } from './fog.js';

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
/**
 * Data del cielo. Di base è oggi; il gioco la fissa (setSkyDate) a fine primavera, quando si vota: i
 * tramonti tardi (≈ 20:25) e verso nord-ovest, sul mare, e la giornata di gioco (7:30–21:00) li contiene.
 */
const SKY = { y: 0, m: 0, d: 0, offCache: new Map() };
export function setSkyDate(y, m, d) { SKY.y = y; SKY.m = m; SKY.d = d; }
const romeOffset = (y, m, d) => {
  const k = `${y}-${m}-${d}`;
  if (!SKY.offCache.has(k)) {
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Rome', timeZoneName: 'shortOffset' }).formatToParts(new Date(Date.UTC(y, m - 1, d, 12))).map((p) => [p.type, p.value]));
    SKY.offCache.set(k, +(parts.timeZoneName.replace('GMT', '') || 0));
  }
  return SKY.offCache.get(k);
};
/** la data del cielo alle `hour` ora di Roma (ora legale compresa); `hour` può superare 24 */
export function romeDate(hour) {
  let { y, m, d } = SKY;
  if (!y) { const n = new Date(); y = n.getFullYear(); m = n.getMonth() + 1; d = n.getDate(); }
  return new Date(Date.UTC(y, m - 1, d, 0, 0) + (hour - romeOffset(y, m, d)) * 3600000);
}
export function romeHourNow() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return +p.hour + +p.minute / 60;
}

/** 0 di giorno, 1 di notte: accende finestre, lampioni e monumenti */
export const NIGHT = { value: 0 };

const C = (h) => new THREE.Color(h);
/**
 * Tavolozza del cielo per quota del sole (gradi). Per ogni quota: orizzonte (H), fascia media (M),
 * zenit (Z), bagliore dalla parte del sole (W), tinta opposta (X, la "cintura di Venere") e quanto
 * pesano (glow). Fra due righe si interpola: così il tramonto scorre oro → arancio → rosa → magenta →
 * viola → blu notte, senza i salti di prima.
 */
const KEYS = [
  //  el    H           M           Z           W           X          glow
  [-18, [0x0b1226, 0x070d1e, 0x02050c, 0x1a2244, 0x0b1226, 0.0]],
  [-10, [0x1c2250, 0x131a3e, 0x060a1c, 0x3a2f78, 0x2a2a66, 0.5]],
  [-6,  [0x5a3a86, 0x3c3a88, 0x121a44, 0xb04a9c, 0x6a4a98, 0.9]],
  [-2,  [0xf05a8e, 0xb04a9c, 0x2e3c82, 0xff6a50, 0xa65aa8, 1.0]],
  [1,   [0xff8a4a, 0xf0618e, 0x3a5aa4, 0xffa24a, 0xc86aa2, 1.0]],
  [4,   [0xffb066, 0xf59a8a, 0x4a7ab8, 0xffbe6a, 0xc8a2c2, 0.85]],
  [9,   [0xf6d2a2, 0xc8d2dc, 0x4a86c4, 0xffe0aa, 0xb8d0e6, 0.45]],
  [18,  [0xd3e0ea, 0x8fb4d8, 0x3f7fc0, 0xfff0d2, 0xcfe0ee, 0.12]],
  [90,  [0xd3e0ea, 0x8fb4d8, 0x3f7fc0, 0xfff0d2, 0xcfe0ee, 0.1]],
].map(([el, v]) => ({ el, c: v.slice(0, 5).map(C), glow: v[5] }));
const _k = KEYS[0].c.map(() => new THREE.Color());
function palette(el, out) {
  let i = 0; while (i < KEYS.length - 2 && el > KEYS[i + 1].el) i++;
  const a = KEYS[i], b = KEYS[i + 1], t = Math.min(1, Math.max(0, (el - a.el) / (b.el - a.el))), k = t * t * (3 - 2 * t);
  for (let j = 0; j < 5; j++) out.c[j].copy(a.c[j]).lerp(b.c[j], k);
  out.glow = a.glow + (b.glow - a.glow) * k;
  return out;
}

export function createSky(bgScene) {
  const u = {
    uSun: { value: new THREE.Vector3(0, 1, 0) }, uSunVis: { value: 1 }, uMoon: { value: new THREE.Vector3(0, -1, 0) }, uMoonVis: { value: 0 },
    uH: { value: C(0xd3e0ea) }, uM: { value: C(0x8fb4d8) }, uZ: { value: C(0x3f7fc0) }, uW: { value: C(0xfff0d2) }, uX: { value: C(0xcfe0ee) },
    uGlow: { value: 0.1 }, uTime: { value: 0 }, uCloud: { value: 0.5 }, uCloudLit: { value: C(0xffffff) }, uCloudShade: { value: C(0x9fb4cc) },
  };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(200000, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, uniforms: u,
    vertexShader: 'varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `precision highp float;
      uniform vec3 uSun, uMoon, uH, uM, uZ, uW, uX, uCloudLit, uCloudShade; uniform float uSunVis, uMoonVis, uGlow, uTime, uCloud; varying vec3 vD;
      float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
      // densità delle nuvole: uno strato a quota fissa, proiettato (l'orizzonte si stringe in prospettiva)
      float dens(vec2 p, float cov) {
        float f = fbm(p) * 0.75 + 0.25 * fbm(p * 3.1 + 7.7);
        return smoothstep(1.0 - cov, 1.0 - cov + 0.32, f);
      }
      void main() {
        float h = vD.y, hp = max(h, 0.0);
        float sd = dot(vD, uSun), sdp = max(sd, 0.0);
        // gradiente verticale: orizzonte → fascia media → zenit
        vec3 c = mix(uH, uM, smoothstep(0.0, 0.22, hp));
        c = mix(c, uZ, smoothstep(0.12, 0.85, hp));
        // bagliore del sole: largo sull'orizzonte, stretto attorno al disco
        float low = exp(-hp * 4.5);
        c = mix(c, uW, clamp(uGlow * (pow(sdp, 4.0) * 0.55 + pow(sdp, 14.0) * 0.5) * (0.3 + 0.7 * low), 0.0, 1.0));
        // dalla parte opposta: banda rosa-viola sopra l'ombra della terra
        float anti = pow(max(-sd, 0.0), 1.3);
        c = mix(c, uX, clamp(uGlow * 0.7 * anti * exp(-hp * 3.2), 0.0, 1.0));
        // disco e alone
        c += vec3(1.0, 0.86, 0.66) * (pow(sdp, 48.0) * 0.5 + pow(sdp, 2400.0) * 5.0) * uSunVis;
        // nuvole: strato basso volumetrico + cirri alti, illuminati dal sole (bordi luminosi, ventre rosa)
        if (h > 0.012 && uCloud > 0.0) {
          vec2 P = vD.xz / (h + 0.16) * 0.85 + vec2(uTime * 0.004, uTime * 0.0015);
          float d = dens(P, uCloud);
          if (d > 0.002) {
            // quanta nuvola c'è dalla parte del sole: sposta il punto verso il sole e ricampiona
            vec2 L = normalize(uSun.xz + 1e-4) * 0.16 * (0.4 + 0.6 * clamp(1.0 - uSun.y, 0.0, 1.0));
            float d2 = dens(P + L, uCloud), d3 = dens(P + L * 2.2, uCloud);
            float shade = clamp(0.5 * (d2 + d3) - d * 0.35, 0.0, 1.0);          // 1 = sepolta nell'ombra
            float edge = clamp(d - d2 + 0.25, 0.0, 1.0);                          // bordo verso il sole
            vec3 lit = uCloudLit * (0.85 + 0.55 * edge);
            vec3 col = mix(lit, uCloudShade, shade * 0.85);
            // sotto, verso il basso del cielo, la nuvola prende il colore dell'orizzonte
            col = mix(col, mix(uH, uW, 0.5), (1.0 - smoothstep(0.0, 0.4, hp)) * 0.5);
            float fade = smoothstep(0.012, 0.09, h);                              // svanisce nella foschia all'orizzonte
            c = mix(c, col, clamp(d * 1.15, 0.0, 1.0) * fade * 0.96);
          }
          // cirri: strisce sottili, alte, che al tramonto prendono i colori più accesi
          vec2 Q = vec2(vD.x, vD.z) / (h + 0.35) * vec2(1.0, 3.2) + vec2(uTime * 0.003, 0.0);
          float ci = smoothstep(0.55, 0.9, fbm(Q * 1.4 + 3.0)) * (0.35 + 0.65 * uCloud);
          vec3 cc = mix(uCloudLit, uW, clamp(uGlow, 0.0, 1.0) * (0.35 + 0.65 * pow(sdp, 2.0)));
          c = mix(c, cc * (0.9 + 0.5 * pow(sdp, 3.0)), ci * 0.55 * smoothstep(0.03, 0.2, h));
        }
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
    follow(cam, time = 0) {
      sky.position.copy(cam.position); stars.position.copy(cam.position);
      u.uTime.value = time;
      moon.position.copy(cam.position).addScaledVector(state.moonDir, 150000);
      moon.visible = state.moonDir.y > -0.02;
    },
  };
}

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/**
 * Applica l'ora (frazionaria: va chiamata a ogni frame, tutto scorre in continuo): ctx = { sky, sun, hemi,
 * moonLight, fog, bgScene, basics: [materiali MeshBasic], waters: [uniform dei mari], lights: bool }.
 * Restituisce sole e luna calcolati.
 */
const PAL = { c: [0, 1, 2, 3, 4].map(() => new THREE.Color()), glow: 0 };
const _t = new THREE.Color(), _w = new THREE.Color();
export function applyTime(hour, ctx) {
  const { sun: S, moon: Mo } = sunMoon(romeDate(hour));
  const el = S.alt / rad;
  const day = sstep(-6, 9, el);
  const gold = sstep(-8, 2, el) * (1 - sstep(2, 14, el));            // alba e tramonto: 1 col sole basso
  const moonUp = sstep(-2, 5, Mo.alt / rad);
  const pal = palette(el, PAL), [H, M, Z, W, X] = pal.c;
  const su = ctx.sky.u;
  su.uH.value.copy(H); su.uM.value.copy(M); su.uZ.value.copy(Z); su.uW.value.copy(W); su.uX.value.copy(X); su.uGlow.value = pal.glow;
  su.uCloud.value = 0.62 + 0.1 * Math.sin(hour * 0.9);
  su.uSun.value.copy(S.dir); su.uSunVis.value = sstep(-4, 0.5, el);
  su.uMoon.value.copy(Mo.dir); su.uMoonVis.value = moonUp * (1 - day) * Mo.lit;
  // nuvole: bianche di giorno, oro/arancio al tramonto, viola dopo; il ventre prende il colore dell'ombra del cielo
  su.uCloudLit.value.set(0xffffff).lerp(W, gold * 0.85).lerp(C(0x6a5aa0), sstep(-3, -9, el) * 0.75).multiplyScalar(0.35 + 0.65 * sstep(-12, 4, el));
  su.uCloudShade.value.copy(Z).lerp(M, 0.55).lerp(C(0xffffff), 0.25 * day).multiplyScalar(0.7 + 0.3 * day);
  ctx.sky.starMat.opacity = (1 - sstep(-14, -4, el)) * 0.95;
  ctx.sky.moonU.uSunDir.value.copy(S.dir);
  ctx.sky.state.moonDir.copy(Mo.dir);
  // foschia: il colore di base è l'orizzonte; la direzione fa il resto (fog.js). Più densa al tramonto.
  ctx.fog.color.copy(H); ctx.bgScene.background.copy(H);
  ctx.fog.density = 2.6e-5 * (1 + 1.6 * gold);
  FOG.sun.value.copy(S.dir); FOG.warm.value.copy(W); FOG.cool.value.copy(X);
  FOG.amt.value = pal.glow;
  // luce diretta: sole (caldo, poi rosato al tramonto), poi luna azzurrina
  ctx.sun.intensity = 2.1 * sstep(-1.5, 8, el) * (1 - 0.25 * gold);
  ctx.sun.color.set(0xfff2dc).lerp(C(0xff9a5a), gold * sstep(-2, 2, el)).lerp(C(0xff6a7a), sstep(1.5, -1.5, el) * 0.5 * gold);
  ctx.sun.castShadow = el > 0;
  ctx.sunDir = S.dir.clone();
  // di notte un po' di cielo e di rimbalzo: si legge la via, non è giorno. Al tramonto il cielo è viola/rosa
  ctx.hemi.intensity = 1.25 * (0.42 + 0.58 * day);
  ctx.hemi.color.set(0x6d82a4).lerp(C(0xdfeeff), day).lerp(X, gold * 0.35);
  ctx.hemi.groundColor.set(0x4a453e).lerp(C(0x8a7a66), day).lerp(C(0x8a5a5a), gold * 0.3);
  ctx.moonLight.intensity = (1 - day) * Math.max(0.28, 0.62 * moonUp * (0.4 + 0.6 * Mo.lit));
  ctx.moonLight.position.copy(Mo.dir).multiplyScalar(1000);
  // superfici con la luce "cotta" (ortofoto, sfondo): tinta del momento — oro al tramonto, viola dopo
  _t.set(0x5c6e88).lerp(C(0xffffff), day);
  _w.set(0xffffff).lerp(C(0xffb682), gold * 0.8).lerp(C(0xc89ae6), sstep(-1, -7, el) * 0.55);
  _t.multiply(_w);
  for (const m of ctx.basics) m.color.copy(_t);
  const up = el > -2;
  for (const w of ctx.waters) {
    w.uSkyH.value.copy(H); w.uSkyZ.value.copy(Z);
    if (w.uSkyW) w.uSkyW.value.copy(W);
    w.uTint.value.copy(_t);
    w.uSun.value.copy(up ? S.dir : Mo.dir);
    w.uSpec.value = up ? 3.2 * sstep(-3, 5, el) : 0.8 * moonUp * Mo.lit;
    if (w.uGold) w.uGold.value = pal.glow;
  }
  NIGHT.value = ctx.lights ? 1 - sstep(-5, 3, el) : 0;
  return { sun: S, moon: Mo };
}
