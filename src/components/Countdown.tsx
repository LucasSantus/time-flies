import { useCountdown } from '@/hooks/useCountdown';
import React from 'react';
import { Button } from './Button';
import { Timer } from './Timer';

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid gap-2 border border-black p-4 rounded-md">
        <Timer />
        {isActive ? (
          <Button onClick={changeCountdown}>Pausar</Button>
        ) : (
          <div className="grid grid-cols-2">
            {isRunning ? (
              <>
                <Button onClick={changeCountdown}>Continuar</Button>
              </>
            ) : (
              <Button onClick={() => startCountdown(60 * 60 * 4)}>Iniciar</Button>
            )}
            <Button onClick={resetCountdown}>Resetar</Button>
          </div>
        )}
      </div>
    </div>
  );
};
