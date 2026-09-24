# Radura di transito

Il hub di Mondo-1 è un diorama compatto, non un paese e non un prato seminato a caso. Si legge come una **radura di indice**: un punto di transito nel verde, con il nastro che porta all’uscita e pochi segni alti.

Regole, in ordine:

1. Prima i luoghi (spawn, bacheca, terminale, prep, Q2, uscita, faro fuori). Poi i nastri. Il vestito viene dopo e non chiude le viste.
2. Pochi pezzi interi battono tanti oggetti sparsi. Silhouette alte contro cose basse, e del vuoto in mezzo.
3. La vegetazione sta in ciuffi. Dentro il ciuffo è fitta; fra un ciuffo e l’altro si cammina.
4. Tre scale: il faro e le strutture strane (macro), boschetti e giardini di sassi (medio), erba e fiori sull’orlo (micro).
5. Una tavolozza sola. I modelli Kenney vengono ricolorati in salvia, mora, legno, carta, pietra. Luce calda, nebbia corta, il faro resta leggibile da Q2.

## Cosa c’è, in metri locali (nord, est)

| Pezzo | Dove | Cosa |
| --- | --- | --- |
| Radura | spawn `(7.2, 0)`, disco ~5,5 m | quasi vuota. Solo un orlo di erba e fiori. Il nastro d’oro e la traccia ciano si vedono subito |
| Spalle | `e ≈ ±6…9`, tre quote sul nastro | cespugli e sassi bassi che incorniciano, senza entrare nella fascia camminabile |
| Boschetto est | `(4, 15)` | alberi, cespugli, funghi |
| Boschetto ovest | `(-3, -18)` | stesso linguaggio, oltre il Q2 |
| Boschetto sud | `(-19, 7)` | più alto degli altri: sta nel cono dello spawn, a est del nastro che si stringe |
| Boschetto uscita | `(-20, -4)` | stessa scala, sull’altra spalla verso l’uscita |
| Giardino nord-est | `(16, 4)` | rocce alte e basse |
| Giardino sud-ovest | `(-15, -14)` | idem, più piccolo |
| Eroi | cinque slot fissi | una struttura strana accanto a bacheca, Q2, terminale, un landmark a nord-est, uno più piccolo sul bordo lontano dall’uscita |
| Piano Q2 | `(5.6, -11.2)` | vista nord libera verso il faro. Solo cespugli bassi sui lati |

Il guscio, dentro i 28 m, ha tre fasce di colore: prato chiaro, salvia, verde più fondo. Il nastro resta lilla. Fuori, il dressing conico del pianeta inizia solo oltre ~46 m, così non litiga con i boschetti.

Cactus e alberi a blocchi del kit restano nel repo e non vengono posati: leggono un altro bioma.

Codice: `propLayout` in `src/world/props.ts`, eroi in `src/world/intensity.ts`. `auditProps` e `auditHub` rifiutano un layout che riempie la radura, chiude il faro, o rimette un anello uniforme.
