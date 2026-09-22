"use client";

import { useLang } from "@/lib/i18n";
import type { Country } from "@/lib/types";
import { EmptyState } from "./EmptyState";
import styles from "./CompareView.module.css";

function CountryColumn({
  id,
  country,
}: {
  id: string;
  country: Country | null;
}) {
  const { t, lang } = useLang();

  if (!country) {
    return (
      <div className={styles.column}>
        <h2>{id}</h2>
        <EmptyState title={id} message={t("compare.missing")} />
      </div>
    );
  }

  return (
    <div className={styles.column}>
      <h2>
        {country.flagEmoji} {country.names[lang]}
      </h2>
      <dl>
        <dt>Drive side</dt>
        <dd>{country.driveSide}</dd>
        <dt>Terrain</dt>
        <dd>{country.terrainTags.join(", ")}</dd>
        <dt>Center line</dt>
        <dd>{country.roadInfra.centerLineColor}</dd>
        <dt>Distance unit</dt>
        <dd>{country.roadInfra.distanceUnit}</dd>
        <dt>Sign standard</dt>
        <dd>{country.roadInfra.signStandard}</dd>
      </dl>
    </div>
  );
}

export function CompareView({
  idA,
  idB,
  countryA,
  countryB,
}: {
  idA: string;
  idB: string;
  countryA: Country | null;
  countryB: Country | null;
}) {
  const { t } = useLang();

  return (
    <div className={styles.wrap}>
      <h1>{t("compare.title")}</h1>
      <div className={styles.columns}>
        <CountryColumn id={idA} country={countryA} />
        <CountryColumn id={idB} country={countryB} />
      </div>
      <section className={styles.rule}>
        <h2>{t("compare.decisionRule")}</h2>
        <EmptyState title={t("compare.decisionRule")} message={t("compare.missing")} />
      </section>
    </div>
  );
}
