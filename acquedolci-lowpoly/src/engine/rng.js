/**
 * Casualità deterministica: stesso input → stesso mondo per tutti i client.
 * Nessun Math.random nell'engine: ogni scelta procedurale deriva da id OSM o posizione.
 */

/** Hash 32-bit di un intero o di una stringa (id OSM > 2^31 inclusi). */
export function hash32(v) {
  let h = 0x811c9dc5;
  const s = typeof v === 'number' ? String(Math.trunc(v)) : String(v);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

/** Hash di una posizione in metri, quantizzata a `cell` (default 10 cm). */
export function hashXZ(x, z, salt = 0, cell = 0.1) {
  const ix = Math.round(x / cell) | 0;
  const iz = Math.round(z / cell) | 0;
  let h = Math.imul(ix, 0x27d4eb2d) ^ Math.imul(iz, 0x165667b1) ^ Math.imul(salt | 0, 0x9e3779b9);
  h ^= h >>> 15;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  return h >>> 0;
}

/** Generatore mulberry32: rand() ∈ [0,1). */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function rand() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Uniforme [0,1) da un seed singolo. */
export function unit(seed) {
  return mulberry32(seed)();
}

/** Scelta pesata: items [{w, ...}] → item. */
export function pickWeighted(items, r) {
  let total = 0;
  for (const it of items) total += Math.max(0, it.w);
  if (total <= 0) return items[0] ?? null;
  let t = r * total;
  for (const it of items) {
    t -= Math.max(0, it.w);
    if (t <= 0) return it;
  }
  return items[items.length - 1];
}
