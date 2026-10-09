import { EVENTS, PAYOUT_MULT, PROTO, WORLD_ID, payoutFor, type EventMode } from '../game/content';
import type { Session } from '../game/session';
import { createAtlas } from './atlas';

export type RaceView = {
  title: string;
  time: string;
  hint: string;
  canQuit: boolean;
  lock: boolean;
};

export type ResultView = {
  place: number;
  time: number | null;
  stake: number;
  payout: number;
  netLabel: string;
  title: string;
  line: string;
};

export type Hud = {
  blocksPlay(): boolean;
  toast(message: string): void;
  setPrompt(text: string | null): void;
  sync(): void;
  openBoard(): void;
  paintMap(px: number, py: number, pz: number, fx: number, fy: number, fz: number): void;
  showRace(view: RaceView | null): void;
  showResult(view: ResultView | null): void;
  onAbandon(cb: () => void): void;
  onResultClose(cb: () => void): void;
};

export function createHud(
  root: HTMLElement,
  session: Session,
  hooks: { onInteract: () => void; onStartDemo: (mode: EventMode) => void },
): Hud {
  root.innerHTML = '';
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  const status = el('section', 'status');
  status.innerHTML = `
    <p class="mark">Minimondo</p>
    <p class="world">${WORLD_ID}</p>
    <p class="coins"><span>monete</span> <strong id="coins">0</strong></p>
    <p class="rank">settimana ${isoWeek(new Date())} · rango <strong id="rank">—</strong></p>
  `;

  const atlas = createAtlas(root);
  const tools = el('div', 'tools');
  const eventsBtn = button('Giochi', 'primary');
  eventsBtn.setAttribute('aria-expanded', 'false');
  tools.append(atlas.button, eventsBtn);

  const coach = el('div', 'coach');
  coach.innerHTML = `
    <p>La freccia in alto indica la meta, lungo la curva.</p>
    <strong>${coarse ? 'Mappa in alto a destra. Tocca un luogo e seguila.' : 'Shift corre. M apre la mappa. Tocca un luogo e segui la freccia.'}</strong>
  `;

  const hint = el('p', 'hint');
  hint.textContent = coarse
    ? 'Levetta a fondo per correre · dito sul mondo per girare · Salta due volte'
    : 'WASD cammina · Shift corre · M mappa · E raccoglie · spazio, due salti';

  const prompt = button('', 'prompt');
  prompt.hidden = true;

  const toasts = el('div', 'toasts');

  const race = el('section', 'race');
  race.hidden = true;
  race.innerHTML = `
    <p class="race-kicker"></p>
    <p class="race-time"></p>
    <p class="race-hint"></p>
    <button type="button" class="ghost" id="race-quit">Abbandona</button>
  `;

  const result = el('div', 'result');
  result.hidden = true;
  result.innerHTML = `
    <div class="sheet result-sheet">
      <p class="eyebrow">Risultato · sessione locale</p>
      <h2 id="res-title"></h2>
      <p id="res-line"></p>
      <p class="math" id="res-math"></p>
      <button type="button" class="primary wide" id="res-close">Torna in piazza</button>
    </div>
  `;

  const panel = el('div', 'panel');
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'events-title');
  panel.innerHTML = `
    <div class="sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">${WORLD_ID} · proto ${PROTO}</p>
          <h2 id="events-title">Giochi</h2>
          <p>Ostacoli è aperto. Il giro degli spicchi paga quando visiti le mete.</p>
        </div>
        <button type="button" class="ghost" id="events-close">Chiudi</button>
      </header>
      <p class="wallet">portafoglio <strong id="wallet">0</strong> monete</p>
      <ul class="modes"></ul>
      <div class="buyin" hidden>
        <p class="eyebrow" id="buy-kicker"></p>
        <h3 id="buy-name"></h3>
        <p id="buy-blurb"></p>
        <p class="stake">Puntata demo <strong id="buy-stake"></strong></p>
        <ol class="payout" id="buy-payout"></ol>
        <p class="note" id="buy-note"></p>
        <div class="buy-actions">
          <button type="button" class="ghost" id="buy-back">Indietro</button>
          <button type="button" class="primary" id="buy-go">Entra (demo)</button>
        </div>
      </div>
      <p class="fine">Il rango settimanale di questa sessione si muove quando chiudi una gara. Niente soldi veri.</p>
    </div>
  `;

  root.append(status, tools, coach, hint, prompt, toasts, race, result, panel);

  const coinsEl = must<HTMLElement>(status, '#coins');
  const rankEl = must<HTMLElement>(status, '#rank');
  const walletEl = must<HTMLElement>(panel, '#wallet');
  const list = must<HTMLElement>(panel, '.modes');
  const buyin = must<HTMLElement>(panel, '.buyin');
  const closeBtn = must<HTMLButtonElement>(panel, '#events-close');
  const backBtn = must<HTMLButtonElement>(panel, '#buy-back');
  const goBtn = must<HTMLButtonElement>(panel, '#buy-go');
  const quitBtn = must<HTMLButtonElement>(race, '#race-quit');
  const resClose = must<HTMLButtonElement>(result, '#res-close');
  const raceKicker = must<HTMLElement>(race, '.race-kicker');
  const raceTime = must<HTMLElement>(race, '.race-time');
  const raceHint = must<HTMLElement>(race, '.race-hint');

  let selected: EventMode | null = null;
  let resultOpen = false;
  let raceLock = false;
  let abandon = () => {};
  let resultClose = () => {};
  let promptText = '';

  for (const mode of EVENTS) {
    const item = document.createElement('li');
    const open = button('', 'mode');
    open.innerHTML = `
      <span>
        <strong>${mode.name}</strong>
        <em>${mode.players} giocatori · ${mode.playable ? 'demo pronta' : 'presto'}</em>
      </span>
      <b>${mode.demoStake}</b>
    `;
    open.addEventListener('click', () => showBuyin(mode));
    item.append(open);
    list.append(item);
  }

  const setOpen = (open: boolean) => {
    if (open && (raceLock || !race.hidden || resultOpen)) {
      toast('Prima chiudi la corsa.');
      return;
    }
    panel.hidden = !open;
    eventsBtn.setAttribute('aria-expanded', String(open));
    eventsBtn.classList.toggle('on', open);
    if (open) showList();
  };

  eventsBtn.addEventListener('click', () => {
    if (panel.hidden) atlas.close();
    setOpen(panel.hidden);
  });
  atlas.button.addEventListener('click', () => {
    if (atlas.isOpen()) setOpen(false);
  });
  closeBtn.addEventListener('click', () => setOpen(false));
  panel.addEventListener('click', (event) => {
    if (event.target === panel) setOpen(false);
  });
  backBtn.addEventListener('click', showList);
  goBtn.addEventListener('click', () => {
    if (!selected) return;
    if (session.coins < selected.demoStake) {
      toast(`Ti servono ${selected.demoStake} monete. Ne hai ${session.coins}.`);
      return;
    }
    if (!selected.playable) {
      toast(selected.id === 'giro' ? 'Il giro non si punta: visita le sei mete.' : `${selected.name} arriva dopo. Oggi si corre Ostacoli.`);
      return;
    }
    const mode = selected;
    setOpen(false);
    hooks.onStartDemo(mode);
  });
  quitBtn.addEventListener('click', () => abandon());
  resClose.addEventListener('click', () => {
    result.hidden = true;
    resultOpen = false;
    resultClose();
  });
  window.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    if (event.code === 'KeyM') atlas.toggle();
    if (event.code === 'Escape' && result.hidden) {
      atlas.close();
      setOpen(false);
    }
  });

  prompt.addEventListener('click', () => {
    hooks.onInteract();
    prompt.blur();
  });

  const hideCoach = () => coach.classList.add('gone');
  window.setTimeout(hideCoach, 7000);
  window.addEventListener('pointerdown', hideCoach, { once: true });
  window.addEventListener('keydown', hideCoach, { once: true });

  function showList(): void {
    list.hidden = false;
    buyin.hidden = true;
    selected = null;
  }

  function showBuyin(mode: EventMode): void {
    selected = mode;
    list.hidden = true;
    buyin.hidden = false;
    text(buyin, '#buy-kicker', mode.playable ? 'Demo locale · 4 corridori' : 'Non ancora in anteprima');
    text(buyin, '#buy-name', mode.name);
    text(buyin, '#buy-blurb', mode.blurb);
    text(buyin, '#buy-stake', String(mode.demoStake));
    const payout = must<HTMLElement>(buyin, '#buy-payout');
    payout.innerHTML = '';
    if (mode.playable) {
      PAYOUT_MULT.forEach((mult, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${index + 1}°</span><b>${payoutFor(index + 1, mode.demoStake)}</b>`;
        li.dataset['mult'] = String(mult);
        payout.append(li);
      });
      text(buyin, '#buy-note', 'La puntata esce quando parte il via. 1° prende il grosso, 4° non riprende nulla.');
      goBtn.textContent = 'Entra (demo)';
    } else {
      text(buyin, '#buy-note', `In sala vera la puntata va da ${mode.min} a ${mode.max}. Qui il tasto non apre la stanza.`);
      goBtn.textContent = 'Entra (demo)';
    }
  }

  function toast(message: string): void {
    const node = el('p', 'toast');
    node.textContent = message;
    toasts.append(node);
    while (toasts.children.length > 3) toasts.firstElementChild?.remove();
    window.setTimeout(() => node.classList.add('out'), 3200);
    window.setTimeout(() => node.remove(), 3700);
  }

  function sync(): void {
    coinsEl.textContent = String(session.coins);
    walletEl.textContent = String(session.coins);
    rankEl.textContent = session.weekRank === null ? '—' : String(session.weekRank);
    coinsEl.classList.remove('pop');
    void coinsEl.offsetWidth;
    coinsEl.classList.add('pop');
  }

  return {
    blocksPlay: () => atlas.isOpen() || !panel.hidden || resultOpen || raceLock,
    openBoard() {
      atlas.close();
      setOpen(true);
    },
    paintMap(px, py, pz, fx, fy, fz) {
      atlas.draw(px, py, pz, fx, fy, fz);
    },
    toast,
    setPrompt(textValue) {
      const next = textValue ?? '';
      if (next === promptText) return;
      promptText = next;
      prompt.hidden = next.length === 0;
      prompt.textContent = next;
    },
    sync,
    showRace(view) {
      if (!view) {
        race.hidden = true;
        raceLock = false;
        eventsBtn.disabled = resultOpen;
        atlas.setEnabled(!resultOpen);
        return;
      }
      race.hidden = false;
      raceLock = view.lock;
      eventsBtn.disabled = true;
      atlas.close();
      atlas.setEnabled(false);
      raceKicker.textContent = view.title;
      raceTime.textContent = view.time;
      raceHint.textContent = view.hint;
      quitBtn.hidden = !view.canQuit;
    },
    showResult(view) {
      if (!view) {
        result.hidden = true;
        resultOpen = false;
        eventsBtn.disabled = false;
        atlas.setEnabled(true);
        return;
      }
      resultOpen = true;
      result.hidden = false;
      atlas.close();
      atlas.setEnabled(false);
      race.hidden = true;
      raceLock = false;
      eventsBtn.disabled = true;
      text(result, '#res-title', view.title);
      text(result, '#res-line', view.time === null ? view.line : `${view.line} Tempo ${view.time.toFixed(1)}s.`);
      text(result, '#res-math', `Puntata ${view.stake} · incasso ${view.payout} · netto ${view.netLabel}`);
    },
    onAbandon(cb) {
      abandon = cb;
    },
    onResultClose(cb) {
      resultClose = cb;
    },
  };
}

function text(root: ParentNode, selector: string, value: string): void {
  const node = root.querySelector(selector);
  if (node) node.textContent = value;
}

function must<T extends Element>(root: ParentNode, selector: string): T {
  const node = root.querySelector<T>(selector);
  if (!node) throw new Error(`manca ${selector}`);
  return node;
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
