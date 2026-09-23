# Pianta di Mondo-1

Un solo sistema: griglia ortogonale. Il cardo e il decumano si incrociano nella piazza civica. Tutto il resto è un multiplo di 16 m.

Coordinate locali dell’hub: **+nord** verso il faro, **+est** verso la menta. L’ovest scende verso le lanterne e le dune.

## Modulo

- Modulo **16 m** da asse ad asse.
- Cardo (`e = 0`) e decumano (`n = 0`): strade primarie, larghe **6 m**.
- Strade secondarie su `n = ±16` e `e = ±16`, larghe **4 m**, lunghe un modulo e mezzo oltre l’incrocio.
- Vicoli solo dentro i quattro blocchi interni, sempre nord-sud, sull’asse `e = ±8`. Non tagliano le piazze.
- Facciate sul filo a **5,2 m** dall’asse primario e a **10 m** sull’altro lato del blocco, così gli angoli coincidono.
- I vuoti sono piazze, non avanzi: ogni incrocio del modulo è un nodo, il centro del blocco è cortile o vicolo.

## Nodi

| Nodo | Posizione | Ruolo |
| --- | --- | --- |
| Piazza civica | (0, 0) | Incrocio monumentale. Colonnato quadrato a 6 m, assi liberi. |
| Corallo | (16, 0) | Corte residenziale sul cardo, prima del faro. |
| Mercato | (0, 16) | Piazza sul decumano, verso est. |
| Botteghe | (0, −16) | Piazza sul decumano, verso ovest. |
| Giochi | (16, 16) | Corte d’angolo: incrocio nord-est delle secondarie. La bacheca è al centro. |
| Terrazza | (26, 0) | Fine del cardo. Il faro, a circa 32 m, chiude la visuale. |
| Porta sud | (−32, 0) | Uscita sul cardo, verso lo spicchio corallo. Lo spawn è sull’asse, a n ≈ −16. |
| Porta est | (0, 32) | Uscita verso la menta. |
| Porta ovest | (0, −32) | Uscita verso lanterne e dune. |

Non c’è una porta nord: il cardo non si chiude, arriva al faro.

Oltre le tre porte il pianeta resta spicchio e paese. La griglia non insegue i borghi.
