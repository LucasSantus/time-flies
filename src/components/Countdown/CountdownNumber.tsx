import { ISeparatedTimes } from "@/types/SeparatedTimes";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { motion } from "framer-motion";

interface ICountdownNumberProps {
  attribute: keyof ISeparatedTimes;
  number: string;
}

export const CountdownNumber: React.FC<ICountdownNumberProps> = ({
  attribute,
  number,
}) => (
  <motion.div
    key={attribute + number}
    {...easeInOutAnimationVerticalDislocate({
      delay: 0.2,
    })}
    className="h-full select-none rounded bg-slate-600 p-2 font-mono text-9xl text-white dark:bg-custom-gray-500 sm:rounded-lg sm:p-0 md:p-3"
  >
    {number}
  </motion.div>
);
