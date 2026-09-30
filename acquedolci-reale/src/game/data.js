/**
 * Sweetwaters — Road to Leadership: contenuti di gioco. Tutti i personaggi sono inventati: nessun
 * nome reale di amministratori, candidati o attività. I luoghi sono quelli veri del paese, ma con
 * nomi generici (il bar, la farmacia, la piazza).
 * Coordinate locali del motore: X est, Z sud, origine al Municipio.
 */

export const TITLE = 'Sweetwaters';
export const SUBTITLE = 'Road to Leadership';
export const DAYS = 30;          // giorni al voto
export const DAY_SECONDS = 180;  // durata di una giornata di campagna, in secondi di gioco

/** le caratteristiche che si valutano con le stelle (1–5) */
export const TRAITS = [
  { k: 'pop', label: 'Popolarità', hint: 'più consenso di partenza e più passaparola' },
  { k: 'ric', label: 'Ricchezza', hint: 'le spese pesano meno sul punteggio finale' },
  { k: 'fam', label: 'Fama', hint: '1 = criminale, 5 = brav\'uomo: meno scandali, comizi più credibili', low: 'criminale', high: 'brav\'uomo' },
  { k: 'car', label: 'Carisma', hint: 'comizi più efficaci' },
  { k: 'ret', label: 'Rete', hint: 'più voci raccolte nei bar e nei ritrovi' },
];

/** gli avversari (inventati) */
export const RIVALS = [
  {
    id: 'sindaco', name: 'Il Sindaco Uscente', nick: 'l\'Assente', color: '#8a8f98', icon: '🪑',
    bio: 'Cinque anni di mandato, trasmessi quasi tutti in differita. Punta sulla continuità: continuare a non esserci.',
  },
  {
    id: 'commendatore', name: 'Il Commendatore', nick: 'Mattone', color: '#b5652a', icon: '🏗️',
    bio: 'Imprenditore del cemento, benefattore di se stesso. Promette tutto a tutti, spesso la stessa cosa.',
  },
];

/** assessori tra cui scegliere la lista (4 posti) */
export const ASSESSORI = [
  { id: 'pina', name: 'Zia Pina', role: 'Pensionata, sa tutto di tutti', icon: '👵', pop: 5, ric: 1, fam: 5, car: 3, ret: 5 },
  { id: 'cavillo', name: 'Avv. Nino Cavillo', role: 'Avvocato, trova sempre un comma', icon: '⚖️', pop: 2, ric: 4, fam: 3, car: 4, ret: 3 },
  { id: 'turi', name: 'Turi il Palazzinaro', role: 'Costruttore, “pratiche veloci”', icon: '🧱', pop: 3, ric: 5, fam: 1, car: 2, ret: 4 },
  { id: 'giusy', name: 'Giusy Influencer', role: '12 mila follower, 11 mila sono bot', icon: '🤳', pop: 4, ric: 2, fam: 4, car: 4, ret: 2 },
  { id: 'alfio', name: 'Prof. Alfio Pedante', role: 'Docente, corregge anche i manifesti', icon: '📚', pop: 2, ric: 2, fam: 5, car: 2, ret: 2 },
  { id: 'cicciu', name: 'Mastro Cicciu', role: 'Pescatore, conosce ogni scoglio', icon: '🎣', pop: 4, ric: 1, fam: 4, car: 3, ret: 3 },
  { id: 'santo', name: 'Santo del Bar', role: 'Barista, confessore laico del paese', icon: '☕', pop: 5, ric: 2, fam: 3, car: 3, ret: 5 },
  { id: 'melo', name: 'Rag. Melo Conti', role: 'Commercialista, i numeri tornano (quasi)', icon: '🧮', pop: 1, ric: 4, fam: 3, car: 1, ret: 4 },
  { id: 'peppe', name: 'Don Peppe il Mediatore', role: '“Ci penso io”, e ci pensa davvero', icon: '🕶️', pop: 3, ric: 4, fam: 2, car: 4, ret: 5 },
  { id: 'chiara', name: 'Chiara la Ricercatrice', role: 'Tornata dall\'estero per restare', icon: '🔬', pop: 3, ric: 2, fam: 5, car: 4, ret: 1 },
];
export const LIST_SIZE = 4;

/**
 * Relitti dell'amministrazione uscente: si scoprono passandoci vicino. Diventano munizioni per i comizi.
 */
export const RELICS = [
  { id: 'lungomare', x: -893, z: -168, icon: '🗑️', title: 'Il lungomare senza cestini', text: 'Ottocento metri di vista mare e nemmeno un cestino. I gabbiani hanno fondato un comitato per la raccolta differenziata.' },
  { id: 'spiaggia', x: -376, z: -205, icon: '🏖️', title: 'La spiaggia “libera”', text: 'Libera davvero: libera da bagnini, docce, passerelle e manutenzione. L\'ultima pulizia risale a quando c\'era la lira.' },
  { id: 'carnevale', x: 238, z: -106, icon: '🎭', title: 'Il Carnevale che fu', text: 'Qui sfilavano i carri allegorici. Oggi sfilano solo le erbacce, in maschera da prato.' },
  { id: 'stazione', x: -41, z: -228, icon: '🚉', title: 'La stazione', text: 'Il treno passa, la pensilina no. Il tabellone degli orari è fermo a un secolo fa: almeno lui è puntuale.' },
  { id: 'pineta', x: -205, z: -71, icon: '🌲', title: 'La pineta comunale', text: 'Panchine rotte, altalena sequestrata dalla ruggine. I bambini giocano a “trova il gioco”.' },
  { id: 'ecologica', x: -276, z: 384, icon: '♻️', title: 'L\'isola ecologica', text: 'Aperta il martedì dispari degli anni bisestili. Il resto dei giorni è un\'isola e basta.' },
  { id: 'scuola', x: -155, z: 257, icon: '🏫', title: 'La scuola dei lavori promessi', text: 'Tre campagne elettorali, tre rendering, zero cantieri. Gli infissi hanno chiesto la pensione.' },
  { id: 'castello', x: 266, z: -242, icon: '🏰', title: 'Il castello dimenticato', text: 'Patrimonio storico gestito come un condominio di lucertole. Nessun cartello, nessuna visita, nessuna vergogna.' },
  { id: 'buca', x: -82, z: 180, icon: '🕳️', title: 'La buca storica', text: 'Una buca così antica che è stata inserita nel catasto. Qualcuno ci ha piantato un geranio.' },
  { id: 'vetrine', x: 31, z: -48, icon: '🏚️', title: 'Le vetrine vuote', text: 'Tre vetrine su quattro: “Affittasi”. La quarta: “Cedesi attività”. I giovani? Partiti col primo treno, quello che passa.' },
  { id: 'porto', x: 304, z: -206, icon: '⚓', title: 'Il porticciolo dei rendering', text: 'Promesso nel secolo scorso, esiste solo nei volantini. Le barche aspettano ancora, in secca.' },
];

/** luoghi di ritrovo: qui si ascoltano le voci del paese (una visita al giorno per luogo) */
export const HANGOUTS = [
  { id: 'bar-piazza', x: -188, z: -18, icon: '☕', title: 'Il bar della piazza', text: 'Caffè, cornetto e processi sommari.' },
  { id: 'pub', x: 121, z: -100, icon: '🍺', title: 'Il pub', text: 'Dopo la seconda birra tutti sanno chi ha votato chi.' },
  { id: 'circolo', x: -202, z: 89, icon: '🃏', title: 'Il circolo degli anziani', text: 'Briscola, scopa e la vera sede del consiglio comunale.' },
  { id: 'farmacia', x: 21, z: -80, icon: '💊', title: 'La fila in farmacia', text: 'Venti minuti di attesa, venti notizie riservatissime.' },
  { id: 'barbiere', x: 53, z: -78, icon: '💈', title: 'Il barbiere', text: 'Taglio, barba e rassegna stampa.' },
  { id: 'sagrato', x: -232, z: 111, icon: '⛪', title: 'Il sagrato dopo la messa', text: 'Pace e bene. Poi, a bassa voce, il resto.' },
];

/** piazze dove si tengono i comizi */
export const RALLY_SPOTS = [
  { id: 've3', x: -17, z: 3, icon: '📣', title: 'Comizio in piazza del Municipio' },
  { id: 'liberta', x: -214, z: 86, icon: '📣', title: 'Comizio in piazza della Chiesa' },
  { id: 'gp2', x: -151, z: -13, icon: '📣', title: 'Comizio nella piazza del giardino' },
  { id: 'federico', x: 235, z: -80, icon: '📣', title: 'Comizio nella piazza del mercato' },
];

export const DEALER = { id: 'autosalone', x: 509, z: -212, icon: '🚗', title: 'Autosalone', text: 'Qui l\'apparenza si compra a rate.' };
export const START = { x: 19, z: 35 };

/** auto acquistabili: apparenza (0–5), velocità (m/s) */
export const CARS = [
  { id: 'panda', name: 'Utilitaria usata', price: 3500, look: 1, speed: 14, type: 0, color: 0xc8c2b4, text: 'Ha 300 mila km, tutti in salita.' },
  { id: 'berlina', name: 'Berlina aziendale', price: 28000, look: 2, speed: 17, type: 1, color: 0x2e4d74, text: 'Seria, affidabile, un po\' democristiana.' },
  { id: 'suv', name: 'SUV nero lucido', price: 65000, look: 3, speed: 18, type: 3, color: 0x181818, text: 'Parcheggia dove vuole. Anche sul marciapiede.' },
  { id: 'cabrio', name: 'Cabrio sportiva', price: 140000, look: 4, speed: 22, type: 1, color: 0xb8231c, text: 'Capelli al vento e voti in tasca. O il contrario.' },
];

/** campagna pubblicitaria: si compra dal telefono, rende meno se la si ripete lo stesso giorno */
export const ADS = [
  { id: 'volantini', name: 'Volantini', price: 400, gain: 0.7, text: 'Cinquemila fogli, metà finiscono sui parabrezza.' },
  { id: 'manifesti', name: 'Manifesti 6×3', price: 1500, gain: 1.6, text: 'La tua faccia, gigante, sopra le buche.' },
  { id: 'social', name: 'Campagna social', price: 2500, gain: 2.4, text: 'Video verticali, musica di tendenza, zero contenuti.' },
  { id: 'radio', name: 'Radio locale', price: 4000, gain: 3.2, text: 'Spot tra la sagra e i necrologi.' },
  { id: 'cena', name: 'Cena elettorale', price: 9000, gain: 5, text: 'Pasta al forno per duecento. Il voto è compreso nel coperto.' },
];

/** voci e fatti sugli avversari (inventati): si raccolgono nei ritrovi, si usano nei comizi */
export const RUMORS = [
  { t: 'sindaco', p: 2, text: 'In cinque anni si è presentato in consiglio comunale tre volte. Una per sbaglio: cercava il bagno.' },
  { t: 'sindaco', p: 1, text: 'Ha inaugurato la stessa rotonda due volte, con due nastri diversi.' },
  { t: 'sindaco', p: 3, text: 'Il bando per i cestini del lungomare è scaduto perché nessuno ha trovato la penna per firmarlo.' },
  { t: 'sindaco', p: 2, text: 'Il suo ufficio ha l\'orario di ricevimento: “su appuntamento, appuntamenti esauriti”.' },
  { t: 'sindaco', p: 1, text: 'Ha dichiarato che i giovani non partono: “fanno solo un lungo Erasmus”.' },
  { t: 'sindaco', p: 3, text: 'Il carnevale è stato cancellato perché “il paese è già abbastanza in maschera”.' },
  { t: 'sindaco', p: 2, text: 'Ha delegato la manutenzione delle strade alla pioggia: “le buche si riempiono da sole”.' },
  { t: 'commendatore', p: 2, text: 'Ha promesso lo stesso posto al comune a quattordici persone diverse. Tre sono parenti tra loro.' },
  { t: 'commendatore', p: 3, text: 'La sua villa al mare risulta, al catasto, un “deposito attrezzi con vista”.' },
  { t: 'commendatore', p: 1, text: 'Regala calendari con la sua foto per ogni mese. Anche febbraio, due volte.' },
  { t: 'commendatore', p: 2, text: 'Vuole trasformare la pineta in un “parco residenziale verde”: verde il colore dei balconi.' },
  { t: 'commendatore', p: 3, text: 'Le sue ditte hanno vinto dieci appalti su dieci. L\'undicesimo non è stato bandito: l\'ha vinto lo stesso.' },
  { t: 'commendatore', p: 1, text: 'Ha chiamato il suo SUV come il paese. Il SUV, però, funziona.' },
  { t: 'commendatore', p: 2, text: 'Offre passaggi gratis in auto per andare a votare. Solo andata.' },
];

/**
 * Proposte improvvise: accettare o rifiutare. Effetti: cons (consenso), rep (fedina 0-100),
 * risk (probabilità di scandalo), cost (spesa €). `end` chiude la partita.
 */
export const QUESTS = [
  {
    id: 'villa', icon: '🏖️', who: 'Un imprenditore edile', text: 'Ti chiede di promettere la concessione per una villetta sulla spiaggia. “Piccola, abusiva ma col cuore.” In cambio: i voti di tutta la famiglia.',
    yes: { label: 'Prometti', cons: 3, rep: -12, risk: 15, msg: 'Trecento voti in arrivo. E una ruspa, prima o poi.' },
    no: { label: 'Rifiuti', cons: 0.6, rep: 4, msg: 'Si sparge la voce: “quello non si compra”. Qualcuno apprezza.' },
  },
  {
    id: 'cugino', icon: '👔', who: 'Tua zia', text: 'Vuole un posto al comune per il cugino Nuccio. “È bravo, sa accendere il computer.”',
    yes: { label: 'Prometti il posto', cons: 1.6, rep: -6, risk: 8, msg: 'La famiglia allargata è con te. Molto allargata.' },
    no: { label: 'Rifiuti', cons: -0.5, rep: 3, msg: 'Pranzo della domenica gelido. Ma la coscienza è calda.' },
  },
  {
    id: 'carro', icon: '🎭', who: 'Il comitato del Carnevale', text: 'Vuole rifare un carro allegorico dopo anni di nulla. Servono 2.000 €.',
    yes: { label: 'Finanzia (2.000 €)', cons: 2.2, rep: 2, cost: 2000, msg: 'Il carro avrà la tua faccia. In cartapesta, ma somigliante.' },
    no: { label: 'Non ora', cons: -0.6, msg: 'I carnevalari si ricorderanno. Hanno buona memoria e ottime maschere.' },
  },
  {
    id: 'magliette', icon: '⚽', who: 'La squadra di calcetto', text: 'Magliette nuove col tuo nome dietro. 800 €.',
    yes: { label: 'Sponsorizza (800 €)', cons: 1.2, cost: 800, msg: 'Il tuo nome ha segnato due gol. Uno era un autogol.' },
    no: { label: 'Rifiuti', cons: -0.2, msg: 'Giocheranno con le maglie dell\'anno scorso. E del precedente.' },
  },
  {
    id: 'intervista', icon: '📰', who: 'Il giornalino locale', text: 'Offre un\'intervista in prima pagina. “Offerta libera”, minimo 1.500 €.',
    yes: { label: 'Paga (1.500 €)', cons: 2, rep: -3, cost: 1500, msg: 'Titolo: “Il nuovo che avanza”. Sotto, in piccolo: “pubbliredazionale”.' },
    no: { label: 'Rifiuti', rep: 2, msg: 'Il giornalino intervisterà il Commendatore. Gratis, dicono.' },
  },
  {
    id: 'buca', icon: '🕳️', who: 'Un anziano', text: 'Ti porta davanti alla buca sotto casa sua: “Se sei diverso dagli altri, dimostralo.”',
    yes: { label: 'Chiami un operaio (600 €)', cons: 1.8, rep: 3, cost: 600, msg: 'Buca chiusa in un\'ora. Il quartiere è in stato di shock.' },
    no: { label: 'Prometti “dopo le elezioni”', cons: -0.8, msg: 'Frase già sentita. L\'anziano ti guarda come si guarda un sindaco.' },
  },
  {
    id: 'pacchetti', icon: '📦', who: 'Un signore con gli occhiali scuri', text: 'Pacchetti di voti a 50 € l\'uno. “Duecento, e non se ne parla più.”',
    yes: { label: 'Compra (10.000 €)', cons: 5, rep: -25, risk: 30, cost: 10000, msg: 'Duecento voti. Duecento testimoni.' },
    no: { label: 'Rifiuti', rep: 6, cons: 0.4, msg: 'Il signore sorride, si toglie gli occhiali. Sotto ce ne sono altri.' },
  },
  {
    id: 'processione', icon: '🕯️', who: 'Il parroco', text: 'Ti invita a portare il santo alla processione. Si suda, ma si vede.',
    yes: { label: 'Porti il santo', cons: 1.5, rep: 2, msg: 'Spalla dolorante, consenso in salita.' },
    no: { label: 'Declini', cons: -0.4, msg: 'Le signore della terza fila hanno preso nota.' },
  },
  {
    id: 'giovani', icon: '🎒', who: 'Un gruppo di ragazzi', text: 'Stanno per partire per il Nord. Ti chiedono un motivo per restare.',
    yes: { label: 'Prometti uno spazio giovani (3.000 €)', cons: 2.5, rep: 3, cost: 3000, msg: 'Un locale, wi-fi, sedie. Due restano. È un inizio.' },
    no: { label: 'Auguri loro buon viaggio', cons: -1, msg: 'Partono. Il paese perde altri tre elettori e un batterista.' },
  },
  {
    id: 'ritiro', icon: '🤝', who: 'Il Commendatore in persona', text: 'Ti propone di ritirarti. In cambio: un assessorato “di peso” e una cena di pesce ogni venerdì.',
    yes: { label: 'Accetti', end: 'venduto', msg: '' },
    no: { label: 'Rifiuti', cons: 1.5, rep: 5, msg: 'Il Commendatore stringe la mano più forte del necessario. Guerra.' },
  },
];

/** scandali che scoppiano se il rischio accumulato è alto */
export const SCANDALS = [
  'Un video al bar ti riprende mentre prometti la stessa cosa a due persone diverse.',
  'Il cugino Nuccio racconta a tutti del suo “posto sicuro” al comune.',
  'Una ruspa si presenta in spiaggia con il tuo volantino sul cruscotto.',
  'Una chat di famiglia finisce nelle mani del giornalino.',
];

export const INTRO_TEXT = [
  'Acquedolci. Un paese sul mare con la faccia stanca.',
  'I giovani scappano col primo treno. I negozi abbassano le serrande. Il lungomare non ha nemmeno un cestino.',
  'Anni di amministrazione assente hanno fatto il resto.',
  'Ma tra 30 giorni si vota. E stavolta ci sei anche tu.',
];
