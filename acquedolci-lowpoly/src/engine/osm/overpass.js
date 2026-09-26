/**
 * Overpass → GeoJSON del motore. Condiviso da scripts/fetch-osm.mjs (Node) e dalla
 * generazione di città a runtime nel browser: una sola definizione di query e conversione.
 */

/** @param {{south:number,west:number,north:number,east:number}} BBOX */
export function buildOverpassQuery(BBOX) {
  const bb = `${BBOX.south},${BBOX.west},${BBOX.north},${BBOX.east}`;
  return `
[out:json][timeout:90];
(
  way["building"](${bb});
  relation["building"](${bb});
  way["highway"](${bb});
  way["natural"="water"](${bb});
  way["waterway"](${bb});
  way["natural"="coastline"](${bb});
  way["railway"~"^(rail|light_rail|narrow_gauge|tram)$"](${bb});
  relation["natural"="water"](${bb});
  way["landuse"](${bb});
  node["natural"="tree"](${bb});
  node["highway"="crossing"](${bb});
  way["natural"="wood"](${bb});
  way["natural"="scrub"](${bb});
  way["natural"="grassland"](${bb});
  way["leisure"="park"](${bb});
  way["leisure"="garden"](${bb});
  node["amenity"~"place_of_worship|school|townhall|university|fuel|museum|marketplace"](${bb});
  way["amenity"~"place_of_worship|school|townhall|university|fuel|museum|marketplace"](${bb});
  node["railway"="station"](${bb});
  way["building"="train_station"](${bb});
  way["place"="square"](${bb});
  node["place"="square"](${bb});
  way["highway"="pedestrian"](${bb});
  node["tourism"](${bb});
  way["tourism"](${bb});
  node["historic"](${bb});
  way["historic"](${bb});
  node["shop"~"supermarket|mall"](${bb});
  way["shop"~"supermarket|mall"](${bb});
  node["amenity"="place_of_worship"](${bb});
  way["barrier"~"wall|fence|retaining_wall|guard_rail|handrail|city_wall|hedge"](${bb});
  way["natural"="cliff"](${bb});
  way["man_made"~"^(breakwater|groyne|pier|mole)$"](${bb});
  way["natural"~"^(beach|sand)$"](${bb});
);

out body; >; out skel qt;
`;
}

export function closeRing(coords) {
  const ring = [...coords];
  if (ring.length >= 3 && (ring[0][0] !== ring.at(-1)[0] || ring[0][1] !== ring.at(-1)[1])) {
    ring.push([...ring[0]]);
  }
  return ring;
}

export function featureFromWay(id, tags, coords) {
  let kind = null;
  let subtype = null;
  if (tags.building) kind = 'building';
  else if (tags.highway) kind = 'highway';
  else if (tags.barrier) {
    kind = 'barrier';
    subtype = tags.barrier;
  } else if (tags.natural === 'coastline') kind = 'coastline';
  else if (tags.natural === 'cliff') kind = 'cliff';
  else if (tags.natural === 'beach' || tags.natural === 'sand') { kind = 'beach'; subtype = tags.natural; }
  else if (['breakwater', 'groyne', 'pier', 'mole'].includes(tags.man_made)) { kind = 'pier'; subtype = tags.man_made; }
  else if (['rail', 'light_rail', 'narrow_gauge', 'tram'].includes(tags.railway)) kind = 'railway';
  else if (tags.natural === 'water' || tags.waterway) kind = 'water';
  else if (['wood', 'scrub', 'grassland'].includes(tags.natural)) {
    kind = 'vegetation';
    subtype = tags.natural;
  } else if (tags.leisure === 'park' || tags.leisure === 'garden') {
    kind = 'vegetation';
    subtype = tags.leisure;
  } else if (tags.landuse) {
    const lu = tags.landuse;
    if (['forest', 'orchard', 'vineyard', 'farmland', 'grass', 'meadow', 'scrub', 'allotments'].includes(lu)) {
      kind = 'vegetation';
      subtype = lu;
    } else {
      kind = 'landuse';
      subtype = lu;
    }
  } else if (tags.amenity || tags.railway || tags.place) {
    kind = 'poi';
  } else return null;

  let geometry;
  if (['building', 'water', 'landuse', 'vegetation', 'beach'].includes(kind)) {
    const ring = closeRing(coords);
    if (ring.length < 4) return null;
    geometry = { type: 'Polygon', coordinates: [ring] };
  } else if (kind === 'barrier') {
    if (coords.length < 2) return null;
    // Closed rings stay LineString for extrusion along the way (incl. last→first if closed)
    const closed =
      coords.length >= 3 &&
      coords[0][0] === coords.at(-1)[0] &&
      coords[0][1] === coords.at(-1)[1];
    geometry = { type: 'LineString', coordinates: closed ? coords : coords };
  } else {
    if (coords.length < 2) return null;
    geometry = { type: 'LineString', coordinates: coords };
  }

  const num = (v) => {
    if (v == null) return null;
    const n = parseFloat(String(v).replace(',', '.'));
    return Number.isNaN(n) ? null : n;
  };

  return {
    type: 'Feature',
    properties: {
      id,
      kind,
      building: tags.building || null,
      levels: num(tags['building:levels']),
      height: num(tags.height),
      roofShape: tags['roof:shape'] || null,
      roofColour: tags['roof:colour'] || tags['roof:color'] || null,
      wallColour: tags['building:colour'] || tags['building:color'] || tags.colour || null,
      roofLevels: num(tags['roof:levels']),
      highway: tags.highway || null,
      lanes: num(tags.lanes),
      width: num(tags.width),
      bridge: tags.bridge || null,
      tunnel: tags.tunnel || null,
      stepCount: num(tags.step_count),
      landuse: tags.landuse || null,
      natural: tags.natural || null,
      leisure: tags.leisure || null,
      amenity: tags.amenity || null,
      tourism: tags.tourism || null,
      historic: tags.historic || null,
      shop: tags.shop || null,
      railway: tags.railway || null,
      place: tags.place || null,
      barrier: tags.barrier || null,
      subtype,
      name: tags.name || tags['name:it'] || null,
      // Segnali per il RegionProfile (bake-region)
      roofMaterial: tags['roof:material'] || null,
      wallMaterial: tags['building:material'] || null,
      genus: tags.genus || null,
      species: tags.species || null,
      leafType: tags.leaf_type || null,
      leafCycle: tags.leaf_cycle || null,
      gauge: tags.gauge || null,
    },
    geometry,
  };
}

export function featureFromNode(id, tags, lon, lat) {
  if (tags.highway === 'crossing') {
    // Strisce pedonali reali: posizione e tipo (zebra, semaforo, senza segnaletica)
    return {
      type: 'Feature',
      properties: { id, kind: 'crossing', crossing: tags.crossing || tags['crossing:markings'] || null },
      geometry: { type: 'Point', coordinates: [lon, lat] },
    };
  }
  if (tags.natural === 'tree') {
    return {
      type: 'Feature',
      properties: {
        id,
        kind: 'tree',
        name: tags.name || null,
        building: null,
        levels: null,
        height: null,
        roofShape: null,
        roofLevels: null,
        highway: null,
        lanes: null,
        width: null,
        bridge: null,
        tunnel: null,
        landuse: null,
        natural: 'tree',
        leisure: null,
        amenity: null,
        railway: null,
        place: null,
        subtype: 'tree',
        genus: tags.genus || null,
        species: tags.species || null,
        leafType: tags.leaf_type || null,
        treeHeight: tags.height ? parseFloat(tags.height) || null : null,
      },
      geometry: { type: 'Point', coordinates: [lon, lat] },
    };
  }
  if (tags.amenity || tags.railway === 'station' || tags.place === 'square') {
    return {
      type: 'Feature',
      properties: {
        id,
        kind: 'poi',
        building: tags.building || null,
        levels: null,
        height: null,
        roofShape: null,
        roofLevels: null,
        highway: null,
        lanes: null,
        width: null,
        bridge: null,
        tunnel: null,
        landuse: null,
        natural: null,
        leisure: tags.leisure || null,
        amenity: tags.amenity || null,
      tourism: tags.tourism || null,
      historic: tags.historic || null,
      shop: tags.shop || null,
        railway: tags.railway || null,
        place: tags.place || null,
        subtype: tags.amenity || tags.railway || tags.place,
        name: tags.name || tags['name:it'] || null,
      },
      geometry: { type: 'Point', coordinates: [lon, lat] },
    };
  }
  return null;
}


/** Risposta Overpass JSON (out body + nodi) → features. */
export function overpassToFeatures(json) {
  const nodes = new Map();
  for (const el of json.elements) {
    if (el.type === 'node') nodes.set(el.id, [el.lon, el.lat]);
  }
  const features = [];
  for (const el of json.elements) {
    if (el.type === 'node') {
      const f = featureFromNode(el.id, el.tags || {}, el.lon, el.lat);
      if (f) features.push(f);
      continue;
    }
    if (el.type !== 'way' || !el.nodes) continue;
    const coords = el.nodes.map((nid) => nodes.get(nid)).filter(Boolean);
    const f = featureFromWay(el.id, el.tags || {}, coords);
    if (f) features.push(f);
  }
  return features;
}
