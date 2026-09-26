/**
 * Correzioni manuali (M5, quarto pilastro): un file per città, priorità massima nella tabella
 * (priority.js: `manual` batte sempre). Si applicano DOPO la pipeline automatica, non dentro:
 * sopravvivono a ogni nuovo bake (rifare `fetch-canopy`/`compile-level` non le cancella).
 *
 * Tre operazioni, per tipo di fatto (es. `trees`, in futuro `signs`, `fences`…):
 *  - remove {x,z,radius}: toglie qualunque fatto in quel raggio, di qualunque fonte — un falso
 *    positivo del rilevamento automatico (es. un picco di chioma che in realtà è un tetto che il
 *    filtro strade/edifici non ha preso).
 *  - edit {x,z,radius,set}: al fatto più vicino nel raggio si applicano i campi di `set` (es. la
 *    specie giusta) senza spostarne la posizione né toccare gli altri fatti vicini.
 *  - add {..., set 'manual' alla source}: un fatto vero e proprio, non presente in nessuna fonte
 *    automatica (un albero appena piantato, troppo giovane per la mappa delle chiome).
 */
export function applyCorrections(facts, corrections) {
  if (!corrections) return facts;
  let out = facts;
  if (corrections.remove?.length) {
    out = out.filter((f) => !corrections.remove.some((r) => Math.hypot(f.x - r.x, f.z - r.z) <= (r.radius ?? 1.5)));
  }
  if (corrections.edit?.length) {
    out = out.slice();
    for (const e of corrections.edit) {
      let best = -1, bestD = Infinity;
      out.forEach((f, i) => {
        const d = Math.hypot(f.x - e.x, f.z - e.z);
        if (d <= (e.radius ?? 1.5) && d < bestD) { bestD = d; best = i; }
      });
      if (best >= 0) out[best] = { ...out[best], ...e.set };
    }
  }
  if (corrections.add?.length) {
    out = out.concat(corrections.add.map((a) => ({ ...a, source: 'manual', confidence: 1 })));
  }
  return out;
}
