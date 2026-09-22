import * as THREE from 'three';

/** Quattro fasce nette. Il filtro nearest è ciò che rende il toon leggibile. */
export function createGradientMap(): THREE.DataTexture {
  const data = new Uint8Array([42, 118, 186, 255]);
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
