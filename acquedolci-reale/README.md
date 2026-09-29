# Acquedolci Reale

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
node scripts/build-model.mjs                             # edifici, tetti, alberi → public/data/
node scripts/build-streets.mjs                           # strade, muri, lampioni → public/data/streets.json (~5 min)
npm run dev                                              # http://127.0.0.1:5190
npm run build && node scripts/pack-artifact.mjs          # pagina + file per la pubblicazione
```

Coordinate: EPSG:25833 (UTM 33N) come DBTR, MDT e ortofoto; nel renderer X = est, Z = sud, origine al Municipio.

## Perché niente upscaler

Un upscaler (Real-ESRGAN e simili) inventa dettaglio plausibile: coppi, auto e aiuole che non ci sono. Il SITR pubblica l'ortofoto 2022 già a 20 cm, quindi si usa quella: 182 tessere a 25 cm (34 MB) sul paese, caricate a gruppi di 3×3 intorno al punto guardato (`src/ortho-hr.js`). Le foto di Commons invece servono solo come riferimento di forma e colore: ingrandirle non aggiungerebbe nulla al modello.

## Strade, mare e suolo

- **Strade**: la carreggiata è l'unione (Clipper) delle strisce di tutte le vie, quindi gli incroci si chiudono da soli. Il marciapiede, a larghezza costante per via, è la fascia fino alle facciate; le piazze pedonali sono in basolato. Tutto meno le piante degli edifici, a tessere da 128 m. Nel browser ogni poligono è triangolato e diviso in lati ≤ 6 m per seguire il terreno: la divisione dipende solo dal lato, quindi non restano fessure.
- **Mare**: c'è dove l'ortofoto vede acqua collegata al mare aperto (le piscine no). Le onde sono treni sinusoidali con normali analitiche, spenti quando diventano più corti di pochi pixel (niente moiré). Ci sono il riflesso del cielo con Fresnel, il sole, la trasparenza sul bassofondo e la schiuma della battigia.
- **Costa**: il MDT 2013 ha il mare a 0 m e taglia la spiaggia sulla riva del 2013. Il fondale scende con la distanza da riva, e la spiaggia del 2022 resta asciutta.
- **Suolo da vicino**: detail mapping. La tinta viene dalla foto, la grana dal materiale giusto: ciottoli sulla spiaggia, erba sul verde, terra ed erba secca altrove.

## Colori dal vero

L'ortofoto vede le facciate di sbieco e le tinge di rosa-malva: a* mediano 6,4 contro 1,3 nelle foto da terra. `photo-palette.mjs` estrae dalle panoramiche solo i pixel d'intonaco (via cielo, mare, verde, coppi, ombre). Poi `build-model.mjs` porta la tinta di ogni edificio sulla distribuzione dal vero per quantili: l'ordine resta quello misurato, la luminosità anche. I coppi nelle foto sono ~1,4 volte più saturi e più aranci; il ritocco è nello shader dei tetti (`ortho.js`, in CIELAB).

## Limiti noti

- Colline a sud: fuori dalla striscia LiDAR costiera, altezza stimata per tipo e superficie (campo `src: "stima"`).
- Facciate: dove dall'alto non se ne vede nessuna (edifici bassi, tetti chiari come i muri, ombre) il colore è preso dalla distribuzione di quelli misurati. Finestre e piani terra sono moduli tipici, non le aperture vere.
- Mapillary nel bbox copre quasi solo l'autostrada A20: non è usato per le facciate.
- Lampioni, cisterne, solari termici e balconi sono tipici del paese ma non censiti: posizione plausibile, non rilevata. I casotti scala invece sono misurati.
- Nessuna palma: i dati non la distinguono con sicurezza da altre chiome strette. Gli alberi lungo Via Lungomare, controllati sull'ortofoto a 25 cm, sono pini domestici.
- Il fondale non è misurato: la profondità cresce con la distanza da riva (5 cm per metro, al massimo 6 m). Anche le onde sono tipiche, non osservate.
- La piazza davanti alla Chiesa Madre è come nell'ortofoto 2022 (pavimentata): le siepi della foto del 2006 non ci sono più.
