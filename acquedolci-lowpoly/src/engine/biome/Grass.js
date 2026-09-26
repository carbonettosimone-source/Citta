/**
 * Erba "intelligente": ciuffi istanziati (1 draw call) generati solo attorno al punto di interesse.
 * - Dove: strato `green` del livello (densità piena), terreno naturale non ripido e non marino
 *   (densità ridotta, più verde dove fa più fresco), ciuffi rari nei cortili (erbacce), mai su
 *   strade/marciapiedi. Deterministica per cella: tornando in un posto l'erba è la stessa.
 * - Vento e piegamento al passaggio del giocatore nel vertex shader (costo CPU nullo).
 * - Rigenerata solo quando il centro si sposta di oltre 6 m.
 */
import * as THREE from 'three';
import { hash32, mulberry32 } from '../rng.js';
import { trap } from '../region/archetypes.js';

function clumpGeometry() {
  const pos = [];
  const blades = 5;
  for (let i = 0; i < blades; i++) {
    const a = (i / blades) * Math.PI * 2 + i * 0.7;
    const r = 0.06 + (i % 2) * 0.05;
    const cx = Math.cos(a) * r, cz = Math.sin(a) * r;
    const w = 0.045, h = 0.38 + (i % 3) * 0.1;
    const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
    const lean = 0.12;
    pos.push(cx - px, 0, cz - pz, cx + px, 0, cz + pz, cx + Math.cos(a) * lean, h, cz + Math.sin(a) * lean);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

export function createGrass(scene, { surfaceAt, groundY, isSeaXZ, tempAt, grassColor, mobile = false }) {
  const MAX = mobile ? 5000 : 9000;
  const RADIUS = mobile ? 38 : 55;
  const CELL = 12;
  const PER_CELL = mobile ? 110 : 160;

  const uniforms = THREE.UniformsUtils.merge([
    THREE.UniformsLib.fog,
    {
      time: { value: 0 },
      playerPos: { value: new THREE.Vector3() },
      windStrength: { value: 0.12 },
      sunColor: { value: new THREE.Color(1, 1, 1) },
      ambient: { value: new THREE.Color(0.5, 0.5, 0.5) },
    },
  ]);
  const mat = new THREE.ShaderMaterial({
    uniforms,
    fog: true,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      uniform float time;
      uniform vec3 playerPos;
      uniform float windStrength;
      varying vec3 vColor;
      #include <fog_pars_vertex>
      void main() {
        vec3 p = position;
        float h = clamp(p.y / 0.6, 0.0, 1.0);
        vec4 wp = vec4(p, 1.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix * wp;
        #endif
        wp = modelMatrix * wp;
        float w = sin(time * 1.7 + wp.x * 0.31 + wp.z * 0.23) * 0.7 + sin(time * 3.3 + wp.x * 0.9 - wp.z * 0.6) * 0.3;
        wp.x += w * windStrength * h * h;
        wp.z += w * 0.6 * windStrength * h * h;
        vec2 d = wp.xz - playerPos.xz;
        float dist = length(d);
        float push = (1.0 - smoothstep(0.25, 1.3, dist)) * h * step(abs(wp.y - playerPos.y), 1.5);
        wp.xz += (d / max(dist, 0.001)) * push * 0.45;
        wp.y -= push * 0.22;
        vec3 base = vec3(1.0);
        #ifdef USE_INSTANCING_COLOR
          base = instanceColor;
        #endif
        vColor = base * mix(0.5, 1.12, h);
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 sunColor;
      uniform vec3 ambient;
      varying vec3 vColor;
      #include <fog_pars_fragment>
      void main() {
        gl_FragColor = vec4(vColor * (ambient + sunColor * 0.55), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });

  const mesh = new THREE.InstancedMesh(clumpGeometry(), mat, MAX);
  mesh.name = 'grass';
  mesh.frustumCulled = false;
  mesh.count = 0;
  mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
  scene.add(mesh);

  const base = new THREE.Color().setHex(grassColor ?? 0x8a9a5a);
  const dry = new THREE.Color().setRGB(0.62, 0.55, 0.3, THREE.SRGBColorSpace);
  const dummy = new THREE.Object3D();
  const tint = new THREE.Color();
  const center = new THREE.Vector3(Infinity, 0, Infinity);
  let placed = 0;

  function rebuild(cx, cz) {
    center.set(cx, 0, cz);
    let n = 0;
    const i0 = Math.floor((cx - RADIUS) / CELL), i1 = Math.floor((cx + RADIUS) / CELL);
    const j0 = Math.floor((cz - RADIUS) / CELL), j1 = Math.floor((cz + RADIUS) / CELL);
    for (let i = i0; i <= i1 && n < MAX; i++) {
      for (let j = j0; j <= j1 && n < MAX; j++) {
        const rand = mulberry32(hash32(`g${i}:${j}`));
        for (let k = 0; k < PER_CELL && n < MAX; k++) {
          const x = (i + rand()) * CELL, z = (j + rand()) * CELL;
          const r1 = rand(), r2 = rand(), r3 = rand(), r4 = rand();
          const d = Math.hypot(x - cx, z - cz);
          if (d > RADIUS) continue;
          const s = surfaceAt(x, z);
          let keep;
          if (s) {
            keep = s.layer === 'green' ? 1 : s.layer === 'yard' ? 0.05 : 0;
          } else {
            if (isSeaXZ(x, z)) continue;
            const y = groundY(x, z);
            const slope = Math.abs(groundY(x + 1.5, z) - y) + Math.abs(groundY(x, z + 1.5) - y);
            if (slope > 1.2) continue; // oltre ~40°: roccia/scarpata
            keep = 0.25 + 0.35 * trap(tempAt(y), -2, 4, 13, 20); // più verde dove fa più fresco
          }
          if (r1 > keep) continue;
          const y = s ? s.y : groundY(x, z);
          // ai margini del raggio i ciuffi rimpiccioliscono: nessun bordo netto
          const edge = 1 - THREE.MathUtils.smoothstep(d, RADIUS * 0.75, RADIUS);
          const sc = (0.7 + r2 * 0.6) * edge;
          if (sc < 0.08) continue;
          dummy.position.set(x, y, z);
          dummy.rotation.set(0, r3 * Math.PI * 2, 0);
          dummy.scale.set(sc, sc * (0.8 + r4 * 0.5), sc);
          dummy.updateMatrix();
          mesh.setMatrixAt(n, dummy.matrix);
          tint.copy(base).lerp(dry, r4 * 0.45 + (s ? 0 : 0.15)).multiplyScalar(0.85 + r2 * 0.3);
          mesh.setColorAt(n, tint);
          n++;
        }
      }
    }
    mesh.count = n;
    placed = n;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
  }

  return {
    mesh,
    get count() { return placed; },
    rebuild,
    /**
     * @param {THREE.Vector3} focus giocatore (o punto sotto il drone)
     * @param {boolean} visible false in volo alto / vista lontana
     */
    update(dt, focus, visible, light) {
      uniforms.time.value += dt;
      mesh.visible = visible;
      if (!visible) return;
      uniforms.playerPos.value.copy(focus);
      if (light) {
        uniforms.sunColor.value.copy(light.sun);
        uniforms.ambient.value.copy(light.ambient);
      }
      if (Math.hypot(focus.x - center.x, focus.z - center.z) > 6) rebuild(focus.x, focus.z);
    },
  };
}
