"use client";

import { animateButton, animateContainer } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON } from "@/contants/globals";
import { useCountdown } from "@/hooks/useCountdown";
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

  return (
    <motion.div
      {...animateContainer()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-slate-700 p-7 dark:bg-custom-gray-700"
    >
      <motion.div {...animateButton({ delay: 0.7 })}>
        <CountdownStructure />
      </motion.div>

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <Button
              className={EColorButton.RED}
              title="Interromper"
              icon={<HandPalm size={SIZE_ICON} />}
              variants={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          ) : (
            <Button
              className={EColorButton.GREEN}
              title="Continuar"
              icon={<Play size={SIZE_ICON} />}
              variants={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          )}

          <Button
            className={EColorButton.RED}
            title="Resetar"
            icon={<Timer size={SIZE_ICON} />}
            variants={animateButton({ delay: 1.4 })}
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            className={EColorButton.GREEN}
            title="Começar"
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
              title="Editar Contagem"
            >
              <CountdownForm />
            </Modal>
          </div>
        </div>
      )}
    </motion.div>
  );
};
