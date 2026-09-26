/**
 * Cielo: cupola con gradiente zenit→orizzonte, disco e alone del sole, colori che
 * cambiano con l'altezza del sole (tramonto), e — se esiste /data/horizon/<id>.json —
 * le SILHOUETTE REALI dei rilievi e delle isole fino a ~65 km, in tre fasce di foschia.
 * Nessuna geometria lontana: l'orizzonte è una texture 1D (angolo per azimut).
 * La nebbia della scena prende il colore dell'orizzonte: cucitura invisibile.
 */
import * as THREE from 'three';

const rgb = (a) => new THREE.Color().setRGB(a[0] / 255, a[1] / 255, a[2] / 255, THREE.SRGBColorSpace);
const mix = (a, b, t) => a.clone().lerp(b, Math.max(0, Math.min(1, t)));

/**
 * Palette del cielo dall'altezza del sole e dal profilo regionale.
 * @param {number} altDeg
 * @param {{sky:number[], fog:number[], sun:number[]}} atmo
 */
export function skyPalette(altDeg, atmo) {
  const dayZenith = rgb(atmo.sky).multiplyScalar(0.82);
  const dayHorizon = rgb(atmo.fog);
  const daySun = rgb(atmo.sun);
  const low = 1 - THREE.MathUtils.smoothstep(altDeg, 2, 16); // 1 al tramonto, 0 di giorno
  const zenith = mix(dayZenith, rgb([70, 96, 150]), low * 0.6);
  const horizon = mix(dayHorizon, rgb([246, 184, 132]), low * 0.75);
  const sun = mix(daySun, rgb([255, 150, 90]), low);
  const intensity = 0.55 + 0.45 * THREE.MathUtils.smoothstep(altDeg, 3, 25);
  return { zenith, horizon, sun, intensity, low };
}

/** Silhouette → texture 1D (RGB = fasce lontana/media/vicina, 0,1° per unità, offset −5°). */
function horizonTexture(horizon) {
  if (!horizon?.bands?.length) return null;
  const W = horizon.bands[0].angles.length;
  const data = new Uint8Array(W * 4);
  for (let i = 0; i < W; i++) {
    for (let b = 0; b < 3; b++) {
      const a = horizon.bands[b]?.angles[i] ?? -5;
      data[i * 4 + b] = Math.max(0, Math.min(255, Math.round((a + 5) * 10)));
    }
    data[i * 4 + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, W, 1, THREE.RGBAFormat);
  tex.wrapS = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

export function createSkyDome(scene, { radius = 2800, horizon = null } = {}) {
  let tex = horizonTexture(horizon);
  const uniforms = {
    zenith: { value: new THREE.Color() },
    horizonC: { value: new THREE.Color() },
    ground: { value: new THREE.Color() },
    sunDir: { value: new THREE.Vector3(0, 1, 0) },
    sunColor: { value: new THREE.Color() },
    ridge: { value: new THREE.Color() },
    horizonTex: { value: tex },
    hasHorizon: { value: tex ? 1 : 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww; // sempre sul piano lontano
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 zenith, horizonC, ground, sunColor, ridge, sunDir;
      uniform sampler2D horizonTex;
      uniform float hasHorizon;
      varying vec3 vDir;
      #define PI 3.14159265
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(horizonC, zenith, pow(clamp(h, 0.0, 1.0), 0.5));
        if (h < 0.0) col = mix(horizonC, ground, clamp(-h * 5.0, 0.0, 1.0));
        float sd = max(dot(d, sunDir), 0.0);
        // bagliore attorno al sole, più ampio vicino all'orizzonte
        col += sunColor * (pow(sd, 8.0) * 0.18 + pow(sd, 64.0) * 0.35);
        col += sunColor * smoothstep(0.99955, 0.99975, sd) * 6.0; // disco (i rilievi lo coprono)
        if (hasHorizon > 0.5) {
          float az = atan(d.x, -d.z); // da nord, senso orario (+x = est, -z = nord)
          vec4 t = texture2D(horizonTex, vec2(fract(az / (2.0 * PI)), 0.5));
          float el = degrees(asin(clamp(h, -1.0, 1.0)));
          vec3 a = (t.rgb * 255.0) / 10.0 - 5.0; // gradi per fascia: lontana, media, vicina
          // dalla più lontana (più velata) alla più vicina (più scura)
          if (el < a.r) col = mix(horizonC, ridge, 0.28);
          if (el < a.g) col = mix(horizonC, ridge, 0.5);
          if (el < a.b) col = mix(horizonC, ridge, 0.72);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24), mat);
  mesh.name = 'sky-dome';
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  scene.add(mesh);

  return {
    mesh,
    uniforms,
    setPalette(p, sunDirV, ridgeColor, groundColor) {
      uniforms.zenith.value.copy(p.zenith);
      uniforms.horizonC.value.copy(p.horizon);
      uniforms.sunColor.value.copy(p.sun).multiplyScalar(p.intensity);
      uniforms.sunDir.value.copy(sunDirV).normalize();
      uniforms.ridge.value.copy(ridgeColor);
      uniforms.ground.value.copy(groundColor);
    },
    /** Orizzonte arrivato dopo (calcolato in background per le città generate nell'app). */
    setHorizon(h) {
      const t = horizonTexture(h);
      if (!t) return;
      uniforms.horizonTex.value?.dispose();
      uniforms.horizonTex.value = t;
      uniforms.hasHorizon.value = 1;
    },
    follow(camera) {
      mesh.position.copy(camera.position);
    },
  };
}
