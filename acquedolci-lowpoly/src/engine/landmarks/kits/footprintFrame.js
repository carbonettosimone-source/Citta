/** Local XZ frame from a footprint polygon (longest edge = +X length axis). */
export function footprintFrame(pts) {
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;

  let bestLen = -1;
  let ux = 1;
  let uz = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    if (len > bestLen) {
      bestLen = len;
      ux = dx / len;
      uz = dz / len;
    }
  }
  const vx = -uz;
  const vz = ux;

  let minL = Infinity;
  let maxL = -Infinity;
  let minW = Infinity;
  let maxW = -Infinity;
  for (const p of pts) {
    const dx = p.x - cx;
    const dz = p.z - cz;
    const l = dx * ux + dz * uz;
    const w = dx * vx + dz * vz;
    minL = Math.min(minL, l);
    maxL = Math.max(maxL, l);
    minW = Math.min(minW, w);
    maxW = Math.max(maxW, w);
  }
  return {
    cx,
    cz,
    ux,
    uz,
    vx,
    vz,
    length: Math.max(1, maxL - minL),
    width: Math.max(1, maxW - minW),
    minL,
    maxL,
    minW,
    maxW,
    yaw: Math.atan2(ux, uz),
  };
}

export function localToWorld(frame, l, w) {
  return {
    x: frame.cx + frame.ux * l + frame.vx * w,
    z: frame.cz + frame.uz * l + frame.vz * w,
  };
}
