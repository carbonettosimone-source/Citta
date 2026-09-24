import { PLANET_R, angles, onSphere } from '../world/planet';
import { MAP_PLACES, type MapPlace } from '../game/content';
import { clearMark, getMark, setMark } from '../game/guide';

export type Atlas = {
  readonly button: HTMLButtonElement;
  isOpen(): boolean;
  toggle(): void;
  close(): void;
  setEnabled(on: boolean): void;
  draw(px: number, py: number, pz: number, fx: number, fy: number, fz: number): void;
};

const KIND_COLOR: Record<MapPlace['kind'], string> = {
  pole: '#f0a03a',
  hub: '#d7d2ec',
  exit: '#f0a03a',
};

const CAM = 2.55;

export function createAtlas(root: HTMLElement): Atlas {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ghost';
  button.textContent = 'Mappa';
  button.setAttribute('aria-expanded', 'false');

  const overlay = document.createElement('div');
  overlay.className = 'atlas';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Globo di Mondo-1');
  overlay.innerHTML = `
    <div class="sheet map-sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">Globo · trascina e tocca</p>
          <h2>Mappa</h2>
        </div>
        <button type="button" class="ghost" id="map-close">Chiudi</button>
      </header>
      <canvas class="map-canvas" width="420" height="420" aria-label="Globo di Mondo-1, ruotabile"></canvas>
      <p class="map-caption" id="map-caption">Trascina per girare il pianeta. Tocca un luogo: la freccia segue l’arco più corto.</p>
      <ul class="map-list"></ul>
    </div>
  `;
  root.append(overlay);

  const needle = document.createElement('div');
  needle.className = 'needle';
  needle.hidden = true;
  needle.innerHTML = `
    <button type="button" class="needle-x" aria-label="Annulla la meta">×</button>
    <svg class="needle-arrow" viewBox="0 0 64 88" aria-hidden="true">
      <path d="M32 4 L56 44 H44 V82 H20 V44 H8 Z" fill="#ffc43a" stroke="#241c22" stroke-width="4" stroke-linejoin="round"/>
    </svg>
    <p class="needle-label"></p>
  `;
  root.append(needle);
  const arrow = needle.querySelector<SVGElement>('.needle-arrow');
  const needleLabel = needle.querySelector<HTMLElement>('.needle-label');
  const cancel = needle.querySelector<HTMLButtonElement>('.needle-x');
  if (!arrow || !needleLabel || !cancel) throw new Error('freccia incompleta');
  cancel.addEventListener('click', () => clearMark());

  const canvas = overlay.querySelector('canvas');
  const caption = overlay.querySelector<HTMLElement>('#map-caption');
  const list = overlay.querySelector('ul');
  const closeBtn = overlay.querySelector<HTMLButtonElement>('#map-close');
  if (!canvas || !caption || !list || !closeBtn) throw new Error('mappa incompleta');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('mappa senza canvas');
  const context: CanvasRenderingContext2D = ctx;

  let open = false;
  let enabled = true;
  let spin = 0;
  let tilt = 0.42;
  let userSpun = false;
  let drag: { x: number; y: number; moved: boolean } | null = null;
  let viewW = 420;
  let viewH = 420;

  const choose = (place: MapPlace) => {
    const at = onSphere(place.colat, place.az);
    setMark({ name: place.name, x: at.x, y: at.y, z: at.z });
    setOpen(false);
  };

  for (const place of MAP_PLACES) {
    const item = document.createElement('li');
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'map-chip';
    chip.textContent = place.name;
    chip.addEventListener('click', () => choose(place));
    item.append(chip);
    list.append(item);
  }

  const setOpen = (next: boolean) => {
    if (next && !enabled) return;
    open = next;
    overlay.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.classList.toggle('on', open);
    if (open) userSpun = false;
  };

  button.addEventListener('click', () => setOpen(!open));
  closeBtn.addEventListener('click', () => setOpen(false));
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) setOpen(false);
  });

  canvas.addEventListener('pointerdown', (event) => {
    drag = { x: event.clientX, y: event.clientY, moved: false };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (dx * dx + dy * dy > 16) drag.moved = true;
    spin -= dx * 0.008;
    tilt = Math.max(-1.15, Math.min(1.15, tilt + dy * 0.008));
    drag.x = event.clientX;
    drag.y = event.clientY;
    if (drag.moved) userSpun = true;
  });
  const endDrag = (event: PointerEvent) => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    if (!moved) pick(event.clientX, event.clientY);
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', () => {
    drag = null;
  });
  window.addEventListener('keydown', (event) => {
    if (event.repeat || event.code !== 'Escape' || open) return;
    clearMark();
  });

  const pick = (clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    const sx = ((clientX - rect.left) / rect.width) * canvas.width;
    const sy = ((clientY - rect.top) / rect.height) * canvas.height;
    const hit = rayHit(sx, sy, viewW, viewH);
    if (!hit) return;
    const world = unview(hit.x, hit.y, hit.z, spin, tilt);
    let best: MapPlace | null = null;
    let bestDot = 0.96;
    for (const place of MAP_PLACES) {
      const at = onSphere(place.colat, place.az, 1);
      const dot = at.x * world.x + at.y * world.y + at.z * world.z;
      if (dot > bestDot) {
        bestDot = dot;
        best = place;
      }
    }
    if (best) {
      choose(best);
      return;
    }
    setMark({ name: 'Segnato', x: world.x * PLANET_R, y: world.y * PLANET_R, z: world.z * PLANET_R });
    setOpen(false);
  };

  return {
    isOpen: () => open,
    toggle: () => setOpen(!open),
    close: () => setOpen(false),
    setEnabled(on) {
      enabled = on;
      button.disabled = !on;
      if (!on) setOpen(false);
    },
    draw(px, py, pz, fx, fy, fz) {
      const here = angles(px, py, pz);
      const mark = getMark();
      if (mark) {
        const there = angles(mark.x, mark.y, mark.z);
        const meters = Math.max(1, Math.round(angular(here.colat, here.az, there.colat, there.az) * PLANET_R));
        const deg = bearingDeg(px, py, pz, fx, fy, fz, mark.x, mark.y, mark.z);
        needle.hidden = false;
        const label = `Verso ${mark.name} · ${meters} m`;
        if (needleLabel.textContent !== label) needleLabel.textContent = label;
        if (deg !== null) {
          arrow.style.transform = `rotate(${deg.toFixed(1)}deg)`;
          needle.dataset.deg = deg.toFixed(1);
        }
        needle.dataset.meters = String(meters);
      } else {
        needle.hidden = true;
        delete needle.dataset.deg;
        delete needle.dataset.meters;
      }
      if (!open) return;
      if (!userSpun) spin = -here.az;
      const width = Math.round(Math.max(260, Math.min(420, canvas.clientWidth || 340)));
      const height = width;
      viewW = width;
      viewH = height;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      paintGlobe(context, width, height, spin, tilt, px, py, pz, fx, fy, fz);
    },
    button,
  };
}

function paintGlobe(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spin: number,
  tilt: number,
  px: number,
  py: number,
  pz: number,
  fx: number,
  fy: number,
  fz: number,
): void {
  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.4;
  const focal = radius * (CAM - 1);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#141028';
  ctx.fillRect(0, 0, width, height);

  const project = (x: number, y: number, z: number) => {
    const v = viewOf(x, y, z, spin, tilt);
    const f = focal / (CAM - v.z);
    return { x: cx + v.x * f, y: cy - v.y * f, z: v.z, f };
  };

  type Quad = { z: number; color: string; pts: { x: number; y: number }[] };
  const quads: Quad[] = [];
  const bands = 8;
  const slices = 10;
  for (let row = 0; row < bands; row += 1) {
    const c0 = 0.08 + ((Math.PI - 0.16) * row) / bands;
    const c1 = 0.08 + ((Math.PI - 0.16) * (row + 1)) / bands;
    const lat = (c0 + c1) / 2;
    const hex = lat < 0.28 ? 0x9eb6ef : lat > 2.5 ? 0x6a5a96 : 0xc6b7a2;
    for (let col = 0; col < slices; col += 1) {
      const z0 = -Math.PI + (Math.PI * 2 * col) / slices;
      const z1 = -Math.PI + (Math.PI * 2 * (col + 1)) / slices;
      const corners = [onSphere(c0, z0, 1), onSphere(c0, z1, 1), onSphere(c1, z1, 1), onSphere(c1, z0, 1)];
      const projected = corners.map((p) => project(p.x, p.y, p.z));
      const depth = (projected[0]?.z ?? 0) + (projected[1]?.z ?? 0) + (projected[2]?.z ?? 0) + (projected[3]?.z ?? 0);
      if (depth < 0.15) continue;
      const shade = 0.42 + 0.58 * Math.max(0, depth / 4);
      quads.push({ z: depth, color: shadeHex(hex, shade), pts: projected });
    }
  }
  quads.sort((a, b) => a.z - b.z);
  for (const quad of quads) {
    const first = quad.pts[0];
    if (!first) continue;
    ctx.beginPath();
    ctx.moveTo(first.x, first.y);
    for (const pt of quad.pts.slice(1)) ctx.lineTo(pt.x, pt.y);
    ctx.closePath();
    ctx.fillStyle = quad.color;
    ctx.fill();
  }

  ctx.lineCap = 'round';
  const hubPlace = MAP_PLACES.find((item) => item.id === 'hub');
  const exitPlace = MAP_PLACES.find((item) => item.id === 'exit');
  if (hubPlace && exitPlace) {
    strokeMeridian(ctx, project, hubPlace.az, Math.min(hubPlace.colat, exitPlace.colat), Math.max(hubPlace.colat, exitPlace.colat), '#f0a03a', 2.5);
  }

  const drawn: { x: number; y: number }[] = [];
  const label = (x: number, y: number, text: string) => {
    for (const prev of drawn) {
      if ((prev.x - x) ** 2 + (prev.y - y) ** 2 < 34 * 34) return;
    }
    drawn.push({ x, y });
    ctx.font = '700 12px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(16, 12, 32, 0.9)';
    ctx.fillStyle = '#ffe4f2';
    ctx.strokeText(text, x, y - 8);
    ctx.fillText(text, x, y - 8);
  };

  for (const place of MAP_PLACES) {
    const at = project(...unit(onSphere(place.colat, place.az, 1)));
    if (at.z < 0.2) continue;
    ctx.fillStyle = KIND_COLOR[place.kind];
    ctx.beginPath();
    ctx.arc(at.x, at.y, place.kind === 'pole' ? 4 : 5.5, 0, Math.PI * 2);
    ctx.fill();
    if (place.kind !== 'pole') label(at.x, at.y, short(place));
  }

  const mark = getMark();
  if (mark) {
    const at = project(...unit(mark));
    if (at.z > 0.12) {
      ctx.strokeStyle = '#ffc43a';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(at.x, at.y, 9, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  const you = project(...unit({ x: px, y: py, z: pz }));
  const ahead = project(...unit(normalize(px + fx * 18, py + fy * 18, pz + fz * 18)));
  if (you.z > 0.05) {
    ctx.strokeStyle = '#ffc43a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(you.x, you.y);
    ctx.lineTo(ahead.x, ahead.y);
    ctx.stroke();
    ctx.fillStyle = '#ffc43a';
    ctx.beginPath();
    ctx.arc(you.x, you.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#141028';
    ctx.beginPath();
    ctx.arc(you.x, you.y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function strokeMeridian(
  ctx: CanvasRenderingContext2D,
  project: (x: number, y: number, z: number) => { x: number; y: number; z: number },
  az: number,
  c0: number,
  c1: number,
  color: string,
  width: number,
): void {
  ctx.beginPath();
  let pen = false;
  for (let i = 0; i <= 24; i += 1) {
    const p = onSphere(c0 + ((c1 - c0) * i) / 24, az, 1);
    const at = project(p.x, p.y, p.z);
    if (at.z < 0.08) {
      pen = false;
      continue;
    }
    if (!pen) ctx.moveTo(at.x, at.y);
    else ctx.lineTo(at.x, at.y);
    pen = true;
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function viewOf(x: number, y: number, z: number, spin: number, tilt: number): { x: number; y: number; z: number } {
  const c = Math.cos(spin);
  const s = Math.sin(spin);
  const x1 = c * x + s * z;
  const z1 = -s * x + c * z;
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  return { x: x1, y: ct * y - st * z1, z: st * y + ct * z1 };
}

function unview(x: number, y: number, z: number, spin: number, tilt: number): { x: number; y: number; z: number } {
  const ct = Math.cos(-tilt);
  const st = Math.sin(-tilt);
  const y1 = ct * y - st * z;
  const z1 = st * y + ct * z;
  const c = Math.cos(-spin);
  const s = Math.sin(-spin);
  return { x: c * x + s * z1, y: y1, z: -s * x + c * z1 };
}

function rayHit(sx: number, sy: number, width: number, height: number): { x: number; y: number; z: number } | null {
  const radius = width * 0.4;
  const focal = radius * (CAM - 1);
  const fx = (sx - width / 2) / focal;
  const fy = -(sy - height / 2) / focal;
  const dl = Math.hypot(fx, fy, 1);
  const dx = fx / dl;
  const dy = fy / dl;
  const dz = -1 / dl;
  const b = CAM * dz;
  const c = CAM * CAM - 1;
  const disc = b * b - c;
  if (disc < 0) return null;
  const root = Math.sqrt(disc);
  const t = -b - root > 0 ? -b - root : -b + root;
  if (t < 0) return null;
  return { x: dx * t, y: dy * t, z: CAM + dz * t };
}

function unit(p: { x: number; y: number; z: number }): [number, number, number] {
  const len = Math.hypot(p.x, p.y, p.z) || 1;
  return [p.x / len, p.y / len, p.z / len];
}

function normalize(x: number, y: number, z: number): { x: number; y: number; z: number } {
  const len = Math.hypot(x, y, z) || 1;
  return { x: x / len, y: y / len, z: z / len };
}

function shadeHex(hex: number, shade: number): string {
  const r = Math.round(((hex >> 16) & 255) * shade);
  const g = Math.round(((hex >> 8) & 255) * shade);
  const b = Math.round((hex & 255) * shade);
  return `rgb(${r}, ${g}, ${b})`;
}

function short(place: MapPlace): string {
  if (place.kind === 'hub') return 'Hub';
  if (place.kind === 'exit') return 'Exit';
  if (place.kind === 'pole') return 'Faro';
  return place.name;
}

/** Gradi orari della tangente geodetica rispetto alla faccia. 0 = freccia in su. */
function bearingDeg(
  px: number,
  py: number,
  pz: number,
  fx: number,
  fy: number,
  fz: number,
  mx: number,
  my: number,
  mz: number,
): number | null {
  const ul = Math.hypot(px, py, pz) || 1;
  const ux = px / ul;
  const uy = py / ul;
  const uz = pz / ul;
  const ml = Math.hypot(mx, my, mz) || 1;
  const tx = mx / ml;
  const ty = my / ml;
  const tz = mz / ml;
  const dot = tx * ux + ty * uy + tz * uz;
  let gx = tx - ux * dot;
  let gy = ty - uy * dot;
  let gz = tz - uz * dot;
  const gl = Math.hypot(gx, gy, gz);
  if (gl < 1e-4) return null;
  gx /= gl;
  gy /= gl;
  gz /= gl;
  const rx = uy * fz - uz * fy;
  const ry = uz * fx - ux * fz;
  const rz = ux * fy - uy * fx;
  const rl = Math.hypot(rx, ry, rz) || 1;
  const ahead = gx * fx + gy * fy + gz * fz;
  const right = gx * (rx / rl) + gy * (ry / rl) + gz * (rz / rl);
  return (Math.atan2(right, ahead) * 180) / Math.PI;
}

function angular(c0: number, a0: number, c1: number, a1: number): number {
  const s0 = Math.sin(c0);
  const s1 = Math.sin(c1);
  const dot = Math.cos(c0) * Math.cos(c1) + s0 * s1 * Math.cos(a0 - a1);
  return Math.acos(Math.min(1, Math.max(-1, dot)));
}
