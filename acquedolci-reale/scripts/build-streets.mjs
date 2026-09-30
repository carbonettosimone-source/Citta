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
 *   surf: { asphalt, walk, paving, plaza }: poligoni [[anello esterno, buchi...]] a tessere da 128 m
 *   plazas[]: { n, x, z, a, src } piazze riconosciute (anello OSM o vuoto urbano)
 *
 * Le piazze non sono il buffer di highway=pedestrian (in paese quasi non c'è): sono gli anelli
 * chiusi place=square, le aree pedonali/mercato, i poligoni nominati Piazza/Largo, e — dove OSM
 * non disegna l'area — i vuoti aperti fra gli edifici che la copertura del suolo non segna come
 * verde, spiaggia o mare.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { toUtm33 } from './geo.mjs';
import { decodePNG } from './lib/png.mjs';
import { createRequire } from 'node:module';
const ClipperLib = createRequire(import.meta.url)('clipper-lib');

const root = new URL('..', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root)));
const city = read('city.json');
const [OX, OY] = toUtm33(city.originLonLat.lon, city.originLonLat.lat).map((v) => Math.round(v));
const loc = (x, y) => [x - OX, -(y - OY)];
const locLL = (lon, lat) => loc(...toUtm33(lon, lat));

// ---- ostacoli: segmenti in coordinate locali, indice a griglia
const segs = [];
const addPath = (pts, closed) => { for (let i = 0; i < pts.length - 1 + (closed ? 1 : 0); i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; if (Math.hypot(b[0] - a[0], b[1] - a[1]) > 0.05) segs.push([a[0], a[1], b[0], b[1]]); } };
const buildingRings = [];
for (const b of read('data/buildings.json').buildings) {
  if (b.code === 'B007') continue; // tettoia: aperta, non chiude la strada
  const ring = b.rings[0].map(([x, y]) => loc(x, y));
  addPath(ring, false);
  buildingRings.push(ring);
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

// ---- terreno naturale (lo stesso MDT del gioco: build-model.mjs lo scrive in public/data/dtm.json)
const dtmMeta = read('data/dtm.json');
const dtmBuf = readFileSync(new URL(existsSync(new URL('data/dtm-sea.bin', root)) ? 'data/dtm-sea.bin' : 'data/dtm.bin', root));
const dtm = new Float32Array(dtmBuf.buffer, dtmBuf.byteOffset, dtmBuf.byteLength / 4);
function natural(X, Z) {
  const x = X + OX, y = OY - Z, W = dtmMeta.width, H = dtmMeta.height;
  const c = (x - dtmMeta.xmin) / dtmMeta.step, r = (dtmMeta.ymax - y) / dtmMeta.step;
  const c0 = Math.max(0, Math.min(W - 2, Math.floor(c))), r0 = Math.max(0, Math.min(H - 2, Math.floor(r)));
  const fx = Math.min(1, Math.max(0, c - c0)), fy = Math.min(1, Math.max(0, r - r0)), i = r0 * W + c0;
  return dtm[i] * (1 - fx) * (1 - fy) + dtm[i + 1] * fx * (1 - fy) + dtm[i + W] * (1 - fx) * fy + dtm[i + W + 1] * fx * fy;
}

/** Douglas-Peucker: toglie lo zig-zag del tracciato OSM, tiene estremi e nodi d'incrocio */
function simplify(pts, keep, tol) {
  if (pts.length < 3) return pts;
  const out = [pts[0]];
  let start = 0;
  const dp = (a, b) => {
    const [ax, az] = pts[a], [bx, bz] = pts[b], L = Math.hypot(bx - ax, bz - az) || 1e-9;
    let best = -1, bi = -1;
    for (let i = a + 1; i < b; i++) { const d = Math.abs((bx - ax) * (az - pts[i][1]) - (ax - pts[i][0]) * (bz - az)) / L; if (d > best) { best = d; bi = i; } }
    if (best > tol) { dp(a, bi); out.push(pts[bi]); dp(bi, b); }
  };
  for (let i = 1; i < pts.length; i++) {
    if (i < pts.length - 1 && !keep(pts[i])) continue;
    dp(start, i); out.push(pts[i]); start = i;
  }
  return out;
}

const roadFeatures = [];
for (const f of osm.features) {
  const p = f.properties;
  if (p.kind !== 'highway' || f.geometry.type !== 'LineString' || p.tunnel || p.bridge) continue;
  const pts = f.geometry.coordinates.map(([lon, lat]) => locLL(lon, lat));
  if (PATHS[p.highway]) { paths.push({ k: p.highway, p: pts.flat().map((v) => +v.toFixed(2)), w: PATHS[p.highway] }); continue; }
  if (!TYPE[p.highway]) continue; // autostrada (viadotti/gallerie) esclusa: la mostra l'ortofoto
  for (const q of pts) nodeUse.set(key(q), (nodeUse.get(key(q)) || 0) + 1);
  roadFeatures.push({ p, pts });
}

for (const { p, pts: raw } of roadFeatures) {
  const T = TYPE[p.highway];
  // asse OSM ripulito: i nodi d'incrocio restano dove sono, così le vie si toccano senza triangoli
  const pts = simplify(raw, (q) => (nodeUse.get(key(q)) || 0) >= 2, 0.45);
  // ricampionamento ogni 2,5 m su tratti dritti: i raggi e il profilo di quota lavorano su questi punti
  const rs = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i]; const L = Math.hypot(bx - ax, bz - az); const n = Math.max(1, Math.ceil(L / 2.5));
    for (let k = 1; k < n; k++) rs.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
    rs.push(pts[i]); // il vertice OSM esatto: la chiave del nodo d'incrocio resta la stessa
  }
  const jn = [];
  rs.forEach((q, i) => { const k = key(q); if ((nodeUse.get(k) || 0) >= 2) jn.push([i, k]); });
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
  // Niente ricentratura punto per punto: spostava l'asse di qualche metro a ogni porta e la via
  // veniva a onde, con gli incroci staccati. L'asse resta quello OSM (dritto), la larghezza è costante.
  const out = [], sl = [], sr = [];
  const half = cw / 2;
  const room = (d) => (d == null ? 0 : Math.max(0, Math.min(3, d - half - 0.05)));
  for (let i = 0; i < rs.length; i++) {
    const l = Ls[i], r = Rs[i];
    const lw = room(l), rw = room(r);
    out.push(+rs[i][0].toFixed(2), +rs[i][1].toFixed(2));
    sl.push(lw >= 0.7 ? +lw.toFixed(2) : 0); sr.push(rw >= 0.7 ? +rw.toFixed(2) : 0);
  }
  // marciapiede costante sul tratto (mediana delle misure): i poligoni poi lo tagliano sulle facciate
  const sws = [...sl, ...sr];
  const swOn = sws.filter((v) => v > 0);
  const sw = swOn.length >= sws.length * 0.4 ? median(swOn) : 0;
  roads.push({ k: p.highway, p: out, cw: +cw.toFixed(2), sl, sr, sw: +(sw || 0).toFixed(2), mk: marks && cw >= 5.5 ? 1 : 0, name: p.name || null, jn });
}

// ---- quota di progetto: la sezione trasversale è sempre ORIZZONTALE. A ogni campione la quota è la
// più bassa del terreno fra i due bordi (vince il lato verso il mare, che qui è sempre il più basso):
// dal lato a monte il terreno si taglia e resta un muro di sostegno. Poi la livelletta si liscia lungo
// la via e agli incroci le vie si accordano sulla stessa quota.
for (const rd of roads) {
  const n = rd.p.length / 2, half = rd.cw / 2 + rd.sw, raw = [];
  for (let i = 0; i < n; i++) {
    const a = Math.max(0, i - 1), b = Math.min(n - 1, i + 1);
    let tx = rd.p[b * 2] - rd.p[a * 2], tz = rd.p[b * 2 + 1] - rd.p[a * 2 + 1]; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    let lo = Infinity;
    for (let k = -4; k <= 4; k++) { const o = half * k / 4; lo = Math.min(lo, natural(rd.p[i * 2] - tz * o, rd.p[i * 2 + 1] + tx * o)); }
    raw.push(lo);
  }
  // media mobile ±7,5 m: niente gobbe di un campione, la pendenza longitudinale resta quella vera
  rd.h = raw.map((_, i) => { let s = 0, c = 0; for (let k = Math.max(0, i - 3); k <= Math.min(n - 1, i + 3); k++) { s += raw[k]; c++; } return s / c; });
}
{
  // incroci: tutte le vie che passano per lo stesso nodo arrivano alla stessa quota (media), il salto
  // si distribuisce su ~15 m di via con una rampa lineare
  const at = new Map(); // nodo → [{rd, i}]
  for (const rd of roads) for (const [i, k] of rd.jn) { if (!at.has(k)) at.set(k, []); at.get(k).push({ rd, i }); }
  for (let it = 0; it < 6; it++) {
    for (const list of at.values()) {
      if (list.length < 2) continue;
      const target = list.reduce((s, q) => s + q.rd.h[q.i], 0) / list.length;
      for (const { rd, i } of list) {
        const d = target - rd.h[i]; if (Math.abs(d) < 1e-3) continue;
        const n = rd.h.length, span = Math.max(1, Math.min(6, Math.floor(n / 2)));
        for (let k = Math.max(0, i - span); k <= Math.min(n - 1, i + span); k++) rd.h[k] += d * (1 - Math.abs(k - i) / (span + 1));
        rd.h[i] = target;
      }
    }
  }
  for (const rd of roads) rd.h = rd.h.map((v) => +v.toFixed(2));
}

// ---- incroci: nodi condivisi da ≥2 vie → disco d'asfalto che chiude i giunti
const junctions = [];
for (const [k, n] of nodeUse) if (n >= 2) { const [x, z] = k.split(',').map(Number); junctions.push([x, z]); }
for (const j of junctions) {
  let r = 2.5;
  for (const rd of roads) for (let i = 0; i < rd.p.length; i += 2) if (Math.hypot(rd.p[i] - j[0], rd.p[i + 1] - j[1]) < 3) r = Math.max(r, rd.cw / 2 + 0.3);
  j.push(+r.toFixed(2));
}

// ---- superfici come poligoni (Clipper): la carreggiata è l'UNIONE delle strisce delle vie, quindi
// gli incroci si chiudono da soli senza dischi né spigoli; il marciapiede è la fascia fra carreggiata
// e facciate; piazze pedonali e vialetti in basolato. Tutto meno le piante degli edifici.
const SC = 100; // Clipper lavora in interi: centimetri
const toC = (pts) => pts.map(([x, z]) => ({ X: Math.round(x * SC), Y: Math.round(z * SC) }));
const pairs = (flat) => { const o = []; for (let i = 0; i < flat.length; i += 2) o.push([flat[i], flat[i + 1]]); return o; };
// estremi di via: quante vie finiscono in un nodo. Due estremi e nient'altro = la stessa via spezzata in OSM
const endUse = new Map();
for (const { pts } of roadFeatures) for (const q of [pts[0], pts.at(-1)]) endUse.set(key(q), (endUse.get(key(q)) || 0) + 1);
const isContinuation = (q) => endUse.get(key(q)) === 2 && nodeUse.get(key(q)) === 2;
/**
 * lines: [{pts, r}] → unione dei buffer. `butt`: estremi tagliati dritti (marciapiedi: un cappuccio
 * tondo sconfinava nell'incrocio e faceva i riccioli), con un disco solo dove la via continua in un
 * altro tratto OSM, così la curva resta chiusa.
 */
function buffer(lines, butt = false) {
  const all = [];
  for (const { pts, r } of lines) {
    if (r <= 0 || pts.length < 2) continue;
    const co = new ClipperLib.ClipperOffset(2, 0.25 * SC);
    co.AddPath(toC(pts), ClipperLib.JoinType.jtRound, butt ? ClipperLib.EndType.etOpenButt : ClipperLib.EndType.etOpenRound);
    const sol = new ClipperLib.Paths(); co.Execute(sol, r * SC);
    all.push(...sol);
    if (butt) for (const q of [pts[0], pts.at(-1)]) {
      if (!isContinuation(q)) continue;
      const disk = [];
      for (let k = 0; k < 24; k++) disk.push([q[0] + Math.cos(k * Math.PI / 12) * r, q[1] + Math.sin(k * Math.PI / 12) * r]);
      all.push(toC(disk));
    }
  }
  return op(all, [], ClipperLib.ClipType.ctUnion);
}
function op(subj, clip, type) {
  const c = new ClipperLib.Clipper();
  c.AddPaths(subj, ClipperLib.PolyType.ptSubject, true);
  if (clip.length) c.AddPaths(clip, ClipperLib.PolyType.ptClip, true);
  const sol = new ClipperLib.Paths();
  c.Execute(type, sol, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
  return sol;
}
const bldC = op(buildingRings.map(toC), [], ClipperLib.ClipType.ctUnion);
/** offset di poligoni chiusi (m), giunti tondi */
function grow(P, d) {
  if (!P.length || !d) return P;
  const co = new ClipperLib.ClipperOffset(2, 0.1 * SC);
  co.AddPaths(P, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
  const sol = new ClipperLib.Paths(); co.Execute(sol, d * SC);
  return op(sol, [], ClipperLib.ClipType.ctUnion);
}
/**
 * Superficie pulita: chiusura (riempie tacche e fessure fra due vie vicine), apertura (via le punte
 * sottili dei raccordi a V), e i buchi piccoli dentro la carreggiata — il triangolo che resta fra tre
 * assi OSM che quasi si toccano — si riempiono: la carreggiata larga resta una sola.
 */
const bldPts = buildingRings.map((r) => r[0]);
function tidy(P, close, open, maxHole) {
  let Q = grow(grow(P, close), -close);
  if (open) Q = grow(grow(Q, -open), open);
  return Q.filter((r) => {
    const a = ClipperLib.Clipper.Area(r) / (SC * SC);
    if (a >= 0 || -a >= maxHole) return true;
    // un buco con dentro un edificio è un isolato vero: resta
    return !bldPts.some(([x, z]) => ClipperLib.Clipper.PointInPolygon({ X: Math.round(x * SC), Y: Math.round(z * SC) }, r) === 1);
  });
}
const carLines = roads.filter((r) => r.k !== 'pedestrian').map((r) => ({ pts: pairs(r.p), r: r.cw / 2 }));
const asphaltRaw = tidy(buffer(carLines, true), 1.6, 0.5, 400);
let asphaltC = op(asphaltRaw, bldC, ClipperLib.ClipType.ctDifference);
const pavLines = [
  ...roads.filter((r) => r.k === 'pedestrian').map((r) => ({ pts: pairs(r.p), r: r.cw / 2 + r.sw })),
  ...paths.filter((q) => q.k !== 'track').map((q) => ({ pts: pairs(q.p), r: q.w / 2 })),
];
let pavingC = op(op(buffer(pavLines), asphaltC, ClipperLib.ClipType.ctDifference), bldC, ClipperLib.ClipType.ctDifference);
const walkLines = roads.filter((r) => r.k !== 'pedestrian' && r.sw > 0).map((r) => ({ pts: pairs(r.p), r: r.cw / 2 + r.sw }));
// il marciapiede è la fascia fra la carreggiata e il bordo esterno ripulito, meno le facciate
const outerC = tidy(op([...buffer(walkLines, true), ...asphaltRaw], [], ClipperLib.ClipType.ctUnion), 1.6, 0.4, 400);
let walkC = op(op(outerC, [...asphaltC, ...pavingC], ClipperLib.ClipType.ctDifference), bldC, ClipperLib.ClipType.ctDifference);
walkC = grow(grow(walkC, -0.2), 0.2); // niente schegge di marciapiede sotto i 40 cm
walkC = op(walkC, bldC, ClipperLib.ClipType.ctDifference);
// sede stradale (carreggiata + marciapiedi): qui il terreno si spiana alla quota di progetto
const corrC = op(op([...asphaltC, ...walkC], [], ClipperLib.ClipType.ctUnion), bldC, ClipperLib.ClipType.ctDifference);

// ---- piazze: anelli veri (non il nastro di un asse) + vuoti urbani non verdi
const PLAZA_NAME = /(^|[\s,.'’])(piazza|largo|piazzale)([\s,.'’]|$)/i;
function ringMetrics(pts) {
  let A = 0, cx = 0, cz = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) A += pts[j][0] * pts[i][1] - pts[i][0] * pts[j][1];
  for (const p of pts) { cx += p[0]; cz += p[1]; }
  return { area: Math.abs(A) / 2, x: cx / pts.length, z: cz / pts.length };
}
/** LineString o Polygon chiuso, in metri locali. Gli assi aperti (le vie che SI CHIAMANO piazza) no. */
function localRing(f) {
  const g = f.geometry;
  const coords = g?.type === 'Polygon' ? g.coordinates[0] : g?.type === 'LineString' ? g.coordinates : null;
  if (!coords || coords.length < 4) return null;
  const pts = coords.map(([lon, lat]) => locLL(lon, lat));
  const a = pts[0], b = pts[pts.length - 1];
  if (Math.hypot(a[0] - b[0], a[1] - b[1]) > 1.5) return null;
  if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 0.05) pts.pop();
  if (pts.length < 3) return null;
  const m = ringMetrics(pts);
  if (m.area < 80 || m.area > 25000) return null;
  return { pts, ...m };
}
function isPlazaFeature(p, f) {
  if (!p || !f?.geometry) return false;
  if (p.leisure === 'park' || p.leisure === 'garden' || p.natural === 'wood' || p.landuse === 'forest' || p.landuse === 'grass') return false;
  if (p.place === 'square' || p.amenity === 'marketplace' || p.landuse === 'pedestrian') return true;
  if (p.highway === 'pedestrian') return true; // solo se l'anello è chiuso: localRing scarta gli assi
  if (!p.highway && PLAZA_NAME.test(p.name || '')) return true;
  return false;
}
const plazaMeta = [];
let osmPlazaC = [];
for (const f of osm.features) {
  const p = f.properties;
  if (!isPlazaFeature(p, f)) continue;
  const ring = localRing(f);
  if (!ring) {
    console.log(`piazza senza area (asse aperto o troppo piccola): ${p.name || p.place || p.highway || p.id}`);
    continue;
  }
  const src = p.place === 'square' ? 'osm-square' : p.amenity === 'marketplace' ? 'osm-market' : p.highway === 'pedestrian' ? 'osm-pedestrian' : 'osm-nome';
  plazaMeta.push({ n: p.name || 'Piazza', x: +ring.x.toFixed(1), z: +ring.z.toFixed(1), a: Math.round(ring.area), src });
  const path = toC(ring.pts);
  // Clipper (nonzero) tratta l'anello orario come un buco e lo butta se non sta dentro un altro poligono.
  // Tre piazze su quattro nell'estratto sono orarie: senza questo giro restava solo Piazza Libertà.
  if (ClipperLib.Clipper.Area(path) < 0) path.reverse();
  osmPlazaC.push(path);
}
function offsetClosed(paths, delta) {
  if (!paths.length || !delta) return paths;
  const co = new ClipperLib.ClipperOffset(2, 0.25 * SC);
  for (const path of paths) co.AddPath(path, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
  const sol = new ClipperLib.Paths();
  co.Execute(sol, delta * SC);
  return sol;
}
// 1,2 m: l'anello OSM è spesso disegnato dentro il cordolo; si arriva alle facciate, l'asfalto lo ritaglia dopo
osmPlazaC = op(offsetClosed(osmPlazaC, 1.2), [], ClipperLib.ClipType.ctUnion);

/** Vuoti aperti fra gli edifici, non verdi / spiaggia / mare, non già strada o piazza OSM. */
function urbanGaps(roadPaths, plazaPaths) {
  const lcPath = new URL('data/landcover.png', root);
  if (!existsSync(lcPath) || !existsSync(new URL('data/landcover.json', root))) {
    console.log('vuoti urbani saltati: manca data/landcover.png (node scripts/build-landcover.mjs)');
    return [];
  }
  const lcMeta = read('data/landcover.json');
  const lc = decodePNG(readFileSync(lcPath));
  const STEP = lcMeta.step, W = lcMeta.width, H = lcMeta.height, N = W * H;
  const X0 = lcMeta.xmin, Y1 = lcMeta.ymax;
  const cellOf = (x, z) => [(x + OX - X0) / STEP, (Y1 - (OY - z)) / STEP];
  const corner = (cx, cy) => [X0 + cx * STEP - OX, OY - (Y1 - cy * STEP)];
  const mask = new Uint8Array(N); // 1 edificio, 2 strada, 3 piazza OSM
  const raster = (pts, value, onlyEmpty) => {
    const P = pts.map(([x, z]) => cellOf(x, z));
    let yMin = Infinity, yMax = -Infinity;
    for (const q of P) { yMin = Math.min(yMin, q[1]); yMax = Math.max(yMax, q[1]); }
    const y0 = Math.max(0, Math.floor(yMin)), y1 = Math.min(H - 1, Math.ceil(yMax));
    for (let y = y0; y <= y1; y++) {
      const xs = [];
      for (let i = 0; i < P.length; i++) {
        let x1 = P[i][0], y1p = P[i][1], x2 = P[(i + 1) % P.length][0], y2 = P[(i + 1) % P.length][1];
        if (y1p === y2) continue;
        if (y1p > y2) { const tx = x1, ty = y1p; x1 = x2; y1p = y2; x2 = tx; y2 = ty; }
        const yy = y + 0.5;
        if (yy < y1p || yy >= y2) continue;
        xs.push(x1 + (x2 - x1) * ((yy - y1p) / (y2 - y1p)));
      }
      xs.sort((a, b) => a - b);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        let a = Math.ceil(xs[k] - 1e-6), b = Math.floor(xs[k + 1] + 1e-6);
        if (a < 0) a = 0; if (b >= W) b = W - 1;
        for (let x = a; x <= b; x++) if (!onlyEmpty || mask[y * W + x] === 0) mask[y * W + x] = value;
      }
    }
  };
  for (const ring of buildingRings) raster(ring, 1, false);
  // Winding nonzero su tutti gli anelli insieme: un outer rasterizzato da solo riempirebbe i buchi
  // (il cortile dentro un anello di asfalto diventava strada e la piazza spariva).
  const rasterWinding = (paths, value) => {
    const active = [];
    const born = Array.from({ length: H }, () => []);
    let yMin = Infinity, yMax = -Infinity;
    for (const ring of paths) {
      if (!ring || ring.length < 3) continue;
      const P = ring.map((q) => cellOf(q.X / SC, q.Y / SC));
      for (let i = 0; i < P.length; i++) {
        let x1 = P[i][0], y1 = P[i][1], x2 = P[(i + 1) % P.length][0], y2 = P[(i + 1) % P.length][1];
        if (y1 === y2) continue;
        const dir = y2 > y1 ? 1 : -1;
        if (y1 > y2) { const tx = x1, ty = y1; x1 = x2; y1 = y2; x2 = tx; y2 = ty; }
        const e = { x1, y1, x2, y2, dir };
        const row = Math.max(0, Math.floor(y1));
        if (row < H) born[row].push(e);
        if (y1 < yMin) yMin = y1;
        if (y2 > yMax) yMax = y2;
      }
    }
    if (!Number.isFinite(yMin)) return;
    const y0 = Math.max(0, Math.floor(yMin)), y1i = Math.min(H - 1, Math.ceil(yMax));
    for (let y = y0; y <= y1i; y++) {
      if (born[y].length) active.push(...born[y]);
      const yy = y + 0.5;
      const hits = [];
      for (let i = active.length - 1; i >= 0; i--) {
        const e = active[i];
        if (yy >= e.y2) { active.splice(i, 1); continue; }
        if (yy < e.y1) continue;
        hits.push({ x: e.x1 + (e.x2 - e.x1) * ((yy - e.y1) / (e.y2 - e.y1)), dir: e.dir });
      }
      hits.sort((a, b) => a.x - b.x);
      let w = 0;
      for (let i = 0; i < hits.length - 1; i++) {
        w += hits[i].dir;
        if (w === 0) continue;
        let a = Math.ceil(hits[i].x - 1e-6), b = Math.floor(hits[i + 1].x + 1e-6);
        if (a < 0) a = 0; if (b >= W) b = W - 1;
        for (let x = a; x <= b; x++) if (mask[y * W + x] === 0) mask[y * W + x] = value;
      }
    }
  };
  rasterWinding(plazaPaths, 3);
  rasterWinding(roadPaths, 2);
  // La strada vera resta in mask (il basolato non ci sale). Il sigillo è più largo di 2 celle
  // (~4 m) e serve solo a non far colare un vuoto in tutto il paese: i metri mangiati si restituiscono dopo.
  const seal = new Uint8Array(N);
  for (let k = 0; k < N; k++) if (mask[k] === 2) seal[k] = 1;
  for (let step = 0; step < 2; step++) {
    const grow = [];
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (seal[y * W + x]) {
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const n = ny * W + nx;
        if (mask[n] === 0 && !seal[n]) grow.push(n);
      }
    }
    for (const n of grow) seal[n] = 1;
  }
  const greenAt = (k) => {
    const R = lc.data[k * 3], G = lc.data[k * 3 + 1], B = lc.data[k * 3 + 2];
    return R > 128 || G > 90 || B > 145; // R > 128: mare
  };
  // distanza dagli edifici (chamfer, metri)
  const dist = new Float32Array(N).fill(1e9);
  for (let k = 0; k < N; k++) if (mask[k] === 1) dist[k] = 0;
  const dg = STEP * Math.SQRT2;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const k = y * W + x; let v = dist[k];
    if (x > 0) v = Math.min(v, dist[k - 1] + STEP);
    if (y > 0) { v = Math.min(v, dist[k - W] + STEP); if (x > 0) v = Math.min(v, dist[k - W - 1] + dg); if (x < W - 1) v = Math.min(v, dist[k - W + 1] + dg); }
    dist[k] = v;
  }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
    const k = y * W + x; let v = dist[k];
    if (x < W - 1) v = Math.min(v, dist[k + 1] + STEP);
    if (y < H - 1) { v = Math.min(v, dist[k + W] + STEP); if (x < W - 1) v = Math.min(v, dist[k + W + 1] + dg); if (x > 0) v = Math.min(v, dist[k + W - 1] + dg); }
    dist[k] = v;
  }
  const cand = new Uint8Array(N);
  for (let k = 0; k < N; k++) {
    if (mask[k] !== 0 || seal[k] || dist[k] > 48) continue;
    if (greenAt(k)) continue; // mare, spiaggia, prato/parco
    cand[k] = 1;
  }
  for (const [px, pz, name] of [[-8.5, -31.2, 'fontana'], [-154.7, -28.3, 'gp2'], [236.7, -102.5, 'federico'], [-210, 110, 'liberta-aperta']]) {
    const [cx, cy] = cellOf(px, pz);
    const ix = Math.floor(cx), iy = Math.floor(cy);
    if (ix < 0 || iy < 0 || ix >= W || iy >= H) continue;
    const k = iy * W + ix;
    console.log(`  sonda ${name}: mask ${mask[k]} sigillo ${seal[k]} candidato ${cand[k]} dist ${dist[k] === 1e9 ? '∞' : dist[k].toFixed(1)} m`);
  }
  const comp = new Int32Array(N);
  const found = [];
  const stack = [];
  let cid = 0;
  const rej = { area: 0, aspect: 0, fill: 0, edge: 0, far: 0, rural: 0, thin: 0 };
  const [ffx, ffy] = cellOf(-8.5, -31.2);
  const FONTANA = { x: Math.floor(ffx), y: Math.floor(ffy) };
  for (let s = 0; s < N; s++) {
    if (!cand[s] || comp[s]) continue;
    cid++;
    let cells = 0, minx = W, maxx = 0, miny = H, maxy = 0, peri = 0, urb = 0, sx = 0, sz = 0, minDist = 1e9;
    stack.push(s); comp[s] = cid;
    while (stack.length) {
      const i = stack.pop(), x = i % W, y = (i - x) / W;
      cells++;
      if (dist[i] < minDist) minDist = dist[i];
      if (x < minx) minx = x; if (x > maxx) maxx = x; if (y < miny) miny = y; if (y > maxy) maxy = y;
      const utmX = X0 + (x + 0.5) * STEP, utmY = Y1 - (y + 0.5) * STEP;
      sx += utmX - OX; sz += OY - utmY;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) { peri++; continue; }
        const n = ny * W + nx;
        if (cand[n]) { if (!comp[n]) { comp[n] = cid; stack.push(n); } }
        else {
          peri++;
          // Il sigillo è asfalto dilatato: conta come bordo urbano. Se no, la piazza chiusa
          // dalla strada (il sagrato della fontana non tocca le facciate) sembra aperta e si scarta.
          if (mask[n] === 1 || mask[n] === 2 || mask[n] === 3 || seal[n]) urb++;
        }
      }
    }
    const bw = maxx - minx + 1, bh = maxy - miny + 1;
    const aspect = Math.max(bw, bh) / Math.min(bw, bh);
    const fill = cells / (bw * bh);
    // Il centroide, per la densità di edificato: un fondo fra due case di campagna non è una piazza.
    const [gcxf, gcyf] = cellOf(sx / cells, sz / cells);
    const gcx = Math.floor(gcxf), gcy = Math.floor(gcyf);
    const RAD = 30; // 60 m
    let bldNear = 0, boxN = 0;
    for (let y = Math.max(0, gcy - RAD); y <= Math.min(H - 1, gcy + RAD); y++) {
      for (let x = Math.max(0, gcx - RAD); x <= Math.min(W - 1, gcx + RAD); x++) {
        boxN++;
        if (mask[y * W + x] === 1) bldNear++;
      }
    }
    const dens = boxN ? bldNear / boxN : 0;
    const hitFontana = FONTANA.x >= minx && FONTANA.x <= maxx && FONTANA.y >= miny && FONTANA.y <= maxy && comp[FONTANA.y * W + FONTANA.x] === cid;
    if (hitFontana) console.log(`  fontana: ${cells} celle (${Math.round(cells * STEP * STEP)} m²), urb ${(peri ? urb / peri : 0).toFixed(2)}, fill ${fill.toFixed(2)}, aspetto ${aspect.toFixed(2)}, dist ${minDist.toFixed(1)} m, edificato ${(dens * 100).toFixed(0)}%`);
    if (cells < 40 || cells > 1400) { rej.area++; continue; } // 160–5600 m²
    if (aspect > 3.2) { rej.aspect++; continue; }
    if (fill < 0.28) { rej.fill++; continue; }
    if (peri < 1 || urb / peri < 0.55) { rej.edge++; continue; }
    if (minDist > 32) { rej.far++; continue; }
    if (dens < 0.17) { rej.rural++; continue; }
    let tot = 0, stay = 0;
    for (let y = miny; y <= maxy; y++) for (let x = minx; x <= maxx; x++) {
      if (comp[y * W + x] !== cid) continue;
      tot++;
      let ok = true;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H || comp[ny * W + nx] !== cid) { ok = false; break; }
      }
      if (ok) stay++;
    }
    if (!tot || stay / tot < 0.22) { rej.thin++; continue; }
    found.push({ id: cid, cells, minx, maxx, miny, maxy, x: sx / cells, z: sz / cells, a: cells * STEP * STEP });
  }
  found.sort((a, b) => b.a - a.a);
  const kept = found.slice(0, 250);
  console.log(`vuoti urbani: ${found.length} candidati, ne tengo ${kept.length} (scarti area ${rej.area}, forma ${rej.aspect}, pieno ${rej.fill}, bordo ${rej.edge}, lontani ${rej.far}, rurali ${rej.rural}, sottile ${rej.thin})`);
  // restituisce i ~4 m di sigillo: solo suolo nudo, mai asfalto, edificio o verde
  const keepId = new Set(kept.map((c) => c.id));
  for (let step = 0; step < 2; step++) {
    const grow = [];
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const id = comp[y * W + x];
      if (!keepId.has(id)) continue;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const n = ny * W + nx;
        if (comp[n] || mask[n] === 1 || mask[n] === 2 || greenAt(n)) continue;
        grow.push([n, id]);
      }
    }
    for (const [n, id] of grow) if (!comp[n]) comp[n] = id;
  }
  for (const c of kept) {
    let cells = 0, minx = W, maxx = 0, miny = H, maxy = 0, sx = 0, sz = 0;
    const y0 = Math.max(0, c.miny - 2), y1 = Math.min(H - 1, c.maxy + 2);
    const x0 = Math.max(0, c.minx - 2), x1 = Math.min(W - 1, c.maxx + 2);
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (comp[y * W + x] === c.id) {
      cells++;
      if (x < minx) minx = x; if (x > maxx) maxx = x; if (y < miny) miny = y; if (y > maxy) maxy = y;
      const utmX = X0 + (x + 0.5) * STEP, utmY = Y1 - (y + 0.5) * STEP;
      sx += utmX - OX; sz += OY - utmY;
    }
    if (!cells) continue;
    c.minx = minx; c.maxx = maxx; c.miny = miny; c.maxy = maxy;
    c.x = sx / cells; c.z = sz / cells; c.a = cells * STEP * STEP;
  }
  for (const c of kept) console.log(`  vuoto ${Math.round(c.a)} m² @ ${c.x.toFixed(1)},${c.z.toFixed(1)}`);
  const paths = [];
  for (const c of kept) {
    const rects = [];
    for (let y = c.miny; y <= c.maxy; y++) {
      let x = c.minx;
      while (x <= c.maxx) {
        if (comp[y * W + x] !== c.id) { x++; continue; }
        let x1 = x;
        while (x1 <= c.maxx && comp[y * W + x1] === c.id) x1++;
        const nw = corner(x, y), ne = corner(x1, y), se = corner(x1, y + 1), sw = corner(x, y + 1);
        rects.push(toC([nw, ne, se, sw]));
        x = x1;
      }
    }
    let u = op(rects, [], ClipperLib.ClipType.ctUnion);
    // buchi di un albero (pochi m²): il basolato ci passa sotto, la chioma 3D lo copre. I giardini grandi restano buco.
    u = u.filter((r) => { const a = ClipperLib.Clipper.Area(r) / (SC * SC); return a > 0 || -a >= 36; });
    paths.push(...u);
    plazaMeta.push({ n: 'Spazio aperto', x: +c.x.toFixed(1), z: +c.z.toFixed(1), a: Math.round(c.a), src: 'vuoto' });
  }
  return paths;
}
const gapC = urbanGaps([...asphaltC, ...walkC], osmPlazaC);
// Ritaglio prima di unire: un vuoto col winding opposto, fuso insieme all'anello OSM, cancellava la piazza.
function clipOpen(paths) {
  let p = op(paths, bldC, ClipperLib.ClipType.ctDifference);
  p = op(p, asphaltC, ClipperLib.ClipType.ctDifference);
  p = op(p, walkC, ClipperLib.ClipType.ctDifference);
  return p;
}
const osmFinal = clipOpen(osmPlazaC);
let gapFinal = clipOpen(gapC);
gapFinal = op(gapFinal, osmFinal, ClipperLib.ClipType.ctDifference);
let plazaC = op([...osmFinal, ...gapFinal], [], ClipperLib.ClipType.ctUnion);
// via briciole e schegge sotto i 2 m² (fessure fra edifici, punte dei raccordi)
const clean = (P) => ClipperLib.Clipper.CleanPolygons(P, 0.05 * SC).filter((r) => Math.abs(ClipperLib.Clipper.Area(r)) > 2 * SC * SC || ClipperLib.Clipper.Area(r) < 0);
asphaltC = clean(asphaltC); pavingC = clean(op(pavingC, plazaC, ClipperLib.ClipType.ctDifference)); walkC = clean(walkC); plazaC = clean(plazaC);
/** taglia in tessere da T m e restituisce [[esterno, buchi...]] in coordinate locali */
const T = 128;
function tiles(P) {
  let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
  for (const r of P) for (const q of r) { x0 = Math.min(x0, q.X); x1 = Math.max(x1, q.X); z0 = Math.min(z0, q.Y); z1 = Math.max(z1, q.Y); }
  const out = [];
  for (let tx = Math.floor(x0 / SC / T); tx <= Math.floor(x1 / SC / T); tx++) for (let tz = Math.floor(z0 / SC / T); tz <= Math.floor(z1 / SC / T); tz++) {
    const sq = [[{ X: tx * T * SC, Y: tz * T * SC }, { X: (tx + 1) * T * SC, Y: tz * T * SC }, { X: (tx + 1) * T * SC, Y: (tz + 1) * T * SC }, { X: tx * T * SC, Y: (tz + 1) * T * SC }]];
    const c = new ClipperLib.Clipper();
    c.AddPaths(P, ClipperLib.PolyType.ptSubject, true); c.AddPaths(sq, ClipperLib.PolyType.ptClip, true);
    const tree = new ClipperLib.PolyTree();
    c.Execute(ClipperLib.ClipType.ctIntersection, tree, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
    for (const ex of ClipperLib.JS.PolyTreeToExPolygons(tree)) {
      const ring = (r) => r.flatMap((q) => [+(q.X / SC).toFixed(2), +(q.Y / SC).toFixed(2)]);
      if (ex.outer.length >= 3) out.push([ring(ex.outer), ...ex.holes.filter((h) => h.length >= 3).map(ring)]);
    }
  }
  return out;
}
const surf = { tile: T, asphalt: tiles(asphaltC), walk: tiles(walkC), paving: tiles(pavingC), plaza: tiles(plazaC) };
const area = (P) => P.reduce((a, r) => a + ClipperLib.Clipper.Area(r), 0) / SC / SC;
const nOsm = plazaMeta.filter((p) => p.src !== 'vuoto').length, nGap = plazaMeta.length - nOsm;
console.log(`superfici: asfalto ${area(asphaltC).toFixed(0)} m², marciapiedi ${area(walkC).toFixed(0)} m², basolato ${area(pavingC).toFixed(0)} m², piazze ${area(plazaC).toFixed(0)} m² · pezzi ${surf.asphalt.length}/${surf.walk.length}/${surf.paving.length}/${surf.plaza.length}`);
console.log(`piazze: ${nOsm} da OSM (${area(osmFinal).toFixed(0)} m² dopo il ritaglio), ${nGap} vuoti urbani (${area(gapFinal).toFixed(0)} m²)`);
for (const p of plazaMeta.filter((q) => q.src !== 'vuoto')) console.log(`  ${p.n} · ${p.a} m² · ${p.src} @ ${p.x},${p.z}`);

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

mkdirSync(new URL('public/data', root), { recursive: true });
writeFileSync(new URL('public/data/streets.json', root), JSON.stringify({
  source: 'Assi e piazze: © OpenStreetMap contributors (ODbL); larghezze su DBTR 2013 SITR (CC BY 4.0); vuoti urbani dalla copertura del suolo 2022 (non verde, non spiaggia)',
  roads: roads.map(({ sl, sr, jn, ...r }) => r), junctions,
  corr: ClipperLib.Clipper.CleanPolygons(corrC, 0.03 * SC).filter((r) => r.length >= 3 && Math.abs(ClipperLib.Clipper.Area(r)) > 0.5 * SC * SC).map((r) => r.flatMap((q) => [+(q.X / SC).toFixed(2), +(q.Y / SC).toFixed(2)])), crossings, benches, paths, walls, lamps, surf,
  plazas: plazaMeta,
}));
const withSw = roads.filter((r) => r.sl.some((v) => v) || r.sr.some((v) => v)).length;
const cws = roads.map((r) => r.cw).sort((a, b) => a - b);
console.log(`strade ${roads.length} (con marciapiede ${withSw}), carreggiata mediana ${cws[cws.length >> 1]} m, incroci ${junctions.length}, strisce ${crossings.length}, panchine ${benches.length}, pedonali/sentieri ${paths.length}, muri ${walls.length}, lampioni ${lamps.length}`);
