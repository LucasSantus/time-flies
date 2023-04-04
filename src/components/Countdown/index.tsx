"use client";

import { BUTTON_ANIMATE } from "@/contants/ButtonAnimate";
import { CONTAINER_ANIMATE } from "@/contants/ContainerAnimate";
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
      {...CONTAINER_ANIMATE()}
      className="grid min-w-min items-center justify-center gap-4 rounded-md bg-custom-gray-800 p-7"
    >
      <TimerStructure />

      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <TimerButton
              title="Interromper"
              type="interrupt"
              icon={<HandPalmIcon {...ICON_CONFIG} />}
              variantsAnimation={BUTTON_ANIMATE({ delay: 1 })}
              onClick={changeCountdown}
            />
          ) : (
            <TimerButton
              title="Continuar"
              icon={<PlayRegularIcon {...ICON_CONFIG} />}
              variantsAnimation={BUTTON_ANIMATE({ delay: 1 })}
              onClick={changeCountdown}
            />
          )}

          <TimerButton
            title="Resetar"
            type="interrupt"
            icon={<TimerRegularIcon {...ICON_CONFIG} />}
            variantsAnimation={BUTTON_ANIMATE({ delay: 2 })}
            onClick={resetCountdown}
          />
        </div>
      ) : (
        <TimerButton
          title="Começar"
          icon={<PlayRegularIcon {...ICON_CONFIG} />}
          variantsAnimation={BUTTON_ANIMATE({ delay: 1 })}
          onClick={() => startCountdown(60 * 25)}
        />
      )}
    </motion.div>
  );
};
