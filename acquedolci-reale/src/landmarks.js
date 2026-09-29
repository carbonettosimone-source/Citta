/**
 * Luoghi d'interesse modellati a mano, dalle foto di riferimento su Wikimedia Commons (usate solo
 * come riferimento visivo, non come texture) e dalle misure vere: posizione e pianta DBTR, altezze
 * LiDAR, perimetro del rudere DBTR, orientamento dall'ortofoto 2022.
 *
 *  - Palazzo del Municipio (1924-26, G. Giordano, eclettico) — foto Episcopello, CC BY-SA 4.0
 *  - Fontana dei Delfini (1924), Piazza Vittorio Emanuele III — idem
 *  - Chiesa Madre di San Benedetto il Moro / B.V. Assunta (1926-28) — foto Subbass1 (CC BY-SA 4.0),
 *    Azotoliquido (CC BY-SA 3.0)
 *  - Castello Larcan-Gravina con la cappella di San Giuseppe — foto Azotoliquido (CC BY-SA 3.0)
 *  - Ruderi DBTR: muri in pietra
 *
 * Ogni modello si costruisce nel riferimento della sua facciata: u lungo la facciata, y in alto,
 * w verso l'esterno (u × y = w, destrorso: le facce restano ben orientate).
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { NIGHT } from './daylight.js';
import { buildPlazaDressing } from './plaza-props.js';
import { buildPlazaBuildings } from './plaza-buildings.js';

/** Raccoglie pezzi colorati nel riferimento di una facciata e li fonde in una sola mesh. */
class Kit {
  constructor(ox, oz, wx, wz) {
    const l = Math.hypot(wx, wz); wx /= l; wz /= l;
    this.m = new THREE.Matrix4().makeBasis(new THREE.Vector3(wz, 0, -wx), new THREE.Vector3(0, 1, 0), new THREE.Vector3(wx, 0, wz)).setPosition(ox, 0, oz);
    this.parts = [];
  }
  add(geo, hex) {
    const src = geo.index ? geo.toNonIndexed() : geo;
    // solo posizione e colore: le normali si ricalcolano sulla mesh fusa
    const g = new THREE.BufferGeometry(); g.setAttribute('position', src.attributes.position);
    g.applyMatrix4(this.m);
    const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(a, 3));
    this.parts.push(g);
    return this;
  }
  /** parallelepipedo da (u0,y0,w0) a (u1,y1,w1) */
  box(u0, u1, y0, y1, w0, w1, hex) {
    const g = new THREE.BoxGeometry(Math.abs(u1 - u0), Math.abs(y1 - y0), Math.abs(w1 - w0));
    g.translate((u0 + u1) / 2, (y0 + y1) / 2, (w0 + w1) / 2);
    return this.add(g, hex);
  }
  /** apertura ad arco (vano scuro) sul piano w: rettangolo con semicerchio in cima */
  arch(uc, width, y0, y1, w, hex, depth = 0.08) {
    const s = new THREE.Shape(), r = width / 2, ys = y1 - r;
    s.moveTo(uc - r, y0); s.lineTo(uc + r, y0); s.lineTo(uc + r, ys); s.absarc(uc, ys, r, 0, Math.PI, false); s.lineTo(uc - r, y0);
    const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 10 });
    g.translate(0, 0, w - depth / 2);
    return this.add(g, hex);
  }
  /** timpano triangolare: base u0..u1 a y0, colmo a y1, spessore w0..w1 */
  pediment(u0, u1, y0, y1, w0, w1, hex) {
    const s = new THREE.Shape(); s.moveTo(u0, y0); s.lineTo(u1, y0); s.lineTo((u0 + u1) / 2, y1); s.lineTo(u0, y0);
    const g = new THREE.ExtrudeGeometry(s, { depth: w1 - w0, bevelEnabled: false }); g.translate(0, 0, w0);
    return this.add(g, hex);
  }
  /** falda di tetto a capanna: colmo lungo w, da u0 a u1, gronda y0, colmo y1, da w0 a w1 */
  gable(u0, u1, y0, y1, w0, w1, hex) {
    const s = new THREE.Shape(); s.moveTo(u0, y0); s.lineTo(u1, y0); s.lineTo((u0 + u1) / 2, y1); s.lineTo(u0, y0);
    const g = new THREE.ExtrudeGeometry(s, { depth: w1 - w0, bevelEnabled: false }); g.translate(0, 0, w0);
    return this.add(g, hex);
  }
  cyl(uc, wc, y0, h, r0, r1, hex, seg = 16) {
    const g = new THREE.CylinderGeometry(r1, r0, h, seg); g.translate(uc, y0 + h / 2, wc);
    return this.add(g, hex);
  }
  dome(uc, wc, y0, r, hy, hex) {
    const g = new THREE.SphereGeometry(r, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2); g.scale(1, hy / r, 1); g.translate(uc, y0, wc);
    return this.add(g, hex);
  }
  /** barra da (u, y0, w0) a (u, y1, w1): corrimano lungo la scalinata */
  rail(u, y0, w0, y1, w1, thick, hex) {
    const dw = w1 - w0, dy = y1 - y0, L = Math.hypot(dw, dy) || 0.01;
    const g = new THREE.BoxGeometry(thick, thick, L);
    g.rotateX(-Math.atan2(dy, dw));
    g.translate(u, (y0 + y1) / 2, (w0 + w1) / 2);
    return this.add(g, hex);
  }
  mesh(name) {
    const g = mergeGeometries(this.parts);
    g.computeVertexNormals();
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    // di notte i monumenti sono illuminati dai fari: luce calda dal basso sulle loro tinte
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uNight = NIGHT;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vY;').replace('#include <project_vertex>', '#include <project_vertex>\nvY = (modelMatrix * vec4(transformed, 1.0)).y;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uNight; varying float vY;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.78, 0.5) * uNight * 0.38;');
    };
    const m = new THREE.Mesh(g, mat);
    m.name = name; m.castShadow = m.receiveShadow = true;
    return m;
  }
}

/** riferimento di facciata su una pianta: il lato la cui normale esterna guarda di più verso `dir` */
function facadeFrame(r, dir) {
  const P = []; for (let i = 0; i < r.length; i += 2) P.push([r[i], r[i + 1]]);
  let cx = 0, cz = 0; for (const [x, z] of P) { cx += x; cz += z; } cx /= P.length; cz /= P.length;
  let best = null;
  for (let i = 0; i < P.length; i++) {
    const [ax, az] = P[i], [bx, bz] = P[(i + 1) % P.length], L = Math.hypot(bx - ax, bz - az);
    if (L < 4) continue;
    let wx = -(bz - az) / L, wz = (bx - ax) / L;
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    if ((mx - cx) * wx + (mz - cz) * wz < 0) { wx = -wx; wz = -wz; }
    const score = wx * dir[0] + wz * dir[1] + L * 0.004;
    if (!best || score > best.score) best = { score, mx, mz, wx, wz, L };
  }
  // estensioni della pianta nel riferimento: larghezza lungo u, profondità verso −w
  const ux = best.wz, uz = -best.wx;
  let u0 = Infinity, u1 = -Infinity, d = 0;
  for (const [x, z] of P) { const u = (x - best.mx) * ux + (z - best.mz) * uz, w = (x - best.mx) * best.wx + (z - best.mz) * best.wz; u0 = Math.min(u0, u); u1 = Math.max(u1, u); d = Math.min(d, w); }
  // centro la facciata sulla larghezza vera della pianta
  const shift = (u0 + u1) / 2;
  return { ox: best.mx + ux * shift, oz: best.mz + uz * shift, wx: best.wx, wz: best.wz, W: u1 - u0, D: -d };
}

// ---------------------------------------------------------------- Municipio
function municipio(b, fountain) {
  const dir = fountain ? [fountain.x - 0, fountain.z - 0] : [0, -1];
  const F = facadeFrame(b.r, dir);
  const k = new Kit(F.ox, F.oz, F.wx, F.wz);
  const g = b.g, W = F.W, D = F.D, h = W / 2;
  const WALL = 0xeadfc8, TRIM = 0xf4efe4, DARK = 0x2b3138, ROOF = 0xb5623d, STONE = 0xd5cec0, IRON = 0x1c1e22;
  const H1 = g + 0.9, CORN = g + 11.6; // basamento, cornicione
  k.box(-h, h, g - 0.6, CORN, -D, 0, WALL);                               // corpo
  k.box(-h - 0.05, h + 0.05, g - 0.6, H1, -D - 0.05, 0.05, STONE);         // basamento in pietra
  k.box(-h - 0.12, h + 0.12, g + 5.4, g + 5.75, -D - 0.12, 0.12, TRIM);    // fascia marcapiano
  k.box(-h - 0.45, h + 0.45, CORN - 0.2, CORN + 0.35, -D - 0.45, 0.45, TRIM); // cornicione aggettante
  k.box(-h, h, CORN + 0.35, CORN + 1.4, -0.4, 0, TRIM);                    // attico: parapetto
  k.box(-h, h, CORN + 0.35, CORN + 1.4, -D, -D + 0.4, TRIM);
  k.box(-h, -h + 0.4, CORN + 0.35, CORN + 1.4, -D, 0, TRIM);
  k.box(h - 0.4, h, CORN + 0.35, CORN + 1.4, -D, 0, TRIM);
  // tetto a padiglione in coppi dietro l'attico (ortofoto)
  const hipH = 3.2;
  for (const [a, bb, c] of [[[-h + 0.4, -0.4], [h - 0.4, -0.4], [0, -D / 2]], [[h - 0.4, -0.4], [h - 0.4, -D + 0.4], [0, -D / 2]], [[h - 0.4, -D + 0.4], [-h + 0.4, -D + 0.4], [0, -D / 2]], [[-h + 0.4, -D + 0.4], [-h + 0.4, -0.4], [0, -D / 2]]]) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([a[0], CORN + 0.4, a[1], bb[0], CORN + 0.4, bb[1], c[0], CORN + 0.4 + hipH, c[1]], 3));
    k.add(geo, ROOF);
  }
  // corpo centrale avanzato con tre archi al primo piano
  const cw = Math.min(8.4, W * 0.36), c2 = cw / 2;
  k.box(-c2, c2, g - 0.6, CORN, 0, 0.7, WALL);
  k.box(-c2 - 0.1, c2 + 0.1, CORN - 0.2, CORN + 0.35, 0, 1.15, TRIM);
  k.box(-c2, c2, CORN + 0.35, CORN + 2.1, 0.3, 0.7, TRIM);                  // attico rialzato al centro
  // lesene binate agli spigoli del corpo centrale e agli angoli, cartigli sull'attico
  for (const s of [-1, 1]) {
    for (const off of [0, 0.75]) {
      k.box(s * (c2 - off) - 0.28, s * (c2 - off) + 0.28, H1, CORN - 0.2, 0.7, 0.95, TRIM);
      k.box(s * (h - off) - 0.28, s * (h - off) + 0.28, H1, CORN - 0.2, 0, 0.25, TRIM);
    }
    k.box(s * c2 - 1.0, s * c2 + 1.0, CORN + 0.35, CORN + 2.6, 0.45, 0.85, TRIM); // cartiglio
    k.box(s * c2 - 0.6, s * c2 + 0.6, CORN + 0.8, CORN + 2.2, 0.85, 0.95, 0xd8ccb3);
  }
  for (const uc of [-2.6, 0, 2.6]) {
    k.arch(uc, 1.55, g + 6.2, g + 9.6, 0.72, DARK);                         // tre finestroni ad arco
    k.arch(uc, 1.95, g + 6.0, g + 9.85, 0.71, TRIM, 0.04);                  // cornice dell'arco
    k.arch(uc, uc === 0 ? 2.1 : 1.4, H1, g + (uc === 0 ? 4.6 : 4.2), 0.72, uc === 0 ? 0x4a3526 : DARK); // portone e finestre del piano terra
    if (uc !== 0) {                                                          // cancelli in ferro nei due vani laterali
      const yA = H1 + 0.15, yB = g + 4.05;
      for (let du = -0.42; du <= 0.42; du += 0.16) k.box(uc + du - 0.012, uc + du + 0.012, yA, yB, 0.74, 0.78, IRON);
      k.box(uc - 0.5, uc + 0.5, yB - 0.02, yB + 0.02, 0.74, 0.78, IRON);
    }
  }
  // balcone con balaustra sotto i tre archi
  k.box(-c2 + 0.3, c2 - 0.3, g + 5.8, g + 6.0, 0.7, 1.7, TRIM);
  k.box(-c2 + 0.3, c2 - 0.3, g + 6.0, g + 6.95, 1.6, 1.7, TRIM);
  for (let u = -c2 + 0.5; u < c2 - 0.4; u += 0.35) k.box(u - 0.06, u + 0.06, g + 6.0, g + 6.9, 1.62, 1.68, 0xd9d0bc);
  // ali: due finestre per piano con cornice e timpanino al primo piano
  const wing = [];
  for (let u = c2 + 1.6; u < h - 1.2; u += 2.6) wing.push(u);
  for (const s of [-1, 1]) for (const u of wing) {
    const uc = s * u;
    for (const [y0, y1] of [[g + 1.8, g + 4.3], [g + 6.6, g + 9.3]]) {
      k.box(uc - 0.85, uc + 0.85, y0 - 0.15, y1 + 0.15, 0, 0.12, TRIM);
      k.box(uc - 0.62, uc + 0.62, y0, y1, 0.12, 0.16, DARK);
    }
    k.pediment(uc - 1.0, uc + 1.0, g + 9.5, g + 10.2, 0, 0.3, TRIM);
  }
  // fianchi e retro: file di finestre ai due piani
  const sideRows = (len, place) => { for (let t = 2.2; t < len - 1.5; t += 3) for (const [y0, y1] of [[g + 1.8, g + 4.3], [g + 6.6, g + 9.3]]) place(t, y0, y1); };
  sideRows(D, (t, y0, y1) => { for (const s of [-1, 1]) k.box(s * h - 0.1, s * h + 0.1, y0, y1, -t - 0.6, -t + 0.6, DARK); });
  sideRows(W, (t, y0, y1) => k.box(-h + t - 0.6, -h + t + 0.6, y0, y1, -D - 0.1, -D + 0.1, DARK));
  // scalinata sul basolato della piazza (strade.js: Y 0,20 + 0,08), non sotto la mesh
  const NST = 8;
  for (let i = 0; i < NST; i++) k.box(-c2 - 3.4 + i * 0.2, c2 + 3.4 - i * 0.2, g + 0.28, g + 0.28 + 0.13 * (i + 1), 0.7, 0.7 + (NST - i) * 0.36, STONE);
  // corrimano in ferro ai due lati e in mezzo: la scala è larga, nella foto c'è il passamano
  const wBot = 0.7 + NST * 0.36, wTop = 0.7 + 0.36;
  const yBot = g + 0.28 + 0.13 + 0.92, yTop = g + 0.28 + 0.13 * NST + 0.92;
  for (const u of [-c2 - 3.2, 0, c2 + 3.2]) {
    k.rail(u, yBot, wBot, yTop, wTop, 0.045, IRON);
    k.rail(u, yBot - 0.38, wBot, yTop - 0.38, wTop, 0.03, IRON);
    for (let t = 0; t <= 1.001; t += 0.16) {
      const w = wBot + (wTop - wBot) * t, y = yBot + (yTop - yBot) * t;
      k.box(u - 0.02, u + 0.02, y - 0.92, y + 0.02, w - 0.025, w + 0.025, IRON);
    }
  }
  // vasi di cotto con cicadi piccole, sul pianerottolo ai lati della scala
  const pot = (u, w, s) => {
    const y = g + 0.28;
    k.cyl(u, w, y, 0.38 * s, 0.22 * s, 0.32 * s, 0xc4623a, 12);
    k.cyl(u, w, y + 0.38 * s, 0.06 * s, 0.36 * s, 0.34 * s, 0xd48455, 12);
    k.cyl(u, w, y + 0.42 * s, 0.28 * s, 0.045 * s, 0.04 * s, 0x6d7a45, 6);
    const leaf = new THREE.SphereGeometry(0.26 * s, 8, 6); leaf.scale(1, 0.42, 1); leaf.translate(u, y + 0.78 * s, w); k.add(leaf, 0x3d6a34);
    const leaf2 = new THREE.SphereGeometry(0.16 * s, 6, 5); leaf2.scale(1.5, 0.28, 0.55); leaf2.translate(u + 0.04 * s, y + 0.7 * s, w); k.add(leaf2, 0x4e7c3e);
  };
  pot(-c2 - 4.1, 3.55, 1.35);
  pot(c2 + 3.9, 3.7, 1.2);
  pot(-c2 - 1.6, 2.7, 0.95);
  pot(c2 + 1.5, 2.55, 0.85);
  pot(-c2 - 2.4, 4.55, 0.72);
  // sedie di plastica bianca, a volte accostate di lato (non sono arredo fisso censito)
  const chair = (u, w) => {
    const y = g + 0.28, WHITE = 0xf4f4f1;
    k.box(u - 0.22, u + 0.22, y + 0.42, y + 0.48, w - 0.2, w + 0.2, WHITE);
    k.box(u - 0.21, u + 0.21, y + 0.48, y + 0.9, w - 0.2, w - 0.14, WHITE);
    for (const du of [-0.16, 0.16]) for (const dw of [-0.16, 0.16]) k.box(u + du - 0.018, u + du + 0.018, y, y + 0.42, w + dw - 0.018, w + dw + 0.018, WHITE);
  };
  for (let i = 0; i < 4; i++) chair(c2 + 4.5, 1.15 + i * 0.52);
  return k.mesh('municipio');
}

// ---------------------------------------------------------------- Fontana dei Delfini
function fountain(f) {
  const k = new Kit(f.x, f.z, 0, 1);
  // la vasca poggia sul basolato (Y + 8 cm), non sull'ortofoto: resta geometria, non una macchia nella foto
  // vasca bassa e larga, come si vede dalla piazza: bordo di pietra chiara, acqua verde, delfini sul pelo dell'acqua
  const R = f.r + 0.55, y = f.y + 0.28, STONE = 0xe4dccc;
  k.cyl(0, 0, y, 0.48, R - 0.15, R - 0.2, STONE, 48);
  k.cyl(0, 0, y + 0.42, 0.14, R + 0.02, R + 0.1, 0xf3eee4, 48);
  k.cyl(0, 0, y + 0.38, 0.05, R - 0.55, R - 0.55, 0x6e9a84, 40);
  const rock = new THREE.IcosahedronGeometry(0.55, 1); const p = rock.attributes.position;
  for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) * (1 + Math.sin(i * 1.7) * 0.16), p.getY(i) * 0.7, p.getZ(i) * (1 + Math.cos(i * 2.3) * 0.16));
  rock.translate(0, y + 0.72, 0); k.add(rock, 0x8c8578);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.4, d = new THREE.SphereGeometry(0.28, 8, 6); d.scale(1, 0.5, 2.2); d.rotateX(0.85); d.rotateY(a);
    d.translate(Math.sin(a) * 0.85, y + 0.78, Math.cos(a) * 0.85); k.add(d, 0x5e5954);
  }
  k.cyl(0, 0, y + 1.05, 0.4, 0.035, 0.012, 0xe7f3f1);
  return k.mesh('fontana-delfini');
}

// ---------------------------------------------------------------- Chiesa Madre
function chiesa(b) {
  // facciata a NORD, sulla piazza coi giardini: nella foto frontale (Azotoliquido) dietro la facciata
  // ci sono le montagne, che stanno a sud. Canonica e campanile quindi a sud (retro).
  const F = facadeFrame(b.r, [0, -1]);
  const k = new Kit(F.ox, F.oz, F.wx, F.wz);
  const g = b.g, W = Math.min(21, F.W), L = F.D, h = W / 2;
  const YEL = 0xf3ead2, TRIM = 0xf8f3e6, DARK = 0x33302c, WOOD = 0x5a3a24, ROOF = 0xb0603a, LEAD = 0x8e908e;
  const nave = Math.min(11, W * 0.55), n2 = nave / 2, rear = Math.min(9, L * 0.28);
  const EN = g + 13, EA = g + 7.5; // gronda navata, gronda navatelle
  // navata e navatelle
  k.box(-n2, n2, g - 0.5, EN, -L + rear, 0, YEL);
  k.gable(-n2 - 0.3, n2 + 0.3, EN, EN + 3.2, -L + rear, 0.1, ROOF);
  for (const s of [-1, 1]) {
    k.box(s > 0 ? n2 : -h, s > 0 ? h : -n2, g - 0.5, EA, -L + rear, -1.2, YEL);
    // navatella: tetto a una falda appoggiato alla navata
    const sh = new THREE.Shape(); sh.moveTo(0, EA); sh.lineTo(h - n2 + 0.3, EA - 0.2); sh.lineTo(0, EA + 2); sh.lineTo(0, EA);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: L - rear - 1.2, bevelEnabled: false });
    if (s < 0) geo.scale(-1, 1, 1);
    geo.translate(s * n2, 0, -L + rear); k.add(geo, ROOF);
    // archi ciechi sulle navatelle, finestre ad arco in alto sulla navata
    for (let t = 3; t < L - rear - 3; t += 4.2) {
      const ga = new THREE.Shape(); const r = 1.3, ys = EA - 1.6; ga.moveTo(-r, g + 0.8); ga.lineTo(r, g + 0.8); ga.lineTo(r, ys); ga.absarc(0, ys, r, 0, Math.PI, false); ga.lineTo(-r, g + 0.8);
      const gg = new THREE.ExtrudeGeometry(ga, { depth: 0.06, bevelEnabled: false }); gg.rotateY(Math.PI / 2); gg.translate(s * (h + 0.02), 0, -t); k.add(gg, TRIM);
      const cw = new THREE.Shape(); const r2 = 0.55, ys2 = EN - 1.8; cw.moveTo(-r2, EN - 3.6); cw.lineTo(r2, EN - 3.6); cw.lineTo(r2, ys2); cw.absarc(0, ys2, r2, 0, Math.PI, false); cw.lineTo(-r2, EN - 3.6);
      const cg = new THREE.ExtrudeGeometry(cw, { depth: 0.06, bevelEnabled: false }); cg.rotateY(Math.PI / 2); cg.translate(s * (n2 + 0.02), 0, -t); k.add(cg, DARK);
    }
  }
  // facciata: ordine inferiore su tutta la larghezza, superiore sulla navata, timpano e croce
  const FT = 0.5; // la facciata sporge davanti al corpo
  k.box(-h, h, g - 0.5, g + 9, 0, FT, YEL);
  k.box(-h - 0.04, h + 0.04, g - 0.5, g + 0.32, -0.02, FT + 0.04, 0xc9c3b4); // zoccolo di pietra grigia, sotto la soglia
  k.box(-h - 0.2, h + 0.2, g + 8.2, g + 9.3, -0.1, FT + 0.3, TRIM);          // trabeazione con l'iscrizione
  k.box(-4, 4, g + 8.45, g + 9.0, FT + 0.3, FT + 0.34, 0xdcc9a0);
  k.box(-n2, n2, g + 9.3, g + 15.6, 0, FT, YEL);
  k.box(-n2 - 0.25, n2 + 0.25, g + 15.4, g + 15.9, -0.1, FT + 0.3, TRIM);
  k.pediment(-n2 - 0.4, n2 + 0.4, g + 15.9, g + 18.6, 0, FT + 0.2, TRIM);
  k.pediment(-n2 + 0.6, n2 - 0.6, g + 16.2, g + 18.0, FT + 0.2, FT + 0.25, YEL);
  k.box(-0.08, 0.08, g + 18.6, g + 20.4, FT / 2 - 0.08, FT / 2 + 0.08, 0x3b3b3b);   // croce
  k.box(-0.5, 0.5, g + 19.5, g + 19.66, FT / 2 - 0.08, FT / 2 + 0.08, 0x3b3b3b);
  for (const u of [-h + 0.4, -n2 + 0.4, n2 - 0.4, h - 0.4, -2.2, 2.2]) k.box(u - 0.35, u + 0.35, g + 0.4, g + 8.2, FT, FT + 0.25, TRIM); // lesene
  for (const u of [-n2 + 0.45, n2 - 0.45]) k.box(u - 0.35, u + 0.35, g + 9.3, g + 15.4, FT, FT + 0.25, TRIM);
  for (const s of [-1, 1]) { // volute di raccordo fra i due ordini
    const v = new THREE.CylinderGeometry(1.0, 1.0, 0.45, 12, 1, false, 0, Math.PI); v.rotateZ(Math.PI / 2); v.rotateY(s > 0 ? 0 : Math.PI);
    v.translate(s * (n2 + 0.9), g + 9.4, FT / 2); k.add(v, TRIM);
  }
  k.arch(0, 2.5, g + 0.4, g + 5.2, FT + 0.05, WOOD);                          // portale
  k.pediment(-2.0, 2.0, g + 5.5, g + 6.6, FT, FT + 0.35, TRIM);
  for (const s of [-1, 1]) { k.arch(s * 5.2, 1.5, g + 0.4, g + 3.6, FT + 0.05, WOOD); k.arch(s * 5.2, 1.7, g + 3.9, g + 5.3, FT + 0.05, TRIM, 0.05); }
  k.arch(0, 1.4, g + 10.5, g + 13.9, FT + 0.05, DARK);                        // finestrone dell'ordine superiore
  for (let i = 0; i < 4; i++) k.box(-3 + i * 0.1, 3 - i * 0.1, g + 0.28, g + 0.28 + 0.15 * (i + 1), FT, FT + 0.5 + (4 - i) * 0.35, 0xc9c0ae); // gradini sul basolato
  // chiosco di vetro e metallo a lato della facciata, sul piazzale. Nessuna insegna copiata.
  {
    const u0 = -h - 0.2, u1 = -4.8, w0 = FT + 0.15, w1 = FT + 3.5;
    const y0 = g + 0.28, y1 = y0 + 2.7;
    const METAL = 0x8d9396, GLASS = 0xd7e2e6, PANEL = 0xf3f1ec, BAND = 0x3a3632;
    k.box(u0, u1, y0, y0 + 0.1, w0, w1, PANEL);
    k.box(u0 + 0.08, u1 - 0.08, y0 + 0.1, y0 + 0.72, w1 - 0.12, w1 - 0.02, PANEL);
    k.box(u0 + 0.02, u0 + 0.1, y0 + 0.1, y0 + 0.72, w0 + 0.1, w1 - 0.1, PANEL);
    k.box(u1 - 0.1, u1 - 0.02, y0 + 0.1, y0 + 0.72, w0 + 0.1, w1 - 0.1, PANEL);
    k.box(u0 + 0.12, u1 - 0.5, y0 + 0.72, y1 - 0.42, w1 - 0.1, w1 - 0.02, GLASS);
    k.box(u1 - 1.15, u1 - 0.12, y0 + 0.72, y1 - 0.42, w1 - 0.1, w1 - 0.02, GLASS);
    k.box(u0 + 0.02, u0 + 0.08, y0 + 0.72, y1 - 0.42, w0 + 0.15, w1 - 0.15, GLASS);
    k.box(u1 - 0.08, u1 - 0.02, y0 + 0.72, y1 - 0.42, w0 + 0.15, w1 - 0.15, GLASS);
    for (const u of [u0 + 0.06, (u0 + u1) / 2, u1 - 0.06]) for (const w of [w0 + 0.06, w1 - 0.06]) k.box(u - 0.045, u + 0.045, y0 + 0.1, y1 - 0.28, w - 0.045, w + 0.045, METAL);
    k.box(u0 - 0.12, u1 + 0.12, y1 - 0.32, y1 + 0.06, w0 - 0.08, w1 + 0.22, BAND);
    k.box(u0 + 0.35, u1 - 0.7, y0 + 0.95, y0 + 1.08, w0 + 0.45, w0 + 1.35, 0x6b5644);
  }
  // corpo posteriore a tre piani (canonica) e campanile sull'angolo posteriore a +u (sud-ovest):
  // nella foto del fianco (Subbass1) facciata a sinistra, campanile a destra sul lato vicino
  k.box(-h, h, g - 0.5, g + 11, -L, -L + rear, YEL);
  k.box(-h - 0.2, h + 0.2, g + 10.8, g + 11.3, -L - 0.2, -L + rear + 0.2, TRIM);
  for (let u = -h + 1.5; u < h - 1; u += 2.8) for (const y of [g + 1.5, g + 5, g + 8.2]) k.box(u - 0.5, u + 0.5, y, y + 1.6, -L - 0.08, -L + 0.02, DARK);
  const cu = h - 2.4, cwn = -L + 2.4, T = 2.3; // campanile 4,6 m di lato
  k.box(cu - T, cu + T, g - 0.5, g + 22, cwn - T, cwn + T, YEL);
  k.box(cu - T - 0.2, cu + T + 0.2, g + 13.5, g + 13.9, cwn - T - 0.2, cwn + T + 0.2, TRIM);
  k.box(cu - T - 0.25, cu + T + 0.25, g + 21.6, g + 22.2, cwn - T - 0.25, cwn + T + 0.25, TRIM);
  // cella campanaria: quattro pilastri d'angolo, archi aperti, balaustra, cornice, cupola
  for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) k.box(cu + a * T - 0.55, cu + a * T + 0.55, g + 22.2, g + 26.8, cwn + c * T - 0.55, cwn + c * T + 0.55, YEL);
  k.box(cu - T + 0.5, cu + T - 0.5, g + 22.2, g + 22.9, cwn - T + 0.5, cwn + T - 0.5, 0xd8c79c);
  k.cyl(cu, cwn, g + 23.2, 1.2, 0.55, 0.35, 0x7b5a2e, 10);                       // campana
  k.box(cu - T - 0.35, cu + T + 0.35, g + 26.8, g + 27.5, cwn - T - 0.35, cwn + T + 0.35, TRIM);
  k.dome(cu, cwn, g + 27.5, T - 0.2, 2.2, LEAD);
  k.box(cu - 0.06, cu + 0.06, g + 29.6, g + 31.6, cwn - 0.06, cwn + 0.06, 0x3b3b3b);
  k.box(cu - 0.45, cu + 0.45, g + 30.8, g + 30.95, cwn - 0.06, cwn + 0.06, 0x3b3b3b);
  for (const [du, dw] of [[T + 0.02, 0], [0, T + 0.02]]) { // orologi su due lati
    const c = new THREE.CircleGeometry(0.75, 20);
    if (du) c.rotateY(Math.PI / 2);
    c.translate(cu + du, g + 19, cwn + dw); k.add(c, 0xf4f1ea);
  }
  return k.mesh('chiesa-madre');
}

// ---------------------------------------------------------------- Castello e ruderi
function ruinsAndCastle(lm, heightAt) {
  const k = new Kit(0, 0, 0, 1); // riferimento del mondo
  const STONE = 0xa99f8d, RUIN = 0x9b927f, DARK = 0x2c2a26;
  const wall = (ax, az, bx, bz, y0a, y0b, h, t, hex) => {
    const L = Math.hypot(bx - ax, bz - az); if (L < 0.05) return;
    const nx = (-(bz - az) / L) * t / 2, nz = ((bx - ax) / L) * t / 2;
    const P = [[ax + nx, az + nz], [bx + nx, bz + nz], [bx - nx, bz - nz], [ax - nx, az - nz]];
    const y0 = [y0a, y0b, y0b, y0a];
    const pos = [];
    const v = (i, top) => [P[i][0], y0[i] + (top ? h : 0), P[i][1]];
    const q = (a, b, c, d) => pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    q(v(0, 0), v(1, 0), v(1, 1), v(0, 1)); q(v(2, 0), v(3, 0), v(3, 1), v(2, 1)); q(v(0, 1), v(1, 1), v(2, 1), v(3, 1));
    q(v(1, 0), v(2, 0), v(2, 1), v(1, 1)); q(v(3, 0), v(0, 0), v(0, 1), v(3, 1));
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    k.add(geo, hex);
  };
  for (const r of lm.ruins) {
    const castle = r.castle, h = castle ? 8 : r.castleArea ? 5.5 : 2.8, t = castle ? 0.9 : 0.6;
    for (let i = 2; i < r.p.length; i += 2) {
      const ax = r.p[i - 2], az = r.p[i - 1], bx = r.p[i], bz = r.p[i + 1];
      if (castle && Math.hypot(bx - ax, bz - az) < 2.5) continue; // gli archi delle torri li fa il cilindro
      wall(ax, az, bx, bz, heightAt(ax, az) - 0.4, heightAt(bx, bz) - 0.4, h + 0.4, t, castle ? STONE : RUIN);
      if (!castle) continue;
      // vani vuoti delle finestre (due ordini) e merli a punta sul coronamento
      const L = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / L, tz = (bz - az) / L, nx = -tz, nz = tx;
      for (let s = 2.5; s < L - 2; s += 4.8) for (const [y0, y1] of [[1.6, 3.4], [4.8, 6.6]]) {
        const cx = ax + tx * s, cz = az + tz * s, gy = heightAt(cx, cz);
        for (const sd of [1, -1]) {
          const px = cx + nx * sd * 0.47, pz = cz + nz * sd * 0.47;
          const geo = new THREE.PlaneGeometry(1.3, y1 - y0); geo.rotateY(Math.atan2(nx * sd, nz * sd)); geo.translate(px, gy + (y0 + y1) / 2, pz); k.add(geo, DARK);
        }
      }
      for (let s = 0.6; s < L - 0.3; s += 1.3) {
        const cx = ax + tx * s, cz = az + tz * s;
        const m = new THREE.ConeGeometry(0.32, 0.9, 4); m.rotateY(Math.PI / 4 + Math.atan2(tx, tz)); m.translate(cx, heightAt(cx, cz) + 8.45, cz); k.add(m, STONE);
      }
    }
  }
  if (lm.castle) {
    for (const [x, z, r] of lm.castle.towers) {
      const y = heightAt(x, z) - 0.4;
      k.cyl(x, z, y, 9.4, r, r * 0.97, STONE, 20);
      k.dome(x, z, y + 9.4, r * 0.93, r * 0.6, 0xc8c0b0);
      const lan = new THREE.SphereGeometry(0.22, 8, 6); lan.translate(x, y + 9.4 + r * 0.6 + 0.15, z); k.add(lan, 0xc8c0b0);
      for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2; const m = new THREE.ConeGeometry(0.28, 0.8, 4); m.translate(x + Math.sin(a) * r, y + 9.7, z + Math.cos(a) * r); k.add(m, STONE); }
      for (const [dy, a] of [[3.2, 0.8], [6.4, 2.4]]) { const geo = new THREE.PlaneGeometry(0.8, 1.2); geo.rotateY(a); geo.translate(x + Math.sin(a) * (r + 0.02), y + dy, z + Math.cos(a) * (r + 0.02)); k.add(geo, DARK); }
    }
    // cappella di San Giuseppe (tetto a capanna in coppi) e porta ad arco merlata del castello
    if (lm.castle.chapel) {
      const [x, z] = lm.castle.chapel, y = heightAt(x, z) - 0.3;
      const c = new Kit(x, z, 0.12, 1); // asse del castello, leggermente ruotato (tracciato DBTR)
      c.box(-5.2, 5.2, y, y + 6.5, -4, 4, 0xd9cdb4);
      c.gable(-5.4, 5.4, y + 6.5, y + 8.6, -4.2, 4.2, 0xb46a44);
      c.box(-0.6, 0.6, y + 3.5, y + 4.8, 4, 4.06, DARK); c.box(3.2, 4.2, y + 3.5, y + 4.8, 4, 4.06, DARK);
      // porta del castello a ovest della cappella: muro con arco e merli quadrati
      c.box(-13.2, -5.2, y, y + 6, 3.4, 4.6, STONE);
      c.arch(-9.2, 3.2, y, y + 4.4, 4.62, DARK, 0.1);
      for (let u = -12.7; u < -5.6; u += 1.5) c.box(u, u + 0.9, y + 6, y + 6.9, 3.5, 4.5, STONE);
      k.parts.push(...c.parts);
    }
  }
  return k.mesh('castello-ruderi');
}

export function buildLandmarks(model, heightAt) {
  const group = new THREE.Group(); group.name = 'landmarks';
  const lm = model.landmarks || {};
  for (const b of model.buildings) {
    if (b.lm === 'municipio') group.add(municipio(b, lm.fountain));
    if (b.lm === 'chiesa') group.add(chiesa(b));
  }
  if (lm.fountain) group.add(fountain(lm.fountain));
  if (lm.ruins?.length) group.add(ruinsAndCastle(lm, heightAt));
  group.add(buildPlazaBuildings(model));
  group.add(buildPlazaDressing(heightAt));
  return group;
}
