/**
 * Edifici per il motore voxel (M6 V2): stessa idea del motore continuo (BuildingBuilder.js) —
 * altezza/piani/colore muro/tetto/tinta infissi tutti derivati da un hash deterministico
 * dell'id OSM, non un unico rettangolo ripetuto — ma la pianta viene prima voxelizzata sulla
 * stessa griglia da 0,25 m del terreno: il profilo dell'edificio è "a blocchi" come tutto il
 * resto del mondo, non un poligono liscio incollato sopra un suolo a cubi.
 *
 * Costruiti tutti in un colpo solo (non in streaming a chunk come il terreno): il numero di
 * edifici di una città è ordini di grandezza più piccolo del numero di celle del terreno, e
 * qui serve conoscere fin da subito il profilo intero di ognuno per mettere le finestre alla
 * spaziatura giusta lungo ogni parete.
 */
import * as THREE from 'three';
import { VOXEL, MAT_COLOR, MAT } from './voxelConfig.js';
import { hash32, unit } from '../rng.js';

const LEVEL_H = 3.05;

const WALL_PALETTE = [
  0xf5ead8, 0xf0e0c8, 0xe8d5b0, 0xe2c9a0, 0xf2d4c4,
  0xe8c8b8, 0xd8d0c8, 0xe6dcc8, 0xf8f0e4, 0xdcc8a8,
];
const ROOF_PALETTE = [
  0xb85a3a, 0xc46842, 0xa84e32, 0xd07048, 0x9e4a30, 0xbc6040, 0xad5538, 0xc87850, 0xa05038,
];
const WINDOW_TINTS = [
  [0x5a, 0x7a, 0x9a], [0x4f, 0x6b, 0x4a], [0x6b, 0x4a, 0x3a], [0xc9, 0xc2, 0xb0], [0x3d, 0x5a, 0x5c],
];
const DOOR_COLOR = 0x5a4030;
const CHURCH_WALL = 0xe8e0d4, CHURCH_ROOF = 0x6a6860, GARAGE_WALL = 0xc8c0b4;

function hashId(id) { return unit(hash32(id)); }

function buildingHeight(props, id) {
  if (props.height && !Number.isNaN(+props.height)) return Math.max(2.5, +props.height);
  if (props.levels && !Number.isNaN(+props.levels)) return Math.max(2.8, +props.levels * LEVEL_H);
  const t = (props.building || '').toLowerCase();
  if (t === 'garage' || t === 'carport' || t === 'shed') return 2.8 + hashId(id) * 0.6;
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return 10 + hashId(id) * 6;
  if (t === 'school' || t === 'public') return 8 + hashId(id) * 4;
  if (t === 'apartments' || t === 'residential') return 6 + hashId(`${id}:apt`) * 6;
  if (t === 'house' || t === 'detached' || t === 'semidetached_house') return 3.2 + hashId(id) * 4.5;
  const r = hashId(`${id}:legacy`);
  if (r < 0.35) return 3.2 + r * 2;
  if (r < 0.7) return 5.5 + r * 2;
  if (r < 0.92) return 8 + r * 2.5;
  return 11 + r * 3;
}
function floorCount(props, h) {
  if (props.levels && !Number.isNaN(+props.levels)) return Math.max(1, Math.round(+props.levels));
  return Math.max(1, Math.round(h / LEVEL_H));
}
function wallColorFor(props, id) {
  const t = (props.building || '').toLowerCase();
  if (t === 'church' || t === 'cathedral' || t === 'chapel') return CHURCH_WALL;
  if (t === 'garage' || t === 'shed') return GARAGE_WALL;
  return WALL_PALETTE[Math.abs(id * 7) % WALL_PALETTE.length];
}
function roofColorFor(props, id) {
  const t = (props.building || '').toLowerCase();
  if (t === 'church' || t === 'cathedral') return CHURCH_ROOF;
  if (t === 'garage') return 0x7a7870;
  return ROOF_PALETTE[Math.abs(id * 13 + 3) % ROOF_PALETTE.length];
}
function windowTintFor(id) {
  const rgb = WINDOW_TINTS[Math.floor(unit(hash32(`${id}:wtint`)) * WINDOW_TINTS.length) % WINDOW_TINTS.length];
  return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
}

function decodeRing(flat, u) {
  const out = [];
  for (let i = 0; i < flat.length; i += 2) out.push({ x: flat[i] * u, z: flat[i + 1] * u });
  return out;
}

/** Pianta → griglia booleana (dentro/fuori) alla risoluzione voxel del terreno. */
function voxelizeFootprint(ring) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const p of ring) {
    if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
    if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
  }
  const originX = Math.floor(minX / VOXEL) * VOXEL;
  const originZ = Math.floor(minZ / VOXEL) * VOXEL;
  const W = Math.max(1, Math.ceil((maxX - originX) / VOXEL));
  const H = Math.max(1, Math.ceil((maxZ - originZ) / VOXEL));
  const grid = new Uint8Array(W * H);
  for (let j = 0; j < H; j++) {
    const z = originZ + (j + 0.5) * VOXEL;
    for (let i = 0; i < W; i++) {
      const x = originX + (i + 0.5) * VOXEL;
      let inside = false;
      for (let a = 0, b = ring.length - 1; a < ring.length; b = a++) {
        const pa = ring[b], pb = ring[a];
        if (pa.z > z !== pb.z > z && x < ((pb.x - pa.x) * (z - pa.z)) / (pb.z - pa.z) + pa.x) inside = !inside;
      }
      if (inside) grid[j * W + i] = 1;
    }
  }
  return { grid, W, H, originX, originZ };
}

/** Rettangoli massimali sulle celle piene: stesso greedy meshing del tetto del terreno. */
function greedyRectsBool(grid, W, H) {
  const used = new Uint8Array(W * H);
  const rects = [];
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const k = j * W + i;
      if (used[k]) continue;
      if (!grid[k]) { used[k] = 1; continue; }
      let w = 1;
      while (i + w < W && !used[j * W + i + w] && grid[j * W + i + w]) w++;
      let d = 1;
      outer:
      while (j + d < H) {
        for (let di = 0; di < w; di++) {
          const kk = (j + d) * W + i + di;
          if (used[kk] || !grid[kk]) break outer;
        }
        d++;
      }
      for (let dj = 0; dj < d; dj++) for (let di = 0; di < w; di++) used[(j + dj) * W + i + di] = 1;
      rects.push({ i, j, w, d });
    }
  }
  return rects;
}

/** Tratti rettilinei del perimetro (una cella piena col vicino vuoto in quella direzione),
 *  fusi in run continui: sono le "pareti" lungo cui distribuire porte e finestre a spaziatura reale. */
function wallRuns(grid, W, H) {
  const at = (i, j) => (i >= 0 && i < W && j >= 0 && j < H ? grid[j * W + i] : 0);
  const runs = [];
  for (const [edge, di, dj] of [['n', 0, -1], ['s', 0, 1]]) {
    for (let j = 0; j < H; j++) {
      let i = 0;
      while (i < W) {
        if (!at(i, j) || at(i + di, j + dj)) { i++; continue; }
        let len = 1;
        while (i + len < W && at(i + len, j) && !at(i + len + di, j + dj)) len++;
        runs.push({ edge, i, j, len });
        i += len;
      }
    }
  }
  for (const [edge, di, dj] of [['e', 1, 0], ['w', -1, 0]]) {
    for (let i = 0; i < W; i++) {
      let j = 0;
      while (j < H) {
        if (!at(i, j) || at(i + di, j + dj)) { j++; continue; }
        let len = 1;
        while (j + len < H && at(i, j + len) && !at(i + di, j + len + dj)) len++;
        runs.push({ edge, i, j, len });
        j += len;
      }
    }
  }
  return runs;
}

function runGeom(run, originX, originZ) {
  const L = run.len * VOXEL;
  switch (run.edge) {
    case 'n': return { x0: originX + run.i * VOXEL, z0: originZ + run.j * VOXEL, tx: 1, tz: 0, nx: 0, nz: -1, L };
    case 's': return { x0: originX + run.i * VOXEL, z0: originZ + (run.j + 1) * VOXEL, tx: 1, tz: 0, nx: 0, nz: 1, L };
    case 'e': return { x0: originX + (run.i + 1) * VOXEL, z0: originZ + run.j * VOXEL, tx: 0, tz: 1, nx: 1, nz: 0, L };
    default: return { x0: originX + run.i * VOXEL, z0: originZ + run.j * VOXEL, tx: 0, tz: 1, nx: -1, nz: 0, L };
  }
}

const _c = new THREE.Color();
function pushQuad(pos, col, idx, p0, p1, p2, p3, hex) {
  _c.setHex(hex);
  const base = pos.length / 3;
  for (const p of [p0, p1, p2, p3]) { pos.push(p[0], p[1], p[2]); col.push(_c.r, _c.g, _c.b); }
  idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
}
function pushQuadRGB(pos, col, idx, p0, p1, p2, p3, rgb) {
  const base = pos.length / 3;
  for (const p of [p0, p1, p2, p3]) { pos.push(p[0], p[1], p[2]); col.push(rgb[0], rgb[1], rgb[2]); }
  idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
}

const PARTY_BUCKET = 20; // m

/**
 * Indice spaziale su TUTTE le piante degli edifici: serve a riconoscere i muri in comune (edifici
 * a schiera). Senza questo controllo, il lato di un edificio adiacente a un altro genera comunque
 * una parete "esposta" (la cella vicina non appartiene alla SUA griglia locale) — e l'edificio
 * accanto fa lo stesso sul proprio lato: due pareti quasi coincidenti che sfarfallano (z-fighting),
 * la "tenda a listelli" osservata sulle facciate degli edifici a schiera.
 */
function buildPartyIndex(entries) {
  const map = new Map();
  const key = (i, j) => `${i}:${j}`;
  for (const e of entries) {
    const i0 = Math.floor(e.minX / PARTY_BUCKET), i1 = Math.floor(e.maxX / PARTY_BUCKET);
    const j0 = Math.floor(e.minZ / PARTY_BUCKET), j1 = Math.floor(e.maxZ / PARTY_BUCKET);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const k = key(i, j);
      let arr = map.get(k);
      if (!arr) map.set(k, (arr = []));
      arr.push(e);
    }
  }
  function pointInRing(x, z, ring) {
    let inside = false;
    for (let a = 0, b = ring.length - 1; a < ring.length; b = a++) {
      const pa = ring[b], pb = ring[a];
      if (pa.z > z !== pb.z > z && x < ((pb.x - pa.x) * (z - pa.z)) / (pb.z - pa.z) + pa.x) inside = !inside;
    }
    return inside;
  }
  /** true se (x,z) cade dentro un edificio diverso da `selfId`. */
  return function insideOtherBuilding(x, z, selfId) {
    const arr = map.get(key(Math.floor(x / PARTY_BUCKET), Math.floor(z / PARTY_BUCKET)));
    if (!arr) return false;
    for (const e of arr) {
      if (e.id === selfId) continue;
      if (x < e.minX || x > e.maxX || z < e.minZ || z > e.maxZ) continue;
      if (pointInRing(x, z, e.ring)) return true;
    }
    return false;
  };
}

/**
 * @param {Array} features feature OSM (per altezza/tipologia reale, quando presente)
 * @param {object} level JSON del compilatore (level.buildings: impronte pulite sugli isolati)
 * @param {{sampleColumn:Function}} levelIndex
 * @returns {{group:THREE.Group, count:number, footprints:Array}}
 */
export function buildBuildingsVoxel(features, level, levelIndex) {
  const group = new THREE.Group();
  group.name = 'buildings-voxel';
  if (!level?.buildings?.length) return { group, count: 0, footprints: [] };

  const u = level.unit || 0.1;
  const propsById = new Map();
  for (const f of features) {
    if (f.properties?.kind === 'building') propsById.set(String(f.properties.id), f.properties);
  }

  const partyEntries = [];
  for (const b of level.buildings) {
    const ring = decodeRing(b.o, u);
    if (ring.length < 3) continue;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const p of ring) {
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
    }
    partyEntries.push({ id: b.id, ring, minX, maxX, minZ, maxZ });
  }
  const insideOtherBuilding = buildPartyIndex(partyEntries);

  const wallPos = [], wallCol = [], wallIdx = [];
  const roofPos = [], roofCol = [], roofIdx = [];
  const winPos = [], winCol = [], winIdx = [];
  const doorPos = [], doorCol = [], doorIdx = [];
  const footprints = [];
  let count = 0;

  for (const b of level.buildings) {
    const ring = decodeRing(b.o, u);
    if (ring.length < 3) continue;
    const id = b.id;
    const props = propsById.get(String(id)) || {};

    const { grid, W, H, originX, originZ } = voxelizeFootprint(ring);
    let solidCells = 0;
    for (let k = 0; k < grid.length; k++) solidCells += grid[k];
    if (solidCells < 1) continue;

    // quota: mediana sul perimetro per il piano terra, minimo per il piede dei muri (li tiene
    // ancorati anche su un lotto in pendenza, come il motore continuo).
    const ys = [];
    for (const p of ring) ys.push(levelIndex.sampleColumn(p.x, p.z).height);
    ys.sort((a, z) => a - z);
    const baseY = ys[ys.length >> 1];
    const bottomY = ys[0] - 0.3;

    const h = buildingHeight(props, id);
    const floors = floorCount(props, h);
    const wallColor = wallColorFor(props, id);
    const roofColor = roofColorFor(props, id);
    const winTint = windowTintFor(id);
    const isGarage = (props.building || '').toLowerCase() === 'garage' || (props.building || '').toLowerCase() === 'shed';

    const runs = wallRuns(grid, W, H);
    if (!runs.length) continue;

    // Muro in comune: 2 campioni su 3 lungo il bordo cadono dentro UN ALTRO edificio → non si
    // disegna (l'edificio adiacente farà lo stesso sul proprio lato: niente sfarfallio, niente
    // "tenda a listelli" fra case a schiera).
    const isParty = (run) => {
      const g = runGeom(run, originX, originZ);
      let hit = 0;
      for (const t of [0.25, 0.5, 0.75]) {
        const px = g.x0 + g.tx * g.L * t + g.nx * 0.15;
        const pz = g.z0 + g.tz * g.L * t + g.nz * 0.15;
        if (insideOtherBuilding(px, pz, id)) hit++;
      }
      return hit >= 2;
    };
    const extRuns = runs.filter((r) => !isParty(r));
    const frontPool = extRuns.length ? extRuns : runs;
    let front = frontPool[0];
    for (const r of frontPool) if (r.len > front.len) front = r;

    for (const run of extRuns) {
      const g = runGeom(run, originX, originZ);
      const x1 = g.x0 + g.tx * g.L, z1 = g.z0 + g.tz * g.L;
      pushQuad(
        wallPos, wallCol, wallIdx,
        [g.x0, bottomY, g.z0], [x1, bottomY, z1], [x1, baseY + h, z1], [g.x0, baseY + h, g.z0],
        wallColor,
      );

      if (isGarage) continue;
      const margin = 0.3;
      const usable = g.L - margin * 2;
      if (usable < 0.5) continue;
      const isFront = run === front;
      const winSpacing = floors >= 3 ? 2.0 : 2.3;
      for (let floor = 0; floor < floors; floor++) {
        const yC = baseY + floor * LEVEL_H + 1.4;
        if (yC + 0.55 > baseY + h - 0.2) continue;
        const nWin = Math.max(1, Math.floor(usable / winSpacing));
        for (let k = 0; k < nWin; k++) {
          const t = margin + ((k + 0.5) / nWin) * usable;
          if (isFront && floor === 0 && Math.abs(t - g.L * 0.5) < 0.9) continue; // spazio per la porta
          const wx = g.x0 + g.tx * t, wz = g.z0 + g.tz * t;
          const ox = wx + g.nx * 0.03, oz = wz + g.nz * 0.03;
          const hw = 0.4, hh = 0.5;
          const ux = g.tx * hw, uz = g.tz * hw;
          pushQuadRGB(
            winPos, winCol, winIdx,
            [ox - ux, yC - hh, oz - uz], [ox + ux, yC - hh, oz + uz],
            [ox + ux, yC + hh, oz + uz], [ox - ux, yC + hh, oz - uz],
            winTint,
          );
        }
      }
      if (isFront) {
        const mx = g.x0 + g.tx * g.L * 0.5, mz = g.z0 + g.tz * g.L * 0.5;
        const ox = mx + g.nx * 0.03, oz = mz + g.nz * 0.03;
        const hw = 0.5, hh = 1.0;
        const ux = g.tx * hw, uz = g.tz * hw;
        pushQuad(
          doorPos, doorCol, doorIdx,
          [ox - ux, baseY, oz - uz], [ox + ux, baseY, oz + uz],
          [ox + ux, baseY + 2 * hh, oz + uz], [ox - ux, baseY + 2 * hh, oz - uz],
          DOOR_COLOR,
        );
      }
    }

    // tetto piatto: rettangoli massimali sulla pianta piena, quota unica in cima ai muri
    const y = baseY + h;
    for (const r of greedyRectsBool(grid, W, H)) {
      const x0 = originX + r.i * VOXEL, x1 = originX + (r.i + r.w) * VOXEL;
      const z0 = originZ + r.j * VOXEL, z1 = originZ + (r.j + r.d) * VOXEL;
      pushQuad(roofPos, roofCol, roofIdx, [x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], roofColor);
    }

    footprints.push({ id, minX: originX, maxX: originX + W * VOXEL, minZ: originZ, maxZ: originZ + H * VOXEL, minY: bottomY, maxY: baseY + h });
    count++;
  }

  function addMesh(pos, col, idx, name, doubleSide = false) {
    if (!idx.length) return;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
      vertexColors: true, flatShading: true, side: doubleSide ? THREE.DoubleSide : THREE.FrontSide,
    }));
    mesh.name = name;
    mesh.castShadow = true;
    // Niente autoricezione ombre sui muri: verificato via screenshot che pareti verticali quasi
    // parallele al sole (sole basso, ~15° di altezza) soffrono di acne d'ombra severa — bande
    // verticali chiare/scure su tutta l'altezza, non un difetto minore — per l'insufficiente
    // precisione della shadow map su quadrilateri grandi e quasi radenti. Gli edifici proiettano
    // comunque l'ombra sul terreno (castShadow resta true): perdono solo l'ombra reciproca fra
    // loro, un compromesso migliore della "tenda a listelli" osservata.
    mesh.receiveShadow = false;
    group.add(mesh);
  }
  addMesh(wallPos, wallCol, wallIdx, 'buildings-walls');
  addMesh(roofPos, roofCol, roofIdx, 'buildings-roofs', true);
  addMesh(winPos, winCol, winIdx, 'buildings-windows');
  addMesh(doorPos, doorCol, doorIdx, 'buildings-doors');

  return { group, count, footprints };
}
