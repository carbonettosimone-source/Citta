/**
 * Nitidezza adattiva al contrasto (AMD FidelityFX CAS, versione compatta): la scena si disegna in
 * un buffer con antialiasing 4× e poi un solo passaggio a schermo intero rinforza i dettagli fini
 * (bordi dei coppi, finestre, grana del suolo) di più dove il contrasto locale è basso e di meno dove
 * è già alto, senza aloni. È il passo che nei giochi accompagna gli upscaler.
 */
import * as THREE from 'three';

const CAS = `
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uSharp; varying vec2 vUv;
vec3 px(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
void main() {
  vec3 a = px(vec2(-1, -1)), b = px(vec2(0, -1)), c = px(vec2(1, -1));
  vec3 d = px(vec2(-1, 0)), e = px(vec2(0, 0)), f = px(vec2(1, 0));
  vec3 g = px(vec2(-1, 1)), h = px(vec2(0, 1)), i = px(vec2(1, 1));
  // minimo e massimo "morbidi" su croce + diagonali (valori 0..2)
  vec3 mn = min(min(min(d, e), min(f, b)), h), mx = max(max(max(d, e), max(f, b)), h);
  mn += min(mn, min(min(a, c), min(g, i)));
  mx += max(mx, max(max(a, c), max(g, i)));
  vec3 amp = sqrt(clamp(min(mn, 2.0 - mx) / max(mx, vec3(1e-4)), 0.0, 1.0));
  vec3 w = amp * (-1.0 / mix(8.0, 5.0, uSharp));
  vec3 col = clamp((b * w + d * w + f * w + h * w + e) / (1.0 + 4.0 * w), 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

export function createPost(renderer) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  // niente MSAA: sul telefono un clear solo dello depth, fra lo sfondo e il paese, azzera anche il
  // colore del buffer multisample e la mappa oltre il modello sparisce. La nitidezza CAS resta.
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { samples: 0 });
  rt.texture.colorSpace = THREE.SRGBColorSpace;
  const u = { tSrc: { value: rt.texture }, uTexel: { value: new THREE.Vector2(1 / size.x, 1 / size.y) }, uSharp: { value: 0.7 } };
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: u, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: CAS,
  }));
  quad.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(quad);
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  return {
    target: rt,
    /** dal buffer allo schermo, con la nitidezza */
    present() { renderer.setRenderTarget(null); renderer.render(scene, cam); },
    resize() {
      renderer.getDrawingBufferSize(size);
      rt.setSize(size.x, size.y); u.uTexel.value.set(1 / size.x, 1 / size.y);
    },
  };
}
