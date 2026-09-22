import * as THREE from 'three';

const position = new THREE.Vector3();
const quaternion = new THREE.Quaternion();
const scale = new THREE.Vector3();
const euler = new THREE.Euler();
const matrix = new THREE.Matrix4();
const color = new THREE.Color();

export function setInstance(
  mesh: THREE.InstancedMesh,
  index: number,
  x: number,
  y: number,
  z: number,
  sx: number,
  sy: number,
  sz: number,
  rotX = 0,
  rotY = 0,
  hex?: number,
): void {
  position.set(x, y, z);
  euler.set(rotX, rotY, 0);
  quaternion.setFromEuler(euler);
  scale.set(sx, sy, sz);
  matrix.compose(position, quaternion, scale);
  mesh.setMatrixAt(index, matrix);
  if (hex !== undefined) mesh.setColorAt(index, color.setHex(hex));
}

export function commit(mesh: THREE.InstancedMesh): void {
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingSphere();
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
}
