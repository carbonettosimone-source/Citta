import * as THREE from 'three';
import { toonMaterial } from '../render/toon';
import { CHALLENGES, biomeOf, type ChallengeDef } from './content';
import { frameQuaternion } from '../world/planet';
import type { Player } from '../player/player';
import { grant, type Session } from './session';
import type { Hud } from '../ui/hud';

const REACH = 7;
const CLAIMED = 0xb7b1a8;

type Marker = {
  def: ChallengeDef;
  bob: THREE.Object3D;
  baseY: number;
  accents: THREE.Material[];
  ring: THREE.Mesh;
};

export type Challenges = {
  update(time: number, player: Player, interact: boolean, session: Session, hud: Hud): void;
};

export function createChallenges(scene: THREE.Scene, gradient: THREE.Texture): Challenges {
  const markers = CHALLENGES.map((def) => buildMarker(def, gradient, scene));

  return {
    update(time, player, interact, session, hud) {
      markers.forEach((marker, index) => {
        const taken = session.claimed.has(marker.def.id);
        const tint = taken ? CLAIMED : biomeOf(marker.def).plant;
        for (const material of marker.accents) paint(material, tint);
        const wave = taken ? 0 : Math.sin(time * 2.3 + index * 0.8) * 0.1;
        marker.bob.position.y = marker.baseY + wave;
        const pulse = taken ? 0.92 : 1 + Math.sin(time * 2.3 + index) * 0.04;
        marker.ring.scale.setScalar(pulse);
      });

      const near = nearest(player.x, player.y, player.z);
      if (!near) {
        hud.setPrompt(null);
        return;
      }
      hud.setPrompt(promptFor(near, session));
      if (!interact) return;
      collect(near, session, hud);
    },
  };
}

function buildMarker(def: ChallengeDef, gradient: THREE.Texture, scene: THREE.Scene): Marker {
  const group = new THREE.Group();
  group.position.set(def.x, 0, def.z);
  const accents: THREE.Material[] = [];
  const tint = biomeOf(def).plant;
  const glow = () => {
    const material = new THREE.MeshBasicMaterial({ color: tint });
    accents.push(material);
    return material;
  };
  const ink = toonMaterial(gradient, 0x8a5738);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.07, 6, 18), glow());
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.05;
  group.add(ring);

  let bob: THREE.Object3D = group;
  let baseY = 0;

  if (def.id === 'faro') {
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 0), glow());
    gem.position.y = 0.85;
    group.add(gem);
    bob = gem;
    baseY = 0.85;
  } else if (def.id === 'anello') {
    const hoop = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.1, 8, 18), glow());
    hoop.position.y = 1.2;
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.26, 0), glow());
    gem.position.y = 1.2;
    group.add(hoop, gem);
    bob = gem;
    baseY = 1.2;
  } else if (def.id === 'pietre') {
    const low = new THREE.Mesh(new THREE.DodecahedronGeometry(0.46, 0), toonMaterial(gradient, tint));
    const mid = new THREE.Mesh(new THREE.DodecahedronGeometry(0.34, 0), toonMaterial(gradient, 0x6a4ec4));
    const top = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), glow());
    low.position.y = 0.4;
    mid.position.y = 1.02;
    top.position.y = 1.55;
    accents.push(low.material, mid.material);
    group.add(low, mid, top);
    bob = top;
    baseY = 1.55;
  } else if (def.id === 'belvedere') {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.5, 5), ink);
    pole.position.y = 1.25;
    const flag = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.42, 0.05), glow());
    flag.position.set(0.42, 2.2, 0);
    group.add(pole, flag);
    bob = flag;
    baseY = 2.2;
  } else {
    const left = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.9, 0.18), ink);
    const right = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.9, 0.18), ink);
    const beam = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.16, 0.18), ink);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), glow());
    left.position.set(-0.72, 0.95, 0);
    right.position.set(0.72, 0.95, 0);
    beam.position.y = 1.82;
    gem.position.y = 1.45;
    group.add(left, right, beam, gem);
    bob = gem;
    baseY = 1.45;
  }

  const stand = frameQuaternion(def.x, def.y, def.z, 1, 0, 0);
  group.position.set(def.x, def.y, def.z);
  group.quaternion.copy(stand);
  scene.add(group);
  return { def, bob, baseY, accents, ring };
}

function paint(material: THREE.Material, hex: number): void {
  if (material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshToonMaterial) {
    material.color.setHex(hex);
  }
}

function nearest(x: number, y: number, z: number): ChallengeDef | null {
  let best: ChallengeDef | null = null;
  let bestD = REACH * REACH;
  for (const def of CHALLENGES) {
    const dx = x - def.x;
    const dy = y - def.y;
    const dz = z - def.z;
    const d2 = dx * dx + dy * dy + dz * dz;
    if (d2 <= bestD) {
      best = def;
      bestD = d2;
    }
  }
  return best;
}

function promptFor(def: ChallengeDef, session: Session): string {
  if (session.claimed.has(def.id)) return `${def.name} · già presa`;
  if (def.needsCourse && !session.courseClear) return `${def.name} · prima il percorso`;
  return `Prendi · ${def.name} · +${def.coins}`;
}

function collect(def: ChallengeDef, session: Session, hud: Hud): void {
  if (session.claimed.has(def.id)) {
    hud.toast(`${def.name} è già tua.`);
    return;
  }
  if (def.needsCourse && !session.courseClear) {
    hud.toast('Corri fino al cerchio ciano, poi torna al cancello.');
    return;
  }
  session.claimed.add(def.id);
  grant(session, def.coins);
  hud.sync();
  hud.toast(`+${def.coins} · ${def.line}`);
  navigator.vibrate?.(18);
}
