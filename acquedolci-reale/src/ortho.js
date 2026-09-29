/**
 * Materiale per le superfici vestite con l'ortofoto (suolo e tetti). La foto ha le ombre del volo
 * "cotte" dentro: viste da vicino diventano macchie scure e bluastre sulla strada. Qui le ombre
 * profonde vengono schiarite e desaturate (niente dominante blu), la luce resta quella della foto.
 *
 * Per il suolo (`nearNeutral`): vicino a chi guarda la foto aerea è ingrandita decine di volte;
 * lì si aggiunge la grana del materiale vero secondo la copertura del suolo (ground.js).
 * Da lontano resta l'ortofoto pura.
 */
import * as THREE from 'three';
import { GROUND, LC_GLSL } from './ground.js';

/** finestra di ortofoto a 25 cm condivisa da tutti i materiali (ortho-hr.js): rect = X0, Y0, lato, attiva */
const blank = new THREE.DataTexture(new Uint8Array(4), 1, 1); blank.needsUpdate = true;
export const HR = { map: { value: blank }, rect: { value: new THREE.Vector4(0, 0, 1, 0) } };

/** GLSL: lineare ↔ CIELAB (D65) per ritoccare la tinta dei coppi */
const LAB = `
float labF(float t) { return t > 0.008856 ? pow(t, 1.0 / 3.0) : 7.787 * t + 16.0 / 116.0; }
float labFi(float t) { return t > 0.206893 ? t * t * t : (t - 16.0 / 116.0) / 7.787; }
vec3 rgb2lab(vec3 c) {
  vec3 x = mat3(0.4124, 0.2126, 0.0193, 0.3576, 0.7152, 0.1192, 0.1805, 0.0722, 0.9505) * c / vec3(0.95047, 1.0, 1.08883);
  vec3 f = vec3(labF(x.x), labF(x.y), labF(x.z));
  return vec3(116.0 * f.y - 16.0, 500.0 * (f.x - f.y), 200.0 * (f.y - f.z));
}
vec3 lab2rgb(vec3 l) {
  float fy = (l.x + 16.0) / 116.0;
  vec3 x = vec3(labFi(fy + l.y / 500.0) * 0.95047, labFi(fy), labFi(fy - l.z / 200.0) * 1.08883);
  return max(mat3(3.2406, -0.9689, 0.0557, -1.5372, 1.8758, -0.2040, -0.4986, 0.0415, 1.0570) * x, 0.0);
}`;

const DETAIL_UNI = `
uniform sampler2D pebMap; uniform sampler2D grsMap; uniform sampler2D dryMap;
uniform vec3 pebMean; uniform vec3 grsMean; uniform vec3 dryMean;`;

export function orthoMaterial(map, { nearNeutral = false, roof = false } = {}) {
  const m = new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide });
  // il suolo cede nel depth buffer: strade, marciapiedi e strisce disegnati sopra vincono sempre
  if (nearNeutral) { m.polygonOffset = true; m.polygonOffsetFactor = 4; m.polygonOffsetUnits = 8; }
  // stesso sorgente di onBeforeCompile, shader diversi: la chiave li tiene separati nella cache di three
  m.customProgramCacheKey = () => `ortho-${nearNeutral}-${roof}`;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.hrMap = HR.map; sh.uniforms.hrRect = HR.rect;
    if (nearNeutral) Object.assign(sh.uniforms, GROUND);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform sampler2D hrMap;\nuniform vec4 hrRect;' + (roof ? LAB : '') + (nearNeutral ? LC_GLSL + DETAIL_UNI : ''));
    sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
      // la tinta dell'ora del giorno (colore del materiale, daylight.js) si toglie qui e si rimette
      // in fondo: i ritocchi dell'ortofoto lavorano sempre sulla foto di giorno
      diffuseColor.rgb /= max(diffuse, vec3(1e-3));
      {
        // dentro la finestra a 25 cm la foto fine sostituisce quella a 0,5 m, con i bordi sfumati
        vec2 hu = vec2(vWPos.x - hrRect.x, hrRect.y - vWPos.z) / hrRect.z;
        vec2 e = min(hu, 1.0 - hu);
        float inside = hrRect.w * smoothstep(0.0, 0.02, min(e.x, e.y));
        if (inside > 0.0) {
          vec4 h = texture2D(hrMap, hu);
          // le tessere mancanti sono trasparenti (nero, alfa 0): miscela premoltiplicata, così il
          // bordo filtrato fra tessera e vuoto non fa una riga scura
          diffuseColor.rgb = diffuseColor.rgb * (1.0 - inside * h.a) + h.rgb * inside;
        }
      }
      {
        // spazio lineare: 0.22 ≈ grigio sRGB 0.51, 0.02 ≈ sRGB 0.15
        float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        float shade = smoothstep(0.22, 0.02, l);
        // l'ombra dell'ortofoto è bluastra (cielo): la si porta verso un grigio caldo neutro
        float blue = clamp((diffuseColor.b - diffuseColor.r) * 6.0, 0.0, 1.0);
        vec3 lifted = diffuseColor.rgb * 2.2 + 0.02;
        float g = dot(lifted, vec3(0.3333));
        lifted = mix(lifted, vec3(g) * vec3(1.03, 1.0, 0.95), 0.35 + 0.5 * blue);
        diffuseColor.rgb = mix(diffuseColor.rgb, lifted, shade * 0.85);
        ${roof ? `
        // coppi: nelle foto dal vero sono ~1,4 volte più saturi e più aranci che nell'ortofoto
        // (a*/b* 23/25 contro 18/16, photo-palette): si ritocca solo la tinta dei pixel già caldi
        vec3 lab = rgb2lab(diffuseColor.rgb);
        float warm = smoothstep(4.0, 12.0, length(lab.yz)) * step(0.0, lab.y) * step(0.0, lab.z);
        lab.yz *= mix(vec2(1.0), vec2(1.3, 1.55), warm);
        diffuseColor.rgb = lab2rgb(lab);` : ''}
        ${nearNeutral ? `
        // da vicino: grana del materiale vero secondo la copertura del suolo (ground.js)
        float dist = distance(vWPos, cameraPosition);
        float near = 1.0 - smoothstep(60.0, 260.0, dist);
        if (near > 0.0) {
          vec4 lc = landcover(vWPos.xz);
          float wSea = lc.x > 0.02 ? 1.0 : 0.0;
          float wBeach = max(lc.y, 0.0), wGreen = max(lc.z, 0.0) * (1.0 - wBeach);
          float wDry = clamp(1.0 - wBeach - wGreen - wSea, 0.0, 1.0);
          vec3 peb = texture2D(pebMap, vWPos.xz / 2.2).rgb;
          vec3 grs = texture2D(grsMap, vWPos.xz / 1.6).rgb / grsMean;
          vec3 dry = texture2D(dryMap, vWPos.xz / 2.8).rgb / dryMean;
          vec3 base = diffuseColor.rgb;
          // spiaggia: i ciottoli prendono la luminosità della foto ma hanno colore e forma propri
          vec3 beach = peb * (dot(base, vec3(0.333)) / max(dot(pebMean, vec3(0.333)), 0.01));
          vec3 c = base * mix(vec3(1.0), dry, 0.75 * wDry) * mix(vec3(1.0), grs, 0.85 * wGreen);
          c = mix(c, beach, 0.8 * wBeach);
          diffuseColor.rgb = mix(base, c, near * (1.0 - wSea));
        }` : ''}
      }
      diffuseColor.rgb *= diffuse;`);
  };
  return m;
}
