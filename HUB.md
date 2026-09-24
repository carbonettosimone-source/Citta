# Hub di Mondo-1

Il hub non è una città. È un indice 3D del pianeta: un campo di intensità sul guscio, moduli di sistema, una sola uscita. Paese A, B, C, Arena e Belvedere non sono in questo passaggio. Il faro resta un landmark di polo, fuori dall’impronta.

`WORLD_ID` resta `Mondo-1`. `PROTO` in `src/game/content.ts` sale se il layout rompe un client già in giro. Stesso seme (`hashText('Mondo-1')`) ⇒ stesso hub. Niente `Math.random`.

## Campo

Centro **H** sul guscio, raggio `PLANET_R` ≈ 160. H è funzione del seme (colatitudine di base 0,30, un soffio di jitter, azimut dal seme).

Distanza geodetica `d` da H, in metri:

```
I(d) = cos((d / 28) · π/2)    se d < 28
I(d) = 0                      altrimenti
```

| Fascia | d | Cosa ci sta |
| --- | --- | --- |
| Nucleo | 0–10 | Spawn, traffico, via verso la bacheca |
| Moduli | 10–20 | Moduli di sistema |
| Bordo | 20–28 | Rarefazione e **una** uscita |
| Fuori | > 28 | Nessun modulo dell’hub. Guscio e terreno procedurale leggero |

## Moduli

Ogni modulo ha un tag e una `I_min`. Entra solo se nel suo slot `I ≥ I_min`. Gli slot funzionali sono fissi rispetto a H e a θ_exit. I filler occupano una griglia polare; il seme decide quali, con probabilità che cala quando `I` cala. Il bordo non può essere più denso della fascia moduli.

| Tag | Ruolo | `I_min` |
| --- | --- | --- |
| `spawn` | Anello di partenza sul nastro | 0,80 |
| `bacheca` | Bacheca dei giochi | 0,55 |
| `vendor` | Terminale, monete di sessione | 0,45 |
| `prep-event` | Telaio per un evento futuro, non una porta | 0,40 |
| `filler` | Blocchi bassi ripetuti. Densità, non case | 0,18 |
| `exit` | Marcatore a terra verso Paese A | 0,08 |

θ_exit è il sud locale: colatitudine crescente, stesso meridiano di H. Non ci sono altre uscite ufficiali. Paese A, quando esisterà, continua oltre quel marcatore.

## Piani, lungo la normale

| Piano | Altezza | Contenuto |
| --- | --- | --- |
| Q0 | ~0–2,5 m | Nastro largo (non una piazza vuota), spawn, uscita, filler |
| Q1 | ~3–7 m | Bacheca, terminale, prep. Rampe corte dal nucleo |
| Q2 | ~8–14 m | Piattaforma piccola. Da lì si legge la curvatura, il faro e la direzione dell’uscita |

Il faro è il palo al polo nord, fuori dai 28 m. La lampada sta alta abbastanza da vedersi da Q2. Non è un modulo dell’hub.

Il nastro d’oro a terra punta solo verso l’uscita. Una traccia ciano stacca dal nastro e sale alla bacheca. Si arriva a entrambi senza aprire la mappa.

## Quote, a piedi (~2,35 m/s)

1. Spawn → bacheca in meno di ~15 s. La bacheca è nel cono davanti allo spawn.
2. Spawn → marcatore di uscita in meno di ~20 s, direzione unica.
3. Da Q2: faro sopra l’orizzonte del polo, e il lobo della piattaforma verso l’uscita.

`auditHub()` in `src/world/intensity.ts` rifiuta un layout che rompe queste quote. Lo chiama `createHub` all’avvio.

## Cosa non rifare qui

Niente piazze, quartieri, cardo/decumano, porte-monumento, kit di case. Niente sei spicchi uguali. Il colore del guscio può restare temporaneo. Sulla mappa solo **Hub**, **Faro**, **Exit → A**.

Codice: `src/world/intensity.ts` (regola), `src/world/modules.ts` (mesh), `src/world/relief.ts` (i piedi seguono i piani). La vecchia capitale in `city.ts` / `towns.ts` non c’è più.

I filler non sono cubi sparsi: sono strutture strane, stessa grammatica (`box`, `ring`, `gem`) descritta in [STRUCTURES.md](STRUCTURES.md). Lo slot a intensità massima è solo più grande.
