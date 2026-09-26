/**
 * Applica palette DNA (Sentinel-2 + priors) allo style pack runtime.
 */
import { tryJSON } from '../data/dataSource.js';

export async function loadCityDna(url) {
  return tryJSON(url);
}

function rgbToHex(rgb) {
  if (!rgb || rgb.length < 3) return 0xffffff;
  const [r, g, b] = rgb;
  return (r << 16) + (g << 8) + b;
}

function lerpHex(a, b, t) {
  const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
  const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) + (g << 8) + bl;
}

export function applyDnaToStyle(style, dna) {
  if (!dna?.palette) return style;
  const p = dna.palette;
  const colors = { ...style.colors };
  const roofBase = rgbToHex(p.roofRgb);
  const wallBase = rgbToHex(p.wallRgb);
  const baseRoofs = style.roofs || [0xb85a3a, 0xc46842, 0xa84e32, 0xd07048, 0x9e4a30, 0xbc6040];
  const baseWalls = style.walls || [0xf5ead8, 0xf0e0c8, 0xe8d5b0, 0xe2c9a0, 0xf2d4c4, 0xe8c8b8, 0xd8d0c8];
  style.roofs = baseRoofs.map((c, i) => lerpHex(c, roofBase, 0.4 + (i % 5) * 0.06));
  style.walls = baseWalls.map((c, i) => lerpHex(c, wallBase, 0.3 + (i % 4) * 0.05));
  if (p.pavementRgb) {
    // Sentinel-2 a 10 m mescola asfalto e verde: se il campione è "colorato" o verdastro
    // è contaminato → resta vicino all'asfalto del profilo (evita l'asfalto verde/navy).
    const [r, g, b] = p.pavementRgb;
    const chroma = Math.max(r, g, b) - Math.min(r, g, b);
    const greenish = g > r + 3 && g > b + 3;
    const measured = rgbToHex(p.pavementRgb);
    colors.asphalt = chroma > 12 || greenish ? lerpHex(colors.asphalt ?? 0x424240, measured, 0.3) : measured;
  }
  if (p.plazaRgb) colors.plaza = rgbToHex(p.plazaRgb);
  if (p.sidewalkRgb) colors.sidewalk = rgbToHex(p.sidewalkRgb);
  if (p.vegRgb) {
    colors.grass = rgbToHex(p.vegRgb);
    colors.park = rgbToHex(p.vegRgb);
    colors.forest = lerpHex(rgbToHex(p.vegRgb), 0x3a5a28, 0.35);
  }
  if (p.seaRgb) {
    colors.sea = rgbToHex(p.seaRgb);
    colors.water = rgbToHex(p.seaRgb);
  }
  if (p.terrainRgb) {
    colors.terrain = rgbToHex(p.terrainRgb);
    colors.groundFallback = rgbToHex(p.terrainRgb);
  }
  style.colors = colors;
  style.dna = dna;
  return style;
}
