/** sRGB 0-255 ↔ CIELAB (D65) */
const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const gam = (c) => Math.round(255 * Math.min(1, Math.max(0, c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)));
const f = (t) => (t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116);
const fi = (t) => (t ** 3 > 216 / 24389 ? t ** 3 : (116 * t - 16) / (24389 / 27));
export function toLab([r, g, b]) {
  const R = lin(r), G = lin(g), B = lin(b);
  const x = (0.4124 * R + 0.3576 * G + 0.1805 * B) / 0.95047, y = 0.2126 * R + 0.7152 * G + 0.0722 * B, z = (0.0193 * R + 0.1192 * G + 0.9505 * B) / 1.08883;
  const fx = f(x), fy = f(y), fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
export function fromLab([L, a, b]) {
  const fy = (L + 16) / 116, fx = fy + a / 500, fz = fy - b / 200;
  const x = fi(fx) * 0.95047, y = fi(fy), z = fi(fz) * 1.08883;
  return [gam(3.2406 * x - 1.5372 * y - 0.4986 * z), gam(-0.9689 * x + 1.8758 * y + 0.0415 * z), gam(0.0557 * x - 0.204 * y + 1.057 * z)];
}
/** quantili (N+1 valori) di un array */
export function quantiles(arr, N = 100) {
  const s = Float64Array.from(arr).sort();
  return Array.from({ length: N + 1 }, (_, i) => +s[Math.min(s.length - 1, Math.round((i / N) * (s.length - 1)))].toFixed(2));
}
/** posizione (0..1) di v nella tabella di quantili, interpolata */
export function rankIn(q, v) {
  const N = q.length - 1;
  if (v <= q[0]) return 0; if (v >= q[N]) return 1;
  let lo = 0, hi = N; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (q[m] <= v) lo = m; else hi = m; }
  return (lo + (v - q[lo]) / Math.max(1e-6, q[hi] - q[lo])) / N;
}
export function atRank(q, t) { const N = q.length - 1, x = t * N, i = Math.min(N - 1, Math.floor(x)); return q[i] + (q[i + 1] - q[i]) * (x - i); }
