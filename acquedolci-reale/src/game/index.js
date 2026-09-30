/**
 * Sweetwaters — Road to Leadership. Il gioco sopra il paese ricostruito:
 * vista sempre dall'alto (camera drone), il personaggio va dove si tocca, icone di gioco al posto
 * dei nomi dei luoghi, 30 giorni di campagna, tre candidati, un voto.
 */
import * as THREE from 'three';
import {
  TITLE, SUBTITLE, DAYS, TRAITS, RIVALS, ASSESSORI, LIST_SIZE, RELICS, HANGOUTS, RALLY_SPOTS, DEALER, START, CARS, ADS, INTRO_TEXT,
} from './data.js';
import * as G from './state.js';
import { createNav } from './nav.js';
import { createPlayer } from './player.js';
import { $, esc, stars, euro, pct, modal, modalOpen, closeAll, toast, floatGain } from './ui.js';

export function createGame({ scene, camera, controls, getCamera, groundAt, streets, character, applyHour, openCharScreen, canvas }) {
  const nav = createNav(streets);
  const player = createPlayer(scene, character, (x, z) => groundAt(x, z) + 0.22);
  let s = null;           // stato della partita (state.js)
  let running = false;    // il tempo scorre
  let follow = true;      // la camera segue il personaggio
  let pending = null;     // interazione da fare all'arrivo
  let lastHour = -1;

  // ---------------------------------------------------------------- icone sulla mappa
  const layer = $('icons');
  const icons = [];
  const addIcon = (spot, kind) => {
    const el = document.createElement('button');
    el.type = 'button'; el.className = `pin ${kind}`;
    el.innerHTML = `<span><i>${spot.icon}</i></span>`;
    el.title = spot.title;
    el.addEventListener('click', (e) => { e.stopPropagation(); tapSpot(spot, kind); });
    layer.appendChild(el);
    const ic = { spot, kind, el, v: new THREE.Vector3(spot.x, groundAt(spot.x, spot.z) + 6, spot.z) };
    icons.push(ic);
    return ic;
  };
  RELICS.forEach((r) => addIcon(r, 'relic'));
  HANGOUTS.forEach((h) => addIcon(h, 'hang'));
  RALLY_SPOTS.forEach((r) => addIcon(r, 'rally'));
  addIcon(DEALER, 'dealer');

  const tmp = new THREE.Vector3();
  function updateIcons() {
    const cam = getCamera();
    const hide = !s || s.over;
    for (const ic of icons) {
      let show = !hide;
      if (show && ic.kind === 'relic') {
        const found = s.relics.includes(ic.spot.id);
        ic.el.classList.toggle('found', found);
        const d = Math.hypot(player.state.pos.x - ic.spot.x, player.state.pos.z - ic.spot.z);
        // i relitti non scoperti si intuiscono (?) solo quando ci si avvicina
        const glyph = ic.el.querySelector('i');
        if (!found) { show = d < 160 + teamRet() * 20; glyph.textContent = '?'; } else glyph.textContent = ic.spot.icon;
      }
      if (show && ic.kind === 'hang') ic.el.classList.toggle('done', s.visited[ic.spot.id] === s.day);
      if (show && ic.kind === 'rally') ic.el.classList.toggle('done', s.rallyDay === s.day);
      if (show) {
        tmp.copy(ic.v).project(cam);
        show = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1;
        if (show) {
          const x = (tmp.x * 0.5 + 0.5) * innerWidth, y = (-tmp.y * 0.5 + 0.5) * innerHeight;
          const dist = cam.position.distanceTo(ic.v);
          const sc = Math.max(0.6, Math.min(1.05, 380 / (dist + 120)));
          ic.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%) scale(${sc})`;
          ic.el.style.zIndex = String(10000 - Math.round(dist));
        }
      }
      ic.el.style.display = show ? '' : 'none';
    }
  }
  const teamRet = () => (s ? G.teamStats(s.team).ret : 0);

  // ---------------------------------------------------------------- movimento
  function goTo(x, z, then) {
    const p = player.state.pos;
    const r = nav.route(p.x, p.z, x, z, !!player.state.car);
    if (!r) { toast(player.state.car ? 'In auto lì non ci arrivi. Scendi e vai a piedi.' : 'Lì non si arriva.'); return false; }
    // in auto ci si ferma sulla strada; a piedi si arriva fino al punto
    const path = r.pts;
    if (player.state.car) path[path.length - 1] = [r.end.x, r.end.z];
    pending = then || null;
    player.go(path, () => { const cb = pending; pending = null; cb?.(); });
    follow = true;
    return true;
  }
  function tapSpot(spot, kind) {
    if (!running || modalOpen()) return;
    const near = Math.hypot(player.state.pos.x - spot.x, player.state.pos.z - spot.z) < 18;
    const act = () => interact(spot, kind);
    if (near) { player.stop(); act(); } else goTo(spot.x, spot.z, act);
  }

  // tocco sul terreno: marcia lungo il raggio fino al suolo (niente raycast su un milione di triangoli)
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function groundHit(cx, cy) {
    ndc.set(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, getCamera());
    const o = ray.ray.origin, d = ray.ray.direction;
    let prev = 0;
    for (let t = 1; t < 6000; t += Math.max(1, t * 0.01)) {
      const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t;
      if (y <= groundAt(x, z)) {
        let a = prev, b = t;
        for (let k = 0; k < 20; k++) { const m = (a + b) / 2; if (o.y + d.y * m <= groundAt(o.x + d.x * m, o.z + d.z * m)) b = m; else a = m; }
        return [o.x + d.x * b, o.z + d.z * b];
      }
      prev = t;
    }
    return null;
  }
  let down = null;
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now(), n: (down?.n || 0) + 1 }; });
  canvas.addEventListener('pointerup', (e) => {
    const d = down; down = null;
    if (!d || !running || modalOpen() || d.n > 1) return;
    if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > 10 || performance.now() - d.t > 450) return;
    const hit = groundHit(e.clientX, e.clientY);
    if (hit) goTo(hit[0], hit[1]);
  });
  canvas.addEventListener('pointercancel', () => { down = null; });
  // trascinare la mappa stacca la camera dal personaggio (🎯 la riaggancia)
  canvas.addEventListener('pointermove', (e) => { if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 10) follow = false; });

  // ---------------------------------------------------------------- interazioni
  function interact(spot, kind) {
    if (kind === 'relic') return discover(spot, true);
    if (kind === 'hang') return hangout(spot);
    if (kind === 'rally') return rallyUI(spot);
    if (kind === 'dealer') return dealerUI();
  }
  function discover(r, fromTap) {
    const g = G.discoverRelic(s, r);
    if (g == null) { if (fromTap) modal({ title: r.title, icon: r.icon, body: `<p>${esc(r.text)}</p><p class="muted">Già nel taccuino.</p>` }); return; }
    floatGain(g); refresh(); G.save(s);
    modal({
      title: r.title, icon: r.icon, cls: 'relicCard',
      body: `<p class="tag">Relitto dell'amministrazione uscente</p><p>${esc(r.text)}</p><p class="ok">+${pct(g)} · aggiunto al taccuino: usalo nei comizi.</p>`,
      buttons: [{ label: 'Annotato' }],
    });
  }
  function hangout(h) {
    const res = G.hangout(s, h);
    if (res.already) return modal({ title: h.title, icon: h.icon, body: `<p>${esc(h.text)}</p><p class="muted">Per oggi qui hai già sentito tutto. Torna domani.</p>` });
    floatGain(res.gain); refresh(); G.save(s);
    const list = res.got.length
      ? res.got.map((n) => `<li><b>${esc(n.title)}</b><br>${esc(n.text)} <span class="pw">${'🔥'.repeat(n.p)}</span></li>`).join('')
      : '<li>Oggi solo meteo e calcio. Nessuna novità sugli avversari.</li>';
    modal({ title: h.title, icon: h.icon, body: `<p class="muted">${esc(h.text)}</p><p>Hai offerto un giro e ascoltato:</p><ul class="notes">${list}</ul>`, buttons: [{ label: 'Salva nel taccuino' }] });
  }
  function rallyUI(spot) {
    if (s.rallyDay === s.day) return modal({ title: spot.title, icon: '📣', body: '<p>Oggi hai già fatto il tuo comizio. La voce va risparmiata: domani un\'altra piazza.</p>' });
    const avail = s.notes.filter((n) => !n.used);
    const body = `<p>Scegli fino a 3 argomenti da usare contro gli avversari. Ogni argomento si usa una volta sola.</p>
      ${avail.length ? `<ul class="pick">${avail.map((n) => `<li><label><input type="checkbox" value="${n.id}"> <span><b>${esc(n.title)}</b> ${'🔥'.repeat(n.p)}<br><small>${esc(n.text)}</small></span></label></li>`).join('')}</ul>`
        : '<p class="muted">Il taccuino è vuoto: parlerai del programma (effetto modesto). Gira per il paese e frequenta i bar per trovare argomenti.</p>'}`;
    modal({
      title: spot.title, icon: '📣', body,
      onOpen: (el) => el.querySelectorAll('input').forEach((i) => i.addEventListener('change', () => {
        const on = el.querySelectorAll('input:checked');
        if (on.length > 3) { i.checked = false; toast('Massimo 3 argomenti per comizio'); }
      })),
      buttons: [
        { label: 'Più tardi', cls: 'ghost' },
        {
          label: 'Sali sul palco', onClick: (el) => {
            const ids = [...el.querySelectorAll('input:checked')].map((i) => i.value);
            const r = G.rally(s, ids);
            floatGain(r.gain); refresh(); G.save(s);
            setTimeout(() => modal({ title: 'Comizio concluso', icon: '👏', body: `<p>${ids.length ? 'La piazza rumoreggia, qualcuno filma, qualcuno applaude.' : 'Discorso sul programma: educati applausi, qualche sbadiglio.'}</p><p class="ok">+${pct(r.gain)} consenso</p>` }), 50);
          },
        },
      ],
    });
  }
  function dealerUI() {
    const row = (c) => {
      const own = s.cars.includes(c.id), use = s.car === c.id;
      return `<li class="car"><div><b>${esc(c.name)}</b> <span class="st">${stars(c.look + 1)}</span><br><small>${esc(c.text)}</small><br><small>${euro(c.price)} · apparenza +${c.look * 5}%</small></div>
        <button type="button" data-car="${c.id}" ${use ? 'disabled' : ''}>${use ? 'In uso' : own ? 'Usa' : 'Compra'}</button></li>`;
    };
    modal({
      title: DEALER.title, icon: DEALER.icon, body: `<p class="muted">${esc(DEALER.text)} L'apparenza aumenta ogni guadagno di consenso. Il budget è illimitato, ma ogni euro pesa sul punteggio finale.</p><ul class="cars">${CARS.map(row).join('')}</ul>`,
      buttons: [{ label: 'Esci' }],
      onOpen: (el, close) => el.querySelectorAll('[data-car]').forEach((b) => b.addEventListener('click', () => {
        const c = G.buyCar(s, b.dataset.car);
        player.setCar(c); refresh(); G.save(s); close();
        toast(`${c.name}: ora giri in auto. Tocca 🚶 per scendere.`);
      })),
    });
  }

  // ---------------------------------------------------------------- pannelli
  function notebookUI() {
    const n = s.notes;
    modal({
      title: 'Taccuino', icon: '📒',
      body: n.length ? `<ul class="notes">${n.slice().reverse().map((x) => `<li class="${x.used ? 'used' : ''}"><b>${x.kind === 'relic' ? '🏚️' : '🗣️'} ${esc(x.title)}</b> ${'🔥'.repeat(x.p)}${x.used ? ' <em>usato</em>' : ''}<br>${esc(x.text)}</li>`).join('')}</ul>`
        : '<p class="muted">Ancora niente. Scopri i relitti dell\'amministrazione (icone ?) e ascolta le voci nei ritrovi (☕ 🍺 🃏).</p>',
    });
  }
  function campaignUI() {
    modal({
      title: 'Campagna pubblicitaria', icon: '📢',
      body: `<p class="muted">Budget illimitato. Spese finora: <b>${euro(s.spent)}</b>. Ripetere lo stesso canale nello stesso giorno rende meno.</p>
        <ul class="cars">${ADS.map((a) => `<li class="car"><div><b>${esc(a.name)}</b><br><small>${esc(a.text)}</small><br><small>${euro(a.price)}</small></div><button type="button" data-ad="${a.id}">Compra</button></li>`).join('')}</ul>`,
      buttons: [{ label: 'Chiudi' }],
      onOpen: (el) => el.querySelectorAll('[data-ad]').forEach((b) => b.addEventListener('click', () => {
        const g = G.buyAd(s, b.dataset.ad);
        floatGain(g); refresh(); G.save(s);
        el.querySelector('.muted b').textContent = euro(s.spent);
      })),
    });
  }
  function listUI() {
    const t = G.teamStats(s.team);
    const mem = s.team.map((id) => ASSESSORI.find((a) => a.id === id));
    modal({
      title: s.listName, icon: '👥',
      body: `<h3>La tua lista</h3><ul class="team">${mem.map((a) => `<li><span class="big">${a.icon}</span><div><b>${esc(a.name)}</b><br><small>${esc(a.role)}</small></div></li>`).join('')}</ul>
        <table class="traits">${TRAITS.map((tr) => `<tr><td>${tr.label}</td><td class="st">${stars(t[tr.k])}</td></tr>`).join('')}
        <tr><td>Fedina</td><td>${Math.round(s.rep)}/100</td></tr><tr><td>Rischio scandalo</td><td>${Math.round(s.risk)}%</td></tr>
        <tr><td>Apparenza</td><td>${s.car ? esc(CARS.find((c) => c.id === s.car).name) : 'a piedi'}</td></tr></table>
        <h3>Gli avversari</h3><ul class="team">${RIVALS.map((r) => `<li><span class="big">${r.icon}</span><div><b>${esc(r.name)}</b> <small>detto “${esc(r.nick)}”</small><br><small>${esc(r.bio)}</small></div></li>`).join('')}</ul>`,
    });
  }

  // ---------------------------------------------------------------- HUD
  function refresh() {
    if (!s) return;
    const V = s.votes;
    $('gDay').textContent = `Giorno ${Math.min(s.day, DAYS)}/${DAYS}`;
    $('gSpent').textContent = euro(s.spent);
    const bars = [['player', s.listName, '#f2b705'], ['sindaco', RIVALS[0].name, RIVALS[0].color], ['commendatore', RIVALS[1].name, RIVALS[1].color]];
    const short = (k) => pct(V[k]).replace(',0%', '%');
    $('gPoll').innerHTML = `<div class="strip">${bars.map(([k, , col]) => `<i style="width:${V[k]}%;background:${col}"></i>`).join('')}<i style="width:${V.undecided}%;background:rgba(255,255,255,.12)"></i></div>
      <div class="nums">${bars.map(([k]) => `<span>${short(k)}</span>`).join('')}<span style="opacity:.55">?${short('undecided')}</span></div>
      <div class="full">${bars.map(([k, name, col]) => `<div class="pb ${k === 'player' ? 'me' : ''}" style="--c:${col}"><span class="nm">${esc(name)}</span><span class="v">${pct(V[k])}</span></div>`).join('')}<div class="pb und" style="--c:#888"><span class="nm">Indecisi</span><span class="v">${pct(V.undecided)}</span></div></div>`;
    $('bCar').textContent = player.state.car ? '🚶' : '🚗';
    $('bCar').title = player.state.car ? 'Scendi dall\'auto' : 'Sali in auto';
  }
  function clockText() { const h = G.hourOf(s); return `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.floor((h % 1) * 60)).padStart(2, '0')}`; }

  $('hud').onclick = () => $('hud').classList.toggle('open');
  $('bNotes').onclick = () => running && notebookUI();
  $('bAds').onclick = () => running && campaignUI();
  $('bList').onclick = () => running && listUI();
  $('bCenter').onclick = () => { follow = true; };
  $('bCar').onclick = () => {
    if (!running) return;
    if (player.state.car) { player.stop(); player.setCar(null); s.car = null; refresh(); G.save(s); toast('A piedi: si arriva anche nei vicoli.'); return; }
    const last = s.cars.at(-1);
    if (!last) { toast('Non hai un\'auto. Vai all\'autosalone 🚗 (a est, verso la statale).'); return; }
    const c = CARS.find((x) => x.id === last); s.car = c.id; player.stop(); player.setCar(c); refresh(); G.save(s);
    toast(`In auto: ${c.name}. Solo sulle strade carrabili.`);
  };

  // ---------------------------------------------------------------- flusso partita
  function titleScreen() {
    running = false; closeAll();
    document.body.classList.add('menu');
    const saved = G.load();
    modal({
      cls: 'title', dismissable: false,
      body: `<h1>${TITLE}</h1><p class="sub">${SUBTITLE}</p><p class="lead">Un gioco satirico sulla politica di paese. Acquedolci, 30 giorni al voto, tre candidati: uno sei tu.</p>`,
      buttons: [
        ...(saved && !saved.over ? [{ label: `Continua · giorno ${saved.day}`, onClick: () => { start(saved); } }] : []),
        { label: 'Nuova partita', cls: saved && !saved.over ? 'ghost' : '', onClick: () => { newFlow(); } },
      ],
    });
  }
  function newFlow() {
    // 1. il personaggio, 2. la lista, 3. il briefing
    openCharScreen(() => listScreen());
  }
  function listScreen() {
    const chosen = [];
    const card = (a) => `<li class="ass" data-id="${a.id}"><span class="big">${a.icon}</span><div class="who"><b>${esc(a.name)}</b><small>${esc(a.role)}</small>
      <table>${TRAITS.map((t) => `<tr><td>${t.label}</td><td class="st">${stars(a[t.k])}</td></tr>`).join('')}</table></div></li>`;
    modal({
      title: 'Componi la lista', icon: '🗳️', cls: 'wide', dismissable: false,
      body: `<label class="field">Nome della lista <input id="listName" maxlength="28" value="Acquedolci Rinasce"></label>
        <p class="muted">Scegli ${LIST_SIZE} assessori. Le stelle pesano sul gioco: Popolarità (consenso), Ricchezza (le spese pesano meno), Fama (1 criminale · 5 brav'uomo: meno scandali), Carisma (comizi), Rete (più voci nei bar).</p>
        <p class="teamSum" id="teamSum"></p>
        <ul class="assList">${ASSESSORI.map(card).join('')}</ul>`,
      buttons: [{
        label: 'Presenta la lista', cls: 'go', disabled: true, onClick: (el) => {
          const name = el.querySelector('#listName').value.trim() || 'Acquedolci Rinasce';
          briefing(G.newGame(name, chosen.slice()));
        },
      }],
      onOpen: (el) => {
        const go = el.querySelector('.go');
        const upd = () => {
          const t = G.teamStats(chosen);
          el.querySelector('#teamSum').innerHTML = chosen.length
            ? TRAITS.map((tr) => `${tr.label} <b class="st">${stars(t[tr.k])}</b>`).join(' · ') + ` <em>(${chosen.length}/${LIST_SIZE})</em>`
            : `Nessun assessore scelto (0/${LIST_SIZE})`;
          go.disabled = chosen.length !== LIST_SIZE;
        };
        el.querySelectorAll('.ass').forEach((li) => li.addEventListener('click', () => {
          const id = li.dataset.id, i = chosen.indexOf(id);
          if (i >= 0) chosen.splice(i, 1); else if (chosen.length < LIST_SIZE) chosen.push(id); else return toast(`La lista ha ${LIST_SIZE} posti`);
          li.classList.toggle('sel', i < 0); upd();
        }));
        upd();
      },
    });
  }
  function briefing(state) {
    modal({
      title: 'Acquedolci, oggi', icon: '📰', dismissable: false,
      body: INTRO_TEXT.map((p) => `<p>${esc(p)}</p>`).join('') + `<p class="muted">Tocca la mappa per muoverti. Scopri i relitti (?), ascolta le voci nei ritrovi, fai un comizio al giorno nelle piazze (📣), compra pubblicità (📢) e, se vuoi, un'auto (🚗). Il budget è illimitato: il conto lo paga il punteggio.</p>`,
      buttons: [{ label: 'Inizia la campagna', onClick: () => { G.save(state); start(state); } }],
    });
  }
  function start(state) {
    s = state; closeAll();
    document.body.classList.remove('menu');
    document.body.classList.add('playing');
    // si parte in strada davanti al Municipio (il nodo stradale più vicino, mai dentro un edificio)
    const st = nav.nearest(START.x, START.z, false) || START;
    player.place(st.x, st.z);
    player.setCar(s.car ? CARS.find((c) => c.id === s.car) : null);
    controls.target.copy(player.state.pos);
    camera.position.set(player.state.pos.x + 35, player.state.pos.y + 95, player.state.pos.z + 70);
    controls.update();
    follow = true; running = true; lastHour = -1;
    refresh();
    $('hint').classList.add('show'); setTimeout(() => $('hint').classList.remove('show'), 7000);
  }
  function endOfDay() {
    running = false;
    const V0 = { ...s.votes };
    const r = G.endDay(s);
    G.save(s); refresh();
    if (s.over) return finish();
    const dv = (k) => { const d = s.votes[k] - V0[k]; return `${d >= 0 ? '+' : ''}${d.toFixed(1).replace('.', ',')}`; };
    modal({
      title: `Fine del giorno ${s.day - 1}`, icon: '🌙', dismissable: false,
      body: `${r.scandal ? `<p class="bad"><b>Scandalo!</b> ${esc(r.scandal)}</p>` : ''}
        <table class="traits"><tr><td>${esc(s.listName)}</td><td>${pct(s.votes.player)} (${dv('player')})</td></tr>
        <tr><td>${RIVALS[0].name}</td><td>${pct(s.votes.sindaco)} (${dv('sindaco')})</td></tr>
        <tr><td>${RIVALS[1].name}</td><td>${pct(s.votes.commendatore)} (${dv('commendatore')})</td></tr>
        <tr><td>Spese</td><td>${euro(s.spent)}</td></tr></table>
        <p class="muted">Mancano ${DAYS - s.day + 1} giorni al voto.</p>`,
      buttons: [{ label: 'Nuovo giorno', onClick: () => { running = true; } }],
    });
  }
  function finish() {
    running = false; closeAll();
    if (s.over.kind === 'venduto') {
      modal({
        title: 'Hai venduto la candidatura', icon: '🤝', cls: 'title', dismissable: false,
        body: '<p>Assessorato “di peso”, cena di pesce ogni venerdì. Il Commendatore vince al primo turno. Acquedolci resta com\'era: tu, un po\' più sazio.</p><p class="bad">Punteggio: 0</p>',
        buttons: [{ label: 'Ricomincia', onClick: () => { G.wipe(); titleScreen(); } }],
      });
      return;
    }
    const e = G.election(s);
    const names = { player: s.listName, sindaco: RIVALS[0].name, commendatore: RIVALS[1].name };
    const won = e.winner === 'player';
    modal({
      title: won ? 'Sei il nuovo sindaco!' : 'Le urne hanno parlato', icon: won ? '🏆' : '🗳️', cls: 'title', dismissable: false,
      body: `<table class="traits">${Object.entries(e.res).sort((a, b) => b[1] - a[1]).map(([k, v]) => `<tr><td>${esc(names[k])}</td><td>${pct(v)}</td></tr>`).join('')}</table>
        <p>${won ? 'Acquedolci ha scelto di cambiare. Ora arriva la parte difficile: mantenere le promesse.' : `Vince ${esc(names[e.winner])}. Il paese resta com'era, ma tu hai fatto rumore.`}</p>
        <table class="traits"><tr><td>Spese totali</td><td>${euro(s.spent)}</td></tr><tr><td>Fedina</td><td>${Math.round(s.rep)}/100</td></tr><tr><td><b>Punteggio</b></td><td><b>${e.score.toLocaleString('it-IT')}</b></td></tr></table>`,
      buttons: [{ label: 'Nuova partita', onClick: () => { G.wipe(); titleScreen(); } }],
    });
    s.over.result = e; G.save(s);
  }
  function questUI(q) {
    running = false;
    const eff = (e) => [e.cost ? euro(e.cost) : ''].filter(Boolean).join(' ');
    modal({
      title: q.who, icon: q.icon, dismissable: false, cls: 'quest',
      body: `<p>${esc(q.text)}</p>`,
      buttons: [q.no, q.yes].map((e, i) => ({
        label: e.label + (eff(e) ? '' : ''), cls: i ? '' : 'ghost', onClick: () => {
          const r = G.answerQuest(s, q, i === 1);
          G.save(s); refresh();
          if (s.over) { finish(); return; }
          if (r.cons) floatGain(r.cons);
          if (r.msg) toast(esc(r.msg), 4200);
          running = true;
        },
      })),
    });
  }

  // ---------------------------------------------------------------- ciclo
  let acc = 0;
  function update(dt, t) {
    player.update(dt, camera, t);
    // la camera segue: sposta bersaglio e camera insieme, senza cambiare l'inquadratura
    if (follow && s) {
      const p = player.state.pos, tg = controls.target;
      const k = Math.min(1, dt * 3.5);
      const dx = (p.x - tg.x) * k, dy = (p.y - tg.y) * k, dz = (p.z - tg.z) * k;
      tg.x += dx; tg.y += dy; tg.z += dz; camera.position.x += dx; camera.position.y += dy; camera.position.z += dz;
    }
    updateIcons();
    if (!s || !running || modalOpen()) return;
    // relitti: si scoprono passandoci accanto
    for (const r of RELICS) {
      if (s.relics.includes(r.id)) continue;
      if (Math.hypot(player.state.pos.x - r.x, player.state.pos.z - r.z) < 22 + teamRet() * 3) { discover(r); return; }
    }
    if (G.tick(s, dt)) { endOfDay(); return; }
    if (s.nextQuest <= 0) { s.nextQuest = 70 + Math.random() * 80; const q = G.pickQuest(s); if (q) { questUI(q); return; } }
    acc += dt;
    if (acc > 1) {
      acc = 0;
      $('gClock').textContent = clockText();
      const h = Math.round(G.hourOf(s) * 4) / 4;
      if (h !== lastHour) { lastHour = h; applyHour(h); }
      if (Math.random() < 0.1) G.save(s);
    }
  }

  return { titleScreen, update, get state() { return s; }, player, nav, goTo };
}
