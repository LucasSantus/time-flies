import { DEFAULT_LOCALE } from "@/contants/globals";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import generalTranslations, { Locale } from "@/locales/general";
import { Context, useContext } from "react";

const translations = {
  general: generalTranslations,
};

type Translations = typeof translations;

export function useTranslations<T extends keyof Translations>(component: T): Translations[T][Locale] {
  const { locale } = useContext(LocaleContext as Context<LocaleContextType>);

  const modules = translations[component];

  return modules[locale] ?? modules[DEFAULT_LOCALE];
}
