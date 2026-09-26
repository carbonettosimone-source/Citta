/**
 * Bioma vivo: erba in streaming + particellari/gabbiani contestuali.
 * Un solo aggancio per main.js; luce presa dalla scena (sole + emisfero).
 */
import * as THREE from 'three';
import { createGrass } from './Grass.js';
import { createAmbience } from './Ambience.js';
import { sampleY, getOriginElev, localToLonLat } from '../terrain.js';

export function createBiome({ scene, city, look }) {
  const style = city.style;
  const isSea = style.regionRuntime?.isSea;
  const isSeaXZ = isSea ? (x, z) => { const { lon, lat } = localToLonLat(x, z); return isSea(lon, lat); } : () => false;
  const tempAtElev = style.regionRuntime?.tempAtElev ?? (() => 16);
  const originElev = getOriginElev();
  const surfaceAt = city.level?.surfaceAt ?? (() => null);
  const mobile = !!look?.mobile;

  const grass = createGrass(scene, {
    surfaceAt,
    groundY: sampleY,
    isSeaXZ,
    tempAt: (y) => tempAtElev(y + originElev),
    grassColor: style.colors.grass,
    mobile,
  });
  const ambience = createAmbience(scene, { surfaceAt, isSeaXZ, seaY: -originElev, mobile });

  const light = { sun: new THREE.Color(), ambient: new THREE.Color() };
  const focus = new THREE.Vector3();
  return {
    grass,
    ambience,
    /**
     * @param {THREE.Vector3} ground punto a terra di interesse (giocatore o sotto il drone)
     * @param {number} altitude quota della camera sul terreno
     * @param {string} mode 'vicina' | 'lontana' | 'drone'
     */
    update(dt, ground, camera, mode, altitude) {
      if (look) {
        light.sun.copy(look.sun.color).multiplyScalar(look.sun.intensity * 0.5);
        light.ambient.copy(look.hemi.color).multiplyScalar(look.hemi.intensity * 0.9);
      }
      focus.copy(ground);
      const grassVisible = mode === 'vicina' || (mode === 'drone' && altitude < 45);
      grass.update(dt, focus, grassVisible, light);
      ambience.update(dt, focus, camera);
    },
  };
}
