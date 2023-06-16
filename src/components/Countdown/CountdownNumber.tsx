import { ISeparatedTimes } from "@/types/SeparatedTimes";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { motion } from "framer-motion";

interface CountdownNumberProps {
  attribute: keyof ISeparatedTimes;
  number: string;
}

export const CountdownNumber: React.FC<CountdownNumberProps> = ({
  attribute,
  number,
}) => (
  <motion.div
    key={attribute + number}
    {...easeInOutAnimationVerticalDislocate({
      delay: 0.3,
      transition: 0.3,
    })}
    className="h-full select-none rounded bg-slate-600 p-2 font-mono text-9xl text-white dark:bg-custom-gray-500 sm:rounded-lg sm:p-0 md:p-3"
  >
    {number}
  </motion.div>
);
