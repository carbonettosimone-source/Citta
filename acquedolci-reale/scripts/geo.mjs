/** WGS84 → UTM 33N (ETRS89 ≈ WGS84 al centimetro qui): stesso sistema di DBTR, MDT e ortofoto SITR. */
export function toUtm33(lon, lat) {
  const a = 6378137, f = 1 / 298.257223563, k0 = 0.9996, e2 = f * (2 - f);
  const lon0 = (15 * Math.PI) / 180;
  const p = (lat * Math.PI) / 180, l = (lon * Math.PI) / 180 - lon0;
  const s = Math.sin(p), c = Math.cos(p), t = Math.tan(p);
  const N = a / Math.sqrt(1 - e2 * s * s), T = t * t, C = (e2 / (1 - e2)) * c * c, A = c * l;
  const e4 = e2 * e2, e6 = e4 * e2;
  const M = a * ((1 - e2 / 4 - (3 * e4) / 64 - (5 * e6) / 256) * p - ((3 * e2) / 8 + (3 * e4) / 32 + (45 * e6) / 1024) * Math.sin(2 * p)
    + ((15 * e4) / 256 + (45 * e6) / 1024) * Math.sin(4 * p) - ((35 * e6) / 3072) * Math.sin(6 * p));
  const x = k0 * N * (A + ((1 - T + C) * A ** 3) / 6 + ((5 - 18 * T + T * T) * A ** 5) / 120) + 500000;
  const y = k0 * (M + N * t * ((A * A) / 2 + ((5 - T + 9 * C + 4 * C * C) * A ** 4) / 24));
  return [x, y];
}
export function utmBox(b) {
  const [x0, y0] = toUtm33(b.west, b.south), [x1, y1] = toUtm33(b.east, b.north);
  const [x2, y2] = toUtm33(b.west, b.north), [x3, y3] = toUtm33(b.east, b.south);
  return { xmin: Math.min(x0, x2), ymin: Math.min(y0, y3), xmax: Math.max(x1, x3), ymax: Math.max(y1, y2) };
}
