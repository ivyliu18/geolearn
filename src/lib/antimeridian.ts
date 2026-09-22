import type { Feature, FeatureCollection, Geometry, Position } from "geojson";

/**
 * Natural Earth / world-atlas rings for countries that straddle the
 * antimeridian (Russia, Fiji, ...) are not split — longitude just wraps
 * from ~180 to ~-180 within a single ring. Leaflet draws coordinates
 * verbatim (no dateline clipping), so that wrap renders as a line straight
 * across the map. Un-wrapping each ring into a continuous coordinate range
 * (letting longitude run past ±180 where needed) fixes it without having
 * to split geometry or switch projections.
 */
function unwrapRing(ring: Position[]): Position[] {
  if (ring.length === 0) return ring;
  const result: Position[] = [ring[0]];
  let offset = 0;
  for (let i = 1; i < ring.length; i++) {
    const [lon, lat] = ring[i];
    const prevLon = result[i - 1][0];
    let adjusted = lon + offset;
    while (adjusted - prevLon > 180) {
      offset -= 360;
      adjusted = lon + offset;
    }
    while (adjusted - prevLon < -180) {
      offset += 360;
      adjusted = lon + offset;
    }
    result.push([adjusted, lat]);
  }
  return result;
}

function unwrapGeometry(geometry: Geometry): Geometry {
  if (geometry.type === "Polygon") {
    return { ...geometry, coordinates: geometry.coordinates.map(unwrapRing) };
  }
  if (geometry.type === "MultiPolygon") {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map((polygon) =>
        polygon.map(unwrapRing),
      ),
    };
  }
  return geometry;
}

export function unwrapAntimeridian<P>(
  collection: FeatureCollection<Geometry, P>,
): FeatureCollection<Geometry, P> {
  return {
    ...collection,
    features: collection.features.map(
      (feature): Feature<Geometry, P> => ({
        ...feature,
        geometry: unwrapGeometry(feature.geometry),
      }),
    ),
  };
}
