# Acquedolci — low poly city engine

Ricostruzione navigabile da **OpenStreetMap + DEM Terrarium** (Vite + Three.js).

- Guida architettura / nuova città: vedi **[ARCHITECTURE.md](./ARCHITECTURE.md)**
- Profilo città: `src/cities/acquedolci.json`
- Orchestratore: `src/engine/buildCity.js`

## Comandi

```bash
npm install
npm run fetch-osm -- acquedolci   # opzionale se i dati ci sono già
npm run fetch-dem -- acquedolci
npm run dev
npm run build
```

## Controlli

- **PC:** WASD/frecce, Shift corri, drag orbita, rotella zoom
- **Mobile:** joystick, drag sguardo, ⚡ corri, +/− zoom

---


Mappa **3D giocabile** di **Acquedolci** (ME, Sicilia) in stile low-poly da **OpenStreetMap**:
strade continue, edifici con tetti a falde e facciate, vegetazione, personaggio in terza persona.

Funziona su **PC** e su **smartphone** (browser). Solo OSM — niente tile Google.

## Avvio

```bash
cd acquedolci-lowpoly
npm install
npm run fetch-osm   # opzionale se i dati sono già in cache
npm run dev
```

Vite ascolta su `0.0.0.0:5173` (raggiungibile dalla rete locale / tunnel).

Apri l’URL mostrato (es. `http://localhost:5173`) e **tocca/clicca la mappa**.

## Controlli PC

| Input | Azione |
| --- | --- |
| WASD / frecce | Cammina (rispetto allo sguardo) |
| Shift | Corri |
| Trascina | Orbita camera |
| Rotella | Zoom |

## Controlli mobile

| Input | Azione |
| --- | --- |
| **Joystick sinistro** | Cammina |
| **Trascina sul canvas** (destra / area libera) | Guarda / orbita |
| **+ / −** | Zoom |
| **⚡** | Corri (tieni premuto) |

Il joystick e i pulsanti compaiono automaticamente su touch / schermi stretti.  
La pagina non scrolla durante il gioco (`touch-action: none`).

## Accesso da telefono (tunnel pubblico)

Con `npm run dev` attivo (host `0.0.0.0`, `allowedHosts: true`):

```bash
/tmp/cloudflared tunnel --url http://127.0.0.1:5173
# oppure: npx cloudflared tunnel --url http://127.0.0.1:5173
# oppure: npx localtunnel --port 5173
```

**URL pubblico attuale (temporaneo):**  
https://admission-july-manually-candle.trycloudflare.com

Apri quel link sul telefono (HTTPS). Il tunnel muore se chiudi il processo.

### Stop / restart

```bash
# ferma tunnel
pkill -f cloudflared || true
# ferma Vite
pkill -f vite || true
# riavvia
cd acquedolci-lowpoly && npm run dev
/tmp/cloudflared tunnel --url http://127.0.0.1:5173
```


## Dati

`npm run fetch-osm` → `public/data/acquedolci.json` (Overpass, fallback API OSM 0.6).

## Stack

Vite + Three.js (`OrbitControls`, ribbon roads, joystick touch)

## Attribuzione

© Collaboratori OpenStreetMap — [openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)
