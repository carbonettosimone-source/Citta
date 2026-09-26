/**
 * Colore del suolo per vertice, derivato dal profilo e dal punto:
 * mare (maschera) → spiaggia → neve (temperatura a quella quota) → roccia (pendenza) → suolo/verde.
 * Nessuna costante "Sicilia": la stessa funzione colora Cortina o Oslo.
 */
import { trap } from './archetypes.js';
import { hashXZ, unit } from '../rng.js';

const SAND = [214, 200, 160];
const SNOW = [236, 240, 244];
const ROCK = [138, 132, 122];
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/**
 * @param {object} profile RegionProfile
 * @param {{isSea:(lon:number,lat:number)=>boolean, tempAtElev:(e:number)=>number}} rt
 * @param {number[]} seaRgb colore mare (da DNA/satellite se presente)
 */
export function makeTerrainColorAt(profile, rt, seaRgb = [86, 148, 172]) {
  const base = profile.ground.terrain;
  const green = profile.ground.grass;
  const forest = profile.ground.forest;
  const tz = profile.terrain;
  // Spiaggia = vicino al MARE, non solo bassa quota (un paese costiero sta quasi tutto sotto i 3 m)
  const dLat = 1 / 111320;
  const nearSea = (lon, lat, meters) => {
    const dLon = dLat / Math.cos((lat * Math.PI) / 180);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      if (rt.isSea(lon + Math.cos(a) * meters * dLon, lat + Math.sin(a) * meters * dLat)) return true;
    }
    return false;
  };
  return ({ x, z, absElev, slopeDeg, lon, lat }) => {
    if (profile.coast?.coastal && absElev <= 0.6 && rt.isSea(lon, lat)) return seaRgb;
    const t = rt.tempAtElev(absElev);
    const n = (unit(hashXZ(x, z, 7, 1)) - 0.5) * 0.08;
    let c;
    if (tz.beachMaxElev > 0 && absElev < tz.beachMaxElev && slopeDeg < 8 && (nearSea(lon, lat, 25) || nearSea(lon, lat, 55))) c = SAND;
    else {
      // Più fresco = più verde (fino al limite degli alberi), secco e caldo = suolo nudo
      const greenness = 0.55 * trap(t, -3, 3, 13, 20);
      const forestness = 0.35 * trap(t, -2, 2, 9, 14) * trap(slopeDeg, 3, 10, 30, 40);
      c = lerp(lerp(base, green, greenness), forest, forestness);
      if (slopeDeg > tz.rockSlopeDeg - 10) c = lerp(c, ROCK, Math.min(1, (slopeDeg - (tz.rockSlopeDeg - 10)) / 12));
      if (t < tz.snowLineT + 1.5) c = lerp(c, SNOW, Math.min(1, (tz.snowLineT + 1.5 - t) / 3) * (slopeDeg < 45 ? 1 : 0.4));
    }
    return [c[0] * (1 + n), c[1] * (1 + n), c[2] * (1 + n)];
  };
}
