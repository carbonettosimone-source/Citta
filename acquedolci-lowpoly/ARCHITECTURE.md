# Architettura — City Low Poly Engine

Motore riusabile per ricostruire **qualsiasi città** da OpenStreetMap + DEM Terrarium, in stile low-poly navigabile (terza persona, touch mobile).

## Struttura

```
src/
  main.js                      # thin: scena, controlli, chiama buildCity
  touchControls.js
  cities/
    acquedolci.json            # profilo città (bbox, origin, path dati, stylePack)
  stylePacks/
    mediterraneanCoast.js      # colori/parametri strade/edifici
  engine/
    buildCity.js               # orchestratore layer
    geo.js                     # proiezione locale (setOrigin)
    terrain.js                 # DEM sample + mesh
    layers.js                  # priorità + regole landuse (no blanket)
    roads/RoadBuilder.js
    buildings/BuildingBuilder.js
    vegetation/VegetationBuilder.js
    landmarks/LandmarkBuilder.js
scripts/
  fetch-osm.mjs                # CITY=<id> o arg città
  fetch-dem.mjs
public/data/
  acquedolci.json
  dem/meta.json + heightmap.bin
```

## Ordine layer (fisso)

1. **terrain** (DEM)
2. **water**
3. **soft vegetation** (park/orchard/forest/farmland…)
4. **roads** (sidewalk → curb → asphalt → markings + junction plates)
5. **buildings**
6. **trees**
7. **landmarks** (marker + etichette CSS2D)

**Regola dura:** mai disegnare `landuse=residential|commercial|industrial|…` come tappeto a terra: coprirebbe le strade.

## Aggiungere una nuova città (5 passi)

1. **Crea** `src/cities/<id>.json` copiando `acquedolci.json`  
   - `bbox`, `origin` (centro), `stylePack`, path `data.osm` / `data.demMeta`
2. **Scarica OSM**  
   `node scripts/fetch-osm.mjs <id>`
3. **Scarica DEM**  
   `node scripts/fetch-dem.mjs <id>`
4. **Punta main** (o un selettore) al config:  
   `import cityConfig from './cities/<id>.json'`
5. **`npm run dev`** — eventualmente aggiungi/adatta uno style pack se il clima/architettura è diversa.

Niente tile Google: solo geometria OSM + elevazione aperta.

## Controlli

- Desktop: WASD / frecce, Shift sprint, drag orbita, rotella zoom  
- Mobile: joystick sinistro, drag destro (orbita), ⚡ sprint, +/− zoom

## Limiti noti

- Intersezioni stradali semplificate (dischi, non CSG)
- Edifici possono sovrapporsi leggermente alle strade (OSM)
- DEM ~30 m: pendenza di quartiere ok, cordoli non geodeticamente precisi
- Landmark limitati ai tag OSM presenti nel bbox

## Comportamenti chiave (quality pass)

- **Inset edifici–strade:** i footprint vengono ritirati di ~1.1 m dal bordo asfalto (`nearestRoad` + normale uscente) così muri e AABB non mangiano la carreggiata. Parametro: `cities/*.json` → `buildings.roadClearance`.
- **Marciapiedi:** soglia più bassa (larghezza ≥ ~3.6 m) per continuità su residenziali strette; contrasto chiaro asfalto/marciapiede.
- **Spawn:** il player nasce sul centro di una strada carrozzabile (quota DEM + offset asfalto), non dentro gli edifici.
- **Landmark:** church/station/school/townhall/park/square + tourism/historic/shop/fuel; max ~12 etichette nominate.

## Look AAA (economico)

- Desktop: ACES tone mapping + soft shadows + bloom leggero + color grade caldo mediterraneo (`engine/look/createLook.js`).
- Mobile: stesso lighting ACES, **senza** EffectComposer (target ~30 fps).

## Piazze camminabili

`engine/plazas/PlazaBuilder.js` aggrega `place=square`, highway pedonali nominate e toponimi *Piazza/Largo*, costruisce hull convesso drapato sul DEM. Il player cammina con `sampleY` (nessuna collisione vs mesh piazza).

## City DNA

`public/data/dna/<city>.json` da Sentinel-2 (Element84 Earth Search) + prior siciliani. Applicato in `buildCity` via `applyDnaToStyle` (tetti/muri/asfalto/piazza/mare).

## Satellite / City DNA (color only)

Sentinel-2 (open) and Sicilian priors feed **City DNA** (`public/data/dna/<city>.json`) used only for **tint**:
roof terracotta variance, asphalt, plaza, sidewalk, terrain. **Never** used for geometry, footprints, or alignment.
Geometry remains OSM ways/polygons + DEM Terrarium. No Google tiles / proprietary imagery for mesh.

## Height stack (meters above DEM sample)

| Layer | ΔY |
|-------|-----|
| terrain | 0 |
| soft veg | +0.03 |
| plaza | +0.10 |
| footway | +0.14 |
| sidewalk | +0.18 |
| curb | +0.22 |
| asphalt | +0.26 |
| junction | +0.27 |
| markings | +0.28 |
| barriers | +0.30 base |

Roofs share the **exact post-inset footprint** as walls (eaves = wall vertices). Collision AABBs use a stronger road clearance than the visual mesh; points within carriageway+margin never collide with buildings.


## City Appearance (satellite + street-level, open only)

`scripts/fetch-appearance.mjs` writes `public/data/appearance/<city>.json`.

| Signal | Role | Not used for |
|--------|------|--------------|
| **Sentinel-2 L2A** (Element84 STAC / COG TCI) | Per-building **roof color** sampling + plaza/pavement DNA refresh | Geometry, footprints, alignment |
| **Mapillary** (optional `MAPILLARY_TOKEN`) | Facade / wall color cues near image locations | Mesh geometry |
| **OSM** `building=*`, levels, colour tags | Typology, height priors, optional exact colours | — |
| **Mediterranean priors** | Wall fallback when Mapillary unavailable | — |

**No Google tiles / Street View / proprietary basemaps.**

### Roof topology (anti-drift)

- Walls and flat roof decks share the **exact same post-inset footprint** (`ExtrudeGeometry` + `ptsToShape`).
- Pitched roofs (gable/hip) are added **only** when the footprint is convex and near-rectangular (`rectness ≥ 0.86`).
- Gable eaves = exact wall vertices; ridge = projection onto the polygon’s **longest edge** axis through the centroid (never an OBB rectangle replacing the footprint).
- Concave / irregular footprints stay **flat**.

### Runtime

`buildCity` loads appearance → `style.appearanceMap` keyed by OSM id → `BuildingBuilder` applies `roofColor` / `wallColor` / `roofKind` / `typology`.


## POI / Landmark typology kits

Special OSM amenities/buildings get **footprint-tied kits** (`engine/landmarks/kits/`), not floating Google-style meshes:

| Kit | OSM cues | Extras |
|-----|----------|--------|
| Church | `building=church`, `amenity=place_of_worship` | Bell tower, spire, cross, portal — on real footprint |
| Station | `building=train_station` | Platform + canopy toward nearest `railway=rail` |
| School / kindergarten | `building/amenity=school|kindergarten` | Yard pad + entry canopy |
| Town hall | `amenity=townhall` | Columns, balcony, flag |
| Fuel | `amenity=fuel` (node) | Canopy + pumps at point |
| Plaza | PlazaBuilder centroids | Label only |

`BuildingBuilder` attaches kits and returns `kittedBuildingIds`. `LandmarkBuilder` adds CSS2D title + Italian type subtitle without redrawing the building volume.


## RegionProfile — qualsiasi città, niente regioni scritte nel codice (v0.6)

Il vecchio `stylePack` fisso (“costa mediterranea”) è sostituito da un **profilo dedotto dalle coordinate**.
Gli archetipi (mediterraneo, temperato, alpino, nordico, arido, tropicale) sono **prior miscelati**, non categorie:
un paese appenninico può essere 60% temperato + 40% alpino.

```
new-city "Nome, Paese"  →  src/cities/<id>.json (bbox, path dati)
npm run bake -- <id>    →  fetch-osm → fetch-dem → bake-region → fetch-appearance
/?city=<id>             →  buildCity carica il profilo → profileToStyle → builder
```

### Segnali → fusione (`src/engine/region/`)

| Segnale | Fonte | Offline | Conf. |
|---|---|---|---|
| Clima (T, pioggia, estate secca, neve) | Open-Meteo archive 2015–24 | modello lat+quota (±3–5 °C) | 0.85 / 0.35 |
| Quota urbana, rilievo, maschera mare | DEM già scaricato (flood fill dai bordi) | sì | — |
| Tetti, piani, colori, materiali, generi alberi | tag OSM nel bbox | sì | n/(n+k) |
| Paese → guida, strisce, lingua, prior culturali | Nominatim reverse | no → neutro | — |
| Generi vegetali presenti | GBIF (solo conteggi) | no → prior | boost ≤3× |

`resolveRegionProfile` = prior(archetipi dal clima) ⊕ evidenza locale, con `source` e `confidence` per blocco.
Segnali futuri (LiDAR, CART2000, rilievo facciate) si innestano qui senza cambiare i builder.

### Per punto, non per città

- **Vegetazione**: specie scelta per albero da temperatura *a quella quota* (lapse 6,5 °C/km), habitat OSM, affinità di archetipo, evidenza GBIF/OSM. Stessa città: ulivi sulla costa, querce e conifere in quota.
- **Terreno**: vertex color per zona — mare (maschera), spiaggia, roccia (pendenza), neve (temperatura), verde (più fresco = più verde).
- **Edifici non taggati**: piani da lognormale regionale (mediana, p90, quota monopiano); pendenza falde da archetipi + neve + pioggia.

### Contratti preservati

`profileToStyle` restituisce la **stessa forma** dello style pack: RoadBuilder, LandmarkBuilder, Barrier, Plaza non cambiano.
Senza profilo si usa lo style pack **clonato** (prima veniva mutato il modulo condiviso).
L’appearance per edificio (S2/Mapillary/OSM) continua a vincere sul profilo; `fetch-appearance` ora usa il profilo come prior e la zona UTM reale della scena.

### Determinismo

`engine/rng.js`: nessun `Math.random` nell’engine. Alberi, piani, tetti derivano da hash di id OSM / posizione → mondo identico per tutti i client.

### Licenze dei segnali online

Open-Meteo gratuito = solo non commerciale · Nominatim max 1 req/s con User-Agent · GBIF record con licenze miste (usiamo solo conteggi aggregati) · MASE LiDAR / SITR = CC BY 4.0 (attribuzione).

### Limiti noti

- Clima offline grezzo: senza rete i climi continentali sbagliano di alcuni gradi → lanciare il bake con rete.
- Maschera mare da DEM: i polder sotto il livello del mare verrebbero presi per mare; con `natural=coastline` (ora scaricato) la costa è autorevole.
- ~60% dei footprint OSM non supera il test “rettangolo convesso” → tetto piatto anche in zona alpina. Prossimo passo: straight skeleton.


## Fase 0 — prestazioni e basi del look (v0.7)

| Intervento | Prima | Dopo | Verifica |
|---|---|---|---|
| Edifici: vertex color + merge per chunk 250 m | 2.061 mesh (1 per colore muro + 1 per tetto) | 105 (2 per chunk + dettagli + kit) | smoke test Node |
| Scena totale | 2.083 mesh (×2 col passaggio ombre) | 127 | smoke test Node |
| `nearestRoad` / `distToRoads` con `SegmentGrid` | forza bruta su ~2.300 segmenti | ~23× più veloce in città | 20.000 punti + tutti i vertici: 0 differenze |
| Build città | ~3,4 s | ~1,8 s | smoke test Node |
| Collisione | AABB di footprint ruotati + "vicino a strada = libero" (halfW+1,8 m) | cerchio vs muri veri (`PolygonGrid`), carreggiata sempre libera | 20.000 punti, spawn libero |
| Ombre | frustum fisso sull'origine (±260 m) | segue il player, agganciato ai texel | — (serve GPU) |
| Grading | in lineare HDR prima del tone mapping, solo desktop | dopo OutputPass in sRGB, anche su mobile (senza bloom, DPR ≤ 1,5, MSAA) | — (serve GPU) |
| Asfalto da DNA | campione S2 contaminato → verdastro | se colorato/verdastro resta vicino al profilo | smoke test |

AO finto nei vertex color: muri 78% alla base → 100% in gronda; falde 86% alla gronda.


## Rete stradale compilata e terreno che si adatta (v0.8)

La città nasce dalle strade. Ordine in `buildCity`: DEM → OSM → **StreetNetwork** → terreno scavato → strade → edifici → resto.

- `streets/StreetNetwork.js`: vie spezzate nei nodi condivisi (incroci veri); profilo ricampionato ≤4 m e lisciato (±9 m); incroci **piani** alla quota del nodo con raccordo di 12 m; angoli con arco del cordolo (raggio per classe di strada); marciapiedi +15 cm dove ci sono edifici entro 35 m; `surfaceAt` (camminata) e `carve` (scavo).
- `streets/StreetMesher.js`: 2 draw call (superfici con vertex color + segnaletica). Cordolo, piano del marciapiede, fianchi di 2,5 m che chiudono i dislivelli. Strisce pedonali: posizioni reali OSM (`highway=crossing`, ora scaricate) oppure agli incroci con strade principali.
- `terrain.js`: griglia vicina (5 m, area urbana + 150 m) e lontana (≥14 m), entrambe scavate sotto strade e marciapiedi; `sampleY` restituisce la quota ESATTA dei triangoli visibili, `sampleDemY` il DEM grezzo.
- Edifici: piano terra alla quota del marciapiede davanti; muri fino al punto più basso del terreno lungo il perimetro − 0,5 m.
- Player: segue la superficie compilata (scalino del cordolo smorzato).

Verifiche in Node (60.000 punti): terreno sopra l'asfalto 0,3% (max 25 cm, era ~10% e 1,2 m); spigoli di muro sospesi 0/4.645.

Altri fix: falde 4 cm sopra il solaio (niente z-fighting in gronda), triangoli dei tetti orientati verso l'alto + FrontSide (niente acne), finestre e porte senza ombra portata, ombre PCF anche su mobile con frustum stretto (±110 m), spiaggia solo entro ~55 m dal mare.


## Fase 1 — sole reale, cielo, orizzonte, mare (v0.9)

- `sky/sun.js`: posizione del sole (algoritmo SunCalc) per data/ora e coordinate; verificato su Roma al solstizio (71,54° contro 71,5° atteso). Di notte il motore mostra il pomeriggio dello stesso giorno (sole a ~22°) finché manca l'illuminazione notturna; `?ora=HH:MM` sceglie l'ora (sotto l'orizzonte → crepuscolo a 3°).
- `sky/SkyDome.js`: cupola con gradiente zenit→orizzonte, alone e disco del sole, palette che vira al tramonto (`skyPalette`); nebbia e sfondo prendono il colore dell'orizzonte. Silhouette dell'orizzonte da texture 1D (720 azimut × 3 fasce di foschia), zero geometria lontana.
- `sky/horizonCompute.js` + `scripts/bake-horizon.mjs`: tile Terrarium z10 in 65 km, curvatura + rifrazione (k 0,13), fasce 2,5–12 / 12–30 / 30–65 km, mare escluso. Test sintetici: 2,71° contro 2,75° attesi a 20 km, 0,67° contro 0,71° a 55 km. Nel `bake` è opzionale.
- `sea/Sea.js`: piano che segue la camera; 4 onde con normali analitiche attenuate con la distanza; fresnel tra acqua e cielo riflesso; luccichio del sole; distanza dalla costa (trasformata chamfer 512² dal terreno visibile) → acqua bassa turchese e schiuma che avanza verso riva; fuori dal DEM la texture si estende dal bordo (niente mare nell'entroterra); foschia marina propria.
- Terreno: il fondale in mare scende di 1,5 m (evita z-fighting con l'acqua).
- `createLook.setSun()`: direzione reale, colore e intensità del sole, emisfero, controluce opposta, nebbia; base delle ombre ricalcolata.
- Shader validati con glslangValidator (GLSL ES 3.00).


## Qualsiasi città nell'app + navigazione (v1.0)

**Ricerca e generazione a runtime** (`engine/runtime/`):
- `places.js`: Nominatim solo all'invio (policy: niente autocompletamento, ≤1 req/s); URL condivisibile `?luogo=lat,lon&nome=…`; recenti in localStorage.
- `generateCity.js`: Overpass (con endpoint di riserva) + tile Terrarium z14 decodificate via `createImageBitmap` senza gestione colore + clima Open-Meteo e generi GBIF (opzionali, con timeout) → `resolveRegionProfile` → dati registrati in memoria (`mem://`) → `cityConfig`. Orizzonte a 65 km calcolato in background dopo il caricamento.
- `cache.js`: IndexedDB, 14 giorni, max 8 città.
- `osm/overpass.js`: query e conversione condivise con `scripts/fetch-osm.mjs`.
- `data/dataSource.js`: tutti i loader passano da qui (memoria → rete).
- Test end-to-end in Node con rete simulata: DEM ricostruito dalle tile = originale entro 0,28 m; città completa costruita.
- L'anteprima su claude.ai blocca i siti esterni: lì la ricerca nel mondo mostra un messaggio; funziona nell'app pubblicata.

**Navigazione** (`ui/`):
- Minimappa orientata come la camera (strato statico pre-disegnato, ridisegno a 20 fps), mappa intera con "tocca e vai".
- Chip con il nome della via corrente; ricerca locale di vie, piazze e luoghi con teletrasporto (atterraggio sulla strada più vicina).
- Movimento con accelerazione e velocità analogica del joystick; il personaggio ruota con continuità.
- Camera: si porta alle spalle quando si cammina in avanti; non entra nei muri (accorciata solo in rendering, lo zoom scelto torna da solo).
- HUD compatto: statistiche dietro il pulsante "i", istruzioni che spariscono dopo 7 s, schermata di caricamento con messaggi di avanzamento ed errori chiari.


## v2 — M1: compilatore di livello, camere, drone

La città non è più "OSM disegnato così com'è": un **compilatore offline** (`npm run compile-level -- <id>`, ~30 s) trasforma i dati grezzi in una **partizione del suolo** senza sovrapposizioni, e il motore la rende navigabile.

**Compilatore** (`engine/compiler/compileLevel.js`, Clipper, interi al decimetro):
- strade come aree: capsule lungo gli assi, **larghezza misurata sul corridoio tra le facciate** (mediana su 5 tratti);
- chiusura morfologica (r 2,5 m) = raccordi del cordolo agli incroci; marciapiede = anello attorno alla carreggiata;
- corridoio stretto → **vicolo lastricato** senza marciapiede; campagna (nessuna facciata entro 13,5 m) → niente marciapiede;
- sentieri e aree pedonali a quota marciapiede; isolati = il resto, puliti con apertura morfologica;
- mare dalla maschera DEM con raccordi da 28 m, esteso al largo fino al bordo mappa; spiaggia = fascia di 45 m lungo la riva abitata; strade ed edifici hanno la precedenza sul mare;
- edifici ritagliati sugli isolati (quadtree di tessere da ~110 m per la velocità);
- rapporto: componenti della rete percorribile, sovrapposizioni residue, aree.

**Motore** (`engine/level/buildLevel.js`):
- earcut per strato, bordi ricampionati ogni 3 m; quote dal campo lisciato condiviso (`compiler/heightField.js`, gaussiana σ 6 m) + 15 cm per marciapiedi, aree pedonali e isolati;
- `TriGrid`: quota esatta della superficie in ogni punto → `terrain.setSurfaceOverride`: alberi, edifici, personaggio e drone si appoggiano alla superficie compilata;
- regola unica per i bordi: parete verso il vicino più basso → cordoli e gradini automatici; ai bordi col terreno naturale il terreno si raccorda al bordo più vicino (pendio, non gradino);
- 1 draw call per tutto il suolo del livello.

**Camere**: 🧍 vicina (terza persona, anti-muro) · 🗺️ lontana (40–320 m, vista d'insieme) · 🚁 drone (volo libero con inerzia, velocità che cresce con la quota, quota minima sopra terreno e tetti, trascina per guardare, joystick/WASD per muoversi, +/− o Spazio/C per salire/scendere; uscendo il personaggio atterra sotto il drone). Tasto V per cambiare.

**Tolto dal percorso principale**: ricerca di città nel mondo e dati in tempo reale (il sole è fisso alle 17:30, `?ora=HH:MM` per cambiarlo).

**Verifiche (Node, Acquedolci)**:
| | prima (v1) | M1 |
|---|---|---|
| sovrapposizione strade/edifici | 32.339 m² | 90 m² |
| spigoli di muro sospesi | 0 | 0 |
| raggiungibile a piedi dallo spawn (BFS 1,5 m, salita ≤ 45 cm) | — | 98,3% |
| muri > 35 cm | — | 1.735 (erano 27.083 con i piani inclinati degli isolati) |
| vertici del suolo | ~440.000 (terreno + strade) | ~322.000 livello + terreno |

**Ancora aperto**: tetti (più piatti con le impronte ritagliate → M2), terrazzamenti voluti e scalinate (M4), le sacche non raggiungibili ai margini est.


## v2 — M2: edifici

**Compilatore** (`compileLevel.js`):
- **Squadratura** delle piante: orientamento dominante (media di 4θ pesata sulle lunghezze), lati entro 12° allineati agli assi, vertici ricostruiti come intersezioni; scartata se l'area cambia oltre ±10% o il poligono non è semplice. 809 piante su 852 corrette ad Acquedolci.
- **Pulizia rientranze** < 0,8 m (apertura + chiusura con giunti a spigolo, angoli retti preservati), prima e dopo il ritaglio sull'isolato; il secondo ritaglio passa per un'unione (evita tagli lungo i bordi del quadtree).
- **Tetti su qualsiasi pianta**: straight skeleton (CGAL → Wasm, pacchetto `straight-skeleton`, MIT) calcolato sulla pianta allargata di 35 cm (gronda). Il file salva `[x, z, t]` per vertice; la quota la decide il motore con la pendenza regionale. In Node il pacchetto richiede un ambiente web minimo (`self`, `window`, `document`), predisposto dallo script.

**Motore** (`BuildingBuilder.js`):
- Pianta rettangolare → a due falde/padiglione come prima; **pianta irregolare → tetto dallo scheletro** (prima diventava sempre piatto). Un "piatto" della tabella appearance dovuto solo alla pianta irregolare viene rideciso. Acquedolci: piatti da 600 a 290, 294 tetti nuovi da scheletro.
- **Muri a fasce** (sostituiscono l'estrusione): zoccolo scuro fino a 0,9 m sopra il piano terra, corpo con leggero gradiente, fascia di coronamento chiara; colori piatti per fascia.
- **Cornicione in aggetto** sotto la gronda (edifici da 2 piani), proietta ombra.
- **Muri in comune** riconosciuti (2 campioni su 3 dentro un altro edificio a 30 cm): niente finestre, porte, balconi, cornici. 86 ad Acquedolci.
- Gronde visibili anche da sotto: tetti a doppia faccia, in ombra solo il retro.

**Peso** (Acquedolci, triangoli): da 1,34 M a 875 k — finestre e porte come quadrati (2 triangoli invece di 12), terreno sotto il livello e sotto la griglia vicina non disegnato (la quota per camminare usa le griglie, non la mesh).


## v2 — M3: biomi

**Suolo** (compilatore): ogni isolato urbano diviso in **cortile** e **verde**. Verde = aree verdi OSM (parchi, prati, giardini, orti, frutteti…) + spazi aperti ad almeno 2,5 m dagli edifici (apertura 1,2 m). Acquedolci: 393.000 m² di verde (27.000 da OSM), 280.000 m² di cortili. Strati `yard`/`green` nel livello; il motore li disegna al posto del blocco unico, e `surfaceAt` restituisce lo strato.

**Erba** (`biome/Grass.js`): ciuffi da 5 fili istanziati (1 draw call), generati per celle deterministiche solo entro 38 m (mobile) / 55 m. Densità per strato: verde pieno, terreno naturale ridotto e più verde dove fa più fresco (temperatura alla quota), erbacce rare nei cortili, mai su strade e marciapiedi, niente su scarpate o in mare. Vento e piegamento attorno al giocatore nel vertex shader; bordo del raggio sfumato; rigenerazione solo oltre 6 m di spostamento (3–10 ms). Nascosta nella vista lontana e col drone sopra i 45 m.

**Alberi a regole** (`biome/TreeRules.js`): viali sul bordo esterno dei marciapiedi larghi delle strade principali (e di un terzo delle residenziali), passo 9 m, solo con edifici vicini; frutteti in filari allineati all'asse lungo del campo (7 × 6 m); pochi alberi nei giardini lontano dai muri. Priorità viali → giardini → frutteti entro il budget alberi. La specie resta scelta da clima/quota/habitat. Col livello compilato niente spargimento casuale.

**Ambiente contestuale** (`biome/Ambience.js`): particelle in una scatola che segue la camera (animazione solo nello shader): polline dove attorno c'è verde, salsedine vicino al mare; gabbiani istanziati con battito d'ali nello shader, sopra il mare più vicino. Contesto campionato 2 volte al secondo (quota di verde nel raggio di 20 m, distanza dal mare fino a 350 m), transizioni morbide.

Shader di erba, particelle e gabbiani validati con glslangValidator (GLSL ES 3.00).


## v2 — M4: costa e dislivelli

Fin qui gli isolati urbani inseguivano un campo di quota continuo (lisciato, condiviso con marciapiedi): dolce a vedersi ma falso dove il dislivello reale è vero (terrazzamenti, scogliere). M4 introduce gradoni veri, scalinate vere e muretti di lotto, e apre (nel compilatore) i tre segnali costieri che oggi Acquedolci non ha mappato.

**Terrazzamenti** (`compiler/compileLevel.js`): per ogni isolato urbano "di lotto" (< 12.000 m², la stessa soglia che già lo marcava "piccolo") si misura il dislivello reale (`max−min` dei campioni di quota, non il piano ai minimi quadrati che li appiattiva). Oltre 1,1 m e sotto i 12 m (i grandi isolati radi restano terreno naturale: un dislivello di decine di metri lì è collina, non giardino) l'isolato si taglia in 2–12 gradoni perpendicolari alla direzione di massima pendenza (coordinata `t = x·ux + z·uz`, fasce di rettangoli ruotati intersecati col vero poligono — **la fascia va centrata sul `k` del blocco, non sull'origine del mondo**: il primo tentativo, centrato in (0,0), perdeva l'80% dell'area sui blocchi lontani dall'origine). Ogni gradone è piatto (mediana dei campioni della fascia); il muro o cordolo fra due gradoni — o fra un gradone e il campo continuo del vicino — nasce **gratis** dalla stessa regola dei bordi di M1 (`buildLevel.js`): non serve codice nuovo per i muri, solo tessere a quota diversa.

**Scalinate vere** (`highway=steps`, prima disegnate piatte come un marciapiede qualunque): ogni via ricampionata a 0,6 m diventa una sequenza di pedate piatte; il numero di gradini viene da `step_count` quando OSM lo tagga, altrimenti da `dislivello ⁄ 0,17 m`. Il contro-gradino fra due pedate (e ai lati della scalinata, dove la quota a gradoni si stacca dal campo continuo circostante) è di nuovo la stessa regola dei bordi.

**Muretti di lotto** (`level.fences`): OSM mappa `barrier=wall|fence` solo su 48 tratti in tutta Acquedolci — quasi nessun cortile ne ha uno vero. Il compilatore ricava dove un lato del cortile (perimetro **prima** dei terrazzamenti: la geometria non dipende da quello) guarda verso strada/vicolo/marciapiede/area pedonale/scalinata, e lo marca come muretto. I bordi arrotondati delle operazioni morfologiche lasciano vertici quasi allineati: senza fondere i tratti collineari (< 9°, con `CleanPolygon` a monte) venivano fuori 28.000 schegge da 1,4 m; fusi, 2.973 tratti da 9,1 m medi (27 km totali) — un ordine di grandezza in meno di triangoli per lo stesso muretto. Renderizzati in `BarrierBuilder.buildLotFences` (un solo draw call, quota dalla superficie compilata) — puramente visivi, senza collisione, come i barrier OSM già esistenti.

**Scogliere e frangiflutti da OSM** (`natural=cliff`, `man_made=breakwater|groyne|pier|mole`, `natural=beach|sand`): aggiunti alla query Overpass e alla classificazione (`osm/overpass.js`); il compilatore (`compileLevel.js`) ne ricava pareti scogliera (lato alto/basso dal DEM grezzo, non lisciato: un salto vero) e creste rialzate per moli/frangiflutti sul livello del mare, e unisce i poligoni `natural=beach` alla spiaggia geometrica. Render in `engine/coast/CoastBuilder.js`. **Limite onesto**: Acquedolci non ha nessuno di questi tag nel bbox già scaricato, e l'accesso di rete a Overpass è bloccato dalla policy di questo sandbox (403 alla CONNECT) — non ho potuto ri-scaricare i dati per verificarlo sulla città vera. Verificato invece con una fixture sintetica (costa/mare/molo inventati in Node): 40 tratti di scogliera e 1 molo compilati e renderizzati senza eccezioni, quota lato-alto/lato-basso corretta. Da confermare con un bake in rete su una città che li mappa davvero.

**Verifiche (Node, Acquedolci, offline)**:
| | M3 (prima) | M4 |
|---|---|---|
| isolati "di lotto" terrazzati | 0 | 331 di 393 urbani |
| muro di contenimento più alto | — | 3,27 m |
| triangoli del suolo | 347.501 | 429.872 |
| pareti/cordoli ai bordi | 74.929 (1.911 "muro alto") | 105.069 (26.963 "muro alto") |
| navigabilità (BFS 1,5 m dallo spawn, salita ≤ 45 cm) | 98,5% | 98,5% (invariata) |
| scalinate | disegnate piatte (42 vie) | 800 pedate vere |
| muretti di lotto | 0 | 2.973 tratti, 27 km |
| tempo di compilazione | ~30 s | ~115 s (offline, una tantum) |

Area conservata per costruzione: la somma delle tessere a gradoni dopo il taglio combacia con l'area di cortile/verde prima del taglio entro l'arrotondamento (662.435 contro 662.437 m² dopo il fix del centraggio). Nessuno shader nuovo in questo passo (niente da validare con glslangValidator): muretti, scogliere e frangiflutti usano `MeshLambertMaterial` come le barriere OSM già esistenti.

**Ancora aperto**: costa (scogliere/frangiflutti) verificata solo su fixture sintetica, non su una città reale che li mappi; le scalinate non intersecano i terrazzamenti dei cortili (nessun percorso interno pedonale mappato lì); un isolato molto grande e mosso (fino a 38,9 m di dislivello osservato) resta terreno naturale continuo per scelta, non gradonato — corretto per la campagna, ma un lotto urbano genuinamente enorme e ripido non avrebbe terrazzamenti.


## v2 — M5 (in corso): livello dei fatti, primo pilastro — alberi veri

Obiettivo dichiarato: un sistema unico che porti nel motore texture di facciate/marciapiedi/strade, cartelli stradali, alberi dove ce ne sono davvero, muretti e scalinate reali — con provenienza, non a scelta muta fra regola e dato. **Niente Google**: i termini di Google Maps/Street View vietano di derivarne geometrie o texture, quindi ogni fonte qui sotto è aperta (OSM, dati satellitari/LiDAR pubblici, Mapillary/Panoramax con licenza dei singoli contributi). Questo passo costruisce il livello dei fatti e lo applica al primo caso concreto: gli alberi.

### Livello dei fatti (`engine/facts/`)

Ogni oggetto del mondo diventa un **fatto**: posizione, valori, `source`, `confidence`. Le fonti hanno un ordine fisso, uguale per ogni tipo di fatto (`priority.js`):

```
manuale  >  OSM esplicito  >  misurato (LiDAR, chiome, DEM)  >  rilevato (Mapillary, CV)  >  regola/prior
```

`resolveFacts.js` raggruppa per prossimità (griglia uniforme, non O(n²); chiusura transitiva: una fila di alberi entra nello stesso gruppo anche se il primo e l'ultimo non sono vicini fra loro), tiene il vincitore secondo la tabella e gli presta i campi che non ha da un fatto perdente dello stesso gruppo (es. un albero OSM senza `height` riceve l'altezza misurata, ma la posizione resta quella OSM). Verificato con test sintetici in Node: priorità pura, fusione a coppie con prestito di campo, catena transitiva, 20.000 fatti casuali in 53 ms senza eccezioni.

### Alberi veri (`scripts/fetch-canopy.mjs`)

Fonte: **Meta/WRI High Resolution Canopy Height**, 1 m, globale, CC BY 4.0 (COG per riquadri ~0,7°). Si legge solo la finestra del bbox via HTTP range request (libreria `geotiff`, già una dipendenza del progetto per Sentinel-2) — non il file intero, che pesa 300+ MB per riquadro. Nel sandbox di sviluppo il file va letto **a strisce sequenziali con retry**: troppe richieste in parallelo (una per tessera interna del COG) chiudevano il tunnel di rete; a strisce da 200 righe, 0 errori, 1891×1921 px in ~2 s.

Dai picchi del raster (soppressione dei non-massimi: dal più alto al più basso, un picco accettato ne esclude altri entro `MIN_SPACING` 2,6 m) esce un albero per cima reale, non un punto a caso nel poligono. Raggio di chioma **misurato** (cresce dalla cima finché il raster resta sopra metà della sua altezza), non stimato da formula. I picchi che cadono su strada/vicolo/mare/dentro un edificio si scartano alla fonte (il livello compilato è già lì): per Acquedolci, 6.708 su 21.628 (31%, quasi certamente rumore del raster su tetti/ombre), rimangono **14.920 alberi** con altezza 3–24 m (media 5 m).

### Nel motore

`buildCity.js` carica `public/data/canopy/<città>.json` (opzionale: se manca, tutto si comporta come prima) e lo passa in due punti:
- **`biome/TreeRules.js`**: gli alberi misurati seminano l'esclusione spaziale delle regole (viali/frutteti/giardini) — corretto anche a 15.000 punti seminati (prima usava una finestra scorrevole sugli ultimi 400 inserimenti, adeguata a poche centinaia di alberi a regola ma cieca su migliaia di punti seminati in un colpo solo: ora è una vera griglia spaziale).
- **`vegetation/VegetationBuilder.js`**: alberi OSM + misurati fusi con `resolveFacts` (raggio 3 m), ordinati per fonte poi per altezza, e piazzati per primi nel budget; solo dopo entrano i piazzamenti a regola (i vuoti che i dati reali non coprono). La **scala** dell'istanza segue l'altezza misurata (`height / spec.h` della specie), non più solo un dado deterministico.

**Budget alberi**: `style.maxTrees` resta il pavimento per le città senza dati misurati (alzato 2.200→6.000, l'instancing per specie costa poco a istanza ma non l'ho potuto profilare su una GPU vera). Quando le chiome reali sono più del pavimento, il tetto sale per contenerle tutte + 500 di margine per le regole, con un limite assoluto di 20.000. Ad Acquedolci: 14.921 alberi risolti (OSM+misurati) + 500 a regola = **15.421 istanze**, verificato in Node end-to-end (TreeRules → VegetationBuilder) senza eccezioni.

**Verifiche (Node, Acquedolci)**:
| | prima (regole pure) | M5 |
|---|---|---|
| alberi piazzati | fino a 2.200 (regola + pochi OSM) | 15.421 (14.921 veri + 500 a regola) |
| fonte prevalente | regola/rng | misurato (mappa chiome, CC BY 4.0) |
| scala dell'istanza | dado deterministico (0,75–1,25×) | altezza reale / altezza della specie |
| falsi positivi scartati alla fonte | — | 6.708 (su strada/mare/edificio) |
| tempo pipeline (planTrees+buildVegetation) | — | 184 ms |

**Ancora aperto / onestà sui limiti**:
- La specie di un albero misurato senza tag OSM resta scelta da clima/quota con habitat `'urban'` fisso: non guarda ancora se il punto cade in un poligono OSM di frutteto/bosco. Prossimo affinamento.
- Il raggio di chioma misurato non è ancora usato per infittire/diradare la scala orizzontale della chioma (solo l'altezza pilota la scala uniforme); un uso pieno vorrebbe una geometria non uniformemente scalata.
- Budget non verificato su GPU reale: 15.000+ istanze per specie, poche decine di draw call, ma il costo delle ombre (`castShadow`) su tutte non è stato misurato — solo ragionato per analogia con l'uso previsto di `InstancedMesh`.
- In questo sandbox, Mapillary, Panoramax, ambientCG e il SITR regionale siciliano sono bloccati dalla policy di rete (403 alla CONNECT): cartelli, superfici, facciate e muretti/scalinate "misurati" (prossimi pilastri dello stesso sistema) restano da implementare col codice pronto a leggerli, ma verificabili solo con fixture sintetiche finché non si lancia il bake su una macchina con accesso di rete pieno.
- La mappa delle chiome ha un solo anno di riferimento (2024): alberi piantati dopo non ci sono, alberi abbattuti nel frattempo sì. Nessuna correzione manuale ancora implementata (il quarto pilastro previsto: un file di correzioni per città, priorità massima nella tabella).
