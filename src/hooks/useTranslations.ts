import { generalTranslations } from "@/translations/general";
import { Locale } from "@/types/Locale";
import { useRouter } from "next/router";

const translations = {
  general: generalTranslations,
};

type Translations = typeof translations;

export function useTranslations<T extends keyof Translations>(component: T): Translations[T][Locale] {
  const { locale, defaultLocale } = useRouter();

  // Verifica se a chave `component` existe no objeto `translations`
  if (!translations[component]) {
    throw new Error(`Component '${component}' not found in translations.`);
  }

  const componentTranslations = translations[component];

  return componentTranslations[locale] ?? componentTranslations[defaultLocale];
}
