import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    warmth: { value: 0.08 },
    vignette: { value: 0.28 },
    contrast: { value: 1.08 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }`,
  // Lavora DOPO OutputPass, cioè in spazio display sRGB [0,1]: contrasto attorno a 0.5
  // e warmth hanno qui il significato atteso. Prima giravano in lineare HDR prima del
  // tone mapping: il warmth si amplificava sulle ombre e tingeva nebbia e orizzonte di marrone.
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float warmth;
    uniform float vignette;
    uniform float contrast;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = clamp((c.rgb - 0.5) * contrast + 0.5, 0.0, 1.0);
      // Calore sui mezzitoni, non su cielo e nebbia (luma alta)
      float w = warmth * (1.0 - smoothstep(0.55, 0.92, luma));
      c.r += w;
      c.b -= w * 0.35;
      float d = distance(vUv, vec2(0.5));
      c.rgb *= mix(1.0, smoothstep(0.95, 0.35, d * (0.55 + vignette)), 0.85);
      gl_FragColor = c;
    }`,
};

function isMobile() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    matchMedia('(pointer: coarse)').matches ||
    matchMedia('(max-width: 900px)').matches
  );
}

/**
 * Illuminazione mediterranea + post-process (full desktop / lite mobile).
 */
export function createLook(renderer, scene, camera, style = {}) {
  const mobile = isMobile();
  const colors = style.colors || {};

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = style.look?.exposure ?? (mobile ? 1.05 : 1.15);
  renderer.shadowMap.enabled = true;
  // PCF anche su mobile: BasicShadowMap dava bordi a gradini e acne; ora che il frustum
  // segue il player può essere stretto, quindi a pari mappa i texel sono più piccoli.
  renderer.shadowMap.type = mobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;

  // Replace crude lights: caller may still have ambient — we add cinematic set
  const root = new THREE.Group();
  root.name = 'look-lights';

  const hemi = new THREE.HemisphereLight(
    colors.sky ?? 0xa8d4f0,
    colors.terrain ?? 0xc4b48a,
    mobile ? 0.55 : 0.65,
  );
  root.add(hemi);

  const sun = new THREE.DirectionalLight(0xffe2b8, mobile ? 1.35 : 1.7);
  sun.position.set(160, 260, 90);
  sun.castShadow = true;
  // Il frustum delle ombre SEGUE il player (prima era inchiodato sull'origine).
  // La direzione arriva dal sole reale via setSun(); questo è solo il default.
  const sunDir = sun.position.clone().normalize();
  const SUN_DIST = 320;
  const baseSunIntensity = mobile ? 1.35 : 1.7;
  const mapSize = mobile ? 1024 : 2048;
  sun.shadow.mapSize.set(mapSize, mapSize);
  sun.shadow.bias = -0.0003;
  sun.shadow.normalBias = 0.05;
  const ext = mobile ? 110 : 180; // m attorno al player (texel ≈ 0,21 m su mobile, 0,18 m su desktop)
  Object.assign(sun.shadow.camera, {
    near: 10,
    far: 650,
    left: -ext,
    right: ext,
    top: ext,
    bottom: -ext,
  });
  root.add(sun);
  root.add(sun.target); // il target deve stare in scena per aggiornare la sua matrice

  // Base dello spazio luce per agganciare il centro ombre alla griglia dei texel (niente sfarfallio)
  const lightRight = new THREE.Vector3();
  const lightUp = new THREE.Vector3();
  function updateLightBasis() {
    lightRight.crossVectors(sunDir, new THREE.Vector3(0, 1, 0));
    if (lightRight.lengthSq() < 1e-6) lightRight.set(1, 0, 0);
    lightRight.normalize();
    lightUp.crossVectors(lightRight, sunDir).normalize();
  }
  updateLightBasis();
  const texel = (2 * ext) / mapSize;
  const lastTarget = new THREE.Vector3();
  const _p = new THREE.Vector3();
  function followTarget(pos) {
    _p.copy(pos);
    const r = _p.dot(lightRight);
    const u = _p.dot(lightUp);
    _p.addScaledVector(lightRight, Math.round(r / texel) * texel - r);
    _p.addScaledVector(lightUp, Math.round(u / texel) * texel - u);
    sun.target.position.copy(_p);
    sun.position.copy(_p).addScaledVector(sunDir, SUN_DIST);
    lastTarget.copy(pos);
  }

  /**
   * Sole reale: direzione (unitaria, verso il sole) + palette del cielo (skyPalette).
   * Aggiorna luce, colore, emisfero, luce di riempimento, nebbia e base delle ombre.
   */
  function setSun(dir, palette) {
    sunDir.set(dir.x, Math.max(0.05, dir.y), dir.z).normalize();
    updateLightBasis();
    sun.color.copy(palette.sun);
    sun.intensity = baseSunIntensity * palette.intensity;
    hemi.color.copy(palette.zenith).lerp(palette.horizon, 0.35);
    hemi.intensity = (mobile ? 0.55 : 0.65) * (0.75 + 0.25 * palette.intensity);
    fill.position.set(-sunDir.x * 100, 60, -sunDir.z * 100); // controluce morbida opposta al sole
    fill.color.copy(palette.zenith);
    rim.color.copy(palette.sun);
    scene.fog.color.copy(palette.horizon);
    scene.background = palette.horizon.clone();
    followTarget(lastTarget);
  }
  followTarget(new THREE.Vector3());

  const fill = new THREE.DirectionalLight(0xb8d8ff, 0.25);
  fill.position.set(-120, 80, -60);
  root.add(fill);

  const rim = new THREE.DirectionalLight(0xffc9a0, 0.18);
  rim.position.set(-40, 40, 160);
  root.add(rim);

  scene.add(root);

  scene.fog = new THREE.Fog(
    colors.fog ?? 0xc2d6e4,
    style.fogNear ?? (mobile ? 220 : 300),
    style.fogFar ?? (mobile ? 1100 : 1500),
  );
  scene.background = new THREE.Color(colors.sky ?? 0x9ec9e0);

  // Stessa pipeline su mobile e desktop (prima su mobile niente composer = look diverso).
  // Mobile: niente bloom, pixel ratio ≤ 1,5 per compensare il passaggio a schermo intero.
  let composer = null;
  let grade = null;
  if (style.look?.post !== false) {
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, {
      type: THREE.HalfFloatType,
      samples: mobile ? 2 : 4, // MSAA: il composer altrimenti perde l'antialias del canvas
    });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    if (!mobile && style.look?.bloom !== false) {
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.12, 0.6, 0.88));
    }
    composer.addPass(new OutputPass()); // tone mapping + sRGB
    grade = new ShaderPass(GradeShader); // grading in spazio display
    grade.uniforms.warmth.value = style.look?.warmth ?? 0.05;
    grade.uniforms.vignette.value = style.look?.vignette ?? 0.25;
    grade.uniforms.contrast.value = style.look?.contrast ?? 1.06;
    composer.addPass(grade);
  }

  function resize(w, h) {
    if (composer) composer.setSize(w, h);
  }

  function render() {
    if (composer) composer.render();
    else renderer.render(scene, camera);
  }

  return { root, sun, hemi, fill, composer, grade, mobile, resize, render, followTarget, setSun };
}
