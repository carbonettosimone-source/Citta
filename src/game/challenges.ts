import * as THREE from 'three';
import { commit, setInstance } from '../render/instance';
import { flatInstances, toonInstances } from '../render/toon';
import { CHALLENGES, KIND_COLOR, type ChallengeDef } from './content';
import type { Player } from '../player/player';
import type { Session } from './session';
import type { Hud } from '../ui/hud';

const REACH = 7;
const CLAIMED = 0xb7b1a8;

export type Challenges = {
  update(time: number, player: Player, interact: boolean, session: Session, hud: Hud): void;
};

export function createChallenges(scene: THREE.Scene, gradient: THREE.Texture): Challenges {
  const count = CHALLENGES.length;
  const poles = new THREE.InstancedMesh(
    new THREE.CylinderGeometry(0.09, 0.12, 2.2, 5),
    toonInstances(gradient),
    count,
  );
  const gems = new THREE.InstancedMesh(
    new THREE.OctahedronGeometry(0.38, 0),
    flatInstances(),
    count,
  );
  const rings = new THREE.InstancedMesh(
    new THREE.TorusGeometry(1.25, 0.07, 6, 18),
    flatInstances(),
    count,
  );
  for (const mesh of [poles, gems, rings]) {
    mesh.frustumCulled = false;
    scene.add(mesh);
  }

  const claimed = CHALLENGES.map(() => false);

  const paint = (time: number) => {
    for (let i = 0; i < count; i++) {
      const def = CHALLENGES[i];
      if (!def) continue;
      const tint = claimed[i] ? CLAIMED : KIND_COLOR[def.kind];
      const bob = claimed[i] ? 0 : Math.sin(time * 2.3 + i * 0.8) * 0.12;
      setInstance(poles, i, def.x, 1.1, def.z, 1, 1, 1, 0, 0, tint);
      setInstance(gems, i, def.x, 2.35 + bob, def.z, 1, 1, 1, 0, time * 0.9 + i, tint);
      const pulse = claimed[i] ? 0.92 : 1 + Math.sin(time * 2.3 + i) * 0.04;
      setInstance(rings, i, def.x, 0.05, def.z, pulse, pulse, pulse, Math.PI / 2, 0, tint);
    }
    commit(poles);
    commit(gems);
    commit(rings);
  };
  paint(0);

  return {
    update(time, player, interact, session, hud) {
      for (let i = 0; i < count; i++) {
        const def = CHALLENGES[i];
        if (def && session.claimed.has(def.id)) claimed[i] = true;
      }
      paint(time);

      const near = nearest(player.x, player.z);
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

function nearest(x: number, z: number): ChallengeDef | null {
  let best: ChallengeDef | null = null;
  let bestD = REACH * REACH;
  for (const def of CHALLENGES) {
    const dx = x - def.x;
    const dz = z - def.z;
    const d2 = dx * dx + dz * dz;
    if (d2 <= bestD) {
      best = def;
      bestD = d2;
    }
  }
  return best;
}

function promptFor(def: ChallengeDef, session: Session): string {
  if (session.claimed.has(def.id)) return `${def.name} · già ritirata`;
  if (def.needsCourse && !session.courseClear) return `E · ${def.name} · supera il percorso`;
  return `E · ${def.name} · +${def.coins}`;
}

function collect(def: ChallengeDef, session: Session, hud: Hud): void {
  if (session.claimed.has(def.id)) {
    hud.toast(`${def.name} è già ritirata.`);
    return;
  }
  if (def.needsCourse && !session.courseClear) {
    hud.toast('Supera le barriere a est, poi torna al cancello.');
    return;
  }
  session.claimed.add(def.id);
  session.coins += def.coins;
  hud.sync();
  hud.toast(`+${def.coins} monete · ${def.name}`);
}
