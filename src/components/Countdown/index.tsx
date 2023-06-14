"use client";

import { DialogProvider } from "@/contexts/DialogContext";
import { useCountdown } from "@/hooks/useCountdown";
import { easeInOutAnimationScale } from "@/utils/animation/easeInOutAnimationScale";
import { motion } from "framer-motion";
import { Edit, Pause, Play, Timer } from "lucide-react";
import React from "react";
import { Modal } from "../Modal";
import { CountdownButton } from "./CountdownButton";
import { CountdownForm } from "./CountdownForm";
import { CountdownStructure } from "./CountdownStructure";

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = () => {
  const {
    startCountdown,
    changeCountdown,
    resetCountdown,
    isActive,
    isRunning,
  } = useCountdown();

  return (
    <motion.section
      {...easeInOutAnimationScale({})}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-slate-700 p-7 dark:bg-custom-gray-700"
    >
      <CountdownStructure />

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <CountdownButton
              title="Interromper"
              icon={<Pause />}
              variant="error"
              onClick={changeCountdown}
            />
          ) : (
            <CountdownButton
              title="Continuar"
              icon={<Play />}
              variant="success"
              onClick={changeCountdown}
            />
          )}

          <CountdownButton
            title="Resetar"
            icon={<Timer />}
            variant="warning"
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <div className="flex gap-1">
          <CountdownButton
            title="Começar"
            icon={<Play />}
            variant="success"
            onClick={startCountdown}
          />

          <div className="w-16">
            <DialogProvider>
              <Modal
                trigger={<CountdownButton icon={<Edit />} variant="gray" />}
                title="Editar Contagem"
              >
                <CountdownForm />
              </Modal>
            </DialogProvider>
          </div>
        </div>
      )}
    </motion.section>
  );
};
