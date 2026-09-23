import * as THREE from 'three';
import type { Player } from '../player/player';
import { toonMaterial } from '../render/toon';
import { frameQuaternion, PLANET_R } from '../world/planet';
import {
  FINISH,
  RANK_FOR_PLACE,
  RACE_GHOSTS,
  RACE_LIMIT,
  RACE_PATH,
  SPAWN,
  SPAWN_FACE,
  payoutFor,
  type EventMode,
  type RacePoint,
} from './content';
import { applyMatchResult, trySpend, type Session } from './session';
import type { Hud } from '../ui/hud';

type Phase = 'idle' | 'countdown' | 'racing' | 'result';

const LENGTH = pathLength(RACE_PATH);

export type Match = {
  start(mode: EventMode): void;
  update(dt: number, player: Player): void;
  locksWorld(): boolean;
  isRacing(): boolean;
};

export function createMatch(
  scene: THREE.Scene,
  gradient: THREE.Texture,
  session: Session,
  hud: Hud,
  player: Player,
): Match {
  const ghosts = RACE_GHOSTS.map((ghost, index) => {
    const mesh = runner(gradient, ghost.color);
    mesh.visible = false;
    scene.add(mesh);
    mesh.userData['lane'] = (index - 1) * 0.62;
    return { ...ghost, mesh };
  });

  let phase: Phase = 'idle';
  let countdown = 0;
  let elapsed = 0;
  let stake = 0;

  hud.onAbandon(() => {
    if (phase === 'countdown') {
      abort('Corsa annullata. Non hai ancora puntato.');
      return;
    }
    if (phase === 'racing') finish(false, elapsed);
  });
  hud.onResultClose(() => {
    phase = 'idle';
    hideGhosts();
    home();
    hud.showRace(null);
    hud.showResult(null);
  });

  function home(): void {
    player.teleport(SPAWN.x, SPAWN.y, SPAWN.z, SPAWN_FACE.x, SPAWN_FACE.y, SPAWN_FACE.z);
  }

  function abort(message: string): void {
    phase = 'idle';
    hideGhosts();
    hud.showRace(null);
    hud.toast(message);
    home();
  }

  function hideGhosts(): void {
    for (const ghost of ghosts) ghost.mesh.visible = false;
  }

  function placeGhosts(time: number): void {
    for (const ghost of ghosts) {
      const dist = Math.min(LENGTH, (time / ghost.seconds) * LENGTH);
      const at = pointAt(RACE_PATH, dist);
      const lane = ghost.mesh.userData['lane'];
      const side = typeof lane === 'number' ? lane : 0;
      const up = new THREE.Vector3(at.x, at.y, at.z).normalize();
      const fwd = new THREE.Vector3(at.dx, at.dy, at.dz);
      fwd.addScaledVector(up, -fwd.dot(up));
      if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, 1);
      fwd.normalize();
      const lateral = new THREE.Vector3().crossVectors(up, fwd).normalize();
      const pos = up.multiplyScalar(PLANET_R).addScaledVector(lateral, side);
      pos.normalize().multiplyScalar(PLANET_R);
      ghost.mesh.visible = true;
      ghost.mesh.position.copy(pos);
      ghost.mesh.quaternion.copy(frameQuaternion(pos.x, pos.y, pos.z, fwd.x, fwd.y, fwd.z));
    }
  }

  function finish(clean: boolean, time: number): void {
    if (phase === 'result' || phase === 'idle') return;
    phase = 'result';
    const beaten = RACE_GHOSTS.filter((ghost) => clean && time < ghost.seconds).length;
    const place = clean ? RACE_GHOSTS.length + 1 - beaten : 4;
    const payout = payoutFor(place, stake);
    const rank = RANK_FOR_PLACE[place - 1] ?? 70;
    applyMatchResult(session, { place, payout, rank, clean });
    hud.sync();
    hud.showRace(null);
    const net = payout - stake;
    const sign = net > 0 ? `+${net}` : String(net);
    hud.showResult({
      place,
      time: clean ? time : null,
      stake,
      payout,
      netLabel: sign,
      title: placeTitle(place),
      line: placeLine(place),
    });
    hud.toast(place === 1 ? 'Rango settimanale aggiornato.' : `Chiudi ${place}°. Rango ${session.weekRank}.`);
  }

  return {
    locksWorld: () => phase === 'countdown' || phase === 'racing' || phase === 'result',
    isRacing: () => phase === 'racing',
    start(mode) {
      if (phase !== 'idle') return;
      if (!mode.playable) {
        hud.toast(`${mode.name} non è in questa anteprima. Si corre Ostacoli.`);
        return;
      }
      if (session.coins < mode.demoStake) {
        hud.toast(`Servono ${mode.demoStake} monete. Nel portafoglio: ${session.coins}.`);
        return;
      }
      stake = mode.demoStake;
      countdown = 3;
      elapsed = 0;
      phase = 'countdown';
      const start = RACE_PATH[0];
      const next = RACE_PATH[1] ?? start;
      if (start && next) {
        player.teleport(start.x, start.y, start.z, next.x - start.x, next.y - start.y, next.z - start.z);
      }
      placeGhosts(0);
      hud.showResult(null);
      hud.showRace({
        title: 'Ostacoli · demo',
        time: '3',
        hint: 'Via tra poco. Le frecce ambra segnano i varchi.',
        canQuit: true,
        lock: true,
      });
    },
    update(dt) {
      if (phase === 'idle' || phase === 'result') return;
      const step = Math.min(dt, 0.05);
      if (phase === 'countdown') {
        countdown -= step;
        const n = Math.max(1, Math.ceil(countdown));
        hud.showRace({
          title: 'Ostacoli · demo',
          time: countdown > 0 ? String(n) : 'Via!',
          hint: 'Tieni il pollice in alto sul pad per andare avanti.',
          canQuit: true,
          lock: true,
        });
        if (countdown <= 0) {
          if (!trySpend(session, stake)) {
            abort('Monete insufficienti. La corsa non parte.');
            hud.sync();
            return;
          }
          hud.sync();
          phase = 'racing';
          elapsed = 0;
        }
        return;
      }
      elapsed += step;
      placeGhosts(elapsed);
      hud.showRace({
        title: 'Ostacoli · demo',
        time: `${elapsed.toFixed(1)}s`,
        hint: rivalLine(elapsed),
        canQuit: true,
        lock: false,
      });
      const dx = player.x - FINISH.x;
      const dy = player.y - FINISH.y;
      const dz = player.z - FINISH.z;
      if (dx * dx + dy * dy + dz * dz <= FINISH.r * FINISH.r) finish(true, elapsed);
      else if (elapsed >= RACE_LIMIT) finish(false, elapsed);
    },
  };
}

function rivalLine(elapsed: number): string {
  const ahead = RACE_GHOSTS.find((ghost) => ghost.seconds >= elapsed);
  if (!ahead) return 'Sei davanti a tutti. Chiudi sul cerchio ciano.';
  return `${ahead.name} chiude in ${ahead.seconds.toFixed(1)}s. Tu ${elapsed.toFixed(1)}s.`;
}

function placeTitle(place: number): string {
  if (place === 1) return 'Primo posto';
  if (place === 2) return 'Secondo posto';
  if (place === 3) return 'Terzo posto';
  return 'Fuori tempo';
}

function placeLine(place: number): string {
  if (place === 1) return 'Il montepremi grosso è tuo. Rami arriva dopo.';
  if (place === 2) return 'Qualcosa torna. Rami era già al cerchio.';
  if (place === 3) return 'La puntata si è assottigliata.';
  return 'Ultimo. La puntata resta sul tavolo.';
}

function pathLength(points: readonly RacePoint[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    if (!a || !b) continue;
    total += Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z);
  }
  return total;
}

function pointAt(
  points: readonly RacePoint[],
  distance: number,
): { x: number; y: number; z: number; dx: number; dy: number; dz: number } {
  let left = distance;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    if (!a || !b) continue;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dy, dz) || 0.0001;
    if (left <= len || i === points.length - 1) {
      const t = Math.min(1, left / len);
      return { x: a.x + dx * t, y: a.y + dy * t, z: a.z + dz * t, dx, dy, dz };
    }
    left -= len;
  }
  const last = points[points.length - 1] ?? { x: 0, y: PLANET_R, z: 0 };
  return { x: last.x, y: last.y, z: last.z, dx: 1, dy: 0, dz: 0 };
}

function runner(gradient: THREE.Texture, color: number): THREE.Group {
  const group = new THREE.Group();
  const cloth = toonMaterial(gradient, color);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.72, 2, 6), cloth);
  body.position.y = 0.86;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 5), toonMaterial(gradient, 0xffe0c4));
  head.position.y = 1.48;
  group.add(body, head);
  return group;
}
