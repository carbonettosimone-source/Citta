/**
 * Ricerca unificata:
 *  - "In questa città": vie, piazze e luoghi della città caricata (filtrati mentre scrivi, tocca → vai lì);
 *  - "Nel mondo": Nominatim, solo all'invio (tocca → la città viene generata);
 *  - "Recenti" e "Città pronte".
 */
import { searchPlaces, placeUrl, recentPlaces } from '../engine/runtime/places.js';
import { NetworkBlockedError } from '../engine/runtime/generateCity.js';

const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function createSearch({ places = [], bakedCities = [], onLocal, allowWorld = false }) {
  // Nomi unici: una via spezzata in più tratti OSM compare una volta sola
  const local = [];
  const seen = new Set();
  for (const p of places) {
    const k = norm(p.name);
    if (seen.has(k)) continue;
    seen.add(k);
    local.push({ ...p, key: k });
  }
  local.sort((a, b) => a.name.localeCompare(b.name, 'it'));

  const el = document.createElement('div');
  el.id = 'search';
  el.innerHTML = `
    <form class="s-bar" autocomplete="off">
      <button type="button" class="s-close" aria-label="Chiudi">←</button>
      <input type="search" enterkeyhint="search" placeholder="${allowWorld ? "Via, piazza o un'altra città…" : 'Via, piazza o luogo…'}" aria-label="Cerca" />
      ${allowWorld ? '<button type="submit" class="s-go">Cerca</button>' : ''}
    </form>
    <div class="s-body"></div>`;
  document.body.appendChild(el);
  const input = el.querySelector('input');
  const body = el.querySelector('.s-body');
  let world = null;
  let worldMsg = '';

  function section(title, items) {
    if (!items.length) return '';
    return `<h3>${title}</h3><ul>${items.join('')}</ul>`;
  }
  function render() {
    const q = norm(input.value.trim());
    const loc = q ? local.filter((p) => p.key.includes(q)).slice(0, 12) : [];
    const kindIcon = { via: '🛣️', piazza: '⛲', luogo: '📍' };
    let html = '';
    html += section('In questa città', loc.map((p, i) => `<li><button data-l="${local.indexOf(p)}">${kindIcon[p.kind] || '📍'} ${esc(p.name)}</button></li>`));
    if (worldMsg) html += `<p class="s-msg">${esc(worldMsg)}</p>`;
    if (world) {
      html += section('Nel mondo', world.map((p, i) =>
        `<li><button data-w="${i}">🌍 <b>${esc(p.name)}</b><small>${esc(p.display)}</small></button></li>`));
    }
    if (!q) {
      html += section('Recenti', recentPlaces().map((p, i) => `<li><button data-r="${i}">🕘 ${esc(p.name)}<small>${esc([p.admin, p.countryName].filter(Boolean).join(', '))}</small></button></li>`));
      html += section('Città pronte', bakedCities.map((c) => `<li><button data-c="${esc(c.id)}">🏘️ ${esc(c.name)}<small>${esc(c.region || '')}</small></button></li>`));
    } else if (allowWorld && !world && !worldMsg) {
      html += `<p class="s-msg">Premi <b>Cerca</b> per trovare “${esc(input.value.trim())}” nel mondo e generarla in 3D.</p>`;
    }
    body.innerHTML = html || '<p class="s-msg">Scrivi il nome di una via o di una città.</p>';
  }

  input.addEventListener('input', () => {
    world = null;
    worldMsg = '';
    render();
  });
  el.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!allowWorld) return;
    const q = input.value.trim();
    if (q.length < 2) return;
    worldMsg = 'Cerco…';
    world = null;
    render();
    try {
      world = await searchPlaces(q);
      worldMsg = world.length ? '' : 'Nessun luogo trovato.';
    } catch (err) {
      worldMsg = err instanceof NetworkBlockedError
        ? 'Qui la ricerca nel mondo non può collegarsi a Internet (l’anteprima su claude.ai blocca i siti esterni). Funziona nell’app pubblicata su Vercel o sul tuo server.'
        : `Ricerca non riuscita: ${err.message}`;
    }
    render();
  });
  body.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.l != null) {
      close();
      onLocal(local[+b.dataset.l]);
    } else if (b.dataset.w != null) {
      location.href = placeUrl(world[+b.dataset.w]);
    } else if (b.dataset.r != null) {
      location.href = placeUrl(recentPlaces()[+b.dataset.r]);
    } else if (b.dataset.c != null) {
      const u = new URL(location.href);
      u.search = `?city=${encodeURIComponent(b.dataset.c)}`;
      location.href = u.toString();
    }
  });
  el.querySelector('.s-close').addEventListener('click', close);

  function open() {
    el.classList.add('open');
    render();
    setTimeout(() => input.focus(), 50);
  }
  function close() {
    el.classList.remove('open');
    input.blur();
  }
  return { open, close };
}
