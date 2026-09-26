/**
 * LEVEL COMPILER — da OSM "crudo" a una partizione del suolo senza sovrapposizioni.
 *
 * Trucchi da level designer, tutti su poligoni (Clipper, interi al decimetro):
 *  - le strade sono AREE: capsule lungo gli assi, unite; la larghezza è misurata sul corridoio
 *    tra le facciate (nei paesi veri la strada è lo spazio fra i palazzi);
 *  - chiusura morfologica (dilata r → erodi r) = raccordi del cordolo agli incroci, gratis;
 *  - corridoio stretto → vicolo lastricato senza marciapiede; campagna → niente marciapiede;
 *  - marciapiede = anello attorno alla carreggiata; aree pedonali e sentieri a quota marciapiede;
 *  - isolato = ciò che resta, pulito con apertura morfologica (via le schegge < 1 m);
 *  - isolati urbani su un PIANO di progetto (pendenza limitata → muri di contenimento),
 *    grandi aree agricole lasciate al terreno naturale;
 *  - mare dalla maschera DEM, spiaggia = fascia verso il mare priva di edifici;
 *  - edifici ritagliati sull'isolato: mai più dentro strade o marciapiedi.
 * Solo Node (usa clipper-lib). Il motore legge il risultato: src/engine/level/buildLevel.js
 */
import ClipperLib from 'clipper-lib';
import { SegmentGrid, PolygonGrid } from '../spatial/grid.js';
import { buildHeightField, fitPlane } from './heightField.js';

const C = ClipperLib;
const S = 10; // unità Clipper = decimetro
export const LEVEL_VERSION = 1;

export const CAR = new Set(['motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'unclassified', 'residential',
  'living_street', 'service', 'motorway_link', 'trunk_link', 'primary_link', 'secondary_link', 'tertiary_link', 'road', 'track']);
const FOOT = new Set(['footway', 'path', 'pedestrian', 'cycleway']);
const STEP_RISER = 0.17; // altezza tipica di un gradino: quantizza la salita in gradoni piani veri
const WITH_SIDEWALK = new Set(['primary', 'secondary', 'tertiary', 'unclassified', 'residential', 'living_street',
  'primary_link', 'secondary_link', 'tertiary_link']);

// M4 — terrazzamenti: un isolato con più di TERRACE_RELIEF m di dislivello reale non riceve
// più un unico piano inclinato ma si taglia in gradoni piani (altezza ~TERRACE_STEP l'uno),
// separati da un muro di contenimento: lo stesso algoritmo dei bordi (buildLevel.js) alza da
// solo la parete dove due gradoni confinano con quote diverse.
const TERRACE_RELIEF = 1.1;
const TERRACE_STEP = 1.0;
const TERRACE_MIN_AREA = 35;

function classHalfWidth(p) {
  if (p.width && +p.width > 2) return Math.min(12, +p.width) / 2;
  const lanes = p.lanes ? +p.lanes : null;
  const byClass = { motorway: 11, trunk: 9, primary: 8, secondary: 7, tertiary: 6.4, unclassified: 5.4, residential: 5.4,
    living_street: 4.6, service: 3.6, road: 5, track: 3 }[p.highway] ?? 5;
  return (lanes && lanes >= 2 ? Math.max(byClass, lanes * 3.1) : byClass) / 2;
}

// ---------------------------------------------------------------- utilità Clipper
const toPath = (pts) => pts.map((p) => ({ X: Math.round(p.x * S), Y: Math.round(p.z * S) }));
function offset(paths, d, join = C.JoinType.jtRound, end = C.EndType.etClosedPolygon) {
  const co = new C.ClipperOffset(2.5, 0.15 * S);
  co.AddPaths(paths, join, end);
  const out = new C.Paths();
  co.Execute(out, d * S);
  return out;
}
function bool(a, b, op) {
  const c = new C.Clipper();
  c.AddPaths(a, C.PolyType.ptSubject, true);
  if (b && b.length) c.AddPaths(b, C.PolyType.ptClip, true);
  const out = new C.Paths();
  c.Execute(op, out, C.PolyFillType.pftNonZero, C.PolyFillType.pftNonZero);
  return out;
}
const union = (a, b) => bool(a, b, C.ClipType.ctUnion);
const diff = (a, b) => bool(a, b, C.ClipType.ctDifference);
const inter = (a, b) => bool(a, b, C.ClipType.ctIntersection);
const closing = (p, r) => offset(offset(p, r), -r);
const opening = (p, r) => offset(offset(p, -r), r);
const area = (ps) => Math.abs(ps.reduce((s, p) => s + C.Clipper.Area(p), 0)) / (S * S);

function exPolys(paths) {
  const c = new C.Clipper();
  c.AddPaths(paths, C.PolyType.ptSubject, true);
  const tree = new C.PolyTree();
  c.Execute(C.ClipType.ctUnion, tree, C.PolyFillType.pftNonZero, C.PolyFillType.pftNonZero);
  return C.JS.PolyTreeToExPolygons(tree);
}
function capsule(a, b, hw) {
  const co = new C.ClipperOffset(2, 0.15 * S);
  co.AddPath([{ X: Math.round(a.x * S), Y: Math.round(a.z * S) }, { X: Math.round(b.x * S), Y: Math.round(b.z * S) }], C.JoinType.jtRound, C.EndType.etOpenRound);
  const out = new C.Paths();
  co.Execute(out, hw * S);
  return out;
}
/** ExPolygon Clipper → formato file: anelli piatti [x,z,x,z,…] in decimetri. */
function encodeEx(ex, minArea = 0) {
  const ring = (r) => r.flatMap((p) => [p.X, p.Y]);
  const out = [];
  for (const e of ex) {
    if (minArea && Math.abs(C.Clipper.Area(e.outer)) / (S * S) < minArea) continue;
    out.push({ o: ring(e.outer), h: (e.holes || []).map(ring) });
  }
  return out;
}
function pointInPath(x, z, path) {
  return C.Clipper.PointInPolygon({ X: Math.round(x * S), Y: Math.round(z * S) }, path) !== 0;
}
function pointInEx(x, z, ex) {
  if (!pointInPath(x, z, ex.outer)) return false;
  for (const h of ex.holes || []) if (pointInPath(x, z, h)) return false;
  return true;
}
function bboxOfPath(p) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const q of p) {
    if (q.X < minX) minX = q.X;
    if (q.X > maxX) maxX = q.X;
    if (q.Y < minZ) minZ = q.Y;
    if (q.Y > maxZ) maxZ = q.Y;
  }
  return { minX: minX / S, maxX: maxX / S, minZ: minZ / S, maxZ: maxZ / S };
}

/** Ricampiona una polilinea a passo ≤ step. */
function resample(pts, step) {
  const out = [pts[0]];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / step));
    for (let k = 1; k <= n; k++) out.push({ x: a.x + ((b.x - a.x) * k) / n, z: a.z + ((b.z - a.z) * k) / n });
  }
  return out;
}
const median = (arr) => arr.slice().sort((a, b) => a - b)[arr.length >> 1];

/**
 * Rettangoli perpendicolari a (ux,uz) che affettano il piano in n fasce fra tmin e tmax
 * (coordinata t = x·ux + z·uz, k = -x·uz + z·ux). Ogni fascia è un parallelogramma centrato
 * su kc (il blocco può stare ovunque nel mondo: k NON è centrato sull'origine) e largo 2W
 * nell'altra direzione, pensato per essere intersecato col poligono vero dell'isolato.
 */
function terraceBands(ux, uz, tmin, tmax, n, kc, W) {
  const px = -uz, pz = ux;
  const kA = kc - W, kB = kc + W;
  const rects = [];
  for (let i = 0; i < n; i++) {
    const tA = tmin + ((tmax - tmin) * i) / n, tB = tmin + ((tmax - tmin) * (i + 1)) / n;
    rects.push(toPath([
      { x: tA * ux + kA * px, z: tA * uz + kA * pz },
      { x: tB * ux + kA * px, z: tB * uz + kA * pz },
      { x: tB * ux + kB * px, z: tB * uz + kB * pz },
      { x: tA * ux + kB * px, z: tA * uz + kB * pz },
    ]));
  }
  return rects;
}

// ---------------------------------------------------------------- edifici: pulizia e squadratura
const miter = C.JoinType.jtMiter;

/**
 * Squadra una pianta: trova l'orientamento dominante (media di 4θ pesata sulle lunghezze),
 * allinea agli assi i lati entro 12° e ricostruisce i vertici come intersezioni.
 * Se il risultato cambia l'area di oltre il 10% o non è semplice, tiene l'originale.
 */
function regularize(ptsIn) {
  let pts = ptsIn.slice();
  if (pts.length > 1 && Math.hypot(pts[0].x - pts.at(-1).x, pts[0].z - pts.at(-1).z) < 1e-6) pts.pop();
  const n = pts.length;
  if (n < 4) return ptsIn;
  let sx = 0, sy = 0;
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const L = Math.hypot(b.x - a.x, b.z - a.z);
    const th = Math.atan2(b.z - a.z, b.x - a.x);
    sx += L * Math.cos(4 * th); sy += L * Math.sin(4 * th);
  }
  const dom = Math.atan2(sy, sx) / 4;
  const c = Math.cos(-dom), s = Math.sin(-dom);
  const r = pts.map((p) => ({ x: p.x * c - p.z * s, z: p.x * s + p.z * c }));
  const TOL = (12 * Math.PI) / 180;
  const lines = [];
  for (let i = 0; i < n; i++) {
    const a = r[i], b = r[(i + 1) % n];
    const th = Math.atan2(b.z - a.z, b.x - a.x);
    const m = ((th % (Math.PI / 2)) + Math.PI / 2) % (Math.PI / 2); // 0..90°
    if (m < TOL || m > Math.PI / 2 - TOL) {
      const horiz = Math.abs(Math.cos(th)) > Math.abs(Math.sin(th));
      lines.push(horiz ? { t: 'h', v: (a.z + b.z) / 2 } : { t: 'v', v: (a.x + b.x) / 2 });
    } else lines.push({ t: 'f', a, b });
  }
  const out = [];
  const lineX = (L, z) => L.a.x + ((L.b.x - L.a.x) * (z - L.a.z)) / (L.b.z - L.a.z || 1e-9);
  const lineZ = (L, x) => L.a.z + ((L.b.z - L.a.z) * (x - L.a.x)) / (L.b.x - L.a.x || 1e-9);
  for (let i = 0; i < n; i++) {
    const P = lines[(i - 1 + n) % n], Q = lines[i], o = r[i];
    if (P.t === 'h' && Q.t === 'v') out.push({ x: Q.v, z: P.v });
    else if (P.t === 'v' && Q.t === 'h') out.push({ x: P.v, z: Q.v });
    else if (P.t === 'h' && Q.t === 'h') { out.push({ x: o.x, z: P.v }); out.push({ x: o.x, z: Q.v }); }
    else if (P.t === 'v' && Q.t === 'v') { out.push({ x: P.v, z: o.z }); out.push({ x: Q.v, z: o.z }); }
    else if (P.t === 'f' && Q.t === 'h' && Math.abs(P.b.z - P.a.z) > 1e-3) out.push({ x: lineX(P, Q.v), z: Q.v });
    else if (P.t === 'h' && Q.t === 'f' && Math.abs(Q.b.z - Q.a.z) > 1e-3) out.push({ x: lineX(Q, P.v), z: P.v });
    else if (P.t === 'f' && Q.t === 'v' && Math.abs(P.b.x - P.a.x) > 1e-3) out.push({ x: Q.v, z: lineZ(P, Q.v) });
    else if (P.t === 'v' && Q.t === 'f' && Math.abs(Q.b.x - Q.a.x) > 1e-3) out.push({ x: P.v, z: lineZ(Q, P.v) });
    else out.push({ x: o.x, z: o.z });
  }
  const back = out.map((p) => ({ x: p.x * c + p.z * s, z: -p.x * s + p.z * c }));
  const a0 = Math.abs(C.Clipper.Area(toPath(pts))), a1 = Math.abs(C.Clipper.Area(toPath(back)));
  if (!a0 || a1 / a0 < 0.9 || a1 / a0 > 1.1) return ptsIn;
  const simple = C.Clipper.SimplifyPolygon(toPath(back), C.PolyFillType.pftNonZero);
  if (simple.length !== 1) return ptsIn;
  return simple[0].map((q) => ({ x: q.X / S, z: q.Y / S }));
}

/** Rientranze e sporgenze < 0,8 m via apertura+chiusura con giunti a spigolo (angoli retti preservati). */
function cleanNotches(path) {
  const o = offset(offset([path], -0.4, miter), 0.4, miter);
  const c = offset(offset(o, 0.4, miter), -0.4, miter);
  if (!c.length) return path;
  c.sort((p, q) => Math.abs(C.Clipper.Area(q)) - Math.abs(C.Clipper.Area(p)));
  const a0 = Math.abs(C.Clipper.Area(path)), a1 = Math.abs(C.Clipper.Area(c[0]));
  return a1 / a0 > 0.85 && a1 / a0 < 1.15 ? c[0] : path;
}

/**
 * Tetto a falde su qualsiasi pianta (straight skeleton CGAL, iniettato dallo script):
 * vertici [x, z, t] con t = distanza dal bordo; la quota la decide il motore (t·tan pendenza).
 * Gronda: lo scheletro è calcolato sulla pianta allargata di 35 cm.
 */
function skeletonRoof(path, skeleton) {
  if (!skeleton) return null;
  const grown = offset([path], 0.35, miter);
  if (grown.length !== 1) return null;
  let ring = grown[0].map((q) => [q.X / S, q.Y / S]);
  let area2 = 0;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    area2 += a[0] * b[1] - b[0] * a[1];
  }
  if (area2 < 0) ring.reverse(); // CGAL: anello esterno antiorario
  ring.push(ring[0]);
  let res = null;
  try { res = skeleton.buildFromPolygon([ring]); } catch { res = null; }
  if (!res || !res.polygons.length) return null;
  let tmax = 0;
  for (const v of res.vertices) tmax = Math.max(tmax, v[2]);
  return {
    v: res.vertices.flatMap((v) => [Math.round(v[0] * 100), Math.round(v[1] * 100), Math.round(v[2] * 100)]),
    f: res.polygons,
    tmax: +tmax.toFixed(2),
  };
}

// ---------------------------------------------------------------- compilatore
/**
 * @param {object} o
 * @param {Array} o.features GeoJSON del motore
 * @param {(lon:number,lat:number)=>{x:number,z:number}} o.project
 * @param {(x:number,z:number)=>number} o.demY quota locale grezza
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}} o.rect area del livello (locale)
 * @param {((x:number,z:number)=>boolean)|null} o.isSea maschera mare
 */
export function compileLevel({ features, project, demY, rect, isSea = null, skeleton = null, opt = {} }) {
  const SW = opt.sidewalk ?? 1.5;
  const CURB = opt.curb ?? 0.15;
  const MIN_LANE = opt.minLane ?? 2.6;
  const t0 = Date.now();
  const log = [];
  const localRing = (coords) => coords.map(([lon, lat]) => project(lon, lat));

  // ---- edifici grezzi + indice dei lati (per misurare i corridoi)
  const rawBld = [];
  const bSegs = [];
  for (const f of features) {
    const p = f.properties;
    if (p.kind !== 'building' || f.geometry.type !== 'Polygon') continue;
    const r = localRing(f.geometry.coordinates[0]);
    if (r.length < 4) continue;
    rawBld.push({ id: p.id, pts: r });
    for (let i = 0; i < r.length - 1; i++) bSegs.push({ ax: r[i].x, az: r[i].z, bx: r[i + 1].x, bz: r[i + 1].z });
  }
  const bGrid = new SegmentGrid(bSegs, 20);
  const wallDist = (x, z, max) => {
    const h = bGrid.nearest(x, z, (id) => {
      const s = bSegs[id];
      const abx = s.bx - s.ax, abz = s.bz - s.az;
      const L = abx * abx + abz * abz;
      let t = L > 1e-9 ? ((x - s.ax) * abx + (z - s.az) * abz) / L : 0;
      t = Math.max(0, Math.min(1, t));
      return Math.hypot(x - s.ax - abx * t, z - s.az - abz * t);
    }, max);
    return h ? h.dist : Infinity;
  };
  /** Distanza della prima facciata lungo una direzione (marcia a passi di 0,25 m). */
  const probe = (x, z, nx, nz, max = 14) => {
    for (let s = 0.25; s <= max; s += 0.25) if (wallDist(x + nx * s, z + nz * s, 0.3) < 0.2) return s;
    return max;
  };

  // ---- strade: capsule a larghezza misurata
  const carCaps = [], alleyCaps = [], walkCaps = [], footCaps = [], pedAreas = [], stepsLines = [];
  const stats = { alley: 0, narrowed: 0, full: 0, rural: 0 };
  const streetLines = [];
  const roadPts = [];
  for (const f of features) {
    const p = f.properties;
    if (p.kind !== 'highway' || f.geometry.type !== 'LineString' || (p.tunnel && p.tunnel !== 'no')) continue;
    const pts = localRing(f.geometry.coordinates);
    if (pts.length < 2) continue;
    const closed = pts.length > 3 && Math.hypot(pts[0].x - pts.at(-1).x, pts[0].z - pts.at(-1).z) < 0.5;
    if (p.highway === 'pedestrian' && closed) { pedAreas.push(toPath(pts)); continue; }
    if (p.highway === 'steps') {
      const hw = Math.max(0.8, (p.width ? +p.width : 1.6) / 2);
      stepsLines.push({ pts, hw, count: p.stepCount && p.stepCount >= 1 ? Math.round(p.stepCount) : null });
      continue;
    }
    if (FOOT.has(p.highway)) {
      const hw = Math.max(0.9, (p.width ? +p.width : p.highway === 'pedestrian' ? 5 : 1.8) / 2);
      const rs = resample(pts, 4);
      for (let i = 0; i < rs.length - 1; i++) footCaps.push(...capsule(rs[i], rs[i + 1], hw));
      continue;
    }
    if (!CAR.has(p.highway)) continue;
    const hwClass = classHalfWidth(p);
    const wantsWalk = WITH_SIDEWALK.has(p.highway);
    const rs = resample(pts, 3);
    const segs = [];
    for (const q of rs) roadPts.push({ minX: q.x, maxX: q.x, minZ: q.z, maxZ: q.z, pts: [] });
    for (let i = 0; i < rs.length - 1; i++) {
      const a = rs[i], b = rs[i + 1];
      const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
      const nx = -(b.z - a.z) / L, nz = (b.x - a.x) / L;
      const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
      segs.push({ a, b, corridor: Math.min(probe(mx, mz, nx, nz), probe(mx, mz, -nx, -nz)) });
    }
    // corridoio lisciato lungo la via (mediana su 5 tratti): niente strade "a fisarmonica"
    const cor = segs.map((_, i) => median(segs.slice(Math.max(0, i - 2), i + 3).map((s) => s.corridor)));
    segs.forEach((s, i) => {
      const c = cor[i] - 0.15;
      let hw, sw, kind;
      if (c >= 13.5) { hw = hwClass; sw = 0; kind = 'rural'; stats.rural++; }
      else if (c < MIN_LANE / 2 + SW || !wantsWalk) {
        hw = Math.max(1.5, Math.min(hwClass, c)); sw = 0; kind = c < hwClass ? 'alley' : 'car';
        stats[kind === 'alley' ? 'alley' : 'full']++;
      } else if (c < hwClass + SW) { hw = c - SW; sw = SW; kind = 'car'; stats.narrowed++; }
      else { hw = hwClass; sw = Math.min(SW + 0.8, c - hwClass); kind = 'car'; stats.full++; }
      (kind === 'alley' ? alleyCaps : carCaps).push(...capsule(s.a, s.b, hw));
      if (sw > 0) walkCaps.push(...capsule(s.a, s.b, hw + sw));
    });
    if (p.name) streetLines.push({ name: p.name, pts: pts.map((q) => [Math.round(q.x * 10), Math.round(q.z * 10)]) });
  }
  log.push(`corridoi (tratti 3 m): ${JSON.stringify(stats)}`);

  const clipRect = [[
    { X: Math.round(rect.minX * S), Y: Math.round(rect.minZ * S) }, { X: Math.round(rect.maxX * S), Y: Math.round(rect.minZ * S) },
    { X: Math.round(rect.maxX * S), Y: Math.round(rect.maxZ * S) }, { X: Math.round(rect.minX * S), Y: Math.round(rect.maxZ * S) },
  ]];

  // ---- quote: campo lisciato (serve anche a scalinate e linea di costa, quindi calcolato presto)
  const field = buildHeightField(demY, { minX: rect.minX - 40, maxX: rect.maxX + 40, minZ: rect.minZ - 40, maxZ: rect.maxZ + 40 }, { step: 2, sigma: 6 });

  // ---- scalinate (highway=steps): area per la contabilità (isolati/navigabilità); i gradini
  // veri (quote a gradoni) si costruiscono più sotto, dopo bldUnion (servono per ritagliarli).
  const stepsArea = inter(union(stepsLines.flatMap((s) => {
    const rs = resample(s.pts, 0.6);
    const caps = [];
    for (let i = 0; i < rs.length - 1; i++) caps.push(...capsule(rs[i], rs[i + 1], s.hw));
    return caps;
  }), null), clipRect);

  // ---- carreggiata, vicoli, marciapiedi, aree pedonali
  let roadAll = inter(closing(union(carCaps, alleyCaps), 2.5), clipRect);
  let alley = inter(diff(union(alleyCaps, null), union(carCaps, null)), roadAll);
  alley = opening(alley, 0.3);
  const car = diff(roadAll, alley);
  let walkOuter = inter(closing(union(walkCaps, roadAll), 1.2), clipRect);
  const sidewalk = opening(diff(walkOuter, roadAll), 0.25);
  let ped = diff(inter(union(footCaps, pedAreas), clipRect), walkOuter);
  ped = opening(ped, 0.3);
  const paved = union(union(walkOuter, ped), stepsArea); // tutto ciò che è strada, marciapiede, pedonale o scalinata

  // ---- mare: maschera (celle ~30 m) → gradini arrotondati con chiusura/apertura ampie;
  // strade ed edifici hanno la precedenza (OSM non mette strade in acqua)
  let sea = [];
  if (isSea) {
    const cell = 10;
    const rows = [];
    for (let z = rect.minZ; z < rect.maxZ; z += cell) {
      let run = null;
      for (let x = rect.minX; x < rect.maxX + cell; x += cell) { // +1 cella: chiude i tratti che toccano il bordo est
        const wet = x < rect.maxX && isSea(x + cell / 2, z + cell / 2);
        if (wet && run == null) run = x;
        if (!wet && run != null) { rows.push(toPath([{ x: run, z }, { x, z }, { x, z: z + cell }, { x: run, z: z + cell }])); run = null; }
      }
    }
    if (rows.length) {
      sea = opening(closing(union(rows, null), 28), 28);
      sea = C.Clipper.CleanPolygons(sea, 1.5 * S);
    }
  }
  const bldUnion = union(rawBld.map((b) => toPath(b.pts)), null);

  // ---- gradini veri per le scalinate: ogni tratto ricampionato diventa una pedata piatta,
  // quota quantizzata a passi di ~STEP_RISER fra la quota di partenza e quella di arrivo (dal
  // campo lisciato). Il "muro" del contro-gradino nasce da solo (stessa regola dei bordi):
  // qui basta disegnare pedate a quota costante, non una rampa continua.
  const stepsTreads = [];
  let stepsCount = 0;
  for (const s of stepsLines) {
    const rs = resample(s.pts, 0.6);
    if (rs.length < 2) continue;
    const y0 = field.sample(rs[0].x, rs[0].z) + CURB;
    const y1 = field.sample(rs.at(-1).x, rs.at(-1).z) + CURB;
    const rise = y1 - y0;
    const nSeg = rs.length - 1;
    const n = Math.max(1, Math.min(nSeg, s.count || Math.round(Math.abs(rise) / STEP_RISER) || 1));
    for (let i = 0; i < nSeg; i++) {
      const k = Math.min(n - 1, Math.floor((i / nSeg) * n));
      const c = y0 + (rise * (k + 0.5)) / n;
      const a = rs[i], b = rs[i + 1];
      const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
      const nx = (-(b.z - a.z) / L) * s.hw, nz = ((b.x - a.x) / L) * s.hw;
      const quad = [toPath([
        { x: a.x + nx, z: a.z + nz }, { x: b.x + nx, z: b.z + nz },
        { x: b.x - nx, z: b.z - nz }, { x: a.x - nx, z: a.z - nz },
      ])];
      const clipped = diff(inter(quad, clipRect), bldUnion);
      for (const ex of encodeEx(exPolys(clipped))) stepsTreads.push({ ...ex, c: +c.toFixed(3), sub: 'steps' });
    }
    stepsCount++;
  }
  log.push(`scalinate: ${stepsCount} vie, ${stepsTreads.length} pedate`);

  // ---- scogliere (natural=cliff) e frangiflutti/moli (man_made=breakwater|groyne|pier|mole):
  // letti da OSM quando presenti — se il bbox non li mappa restano semplicemente vuoti, niente
  // costa inventata. Cliff: parete fra il lato alto e il lato basso (DEM grezzo, non lisciato:
  // una scogliera è un salto vero, non un pendio); pier: cresta rialzata lungo la linea.
  const cliffs = [];
  let cliffLines = 0;
  for (const f of features) {
    if (f.properties.kind !== 'cliff' || f.geometry.type !== 'LineString') continue;
    const pts = resample(localRing(f.geometry.coordinates), 4);
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
      const nx = -(b.z - a.z) / L, nz = (b.x - a.x) / L;
      const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2;
      const sideA = demY(mx + nx * 4, mz + nz * 4), sideB = demY(mx - nx * 4, mz - nz * 4);
      const topY = Math.max(sideA, sideB), botY = Math.min(sideA, sideB, field.sample(mx, mz));
      const h = topY - botY;
      if (h < 0.6) continue; // rilievo insufficiente per una vera scogliera
      cliffs.push({ ax: +a.x.toFixed(2), az: +a.z.toFixed(2), bx: +b.x.toFixed(2), bz: +b.z.toFixed(2), topY: +topY.toFixed(2), botY: +botY.toFixed(2) });
    }
    cliffLines++;
  }
  const piers = [];
  let pierLines = 0;
  for (const f of features) {
    if (f.properties.kind !== 'pier' || f.geometry.type !== 'LineString') continue;
    const pts = localRing(f.geometry.coordinates);
    if (pts.length < 2) continue;
    const w = Math.max(1.5, f.properties.width ? +f.properties.width : 3);
    piers.push({ pts: pts.map((q) => [+q.x.toFixed(2), +q.z.toFixed(2)]), w: +w.toFixed(2), subtype: f.properties.subtype });
    pierLines++;
  }
  log.push(`costa: ${cliffLines} scogliere (${cliffs.length} tratti), ${pierLines} frangiflutti/moli`);

  // Zone da raster (celle 10 m, indice di punti stradali): terra abitata ≤ 90 m dalle strade,
  // largo = nessuna strada entro 150 m e quota bassa → estende il mare fino al bordo mappa
  const roadIdx = new PolygonGrid(roadPts, 45);
  const zq = [];
  const landRows = [], offRows = [];
  const ZC = 10;
  for (let z = rect.minZ; z < rect.maxZ; z += ZC) {
    let ra = null, rb = null;
    for (let x = rect.minX; x < rect.maxX + ZC; x += ZC) {
      const cx = x + ZC / 2, cz = z + ZC / 2;
      const inside = x < rect.maxX;
      const land = inside && roadIdx.query(cx, cz, 90, zq).length > 0;
      const off = inside && !land && field.sample(cx, cz) < 1.0 && roadIdx.query(cx, cz, 150, zq).length === 0;
      if (land && ra == null) ra = x;
      if (!land && ra != null) { landRows.push(toPath([{ x: ra, z }, { x, z }, { x, z: z + ZC }, { x: ra, z: z + ZC }])); ra = null; }
      if (off && rb == null) rb = x;
      if (!off && rb != null) { offRows.push(toPath([{ x: rb, z }, { x, z }, { x, z: z + ZC }, { x: rb, z: z + ZC }])); rb = null; }
    }
  }
  const landZone = union(landRows, null);
  if (sea.length && offRows.length) {
    const seaTouch = offset(sea, 15);
    const off = exPolys(union(offRows, null))
      .filter((e) => area(inter([e.outer], seaTouch)) > 0)
      .flatMap((e) => [e.outer, ...(e.holes || [])]);
    if (off.length) sea = opening(closing(union(sea, off), 20), 20);
  }
  if (sea.length) sea = opening(diff(sea, offset(union(paved, bldUnion), 2)), 3);
  let beach = [];
  if (sea.length) {
    const band = diff(offset(sea, 45), sea);
    beach = opening(diff(diff(inter(band, clipRect), paved), offset(bldUnion, 3)), 2);
    // spiaggia solo lungo la terra abitata: niente anelli di sabbia al largo
    beach = opening(inter(beach, landZone), 2);
  }
  // ---- spiaggia da OSM (natural=beach|sand): letta, non solo dedotta dalla fascia costiera —
  // può essere più larga o più stretta della banda geometrica; strade/edifici restano prioritari.
  const osmBeach = [];
  for (const f of features) {
    const p = f.properties;
    if (p.kind !== 'beach' || f.geometry.type !== 'Polygon') continue;
    osmBeach.push(toPath(localRing(f.geometry.coordinates[0])));
  }
  if (osmBeach.length) {
    beach = opening(diff(union(beach, diff(inter(osmBeach, clipRect), paved)), offset(bldUnion, 3)), 1);
  }

  // ---- isolati: il resto del rettangolo, puliti dalle schegge
  let blocksAll = opening(diff(diff(diff(clipRect, paved), sea), beach), 0.5);
  // strisce "di terra" rimaste in mare (bordi della maschera): se basse, vuote e a contatto col mare → mare
  if (sea.length) {
    const seaNear = offset(sea, 6);
    const roadGrid = new PolygonGrid(roadPts, 30);
    const qtmp = [];
    const seaBox = bboxOfPath(seaNear.flat());
    const absorb = [];
    for (const e of exPolys(blocksAll)) {
      const bb = bboxOfPath(e.outer);
      // controlli dal più economico al più costoso
      if (bb.maxX < seaBox.minX || bb.minX > seaBox.maxX || bb.maxZ < seaBox.minZ || bb.minZ > seaBox.maxZ) continue;
      if (field.sample((bb.minX + bb.maxX) / 2, (bb.minZ + bb.maxZ) / 2) > 0.8) continue;
      if (rawBld.some((b) => b.pts.some((q) => q.x > bb.minX && q.x < bb.maxX && q.z > bb.minZ && q.z < bb.maxZ))) continue;
      const paths = [e.outer, ...(e.holes || [])];
      if (!area(inter(paths, seaNear))) continue;
      if (e.outer.some((q) => roadGrid.query(q.X / S, q.Y / S, 30, qtmp).length)) continue; // vicino a una strada = terra vera
      absorb.push(...paths);
    }
    if (absorb.length) {
      sea = union(sea, absorb);
      blocksAll = diff(blocksAll, absorb);
    }
  }
  const blockEx = exPolys(blocksAll).filter((e) => Math.abs(C.Clipper.Area(e.outer)) / (S * S) > 4);

  // ---- piani degli isolati urbani
  const blocks = [];
  const bldBoxes = rawBld.map((b) => {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const q of b.pts) { minX = Math.min(minX, q.x); maxX = Math.max(maxX, q.x); minZ = Math.min(minZ, q.z); maxZ = Math.max(maxZ, q.z); }
    return { minX, maxX, minZ, maxZ };
  });
  let urbanN = 0, naturalN = 0, terracedN = 0, maxRelief = 0;
  const reliefHist = { lt50: 0, lt110: 0, lt250: 0, ge250: 0 };
  const terracePlans = []; // isolati con dislivello reale > soglia: gradoni + muri di contenimento
  for (const e of blockEx) {
    const a = (Math.abs(C.Clipper.Area(e.outer)) - (e.holes || []).reduce((s, h) => s + Math.abs(C.Clipper.Area(h)), 0)) / (S * S);
    const bb = bboxOfPath(e.outer);
    let nb = 0;
    for (const b of bldBoxes) if (b.maxX > bb.minX && b.minX < bb.maxX && b.maxZ > bb.minZ && b.minZ < bb.maxZ) nb++;
    // urbano = piccolo, oppure con edifici e non enorme; il resto è campagna (terreno naturale)
    const urban = a < 12000 || (nb >= 2 && a < 45000);
    const entry = { ...encodeEx([e])[0], area: Math.round(a) };
    if (urban) {
      const samples = [];
      const step = Math.max(3, Math.sqrt(a) / 12);
      for (let z = bb.minZ; z <= bb.maxZ; z += step) for (let x = bb.minX; x <= bb.maxX; x += step) {
        if (pointInEx(x, z, e)) samples.push({ x, z, y: field.sample(x, z) });
      }
      for (const q of e.outer) samples.push({ x: q.X / S, z: q.Y / S, y: field.sample(q.X / S, q.Y / S) });
      const pl = fitPlane(samples, 0.1);
      entry.plane = [+pl.a.toFixed(5), +pl.b.toFixed(5), +(pl.c + CURB).toFixed(3)];
      const ys = samples.map((p) => p.y);
      const relief = Math.max(...ys) - Math.min(...ys);
      if (relief < 0.5) reliefHist.lt50++; else if (relief < 1.1) reliefHist.lt110++; else if (relief < 2.5) reliefHist.lt250++; else reliefHist.ge250++;
      if (relief > maxRelief) maxRelief = relief;
      // Terrazzamento solo su lotti veri (a<12000 m², la stessa soglia "piccolo" qui sopra): i grandi
      // isolati radi (nb≥2 && a<45000, spesso campagna con poche case) restano terreno naturale
      // continuo — un dislivello di decine di metri lì non è un giardino a gradoni, è collina.
      if (relief > TERRACE_RELIEF && relief < 12 && a > TERRACE_MIN_AREA && a < 12000) {
        const g = Math.hypot(pl.a, pl.b);
        const ux = g > 1e-4 ? pl.a / g : 1, uz = g > 1e-4 ? pl.b / g : 0;
        const ts = samples.map((p) => p.x * ux + p.z * uz);
        const tmin = Math.min(...ts), tmax = Math.max(...ts);
        const n = Math.min(12, Math.max(2, Math.ceil(relief / TERRACE_STEP)));
        const px = -uz, pz = ux;
        const cx = (bb.minX + bb.maxX) / 2, cz = (bb.minZ + bb.maxZ) / 2;
        const kc = cx * px + cz * pz; // k del centro: le fasce vanno centrate lì, non sull'origine del mondo
        const W = Math.hypot(bb.maxX - bb.minX, bb.maxZ - bb.minZ) / 2 + 15; // mezza diagonale + margine
        const rects = terraceBands(ux, uz, tmin, tmax, n, kc, W);
        const bands = rects.map((rect, i) => {
          const tA = tmin + ((tmax - tmin) * i) / n, tB = tmin + ((tmax - tmin) * (i + 1)) / n;
          const inBand = samples.filter((p) => { const t = p.x * ux + p.z * uz; return t >= tA && t <= tB; });
          const c = (inBand.length ? median(inBand.map((p) => p.y)) : field.sample((bb.minX + bb.maxX) / 2, (bb.minZ + bb.maxZ) / 2)) + CURB;
          return { rect, c: +c.toFixed(3) };
        });
        terracePlans.push({ outer: e.outer, holes: e.holes || [], bands });
        terracedN++;
      }
      urbanN++;
    } else naturalN++;
    blocks.push(entry);
  }
  log.push(`isolati: ${urbanN} urbani (piano di progetto), ${naturalN} naturali · dislivello reale: ${JSON.stringify(reliefHist)} (max ${maxRelief.toFixed(1)} m) · terrazzati ${terracedN}`);

  // ---- edifici ritagliati sugli isolati (mai su strade/marciapiedi/spiaggia/mare)
  // Quadtree: gli isolati si spezzano in tessere ~110 m una volta sola (costo ~N log N),
  // poi ogni edificio si ritaglia solo contro le tessere che tocca.
  const tiles = [];
  (function split(paths, r) {
    if (!paths.length) return;
    if (r.maxX - r.minX <= 110) { tiles.push({ r, paths }); return; }
    const mx = (r.minX + r.maxX) / 2, mz = (r.minZ + r.maxZ) / 2;
    for (const q of [
      { minX: r.minX, maxX: mx, minZ: r.minZ, maxZ: mz }, { minX: mx, maxX: r.maxX, minZ: r.minZ, maxZ: mz },
      { minX: r.minX, maxX: mx, minZ: mz, maxZ: r.maxZ }, { minX: mx, maxX: r.maxX, minZ: mz, maxZ: r.maxZ },
    ]) {
      split(inter(paths, [toPath([{ x: q.minX, z: q.minZ }, { x: q.maxX, z: q.minZ }, { x: q.maxX, z: q.maxZ }, { x: q.minX, z: q.maxZ }])]), q);
    }
  })(blocksAll, { minX: rect.minX, maxX: rect.minX + Math.max(rect.maxX - rect.minX, rect.maxZ - rect.minZ), minZ: rect.minZ, maxZ: rect.minZ + Math.max(rect.maxX - rect.minX, rect.maxZ - rect.minZ) });
  const buildings = [];
  let invaded = 0, dropped = 0;
  let regularized = 0, roofs = 0;
  for (const b of rawBld) {
    // pulizia della pianta PRIMA del ritaglio: il ritaglio garantisce comunque zero invasioni
    const reg = regularize(b.pts);
    if (reg !== b.pts && (reg.length !== b.pts.length - 1 || reg.some((p, i) => Math.hypot(p.x - b.pts[i].x, p.z - b.pts[i].z) > 0.05))) regularized++;
    const path = cleanNotches(toPath(reg));
    const bb = bboxOfPath(path);
    const local = [];
    for (const t of tiles) if (t.r.maxX > bb.minX && t.r.minX < bb.maxX && t.r.maxZ > bb.minZ && t.r.minZ < bb.maxZ) local.push(...t.paths);
    const clipped = local.length ? inter([path], local) : [];
    const a0 = Math.abs(C.Clipper.Area(path)) / (S * S);
    const a1 = area(clipped);
    invaded += Math.max(0, a0 - a1);
    const ex = exPolys(clipped).filter((e) => Math.abs(C.Clipper.Area(e.outer)) / (S * S) > 6);
    if (!ex.length) { dropped++; continue; }
    // il pezzo più grande conserva l'identità dell'edificio (aspetto, tipologia)
    ex.sort((p, q) => Math.abs(C.Clipper.Area(q.outer)) - Math.abs(C.Clipper.Area(p.outer)));
    // dopo il ritaglio: via le micro-rientranze create dal taglio, poi di nuovo dentro l'isolato
    let main = cleanNotches(ex[0].outer);
    // exPolys = unione: i pezzi di tessere adiacenti del quadtree tornano un poligono unico
    const again = exPolys(inter([main], local)).map((e) => e.outer);
    if (again.length) {
      again.sort((p, q) => Math.abs(C.Clipper.Area(q)) - Math.abs(C.Clipper.Area(p)));
      main = again[0];
    }
    main = C.Clipper.CleanPolygon(main, 0.3 * S);
    if (main.length < 3) { dropped++; continue; }
    const entry = { id: b.id, o: main.flatMap((q) => [q.X, q.Y]) };
    const roof = skeletonRoof(main, skeleton);
    if (roof) { entry.r = roof; roofs++; }
    buildings.push(entry);
  }
  log.push(`piante squadrate: ${regularized} · tetti su qualsiasi pianta: ${roofs}`);
  log.push(`edifici: ${buildings.length} (scartati ${dropped}), superficie tolta a strade/marciapiedi ${invaded.toFixed(0)} m²`);

  // ---- suolo degli isolati urbani: cortile (terra battuta/lastricato) e verde
  // verde = aree verdi OSM + spazi aperti ad almeno 2,5 m dagli edifici (giardini, orti, incolti)
  const GREEN = new Set(['park', 'grass', 'garden', 'meadow', 'village_green', 'recreation_ground', 'orchard', 'allotments', 'vineyard', 'scrub', 'grassland']);
  const osmGreen = [];
  for (const f of features) {
    const p = f.properties;
    if (f.geometry.type !== 'Polygon') continue;
    if (!['vegetation', 'landuse'].includes(p.kind)) continue;
    if (!GREEN.has(p.subtype || p.landuse || p.leisure || p.natural)) continue;
    osmGreen.push(toPath(localRing(f.geometry.coordinates[0])));
  }
  const urbanPaths = blockEx.filter((e, i) => blocks[i]?.plane).flatMap((e) => [e.outer, ...(e.holes || [])]);
  const bldPaths = union(buildings.map((b) => {
    const p = [];
    for (let i = 0; i < b.o.length; i += 2) p.push({ X: b.o[i], Y: b.o[i + 1] });
    return p;
  }), null);
  const free = diff(urbanPaths, bldPaths);
  const openLand = opening(diff(free, offset(bldPaths, 2.5)), 1.2);
  let green = opening(inter(free, union(osmGreen, openLand)), 0.6);
  let yard = diff(urbanPaths, green);
  const yardFull = yard; // per i muretti di lotto: confine "prima" dei terrazzamenti (riassegnazione ≠ mutazione)
  log.push(`suolo urbano: verde ${area(green).toFixed(0)} m² (di cui OSM ${area(inter(free, union(osmGreen, null))).toFixed(0)}), cortili ${area(yard).toFixed(0)} m²`);

  // ---- terrazzamenti: gradoni piani al posto del campo continuo, dove il dislivello reale lo chiede
  // Tolti da yard/green "a tappeto" e ridisegnati a fasce di quota costante: il muro/gradino fra
  // due fasce (o fra una fascia e il resto) nasce da solo nell'algoritmo dei bordi (buildLevel.js).
  const terraceEntries = [];
  for (const plan of terracePlans) {
    const blockPaths = [plan.outer, ...plan.holes];
    const blockYard = inter(yard, blockPaths);
    const blockGreen = inter(green, blockPaths);
    if (!blockYard.length && !blockGreen.length) continue;
    yard = diff(yard, blockPaths);
    green = diff(green, blockPaths);
    for (const band of plan.bands) {
      const by = inter(blockYard, [band.rect]);
      const bg = inter(blockGreen, [band.rect]);
      for (const ex of encodeEx(exPolys(by), 0.4)) terraceEntries.push({ ...ex, c: band.c, sub: 'yard' });
      for (const ex of encodeEx(exPolys(bg), 0.4)) terraceEntries.push({ ...ex, c: band.c, sub: 'green' });
    }
  }
  const ringArea = (o) => { let a = 0; for (let i = 0; i < o.length; i += 2) { const j = (i + 2) % o.length; a += o[i] * o[j + 1] - o[j] * o[i + 1]; } return Math.abs(a) / 2 / (S * S); };
  const terraceArea = terraceEntries.reduce((s, e) => s + ringArea(e.o), 0);
  log.push(`terrazzamenti: ${terracePlans.length} isolati tagliati in gradoni, ${terraceEntries.length} tessere a quota costante, area tessere ${terraceArea.toFixed(0)} m² · yard+green residui ${(area(yard) + area(green)).toFixed(0)} m² (somma attesa ~invariata)`);

  // ---- muretti/recinzioni ai bordi dei lotti: OSM li mappa raramente, ma ogni cortile mediterraneo
  // ne ha uno verso la strada. Bordo di yardFull (cortile, PRIMA dei terrazzamenti: la geometria non
  // dipende da quello) dove un lato guarda verso paved (strada/vicolo/marciapiede/pedonale/scalinata).
  // Gli angoli arrotondati delle operazioni morfologiche lasciano vertici quasi allineati: i tratti
  // consecutivi collineari (< 4°) si fondono in un'unica campata, altrimenti sono migliaia di schegge.
  const tFence0 = Date.now();
  const pavedEx = exPolys(paved);
  const onPaved = (px, pz) => pavedEx.some((pe) => pointInEx(px, pz, pe));
  const fences = [];
  const flushRun = (run) => {
    if (run.length < 2) return;
    const simplified = [run[0]];
    for (let i = 1; i < run.length - 1; i++) {
      const p = simplified.at(-1), c = run[i], nx2 = run[i + 1];
      const a1 = Math.atan2(c.z - p.z, c.x - p.x), a2 = Math.atan2(nx2.z - c.z, nx2.x - c.x);
      let d = Math.abs(a1 - a2); if (d > Math.PI) d = 2 * Math.PI - d;
      if (d > (9 * Math.PI) / 180) simplified.push(c); // angolo apprezzabile: tieni il vertice
    }
    simplified.push(run.at(-1));
    for (let i = 0; i < simplified.length - 1; i++) {
      const a = simplified[i], b = simplified[i + 1];
      if (Math.hypot(b.x - a.x, b.z - a.z) < 0.3) continue;
      fences.push([Math.round(a.x * 10), Math.round(a.z * 10), Math.round(b.x * 10), Math.round(b.z * 10)]);
    }
  };
  for (const e of exPolys(yardFull)) {
    for (const ring0 of [e.outer, ...(e.holes || [])]) {
      const ring = C.Clipper.CleanPolygon(ring0, 0.3 * S); // vertici quasi doppi degli archi arrotondati: via
      const n = ring.length;
      let run = [];
      for (let i = 0; i < n; i++) {
        const a = ring[i], b = ring[(i + 1) % n];
        const ax = a.X / S, az = a.Y / S, bx = b.X / S, bz = b.Y / S;
        const L = Math.hypot(bx - ax, bz - az);
        if (L < 0.05) continue;
        const nx = -(bz - az) / L, nz = (bx - ax) / L;
        const mx = (ax + bx) / 2, mz = (az + bz) / 2;
        const sign = pointInEx(mx + nx * 0.3, mz + nz * 0.3, e) ? -1 : 1; // verso fuori dal cortile
        const faces = onPaved(mx + nx * sign * 0.3, mz + nz * sign * 0.3);
        if (faces) { if (!run.length) run.push({ x: ax, z: az }); run.push({ x: bx, z: bz }); }
        else { flushRun(run); run = []; }
      }
      flushRun(run);
    }
  }
  log.push(`muretti di lotto: ${fences.length} tratti (${Date.now() - tFence0} ms)`);

  // ---- test di navigabilità: la rete percorribile è un pezzo unico?
  const walkEx = exPolys(union(paved, beach));
  const walkAreas = walkEx.map((e) => Math.abs(C.Clipper.Area(e.outer)) / (S * S)).sort((a, b) => b - a);
  const walkTotal = walkAreas.reduce((s, v) => s + v, 0);
  const tests = {
    walkComponents: walkEx.length,
    largestWalkShare: walkTotal ? +(walkAreas[0] / walkTotal).toFixed(3) : 0,
    overlapRoadBuildings: +area(inter(paved, union(buildings.map((b) => {
      const p = [];
      for (let i = 0; i < b.o.length; i += 2) p.push({ X: b.o[i], Y: b.o[i + 1] });
      return p;
    }), null))).toFixed(1),
  };
  log.push(`navigabilità: ${tests.walkComponents} componenti, la principale copre ${(tests.largestWalkShare * 100).toFixed(1)}% · sovrapposizione strade/edifici ${tests.overlapRoadBuildings} m²`);

  const areas = {
    car: +area(car).toFixed(0), alley: +area(alley).toFixed(0), sidewalk: +area(sidewalk).toFixed(0),
    ped: +area(ped).toFixed(0), beach: +area(beach).toFixed(0), sea: +area(inter(sea, clipRect)).toFixed(0),
  };
  log.push(`aree m²: ${JSON.stringify(areas)}`);
  log.push(`tempo ${Date.now() - t0} ms`);

  return {
    version: LEVEL_VERSION,
    unit: 0.1,
    rect,
    params: { sidewalk: SW, curb: CURB, heightField: { step: 2, sigma: 6, margin: 40 } },
    layers: {
      car: encodeEx(exPolys(car), 0.5),
      alley: encodeEx(exPolys(alley), 0.5),
      sidewalk: encodeEx(exPolys(sidewalk), 0.3),
      ped: encodeEx(exPolys(ped), 0.5),
      beach: encodeEx(exPolys(beach), 2),
      sea: encodeEx(exPolys(inter(sea, clipRect)), 10),
      yard: encodeEx(exPolys(yard), 0.5),
      green: encodeEx(exPolys(green), 1),
      terrace: terraceEntries,
      steps: stepsTreads,
    },
    blocks,
    buildings,
    fences,
    cliffs,
    piers,
    streets: streetLines,
    tests,
    areas,
    log,
  };
}
