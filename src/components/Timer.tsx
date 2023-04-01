import { useCountdown } from '@/hooks/useCountdown';
import { TimerNumber } from './TimerNumber';

interface ITimerProps {}

export const Timer: React.FC<ITimerProps> = () => {
  const { times } = useCountdown();

  const { hourLeft, hourRight, minuteLeft, minuteRight, secondLeft, secondRight } = times;

  return (
    <div className="flex items-center">
      <TimerNumber number={hourLeft} />
      <TimerNumber number={hourRight} />
      <span className="text-5xl">:</span>
      <TimerNumber number={minuteLeft} />
      <TimerNumber number={minuteRight} />
      <span className="text-5xl">:</span>
      <TimerNumber number={secondLeft} />
      <TimerNumber number={secondRight} />
    </div>
  );
};
