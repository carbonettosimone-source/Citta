/**
 * Materiale per le superfici vestite con l'ortofoto (suolo e tetti). La foto ha le ombre del volo
 * "cotte" dentro: viste da vicino diventano macchie scure e bluastre sulla strada. Qui le ombre
 * profonde vengono schiarite e desaturate (niente dominante blu), la luce resta quella della foto.
 *
 * Per il suolo (`nearNeutral`): vicino a chi guarda (entro ~30–90 m) la foto aerea è ingrandita
 * decine di volte e il suo colore medio (ombre + auto + tetti inclinati) vira al malva; lì sfuma
 * verso un grigio caldo da asfalto/pietra, conservando la luminosità della foto. Da lontano resta
 * l'ortofoto pura.
 */
import * as THREE from 'three';

export function orthoMaterial(map, { nearNeutral = false } = {}) {
  const m = new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide });
  // il suolo cede nel depth buffer: strade, marciapiedi e strisce disegnati sopra vincono sempre
  if (nearNeutral) { m.polygonOffset = true; m.polygonOffsetFactor = 4; m.polygonOffsetUnits = 8; }
  m.onBeforeCompile = (sh) => {
    if (nearNeutral) {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
        .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;');
    }
    sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
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
        ${nearNeutral ? `
        float near = 1.0 - smoothstep(30.0, 90.0, distance(vWPos, cameraPosition));
        float lum = dot(diffuseColor.rgb, vec3(0.3333));
        vec3 stone = vec3(max(lum, 0.10)) * vec3(1.05, 1.0, 0.92);
        diffuseColor.rgb = mix(diffuseColor.rgb, stone, near * 0.7);` : ''}
      }`);
  };
  return m;
}
