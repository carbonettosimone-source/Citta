#!/usr/bin/env node
/**
 * Strade vere al posto dei pochi pixel dell'ortofoto: assi da OpenStreetMap, LARGHEZZE MISURATE.
 *
 * Nel DBTR il bordo strada è disegnato solo dove la via confina con aree aperte; in paese il bordo
 * è la facciata. Quindi, ogni 2,5 m lungo l'asse OSM, si lanciano due raggi perpendicolari e si
 * misura la distanza dal primo ostacolo reale a sinistra e a destra: facciata DBTR, bordo strada
 * DBTR, muro divisorio DBTR. Lo spazio fra i due ("canyon") si divide in carreggiata e marciapiedi,
 * e l'asse viene ricentrato nel canyon. Senza ostacoli (strada di campagna) vale la larghezza tipica
 * del tipo di strada, senza marciapiede.
 *
 * Output public/data/streets.json (coordinate locali: X est, Z sud, origine al Municipio):
 *   roads[]: { k: tipo, p: [x,z,...], cw: carreggiata m, sl/sr: marciapiede sx/dx per vertice, mk: mezzeria }
 *   junctions[]: [x, z, raggio]    crossings[]: [x, z, angolo, larghezza]    benches[]: [x, z]
 *   paths[]: sentieri/pedonali/scalinate { k, p, w }
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { toUtm33 } from './geo.mjs';

const root = new URL('..', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root)));
const city = read('city.json');
const [OX, OY] = toUtm33(city.originLonLat.lon, city.originLonLat.lat).map((v) => Math.round(v));
const loc = (x, y) => [x - OX, -(y - OY)];
const locLL = (lon, lat) => loc(...toUtm33(lon, lat));

// ---- ostacoli: segmenti in coordinate locali, indice a griglia
const segs = [];
const addPath = (pts, closed) => { for (let i = 0; i < pts.length - 1 + (closed ? 1 : 0); i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; if (Math.hypot(b[0] - a[0], b[1] - a[1]) > 0.05) segs.push([a[0], a[1], b[0], b[1]]); } };
for (const b of read('data/buildings.json').buildings) {
  if (b.code === 'B007') continue; // tettoia: aperta, non chiude la strada
  addPath(b.rings[0].map(([x, y]) => loc(x, y)), false);
}
const extra = read('data/dbtr-extra.json');
for (const f of extra.roadEdges) if (f.code === 'A001' || f.code === 'A002') for (const p of f.parts) addPath(p.map(([x, y]) => loc(x, y)), false);
for (const f of extra.dividers) if (f.code === 'E003' || f.code === 'E005') for (const p of f.parts) addPath(p.map(([x, y]) => loc(x, y)), false);
const CELL = 10, grid = new Map();
segs.forEach((s, i) => {
  const x0 = Math.floor(Math.min(s[0], s[2]) / CELL), x1 = Math.floor(Math.max(s[0], s[2]) / CELL);
  const z0 = Math.floor(Math.min(s[1], s[3]) / CELL), z1 = Math.floor(Math.max(s[1], s[3]) / CELL);
  for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) { const k = `${x},${z}`; if (!grid.has(k)) grid.set(k, []); grid.get(k).push(i); }
});
/** distanza lungo il raggio (px,pz)+t·(dx,dz) dal primo segmento colpito, fino a maxT */
function ray(px, pz, dx, dz, maxT) {
  let best = maxT;
  const seen = new Set();
  for (let t = 0; t <= maxT + CELL; t += CELL / 2) {
    const k = `${Math.floor((px + dx * t) / CELL)},${Math.floor((pz + dz * t) / CELL)}`;
    for (const i of grid.get(k) || []) {
      if (seen.has(i)) continue; seen.add(i);
      const [ax, az, bx, bz] = segs[i];
      const ex = bx - ax, ez = bz - az, den = dx * ez - dz * ex;
      if (Math.abs(den) < 1e-9) continue;
      const tt = ((ax - px) * ez - (az - pz) * ex) / den, u = ((ax - px) * dz - (az - pz) * dx) / den;
      if (tt > 0.3 && u >= 0 && u <= 1 && tt < best) best = tt;
    }
    if (t > best) break;
  }
  return best < maxT ? best : null;
}

// ---- assi OSM
const osm = JSON.parse(readFileSync(new URL('../acquedolci-lowpoly/public/data/acquedolci.json', root)));
const TYPE = { // carreggiata tipica (m), mezzeria tratteggiata
  primary: [7.5, true], secondary: [7, true], tertiary: [6.5, true], unclassified: [5.5, false],
  residential: [5.5, false], living_street: [4.5, false], service: [3.5, false], pedestrian: [5, false],
};
const PATHS = { footway: 1.8, path: 1.2, steps: 2, track: 3 };
const roads = [], paths = [];
const nodeUse = new Map();
const key = ([x, z]) => `${x.toFixed(1)},${z.toFixed(1)}`;
const median = (a) => { const s = a.filter((v) => v != null).sort((x, y) => x - y); return s.length ? s[s.length >> 1] : null; };

for (const f of osm.features) {
  const p = f.properties;
  if (p.kind !== 'highway' || f.geometry.type !== 'LineString' || p.tunnel || p.bridge) continue;
  const pts = f.geometry.coordinates.map(([lon, lat]) => locLL(lon, lat));
  if (PATHS[p.highway]) { paths.push({ k: p.highway, p: pts.flat().map((v) => +v.toFixed(2)), w: PATHS[p.highway] }); continue; }
  const T = TYPE[p.highway]; if (!T) continue; // autostrada (viadotti/gallerie) esclusa: la mostra l'ortofoto
  // ricampionamento ogni 2,5 m: i raggi e la ricentratura lavorano su questi punti
  const rs = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i]; const L = Math.hypot(bx - ax, bz - az); const n = Math.max(1, Math.ceil(L / 2.5));
    for (let k = 1; k <= n; k++) rs.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
  }
  for (const q of [pts[0], pts.at(-1)]) nodeUse.set(key(q), (nodeUse.get(key(q)) || 0) + 1);
  for (const q of pts.slice(1, -1)) nodeUse.set(key(q), (nodeUse.get(key(q)) || 0) + 1);
  const L = [], R = [];
  for (let i = 0; i < rs.length; i++) {
    const a = rs[Math.max(0, i - 1)], b = rs[Math.min(rs.length - 1, i + 1)];
    let tx = b[0] - a[0], tz = b[1] - a[1]; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    const nx = -tz, nz = tx; // sinistra
    L.push(ray(rs[i][0], rs[i][1], nx, nz, 14)); R.push(ray(rs[i][0], rs[i][1], -nx, -nz, 14));
  }
  // mediana mobile: una porta o un vicolo laterale non devono allargare la via per un campione
  const smooth = (arr) => arr.map((_, i) => median(arr.slice(Math.max(0, i - 3), i + 4)));
  const Ls = smooth(L), Rs = smooth(R);
  const [typW, marks] = T;
  const canyons = Ls.map((l, i) => (l != null && Rs[i] != null ? l + Rs[i] : null)).filter((v) => v != null);
  const canyon = median(canyons);
  // carreggiata costante sul tratto: tipica, ristretta se il canyon misurato non ci sta con 1 m per lato
  let cw = typW;
  if (canyon != null) cw = Math.max(3, Math.min(typW + 1, canyon - 2.2));
  if (canyon != null && canyon < 5.2) cw = Math.max(2.6, canyon - 0.4); // vicolo: niente marciapiede
  const out = [], sl = [], sr = [];
  for (let i = 0; i < rs.length; i++) {
    let [x, z] = rs[i];
    const a = rs[Math.max(0, i - 1)], b = rs[Math.min(rs.length - 1, i + 1)];
    let tx = b[0] - a[0], tz = b[1] - a[1]; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    const nx = -tz, nz = tx;
    const l = Ls[i], r = Rs[i];
    // ricentratura nel canyon (OSM è spesso spostato di 1-2 m verso un lato), al massimo 3 m
    if (l != null && r != null) { const sh = Math.max(-3, Math.min(3, (l - r) / 2)); x += nx * sh; z += nz * sh; }
    const half = cw / 2;
    const room = (d) => (d == null ? 0 : Math.max(0, Math.min(3, d - half - 0.05)));
    const lw = l != null && r != null ? room((l + r) / 2) : room(l);
    const rw = l != null && r != null ? room((l + r) / 2) : room(r);
    out.push(+x.toFixed(2), +z.toFixed(2));
    sl.push(lw >= 0.7 ? +lw.toFixed(2) : 0); sr.push(rw >= 0.7 ? +rw.toFixed(2) : 0);
  }
  roads.push({ k: p.highway, p: out, cw: +cw.toFixed(2), sl, sr, mk: marks && cw >= 5.5 ? 1 : 0, name: p.name || null });
}

// ---- incroci: nodi condivisi da ≥2 vie → disco d'asfalto che chiude i giunti
const junctions = [];
for (const [k, n] of nodeUse) if (n >= 2) { const [x, z] = k.split(',').map(Number); junctions.push([x, z]); }
for (const j of junctions) {
  let r = 2.5;
  for (const rd of roads) for (let i = 0; i < rd.p.length; i += 2) if (Math.hypot(rd.p[i] - j[0], rd.p[i + 1] - j[1]) < 3) r = Math.max(r, rd.cw / 2 + 0.3);
  j.push(+r.toFixed(2));
}

// ---- strisce pedonali e panchine vere (OSM)
const crossings = [];
for (const f of osm.features) {
  if (f.properties.kind !== 'crossing') continue;
  const [x, z] = locLL(...f.geometry.coordinates);
  let best = null;
  for (const rd of roads) for (let i = 0; i + 3 < rd.p.length; i += 2) {
    const ax = rd.p[i], az = rd.p[i + 1], bx = rd.p[i + 2], bz = rd.p[i + 3];
    const Lq = (bx - ax) ** 2 + (bz - az) ** 2; if (!Lq) continue;
    const t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / Lq));
    const d = Math.hypot(x - ax - (bx - ax) * t, z - az - (bz - az) * t);
    if (!best || d < best.d) best = { d, ang: Math.atan2(bx - ax, bz - az), cw: rd.cw, x: ax + (bx - ax) * t, z: az + (bz - az) * t };
  }
  if (best && best.d < 6) crossings.push([+best.x.toFixed(2), +best.z.toFixed(2), +best.ang.toFixed(3), best.cw]);
}
const benches = [];
for (const f of osm.features) {
  if (f.properties.amenity === 'bench' && f.geometry.type === 'Point') benches.push(locLL(...f.geometry.coordinates).map((v) => +v.toFixed(2)));
}

// ---- muri e recinzioni veri (DBTR): tipo → altezza e materiale nel renderer
const WALL = { E003: 0, E005: 1, E004: 2, E002: 3 }; // divisorio, sostegno, a secco, recinzione/cancello
const walls = [];
for (const f of extra.dividers) {
  if (!(f.code in WALL)) continue;
  for (const part of f.parts) {
    const pts = part.map(([x, y]) => loc(x, y));
    if (pts.length < 2) continue;
    walls.push({ k: WALL[f.code], p: pts.flat().map((v) => +v.toFixed(2)) });
  }
}

// ---- lampioni: sul bordo esterno del cordolo, ogni ~27 m, alternati sui due lati. Non sono nei
// dati aperti: posizione tipica, non censita.
const lamps = [];
for (const rd of roads) {
  let acc = 13, side = 1;
  for (let i = 2; i < rd.p.length; i += 2) {
    const ax = rd.p[i - 2], az = rd.p[i - 1], bx = rd.p[i], bz = rd.p[i + 1];
    const L = Math.hypot(bx - ax, bz - az); acc += L;
    if (acc < 27) continue;
    acc = 0;
    const tx = (bx - ax) / (L || 1), tz = (bz - az) / (L || 1), nx = -tz, nz = tx;
    const k = i / 2, sw = side > 0 ? rd.sl[k] : rd.sr[k];
    if (!(sw >= 1)) { side = -side; continue; }
    const o = side * (rd.cw / 2 + 0.45);
    lamps.push([+(bx + nx * o).toFixed(2), +(bz + nz * o).toFixed(2), +Math.atan2(-nx * side, -nz * side).toFixed(2)]);
    side = -side;
  }
}

writeFileSync(new URL('public/data/streets.json', root), JSON.stringify({
  source: 'Assi: © OpenStreetMap contributors (ODbL); larghezze misurate su DBTR 2013 SITR (CC BY 4.0)',
  roads, junctions, crossings, benches, paths, walls, lamps,
}));
const withSw = roads.filter((r) => r.sl.some((v) => v) || r.sr.some((v) => v)).length;
const cws = roads.map((r) => r.cw).sort((a, b) => a - b);
console.log(`strade ${roads.length} (con marciapiede ${withSw}), carreggiata mediana ${cws[cws.length >> 1]} m, incroci ${junctions.length}, strisce ${crossings.length}, panchine ${benches.length}, pedonali/sentieri ${paths.length}, muri ${walls.length}, lampioni ${lamps.length}`);
