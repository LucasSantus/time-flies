import { animateButton, animateContainer } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON } from "@/contants/globals";
import { useCountdown } from "@/hooks/useCountdown";
import { useTranslation } from "@/hooks/useTranslations";
import classNames from "classnames";
import { motion } from "framer-motion";
import { HandPalm, PencilSimple, Play, Timer } from "phosphor-react";
import React from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { CountdownForm } from "./CountdownForm";
import { CountdownStructure } from "./CountdownStructure";

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  const translations = useTranslation("general");

  return (
    <motion.div
      variants={animateContainer()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-[#f6f7f8] p-7 dark:bg-custom-gray-700"
    >
      <motion.div variants={animateButton({ delay: 0.7 })}>
        <CountdownStructure />
      </motion.div>

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <Button
              className={EColorButton.RED}
              title={translations.interrupt}
              icon={<HandPalm size={SIZE_ICON} />}
              variants={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          ) : (
            <Button
              className={EColorButton.GREEN}
              title={translations.continue}
              icon={<Play size={SIZE_ICON} />}
              variants={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          )}

          <Button
            className={EColorButton.RED}
            title={translations.reset}
            icon={<Timer size={SIZE_ICON} />}
            variants={animateButton({ delay: 1.4 })}
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            className={EColorButton.GREEN}
            title={translations.start}
            icon={<Play size={SIZE_ICON} />}
            variants={animateButton({ delay: 0.7 })}
            onClick={startCountdown}
          />

          <div className="w-16">
            <Modal
              button={{
                className: classNames(EColorButton.GRAY, "p-5"),
                icon: <PencilSimple size={SIZE_ICON} />,
                variants: animateButton({ delay: 0.7 }),
              }}
              title={translations.editCountdown}
            >
              <CountdownForm />
            </Modal>
          </div>
        </div>
      )}
    </motion.div>
  );
};
