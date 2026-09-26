/**
 * Navigazione: minimappa (orientata come la camera), mappa intera (tocca → vai lì),
 * chip con il nome della via. Canvas 2D con uno strato statico pre-disegnato:
 * a ogni frame solo un drawImage ruotato + il segnalino del giocatore.
 */
const PX_PER_M = 0.5;

export function createNavigation({ city, getPlayer, getYaw, onTeleport, nearestRoad }) {
  const fps = city.buildings.footprints || [];
  const roads = city.roads?.polylines || [];
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  const grow = (x, z) => {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  };
  for (const f of fps) { grow(f.minX, f.minZ); grow(f.maxX, f.maxZ); }
  for (const r of roads) for (const p of r.pts) grow(p.x, p.z);
  const pad = 60;
  minX -= pad; minZ -= pad; maxX += pad; maxZ += pad;
  const scale = Math.min(PX_PER_M, 2600 / Math.max(maxX - minX, maxZ - minZ));
  const W = Math.ceil((maxX - minX) * scale), H = Math.ceil((maxZ - minZ) * scale);

  // ---- strato statico
  const layer = document.createElement('canvas');
  layer.width = W;
  layer.height = H;
  const g = layer.getContext('2d');
  g.fillStyle = '#e9e4d6';
  g.fillRect(0, 0, W, H);
  g.lineCap = 'round';
  g.lineJoin = 'round';
  const toX = (x) => (x - minX) * scale, toY = (z) => (z - minZ) * scale;
  const drawRoads = (filter, color, extra) => {
    g.strokeStyle = color;
    for (const r of roads) {
      if (!filter(r)) continue;
      g.lineWidth = Math.max(1.2, (r.width + extra) * scale);
      g.beginPath();
      r.pts.forEach((p, i) => (i ? g.lineTo(toX(p.x), toY(p.z)) : g.moveTo(toX(p.x), toY(p.z))));
      g.stroke();
    }
  };
  const foot = (r) => ['footway', 'path', 'steps', 'pedestrian', 'cycleway'].includes(r.highway);
  drawRoads((r) => !foot(r), '#ffffff', 3.2);
  drawRoads((r) => !foot(r), '#8d8a84', 0);
  drawRoads(foot, '#c9b99a', 0);
  g.fillStyle = '#c98b6d';
  g.strokeStyle = '#a86f55';
  g.lineWidth = 0.6;
  for (const f of fps) {
    g.beginPath();
    f.pts.forEach((p, i) => (i ? g.lineTo(toX(p.x), toY(p.z)) : g.moveTo(toX(p.x), toY(p.z))));
    g.closePath();
    g.fill();
    g.stroke();
  }

  // ---- DOM
  const mini = document.createElement('canvas');
  mini.id = 'minimap';
  const MS = 112;
  const dpr = Math.min(2, devicePixelRatio || 1);
  mini.width = MS * dpr;
  mini.height = MS * dpr;
  mini.setAttribute('aria-label', 'Minimappa: tocca per la mappa intera');
  document.getElementById('ui').appendChild(mini);
  const mc = mini.getContext('2d');

  const chip = document.createElement('div');
  chip.id = 'street-chip';
  document.getElementById('ui').appendChild(chip);

  const full = document.createElement('div');
  full.id = 'fullmap';
  full.innerHTML = '<canvas></canvas><div class="fm-bar"><span>Tocca un punto per andarci</span><button type="button" aria-label="Chiudi mappa">✕</button></div>';
  document.body.appendChild(full);
  const fc = full.querySelector('canvas');
  const fctx = fc.getContext('2d');
  let fullFit = null;

  function drawMarker(ctx, x, y, ang, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ang);
    ctx.fillStyle = '#1f6fb2';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size * 0.7, size * 0.8);
    ctx.lineTo(0, size * 0.35);
    ctx.lineTo(-size * 0.7, size * 0.8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function drawMini() {
    const p = getPlayer();
    const yaw = getYaw();
    // direzione "avanti" della camera in (x,z) = (-sin yaw, -cos yaw): la ruoto verso l'alto
    const theta = -Math.PI / 2 - Math.atan2(-Math.cos(yaw), -Math.sin(yaw));
    const s = MS * dpr;
    mc.clearRect(0, 0, s, s);
    mc.save();
    mc.beginPath();
    mc.arc(s / 2, s / 2, s / 2 - 1, 0, Math.PI * 2);
    mc.clip();
    mc.fillStyle = '#e9e4d6';
    mc.fillRect(0, 0, s, s);
    const k = (0.9 * dpr) / scale; // 0,9 px di schermo per metro (≈ 60 m di raggio visibile)
    mc.translate(s / 2, s / 2);
    mc.rotate(theta);
    mc.scale(k, k);
    mc.drawImage(layer, -toX(p.x), -toY(p.z));
    mc.restore();
    // giocatore: direzione di marcia relativa alla vista
    const h = p.heading;
    const travel = Math.atan2(Math.cos(h), Math.sin(h)) + theta + Math.PI / 2;
    drawMarker(mc, s / 2, s / 2, travel, 7 * dpr);
    // nord
    const nAng = theta - Math.PI / 2;
    mc.fillStyle = '#b3261e';
    mc.font = `bold ${10 * dpr}px system-ui, sans-serif`;
    mc.textAlign = 'center';
    mc.textBaseline = 'middle';
    mc.fillText('N', s / 2 + Math.cos(nAng) * (s / 2 - 9 * dpr), s / 2 + Math.sin(nAng) * (s / 2 - 9 * dpr));
  }

  function openFull() {
    full.classList.add('open');
    const r = full.getBoundingClientRect();
    fc.width = r.width * dpr;
    fc.height = r.height * dpr;
    const k = Math.min(fc.width / W, fc.height / H);
    fullFit = { k, ox: (fc.width - W * k) / 2, oy: (fc.height - H * k) / 2 };
    drawFull();
  }
  function drawFull() {
    if (!fullFit) return;
    const { k, ox, oy } = fullFit;
    fctx.fillStyle = '#d9d3c3';
    fctx.fillRect(0, 0, fc.width, fc.height);
    fctx.drawImage(layer, ox, oy, W * k, H * k);
    const p = getPlayer();
    drawMarker(fctx, ox + toX(p.x) * k, oy + toY(p.z) * k, Math.atan2(Math.cos(p.heading), Math.sin(p.heading)) + Math.PI / 2, 9 * dpr);
  }
  mini.addEventListener('click', openFull);
  full.querySelector('button').addEventListener('click', () => full.classList.remove('open'));
  fc.addEventListener('click', (e) => {
    if (!fullFit) return;
    const r = fc.getBoundingClientRect();
    const px = (e.clientX - r.left) * dpr, py = (e.clientY - r.top) * dpr;
    const x = (px - fullFit.ox) / fullFit.k / scale + minX;
    const z = (py - fullFit.oy) / fullFit.k / scale + minZ;
    full.classList.remove('open');
    onTeleport(x, z);
  });

  // ---- chip della via
  let chipT = 0;
  let current = '';
  function updateChip(dt) {
    chipT += dt;
    if (chipT < 0.25) return;
    chipT = 0;
    const p = getPlayer();
    const nr = nearestRoad(p.x, p.z, roads);
    const name = nr && nr.name && nr.dist < nr.halfW + 7 ? nr.name : '';
    if (name !== current) {
      current = name;
      chip.textContent = name;
      chip.classList.toggle('show', !!name);
    }
  }

  let miniT = 0;
  return {
    update(dt) {
      miniT += dt;
      if (miniT >= 0.05) {
        miniT = 0;
        drawMini();
      }
      updateChip(dt);
      if (full.classList.contains('open')) drawFull();
    },
    openFull,
  };
}
