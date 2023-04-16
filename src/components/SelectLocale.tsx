import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { useLocale } from "@/hooks/useLocale";
import { useTranslations } from "@/hooks/useTranslations";
import { Locale } from "@/locales/general";
import classNames from "classnames";
import { Gear } from "phosphor-react";
import { Dropdown } from "./Dropdown";

interface ILanguageTypes {
  id: string;
  title: string;
  onClick: () => void;
}

export const SelectLocale: React.FC = () => {
  const { setLocale } = useLocale();

  const translations = useTranslations("general");

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const LANGUAGES: ILanguageTypes[] = [
    {
      id: "pt-BR",
      title: translations.portuguese,
      onClick: () => {
        handleLocaleChange("pt-BR");
      },
    },
    {
      id: "en-US",
      title: translations.english,
      onClick: () => {
        handleLocaleChange("en-US");
      },
    },
  ];

  return (
    <Dropdown
      button={{
        title: translations.languages,
        icon: <Gear size={18} />,
        className: classNames(EColorButton.GRAY, "w-32 px-3"),
        variants: animateButton({ delay: 0.7 }),
      }}
      items={LANGUAGES}
    />
  );
};
