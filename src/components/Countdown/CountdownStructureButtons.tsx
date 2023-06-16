"use client";

import { ModalProvider } from "@/contexts/ModalContext";
import { useCountdown } from "@/hooks/useCountdown";
import { Edit, Pause, Play, Timer } from "lucide-react";
import { Modal } from "../Modal";
import { CountdownButton } from "./CountdownButton";
import { CountdownForm } from "./CountdownForm";

interface CountdownStructureButtonProps {}

export const CountdownStructureButtons: React.FC<
  CountdownStructureButtonProps
> = () => {
  const {
    startCountdown,
    changeCountdown,
    resetCountdown,
    isActive,
    isRunning,
  } = useCountdown();

  return (
    <>
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
            <ModalProvider>
              <Modal
                trigger={<CountdownButton icon={<Edit />} variant="gray" />}
                title="Editar Contagem"
              >
                <CountdownForm />
              </Modal>
            </ModalProvider>
          </div>
        </div>
      )}
    </>
  );
};
