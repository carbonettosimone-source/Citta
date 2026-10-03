/**
 * Sistema di override per facciata per strada/segmento. Ogni voce descrive un tratto di via
 * (startXZ, endXZ in coordinate locali, X=est Z=sud, origine al Municipio) e i parametri estetici
 * da applicare agli edifici che vi si affacciano.
 *
 * Il pipeline è deliberatamente separato dai modelli geometrici: nessun pixel di Street View finisce
 * nel renderer, solo la *lettura* delle proporzioni (piani, campate, tipo apertura) usata per
 * costruire le geometrie canvas. Un testo breve documenta il riferimento su cui si è basato chi ha
 * compilato i parametri.
 *
 * Struttura di un segmento:
 *   name        : nome OSM della via
 *   start       : [x, z] inizio tratto (locale)
 *   end         : [x, z] fine tratto (locale)
 *   band        : larghezza massima (m) dal centroide edificio all'asse per considerarlo "su questa via"
 *   groundFloor : 'shops' | 'residential' | 'mixed' — tipo prevalente del piano terra
 *   cornices    : true/false — marcapiano decorativo fra ogni piano
 *   balconyRate : 0–1, probabilità che una campata abbia balcone (sovrascritto per il lato strada)
 *   shutterColor: 'green' | 'brown' | 'grey' | 'dark' — tono delle persiane
 *   windowStyle : 'tall' | 'standard' | 'arch' — proporzioni finestre
 *   streetTrees : { species, spacing, offset } — alberatura sul marciapiede (species 0–4 come trees.js)
 *   buildingOverrides: { [id]: { ... } } — parametri esatti per singolo edificio DBTR
 *
 * Via Ricca Salerno (Via Paolo Ricca Salerno), segmento 1:
 *   da x≈108, z≈−106 (incrocio est, prima traversa) a x≈−169, z≈9 (incrocio via Cavour), ~300 m
 *   Strade primarie della Sicilia tirrenica interna: palazzine anni '60–'80 a 3–4 piani, piano
 *   terra con saracinesche metalliche e qualche vetrina; balconi quasi sempre presenti, ringhiera
 *   in ferro con bacchette verticali; persiane marroni o grigie. Sulla destra guardando ovest ci
 *   sono edifici più bassi, 1–2 piani, con pergolati e giardini laterali.
 */

/** distanza punto–segmento (2D, coordinate locali) */
function ptSegDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
  if (l2 < 1e-9) return Math.hypot(px - ax, pz - az);
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / l2));
  return Math.hypot(px - ax - t * dx, pz - az - t * dz);
}

/** proiezione scalare del punto sul segmento, in [0,1] */
function ptSegT(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
  if (l2 < 1e-9) return 0;
  return Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / l2));
}

/** Catalogo dei segmenti stradali con override di facciata. */
export const SEGMENTS = [
  {
    name: 'Via Paolo Ricca Salerno — segmento 1',
    osm_way: 199743600,
    // endpoint in coordinate locali (X=est, Z=sud, origine al Municipio DBTR id 1302565)
    start: [108.1, -105.8],   // nodo OSM 14.5897098,38.0571335 — incrocio est
    end:   [-169.4, 9.1],      // nodo OSM 14.5857056,38.0560978 — incrocio Cavour/Federico II
    band: 35,                  // m: buffer laterale per catturare edifici d'angolo e angoli larghi
    groundFloor: 'mixed',      // mix saracinesca + vetrina commerciale come in via primaria di paese
    cornices: true,            // marcapiano fra ogni piano (stile anni '60–'80 siciliani)
    balconyRate: 0.82,         // quasi ogni campata rivolta a strada ha balcone
    shutterColor: 'brown',     // persiane in legno verniciato, tono brun-marrone prevalente
    windowStyle: 'tall',       // finestre alte e strette rispetto alla campata (proporzione street-view)
    // Filari di alberi sul marciapiede: un piano sul lato nord della via (z negativo = nord)
    // specie 4 = palma (il lungomare ne ha molte; in centro alcune palme ornamentali tipiche)
    // In alternativa si usano latifoglie (0) per le strade più interne
    streetTrees: { species: 0, spacing: 12, offsetNorth: -7.5, offsetSouth: 7.5 },
    // Override specifici per edificio: valori misurati o letti dall'ortofoto
    buildingOverrides: {
      1302609: { floors: 4, groundFloor: 'shops', balconyRate: 0.9, cornices: true },
      1302540: { floors: 4, groundFloor: 'shops', balconyRate: 0.85, cornices: true },
      1302608: { floors: 4, groundFloor: 'mixed', balconyRate: 0.8, cornices: true },
      1302548: { floors: 3, groundFloor: 'mixed', balconyRate: 0.75, cornices: true },
      1302551: { floors: 2, groundFloor: 'residential', balconyRate: 0.5 },
      1302535: { floors: 3, groundFloor: 'mixed', balconyRate: 0.8, cornices: true },
    },
    // Segmento documentato da: proporzioni lette su ortofoto SITR 2022 (CC BY 4.0) a 25 cm
    // e layout catastale DBTR. Nessun pixel di Street View.
    ref: 'ortofoto SITR 2022 + DBTR 2013',
  },
  // Segmento 2 (da aggiungere nel prossimo run): da incrocio Cavour a incrocio Garibaldi
  // { name: 'Via Paolo Ricca Salerno — segmento 2', start: [-169.4, 9.1], end: [...], ... }
];

/**
 * Cache di lookup per il renderer: dato il centroide (cx, cz) di un edificio e il suo id,
 * restituisce il primo segmento che lo cattura, con le sue proprietà e l'eventuale override
 * per quell'edificio specifico. Restituisce null se l'edificio non appartiene a nessun segmento.
 */
export function getSegmentOverride(id, cx, cz) {
  for (const seg of SEGMENTS) {
    const d = ptSegDist(cx, cz, seg.start[0], seg.start[1], seg.end[0], seg.end[1]);
    if (d > seg.band) continue;
    const bover = seg.buildingOverrides?.[id] || {};
    return {
      seg,
      dist: d,
      t: ptSegT(cx, cz, seg.start[0], seg.start[1], seg.end[0], seg.end[1]),
      groundFloor: bover.groundFloor ?? seg.groundFloor,
      cornices:    bover.cornices    ?? seg.cornices,
      balconyRate: bover.balconyRate ?? seg.balconyRate,
      shutterColor: seg.shutterColor,
      windowStyle:  seg.windowStyle,
    };
  }
  return null;
}

/**
 * Genera le posizioni degli alberi stradali per tutti i segmenti con streetTrees definito.
 * Restituisce un array flat [x, z, y_placeholder, h, r, species, ...] compatibile con
 * il formato di model.trees (la quota y viene riempita dal renderer usando heightAt).
 *
 * @param {Function} heightAt - funzione (x, z) → quota in metri (locale)
 */
export function buildStreetTreePositions(heightAt) {
  const out = []; // [x, z, y, h, r, species]
  for (const seg of SEGMENTS) {
    const st = seg.streetTrees;
    if (!st) continue;
    const { species, spacing, offsetNorth, offsetSouth } = st;
    const ax = seg.start[0], az = seg.start[1];
    const bx = seg.end[0],   bz = seg.end[1];
    const L = Math.hypot(bx - ax, bz - az);
    if (L < 1) continue;
    const tx = (bx - ax) / L, tz = (bz - az) / L; // tangente (verso ovest lungo via)
    const nx = -tz, nz = tx;                         // normale (verso nord = verso sinistra guardando ovest)
    const nTree = Math.floor(L / spacing);
    for (let k = 0; k < nTree; k++) {
      const s = (k + 0.5) * spacing;
      const px = ax + tx * s, pz = az + tz * s;
      // lato nord (offset verso nord, z negativo)
      if (offsetNorth != null) {
        const x = px + nx * Math.abs(offsetNorth) * Math.sign(offsetNorth);
        const z = pz + nz * Math.abs(offsetNorth) * Math.sign(offsetNorth);
        const y = heightAt ? heightAt(x, z) : 0;
        out.push(+x.toFixed(1), +z.toFixed(1), +y.toFixed(1), 7.5, 3.0, species);
      }
      // lato sud (offset verso sud, z positivo), solo se definito
      if (offsetSouth != null) {
        const x = px - nx * Math.abs(offsetSouth) * Math.sign(offsetSouth);
        const z = pz - nz * Math.abs(offsetSouth) * Math.sign(offsetSouth);
        const y = heightAt ? heightAt(x, z) : 0;
        out.push(+x.toFixed(1), +z.toFixed(1), +y.toFixed(1), 7.5, 3.0, species);
      }
    }
  }
  return out;
}
