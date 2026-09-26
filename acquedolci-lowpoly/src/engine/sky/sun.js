/**
 * Posizione del sole per data/ora e coordinate (algoritmo di SunCalc, V. Agafonkin, BSD).
 * Coordinate locali del motore: +x = est, +z = sud, +y = su.
 */
const rad = Math.PI / 180;
const dayMs = 86400000;
const J1970 = 2440588;
const J2000 = 2451545;
const e = rad * 23.4397;

const toDays = (date) => date.valueOf() / dayMs - 0.5 + J1970 - J2000;
const meanAnomaly = (d) => rad * (357.5291 + 0.98560028 * d);
function eclipticLongitude(M) {
  const C = rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  return M + C + rad * 102.9372 + Math.PI;
}
const declination = (l) => Math.asin(Math.sin(e) * Math.sin(l));
const rightAscension = (l) => Math.atan2(Math.sin(l) * Math.cos(e), Math.cos(l));
const siderealTime = (d, lw) => rad * (280.16 + 360.9856235 * d) - lw;

/**
 * @returns {{altitude:number, azimuth:number}} radianti; azimuth da NORD in senso orario
 */
export function sunPosition(date, lat, lon) {
  const lw = rad * -lon;
  const phi = rad * lat;
  const d = toDays(date);
  const L = eclipticLongitude(meanAnomaly(d));
  const dec = declination(L);
  const H = siderealTime(d, lw) - rightAscension(L);
  const altitude = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
  const azSouth = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
  return { altitude, azimuth: (azSouth + Math.PI) % (Math.PI * 2) };
}

/** Direzione verso il sole nelle coordinate del motore (vettore unitario). */
export function sunDirection({ altitude, azimuth }) {
  const c = Math.cos(altitude);
  return { x: Math.sin(azimuth) * c, y: Math.sin(altitude), z: -Math.cos(azimuth) * c };
}

/**
 * Sceglie l'istante da mostrare: l'ora vera se c'è luce, altrimenti (notte, alba cupa)
 * il pomeriggio dello stesso giorno con il sole a ~22° — finché non esiste l'illuminazione notturna.
 * @param {Date} now
 * @param {string|null} override "HH:MM" (ora del dispositivo) da ?ora=
 */
export function pickSunMoment(now, lat, lon, override = null) {
  let date = new Date(now);
  let mode = 'reale';
  if (override && /^\d{1,2}:\d{2}$/.test(override)) {
    const [h, m] = override.split(':').map(Number);
    date.setHours(h, m, 0, 0);
    mode = 'scelta';
  }
  let pos = sunPosition(date, lat, lon);
  if (pos.altitude < 8 * rad && mode === 'reale') {
    // mezzogiorno solare ≈ 12:00 UTC − lon/15 h; poi avanti finché il sole scende a 22°
    const noon = new Date(date);
    noon.setUTCHours(12, 0, 0, 0);
    noon.setTime(noon.getTime() - (lon / 15) * 3600000);
    let t = noon;
    for (let k = 0; k < 60; k++) {
      const p = sunPosition(t, lat, lon);
      if (p.altitude <= 22 * rad) break;
      t = new Date(t.getTime() + 10 * 60000);
    }
    date = t;
    pos = sunPosition(date, lat, lon);
    mode = 'notte → pomeriggio';
  }
  if (pos.altitude < 3 * rad) {
    // ora scelta di notte: si resta al crepuscolo (manca ancora l'illuminazione notturna)
    pos = { ...pos, altitude: 3 * rad };
    mode += ' (crepuscolo)';
  }
  return { date, mode, ...pos };
}
