"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Country } from "@/lib/types";
import styles from "./CountryView.module.css";

export function CountryView({ country }: { country: Country }) {
  const { t, lang } = useLang();

  return (
    <div className={styles.wrap}>
      <p className={styles.breadcrumb}>
        <Link href="/">{t("breadcrumb.world")}</Link> /{" "}
        <Link href={`/continent/${country.continent}`}>{country.continent}</Link>{" "}
        / <Link href={`/subregion/${country.subregion}`}>{country.subregion}</Link>{" "}
        / {country.names[lang]}
      </p>

      <h1>
        {country.flagEmoji} {country.names[lang]}
      </h1>

      <section className={styles.grid}>
        <div className={styles.field}>
          <h3>Drive side</h3>
          <p>{country.driveSide}</p>
        </div>
        <div className={styles.field}>
          <h3>Language / script</h3>
          <p>
            {country.language.official.map((l) => l.name).join(", ")} —{" "}
            {country.language.script}
          </p>
        </div>
        <div className={styles.field}>
          <h3>Terrain</h3>
          <p>{country.terrainTags.join(", ")}</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Terrain description</h2>
        <p>{country.terrainDescription[lang]}</p>
      </section>

      <section className={styles.section}>
        <h2>Road infrastructure</h2>
        <ul>
          <li>Center line: {country.roadInfra.centerLineColor}</li>
          <li>Distance unit: {country.roadInfra.distanceUnit}</li>
          <li>Sign standard: {country.roadInfra.signStandard}</li>
          <li>
            Plate: {country.roadInfra.plate.color} /{" "}
            {country.roadInfra.plate.shape}
          </li>
          <li>Bollard style: {country.roadInfra.bollardStyle}</li>
          <li>
            Utility pole: {country.roadInfra.utilityPole.material} /{" "}
            {country.roadInfra.utilityPole.transformerMount}
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Historical context</h2>
        <p>{country.historicalContext[lang]}</p>
      </section>

      {country.culturalMarkers.length > 0 && (
        <section className={styles.section}>
          <h2>Cultural markers (low-confidence, secondary signal)</h2>
          <ul>
            {country.culturalMarkers.map((marker) => (
              <li key={marker.item}>
                <strong>{marker.item}</strong> (confidence {marker.confidence}
                /5) — {marker.note[lang]}
                <br />
                <em>{marker.caveat}</em>
              </li>
            ))}
          </ul>
        </section>
      )}

      {country.commonlyConfusedWith.length > 0 && (
        <section className={styles.section}>
          <h2>{t("country.confusedWith")}</h2>
          <div className={styles.grid}>
            {country.commonlyConfusedWith.map((otherId) => (
              <Link
                key={otherId}
                href={`/compare/${country.id}/${otherId}`}
                className={styles.card}
              >
                {otherId} — {t("country.compareCta")}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
