import * as THREE from 'three';
import type { Player } from '../player/player';
import { toonMaterial } from '../render/toon';
import {
  RANK_FOR_PLACE,
  RACE_GHOSTS,
  RACE_LIMIT,
  RACE_PATH,
  RACE_YAW,
  SPAWN,
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
    player.teleport(SPAWN.x, SPAWN.z, SPAWN.yaw);
    hud.showRace(null);
    hud.showResult(null);
  });

  function abort(message: string): void {
    phase = 'idle';
    hideGhosts();
    hud.showRace(null);
    hud.toast(message);
    player.teleport(SPAWN.x, SPAWN.z, SPAWN.yaw);
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
      const lateral = Math.hypot(at.dz, at.dx) || 1;
      ghost.mesh.visible = true;
      ghost.mesh.position.set(at.x + (-at.dz / lateral) * side, 0, at.z + (at.dx / lateral) * side);
      ghost.mesh.rotation.y = Math.atan2(at.dx, at.dz);
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
      player.teleport(RACE_PATH[0]?.x ?? 6.5, RACE_PATH[0]?.z ?? 13.6, RACE_YAW);
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
      const dx = player.x - (RACE_PATH[RACE_PATH.length - 1]?.x ?? 19);
      const dz = player.z - (RACE_PATH[RACE_PATH.length - 1]?.z ?? 12);
      if (dx * dx + dz * dz <= 1.45 * 1.45) finish(true, elapsed);
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
    total += Math.hypot(b.x - a.x, b.z - a.z);
  }
  return total;
}

function pointAt(points: readonly RacePoint[], distance: number): { x: number; z: number; dx: number; dz: number } {
  let left = distance;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    if (!a || !b) continue;
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz) || 0.0001;
    if (left <= len || i === points.length - 1) {
      const t = Math.min(1, left / len);
      return { x: a.x + dx * t, z: a.z + dz * t, dx, dz };
    }
    left -= len;
  }
  const last = points[points.length - 1] ?? { x: 0, z: 0 };
  return { x: last.x, z: last.z, dx: 1, dz: 0 };
}

function runner(gradient: THREE.Texture, color: number): THREE.Group {
  const group = new THREE.Group();
  const cloth = toonMaterial(gradient, color);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.55, 2, 6), cloth);
  body.position.y = 0.78;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 5), toonMaterial(gradient, 0xffe0c4));
  head.position.y = 1.38;
  group.add(body, head);
  return group;
}
