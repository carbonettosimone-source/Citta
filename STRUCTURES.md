# Strutture strane

Sagome dell’hub, e degli altri nodi quando arriveranno. Non sono case e non sono un kit di villaggio. Sono composizioni delle stesse tre primitive, scelte da seme.

`structureFor(seed, slot)` in `src/world/structures.ts` è pura: stesso seme, stesso slot, stessa sagoma. Il hub la chiama sui filler (`tag: filler`). Lo slot a intensità massima è un filo più grande: è il landmark, non un altro linguaggio.

## Primitive

| Primitiva | Mesh | Ruolo |
| --- | --- | --- |
| `box` | cubo unitario, scala libera | plinto, ago, lastra, pinna |
| `ring` | toro piatto (segnale) | alone, anello intorno a un ago |
| `gem` | ottaedro piatto | giunto, punta |

Colori di sistema, non di bioma: inchiostro, carta, oro, ciano.

## Archetipi

Il seme pesca un archetipo e due scostamenti (`lean`, `twist`). La sagoma resta quella dell’archetipo.

| Id | Lettura |
| --- | --- |
| `spindle` | plinto, ago storto, anello ciano, gemma in cima |
| `halo` | palo corto, anello oro inclinato, gemma nel vuoto |
| `bracket` | due lastre incrociate, gemma nel giunto |
| `split` | due pinne che si aprono, lastra a ponte, anello |
| `stack` | tre lastre ruotate che calano, ago, gemma |

Sul bordo dell’hub (oltre 20 m) la scala scende. Il corpo resta lo stesso.

## Collisione

Un cilindro al centro, raggio e altezza della sagoma. Non si attraversa; il salto dell’avatar non ci passa sopra. Stanno fuori dal nastro: gli slot li sceglie già il campo di intensità.

`auditStructures()` rifiuta un filler senza sagoma stabile, con una sola primitiva, o un hub che non varia archetipo.

Paese A, Arena, Belvedere: stesso `structureFor`, altri slot. Non un secondo catalogo.

## Props, stesso seme

`propLayout(seed)` in `src/world/props.ts` veste il hub con modelli Kenney (CC0, vedi [ASSETS.md](ASSETS.md)), ricolorati su una tavolozza sola. Non è un anello. I ciuffi sono foci fissi: tre boschetti, due giardini di sassi, spalle del nastro, un orlo d’erba intorno alla radura, due ciuffi bassi ai lati di Q2. Dentro ogni focus il seme sceglie angolo, raggio (più fitto al centro), modello, yaw e scala. `hubOccupied` e il nastro d’oro restano vuoti. La vista da Q2 verso nord non prende alberi.

Composizione in [PLACE.md](PLACE.md). I cinque filler astratti restano i pezzi eroici: i modelli li affiancano, non li sostituiscono.
