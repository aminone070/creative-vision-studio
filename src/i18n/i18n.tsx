import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DICT, type Lang, type TKey } from "./dictionary";

interface I18nValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: TKey) => string;
  /** Pick the right side of a bilingual pair. */
  pick: (ar: string, en: string) => string;
  formatMoney: (n: number) => string;
  formatNumber: (n: number) => string;
}

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "tukly.lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<I18nValue>(() => {
    const t = (key: TKey) => DICT[key][lang];
    return {
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      toggleLang: () => setLang(lang === "ar" ? "en" : "ar"),
      t,
      pick: (ar, en) => (lang === "ar" ? ar : en),
      formatMoney: (n) =>
        `${new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-EG").format(Math.round(n))} ${DICT["common.egp"][lang]}`,
      formatNumber: (n) =>
        new Intl.NumberFormat(lang === "ar" ? "ar-EG" : "en-EG").format(n),
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
