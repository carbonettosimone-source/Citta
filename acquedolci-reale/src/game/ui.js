/** piccoli attrezzi per l'interfaccia: finestre modali, avvisi, stelle, euro */
export const $ = (id) => document.getElementById(id);
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const stars = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));
export const euro = (v) => '€ ' + Math.round(v).toLocaleString('it-IT');
export const pct = (v) => `${v.toFixed(1).replace('.', ',')}%`;

const stack = [];
/**
 * Finestra modale. `body` è HTML; `buttons` [{label, cls, onClick → false per restare aperta}].
 * Restituisce l'elemento (per agganciare altri eventi). Una sola alla volta: le altre aspettano.
 */
export function modal({ title, icon = '', body = '', buttons = [{ label: 'OK' }], cls = '', onOpen, dismissable = true }) {
  const el = document.createElement('div');
  el.className = `sheet ${cls}`;
  el.innerHTML = `<div class="sheetBox" role="dialog" aria-modal="true">
    ${title ? `<h2>${icon ? `<span class="ic">${icon}</span>` : ''}${esc(title)}</h2>` : ''}
    <div class="sheetBody">${body}</div>
    <div class="sheetBtns"></div></div>`;
  const btns = el.querySelector('.sheetBtns');
  const close = () => { el.remove(); const i = stack.indexOf(el); if (i >= 0) stack.splice(i, 1); stack.at(-1)?.classList.remove('behind'); };
  for (const b of buttons) {
    const bt = document.createElement('button');
    bt.type = 'button'; bt.className = b.cls || ''; bt.textContent = b.label;
    if (b.disabled) bt.disabled = true;
    bt.onclick = () => { if (b.onClick?.(el) !== false) close(); };
    btns.appendChild(bt);
  }
  if (dismissable) el.addEventListener('pointerdown', (e) => { if (e.target === el) close(); });
  stack.at(-1)?.classList.add('behind');
  stack.push(el);
  document.body.appendChild(el);
  onOpen?.(el, close);
  el.close = close;
  return el;
}
export const modalOpen = () => stack.length > 0;
export function closeAll() { while (stack.length) stack.at(-1).close(); }

let toastT = 0;
export function toast(msg, ms = 2600) {
  const el = $('toast');
  el.innerHTML = msg; el.classList.add('on');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), ms);
}
/** numeretto che sale: +1,2% */
export function floatGain(v) {
  if (!v || Math.abs(v) < 0.05) return;
  const el = document.createElement('div');
  el.className = 'gain ' + (v > 0 ? 'up' : 'down');
  el.textContent = `${v > 0 ? '+' : ''}${v.toFixed(1).replace('.', ',')}% consenso`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}
