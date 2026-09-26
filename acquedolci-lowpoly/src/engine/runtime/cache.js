/**
 * Cache IndexedDB delle città generate (OSM + DEM + segnali): riaprire una città già
 * visitata non rifà le richieste a Overpass/AWS. Scadenza 14 giorni, max ~8 città.
 */
const DB = 'citta-lowpoly';
const STORE = 'cities';
const TTL = 14 * 86400000;
const MAX = 8;

function open() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('IndexedDB assente'));
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx(db, mode, fn) {
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const out = fn(t.objectStore(STORE));
    t.oncomplete = () => resolve(out?.result ?? out);
    t.onerror = () => reject(t.error);
  });
}

export async function cacheGet(key) {
  const db = await open();
  const v = await tx(db, 'readonly', (s) => s.get(key));
  if (!v || Date.now() - (v.t || 0) > TTL) return null;
  return v;
}

export async function cachePut(key, value) {
  const db = await open();
  const keys = await tx(db, 'readonly', (s) => s.getAllKeys());
  if (keys.length >= MAX) {
    // elimina le più vecchie
    const all = await Promise.all(keys.map(async (k) => ({ k, t: (await tx(db, 'readonly', (s) => s.get(k)))?.t || 0 })));
    all.sort((a, b) => a.t - b.t);
    for (const { k } of all.slice(0, keys.length - MAX + 1)) await tx(db, 'readwrite', (s) => s.delete(k));
  }
  await tx(db, 'readwrite', (s) => s.put(value, key));
}
