"use client";

import { animateButton, animateContainer } from "@/contants/animate";
import { useCountdown } from "@/hooks/useCountdown";
import { ICON_CONFIG } from "@/utils/constants";
import { motion } from "framer-motion";
import React from "react";
import { HandPalmIcon } from "../Icons/HandPalmIcon";
import { PlayRegularIcon } from "../Icons/PlayRegularIcon";
import { TimerRegularIcon } from "../Icons/TimerRegularIcon";
import { TimerButton } from "./components/TimerButton";
import { TimerStructure } from "./components/TimerStructure";

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  return (
    <motion.div
      {...animateContainer()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-custom-gray-800 p-7"
    >
      <motion.div {...animateButton({ delay: 0.7 })}>
        <TimerStructure />
      </motion.div>

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <TimerButton
              title="Interromper"
              type="interrupt"
              icon={<HandPalmIcon {...ICON_CONFIG} />}
              variantsAnimation={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          ) : (
            <TimerButton
              title="Continuar"
              icon={<PlayRegularIcon {...ICON_CONFIG} />}
              variantsAnimation={animateButton({ delay: 0.7 })}
              onClick={changeCountdown}
            />
          )}

          <TimerButton
            title="Resetar"
            type="interrupt"
            icon={<TimerRegularIcon {...ICON_CONFIG} />}
            variantsAnimation={animateButton({ delay: 1.4 })}
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <TimerButton
          title="Começar"
          icon={<PlayRegularIcon {...ICON_CONFIG} />}
          variantsAnimation={animateButton({ delay: 0.7 })}
          onClick={() => startCountdown(60 * 25)}
        />
      )}
    </motion.div>
  );
};
