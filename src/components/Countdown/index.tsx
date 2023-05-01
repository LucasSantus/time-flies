"use client";

import { easeInOutAnimationDislocate, easeInOutAnimationScale } from "@/contants/animate";
import { ICON_STYLES } from "@/contants/icon";
import { useCountdown } from "@/hooks/useCountdown";
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
      {...easeInOutAnimationScale()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-slate-700 p-7 dark:bg-custom-gray-700"
    >
      <motion.div {...easeInOutAnimationDislocate({ delay: 0.7 })}>
        <CountdownStructure />
      </motion.div>

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <Button
              title="Interromper"
              icon={<HandPalm {...ICON_STYLES} />}
              variants={easeInOutAnimationDislocate({ delay: 0.7 })}
              color="error"
              onClick={changeCountdown}
            />
          ) : (
            <Button
              title="Continuar"
              icon={<Play {...ICON_STYLES} />}
              variants={easeInOutAnimationDislocate({ delay: 0.7 })}
              color="success"
              onClick={changeCountdown}
            />
          )}

          <Button
            title="Resetar"
            icon={<Timer {...ICON_STYLES} />}
            variants={easeInOutAnimationDislocate({ delay: 1.4 })}
            color="warning"
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            title="Começar"
            icon={<Play {...ICON_STYLES} />}
            variants={easeInOutAnimationDislocate({ delay: 0.7 })}
            color="success"
            onClick={startCountdown}
          />

          <div className="w-16">
            <Modal
              button={{
                color: "gray",
                icon: <PencilSimple {...ICON_STYLES} />,
                variants: easeInOutAnimationDislocate({ delay: 0.7 }),
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
