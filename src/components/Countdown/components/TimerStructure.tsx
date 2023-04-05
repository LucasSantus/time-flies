import { animateButton } from "@/contants/animate";
import { useCountdown } from "@/hooks/useCountdown";
import { Fragment } from "react";
import { TimerColon } from "./TimerColon";
import { TimerNumber } from "./TimerNumber";

interface ITimerStructureProps {}

export const TimerStructure: React.FC<ITimerStructureProps> = () => {
  const { times } = useCountdown();

  const animationValues = Object.values(times);

  return (
    <div className="grid items-center justify-center gap-3 sm:flex">
      {animationValues.map((value, index) => {
        const isShowTimerColon = index % 2 !== 0 && index !== animationValues.length - 1;

        return (
          <Fragment key={`timer-${value}-${index}`}>
            <TimerNumber number={value} animateVariants={animateButton({ delay: 0, transition: 0.4 })} />
            {isShowTimerColon && <TimerColon animateVariants={animateButton({ delay: 0 })} />}
          </Fragment>
        );
      })}
    </div>
  );
};
