/**
 * Quando il 3D di Google è in vista, il paese disegnato (terreno, strade, edifici, alberi)
 * lascia il posto alle tile dentro tre dischi di ~180 m. Sul bordo i due mondi si alternano
 * a scacchiera, così non c'è una riga di z-fighting. Senza chiave `uGFade` resta 0 e gli
 * shader non scartano nulla.
 */
import * as THREE from 'three';

export const gFade = { value: 0 };
const centers = [0, 1, 2].map(() => ({ value: new THREE.Vector3() }));

export function setPlazaCenters(list) {
  list.forEach((p, i) => centers[i].value.set(p.x, p.z, p.r));
}

const VERT = `#include <project_vertex>
#ifdef USE_INSTANCING
  vGWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  vGWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`;

const FRAG_HEAD = `#include <common>
uniform float uGFade;
uniform vec3 uP0;
uniform vec3 uP1;
uniform vec3 uP2;
varying vec3 vGWorld;
float acqCover(vec2 xz) {
  float c = 0.0;
  c = max(c, smoothstep(uP0.z, uP0.z - 16.0, distance(xz, uP0.xy)));
  c = max(c, smoothstep(uP1.z, uP1.z - 16.0, distance(xz, uP1.xy)));
  c = max(c, smoothstep(uP2.z, uP2.z - 16.0, distance(xz, uP2.xy)));
  return c;
}
float acqHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`;

function bind(shader) {
  shader.uniforms.uGFade = gFade;
  shader.uniforms.uP0 = centers[0];
  shader.uniforms.uP1 = centers[1];
  shader.uniforms.uP2 = centers[2];
}

function inject(shader, discardLine) {
  if (shader.vertexShader.includes('vGWorld')) return;
  if (!shader.vertexShader.includes('#include <project_vertex>')) return;
  if (!shader.fragmentShader.includes('#include <clipping_planes_fragment>')) return;
  bind(shader);
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vGWorld;')
    .replace('#include <project_vertex>', VERT);
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', FRAG_HEAD)
    .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>\n${discardLine}`);
}

const seen = new WeakSet();

function hook(mat, discardLine, key) {
  if (!mat || mat.isShaderMaterial || seen.has(mat)) return;
  seen.add(mat);
  const prev = mat.onBeforeCompile;
  const prevSrc = prev && prev !== THREE.Material.prototype.onBeforeCompile ? prev.toString() : '';
  const ownKey = mat.customProgramCacheKey !== THREE.Material.prototype.customProgramCacheKey
    ? mat.customProgramCacheKey.bind(mat) : null;
  mat.customProgramCacheKey = () => `${ownKey ? ownKey() : prevSrc}${key}`;
  mat.onBeforeCompile = (shader, r) => {
    prev?.call(mat, shader, r);
    inject(shader, discardLine);
  };
  mat.needsUpdate = true;
}

/** il paese disegnato: dentro il disco si scarta, così resta la mesh di Google */
export function attachGoogleClip(root) {
  const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  hook(depth, 'if (uGFade > 0.5 && acqCover(vGWorld.xz) > acqHash(gl_FragCoord.xy)) discard;', '-gclip-d');
  const mats = new Set();
  root.traverse((o) => {
    if (!o.material || o.userData.skipGClip) return;
    const list = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of list) {
      if (mats.has(m)) continue;
      mats.add(m);
      hook(m, 'if (uGFade > 0.5 && acqCover(vGWorld.xz) > acqHash(gl_FragCoord.xy)) discard;', '-gclip');
    }
    if (o.castShadow && o.isMesh) o.customDepthMaterial = depth;
  });
}

/** la mesh di Google: fuori dai dischi si scarta, così non copre il resto del paese */
export function patchGoogleMaterial(mat) {
  hook(mat, 'if (acqCover(vGWorld.xz) <= acqHash(gl_FragCoord.xy)) discard;', '-gonly');
}
