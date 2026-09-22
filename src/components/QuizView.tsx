"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/lib/i18n";
import type { Continent, Subregion } from "@/lib/types";
import { EmptyState } from "./EmptyState";
import styles from "./QuizView.module.css";

export function QuizView({
  continents,
  subregions,
  region,
  subregion,
  matchingCountryCount,
}: {
  continents: Continent[];
  subregions: Subregion[];
  region: string;
  subregion: string;
  matchingCountryCount: number;
}) {
  const router = useRouter();
  const { t, lang } = useLang();

  const visibleSubregions = region
    ? subregions.filter((s) => s.continent === region)
    : subregions;

  function updateQuery(next: { region?: string; subregion?: string }) {
    const params = new URLSearchParams();
    const nextRegion = next.region ?? region;
    const nextSubregion = next.subregion ?? subregion;
    if (nextRegion) params.set("region", nextRegion);
    if (nextSubregion) params.set("subregion", nextSubregion);
    router.push(`/quiz?${params.toString()}`);
  }

  return (
    <div className={styles.wrap}>
      <h1>{t("quiz.title")}</h1>

      <div className={styles.filters}>
        <label className={styles.field}>
          {t("quiz.filterRegion")}
          <select
            value={region}
            onChange={(e) =>
              updateQuery({ region: e.target.value, subregion: "" })
            }
          >
            <option value="">{t("quiz.all")}</option>
            {continents.map((c) => (
              <option key={c.id} value={c.id}>
                {c.names[lang]}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          {t("quiz.filterSubregion")}
          <select
            value={subregion}
            onChange={(e) => updateQuery({ subregion: e.target.value })}
          >
            <option value="">{t("quiz.all")}</option>
            {visibleSubregions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.names[lang]}
              </option>
            ))}
          </select>
        </label>
      </div>

      {matchingCountryCount === 0 ? (
        <EmptyState title={t("quiz.title")} message={t("quiz.comingSoon")} />
      ) : null}
    </div>
  );
}
