import * as THREE from 'three';
import { toonMaterial } from '../render/toon';
import { CHALLENGES, GIRO_BONUS, GIRO_IDS, type ChallengeDef } from './content';
import { frameQuaternion } from '../world/planet';
import type { Player } from '../player/player';
import { grant, type Session } from './session';
import type { Hud } from '../ui/hud';

const REACH = 6;
const CLAIMED = 0xb7b1a8;
const ACCENT: Record<string, number> = {
  faro: 0xf0a03a,
  bacheca: 0x3ad4ff,
  vendor: 0x7dffc4,
};

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
        const tint = taken ? CLAIMED : accentOf(marker.def);
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
  const tint = accentOf(def);
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
  } else if (def.id === 'bacheca') {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.05, 0.18), ink);
    post.position.y = 1.02;
    const board = new THREE.Mesh(new THREE.BoxGeometry(2.35, 1.45, 0.08), glow());
    board.position.set(0, 2.15, 0.42);
    group.add(post, board);
    bob = board;
    baseY = 2.15;
  } else if (def.id === 'vendor') {
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), glow());
    gem.position.set(0, 1.25, 0.55);
    group.add(gem);
    bob = gem;
    baseY = 1.25;
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

  const stand = frameQuaternion(def.x, def.y, def.z, def.fx ?? 1, def.fy ?? 0, def.fz ?? 0);
  group.position.set(def.x, def.y, def.z);
  group.quaternion.copy(stand);
  scene.add(group);
  return { def, bob, baseY, accents, ring };
}

function accentOf(def: ChallengeDef): number {
  return ACCENT[def.id] ?? 0x3ad4ff;
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
  if (def.opensBoard) hud.openBoard();
  if (session.claimed.has(def.id)) {
    hud.toast(def.opensBoard ? 'La bacheca elenca i giochi.' : `${def.name} è già tua.`);
    return;
  }
  if (def.needsCourse && !session.courseClear) {
    hud.toast('Prima chiudi il percorso.');
    return;
  }
  session.claimed.add(def.id);
  grant(session, def.coins);
  hud.sync();
  hud.toast(`+${def.coins} · ${def.line}`);
  payGiro(session, hud);
  navigator.vibrate?.(18);
}

function payGiro(session: Session, hud: Hud): void {
  if (session.claimed.has('giro')) return;
  if (!GIRO_IDS.every((id) => session.claimed.has(id))) return;
  session.claimed.add('giro');
  grant(session, GIRO_BONUS);
  hud.sync();
  hud.toast(`+${GIRO_BONUS} · Giro chiuso.`);
}
