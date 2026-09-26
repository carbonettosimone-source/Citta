/**
 * Fonde fatti puntuali dello stesso tipo che probabilmente descrivono lo stesso oggetto reale:
 * li raggruppa per prossimità (griglia uniforme, niente confronto O(n²)), tiene il vincitore per
 * fonte/confidenza (priority.js) e — quando i fatti "perdenti" del gruppo hanno un campo che il
 * vincitore non ha — lo prestano al vincitore (es. l'altezza misurata arricchisce un albero OSM
 * senza tag `height`, senza spostarne la posizione, che resta quella OSM).
 */
import { wins } from './priority.js';

class PointGrid {
  constructor(cell) { this.cell = cell; this.map = new Map(); }
  key(x, z) { return `${Math.floor(x / this.cell)}:${Math.floor(z / this.cell)}`; }
  add(x, z, i) {
    const k = this.key(x, z);
    let a = this.map.get(k);
    if (!a) this.map.set(k, (a = []));
    a.push(i);
  }
  near(x, z, r, out) {
    out.length = 0;
    const c = this.cell, ci = Math.floor(x / c), cj = Math.floor(z / c), rc = Math.ceil(r / c);
    for (let i = -rc; i <= rc; i++) {
      for (let j = -rc; j <= rc; j++) {
        const a = this.map.get(`${ci + i}:${cj + j}`);
        if (a) out.push(...a);
      }
    }
    return out;
  }
}

/**
 * @param {{x:number,z:number,source:string,confidence?:number}[]} facts
 * @param {{radius?:number, enrich?:string[]}} [opt]
 *   radius: raggio di fusione in metri (stesso oggetto reale entro questa distanza).
 *   enrich: campi che un fatto "perdente" del gruppo può prestare al vincitore se lui non li ha.
 * @returns {object[]} un fatto per gruppo (il vincitore, eventualmente arricchito)
 */
export function resolveFacts(facts, { radius = 3, enrich = [] } = {}) {
  const n = facts.length;
  if (n <= 1) return facts.slice();
  const grid = new PointGrid(Math.max(1, radius));
  facts.forEach((f, i) => grid.add(f.x, f.z, i));
  const used = new Uint8Array(n);
  const tmp = [];
  const out = [];
  for (let i = 0; i < n; i++) {
    if (used[i]) continue;
    used[i] = 1;
    const cluster = [i];
    // chiusura transitiva: A vicino a B vicino a C entrano nello stesso gruppo anche se A e C
    // non sono entro `radius` fra loro (catena di alberi in filare, non un unico cerchio)
    for (let k = 0; k < cluster.length; k++) {
      const f = facts[cluster[k]];
      grid.near(f.x, f.z, radius, tmp);
      for (const j of tmp) {
        if (used[j] || Math.hypot(facts[j].x - f.x, facts[j].z - f.z) > radius) continue;
        used[j] = 1;
        cluster.push(j);
      }
    }
    let winnerIdx = cluster[0];
    for (const j of cluster) if (wins(facts[j], facts[winnerIdx])) winnerIdx = j;
    let winner = facts[winnerIdx];
    if (enrich.length && cluster.length > 1) {
      for (const field of enrich) {
        if (winner[field] != null) continue;
        const donor = cluster.map((j) => facts[j]).find((f) => f[field] != null);
        if (donor) winner = { ...winner, [field]: donor[field] };
      }
    }
    out.push(winner);
  }
  return out;
}
