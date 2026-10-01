/**
 * Foschia direzionale. La foschia di three.js ha un solo colore: al tramonto non basta. Qui il colore
 * dipende dalla direzione di vista rispetto al sole: caldo (oro, arancio, rosa) dalla parte del sole,
 * freddo (viola, magenta) dalla parte opposta — la "cintura di Venere". Vale per tutti i materiali
 * con la foschia (terreno, edifici, alberi, sfondo, mare), senza toccarne gli shader.
 *
 * Come: si riscrivono i quattro pezzi `fog_*` di three e, tramite un accessor su Material.prototype,
 * a ogni materiale si aggiungono le uniform condivise prima della compilazione. La chiave della cache
 * dei programmi resta quella dell'onBeforeCompile originale del materiale.
 * Importare questo modulo prima di creare qualunque materiale.
 */
import * as THREE from 'three';

export const FOG = {
  sun: { value: new THREE.Vector3(0, 1, 0) },     // direzione del sole (mondo)
  warm: { value: new THREE.Color(1, 0.6, 0.35) }, // colore dalla parte del sole
  cool: { value: new THREE.Color(0.5, 0.3, 0.6) },// colore dalla parte opposta
  amt: { value: 0 },                              // 0 = foschia normale, 1 = piena
};

const C = THREE.ShaderChunk;
if (!C.fog_pars_fragment.includes('vFogDirW')) {
  C.fog_pars_vertex = C.fog_pars_vertex.replace('varying float vFogDepth;', 'varying float vFogDepth;\n\tvarying vec3 vFogDirW;');
  C.fog_vertex = C.fog_vertex.replace('vFogDepth = - mvPosition.z;', 'vFogDepth = - mvPosition.z;\n\tvFogDirW = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz;');
  C.fog_pars_fragment = C.fog_pars_fragment.replace('varying float vFogDepth;', 'varying float vFogDepth;\n\tvarying vec3 vFogDirW;\n\tuniform vec3 uFogSun; uniform vec3 uFogWarm; uniform vec3 uFogCool; uniform float uFogAmt;');
  C.fog_fragment = C.fog_fragment.replace('gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );', `
	vec3 fd = normalize(vFogDirW);
	float fs = dot(fd, uFogSun), fsp = max(fs, 0.0);
	float low = exp(-max(fd.y, 0.0) * 4.5);          // stessa formula del cielo (daylight.js): all'orizzonte si fondono
	vec3 fogC = mix(fogColor, uFogWarm, clamp(uFogAmt * (pow(fsp, 4.0) * 0.55 + pow(fsp, 14.0) * 0.5) * (0.3 + 0.7 * low), 0.0, 1.0));
	fogC = mix(fogC, uFogCool, clamp(uFogAmt * 0.7 * pow(max(-fs, 0.0), 1.3) * exp(-max(fd.y, 0.0) * 3.2), 0.0, 1.0));
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogC, fogFactor );`);
}

// Accessor: ogni materiale riceve le uniform della foschia, poi il suo onBeforeCompile vero
const proto = THREE.Material.prototype;
const base = Object.getOwnPropertyDescriptor(proto, 'onBeforeCompile').value;
const inject = (shader) => {
  const u = shader.uniforms;
  if (u) { u.uFogSun = FOG.sun; u.uFogWarm = FOG.warm; u.uFogCool = FOG.cool; u.uFogAmt = FOG.amt; }
};
const DEFAULT = function (shader, renderer) { inject(shader); base.call(this, shader, renderer); };
DEFAULT.toString = () => base.toString();
Object.defineProperty(proto, 'onBeforeCompile', {
  configurable: true,
  get() { return this._obc || DEFAULT; },
  set(fn) {
    if (!fn) { this._obc = null; return; }
    const w = function (shader, renderer) { inject(shader); fn.call(this, shader, renderer); };
    w.toString = () => fn.toString();
    this._obc = w;
  },
});
