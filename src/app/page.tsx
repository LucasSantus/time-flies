"use client";

import { Countdown } from "@/components/Countdown";
import { Modal } from "@/components/Modal";
import { MultiThemeSelector } from "@/components/MultiThemeSelector";
import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON } from "@/contants/globals";
import { useMultiTheme } from "@/hooks/useMultiTheme";
import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import { Gear } from "phosphor-react";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  const { backgroundPrimary } = useMultiTheme();
  const translations = useTranslations("general");

  return (
    <div className={classNames("flex h-screen w-screen flex-col", backgroundPrimary)}>
      <div className="flex justify-end">
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
            <MultiThemeSelector />
          </Modal>
        </div>
      </div>

      <div className="flex h-screen w-screen items-center justify-center">
        <Countdown />
      </div>
    </div>
  );
}
