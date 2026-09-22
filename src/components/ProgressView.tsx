"use client";

import { useLang } from "@/lib/i18n";
import { EmptyState } from "./EmptyState";
import styles from "./ListPage.module.css";

export function ProgressView() {
  const { t } = useLang();

  return (
    <div className={styles.wrap}>
      <h1>{t("progress.title")}</h1>
      <EmptyState title={t("progress.title")} message={t("progress.comingSoon")} />
    </div>
  );
}
