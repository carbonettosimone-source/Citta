/**
 * Silhouette dell'orizzonte vista da un punto: per ogni azimut, l'angolo massimo di elevazione
 * del terreno in tre fasce di distanza. Curvatura terrestre + rifrazione standard (k = 0,13).
 * Pura: il campionatore di quota è iniettato (tile DEM nel bake, funzioni sintetiche nei test).
 */
const R = 6371000;
const K = 0.13;
const M_PER_DEG = 111320;

export const DEFAULT_BANDS = [
  [2500, 12000],
  [12000, 30000],
  [30000, 65000],
];

/**
 * @param {object} o
 * @param {number} o.lat
 * @param {number} o.lon
 * @param {number} o.eyeElev quota assoluta dell'occhio (m)
 * @param {(lat:number, lon:number)=>number|null} o.sampleElev null = fuori dati
 * @param {number[][]} [o.bands] [da, a] in metri, dalla più vicina alla più lontana
 * @param {number} [o.nAz]
 * @returns {{nAz:number, eyeElev:number, bands:{from:number,to:number,angles:number[]}[]}} angoli in gradi, -5 = nessun rilievo
 */
export function computeHorizon({ lat, lon, eyeElev, sampleElev, bands = DEFAULT_BANDS, nAz = 720 }) {
  const cosLat = Math.cos((lat * Math.PI) / 180);
  const out = bands.map(([from, to]) => ({ from, to, angles: new Array(nAz).fill(-5) }));
  for (let k = 0; k < nAz; k++) {
    const az = (k / nAz) * Math.PI * 2;
    const sn = Math.sin(az), cs = Math.cos(az);
    bands.forEach(([from, to], b) => {
      let best = -5;
      for (let d = from; d <= to; d += Math.max(80, d * 0.006)) {
        const la = lat + (d * cs) / M_PER_DEG;
        const lo = lon + (d * sn) / (M_PER_DEG * cosLat);
        const h = sampleElev(la, lo);
        if (h == null || h < 5) continue; // mare e buchi: nessuna silhouette
        const drop = ((d * d) / (2 * R)) * (1 - K);
        const ang = (Math.atan2(h - drop - eyeElev, d) * 180) / Math.PI;
        if (ang > best) best = ang;
      }
      out[b].angles[k] = +best.toFixed(2);
    });
  }
  // Le fasce si coprono in ordine: la vicina deve comparire solo se più alta della lontana
  return { nAz, eyeElev, bands: out.reverse() }; // [lontana, media, vicina] come si aspetta SkyDome
}
