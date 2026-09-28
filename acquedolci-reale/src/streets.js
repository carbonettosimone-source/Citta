/**
 * Strade in 3D sopra l'ortofoto: carreggiata in asfalto, marciapiedi rialzati 12 cm con cordolo,
 * mezzeria tratteggiata sulle provinciali, strisce pedonali e panchine dove le segna OSM, vialetti
 * e scalinate. Larghezze misurate facciata-facciata (scripts/build-streets.mjs).
 * Tutto segue il terreno MDT, sollevato di pochi centimetri.
 */
import * as THREE from 'three';

function canvasTex(w, h, draw, repeat = true) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function rnd(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

/** asfalto: grana fine, rappezzi e crepe — 4 m × 4 m per ripetizione */
const asphaltTex = () => canvasTex(512, 512, (g, w, h) => {
  const r = rnd(7);
  g.fillStyle = '#5c5d5f'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 18; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '40,40,42' : '105,105,102'},${0.04 + r() * 0.05})`; g.beginPath(); g.ellipse(r() * w, r() * h, 20 + r() * 90, 10 + r() * 50, r() * 3, 0, 7); g.fill(); }
  for (let i = 0; i < 16000; i++) { const v = 50 + r() * 70; g.fillStyle = `rgba(${v},${v},${v - 4},0.5)`; g.fillRect(r() * w, r() * h, 1.5, 1.5); }
  g.strokeStyle = 'rgba(20,20,20,0.35)'; g.lineWidth = 1.2;
  for (let i = 0; i < 5; i++) { g.beginPath(); let x = r() * w, y = r() * h; g.moveTo(x, y); for (let k = 0; k < 8; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; g.lineTo(x, y); } g.stroke(); }
});
/** marciapiede: mattonelle di cemento 40 cm, chiare, con fughe */
const sidewalkTex = () => canvasTex(256, 256, (g, w, h) => {
  const r = rnd(11);
  g.fillStyle = '#b9b3a8'; g.fillRect(0, 0, w, h);
  const n = 5, s = w / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const v = 170 + r() * 30; g.fillStyle = `rgb(${v},${v - 5},${v - 14})`; g.fillRect(i * s + 1, j * s + 1, s - 2, s - 2); }
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.08})`; g.fillRect(r() * w, r() * h, 1, 1); }
});
/** vialetti e piazzette: basolato chiaro */
const pavingTex = () => canvasTex(256, 256, (g, w, h) => {
  const r = rnd(5);
  g.fillStyle = '#a79f92'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 32) for (let x = -(y / 32 % 2) * 24; x < w; x += 48) { const v = 150 + r() * 40; g.fillStyle = `rgb(${v},${v - 6},${v - 16})`; g.fillRect(x + 1, y + 1, 46, 30); }
});

class Strip {
  constructor() { this.p = []; this.u = []; }
  quad(a, b, c, d, ua, ub, uc, ud) { this.p.push(...a, ...b, ...c, ...a, ...c, ...d); this.u.push(...ua, ...ub, ...uc, ...ua, ...uc, ...ud); }
  tri(a, b, c, ua, ub, uc) { this.p.push(...a, ...b, ...c); this.u.push(...ua, ...ub, ...uc); }
  mesh(mat, order = 0) {
    if (!this.p.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.renderOrder = order;
    return m;
  }
}

/** punti ogni ≤3 m (per seguire il terreno) con tangente e normale sinistra */
function densify(flat, extra = []) {
  const pts = [];
  for (let i = 0; i < flat.length; i += 2) pts.push({ x: flat[i], z: flat[i + 1], e: extra.map((a) => a[i / 2]) });
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], L = Math.hypot(b.x - a.x, b.z - a.z), n = Math.max(1, Math.ceil(L / 3));
    for (let k = 1; k <= n; k++) out.push({ x: a.x + (b.x - a.x) * k / n, z: a.z + (b.z - a.z) * k / n, e: a.e.map((v, j) => v + (b.e[j] - v) * k / n) });
  }
  let s = 0;
  out.forEach((p, i) => {
    const a = out[Math.max(0, i - 1)], b = out[Math.min(out.length - 1, i + 1)];
    let tx = b.x - a.x, tz = b.z - a.z; const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
    p.nx = -tz; p.nz = tx;
    if (i) s += Math.hypot(p.x - out[i - 1].x, p.z - out[i - 1].z);
    p.s = s;
  });
  return out;
}

export function buildStreets(data, heightAt) {
  const group = new THREE.Group(); group.name = 'streets';
  const asphalt = new Strip(), walk = new Strip(), curb = new Strip(), mark = new Strip(), paving = new Strip();
  const Y = 0.2, CURB = 0.12; // 20 cm sul modello del terreno: tra i vertici della maglia il terreno sporge di qualche cm
  const junc = data.junctions;
  const nearJunction = (x, z, pad) => junc.some(([jx, jz, r]) => Math.abs(jx - x) < r + pad && Math.abs(jz - z) < r + pad && Math.hypot(jx - x, jz - z) < r + pad);

  for (const rd of data.roads) {
    const P = densify(rd.p, [rd.sl, rd.sr]);
    const half = rd.cw / 2;
    for (let i = 1; i < P.length; i++) {
      const a = P[i - 1], b = P[i];
      const L = (p, o) => [p.x + p.nx * o, heightAt(p.x + p.nx * o, p.z + p.nz * o) + Y, p.z + p.nz * o];
      const va = a.s / 4, vb = b.s / 4;
      // carreggiata: u attraverso (0..cw/4), v lungo (s/4): asfalto a ripetizione 4 m
      asphalt.quad(L(a, half), L(a, -half), L(b, -half), L(b, half), [0, va], [rd.cw / 4, va], [rd.cw / 4, vb], [0, vb]);
      // marciapiedi: rialzati, interrotti vicino agli incroci (lì la carreggiata continua)
      for (const side of [1, -1]) {
        const wa = side > 0 ? a.e[0] : a.e[1], wb = side > 0 ? b.e[0] : b.e[1];
        if (!(wa > 0 && wb > 0)) continue;
        if (nearJunction(a.x, a.z, 1.0) || nearJunction(b.x, b.z, 1.0)) continue;
        const Wp = (p, o) => { const [x, y, z] = L(p, o); return [x, y + CURB, z]; };
        const ia = side * half, ib = side * half, oa = side * (half + wa), ob = side * (half + wb);
        walk.quad(Wp(a, ia), Wp(a, oa), Wp(b, ob), Wp(b, ib), [0, a.s / 1.6], [wa / 1.6, a.s / 1.6], [wb / 1.6, b.s / 1.6], [0, b.s / 1.6]);
        // cordolo: faccia verticale verso la carreggiata
        const c0 = L(a, ia), c1 = L(b, ib);
        curb.quad(c0, c1, [c1[0], c1[1] + CURB, c1[2]], [c0[0], c0[1] + CURB, c0[2]], [0, 0], [1, 0], [1, 1], [0, 1]);
      }
      // mezzeria tratteggiata: 3 m pieno, 3 m vuoto
      if (rd.mk && Math.floor(a.s / 3) % 2 === 0) {
        const w = 0.07;
        const M = (p, o) => { const [x, y, z] = L(p, o); return [x, y + 0.03, z]; };
        mark.quad(M(a, w), M(a, -w), M(b, -w), M(b, w), [0, 0], [1, 0], [1, 1], [0, 1]);
      }
    }
  }
  // incroci: dischi d'asfalto che chiudono i giunti fra le vie
  for (const [x, z, r] of junc) {
    const n = 16, y0 = heightAt(x, z) + Y - 0.004;
    for (let k = 0; k < n; k++) {
      const a0 = (k / n) * Math.PI * 2, a1 = ((k + 1) / n) * Math.PI * 2;
      const p0 = [x + Math.sin(a0) * r, 0, z + Math.cos(a0) * r], p1 = [x + Math.sin(a1) * r, 0, z + Math.cos(a1) * r];
      p0[1] = heightAt(p0[0], p0[2]) + Y - 0.004; p1[1] = heightAt(p1[0], p1[2]) + Y - 0.004;
      asphalt.tri([x, y0, z], p1, p0, [x / 4, z / 4], [p1[0] / 4, p1[2] / 4], [p0[0] / 4, p0[2] / 4]);
    }
  }
  // strisce pedonali: bande bianche da 50 cm lungo l'asse della via, lunghe quanto la carreggiata
  for (const [x, z, ang, cw] of data.crossings) {
    const tx = Math.sin(ang), tz = Math.cos(ang), nx = -tz, nz = tx;
    const stripes = Math.max(3, Math.floor(cw / 1.0));
    for (let k = 0; k < stripes; k++) {
      const o = -cw / 2 + 0.25 + k * (cw - 0.5) / Math.max(1, stripes - 1);
      const cx = x + nx * o, cz = z + nz * o;
      const pt = (dl, dw) => { const px = cx + tx * dl + nx * dw, pz = cz + tz * dl + nz * dw; return [px, heightAt(px, pz) + Y + 0.03, pz]; };
      mark.quad(pt(-1.5, -0.25), pt(-1.5, 0.25), pt(1.5, 0.25), pt(1.5, -0.25), [0, 0], [1, 0], [1, 1], [0, 1]);
    }
  }
  // pedonali, sentieri, scalinate: nastri di basolato
  for (const pa of data.paths) {
    if (pa.k === 'track') continue;
    const P = densify(pa.p);
    const hw = pa.w / 2;
    for (let i = 1; i < P.length; i++) {
      const a = P[i - 1], b = P[i];
      const L = (p, o) => [p.x + p.nx * o, heightAt(p.x + p.nx * o, p.z + p.nz * o) + Y + 0.03, p.z + p.nz * o];
      paving.quad(L(a, hw), L(a, -hw), L(b, -hw), L(b, hw), [0, a.s / 1.5], [pa.w / 1.5, a.s / 1.5], [pa.w / 1.5, b.s / 1.5], [0, b.s / 1.5]);
    }
  }
  // doppia faccia: l'ordine dei vertici dei nastri dipende dal verso della via in OSM
  const polyOff = (m) => { m.side = THREE.DoubleSide; m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -2; return m; };
  const add = (m) => m && group.add(m);
  add(asphalt.mesh(polyOff(new THREE.MeshLambertMaterial({ map: asphaltTex() })), 1));
  add(walk.mesh(new THREE.MeshLambertMaterial({ map: sidewalkTex(), side: THREE.DoubleSide }), 2));
  add(curb.mesh(new THREE.MeshLambertMaterial({ color: 0xcfcac0, side: THREE.DoubleSide }), 2));
  const markMat = polyOff(new THREE.MeshLambertMaterial({ color: 0xf2f2ee })); markMat.polygonOffsetFactor = -6; markMat.polygonOffsetUnits = -6;
  add(mark.mesh(markMat, 3));
  add(paving.mesh(polyOff(new THREE.MeshLambertMaterial({ map: pavingTex() })), 1));
  group.add(buildBenches(data.benches, heightAt));
  group.add(buildWalls(data.walls || [], heightAt));
  group.add(buildLamps(data.lamps || [], heightAt));
  return group;
}

/** muri DBTR: divisorio intonacato, sostegno e a secco in pietra, recinzione/cancello in ferro */
function buildWalls(list, heightAt) {
  const SPEC = [[1.8, 0.25, 0xd9d1c1], [1.4, 0.4, 0xa89d8a], [1.0, 0.45, 0x958a78], [1.5, 0.05, 0x39463b]];
  const pos = [], colr = [], c = new THREE.Color();
  const box = (a, b, h, t, y0a, y0b) => {
    const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz); if (L < 0.05) return;
    const nx = (-dz / L) * t / 2, nz = (dx / L) * t / 2;
    const P = (p, s, y) => [p[0] + nx * s, y, p[1] + nz * s];
    const q = (A, B, C, D) => { pos.push(...A, ...B, ...C, ...A, ...C, ...D); for (let i = 0; i < 6; i++) colr.push(c.r, c.g, c.b); };
    for (const sd of [1, -1]) q(P(a, sd, y0a), P(b, sd, y0b), P(b, sd, y0b + h), P(a, sd, y0a + h));
    q(P(a, 1, y0a + h), P(b, 1, y0b + h), P(b, -1, y0b + h), P(a, -1, y0a + h));
  };
  for (const w of list) {
    const [h, t, hex] = SPEC[w.k]; c.setHex(hex);
    for (let i = 2; i < w.p.length; i += 2) {
      const a = [w.p[i - 2], w.p[i - 1]], b = [w.p[i], w.p[i + 1]];
      const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 4));
      for (let k = 0; k < n; k++) {
        const p0 = [a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n], p1 = [a[0] + (b[0] - a[0]) * (k + 1) / n, a[1] + (b[1] - a[1]) * (k + 1) / n];
        box(p0, p1, h, t, heightAt(...p0) - 0.3, heightAt(...p1) - 0.3);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
  m.castShadow = m.receiveShadow = true; m.name = 'walls';
  return m;
}

/** lampione stradale: palo, sbraccio verso la strada, corpo illuminante */
function buildLamps(list, heightAt) {
  const g = new THREE.Group(); g.name = 'lamps';
  if (!list.length) return g;
  const pole = new THREE.CylinderGeometry(0.06, 0.09, 6.5, 6); pole.translate(0, 3.25, 0);
  const arm = new THREE.BoxGeometry(0.06, 0.06, 1.3); arm.translate(0, 6.4, 0.6);
  const head = new THREE.BoxGeometry(0.28, 0.12, 0.55); head.translate(0, 6.33, 1.2);
  const metal = new THREE.MeshLambertMaterial({ color: 0x4a4f52 });
  const light = new THREE.MeshLambertMaterial({ color: 0xfff4d6, emissive: 0x6a6040 });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (const [geo, mat] of [[pole, metal], [arm, metal], [head, light]]) {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach(([x, z, a], i) => { q.setFromAxisAngle(up, a); m.compose(p.set(x, heightAt(x, z) + 0.3, z), q, s); im.setMatrixAt(i, m); });
    im.castShadow = true; g.add(im);
  }
  return g;
}

function buildBenches(list, heightAt) {
  const g = new THREE.Group();
  if (!list.length) return g;
  const seat = new THREE.BoxGeometry(1.8, 0.08, 0.45); seat.translate(0, 0.45, 0);
  const back = new THREE.BoxGeometry(1.8, 0.45, 0.06); back.translate(0, 0.72, -0.2);
  const legs = new THREE.BoxGeometry(0.06, 0.42, 0.4); legs.translate(-0.8, 0.21, 0);
  const legs2 = new THREE.BoxGeometry(0.06, 0.42, 0.4); legs2.translate(0.8, 0.21, 0);
  const wood = new THREE.MeshLambertMaterial({ color: 0x8a5d3b }), iron = new THREE.MeshLambertMaterial({ color: 0x2f3a33 });
  const parts = [[seat, wood], [back, wood], [legs, iron], [legs2, iron]];
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  for (const [geo, mat] of parts) {
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach(([x, z], i) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (x * 13 + z * 7) % 6.28); m.compose(p.set(x, heightAt(x, z) + 0.07, z), q, s); im.setMatrixAt(i, m); });
    im.castShadow = true; g.add(im);
  }
  return g;
}
