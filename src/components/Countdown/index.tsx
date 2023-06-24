"use client";

import { ModalProvider } from "@/contexts/ModalContext";
import { useCountdown } from "@/hooks/useCountdown";
import { easeInOutAnimationScale } from "@/utils/animation/easeInOutAnimationScale";
import { motion } from "framer-motion";
import React from "react";
import { Modal } from "../Modal";
import { CountdownFinished } from "./CountdownFinished";
import { CountdownStructureButtons } from "./CountdownStructureButtons";
import { CountdownStructureNumbers } from "./CountdownStructureNumbers";

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = () => {
  const { isFinished } = useCountdown();

  return (
    <motion.section
      {...easeInOutAnimationScale({})}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-slate-700 p-7 dark:bg-custom-gray-700"
    >
      {isFinished && (
        <ModalProvider>
          <Modal isOpenDefault={true}>
            <CountdownFinished />
          </Modal>
        </ModalProvider>
      )}

      <CountdownStructureNumbers />

      <CountdownStructureButtons />
    </motion.section>
  );
};
