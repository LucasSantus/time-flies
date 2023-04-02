'use client';

import { useCountdown } from '@/hooks/useCountdown';
import React from 'react';
import { HandPalmIcon } from '../Icons/HandPalmIcon';
import { SunIcon } from '../Icons/SunIcon';
import { TimerButton } from './components/TimerButton';
import { TimerStructure } from './components/TimerStructure';

export const Countdown: React.FC = () => {
  const { startCountdown, changeCountdown, resetCountdown, isActive, isRunning } = useCountdown();

  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid gap-2 border border-black p-4 rounded-md">
        <TimerStructure />
        {isActive ? (
          <TimerButton title="Pausar" onClick={changeCountdown} icon={<SunIcon />} />
        ) : (
          <div className="grid grid-cols-2">
            {isRunning ? (
              <>
                <TimerButton title="Continuar" onClick={changeCountdown} />
              </>
            ) : (
              <TimerButton title="Iniciar" onClick={() => startCountdown(60 * 60 * 4)} icon={<HandPalmIcon />} />
            )}
            <TimerButton title="Resetar" onClick={resetCountdown} />
          </div>
        )}
      </div>
    </div>
  );
};
