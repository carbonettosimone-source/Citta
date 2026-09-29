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

export const CURVE_GLSL = 'vec2 cdv = wp.xz - cameraPosition.xz; wp.y -= dot(cdv, cdv) / 1.465e7;';
const REGIONS = ['litorale', 'alicudi', 'filicudi', 'salina', 'lipari', 'vulcano', 'panarea', 'stromboli'];
const NAMES = { alicudi: 'Alicudi', filicudi: 'Filicudi', salina: 'Salina', lipari: 'Lipari', vulcano: 'Vulcano', panarea: 'Panarea', stromboli: 'Stromboli' };
// paesi del litorale (UTM 33N): etichette da lontano
const TOWNS = [['Cefalù', 414231, 4210537, 150], ["Capo d'Orlando", 477712, 4223254, 60]];

function curvedBasic(map) {
  const m = new THREE.MeshBasicMaterial({ map });
  m.onBeforeCompile = (sh) => {
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
    const pos = new Float32Array(W * H * 3), uv = new Float32Array(W * H * 2);
    let peak = { v: -1 };
    for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) {
      const k = r * W + c, X = meta.xmin + c * step - OX, Z = OY - (meta.ymax - r * step);
      let y = h[k];
      if (X > inner.x0 + 30 && X < inner.x1 - 30 && Z > inner.z0 + 30 && Z < inner.z1 - 30) y -= 60;
      pos.set([X, y, Z], k * 3);
      uv.set([(c + 0.5) / W, 1 - (r + 0.5) / H], k * 2);
      if (h[k] > peak.v) peak = { v: h[k], X, Z };
    }
    // solo i triangoli con almeno un vertice sopra il mare: il resto lo copre la superficie del mare
    const idx = [];
    for (let r = 0; r < H - 1; r++) for (let c = 0; c < W - 1; c++) {
      const a = r * W + c, b = a + 1, d = a + W, e = d + 1;
      if (h[a] < 0 && h[b] < 0 && h[d] < 0 && h[e] < 0) continue;
      idx.push(a, d, b, b, d, e);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, curvedBasic(tex));
    mesh.name = `sfondo-${name}`; mesh.frustumCulled = false; // la curvatura sposta i vertici: niente culling
    group.add(mesh);
    if (NAMES[name]) labels.push({ name: NAMES[name], x: peak.X, y: peak.v, z: peak.Z });
  }));
  for (const [name, x, y, top] of TOWNS) labels.push({ name, x: x - OX, y: top, z: OY - y });
  return { group, labels };
}
