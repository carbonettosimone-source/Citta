import * as THREE from 'three';

const FOG_HEX = 0xd7eef6;

/** Cupola a colori di vertice, senza shader. L'orizzonte è il colore della nebbia. */
export function createSky(): THREE.Mesh {
  const geo = new THREE.SphereGeometry(1, 20, 12);
  const pos = geo.attributes.position;
  if (!pos) throw new Error('cielo senza posizioni');
  const colors = new Float32Array(pos.count * 3);
  const top = new THREE.Color(0x7ec8f8);
  const horizon = new THREE.Color(FOG_HEX);
  const warm = new THREE.Color(0xffd7a4);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const up = THREE.MathUtils.clamp((y + 0.12) / 1.12, 0, 1);
    tmp.copy(horizon).lerp(top, up * up);
    const heat = Math.max(0, -z * 0.7 + x * 0.45) * Math.max(0, 1 - Math.abs(y) * 2.4);
    tmp.lerp(warm, heat * 0.62);
    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const sky = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    }),
  );
  sky.scale.setScalar(180);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  return sky;
}

export const FOG_COLOR = FOG_HEX;
