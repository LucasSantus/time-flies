import { useCountdown } from "@/hooks/useCountdown";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { motion } from "framer-motion";
import { CountdownColon } from "./CountdownColon";
import { CountdownNumber } from "./CountdownNumber";

interface CountdownStructureNumberProps {}

export const CountdownStructureNumbers: React.FC<
  CountdownStructureNumberProps
> = () => {
  const { times } = useCountdown();

  return (
    <motion.section {...easeInOutAnimationVerticalDislocate({ delay: 0.7 })}>
      <div className="grid items-center gap-3 sm:flex sm:justify-center">
        <div className="flex gap-2">
          <CountdownNumber attribute="hourLeft" number={times["hourLeft"]} />
          <CountdownNumber attribute="hourRight" number={times["hourRight"]} />
        </div>

        <CountdownColon
          framerMotionAnimation={easeInOutAnimationVerticalDislocate({
            delay: 0.2,
          })}
        />

        <div className="flex gap-2">
          <CountdownNumber
            attribute="minuteLeft"
            number={times["minuteLeft"]}
          />
          <CountdownNumber
            attribute="minuteRight"
            number={times["minuteRight"]}
          />
        </div>

        <CountdownColon
          framerMotionAnimation={easeInOutAnimationVerticalDislocate({
            delay: 0.2,
          })}
        />

        <div className="flex gap-2">
          <CountdownNumber
            attribute="secondLeft"
            number={times["secondLeft"]}
          />
          <CountdownNumber
            attribute="secondRight"
            number={times["secondRight"]}
          />
        </div>
      </div>
    </motion.section>
  );
};
