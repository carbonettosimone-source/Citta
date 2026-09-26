/**
 * Segnali locali calcolati dai dati già scaricati (nessuna rete).
 * Puri: usabili sia dal bake Node sia dal browser.
 */

const NAMED = {
  white: [240, 240, 236], black: [30, 30, 30], grey: [128, 128, 128], gray: [128, 128, 128],
  red: [170, 60, 48], darkred: [120, 40, 36], brown: [120, 80, 56], orange: [210, 120, 60],
  yellow: [230, 200, 110], beige: [226, 210, 180], cream: [240, 228, 200], green: [80, 120, 70],
  darkgreen: [50, 80, 50], blue: [70, 100, 150], lightgrey: [200, 200, 196], darkgrey: [80, 80, 80],
  silver: [190, 190, 190], pink: [230, 180, 176], tan: [200, 170, 130], terracotta: [190, 100, 64],
};

export function parseColour(str) {
  if (!str) return null;
  const s = String(str).trim().toLowerCase().replace(/[\s_-]/g, '');
  if (NAMED[s]) return NAMED[s].slice();
  const m = s.match(/^#?([0-9a-f]{6})$/);
  if (m) {
    const n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m3 = s.match(/^#?([0-9a-f]{3})$/);
  if (m3) return m3[1].split('').map((c) => parseInt(c + c, 16));
  return null;
}

function roofFamily(shape) {
  const s = (shape || '').toLowerCase();
  if (!s) return null;
  if (s === 'flat') return 'flat';
  if (['hipped', 'half-hipped', 'pyramidal', 'mansard', 'dome', 'onion', 'round'].includes(s)) return 'hip';
  if (['gabled', 'saltbox', 'gambrel', 'skillion', 'side_hipped', 'crosspitched'].includes(s)) return 'gable';
  return null;
}

function quantile(sorted, q) {
  if (!sorted.length) return null;
  const i = Math.min(sorted.length - 1, Math.max(0, Math.floor(q * (sorted.length - 1))));
  return sorted[i];
}

/** Statistiche dai tag OSM nel bbox. */
export function osmStats(features) {
  const roof = { flat: 0, gable: 0, hip: 0 };
  const levels = [];
  const roofColours = [];
  const wallColours = [];
  const roofMaterials = {};
  const genera = {};
  const leafTypes = {};
  const types = {};
  let buildings = 0;
  let coastline = 0;
  let railway = 0;

  for (const f of features) {
    const p = f.properties || {};
    if (p.kind === 'building') {
      buildings++;
      const fam = roofFamily(p.roofShape);
      if (fam) roof[fam]++;
      if (p.levels != null && +p.levels > 0 && +p.levels < 80) levels.push(+p.levels);
      const rc = parseColour(p.roofColour);
      if (rc) roofColours.push(rc);
      const wc = parseColour(p.wallColour);
      if (wc) wallColours.push(wc);
      if (p.roofMaterial) roofMaterials[p.roofMaterial] = (roofMaterials[p.roofMaterial] || 0) + 1;
      const t = p.building || 'yes';
      types[t] = (types[t] || 0) + 1;
    } else if (p.kind === 'tree' || p.kind === 'vegetation') {
      const g = p.genus || (p.species ? String(p.species).split(/\s+/)[0] : null);
      if (g) genera[g] = (genera[g] || 0) + 1;
      if (p.leafType) leafTypes[p.leafType] = (leafTypes[p.leafType] || 0) + 1;
    } else if (p.kind === 'coastline') coastline++;
    else if (p.kind === 'railway') railway++;
  }
  levels.sort((a, b) => a - b);
  const roofN = roof.flat + roof.gable + roof.hip;
  return {
    buildings,
    roofTagged: roofN,
    roofMix: roofN ? { flat: roof.flat / roofN, gable: roof.gable / roofN, hip: roof.hip / roofN } : null,
    levels: levels.length
      ? {
          n: levels.length,
          median: quantile(levels, 0.5),
          p90: quantile(levels, 0.9),
          singleShare: levels.filter((l) => l <= 1).length / levels.length,
        }
      : null,
    roofColours,
    wallColours,
    roofMaterials,
    genera,
    leafTypes,
    types,
    coastline,
    railway,
  };
}

/**
 * Statistiche dal DEM + maschera mare (flood fill dai bordi sulle celle ≤ seaLevelMax).
 * @param {Float32Array} heights
 * @param {{width:number,height:number,mosaic:{west:number,east:number,north:number,south:number}}} meta
 * @param {{lon:number,lat:number}[]} samplePts punti urbani (centroidi edifici)
 */
export function demStats(heights, meta, samplePts = [], { grid = 128, seaLevelMax = 0.5 } = {}) {
  const { width: W, height: H, mosaic } = meta;
  const at = (x, y) => heights[Math.min(H - 1, y) * W + Math.min(W - 1, x)];
  const sampleLonLat = (lon, lat) => {
    const u = (lon - mosaic.west) / (mosaic.east - mosaic.west);
    const v = (mosaic.north - lat) / (mosaic.north - mosaic.south);
    return at(Math.round(Math.max(0, Math.min(1, u)) * (W - 1)), Math.round(Math.max(0, Math.min(1, v)) * (H - 1)));
  };

  const town = samplePts.map((p) => sampleLonLat(p.lon, p.lat)).sort((a, b) => a - b);
  const all = Array.from(heights).filter((v) => Number.isFinite(v)).sort((a, b) => a - b);

  // Griglia ridotta: cella = min dei campioni (il mare è piatto e basso)
  const cellMin = new Float32Array(grid * grid);
  const cellMax = new Float32Array(grid * grid);
  for (let gy = 0; gy < grid; gy++) {
    for (let gx = 0; gx < grid; gx++) {
      const x0 = Math.floor((gx / grid) * W), x1 = Math.floor(((gx + 1) / grid) * W);
      const y0 = Math.floor((gy / grid) * H), y1 = Math.floor(((gy + 1) / grid) * H);
      let mn = Infinity, mx = -Infinity;
      for (let y = y0; y < Math.max(y1, y0 + 1); y++) {
        for (let x = x0; x < Math.max(x1, x0 + 1); x++) {
          const v = at(x, y);
          if (v < mn) mn = v;
          if (v > mx) mx = v;
        }
      }
      cellMin[gy * grid + gx] = mn;
      cellMax[gy * grid + gx] = mx;
    }
  }
  const isLow = (i) => cellMax[i] <= seaLevelMax + 0.5 && cellMin[i] <= seaLevelMax;
  const sea = new Uint8Array(grid * grid);
  const stack = [];
  for (let g = 0; g < grid; g++) {
    for (const i of [g, (grid - 1) * grid + g, g * grid, g * grid + grid - 1]) {
      if (!sea[i] && isLow(i)) { sea[i] = 1; stack.push(i); }
    }
  }
  while (stack.length) {
    const i = stack.pop();
    const x = i % grid, y = (i / grid) | 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= grid || ny >= grid) continue;
      const j = ny * grid + nx;
      if (!sea[j] && isLow(j)) { sea[j] = 1; stack.push(j); }
    }
  }
  let seaCells = 0;
  let seaElevSum = 0;
  for (let i = 0; i < sea.length; i++) if (sea[i]) { seaCells++; seaElevSum += cellMin[i]; }
  const seaFraction = seaCells / sea.length;
  const seaMeanElev = seaCells ? seaElevSum / seaCells : null;

  // bitset → base64 (portabile Node/browser)
  const bits = new Uint8Array(Math.ceil((grid * grid) / 8));
  for (let i = 0; i < sea.length; i++) if (sea[i]) bits[i >> 3] |= 1 << (i & 7);
  let bin = '';
  for (const b of bits) bin += String.fromCharCode(b);
  const b64 = typeof btoa === 'function' ? btoa(bin) : Buffer.from(bits).toString('base64');

  return {
    townElev: town.length ? town[town.length >> 1] : all[all.length >> 1],
    townElevP90: town.length ? town[Math.floor(town.length * 0.9)] : null,
    minElev: all[0],
    maxElev: all[all.length - 1],
    relief: (all[Math.floor(all.length * 0.95)] ?? 0) - (all[Math.floor(all.length * 0.05)] ?? 0),
    seaFraction: +seaFraction.toFixed(4),
    seaMeanElev: seaMeanElev == null ? null : +seaMeanElev.toFixed(2),
    seaMask: { grid, bounds: { ...mosaic }, bitsB64: b64 },
  };
}

/** Decodifica maschera mare → funzione isSea(lon,lat). */
export function seaMaskSampler(seaMask) {
  if (!seaMask?.bitsB64) return () => false;
  const bin = typeof atob === 'function' ? atob(seaMask.bitsB64) : Buffer.from(seaMask.bitsB64, 'base64').toString('binary');
  const bits = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bits[i] = bin.charCodeAt(i);
  const { grid, bounds } = seaMask;
  return (lon, lat) => {
    const u = (lon - bounds.west) / (bounds.east - bounds.west);
    const v = (bounds.north - lat) / (bounds.north - bounds.south);
    if (u < 0 || u >= 1 || v < 0 || v >= 1) return false;
    const i = Math.floor(v * grid) * grid + Math.floor(u * grid);
    return !!(bits[i >> 3] & (1 << (i & 7)));
  };
}
