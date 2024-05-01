"use client";

import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/use-countdown";
import { Pause, Play, Timer } from "lucide-react";
import { Fragment } from "react";
import { CountdownDialogForm } from "./countdown-dialog-form";

export function CountdownStructureButtons(): JSX.Element {
  const {
    startCountdown,
    changeCountdown,
    resetCountdown,
    isActive,
    isRunning,
  } = useCountdown();

  return (
    <Fragment>
      {isRunning ? (
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {isActive ? (
            <Button
              icon={<Pause className="size-6" />}
              variant="destructive"
              onClick={changeCountdown}
            >
              Interromper
            </Button>
          ) : (
            <Button
              icon={<Play className="size-6" />}
              variant="success"
              onClick={changeCountdown}
            >
              Continuar
            </Button>
          )}

          <Button
            icon={<Timer className="size-6" />}
            variant="warning"
            onClick={resetCountdown}
          >
            Resetar
          </Button>
        </div>
      ) : (
        <div className="flex gap-1">
          <Button
            icon={<Play className="size-6" />}
            variant="success"
            onClick={startCountdown}
          >
            Começar
          </Button>

          <CountdownDialogForm />
        </div>
      )}
    </Fragment>
  );
}
