"use client";

import { useLang } from "@/lib/i18n";
import { EmptyState } from "@/components/EmptyState";
import styles from "@/components/ListPage.module.css";

export default function ContinentNotFound() {
  const { t } = useLang();

  return (
    <div className={styles.wrap}>
      <EmptyState
        title={t("continent.notFound")}
        message={t("continent.notFoundBody")}
      />
    </div>
  );
}
