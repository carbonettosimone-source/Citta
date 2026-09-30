/**
 * Percorsi sul grafo stradale (streets.json): vie per l'auto, vie + pedonali + sentieri a piedi.
 * Nodi = vertici dei nastri (ogni ~2,5 m); due vie si toccano dove condividono il vertice.
 * A* con un heap binario; la destinazione è il nodo più vicino al punto toccato.
 */
const key = (x, z) => `${x.toFixed(1)},${z.toFixed(1)}`;

export function createNav(streets) {
  const X = [], Z = [], adj = [], car = [], ids = new Map();
  const node = (x, z) => {
    const k = key(x, z);
    let i = ids.get(k);
    if (i == null) { i = X.length; ids.set(k, i); X.push(x); Z.push(z); adj.push([]); car.push(false); }
    return i;
  };
  const addLine = (p, forCar, half) => {
    let prev = -1;
    for (let i = 0; i < p.length; i += 2) {
      const n = node(p[i], p[i + 1]);
      if (forCar) car[n] = true;
      if (prev >= 0 && prev !== n) {
        const d = Math.hypot(X[n] - X[prev], Z[n] - Z[prev]);
        adj[prev].push([n, d, forCar, half]); adj[n].push([prev, d, forCar, half]);
      }
      prev = n;
    }
  };
  for (const r of streets.roads || []) addLine(r.p, r.k !== 'pedestrian', r.cw / 2);
  for (const q of streets.paths || []) addLine(q.p, false, q.w / 2);

  // griglia per il nodo più vicino
  const CELL = 20, grid = new Map();
  X.forEach((x, i) => { const k = `${Math.floor(x / CELL)},${Math.floor(Z[i] / CELL)}`; let l = grid.get(k); if (!l) grid.set(k, (l = [])); l.push(i); });
  function nearest(x, z, forCar) {
    let best = -1, bd = Infinity;
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    for (let r = 0; r < 12 && best < 0; r++) {
      for (let i = -r; i <= r; i++) for (let j = -r; j <= r; j++) {
        if (Math.max(Math.abs(i), Math.abs(j)) !== r) continue;
        for (const n of grid.get(`${cx + i},${cz + j}`) || []) {
          if (forCar && !car[n]) continue;
          const d = Math.hypot(X[n] - x, Z[n] - z);
          if (d < bd) { bd = d; best = n; }
        }
      }
      if (best >= 0) { // un anello in più: il più vicino può stare nella cella accanto
        for (let i = -r - 1; i <= r + 1; i++) for (let j = -r - 1; j <= r + 1; j++) for (const n of grid.get(`${cx + i},${cz + j}`) || []) {
          if (forCar && !car[n]) continue;
          const d = Math.hypot(X[n] - x, Z[n] - z);
          if (d < bd) { bd = d; best = n; }
        }
      }
    }
    return best < 0 ? null : { i: best, x: X[best], z: Z[best], d: bd };
  }

  /** percorso [[x,z],...] dal punto a al punto b; null se non collegati */
  function route(ax, az, bx, bz, forCar) {
    const s = nearest(ax, az, forCar), t = nearest(bx, bz, forCar);
    if (!s || !t) return null;
    const N = X.length, g = new Float64Array(N).fill(Infinity), from = new Int32Array(N).fill(-1), done = new Uint8Array(N);
    const heap = [];
    const push = (n, f) => { heap.push([f, n]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
    g[s.i] = 0; push(s.i, 0);
    let found = false, it = 0;
    while (heap.length && it++ < 400000) {
      const [, n] = pop();
      if (done[n]) continue; done[n] = 1;
      if (n === t.i) { found = true; break; }
      for (const [m, d, isCar] of adj[n]) {
        if (forCar && !isCar) continue;
        const ng = g[n] + d;
        if (ng < g[m]) { g[m] = ng; from[m] = n; push(m, ng + Math.hypot(X[m] - X[t.i], Z[m] - Z[t.i])); }
      }
    }
    if (!found) return null;
    const pts = [];
    for (let n = t.i; n >= 0; n = from[n]) pts.push([X[n], Z[n]]);
    pts.reverse();
    return { pts: simplify([[ax, az], ...pts, [bx, bz]]), start: s, end: t };
  }
  return { route, nearest, size: X.length };
}

/** toglie i vertici allineati: il personaggio gira solo dove la via gira */
function simplify(p) {
  if (p.length < 3) return p;
  const out = [p[0]];
  for (let i = 1; i < p.length - 1; i++) {
    const a = out[out.length - 1], b = p[i], c = p[i + 1];
    const cross = Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]));
    if (cross > 0.4 || Math.hypot(b[0] - a[0], b[1] - a[1]) < 0.01) out.push(b);
  }
  out.push(p[p.length - 1]);
  return out;
}
