/**
 * Entry della versione "artifact" (un solo file HTML ospitato su claude.ai):
 * i dati della città sono incorporati e serviti a fetch() dallo shim,
 * poi si avvia il main normale. Nessuna modifica al codice dell'engine.
 */
import { EMBEDDED } from './embedded.gen.js';

const nativeFetch = window.fetch.bind(window);
function b64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
window.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input?.url;
  const path = url ? new URL(url, 'https://x.invalid').pathname : '';
  const e = EMBEDDED[path];
  if (e) {
    return e.kind === 'bin'
      ? new Response(b64ToBytes(e.b64), { headers: { 'Content-Type': 'application/octet-stream' } })
      : new Response(e.text, { headers: { 'Content-Type': 'application/json' } });
  }
  if (path.startsWith('/data/')) return new Response('not found', { status: 404 });
  return nativeFetch(input, init);
};

import('../main.js');
