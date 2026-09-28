# Acquedolci Reale

Acquedolci ricostruita in 3D solo da dati reali e aperti: dove esiste un dato misurato, si usa quello.

| Cosa | Fonte | Licenza |
|---|---|---|
| Pianta di 2253 edifici e tipo (civile, chiesa, baracca, tettoia…) | DBTR 2013, CTR 1:10.000 — SITR Regione Siciliana | CC BY 4.0 |
| Altezza di 1683 edifici, tetti a falde | LiDAR PST (DSM first + DTM 2 m) — MASE, Geoportale Nazionale | dati pubblici |
| Rilievo del terreno | MDT 2013 2 m — SITR | CC BY 4.0 |
| Suolo e tetti (foto vera) | Ortofoto 2022 20 cm — SITR | CC BY 4.0 |
| Colore delle facciate (~950 edifici) | letto dall'ortofoto 2022: facciate visibili per relief displacement | CC BY 4.0 |
| Alberi (110 mila, per specie) | Meta/WRI High Resolution Canopy Height 1 m; specie da uliveti/frutteti/macchia DBTR | CC BY 4.0 |
| Strade: assi | OpenStreetMap | ODbL |
| Strade: larghezze, marciapiedi | misurate facciata-facciata sulle piante DBTR | CC BY 4.0 |
| Muri, recinzioni, cancelli (2350) | DBTR 2013, strato Elementi divisori | CC BY 4.0 |
| Tetti a falde (866) | LiDAR + colore dei coppi nell'ortofoto, padiglione con straight skeleton | |
| Casotti scala sulle terrazze (121) | volumi misurati dal LiDAR sopra il tetto | |
| Nomi dei luoghi | OpenStreetMap | ODbL |

## Pipeline

```bash
npm install
node scripts/fetch-buildings.mjs                         # DBTR → data/buildings.json
node scripts/fetch-dtm.mjs                               # MDT → data/dtm.bin
node scripts/fetch-ortho.mjs                             # ortofoto → data/ortho/
NODE_USE_ENV_PROXY=1 node scripts/fetch-lidar.mjs        # ~30 min, ripristinabile → data/lidar-cache.json
node scripts/fetch-dbtr-extra.mjs                        # strade, muri, vegetazione DBTR → data/dbtr-extra.json
NODE_USE_ENV_PROXY=1 node scripts/fetch-canopy.mjs       # chiome Meta/WRI → data/canopy.json
node scripts/facade-from-ortho.mjs                       # colori facciata e tetto → data/facade-colors.json
node scripts/build-model.mjs                             # edifici, tetti, alberi → public/data/
node scripts/build-streets.mjs                           # strade, muri, lampioni → public/data/streets.json
npm run dev                                              # http://127.0.0.1:5190
npm run build && node scripts/pack-artifact.mjs          # pagina + file per la pubblicazione
```

Coordinate: EPSG:25833 (UTM 33N) come DBTR, MDT e ortofoto; nel renderer X = est, Z = sud, origine al Municipio.

## Limiti noti

- Colline a sud: fuori dalla striscia LiDAR costiera, altezza stimata per tipo e superficie (campo `src: "stima"`).
- Facciate: dove dall'alto non se ne vede nessuna (edifici bassi, tetti chiari come i muri, ombre) il colore è preso dalla distribuzione di quelli misurati. Finestre e piani terra sono moduli tipici, non le aperture vere.
- Mapillary nel bbox copre quasi solo l'autostrada A20: non è usato per le facciate.
- Lampioni, cisterne, solari termici e balconi sono tipici del paese ma non censiti: posizione plausibile, non rilevata. I casotti scala invece sono misurati.
- Nessuna palma: i dati non la distinguono con sicurezza da altre chiome strette.
