"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import type { Layer, LeafletMouseEvent, Path, StyleFunction } from "leaflet";
import type { Feature, Geometry } from "geojson";
import * as topojson from "topojson-client";
import type { Topology } from "topojson-specification";
import worldTopology from "world-atlas/countries-110m.json";
import { useLang } from "@/lib/i18n";
import { slugify } from "@/lib/slug";
import styles from "./WorldMap.module.css";

interface CountryProperties {
  name: string;
}

const countryStyle: StyleFunction = () => ({
  color: "#7a8a99",
  weight: 0.6,
  fillColor: "#c7d3dd",
  fillOpacity: 0.55,
});

const hoverStyle = { fillOpacity: 0.85, weight: 1.2 };

export function WorldMapInner({
  availableCountryIds,
}: {
  availableCountryIds: string[];
}) {
  const router = useRouter();
  const { t } = useLang();
  const availableSet = useMemo(
    () => new Set(availableCountryIds),
    [availableCountryIds],
  );

  const countries = useMemo(
    () =>
      topojson.feature(
        worldTopology as unknown as Topology,
        (worldTopology as unknown as Topology).objects.countries,
      ),
    [],
  );

  function onEachCountry(
    feature: Feature<Geometry, CountryProperties>,
    layer: Layer,
  ) {
    const name = feature.properties?.name ?? "";
    const id = slugify(name);
    layer.bindTooltip(name, { sticky: true });

    layer.on({
      mouseover: (e: LeafletMouseEvent) => {
        (e.target as Path).setStyle(hoverStyle);
      },
      mouseout: (e: LeafletMouseEvent) => {
        (e.target as Path).setStyle(countryStyle({} as never));
      },
      click: (e: LeafletMouseEvent) => {
        if (availableSet.has(id)) {
          router.push(`/country/${id}`);
        } else {
          (e.target as Layer)
            .bindPopup(`${name}<br/>${t("map.noData")}`)
            .openPopup(e.latlng);
        }
      },
    });
  }

  return (
    <MapContainer
      center={[15, 10]}
      zoom={2}
      minZoom={1.5}
      worldCopyJump
      scrollWheelZoom
      className={styles.map}
    >
      <GeoJSON
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data={countries as any}
        style={countryStyle}
        onEachFeature={onEachCountry as never}
      />
    </MapContainer>
  );
}
