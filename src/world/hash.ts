/**
 * Hash intero senza stato. Stesso contratto del vecchio core: niente
 * Math.random, così uno shard futuro può rigenerare il mondo da (seme, cella)
 * senza scambiare geometria. Ammessi i bitwise che restano identici tra motori.
 */
export function hash32(a: number, b: number, c: number): number {
  let h = Math.imul(a | 0, 374761393) ^ Math.imul(b | 0, 668265263) ^ Math.imul(c | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  h = Math.imul(h, 2246822519);
  h ^= h >>> 13;
  return h >>> 0;
}

export const unit = (a: number, b: number, c: number): number => hash32(a, b, c) / 4294967296;

/** Stesso intero per ogni clone di Mondo-1. Niente mappe diverse a ogni avvio. */
export function hashText(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Seme fisso dello shard. Erba, rocce e paesi escono da qui, non da Math.random. */
export const WORLD_SEED = hashText('Mondo-1');
