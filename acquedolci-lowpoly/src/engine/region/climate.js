/**
 * Clima di una località.
 * - offlineClimate(): stima grezza globale da latitudine + quota + costa (conf bassa).
 * - fromDailySeries(): normalizza serie giornaliere (es. Open-Meteo archive) in normali.
 * Il resolver usa il segnale con confidenza più alta.
 */

export const LAPSE_C_PER_M = 0.0065;

/** Temperatura media annua al livello del mare stimata dalla latitudine (fit empirico). */
export function seaLevelTempFromLat(lat) {
  // Fit grezzo: parabola fino a 40°, poi pendenza più dolce (le medie latitudini
  // oceaniche sono più miti della parabola). Errore tipico ±3–5 °C sui climi
  // continentali: per questo il segnale online ha confidenza molto più alta.
  const a = Math.abs(lat);
  if (a <= 40) return 28 - 0.0074 * a * a;
  return 16.16 - 0.45 * (a - 40);
}

/**
 * @param {{lat:number, townElev:number, coastal:boolean}} p
 */
export function offlineClimate({ lat, townElev, coastal }) {
  // Il mare modera: +1 °C medio sulle coste alle medie latitudini
  const coastBonus = coastal && Math.abs(lat) > 25 ? 1 : 0;
  const tSeaLevel = seaLevelTempFromLat(lat) + coastBonus;
  const tMean = tSeaLevel - LAPSE_C_PER_M * Math.max(0, townElev);
  // Neve: solo stima per soglia termica (cm/anno indicativi)
  const snowCm = Math.max(0, (4 - tMean) * 25);
  return {
    source: 'offline-lat-model',
    confidence: 0.35,
    tSeaLevel: +tSeaLevel.toFixed(2),
    tMean: +tMean.toFixed(2),
    precipMm: null,
    summerShare: null,
    snowCm: +snowCm.toFixed(0),
  };
}

/**
 * Serie giornaliere → normali. Accetta { time[], temperature_2m_mean[], precipitation_sum[], snowfall_sum[] }.
 * @param {object} daily
 * @param {number} lat
 * @param {number} sampleElev quota del punto campionato (m)
 */
export function fromDailySeries(daily, lat, sampleElev = 0) {
  const t = daily.temperature_2m_mean || [];
  const p = daily.precipitation_sum || [];
  const s = daily.snowfall_sum || [];
  const time = daily.time || [];
  let tSum = 0, tN = 0, pSum = 0, sSum = 0, summerP = 0;
  const years = new Set();
  const south = lat < 0;
  for (let i = 0; i < time.length; i++) {
    const m = +time[i].slice(5, 7);
    years.add(time[i].slice(0, 4));
    if (t[i] != null) { tSum += t[i]; tN++; }
    if (p[i] != null) {
      pSum += p[i];
      const summer = south ? m === 12 || m === 1 || m === 2 : m >= 6 && m <= 8;
      if (summer) summerP += p[i];
    }
    if (s[i] != null) sSum += s[i];
  }
  const nYears = Math.max(1, years.size);
  if (!tN) return null;
  const tMean = tSum / tN;
  return {
    source: 'open-meteo-archive',
    confidence: 0.85,
    tMean: +tMean.toFixed(2),
    tSeaLevel: +(tMean + LAPSE_C_PER_M * Math.max(0, sampleElev)).toFixed(2),
    precipMm: Math.round(pSum / nYears),
    summerShare: pSum > 0 ? +(summerP / pSum).toFixed(3) : null,
    snowCm: Math.round(sSum / nYears),
    years: nYears,
  };
}

/** Temperatura media annua in un punto a quota assoluta `elev`. */
export function tempAt(climate, elev) {
  return climate.tSeaLevel - LAPSE_C_PER_M * Math.max(0, elev);
}
