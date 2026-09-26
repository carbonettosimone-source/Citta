/**
 * Sorgente dati unica per i loader del motore.
 * Città preparate con gli script → file statici via fetch.
 * Città generate nell'app → dati in memoria registrati con URL virtuali (mem://…).
 */
const mem = new Map();

export function registerData(url, value) {
  mem.set(url, value);
}

export function clearData(prefix = '') {
  for (const k of [...mem.keys()]) if (k.startsWith(prefix)) mem.delete(k);
}

export async function getJSON(url) {
  if (mem.has(url)) return mem.get(url);
  if (url.startsWith('mem://')) throw new Error(`dato assente: ${url}`);
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} HTTP ${r.status}`);
  return r.json();
}

export async function getArrayBuffer(url) {
  if (mem.has(url)) return mem.get(url);
  if (url.startsWith('mem://')) throw new Error(`dato assente: ${url}`);
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url} HTTP ${r.status}`);
  return r.arrayBuffer();
}

/** Come getJSON ma null su qualsiasi errore (dati opzionali). */
export async function tryJSON(url) {
  if (!url) return null;
  try {
    return await getJSON(url);
  } catch {
    return null;
  }
}
