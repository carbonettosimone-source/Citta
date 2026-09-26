/**
 * Ricerca luoghi (Nominatim). Solo su invio, mai a ogni tasto: la policy di Nominatim
 * vieta l'autocompletamento sul server pubblico (max 1 richiesta/s).
 * In produzione conviene un proxy con cache sul proprio VPS.
 */
import { NetworkBlockedError } from './generateCity.js';

let last = 0;

export async function searchPlaces(q) {
  const wait = 1100 - (Date.now() - last);
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  last = Date.now();
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6&addressdetails=1&accept-language=it&q=${encodeURIComponent(q)}`;
  let res;
  try {
    res = await fetch(url);
  } catch {
    throw new NetworkBlockedError('nominatim.openstreetmap.org non raggiungibile');
  }
  if (!res.ok) throw new Error(`Ricerca HTTP ${res.status}`);
  const list = await res.json();
  return list.map((r) => {
    const a = r.address || {};
    return {
      name: r.name || a.city || a.town || a.village || r.display_name.split(',')[0],
      lat: +r.lat,
      lon: +r.lon,
      countryCode: a.country_code || null,
      countryName: a.country || null,
      admin: [a.county || a.province, a.state].filter(Boolean).join(', ') || null,
      type: r.addresstype || r.type,
      display: r.display_name,
    };
  });
}

/** URL della città generata a runtime (condivisibile). */
export function placeUrl(p) {
  const u = new URL(location.href);
  u.search = '';
  u.searchParams.set('luogo', `${p.lat.toFixed(5)},${p.lon.toFixed(5)}`);
  u.searchParams.set('nome', p.name);
  if (p.countryCode) u.searchParams.set('cc', p.countryCode);
  if (p.countryName) u.searchParams.set('paese', p.countryName);
  if (p.admin) u.searchParams.set('area', p.admin);
  return u.toString();
}

/** Legge ?luogo=lat,lon&nome=… dall'URL corrente. */
export function placeFromUrl() {
  const q = new URLSearchParams(location.search);
  const l = q.get('luogo');
  if (!l) return null;
  const [lat, lon] = l.split(',').map(Number);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return {
    lat, lon,
    name: q.get('nome') || `${lat.toFixed(3)}, ${lon.toFixed(3)}`,
    countryCode: q.get('cc'),
    countryName: q.get('paese'),
    admin: q.get('area'),
    half: q.get('raggio') ? +q.get('raggio') : undefined,
  };
}

const RECENT = 'citta-recenti';
export function recentPlaces() {
  try {
    return JSON.parse(localStorage.getItem(RECENT) || '[]');
  } catch {
    return [];
  }
}
export function rememberPlace(p) {
  try {
    const list = recentPlaces().filter((x) => x.name !== p.name || Math.abs(x.lat - p.lat) > 1e-3);
    list.unshift({ name: p.name, lat: p.lat, lon: p.lon, countryCode: p.countryCode, countryName: p.countryName, admin: p.admin });
    localStorage.setItem(RECENT, JSON.stringify(list.slice(0, 8)));
  } catch {
    /* storage non disponibile */
  }
}
