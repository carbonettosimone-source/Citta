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
node scripts/build-streets.mjs                           # strade, muri, lampioni → public/data/streets.json (~5 min)
npm run dev                                              # http://127.0.0.1:5190
npm run build && node scripts/pack-artifact.mjs          # pagina + file per la pubblicazione
```

Coordinate: EPSG:25833 (UTM 33N) come DBTR, MDT e ortofoto; nel renderer X = est, Z = sud, origine al Municipio.

## Perché niente upscaler

Un upscaler (Real-ESRGAN e simili) inventa dettaglio plausibile: coppi, auto e aiuole che non ci sono. Il SITR pubblica l'ortofoto 2022 già a 20 cm, quindi si usa quella: 182 tessere a 25 cm (34 MB) sul paese, caricate a gruppi di 3×3 intorno al punto guardato (`src/ortho-hr.js`). Le foto di Commons invece servono solo come riferimento di forma e colore: ingrandirle non aggiungerebbe nulla al modello.

Al posto dell'upscaler, per la vista da lontano del gioco:

- **Coppi veri sui tetti a falde** (`ortho.js` → `COPPI`). Ogni falda ha il suo riferimento: lungo la gronda e su per la pendenza (`buildings.js` → `roofFrame`). Lì si disegnano colonne alterne di coppi e canali, l'ombra dove i coppi si sovrappongono e il tono che cambia da coppo a coppo. Il colore resta quello della foto di quel tetto, mediato su 3-4 m, così spariscono le sbavature di facciate e ombre. Il disegno sfuma quando il pixel è più grosso di un coppo (niente moiré). Le terrazze tengono la foto, con cisterne e pannelli veri.
- **Dettaglio del suolo** fino a ~650 m invece di 260.
- **Nitidezza adattiva al contrasto** (AMD CAS, `post.js`): la scena si disegna in un buffer con antialiasing 4×, poi un passaggio rinforza i dettagli fini senza aloni. Si spegne dalle impostazioni.

## Strade, mare e suolo

- **Strade**: la carreggiata è l'unione (Clipper) delle strisce di tutte le vie, quindi gli incroci si chiudono da soli. Il marciapiede, a larghezza costante per via, è la fascia fino alle facciate; le piazze pedonali sono in basolato. Tutto meno le piante degli edifici, a tessere da 128 m. Nel browser ogni poligono è triangolato e diviso in lati ≤ 6 m per seguire il terreno: la divisione dipende solo dal lato, quindi non restano fessure.
- **Mare**: c'è dove l'ortofoto vede acqua collegata al mare aperto (le piscine no). Le onde sono treni sinusoidali con normali analitiche, spenti quando diventano più corti di pochi pixel (niente moiré). Ci sono il riflesso del cielo con Fresnel, il sole, la trasparenza sul bassofondo e la schiuma della battigia.
- **Costa**: il MDT 2013 ha il mare a 0 m e taglia la spiaggia sulla riva del 2013. Il fondale scende con la distanza da riva, e la spiaggia del 2022 resta asciutta.
- **Suolo da vicino**: detail mapping. La tinta viene dalla foto, la grana dal materiale giusto: ciottoli sulla spiaggia, erba sul verde, terra ed erba secca altrove.

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

## Facciate da foto stradali aperte (pipeline automatica)

Per modellare palazzi e piazze «come sono» servono foto da terra. Street View non si può usare: i termini di Google Maps Platform vietano di scaricare le immagini e di ricavarne opere derivate. Si usano quindi foto con licenza aperta, cioè **Mapillary (CC BY-SA 4.0)**, e le proprie foto.

Stato della copertura aperta ad Acquedolci: 97 foto nel nucleo, 51 sull'autostrada e quasi nessuna nelle vie. Bisogna quindi produrre le foto, con un giro col telefono. Poi è tutto automatico:

1. **Girare col telefono** (20–30 minuti per il centro):
   - installare l'app **Mapillary** (gratuita) e accedere;
   - modalità *foto* a intervalli (ogni 2–3 s), telefono fermo in mano, **rivolto verso le facciate** (di lato, non davanti);
   - camminare piano lungo una via per lato, e attorno alla piazza scattando verso l'interno;
   - caricare con il Wi-Fi e attendere l'elaborazione (alcune ore).
2. `MAPILLARY_TOKEN=… node scripts/fetch-street-photos.mjs` scarica le foto con posizione e direzione.
3. `python3 scripts/facade-from-photos.py` (`pip install pillow numpy`) trova, per ogni lato di ogni edificio, le foto che lo inquadrano. Scarta le parti nascoste da altri edifici, corregge la direzione della bussola con le linee orizzontali e produce la **facciata raddrizzata in vista frontale**, in scala metrica (40 px/m). Fa anche i fogli di contatto per edificio (`data/facade-crops/`).
4. Dai fogli si descrivono le facciate (piani, campate, aperture, balconi, piano terra, colori) in `facade-specs.json`, che il renderer userà per costruire ogni edificio.

Provata sulle 97 foto esistenti: 20 lati inquadrati (le aree di servizio dell'autostrada), a conferma che la geometria funziona. La raddrizzatura è buona ma l'assetto della camera non è perfettamente noto, quindi restano piccole inclinazioni. Il punto 4 e la lettura di `facade-specs.json` nel renderer non ci sono ancora: il formato lo fissiamo sulle foto vere delle vie.

Le foto sono **solo riferimento**: nessun pixel finisce nel gioco. Credito richiesto: Mapillary contributors (CC BY-SA 4.0).

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
- La piazza davanti alla Chiesa Madre è come nell'ortofoto 2022 (pavimentata): le siepi della foto del 2006 non ci sono più.
