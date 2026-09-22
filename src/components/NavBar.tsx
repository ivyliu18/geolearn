"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import styles from "./NavBar.module.css";

export function NavBar() {
  const { t, lang, setLang } = useLang();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        {t("site.title")}
      </Link>
      <nav className={styles.nav}>
        <Link href="/">{t("nav.home")}</Link>
        <Link href="/quiz">{t("nav.quiz")}</Link>
        <Link href="/progress">{t("nav.progress")}</Link>
        <button
          type="button"
          className={styles.langButton}
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
        >
          {t("nav.langToggle")}
        </button>
      </nav>
    </header>
  );
}
