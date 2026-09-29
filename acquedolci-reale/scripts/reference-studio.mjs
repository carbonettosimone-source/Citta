/**
 * Studio di riferimento. Scarica metadati e foto Street View Static in `reference/`
 * (cartella gitignored, fuori da public/ e dal bundle del giocatore).
 *
 * La chiave si legge solo dall'ambiente, mai da un file del repository:
 *   VITE_GOOGLE_MAPS_API_KEY=... node scripts/reference-studio.mjs
 * oppure GOOGLE_MAPS_API_KEY. Non viene scritta nell'indice né nei log.
 *
 * Sulla chiave, in Google Cloud: abilita Street View Static API. Restringi il referrer, oppure per questo script a riga di comando usa una chiave
 * limitata agli IP, non una chiave da pagina web. Le foto sono un riferimento per chi modella:
 * non vanno copiate in public/ né usate come texture.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'reference');
if (outDir.includes(`${path.sep}public${path.sep}`) || outDir.includes(`${path.sep}dist${path.sep}`)) {
  console.error('La cartella di lavoro non può stare in public/ o dist/.');
  process.exit(1);
}

const key = (process.env.VITE_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || '').trim();
if (key.length < 10) {
  console.error('Manca la chiave. Nella shell, senza scriverla in un file del repository:');
  console.error('  VITE_GOOGLE_MAPS_API_KEY=… node scripts/reference-studio.mjs');
  console.error('Le foto finiscono in reference/ e non entrano nel gioco.');
  process.exit(1);
}

/** Tre piazze. heading 0 = nord. I palazzi del primo lotto sono in src/plaza-buildings.js. */
const PLACES = [
  { id: 've3', name: 'Piazza Vittorio Emanuele III', lat: 38.05618, lon: 14.58815, headings: [0, 90, 180, 270] },
  { id: 'liberta', name: 'Piazza Libertà', lat: 38.05513, lon: 14.58572, headings: [0, 90, 180, 270] },
  { id: 'gp2', name: 'Piazza Giovanni Paolo II', lat: 38.05645, lon: 14.5863, headings: [0, 90, 180, 270] },
];

function hideKey(url) { return String(url).replace(/key=[^&]+/g, 'key=***'); }

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${hideKey(url)}`);
  return res.json();
}

fs.mkdirSync(outDir, { recursive: true });
const shots = [];

for (const place of PLACES) {
  const metaUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${place.lat},${place.lon}&source=outdoor&key=${encodeURIComponent(key)}`;
  let meta;
  try { meta = await getJson(metaUrl); } catch (err) {
    console.error(place.id, err.message);
    shots.push({ place: place.id, status: 'errore', error: err.message });
    continue;
  }
  if (meta.status !== 'OK' || !meta.pano_id) {
    console.error(place.id, meta.status || 'senza panorama');
    shots.push({ place: place.id, name: place.name, status: meta.status || 'ZERO_RESULTS' });
    continue;
  }
  for (const heading of place.headings) {
    const file = `${place.id}-h${String(heading).padStart(3, '0')}.jpg`;
    const imgUrl = `https://maps.googleapis.com/maps/api/streetview?size=640x480&pano=${encodeURIComponent(meta.pano_id)}&heading=${heading}&pitch=8&fov=90&source=outdoor&key=${encodeURIComponent(key)}`;
    try {
      const res = await fetch(imgUrl);
      if (!res.ok) throw new Error(`${res.status} ${hideKey(imgUrl)}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 800) throw new Error('risposta troppo corta, foto non salvata');
      fs.writeFileSync(path.join(outDir, file), buf);
      shots.push({
        file, place: place.id, name: place.name, status: 'OK',
        pano: meta.pano_id, date: meta.date || null,
        lat: meta.location?.lat ?? place.lat, lon: meta.location?.lng ?? place.lon, heading,
      });
      console.log('scritto', file, meta.date || '');
    } catch (err) {
      console.error(file, err.message);
      shots.push({ file, place: place.id, status: 'errore', error: err.message });
    }
  }
}

const index = {
  note: 'Riferimento di lavoro per modellare. Non copiare questi file in public/ e non usarli come texture.',
  shots,
};
fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(index, null, 2));
fs.writeFileSync(path.join(outDir, 'LEGGIMI.txt'), [
  'Foto Street View scaricate come riferimento di lavoro.',
  'Non vanno in public/, non vanno in git, non sono texture del gioco.',
  'Per rifarle: VITE_GOOGLE_MAPS_API_KEY nella shell, poi node scripts/reference-studio.mjs.',
  '',
].join('\n'));
const ok = shots.filter((s) => s.status === 'OK').length;
console.log(`fatto: ${ok} foto in reference/`);
process.exit(ok ? 0 : 1);
