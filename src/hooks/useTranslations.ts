import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import generalTranslations, { Locale } from "@/locales/general";
import { Context, useContext } from "react";

const translations = {
  general: generalTranslations,
};

type Translations = typeof translations;

export function useTranslation<T extends keyof Translations>(component: T): Translations[T][Locale] {
  const { locale } = useContext(LocaleContext as Context<LocaleContextType>);

  const moduleTranslate = translations[component];

  return moduleTranslate[locale] ?? moduleTranslate["pt-BR"];
}
