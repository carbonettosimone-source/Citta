import * as THREE from 'three';
import { setInstanceQuat, commit } from '../render/instance';
import type { Player } from '../player/player';
import type { Hud } from '../ui/hud';
import { grant, type Session } from './session';
import { HUB_AZ, HUB_COLAT } from '../world/intensity';
import { frameQuaternion, shift } from '../world/planet';
import { seat } from '../world/relief';

const REACH = 1.35;
const VALUE = 3;

type Coin = {
  id: string;
  x: number;
  y: number;
  z: number;
  qx: number;
  qy: number;
  qz: number;
  qw: number;
  taken: boolean;
};

const SPOTS: readonly { id: string; n: number; e: number }[] = [
  { id: 'moneta-via', n: 5.4, e: 0.35 },
  { id: 'moneta-bacheca', n: 3.6, e: 2.4 },
  { id: 'moneta-rampa', n: -1.2, e: 5.4 },
  { id: 'moneta-uscita', n: -14.5, e: 0.2 },
];

export type Pickups = {
  update(time: number, player: Player, session: Session, hud: Hud): void;
};

export function createPickups(scene: THREE.Scene): Pickups {
  const coins = SPOTS.map((spot) => coin(spot.id, spot.n, spot.e));
  const mesh = new THREE.InstancedMesh(
    octahedron(),
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
    Math.max(1, coins.length),
  );
  mesh.frustumCulled = false;
  scene.add(mesh);
  paint(mesh, coins, 0);

  return {
    update(time, player, session, hud) {
      let changed = false;
      for (const item of coins) {
        if (item.taken || session.claimed.has(item.id)) {
          item.taken = true;
          continue;
        }
        const dx = player.x - item.x;
        const dy = player.y - item.y;
        const dz = player.z - item.z;
        if (dx * dx + dy * dy + dz * dz > REACH * REACH) continue;
        item.taken = true;
        session.claimed.add(item.id);
        grant(session, VALUE);
        changed = true;
        hud.sync();
        hud.toast(`+${VALUE} sul sentiero`);
        navigator.vibrate?.(8);
      }
      if (changed || coins.some((item) => !item.taken)) paint(mesh, coins, time);
    },
  };
}

function coin(id: string, north: number, east: number): Coin {
  const raw = shift(HUB_COLAT, HUB_AZ, north, east);
  const p = seat(raw.x, raw.y, raw.z);
  const q = frameQuaternion(raw.x, raw.y, raw.z, 0, 1, 0);
  return { id, x: p.x, y: p.y, z: p.z, qx: q.x, qy: q.y, qz: q.z, qw: q.w, taken: false };
}

function paint(mesh: THREE.InstancedMesh, coins: readonly Coin[], time: number): void {
  for (let i = 0; i < coins.length; i += 1) {
    const item = coins[i];
    if (!item) continue;
    const bob = item.taken ? 0 : 0.85 + Math.sin(time * 3.2 + i) * 0.08;
    const s = item.taken ? 0.001 : bob;
    setInstanceQuat(mesh, i, item.x, item.y, item.z, s, s, s, item.qx, item.qy, item.qz, item.qw, 0xf0a03a);
  }
  commit(mesh);
}

function octahedron(): THREE.OctahedronGeometry {
  const geo = new THREE.OctahedronGeometry(0.22, 0);
  geo.translate(0, 0.55, 0);
  return geo;
}
