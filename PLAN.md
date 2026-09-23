# Mondo-1, sul guscio

Il piano non è una griglia piana incollata sulla palla. I luoghi stanno in coordinate sferiche: colatitudine dal polo nord, azimut intorno all’asse. Le strade sono meridiani e paralleli.

Raggio 160 m. Un grado di meridiano è circa 2,8 m. I sei biomi sono spicchi di longitudine, larghi 60°. Una calotta lilla-blu copre il polo (`colat < 0,4`); sotto, il colore dello spicchio.

## Capitale

Centro sulla mesa corallo, non sul polo.

| | |
| --- | --- |
| Parallelo civico | colatitudine **0,64** (circa 102 m di meridiano dal faro) |
| Meridiano | azimut del centro corallo, `biomeAzimuth(0)` |
| Spawn | colat **0,80**, stesso meridiano, faccia a nord |

- **Meridiano** (via del faro): da colat 0,30 a 1,02. È un arco di cerchio massimo. A nord si entra nella calotta e si vede il faro; a sud si scende verso l’anello dei biomi.
- **Parallelo** (via delle porte): dallo stesso centro, circa ±0,5 rad di longitudine (una novantina di metri). La strada piega con l’orizzonte.
- **Parallelo alto** a colat 0,46: dal Corallo ai Giochi, un arco breve verso est.
- I vicoli sono pezzi di meridiano, a ±0,18 rad dal centro, solo fra le facciate. Non tagliano le piazze.

Le piazze sono calotte piccole (raggio 5–9 m), non isolati infiniti. Le facciate seguono la curva, a circa 6 m dall’asse della via.

## Nodi

| Nodo | Colat, azimut | Ruolo |
| --- | --- | --- |
| Piazza civica | 0,64 · 0 | Incrocio di meridiano e parallelo. Colonnato su un cerchio, assi liberi. |
| Corallo | 0,46 · 0 | Corte sul meridiano, verso il polo. |
| Mercato | 0,64 · +0,30 | Sul parallelo, verso la menta. |
| Botteghe | 0,64 · −0,30 | Sul parallelo, verso le lanterne. |
| Giochi | 0,46 · +0,26 | Sul parallelo alto. La bacheca è al centro. |
| Terrazza | 0,34 · 0 | Ultimo approdo prima della calotta. Il faro chiude la visuale. |
| Porta sud | 0,96 · 0 | Il meridiano continua verso l’anello e gli altri paesi. |
| Porta est | 0,64 · +0,48 | Sbocco sul confine con la menta. |
| Porta ovest | 0,64 · −0,46 | Sbocco verso le lanterne; le dune si raggiungono girando il pianeta. |

I paesi (menta, viola, cristallo, lanterne, dune) restano nei loro spicchi, collegati dai meridiani dei biomi e dall’anello a colat 1,02. Non c’è un centro quadrato che ignora la curvatura.

Il parallelo civico non si ferma alle porte. Continua, più stretto, fino al meridiano della menta (est, +π/3) e a quello delle lanterne (ovest, −π/3). Sulla spalla, a circa 7,6 m dall’asse, stanno le case di borgo; i pali e le bandiere stanno a 3,3 m, così il centro resta libero. I meridiani dei biomi hanno pali dalla spalla a partire da colat 0,70, e un incrocio coperto dove incontrano l’anello.

## Freccia

Toccare il globo (un luogo, o un punto qualsiasi del guscio) fissa una meta. Ogni frame la freccia in alto ruota sulla tangente dell’arco più corto: la direzione è il vettore meta proiettato sul piano tangente, l’angolo è `atan2` fra destra del giocatore e la sua faccia. La distanza è l’angolo per il raggio. Sotto i 6 m la meta si cancella. Si cancella anche con la ×, o con Esc quando la mappa è chiusa. L’anello d’oro a terra resta sul punto.
