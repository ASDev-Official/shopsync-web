/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const DEFAULT_LOCALE = "en";
const STORAGE_LOCALE_KEY = "shopsync.locale";
const STORAGE_MANUAL_KEY = "shopsync.locale.manual";

const modules = import.meta.glob("../l10n/*.arb", { eager: true });

const translationsByLocale = Object.entries(modules).reduce((acc, [path, mod]) => {
  const match = path.match(/\/([^/]+)\.arb$/);
  if (!match) return acc;
  const locale = match[1];
  acc[locale] = mod.default || {};
  return acc;
}, {});

const availableLocales = Object.keys(translationsByLocale).sort();
const localeLookup = availableLocales.reduce((acc, code) => {
  acc[code.toLowerCase()] = code;
  return acc;
}, {});

const fallbackLocale = resolveSupportedLocale(DEFAULT_LOCALE) || availableLocales[0] || DEFAULT_LOCALE;
const sourceKeys = Object.keys(translationsByLocale[fallbackLocale] || {}).filter(
  (key) => !key.startsWith("@")
);
const localeProgress = availableLocales.reduce((acc, code) => {
  const data = translationsByLocale[code] || {};
  const translatedCount = sourceKeys.reduce((count, key) => {
    const value = data[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return count + 1;
    }
    return count;
  }, 0);

  acc[code] = sourceKeys.length
    ? Math.round((translatedCount / sourceKeys.length) * 100)
    : 100;

  return acc;
}, {});

const I18nContext = createContext({
  locale: fallbackLocale,
  setLocale: () => {},
  availableLocales,
  localeProgress,
  t: (key, vars = {}) => {
    let result = key;
    Object.entries(vars).forEach(([name, value]) => {
      result = result.replaceAll(`{${name}}`, String(value));
    });
    return result;
  },
});

function resolveSupportedLocale(rawLocale) {
  if (!rawLocale) {
    return null;
  }

  const normalized = rawLocale.toLowerCase();
  if (localeLookup[normalized]) {
    return localeLookup[normalized];
  }

  const short = normalized.split("-")[0];
  if (localeLookup[short]) {
    return localeLookup[short];
  }

  return null;
}

function resolveInitialLocale() {
  const manuallySelected = localStorage.getItem(STORAGE_MANUAL_KEY) === "1";
  const stored = localStorage.getItem(STORAGE_LOCALE_KEY);

  if (manuallySelected) {
    const supportedStored = resolveSupportedLocale(stored);
    if (supportedStored) {
      return supportedStored;
    }
  }

  const deviceLocales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const candidate of deviceLocales) {
    const supported = resolveSupportedLocale(candidate);
    if (supported) {
      return supported;
    }
  }

  return fallbackLocale;
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(resolveInitialLocale);

  const setLocale = (nextLocale) => {
    const supported = resolveSupportedLocale(nextLocale) || fallbackLocale;
    setLocaleState(supported);
    localStorage.setItem(STORAGE_LOCALE_KEY, supported);
    localStorage.setItem(STORAGE_MANUAL_KEY, "1");
  };

  useEffect(() => {
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
      localeProgress,
      t,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
