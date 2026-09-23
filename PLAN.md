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
