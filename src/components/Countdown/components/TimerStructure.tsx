import { useCountdown } from "@/hooks/useCountdown";
import { TimerColon } from "./TimerColon";
import { TimerNumber } from "./TimerNumber";

interface ITimerStructureProps {}

export const TimerStructure: React.FC<ITimerStructureProps> = () => {
  const { times } = useCountdown();

  const { hourLeft, hourRight, minuteLeft, minuteRight, secondLeft, secondRight } = times;

  return (
    <div className="grid items-center justify-center gap-3 sm:flex">
      <div className="flex gap-2">
        <TimerNumber number={hourLeft} />
        <TimerNumber number={hourRight} />
      </div>
      <TimerColon />
      <div className="flex gap-2">
        <TimerNumber number={minuteLeft} />
        <TimerNumber number={minuteRight} />
      </div>
      <TimerColon />
      <div className="flex gap-2">
        <TimerNumber number={secondLeft} />
        <TimerNumber number={secondRight} />
      </div>
    </div>
  );
};
