import * as THREE from 'three';

/** Quattro fasce nette. Il filtro nearest è ciò che rende il toon leggibile. */
export function createGradientMap(): THREE.DataTexture {
  const data = new Uint8Array([72, 142, 206, 255]);
  const map = new THREE.DataTexture(data, data.length, 1, THREE.RedFormat);
  map.magFilter = THREE.NearestFilter;
  map.minFilter = THREE.NearestFilter;
  map.generateMipmaps = false;
  map.colorSpace = THREE.NoColorSpace;
  map.needsUpdate = true;
  return map;
}

export function toonMaterial(gradient: THREE.Texture, color: number): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({ color, gradientMap: gradient });
}

export function toonInstances(gradient: THREE.Texture): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: gradient });
}

export function flatInstances(): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({ color: 0xffffff });
}

/** Un solo orologio per l'erba e le chiome. Il vento è uno spostamento locale, non una simulazione. */
export const windTime = { value: 0 };

export function withWind(material: THREE.Material): void {
  material.customProgramCacheKey = () => 'wind-sway';
  material.onBeforeCompile = (shader) => {
    shader.uniforms['uTime'] = windTime;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        float gust = sin(uTime * 1.65 + float(gl_InstanceID) * 0.41) * transformed.y;
        transformed.x += gust * 0.11;
        transformed.z += gust * 0.05;`,
      );
  };
}
