#!/usr/bin/env node
/**
 * Foto stradali aperte (Mapillary, CC BY-SA 4.0) del nucleo del paese, con la posizione e la direzione
 * di ogni scatto, in coordinate locali del renderer (X est, Z sud, origine al Municipio).
 * Servono SOLO come riferimento per modellare le facciate (facade-from-photos.py): non finiscono nel gioco.
 *
 *   MAPILLARY_TOKEN=... NODE_USE_ENV_PROXY=1 node scripts/fetch-street-photos.mjs
 *
 * Output: data/street-photos/<id>.jpg (2048 px) + data/street-photos/index.json (gitignored)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { toUtm33 } from './geo.mjs';

const T = process.env.MAPILLARY_TOKEN;
if (!T) { console.error('serve MAPILLARY_TOKEN (non va mai scritto nei file)'); process.exit(1); }
const city = JSON.parse(readFileSync(new URL('../city.json', import.meta.url)));
const [OX, OY] = toUtm33(city.originLonLat.lon, city.originLonLat.lat).map((v) => Math.round(v));
const c = city.coreLonLat, box = [c.west, c.south, c.east, c.north];
const dir = new URL('../data/street-photos/', import.meta.url);
mkdirSync(dir, { recursive: true });
const FIELDS = 'id,captured_at,compass_angle,computed_compass_angle,is_pano,sequence,geometry,computed_geometry,thumb_2048_url,camera_type,camera_parameters,width,height,creator';

const all = new Map();
const NX = 3, NY = 2; // sotto i limiti di area dell'API
for (let i = 0; i < NX; i++) for (let j = 0; j < NY; j++) {
  const b = [box[0] + (box[2] - box[0]) * i / NX, box[1] + (box[3] - box[1]) * j / NY, box[0] + (box[2] - box[0]) * (i + 1) / NX, box[1] + (box[3] - box[1]) * (j + 1) / NY];
  const r = await fetch(`https://graph.mapillary.com/images?access_token=${encodeURIComponent(T)}&bbox=${b.join(',')}&fields=${FIELDS}&limit=2000`);
  const d = await r.json();
  if (d.error) throw new Error(JSON.stringify(d.error));
  for (const im of d.data) all.set(im.id, im);
}
const out = [];
let done = 0;
for (const im of all.values()) {
  const g = im.computed_geometry || im.geometry;
  const [x, y] = toUtm33(g.coordinates[0], g.coordinates[1]);
  const file = `${im.id}.jpg`, path = new URL(file, dir);
  if (!existsSync(path) && im.thumb_2048_url) {
    const r = await fetch(im.thumb_2048_url);
    if (r.ok) writeFileSync(path, Buffer.from(await r.arrayBuffer())); else continue;
  }
  out.push({
    id: im.id, file, x: +(x - OX).toFixed(2), z: +(-(y - OY)).toFixed(2), compass: im.computed_compass_angle ?? im.compass_angle,
    pano: !!im.is_pano, type: im.camera_type, params: im.camera_parameters, w: im.width, h: im.height,
    captured: im.captured_at, seq: im.sequence, creator: im.creator?.username || null,
  });
  if (++done % 20 === 0) console.log(done, '/', all.size);
}
writeFileSync(new URL('index.json', dir), JSON.stringify({ source: 'Mapillary contributors, CC BY-SA 4.0', origin: [OX, OY], photos: out }));
const by = {}; for (const p of out) by[p.creator || '?'] = (by[p.creator || '?'] || 0) + 1;
console.log(`${out.length} foto in data/street-photos/`, by);
