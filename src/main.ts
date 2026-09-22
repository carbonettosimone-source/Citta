import './style.css';
import { createChallenges } from './game/challenges';
import { FINISH } from './game/content';
import { createSession } from './game/session';
import { createPlayer } from './player/player';
import { createPipeline } from './render/pipeline';
import { createGradientMap } from './render/toon';
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

  const gradient = createGradientMap();
  const pipeline = createPipeline(view);
  const hub = createHub(pipeline.scene, gradient);
  const player = createPlayer(pipeline.scene, view, gradient);
  const hud = createHud(root, session, () => {
    interactQueued = true;
  });
  const challenges = createChallenges(pipeline.scene, gradient);

  let courseTold = false;
  let last = performance.now();

  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const frozen = hud.blocksPlay();
    player.update(dt, hub.blockers, frozen);

    if (!frozen && !session.courseClear) {
      const dx = player.x - FINISH.x;
      const dz = player.z - FINISH.z;
      if (dx * dx + dz * dz <= FINISH.r * FINISH.r) {
        session.courseClear = true;
        if (!courseTold) {
          courseTold = true;
          hud.toast('Percorso libero. Torna al cancello ostacoli.');
        }
      }
    }

    const interact = !frozen && (player.consumeInteract() || interactQueued);
    interactQueued = false;
    challenges.update(now / 1000, player, interact, session, hud);
    player.syncCamera(pipeline.camera, dt);
    hub.sky.position.copy(pipeline.camera.position);
    pipeline.render();
    requestAnimationFrame(frame);
  };

  pipeline.resize();
  window.addEventListener('resize', () => pipeline.resize());
  requestAnimationFrame(frame);
}
