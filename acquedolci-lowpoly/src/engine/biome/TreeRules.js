/**
 * Alberi "da progetto", non sparsi a caso:
 *  - VIALI: lungo le strade principali (e una parte delle residenziali), sul bordo esterno del
 *    marciapiede, passo ~9 m, solo dove il marciapiede è abbastanza largo e ci sono edifici vicini;
 *  - FRUTTETI: in filari allineati all'asse lungo del campo (passo 6 × 5 m);
 *  - GIARDINI: pochi alberi nel verde degli isolati, lontani dai muri.
 * Restituisce {x, z, habitat}: la specie la sceglie VegetationBuilder (clima, quota, biomi).
 */
import { hash32, mulberry32, unit } from '../rng.js';

const AVENUE = new Set(['primary', 'secondary', 'tertiary', 'primary_link', 'secondary_link', 'tertiary_link']);

function pointInRing(x, z, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    if ((pts[i].z > z) !== (pts[j].z > z) && x < ((pts[j].x - pts[i].x) * (z - pts[i].z)) / (pts[j].z - pts[i].z) + pts[i].x) inside = !inside;
  }
  return inside;
}

/**
 * @param {object} o
 * @param {Array} o.roads polilinee {pts, highway, width, name}
 * @param {Array} o.features
 * @param {object} o.level JSON del livello (strato green)
 * @param {(x:number,z:number)=>object|null} o.surfaceAt
 * @param {(x:number,z:number,r:number)=>boolean} o.nearBuilding
 * @param {(c:number[])=>{x:number,z:number}[]} o.ringLocal lon/lat → locale
 */
export function planTrees({ roads, features, level, surfaceAt, nearBuilding, ringLocal }) {
  const out = [];
  const taken = [];
  const farFromOthers = (x, z, d) => {
    for (let k = taken.length - 1; k >= Math.max(0, taken.length - 400); k--) {
      if (Math.hypot(taken[k][0] - x, taken[k][1] - z) < d) return false;
    }
    return true;
  };
  const add = (x, z, habitat, minGap) => {
    if (!farFromOthers(x, z, minGap)) return;
    out.push({ x, z, habitat });
    taken.push([x, z]);
  };
  const stats = { avenue: 0, orchard: 0, garden: 0 };

  // ---- viali
  for (const r of roads) {
    const isAvenue = AVENUE.has(r.highway);
    const isRes = r.highway === 'residential' || r.highway === 'living_street';
    if (!isAvenue && !(isRes && unit(hash32(`av:${r.name || r.pts[0].x}`)) < 0.3)) continue;
    const pts = r.pts;
    let carry = 4;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const L = Math.hypot(b.x - a.x, b.z - a.z);
      if (L < 0.1) continue;
      const tx = (b.x - a.x) / L, tz = (b.z - a.z) / L;
      for (let s = carry; s < L; s += 9) {
        const px = a.x + tx * s, pz = a.z + tz * s;
        for (const side of [1, -1]) {
          const nx = -tz * side, nz = tx * side;
          // primo tratto di marciapiede lungo la normale
          for (let off = 2; off < 10; off += 0.5) {
            const q = surfaceAt(px + nx * off, pz + nz * off);
            if (!q) break;
            if (q.layer !== 'sidewalk') continue;
            const outer = surfaceAt(px + nx * (off + 1.3), pz + nz * (off + 1.3));
            if (!outer || (outer.layer !== 'sidewalk' && outer.layer !== 'ped')) break; // marciapiede stretto
            const tx2 = px + nx * (off + 0.9), tz2 = pz + nz * (off + 0.9);
            if (!nearBuilding(tx2, tz2, 25) || nearBuilding(tx2, tz2, 2.2)) break;
            add(tx2, tz2, 'urban', 6.5);
            stats.avenue++;
            break;
          }
        }
      }
      carry = Math.max(0, (carry - L) % 9);
    }
  }

  // ---- frutteti in filari
  for (const f of features) {
    const p = f.properties;
    if (f.geometry.type !== 'Polygon' || (p.subtype || p.landuse) !== 'orchard') continue;
    const ring = ringLocal(f.geometry.coordinates[0]);
    if (ring.length < 3) continue;
    let best = 0, ang = 0;
    for (let i = 0; i < ring.length - 1; i++) {
      const L = Math.hypot(ring[i + 1].x - ring[i].x, ring[i + 1].z - ring[i].z);
      if (L > best) { best = L; ang = Math.atan2(ring[i + 1].z - ring[i].z, ring[i + 1].x - ring[i].x); }
    }
    const c = Math.cos(ang), s = Math.sin(ang);
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    for (const q of ring) {
      const u = q.x * c + q.z * s, v = -q.x * s + q.z * c;
      minU = Math.min(minU, u); maxU = Math.max(maxU, u); minV = Math.min(minV, v); maxV = Math.max(maxV, v);
    }
    for (let v = minV + 3; v < maxV; v += 7) {
      for (let u = minU + 3; u < maxU; u += 6) {
        const x = u * c - v * s, z = u * s + v * c;
        if (!pointInRing(x, z, ring) || nearBuilding(x, z, 2.5)) continue;
        const q = surfaceAt(x, z);
        if (q && q.layer !== 'green') continue; // non su strade/sentieri
        add(x, z, 'orchard', 3.5);
        stats.orchard++;
      }
    }
  }

  // ---- giardini (strato verde degli isolati)
  const u = level?.unit || 0.1;
  for (const e of level?.layers?.green || []) {
    const ring = [];
    for (let i = 0; i < e.o.length; i += 2) ring.push({ x: e.o[i] * u, z: e.o[i + 1] * u });
    let area = 0, minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      area += a.x * b.z - b.x * a.z;
      minX = Math.min(minX, a.x); maxX = Math.max(maxX, a.x); minZ = Math.min(minZ, a.z); maxZ = Math.max(maxZ, a.z);
    }
    area = Math.abs(area) / 2;
    if (area < 150) continue;
    const want = Math.min(14, Math.round(area / 260));
    const rand = mulberry32(hash32(`gd:${Math.round(minX)}:${Math.round(minZ)}`));
    for (let k = 0, got = 0; k < want * 8 && got < want; k++) {
      const x = minX + rand() * (maxX - minX), z = minZ + rand() * (maxZ - minZ);
      if (!pointInRing(x, z, ring)) continue;
      const q = surfaceAt(x, z);
      if (!q || q.layer !== 'green' || nearBuilding(x, z, 3.5)) continue;
      add(x, z, 'park', 5);
      stats.garden++;
      got++;
    }
  }
  // priorità: viali e giardini prima, i frutteti riempiono ciò che resta del budget alberi
  const rank = { urban: 0, park: 1, orchard: 2 };
  out.sort((a, b) => rank[a.habitat] - rank[b.habitat]);
  return { placements: out, stats };
}
