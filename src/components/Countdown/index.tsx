'use client';

import { useCountdown } from '@/hooks/useCountdown';
import React from 'react';
import { TimerButton } from './components/TimerButton';
import { TimerStructure } from './components/TimerStructure';

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid gap-2 border border-black p-4 rounded-md">
        <TimerStructure />
        {isActive ? (
          <TimerButton onClick={changeCountdown}>Pausar</TimerButton>
        ) : (
          <div className="grid grid-cols-2">
            {isRunning ? (
              <>
                <TimerButton onClick={changeCountdown}>Continuar</TimerButton>
              </>
            ) : (
              <TimerButton onClick={() => startCountdown(60 * 60 * 4)}>Iniciar</TimerButton>
            )}
            <TimerButton onClick={resetCountdown}>Resetar</TimerButton>
          </div>
        )}
      </div>
    </div>
  );
};
