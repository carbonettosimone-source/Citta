# The Lord of the Sweetwater (Acquedolci)

Gioco satirico sulla politica di paese in vista delle comunali 2027: si vincono le elezioni come le vince il politico di paese, a colpi di favori e di alleanze fra famiglie. Il paese è Acquedolci ricostruito dai dati reali (sotto).

**Intro** (`src/intro.js`): quattro inquadrature in movimento, ognuna con la sua ora del giorno, bande nere, dissolvenze e didascalie:

1. carrellata laterale lungo la costa, poco al largo;
2. attorno al castello Larcan-Gravina;
3. dall'alto sulla piazza e sul Municipio;
4. la Chiesa Madre e il suo quartiere, salendo.

Tutte da lontano e dall'alto, dove il modello rende meglio. Poi la panoramica finale al tramonto, con le Eolie e il titolo. Si salta con "Salta", Esc o Invio; si rivede dalle impostazioni.

## Acquedolci Reale

Acquedolci ricostruita in 3D solo da dati reali e aperti: dove esiste un dato misurato, si usa quello.

| Cosa | Fonte | Licenza |
|---|---|---|
| Pianta di 2253 edifici e tipo (civile, chiesa, baracca, tettoia…) | DBTR 2013, CTR 1:10.000 — SITR Regione Siciliana | CC BY 4.0 |
| Altezza di 1683 edifici, tetti a falde | LiDAR PST (DSM first + DTM 2 m) — MASE, Geoportale Nazionale | dati pubblici |
| Rilievo del terreno | MDT 2013 2 m — SITR | CC BY 4.0 |
| Suolo e tetti (foto vera) | Ortofoto 2022 20 cm — SITR: 0,5 m ovunque, 25 cm nativi in streaming intorno a chi guarda | CC BY 4.0 |
| Tinta di facciate e coppi | calibrata su foto panoramiche del paese (Commons, Nuccio Miraglia, CC BY-SA 2.0): solo statistiche di colore | |
| Colore delle facciate (~950 edifici) | letto dall'ortofoto 2022: facciate visibili per relief displacement | CC BY 4.0 |
| Alberi (110 mila, per specie) | Meta/WRI High Resolution Canopy Height 1 m; specie da uliveti/frutteti/macchia DBTR | CC BY 4.0 |
| Strade: assi | OpenStreetMap | ODbL |
| Strade: larghezze, marciapiedi | misurate facciata-facciata sulle piante DBTR; superfici come poligoni (unione Clipper) | CC BY 4.0 |
| Mare, spiaggia, verde | copertura del suolo classificata dall'ortofoto 2022 a 2 m | CC BY 4.0 |
| Cespugli (37 mila) | dove l'ortofoto è verde e non c'è né un albero né un edificio | |
| Muri, recinzioni, cancelli (2350) | DBTR 2013, strato Elementi divisori | CC BY 4.0 |
| Tetti a falde (866) | LiDAR + colore dei coppi nell'ortofoto, padiglione con straight skeleton | |
| Casotti scala sulle terrazze (121) | volumi misurati dal LiDAR sopra il tetto | |
| Nomi dei luoghi | OpenStreetMap | ODbL |
| Sfondo: litorale Cefalù–Capo d'Orlando (MDT 100 m, foto 25 m) e isole Eolie (MDT 40 m, foto 12 m) | MDT 2013 e ortofoto 2022 — SITR | CC BY 4.0 |
| Castello Larcan-Gravina: perimetro dei ruderi | DBTR 2013, strato Altre strutture (rudere) | CC BY 4.0 |

## Luoghi d'interesse modellati a mano (`src/landmarks.js`)

Pianta, altezze e orientamento vengono dai dati (DBTR, LiDAR, ortofoto). Forme e dettagli sono ricostruiti guardando foto di Wikimedia Commons, usate solo come riferimento visivo e non come texture:

- **Palazzo del Municipio e Fontana dei Delfini**: [foto di Episcopello](https://commons.wikimedia.org/wiki/File:Municipio_Acquedolci.jpg), CC BY-SA 4.0
- **Chiesa Madre di San Benedetto il Moro**: foto di Subbass1 ([02](https://commons.wikimedia.org/wiki/File:Acquedolci,_Chiesa_Madre_della_Beata_Vergine_Assunta_(02).jpg), [12](https://commons.wikimedia.org/wiki/File:Acquedolci,_Chiesa_San_Benedetto_il_Moro_(12).jpg)), CC BY-SA 4.0; Azotoliquido, CC BY-SA 3.0
- **Castello Larcan-Gravina, torri e cappella di San Giuseppe**: [foto di Azotoliquido](https://commons.wikimedia.org/wiki/File:Acquedolci_castello.JPG), CC BY-SA 3.0

## Pipeline

```bash
npm install
node scripts/fetch-buildings.mjs                         # DBTR → data/buildings.json
node scripts/fetch-dtm.mjs                               # MDT → data/dtm.bin
node scripts/fetch-ortho.mjs                             # ortofoto → data/ortho/
node scripts/fetch-ortho-hr.mjs                          # 25 cm a tessere da 256 m → data/ortho-hr25/ (legge model.json: poi rilanciare build-model)
node scripts/photo-palette.mjs <cartella foto>           # tavolozza dal vero → data/photo-palette.json
NODE_USE_ENV_PROXY=1 node scripts/fetch-lidar.mjs        # ~30 min, ripristinabile → data/lidar-cache.json
node scripts/fetch-dbtr-extra.mjs                        # strade, muri, vegetazione DBTR → data/dbtr-extra.json
NODE_USE_ENV_PROXY=1 node scripts/fetch-canopy.mjs       # chiome Meta/WRI → data/canopy.json
node scripts/facade-from-ortho.mjs                       # colori facciata e tetto → data/facade-colors.json
node scripts/build-landcover.mjs                         # mare, spiaggia, verde + MDT della costa → data/landcover.png, data/dtm-sea.bin
node scripts/fetch-background.mjs                        # litorale ed Eolie a bassa risoluzione → data/bg/
node scripts/build-model.mjs                             # edifici, tetti, alberi → public/data/
node scripts/build-streets.mjs                           # strade, piazze, muri, lampioni → public/data/streets.json (~5 min)
npm run dev                                              # http://127.0.0.1:5190
npm run build && node scripts/pack-artifact.mjs          # pagina + file per la pubblicazione
```

Coordinate: EPSG:25833 (UTM 33N) come DBTR, MDT e ortofoto; nel renderer X = est, Z = sud, origine al Municipio.

## Perché niente upscaler

Un upscaler (Real-ESRGAN e simili) inventa dettaglio plausibile: coppi, auto e aiuole che non ci sono. Il SITR pubblica l'ortofoto 2022 già a 20 cm, quindi si usa quella: 182 tessere a 25 cm (34 MB) sul paese, caricate a gruppi di 3×3 intorno al punto guardato (`src/ortho-hr.js`). Le foto di Commons invece servono solo come riferimento di forma e colore: ingrandirle non aggiungerebbe nulla al modello.

Al posto dell'upscaler, per la vista da lontano del gioco:

- **Coppi veri sui tetti a falde** (`ortho.js` → `COPPI`). Ogni falda ha il suo riferimento: lungo la gronda e su per la pendenza (`buildings.js` → `roofFrame`). Lì si disegnano colonne alterne di coppi e canali, l'ombra dove i coppi si sovrappongono e il tono che cambia da coppo a coppo. Il colore resta quello della foto di quel tetto, mediato su 3-4 m, così spariscono le sbavature di facciate e ombre. Il disegno sfuma quando il pixel è più grosso di un coppo (niente moiré). Le terrazze tengono la foto, con cisterne e pannelli veri.
- **Dettaglio del suolo** nel paese, anche in vista Drone: albedo del materiale e tinta lenta dell'ortofoto, non la foto ingrandita. La foto intera torna oltre qualche metro per pixel, così le colline non perdono il tono dell'ortofoto.
- **Nitidezza adattiva al contrasto** (AMD CAS, `post.js`): la scena si disegna in un buffer con antialiasing 4×, poi un passaggio rinforza i dettagli fini senza aloni. Si spegne dalle impostazioni.

## Strade, mare e suolo

- **Strade**: la carreggiata è l'unione (Clipper) delle strisce di tutte le vie, quindi gli incroci si chiudono da soli. Il marciapiede, a larghezza costante per via, è la fascia fino alle facciate. Tutto meno le piante degli edifici, a tessere da 128 m. Nel browser ogni poligono è triangolato e diviso in lati ≤ 6 m per seguire il terreno: la divisione dipende solo dal lato, quindi non restano fessure.
- **Piazze** (`surf.plaza`): non sono il buffer di `highway=pedestrian` (nel paese quasi non esiste, e un asse bufferizzato non copre una piazza). Sono poligoni. Prima gli anelli chiusi OSM: `place=square`, aree `highway=pedestrian` / `amenity=marketplace` / `landuse=pedestrian`, e poligoni nominati Piazza, Largo o Piazzale che non sono assi stradali. L'anello va portato in senso antiorario (tre piazze su quattro nell'estratto sono orarie: Clipper le butterebbe come buchi), allargato di 1,2 m, poi si tolgono edifici, carreggiata e marciapiedi. La via che attraversa la piazza resta asfalto. Dove l'anello OSM non arriva — il sagrato della Fontana dei Delfini è fuori dal disegno di Piazza Vittorio Emanuele III — si riempiono i vuoti compatti (circa 160–5600 m², non nastri) chiusi dalle strade, in tessuto edificato (almeno il 17% di piante di edifici nel raggio di 60 m), che la copertura del suolo non segna come mare, spiaggia o verde. I fondi grandi e la campagna restano suolo. Nel browser ogni pezzo prende il materiale del luogo (`streets.js`, dal baricentro, non una foto): la corte della Fontana dei Delfini e il sagrato della Chiesa Madre sono mattoni chiari a spina di pesce; il piazzale davanti alla facciata nord della chiesa (Piazza Libertà) resta asfalto, non un tappeto di pietra; Piazza Giovanni Paolo II è prato con una fascia pedonale di pietra rossiccia, e la carreggiata con le strisce non si copre. Le altre (Federico II, slarghi) tengono il basolato. La pietra sta 8 cm sopra l'asfalto, con cordolo basso solo contro la carreggiata. Circa 0,85 m di sfumatura verso il suolo nudo. Intorno ai monumenti, senza sostituirli: scala con corrimano, vasi di cotto e sedie bianche al Municipio, cancellata e lampioni a globo sui fianchi, chiosco di vetro senza insegna a lato della chiesa, aiuole rialzate, panchine e lampioni a due bracci nel giardino di Giovanni Paolo II. Gli alberi LiDAR restano.
- **Suolo in vista Drone**: nel paese, dove non c'è una mesh di strada o piazza, il colore è l'albedo del materiale (erba, terra, ciottoli), non la foto ingrandita. L'ortofoto resta una tinta lenta. Sotto i ~20 cm per pixel si rivede un po' di foto nitida; oltre circa 1–2 m per pixel torna l'ortofoto intera, così le colline tengono il tono della foto e non il beige del materiale. Nessun upscaler.
- **Mare**: c'è dove l'ortofoto vede acqua collegata al mare aperto (le piscine no). Le onde sono treni sinusoidali con normali analitiche, spenti quando diventano più corti di pochi pixel (niente moiré). Ci sono il riflesso del cielo con Fresnel, il sole, la trasparenza sul bassofondo e la schiuma della battigia.
- **Costa**: il MDT 2013 ha il mare a 0 m e taglia la spiaggia sulla riva del 2013. Il fondale scende con la distanza da riva, e la spiaggia del 2022 resta asciutta.
- **Suolo**: detail mapping senza upscaler. Da vicino e dal drone, nel paese, l'albedo è il materiale (ciottoli sulla spiaggia, erba sul verde, terra ed erba secca altrove); la foto dà la tinta lenta. Sulle colline e da lontano resta l'ortofoto.

## Sfondo: litorale ed Eolie

Il litorale da Cefalù a Capo d'Orlando (con Madonie e Nebrodi) e le sette Eolie vengono dalle stesse fonti del paese, a bassa risoluzione, quindi hanno gli stessi colori. Le isole stanno nella posizione vera.

- **Passata separata:** lo sfondo si disegna prima del paese, con una camera gemella (50 m – 250 km). Il paese poi si disegna sopra con la sua precisione (0,5 m – 12 km): niente z-fighting e niente logarithmic depth, che romperebbe il polygonOffset delle strade.
- **Curvatura terrestre:** con rifrazione standard (k = 0,13), a 50 km il mare copre ~170 m. Per questo dal paese delle Eolie si vedono solo le cime, come dal vero.
- **Foschia:** esponenziale. Il paese resta nitido, le isole sono sagome azzurrine.

## Impostazioni e ora del giorno

Il pulsante ⚙︎ apre le impostazioni, che restano salvate nel browser:

- **Nomi dei luoghi:** spenti di base.
- **Ora del giorno:** 0–24, sulla data di oggi, ora di Roma. Il pulsante "Adesso" porta all'ora attuale.
- **Luci notturne:** accese o spente.

Come funziona l'ora del giorno (`src/daylight.js`):

- **Sole e luna:** posizione vera per Acquedolci, con formule SunCalc/Meeus semplificate. La fase della luna esce dalla direzione del sole.
- **Cielo e luce:** il colore del cielo (giorno, tramonto, notte), la foschia, le stelle e le luci di sole, cielo e luna seguono l'ora.
- **Superfici con la luce della foto:** ortofoto e sfondo prendono una tinta del momento. I ritocchi della foto si fanno prima della tinta, così di notte le ombre non si "schiariscono".
- **Di notte:**
  - si accende circa un terzo delle finestre, a caso per palazzo;
  - i lampioni fanno pozze di luce sulla strada e hanno un alone;
  - Municipio, Chiesa Madre e castello sono illuminati dai fari.

Le luci notturne sono tipiche, non censite.

## Colori dal vero

L'ortofoto vede le facciate di sbieco e le tinge di rosa-malva: a* mediano 6,4 contro 1,3 nelle foto da terra. `photo-palette.mjs` estrae dalle panoramiche solo i pixel d'intonaco (via cielo, mare, verde, coppi, ombre). Poi `build-model.mjs` porta la tinta di ogni edificio sulla distribuzione dal vero per quantili: l'ordine resta quello misurato, la luminosità anche. I coppi nelle foto sono ~1,4 volte più saturi e più aranci; il ritocco è nello shader dei tetti (`ortho.js`, in CIELAB).

## Limiti noti

- Colline a sud: fuori dalla striscia LiDAR costiera, altezza stimata per tipo e superficie (campo `src: "stima"`).
- Facciate: dove dall'alto non se ne vede nessuna (edifici bassi, tetti chiari come i muri, ombre) il colore è preso dalla distribuzione di quelli misurati. Finestre e piani terra sono moduli tipici, non le aperture vere.
- Mapillary nel bbox copre quasi solo l'autostrada A20: non è usato per le facciate.
- Lampioni, cisterne, solari termici e balconi sono tipici del paese ma non censiti: posizione plausibile, non rilevata. I casotti scala invece sono misurati.
- Niente alberi né cespugli sulla spiaggia né entro 12 m dal mare: lì le chiome Meta/WRI e il "verde" dell'ortofoto (l'acqua bassa della battigia) sono falsi positivi.
- Nessuna palma: i dati non la distinguono con sicurezza da altre chiome strette. Gli alberi lungo Via Lungomare, controllati sull'ortofoto a 25 cm, sono pini domestici.
- Il fondale non è misurato: la profondità cresce con la distanza da riva (5 cm per metro, al massimo 6 m). Anche le onde sono tipiche, non osservate.
- La piazza davanti alla Chiesa Madre è quella dell'ortofoto 2022: le siepi della foto del 2006 non ci sono più. Le superfici sono geometria e materiali disegnati, non un ingrandimento della foto e non i pixel di Street View.
- **Dati OSM delle piazze** (estratto già in `acquedolci-lowpoly/public/data/acquedolci.json`, non un nuovo scarico Overpass): tre `place=square` ad anello chiuso — Piazza Vittorio Emanuele III (intorno al Municipio), Piazza Libertà (Chiesa Madre), Piazza Giovanni Paolo II — più Piazza Federico II, che è un parcheggio nominato piazza (`amenity=parking`), non un asse. Non ci sono aree `highway=pedestrian` né `amenity=marketplace`. L'anello di Piazza Vittorio Emanuele III gira intorno al palazzo e non contiene il sagrato della Fontana dei Delfini: quel vuoto lo copre il riempimento (strada intorno, centro edificato, non verde). Lo stesso riempimento prende altri slarghi compatti del paese; un prato, la spiaggia, un fondo agricolo o un vuoto troppo grande restano suolo, con l'albedo del materiale in vista Drone. Il tipo di pavimento (spina, asfalto, prato) si sceglie nel renderer dal punto, quindi non serve rifare `streets.json` per cambiare solo il materiale. Per rifare i poligoni: `node scripts/build-landcover.mjs` se manca `data/landcover.png`, poi `node scripts/build-streets.mjs` → `public/data/streets.json`.
- Mancano auto, persone e la grafica del chiosco (niente marchi copiati dalle foto). I vasi, le sedie, la cancellata, il chiosco e le aiuole sono modelli tipici messi dove cadono pianta e foto, non un rilievo.
