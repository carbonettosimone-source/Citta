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
const REGIONS = ['litorale', 'alicudi', 'filicudi', 'salina', 'lipari', 'vulcano', 'panarea', 'stromboli'];
const NAMES = { alicudi: 'Alicudi', filicudi: 'Filicudi', salina: 'Salina', lipari: 'Lipari', vulcano: 'Vulcano', panarea: 'Panarea', stromboli: 'Stromboli' };
// paesi del litorale (UTM 33N): etichette da lontano
const TOWNS = [['Cefalù', 414231, 4210537, 150], ["Capo d'Orlando", 477712, 4223254, 60]];
// lato di un pezzo, in celle: (160+1)² vertici restano sotto 65535, così l'indice è a 16 bit
// (WebGL1 senza OES_element_index_uint non disegna il litorale intero, 300 mila vertici)
const CHUNK = 160;

/** three abbassa anche il vertex shader a mediump se manca highp nel fragment. Il vertice lo ha sempre. */
export function forceHighpVertex(shader) {
  shader.vertexShader = shader.vertexShader
    .replace(/precision mediump float/g, 'precision highp float')
    .replace(/precision mediump int/g, 'precision highp int');
}

function curvedBasic(map) {
  const m = new THREE.MeshBasicMaterial({ map });
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

/** inner: riquadro del paese in coordinate locali {x0, z0, x1, z1} */
export async function buildBackground(origin, inner) {
  const [OX, OY] = origin;
  const group = new THREE.Group(); group.name = 'sfondo';
  const labels = [];
  const loader = new THREE.TextureLoader();
  await Promise.all(REGIONS.map(async (name) => {
    const meta = await fetch(`data/bg/${name}.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null);
    if (!meta) return;
    const tex = await loader.loadAsync(`data/bg/${name}.jpg`).catch(() => null);
    if (!tex) return;
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const raw = atob(meta.data), bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    const h = new Int16Array(bytes.buffer);
    const { width: W, height: H, step } = meta;
    const mat = curvedBasic(tex);
    let peak = { v: -1 };
    for (let r0 = 0; r0 < H - 1; r0 += CHUNK) for (let c0 = 0; c0 < W - 1; c0 += CHUNK) {
      const r1 = Math.min(H - 1, r0 + CHUNK), c1 = Math.min(W - 1, c0 + CHUNK);
      const rows = r1 - r0 + 1, cols = c1 - c0 + 1;
      const pos = new Float32Array(rows * cols * 3), uv = new Float32Array(rows * cols * 2);
      for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
        const k = r * W + c, i = (r - r0) * cols + (c - c0);
        const X = meta.xmin + c * step - OX, Z = OY - (meta.ymax - r * step);
        let y = h[k];
        if (X > inner.x0 + 30 && X < inner.x1 - 30 && Z > inner.z0 + 30 && Z < inner.z1 - 30) y -= 60;
        pos[i * 3] = X; pos[i * 3 + 1] = y; pos[i * 3 + 2] = Z;
        uv[i * 2] = (c + 0.5) / W; uv[i * 2 + 1] = 1 - (r + 0.5) / H;
        if (h[k] > peak.v) peak = { v: h[k], X, Z };
      }
      // solo i triangoli con almeno un vertice sopra il mare: il resto lo copre la superficie del mare
      const idx = [];
      for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) {
        const a = r * W + c, b = a + 1, d = a + W, e = d + 1;
        if (h[a] < 0 && h[b] < 0 && h[d] < 0 && h[e] < 0) continue;
        const ia = (r - r0) * cols + (c - c0), ib = ia + 1, id = ia + cols, ie = id + 1;
        idx.push(ia, id, ib, ib, id, ie);
      }
      if (!idx.length) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      g.setIndex(idx);
      const mesh = new THREE.Mesh(g, mat);
      mesh.name = `sfondo-${name}`; mesh.frustumCulled = false; // la curvatura sposta i vertici: niente culling
      group.add(mesh);
    }
    if (NAMES[name] && peak.v > 0) labels.push({ name: NAMES[name], x: peak.X, y: peak.v, z: peak.Z });
  }));
  for (const [name, x, y, top] of TOWNS) labels.push({ name, x: x - OX, y: top, z: OY - y });
  return { group, labels };
}
