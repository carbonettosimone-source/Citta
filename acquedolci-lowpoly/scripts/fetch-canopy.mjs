#!/usr/bin/env node
/**
 * Alberi reali dalla mappa globale dell'altezza delle chiome (Meta/WRI "High Resolution Canopy
 * Height", 1 m, CC BY 4.0 — https://sustainability.fb.com/blog/2024/04/22/estimating-tree-canopy-height...).
 * Uso: node scripts/fetch-canopy.mjs <id-città>
 *
 * Il raster è un solo GeoTIFF (COG) per riquadro ~0,7°, letto via HTTP range request: si scarica
 * solo la finestra del bbox della città, non il file intero (che pesa centinaia di MB). Dai picchi
 * locali del raster (soppressione dei non-massimi) si ricava un albero per cima reale, non un punto
 * a caso nel poligono: posizione, altezza e raggio di chioma misurati, non stimati da regola.
 *
 * Output: public/data/canopy/<id>.json — fatti `source:'measured'` che il motore fonde (facts/
 * resolveFacts.js) con gli alberi OSM espliciti e usa per seminare l'esclusione delle regole
 * (biome/TreeRules.js): dove c'è un albero vero non se ne pianta uno finto sopra.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fromUrl } from 'geotiff';
import { setOrigin, project } from '../src/engine/geo.js';

/** Punto in poligono (anello piatto [x,z,...] già in metri locali). */
function pointInRing(x, z, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
    const xi = ring[i], zi = ring[i + 1], xj = ring[j], zj = ring[j + 1];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/**
 * Un albero vero non cresce in mezzo alla carreggiata o dentro un muro: se il livello compilato
 * c'è già, i picchi che cadono su strada/vicolo/mare/edificio sono quasi certamente rumore del
 * raster (bordo di un tetto, ombra) e si scartano alla fonte, non a runtime.
 */
function loadExclusionZones(root, cityId, unit) {
  const path = join(root, 'public/data/level', `${cityId}.json`);
  if (!existsSync(path)) return null;
  const level = JSON.parse(readFileSync(path, 'utf8'));
  const u = level.unit ?? unit;
  const rings = [];
  for (const layer of ['car', 'alley', 'sea']) {
    for (const e of level.layers?.[layer] || []) rings.push(e.o.map((v) => v * u));
  }
  for (const b of level.buildings || []) rings.push(b.o.map((v) => v * u));
  return (x, z) => rings.some((r) => pointInRing(x, z, r));
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2] || 'acquedolci';
const cfg = JSON.parse(readFileSync(join(ROOT, 'src/cities', `${id}.json`), 'utf8'));
const BBOX = cfg.bbox;
setOrigin(cfg.origin.lat, cfg.origin.lon);

const TILES_INDEX_URL = 'https://dataforgood-fb-data.s3.amazonaws.com/forests/v1/alsgedi_global_v6_float/tiles.geojson';
const TILE_URL = (t) => `https://dataforgood-fb-data.s3.amazonaws.com/forests/v1/alsgedi_global_v6_float/chm/${t}.tif`;
const CACHE_DIR = join(ROOT, '.cache');
const TILES_CACHE = join(CACHE_DIR, 'canopy-tiles.geojson');

const MIN_HEIGHT = 2.5; // m: sotto, è erba/arbusto (già gestito da biome/Grass.js), non un albero
const MIN_SPACING = 2.6; // m fra due cime: non due rilevazioni sullo stesso albero
const MAX_CROWN = 9; // m: raggio di chioma massimo plausibile (evita che un artefatto invada tutto)
const R = 6378137; // raggio terrestre usato dalla proiezione Web Mercator (EPSG:3857) del raster

const toMerc = (lon, lat) => [(lon * Math.PI) / 180 * R, R * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))];
const fromMerc = (x, y) => [(x / R) * (180 / Math.PI), (2 * Math.atan(Math.exp(y / R)) - Math.PI / 2) * (180 / Math.PI)];

async function retry(fn, tries = 5) {
  for (let i = 0; i < tries; i++) {
    try { return await fn(); } catch (e) {
      if (i === tries - 1) throw e;
      console.warn(`  retry ${i + 1}/${tries} (${e.message || e.cause?.message || e})`);
      await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
}

async function loadTilesIndex() {
  if (existsSync(TILES_CACHE)) return JSON.parse(readFileSync(TILES_CACHE, 'utf8'));
  console.log('Indice riquadri (una tantum, ~15 MB)…');
  const res = await retry(() => fetch(TILES_INDEX_URL));
  if (!res.ok) throw new Error(`tiles.geojson HTTP ${res.status}`);
  const json = await res.json();
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(TILES_CACHE, JSON.stringify(json));
  return json;
}

function tilesCovering(index, bbox) {
  const bboxOf = (coords) => {
    const xs = coords[0].map((p) => p[0]), ys = coords[0].map((p) => p[1]);
    return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
  };
  const hits = [];
  for (const f of index.features) {
    const b = bboxOf(f.geometry.coordinates);
    if (b.maxX < bbox.west || b.minX > bbox.east || b.maxY < bbox.south || b.minY > bbox.north) continue;
    hits.push(f.properties.tile);
  }
  return hits;
}

/** Legge una finestra del COG a strisce sequenziali (poche richieste in volo alla volta: il
 * tunnel di rete di alcuni sandbox chiude le connessioni se ne restano troppe aperte insieme). */
async function readWindow(image, px0, py0, px1, py1) {
  const winW = px1 - px0, winH = py1 - py0;
  const out = new Float32Array(winW * winH);
  const STRIP = 200;
  for (let y0 = 0; y0 < winH; y0 += STRIP) {
    const y1 = Math.min(winH, y0 + STRIP);
    const rasters = await retry(() => image.readRasters({ window: [px0, py0 + y0, px1, py0 + y1], width: winW, height: y1 - y0 }));
    out.set(rasters[0], y0 * winW);
  }
  return { data: out, width: winW, height: winH };
}

async function main() {
  const index = await loadTilesIndex();
  const tiles = tilesCovering(index, BBOX);
  if (!tiles.length) throw new Error('Nessun riquadro di altezza chiome copre questo bbox');
  if (tiles.length > 1) console.warn(`Il bbox tocca ${tiles.length} riquadri: uso solo il primo (${tiles[0]}) — città al bordo di un riquadro, raro.`);
  const tileId = tiles[0];
  console.log(`Riquadro ${tileId} → finestra bbox…`);

  const tiff = await fromUrl(TILE_URL(tileId), { blockSize: 512 * 1024, cacheSize: 64 });
  const image = await tiff.getImage();
  const origin = image.getOrigin();
  const resolution = image.getResolution();
  const margin = 15; // m: alberi appena fuori bbox contano per lo spacing ma non si esportano

  const [wx, sy] = toMerc(BBOX.west, BBOX.south);
  const [ex, ny] = toMerc(BBOX.east, BBOX.north);
  const marginPx = Math.ceil(margin / resolution[0]);
  const px0 = Math.max(0, Math.floor((wx - origin[0]) / resolution[0]) - marginPx);
  const px1 = Math.min(image.getWidth(), Math.ceil((ex - origin[0]) / resolution[0]) + marginPx);
  const py0 = Math.max(0, Math.floor((origin[1] - ny) / Math.abs(resolution[1])) - marginPx);
  const py1 = Math.min(image.getHeight(), Math.ceil((origin[1] - sy) / Math.abs(resolution[1])) + marginPx);
  const t0 = Date.now();
  const { data, width, height } = await readWindow(image, px0, py0, px1, py1);
  console.log(`  finestra ${width}×${height} px (${resolution[0].toFixed(2)} m/px) in ${Date.now() - t0} ms`);

  // ---- picchi locali: soppressione dei non-massimi, dal più alto al più basso, su griglia
  const cellPx = Math.max(1, Math.round(MIN_SPACING / resolution[0]));
  const candIdx = [];
  for (let i = 0; i < data.length; i++) if (data[i] >= MIN_HEIGHT) candIdx.push(i);
  candIdx.sort((a, b) => data[b] - data[a]);
  const taken = new Map(); // cella griglia (spacing) -> true se già occupata da un picco accettato
  const peaks = [];
  for (const i of candIdx) {
    const py = Math.floor(i / width), px = i % width;
    const cx = Math.floor(px / cellPx), cy = Math.floor(py / cellPx);
    let clash = false;
    for (let dj = -1; dj <= 1 && !clash; dj++) {
      for (let di = -1; di <= 1; di++) {
        if (taken.has(`${cx + di}:${cy + dj}`)) { clash = true; break; }
      }
    }
    if (clash) continue;
    taken.set(`${cx}:${cy}`, true);
    peaks.push({ px, py, height: data[i] });
  }

  // ---- raggio di chioma: cresce dalla cima finché il raster resta sopra metà della sua altezza
  function crownRadius(px, py, peakH) {
    const thresh = Math.max(MIN_HEIGHT * 0.6, peakH * 0.5);
    let r = 0;
    for (r = 1; r <= MAX_CROWN / resolution[0]; r++) {
      let anyAbove = false;
      for (const [dx, dy] of [[r, 0], [-r, 0], [0, r], [0, -r]]) {
        const x = px + dx, y = py + dy;
        if (x < 0 || y < 0 || x >= width || y >= height) continue;
        if (data[y * width + x] >= thresh) { anyAbove = true; break; }
      }
      if (!anyAbove) break;
    }
    return Math.max(0.8, (r - 1) * resolution[0]);
  }

  const excluded = loadExclusionZones(ROOT, id, 0.1);
  if (!excluded) console.warn('  livello compilato assente: niente filtro strade/edifici (lancia prima npm run compile-level)');
  const bboxMargin = { south: BBOX.south - 0.0002, west: BBOX.west - 0.0002, north: BBOX.north + 0.0002, east: BBOX.east + 0.0002 };
  const trees = [];
  let droppedExcluded = 0;
  for (const p of peaks) {
    const mx = origin[0] + (px0 + p.px + 0.5) * resolution[0];
    const my = origin[1] - (py0 + p.py + 0.5) * Math.abs(resolution[1]);
    const [lon, lat] = fromMerc(mx, my);
    if (lon < bboxMargin.west || lon > bboxMargin.east || lat < bboxMargin.south || lat > bboxMargin.north) continue;
    const { x, z } = project(lon, lat);
    if (excluded && excluded(x, z)) { droppedExcluded++; continue; }
    trees.push({
      x: +x.toFixed(2), z: +z.toFixed(2),
      height: +p.height.toFixed(1),
      crownRadius: +crownRadius(p.px, p.py, p.height).toFixed(1),
      confidence: +Math.min(1, p.height / 10).toFixed(2),
      source: 'measured',
    });
  }

  const out = {
    meta: {
      city: id, tileId, generatedAt: new Date().toISOString(),
      source: 'Meta/WRI High Resolution Canopy Height (2024), 1 m',
      license: 'CC BY 4.0',
      resolutionM: +resolution[0].toFixed(3),
      minHeight: MIN_HEIGHT, minSpacing: MIN_SPACING,
    },
    trees,
  };
  const outDir = join(ROOT, 'public/data/canopy');
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, `${id}.json`);
  writeFileSync(outPath, JSON.stringify(out));
  const hs = trees.map((t) => t.height);
  console.log(`  ${candIdx.length} pixel sopra soglia → ${peaks.length} picchi grezzi → ${droppedExcluded} scartati (su strada/mare/edificio) → ${trees.length} alberi`);
  if (trees.length) console.log(`  altezza: min ${Math.min(...hs).toFixed(1)} · media ${(hs.reduce((s, v) => s + v, 0) / hs.length).toFixed(1)} · max ${Math.max(...hs).toFixed(1)} m`);
  console.log(`→ ${outPath} (${(JSON.stringify(out).length / 1024).toFixed(0)} KB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
