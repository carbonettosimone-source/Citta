/**
 * Primitive del compilatore di livelli: poligoni (Clipper, interi in cm),
 * triangolazione (earcut) e raffinamento conforme dei triangoli.
 * Solo compilazione (Node): il browser riceve geometria già pronta.
 */
import ClipperLib from 'clipper-lib';
import earcut from 'earcut';

export const C = ClipperLib;
export const S = 100; // 1 unità Clipper = 1 cm

export const toPath = (pts) => pts.map((p) => ({ X: Math.round(p.x * S), Y: Math.round(p.z * S) }));

export function offset(paths, delta, join = C.JoinType.jtRound) {
  const co = new C.ClipperOffset(2, 0.15 * S);
  co.AddPaths(paths, join, C.EndType.etClosedPolygon);
  const out = new C.Paths();
  co.Execute(out, delta * S);
  return out;
}

/** Linea spessa (capsula) di semi-larghezza hw. */
export function strokePath(pts, hw) {
  if (pts.length < 2 || hw <= 0) return [];
  const co = new C.ClipperOffset(2, 0.15 * S);
  co.AddPath(toPath(pts), C.JoinType.jtRound, C.EndType.etOpenRound);
  const out = new C.Paths();
  co.Execute(out, hw * S);
  return out;
}

export function boolOp(a, b, op) {
  const c = new C.Clipper();
  if (a?.length) c.AddPaths(a, C.PolyType.ptSubject, true);
  if (b?.length) c.AddPaths(b, C.PolyType.ptClip, true);
  const out = new C.Paths();
  c.Execute(op, out, C.PolyFillType.pftNonZero, C.PolyFillType.pftNonZero);
  return out;
}
export const union = (a, b = null) => boolOp(a, b, C.ClipType.ctUnion);
export const diff = (a, b) => boolOp(a, b, C.ClipType.ctDifference);
export const inter = (a, b) => boolOp(a, b, C.ClipType.ctIntersection);

/** Chiusura morfologica: arrotonda gli angoli concavi (raccordi dei cordoli). */
export const close = (p, r) => offset(offset(p, r), -r);
/** Apertura morfologica: elimina schegge più strette di 2r. */
export const open = (p, r) => offset(offset(p, -r), r);

export function area(paths) {
  let a = 0;
  for (const p of paths) a += C.Clipper.Area(p);
  return Math.abs(a) / (S * S);
}

/** Paths → poligoni con buchi [{outer:[{x,z}], holes:[[{x,z}]]}] in metri. */
export function toPolygons(paths) {
  const c = new C.Clipper();
  c.AddPaths(paths, C.PolyType.ptSubject, true);
  const tree = new C.PolyTree();
  c.Execute(C.ClipType.ctUnion, tree, C.PolyFillType.pftNonZero, C.PolyFillType.pftNonZero);
  const ex = C.JS.PolyTreeToExPolygons(tree);
  const m = (path) => path.map((q) => ({ x: q.X / S, z: q.Y / S }));
  return ex.map((e) => ({ outer: m(e.outer), holes: e.holes.map(m) }));
}

export function polygonArea(ring) {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) a += (ring[j].x + ring[i].x) * (ring[j].z - ring[i].z);
  return a / 2;
}

/** Densifica un anello: punti ogni ≤ step metri (divisione uniforme: lati condivisi → stessi punti). */
export function densify(ring, step) {
  const out = [];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    out.push(a);
    const L = Math.hypot(b.x - a.x, b.z - a.z);
    const n = Math.ceil(L / step);
    for (let k = 1; k < n; k++) out.push({ x: a.x + ((b.x - a.x) * k) / n, z: a.z + ((b.z - a.z) * k) / n });
  }
  return out;
}

/**
 * Triangola un poligono con buchi e raffina finché nessun lato interno supera maxEdge.
 * I lati di bordo (già densificati sotto maxEdge) non vengono mai spezzati → niente crepe
 * tra poligoni confinanti.
 * @returns {{pts:{x:number,z:number}[], tris:number[]}}
 */
export function triangulate(poly, boundaryStep, maxEdge) {
  const rings = [densify(poly.outer, boundaryStep), ...poly.holes.map((h) => densify(h, boundaryStep))];
  const flat = [];
  const holes = [];
  const pts = [];
  for (let r = 0; r < rings.length; r++) {
    if (r > 0) holes.push(pts.length);
    for (const p of rings[r]) {
      flat.push(p.x, p.z);
      pts.push({ x: p.x, z: p.z });
    }
  }
  let tris = earcut(flat, holes, 2);
  if (!maxEdge) return { pts, tris };
  const mid = new Map();
  const midpoint = (a, b) => {
    const k = a < b ? `${a}_${b}` : `${b}_${a}`;
    let m = mid.get(k);
    if (m == null) {
      m = pts.length;
      pts.push({ x: (pts[a].x + pts[b].x) / 2, z: (pts[a].z + pts[b].z) / 2 });
      mid.set(k, m);
    }
    return m;
  };
  const len = (a, b) => Math.hypot(pts[a].x - pts[b].x, pts[a].z - pts[b].z);
  for (let pass = 0; pass < 8; pass++) {
    let changed = false;
    const next = [];
    for (let t = 0; t < tris.length; t += 3) {
      const a = tris[t], b = tris[t + 1], c = tris[t + 2];
      const sab = len(a, b) > maxEdge, sbc = len(b, c) > maxEdge, sca = len(c, a) > maxEdge;
      const n = sab + sbc + sca;
      if (!n) { next.push(a, b, c); continue; }
      changed = true;
      if (n === 3) {
        const ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a);
        next.push(a, ab, ca, ab, b, bc, ca, bc, c, ab, bc, ca);
      } else if (n === 1) {
        if (sab) { const m = midpoint(a, b); next.push(a, m, c, m, b, c); }
        else if (sbc) { const m = midpoint(b, c); next.push(a, b, m, a, m, c); }
        else { const m = midpoint(c, a); next.push(a, b, m, m, b, c); }
      } else {
        // due lati: ruoto in modo che il lato NON diviso sia (c,a)
        let [p, q, r] = [a, b, c];
        if (!sab) [p, q, r] = [b, c, a];
        else if (!sbc) [p, q, r] = [c, a, b];
        const m1 = midpoint(p, q), m2 = midpoint(q, r);
        next.push(p, m1, r, m1, q, m2, m1, m2, r);
      }
    }
    tris = next;
    if (!changed) break;
  }
  return { pts, tris };
}

/** Punto nel poligono con buchi. */
export function pointInPolygon(x, z, poly) {
  const inRing = (r) => {
    let inside = false;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const a = r[j], b = r[i];
      if ((b.z > z) !== (a.z > z) && x < ((a.x - b.x) * (z - b.z)) / (a.z - b.z) + b.x) inside = !inside;
    }
    return inside;
  };
  if (!inRing(poly.outer)) return false;
  for (const h of poly.holes) if (inRing(h)) return false;
  return true;
}

export function bboxOf(poly) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const p of poly.outer) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.z < minZ) minZ = p.z;
    if (p.z > maxZ) maxZ = p.z;
  }
  return { minX, maxX, minZ, maxZ };
}

/** Douglas-Peucker su polilinea. */
export function simplifyLine(pts, tol) {
  if (pts.length <= 2) return pts.slice();
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i0, i1] = stack.pop();
    const a = pts[i0], b = pts[i1];
    const L = Math.hypot(b.x - a.x, b.z - a.z) || 1e-9;
    let best = -1, bi = -1;
    for (let i = i0 + 1; i < i1; i++) {
      const d = Math.abs((b.x - a.x) * (a.z - pts[i].z) - (a.x - pts[i].x) * (b.z - a.z)) / L;
      if (d > best) { best = d; bi = i; }
    }
    if (best > tol) {
      keep[bi] = 1;
      stack.push([i0, bi], [bi, i1]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}
