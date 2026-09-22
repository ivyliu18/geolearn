"use client";

import { useLang } from "@/lib/i18n";
import { EmptyState } from "@/components/EmptyState";
import styles from "@/components/ListPage.module.css";

export default function SubregionNotFound() {
  const { t } = useLang();

  return (
    <div className={styles.wrap}>
      <EmptyState
        title={t("subregion.notFound")}
        message={t("subregion.notFoundBody")}
      />
    </div>
  );
}
