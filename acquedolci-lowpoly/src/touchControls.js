/**
 * Controlli touch: joystick sinistro (movimento) + zoom/sprint a destra.
 * OrbitControls gestisce lo sguardo (trascinamento sul canvas).
 */
export function createTouchControls({ onZoom } = {}) {
  const root = document.createElement('div');
  root.id = 'touch-controls';
  root.innerHTML = `
    <div id="joystick" aria-hidden="true">
      <div id="joystick-base">
        <div id="joystick-knob"></div>
      </div>
    </div>
    <div id="touch-actions">
      <button type="button" id="btn-zoom-in" aria-label="Zoom avanti">+</button>
      <button type="button" id="btn-zoom-out" aria-label="Zoom indietro">−</button>
      <button type="button" id="btn-sprint" aria-label="Corri">⚡</button>
    </div>
  `;
  document.body.appendChild(root);

  const base = root.querySelector('#joystick-base');
  const knob = root.querySelector('#joystick-knob');
  const btnIn = root.querySelector('#btn-zoom-in');
  const btnOut = root.querySelector('#btn-zoom-out');
  const btnSprint = root.querySelector('#btn-sprint');

  const state = { x: 0, y: 0, sprint: false, active: false };
  const maxR = 48;
  let pointerId = null;

  function setKnob(dx, dy) {
    const len = Math.hypot(dx, dy) || 1;
    const s = len > maxR ? maxR / len : 1;
    const kx = dx * s;
    const ky = dy * s;
    knob.style.transform = `translate(${kx}px, ${ky}px)`;
    // y schermo: su = negativo → avanti (y stato negativo)
    state.x = kx / maxR;
    state.y = ky / maxR;
  }

  function resetKnob() {
    knob.style.transform = 'translate(0px, 0px)';
    state.x = 0;
    state.y = 0;
    state.active = false;
    pointerId = null;
  }

  function onDown(e) {
    e.preventDefault();
    e.stopPropagation();
    pointerId = e.pointerId;
    state.active = true;
    base.setPointerCapture(e.pointerId);
    const rect = base.getBoundingClientRect();
    setKnob(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
  }

  function onMove(e) {
    if (pointerId !== e.pointerId) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = base.getBoundingClientRect();
    setKnob(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
  }

  function onUp(e) {
    if (pointerId !== e.pointerId) return;
    e.preventDefault();
    e.stopPropagation();
    try {
      base.releasePointerCapture(e.pointerId);
    } catch {
      /* */
    }
    resetKnob();
  }

  base.addEventListener('pointerdown', onDown, { passive: false });
  base.addEventListener('pointermove', onMove, { passive: false });
  base.addEventListener('pointerup', onUp, { passive: false });
  base.addEventListener('pointercancel', onUp, { passive: false });

  function bindHold(btn, setVal) {
    const down = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setVal(true);
      btn.classList.add('active');
    };
    const up = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setVal(false);
      btn.classList.remove('active');
    };
    btn.addEventListener('pointerdown', down, { passive: false });
    btn.addEventListener('pointerup', up, { passive: false });
    btn.addEventListener('pointercancel', up, { passive: false });
    btn.addEventListener('pointerleave', up, { passive: false });
  }

  bindHold(btnSprint, (v) => {
    state.sprint = v;
  });

  btnIn.addEventListener(
    'pointerdown',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onZoom?.(-4);
    },
    { passive: false },
  );
  btnOut.addEventListener(
    'pointerdown',
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onZoom?.(4);
    },
    { passive: false },
  );

  function refreshVisibility() {
    const show =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      matchMedia('(pointer: coarse)').matches ||
      matchMedia('(max-width: 900px)').matches;
    root.classList.toggle('visible', show);
  }
  refreshVisibility();
  addEventListener('resize', refreshVisibility);

  return {
    state,
    isVisible: () => root.classList.contains('visible'),
  };
}
