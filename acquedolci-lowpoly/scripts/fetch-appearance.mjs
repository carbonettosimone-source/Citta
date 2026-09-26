#!/usr/bin/env node
/**
 * City Appearance enrichment (city-agnostic) — open sources only.
 *
 *  1. Sentinel-2 L2A TCI (Element84 Earth Search STAC) → per-building roof colors
 *  2. Mapillary (optional MAPILLARY_TOKEN) → facade cues; graceful prior fallback
 *  3. OSM building=* + geometry → typology / roofKind
 *  4. OSM colour tags when present
 *
 *   node scripts/fetch-appearance.mjs acquedolci
 *
 * Output: public/data/appearance/<id>.json
 * Never uses Google tiles/imagery.
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fromUrl } from 'geotiff';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const UA = 'CityLowPolyAppearance/0.6 (educational; S2+OSM; no Google)';

function argCity(argv) {
  let city = process.env.CITY || 'acquedolci';
  for (const a of argv) {
    if (a.startsWith('--city=')) city = a.slice(7);
    else if (!a.startsWith('-')) city = a;
  }
  return city;
}

/** Zona UTM dalla longitudine (per bbox senza EPSG noto). */
function utmZoneOf(lon) {
  return Math.floor((((lon + 180) % 360) + 360) % 360 / 6) + 1;
}

/** Zona della scena S2: dal metadato EPSG (326xx nord / 327xx sud), non da una costante. */
function utmFromEpsg(epsg, fallbackLon, lat) {
  const code = Number(String(epsg ?? '').replace(/^EPSG:/i, ''));
  if (code >= 32601 && code <= 32660) return { zone: code - 32600, south: false };
  if (code >= 32701 && code <= 32760) return { zone: code - 32700, south: true };
  return { zone: utmZoneOf(fallbackLon), south: lat < 0 };
}

let UTM = { zone: 33, south: false };
function lonLatToUtm33(lon, lat) {
  return lonLatToUtm(lon, lat, UTM.zone, UTM.south);
}

function lonLatToUtm(lon, lat, zone, south) {
  const a = 6378137.0;
  const f = 1 / 298.257223563;
  const k0 = 0.9996;
  const e2 = f * (2 - f);
  const lon0 = (((zone - 1) * 6 - 180 + 3) * Math.PI) / 180;
  const φ = (lat * Math.PI) / 180;
  const λ = (lon * Math.PI) / 180 - lon0;
  const sinφ = Math.sin(φ);
  const cosφ = Math.cos(φ);
  const tanφ = Math.tan(φ);
  const N = a / Math.sqrt(1 - e2 * sinφ * sinφ);
  const T = tanφ * tanφ;
  const C = (e2 / (1 - e2)) * cosφ * cosφ;
  const A = cosφ * λ;
  const e4 = e2 * e2;
  const e6 = e4 * e2;
  const M =
    a *
    ((1 - e2 / 4 - (3 * e4) / 64 - (5 * e6) / 256) * φ -
      ((3 * e2) / 8 + (3 * e4) / 32 + (45 * e6) / 1024) * Math.sin(2 * φ) +
      ((15 * e4) / 256 + (45 * e6) / 1024) * Math.sin(4 * φ) -
      ((35 * e6) / 3072) * Math.sin(6 * φ));
  const x = k0 * N * (A + ((1 - T + C) * A ** 3) / 6 + ((5 - 18 * T + T * T) * A ** 5) / 120) + 500000;
  let y = k0 * (M + N * tanφ * ((A * A) / 2 + ((5 - T + 9 * C + 4 * C * C) * A ** 4) / 24));
  if (south) y += 10000000;
  return [x, y];
}

function toLocalMeters(ring) {
  const lat0 = ring[0][1];
  const mLat = 111320;
  const mLon = 111320 * Math.cos((lat0 * Math.PI) / 180);
  const pts = [];
  for (let i = 0; i < ring.length - 1; i++) {
    pts.push({
      x: (ring[i][0] - ring[0][0]) * mLon,
      z: (ring[i][1] - ring[0][1]) * mLat,
    });
  }
  return pts;
}

function ringArea(ring) {
  const pts = toLocalMeters(ring);
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % pts.length];
    a += p.x * q.z - q.x * p.z;
  }
  return Math.abs(a) * 0.5;
}

function ringPerim(ring) {
  const pts = toLocalMeters(ring);
  let p = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    p += Math.hypot(b.x - a.x, b.z - a.z);
  }
  return p;
}

function ringCentroid(ring) {
  let lon = 0;
  let lat = 0;
  const n = Math.max(1, ring.length - 1);
  for (let i = 0; i < n; i++) {
    lon += ring[i][0];
    lat += ring[i][1];
  }
  return { lon: lon / n, lat: lat / n };
}

function ringRectness(ring, area) {
  const pts = toLocalMeters(ring);
  if (pts.length < 3) return 0;
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;
  let cxx = 0;
  let czz = 0;
  let cxz = 0;
  for (const p of pts) {
    const dx = p.x - cx;
    const dz = p.z - cz;
    cxx += dx * dx;
    czz += dz * dz;
    cxz += dx * dz;
  }
  const yaw = 0.5 * Math.atan2(2 * cxz, cxx - czz);
  const c = Math.cos(-yaw);
  const s = Math.sin(-yaw);
  let minL = Infinity;
  let maxL = -Infinity;
  let minW = Infinity;
  let maxW = -Infinity;
  for (const p of pts) {
    const dx = p.x - cx;
    const dz = p.z - cz;
    const l = dx * c - dz * s;
    const w = dx * s + dz * c;
    minL = Math.min(minL, l);
    maxL = Math.max(maxL, l);
    minW = Math.min(minW, w);
    maxW = Math.max(maxW, w);
  }
  const obbA = Math.max(0.8, maxL - minL) * Math.max(0.8, maxW - minW);
  return Math.min(1, area / Math.max(1e-3, obbA));
}

function isConvex(ring) {
  const pts = toLocalMeters(ring);
  let sign = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const c = pts[(i + 2) % pts.length];
    const cross = (b.x - a.x) * (c.z - b.z) - (b.z - a.z) * (c.x - b.x);
    if (Math.abs(cross) < 1e-6) continue;
    const s = cross > 0 ? 1 : -1;
    if (!sign) sign = s;
    else if (s !== sign) return false;
  }
  return true;
}

function parseColor(str) {
  if (!str || typeof str !== 'string') return null;
  const s = str.trim().toLowerCase();
  const named = {
    red: [180, 60, 50],
    brown: [120, 70, 40],
    terracotta: [186, 92, 55],
    tile: [186, 92, 55],
    white: [240, 235, 225],
    grey: [160, 160, 160],
    gray: [160, 160, 160],
    black: [40, 40, 40],
    beige: [230, 215, 185],
    cream: [240, 228, 200],
    yellow: [220, 190, 90],
    orange: [200, 110, 50],
  };
  if (named[s]) return named[s].slice();
  const hex = s.match(/^#?([0-9a-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  return null;
}

function blend(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}
function clamp(c) {
  return c.map((v) => Math.max(0, Math.min(255, Math.round(v))));
}

const WALL_PRIORS = {
  house: [[245, 234, 216], [240, 224, 200], [232, 213, 176], [226, 201, 160], [242, 212, 196], [232, 200, 184], [248, 240, 228]],
  apartments: [[236, 228, 216], [220, 210, 198], [210, 200, 188], [245, 230, 210]],
  church: [[232, 224, 212]],
  garage: [[200, 192, 180]],
  industrial: [[180, 178, 172], [160, 158, 152]],
  school: [[236, 228, 210], [220, 210, 190]],
  commercial: [[240, 232, 220], [210, 200, 190]],
  roof_only: [[230, 220, 200]],
};

/** RegionProfile (bake-region): se presente sostituisce i prior mediterranei fissi. */
let REGION = null;

function priorWall(typology, id) {
  if (REGION?.walls?.palette?.length && ['house', 'apartments', 'commercial'].includes(typology)) {
    const pal = REGION.walls.palette;
    return pal[Math.abs(id * 7) % pal.length].slice();
  }
  const list = WALL_PRIORS[typology] || WALL_PRIORS.house;
  return list[Math.abs(id * 7) % list.length].slice();
}

function classifyTypology(props, area, levels) {
  const t = (props.building || 'yes').toLowerCase();
  if (['church', 'cathedral', 'chapel'].includes(t)) return 'church';
  if (['garage', 'carport', 'shed', 'garages'].includes(t)) return 'garage';
  if (['industrial', 'warehouse', 'manufacture', 'factory'].includes(t)) return 'industrial';
  if (['school', 'kindergarten', 'university', 'college', 'public'].includes(t)) return 'school';
  if (['apartments', 'residential', 'terrace'].includes(t)) return 'apartments';
  if (['house', 'detached', 'semidetached_house', 'bungalow', 'villa'].includes(t)) return 'house';
  if (['retail', 'commercial', 'office', 'hotel', 'kiosk'].includes(t)) return 'commercial';
  if (t === 'roof') return 'roof_only';
  if (levels >= 3 || area > 350) return 'apartments';
  if (area < 35) return 'garage';
  if (area > 180) return 'apartments';
  return 'house';
}

function classifyRoofKind({ typology, props, rectness, convex, area, roofRgb, s2Conf }) {
  const tagged = (props.roofShape || '').toLowerCase();
  if (tagged.includes('flat')) return { kind: 'flat', conf: 0.95 };
  if (tagged.includes('hip') || tagged === 'pyramidal') return { kind: 'hip', conf: 0.9 };
  if (tagged.includes('gable')) {
    return { kind: rectness >= 0.82 && convex ? 'gable' : 'flat', conf: 0.85 };
  }
  if (['industrial', 'garage', 'roof_only'].includes(typology)) return { kind: 'flat', conf: 0.9 };
  if (typology === 'church') return { kind: convex && rectness >= 0.75 ? 'hip' : 'flat', conf: 0.7 };

  const [r, g, b] = roofRgb;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const terracotta = r > g + 15 && r > b + 20 && r > 90 && r < 220 && chroma > 25;
  const darkFlat = lum < 55 && chroma < 25;

  if (darkFlat && (typology === 'industrial' || area > 250)) {
    return { kind: 'flat', conf: 0.75 * s2Conf };
  }
  if (!convex || rectness < 0.86) return { kind: 'flat', conf: 0.8 };
  const regionFlat = REGION?.roof?.flatShare;
  if (regionFlat != null && (typology === 'house' || typology === 'apartments')) {
    // Prior regionale: dove i tetti piani dominano (arido) o sono rari (alpino/nordico)
    if (regionFlat > 0.65) return { kind: 'flat', conf: 0.5 };
    if (regionFlat < 0.25) return { kind: rectness >= 0.9 ? 'gable' : 'hip', conf: 0.5 };
  }
  if (typology === 'house' && terracotta) return { kind: 'gable', conf: 0.55 + 0.3 * s2Conf };
  if (typology === 'house' || typology === 'apartments') {
    return { kind: rectness >= 0.9 ? 'gable' : 'flat', conf: 0.5 };
  }
  return { kind: 'flat', conf: 0.65 };
}

function roofFromS2(raw, typology) {
  const terracotta = REGION?.roof?.palette?.[0] || [186, 92, 55];
  const grey = [120, 118, 112];
  if (typology === 'industrial' || typology === 'garage') return clamp(blend(raw, grey, 0.35));
  if (typology === 'church') return clamp(blend(raw, [106, 104, 96], 0.4));
  // Keep most of the S2 measurement so roofs vary across the town; light prior only.
  return clamp(blend(raw, terracotta, 0.12));
}

function wallFromSignals({ typology, id, roofRgb, mapillaryRgb, osmWall }) {
  if (osmWall) return { rgb: osmWall, source: 'osm', conf: 0.95 };
  if (mapillaryRgb) {
    const prior = priorWall(typology, id);
    return { rgb: clamp(blend(mapillaryRgb, prior, 0.25)), source: 'mapillary', conf: 0.7 };
  }
  const prior = priorWall(typology, id);
  // Stronger per-building identity: mix prior with a lightened roof-adjacent wash
  const wash = [
    Math.min(250, Math.round(roofRgb[0] * 0.35 + 165)),
    Math.min(245, Math.round(roofRgb[1] * 0.35 + 155)),
    Math.min(235, Math.round(roofRgb[2] * 0.25 + 145)),
  ];
  const warm = blend(prior, wash, 0.42);
  return { rgb: clamp(warm), source: 'prior+roof', conf: 0.45 };
}

async function loadS2(bbox) {
  console.log('STAC Earth Search (Sentinel-2 L2A)…');
  const res = await fetch('https://earth-search.aws.element84.com/v1/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': UA },
    body: JSON.stringify({
      collections: ['sentinel-2-l2a'],
      bbox: [bbox.west, bbox.south, bbox.east, bbox.north],
      datetime: '2024-05-01T00:00:00Z/2025-10-01T00:00:00Z',
      limit: 5,
      query: { 'eo:cloud_cover': { lt: 15 } },
    }),
  });
  if (!res.ok) throw new Error(`STAC HTTP ${res.status}`);
  const json = await res.json();
  const feats = json.features || [];
  if (!feats.length) throw new Error('No S2 scenes');
  feats.sort((a, b) => (a.properties['eo:cloud_cover'] ?? 99) - (b.properties['eo:cloud_cover'] ?? 99));
  const feat = feats[0];
  const href = feat.assets.visual?.href;
  if (!href) throw new Error('No visual COG');
  console.log('  item', feat.id, 'cloud', feat.properties['eo:cloud_cover']);

  UTM = utmFromEpsg(feat.properties['proj:epsg'] ?? feat.properties['proj:code'], (bbox.west + bbox.east) / 2, bbox.south);
  console.log('  UTM zona', UTM.zone, UTM.south ? 'S' : 'N');
  const tiff = await fromUrl(href);
  const image = await tiff.getImage();
  const origin = image.getOrigin();
  const resolution = image.getResolution();
  const corners = [
    lonLatToUtm33(bbox.west, bbox.south),
    lonLatToUtm33(bbox.east, bbox.south),
    lonLatToUtm33(bbox.west, bbox.north),
    lonLatToUtm33(bbox.east, bbox.north),
  ];
  const minE = Math.min(...corners.map((c) => c[0]));
  const maxE = Math.max(...corners.map((c) => c[0]));
  const minN = Math.min(...corners.map((c) => c[1]));
  const maxN = Math.max(...corners.map((c) => c[1]));
  let px0 = Math.max(0, Math.floor((minE - origin[0]) / resolution[0]) - 2);
  let px1 = Math.min(image.getWidth(), Math.ceil((maxE - origin[0]) / resolution[0]) + 2);
  let py0 = Math.max(0, Math.floor((origin[1] - maxN) / Math.abs(resolution[1])) - 2);
  let py1 = Math.min(image.getHeight(), Math.ceil((origin[1] - minN) / Math.abs(resolution[1])) + 2);
  const winW = px1 - px0;
  const winH = py1 - py0;
  const bands = await image.readRasters({ window: [px0, py0, px1, py1], width: winW, height: winH });
  console.log(`  window ${winW}×${winH}`);

  function sample(lon, lat) {
    const [e, n] = lonLatToUtm33(lon, lat);
    const x = Math.round((e - origin[0]) / resolution[0] - px0);
    const y = Math.round((origin[1] - n) / Math.abs(resolution[1]) - py0);
    if (x < 0 || y < 0 || x >= winW || y >= winH) return null;
    const i = y * winW + x;
    const r = bands[0][i];
    const g = bands[1][i];
    const b = bands[2][i];
    if (r + g + b < 20) return null;
    return [r, g, b];
  }

  function sampleFootprint(ring) {
    const c = ringCentroid(ring);
    const samples = [{ lon: c.lon, lat: c.lat }];
    const n = ring.length - 1;
    for (let i = 0; i < n; i++) {
      samples.push({ lon: ring[i][0], lat: ring[i][1] });
      const j = (i + 1) % n;
      samples.push({
        lon: (ring[i][0] + ring[j][0]) * 0.5,
        lat: (ring[i][1] + ring[j][1]) * 0.5,
      });
    }
    let sr = 0;
    let sg = 0;
    let sb = 0;
    let k = 0;
    for (const s of samples) {
      const rgb = sample(s.lon, s.lat);
      if (!rgb) continue;
      sr += rgb[0];
      sg += rgb[1];
      sb += rgb[2];
      k++;
    }
    if (!k) return null;
    return [Math.round(sr / k), Math.round(sg / k), Math.round(sb / k)];
  }

  function contextStats(step = 8) {
    const pavement = [];
    const plaza = [];
    const veg = [];
    for (let y = 0; y < winH; y += step) {
      for (let x = 0; x < winW; x += step) {
        const i = y * winW + x;
        const r = bands[0][i];
        const g = bands[1][i];
        const b = bands[2][i];
        if (r + g + b < 25) continue;
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const green = g - Math.max(r, b);
        if (green > 12 && g > 50) veg.push([r, g, b]);
        else if (lum < 70 && Math.abs(r - g) < 20) pavement.push([r, g, b]);
        else if (lum > 90 && lum < 180 && Math.abs(r - g) < 35) plaza.push([r, g, b]);
      }
    }
    const mean = (list, fb) => {
      if (!list.length) return fb;
      let sr = 0;
      let sg = 0;
      let sb = 0;
      for (const c of list) {
        sr += c[0];
        sg += c[1];
        sb += c[2];
      }
      return [Math.round(sr / list.length), Math.round(sg / list.length), Math.round(sb / list.length)];
    };
    return {
      pavementRgb: mean(pavement, [58, 60, 64]),
      plazaRgb: mean(plaza, [176, 168, 154]),
      vegRgb: mean(veg, [88, 122, 62]),
      counts: { pavement: pavement.length, plaza: plaza.length, veg: veg.length },
    };
  }

  return {
    itemId: feat.id,
    cloud: feat.properties['eo:cloud_cover'],
    href,
    sampleFootprint,
    contextStats,
  };
}

async function loadMapillary(bbox) {
  const token = process.env.MAPILLARY_TOKEN || process.env.MAPILLARY_ACCESS_TOKEN || '';
  const note = { attempted: true, hits: 0, status: 'skipped', detail: '' };
  const byCell = new Map();
  if (!token) {
    note.status = 'no_token';
    note.detail =
      'Set MAPILLARY_TOKEN for street-level facade sampling. Walls fall back to Mediterranean priors + roof warmth.';
    console.log('Mapillary: no token — using facade priors');
    return { note, byCell };
  }
  try {
    const url =
      `https://graph.mapillary.com/images?access_token=${encodeURIComponent(token)}` +
      `&fields=id,computed_geometry&bbox=${bbox.west},${bbox.south},${bbox.east},${bbox.north}&limit=50`;
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!res.ok) {
      note.status = `http_${res.status}`;
      note.detail = 'Graph API rejected token or request';
      console.log('Mapillary HTTP', res.status);
      return { note, byCell };
    }
    const json = await res.json();
    const images = json.data || [];
    note.hits = images.length;
    note.status = images.length ? 'ok' : 'empty';
    for (const img of images) {
      const coords = img.computed_geometry?.coordinates;
      if (!coords) continue;
      const key = `${coords[0].toFixed(4)},${coords[1].toFixed(4)}`;
      byCell.set(key, [235, 220, 195]); // sunlit plaster cue at image location
    }
    note.detail = 'Image positions used; full thumb decode is token-gated enhancement.';
    console.log('Mapillary images', images.length);
    return { note, byCell };
  } catch (err) {
    note.status = 'error';
    note.detail = String(err.message || err);
    return { note, byCell };
  }
}

function nearestMapillary(byCell, lon, lat) {
  if (!byCell.size) return null;
  let best = null;
  let bestD = Infinity;
  for (const [key, rgb] of byCell) {
    const [lon2, lat2] = key.split(',').map(Number);
    const d = Math.hypot((lon2 - lon) * 85, (lat2 - lat) * 111);
    if (d < bestD) {
      bestD = d;
      best = rgb;
    }
  }
  return bestD < 0.1 ? best : null;
}

async function main() {
  const cityId = argCity(process.argv.slice(2));
  const configPath = join(ROOT, 'src/cities', `${cityId}.json`);
  if (!existsSync(configPath)) {
    console.error('Missing city config', configPath);
    process.exit(1);
  }
  const city = JSON.parse(readFileSync(configPath, 'utf8'));
  const bbox = city.bbox;
  const osmRel = (city.data?.osm || `/data/${cityId}.json`).replace(/^\//, '');
  const osmPath = join(ROOT, 'public', osmRel);
  if (!existsSync(osmPath)) {
    console.error('Missing OSM', osmPath);
    process.exit(1);
  }
  const osm = JSON.parse(readFileSync(osmPath, 'utf8'));
  const outDir = join(ROOT, 'public/data/appearance');
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, `${cityId}.json`);

  const regionPath = join(ROOT, 'public/data/region', `${cityId}.json`);
  if (existsSync(regionPath)) {
    REGION = JSON.parse(readFileSync(regionPath, 'utf8'));
    console.log('RegionProfile:', Object.keys(REGION.archetypes?.weights || {}).join('+'));
  } else {
    console.warn('RegionProfile assente: prior mediterranei di default (esegui bake-region prima)');
  }

  const buildings = (osm.features || []).filter(
    (f) => f.properties?.kind === 'building' && f.geometry?.type === 'Polygon',
  );
  console.log('Buildings', buildings.length);

  let s2 = null;
  try {
    s2 = await loadS2(bbox);
  } catch (err) {
    console.warn('S2 failed:', err.message);
  }

  const mapillary = await loadMapillary(bbox);

  const dnaRel = (city.dna || `/data/dna/${cityId}.json`).replace(/^\//, '');
  const dnaPath = join(ROOT, 'public', dnaRel);
  let dnaPalette = {
    roofRgb: [186, 92, 55],
    wallRgb: [236, 222, 198],
    pavementRgb: [58, 60, 64],
    plazaRgb: [176, 168, 154],
    vegRgb: [88, 122, 62],
  };
  if (existsSync(dnaPath)) {
    try {
      const dna = JSON.parse(readFileSync(dnaPath, 'utf8'));
      if (dna.palette) dnaPalette = { ...dnaPalette, ...dna.palette };
    } catch {
      /* ignore */
    }
  }

  const context = s2 ? s2.contextStats() : null;
  if (context && existsSync(dnaPath)) {
    try {
      const dna = JSON.parse(readFileSync(dnaPath, 'utf8'));
      dna.palette = {
        ...dna.palette,
        pavementRgb: blend(dna.palette?.pavementRgb || dnaPalette.pavementRgb, context.pavementRgb, 0.5),
        plazaRgb: blend(dna.palette?.plazaRgb || dnaPalette.plazaRgb, context.plazaRgb, 0.45),
        vegRgb: blend(dna.palette?.vegRgb || dnaPalette.vegRgb, context.vegRgb, 0.4),
      };
      dna.appearanceRefresh = {
        at: new Date().toISOString(),
        s2Item: s2?.itemId,
        contextCounts: context.counts,
      };
      writeFileSync(dnaPath, JSON.stringify(dna, null, 2));
      console.log('DNA palette refreshed from S2 context');
    } catch (e) {
      console.warn('DNA refresh skipped', e.message);
    }
  }

  const records = {};
  let s2Hits = 0;
  let mapillaryHits = 0;
  let osmColorHits = 0;
  const roofKindMix = { flat: 0, gable: 0, hip: 0 };
  const typologyMix = {};

  for (const f of buildings) {
    const id = f.properties.id;
    const ring = f.geometry.coordinates[0];
    if (!ring || ring.length < 4) continue;
    const area = ringArea(ring);
    const levels = f.properties.levels ? +f.properties.levels : 1;
    const c = ringCentroid(ring);
    const rectness = ringRectness(ring, area);
    const convex = isConvex(ring);
    const peri = ringPerim(ring);
    const compactness = peri > 0 ? (4 * Math.PI * area) / (peri * peri) : 0;
    const typology = classifyTypology(f.properties, area, levels);
    typologyMix[typology] = (typologyMix[typology] || 0) + 1;

    let rawS2 = s2 ? s2.sampleFootprint(ring) : null;
    let s2Conf = 0.25;
    if (rawS2) {
      s2Hits++;
      s2Conf = 0.65;
    } else {
      rawS2 = dnaPalette.roofRgb.slice();
    }

    const osmRoof = parseColor(f.properties.roofColour || f.properties.roofColor);
    const osmWall = parseColor(f.properties.wallColour || f.properties.buildingColour);
    if (osmRoof || osmWall) osmColorHits++;

    const roofRgb = osmRoof || roofFromS2(rawS2, typology);
    const mly = nearestMapillary(mapillary.byCell, c.lon, c.lat);
    if (mly) mapillaryHits++;
    const wall = wallFromSignals({ typology, id, roofRgb, mapillaryRgb: mly, osmWall });
    const roof = classifyRoofKind({
      typology,
      props: f.properties,
      rectness,
      convex,
      area,
      roofRgb,
      s2Conf,
    });
    roofKindMix[roof.kind] = (roofKindMix[roof.kind] || 0) + 1;

    records[String(id)] = {
      id,
      lon: +c.lon.toFixed(6),
      lat: +c.lat.toFixed(6),
      areaM2: Math.round(area),
      typology,
      roofKind: roof.kind,
      roofColor: roofRgb,
      wallColor: wall.rgb,
      rectness: +rectness.toFixed(3),
      convex,
      compactness: +compactness.toFixed(3),
      confidence: {
        roofColor: +s2Conf.toFixed(2),
        wallColor: wall.conf,
        roofKind: +roof.conf.toFixed(2),
      },
      sources: {
        roof: osmRoof ? 'osm' : s2Conf > 0.3 ? 'sentinel2' : 'dna',
        wall: wall.source,
      },
    };
  }

  const appearance = {
    city: cityId,
    version: 1,
    generatedAt: new Date().toISOString(),
    sources: {
      sentinel2: s2
        ? { itemId: s2.itemId, cloudCover: s2.cloud, href: s2.href, hits: s2Hits }
        : null,
      mapillary: mapillary.note,
      osmColourTags: osmColorHits,
      note:
        'Satellite = color DNA + per-building roof sampling only. Geometry remains OSM footprints. No Google tiles.',
    },
    stats: {
      buildings: Object.keys(records).length,
      s2RoofSamples: s2Hits,
      mapillaryHits,
      osmColorHits,
      roofKindMix,
      typologyMix,
    },
    context: context
      ? { pavementRgb: context.pavementRgb, plazaRgb: context.plazaRgb, vegRgb: context.vegRgb }
      : null,
    buildings: records,
  };

  writeFileSync(outPath, JSON.stringify(appearance));
  console.log('\nWrote', outPath);
  console.log(JSON.stringify(appearance.stats, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
