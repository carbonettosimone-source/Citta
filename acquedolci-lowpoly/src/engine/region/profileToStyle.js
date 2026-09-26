/**
 * RegionProfile → `style` con LA STESSA FORMA dello style pack storico,
 * così buildCity, RoadBuilder, LandmarkBuilder ecc. non cambiano contratto.
 * Restituisce sempre un oggetto NUOVO (lo style pack condiviso veniva mutato
 * da buildCity/applyDnaToStyle: bug latente al cambio città).
 */
import { mediterraneanCoast } from '../../stylePacks/mediterraneanCoast.js';
import { seaMaskSampler } from './signals.js';
import { tempAt } from './climate.js';

export const rgbHex = (c) => ((c[0] & 255) << 16) | ((c[1] & 255) << 8) | (c[2] & 255);
const scale = (c, k) => c.map((v) => Math.max(0, Math.min(255, Math.round(v * k))));

/** Clona profondamente lo style pack di base (neutro per i parametri geometrici). */
export function cloneStyle(base = mediterraneanCoast) {
  return {
    ...base,
    colors: { ...base.colors },
    walls: [...base.walls],
    roofs: [...base.roofs],
    roads: { ...base.roads },
    plazas: { ...base.plazas },
    barriers: { ...base.barriers },
    landmarks: { ...base.landmarks },
    look: { ...base.look },
  };
}

export function profileToStyle(profile) {
  const style = cloneStyle();
  style.id = 'region-profile';
  style.label = `Profilo ${Object.entries(profile.archetypes.weights)
    .map(([k, w]) => `${k} ${Math.round(w * 100)}%`)
    .join(' · ')}`;

  const g = profile.ground;
  const u = profile.urban;
  const a = profile.atmo;
  Object.assign(style.colors, {
    sky: rgbHex(a.sky),
    fog: rgbHex(a.fog),
    terrain: rgbHex(g.terrain),
    groundFallback: rgbHex(g.terrain),
    grass: rgbHex(g.grass),
    meadow: rgbHex(g.meadow),
    orchard: rgbHex(g.orchard),
    forest: rgbHex(g.forest),
    scrub: rgbHex(g.scrub),
    farmland: rgbHex(g.farmland),
    vine: rgbHex(g.vine),
    park: rgbHex(g.grass),
    asphalt: rgbHex(u.asphalt),
    junction: rgbHex(scale(u.asphalt, 1.06)),
    curb: rgbHex(u.curb),
    sidewalk: rgbHex(u.sidewalk),
    plaza: rgbHex(u.plaza),
    footway: rgbHex(u.footway),
    centerLine: profile.conventions?.centerLine === 'yellow' ? 0xe8c040 : 0xf2eee2,
  });
  style.walls = profile.walls.palette.map(rgbHex);
  style.roofs = profile.roof.palette.map(rgbHex);

  style.fogNear = Math.round(a.hazeM * 0.2);
  style.fogFar = a.hazeM;
  style.look = { ...style.look, exposure: a.exposure, warmth: a.warmth };
  style.maxTrees = Math.round(1200 + 6000 * profile.vegetation.density); // vedi nota in mediterraneanCoast.js

  // Contesto regionale per i builder che lo sanno usare (gli altri lo ignorano)
  const climate = profile.climate;
  style.region = profile;
  style.regionRuntime = {
    isSea: seaMaskSampler(profile.coast?.seaMask),
    tempAtElev: (elev) => tempAt(climate, elev),
  };
  return style;
}
