#!/usr/bin/env python3
"""
Dalle foto stradali aperte (fetch-street-photos.mjs) alle facciate raddrizzate dei singoli edifici.

Per ogni foto (posizione, direzione, lente) e per ogni lato di ogni pianta DBTR (public/data/model.json):
  1. il lato conta se guarda verso la camera, sta nel campo visivo, entro MAXD metri e non troppo di sbieco;
  2. si campiona il lato ogni 0,25 m e si scarta ciò che un altro edificio nasconde (raggio camera→punto);
  3. la facciata è un piano verticale: per ogni punto (u lungo il lato, z in altezza) si proietta nella foto
     con la stessa prospettiva della lente e si ricampiona → vista FRONTALE in scala metrica (40 px/m);
  4. per ogni lato si tengono le 3 foto migliori (frontalità × copertura / distanza).
Poi fogli di contatto per edificio (etichette: id, tipo, altezza, lunghezza) per guardarli e descrivere le facciate.

Le foto sono solo riferimento visivo: nessun pixel finisce nel gioco. Credito: Mapillary contributors, CC BY-SA 4.0.

    pip install pillow numpy
    python3 scripts/facade-from-photos.py            # tutto
    python3 scripts/facade-from-photos.py --bid 1300978   # un solo edificio
"""
import json, math, os, sys, argparse
import numpy as np
from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(__file__), '..')
PPM = 40          # pixel per metro nella facciata raddrizzata
MAXD = 45.0       # distanza massima camera → facciata
MINCOS = 0.30     # incidenza: cos(angolo fra la normale del lato e la direzione della camera)
CAMH = 1.7        # altezza della camera sul suolo (foto a mano/auto: 1,5–2,5 m)
STEP = 0.25       # passo di campionamento lungo il lato (m)

ap = argparse.ArgumentParser()
ap.add_argument('--bid', type=int, help='solo questo edificio')
ap.add_argument('--keep', type=int, default=3, help='foto tenute per lato')
args = ap.parse_args()

model = json.load(open(os.path.join(ROOT, 'public/data/model.json')))
index = json.load(open(os.path.join(ROOT, 'data/street-photos/index.json')))
photos = index['photos']
OUT = os.path.join(ROOT, 'data/facade-crops')
os.makedirs(OUT, exist_ok=True)

# ---- lati degli edifici (coordinate locali: X est, Z sud), normale esterna
edges = []
for b in model['buildings']:
    if args.bid and b['id'] != args.bid:
        continue
    r = b['r']
    pts = [(r[i], r[i + 1]) for i in range(0, len(r), 2)]
    if len(pts) < 3:
        continue
    a2 = sum(pts[i][0] * pts[(i + 1) % len(pts)][1] - pts[(i + 1) % len(pts)][0] * pts[i][1] for i in range(len(pts)))
    for i in range(len(pts)):
        (ax, az), (bx, bz) = pts[i], pts[(i + 1) % len(pts)]
        L = math.hypot(bx - ax, bz - az)
        if L < 2.5:
            continue
        tx, tz = (bx - ax) / L, (bz - az) / L
        nx, nz = tz, -tx                       # normale candidata
        # in (X est, Z sud) un anello con area firmata > 0 va in senso orario visto dall'alto: la normale esterna è (tz, -tx)
        if a2 < 0:
            nx, nz = -nx, -nz
        edges.append(dict(bid=b['id'], i=i, ax=ax, az=az, bx=bx, bz=bz, L=L, tx=tx, tz=tz, nx=nx, nz=nz, g=b['g'], h=b['h'], t=b.get('t', '')))
# tutti i lati di tutti gli edifici come occlusori (anche col filtro --bid)
seg = np.array([(b['r'][i], b['r'][i + 1], b['r'][(i + 2) % len(b['r'])], b['r'][(i + 3) % len(b['r'])])
                for b in model['buildings'] for i in range(0, len(b['r']), 2)])


def occluded(cx, cz, px, pz, cand):
    """True se il segmento camera→punto (pz, px) incontra un lato dell'elenco `cand` (esclusi gli estremi)."""
    ax, az, bx, bz = cand[:, 0], cand[:, 1], cand[:, 2], cand[:, 3]
    dx, dz = px - cx, pz - cz
    ex, ez = bx - ax, bz - az
    den = dx * ez - dz * ex
    with np.errstate(divide='ignore', invalid='ignore'):
        t = ((ax - cx) * ez - (az - cz) * ex) / den
        u = ((ax - cx) * dz - (az - cz) * dx) / den
    ok = (np.abs(den) > 1e-9) & (t > 0.02) & (t < 0.985) & (u >= 0) & (u <= 1)
    return ok


imgs = {}


def load(p):
    if p['id'] not in imgs:
        imgs.clear()
        imgs[p['id']] = np.asarray(Image.open(os.path.join(ROOT, 'data/street-photos', p['file'])).convert('RGB'), dtype=np.float32)
    return imgs[p['id']]


def bilinear(img, x, y):
    h, w, _ = img.shape
    x0 = np.floor(x).astype(int); y0 = np.floor(y).astype(int)
    fx = (x - x0)[..., None]; fy = (y - y0)[..., None]
    x0c = np.clip(x0, 0, w - 2); y0c = np.clip(y0, 0, h - 2)
    a = img[y0c, x0c]; b = img[y0c, x0c + 1]; c = img[y0c + 1, x0c]; d = img[y0c + 1, x0c + 1]
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy


best = {}   # (bid, i) → lista di risultati
for p in photos:
    if p['pano']:
        continue                                # le panoramiche equirettangolari: da aggiungere
    cx, cz = p['x'], p['z']
    th = math.radians(p['compass'])
    fwd = np.array([math.sin(th), -math.cos(th)])   # direzione di sguardo in (X, Z), nord = −Z
    W, H = p['w'], p['h']
    # la miniatura è 2048 sul lato lungo
    scale = 2048 / max(W, H)
    w2, h2 = round(W * scale), round(H * scale)
    f_px = p['params'][0] * max(w2, h2)
    cand_all = seg[(np.abs((seg[:, 0] + seg[:, 2]) / 2 - cx) < MAXD + 40) & (np.abs((seg[:, 1] + seg[:, 3]) / 2 - cz) < MAXD + 40)]
    for e in edges:
        mx, mz = (e['ax'] + e['bx']) / 2, (e['az'] + e['bz']) / 2
        dist = math.hypot(mx - cx, mz - cz)
        if dist > MAXD + e['L'] / 2:
            continue
        if (cx - mx) * e['nx'] + (cz - mz) * e['nz'] <= 0:
            continue                             # il lato guarda altrove
        n_s = max(2, int(e['L'] / STEP))
        u = (np.arange(n_s) + 0.5) * e['L'] / n_s
        pxs = e['ax'] + e['tx'] * u
        pzs = e['az'] + e['tz'] * u
        vx, vz = pxs - cx, pzs - cz
        dh = np.hypot(vx, vz)
        # nel campo visivo? profondità lungo l'asse ottico e scostamento laterale (destra = (cosθ, sinθ))
        along = vx * fwd[0] + vz * fwd[1]
        lat = vx * math.cos(th) + vz * math.sin(th)
        vis = (along > 0.5) & (dh < MAXD)
        vis &= np.abs(lat / np.maximum(along, 1e-6)) * f_px < (w2 / 2 - 4)
        if vis.sum() < n_s * 0.2:
            continue
        cos_inc = np.abs(((cx - pxs) * e['nx'] + (cz - pzs) * e['nz']) / np.maximum(dh, 1e-6))
        vis &= cos_inc > MINCOS
        # occlusioni
        keep = np.zeros(n_s, bool)
        for k in np.nonzero(vis)[0]:
            blocked = occluded(cx, cz, pxs[k], pzs[k], cand_all)
            # il lato stesso e i suoi vicini condividono estremi: già esclusi da t < 0.985 solo in parte
            keep[k] = not blocked.any()
        cover = keep.sum() / n_s
        if cover < 0.2:
            continue
        depth = along
        score = cover * float(np.mean(cos_inc[keep])) / (1 + float(np.mean(dh[keep])) / 15)
        best.setdefault((e['bid'], e['i']), []).append(dict(score=score, cover=cover, dist=float(np.mean(dh[keep])), cos=float(np.mean(cos_inc[keep])),
                                                          photo=p, e=e, keep=keep, u=u, pxs=pxs, pzs=pzs, along=depth, lat=lat, w2=w2, h2=h2, f=f_px))

print(f'{len(best)} lati di edificio inquadrati da almeno una foto')

# ---- raddrizza le migliori per lato
def render(r, p, e, Hm, outw, outh, ppm, dyaw):
    """Vista frontale del lato: (immagine, maschera dei pixel validi). dyaw: correzione della direzione (gradi)."""
    img = load(p)
    if img.shape[1] != r['w2']:
        img = np.asarray(Image.fromarray(img.astype(np.uint8)).resize((r['w2'], r['h2']), Image.LANCZOS), dtype=np.float32)
    cxp, cyp = r['w2'] / 2, r['h2'] / 2
    uu = (np.arange(outw) + 0.5) / ppm
    zz = Hm - (np.arange(outh) + 0.5) / ppm                       # z=Hm in alto, 0 a terra
    pxs = e['ax'] + e['tx'] * uu; pzs = e['az'] + e['tz'] * uu
    th = math.radians(p['compass'] + dyaw)
    fwd = (math.sin(th), -math.cos(th)); right = (math.cos(th), math.sin(th))
    vx, vz = pxs - p['x'], pzs - p['z']
    along = np.maximum(vx * fwd[0] + vz * fwd[1], 0.3); lat = vx * right[0] + vz * right[1]
    X = cxp + r['f'] * lat / along                                 # (outw,)
    Y = cyp - r['f'] * ((zz[:, None] - CAMH) / along[None, :])     # (outh, outw)
    Xg = np.broadcast_to(X[None, :], Y.shape)
    ok = (Xg > 0) & (Xg < r['w2'] - 1) & (Y > 0) & (Y < r['h2'] - 1)
    km = np.interp(uu, r['u'], r['keep'].astype(float)) > 0.5      # colonne nascoste da altri edifici
    ok &= km[None, :]
    out = bilinear(img, np.clip(Xg, 0, r['w2'] - 2), np.clip(Y, 0, r['h2'] - 2))
    return out, ok, float(km.mean())


def line_score(out, ok):
    """Quanto le linee sono orizzontali: energia del gradiente verticale concentrata in poche righe."""
    g = out.mean(axis=2)
    gy = np.abs(np.diff(g, axis=0)) * (ok[1:] & ok[:-1])
    rows = gy.sum(axis=1) / max(1, (ok[1:] & ok[:-1]).sum(axis=1).mean())
    return float(np.var(rows))


meta = []
for key, lst in best.items():
    lst.sort(key=lambda r: -r['score'])
    for rank, r in enumerate(lst[:args.keep]):
        e, p = r['e'], r['photo']
        Hm = min(e['h'] + 1.0, 22.0)
        # correzione automatica della direzione: la bussola del telefono sbaglia di qualche grado e la facciata
        # verrebbe "sghemba". Si prova ±6° e si tiene lo scarto che rende più orizzontali le linee.
        lo = (max(8, int(e['L'] * 12)), max(8, int(Hm * 12)))
        cands = []
        for d in np.arange(-6, 6.01, 1.0):
            o, k, _ = render(r, p, e, Hm, lo[0], lo[1], 12, d)
            if k.mean() > 0.15:
                cands.append((line_score(o, k), d))
        dyaw = 0.0
        if cands:
            base = dict((d, sc) for sc, d in cands).get(0.0, 0.0)
            sc, d = max(cands)
            if d != 0.0 and sc > base * 1.25:          # solo se il miglioramento è netto
                dyaw = float(d)
        outw, outh = max(8, int(round(e['L'] * PPM))), max(8, int(round(Hm * PPM)))
        out, ok, vis = render(r, p, e, Hm, outw, outh, PPM, dyaw)
        out[~ok] = (200, 0, 200)                                       # magenta = non visibile in questa foto
        name = f"{e['bid']}_{e['i']}_{rank}.jpg"
        Image.fromarray(out.astype(np.uint8)).save(os.path.join(OUT, name), quality=88)
        meta.append(dict(file=name, bid=e['bid'], edge=e['i'], rank=rank, L=round(e['L'], 2), H=round(Hm, 1), type=e['t'], score=round(r['score'], 3),
                         cover=round(r['cover'], 2), dist=round(r['dist'], 1), cos=round(r['cos'], 2), photo=p['id'], creator=p['creator'],
                         captured=p['captured'], visible=round(vis, 2), yaw_fix=dyaw))

json.dump(dict(source='Mapillary contributors, CC BY-SA 4.0 — solo riferimento visivo', ppm=PPM, crops=meta), open(os.path.join(OUT, 'index.json'), 'w'))
print(f'{len(meta)} facciate raddrizzate in data/facade-crops/')

# ---- fogli di contatto per edificio (6 per foglio)
byb = {}
for m in meta:
    if m['rank'] == 0:
        byb.setdefault(m['bid'], []).append(m)
rows = sorted(byb.items(), key=lambda kv: -sum(x['score'] * x['L'] for x in kv[1]))
sheet_meta = []
for si in range(0, min(len(rows), 60), 6):
    chunk = rows[si:si + 6]
    cw = 620
    tiles = []
    for bid, ms in chunk:
        m = max(ms, key=lambda x: x['score'] * x['L'])
        im = Image.open(os.path.join(OUT, m['file']))
        s = cw / im.width if im.width > cw else 1.0
        im = im.resize((max(8, int(im.width * s)), max(8, int(im.height * s))))
        canvas = Image.new('RGB', (cw, im.height + 22), (24, 28, 32))
        canvas.paste(im, (0, 22))
        ImageDraw.Draw(canvas).text((4, 5), f"id {bid} · {m['type']} · h{m['H']} · L{m['L']} m · d{m['dist']} m · foto {m['photo']}", fill=(240, 240, 240))
        tiles.append(canvas)
    colh = [0, 0]
    W = cw * 2 + 6
    total = sum(t.height + 6 for t in tiles)
    sh = Image.new('RGB', (W, max(sum(t.height + 6 for t in tiles[0::2]), sum(t.height + 6 for t in tiles[1::2]))), (12, 14, 16))
    for i, t in enumerate(tiles):
        c = i % 2
        sh.paste(t, (c * (cw + 6), colh[c])); colh[c] += t.height + 6
    name = f'sheet_{si // 6:02d}.jpg'
    sh.save(os.path.join(OUT, name), quality=85)
    sheet_meta.append(name)
print('fogli di contatto:', sheet_meta)
