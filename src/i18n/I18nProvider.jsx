/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const DEFAULT_LOCALE = "en";
const STORAGE_KEY = "shopsync.locale";

const modules = import.meta.glob("../l10n/*.arb", { eager: true });

const translationsByLocale = Object.entries(modules).reduce((acc, [path, mod]) => {
  const match = path.match(/\/([^/]+)\.arb$/);
  if (!match) return acc;
  const locale = match[1];
  acc[locale] = mod.default || {};
  return acc;
}, {});

const availableLocales = Object.keys(translationsByLocale).sort();

const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  availableLocales: [DEFAULT_LOCALE],
  t: (key, vars = {}) => {
    let result = key;
    Object.entries(vars).forEach(([name, value]) => {
      result = result.replaceAll(`{${name}}`, String(value));
    });
    return result;
  },
});

function resolveInitialLocale() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && translationsByLocale[stored]) {
    return stored;
  }

  const browser = navigator.language.toLowerCase();
  if (translationsByLocale[browser]) {
    return browser;
  }

  const short = browser.split("-")[0];
  if (translationsByLocale[short]) {
    return short;
  }

  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(resolveInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => {
    const active = translationsByLocale[locale] || translationsByLocale[DEFAULT_LOCALE] || {};
    const fallback = translationsByLocale[DEFAULT_LOCALE] || {};

    const t = (key, vars = {}) => {
      const raw = active[key] ?? fallback[key] ?? key;
      let result = String(raw);
      Object.entries(vars).forEach(([name, value]) => {
        result = result.replaceAll(`{${name}}`, String(value));
      });
      return result;
    };

    return {
      locale,
      setLocale,
      availableLocales,
      t,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
