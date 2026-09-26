/**
 * Genera una città a runtime, nel browser, da coordinate:
 *   Overpass (OSM) + tile Terrarium (DEM) + RegionProfile (+ clima Open-Meteo e generi GBIF, opzionali)
 * → dati registrati in memoria (mem://…) → cityConfig pronto per buildCity.
 * Stessa conversione OSM e stesso resolver degli script di bake: un'unica verità.
 * Cache IndexedDB: una città già visitata si riapre senza rete.
 */
import { buildOverpassQuery, overpassToFeatures } from '../osm/overpass.js';
import { osmStats, demStats } from '../region/signals.js';
import { offlineClimate, fromDailySeries, LAPSE_C_PER_M } from '../region/climate.js';
import { resolveRegionProfile } from '../region/resolveRegionProfile.js';
import { computeHorizon } from '../sky/horizonCompute.js';
import { registerData } from '../data/dataSource.js';
import { cacheGet, cachePut } from './cache.js';

const OVERPASS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
const TERRARIUM = (z, x, y) => `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${z}/${x}/${y}.png`;
const CACHE_VERSION = 1;

const lon2tile = (lon, z) => Math.floor(((lon + 180) / 360) * 2 ** z);
const lat2tile = (lat, z) =>
  Math.floor(((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * 2 ** z);
const tile2lon = (x, z) => (x / 2 ** z) * 360 - 180;
const tile2lat = (y, z) => {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** z;
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
};

export class NetworkBlockedError extends Error {}

async function fetchWithTimeout(url, opts = {}, ms = 30000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: ctrl.signal });
  } catch (e) {
    // TypeError = rete/CSP/CORS: nell'anteprima di claude.ai le richieste esterne sono bloccate
    if (e instanceof TypeError) throw new NetworkBlockedError(`${new URL(url).host} non raggiungibile`);
    throw e;
  } finally {
    clearTimeout(t);
  }
}

/** Decodifica una tile Terrarium PNG in quote (Float32Array 256×256), senza gestione colore. */
async function decodeTerrarium(url) {
  const res = await fetchWithTimeout(url, {}, 20000);
  if (!res.ok) throw new Error(`DEM HTTP ${res.status}`);
  const bmp = await createImageBitmap(await res.blob(), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
  const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(256, 256) : Object.assign(document.createElement('canvas'), { width: 256, height: 256 });
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(bmp, 0, 0);
  const px = ctx.getImageData(0, 0, 256, 256).data;
  const out = new Float32Array(256 * 256);
  for (let i = 0; i < out.length; i++) out[i] = px[i * 4] * 256 + px[i * 4 + 1] + px[i * 4 + 2] / 256 - 32768;
  return out;
}

async function fetchDemMosaic(bbox, z = 14) {
  const x0 = lon2tile(bbox.west, z), x1 = lon2tile(bbox.east, z);
  const y0 = lat2tile(bbox.north, z), y1 = lat2tile(bbox.south, z);
  const cols = x1 - x0 + 1, rows = y1 - y0 + 1;
  const W = cols * 256, H = rows * 256;
  const heights = new Float32Array(W * H);
  const jobs = [];
  for (let ty = y0; ty <= y1; ty++) for (let tx = x0; tx <= x1; tx++) jobs.push({ tx, ty });
  const tiles = await Promise.all(jobs.map((j) => decodeTerrarium(TERRARIUM(z, j.tx, j.ty))));
  let minH = Infinity, maxH = -Infinity;
  jobs.forEach(({ tx, ty }, k) => {
    const t = tiles[k];
    const ox = (tx - x0) * 256, oy = (ty - y0) * 256;
    for (let py = 0; py < 256; py++) {
      for (let px = 0; px < 256; px++) {
        const v = t[py * 256 + px];
        heights[(oy + py) * W + ox + px] = v;
        if (v < minH) minH = v;
        if (v > maxH) maxH = v;
      }
    }
  });
  const meta = {
    source: 'AWS Terrain Tiles (Terrarium PNG)',
    encoding: 'terrarium',
    z,
    bbox,
    tiles: { x0, x1, y0, y1 },
    tileSize: 256,
    mosaic: { west: tile2lon(x0, z), east: tile2lon(x1 + 1, z), north: tile2lat(y0, z), south: tile2lat(y1 + 1, z) },
    width: W,
    height: H,
    minElev: minH,
    maxElev: maxH,
    heightmap: 'heightmap.bin',
  };
  return { meta, heights };
}

async function fetchOsm(bbox) {
  const body = `data=${encodeURIComponent(buildOverpassQuery(bbox))}`;
  let lastErr = null;
  for (const url of OVERPASS) {
    try {
      const res = await fetchWithTimeout(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body }, 90000);
      if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`);
      return overpassToFeatures(await res.json());
    } catch (e) {
      lastErr = e;
      if (e instanceof NetworkBlockedError && url === OVERPASS[OVERPASS.length - 1]) throw e;
    }
  }
  throw lastErr;
}

async function fetchClimate(lat, lon) {
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}` +
    '&start_date=2015-01-01&end_date=2024-12-31&daily=temperature_2m_mean,precipitation_sum,snowfall_sum&timezone=UTC';
  const res = await fetchWithTimeout(url, {}, 12000);
  if (!res.ok) throw new Error(`clima HTTP ${res.status}`);
  const j = await res.json();
  return fromDailySeries(j.daily || {}, lat, j.elevation ?? 0);
}

async function fetchGbif(bbox) {
  const pad = 0.045;
  const q = `kingdomKey=6&hasCoordinate=true&decimalLatitude=${(bbox.south - pad).toFixed(4)},${(bbox.north + pad).toFixed(4)}` +
    `&decimalLongitude=${(bbox.west - pad).toFixed(4)},${(bbox.east + pad).toFixed(4)}&limit=0&facet=genusKey&facetLimit=40`;
  const res = await fetchWithTimeout(`https://api.gbif.org/v1/occurrence/search?${q}`, {}, 10000);
  if (!res.ok) throw new Error(`GBIF HTTP ${res.status}`);
  const j = await res.json();
  const counts = j.facets?.[0]?.counts || [];
  const names = await Promise.all(counts.map((c) =>
    fetchWithTimeout(`https://api.gbif.org/v1/species/${c.name}`, {}, 8000).then((r) => r.json()).then((s) => s.canonicalName).catch(() => null)));
  const genera = {};
  counts.forEach((c, k) => { if (names[k]) genera[names[k]] = c.count; });
  return { genera, records: j.count ?? null, source: 'gbif-facets' };
}

const settle = (p) => p.then((v) => v, () => null);

/**
 * @param {{lat:number, lon:number, name:string, countryCode?:string, countryName?:string, admin?:string, half?:number}} place
 * @param {(msg:string)=>void} progress
 */
export async function generateCity(place, progress = () => {}) {
  const half = Math.min(1200, Math.max(300, place.half ?? 650));
  const lat = +place.lat, lon = +place.lon;
  const id = `live-${lat.toFixed(4)}_${lon.toFixed(4)}_${half}`;
  const dLat = half / 111320;
  const dLon = half / (111320 * Math.cos((lat * Math.PI) / 180));
  const bbox = { south: lat - dLat, west: lon - dLon, north: lat + dLat, east: lon + dLon };

  let data = await settle(cacheGet(id));
  if (data && data.v !== CACHE_VERSION) data = null;
  if (data) {
    progress('Dalla cache locale…');
  } else {
    progress('Scarico strade ed edifici (OpenStreetMap)…');
    const osmP = fetchOsm(bbox);
    const demP = fetchDemMosaic(bbox);
    const climP = settle(fetchClimate(lat, lon));
    const gbifP = settle(fetchGbif(bbox));
    const [features, dem] = await Promise.all([osmP, demP.then((d) => { progress('Rilievo scaricato, attendo OSM…'); return d; })]);
    if (!features.some((f) => f.properties.kind === 'building' || f.properties.kind === 'highway')) {
      throw new Error('In quest’area OpenStreetMap non ha strade né edifici.');
    }
    progress('Clima e vegetazione…');
    const [climate, gbif] = await Promise.all([climP, gbifP]);
    data = { v: CACHE_VERSION, features, meta: dem.meta, heights: dem.heights.buffer, climate, gbif, t: Date.now() };
    settle(cachePut(id, data));
  }

  progress('Profilo regionale…');
  const heights = new Float32Array(data.heights);
  const centroids = [];
  for (const f of data.features) {
    if (f.properties.kind !== 'building' || f.geometry.type !== 'Polygon') continue;
    const r = f.geometry.coordinates[0];
    let x = 0, y = 0;
    for (let i = 0; i < r.length - 1; i++) { x += r[i][0]; y += r[i][1]; }
    const n = Math.max(1, r.length - 1);
    centroids.push({ lon: x / n, lat: y / n });
  }
  const demS = demStats(heights, data.meta, centroids);
  const osmS = osmStats(data.features);
  const coastal = demS.seaFraction > 0.02 || osmS.coastline > 0;
  const offline = offlineClimate({ lat, townElev: demS.townElev, coastal });
  const online = data.climate
    ? { ...data.climate, tMean: +(data.climate.tSeaLevel - LAPSE_C_PER_M * Math.max(0, demS.townElev)).toFixed(2) }
    : null;
  const profile = resolveRegionProfile({
    lat, lon, bbox,
    osm: osmS,
    dem: demS,
    climate: { offline, online },
    country: place.countryCode ? { code: place.countryCode, name: place.countryName || null, admin: place.admin || null, source: 'nominatim' } : null,
    gbif: data.gbif,
  });

  const base = `mem://${id}`;
  registerData(`${base}/osm.json`, { features: data.features });
  registerData(`${base}/dem/meta.json`, data.meta);
  registerData(`${base}/dem/heightmap.bin`, data.heights);
  registerData(`${base}/region.json`, profile);

  return {
    id,
    live: true,
    name: place.name,
    region: [place.admin, place.countryName].filter(Boolean).join(', '),
    origin: { lat, lon },
    bbox,
    data: { osm: `${base}/osm.json`, demMeta: `${base}/dem/meta.json` },
    regionProfile: `${base}/region.json`,
    horizon: `${base}/horizon.json`, // riempito in background da generateHorizon
    spawn: { offsetX: 0, offsetZ: 0 },
    landmarks: { maxLabels: 12 },
    terrain: { step: 10, nearStep: 5, nearMargin: 120 },
    buildings: { roadClearance: 1.1 },
    look: { post: true, bloom: true },
  };
}

/**
 * Silhouette reale dell'orizzonte (65 km) calcolata nel browser: 25 tile z10 circa.
 * Da lanciare DOPO che la città è visibile (non blocca il caricamento).
 */
export async function generateHorizon(lat, lon, eyeElev) {
  const Z = 10, R = 66000;
  const dLat = R / 111320, dLon = R / (111320 * Math.cos((lat * Math.PI) / 180));
  const x0 = lon2tile(lon - dLon, Z), x1 = lon2tile(lon + dLon, Z);
  const y0 = lat2tile(lat + dLat, Z), y1 = lat2tile(lat - dLat, Z);
  const tiles = new Map();
  const jobs = [];
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    jobs.push(decodeTerrarium(TERRARIUM(Z, x, y)).then((t) => tiles.set(`${x}_${y}`, t), () => null));
  }
  await Promise.all(jobs);
  const n = 2 ** Z;
  const sampleElev = (la, lo) => {
    const fx = ((lo + 180) / 360) * n;
    const s = Math.log(Math.tan((la * Math.PI) / 180) + 1 / Math.cos((la * Math.PI) / 180));
    const fy = ((1 - s / Math.PI) / 2) * n;
    const tx = Math.floor(fx), ty = Math.floor(fy);
    const t = tiles.get(`${tx}_${ty}`);
    if (!t) return null;
    return t[Math.min(255, Math.floor((fy - ty) * 256)) * 256 + Math.min(255, Math.floor((fx - tx) * 256))];
  };
  return computeHorizon({ lat, lon, eyeElev, sampleElev });
}
