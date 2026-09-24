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
  scene.fog = new THREE.Fog(FOG_COLOR, 26, 128);
  scene.add(new THREE.HemisphereLight(0xd7f4ff, 0xff8ad4, 0.62));
  const sun = new THREE.DirectionalLight(0xffe4b8, 1.22);
  sun.position.set(-16, 14, 9);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x7ad7ff, 0.34);
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
        float luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor.rgb = mix(vec3(luma), gl_FragColor.rgb, 1.12);
        vec2 vigP = gl_FragCoord.xy / uRes - 0.5;
        float vig = smoothstep(0.22, 0.75, dot(vigP, vigP));
        gl_FragColor.rgb *= mix(1.0, 0.84, vig);`,
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
