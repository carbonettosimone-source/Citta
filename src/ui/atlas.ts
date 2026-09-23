import { BIOMES, PLANET_R, angles, biomeAzimuth } from '../world/planet';
import { MAP_PLACES, type MapPlace } from '../game/content';

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
  hub: '#f6f1e6',
  village: '#f6f1e6',
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
      <canvas class="map-canvas" width="640" height="640" aria-label="Pianeta con i luoghi"></canvas>
      <p class="map-caption" id="map-caption">Il faro è il centro. Il triangolo sei tu.</p>
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
      const size = Math.min(640, Math.floor(Math.min(window.innerWidth, window.innerHeight) * 0.92));
      if (canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
      }
      paint(context, size, px, py, pz, fx, fy, fz, selected);
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
  size: number,
  px: number,
  py: number,
  pz: number,
  fx: number,
  fy: number,
  fz: number,
  selected: string,
): void {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.4;
  ctx.clearRect(0, 0, size, size);
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
    ctx.strokeText(label, at.x, at.y - 12);
    ctx.fillText(label, at.x, at.y - 12);
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
}

function mapLabel(place: MapPlace): string | null {
  if (place.kind === 'biome' || place.kind === 'pole') return null;
  if (place.kind === 'hub') return 'Città';
  if (place.kind === 'games') return 'Giochi';
  if (place.kind === 'venue') return 'Ostacoli';
  if (place.kind === 'lookout') return 'Belvedere';
  if (place.id === 'mint') return 'Menta';
  if (place.id === 'violet') return 'Viola';
  if (place.id === 'crystal-town') return 'Cristallo';
  if (place.id === 'lantern') return 'Lanterne';
  return place.name;
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
