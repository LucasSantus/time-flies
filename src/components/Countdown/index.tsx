import { animateButton, animateContainer } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON } from "@/contants/globals";
import { useCountdown } from "@/hooks/useCountdown";
import { useLocale } from "@/hooks/useLocale";
import generalTranslations from "@/locales/general";
import classNames from "classnames";
import { motion } from "framer-motion";
import { HandPalm, PencilSimple, Play, Timer } from "phosphor-react";
import React, { useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { ThemesMode } from "../ThemesMode";
import { CountdownForm } from "./CountdownForm";
import { CountdownStructure } from "./CountdownStructure";

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  const { locale } = useLocale();
  const traslations = generalTranslations[locale];

  const [, setIsModalActive] = useState(false);

  const closeModal = () => {
    setIsModalActive(false);
  };

  return (
    <motion.div
      {...animateContainer()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md p-7 dark:bg-custom-gray-800"
    >
      <ThemesMode />
      <motion.div {...animateButton({ delay: 0.7 })}>
        <CountdownStructure />
      </motion.div>

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <Button
              className={EColorButton.RED}
              title={traslations.interrupt}
              icon={<HandPalm size={SIZE_ICON} />}
              variants={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          ) : (
            <Button
              className={EColorButton.GREEN}
              title={traslations.continue}
              icon={<Play size={SIZE_ICON} />}
              variants={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          )}

          <Button
            className={EColorButton.RED}
            title={traslations.reset}
            icon={<Timer size={SIZE_ICON} />}
            variants={animateButton({ delay: 1.4 })}
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            className={EColorButton.GREEN}
            title={traslations.start}
            icon={<Play size={SIZE_ICON} />}
            variants={animateButton({ delay: 0.7 })}
            onClick={() => startCountdown()}
          />

          <div className="w-16">
            <Modal
              button={{
                className: classNames(EColorButton.GRAY, "p-5"),
                icon: <PencilSimple size={SIZE_ICON} />,
                variants: animateButton({ delay: 0.7 }),
                onClick: () => {},
              }}
              title={traslations.editCountdown}
            >
              <CountdownForm onSubmit={closeModal} />
            </Modal>
          </div>
        </div>
      )}
    </motion.div>
  );
};
