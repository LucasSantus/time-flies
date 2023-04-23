import { Locale } from "@/locales/general";
import { getLocaleFromCookie } from "@/utils/getLocaleFromCookie";
import { setLocaleFromCookie } from "@/utils/setLocaleFromCookie";
import { PropsWithChildren, createContext, useState } from "react";

export interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext({} as LocaleContextType);

export const LocaleProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState(getLocaleFromCookie());

  const setLocale = (newLocale: Locale) => {
    setLocaleFromCookie(newLocale);
    setLocaleState(newLocale);
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
