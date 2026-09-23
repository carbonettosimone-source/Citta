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
          <p class="eyebrow">Mondo-1 · nord al centro</p>
          <h2>Mappa</h2>
        </div>
        <button type="button" class="ghost" id="map-close">Chiudi</button>
      </header>
      <canvas class="map-canvas" width="640" height="820" aria-label="Pianeta e pianta della città"></canvas>
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
      const size = 640;
      const width = size;
      const height = Math.round(size * 1.28);
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
  const cx = width / 2;
  const cy = height * 0.3;
  const radius = Math.min(width, height) * 0.26;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#10241c';
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 8, 0, Math.PI * 2);
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
  ctx.lineWidth = 3;
  ctx.beginPath();
  const ring = (1.02 / Math.PI) * radius;
  ctx.arc(cx, cy, ring, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(74, 59, 56, 0.9)';
  ctx.lineWidth = 2;
  for (let i = 0; i < BIOMES.length; i += 1) {
    const edge = biomeAzimuth(i) - Math.PI / BIOMES.length;
    const rim = project(Math.PI * 0.92, edge, cx, cy, radius);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(rim.x, rim.y);
    ctx.stroke();
  }

  ctx.font = '600 13px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const place of MAP_PLACES) {
    if (isCity(place.id)) continue;
    const at = project(place.colat, place.az, cx, cy, radius);
    const hot = place.id === selected;
    ctx.fillStyle = '#10241c';
    ctx.beginPath();
    ctx.arc(at.x, at.y, place.kind === 'biome' ? 4 : 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = hot ? '#ffffff' : KIND_COLOR[place.kind];
    ctx.beginPath();
    ctx.arc(at.x, at.y, place.kind === 'biome' ? 2.5 : 5.5, 0, Math.PI * 2);
    ctx.fill();
    const label = mapLabel(place);
    if (!label) continue;
    ctx.font = '700 12px Outfit, sans-serif';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(16, 36, 28, 0.9)';
    ctx.fillStyle = '#f6f1e6';
    const nudge = labelNudge(place.id);
    ctx.strokeText(label, at.x, at.y - 12 + nudge);
    ctx.fillText(label, at.x, at.y - 12 + nudge);
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
  ctx.arc(you.x, you.y, 4, 0, Math.PI * 2);
  ctx.fill();
  paintPlan(ctx, width, height, px, py, pz, fx, fy, fz);
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
  const bandTop = height * 0.56;
  ctx.fillStyle = '#1a1030';
  ctx.fillRect(12, bandTop, width - 24, height - bandTop - 10);
  ctx.strokeStyle = 'rgba(255, 77, 134, 0.85)';
  ctx.lineWidth = 2;
  ctx.strokeRect(12, bandTop, width - 24, height - bandTop - 10);
  ctx.font = '700 13px Outfit, sans-serif';
  ctx.fillStyle = '#ffe4f2';
  ctx.textAlign = 'left';
  ctx.fillText('Pianta · modulo 16 m', 22, bandTop + 18);

  const originX = width / 2;
  const originY = bandTop + (height - bandTop) * 0.56;
  const scale = (width * 0.42) / 40;
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
  line(-36, 0, 28, 0, 7, '#f070a8');
  line(0, -36, 0, 36, 7, '#f070a8');
  line(16, -24, 16, 24, 4, '#d4d0ee');
  line(-16, -24, -16, 24, 4, '#d4d0ee');
  line(-24, 16, 24, 16, 4, '#d4d0ee');
  line(-24, -16, 24, -16, 4, '#d4d0ee');
  line(7.4, 8, 13.2, 8, 2, '#9ad7c4');
  line(-13.2, 8, -7.4, 8, 2, '#9ad7c4');
  line(7.4, -8, 13.2, -8, 2, '#9ad7c4');
  line(-13.2, -8, -7.4, -8, 2, '#9ad7c4');

  const node = (n: number, e: number, label: string, fill: string) => {
    const at = pt(n, e);
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(at.x, at.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '700 11px Outfit, sans-serif';
    ctx.fillStyle = '#ffe4f2';
    ctx.textAlign = 'center';
    ctx.fillText(label, at.x, at.y - 10);
  };
  node(0, 0, 'Piazza', '#ff4d86');
  node(16, 0, 'Corallo', '#ff4d86');
  node(0, 16, 'Mercato', '#22c8ee');
  node(0, -16, 'Botteghe', '#7c4dff');
  node(16, 16, 'Giochi', '#ffc43a');
  node(26, 0, 'Terrazza', '#7ec8ee');
  node(-32, 0, 'Sud', '#c9b6ff');
  node(0, 32, 'Est', '#c9b6ff');
  node(0, -32, 'Ovest', '#c9b6ff');

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

function mapLabel(place: MapPlace): string | null {
  if (place.kind === 'biome' || place.kind === 'pole') return null;
  if (place.kind === 'hub') return 'Piazza';
  if (place.id === 'quarter') return 'Corallo';
  if (place.id === 'mercato') return 'Mercato';
  if (place.kind === 'games') return 'Giochi';
  if (place.id === 'botteghe') return 'Botteghe';
  if (place.id === 'porta') return 'Porta';
  if (place.id === 'east-gate') return 'Est';
  if (place.id === 'dune-gate') return 'Dune';
  if (place.id === 'terrazza') return 'Terrazza';
  if (place.kind === 'venue') return 'Ostacoli';
  if (place.kind === 'lookout') return 'Belvedere';
  if (place.id === 'mint') return 'Menta';
  if (place.id === 'violet') return 'Viola';
  if (place.id === 'crystal-town') return 'Cristallo';
  if (place.id === 'lantern') return 'Lanterne';
  return place.name;
}

function labelNudge(id: string): number {
  if (id === 'games') return 16;
  if (id === 'mercato') return -4;
  if (id === 'terrazza') return -14;
  if (id === 'quarter') return 12;
  if (id === 'dune-gate') return 14;
  if (id === 'botteghe') return -12;
  if (id === 'porta') return 12;
  return 0;
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
