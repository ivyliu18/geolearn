"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Continent, Country, Subregion } from "@/lib/types";
import { EmptyState } from "./EmptyState";
import styles from "./ListPage.module.css";

export function ContinentView({
  continent,
  subregions,
  countries,
}: {
  continent: Continent;
  subregions: Subregion[];
  countries: Country[];
}) {
  const { t, lang } = useLang();

  return (
    <div className={styles.wrap}>
      <p className={styles.breadcrumb}>
        <Link href="/">{t("breadcrumb.world")}</Link> / {continent.names[lang]}
      </p>
      <h1>{continent.names[lang]}</h1>

      <section className={styles.section}>
        <h2>{t("continent.subregionsTitle")}</h2>
        {subregions.length === 0 ? (
          <EmptyState
            title={t("continent.subregionsTitle")}
            message={t("continent.noSubregions")}
          />
        ) : (
          <div className={styles.grid}>
            {subregions.map((subregion) => (
              <Link
                key={subregion.id}
                href={`/subregion/${subregion.id}`}
                className={styles.card}
              >
                {subregion.names[lang]}
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className={styles.section}>
        <h2>{t("continent.countriesTitle")}</h2>
        {countries.length === 0 ? (
          <EmptyState
            title={t("continent.countriesTitle")}
            message={t("continent.noCountries")}
          />
        ) : (
          <div className={styles.grid}>
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/country/${country.id}`}
                className={styles.card}
              >
                {country.flagEmoji} {country.names[lang]}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
