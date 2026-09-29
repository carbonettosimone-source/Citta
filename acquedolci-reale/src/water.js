/**
 * Mare animato. Una superficie a quota 0 che esiste solo dove la copertura del suolo vede il mare
 * (build-landcover.mjs) e oltre la costa fuori dai dati. Onde come somma di treni sinusoidali di
 * direzioni e lunghezze diverse (normali analitiche, niente texture), riflesso del cielo con Fresnel,
 * luccichio del sole, trasparenza sul bassofondo (si vede il fondale dell'ortofoto) e schiuma della
 * battigia che arriva a riva a ondate. La distanza da riva viene dal canale R della copertura.
 */
import * as THREE from 'three';
import { GROUND, LC_GLSL } from './ground.js';

export function buildWater(sunDir) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uTime: { value: 0 }, uSun: { value: sunDir.clone().normalize() },
    uDeep: { value: new THREE.Color(0x0d4a66) }, uShallow: { value: new THREE.Color(0x2f9aa0) },
    uSkyH: { value: new THREE.Color(0xc9dcea) }, uSkyZ: { value: new THREE.Color(0x5d93c4) },
  }]);
  uniforms.lcMap = GROUND.lcMap; uniforms.lcRect = GROUND.lcRect;
  const mat = new THREE.ShaderMaterial({
    uniforms, fog: true, transparent: true, depthWrite: false,
    vertexShader: `
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uSun, uDeep, uShallow, uSkyH, uSkyZ;
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
        vec4 lc = landcover(vW.xz);
        float shore; // distanza da riva in m (80 = mare aperto)
        if (lc.x < 0.0) { if (vW.z > -300.0) discard; shore = 80.0; }   // fuori dai dati: mare solo a nord della costa
        else { if (lc.x < 0.06) discard; shore = clamp((lc.x * 255.0 - 30.0) / 225.0 * 80.0, 0.0, 80.0); }
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
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 R = reflect(-V, N);
        vec3 sky = mix(uSkyH, uSkyZ, clamp(R.y * 1.6, 0.0, 1.0));
        float depth = smoothstep(0.0, 45.0, shore);
        vec3 body = mix(uShallow, uDeep, depth);
        float sunDiff = max(dot(N, uSun), 0.0);
        vec3 col = mix(body * (0.55 + 0.45 * sunDiff), sky, fres);
        col += vec3(1.0, 0.95, 0.85) * pow(max(dot(R, uSun), 0.0), 350.0) * 3.0;
        // battigia: fasce di schiuma che corrono verso riva e si rompono col rumore
        float band = sin(shore * 0.9 + uTime * 1.3) * 0.5 + 0.5;
        float foam = (1.0 - smoothstep(0.5, 7.0, shore)) * smoothstep(0.55, 0.95, band * noise(vW.xz * 0.7 + uTime * 0.2) + 0.35 * (1.0 - smoothstep(0.0, 2.0, shore)));
        col = mix(col, vec3(0.93, 0.95, 0.95), clamp(foam, 0.0, 1.0));
        // trasparenza: a riva si vede il fondale (ortofoto), al largo l'acqua è piena
        float alpha = mix(0.35, 0.96, smoothstep(0.0, 25.0, shore));
        alpha = max(alpha, foam * 0.9);
        alpha = mix(alpha, 1.0, fres * 0.5);
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
  const geo = new THREE.PlaneGeometry(60000, 60000);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 0.0; mesh.renderOrder = 5; mesh.name = 'sea';
  return { mesh, update(t) { uniforms.uTime.value = t; } };
}
