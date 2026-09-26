/**
 * StreetMesher — trasforma la StreetNetwork in geometria.
 * Due draw call in tutto: "streets" (asfalto, cordoli, marciapiedi, fianchi, incroci:
 * vertex color, un materiale) e "markings" (strisce pedonali, mezzerie).
 * Le quote vengono dal profilo compilato: niente offset di centimetri sul DEM,
 * niente polygonOffset tra strati (il marciapiede sta davvero 15 cm sopra l'asfalto).
 */
import * as THREE from 'three';

class Buf {
  constructor() {
    this.p = [];
    this.c = [];
    this.i = [];
  }
  v(x, y, z, col) {
    this.p.push(x, y, z);
    this.c.push(col.r, col.g, col.b);
    return this.p.length / 3 - 1;
  }
  quad(a, b, c, d) {
    this.i.push(a, b, c, a, c, d);
  }
  tri(a, b, c) {
    this.i.push(a, b, c);
  }
  geometry() {
    if (!this.i.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setIndex(this.p.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(this.i, 1) : new THREE.Uint16BufferAttribute(this.i, 1));
    g.computeVertexNormals();
    g.computeBoundingSphere();
    return g;
  }
}

const lin = (hex, k = 1) => {
  const c = new THREE.Color().setHex(hex);
  return new THREE.Color(c.r * k, c.g * k, c.b * k);
};

const MAJOR = new Set(['primary', 'secondary', 'tertiary', 'trunk', 'primary_link', 'secondary_link', 'tertiary_link']);

/**
 * @param {{x:number,z:number,crossing?:string}[]} [osmCrossings] strisce reali da OSM (highway=crossing):
 *   se presenti sono le UNICHE disegnate; altrimenti euristica agli incroci con strade principali.
 */
export function meshStreetNetwork(net, scene, style = {}, osmCrossings = []) {
  const colors = style.colors || {};
  const ASPH = lin(colors.asphalt ?? 0x3c3c3a);
  const JUNC = lin(colors.junction ?? colors.asphalt ?? 0x3c3c3a, 1.03);
  const SWC = lin(colors.sidewalk ?? 0xd8d0c0);
  const CURBC = lin(colors.curb ?? 0x9a948a);
  const SIDE = lin(colors.sidewalk ?? 0xd8d0c0, 0.62);
  const SKIRT = lin(colors.asphalt ?? 0x3c3c3a, 0.7);
  const PAINT = lin(colors.centerLine ?? 0xf2eee2);
  const { SW, CURB } = net;
  const DROP = 2.5; // profondità dei fianchi (coprono i dislivelli col terreno)

  const b = new Buf();
  const m = new Buf();

  // ---- tratti
  for (const e of net.edges) {
    if (!e.visible) continue;
    const cut = e.cut;
    const n = cut.length;
    const L = [], R = [];
    const sides = { 1: [], [-1]: [] };
    for (const p of cut) {
      const ox = p.nx * p.miter, oz = p.nz * p.miter;
      L.push(b.v(p.x + ox * e.hw, p.y, p.z + oz * e.hw, ASPH));
      R.push(b.v(p.x - ox * e.hw, p.y, p.z - oz * e.hw, ASPH));
      for (const s of [1, -1]) {
        const ex = p.x + ox * e.hw * s, ez = p.z + oz * e.hw * s;
        if (e.sidewalk) {
          const fx = p.x + ox * (e.hw + SW) * s, fz = p.z + oz * (e.hw + SW) * s;
          sides[s].push({
            cb: b.v(ex, p.y, ez, CURBC),
            ct: b.v(ex, p.y + CURB, ez, SWC),
            so: b.v(fx, p.y + CURB, fz, SWC),
            sb: b.v(fx, p.y - DROP, fz, SIDE),
          });
        } else {
          sides[s].push({ st: b.v(ex, p.y, ez, SKIRT), sb: b.v(ex, p.y - DROP, ez, SKIRT) });
        }
      }
    }
    for (let i = 0; i < n - 1; i++) {
      b.quad(L[i], R[i], R[i + 1], L[i + 1]);
      for (const s of [1, -1]) {
        const A = sides[s][i], B = sides[s][i + 1];
        if (e.sidewalk) {
          b.quad(A.cb, B.cb, B.ct, A.ct); // faccia del cordolo
          b.quad(A.ct, B.ct, B.so, A.so); // piano del marciapiede
          b.quad(A.so, B.so, B.sb, A.sb); // fianco esterno
        } else {
          b.quad(A.st, B.st, B.sb, A.sb);
        }
      }
    }
  }

  // ---- incroci: ventaglio dal centro + angoli del marciapiede
  for (const J of net.junctions) {
    if (!J.poly) continue;
    const c = b.v(J.node.x, J.node.y, J.node.z, JUNC);
    const ring = J.poly.map((p) => b.v(p.x, p.y ?? J.node.y, p.z, JUNC));
    for (let i = 0; i < ring.length; i++) b.tri(c, ring[i], ring[(i + 1) % ring.length]);
    for (const P of J.patches || []) {
      const k = P.inner.length;
      const cb = [], ct = [], so = [], sb = [];
      for (let i = 0; i < k; i++) {
        const a = P.inner[i], o = P.outer[i];
        const y = a.y ?? P.y;
        cb.push(b.v(a.x, y, a.z, CURBC));
        ct.push(b.v(a.x, y + CURB, a.z, SWC));
        so.push(b.v(o.x, y + CURB, o.z, SWC));
        sb.push(b.v(o.x, y - DROP, o.z, SIDE));
      }
      for (let i = 0; i < k - 1; i++) {
        b.quad(cb[i], cb[i + 1], ct[i + 1], ct[i]);
        b.quad(ct[i], ct[i + 1], so[i + 1], so[i]);
        b.quad(so[i], so[i + 1], sb[i + 1], sb[i]);
      }
    }
  }

  // ---- strisce pedonali
  let crossings = 0;
  const zebra = (e, from) => {
    const to = from + 2.8;
    const p0 = net.pointAt(e.samples, from), p1 = net.pointAt(e.samples, to);
    const n0 = { x: -p0.tz, z: p0.tx }, n1 = { x: -p1.tz, z: p1.tx };
    for (let l = -e.hw + 0.45; l + 0.5 <= e.hw - 0.35; l += 1.0) {
      const q = (p, nn, off) => m.v(p.x + nn.x * off, p.y + 0.02, p.z + nn.z * off, PAINT);
      m.quad(q(p0, n0, l), q(p0, n0, l + 0.5), q(p1, n1, l + 0.5), q(p1, n1, l));
    }
    crossings++;
  };
  const real = osmCrossings.filter((c) => !['unmarked', 'no'].includes(c.crossing));
  if (real.length) {
    // Posizioni vere: proiezione sul tratto più vicino, fuori dal poligono d'incrocio
    for (const c of real) {
      const n = net.nearestSeg(c.x, c.z, 4);
      if (!n || n.s.node) continue;
      const e = n.s.edge;
      const a = e.cut.findIndex((p) => p.x === n.s.ax && p.z === n.s.az);
      if (a < 0) continue;
      const sAt = e.cut[a].s + (e.cut[Math.min(a + 1, e.cut.length - 1)].s - e.cut[a].s) * n.t;
      const from = Math.max(e.clipA + 0.3, Math.min(e.length - e.clipB - 3.1, sAt - 1.4));
      if (e.length - e.clipB - e.clipA < 3.4) continue;
      zebra(e, from);
    }
  } else {
    for (const J of net.junctions) {
      if (!J.poly || J.ends.length < 3) continue;
      if (!J.ends.some((en) => MAJOR.has(en.edge.highway))) continue;
      for (const en of J.ends) {
        const e = en.edge;
        if (!e.visible || !e.sidewalk) continue;
        const s0 = e.clipA, s1 = e.length - e.clipB;
        if (s1 - s0 < 7) continue;
        zebra(e, en.end === 'a' ? s0 + 0.5 : s1 - 3.3);
      }
    }
  }

  // ---- mezzeria tratteggiata sulle strade larghe
  for (const e of net.edges) {
    if (!e.visible || e.width < 7) continue;
    const s0 = e.clipA + 2, s1 = e.length - e.clipB - 2;
    for (let s = s0; s + 3 <= s1; s += 7) {
      const p0 = net.pointAt(e.samples, s), p1 = net.pointAt(e.samples, s + 3);
      const h = 0.07;
      const q = (p, off) => m.v(p.x - p.tz * off, p.y + 0.02, p.z + p.tx * off, PAINT);
      m.quad(q(p0, -h), q(p0, h), q(p1, h), q(p1, -h));
    }
  }

  const group = new THREE.Group();
  group.name = 'streets';
  const g1 = b.geometry();
  if (g1) {
    const mesh = new THREE.Mesh(g1, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }));
    mesh.name = 'streets-surface';
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  const g2 = m.geometry();
  if (g2) {
    const mesh = new THREE.Mesh(g2, new THREE.MeshLambertMaterial({
      vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    }));
    mesh.name = 'streets-markings';
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  scene.add(group);
  return { group, crossings, vertices: b.p.length / 3 + m.p.length / 3 };
}
