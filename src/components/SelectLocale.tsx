import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { useLocale } from "@/hooks/useLocale";
import generalTranslations, { Locale } from "@/locales/general";
import classNames from "classnames";
import { Gear } from "phosphor-react";
import { Dropdown } from "./Dropdown";

interface ILanguageTypes {
  id: string;
  title: string;
  onClick: () => void;
}

export const SelectLocale: React.FC = () => {
  const { locale, setLocale } = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const LANGUAGES: ILanguageTypes[] = [
    {
      id: "pt-BR",
      title: generalTranslations[locale].portuguese,
      onClick: () => {
        handleLocaleChange("pt-BR");
      },
    },
    {
      id: "en-US",
      title: generalTranslations[locale].english,
      onClick: () => {
        handleLocaleChange("en-US");
      },
    },
  ];

  return (
    <Dropdown
      button={{
        title: generalTranslations[locale].languages,
        icon: <Gear size={18} />,
        className: classNames(EColorButton.GRAY, "w-32 px-3"),
        variants: animateButton({ delay: 0.7 }),
        onClick: () => {},
      }}
      items={LANGUAGES}
    />
  );
};
