/**
 * Level Compiler (M1) — trasforma la mappa cruda (OSM + DEM) in un livello navigabile.
 *
 *  1. vie → larghezza MISURATA tra le facciate (vicoli senza marciapiede, strade rurali senza)
 *  2. superfici come AREE: carreggiata, lastricato, marciapiede (chiusure morfologiche = cordoli)
 *  3. edifici ritagliati fuori dallo spazio pubblico
 *  4. partizione del suolo: ciò che resta = lotti/cortili o terreno naturale; mare e acque
 *  5. quote progettate: profili viari coerenti ai nodi, piattaforme per i lotti, terreno raccordato
 *  6. bordi verticali AUTOMATICI: ogni superficie più alta del vicino scende fino a lui
 *     (cordoli, muri di contenimento, scarpate, sponde)
 *  7. edifici (M1: muri fino a terra, finestre, tetti piani o a padiglione)
 *  8. verifica di navigabilità (raster 1 m, salti ≤ 45 cm)
 */
import {
  C, toPath, strokePath, union, diff, inter, close, open, area, toPolygons, triangulate,
  pointInPolygon, bboxOf, simplifyLine, polygonArea, densify,
} from './geom.js';
import { buildProfiles } from './profiles.js';
import { SegmentGrid, PolygonGrid } from '../engine/spatial/grid.js';
import { lineStringToLocalPts, ringToLocalPts, project } from '../engine/geo.js';
import { highwayWidth } from '../engine/roads/RoadBuilder.js';
import { CAR_HW, FOOT_HW } from '../engine/streets/StreetNetwork.js';
import { hash32, unit, hashXZ, mulberry32 } from '../engine/rng.js';
import { pickSpecies, speciesFromTags, habitatOf } from '../engine/region/vegetation.js';
import { tempAt } from '../engine/region/climate.js';
import { seaMaskSampler } from '../engine/region/signals.js';

const CURB = 0.15;
const SW = 1.6;
const MIN_LANE = 2.6;

const smooth01 = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const rgb = (c, k = 1) => [c[0] * k, c[1] * k, c[2] * k];

export function compileLevel({ features, demY, profile, appearance = null, box, localToLonLat, originElev = 0, log = () => {} }) {
  const T0 = Date.now();
  const report = { steps: {} };
  const tick = (name) => { report.steps[name] = Date.now() - (tick.t || T0); tick.t = Date.now(); log(`· ${name} (${report.steps[name]} ms)`); };
  const U = profile.urban, G = profile.ground;

  // ------------------------------------------------------------------ 0. input
  const carWays = [], footWays = [], pedAreas = [], buildings = [], waters = [], trees = [], vegPolys = [];
  for (const f of features) {
    const p = f.properties;
    const g = f.geometry;
    if (p.kind === 'highway' && g.type === 'LineString' && !(p.tunnel && p.tunnel !== 'no')) {
      const pts = simplifyLine(lineStringToLocalPts(g.coordinates), 0.3);
      if (pts.length < 2) continue;
      if (CAR_HW.has(p.highway)) carWays.push({ pts, hwClass: Math.max(highwayWidth(p), 4.3) / 2, highway: p.highway, name: p.name, id: p.id, kind: 'car' });
      else if (FOOT_HW.has(p.highway)) footWays.push({ pts, hw: p.highway === 'pedestrian' ? 2.2 : p.highway === 'steps' ? 1.1 : 1.2, highway: p.highway, name: p.name, id: p.id, kind: 'foot' });
    } else if (g.type === 'Polygon') {
      const ring = ringToLocalPts(g.coordinates[0]);
      if (ring.length < 3) continue;
      if (p.kind === 'building') buildings.push({ ring, props: p });
      else if (p.kind === 'water') waters.push(ring);
      else if (p.highway === 'pedestrian' || p.place === 'square' || p.kind === 'plaza') pedAreas.push(ring);
      else if (p.kind === 'vegetation') vegPolys.push({ ring, props: p });
    } else if (g.type === 'Point' && p.kind === 'tree') {
      trees.push({ x: project(g.coordinates[0], g.coordinates[1]), props: p });
    }
  }
  tick('input');

  // ------------------------------------------------------------------ 1. larghezze misurate
  const bSegs = [];
  for (const b of buildings) for (let i = 0; i < b.ring.length; i++) {
    const a = b.ring[i], c = b.ring[(i + 1) % b.ring.length];
    bSegs.push({ ax: a.x, az: a.z, bx: c.x, bz: c.z });
  }
  const bGrid = new SegmentGrid(bSegs, 20);
  const bPolys = buildings.map((b) => ({ outer: b.ring, holes: [] }));
  const bPolyGrid = new PolygonGrid(bPolys.map((p, i) => ({ ...bboxOf(p), pts: p.outer, i })), 24);
  const insideBuilding = (x, z) => bPolyGrid.query(x, z, 0, []).some((q) => pointInPolygon(x, z, bPolys[q.i]));
  const distToWall = (x, z) => {
    let d = Infinity;
    bGrid.nearest(x, z, (id) => {
      const s = bSegs[id];
      const abx = s.bx - s.ax, abz = s.bz - s.az, L = abx * abx + abz * abz;
      let t = L > 1e-9 ? ((x - s.ax) * abx + (z - s.az) * abz) / L : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const dd = Math.hypot(x - s.ax - abx * t, z - s.az - abz * t);
      if (dd < d) d = dd;
      return dd;
    }, 16);
    return d;
  };
  /** Distanza del primo muro lungo la normale (salta se il punto è già dentro un edificio). */
  const sideDist = (x, z, nx, nz) => {
    for (let s = 0.3; s <= 16; s += 0.3) {
      const px = x + nx * s, pz = z + nz * s;
      if (distToWall(px, pz) < 0.3 || insideBuilding(px, pz)) return s;
    }
    return 16;
  };

  const asphaltCaps = [], alleyCaps = [], walkCaps = [], footCaps = [];
  const stats = { vicoli: 0, ristretti: 0, pieni: 0, rurali: 0 };
  for (const w of carWays) {
    let urbanLen = 0, totLen = 0;
    for (let i = 0; i < w.pts.length - 1; i++) {
      const a = w.pts[i], b = w.pts[i + 1];
      const L = Math.hypot(b.x - a.x, b.z - a.z);
      const n = Math.max(1, Math.ceil(L / 3));
      for (let k = 0; k < n; k++) {
        const p0 = { x: a.x + ((b.x - a.x) * k) / n, z: a.z + ((b.z - a.z) * k) / n };
        const p1 = { x: a.x + ((b.x - a.x) * (k + 1)) / n, z: a.z + ((b.z - a.z) * (k + 1)) / n };
        const sl = L / n;
        const nx = -(b.z - a.z) / L, nz = (b.x - a.x) / L;
        const mx = (p0.x + p1.x) / 2, mz = (p0.z + p1.z) / 2;
        const dl = sideDist(mx, mz, nx, nz), dr = sideDist(mx, mz, -nx, -nz);
        const corridor = Math.min(dl, dr);
        totLen += sl;
        let hw, sw, alley = false;
        if (dl >= 16 && dr >= 16) { hw = w.hwClass; sw = 0; stats.rurali++; }
        else if (corridor - 0.15 < MIN_LANE / 2 + SW) { hw = Math.max(1.4, corridor - 0.15); sw = 0; alley = true; stats.vicoli++; urbanLen += sl; }
        else if (corridor - 0.15 < w.hwClass + SW) { hw = corridor - 0.15 - SW; sw = SW; stats.ristretti++; urbanLen += sl; }
        else { hw = w.hwClass; sw = Math.min(SW + 0.8, corridor - 0.15 - w.hwClass); stats.pieni++; urbanLen += sl; }
        const cap = strokePath([p0, p1], hw);
        (alley ? alleyCaps : asphaltCaps).push(...cap);
        if (sw > 0) walkCaps.push(...strokePath([p0, p1], hw + sw));
      }
    }
    w.urban = totLen > 0 && urbanLen / totLen > 0.3;
  }
  for (const w of footWays) footCaps.push(...strokePath(w.pts, w.hw));
  report.corridoio = stats;
  tick('larghezze');

  // ------------------------------------------------------------------ 2-4. superfici, edifici, suolo — A TILE
  // Ogni tile (150 m) lavora sui soli elementi vicini con 12 m di margine: le chiusure
  // morfologiche non vedono il bordo del tile, poi il risultato è ritagliato sul tile esatto.
  const TILE = 150, MARGIN = 12;
  const pbb = (path) => {
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const q of path) { if (q.X < minX) minX = q.X; if (q.X > maxX) maxX = q.X; if (q.Y < minZ) minZ = q.Y; if (q.Y > maxZ) maxZ = q.Y; }
    return { minX: minX / 100, maxX: maxX / 100, minZ: minZ / 100, maxZ: maxZ / 100 };
  };
  const indexed = (paths) => paths.map((path) => ({ path, ...pbb(path) }));
  const near = (list, r) => list.filter((c) => c.maxX >= r.minX && c.minX <= r.maxX && c.maxZ >= r.minZ && c.minZ <= r.maxZ).map((c) => c.path);
  const rectPath = (r) => [[
    { X: Math.round(r.minX * 100), Y: Math.round(r.minZ * 100) }, { X: Math.round(r.maxX * 100), Y: Math.round(r.minZ * 100) },
    { X: Math.round(r.maxX * 100), Y: Math.round(r.maxZ * 100) }, { X: Math.round(r.minX * 100), Y: Math.round(r.maxZ * 100) },
  ]];
  const iAsph = indexed(asphaltCaps);
  const iPave = indexed([...alleyCaps, ...footCaps, ...pedAreas.map(toPath)]);
  const iWalk = indexed(walkCaps);
  const iWater = indexed(waters.map(toPath));
  const isSeaLL = seaMaskSampler(profile.coast?.seaMask);
  const tiles = [];
  for (let tx = box.minX; tx < box.maxX; tx += TILE) {
    for (let tz = box.minZ; tz < box.maxZ; tz += TILE) {
      const r = { minX: tx, minZ: tz, maxX: Math.min(box.maxX, tx + TILE), maxZ: Math.min(box.maxZ, tz + TILE) };
      const rm = { minX: r.minX - MARGIN, minZ: r.minZ - MARGIN, maxX: r.maxX + MARGIN, maxZ: r.maxZ + MARGIN };
      const R = rectPath(r);
      const A = near(iAsph, rm);
      const asphM = A.length ? close(union(A), 2.5) : [];
      const P = near(iPave, rm);
      const paveM = P.length ? diff(close(union(P), 0.8), asphM) : [];
      const Wk = near(iWalk, rm);
      const walkM = Wk.length || asphM.length ? close(union([...Wk, ...asphM]), 1.5) : [];
      const sideM = walkM.length ? open(diff(diff(walkM, asphM), paveM), 0.3) : [];
      let seaT = [];
      if (profile.coast?.coastal) {
        const cells = [];
        const st = 10;
        for (let x = Math.floor(rm.minX / st) * st; x < rm.maxX; x += st) for (let z = Math.floor(rm.minZ / st) * st; z < rm.maxZ; z += st) {
          const { lon, lat } = localToLonLat(x + st / 2, z + st / 2);
          if (isSeaLL(lon, lat) && demY(x + st / 2, z + st / 2) <= 0.6) cells.push(rectPath({ minX: x, minZ: z, maxX: x + st, maxZ: z + st })[0]);
        }
        if (cells.length) seaT = open(close(union(cells), 12), 6);
      }
      const t = {
        r, R,
        asphalt: inter(asphM, R),
        paving: inter(paveM, R),
        sidewalk: inter(sideM, R),
        water: [],
      };
      t.public = union([...t.asphalt, ...t.paving, ...t.sidewalk]);
      t.sea = seaT.length ? diff(inter(seaT, R), t.public) : [];
      const Wt = near(iWater, rm);
      t.water = Wt.length ? diff(inter(union(Wt), R), t.public) : [];
      tiles.push(t);
    }
  }
  tick('superfici (tile)');

  // edifici ritagliati sullo spazio pubblico dei soli tile che toccano
  const bOut = [];
  let invaded = 0, dropped = 0;
  for (const b of buildings) {
    const bb = bboxOf({ outer: b.ring });
    const cx = (bb.minX + bb.maxX) / 2, cz = (bb.minZ + bb.maxZ) / 2;
    if (cx < box.minX || cx > box.maxX || cz < box.minZ || cz > box.maxZ) continue;
    const pubNear = [];
    for (const t of tiles) if (t.r.maxX >= bb.minX && t.r.minX <= bb.maxX && t.r.maxZ >= bb.minZ && t.r.minZ <= bb.maxZ) pubNear.push(...t.public);
    const p = [toPath(b.ring)];
    const a0 = area(p);
    const clipped = pubNear.length ? diff(p, pubNear) : p;
    const a1 = area(clipped);
    invaded += a0 - a1;
    if (a1 < 6 || a1 < a0 * 0.4) { dropped++; continue; }
    for (const poly of toPolygons(clipped)) {
      if (Math.abs(polygonArea(poly.outer)) < 6) continue;
      bOut.push({ poly, props: b.props, id: b.props.id, path: toPath(poly.outer) });
    }
  }
  report.edifici = { input: buildings.length, output: bOut.length, scartati: dropped, invasioneRimossa_m2: Math.round(invaded) };
  tick('edifici');

  // suolo = tile − (pubblico ∪ edifici ∪ mare ∪ acqua)
  const iB = bOut.map((b) => ({ path: b.path, ...pbb(b.path) }));
  for (const t of tiles) {
    const B = near(iB, t.r);
    const blockedT = union([...t.public, ...B, ...t.sea, ...t.water]);
    t.land = diff(t.R, blockedT);
  }
  let seaArea = 0;
  for (const t of tiles) seaArea += area(t.sea);
  tick('partizione');

  // ------------------------------------------------------------------ 5. quote
  const prof = buildProfiles([...carWays, ...footWays], demY);
  const carAt = (x, z) => prof.profileAt(x, z, 'car') || prof.profileAt(x, z, null) || { y: demY(x, z), d: 999 };
  const anyAt = (x, z) => prof.profileAt(x, z, null) || { y: demY(x, z), d: 999 };

  /**
   * Quota del suolo libero, UNA funzione continua per lotti e campagna:
   * vicino alle strade il terreno si appiattisce al livello del marciapiede (dislivelli < 0,9 m
   * assorbiti), i dislivelli maggiori restano e diventano muri di contenimento (bordi automatici);
   * lontano dalle strade torna il DEM.
   */
  const landY = (x, z) => {
    const dem = demY(x, z);
    const r = anyAt(x, z);
    if (!r || r.d > 30) return dem;
    const street = r.y + (r.line.kind === 'car' ? CURB : 0.02) + 0.02;
    const d = dem - street;
    const flat = street + Math.sign(d) * Math.max(0, Math.abs(d) - 0.9) * 0.9;
    return lerp(flat, dem, smooth01(14, 30, r.d));
  };
  const landColor = (x, z) => {
    // cortile lastricato a ridosso dei muri, verde più in là
    const t = smooth01(2, 7, distToWall(x, z));
    return [lerp(196, G.grass[0], t), lerp(186, G.grass[1], t), lerp(164, G.grass[2], t)];
  };

  /** @type {{poly:object, cls:string, y:(x:number,z:number)=>number, color:number[]|Function}[]} */
  const surfaces = [];
  const addSurfaces = (paths, cls, yFn, color, extra = {}) => {
    for (const poly of toPolygons(paths)) {
      if (Math.abs(polygonArea(poly.outer)) < 0.05) continue;
      surfaces.push({ poly, cls, y: yFn, color, ...extra, ...bboxOf(poly) });
    }
  };
  const bCentroids = bOut.map((b) => {
    let x = 0, z = 0;
    for (const q of b.poly.outer) { x += q.x; z += q.z; }
    return { x: x / b.poly.outer.length, z: z / b.poly.outer.length };
  });
  const bcGrid = new PolygonGrid(bCentroids.map((c) => ({ minX: c.x, maxX: c.x, minZ: c.z, maxZ: c.z, pts: [] })), 40);
  let lots = 0, naturals = 0;
  for (const t of tiles) {
    addSurfaces(t.asphalt, 'asphalt', (x, z) => carAt(x, z).y, U.asphalt);
    addSurfaces(t.paving, 'paving', (x, z) => anyAt(x, z).y + 0.02, [176, 168, 154]);
    addSurfaces(t.sidewalk, 'sidewalk', (x, z) => carAt(x, z).y + CURB, U.sidewalk);
    addSurfaces(t.water, 'water', (x, z) => demY(x, z) - 0.6, [70, 120, 140]);
    for (const poly of toPolygons(t.land)) {
      if (Math.abs(polygonArea(poly.outer)) < 0.05) continue;
      const bb = bboxOf(poly);
      const urban = bcGrid.query((bb.minX + bb.maxX) / 2, (bb.minZ + bb.maxZ) / 2, 60, []).length > 0;
      surfaces.push({ poly, cls: urban ? 'lot' : 'natural', y: landY, color: urban ? landColor : G.meadow, ...bb });
      if (urban) lots++; else naturals++;
    }
  }
  report.suolo = { lotti: lots, naturale: naturals, mare_m2: Math.round(seaArea), tile: tiles.length };
  tick('quote');

  // indice superfici (per bordi, edifici, navigazione)
  const surfGrid = new PolygonGrid(surfaces.map((s, i) => ({ minX: s.minX, maxX: s.maxX, minZ: s.minZ, maxZ: s.maxZ, pts: s.poly.outer, i })), 32);
  const _q = [];
  const surfaceAt = (x, z) => {
    for (const q of surfGrid.query(x, z, 0, _q)) {
      const s = surfaces[q.i];
      if (pointInPolygon(x, z, s.poly)) return s;
    }
    return null;
  };

  // ------------------------------------------------------------------ 6. mesh del suolo + bordi
  const ground = { pos: [], col: [], idx: [] };
  const walls = { pos: [], col: [], idx: [] };
  const pushV = (m, x, y, z, c) => { m.pos.push(x, y, z); m.col.push(c[0], c[1], c[2]); return m.pos.length / 3 - 1; };
  const noise = (x, z) => 1 + (unit(hashXZ(x, z, 3, 0.5)) - 0.5) * 0.07;
  let skirtCount = 0;
  const skirtColor = { asphalt: rgb(U.asphalt, 0.8), paving: [150, 142, 128], sidewalk: U.curb, lot: [170, 160, 140], natural: [150, 132, 100], water: [90, 110, 110] };
  for (const s of surfaces) {
    const fine = s.cls === 'asphalt' || s.cls === 'paving' || s.cls === 'sidewalk';
    const { pts, tris } = triangulate(s.poly, 2.5, fine ? 3.5 : s.cls === 'lot' ? 4.5 : 7);
    const base = ground.pos.length / 3;
    for (const p of pts) {
      const y = s.flat ?? s.y(p.x, p.z);
      const k = noise(p.x, p.z);
      pushV(ground, p.x, y, p.z, rgb(typeof s.color === 'function' ? s.color(p.x, p.z) : s.color, k));
    }
    for (let t = 0; t < tris.length; t += 3) {
      // triangoli verso l'alto (earcut non garantisce il verso)
      const a = pts[tris[t]], b = pts[tris[t + 1]], c = pts[tris[t + 2]];
      const cross = (b.z - a.z) * (c.x - a.x) - (b.x - a.x) * (c.z - a.z);
      if (cross > 0) ground.idx.push(base + tris[t], base + tris[t + 1], base + tris[t + 2]);
      else ground.idx.push(base + tris[t], base + tris[t + 2], base + tris[t + 1]);
    }
    // bordi verticali verso i vicini più bassi
    const rings = [s.poly.outer, ...s.poly.holes];
    for (const ring of rings) {
      const r = densify(ring, 2.5);
      const ccw = polygonArea(r) > 0;
      for (let i = 0; i < r.length; i++) {
        const a = r[i], b = r[(i + 1) % r.length];
        const L = Math.hypot(b.x - a.x, b.z - a.z);
        if (L < 1e-3) continue;
        // normale uscente dal poligono (per i buchi l'anello è già orientato al contrario)
        let nx = (b.z - a.z) / L, nz = -(b.x - a.x) / L;
        if (!ccw) { nx = -nx; nz = -nz; }
        let mx = (a.x + b.x) / 2 + nx * 0.3, mz = (a.z + b.z) / 2 + nz * 0.3;
        let nb = surfaceAt(mx, mz);
        if (nb === s) {
          // orientazione opposta a quella attesa: il vicino sta dall'altra parte
          mx = (a.x + b.x) / 2 - nx * 0.3; mz = (a.z + b.z) / 2 - nz * 0.3;
          nb = surfaceAt(mx, mz);
          if (nb === s) continue;
        }
        const ya = s.flat ?? s.y(a.x, a.z), yb = s.flat ?? s.y(b.x, b.z);
        let yn;
        if (nb) yn = nb.flat ?? nb.y(mx, mz);
        else if (insideBuilding(mx, mz)) continue; // l'edificio copre il bordo
        else {
          const outside = mx < box.minX || mx > box.maxX || mz < box.minZ || mz > box.maxZ;
          yn = Math.min(ya, yb) - (outside ? 2 : 0.4); // bordo del livello; fessure interne: bordino corto
        }
        const drop = (ya + yb) / 2 - yn;
        if (drop < 0.03) continue;
        const c = skirtColor[s.cls] || [140, 130, 120];
        const i0 = pushV(walls, a.x, ya, a.z, c), i1 = pushV(walls, b.x, yb, b.z, c);
        const i2 = pushV(walls, b.x, yb - drop - 0.05, b.z, rgb(c, 0.8)), i3 = pushV(walls, a.x, ya - drop - 0.05, a.z, rgb(c, 0.8));
        walls.idx.push(i0, i1, i2, i0, i2, i3);
        skirtCount++;
      }
    }
  }
  report.bordi = skirtCount;
  tick('mesh suolo');

  // ------------------------------------------------------------------ 7. edifici
  const bmesh = { pos: [], col: [], idx: [] };
  const wins = { pos: [], col: [], idx: [] };
  const footprints = [];
  const appIdx = appearance?.buildings || {};
  const lev = profile.levels;
  const WIN = [48, 58, 70];
  for (const b of bOut) {
    const ring = b.poly.outer;
    const ccw = polygonArea(ring) > 0;
    // quote: piano terra = superficie pubblica adiacente (porte a livello strada), piede = vicino più basso
    const around = [];
    let pub = -Infinity;
    for (const q of densify(ring, 3)) {
      let cx = 0, cz = 0;
      for (const r of ring) { cx += r.x; cz += r.z; }
      cx /= ring.length; cz /= ring.length;
      const dx = q.x - cx, dz = q.z - cz, dl = Math.hypot(dx, dz) || 1;
      const sx = q.x + (dx / dl) * 0.6, sz = q.z + (dz / dl) * 0.6;
      const s = surfaceAt(sx, sz);
      if (!s) continue;
      const y = s.flat ?? s.y(sx, sz);
      around.push(y);
      if (s.cls === 'sidewalk' || s.cls === 'paving' || s.cls === 'asphalt') pub = Math.max(pub, y);
    }
    if (!around.length) around.push(demY(ring[0].x, ring[0].z));
    around.sort((p, q) => p - q);
    const baseY = Number.isFinite(pub) ? pub : around[around.length >> 1];
    const bottom = Math.min(around[0], baseY) - 0.4;
    const app = appIdx[String(b.id)];
    const p = b.props;
    let h;
    if (p.height && +p.height > 2) h = +p.height;
    else if (p.levels && +p.levels > 0) h = +p.levels * 3.1 + 0.4;
    else {
      const floors = unit(hash32(`${b.id}:single`)) < lev.singleShare ? 1
        : Math.max(2, Math.round(lev.median * Math.exp((unit(hash32(`${b.id}:g`)) - 0.5) * 2 * Math.log(Math.max(1.05, lev.p90 / lev.median)))));
      h = floors * 3.1 + 0.4;
    }
    if (['garage', 'shed', 'carport', 'roof'].includes(p.building)) h = Math.min(h, 3);
    const wall = app?.wallColor || profile.walls.palette[hash32(`${b.id}:w`) % profile.walls.palette.length];
    const roofC = app?.roofColor || profile.roof.palette[hash32(`${b.id}:r`) % profile.roof.palette.length];
    const top = baseY + h;
    // muri
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const L = Math.hypot(c.x - a.x, c.z - a.z);
      if (L < 0.05) continue;
      const i0 = pushV(bmesh, a.x, bottom, a.z, rgb(wall, 0.72)), i1 = pushV(bmesh, c.x, bottom, c.z, rgb(wall, 0.72));
      const i2 = pushV(bmesh, c.x, top, c.z, wall), i3 = pushV(bmesh, a.x, top, a.z, wall);
      if (ccw) bmesh.idx.push(i0, i2, i1, i0, i3, i2); else bmesh.idx.push(i0, i1, i2, i0, i2, i3);
      // finestre, solo sui lati esterni (non sui muri in comune)
      let nx = (c.z - a.z) / L, nz = -(c.x - a.x) / L;
      if (!ccw) { nx = -nx; nz = -nz; }
      if (L < 2.6 || insideBuilding((a.x + c.x) / 2 + nx * 0.5, (a.z + c.z) / 2 + nz * 0.5)) continue;
      const floors = Math.max(1, Math.floor(h / 3.1));
      const n = Math.max(1, Math.floor((L - 0.8) / 3.1));
      const tx = (c.x - a.x) / L, tz = (c.z - a.z) / L;
      for (let f = 0; f < floors; f++) {
        const y0 = baseY + f * 3.1 + (f === 0 ? 0.9 : 1.0), y1 = y0 + (f === 0 ? 1.5 : 1.35);
        for (let k = 0; k < n; k++) {
          const s = (L / n) * (k + 0.5);
          const w2 = f === 0 && k === Math.floor(n / 2) ? 0.6 : 0.5; // porta al centro del piano terra
          const yy0 = f === 0 && k === Math.floor(n / 2) ? baseY + 0.02 : y0;
          const px = a.x + tx * s + nx * 0.04, pz = a.z + tz * s + nz * 0.04;
          const v0 = pushV(wins, px - tx * w2, yy0, pz - tz * w2, WIN), v1 = pushV(wins, px + tx * w2, yy0, pz + tz * w2, WIN);
          const v2 = pushV(wins, px + tx * w2, y1, pz + tz * w2, WIN), v3 = pushV(wins, px - tx * w2, y1, pz - tz * w2, WIN);
          if (ccw) wins.idx.push(v0, v2, v1, v0, v3, v2); else wins.idx.push(v0, v1, v2, v0, v2, v3);
        }
      }
    }
    // tetto: solaio + padiglione per piante quasi rettangolari
    const { pts, tris } = triangulate(b.poly, 1e9, 0);
    const base = bmesh.pos.length / 3;
    for (const q of pts) pushV(bmesh, q.x, top, q.z, roofC);
    for (let t = 0; t < tris.length; t += 3) {
      const a = pts[tris[t]], c1 = pts[tris[t + 1]], c2 = pts[tris[t + 2]];
      const cr = (c1.z - a.z) * (c2.x - a.x) - (c1.x - a.x) * (c2.z - a.z);
      if (cr > 0) bmesh.idx.push(base + tris[t], base + tris[t + 1], base + tris[t + 2]);
      else bmesh.idx.push(base + tris[t], base + tris[t + 2], base + tris[t + 1]);
    }
    const kind = app?.roofKind || (unit(hash32(`${b.id}:roof`)) < profile.roof.flatShare ? 'flat' : 'hip');
    if (kind !== 'flat' && ring.length <= 6) hipRoof(bmesh, ring, top, profile.roof.pitchDeg, roofC, pushV);
    footprints.push({ pts: ring.map((q) => [+q.x.toFixed(2), +q.z.toFixed(2)]), minY: +bottom.toFixed(2), maxY: +(top + 2).toFixed(2), baseY: +baseY.toFixed(2) });
  }
  tick('edifici mesh');

  // ------------------------------------------------------------------ 8. alberi (M1 minimo; M3 = biomi)
  const treeOut = [];
  const vegP = profile.vegetation;
  const addTree = (x, z, habitat, props = null) => {
    const s = surfaceAt(x, z);
    if (!s || !['lot', 'natural', 'paving'].includes(s.cls)) return;
    const y = s.flat ?? s.y(x, z);
    const sp = (props && speciesFromTags(props)) || pickSpecies(vegP, tempAt(profile.climate, y + originElev), habitat, unit(hashXZ(x, z, 9)));
    if (sp) treeOut.push([+x.toFixed(2), +y.toFixed(2), +z.toFixed(2), sp]);
  };
  for (const t of trees) addTree(t.x.x, t.x.z, 'urban', t.props);
  for (const v of vegPolys) {
    const poly = { outer: v.ring, holes: [] };
    const bb = bboxOf(poly);
    const hab = habitatOf(v.props.subtype || v.props.landuse || v.props.natural);
    const sp = hab === 'forest' ? 9 : hab === 'orchard' ? 7 : 14;
    const rand = mulberry32(hash32(v.props.id));
    for (let x = bb.minX; x < bb.maxX; x += sp) for (let z = bb.minZ; z < bb.maxZ; z += sp) {
      const jx = x + (rand() - 0.5) * sp * 0.6, jz = z + (rand() - 0.5) * sp * 0.6;
      if (pointInPolygon(jx, jz, poly)) addTree(jx, jz, hab);
    }
  }
  for (const s of surfaces) {
    if (s.cls !== 'lot') continue;
    const a = Math.abs(polygonArea(s.poly.outer));
    if (a < 300) continue;
    const rand = mulberry32(hash32(`${s.minX.toFixed(1)}:${s.minZ.toFixed(1)}`));
    const n = Math.min(12, Math.floor(a / 220));
    for (let k = 0; k < n * 4 && k < 60; k++) {
      const x = lerp(s.minX, s.maxX, rand()), z = lerp(s.minZ, s.maxZ, rand());
      if (pointInPolygon(x, z, s.poly) && distToWall(x, z) > 5) addTree(x, z, 'park');
    }
  }
  report.alberi = treeOut.length;
  tick('alberi');

  // ------------------------------------------------------------------ 9. verifica di navigabilità
  const nav = verifyNavigation(box, surfaceAt, insideBuilding);
  report.navigazione = nav.report;
  tick('navigazione');

  // ------------------------------------------------------------------ 10. vie per minimappa, chip e ricerca
  const roads = [...carWays, ...footWays].map((w) => ({
    pts: w.pts.map((p) => [+p.x.toFixed(1), +p.z.toFixed(1)]),
    w: +(w.hwClass ? w.hwClass * 2 : w.hw * 2).toFixed(1),
    hw: w.highway,
    name: w.name || null,
  }));

  report.totale_ms = Date.now() - T0;
  report.vertici = { suolo: ground.pos.length / 3, bordi: walls.pos.length / 3, edifici: bmesh.pos.length / 3, finestre: wins.pos.length / 3 };
  return { meshes: { ground, walls, buildings: bmesh, windows: wins }, footprints, trees: treeOut, roads, spawn: nav.spawn, report };
}

/** Tetto a padiglione sull'OBB della pianta (M2: straight skeleton per ogni forma). */
function hipRoof(m, ring, top, pitchDeg, color, pushV) {
  // OBB per rotazione dei lati
  let best = null;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    const L = Math.hypot(b.x - a.x, b.z - a.z);
    if (L < 1e-3) continue;
    const ux = (b.x - a.x) / L, uz = (b.z - a.z) / L;
    let mnU = Infinity, mxU = -Infinity, mnV = Infinity, mxV = -Infinity;
    for (const q of ring) {
      const u = q.x * ux + q.z * uz, v = -q.x * uz + q.z * ux;
      mnU = Math.min(mnU, u); mxU = Math.max(mxU, u); mnV = Math.min(mnV, v); mxV = Math.max(mxV, v);
    }
    const ar = (mxU - mnU) * (mxV - mnV);
    if (!best || ar < best.ar) best = { ar, ux, uz, mnU, mxU, mnV, mxV };
  }
  if (!best) return;
  const polyA = Math.abs(polygonArea(ring));
  if (polyA / best.ar < 0.85) return; // non abbastanza rettangolare: resta piatto (M2)
  const O = 0.35; // gronda
  let { mnU, mxU, mnV, mxV } = best;
  mnU -= O; mxU += O; mnV -= O; mxV += O;
  const lu = mxU - mnU, lv = mxV - mnV;
  const half = Math.min(lu, lv) / 2;
  const hgt = half * Math.tan((pitchDeg * Math.PI) / 180);
  const P = (u, v, y) => ({ x: u * best.ux - v * best.uz, z: u * best.uz + v * best.ux, y });
  const y0 = top + 0.34;
  const c = [P(mnU, mnV, y0), P(mxU, mnV, y0), P(mxU, mxV, y0), P(mnU, mxV, y0)];
  let r1, r2;
  if (lu >= lv) { const vm = (mnV + mxV) / 2; r1 = P(mnU + half, vm, y0 + hgt); r2 = P(mxU - half, vm, y0 + hgt); }
  else { const um = (mnU + mxU) / 2; r1 = P(um, mnV + half, y0 + hgt); r2 = P(um, mxV - half, y0 + hgt); }
  const faces = lu >= lv
    ? [[c[0], c[1], r2, r1], [c[1], c[2], r2], [c[2], c[3], r1, r2], [c[3], c[0], r1]]
    : [[c[0], c[1], r1], [c[1], c[2], r2, r1], [c[2], c[3], r2], [c[3], c[0], r1, r2]];
  for (const f of faces) {
    const ids = f.map((q, k) => pushV(m, q.x, q.y, q.z, k >= 2 && f.length === 4 ? color : rgb(color, 0.94)));
    const tri = (i, j, k) => {
      const a = f[i], b = f[j], d = f[k];
      const ny = (b.z - a.z) * (d.x - a.x) - (b.x - a.x) * (d.z - a.z);
      if (ny > 0) m.idx.push(ids[i], ids[j], ids[k]); else m.idx.push(ids[i], ids[k], ids[j]);
    };
    tri(0, 1, 2);
    if (f.length === 4) tri(0, 2, 3);
  }
}

/** Raster 1 m: celle percorribili, salti ≤ 0,45 m tra celle vicine; flood fill dal punto più centrale. */
function verifyNavigation(box, surfaceAt, insideBuilding) {
  const st = 2;
  const W = Math.ceil((box.maxX - box.minX) / st), H = Math.ceil((box.maxZ - box.minZ) / st);
  const h = new Float32Array(W * H).fill(NaN);
  const cls = new Uint8Array(W * H);
  const CL = { asphalt: 1, paving: 2, sidewalk: 3, lot: 4, natural: 5 };
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const x = box.minX + (i + 0.5) * st, z = box.minZ + (j + 0.5) * st;
    const s = surfaceAt(x, z);
    if (!s || !CL[s.cls]) continue;
    h[j * W + i] = s.flat ?? s.y(x, z);
    cls[j * W + i] = CL[s.cls];
  }
  // partenza: marciapiede più vicino al centro
  let start = -1, bestD = Infinity;
  for (let k = 0; k < W * H; k++) {
    if (cls[k] !== 3) continue;
    const i = k % W, j = (k / W) | 0;
    const d = (i - W / 2) ** 2 + (j - H / 2) ** 2;
    if (d < bestD) { bestD = d; start = k; }
  }
  const seen = new Uint8Array(W * H);
  if (start >= 0) {
    const stack = [start];
    seen[start] = 1;
    while (stack.length) {
      const k = stack.pop();
      const i = k % W, j = (k / W) | 0;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di, nj = j + dj;
        if (ni < 0 || nj < 0 || ni >= W || nj >= H) continue;
        const q = nj * W + ni;
        if (seen[q] || !cls[q]) continue;
        if (Math.abs(h[q] - h[k]) > 0.45) continue;
        seen[q] = 1;
        stack.push(q);
      }
    }
  }
  const tot = {}, reach = {};
  const names = ['', 'carreggiata', 'lastricato', 'marciapiede', 'lotti', 'naturale'];
  for (let k = 0; k < W * H; k++) {
    if (!cls[k]) continue;
    const n = names[cls[k]];
    tot[n] = (tot[n] || 0) + 1;
    if (seen[k]) reach[n] = (reach[n] || 0) + 1;
  }
  const pct = {};
  for (const n of Object.keys(tot)) pct[n] = `${Math.round(((reach[n] || 0) / tot[n]) * 100)}%`;
  const publicTot = (tot.carreggiata || 0) + (tot.lastricato || 0) + (tot.marciapiede || 0);
  const publicReach = (reach.carreggiata || 0) + (reach.lastricato || 0) + (reach.marciapiede || 0);
  const i = start % W, j = (start / W) | 0;
  return {
    spawn: start >= 0 ? { x: box.minX + (i + 0.5) * st, z: box.minZ + (j + 0.5) * st, y: h[start] } : { x: 0, z: 0, y: 0 },
    report: { raggiungibile: pct, spazioPubblicoRaggiungibile: `${((publicReach / Math.max(1, publicTot)) * 100).toFixed(1)}%` },
  };
}
