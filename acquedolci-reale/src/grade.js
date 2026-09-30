/**
 * Quota di progetto delle strade (scripts/build-streets.mjs, `roads[].h`): la sezione trasversale è
 * orizzontale e sta alla quota del lato più basso, quello verso il mare. Il terreno sotto la sede
 * stradale (`corr`: carreggiata + marciapiedi) si spiana a quella quota; dal lato a monte resta un
 * muro di sostegno (streets.js).
 *
 *  roadAt(x,z)     quota della via più vicina: per asfalto, marciapiedi, segnaletica
 *  groundAt(x,z)   quota su cui poggiano le cose: la via dentro la sede stradale, il MDT fuori
 *  terrainAt(x,z)  maglia del terreno: sotto la via qualche cm più giù, a monte scavata col muro
 *  refine(...)     la cella da 6 m del terreno va divisa (c'è uno scavo o un riporto vicino)
 *  edgeDist(x,z)   distanza dal bordo della sede stradale (fino a 8 m, poi Infinity)
 */
const PAD = 16;      // m: oltre questa distanza da un asse la quota di progetto non conta
const BAND = 3.5;    // m: fascia a monte oltre il muro dove il terreno scende a raccordarsi
const UNDER = 0.15;  // m: il terreno resta sotto l'asfalto (disegnato 20 cm sopra la quota)

export function createGrade(streets, natural) {
  const roads = (streets.roads || []).filter((r) => r.h && r.h.length * 2 === r.p.length);
  const rings = streets.corr || [];
  if (!roads.length || !rings.length) {
    return { roadAt: natural, groundAt: natural, terrainAt: natural, natural, refine: () => false, edgeDist: () => Infinity, inCorr: () => false, rings: [] };
  }

  // ---- assi: segmenti con la quota ai due capi, in una griglia
  const SC = 16, sg = new Map();
  const S = []; // ax, az, bx, bz, ha, hb, road
  roads.forEach((rd, ri) => {
    for (let i = 0; i + 3 < rd.p.length; i += 2) {
      const s = S.length / 7;
      S.push(rd.p[i], rd.p[i + 1], rd.p[i + 2], rd.p[i + 3], rd.h[i / 2], rd.h[i / 2 + 1], ri);
      const x0 = Math.floor((Math.min(rd.p[i], rd.p[i + 2]) - PAD) / SC), x1 = Math.floor((Math.max(rd.p[i], rd.p[i + 2]) + PAD) / SC);
      const z0 = Math.floor((Math.min(rd.p[i + 1], rd.p[i + 3]) - PAD) / SC), z1 = Math.floor((Math.max(rd.p[i + 1], rd.p[i + 3]) + PAD) / SC);
      for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) { const k = x * 65536 + z; let l = sg.get(k); if (!l) sg.set(k, (l = [])); l.push(s); }
    }
  });
  const bestD = new Float64Array(roads.length).fill(Infinity), bestH = new Float64Array(roads.length), touched = [];
  /** quota di progetto nel punto, o null lontano dalle vie. Vicino a un incrocio pesa le vie vicine. */
  function gradeAt(x, z) {
    const l = sg.get(Math.floor(x / SC) * 65536 + Math.floor(z / SC));
    if (!l) return null;
    let dmin = Infinity;
    for (const s of l) {
      const o = s * 7, ax = S[o], az = S[o + 1], ex = S[o + 2] - ax, ez = S[o + 3] - az;
      const L2 = ex * ex + ez * ez;
      const t = L2 > 0 ? Math.max(0, Math.min(1, ((x - ax) * ex + (z - az) * ez) / L2)) : 0;
      const d = Math.hypot(x - ax - ex * t, z - az - ez * t);
      if (d > PAD) continue;
      const r = S[o + 6];
      if (bestD[r] === Infinity) touched.push(r);
      if (d < bestD[r]) { bestD[r] = d; bestH[r] = S[o + 4] + (S[o + 5] - S[o + 4]) * t; }
      if (d < dmin) dmin = d;
    }
    if (dmin === Infinity) { for (const r of touched) bestD[r] = Infinity; touched.length = 0; return null; }
    let sw = 0, sh = 0;
    for (const r of touched) {
      const d = bestD[r];
      if (d < dmin + 2.5) { const w = 1 / (d + 0.5) ** 4; sw += w; sh += w * bestH[r]; }
      bestD[r] = Infinity;
    }
    touched.length = 0;
    return sh / sw;
  }

  // ---- sede stradale: maschera a 1 m, a tessere da 64 m solo dove serve (pari-dispari su tutti gli anelli)
  const T = 64, tiles = new Map();
  const rows = new Map();
  for (const r of rings) {
    const n = r.length >> 1;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n, x1 = r[i * 2], z1 = r[i * 2 + 1], x2 = r[j * 2], z2 = r[j * 2 + 1];
      if (z1 === z2) continue;
      const lo = Math.min(z1, z2), hi = Math.max(z1, z2);
      for (let row = Math.ceil(lo - 0.5); row + 0.5 < hi; row++) {
        const zz = row + 0.5;
        if (zz < lo) continue;
        let l = rows.get(row); if (!l) rows.set(row, (l = []));
        l.push(x1 + (x2 - x1) * (zz - z1) / (z2 - z1));
      }
    }
  }
  for (const [row, xs] of rows) {
    xs.sort((a, b) => a - b);
    const tz = Math.floor(row / T), cz = row - tz * T;
    for (let k = 0; k + 1 < xs.length; k += 2) {
      for (let x = Math.ceil(xs[k] - 0.5); x + 0.5 <= xs[k + 1]; x++) {
        const tx = Math.floor(x / T), key = tx * 65536 + tz;
        let t = tiles.get(key); if (!t) tiles.set(key, (t = new Uint8Array(T * T)));
        t[cz * T + (x - tx * T)] = 1;
      }
    }
  }
  const inCorr = (x, z) => {
    const cx = Math.floor(x), cz = Math.floor(z), tx = Math.floor(cx / T), tz = Math.floor(cz / T);
    const t = tiles.get(tx * 65536 + tz);
    return !!t && t[(cz - tz * T) * T + (cx - tx * T)] === 1;
  };

  // ---- bordi della sede stradale: distanza esatta fino a 8 m
  const EC = 8, EPAD = 8, eg = new Map(), E = [];
  for (const r of rings) {
    const n = r.length >> 1;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n, s = E.length / 4;
      E.push(r[i * 2], r[i * 2 + 1], r[j * 2], r[j * 2 + 1]);
      const x0 = Math.floor((Math.min(r[i * 2], r[j * 2]) - EPAD) / EC), x1 = Math.floor((Math.max(r[i * 2], r[j * 2]) + EPAD) / EC);
      const z0 = Math.floor((Math.min(r[i * 2 + 1], r[j * 2 + 1]) - EPAD) / EC), z1 = Math.floor((Math.max(r[i * 2 + 1], r[j * 2 + 1]) + EPAD) / EC);
      for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) { const k = x * 65536 + z; let l = eg.get(k); if (!l) eg.set(k, (l = [])); l.push(s); }
    }
  }
  function edgeDist(x, z) {
    const l = eg.get(Math.floor(x / EC) * 65536 + Math.floor(z / EC));
    if (!l) return Infinity;
    let best = Infinity;
    for (const s of l) {
      const o = s * 4, ax = E[o], az = E[o + 1], ex = E[o + 2] - ax, ez = E[o + 3] - az, L2 = ex * ex + ez * ez;
      const t = L2 > 0 ? Math.max(0, Math.min(1, ((x - ax) * ex + (z - az) * ez) / L2)) : 0;
      const d = Math.hypot(x - ax - ex * t, z - az - ez * t);
      if (d < best) best = d;
    }
    return best <= EPAD ? best : Infinity;
  }

  const roadAt = (x, z) => { const g = gradeAt(x, z); return g == null ? natural(x, z) : g; };
  const groundAt = (x, z) => (inCorr(x, z) ? roadAt(x, z) : natural(x, z));
  function terrainAt(x, z) {
    const n = natural(x, z);
    if (!sg.has(Math.floor(x / SC) * 65536 + Math.floor(z / SC))) return n;
    const g = gradeAt(x, z);
    if (g == null) return n;
    if (inCorr(x, z)) return g - UNDER;
    // a monte: la maglia scende dietro il muro, così nessun triangolo buca il marciapiede
    if (n <= g - UNDER) return n;
    const d = edgeDist(x, z);
    return d > BAND ? n : Math.min(n, g - UNDER + 0.35 * d);
  }
  /** la cella del terreno ha uno scavo o un riporto: si disegna a 2 m invece che a 6 */
  function refine(x0, z0, x1, z1) {
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    if (!inCorr(cx, cz) && edgeDist(cx, cz) > BAND + Math.hypot(x1 - x0, z1 - z0) / 2) return false;
    for (let i = 0; i <= 2; i++) for (let j = 0; j <= 2; j++) {
      const x = x0 + (x1 - x0) * i / 2, z = z0 + (z1 - z0) * j / 2;
      if (Math.abs(terrainAt(x, z) - natural(x, z)) > 0.4) return true;
    }
    return false;
  }
  return { roadAt, groundAt, terrainAt, natural, refine, edgeDist, inCorr, rings };
}
