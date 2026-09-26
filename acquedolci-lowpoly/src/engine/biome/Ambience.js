/**
 * Ambiente vivo, legato al contesto (non NPC: è scenografia).
 * - Particelle (1 draw call, animate nello shader, costo CPU nullo): polline/semi nell'aria
 *   dove attorno c'è verde, salsedine/foschia chiara vicino al mare. La scatola di particelle
 *   segue la camera con un modulo: niente respawn.
 * - Gabbiani (1 draw call istanziata): volteggiano sopra il mare più vicino, battito d'ali nello shader.
 * Il contesto (quanto verde, quanta costa) è campionato 2 volte al secondo attorno al giocatore.
 */
import * as THREE from 'three';

export function createAmbience(scene, { surfaceAt, isSeaXZ, seaY, mobile = false }) {
  // ---------------------------------------------------------------- particelle
  const N = mobile ? 500 : 900;
  const BOX = new THREE.Vector3(70, 22, 70);
  const pos = new Float32Array(N * 3);
  const kind = new Float32Array(N);
  const seed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = Math.random() * BOX.x;
    pos[i * 3 + 1] = Math.random() * BOX.y;
    pos[i * 3 + 2] = Math.random() * BOX.z;
    kind[i] = i % 3 === 0 ? 1 : 0; // 1/3 salsedine, 2/3 polline
    seed[i] = Math.random() * 100;
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pg.setAttribute('kind', new THREE.BufferAttribute(kind, 1));
  pg.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const pu = {
    time: { value: 0 },
    camPos: { value: new THREE.Vector3() },
    box: { value: BOX },
    pollen: { value: 0 },
    spray: { value: 0 },
    pixelRatio: { value: Math.min(2, globalThis.devicePixelRatio || 1) },
  };
  const pmat = new THREE.ShaderMaterial({
    uniforms: pu,
    transparent: true,
    depthWrite: false,
    vertexShader: /* glsl */ `
      uniform float time, pollen, spray, pixelRatio;
      uniform vec3 camPos, box;
      attribute float kind;
      attribute float seed;
      varying float vAlpha;
      varying float vKind;
      void main() {
        // deriva col vento + oscillazione; la scatola segue la camera (modulo)
        vec3 drift = vec3(0.9, 0.08 + 0.12 * sin(seed), 0.35) * time
                   + vec3(sin(time * 0.7 + seed), sin(time * 0.9 + seed * 1.7) * 0.6, cos(time * 0.6 + seed)) * 0.8;
        vec3 p = mod(position + drift - camPos + box * 0.5, box) - box * 0.5 + camPos;
        p.y = camPos.y - box.y * 0.35 + mod(position.y + drift.y, box.y);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float amount = kind > 0.5 ? spray : pollen;
        float dist = -mv.z;
        vAlpha = amount * (1.0 - smoothstep(18.0, 34.0, dist)) * smoothstep(0.5, 2.5, dist);
        vKind = kind;
        gl_PointSize = (kind > 0.5 ? 3.2 : 2.2) * pixelRatio * (12.0 / max(dist, 1.0));
      }`,
    fragmentShader: /* glsl */ `
      varying float vAlpha;
      varying float vKind;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float r = dot(c, c);
        if (r > 0.25) discard;
        vec3 col = vKind > 0.5 ? vec3(0.93, 0.96, 1.0) : vec3(1.0, 0.95, 0.72);
        gl_FragColor = vec4(col, vAlpha * (1.0 - r * 4.0) * 0.8);
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(pg, pmat);
  points.name = 'ambience-particles';
  points.frustumCulled = false;
  scene.add(points);

  // ---------------------------------------------------------------- gabbiani
  const G = mobile ? 5 : 8;
  const wing = new THREE.BufferGeometry();
  // V stilizzata: corpo al centro, due ali (triangoli) con la punta che batte (attributo tip)
  wing.setAttribute('position', new THREE.Float32BufferAttribute([
    0, 0, 0.25, -0.9, 0, -0.05, 0, 0, -0.25,
    0, 0, 0.25, 0, 0, -0.25, 0.9, 0, -0.05,
  ], 3));
  wing.setAttribute('tip', new THREE.Float32BufferAttribute([0, 1, 0, 0, 0, 1], 1));
  const gu = {
    time: { value: 0 },
    alpha: { value: 0 },
  };
  const gmat = new THREE.ShaderMaterial({
    uniforms: gu,
    side: THREE.DoubleSide,
    transparent: true,
    vertexShader: /* glsl */ `
      uniform float time;
      attribute float tip;
      varying float vShade;
      void main() {
        vec3 p = position;
        float phase = 0.0;
        #ifdef USE_INSTANCING
          phase = instanceMatrix[3][0] * 0.37 + instanceMatrix[3][2] * 0.21;
        #endif
        p.y += tip * sin(time * 7.0 + phase) * 0.45;
        vShade = 0.75 + tip * 0.25;
        vec4 w = vec4(p, 1.0);
        #ifdef USE_INSTANCING
          w = instanceMatrix * w;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float alpha;
      varying float vShade;
      void main() {
        gl_FragColor = vec4(vec3(0.95) * vShade, alpha);
        #include <colorspace_fragment>
      }`,
  });
  const gulls = new THREE.InstancedMesh(wing, gmat, G);
  gulls.name = 'gulls';
  gulls.frustumCulled = false;
  scene.add(gulls);
  const birds = Array.from({ length: G }, (_, i) => ({ r: 18 + ((i * 37) % 40), h: 14 + ((i * 13) % 16), speed: 0.25 + ((i * 7) % 10) / 40, phase: i * 1.3 }));
  const gullCenter = new THREE.Vector3();
  let hasSea = false;
  const dummy = new THREE.Object3D();

  // ---------------------------------------------------------------- contesto
  let ctxT = 1;
  let green = 0, coast = 0;
  function sampleContext(p) {
    let g = 0, n = 0;
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      for (const r of [8, 20]) {
        const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
        const s = surfaceAt(x, z);
        n++;
        if ((s && s.layer === 'green') || (!s && !isSeaXZ(x, z))) g++;
      }
    }
    green = g / n;
    // mare più vicino: anelli crescenti
    let seaAt = null;
    for (const r of [25, 60, 120, 220, 350]) {
      for (let k = 0; k < 16 && !seaAt; k++) {
        const a = (k / 16) * Math.PI * 2;
        const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
        if (isSeaXZ(x, z)) seaAt = { x, z, r };
      }
      if (seaAt) break;
    }
    coast = seaAt ? 1 - THREE.MathUtils.smoothstep(seaAt.r, 40, 350) : 0;
    if (seaAt) {
      // i gabbiani stanno un po' al largo rispetto al punto di costa trovato
      const dx = seaAt.x - p.x, dz = seaAt.z - p.z, L = Math.hypot(dx, dz) || 1;
      const target = new THREE.Vector3(seaAt.x + (dx / L) * 40, seaY, seaAt.z + (dz / L) * 40);
      if (!hasSea) gullCenter.copy(target);
      else gullCenter.lerp(target, 0.15);
      hasSea = true;
    }
  }

  return {
    get context() { return { green: +green.toFixed(2), coast: +coast.toFixed(2) }; },
    sampleContext,
    update(dt, focus, camera) {
      ctxT += dt;
      if (ctxT > 0.5) { ctxT = 0; sampleContext(focus); }
      pu.time.value += dt;
      pu.camPos.value.copy(camera.position);
      // transizioni morbide
      pu.pollen.value += (green * 0.9 - pu.pollen.value) * Math.min(1, dt * 1.5);
      pu.spray.value += (coast * 0.8 - pu.spray.value) * Math.min(1, dt * 1.5);
      gu.time.value += dt;
      const ga = hasSea ? coast : 0;
      gu.alpha.value += (ga - gu.alpha.value) * Math.min(1, dt);
      gulls.visible = gu.alpha.value > 0.02;
      if (gulls.visible) {
        const t = gu.time.value;
        birds.forEach((b, i) => {
          const a = t * b.speed + b.phase;
          dummy.position.set(gullCenter.x + Math.cos(a) * b.r, seaY + b.h + Math.sin(a * 2.3) * 2, gullCenter.z + Math.sin(a) * b.r);
          dummy.rotation.set(0, -a, Math.sin(a * 1.7) * 0.25); // tangente al cerchio + leggero rollio
          dummy.scale.setScalar(1.1);
          dummy.updateMatrix();
          gulls.setMatrixAt(i, dummy.matrix);
        });
        gulls.instanceMatrix.needsUpdate = true;
      }
    },
  };
}
