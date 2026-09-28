#!/usr/bin/env node
/**
 * Edifici dal DBTR 2013 della CTR 1:10.000 (SITR Regione Siciliana, CC BY 4.0), strato 35
 * "Edificato": poligoni rilevati da aerofotogrammetria, già classificati (civile, religioso,
 * industriale, baracca…) e più completi di OSM (2253 contro 1186 nel bbox).
 * Coordinate native EPSG:25833 (UTM 33N): nessuna riproiezione, stesso sistema di MDT e ortofoto.
 * Output: data/buildings.json
 */
import { writeFileSync, readFileSync } from 'node:fs';
import { utmBox } from './geo.mjs';

const city = JSON.parse(readFileSync(new URL('../city.json', import.meta.url)));
const B = 'https://map.sitr.regione.sicilia.it/gis/rest/services/ctr_10000/ctr_2013_dbtrs/MapServer/35/query';
const box = utmBox(city.bboxLonLat);

async function page(offset) {
  const q = new URLSearchParams({
    where: '1=1',
    geometry: `${box.xmin},${box.ymin},${box.xmax},${box.ymax}`,
    geometryType: 'esriGeometryEnvelope', inSR: '25833', outSR: '25833',
    spatialRel: 'esriSpatialRelIntersects',
    outFields: 'OBJECTID,CODICE,DESCRIZION,TIPO,ANNORILEV',
    returnGeometry: 'true', orderByFields: 'OBJECTID',
    resultOffset: String(offset), resultRecordCount: '1000', f: 'json',
  });
  const r = await fetch(`${B}?${q}`);
  if (!r.ok) throw new Error(`DBTR HTTP ${r.status}`);
  return r.json();
}

const out = [];
for (let off = 0; ; off += 1000) {
  const j = await page(off);
  for (const f of j.features || []) {
    const rings = (f.geometry?.rings || []).map((r) => r.map(([x, y]) => [+x.toFixed(2), +y.toFixed(2)]));
    if (!rings.length || rings[0].length < 4) continue;
    const a = f.attributes;
    out.push({ id: a.OBJECTID, code: a.CODICE, desc: a.DESCRIZION, year: a.ANNORILEV, rings });
  }
  console.log(`pagina ${off / 1000 + 1}: ${j.features?.length ?? 0} (totale ${out.length})`);
  if (!j.exceededTransferLimit && (j.features?.length ?? 0) < 1000) break;
}

const byCode = {};
for (const b of out) byCode[`${b.code} ${b.desc}`] = (byCode[`${b.code} ${b.desc}`] || 0) + 1;
writeFileSync(new URL('../data/buildings.json', import.meta.url), JSON.stringify({
  source: 'DBTR 2013 CTR 1:10.000 — SITR Regione Siciliana (CC BY 4.0)', epsg: 25833, count: out.length, buildings: out,
}));
console.log('tipi:', byCode);
console.log(`→ data/buildings.json (${out.length} edifici)`);
