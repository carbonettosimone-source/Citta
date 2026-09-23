import './style.css';
import { createChallenges } from './game/challenges';
import { FINISH, type EventMode } from './game/content';
import { createMatch } from './game/match';
import { createPickups } from './game/pickups';
import { createSession } from './game/session';
import { createControls } from './input/controls';
import { createPlayer } from './player/player';
import { createPipeline } from './render/pipeline';
import { createGradientMap, windTime } from './render/toon';
import { createHud } from './ui/hud';
import { createHub } from './world/hub';

const canvas = document.querySelector<HTMLCanvasElement>('#view');
const hudRoot = document.querySelector<HTMLElement>('#hud');
if (!canvas || !hudRoot) throw new Error('Markup mancante.');

try {
  boot(canvas, hudRoot);
} catch (error) {
  hudRoot.style.pointerEvents = 'auto';
  hudRoot.style.padding = '24px';
  hudRoot.textContent = error instanceof Error ? error.message : 'Impossibile avviare Minimondo.';
}

function boot(view: HTMLCanvasElement, root: HTMLElement): void {
  const session = createSession();
  let interactQueued = false;
  let startDemo: (mode: EventMode) => void = () => {};

  const gradient = createGradientMap();
  const pipeline = createPipeline(view);
  const hub = createHub(pipeline.scene, gradient);
  const hud = createHud(root, session, {
    onInteract: () => {
      interactQueued = true;
    },
    onStartDemo: (mode) => startDemo(mode),
  });
  const controls = createControls(view, root);
  const player = createPlayer(pipeline.scene, gradient, controls);
  const challenges = createChallenges(pipeline.scene, gradient);
  const pickups = createPickups(pipeline.scene);
  const match = createMatch(pipeline.scene, gradient, session, hud, player);
  startDemo = (mode) => match.start(mode);

  let courseTold = false;
  let last = performance.now();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const frozen = hud.blocksPlay();
    if (!reduceMotion) windTime.value = now / 1000;
    player.update(dt, hub.blockers, frozen);

    if (match.locksWorld()) {
      match.update(dt, player);
      hud.setPrompt(null);
    } else {
      if (!session.courseClear) {
        const dx = player.x - FINISH.x;
        const dy = player.y - FINISH.y;
        const dz = player.z - FINISH.z;
        if (dx * dx + dy * dy + dz * dz <= FINISH.r * FINISH.r) {
          session.courseClear = true;
          if (!courseTold) {
            courseTold = true;
            hud.toast('Percorso fatto. Il cancello ora paga.');
          }
        }
      }
      const interact = !frozen && (player.consumeInteract() || interactQueued);
      interactQueued = false;
      pickups.update(now / 1000, player, session, hud);
      challenges.update(now / 1000, player, interact, session, hud);
    }

    const aim = player.aim();
    hud.paintMap(player.x, player.y, player.z, aim.x, aim.y, aim.z);

    player.syncCamera(pipeline.camera, dt);
    hub.sky.position.copy(pipeline.camera.position);
    pipeline.render();
    const local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (local) {
      view.dataset['px'] = player.x.toFixed(2);
      view.dataset['py'] = player.y.toFixed(2);
      view.dataset['pz'] = player.z.toFixed(2);
      view.dataset['yaw'] = controls.yaw.toFixed(3);
      view.dataset['gait'] = player.gait;
      view.dataset['feet'] = player.radius.toFixed(3);
      view.dataset['hx'] = aim.x.toFixed(3);
      view.dataset['hy'] = aim.y.toFixed(3);
      view.dataset['hz'] = aim.z.toFixed(3);
    }
    requestAnimationFrame(frame);
  };

  const resize = () => pipeline.resize();
  pipeline.resize();
  window.addEventListener('resize', resize);
  window.visualViewport?.addEventListener('resize', resize);
  requestAnimationFrame(frame);
}
