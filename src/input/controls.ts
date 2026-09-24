export type InputFrame = {
  strafe: number;
  forward: number;
  /** Levetta quasi a fondo, oppure Shift mentre si cammina da tastiera. */
  run: boolean;
  jump: boolean;
  interact: boolean;
};

export type Controls = {
  readonly yaw: number;
  readonly pitch: number;
  /** Modalità automobile: stesso avatar, guida a terra. */
  readonly drive: boolean;
  sample(dt: number): InputFrame;
  pokeInteract(): void;
  pokeJump(): void;
  setYaw(yaw: number, pitch?: number): void;
  setDrive(on: boolean): void;
};

const LOOK_SENS = 0.0052;

export function createControls(canvas: HTMLCanvasElement, root: HTMLElement): Controls {
  const down = new Set<string>();
  let yaw = 0;
  let pitch = 0.4;
  let interactEdge = false;
  let jumpEdge = false;
  let jumpHeld = false;
  let lookX = 0;
  let lookY = 0;

  const stick = document.createElement('div');
  stick.className = 'stick';
  stick.innerHTML = '<div class="stick-knob"></div><span>cammina</span>';
  const knob = stick.querySelector<HTMLElement>('.stick-knob');
  const stickLabel = stick.querySelector('span');
  if (!knob || !stickLabel) throw new Error('levetta incompleta');

  const jump = document.createElement('button');
  jump.type = 'button';
  jump.className = 'jump';
  jump.textContent = 'Salta';
  jump.setAttribute('aria-label', 'Salta');

  const vola = document.createElement('button');
  vola.type = 'button';
  vola.className = 'vola';
  vola.textContent = 'Vola';
  vola.setAttribute('aria-label', 'Vola, modalità automobile');
  vola.setAttribute('aria-pressed', 'false');

  root.append(stick, jump, vola);
  let drive = false;

  let stickId = -1;
  let originX = 0;
  let originY = 0;
  let stickX = 0;
  let stickY = 0;

  const placeKnob = (x: number, y: number) => {
    const max = 46;
    const len = Math.hypot(x, y) || 1;
    const clamped = Math.min(max, len);
    stickX = (x / len) * clamped;
    stickY = (y / len) * clamped;
    knob.style.transform = `translate(${stickX}px, ${stickY}px)`;
  };

  stick.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    stickId = event.pointerId;
    originX = event.clientX;
    originY = event.clientY;
    stick.setPointerCapture(event.pointerId);
    stick.classList.add('on');
  });
  stick.addEventListener('pointermove', (event) => {
    if (event.pointerId !== stickId) return;
    event.preventDefault();
    event.stopPropagation();
    placeKnob(event.clientX - originX, event.clientY - originY);
  });
  const endStick = (event: PointerEvent) => {
    if (event.pointerId !== stickId) return;
    stickId = -1;
    stickX = 0;
    stickY = 0;
    knob.style.transform = 'translate(0px, 0px)';
    stick.classList.remove('on');
  };
  stick.addEventListener('pointerup', endStick);
  stick.addEventListener('pointercancel', endStick);

  jump.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!jumpHeld) jumpEdge = true;
    jumpHeld = true;
    jump.classList.add('on');
  });
  const endJump = () => {
    jumpHeld = false;
    jump.classList.remove('on');
  };
  jump.addEventListener('pointerup', endJump);
  jump.addEventListener('pointercancel', endJump);
  jump.addEventListener('pointerleave', endJump);

  const setDrive = (on: boolean) => {
    drive = on;
    vola.classList.toggle('on', on);
    vola.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
  vola.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  vola.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDrive(!drive);
  });

  const keys = (event: KeyboardEvent, pressed: boolean) => {
    if (pressed && !event.repeat && (event.code === 'KeyE' || event.code === 'KeyF')) interactEdge = true;
    if (pressed && !event.repeat && event.code === 'Space') jumpEdge = true;
    if (pressed && !event.repeat && event.code === 'KeyV') setDrive(!drive);
    if (pressed) down.add(event.code);
    else down.delete(event.code);
    if (event.code === 'Space' || event.code.startsWith('Arrow')) event.preventDefault();
  };
  window.addEventListener('keydown', (event) => keys(event, true));
  window.addEventListener('keyup', (event) => keys(event, false));
  window.addEventListener('blur', () => {
    down.clear();
    stickId = -1;
    stickX = 0;
    stickY = 0;
    knob.style.transform = 'translate(0px, 0px)';
    jumpHeld = false;
  });

  let lookId = -1;
  let lastX = 0;
  let lastY = 0;
  const armLook = (event: PointerEvent) => {
    if (lookId !== -1) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const target = event.target;
    if (target instanceof Element && target.closest('button, .stick, .sheet, .panel, .atlas')) return;
    lookId = event.pointerId;
    lastX = event.clientX;
    lastY = event.clientY;
    const host = event.currentTarget;
    if (host instanceof Element && host.setPointerCapture) {
      try {
        host.setPointerCapture(event.pointerId);
      } catch {
        // Il puntatore può essere già finito: la vista resta sul pointerId, senza cattura.
      }
    }
  };
  const dragLook = (event: PointerEvent) => {
    const locked = document.pointerLockElement === canvas;
    if (event.pointerId !== lookId && !locked) return;
    if (locked && event.pointerId !== lookId && lookId !== -1) return;
    let dx = locked ? event.movementX : event.clientX - lastX;
    let dy = locked ? event.movementY : event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    dx = Math.max(-90, Math.min(90, dx));
    dy = Math.max(-90, Math.min(90, dy));
    lookX += dx;
    lookY += dy;
  };
  const endLook = (event: PointerEvent) => {
    if (event.pointerId !== lookId) return;
    lookId = -1;
  };
  canvas.addEventListener('pointerdown', armLook);
  canvas.addEventListener('pointermove', dragLook);
  canvas.addEventListener('pointerup', endLook);
  canvas.addEventListener('pointercancel', endLook);
  root.addEventListener('pointerdown', (event) => {
    if (event.target === root) armLook(event);
  });
  root.addEventListener('pointermove', dragLook);
  root.addEventListener('pointerup', endLook);
  root.addEventListener('pointercancel', endLook);

  return {
    get yaw() {
      return yaw;
    },
    get pitch() {
      return pitch;
    },
    get drive() {
      return drive;
    },
    sample(dt) {
      if (down.has('KeyQ')) yaw += dt * 1.6;
      if (down.has('KeyR')) yaw -= dt * 1.6;
      yaw -= lookX * LOOK_SENS;
      pitch = Math.min(1.05, Math.max(0.22, pitch + lookY * LOOK_SENS * 0.85));
      lookX = 0;
      lookY = 0;

      const stickMag = Math.hypot(stickX, stickY) / 46;
      let strafe = stickX / 46;
      let forward = -stickY / 46;
      const keyMove =
        down.has('KeyA') ||
        down.has('ArrowLeft') ||
        down.has('KeyD') ||
        down.has('ArrowRight') ||
        down.has('KeyW') ||
        down.has('ArrowUp') ||
        down.has('KeyS') ||
        down.has('ArrowDown');
      if (down.has('KeyA') || down.has('ArrowLeft')) strafe -= 1;
      if (down.has('KeyD') || down.has('ArrowRight')) strafe += 1;
      if (down.has('KeyW') || down.has('ArrowUp')) forward += 1;
      if (down.has('KeyS') || down.has('ArrowDown')) forward -= 1;
      const mag = Math.hypot(strafe, forward);
      if (mag > 1) {
        strafe /= mag;
        forward /= mag;
      }
      const shift = down.has('ShiftLeft') || down.has('ShiftRight');
      const run = !drive && (stickMag >= 0.82 || (shift && keyMove));
      stick.classList.toggle('run', !drive && stickMag >= 0.82);
      stick.classList.toggle('drive', drive);
      stickLabel.textContent = drive ? 'vola' : stickMag >= 0.82 ? 'corri' : 'cammina';
      const jump = jumpEdge;
      const interact = interactEdge;
      jumpEdge = false;
      interactEdge = false;
      return { strafe, forward, run, jump, interact };
    },
    pokeInteract() {
      interactEdge = true;
    },
    pokeJump() {
      jumpEdge = true;
    },
    setYaw(next, nextPitch) {
      yaw = next;
      if (nextPitch !== undefined) pitch = nextPitch;
    },
    setDrive,
  };
}
