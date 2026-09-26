/**
 * Indici spaziali a griglia uniforme.
 * - SegmentGrid: segmento più vicino con ricerca ad anelli (risultato IDENTICO alla forza bruta,
 *   incluso il tie-break per ordine di inserimento).
 * - PolygonGrid: poligoni candidati vicino a un punto (collisione cerchio-poligono).
 */

const key = (i, j) => i * 73856093 ^ j * 19349663;

export class SegmentGrid {
  /**
   * @param {{ax:number,az:number,bx:number,bz:number}[]} segs in ordine globale (l'indice è il tie-break)
   * @param {number} cell lato cella in metri
   */
  constructor(segs, cell = 40) {
    this.segs = segs;
    this.cell = cell;
    this.cells = new Map();
    let minI = Infinity, maxI = -Infinity, minJ = Infinity, maxJ = -Infinity;
    segs.forEach((s, id) => {
      const i0 = Math.floor(Math.min(s.ax, s.bx) / cell), i1 = Math.floor(Math.max(s.ax, s.bx) / cell);
      const j0 = Math.floor(Math.min(s.az, s.bz) / cell), j1 = Math.floor(Math.max(s.az, s.bz) / cell);
      minI = Math.min(minI, i0); maxI = Math.max(maxI, i1); minJ = Math.min(minJ, j0); maxJ = Math.max(maxJ, j1);
      for (let i = i0; i <= i1; i++) {
        for (let j = j0; j <= j1; j++) {
          // Scarta celle che il segmento non tocca davvero (diagonali lunghe)
          if (i1 > i0 && j1 > j0 && !segTouchesCell(s, i * cell, j * cell, cell)) continue;
          const k = key(i, j);
          let arr = this.cells.get(k);
          if (!arr) this.cells.set(k, (arr = []));
          arr.push(id);
        }
      }
    });
    this.bounds = { minI, maxI, minJ, maxJ };
    this.stamp = new Uint32Array(segs.length);
    this.query = 0;
  }

  /**
   * Visita i segmenti in ordine di anelli; `visit(id)` restituisce la distanza del segmento.
   * Si ferma quando nessun segmento non visitato può essere più vicino del migliore.
   * @returns {{id:number, dist:number}|null}
   */
  nearest(x, z, visit, maxDist = Infinity) {
    if (!this.segs.length) return null;
    const c = this.cell;
    const ci = Math.floor(x / c), cj = Math.floor(z / c);
    const { minI, maxI, minJ, maxJ } = this.bounds;
    const maxRing = Math.max(Math.abs(ci - minI), Math.abs(ci - maxI), Math.abs(cj - minJ), Math.abs(cj - maxJ)) + 1;
    const stamp = this.stamp;
    const q = ++this.query;
    let best = null;
    // Gli anelli che non raggiungono il bounding box della griglia sono vuoti per costruzione
    const r0 = Math.max(0, minI - ci, ci - maxI, minJ - cj, cj - maxJ);
    const visitCell = (i, j) => {
      if (i < minI || i > maxI || j < minJ || j > maxJ) return;
      const arr = this.cells.get(key(i, j));
      if (!arr) return;
      for (const id of arr) {
        if (stamp[id] === q) continue;
        stamp[id] = q;
        const d = visit(id);
        if (!best || d < best.dist || (d === best.dist && id < best.id)) best = { id, dist: d };
      }
    };
    for (let r = r0; r <= maxRing; r++) {
      // Solo il perimetro dell'anello: O(r) celle, non O(r²)
      if (r === 0) visitCell(ci, cj);
      else {
        for (let i = ci - r; i <= ci + r; i++) { visitCell(i, cj - r); visitCell(i, cj + r); }
        for (let j = cj - r + 1; j <= cj + r - 1; j++) { visitCell(ci - r, j); visitCell(ci + r, j); }
      }
      // Tutto ciò che non è ancora visitato sta oltre il blocco (2r+1)² → distanza ≥ r·cell
      const bound = Math.min(x - (ci - r) * c, (ci + r + 1) * c - x, z - (cj - r) * c, (cj + r + 1) * c - z);
      if (best && best.dist <= bound) break;
      if (bound > maxDist) break; // nessun segmento non visitato può stare entro maxDist
    }
    return best && best.dist <= maxDist ? best : maxDist === Infinity ? best : null;
  }
}

function segTouchesCell(s, x0, z0, cell) {
  // Separating axis semplificato: il segmento interseca il rettangolo espanso di un epsilon
  const e = 1e-6;
  const x1 = x0 + cell, z1 = z0 + cell;
  let t0 = 0, t1 = 1;
  const dx = s.bx - s.ax, dz = s.bz - s.az;
  const clip = (p, q) => {
    if (Math.abs(p) < 1e-12) return q >= -e;
    const t = q / p;
    if (p < 0) { if (t > t1) return false; if (t > t0) t0 = t; }
    else { if (t < t0) return false; if (t < t1) t1 = t; }
    return true;
  };
  return clip(-dx, s.ax - (x0 - e)) && clip(dx, x1 + e - s.ax) && clip(-dz, s.az - (z0 - e)) && clip(dz, z1 + e - s.az);
}

export class PolygonGrid {
  /** @param {{pts:{x:number,z:number}[], minX:number,maxX:number,minZ:number,maxZ:number}[]} polys */
  constructor(polys, cell = 32) {
    this.polys = polys;
    this.cell = cell;
    this.cells = new Map();
    polys.forEach((p, id) => {
      for (let i = Math.floor(p.minX / cell); i <= Math.floor(p.maxX / cell); i++) {
        for (let j = Math.floor(p.minZ / cell); j <= Math.floor(p.maxZ / cell); j++) {
          const k = key(i, j);
          let arr = this.cells.get(k);
          if (!arr) this.cells.set(k, (arr = []));
          arr.push(id);
        }
      }
    });
  }

  /** Poligoni che possono intersecare il cerchio (x,z,r). */
  query(x, z, r, out = []) {
    out.length = 0;
    const c = this.cell;
    const seen = new Set();
    for (let i = Math.floor((x - r) / c); i <= Math.floor((x + r) / c); i++) {
      for (let j = Math.floor((z - r) / c); j <= Math.floor((z + r) / c); j++) {
        const arr = this.cells.get(key(i, j));
        if (!arr) continue;
        for (const id of arr) {
          if (seen.has(id)) continue;
          seen.add(id);
          const p = this.polys[id];
          if (x + r < p.minX || x - r > p.maxX || z + r < p.minZ || z - r > p.maxZ) continue;
          out.push(p);
        }
      }
    }
    return out;
  }
}

/** Cerchio vs poligono semplice: dentro, oppure a distanza < r da un lato. */
export function circleHitsPolygon(x, z, r, pts) {
  let inside = false;
  const r2 = r * r;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[j], b = pts[i];
    if ((b.z > z) !== (a.z > z) && x < ((a.x - b.x) * (z - b.z)) / (a.z - b.z) + b.x) inside = !inside;
    const abx = b.x - a.x, abz = b.z - a.z;
    const ab2 = abx * abx + abz * abz;
    let t = ab2 > 1e-12 ? ((x - a.x) * abx + (z - a.z) * abz) / ab2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const dx = x - (a.x + abx * t), dz = z - (a.z + abz * t);
    if (dx * dx + dz * dz < r2) return true;
  }
  return inside;
}
