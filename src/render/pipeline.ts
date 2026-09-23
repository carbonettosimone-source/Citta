import * as THREE from 'three';
import { FOG_COLOR } from './sky';

/** Metà della risoluzione CSS, poi nearest sull'intero canvas: l'upscale si vede. */
export const INTERNAL_SCALE = 0.5;

export type Pipeline = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  resize(): void;
  render(): void;
};

export function createPipeline(canvas: HTMLCanvasElement): Pipeline {
  const gl = canvas.getContext('webgl2', {
    antialias: false,
    alpha: false,
    depth: true,
    stencil: false,
    powerPreference: 'high-performance',
  });
  if (!gl) {
    throw new Error('Serve WebGL2 per Minimondo.');
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    context: gl,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(FOG_COLOR, 1);
  renderer.autoClear = true;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(FOG_COLOR, 16, 74);
  scene.add(new THREE.HemisphereLight(0xffe7c4, 0xc9b39a, 0.7));
  const sun = new THREE.DirectionalLight(0xffe2b0, 1.25);
  sun.position.set(-16, 11, 9);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x9eb6d8, 0.34);
  fill.position.set(14, 6, -12);
  scene.add(fill);

  const camera = new THREE.PerspectiveCamera(62, 1, 0.05, 420);

  const target = new THREE.WebGLRenderTarget(2, 2, {
    depthBuffer: true,
    stencilBuffer: false,
    generateMipmaps: false,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
  });
  target.texture.colorSpace = THREE.SRGBColorSpace;

  const blitCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  blitCamera.position.z = 1;
  const blitMaterial = new THREE.MeshBasicMaterial({ map: target.texture });
  blitMaterial.toneMapped = false;
  const gradeRes = { value: new THREE.Vector2(1, 1) };
  blitMaterial.onBeforeCompile = (shader) => {
    shader.uniforms['uRes'] = gradeRes;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec2 uRes;')
      .replace(
        '#include <dithering_fragment>',
        `#include <dithering_fragment>
        vec2 vigP = gl_FragCoord.xy / uRes - 0.5;
        float vig = smoothstep(0.16, 0.62, dot(vigP, vigP));
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(1.06, 0.94, 0.78), 0.28);
        gl_FragColor.rgb *= mix(1.0, 0.72, vig);`,
      );
  };
  const blitScene = new THREE.Scene();
  blitScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blitMaterial));

  const resize = () => {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    renderer.setSize(width, height, false);
    target.setSize(
      Math.max(2, Math.floor(width * INTERNAL_SCALE)),
      Math.max(2, Math.floor(height * INTERNAL_SCALE)),
    );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    gradeRes.value.set(width, height);
  };

  const render = () => {
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(blitScene, blitCamera);
  };

  return { renderer, scene, camera, resize, render };
}
