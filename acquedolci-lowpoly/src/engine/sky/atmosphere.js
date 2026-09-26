/**
 * Atmosfera della città: sole alla posizione reale (data/ora, o ?ora=HH:MM),
 * cielo con palette dipendente dall'altezza del sole, silhouette dell'orizzonte
 * (se baked), mare con shader. Un solo punto di aggancio per main.js.
 */
import * as THREE from 'three';
import { pickSunMoment, sunDirection } from './sun.js';
import { skyPalette, createSkyDome } from './SkyDome.js';
import { createSea } from '../sea/Sea.js';
import { getOriginElev, getTerrainMeta, sampleY, localToLonLat } from '../terrain.js';
import { project } from '../geo.js';

const rgb = (a) => new THREE.Color().setRGB(a[0] / 255, a[1] / 255, a[2] / 255, THREE.SRGBColorSpace);

export function createAtmosphere({ scene, look, style, cityConfig, horizon = null, timeOverride = null }) {
  const profile = style.region;
  const atmo = profile?.atmo || { sky: [158, 201, 224], fog: [196, 214, 226], sun: [255, 226, 184] };
  const { lat, lon } = cityConfig.origin;
  const moment = pickSunMoment(new Date(), lat, lon, timeOverride);
  const dirObj = sunDirection(moment);
  const dir = new THREE.Vector3(dirObj.x, dirObj.y, dirObj.z);
  const altDeg = THREE.MathUtils.radToDeg(moment.altitude);
  const palette = skyPalette(altDeg, atmo);

  // Mare
  let sea = null;
  const meta = getTerrainMeta();
  if (meta && (profile?.coast?.coastal ?? true)) {
    const m = meta.mosaic;
    const a = project(m.west, m.north), c = project(m.east, m.south);
    const rect = { minX: Math.min(a.x, c.x), maxX: Math.max(a.x, c.x), minZ: Math.min(a.z, c.z), maxZ: Math.max(a.z, c.z) };
    const isSea = style.regionRuntime?.isSea;
    // maschera dilatata ~40 m: la griglia del flood-fill (≈30 m) è più grossa della riva
    const nearMask = isSea
      ? (x, z) => {
          for (const [dx, dz] of [[0, 0], [40, 0], [-40, 0], [0, 40], [0, -40]]) {
            const { lon: lo, lat: la } = localToLonLat(x + dx, z + dz);
            if (isSea(lo, la)) return true;
          }
          return false;
        }
      : null;
    sea = createSea(scene, {
      seaY: -getOriginElev(),
      rect,
      groundY: sampleY,
      isSeaMask: nearMask,
      seaColor: style.colors.sea ?? 0x2f6f8f,
    });
  }

  const ridge = rgb(profile?.ground?.forest || [70, 96, 70]).lerp(rgb([96, 118, 150]), 0.45);
  const ground = sea ? palette.horizon.clone().lerp(new THREE.Color().setHex(style.colors.sea ?? 0x2f6f8f), 0.35)
    : palette.horizon.clone().lerp(rgb(profile?.ground?.terrain || [150, 150, 120]), 0.4);
  const sky = createSkyDome(scene, { horizon });
  sky.setPalette(palette, dir, ridge, ground);
  sea?.setSky(palette, dir);
  look.setSun(dir, palette);

  const hh = String(moment.date.getHours()).padStart(2, '0');
  const mm = String(moment.date.getMinutes()).padStart(2, '0');
  return {
    sea,
    sky,
    info: {
      time: `${hh}:${mm}`,
      mode: moment.mode,
      altitude: Math.round(altDeg),
      azimuth: Math.round(THREE.MathUtils.radToDeg(moment.azimuth)),
      horizon: !!horizon,
      sea: !!sea,
    },
    update(dt, camera) {
      sky.follow(camera);
      sea?.update(dt, camera);
    },
  };
}
