/**
 * Quote della rete viaria per il compilatore.
 * - ogni via ricampionata ogni ≤3 m, quota = DEM lisciato lungo l'asse (±10 m);
 * - i punti condivisi da più vie (incroci) ricevono UNA quota (media), e ogni via viene
 *   corretta con un offset interpolato linearmente tra i suoi nodi → continuità esatta;
 * - query: profileAt(x,z) → quota della via più vicina (con semi-larghezza e classe).
 */
import { SegmentGrid } from '../engine/spatial/grid.js';

const STEP = 3;
const SMOOTH = 10;
const key = (p) => `${Math.round(p.x * 10)}_${Math.round(p.z * 10)}`;

function resample(pts) {
  const out = [{ x: pts[0].x, z: pts[0].z, s: 0, orig: true }];
  let s = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const L = Math.hypot(b.x - a.x, b.z - a.z);
    if (L < 1e-6) continue;
    const n = Math.max(1, Math.ceil(L / STEP));
    for (let k = 1; k <= n; k++) out.push({ x: a.x + ((b.x - a.x) * k) / n, z: a.z + ((b.z - a.z) * k) / n, s: s + (L * k) / n, orig: k === n });
    s += L;
  }
  return out;
}

/**
 * @param {{pts:{x:number,z:number}[], kind:'car'|'foot', id:any}[]} ways
 * @param {(x:number,z:number)=>number} demY
 */
export function buildProfiles(ways, demY) {
  const lines = ways.map((w) => ({ ...w, samples: resample(w.pts) }));
  // uso dei punti originali: ≥2 vie (o due volte nella stessa) = nodo
  const use = new Map();
  for (const l of lines) for (const p of l.samples) if (p.orig) use.set(key(p), (use.get(key(p)) || 0) + 1);
  // lisciatura lungo l'asse
  for (const l of lines) {
    const raw = l.samples.map((p) => demY(p.x, p.z));
    l.samples.forEach((p, i) => {
      let acc = 0, ws = 0;
      for (let j = i; j >= 0 && p.s - l.samples[j].s <= SMOOTH; j--) { const w = 1 - (p.s - l.samples[j].s) / (SMOOTH + 1e-6); acc += raw[j] * w; ws += w; }
      for (let j = i + 1; j < l.samples.length && l.samples[j].s - p.s <= SMOOTH; j++) { const w = 1 - (l.samples[j].s - p.s) / (SMOOTH + 1e-6); acc += raw[j] * w; ws += w; }
      p.y = acc / ws;
    });
  }
  // quota unica per nodo = media dei profili che ci passano
  const nodeSum = new Map();
  for (const l of lines) for (const p of l.samples) {
    if (!p.orig || (use.get(key(p)) || 0) < 2) continue;
    const k = key(p);
    const v = nodeSum.get(k) || { s: 0, n: 0 };
    v.s += p.y; v.n++;
    nodeSum.set(k, v);
  }
  // correzione: offset ai nodi, interpolato lungo la via
  for (const l of lines) {
    const anchors = [];
    l.samples.forEach((p, i) => {
      const v = p.orig ? nodeSum.get(key(p)) : null;
      if (v) anchors.push({ i, off: v.s / v.n - p.y });
    });
    if (!anchors.length) continue;
    l.samples.forEach((p, i) => {
      let a = null, b = null;
      for (const an of anchors) { if (an.i <= i) a = an; if (an.i >= i && !b) b = an; }
      let off;
      if (a && b && a !== b) {
        const t = (p.s - l.samples[a.i].s) / Math.max(1e-6, l.samples[b.i].s - l.samples[a.i].s);
        off = a.off + (b.off - a.off) * t;
      } else off = (a || b).off;
      p.y += off;
    });
  }

  const segs = [];
  for (const l of lines) {
    for (let i = 0; i < l.samples.length - 1; i++) {
      const a = l.samples[i], b = l.samples[i + 1];
      segs.push({ ax: a.x, az: a.z, ay: a.y, bx: b.x, bz: b.z, by: b.y, line: l, i });
    }
  }
  const grid = new SegmentGrid(segs, 30);
  /**
   * @param {'car'|'foot'|null} kind filtro sul tipo di via
   * @returns {{y:number, d:number, line:object, seg:object}|null}
   */
  function profileAt(x, z, kind = null, maxDist = 60) {
    let best = null;
    grid.nearest(x, z, (id) => {
      const s = segs[id];
      if (kind && s.line.kind !== kind) return Infinity;
      const abx = s.bx - s.ax, abz = s.bz - s.az;
      const L = abx * abx + abz * abz;
      let t = L > 1e-9 ? ((x - s.ax) * abx + (z - s.az) * abz) / L : 0;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const d = Math.hypot(x - s.ax - abx * t, z - s.az - abz * t);
      if (!best || d < best.d) best = { y: s.ay + (s.by - s.ay) * t, d, line: s.line, seg: s, t };
      return d;
    }, maxDist);
    return best;
  }
  return { lines, profileAt, nodes: nodeSum.size };
}
