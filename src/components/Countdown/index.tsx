import { animateButton, animateContainer } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { useCountdown } from "@/hooks/useCountdown";
import { ICON_CONFIG } from "@/utils/constants";
import { motion } from "framer-motion";
import { PencilSimple } from "phosphor-react";
import React, { useState } from "react";
import { HandPalmIcon } from "../Icons/HandPalmIcon";
import { PlayRegularIcon } from "../Icons/PlayRegularIcon";
import { TimerRegularIcon } from "../Icons/TimerRegularIcon";
import { Modal } from "../Modal";
import { TimerButton } from "./TimerButton";
import { TimerForm } from "./TimerForm";
import { TimerStructure } from "./TimerStructure";

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  const [isModalActive, setIsModalActive] = useState(false);

  const closeModal = () => {
    setIsModalActive(false);
  };

  return (
    <motion.div
      {...animateContainer()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-custom-gray-800 p-7"
    >
      <motion.div {...animateButton({ delay: 0.7 })}>
        <TimerStructure />
      </motion.div>

      <Modal title="Edit" isActive={isModalActive} onCloseModal={closeModal}>
        <TimerForm onSubmit={closeModal} />
      </Modal>

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <TimerButton
              className={EColorButton.RED}
              title="Interromper"
              icon={<HandPalmIcon {...ICON_CONFIG} />}
              variantsAnimation={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          ) : (
            <TimerButton
              className={EColorButton.GREEN}
              title="Continuar"
              icon={<PlayRegularIcon {...ICON_CONFIG} />}
              variantsAnimation={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          )}

          <TimerButton
            className={EColorButton.RED}
            title="Resetar"
            icon={<TimerRegularIcon {...ICON_CONFIG} />}
            variantsAnimation={animateButton({ delay: 1.4 })}
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <TimerButton
            className={EColorButton.GREEN}
            title="Começar"
            icon={<PlayRegularIcon {...ICON_CONFIG} />}
            variantsAnimation={animateButton({ delay: 0.7 })}
            onClick={() => startCountdown()}
          />

          <div className="w-16">
            <TimerButton
              className={EColorButton.GRAY}
              icon={<PencilSimple size={27} className="h-8" />}
              variantsAnimation={animateButton({ delay: 0.7 })}
              onClick={() => setIsModalActive(true)}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};
