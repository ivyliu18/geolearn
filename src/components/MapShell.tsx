"use client";

import dynamic from "next/dynamic";
import { useLang } from "@/lib/i18n";
import styles from "./WorldMap.module.css";

function MapLoading() {
  const { t } = useLang();
  return <div className={styles.loading}>{t("map.loading")}</div>;
}

const WorldMapInner = dynamic(
  () => import("./WorldMapInner").then((m) => m.WorldMapInner),
  { ssr: false, loading: MapLoading },
);

export function MapShell({
  availableCountryIds,
}: {
  availableCountryIds: string[];
}) {
  return <WorldMapInner availableCountryIds={availableCountryIds} />;
}
