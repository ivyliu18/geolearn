"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "zh" | "en";

const STORAGE_KEY = "geolearn-lang";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "zh" || stored === "en" ? stored : "zh";
}

function getServerSnapshot(): Lang {
  return "zh";
}

function setStoredLang(next: Lang) {
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

export const dictionary = {
  "site.title": { zh: "GeoLearn 世界地理學習", en: "GeoLearn" },
  "nav.home": { zh: "世界地圖", en: "World Map" },
  "nav.quiz": { zh: "測驗", en: "Quiz" },
  "nav.progress": { zh: "學習進度", en: "Progress" },
  "nav.langToggle": { zh: "English", en: "中文" },
  "home.subtitle": {
    zh: "從大陸到國家，由廣到窄的互動地理學習地圖。",
    en: "Broad-to-narrow interactive geography learning, continent to country.",
  },
  "home.continentsTitle": { zh: "選擇大陸", en: "Browse by continent" },
  "map.loading": { zh: "地圖載入中…", en: "Loading map…" },
  "map.noData": { zh: "尚無此國家資料", en: "No data yet for this country" },
  "breadcrumb.world": { zh: "世界", en: "World" },
  "continent.subregionsTitle": { zh: "次區域", en: "Subregions" },
  "continent.countriesTitle": { zh: "國家", en: "Countries" },
  "continent.noSubregions": {
    zh: "此大陸尚未建立次區域資料。",
    en: "No subregions have been defined for this continent yet.",
  },
  "continent.noCountries": {
    zh: "此大陸尚未收錄任何國家。",
    en: "No countries have been added for this continent yet.",
  },
  "continent.notFound": { zh: "找不到此大陸", en: "Continent not found" },
  "continent.notFoundBody": {
    zh: "請確認網址是否正確，或回到世界地圖重新選擇。",
    en: "Check the URL, or go back to the world map and pick again.",
  },
  "subregion.confusedTitle": {
    zh: "此次區域內容易混淆的國家",
    en: "Commonly confused within this subregion",
  },
  "subregion.noCountries": {
    zh: "此次區域尚未收錄任何國家。",
    en: "No countries have been added for this subregion yet.",
  },
  "subregion.notFound": { zh: "找不到此次區域", en: "Subregion not found" },
  "subregion.notFoundBody": {
    zh: "此次區域尚未建立，或網址有誤。",
    en: "This subregion doesn't exist yet, or the URL is wrong.",
  },
  "country.notFoundTitle": { zh: "尚無此國家資料", en: "No data for this country yet" },
  "country.notFoundBody": {
    zh: "此國家的內容還在建置中，請稍後再回來查看。",
    en: "This country's content hasn't been authored yet — check back later.",
  },
  "country.confusedWith": { zh: "容易混淆的國家", en: "Commonly confused with" },
  "country.compareCta": { zh: "比較", en: "Compare" },
  "compare.title": { zh: "國家比較", en: "Country comparison" },
  "compare.decisionRule": { zh: "10 秒判斷法則", en: "10-second decision rule" },
  "compare.missing": {
    zh: "尚未有此國家的資料可供比較。",
    en: "No data available yet for this country.",
  },
  "quiz.title": { zh: "主動回憶測驗", en: "Active-recall quiz" },
  "quiz.filterRegion": { zh: "篩選：大陸", en: "Filter: continent" },
  "quiz.filterSubregion": { zh: "篩選：次區域", en: "Filter: subregion" },
  "quiz.all": { zh: "全部", en: "All" },
  "quiz.comingSoon": {
    zh: "目前尚未收錄任何國家資料，測驗題庫將於內容建置後開放。",
    en: "No country data yet — the quiz will unlock once content is authored.",
  },
  "progress.title": { zh: "學習進度儀表板", en: "Mastery dashboard" },
  "progress.comingSoon": {
    zh: "進度追蹤將於國家內容上線後開始記錄。",
    en: "Progress tracking will start once country content goes live.",
  },
} as const;

export type DictionaryKey = keyof typeof dictionary;

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: DictionaryKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang: setStoredLang,
      t: (key) => dictionary[key][lang],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
