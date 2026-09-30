/**
 * Cartelli stradali italiani per Acquedolci – low-poly, canvas texture minime.
 *
 * Fonte normativa: D.P.R. 16/12/1992 n. 495 (Regolamento C.d.S.) e D.M. MIT 31/03/2022.
 *   Forme geometriche, colori, simboli: artt. 75-256 e Figure allegate (G.U. 23/03/1993).
 *
 * Tipi implementati:
 *   stop, precedenza, senso_unico, divieto_acc, limite_30, limite_50,
 *   pedoni, pericolo, direzione
 *
 * Ogni cartello: palo cilindrico (h 2.4 m, ø 5 cm) + pannello (canvas 128×128).
 * Instancing per pali (tutti identici); un InstancedMesh per tipo di pannello
 * (stesso materiale = stessa texture).
 * Draw calls totali: 1 (pali) + N_tipi (pannelli) = ~10.
 */
import * as THREE from 'three';

// ─── texture canvas ───────────────────────────────────────────────────────────

const TEX_SIZE = 128;

/** Crea una CanvasTexture di dimensione TEX_SIZE×TEX_SIZE. */
function makeTex(draw) {
  const cv = document.createElement('canvas');
  cv.width = TEX_SIZE; cv.height = TEX_SIZE;
  draw(cv.getContext('2d'), TEX_SIZE);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// colori ufficiali Codice della Strada (RAL approssimati per schermo sRGB)
const C = {
  red:    '#D0021B', // rosso C.d.S.
  white:  '#FFFFFF',
  black:  '#1A1A1A',
  blue:   '#003DA5', // blu segnaletica direzione
  yellow: '#F5C200', // giallo triangoli pericolo (sfondo avviso)
  green:  '#007A33', // verde autostrada (non usato qui, solo informativo)
  grey:   '#888888',
};

// ---- STOP (ottagono rosso, Art. 41 C.d.S., Fig. II 1b) ----
const texStop = makeTex((g, S) => {
  const r = S / 2, n = 8, inset = r * 0.29;
  g.save();
  g.translate(r, r);
  // ottagono rosso
  g.beginPath();
  for (let i = 0; i < n; i++) {
    const a = (Math.PI / 4) * i + Math.PI / 8;
    const px = Math.cos(a) * (r - 2), pz = Math.sin(a) * (r - 2);
    i === 0 ? g.moveTo(px, pz) : g.lineTo(px, pz);
  }
  g.closePath();
  g.fillStyle = C.red; g.fill();
  // bordo bianco
  g.strokeStyle = C.white; g.lineWidth = 5;
  g.stroke();
  // testo STOP
  g.fillStyle = C.white;
  g.font = `bold ${S * 0.28}px Arial`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('STOP', 0, 2);
  g.restore();
});

// ---- DARE PRECEDENZA (triangolo rovesciato, Fig. II 1a) ----
const texPrecedenza = makeTex((g, S) => {
  const m = 4;
  g.fillStyle = C.white;
  g.fillRect(0, 0, S, S);
  // triangolo rovesciato bianco con bordo rosso
  g.beginPath();
  g.moveTo(m, m);
  g.lineTo(S - m, m);
  g.lineTo(S / 2, S - m);
  g.closePath();
  g.fillStyle = C.white; g.fill();
  g.strokeStyle = C.red; g.lineWidth = 7; g.stroke();
  // bordo interno rosso sottile
  const im = 14;
  g.beginPath();
  g.moveTo(im, im + 2);
  g.lineTo(S - im, im + 2);
  g.lineTo(S / 2, S - im);
  g.closePath();
  g.strokeStyle = C.red; g.lineWidth = 2; g.stroke();
});

// ---- SENSO UNICO (rettangolo blu, freccia bianca, Fig. II 67) ----
const texSensoUnico = makeTex((g, S) => {
  g.fillStyle = C.blue;
  g.fillRect(0, 0, S, S);
  // freccia bianca al centro
  const cx = S / 2, cy = S / 2;
  const hw = S * 0.14, hl = S * 0.45, hh = S * 0.28;
  g.fillStyle = C.white;
  g.beginPath();
  // corpo
  g.rect(cx - hl, cy - hw / 2, hl, hw);
  g.fill();
  // testa freccia
  g.beginPath();
  g.moveTo(cx, cy - hh / 2);
  g.lineTo(cx + hh * 0.8, cy);
  g.lineTo(cx, cy + hh / 2);
  g.closePath();
  g.fill();
  // testo SENSO UNICO
  g.fillStyle = C.white;
  g.font = `bold ${S * 0.13}px Arial`;
  g.textAlign = 'center'; g.textBaseline = 'bottom';
  g.fillText('SENSO UNICO', cx, S - 4);
});

// ---- DIVIETO DI ACCESSO (cerchio bianco fascia rossa, Fig. II 54) ----
const texDivietoAcc = makeTex((g, S) => {
  const r = S / 2 - 3;
  g.fillStyle = C.white;
  g.beginPath(); g.arc(S / 2, S / 2, r, 0, Math.PI * 2); g.fill();
  g.strokeStyle = C.red; g.lineWidth = 8; g.stroke();
  // fascia rossa orizzontale
  g.fillStyle = C.red;
  g.fillRect(S * 0.1, S / 2 - S * 0.14, S * 0.8, S * 0.28);
  // clip circolare
  g.globalCompositeOperation = 'destination-in';
  g.beginPath(); g.arc(S / 2, S / 2, r, 0, Math.PI * 2); g.fill();
  g.globalCompositeOperation = 'source-over';
});

// ---- LIMITE VELOCITÀ (cerchio bianco/rosso con numero) ----
function makeTexLimite(speed) {
  return makeTex((g, S) => {
    const r = S / 2 - 3;
    g.fillStyle = C.white;
    g.beginPath(); g.arc(S / 2, S / 2, r, 0, Math.PI * 2); g.fill();
    g.strokeStyle = C.red; g.lineWidth = 9; g.stroke();
    g.fillStyle = C.black;
    g.font = `bold ${speed >= 100 ? S * 0.3 : S * 0.38}px Arial`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(String(speed), S / 2, S / 2 + 1);
  });
}
const texLimite30 = makeTexLimite(30);
const texLimite50 = makeTexLimite(50);

// ---- ATTRAVERSAMENTO PEDONALE (triangolo giallo, silhouette, Fig. II 16) ----
const texPedoni = makeTex((g, S) => {
  const m = 3;
  g.fillStyle = C.white;
  g.fillRect(0, 0, S, S);
  // triangolo con bordo rosso
  g.beginPath();
  g.moveTo(S / 2, m);
  g.lineTo(S - m, S - m);
  g.lineTo(m, S - m);
  g.closePath();
  g.fillStyle = C.white; g.fill();
  g.strokeStyle = C.red; g.lineWidth = 7; g.stroke();
  // silhouette pedone semplice (testa + corpo + gambe)
  const cx = S / 2, ty = S * 0.3;
  g.fillStyle = C.black;
  // testa
  g.beginPath(); g.arc(cx, ty, S * 0.07, 0, Math.PI * 2); g.fill();
  // corpo
  g.fillRect(cx - 3, ty + S * 0.07, 6, S * 0.22);
  // gamba sx
  g.save(); g.translate(cx, ty + S * 0.29);
  g.rotate(-0.3);
  g.fillRect(-2, 0, 4, S * 0.18);
  g.restore();
  // gamba dx
  g.save(); g.translate(cx, ty + S * 0.29);
  g.rotate(0.3);
  g.fillRect(-2, 0, 4, S * 0.18);
  g.restore();
  // braccia
  g.save(); g.translate(cx, ty + S * 0.13);
  g.rotate(0.5);
  g.fillRect(-2, 0, 4, S * 0.16);
  g.restore();
});

// ---- PERICOLO GENERICO (triangolo rosso/bianco, esclamativo, Fig. II 1) ----
const texPericolo = makeTex((g, S) => {
  const m = 3;
  g.fillStyle = C.white;
  g.fillRect(0, 0, S, S);
  g.beginPath();
  g.moveTo(S / 2, m);
  g.lineTo(S - m, S - m);
  g.lineTo(m, S - m);
  g.closePath();
  g.fillStyle = C.white; g.fill();
  g.strokeStyle = C.red; g.lineWidth = 7; g.stroke();
  // bordo interno rosso
  g.beginPath();
  g.moveTo(S / 2, m + 12);
  g.lineTo(S - m - 12, S - m - 5);
  g.lineTo(m + 12, S - m - 5);
  g.closePath();
  g.strokeStyle = C.red; g.lineWidth = 1.5; g.stroke();
  // esclamativo
  g.fillStyle = C.black;
  g.font = `bold ${S * 0.42}px Arial`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('!', S / 2, S * 0.6);
});

// ---- INDICAZIONE DIREZIONE (rettangolo blu freccia, Fig. II 267) ----
const texDirezione = makeTex((g, S) => {
  // rettangolo blu con freccia bianca
  const rw = S - 8, rh = S * 0.55, rx = 4, ry = (S - rh) / 2;
  // forma a freccia: rettangolo + punta a destra
  g.beginPath();
  g.moveTo(rx, ry);
  g.lineTo(rx + rw * 0.72, ry);
  g.lineTo(rx + rw, ry + rh / 2);
  g.lineTo(rx + rw * 0.72, ry + rh);
  g.lineTo(rx, ry + rh);
  g.closePath();
  g.fillStyle = C.blue; g.fill();
  // testo bianco
  g.fillStyle = C.white;
  g.font = `bold ${S * 0.16}px Arial`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('ACQUEDOLCI', S / 2 - S * 0.04, S / 2);
});

// ─── geometrie panel (quad piatto) ────────────────────────────────────────────

/** Dimensioni in metri dei pannelli (larghezza, altezza). */
const PANEL_SIZE = {
  stop:        [0.60, 0.60],
  precedenza:  [0.70, 0.70],
  senso_unico: [0.50, 0.35],
  divieto_acc: [0.60, 0.60],
  limite_30:   [0.60, 0.60],
  limite_50:   [0.60, 0.60],
  pedoni:      [0.65, 0.65],
  pericolo:    [0.65, 0.65],
  direzione:   [0.70, 0.35],
};

/** Altezza dal suolo al centro del pannello (m). */
const PANEL_HEIGHT = {
  stop:        2.20,
  precedenza:  2.10,
  senso_unico: 2.15,
  divieto_acc: 2.20,
  limite_30:   2.10,
  limite_50:   2.15,
  pedoni:      2.30,
  pericolo:    2.30,
  direzione:   2.20,
};

/** Mappa tipo → texture. */
const TEX_MAP = {
  stop:        texStop,
  precedenza:  texPrecedenza,
  senso_unico: texSensoUnico,
  divieto_acc: texDivietoAcc,
  limite_30:   texLimite30,
  limite_50:   texLimite50,
  pedoni:      texPedoni,
  pericolo:    texPericolo,
  direzione:   texDirezione,
};

/** Crea la geometria di un pannello piatto (double-sided). */
function panelGeo(w, h) {
  const g = new THREE.PlaneGeometry(w, h);
  return g;
}

// ─── costruzione della scena ──────────────────────────────────────────────────

/**
 * buildSigns(data, heightAt)
 * data: contenuto di signs.json
 * heightAt: funzione (x, z) → altezza MDT in metri
 * Ritorna un THREE.Group aggiunto alla scena.
 */
export function buildSigns(data, heightAt) {
  const group = new THREE.Group();
  group.name = 'cartelli-stradali';

  const signs = data.signs || [];
  if (!signs.length) return group;

  // ---- raggruppa per tipo ----
  const byType = {};
  for (const s of signs) {
    (byType[s.type] = byType[s.type] || []).push(s);
  }

  // ---- pali: InstancedMesh unico per tutti i cartelli ----
  const POLE_H = 2.5, POLE_R = 0.025;
  const poleGeo = new THREE.CylinderGeometry(POLE_R, POLE_R, POLE_H, 6);
  const poleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
  const poleIM = new THREE.InstancedMesh(poleGeo, poleMat, signs.length);
  poleIM.castShadow = false;
  poleIM.receiveShadow = false;
  poleIM.name = 'pali-cartelli';

  const dummy = new THREE.Object3D();
  const qId = new THREE.Quaternion();

  signs.forEach(({ x, z }, i) => {
    const y = heightAt(x, z);
    dummy.position.set(x, y + POLE_H / 2, z);
    dummy.quaternion.copy(qId);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    poleIM.setMatrixAt(i, dummy.matrix);
  });
  poleIM.instanceMatrix.needsUpdate = true;
  group.add(poleIM);

  // ---- pannelli per tipo ----
  const qRot = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);

  for (const [type, list] of Object.entries(byType)) {
    const tex = TEX_MAP[type];
    if (!tex) continue;
    const [pw, ph] = PANEL_SIZE[type] || [0.6, 0.6];
    const panelY = PANEL_HEIGHT[type] || 2.2;

    const mat = new THREE.MeshLambertMaterial({
      map: tex,
      transparent: false,
      side: THREE.DoubleSide,
      depthWrite: true,
    });

    const geo = panelGeo(pw, ph);
    const im = new THREE.InstancedMesh(geo, mat, list.length);
    im.castShadow = false;
    im.name = `cartello-${type}`;

    list.forEach(({ x, z, ang }, i) => {
      const y = heightAt(x, z);
      dummy.position.set(x, y + panelY, z);
      // ruota il pannello: ang è l'angolo Y nella convenzione del progetto
      // (atan2(dx, dz) dove X=est, Z=sud)
      // PlaneGeometry è nel piano XY, dobbiamo ruotarlo:
      // prima ruota di 90° attorno X (per stare verticale in XZ), poi di ang attorno Y
      dummy.rotation.set(0, ang, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
    });
    im.instanceMatrix.needsUpdate = true;
    group.add(im);
  }

  return group;
}
