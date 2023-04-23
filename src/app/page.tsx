"use client";

import { Countdown } from "@/components/Countdown";
import { Modal } from "@/components/Modal";
import { SelectLocale } from "@/components/SelectLocale";
import { ThemesMode } from "@/components/ThemesMode";
import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON } from "@/contants/globals";
import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import { Gear } from "phosphor-react";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  const translations = useTranslations("general");

  return (
    <div className="flex h-screen w-screen flex-col bg-slate-800 dark:bg-custom-gray-800">
      <div className="flex justify-end">
        <SelectLocale />
        <div className="m-5">
          <Modal
            button={{
              title: translations.settings,
              className: classNames(EColorButton.GRAY, "px-4 py-1"),
              icon: <Gear size={SIZE_ICON} />,
              variants: animateButton({ delay: 0.7 }),
            }}
            title=""
          >
            <ThemesMode />
          </Modal>
        </div>
      </div>

      <div className="flex h-screen w-screen items-center justify-center">
        <Countdown />
      </div>
    </div>
  );
}
