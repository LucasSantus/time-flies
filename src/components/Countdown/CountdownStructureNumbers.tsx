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
      <div className="grid h-full gap-3 sm:flex">
        <div className="flex gap-2">
          <CountdownNumber attribute="hourLeft" number={times["hourLeft"]} />
          <CountdownNumber attribute="hourRight" number={times["hourRight"]} />
        </div>

        <div className="flex h-full flex-col items-center">
          <CountdownColon
            animation={easeInOutAnimationVerticalDislocate({
              delay: 0.2,
            })}
          />
        </div>

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

        <div className="flex h-full flex-col items-center">
          <CountdownColon
            animation={easeInOutAnimationVerticalDislocate({
              delay: 0.2,
            })}
          />
        </div>

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
