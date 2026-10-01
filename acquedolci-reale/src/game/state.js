/**
 * Stato della partita e regole. Niente DOM qui: la UI (ui.js) legge e chiama.
 *
 * Intenzioni di voto: giocatore, due avversari e indecisi, sempre a somma 100. Ogni azione sposta
 * punti dagli indecisi (e un po' dagli avversari) al giocatore; ogni sera gli avversari fanno la
 * loro campagna. Il budget non ha limite, ma ogni euro speso pesa sul punteggio finale.
 */
import { ASSESSORI, RIVALS, RUMORS, QUESTS, SCANDALS, DAYS, DAY_SECONDS, ADS, CARS, TRAITS } from './data.js';

const KEY = 'sw-game-v1';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rnd = () => Math.random();

export function newGame(listName, team) {
  const t = teamStats(team);
  const player = 6 + t.pop * 1.6;
  return {
    v: 1, listName, team,
    day: 1, clock: 0,          // secondi trascorsi nella giornata
    votes: { player, sindaco: 31, commendatore: 30, undecided: 100 - player - 61 },
    spent: 0, rep: 40 + t.fam * 8, risk: 0,
    notes: [],                  // taccuino: { kind: 'relic'|'rumor', id, t, p, title, text, used }
    relics: [], visited: {},    // relitti scoperti, ritrovi visitati oggi (id → giorno)
    adsToday: {}, rallyDay: 0,
    cars: [], car: null,        // auto possedute, auto in uso
    questsDone: [], nextQuest: 45,
    log: [], over: null,
  };
}

export function load() { try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); return s?.v === 1 ? s : null; } catch { return null; } }
export function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* niente memoria */ } }
export function wipe() { try { localStorage.removeItem(KEY); } catch { /* */ } }

/** media delle stelle della lista (1–5) */
export function teamStats(team) {
  const out = {};
  for (const { k } of TRAITS) out[k] = team.length ? team.reduce((a, id) => a + (ASSESSORI.find((x) => x.id === id)?.[k] || 0), 0) / team.length : 0;
  return out;
}

/** apparenza (0–5) dall'auto in uso */
export const look = (s) => (s.car ? CARS.find((c) => c.id === s.car)?.look || 0 : 0);

/**
 * Sposta consenso verso il giocatore (d > 0) o via (d < 0). I punti arrivano per metà dagli
 * indecisi e per metà dall'avversario indicato (o da entrambi).
 */
export function shift(s, d, from = null) {
  const V = s.votes;
  if (d > 0) {
    // rendimenti decrescenti: oltre il 40% ogni punto costa sempre di più
    d *= Math.max(0.12, 1 - Math.max(0, V.player - 25) / 45);
    const fromU = Math.min(V.undecided, d * 0.5);
    V.undecided -= fromU;
    let rest = d - fromU;
    const rivals = from ? [from] : ['sindaco', 'commendatore'];
    for (const r of rivals) { const take = Math.min(V[r] - 2, rest / rivals.length); V[r] -= take; rest -= take; }
    V.player += d - rest;
  } else {
    const lose = Math.min(V.player - 0.5, -d);
    V.player -= lose; V.undecided += lose * 0.5;
    V.sindaco += lose * 0.2; V.commendatore += lose * 0.3;
  }
  normalize(s);
}
function normalize(s) {
  const V = s.votes; const tot = V.player + V.sindaco + V.commendatore + V.undecided;
  for (const k in V) V[k] = V[k] * 100 / tot;
}

/** moltiplicatore del guadagno di consenso: lista, apparenza, fedina */
function gainMult(s, trait = 'pop') {
  const t = teamStats(s.team);
  return (0.75 + t[trait] * 0.1) * (1 + look(s) * 0.05) * (0.8 + s.rep / 250);
}

export function spend(s, euro) { s.spent += euro; }

export function discoverRelic(s, relic) {
  if (s.relics.includes(relic.id)) return null;
  s.relics.push(relic.id);
  s.notes.push({ kind: 'relic', id: relic.id, t: 'sindaco', p: 2, title: relic.title, text: relic.text, used: false });
  const g = 0.35 * gainMult(s, 'pop');
  shift(s, g, 'sindaco');
  return g;
}

/** una visita al giorno per ritrovo: 1–2 voci (di più con la Rete) e un po' di consenso */
export function hangout(s, spot) {
  if (s.visited[spot.id] === s.day) return { already: true };
  s.visited[spot.id] = s.day;
  const t = teamStats(s.team);
  const known = new Set(s.notes.filter((n) => n.kind === 'rumor').map((n) => n.text));
  const pool = RUMORS.filter((r) => !known.has(r.text));
  const n = Math.min(pool.length, 1 + (rnd() < t.ret / 6 ? 1 : 0));
  const got = [];
  for (let i = 0; i < n; i++) {
    const r = pool.splice(Math.floor(rnd() * pool.length), 1)[0];
    const rival = RIVALS.find((x) => x.id === r.t);
    const note = { kind: 'rumor', id: `r${s.notes.length}`, t: r.t, p: r.p, title: `Su ${rival.name}`, text: r.text, used: false };
    s.notes.push(note); got.push(note);
  }
  const g = 0.12 * gainMult(s, 'pop');
  shift(s, g);
  return { got, gain: g };
}

/** comizio: uno al giorno. Ogni argomento usato vale il suo peso × carisma × credibilità */
export function rally(s, noteIds) {
  if (s.rallyDay === s.day) return { already: true };
  s.rallyDay = s.day;
  const t = teamStats(s.team);
  const cred = 0.6 + t.fam * 0.08 + s.rep / 250;
  let total = 0.35 * gainMult(s, 'car');
  const hits = { sindaco: 0, commendatore: 0 };
  for (const id of noteIds) {
    const n = s.notes.find((x) => x.id === id && !x.used);
    if (!n) continue;
    n.used = true;
    const g = n.p * 0.32 * (0.7 + t.car * 0.12) * cred;
    hits[n.t] += g; total += g * 0.4;
  }
  for (const r of ['sindaco', 'commendatore']) if (hits[r]) shift(s, hits[r], r);
  shift(s, total);
  return { gain: total + hits.sindaco + hits.commendatore };
}

/** pubblicità: rende meno se ripetuta lo stesso giorno */
export function buyAd(s, id) {
  const ad = ADS.find((a) => a.id === id);
  const k = `${s.day}:${id}`;
  const times = s.adsToday[k] || 0;
  s.adsToday[k] = times + 1;
  spend(s, ad.price);
  const g = ad.gain * 0.45 * gainMult(s, 'pop') / (1 + times * 0.8);
  shift(s, g);
  return g;
}

export function buyCar(s, id) {
  const c = CARS.find((x) => x.id === id);
  if (!s.cars.includes(id)) { s.cars.push(id); spend(s, c.price); }
  s.car = id;
  return c;
}

export function pickQuest(s) {
  const t = teamStats(s.team);
  const pool = QUESTS.filter((q) => !s.questsDone.includes(q.id) && (q.id !== 'ritiro' || s.day >= 8));
  if (!pool.length) return null;
  // una lista con Fama bassa attira più proposte losche
  const shady = pool.filter((q) => q.yes.rep < -5);
  if (shady.length && rnd() < 0.5 - t.fam * 0.08) return shady[Math.floor(rnd() * shady.length)];
  return pool[Math.floor(rnd() * pool.length)];
}

export function answerQuest(s, q, accept) {
  s.questsDone.push(q.id);
  const e = accept ? q.yes : q.no;
  if (e.end) { s.over = { kind: e.end }; return e; }
  if (e.cost) spend(s, e.cost);
  if (e.rep) s.rep = clamp(s.rep + e.rep, 0, 100);
  if (e.risk) s.risk = clamp(s.risk + e.risk, 0, 100);
  if (e.cons) shift(s, e.cons > 0 ? e.cons * gainMult(s, 'pop') : e.cons);
  return e;
}

/**
 * Fine giornata: gli avversari fanno campagna, forse scoppia uno scandalo.
 * Restituisce il riepilogo da mostrare.
 */
export function endDay(s) {
  const t = teamStats(s.team);
  const V = s.votes, before = V.player;
  // il sindaco perde terreno da solo; il commendatore compra spazio. Più sei avanti, più ti attaccano.
  const lead = Math.max(0, V.player - Math.max(V.sindaco, V.commendatore));
  const sd = -0.3 + rnd() * 0.6 + lead * 0.02, cm = 0.5 + rnd() * 1.0 + lead * 0.05;
  const fromU = Math.min(V.undecided * 0.1, Math.max(0, sd) + cm);
  V.undecided -= fromU;
  V.sindaco += sd; V.commendatore += cm;
  V.undecided += Math.max(0, -sd);
  // passaparola della lista
  shift(s, 0.05 + t.pop * 0.05);
  normalize(s);
  let scandal = null;
  const p = s.risk / 100 * (1.1 - t.fam * 0.15);
  if (rnd() < p) {
    scandal = SCANDALS[Math.floor(rnd() * SCANDALS.length)];
    shift(s, -(2 + s.risk / 12));
    s.risk = Math.max(0, s.risk - 25);
    s.rep = clamp(s.rep - 8, 0, 100);
  }
  s.day += 1; s.clock = 0;
  if (s.day > DAYS) s.over = { kind: 'voto' };
  return { delta: V.player - before, scandal };
}

/** avanzamento del tempo; true quando la giornata è finita */
export function tick(s, dt) {
  s.clock += dt;
  s.nextQuest -= dt;
  return s.clock >= DAY_SECONDS;
}
/** ora del giorno mostrata (7:30 → 21:00) */
export function hourOf(s) {
  // 7:30 → 21:00. Il giorno scorre in fretta, ma l'ora dorata del tramonto (19:20 → 21:00) dura il 30% della
  // giornata di gioco: i tramonti d'Acquedolci vanno guardati
  const f = Math.min(1, s.clock / DAY_SECONDS);
  return f <= 0.7 ? 7.5 + 11.8 * (f / 0.7) : 19.3 + 1.7 * ((f - 0.7) / 0.3);
}

/** il voto: le intenzioni con un po' di rumore, gli indecisi si spartiscono in proporzione */
export function election(s) {
  const V = s.votes;
  const noise = () => 0.9 + rnd() * 0.2;
  const raw = { player: V.player * noise(), sindaco: V.sindaco * noise(), commendatore: V.commendatore * noise() };
  const tot = raw.player + raw.sindaco + raw.commendatore;
  const res = {}; for (const k in raw) res[k] = raw[k] * 100 / tot;
  const winner = Object.entries(res).sort((a, b) => b[1] - a[1])[0][0];
  return { res, winner, score: score(s, res.player, winner === 'player') };
}

/** punteggio: voti presi, meno le spese (pesano meno con una lista ricca), più la fedina pulita */
export function score(s, pct, won) {
  const t = teamStats(s.team);
  const spendPenalty = s.spent / 250 * (1.25 - t.ric * 0.15);
  return Math.max(0, Math.round(pct * 100 + (won ? 2500 : 0) + s.rep * 10 - spendPenalty));
}
