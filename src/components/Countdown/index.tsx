"use client";

import { useCountdown } from "@/hooks/useCountdown";
import React from "react";
import { HandPalmIcon } from "../Icons/HandPalmIcon";
import { PlayRegularIcon } from "../Icons/PlayRegularIcon";
import { TimerRegularIcon } from "../Icons/TimerRegularIcon";
import { TimerButton } from "./components/TimerButton";
import { TimerStructure } from "./components/TimerStructure";

export const Countdown: React.FC = () => {
  const {
    startCountdown,
    changeCountdown,
    resetCountdown,
    isActive,
    isRunning,
  } = useCountdown();

  return (
    <div className="grid min-w-min items-center justify-center gap-4 rounded-md bg-custom-gray-800 p-7">
      <TimerStructure />

      {isActive ? (
        <TimerButton
          title="Interromper"
          type="interrupt"
          icon={<HandPalmIcon className="w-4" />}
          onClick={changeCountdown}
        />
      ) : isRunning ? (
        <>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            <TimerButton
              title="Continuar"
              icon={<PlayRegularIcon className="w-4" />}
              onClick={changeCountdown}
            />
            <TimerButton
              title="Resetar"
              type="interrupt"
              icon={<TimerRegularIcon className="w-4" />}
              onClick={resetCountdown}
            />
          </div>
        </>
      ) : (
        <TimerButton
          title="Começar"
          icon={<PlayRegularIcon className="w-4" />}
          onClick={() => startCountdown(60 * 25)}
        />
      )}
    </div>
  );
};
