import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { lineStringToLocalPts } from '../geo.js';
import { sampleY } from '../terrain.js';
import { SegmentGrid } from '../spatial/grid.js';

export function highwayWidth(props) {
  if (props.width != null && !Number.isNaN(+props.width) && +props.width > 0) {
    return Math.min(20, Math.max(1.5, +props.width));
  }
  if (props.lanes != null && !Number.isNaN(+props.lanes) && +props.lanes > 0) {
    return Math.min(20, Math.max(3, +props.lanes * 3.5));
  }
  switch (props.highway) {
    case 'motorway':
    case 'trunk':
      return 13;
    case 'motorway_link':
    case 'trunk_link':
      return 7;
    case 'primary':
      return 10;
    case 'primary_link':
      return 6;
    case 'secondary':
      return 8;
    case 'secondary_link':
      return 5.5;
    case 'tertiary':
      return 7;
    case 'tertiary_link':
      return 5;
    case 'residential':
    case 'unclassified':
    case 'living_street':
      return 5.5;
    case 'service':
    case 'services':
      return 3.5;
    case 'track':
      return 3;
    case 'pedestrian':
    case 'footway':
    case 'path':
    case 'steps':
    case 'cycleway':
      return 2.2;
    default:
      return 5;
  }
}

function wantsSidewalk(hw) {
  return [
    'residential',
    'primary',
    'secondary',
    'tertiary',
    'unclassified',
    'living_street',
  ].includes(hw);
}

function isFootway(hw) {
  return ['footway', 'path', 'steps', 'pedestrian', 'cycleway'].includes(hw);
}

/**
 * Ribbon drapé sul DEM: ogni vertice ha y = sampleY(x,z) + yOff.
 * pts: {x,z}[]
 */
export function buildRibbonGeometry(pts, halfW, yOff = 0.04) {
  const n = pts.length;
  if (n < 2 || halfW <= 0) return null;

  const left = new Array(n);
  const right = new Array(n);

  for (let i = 0; i < n; i++) {
    let tx;
    let tz;
    if (i === 0) {
      tx = pts[1].x - pts[0].x;
      tz = pts[1].z - pts[0].z;
    } else if (i === n - 1) {
      tx = pts[i].x - pts[i - 1].x;
      tz = pts[i].z - pts[i - 1].z;
    } else {
      const ax = pts[i].x - pts[i - 1].x;
      const az = pts[i].z - pts[i - 1].z;
      const bx = pts[i + 1].x - pts[i].x;
      const bz = pts[i + 1].z - pts[i].z;
      const la = Math.hypot(ax, az) || 1;
      const lb = Math.hypot(bx, bz) || 1;
      tx = ax / la + bx / lb;
      tz = az / la + bz / lb;
    }
    let len = Math.hypot(tx, tz);
    if (len < 1e-6) {
      tx = 1;
      tz = 0;
      len = 1;
    }
    tx /= len;
    tz /= len;
    const nx = -tz;
    const nz = tx;

    let scale = halfW;
    if (i > 0 && i < n - 1) {
      const ax = pts[i].x - pts[i - 1].x;
      const az = pts[i].z - pts[i - 1].z;
      const la = Math.hypot(ax, az) || 1;
      const n0x = -az / la;
      const n0z = ax / la;
      const dot = nx * n0x + nz * n0z;
      if (Math.abs(dot) > 0.15) scale = Math.min(halfW / dot, halfW * 2.8);
    }

    left[i] = { x: pts[i].x + nx * scale, z: pts[i].z + nz * scale };
    right[i] = { x: pts[i].x - nx * scale, z: pts[i].z - nz * scale };
  }

  const positions = [];
  const indices = [];
  for (let i = 0; i < n; i++) {
    const yl = sampleY(left[i].x, left[i].z) + yOff;
    const yr = sampleY(right[i].x, right[i].z) + yOff;
    positions.push(left[i].x, yl, left[i].z, right[i].x, yr, right[i].z);
  }
  for (let i = 0; i < n - 1; i++) {
    const a = i * 2;
    const b = a + 1;
    const c = a + 3;
    const d = a + 2;
    indices.push(a, b, c, a, c, d);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Fascia laterale (marciapiede): anello tra halfInner e halfOuter.
 */
function buildSidewalkStrip(pts, halfInner, halfOuter, yOff) {
  const n = pts.length;
  if (n < 2 || halfOuter <= halfInner) return null;

  function offsets(half) {
    const L = new Array(n);
    const R = new Array(n);
    for (let i = 0; i < n; i++) {
      let tx;
      let tz;
      if (i === 0) {
        tx = pts[1].x - pts[0].x;
        tz = pts[1].z - pts[0].z;
      } else if (i === n - 1) {
        tx = pts[i].x - pts[i - 1].x;
        tz = pts[i].z - pts[i - 1].z;
      } else {
        const ax = pts[i].x - pts[i - 1].x;
        const az = pts[i].z - pts[i - 1].z;
        const bx = pts[i + 1].x - pts[i].x;
        const bz = pts[i + 1].z - pts[i].z;
        const la = Math.hypot(ax, az) || 1;
        const lb = Math.hypot(bx, bz) || 1;
        tx = ax / la + bx / lb;
        tz = az / la + bz / lb;
      }
      let len = Math.hypot(tx, tz) || 1;
      tx /= len;
      tz /= len;
      const nx = -tz;
      const nz = tx;
      let scale = half;
      if (i > 0 && i < n - 1) {
        const ax = pts[i].x - pts[i - 1].x;
        const az = pts[i].z - pts[i - 1].z;
        const la = Math.hypot(ax, az) || 1;
        const n0x = -az / la;
        const n0z = ax / la;
        const dot = nx * n0x + nz * n0z;
        if (Math.abs(dot) > 0.15) scale = Math.min(half / dot, half * 2.8);
      }
      L[i] = { x: pts[i].x + nx * scale, z: pts[i].z + nz * scale };
      R[i] = { x: pts[i].x - nx * scale, z: pts[i].z - nz * scale };
    }
    return { L, R };
  }

  const inner = offsets(halfInner);
  const outer = offsets(halfOuter);
  const positions = [];
  const indices = [];
  // Due strip: sinistra (outerL–innerL) e destra (innerR–outerR)
  let vi = 0;
  function pushStrip(A, B) {
    const base = vi;
    for (let i = 0; i < n; i++) {
      const ya = sampleY(A[i].x, A[i].z) + yOff;
      const yb = sampleY(B[i].x, B[i].z) + yOff;
      positions.push(A[i].x, ya, A[i].z, B[i].x, yb, B[i].z);
      vi += 2;
    }
    for (let i = 0; i < n - 1; i++) {
      const a = base + i * 2;
      const b = a + 1;
      const c = a + 3;
      const d = a + 2;
      indices.push(a, b, c, a, c, d);
    }
  }
  pushStrip(outer.L, inner.L);
  pushStrip(inner.R, outer.R);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function distPointSeg(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const apx = px - ax;
  const apz = pz - az;
  const ab2 = abx * abx + abz * abz;
  let t = ab2 > 1e-8 ? (apx * abx + apz * abz) / ab2 : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
}

export function distToRoadsBrute(x, z, polylines) {
  let best = Infinity;
  for (const road of polylines) {
    const pts = road.pts;
    for (let i = 0; i < pts.length - 1; i++) {
      const d = distPointSeg(x, z, pts[i].x, pts[i].z, pts[i + 1].x, pts[i + 1].z);
      if (d < best) best = d;
    }
  }
  return best;
}

/**
 * Distanza al bordo carreggiata + normale uscente (dal centro strada verso il punto).
 * @returns {{ dist:number, edgeDist:number, halfW:number, nx:number, nz:number, highway:string }|null}
 */
export function nearestRoadBrute(x, z, polylines) {
  let best = null;
  for (const road of polylines) {
    const pts = road.pts;
    const halfW = (road.width || 5) * 0.5;
    for (let i = 0; i < pts.length - 1; i++) {
      const ax = pts[i].x;
      const az = pts[i].z;
      const bx = pts[i + 1].x;
      const bz = pts[i + 1].z;
      const abx = bx - ax;
      const abz = bz - az;
      const ab2 = abx * abx + abz * abz;
      let tt = ab2 > 1e-8 ? ((x - ax) * abx + (z - az) * abz) / ab2 : 0;
      tt = Math.max(0, Math.min(1, tt));
      const cx = ax + abx * tt;
      const cz = az + abz * tt;
      const dx = x - cx;
      const dz = z - cz;
      const dist = Math.hypot(dx, dz);
      if (!best || dist < best.dist) {
        let nx = dx;
        let nz = dz;
        const len = Math.hypot(nx, nz);
        if (len < 1e-6) {
          // punto sulla centerline: usa normale al segmento
          nx = -abz;
          nz = abx;
          const nlen = Math.hypot(nx, nz) || 1;
          nx /= nlen;
          nz /= nlen;
        } else {
          nx /= len;
          nz /= len;
        }
        best = {
          dist,
          edgeDist: dist - halfW,
          halfW,
          nx,
          nz,
          highway: road.highway || '',
          name: road.name || null,
        };
      }
    }
  }
  return best;
}

// ---------------------------------------------------------------------------
// Versioni indicizzate (stessa firma, stesso risultato della forza bruta).
// Prima: O(tutti i segmenti) per chiamata, invocata per ogni vertice di ogni
// edificio, per ogni albero e per ogni frame di collisione.

const roadIndexCache = new WeakMap();

function roadIndex(polylines) {
  let idx = roadIndexCache.get(polylines);
  if (idx && idx.len === polylines.length) return idx;
  const segs = [];
  for (const road of polylines) {
    const pts = road.pts;
    for (let i = 0; i < pts.length - 1; i++) {
      segs.push({ ax: pts[i].x, az: pts[i].z, bx: pts[i + 1].x, bz: pts[i + 1].z, road });
    }
  }
  idx = { len: polylines.length, segs, grid: new SegmentGrid(segs, 40) };
  roadIndexCache.set(polylines, idx);
  return idx;
}

export function distToRoads(x, z, polylines) {
  if (!polylines?.length) return Infinity;
  const { segs, grid } = roadIndex(polylines);
  const hit = grid.nearest(x, z, (id) => {
    const s = segs[id];
    return distPointSeg(x, z, s.ax, s.az, s.bx, s.bz);
  });
  return hit ? hit.dist : Infinity;
}

/**
 * Distanza al bordo carreggiata + normale uscente (dal centro strada verso il punto).
 * @returns {{ dist:number, edgeDist:number, halfW:number, nx:number, nz:number, highway:string }|null}
 */
export function nearestRoad(x, z, polylines) {
  if (!polylines?.length) return null;
  const { segs, grid } = roadIndex(polylines);
  const hit = grid.nearest(x, z, (id) => {
    const s = segs[id];
    const abx = s.bx - s.ax, abz = s.bz - s.az;
    const ab2 = abx * abx + abz * abz;
    let tt = ab2 > 1e-8 ? ((x - s.ax) * abx + (z - s.az) * abz) / ab2 : 0;
    tt = Math.max(0, Math.min(1, tt));
    return Math.hypot(x - (s.ax + abx * tt), z - (s.az + abz * tt));
  });
  if (!hit) return null;
  const s = segs[hit.id];
  const halfW = (s.road.width || 5) * 0.5;
  const abx = s.bx - s.ax, abz = s.bz - s.az;
  const ab2 = abx * abx + abz * abz;
  let tt = ab2 > 1e-8 ? ((x - s.ax) * abx + (z - s.az) * abz) / ab2 : 0;
  tt = Math.max(0, Math.min(1, tt));
  const dx = x - (s.ax + abx * tt), dz = z - (s.az + abz * tt);
  let nx = dx, nz = dz;
  const len = Math.hypot(nx, nz);
  if (len < 1e-6) {
    nx = -abz; nz = abx;
    const nlen = Math.hypot(nx, nz) || 1;
    nx /= nlen; nz /= nlen;
  } else {
    nx /= len; nz /= len;
  }
  return { dist: hit.dist, edgeDist: hit.dist - halfW, halfW, nx, nz, highway: s.road.highway || '', name: s.road.name || null };
}

/**
 * Strade stratificate drapate sul DEM.
 * @returns {{ group, polylines, wayCount, segmentCount }}
 */
/**
 * Con `opts.network` (StreetNetwork) le carreggiate le disegna lo StreetMesher:
 * qui restano i sentieri pedonali e le polilinee per inset/collisioni.
 */
export function buildRoads(features, scene, style = {}, opts = {}) {
  const network = opts.network || null;
  const asphaltGeos = [];
  const curbGeos = [];
  const walkGeos = [];
  const lineGeos = [];
  const footGeos = [];
  const junctionGeos = [];
  /** @type {{pts:{x:number,z:number}[], width:number, highway?:string}[]} */
  const polylines = [];
  let wayCount = 0;
  let segmentCount = 0;

  const roadsStyle = style.roads || {};
  const colors = style.colors || {};
  const SW = roadsStyle.sidewalkWidth ?? 1.65;
  const CURB = roadsStyle.curbWidth ?? 0.2;
  const yAsphalt = roadsStyle.yAsphalt ?? 0.24;
  const yCurb = roadsStyle.yCurb ?? 0.3;
  const yWalk = roadsStyle.ySidewalk ?? 0.36;
  const yLine = roadsStyle.yLine ?? 0.28;
  const yFoot = roadsStyle.yFoot ?? 0.2;
  const yJunc = roadsStyle.yJunction ?? 0.25;
  const minCar = roadsStyle.minCarWidth ?? 4.8;

  /** @type {Map<string,{x:number,z:number,r:number,n:number}>} */
  const nodes = new Map();
  function touchNode(p, w) {
    const k = `${(p.x * 2).toFixed(0)}_${(p.z * 2).toFixed(0)}`;
    const prev = nodes.get(k);
    const r = w * 0.55;
    if (!prev) nodes.set(k, { x: p.x, z: p.z, r, n: 1 });
    else {
      prev.r = Math.max(prev.r, r);
      prev.n += 1;
    }
  }

  for (const f of features) {
    if (f.properties.kind !== 'highway') continue;
    if (f.properties.tunnel && f.properties.tunnel !== 'no') continue;

    const coords =
      f.geometry.type === 'LineString'
        ? f.geometry.coordinates
        : f.geometry.type === 'Polygon'
          ? f.geometry.coordinates[0]
          : null;
    if (!coords || coords.length < 2) continue;

    const pts = lineStringToLocalPts(coords);
    if (pts.length < 2) continue;

    let w = highwayWidth(f.properties);
    const hw = f.properties.highway || '';
    if (isFootway(hw)) w = Math.max(w, 1.8);
    else w = Math.max(w, minCar * 0.9);

    polylines.push({ pts, width: w, highway: hw, name: f.properties.name || null });
    wayCount++;
    segmentCount += pts.length - 1;
    touchNode(pts[0], w);
    touchNode(pts[pts.length - 1], w);

    if (opts.polylinesOnly) continue; // il livello compilato disegna già tutto
    if (isFootway(hw)) {
      const g = buildRibbonGeometry(pts, w * 0.5, network ? 0.06 : yFoot);
      if (g) footGeos.push(g);
      continue;
    }
    if (network) continue;

    const roadGeo = buildRibbonGeometry(pts, w * 0.5, yAsphalt);
    if (roadGeo) asphaltGeos.push(roadGeo);

    if (w >= 3.2) {
      const curb = buildSidewalkStrip(pts, w * 0.5, w * 0.5 + CURB, yCurb);
      if (curb) curbGeos.push(curb);
    }

    if (wantsSidewalk(hw) && w >= 3.6) {
      const walk = buildSidewalkStrip(pts, w * 0.5 + CURB, w * 0.5 + CURB + SW, yWalk);
      if (walk) walkGeos.push(walk);
    }

    if (w >= 7) {
      const line = buildRibbonGeometry(pts, 0.14, yLine);
      if (line) lineGeos.push(line);
    }
  }

  for (const node of network || opts.polylinesOnly ? [] : nodes.values()) {
    if (node.n < 2) continue;
    // Junction plate: slightly oversized vs ribbon half-width to hide miter gaps
    const radius = Math.min(9.5, Math.max(2.6, node.r * 1.18));
    const segs = 16;
    const positions = [];
    const indices = [];
    positions.push(node.x, sampleY(node.x, node.z) + yJunc, node.z);
    for (let i = 0; i < segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      const x = node.x + Math.cos(a) * radius;
      const z = node.z + Math.sin(a) * radius;
      positions.push(x, sampleY(x, z) + yJunc, z);
    }
    for (let i = 0; i < segs; i++) indices.push(0, 1 + i, 1 + ((i + 1) % segs));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    junctionGeos.push(geo);
  }

  const group = new THREE.Group();
  group.name = 'roads';

  function addMerged(list, color, opts = {}) {
    if (!list.length) return;
    const merged = mergeGeometries(list, false);
    list.forEach((g) => g.dispose());
    if (!merged) return;
    const mesh = new THREE.Mesh(
      merged,
      new THREE.MeshLambertMaterial({
        color,
        flatShading: true,
        polygonOffset: !!opts.polyOffset,
        polygonOffsetFactor: opts.factor || 0,
        polygonOffsetUnits: opts.units || 0,
        side: THREE.DoubleSide,
      }),
    );
    mesh.receiveShadow = true;
    mesh.renderOrder = opts.order || 2;
    group.add(mesh);
  }

  // Bottom → top: sidewalk → foot → curb → asphalt → junction → markings
  addMerged(walkGeos, colors.sidewalk ?? 0xe8e4d8, { polyOffset: true, factor: 1, units: 1, order: 2 });
  addMerged(footGeos, colors.footway ?? 0xc8b898, { polyOffset: true, factor: 1, units: 1, order: 2 });
  addMerged(curbGeos, colors.curb ?? 0x3a3834, { polyOffset: true, factor: -1, units: -1, order: 3 });
  addMerged(asphaltGeos, colors.asphalt ?? 0x2a2e32, { polyOffset: true, factor: -2, units: -2, order: 4 });
  addMerged(junctionGeos, colors.junction ?? 0x32363a, { polyOffset: true, factor: -3, units: -3, order: 5 });
  addMerged(lineGeos, colors.centerLine ?? 0xf2eee2, { polyOffset: true, factor: -4, units: -4, order: 6 });

  scene.add(group);
  return { group, polylines, wayCount, segmentCount };
}
