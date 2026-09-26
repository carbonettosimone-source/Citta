/**
 * Mare vero (al posto del terreno colorato di blu).
 * - Onde: somma di 4 sinusoidi con normali analitiche (niente texture, costo minimo su mobile),
 *   attenuate con la distanza per evitare aliasing.
 * - Colore: fresnel tra acqua (bassa turchese → profonda) e riflesso del cielo; luccichio del sole.
 * - Riva: texture della DISTANZA DALLA COSTA calcolata dal terreno visibile → acqua bassa e schiuma
 *   che si muove verso terra. Fuori dal DEM la texture si estende dal bordo: niente mare nell'entroterra.
 * - Foschia propria (più lunga della nebbia della città): l'orizzonte marino resta leggibile.
 */
import * as THREE from 'three';

const MAXD = 400; // m codificati nella texture

/**
 * @param {THREE.Scene} scene
 * @param {object} o
 * @param {number} o.seaY quota locale del livello del mare
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}} o.rect area coperta dal DEM
 * @param {(x:number,z:number)=>number} o.groundY terreno visibile
 * @param {(x:number,z:number)=>boolean} [o.isSeaMask] maschera mare (esclude laghetti/depressioni interne)
 */
export function createSea(scene, { seaY, rect, groundY, isSeaMask = null, seaColor = 0x2f6f8f, radius = 3400 }) {
  // ---- distanza dalla costa (trasformata di distanza chamfer 3-4 su griglia 512²)
  const N = 512;
  const sx = (rect.maxX - rect.minX) / N, sz = (rect.maxZ - rect.minZ) / N;
  const cell = Math.max(sx, sz);
  const INF = 1e9;
  const d = new Float32Array(N * N);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const x = rect.minX + (i + 0.5) * sx, z = rect.minZ + (j + 0.5) * sz;
      const water = groundY(x, z) < seaY + 0.05 && (!isSeaMask || isSeaMask(x, z));
      d[j * N + i] = water ? INF : 0;
    }
  }
  const a = 1, b = Math.SQRT2;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    let v = d[j * N + i];
    if (!v) continue;
    if (i > 0) v = Math.min(v, d[j * N + i - 1] + a);
    if (j > 0) v = Math.min(v, d[(j - 1) * N + i] + a);
    if (i > 0 && j > 0) v = Math.min(v, d[(j - 1) * N + i - 1] + b);
    if (i < N - 1 && j > 0) v = Math.min(v, d[(j - 1) * N + i + 1] + b);
    d[j * N + i] = v;
  }
  for (let j = N - 1; j >= 0; j--) for (let i = N - 1; i >= 0; i--) {
    let v = d[j * N + i];
    if (!v) continue;
    if (i < N - 1) v = Math.min(v, d[j * N + i + 1] + a);
    if (j < N - 1) v = Math.min(v, d[(j + 1) * N + i] + a);
    if (i < N - 1 && j < N - 1) v = Math.min(v, d[(j + 1) * N + i + 1] + b);
    if (i > 0 && j < N - 1) v = Math.min(v, d[(j + 1) * N + i - 1] + b);
    d[j * N + i] = v;
  }
  const bytes = new Uint8Array(N * N);
  let waterCells = 0;
  for (let k = 0; k < N * N; k++) {
    if (d[k] > 0) waterCells++;
    bytes[k] = d[k] >= INF ? 255 : Math.min(255, Math.round((d[k] * cell * 255) / MAXD));
  }
  if (waterCells < N * N * 0.005) return null; // niente mare nel bbox

  const distTex = new THREE.DataTexture(bytes, N, N, THREE.RedFormat, THREE.UnsignedByteType);
  distTex.wrapS = distTex.wrapT = THREE.ClampToEdgeWrapping;
  distTex.magFilter = distTex.minFilter = THREE.LinearFilter;
  distTex.flipY = false;
  distTex.needsUpdate = true;

  const deep = new THREE.Color().setHex(seaColor).multiplyScalar(0.55);
  const uniforms = {
    time: { value: 0 },
    distTex: { value: distTex },
    rect: { value: new THREE.Vector4(rect.minX, rect.minZ, rect.maxX - rect.minX, rect.maxZ - rect.minZ) },
    deep: { value: deep },
    shallow: { value: new THREE.Color().setRGB(0.16, 0.55, 0.55) },
    foamC: { value: new THREE.Color(0.92, 0.95, 0.95) },
    horizonC: { value: new THREE.Color() },
    zenith: { value: new THREE.Color() },
    sunDir: { value: new THREE.Vector3(0, 1, 0) },
    sunColor: { value: new THREE.Color(1, 1, 1) },
    waveAmp: { value: 1 },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    fog: false,
    vertexShader: /* glsl */ `
      varying vec3 vWorld;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float time, waveAmp;
      uniform sampler2D distTex;
      uniform vec4 rect;
      uniform vec3 deep, shallow, foamC, horizonC, zenith, sunDir, sunColor;
      varying vec3 vWorld;
      // onda i: direzione, numero d'onda, ampiezza, velocità
      vec3 waveN(vec2 p, float fade) {
        vec2 g = vec2(0.0);
        vec2 D[4]; float K[4]; float A[4]; float S[4];
        D[0] = normalize(vec2(1.0, 0.35));  K[0] = 0.11; A[0] = 0.22; S[0] = 1.1;
        D[1] = normalize(vec2(-0.45, 1.0)); K[1] = 0.23; A[1] = 0.09; S[1] = 1.6;
        D[2] = normalize(vec2(0.8, -0.7));  K[2] = 0.47; A[2] = 0.045; S[2] = 2.3;
        D[3] = normalize(vec2(0.15, 0.95)); K[3] = 0.93; A[3] = 0.02; S[3] = 3.1;
        for (int i = 0; i < 4; i++) {
          float ph = dot(D[i], p) * K[i] - time * S[i];
          g += D[i] * (A[i] * K[i] * cos(ph));
        }
        g *= waveAmp * fade;
        return normalize(vec3(-g.x, 1.0, -g.y));
      }
      void main() {
        vec2 uv = (vWorld.xz - rect.xy) / rect.zw;
        float dLand = texture2D(distTex, uv).r * ${MAXD.toFixed(1)};
        if (dLand < 0.4) discard; // terraferma: il terreno è sopra, oppure entroterra fuori DEM
        vec3 toCam = cameraPosition - vWorld;
        float dist = length(toCam);
        vec3 v = toCam / dist;
        float fade = 1.0 - smoothstep(250.0, 1400.0, dist);
        vec3 n = waveN(vWorld.xz, fade);
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
        vec3 water = mix(shallow, deep, smoothstep(4.0, 140.0, dLand));
        vec3 r = reflect(-v, n);
        vec3 sky = mix(horizonC, zenith, clamp(r.y * 1.6, 0.0, 1.0));
        vec3 col = mix(water, sky, fres * 0.85);
        vec3 hv = normalize(sunDir + v);
        float spec = pow(max(dot(n, hv), 0.0), 220.0) * 3.0 + pow(max(dot(n, hv), 0.0), 40.0) * 0.12;
        col += sunColor * spec * step(0.0, sunDir.y);
        // schiuma: bande che avanzano verso riva, spezzate da una variazione lungo costa
        float band = sin(dLand * 1.25 + time * 1.7 + sin(vWorld.x * 0.07 + vWorld.z * 0.05) * 2.0);
        float foam = (1.0 - smoothstep(0.8, 7.0, dLand)) * smoothstep(0.1, 0.9, band * 0.5 + 0.5);
        foam = max(foam, 1.0 - smoothstep(0.4, 1.6, dLand));
        col = mix(col, foamC, clamp(foam, 0.0, 1.0) * 0.85);
        // foschia marina: più lunga della nebbia urbana
        col = mix(col, horizonC, 1.0 - exp(-dist / 1900.0));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const geo = new THREE.CircleGeometry(radius, 96);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'sea';
  mesh.position.y = seaY;
  mesh.frustumCulled = false;
  mesh.renderOrder = 1;
  scene.add(mesh);

  return {
    mesh,
    uniforms,
    update(dt, camera) {
      uniforms.time.value += dt;
      mesh.position.x = camera.position.x;
      mesh.position.z = camera.position.z;
    },
    setSky(p, sunDirV) {
      uniforms.horizonC.value.copy(p.horizon);
      uniforms.zenith.value.copy(p.zenith);
      uniforms.sunColor.value.copy(p.sun).multiplyScalar(p.intensity);
      uniforms.sunDir.value.copy(sunDirV).normalize();
    },
  };
}
