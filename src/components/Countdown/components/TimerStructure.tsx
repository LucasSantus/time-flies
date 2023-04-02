import { useCountdown } from '@/hooks/useCountdown';
import { TimerColon } from './TimerColon';
import { TimerNumber } from './TimerNumber';

interface ITimerStructureProps {}

export const TimerStructure: React.FC<ITimerStructureProps> = () => {
  const { times } = useCountdown();

  const { hourLeft, hourRight, minuteLeft, minuteRight, secondLeft, secondRight } = times;

  return (
    <div className="flex items-center">
      <TimerNumber number={hourLeft} />
      <TimerNumber number={hourRight} />
      <TimerColon />
      <TimerNumber number={minuteLeft} />
      <TimerNumber number={minuteRight} />
      <TimerColon />
      <TimerNumber number={secondLeft} />
      <TimerNumber number={secondRight} />
    </div>
  );
};
