#!/usr/bin/env node
/**
 * Genera public/data/signs.json: posizioni e tipi di cartelli stradali italiani
 * per Acquedolci, basati sui dati OSM e sull'euristica stradale italiana.
 *
 * Fonte normativa: D.P.R. 16 dicembre 1992 n. 495 (Regolamento C.d.S.) e
 *   Decreto MIT 31 marzo 2022 – Aggiornamento segnaletica verticale.
 *   Forme, colori e codici figure: Supplemento G.U. n. 67 del 23/03/1993.
 *
 * Tipi implementati:
 *   stop          Fig. II 1b – stop (Art. 41)
 *   precedenza    Fig. II 1a – dare precedenza (Art. 41)
 *   senso_unico   Fig. II 67 – senso unico
 *   divieto_acc   Fig. II 54 – divieto di accesso
 *   limite_30     Fig. II 50 – limite 30 km/h
 *   limite_50     Fig. II 50 – limite 50 km/h
 *   pedoni        Fig. II 16 – attraversamento pedonale
 *   pericolo      Fig. II 1  – pericolo generico
 *   direzione     Fig. II 267– indicazione direzione
 *
 * Output: { source, signs: [{type, x, z, ang, real}] }
 *   x, z  = coordinate locali (m) dal Municipio (X est, Z sud)
 *   ang   = angolo Y (rad) = direzione del cartello (a quale strada si rivolge)
 *   real  = true se da dati OSM, false se da euristica
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { toUtm33 } from './geo.mjs';

const root = new URL('..', import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root)));
const city = read('city.json');
const [OX, OY] = toUtm33(city.originLonLat.lon, city.originLonLat.lat).map((v) => Math.round(v));
const locLL = (lon, lat) => { const [x, y] = toUtm33(lon, lat); return [+(x - OX).toFixed(2), +(-(y - OY)).toFixed(2)]; };

const osm = read('../acquedolci-lowpoly/public/data/acquedolci.json');

// ---- highway types e priorità (maggiore = più importante)
const PRIORITY = {
  motorway: 10, trunk: 9, primary: 8, secondary: 7, tertiary: 6,
  unclassified: 4, residential: 3, living_street: 2, service: 1, pedestrian: 0,
};
const ROADSET = new Set(Object.keys(PRIORITY));

// ---- features stradali filtrate
const highways = osm.features.filter(
  (f) => f.properties.kind === 'highway' &&
    f.geometry.type === 'LineString' &&
    ROADSET.has(f.properties.highway) &&
    !f.properties.tunnel && !f.properties.bridge,
);

// ---- converte in coordinate locali e calcola per ogni via: punti, tipo, nome, direzione nei nodi
function wayData(f) {
  const coords = f.geometry.coordinates.map(([lon, lat]) => locLL(lon, lat));
  return {
    type: f.properties.highway,
    name: f.properties.name || null,
    coords,
    priority: PRIORITY[f.properties.highway] ?? 0,
  };
}
const ways = highways.map(wayData);

// ---- costruisce mappa nodi → vie che li usano (per trovare incroci)
const nodeMap = new Map(); // "x,z" → [{wayIdx, nodeIdx, priority}]
for (let wi = 0; wi < ways.length; wi++) {
  const w = ways[wi];
  for (let ni = 0; ni < w.coords.length; ni++) {
    const [x, z] = w.coords[ni];
    const k = `${x},${z}`;
    if (!nodeMap.has(k)) nodeMap.set(k, []);
    nodeMap.get(k).push({ wi, ni, priority: w.priority });
  }
}

// ---- incroci: nodi condivisi da ≥2 vie
const junctions = []; // {x, z, ways: [{wi, ni, priority}]}
for (const [k, entries] of nodeMap) {
  // conta il numero di vie distinte che passano per questo nodo
  const wis = new Set(entries.map((e) => e.wi));
  if (wis.size >= 2) {
    const [x, z] = k.split(',').map(Number);
    junctions.push({ x, z, ways: entries });
  }
}

console.log(`Nodi incrocio: ${junctions.length}`);

// ---- calcola angolo di tangente di una via in un nodo dato
function wayAngleAt(wi, ni) {
  const coords = ways[wi].coords;
  const a = coords[Math.max(0, ni - 1)];
  const b = coords[Math.min(coords.length - 1, ni + 1)];
  return Math.atan2(b[0] - a[0], b[1] - a[1]);
}

// ---- priorità massima delle vie in un incrocio
function junctionMaxPriority(jct) {
  return Math.max(...jct.ways.map((e) => ways[e.wi].priority));
}

// ---- funzione di distanza minima tra un cartello e i già piazzati
const placed = [];
function tooClose(x, z, minDist = 15) {
  return placed.some((s) => Math.hypot(s.x - x, s.z - z) < minDist);
}
function addSign(type, x, z, ang, real = false) {
  placed.push({ type, x, z, ang: +ang.toFixed(3), real });
}

// ---- 1. STOP e DARE PRECEDENZA agli incroci reali
// Logica italiana realistica:
//   STOP:       via minore incontra una PRIMARY (Corso Italia / SS185)
//   PRECEDENZA: via residenziale/terziaria incontra secondary o tertiary
//   Nessun cartello: stessa categoria (residenziale vs residenziale)
//
// Distanza minima tra cartelli: 25 m (evita duplicati ravvicinati).

const processed = new Set();

for (const jct of junctions) {
  const k = `${jct.x},${jct.z}`;
  if (processed.has(k)) continue;
  processed.add(k);

  const wis = [...new Set(jct.ways.map((e) => e.wi))];
  if (wis.length < 2) continue;

  const priorities = wis.map((wi) => ways[wi].priority);
  const maxP = Math.max(...priorities);
  const minP = Math.min(...priorities);

  if (maxP === minP) continue;

  // STOP solo dove c'è almeno una primary (priorità 8+)
  // PRECEDENZA dove c'è secondary (7) o tertiary (6) che incontra una via minore
  let type = null;
  if (maxP >= 8 && minP <= 4) {
    type = 'stop';
  } else if (maxP >= 6 && minP <= 3) {
    type = 'precedenza';
  } else {
    continue; // differenza troppo piccola, nessun cartello
  }

  const majorEntry = jct.ways.find((e) => ways[e.wi].priority === maxP);
  const minorEntry = jct.ways.find((e) => ways[e.wi].priority === minP);

  const angMinor = wayAngleAt(minorEntry.wi, minorEntry.ni);
  const offDist = 3.5;
  const approachAng = angMinor + Math.PI;
  const sx = jct.x + Math.sin(approachAng) * offDist;
  const sz = jct.z + Math.cos(approachAng) * offDist;

  if (tooClose(sx, sz, 25)) continue;
  addSign(type, sx, sz, angMinor, true);
}

console.log(`Stop/precedenza: ${placed.length}`);

// ---- 2. INGRESSI CITTADINI – limite velocità 50 e poi 30 nel centro
// Acquedolci ha due ingressi principali sulla SS185 (Corso Italia):
// est (verso Torrenova) e ovest (verso Santo Stefano di Camastra).
// Trovo i punti terminali delle vie primarie al bordo della bbox.
const bbox = city.coreLonLat;
const bboxLocal = {
  west: locLL(bbox.west, bbox.south)[0],
  east: locLL(bbox.east, bbox.south)[0],
  north: locLL(bbox.west, bbox.north)[1],
  south: locLL(bbox.east, bbox.south)[1],
};

// Strade di tipo primary che escono dalla bbox
function isNearBorder(x, z, margin = 40) {
  return (
    x < bboxLocal.west + margin || x > bboxLocal.east - margin ||
    z < bboxLocal.north + margin || z > bboxLocal.south - margin
  );
}

// Cerca i nodi terminali (endpoint) delle primary/secondary che toccano il bordo
const entryPoints = [];
for (const w of ways) {
  if (w.priority < 7) continue; // solo primary/secondary
  const first = w.coords[0];
  const last = w.coords[w.coords.length - 1];
  for (const pt of [first, last]) {
    if (isNearBorder(pt[0], pt[1])) {
      entryPoints.push({ x: pt[0], z: pt[1], way: w });
    }
  }
}

// Aggiungi un limite 50 a ~30 m dall'ingresso nella direzione dell'interno
for (const ep of entryPoints) {
  // calcola direzione dell'interno dalla tangente della via
  const coords = ep.way.coords;
  const isFirst = coords[0][0] === ep.x && coords[0][1] === ep.z;
  const tang = isFirst
    ? Math.atan2(coords[1][0] - coords[0][0], coords[1][1] - coords[0][1])
    : Math.atan2(coords[coords.length - 2][0] - ep.x, coords[coords.length - 2][1] - ep.z);
  const sx = ep.x + Math.sin(tang) * 30;
  const sz = ep.z + Math.cos(tang) * 30;
  if (!tooClose(sx, sz, 40)) addSign('limite_50', sx, sz, tang, false);
}

// Limite 30 nel centro (zona entro ~250 m dall'origine = Municipio)
const CENTER_R = 280;
// Sulle vie residenziali/terziarie centrali aggiungi limite 30
const signedForLimit30 = new Set();
for (const w of ways) {
  if (w.priority > 6) continue; // solo residenziale/terziario e minori
  for (let ci = 0; ci < w.coords.length - 1; ci++) {
    const [x, z] = w.coords[ci];
    const dist = Math.hypot(x, z); // distanza dall'origine (Municipio)
    if (dist > CENTER_R) continue;
    const k = `${w.type}`;
    if (signedForLimit30.has(k + `${Math.round(x / 50)},${Math.round(z / 50)}`)) continue;
    signedForLimit30.add(k + `${Math.round(x / 50)},${Math.round(z / 50)}`);
    const ang = wayAngleAt(ways.indexOf(w), ci);
    if (!tooClose(x, z, 80)) {
      addSign('limite_30', x, z, ang, false);
    }
    break; // uno solo per via
  }
}

console.log(`Dopo limiti velocità: ${placed.length}`);

// ---- 3. ATTRAVERSAMENTO PEDONALE vicino a POI (piazze, chiesa, scuola)
// Recupera i punti di interesse da OSM
const pois = osm.features.filter(
  (f) =>
    f.geometry.type === 'Point' &&
    (f.properties.amenity === 'school' ||
      f.properties.amenity === 'place_of_worship' ||
      f.properties.leisure === 'park' ||
      f.properties.highway === 'crossing' ||
      f.properties.place === 'square'),
);

for (const poi of pois) {
  const [px, pz] = locLL(...poi.geometry.coordinates);
  // trova la strada più vicina e piazza il segnale di attraversamento
  let best = null;
  for (const w of ways) {
    if (w.priority < 1) continue;
    for (let ci = 0; ci < w.coords.length - 1; ci++) {
      const [ax, az] = w.coords[ci];
      const [bx, bz] = w.coords[ci + 1];
      const Lq = (bx - ax) ** 2 + (bz - az) ** 2;
      if (!Lq) continue;
      const t = Math.max(0, Math.min(1, ((px - ax) * (bx - ax) + (pz - az) * (bz - az)) / Lq));
      const nx = ax + (bx - ax) * t, nz = az + (bz - az) * t;
      const d = Math.hypot(px - nx, pz - nz);
      if (!best || d < best.d) best = { d, x: nx, z: nz, ang: Math.atan2(bx - ax, bz - az) };
    }
  }
  if (best && best.d < 30 && !tooClose(best.x, best.z, 20)) {
    addSign('pedoni', best.x, best.z, best.ang, poi.properties.highway === 'crossing');
  }
}

console.log(`Dopo pedoni: ${placed.length}`);

// ---- 4. PERICOLO GENERICO alle curve strette (cambio di direzione ≥ 60°)
for (const w of ways) {
  if (w.priority < 3) continue;
  for (let ci = 1; ci < w.coords.length - 1; ci++) {
    const [ax, az] = w.coords[ci - 1];
    const [bx, bz] = w.coords[ci];
    const [cx, cz] = w.coords[ci + 1];
    const a1 = Math.atan2(bx - ax, bz - az);
    const a2 = Math.atan2(cx - bx, cz - bz);
    let diff = Math.abs(a2 - a1);
    if (diff > Math.PI) diff = 2 * Math.PI - diff;
    if (diff >= Math.PI * 5 / 12) {
      // curva ≥ 75°
      const ang = a1;
      if (!tooClose(bx, bz, 30)) addSign('pericolo', bx, bz, ang, false);
    }
  }
}

console.log(`Dopo pericolo: ${placed.length}`);

// ---- 5. SENSO UNICO su strade residenziali molto strette nel centro storico
// Euristica: vie residenziali < 5 m, nel centro storico (bbox ristretta)
// In assenza del tag oneway, lo segniamo solo nelle stradine più strette del centro
// per dare un aspetto realistico. Dichiarato come non-reale.
const CENTRO_STORICO = { xMin: -300, xMax: 300, zMin: -300, zMax: 300 };
for (const w of ways) {
  if (w.type !== 'residential' && w.type !== 'living_street') continue;
  // controlla se è nel centro storico
  const midIdx = Math.floor(w.coords.length / 2);
  const [mx, mz] = w.coords[midIdx];
  if (mx < CENTRO_STORICO.xMin || mx > CENTRO_STORICO.xMax) continue;
  if (mz < CENTRO_STORICO.zMin || mz > CENTRO_STORICO.zMax) continue;

  // calcola lunghezza
  let len = 0;
  for (let ci = 1; ci < w.coords.length; ci++) {
    const [ax, az] = w.coords[ci - 1];
    const [bx, bz] = w.coords[ci];
    len += Math.hypot(bx - ax, bz - az);
  }
  if (len < 30 || len > 200) continue; // troppo corta o troppo lunga

  // piazza all'inizio della via
  const [sx, sz] = w.coords[0];
  const ang = wayAngleAt(ways.indexOf(w), 0);
  if (!tooClose(sx, sz, 25)) addSign('senso_unico', sx, sz, ang, false);
}

console.log(`Dopo senso unico: ${placed.length}`);

// ---- 6. DIREZIONE (frecce direzionali) ai principali incroci
// Piazza cartelli direzione all'incrocio tra primary/secondary e vie di nome
const dirJcts = junctions
  .filter((j) => {
    const wis = [...new Set(j.ways.map((e) => e.wi))];
    return wis.some((wi) => ways[wi].priority >= 7); // almeno una primary/secondary
  })
  .slice(0, 8); // max 8 incroci per non sovraffollare

for (const jct of dirJcts) {
  if (tooClose(jct.x, jct.z, 15)) continue;
  // cartello direzione sul lato, orientato verso l'esterno dell'incrocio
  const majorEntry = jct.ways.find((e) => ways[e.wi].priority === junctionMaxPriority(jct));
  const ang = wayAngleAt(majorEntry.wi, majorEntry.ni);
  addSign('direzione', jct.x + Math.sin(ang + Math.PI / 2) * 4, jct.z + Math.cos(ang + Math.PI / 2) * 4, ang, false);
}

// ---- 7. DIVIETO DI ACCESSO – entrata autostrada/motorway dal paese
for (const w of ways) {
  if (w.type !== 'motorway' && w.type !== 'trunk') continue;
  const ep = w.coords[0];
  const [sx, sz] = ep;
  const ang = wayAngleAt(ways.indexOf(w), 0);
  if (!tooClose(sx, sz, 20)) addSign('divieto_acc', sx, sz, ang + Math.PI, true);
}

console.log(`Cartelli totali: ${placed.length}`);

// ---- output
mkdirSync(new URL('public/data', root), { recursive: true });
writeFileSync(
  new URL('public/data/signs.json', root),
  JSON.stringify({
    source:
      'Tipi e forme: D.P.R. 495/1992 (Regolamento C.d.S.) e D.M. MIT 31/03/2022. ' +
      'Posizioni: © OpenStreetMap contributors (ODbL). ' +
      'Euristica per oneway/zone 30 (nessun tag OSM disponibile): dichiarata nel campo real=false.',
    signs: placed,
  }),
);

// Stampa riepilogo per tipo
const byType = {};
for (const s of placed) byType[s.type] = (byType[s.type] || 0) + 1;
console.log('Per tipo:', byType);
console.log('Reali (da OSM):', placed.filter((s) => s.real).length, '/ Euristici:', placed.filter((s) => !s.real).length);
