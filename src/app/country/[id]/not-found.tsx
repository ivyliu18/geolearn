"use client";

import { useLang } from "@/lib/i18n";
import { EmptyState } from "@/components/EmptyState";
import styles from "@/components/ListPage.module.css";

export default function CountryNotFound() {
  const { t } = useLang();

  return (
    <div className={styles.wrap}>
      <EmptyState
        title={t("country.notFoundTitle")}
        message={t("country.notFoundBody")}
      />
    </div>
  );
}
