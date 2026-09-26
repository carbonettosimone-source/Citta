/**
 * Livello dei fatti (M5): ogni oggetto del mondo — albero, muretto, cartello, superficie — è un
 * "fatto" con provenienza (valore, fonte, confidenza, licenza), non una scelta muta fra una regola
 * e un dato. Quando due fatti dello stesso tipo descrivono probabilmente lo stesso oggetto reale
 * (un albero taggato su OSM e un picco rilevato dalla mappa delle chiome nello stesso punto),
 * decide questa tabella, non l'ordine di caricamento.
 *
 * Ordine deciso una volta sola, uguale per ogni tipo di fatto:
 *   correzione manuale  >  OSM esplicito  >  misurato (LiDAR, chiome, DEM)  >
 *   rilevato (Mapillary, computer vision)  >  regola/prior.
 */
export const SOURCE_PRIORITY = {
  manual: 4,
  osm: 3,
  measured: 2,
  detected: 1,
  rule: 0,
};

export function sourceRank(source) {
  return SOURCE_PRIORITY[source] ?? 0;
}

/** true se il fatto `a` prevale su `b` (fonte più autorevole; a parità, confidenza più alta). */
export function wins(a, b) {
  const ra = sourceRank(a.source), rb = sourceRank(b.source);
  if (ra !== rb) return ra > rb;
  return (a.confidence ?? 0) >= (b.confidence ?? 0);
}
