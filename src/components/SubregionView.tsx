"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Country, Subregion } from "@/lib/types";
import { EmptyState } from "./EmptyState";
import styles from "./ListPage.module.css";

export function SubregionView({
  subregion,
  countries,
}: {
  subregion: Subregion;
  countries: Country[];
}) {
  const { t, lang } = useLang();

  return (
    <div className={styles.wrap}>
      <p className={styles.breadcrumb}>
        <Link href="/">{t("breadcrumb.world")}</Link> /{" "}
        <Link href={`/continent/${subregion.continent}`}>
          {subregion.continent}
        </Link>{" "}
        / {subregion.names[lang]}
      </p>
      <h1>{subregion.names[lang]}</h1>

      <section className={styles.section}>
        <h2>{t("subregion.confusedTitle")}</h2>
        <div className={styles.callout}>{t("subregion.noCountries")}</div>
      </section>

      <section className={styles.section}>
        {countries.length === 0 ? (
          <EmptyState
            title={t("continent.countriesTitle")}
            message={t("subregion.noCountries")}
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
