import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { useLocale } from "@/hooks/useLocale";
import generalTranslations from "@/locales/general";
import classNames from "classnames";
import { Gear } from "phosphor-react";
import React from "react";
import { Modal } from "./Modal";
import { SelectLocale } from "./SelectLocale";

export const Settings: React.FC = () => {
  const { locale } = useLocale();
  const translations = generalTranslations[locale];

  return (
    <Modal
      button={{
        className: classNames(EColorButton.GRAY, "p-5"),
        title: translations.settings,
        icon: <Gear size={SIZE_ICON} />,
        variants: animateButton({ delay: 0.7 }),
        onClick: () => {},
      }}
      title={translations.settings}
    >
      <SelectLocale />
    </Modal>
  );
};
