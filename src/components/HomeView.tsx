"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Continent } from "@/lib/types";
import { MapShell } from "./MapShell";
import styles from "./HomeView.module.css";

export function HomeView({
  continents,
  availableCountryIds,
}: {
  continents: Continent[];
  availableCountryIds: string[];
}) {
  const { t, lang } = useLang();

  return (
    <div className={styles.wrap}>
      <p className={styles.subtitle}>{t("home.subtitle")}</p>

      <MapShell availableCountryIds={availableCountryIds} />

      <section className={styles.continents}>
        <h2>{t("home.continentsTitle")}</h2>
        <div className={styles.grid}>
          {continents.map((continent) => (
            <Link
              key={continent.id}
              href={`/continent/${continent.id}`}
              className={styles.card}
            >
              {continent.names[lang]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
