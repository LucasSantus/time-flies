"use client";

import { Framing } from "@/components/framer-motion/framing";
import { useCountdown } from "@/hooks/use-countdown";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { CountdownColon } from "./countdown-colon";
import { CountdownNumber } from "./countdown-number";

export function CountdownStructureNumbers(): JSX.Element {
  const { times } = useCountdown();

  return (
    <Framing
      as="section"
      {...easeInOutAnimationVerticalDislocate({ delay: 0.7 })}
    >
      <div className="grid h-full gap-3 sm:flex">
        <div className="flex gap-2">
          <CountdownNumber name="hourLeft" value={times["hourLeft"]} />
          <CountdownNumber name="hourRight" value={times["hourRight"]} />
        </div>

        <div className="flex h-full flex-col items-center">
          <CountdownColon
            animation={easeInOutAnimationVerticalDislocate({
              delay: 0.2,
            })}
          />
        </div>

        <div className="flex gap-2">
          <CountdownNumber name="minuteLeft" value={times["minuteLeft"]} />
          <CountdownNumber name="minuteRight" value={times["minuteRight"]} />
        </div>

        <div className="flex h-full flex-col items-center">
          <CountdownColon
            animation={easeInOutAnimationVerticalDislocate({
              delay: 0.2,
            })}
          />
        </div>

        <div className="flex gap-2">
          <CountdownNumber name="secondLeft" value={times["secondLeft"]} />
          <CountdownNumber name="secondRight" value={times["secondRight"]} />
        </div>
      </div>
    </Framing>
  );
}
