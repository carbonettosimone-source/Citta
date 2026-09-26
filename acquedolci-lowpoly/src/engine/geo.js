import { Shape } from 'three';

/** Origine di proiezione (mutabile per città diverse). */
export const ORIGIN = { lat: 38.056, lon: 14.585 };
const METERS_PER_DEG_LAT = 111320;

export function setOrigin(lat, lon) {
  ORIGIN.lat = lat;
  ORIGIN.lon = lon;
}

export function metersPerDegLon(lat = ORIGIN.lat) {
  return METERS_PER_DEG_LAT * Math.cos((lat * Math.PI) / 180);
}

/** Lon/lat → {x, z} metri (+X est, +Z sud). */
export function project(lon, lat) {
  return {
    x: (lon - ORIGIN.lon) * metersPerDegLon(ORIGIN.lat),
    z: -(lat - ORIGIN.lat) * METERS_PER_DEG_LAT,
  };
}

export function ringToLocalPts(ring) {
  const pts = [];
  for (let i = 0; i < ring.length - 1; i++) {
    const p = project(ring[i][0], ring[i][1]);
    if (!pts.length || Math.hypot(p.x - pts.at(-1).x, p.z - pts.at(-1).z) > 0.05) {
      pts.push(p);
    }
  }
  return pts;
}

export function lineStringToLocalPts(coords) {
  const pts = [];
  for (const [lon, lat] of coords) {
    const p = project(lon, lat);
    if (!pts.length || Math.hypot(p.x - pts.at(-1).x, p.z - pts.at(-1).z) > 0.15) {
      pts.push(p);
    }
  }
  return pts;
}

/**
 * Per ExtrudeGeometry/ShapeGeometry + rotateX(-π/2):
 * (sx,sy) → mondo (sx, 0, -sy), quindi sy = -z.
 */
export function ptsToShape(pts) {
  const shape = new Shape();
  pts.forEach((p, i) => {
    if (i === 0) shape.moveTo(p.x, -p.z);
    else shape.lineTo(p.x, -p.z);
  });
  shape.closePath();
  return shape;
}

export function polygonCentroidLonLat(coords) {
  const ring = coords[0] || coords;
  let lon = 0;
  let lat = 0;
  const n = Math.max(1, ring.length - 1);
  for (let i = 0; i < n; i++) {
    lon += ring[i][0];
    lat += ring[i][1];
  }
  return { lon: lon / n, lat: lat / n };
}
