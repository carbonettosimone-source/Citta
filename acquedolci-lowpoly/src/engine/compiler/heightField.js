/**
 * Campo di quota "progettato": DEM campionato su griglia e lisciato con gaussiana separabile.
 * Le superfici urbane (strade, marciapiedi, piazze) seguono questo campo, non il DEM grezzo
 * (rumoroso a 30 m). Stessa funzione nel compilatore (Node) e nel motore (browser):
 * il file livello contiene solo vettori, le quote si ricalcolano identiche.
 */

/**
 * @param {(x:number,z:number)=>number} demY quota locale grezza
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}} rect
 * @param {{step?:number, sigma?:number}} [o]
 */
export function buildHeightField(demY, rect, { step = 2, sigma = 6 } = {}) {
  const nx = Math.max(2, Math.ceil((rect.maxX - rect.minX) / step) + 1);
  const nz = Math.max(2, Math.ceil((rect.maxZ - rect.minZ) / step) + 1);
  const a = new Float32Array(nx * nz);
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) a[j * nx + i] = demY(rect.minX + i * step, rect.minZ + j * step);

  // kernel gaussiano discreto
  const r = Math.max(1, Math.ceil((sigma * 2.5) / step));
  const k = new Float32Array(2 * r + 1);
  let ks = 0;
  for (let i = -r; i <= r; i++) { k[i + r] = Math.exp(-((i * step) ** 2) / (2 * sigma * sigma)); ks += k[i + r]; }
  for (let i = 0; i < k.length; i++) k[i] /= ks;
  const tmp = new Float32Array(nx * nz);
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      let s = 0;
      for (let t = -r; t <= r; t++) s += a[j * nx + Math.min(nx - 1, Math.max(0, i + t))] * k[t + r];
      tmp[j * nx + i] = s;
    }
  }
  const h = new Float32Array(nx * nz);
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      let s = 0;
      for (let t = -r; t <= r; t++) s += tmp[Math.min(nz - 1, Math.max(0, j + t)) * nx + i] * k[t + r];
      h[j * nx + i] = s;
    }
  }

  function sample(x, z) {
    const fx = Math.min(nx - 1.0001, Math.max(0, (x - rect.minX) / step));
    const fz = Math.min(nz - 1.0001, Math.max(0, (z - rect.minZ) / step));
    const i = Math.floor(fx), j = Math.floor(fz);
    const u = fx - i, v = fz - j;
    const p = j * nx + i;
    return (h[p] * (1 - u) + h[p + 1] * u) * (1 - v) + (h[p + nx] * (1 - u) + h[p + nx + 1] * u) * v;
  }
  return { sample, rect, step, nx, nz };
}

/**
 * Piano ai minimi quadrati y = a·x + b·z + c sui punti dati, con pendenza limitata.
 * La pendenza limitata è voluta: lotti "da progetto" e muri di contenimento dove serve.
 */
export function fitPlane(pts, maxSlope = 0.12) {
  let sx = 0, sz = 0, sy = 0, n = 0;
  for (const p of pts) { sx += p.x; sz += p.z; sy += p.y; n++; }
  if (!n) return { a: 0, b: 0, c: 0 };
  const mx = sx / n, mz = sz / n, my = sy / n;
  let xx = 0, xz = 0, zz = 0, xy = 0, zy = 0;
  for (const p of pts) {
    const dx = p.x - mx, dz = p.z - mz, dy = p.y - my;
    xx += dx * dx; xz += dx * dz; zz += dz * dz; xy += dx * dy; zy += dz * dy;
  }
  const det = xx * zz - xz * xz;
  let a = 0, b = 0;
  if (Math.abs(det) > 1e-6) {
    a = (xy * zz - zy * xz) / det;
    b = (zy * xx - xy * xz) / det;
  }
  const g = Math.hypot(a, b);
  if (g > maxSlope) { a *= maxSlope / g; b *= maxSlope / g; }
  return { a, b, c: my - a * mx - b * mz };
}
