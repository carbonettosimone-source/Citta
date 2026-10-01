/**
 * Sfondo lontano: il litorale da Cefalù a Capo d'Orlando con Madonie e Nebrodi, e le isole Eolie
 * nella posizione vera (scripts/fetch-background.mjs: MDT 2013 e ortofoto 2022 SITR, bassa risoluzione).
 *
 * Si disegna in una passata a parte, PRIMA del paese, con una camera gemella che ha near/far da
 * paesaggio (50 m – 250 km): il paese poi si disegna sopra con la sua precisione di profondità
 * (0,5 m – 12 km), senza z-fighting né logarithmic depth (che romperebbe il polygonOffset delle strade).
 * Dentro il riquadro del paese lo sfondo si abbassa di 60 m: lì comanda sempre il modello fine.
 *
 * Curvatura terrestre con rifrazione standard (k = 0,13): a 50 km il mare "nasconde" ~170 m, per
 * questo dal paese delle Eolie si vedono solo le cime sopra l'orizzonte.
 */
import * as THREE from 'three';

// Stessa curva di prima (d² / 1,465e7, d in metri), ma in chilometri: in mediump — three la
// sceglie se il fragment del telefono non ha highp — d² in metri supera 65504 già a ~250 m e
// diventa +inf, quindi lo sfondo finisce sotto il mondo e resta solo il cielo.
export const CURVE_GLSL = 'vec2 cd = (wp.xz - cameraPosition.xz) * 0.001; wp.y -= dot(cd, cd) * 0.0682594;';
const REGIONS = ['litorale', 'costa', 'alicudi', 'filicudi', 'salina', 'lipari', 'vulcano', 'panarea', 'stromboli'];
const NAMES = { alicudi: 'Alicudi', filicudi: 'Filicudi', salina: 'Salina', lipari: 'Lipari', vulcano: 'Vulcano', panarea: 'Panarea', stromboli: 'Stromboli' };
// paesi del litorale (UTM 33N): etichette da lontano
const TOWNS = [['Cefalù', 414231, 4210537, 150], ["Capo d'Orlando", 477712, 4223254, 60]];
// lato di un pezzo, in celle: (160+1)² vertici restano sotto 65535, così l'indice è a 16 bit
// (WebGL1 senza OES_element_index_uint non disegna il litorale intero, 300 mila vertici)
const CHUNK = 160;
// il litorale e l'anello attorno al paese hanno il rilievo ombreggiato; le isole restano come sono
const HILLSHADE = new Set(['litorale', 'costa']);
const SUN = new THREE.Vector3(0.34, 0.62, 0.7).normalize(); // sud-est, come la luce dell'ortofoto (x est, y su, z sud)

/** three abbassa anche il vertex shader a mediump se manca highp nel fragment. Il vertice lo ha sempre. */
export function forceHighpVertex(shader) {
  shader.vertexShader = shader.vertexShader
    .replace(/precision mediump float/g, 'precision highp float')
    .replace(/precision mediump int/g, 'precision highp int');
}

function curvedBasic(map, vertexColors = false) {
  const m = new THREE.MeshBasicMaterial({ map, vertexColors });
  m.onBeforeCompile = (sh) => {
    forceHighpVertex(sh);
    sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', `
      vec4 wp = modelMatrix * vec4(transformed, 1.0);
      ${CURVE_GLSL}
      vec4 mvPosition = viewMatrix * wp;
      gl_Position = projectionMatrix * mvPosition;`);
  };
  return m;
}

/**
 * Quote di una regione pronte da disegnare: il mare scende dolcemente dalla costa (-0,28 m per metro,
 * fino a -30) invece di un salto netto a -30. Con il salto la riva incrociava il livello del mare a
 * denti di sega lungo i bordi delle celle (100 m); con la rampa l'incrocio cade dove le quote dicono.
 */
function shapeHeights(raw, W, H, step) {
  const h = new Float32Array(W * H), d = new Float32Array(W * H).fill(1e9);
  for (let k = 0; k < h.length; k++) { if (raw[k] > -30) { h[k] = raw[k]; d[k] = 0; } }
  const dg = step * Math.SQRT2;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const k = y * W + x; let v = d[k];
    if (x > 0) v = Math.min(v, d[k - 1] + step);
    if (y > 0) { v = Math.min(v, d[k - W] + step); if (x > 0) v = Math.min(v, d[k - W - 1] + dg); if (x < W - 1) v = Math.min(v, d[k - W + 1] + dg); }
    d[k] = v;
  }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
    const k = y * W + x; let v = d[k];
    if (x < W - 1) v = Math.min(v, d[k + 1] + step);
    if (y < H - 1) { v = Math.min(v, d[k + W] + step); if (x < W - 1) v = Math.min(v, d[k + W + 1] + dg); if (x > 0) v = Math.min(v, d[k + W - 1] + dg); }
    d[k] = v;
  }
  for (let k = 0; k < h.length; k++) if (raw[k] <= -30) h[k] = -Math.min(30, 0.28 * d[k]);
  return h;
}

/** ombreggiatura del rilievo per vertice: 1 sul piano, più chiaro verso il sole, più scuro in ombra */
function hillshade(h, W, H, step, amount = 0.5) {
  const col = new Float32Array(W * H * 3), flat = SUN.y;
  for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) {
    const hl = h[r * W + Math.max(0, c - 1)], hr = h[r * W + Math.min(W - 1, c + 1)];
    const hn = h[Math.max(0, r - 1) * W + c], hs = h[Math.min(H - 1, r + 1) * W + c];
    // la quota del mare non fa rilievo
    const dx = (Math.max(hr, 0) - Math.max(hl, 0)) / (2 * step), dz = (Math.max(hs, 0) - Math.max(hn, 0)) / (2 * step);
    const inv = 1 / Math.hypot(dx, 1, dz);
    const lit = (-dx * SUN.x + SUN.y - dz * SUN.z) * inv; // normale = (-dx, 1, -dz) / |n|, z verso sud
    const v = Math.min(1.3, Math.max(0.6, 1 + amount * (lit - flat)));
    const k = (r * W + c) * 3; col[k] = col[k + 1] = col[k + 2] = v;
  }
  return col;
}

/** inner: riquadro del paese in coordinate locali {x0, z0, x1, z1} */
export async function buildBackground(origin, inner) {
  const [OX, OY] = origin;
  const group = new THREE.Group(); group.name = 'sfondo';
  const labels = [];
  const loader = new THREE.TextureLoader();
  const loaded = await Promise.all(REGIONS.map(async (name) => {
    const meta = await fetch(`data/bg/${name}.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null);
    if (!meta) return null;
    const tex = await loader.loadAsync(`data/bg/${name}.jpg`).catch(() => null);
    if (!tex) return null;
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    const raw = atob(meta.data), bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    return { name, meta, tex, raw: new Int16Array(bytes.buffer) };
  }));
  const regions = new Map(loaded.filter(Boolean).map((r) => [r.name, r]));
  for (const r of regions.values()) r.h = shapeHeights(r.raw, r.meta.width, r.meta.height, r.meta.step);

  // anello fine attorno al paese: rettangolo in coordinate locali, e il litorale grosso che gli passa sotto
  const ring = regions.get('costa');
  const rect = ring && {
    x0: ring.meta.xmin - OX, x1: ring.meta.xmin + (ring.meta.width - 1) * ring.meta.step - OX,
    z0: OY - ring.meta.ymax, z1: OY - ring.meta.ymax + (ring.meta.height - 1) * ring.meta.step,
  };
  const base = regions.get('litorale');
  /** quota del litorale grosso (bilineare) in coordinate locali: l'anello si raccorda ad essa sui bordi */
  const baseAt = (X, Z) => {
    const { width: W, height: H, step, xmin, ymax } = base.meta;
    const c = (X + OX - xmin) / step, r = (ymax - (OY - Z)) / step;
    const c0 = Math.max(0, Math.min(W - 2, Math.floor(c))), r0 = Math.max(0, Math.min(H - 2, Math.floor(r)));
    const fx = Math.min(1, Math.max(0, c - c0)), fy = Math.min(1, Math.max(0, r - r0)), i = r0 * W + c0, h = base.h;
    return h[i] * (1 - fx) * (1 - fy) + h[i + 1] * fx * (1 - fy) + h[i + W] * (1 - fx) * fy + h[i + W + 1] * fx * fy;
  };
  const EDGE = 240; // m: fascia in cui l'anello sfuma verso la quota del litorale grosso

  for (const { name, meta, tex, h } of regions.values()) {
    const { width: W, height: H, step } = meta;
    const shade = HILLSHADE.has(name) ? hillshade(h, W, H, step, name === 'costa' ? 0.55 : 0.45) : null;
    const mat = curvedBasic(tex, !!shade);
    let peak = { v: -1 };
    for (let r0 = 0; r0 < H - 1; r0 += CHUNK) for (let c0 = 0; c0 < W - 1; c0 += CHUNK) {
      const r1 = Math.min(H - 1, r0 + CHUNK), c1 = Math.min(W - 1, c0 + CHUNK);
      const rows = r1 - r0 + 1, cols = c1 - c0 + 1;
      const pos = new Float32Array(rows * cols * 3), uv = new Float32Array(rows * cols * 2), colr = shade ? new Float32Array(rows * cols * 3) : null;
      for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
        const k = r * W + c, i = (r - r0) * cols + (c - c0);
        const X = meta.xmin + c * step - OX, Z = OY - (meta.ymax - r * step);
        let y = h[k];
        if (name === 'costa') {
          // sui bordi l'anello torna alla quota del litorale grosso: niente gradino fra i due
          const e = Math.min(X - rect.x0, rect.x1 - X, Z - rect.z0, rect.z1 - Z);
          if (e < EDGE) { const t = Math.max(0, e) / EDGE, w = t * t * (3 - 2 * t); y = baseAt(X, Z) * (1 - w) + y * w; }
        } else if (name === 'litorale' && rect && X > rect.x0 + 100 && X < rect.x1 - 100 && Z > rect.z0 + 100 && Z < rect.z1 - 100) {
          y -= 90; // sotto l'anello: lì comanda lui
        }
        if (X > inner.x0 + 30 && X < inner.x1 - 30 && Z > inner.z0 + 30 && Z < inner.z1 - 30) y -= 60;
        pos[i * 3] = X; pos[i * 3 + 1] = y; pos[i * 3 + 2] = Z;
        uv[i * 2] = (c + 0.5) / W; uv[i * 2 + 1] = 1 - (r + 0.5) / H;
        if (colr) colr.set(shade.subarray(k * 3, k * 3 + 3), i * 3);
        if (h[k] > peak.v) peak = { v: h[k], X, Z };
      }
      // solo i triangoli con almeno un vertice sopra il mare: il resto lo copre la superficie del mare
      const idx = [];
      for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) {
        const a = r * W + c, b = a + 1, d = a + W, e = d + 1;
        // sotto ~-2,4 m (ormai >8 m dalla riva) l'acqua è opaca: la foto del fondale a gradini di cella non serve
        if (h[a] < -2.4 && h[b] < -2.4 && h[d] < -2.4 && h[e] < -2.4) continue;
        const ia = (r - r0) * cols + (c - c0), ib = ia + 1, id = ia + cols, ie = id + 1;
        idx.push(ia, id, ib, ib, id, ie);
      }
      if (!idx.length) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      if (colr) g.setAttribute('color', new THREE.BufferAttribute(colr, 3));
      g.setIndex(idx);
      const mesh = new THREE.Mesh(g, mat);
      mesh.name = `sfondo-${name}`; mesh.frustumCulled = false; // la curvatura sposta i vertici: niente culling
      group.add(mesh);
    }
    if (NAMES[name] && peak.v > 0) labels.push({ name: NAMES[name], x: peak.X, y: peak.v, z: peak.Z });
  }
  for (const [name, x, y, top] of TOWNS) labels.push({ name, x: x - OX, y: top, z: OY - y });
  return { group, labels };
}
