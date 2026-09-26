/**
 * Classify OSM props into a POI kit id (city-agnostic).
 */
export function classifyPoi(props = {}) {
  const b = (props.building || '').toLowerCase();
  const a = (props.amenity || '').toLowerCase();
  const r = (props.railway || '').toLowerCase();
  const leisure = (props.leisure || '').toLowerCase();
  const place = (props.place || '').toLowerCase();
  const hw = (props.highway || '').toLowerCase();
  const tourism = (props.tourism || '').toLowerCase();
  const historic = (props.historic || '').toLowerCase();
  const shop = (props.shop || '').toLowerCase();
  const name = props.name || '';

  if (b === 'cathedral' || a === 'cathedral') return 'cathedral';
  if (b === 'church' || b === 'chapel' || a === 'place_of_worship') {
    return b === 'chapel' ? 'chapel' : 'church';
  }
  if (a === 'townhall' || a === 'town_hall' || (b === 'public' && /municipio|comune/i.test(name))) {
    return 'townhall';
  }
  if (a === 'school' || b === 'school' || a === 'kindergarten' || b === 'kindergarten') {
    return a === 'kindergarten' || b === 'kindergarten' ? 'kindergarten' : 'school';
  }
  if (a === 'university' || b === 'university' || b === 'college') return 'university';
  if (b === 'train_station' || r === 'station' || a === 'bus_station') return 'train_station';
  if (a === 'fuel') return 'fuel';
  if (shop === 'supermarket' || shop === 'mall' || a === 'marketplace') return 'supermarket';
  if (tourism === 'museum' || a === 'museum') return 'museum';
  if (historic && historic !== 'no') return 'historic';
  if (tourism && tourism !== 'no' && name) return 'tourism';
  if (leisure === 'park' && name) return 'park';
  if (place === 'square' || (hw === 'pedestrian' && /piazza|largo|plaza/i.test(name))) return 'square';
  if (a === 'parking' && /piazza|largo|plaza/i.test(name)) return 'square';
  if (name && props.landmark) return 'tourism';
  return null;
}

export const POI_PRIORITY = {
  cathedral: 120,
  church: 110,
  chapel: 95,
  townhall: 90,
  school: 75,
  kindergarten: 72,
  university: 80,
  train_station: 95,
  fuel: 55,
  supermarket: 60,
  museum: 85,
  historic: 80,
  tourism: 70,
  park: 55,
  square: 65,
};

export function italianTypeLabel(kind) {
  switch (kind) {
    case 'church':
    case 'cathedral':
      return 'Chiesa';
    case 'chapel':
      return 'Cappella';
    case 'train_station':
      return 'Stazione ferroviaria';
    case 'school':
      return 'Scuola';
    case 'kindergarten':
      return 'Asilo';
    case 'university':
      return 'Università';
    case 'townhall':
      return 'Municipio';
    case 'park':
      return 'Parco';
    case 'square':
      return 'Piazza';
    case 'fuel':
      return 'Distributore';
    case 'supermarket':
      return 'Supermercato';
    case 'museum':
      return 'Museo';
    case 'historic':
      return 'Storico';
    case 'tourism':
      return 'Punto di interesse';
    default:
      return 'Luogo';
  }
}

/** Kits that attach richer meshes to building footprints (not just poles). */
export const FOOTPRINT_KITS = new Set([
  'church',
  'cathedral',
  'chapel',
  'train_station',
  'school',
  'kindergarten',
  'university',
  'townhall',
]);
