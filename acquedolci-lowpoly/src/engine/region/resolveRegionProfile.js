/**
 * Fusione dei segnali → RegionProfile.
 * prior (miscela di archetipi dal clima) ⊕ evidenza locale (OSM, GBIF, ...)
 * Ogni blocco porta `source` e `confidence`: i segnali più ricchi che arriveranno
 * (LiDAR, rilievo facciate, catasto) si innestano qui senza toccare i builder.
 */
import { ARCHETYPES, archetypeWeights } from './archetypes.js';
import { evidenceBoosts } from './vegetation.js';

export const PROFILE_VERSION = 1;

const LEFT_DRIVE = new Set(['gb', 'ie', 'mt', 'cy', 'jp', 'au', 'nz', 'in', 'za', 'th', 'id', 'my', 'sg', 'hk', 'ke', 'tz', 'ug', 'lk', 'bd', 'pk', 'jm']);
const YELLOW_CENTER = new Set(['us', 'ca', 'mx', 'no', 'fi']);
const LANG = { it: 'it', sm: 'it', va: 'it', fr: 'fr', de: 'de', at: 'de', ch: 'de', es: 'es', pt: 'pt', gb: 'en', ie: 'en', us: 'en', gr: 'el', mt: 'mt', hr: 'hr', si: 'sl', nl: 'nl', be: 'nl', pl: 'pl', se: 'sv', no: 'no', fi: 'fi', dk: 'da' };
const UNFINISHED_CULTURE = new Set(['it', 'gr', 'al', 'tr', 'ma', 'dz', 'tn', 'eg', 'lb', 'cy', 'me', 'mk', 'xk', 'ba', 'rs']);

function mixNum(weights, get) {
  let s = 0;
  for (const [k, w] of Object.entries(weights)) s += get(ARCHETYPES[k]) * w;
  return s;
}

function mixRgb(weights, get) {
  const out = [0, 0, 0];
  for (const [k, w] of Object.entries(weights)) {
    const c = get(ARCHETYPES[k]);
    out[0] += c[0] * w; out[1] += c[1] * w; out[2] += c[2] * w;
  }
  return out.map((v) => Math.round(v));
}

/** Palette miscelata: ogni archetipo contribuisce colori in proporzione al peso. */
function mixPalette(weights, get, size = 10) {
  const entries = Object.entries(weights).sort((a, b) => b[1] - a[1]);
  const out = [];
  for (const [k, w] of entries) {
    const pal = get(ARCHETYPES[k]);
    const n = Math.max(w >= 0.15 ? 1 : 0, Math.round(w * size));
    for (let i = 0; i < n && out.length < size; i++) out.push(pal[i % pal.length].slice());
  }
  return out.length ? out : get(ARCHETYPES.temperate).map((c) => c.slice());
}

/** Inietta colori misurati nella palette in proporzione alla loro quantità. */
function injectMeasured(palette, measured, k = 12) {
  if (!measured?.length) return { palette, weight: 0 };
  const lw = measured.length / (measured.length + k);
  const n = Math.round(palette.length * lw);
  const out = palette.slice();
  for (let i = 0; i < n; i++) out[out.length - 1 - i] = measured[i % measured.length].slice();
  return { palette: out, weight: +lw.toFixed(2) };
}

function mixObj(weights, get) {
  const keys = Object.keys(get(ARCHETYPES.temperate));
  const out = {};
  for (const key of keys) out[key] = mixRgb(weights, (a) => get(a)[key]);
  return out;
}

/**
 * @param {object} s segnali: { lat, lon, bbox, osm, dem, climate:{offline, online?}, country?, gbif? }
 */
export function resolveRegionProfile(s) {
  const climate = s.climate.online && s.climate.online.confidence > s.climate.offline.confidence
    ? { ...s.climate.offline, ...s.climate.online }
    : s.climate.offline;

  const coastal = (s.osm?.coastline || 0) > 0
    || ((s.dem?.seaFraction ?? 0) > 0.02 && (s.dem?.seaMeanElev ?? 99) > -60 && (s.dem?.seaMeanElev ?? 99) < 0.8);

  const { weights, fallback } = archetypeWeights({
    tMean: climate.tMean,
    precipMm: climate.precipMm ?? null,
    summerShare: climate.summerShare ?? null,
    absLat: Math.abs(s.lat),
    townElev: s.dem?.townElev ?? 0,
    coastal,
  });

  const cc = s.country?.code?.toLowerCase() || null;

  // ---- Tetti: prior + tag OSM
  const priorFlat = mixNum(weights, (a) => a.roof.flatShare);
  const roofEv = s.osm?.roofMix;
  const roofLw = roofEv ? s.osm.roofTagged / (s.osm.roofTagged + 25) : 0;
  const flatShare = roofEv ? priorFlat * (1 - roofLw) + roofEv.flat * roofLw : priorFlat;
  const hipOfPitched = roofEv && roofEv.gable + roofEv.hip > 0
    ? (roofEv.hip / (roofEv.gable + roofEv.hip)) * roofLw + 0.4 * (1 - roofLw)
    : 0.4;
  let pitch = mixNum(weights, (a) => a.roof.pitchDeg);
  pitch += Math.min(12, (climate.snowCm || 0) / 10); // carico neve → falde più ripide
  if ((climate.precipMm || 0) > 1200) pitch += 4;
  pitch = Math.max(8, Math.min(50, pitch));
  const roofPal = injectMeasured(mixPalette(weights, (a) => a.roof.palette), s.osm?.roofColours);

  // ---- Muri
  const wallPal = injectMeasured(mixPalette(weights, (a) => a.walls), s.osm?.wallColours);

  // ---- Piani
  const lv = s.osm?.levels;
  const priorLv = {
    median: mixNum(weights, (a) => a.levels.median),
    p90: mixNum(weights, (a) => a.levels.p90),
    singleShare: mixNum(weights, (a) => a.levels.singleShare),
  };
  const lvW = lv && lv.n >= 5 ? lv.n / (lv.n + 20) : 0;
  const levels = {
    median: +(priorLv.median * (1 - lvW) + (lv?.median ?? 0) * lvW).toFixed(2),
    p90: +(priorLv.p90 * (1 - lvW) + (lv?.p90 ?? 0) * lvW).toFixed(2),
    singleShare: +(priorLv.singleShare * (1 - lvW) + (lv?.singleShare ?? 0) * lvW).toFixed(3),
    source: lvW > 0 ? `archetypes+osm(${lv.n})` : 'archetypes',
    confidence: +(0.3 + 0.6 * lvW).toFixed(2),
  };

  // ---- Non finito: prior culturale (sarà sostituito dal rilievo facciate)
  let unfinished = mixNum(weights, (a) => a.unfinishedRate);
  if (cc) unfinished *= UNFINISHED_CULTURE.has(cc) ? (cc === 'it' && s.lat > 42.5 ? 0.3 : 1) : 0.25;

  // ---- Vegetazione
  const genusEvidence = { ...(s.gbif?.genera || {}) };
  for (const [g, n] of Object.entries(s.osm?.genera || {})) genusEvidence[g] = (genusEvidence[g] || 0) + n * 3;
  let density = mixNum(weights, (a) => a.treeDensity);
  if (climate.precipMm != null && climate.precipMm < 300) density *= 0.5;

  const atmo = {
    sky: mixRgb(weights, (a) => a.atmo.sky),
    fog: mixRgb(weights, (a) => a.atmo.fog),
    sun: mixRgb(weights, (a) => a.atmo.sun),
    hazeM: Math.round(mixNum(weights, (a) => a.atmo.hazeM)),
    exposure: +mixNum(weights, (a) => a.atmo.exposure).toFixed(3),
    warmth: +mixNum(weights, (a) => a.atmo.warmth).toFixed(3),
  };

  return {
    version: PROFILE_VERSION,
    generatedAt: new Date().toISOString(),
    location: {
      lat: s.lat,
      lon: s.lon,
      country: cc,
      countryName: s.country?.name || null,
      admin: s.country?.admin || null,
    },
    climate,
    archetypes: { weights, fallback },
    coast: {
      coastal,
      seaFraction: s.dem?.seaFraction ?? 0,
      seaMask: coastal ? s.dem?.seaMask ?? null : null,
      source: (s.osm?.coastline || 0) > 0 ? 'osm-coastline' : 'dem-floodfill',
    },
    terrain: {
      townElev: s.dem?.townElev ?? 0,
      relief: s.dem?.relief ?? 0,
      snowLineT: -1.5, // °C medi annui sotto cui il suolo è innevato a lungo
      rockSlopeDeg: 38,
      beachMaxElev: coastal ? 2.5 : 0,
    },
    roof: {
      flatShare: +flatShare.toFixed(3),
      hipOfPitched: +hipOfPitched.toFixed(3),
      pitchDeg: +pitch.toFixed(1),
      palette: roofPal.palette,
      source: roofLw > 0 ? `archetypes+osm(${s.osm.roofTagged})` : 'archetypes',
      confidence: +(0.3 + 0.6 * roofLw).toFixed(2),
      measuredColourWeight: roofPal.weight,
    },
    walls: { palette: wallPal.palette, measuredColourWeight: wallPal.weight, confidence: +(0.25 + 0.6 * wallPal.weight).toFixed(2) },
    levels,
    unfinishedRate: +unfinished.toFixed(3),
    ground: mixObj(weights, (a) => a.ground),
    urban: mixObj(weights, (a) => a.urban),
    atmo,
    vegetation: {
      archetypeWeights: weights,
      boosts: evidenceBoosts(genusEvidence),
      evidenceGenera: Object.keys(genusEvidence).length,
      density: +density.toFixed(3),
    },
    conventions: {
      driveSide: cc ? (LEFT_DRIVE.has(cc) ? 'left' : 'right') : null,
      centerLine: cc ? (YELLOW_CENTER.has(cc) ? 'yellow' : 'white') : null,
      lang: cc ? LANG[cc] || null : null,
    },
    sources: {
      climate: climate.source,
      country: s.country?.source || null,
      gbif: s.gbif ? `${s.gbif.records ?? '?'} occorrenze` : null,
      osm: `${s.osm?.buildings ?? 0} edifici`,
    },
  };
}
