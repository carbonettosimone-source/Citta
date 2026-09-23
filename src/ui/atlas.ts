import { BIOMES, PLANET_R, angles, biomeAzimuth, eastTangent, northTangent } from '../world/planet';
import { MAP_PLACES, type MapPlace } from '../game/content';
import { HUB_PLAZA } from '../world/towns';

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
  hub: '#ff4d86',
  village: '#c9b6ff',
  biome: '#9ad7c4',
  games: '#e39a32',
  venue: '#f06a45',
  lookout: '#7ec8ee',
};

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
  overlay.setAttribute('aria-label', 'Mappa di Mondo-1');
  overlay.innerHTML = `
    <div class="sheet map-sheet">
      <header class="sheet-head">
        <div>
          <p class="eyebrow">Modulo 16 m · cardo e decumano</p>
          <h2>Mappa</h2>
        </div>
        <button type="button" class="ghost" id="map-close">Chiudi</button>
      </header>
      <canvas class="map-canvas" width="420" height="512" aria-label="Pianta della città, modulo 16 metri"></canvas>
      <p class="map-caption" id="map-caption">In alto il pianeta. In basso la pianta: cardo e decumano.</p>
      <ul class="map-list"></ul>
    </div>
  `;
  root.append(overlay);

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
  let selected = '';

  for (const place of MAP_PLACES) {
    if (place.kind === 'biome') continue;
    const item = document.createElement('li');
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'map-chip';
    chip.textContent = place.name;
    chip.addEventListener('click', () => {
      selected = place.id;
      caption.textContent = `${place.name}. Il triangolo indica dove guardi.`;
    });
    item.append(chip);
    list.append(item);
  }

  const setOpen = (next: boolean) => {
    if (next && !enabled) return;
    open = next;
    overlay.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.classList.toggle('on', open);
  };

  button.addEventListener('click', () => setOpen(!open));
  closeBtn.addEventListener('click', () => setOpen(false));
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) setOpen(false);
  });

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
      if (!open) return;
      const width = Math.round(Math.max(280, Math.min(420, canvas.clientWidth || 360)));
      const height = Math.round(width * 1.22);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      paint(context, width, height, px, py, pz, fx, fy, fz, selected);
      if (selected) {
        const place = MAP_PLACES.find((item) => item.id === selected);
        if (place) {
          const here = angles(px, py, pz);
          const meters = angular(here.colat, here.az, place.colat, place.az) * PLANET_R;
          caption.textContent = `${place.name} · circa ${Math.round(meters)} m`;
        }
      }
    },
    button,
  };
}

function paint(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  px: number,
  py: number,
  pz: number,
  fx: number,
  fy: number,
  fz: number,
  selected: string,
): void {
  ctx.clearRect(0, 0, width, height);
  const planH = Math.round(height * 0.78);
  paintPlan(ctx, width, planH, px, py, pz, fx, fy, fz);
  const planetR = Math.min(width * 0.12, (height - planH) * 0.32);
  paintPlanet(ctx, width * 0.5, planH + (height - planH) * 0.52, planetR, px, py, pz, fx, fy, fz, selected);
}

function paintPlanet(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  px: number,
  py: number,
  pz: number,
  fx: number,
  fy: number,
  fz: number,
  selected: string,
): void {
  ctx.fillStyle = '#10241c';
  ctx.beginPath();
  ctx.arc(cx, cy, radius + Math.max(3, radius * 0.12), 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < BIOMES.length; i += 1) {
    const biome = BIOMES[i];
    if (!biome) continue;
    const a0 = biomeAzimuth(i) - Math.PI / BIOMES.length;
    const a1 = biomeAzimuth(i) + Math.PI / BIOMES.length;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    for (let s = 0; s <= 8; s += 1) {
      const az = a0 + ((a1 - a0) * s) / 8;
      const at = project(Math.PI, az, cx, cy, radius);
      ctx.lineTo(at.x, at.y);
    }
    ctx.closePath();
    ctx.fillStyle = hex(biome.ground);
    ctx.fill();
  }

  ctx.strokeStyle = 'rgba(255, 241, 208, 0.85)';
  ctx.lineWidth = Math.max(1, radius * 0.04);
  ctx.beginPath();
  const ring = (1.02 / Math.PI) * radius;
  ctx.arc(cx, cy, ring, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(74, 59, 56, 0.9)';
  ctx.lineWidth = Math.max(1, radius * 0.03);
  for (let i = 0; i < BIOMES.length; i += 1) {
    const edge = biomeAzimuth(i) - Math.PI / BIOMES.length;
    const rim = project(Math.PI * 0.92, edge, cx, cy, radius);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(rim.x, rim.y);
    ctx.stroke();
  }

  const dot = Math.max(2, radius * 0.06);
  for (const place of MAP_PLACES) {
    if (isCity(place.id) || place.kind === 'biome' || place.kind === 'pole') continue;
    const at = project(place.colat, place.az, cx, cy, radius);
    ctx.fillStyle = place.id === selected ? '#ffffff' : KIND_COLOR[place.kind];
    ctx.beginPath();
    ctx.arc(at.x, at.y, dot, 0, Math.PI * 2);
    ctx.fill();
  }

  const here = angles(px, py, pz);
  const you = project(here.colat, here.az, cx, cy, radius);
  const ahead = projectPoint(px + fx * 8, py + fy * 8, pz + fz * 8, cx, cy, radius);
  ctx.strokeStyle = '#f0a03a';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(you.x, you.y);
  ctx.lineTo(ahead.x, ahead.y);
  ctx.stroke();
  ctx.fillStyle = '#f0a03a';
  ctx.beginPath();
  ctx.moveTo(ahead.x, ahead.y);
  ctx.lineTo(you.x - (ahead.y - you.y) * 0.35, you.y + (ahead.x - you.x) * 0.35);
  ctx.lineTo(you.x + (ahead.y - you.y) * 0.35, you.y - (ahead.x - you.x) * 0.35);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#10241c';
  ctx.beginPath();
  ctx.arc(you.x, you.y, Math.max(2, radius * 0.05), 0, Math.PI * 2);
  ctx.fill();
}

function isCity(id: string): boolean {
  return id === 'hub' || id === 'quarter' || id === 'mercato' || id === 'games' || id === 'botteghe' || id === 'porta' || id === 'east-gate' || id === 'dune-gate' || id === 'terrazza';
}

const HOME_AZ = biomeAzimuth(0);
const HOME_NORTH = northTangent(0.2, HOME_AZ);
const HOME_EAST = eastTangent(HOME_AZ);

function cityLocal(x: number, y: number, z: number): { n: number; e: number } {
  const dx = x - HUB_PLAZA.x;
  const dy = y - HUB_PLAZA.y;
  const dz = z - HUB_PLAZA.z;
  return {
    n: dx * HOME_NORTH.x + dy * HOME_NORTH.y + dz * HOME_NORTH.z,
    e: dx * HOME_EAST.x + dy * HOME_EAST.y + dz * HOME_EAST.z,
  };
}

/** Pianta della griglia: cardo verticale, decumano orizzontale, nodi ogni 16 m. */
function paintPlan(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  px: number,
  py: number,
  pz: number,
  fx: number,
  fy: number,
  fz: number,
): void {
  ctx.fillStyle = '#1a1030';
  ctx.fillRect(8, 8, width - 16, height - 12);
  ctx.strokeStyle = 'rgba(255, 77, 134, 0.9)';
  ctx.lineWidth = 2;
  ctx.strokeRect(8, 8, width - 16, height - 12);
  ctx.font = '700 15px Outfit, sans-serif';
  ctx.fillStyle = '#ffe4f2';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('N → faro', 18, 26);
  ctx.textAlign = 'right';
  ctx.fillText('E → menta', width - 18, 26);

  const spanE = 78;
  const spanN = 74;
  const scale = Math.min((width - 72) / spanE, (height - 58) / spanN);
  const originX = width / 2;
  const originY = 34 + (height - 46) * (38 / spanN);
  const pt = (n: number, e: number) => ({ x: originX + e * scale, y: originY - n * scale });
  const line = (n0: number, e0: number, n1: number, e1: number, widthPx: number, color: string) => {
    const a = pt(n0, e0);
    const b = pt(n1, e1);
    ctx.strokeStyle = color;
    ctx.lineWidth = widthPx;
    ctx.lineCap = 'square';
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  };
  const primary = Math.max(5, scale * 1.15);
  const secondary = Math.max(3, scale * 0.62);
  line(-36, 0, 30, 0, primary, '#f070a8');
  line(0, -36, 0, 36, primary, '#f070a8');
  line(16, -24, 16, 24, secondary, '#d4d0ee');
  line(-16, -24, -16, 24, secondary, '#d4d0ee');
  line(-24, 16, 24, 16, secondary, '#d4d0ee');
  line(-24, -16, 24, -16, secondary, '#d4d0ee');
  line(7.4, 8, 13.2, 8, 2, '#9ad7c4');
  line(-13.2, 8, -7.4, 8, 2, '#9ad7c4');
  line(7.4, -8, 13.2, -8, 2, '#9ad7c4');
  line(-13.2, -8, -7.4, -8, 2, '#9ad7c4');
  const forum = [pt(6, 6), pt(6, -6), pt(-6, -6), pt(-6, 6)];
  ctx.strokeStyle = '#ff4d86';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  const first = forum[0];
  if (first) ctx.moveTo(first.x, first.y);
  for (const corner of forum.slice(1)) ctx.lineTo(corner.x, corner.y);
  ctx.closePath();
  ctx.stroke();

  const node = (n: number, e: number, label: string, fill: string, dx: number, dy: number) => {
    const at = pt(n, e);
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(at.x, at.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '700 13px Outfit, sans-serif';
    ctx.fillStyle = '#ffe4f2';
    ctx.textAlign = 'center';
    ctx.fillText(label, at.x + dx, at.y + dy);
  };
  node(0, 0, 'Piazza', '#ff4d86', 0, 16);
  node(16, 0, 'Corallo', '#ff4d86', 0, -14);
  node(0, 16, 'Mercato', '#22c8ee', 0, -14);
  node(0, -16, 'Botteghe', '#7c4dff', 0, -14);
  node(16, 16, 'Giochi', '#ffc43a', 0, -14);
  node(26, 0, 'Terrazza', '#7ec8ee', 36, 0);
  node(-32, 0, 'Sud', '#c9b6ff', 0, -14);
  node(0, 32, 'Est', '#c9b6ff', 0, 16);
  node(0, -32, 'Ovest', '#c9b6ff', 0, 16);

  const here = cityLocal(px, py, pz);
  const face = cityLocal(px + fx, py + fy, pz + fz);
  const you = pt(here.n, here.e);
  const ahead = pt(here.n + (face.n - here.n) * 6, here.e + (face.e - here.e) * 6);
  ctx.strokeStyle = '#f0a03a';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(you.x, you.y);
  ctx.lineTo(ahead.x, ahead.y);
  ctx.stroke();
  ctx.fillStyle = '#f0a03a';
  ctx.beginPath();
  ctx.arc(you.x, you.y, 4, 0, Math.PI * 2);
  ctx.fill();
}

function project(colat: number, az: number, cx: number, cy: number, radius: number): { x: number; y: number } {
  const r = Math.min(1, Math.max(0, colat / Math.PI)) * radius;
  return { x: cx + Math.sin(az) * r, y: cy - Math.cos(az) * r };
}

function projectPoint(x: number, y: number, z: number, cx: number, cy: number, radius: number): { x: number; y: number } {
  const pose = angles(x, y, z);
  return project(pose.colat, pose.az, cx, cy, radius);
}

function angular(c0: number, a0: number, c1: number, a1: number): number {
  const s0 = Math.sin(c0);
  const s1 = Math.sin(c1);
  const dot = Math.cos(c0) * Math.cos(c1) + s0 * s1 * Math.cos(a0 - a1);
  return Math.acos(Math.min(1, Math.max(-1, dot)));
}

function hex(value: number): string {
  return `#${value.toString(16).padStart(6, '0')}`;
}
