/**
 * StreetNetwork — compila le strade OSM in una rete percorribile.
 *
 * Invece di nastri drappati sul DEM con offset di centimetri, la città nasce dalle strade:
 *  1. grafo: le vie si spezzano nei nodi condivisi (incroci veri, non solo estremi);
 *  2. profilo: quota della carreggiata = DEM ricampionato ogni ≤4 m e LISCIATO (il DEM a 30 m
 *     è rumoroso; le strade vere no), agganciato alla quota del nodo agli incroci;
 *  3. incroci: poligono vero (intersezione dei bordi) con curve del cordolo ad arco;
 *  4. marciapiedi rialzati (+15 cm) dove la strada è urbana, che girano gli angoli;
 *  5. interrogazioni: surfaceAt(x,z) per camminare, carve(x,z,y) per scavare il terreno.
 * Tutto deterministico e senza three.js (testabile in Node).
 */
import { SegmentGrid, PolygonGrid } from '../spatial/grid.js';

export const CAR_HW = new Set([
  'motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'unclassified', 'residential',
  'living_street', 'service', 'motorway_link', 'trunk_link', 'primary_link', 'secondary_link',
  'tertiary_link', 'road', 'track',
]);
export const FOOT_HW = new Set(['footway', 'path', 'steps', 'pedestrian', 'cycleway']);
const SIDEWALK_HW = new Set(['primary', 'secondary', 'tertiary', 'unclassified', 'residential', 'living_street', 'primary_link', 'secondary_link', 'tertiary_link']);

const STEP = 4; // m, passo massimo di ricampionamento
const SMOOTH = 9; // m, semi-finestra di lisciatura del profilo
const NODE_BLEND = 12; // m, raccordo del profilo verso la quota del nodo

function curbRadius(hw) {
  if (['primary', 'secondary', 'trunk'].includes(hw)) return 5;
  if (hw === 'tertiary') return 4;
  if (hw === 'service' || hw === 'track') return 1.5;
  return 3;
}

const keyOf = (p) => `${Math.round(p.x * 10)}_${Math.round(p.z * 10)}`;

/** Ricampiona una polilinea (mantiene i vertici originali) e calcola l'ascissa curvilinea. */
function resample(pts) {
  const out = [{ x: pts[0].x, z: pts[0].z, s: 0 }];
  let s = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const L = Math.hypot(b.x - a.x, b.z - a.z);
    if (L < 1e-6) continue;
    const n = Math.max(1, Math.ceil(L / STEP));
    for (let k = 1; k <= n; k++) {
      const t = k / n;
      out.push({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, s: s + L * t });
    }
    s += L;
  }
  return out;
}

/** Punto e tangente all'ascissa s (interpolazione lineare). */
function pointAt(samples, s) {
  const n = samples.length;
  if (s <= 0) return { ...samples[0], ...tangentAt(samples, 0) };
  if (s >= samples[n - 1].s) return { ...samples[n - 1], ...tangentAt(samples, n - 2) };
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) {
    const m = (lo + hi) >> 1;
    if (samples[m].s <= s) lo = m; else hi = m;
  }
  const a = samples[lo], b = samples[hi];
  const t = (s - a.s) / Math.max(1e-9, b.s - a.s);
  return {
    x: a.x + (b.x - a.x) * t,
    z: a.z + (b.z - a.z) * t,
    y: a.y + (b.y - a.y) * t,
    s,
    ...tangentAt(samples, lo),
  };
}

function tangentAt(samples, i) {
  const a = samples[Math.max(0, Math.min(samples.length - 2, i))];
  const b = samples[Math.max(1, Math.min(samples.length - 1, i + 1))];
  const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
  return { tx: (b.x - a.x) / L, tz: (b.z - a.z) / L };
}

/** Intersezione di due rette p + s·u e q + t·v; null se quasi parallele. */
function intersect(p, u, q, v) {
  const den = u.x * v.z - u.z * v.x;
  if (Math.abs(den) < 1e-6) return null;
  const s = ((q.x - p.x) * v.z - (q.z - p.z) * v.x) / den;
  return { x: p.x + u.x * s, z: p.z + u.z * s };
}

function pointInPoly(x, z, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[j], b = pts[i];
    if ((b.z > z) !== (a.z > z) && x < ((a.x - b.x) * (z - b.z)) / (a.z - b.z) + b.x) inside = !inside;
  }
  return inside;
}

/**
 * @param {{pts:{x:number,z:number}[], width:number, highway:string, id:any}[]} ways vie carrabili (coordinate locali)
 * @param {(x:number,z:number)=>number} demY quota grezza del DEM
 * @param {{x:number,z:number}[]} buildingPts centroidi edifici (per decidere dove servono marciapiedi)
 * @param {object} opt
 */
export function compileStreetNetwork(ways, demY, buildingPts = [], opt = {}) {
  const SW = opt.sidewalkWidth ?? 1.6;
  const CURB = opt.curbHeight ?? 0.15;
  const CARVE_FLAT = opt.carveFlat ?? 7.5; // ≈ 1,5 × passo della griglia vicina

  // ---- 1. nodi condivisi → punti di taglio
  const usage = new Map();
  for (const w of ways) {
    w.pts.forEach((p, i) => {
      const k = keyOf(p);
      usage.set(k, (usage.get(k) || 0) + (i === 0 || i === w.pts.length - 1 ? 1 : 2));
    });
  }
  const nodes = new Map();
  const nodeFor = (p) => {
    const k = keyOf(p);
    let n = nodes.get(k);
    if (!n) nodes.set(k, (n = { key: k, x: p.x, z: p.z, y: 0, ends: [] }));
    return n;
  };

  const edges = [];
  for (const w of ways) {
    let start = 0;
    for (let i = 1; i < w.pts.length; i++) {
      const isCut = i === w.pts.length - 1 || usage.get(keyOf(w.pts[i])) >= 3;
      if (!isCut) continue;
      const pts = w.pts.slice(start, i + 1);
      start = i;
      let L = 0;
      for (let k = 0; k < pts.length - 1; k++) L += Math.hypot(pts[k + 1].x - pts[k].x, pts[k + 1].z - pts[k].z);
      if (L < 0.5) continue;
      const e = {
        id: edges.length,
        wayId: w.id,
        highway: w.highway,
        width: w.width,
        hw: w.width / 2,
        samples: resample(pts),
        a: nodeFor(pts[0]),
        b: nodeFor(pts[pts.length - 1]),
        clipA: 0,
        clipB: 0,
        sidewalk: false,
      };
      e.length = e.samples[e.samples.length - 1].s;
      edges.push(e);
    }
  }

  // ---- 2. quote: nodi dal DEM (media locale), profili lisciati e raccordati
  for (const n of nodes.values()) {
    let s = 0;
    for (const [dx, dz] of [[0, 0], [3, 0], [-3, 0], [0, 3], [0, -3]]) s += demY(n.x + dx, n.z + dz);
    n.y = s / 5;
  }
  for (const e of edges) {
    const raw = e.samples.map((p) => demY(p.x, p.z));
    const sm = e.samples.map((p, i) => {
      let acc = 0, wsum = 0;
      for (let j = i; j >= 0 && p.s - e.samples[j].s <= SMOOTH; j--) {
        const w = 1 - (p.s - e.samples[j].s) / (SMOOTH + 1e-6);
        acc += raw[j] * w; wsum += w;
      }
      for (let j = i + 1; j < e.samples.length && e.samples[j].s - p.s <= SMOOTH; j++) {
        const w = 1 - (e.samples[j].s - p.s) / (SMOOTH + 1e-6);
        acc += raw[j] * w; wsum += w;
      }
      return acc / wsum;
    });
    // Raccordo ai nodi applicato DOPO i tagli d'incrocio (passo 4b): qui solo il profilo lisciato
    e.samples.forEach((p, i) => { p.y = sm[i]; p.ySm = sm[i]; });
  }

  // ---- 3. marciapiedi: solo dove la strada è urbana (edifici entro 35 m)
  const bGrid = new PolygonGrid(buildingPts.map((p) => ({ x: p.x, z: p.z, minX: p.x, maxX: p.x, minZ: p.z, maxZ: p.z, pts: [] })), 40);
  const tmp = [];
  for (const e of edges) {
    if (!SIDEWALK_HW.has(e.highway) || e.width < 3.6) continue;
    let near = 0;
    for (const p of e.samples) if (bGrid.query(p.x, p.z, 35, tmp).length) near++;
    e.sidewalk = near / e.samples.length >= 0.35;
  }

  // ---- 4. incroci: estremi ordinati per angolo, angoli con arco del cordolo, distanze di taglio
  for (const e of edges) {
    for (const end of ['a', 'b']) {
      const node = e[end];
      const s = end === 'a' ? Math.min(3, e.length) : Math.max(0, e.length - 3);
      const p = pointAt(e.samples, s);
      let dx = p.x - node.x, dz = p.z - node.z;
      const L = Math.hypot(dx, dz) || 1;
      dx /= L; dz /= L;
      node.ends.push({ edge: e, end, d: { x: dx, z: dz }, ang: Math.atan2(dz, dx) });
    }
  }
  const junctions = [];
  for (const node of nodes.values()) {
    const ends = node.ends.sort((u, v) => u.ang - v.ang);
    node.degree = ends.length;
    if (ends.length < 2) continue;
    const corners = [];
    for (let i = 0; i < ends.length; i++) {
      const E = ends[i], F = ends[(i + 1) % ends.length];
      let gap = F.ang - E.ang;
      if (gap <= 0) gap += Math.PI * 2;
      const nE = { x: -E.d.z, z: E.d.x }; // lato di E rivolto verso F
      const nF = { x: F.d.z, z: -F.d.x }; // lato di F rivolto verso E
      const corner = { E, F, gap, arc: null };
      if (gap < (170 * Math.PI) / 180 && ends.length >= 2) {
        const pE = { x: node.x + nE.x * E.edge.hw, z: node.z + nE.z * E.edge.hw };
        const pF = { x: node.x + nF.x * F.edge.hw, z: node.z + nF.z * F.edge.hw };
        const C = intersect(pE, E.d, pF, F.d);
        if (C) {
          const phi = Math.acos(Math.max(-1, Math.min(1, E.d.x * F.d.x + E.d.z * F.d.z)));
          const tanHalf = Math.tan(phi / 2);
          let r = Math.min(curbRadius(E.edge.highway), curbRadius(F.edge.highway));
          let t = tanHalf > 1e-3 ? r / tanHalf : 0;
          const cE = (C.x - node.x) * E.d.x + (C.z - node.z) * E.d.z;
          const cF = (C.x - node.x) * F.d.x + (C.z - node.z) * F.d.z;
          const capE = E.edge.length * 0.45 - 0.3 - cE;
          const capF = F.edge.length * 0.45 - 0.3 - cF;
          t = Math.max(0, Math.min(t, capE, capF));
          r = t * tanHalf;
          const TA = { x: C.x + E.d.x * t, z: C.z + E.d.z * t };
          const TB = { x: C.x + F.d.x * t, z: C.z + F.d.z * t };
          const bis = { x: E.d.x + F.d.x, z: E.d.z + F.d.z };
          const bl = Math.hypot(bis.x, bis.z) || 1;
          const sinHalf = Math.sin(phi / 2);
          const centre = r > 0.05 && sinHalf > 1e-3
            ? { x: C.x + (bis.x / bl) * (r / sinHalf), z: C.z + (bis.z / bl) * (r / sinHalf) }
            : null;
          corner.arc = { C, TA, TB, r, centre, nE, nF };
          setClip(E, cE + t + 0.25);
          setClip(F, cF + t + 0.25);
        }
      }
      corners.push(corner);
    }
    junctions.push({ node, ends, corners });
  }
  // ---- 4b. raccordo: dentro l'incrocio la strada è ESATTAMENTE alla quota del nodo
  // (incrocio piano), poi torna al profilo lisciato in NODE_BLEND metri.
  for (const e of edges) {
    const sA = e.clipA, sB = e.length - e.clipB;
    const yA = e.a.y, yB = e.b.y;
    for (const p of e.samples) {
      let wa = p.s <= sA ? 1 : Math.max(0, 1 - (p.s - sA) / NODE_BLEND);
      let wb = p.s >= sB ? 1 : Math.max(0, 1 - (sB - p.s) / NODE_BLEND);
      const sum = wa + wb;
      if (sum > 1) { wa /= sum; wb /= sum; }
      p.y = p.ySm * (1 - wa - wb) + yA * wa + yB * wb;
    }
  }

  function setClip(end, v) {
    const cap = end.edge.length * 0.49;
    const val = Math.min(cap, Math.max(0, v));
    if (end.end === 'a') end.edge.clipA = Math.max(end.edge.clipA, val);
    else end.edge.clipB = Math.max(end.edge.clipB, val);
  }

  // ---- 5. geometria piana dei nastri tagliati (condivisa da mesh e query)
  for (const e of edges) {
    const s0 = e.clipA, s1 = e.length - e.clipB;
    e.visible = s1 - s0 > 0.2;
    if (!e.visible) continue;
    const inner = e.samples.filter((p) => p.s > s0 + 1e-3 && p.s < s1 - 1e-3);
    e.cut = [pointAt(e.samples, s0), ...inner, pointAt(e.samples, s1)];
    e.cut.forEach((p, i) => {
      // tangente mediata con miter limitato (come i nastri storici)
      const a = e.cut[Math.max(0, i - 1)], b = e.cut[Math.min(e.cut.length - 1, i + 1)];
      let tx = b.x - a.x, tz = b.z - a.z;
      const L = Math.hypot(tx, tz) || 1;
      tx /= L; tz /= L;
      p.nx = -tz; p.nz = tx;
      let scale = 1;
      if (i > 0 && i < e.cut.length - 1) {
        const px = e.cut[i].x - e.cut[i - 1].x, pz = e.cut[i].z - e.cut[i - 1].z;
        const pl = Math.hypot(px, pz) || 1;
        const dot = p.nx * (-pz / pl) + p.nz * (px / pl);
        if (Math.abs(dot) > 0.15) scale = Math.min(1 / dot, 2.8);
      }
      p.miter = scale;
    });
  }

  // Estremi dei nastri per gli incroci: lato verso l'estremo successivo/precedente in senso antiorario
  const endInfo = (end, off) => {
    const e = end.edge;
    const p = end.end === 'a' ? e.cut[0] : e.cut[e.cut.length - 1];
    const sideSign = end.end === 'a' ? 1 : -1; // +n = sinistra di marcia
    return {
      next: { x: p.x + p.nx * off * p.miter * sideSign, z: p.z + p.nz * off * p.miter * sideSign, y: p.y },
      prev: { x: p.x - p.nx * off * p.miter * sideSign, z: p.z - p.nz * off * p.miter * sideSign, y: p.y },
    };
  };

  for (const J of junctions) {
    const node = J.node;
    const visibleEnds = J.ends.filter((en) => en.edge.visible);
    if (visibleEnds.length < 2 && J.ends.length >= 2) {
      // tutte le vie assorbite nell'incrocio: niente poligono (evita artefatti su micro-segmenti)
      J.poly = null;
      continue;
    }
    const ring = [];
    const patches = [];
    for (const corner of J.corners) {
      const { E, F } = corner;
      if (!E.edge.visible || !F.edge.visible) continue;
      const eI = endInfo(E, E.edge.hw), fI = endInfo(F, F.edge.hw);
      const curve = [eI.next];
      const outerCurve = [];
      const eO = endInfo(E, E.edge.hw + SW), fO = endInfo(F, F.edge.hw + SW);
      const arc = corner.arc;
      if (arc && arc.centre && arc.r > 0.3) {
        const a0 = Math.atan2(arc.TA.z - arc.centre.z, arc.TA.x - arc.centre.x);
        let a1 = Math.atan2(arc.TB.z - arc.centre.z, arc.TB.x - arc.centre.x);
        let da = a1 - a0;
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        const k = Math.max(2, Math.ceil(Math.abs(da) / (Math.PI / 10)));
        for (let j = 0; j <= k; j++) {
          const a = a0 + (da * j) / k;
          curve.push({ x: arc.centre.x + Math.cos(a) * arc.r, z: arc.centre.z + Math.sin(a) * arc.r, y: node.y });
          outerCurve.push({ x: arc.centre.x + Math.cos(a) * (arc.r + SW), z: arc.centre.z + Math.sin(a) * (arc.r + SW), y: node.y });
        }
      } else if (arc) {
        curve.push({ x: arc.C.x, z: arc.C.z, y: node.y });
        outerCurve.push({ x: arc.C.x + (arc.nE.x + arc.nF.x) * SW, z: arc.C.z + (arc.nE.z + arc.nF.z) * SW, y: node.y });
      }
      curve.push(fI.prev);
      ring.push(...curve);
      if (E.edge.sidewalk && F.edge.sidewalk && corner.gap < Math.PI * 1.9) {
        patches.push({ inner: curve, outer: [eO.next, ...outerCurve, fO.prev], y: node.y });
      }
    }
    if (ring.length >= 3) {
      J.poly = ring;
      J.patches = patches;
    }
  }

  // ---- 6. indici per le interrogazioni
  const segs = [];
  for (const e of edges) {
    if (!e.visible) continue;
    for (let i = 0; i < e.cut.length - 1; i++) {
      const a = e.cut[i], b = e.cut[i + 1];
      segs.push({ ax: a.x, az: a.z, ay: a.y, bx: b.x, bz: b.z, by: b.y, hw: e.hw, sw: e.sidewalk, edge: e });
    }
  }
  // Nodi come segmenti degeneri: scavo del terreno anche al centro degli incroci
  for (const J of junctions) {
    if (!J.poly) continue;
    let r = 0;
    for (const p of J.poly) r = Math.max(r, Math.hypot(p.x - J.node.x, p.z - J.node.z));
    segs.push({ ax: J.node.x, az: J.node.z, ay: J.node.y, bx: J.node.x, bz: J.node.z, by: J.node.y, hw: r, sw: false, node: J.node });
  }
  const segGrid = new SegmentGrid(segs, 30);

  const polys = [];
  for (const J of junctions) {
    if (!J.poly) continue;
    polys.push(bboxOf({ pts: J.poly, y: J.node.y, kind: 'junction', centre: J.node }));
    for (const P of J.patches || []) polys.push(bboxOf({ pts: [...P.inner, ...[...P.outer].reverse()], y: P.y + CURB, kind: 'sidewalk' }));
  }
  const polyGrid = new PolygonGrid(polys, 24);

  function nearestSeg(x, z, maxDist = Infinity) {
    let info = null;
    segGrid.nearest(x, z, (id) => {
      const s = segs[id];
      const abx = s.bx - s.ax, abz = s.bz - s.az;
      const ab2 = abx * abx + abz * abz;
      let t = ab2 > 1e-9 ? ((x - s.ax) * abx + (z - s.az) * abz) / ab2 : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const d = Math.hypot(x - (s.ax + abx * t), z - (s.az + abz * t));
      if (!info || d < info.d || (d === info.d && id < info.id)) info = { s, t, d, id };
      return d;
    }, maxDist);
    return info && info.d <= maxDist ? info : null;
  }

  const _q = [];
  /** Superficie percorribile: {y, kind} oppure null (→ terreno). */
  function surfaceAt(x, z) {
    for (const p of polyGrid.query(x, z, 0, _q)) {
      if (p.kind === 'sidewalk' && pointInPoly(x, z, p.pts)) return { y: p.y, kind: 'sidewalk' };
    }
    for (const p of _q) {
      if (p.kind !== 'junction') continue;
      const y = fanHeight(p, x, z);
      if (y != null) return { y, kind: 'road' };
    }
    const n = nearestSeg(x, z, 30);
    if (!n || n.s.node) return null;
    const y = n.s.ay + (n.s.by - n.s.ay) * n.t;
    if (n.d <= n.s.hw) return { y, kind: 'road' };
    if (n.s.sw && n.d <= n.s.hw + SW) return { y: y + CURB, kind: 'sidewalk' };
    return null;
  }

  /** Terreno scavato sotto strade e marciapiedi, con raccordo laterale. */
  function carve(x, z, y0) {
    const n = nearestSeg(x, z, 36);
    if (!n) return y0;
    const sy = n.s.ay + (n.s.by - n.s.ay) * n.t;
    // Un triangolo di terreno interpola tra vertici lontani fino a passo·√2: la fascia piatta
    // deve coprirli tutti, altrimenti un vertice alto fuori fascia "solleva" il terreno sull'asfalto.
    const corridor = n.s.hw + (n.s.sw ? SW : 0) + 0.6 + CARVE_FLAT;
    const top = sy - 0.3; // margine: su strade in pendenza i vertici vicini vedono quote diverse del profilo
    if (n.d <= corridor) return Math.min(y0, top);
    const taper = n.d - corridor;
    if (taper < 10) return Math.min(y0, top + taper * 0.6);
    return y0;
  }

  return {
    edges,
    nodes: [...nodes.values()],
    junctions,
    SW,
    CURB,
    surfaceAt,
    carve,
    nearestSeg,
    pointAt,
    stats: {
      edges: edges.length,
      visibleEdges: edges.filter((e) => e.visible).length,
      junctions: junctions.filter((j) => j.poly).length,
      sidewalkEdges: edges.filter((e) => e.sidewalk).length,
      samples: edges.reduce((s, e) => s + (e.cut?.length || 0), 0),
    },
  };
}

/** Quota nel ventaglio d'incrocio (stessi triangoli della mesh), null se fuori. */
function fanHeight(p, x, z) {
  const c = p.centre;
  const r = p.pts;
  for (let i = 0; i < r.length; i++) {
    const a = r[i], b = r[(i + 1) % r.length];
    const d = (a.z - b.z) * (c.x - b.x) + (b.x - a.x) * (c.z - b.z);
    if (Math.abs(d) < 1e-9) continue;
    const l1 = ((a.z - b.z) * (x - b.x) + (b.x - a.x) * (z - b.z)) / d;
    const l2 = ((b.z - c.z) * (x - b.x) + (c.x - b.x) * (z - b.z)) / d;
    const l3 = 1 - l1 - l2;
    if (l1 >= -1e-6 && l2 >= -1e-6 && l3 >= -1e-6) return l1 * c.y + l2 * (a.y ?? c.y) + l3 * (b.y ?? c.y);
  }
  return null;
}

function bboxOf(p) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const q of p.pts) {
    if (q.x < minX) minX = q.x;
    if (q.x > maxX) maxX = q.x;
    if (q.z < minZ) minZ = q.z;
    if (q.z > maxZ) maxZ = q.z;
  }
  return Object.assign(p, { minX, maxX, minZ, maxZ });
}
