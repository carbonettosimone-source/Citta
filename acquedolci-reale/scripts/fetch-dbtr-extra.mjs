#!/usr/bin/env node
/**
 * Strati DBTR 2013 oltre agli edifici (SITR, CC BY 4.0), in EPSG:25833:
 *  - 11 Strade (bordi carreggiata dove la via confina con aree aperte)
 *  - 12 Altre strutture viarie (scalinate, ponti, accessi)
 *  - 24 Elementi divisori (muri divisori, muri di sostegno, muri a secco, recinzioni/cancelli)
 *  - 25 Limiti vegetazione (aiuole)
 *  - 26 Aree vegetazione (oliveti, frutteti, vigneti, macchia/bosco)
 * Output: data/dbtr-extra.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { utmBox } from './geo.mjs';

const city = JSON.parse(readFileSync(new URL('../city.json', import.meta.url)));
const box = utmBox(city.bboxLonLat);
const B = 'https://map.sitr.regione.sicilia.it/gis/rest/services/ctr_10000/ctr_2013_dbtrs/MapServer';

async function layer(id) {
  const out = [];
  for (let off = 0; ; off += 1000) {
    const q = new URLSearchParams({
      where: '1=1', geometry: `${box.xmin},${box.ymin},${box.xmax},${box.ymax}`, geometryType: 'esriGeometryEnvelope',
      inSR: '25833', outSR: '25833', spatialRel: 'esriSpatialRelIntersects', outFields: 'OBJECTID,CODICE,DESCRIZION',
      returnGeometry: 'true', orderByFields: 'OBJECTID', resultOffset: String(off), resultRecordCount: '1000', f: 'json',
    });
    const j = await (await fetch(`${B}/${id}/query?${q}`)).json();
    for (const f of j.features || []) {
      const g = f.geometry || {};
      const parts = (g.paths || g.rings || []).map((p) => p.map(([x, y]) => [+x.toFixed(2), +y.toFixed(2)]));
      if (parts.length) out.push({ id: f.attributes.OBJECTID, code: f.attributes.CODICE, desc: f.attributes.DESCRIZION, parts });
    }
    if ((j.features?.length ?? 0) < 1000) break;
  }
  return out;
}

const res = {};
for (const [name, id] of [['roadEdges', 11], ['roadStructures', 12], ['dividers', 24], ['vegLines', 25], ['vegAreas', 26]]) {
  res[name] = await layer(id);
  const c = {}; for (const f of res[name]) c[`${f.code} ${f.desc}`] = (c[`${f.code} ${f.desc}`] || 0) + 1;
  console.log(name, res[name].length, c);
}
writeFileSync(new URL('../data/dbtr-extra.json', import.meta.url), JSON.stringify({ source: 'DBTR 2013 — SITR Regione Siciliana (CC BY 4.0)', epsg: 25833, ...res }));
