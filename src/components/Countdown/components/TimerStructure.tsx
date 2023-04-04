import { BUTTON_ANIMATE } from "@/contants/ButtonAnimate";
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
        <TimerNumber number={hourLeft} animateVariants={BUTTON_ANIMATE({ delay: 1 })} />
        <TimerNumber number={hourRight} animateVariants={BUTTON_ANIMATE({ delay: 2 })} />
      </div>
      <TimerColon animateVariants={BUTTON_ANIMATE({ delay: 3 })} />
      <div className="flex gap-2">
        <TimerNumber number={minuteLeft} animateVariants={BUTTON_ANIMATE({ delay: 4 })} />
        <TimerNumber number={minuteRight} animateVariants={BUTTON_ANIMATE({ delay: 5 })} />
      </div>
      <TimerColon animateVariants={BUTTON_ANIMATE({ delay: 6 })} />
      <div className="flex gap-2">
        <TimerNumber number={secondLeft} animateVariants={BUTTON_ANIMATE({ delay: 7 })} />
        <TimerNumber number={secondRight} animateVariants={BUTTON_ANIMATE({ delay: 8 })} />
      </div>
    </div>
  );
};
