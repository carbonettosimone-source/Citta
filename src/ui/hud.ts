import { EVENTS, PROTO, WORLD_ID, type EventMode } from '../game/content';
import { INTERNAL_SCALE } from '../render/pipeline';
import type { Session } from '../game/session';

export type Hud = {
  blocksPlay(): boolean;
  toast(message: string): void;
  setPrompt(text: string | null): void;
  sync(): void;
};

export function createHud(root: HTMLElement, session: Session, onInteract: () => void): Hud {
  root.innerHTML = '';

  const status = el('section', 'status');
  status.innerHTML = `
    <p class="world">${WORLD_ID}</p>
    <p class="coins">monete <strong id="coins">0</strong></p>
    <p class="rank" title="Il server dello shard pubblica il rango a fine settimana.">
      settimana ${isoWeek(new Date())} · rango <strong>—</strong>
    </p>
    <p class="pipe">render ${Math.round(INTERNAL_SCALE * 100)}% · nebbia corta</p>
  `;

  const tools = el('div', 'tools');
  const look = button('Sguardo', 'ghost');
  look.title = 'Blocca il mouse per guardarti intorno. Esc per lasciarlo.';
  const eventsBtn = button('Eventi', 'primary');
  eventsBtn.setAttribute('aria-expanded', 'false');
  tools.append(look, eventsBtn);

  const hint = el('p', 'hint');
  hint.textContent = 'WASD cammina · trascina per guardare · Q/R ruotano · E interagisce · spazio salta';

  const prompt = button('', 'prompt');
  prompt.hidden = true;

  const toasts = el('div', 'toasts');

  const panel = el('div', 'panel');
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'events-title');
  panel.innerHTML = `
    <div class="sheet">
      <header class="sheet-head">
        <div>
          <h2 id="events-title">Eventi</h2>
          <p>Stanze effimere. La puntata la conferma il server: qui è solo l'anteprima.</p>
        </div>
        <button type="button" class="ghost" id="events-close">Chiudi</button>
      </header>
      <p class="wallet">portafoglio <strong id="wallet">0</strong> monete · ${WORLD_ID} · proto ${PROTO}</p>
      <ul class="modes"></ul>
      <p class="fine">Privilegi settimanali: li assegna la classifica dello shard. Il rango resta vuoto finché non c'è un server.</p>
    </div>
  `;

  root.append(status, tools, hint, prompt, toasts, panel);

  const coinsQuery = status.querySelector<HTMLElement>('#coins');
  const walletQuery = panel.querySelector<HTMLElement>('#wallet');
  const list = panel.querySelector<HTMLElement>('.modes');
  const closeBtn = panel.querySelector<HTMLButtonElement>('#events-close');
  if (!coinsQuery || !walletQuery || !list || !closeBtn) throw new Error('hud incompleto');
  const coinsEl: HTMLElement = coinsQuery;
  const walletEl: HTMLElement = walletQuery;

  for (const mode of EVENTS) {
    const item = document.createElement('li');
    item.innerHTML = `
      <div>
        <strong>${mode.name}</strong>
        <span>${mode.players} giocatori · puntata ${mode.min}–${mode.max}</span>
        <em>${mode.blurb}</em>
      </div>
    `;
    const enter = button('Entra', 'enter');
    enter.addEventListener('click', () => join(mode));
    item.append(enter);
    list.append(item);
  }

  const setOpen = (open: boolean) => {
    panel.hidden = !open;
    eventsBtn.setAttribute('aria-expanded', String(open));
    eventsBtn.classList.toggle('on', open);
  };

  eventsBtn.addEventListener('click', () => setOpen(panel.hidden));
  closeBtn.addEventListener('click', () => setOpen(false));
  panel.addEventListener('click', (event) => {
    if (event.target === panel) setOpen(false);
  });
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') setOpen(false);
  });

  look.addEventListener('click', () => {
    const canvas = document.querySelector<HTMLCanvasElement>('#view');
    if (!canvas) return;
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock();
      return;
    }
    void canvas.requestPointerLock();
  });
  document.addEventListener('pointerlockchange', () => {
    const locked = document.pointerLockElement === document.querySelector('#view');
    look.classList.toggle('on', locked);
    look.textContent = locked ? 'Sguardo on' : 'Sguardo';
  });

  prompt.addEventListener('click', () => {
    onInteract();
    prompt.blur();
  });

  let promptText = '';

  function join(mode: EventMode): void {
    if (session.coins < mode.min) {
      toast(`Servono almeno ${mode.min} monete per ${mode.name}. Nel portafoglio: ${session.coins}.`);
      return;
    }
    toast(`${mode.name}: puntata non inviata. La stanza la apre il server.`);
  }

  function toast(message: string): void {
    const node = el('p', 'toast');
    node.textContent = message;
    toasts.append(node);
    while (toasts.children.length > 3) toasts.firstElementChild?.remove();
    window.setTimeout(() => node.classList.add('out'), 2800);
    window.setTimeout(() => node.remove(), 3300);
  }

  function sync(): void {
    coinsEl.textContent = String(session.coins);
    walletEl.textContent = String(session.coins);
    coinsEl.classList.remove('pop');
    void coinsEl.offsetWidth;
    coinsEl.classList.add('pop');
  }

  return {
    blocksPlay: () => !panel.hidden,
    toast,
    setPrompt(text) {
      const next = text ?? '';
      if (next === promptText) return;
      promptText = next;
      prompt.hidden = next.length === 0;
      prompt.textContent = next;
    },
    sync,
  };
}

function el(tag: string, className: string): HTMLElement {
  const node = document.createElement(tag);
  node.className = className;
  return node;
}

function button(label: string, className: string): HTMLButtonElement {
  const node = document.createElement('button');
  node.type = 'button';
  node.className = className;
  node.textContent = label;
  return node;
}

function isoWeek(date: Date): number {
  const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  return Math.ceil(((utc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
