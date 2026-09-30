/**
 * Mare animato. Una superficie a quota 0 che esiste solo dove la copertura del suolo vede il mare
 * (build-landcover.mjs) e oltre la costa fuori dai dati. Onde come somma di treni sinusoidali di
 * direzioni e lunghezze diverse (normali analitiche, niente texture), riflesso del cielo con Fresnel,
 * luccichio del sole, trasparenza sul bassofondo (si vede il fondale dell'ortofoto) e schiuma della
 * battigia che arriva a riva a ondate. La distanza da riva viene dal canale R della copertura.
 */
import * as THREE from 'three';
import { GROUND, LC_GLSL } from './ground.js';
import { CURVE_GLSL, forceHighpVertex } from './background.js';

/** far: il mare dello sfondo (fino all'orizzonte, con curvatura terrestre), altrimenti quello del paese */
export function buildWater(sunDir, { far = false } = {}) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uTime: { value: 0 }, uSun: { value: sunDir.clone().normalize() },
    uDeep: { value: new THREE.Color(0x0d4a66) }, uShallow: { value: new THREE.Color(0x2f9aa0) },
    uSkyH: { value: new THREE.Color(0xc9dcea) }, uSkyZ: { value: new THREE.Color(0x5d93c4) },
    uTint: { value: new THREE.Color(1, 1, 1) }, uSpec: { value: 3 }, // luce del momento (daylight.js)
  }]);
  uniforms.lcMap = GROUND.lcMap; uniforms.lcRect = GROUND.lcRect;
  const mat = new THREE.ShaderMaterial({
    uniforms, fog: true, transparent: true, depthWrite: false,
    vertexShader: `
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        ${far ? CURVE_GLSL : ''}
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      uniform float uTime, uSpec; uniform vec3 uSun, uDeep, uShallow, uSkyH, uSkyZ, uTint;
      varying vec3 vW;
      ${LC_GLSL}
      #include <common>
      #include <fog_pars_fragment>
      // treno d'onda: direzione, lunghezza d'onda (m), ampiezza (m), velocità di fase ~ sqrt(g·L/2π)
      float px; // dimensione del pixel sul mare (m): le onde più corte di pochi pixel si spengono (niente moiré)
      void wave(vec2 p, vec2 dir, float L, float A, inout vec2 grad) {
        A *= smoothstep(px * 3.0, px * 8.0, L);
        float k = 6.2831 / L, c = sqrt(9.81 / k);
        float ph = k * (dot(dir, p) - c * uTime);
        grad += dir * (A * k * cos(ph));
      }
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        float shore = 80.0; // distanza da riva in m (80 = mare aperto)
        ${far ? '' : `
        // mare del paese: solo dentro la copertura del suolo; fuori c'è quello dello sfondo
        vec4 lc = landcover(vW.xz);
        // R = distanza con segno dalla riva (128 = riva, +1,6 per metro verso il largo)
        float sd = (lc.x * 255.0 - 128.0) / 1.6;
        if (sd < 0.0) discard;
        shore = clamp(sd, 0.0, 80.0);`}
        float dist = distance(cameraPosition, vW);
        // onde: il mare da nord-ovest (il Tirreno davanti ad Acquedolci), più corte vicino a riva
        vec2 g = vec2(0.0);
        px = length(fwidth(vW.xz));
        float fade = 1.0;
        wave(vW.xz, normalize(vec2(0.35, 1.0)), 23.0, 0.20, g);
        wave(vW.xz, normalize(vec2(-0.2, 1.0)), 11.0, 0.09, g);
        wave(vW.xz, normalize(vec2(0.8, 0.6)), 6.3, 0.05 * fade, g);
        wave(vW.xz, normalize(vec2(-0.7, 0.7)), 3.1, 0.025 * fade, g);
        wave(vW.xz, normalize(vec2(0.1, -1.0)), 1.7, 0.012 * fade, g);
        // onda lunga che increspa la superficie a chiazze larghe: da sopra il mare non è mai uniforme
        vec2 sw2 = vec2(noise(vW.xz * 0.035 + vec2(uTime * 0.05, 0.0)), noise(vW.xz * 0.035 + 17.0 - vec2(0.0, uTime * 0.04))) - 0.5;
        g += sw2 * 0.05 * smoothstep(px * 2.0, px * 14.0, 30.0);
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        // in ortografica la direzione di vista è una sola (asse della camera), non verso la sua posizione
        vec3 V = projectionMatrix[3][3] > 0.5 ? normalize(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2])) : normalize(cameraPosition - vW);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 R = reflect(-V, N);
        vec3 sky = mix(uSkyH, uSkyZ, clamp(R.y * 1.6, 0.0, 1.0));
        // la riva serpeggia: schiuma, colore e profondità non corrono mai parallele a una retta
        float sm = (noise(vW.xz * 0.045) - 0.5) * 10.0 + (noise(vW.xz * 0.17 + vec2(0.0, uTime * 0.25)) - 0.5) * 4.0;
        float shoreW = max(shore + sm * (1.0 - smoothstep(12.0, 45.0, shore)), 0.0);
        float depth = smoothstep(0.0, 45.0, shoreW);
        // banchi di sabbia e prati sommersi: il fondale chiaro affiora a strisce irregolari
        float bars = noise(vW.xz * vec2(0.03, 0.06) + 5.0) * 0.6 + noise(vW.xz * 0.11 + 2.0) * 0.4;
        depth = clamp(depth - (bars - 0.45) * 0.45 * (1.0 - smoothstep(35.0, 80.0, shore)), 0.0, 1.0);
        vec3 body = mix(uShallow, uDeep, depth) * uTint;
        body *= 0.93 + 0.14 * noise(vW.xz * 0.02 + 40.0);
        // le pendenze delle onde, amplificate, modellano la luce sull'acqua (da sopra il rilievo si legge)
        vec3 Nd = normalize(vec3(-g.x * 5.0, 1.0, -g.y * 5.0));
        // la luce media resta quella di prima (colore pieno): le onde aggiungono solo la variazione
        float sunDiff = clamp(max(dot(Nd, uSun), 0.0) / max(uSun.y, 0.25), 0.55, 1.45);
        vec3 col = mix(body * (0.55 + 0.45 * sunDiff), sky, fres);
        col += vec3(1.0, 0.95, 0.85) * pow(max(dot(R, uSun), 0.0), 350.0) * uSpec;
        // battigia: fasce di schiuma che corrono verso riva e si rompono col rumore
        float band = sin(shoreW * 0.9 + uTime * 1.3) * 0.5 + 0.5;
        float foam = (1.0 - smoothstep(0.5, 7.0, shoreW)) * smoothstep(0.55, 0.95, band * noise(vW.xz * 0.7 + uTime * 0.2) + 0.35 * (1.0 - smoothstep(0.0, 2.0, shoreW)));
        // frangente: la linea dove l'onda si rompe, discontinua, a 10-18 m da riva
        float brk = 13.0 + (noise(vW.xz * 0.05) - 0.5) * 8.0;
        float breaker = exp(-pow((shoreW - brk) / 2.2, 2.0)) * smoothstep(0.52, 0.8, noise(vW.xz * vec2(0.22, 0.4) + vec2(uTime * 0.12, 0.0))) * 0.75;
        // creste al largo: poche, sparse
        float caps = smoothstep(0.80, 0.93, noise(vW.xz * 0.16 + vec2(uTime * 0.35, uTime * 0.12))) * smoothstep(20.0, 60.0, shore) * 0.35;
        foam = max(foam, max(breaker, caps));
        col = mix(col, vec3(0.93, 0.95, 0.95) * uTint, clamp(foam, 0.0, 1.0));
        // trasparenza: a riva si vede il fondale (ortofoto), al largo l'acqua è piena
        float alpha = mix(0.35, 0.96, smoothstep(0.0, 25.0, shoreW));
        alpha = max(alpha, foam * 0.9);
        alpha = mix(alpha, 1.0, fres * 0.5);
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
  // il disco arriva a 200 km: in mediump quelle coordinate sono +inf e il mare aperto non si disegna
  if (far) mat.onBeforeCompile = (sh) => forceHighpVertex(sh);
  let geo;
  if (far) {
    // disco centrato su chi guarda: anelli sempre più radi fino a 200 km, così la curvatura si piega bene
    const R = [0]; for (let r = 30; r < 200000; r *= 1.12) R.push(r); R.push(200000);
    const SEG = 128, pos = [], idx = [];
    for (const r of R) for (let s = 0; s < SEG; s++) { const a = (s / SEG) * Math.PI * 2; pos.push(Math.cos(a) * r, 0, Math.sin(a) * r); }
    for (let i = 0; i < R.length - 1; i++) for (let s = 0; s < SEG; s++) {
      const a = i * SEG + s, b = i * SEG + (s + 1) % SEG, c = a + SEG, d = b + SEG;
      idx.push(a, b, c, b, d, c); // antiorario visto dall'alto
    }
    geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx);
  } else {
    const r = GROUND.lcRect.value;
    geo = new THREE.PlaneGeometry(r.z, r.w); geo.rotateX(-Math.PI / 2); geo.translate(r.x + r.z / 2, 0, r.y + r.w / 2);
  }
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 5; mesh.name = far ? 'mare-sfondo' : 'mare'; mesh.frustumCulled = false;
  return { mesh, uniforms, update(t, cam) { uniforms.uTime.value = t; if (far && cam) mesh.position.set(cam.position.x, 0, cam.position.z); } };
}
