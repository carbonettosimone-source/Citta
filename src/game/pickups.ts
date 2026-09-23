import * as THREE from 'three';
import { setInstanceQuat, commit } from '../render/instance';
import type { Player } from '../player/player';
import type { Hud } from '../ui/hud';
import { CHALLENGES, FINISH } from './content';
import { grant, type Session } from './session';
import { CAPITAL_AZ, CAPITAL_COLAT } from '../world/city';
import { biomeAzimuth, frameQuaternion, shift } from '../world/planet';
import { nearTown, onTownGround } from '../world/towns';
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

export type Pickups = {
  update(time: number, player: Player, session: Session, hud: Hud): void;
};

export function createPickups(scene: THREE.Scene): Pickups {
  const coins = [welcome(), ...alleys(), ...layout()];
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
      for (const coin of coins) {
        if (coin.taken || session.claimed.has(coin.id)) {
          coin.taken = true;
          continue;
        }
        const dx = player.x - coin.x;
        const dy = player.y - coin.y;
        const dz = player.z - coin.z;
        if (dx * dx + dy * dy + dz * dz > REACH * REACH) continue;
        coin.taken = true;
        session.claimed.add(coin.id);
        grant(session, VALUE);
        changed = true;
        hud.sync();
        hud.toast(`+${VALUE} sul sentiero`);
        navigator.vibrate?.(8);
      }
      if (changed || coins.some((coin) => !coin.taken)) paint(mesh, coins, time);
    },
  };
}

function welcome(): Coin {
  const az = CAPITAL_AZ;
  const raw = shift(0.72, az, 0, 0.45);
  const p = seat(raw.x, raw.y, raw.z);
  const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(az), 0, -Math.sin(az));
  return { id: 'moneta-via', x: p.x, y: p.y, z: p.z, qx: q.x, qy: q.y, qz: q.z, qw: q.w, taken: false };
}

function alleys(): Coin[] {
  const az = CAPITAL_AZ;
  const spots = [
    { id: 'moneta-vicolo', colat: CAPITAL_COLAT + 0.04, daz: 0.18 },
    { id: 'moneta-mercato', colat: CAPITAL_COLAT + 0.04, daz: -0.18 },
    { id: 'moneta-bottega', colat: 0.5, daz: 0 },
  ] as const;
  return spots.map((spot) => {
    const raw = shift(spot.colat, az + spot.daz, 0, spot.daz === 0 ? 2.2 : 0);
    const p = seat(raw.x, raw.y, raw.z);
    const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(az), 0, -Math.sin(az));
    return { id: spot.id, x: p.x, y: p.y, z: p.z, qx: q.x, qy: q.y, qz: q.z, qw: q.w, taken: false };
  });
}

function layout(): Coin[] {
  const coins: Coin[] = [];
  const colats = [0.46, 0.7, 1.18, 1.92, 2.32];
  let n = 0;
  for (let biome = 0; biome < 6; biome += 1) {
    const az = biomeAzimuth(biome);
    for (const colat of colats) {
      const raw = shift(colat, az, 0, biome % 2 === 0 ? 1.65 : -1.65);
      if (skip(raw.x, raw.y, raw.z)) continue;
      const p = seat(raw.x, raw.y, raw.z);
      const q = frameQuaternion(raw.x, raw.y, raw.z, Math.cos(az), 0, -Math.sin(az));
      coins.push({
        id: `moneta-${n}`,
        x: p.x,
        y: p.y,
        z: p.z,
        qx: q.x,
        qy: q.y,
        qz: q.z,
        qw: q.w,
        taken: false,
      });
      n += 1;
    }
  }
  return coins;
}

function skip(x: number, y: number, z: number): boolean {
  if (onTownGround(x, y, z) || nearTown(x, y, z, 3.2)) return true;
  for (const challenge of CHALLENGES) {
    const dx = x - challenge.x;
    const dy = y - challenge.y;
    const dz = z - challenge.z;
    if (dx * dx + dy * dy + dz * dz < 7 * 7) return true;
  }
  const dx = x - FINISH.x;
  const dy = y - FINISH.y;
  const dz = z - FINISH.z;
  return dx * dx + dy * dy + dz * dz < 5 * 5;
}

function paint(mesh: THREE.InstancedMesh, coins: readonly Coin[], time: number): void {
  for (let i = 0; i < coins.length; i += 1) {
    const coin = coins[i];
    if (!coin) continue;
    const bob = coin.taken ? 0 : 0.85 + Math.sin(time * 3.2 + i) * 0.08;
    const s = coin.taken ? 0.001 : bob;
    setInstanceQuat(mesh, i, coin.x, coin.y, coin.z, s, s, s, coin.qx, coin.qy, coin.qz, coin.qw, 0xf0a03a);
  }
  commit(mesh);
}

function octahedron(): THREE.OctahedronGeometry {
  const geo = new THREE.OctahedronGeometry(0.22, 0);
  geo.translate(0, 0.55, 0);
  return geo;
}
