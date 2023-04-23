import { animateButton } from "@/contants/animate";
import { TRANSITION_DURATION } from "@/contants/globals";
import { useCountdown } from "@/hooks/useCountdown";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { CountdownColon } from "./CountdownColon";
import { CountdownNumber } from "./CountdownNumber";

interface ICountdownStructureProps {}

export const CountdownStructure: React.FC<ICountdownStructureProps> = () => {
  const { times } = useCountdown();
  const values: string[] = Object.values(times);

  return (
    <div className="grid items-center justify-center gap-3 sm:flex">
      <motion.div className="flex gap-2">
        {values.map((value, index) => {
          const isShowCountdownColon = index % 2 !== 0 && index !== values.length - 1;
          const time = index + TRANSITION_DURATION / 2;

          return (
            <Fragment key={`timer-${index}`}>
              <CountdownNumber variants={animateButton({ delay: time + 0.2 })} number={value} />
              {isShowCountdownColon && <CountdownColon variants={animateButton({ delay: time + 0.4 })} />}
            </Fragment>
          );
        })}
      </motion.div>
    </div>
  );
};
