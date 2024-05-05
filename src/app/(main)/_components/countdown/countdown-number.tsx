import { SeparatedTimesData } from "@/types/separated-times";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { motion } from "framer-motion";

interface CountdownNumberProps {
  name: keyof SeparatedTimesData;
  value: number;
}

export function CountdownNumber({
  name,
  value,
}: CountdownNumberProps): JSX.Element {
  return (
    <motion.div
      key={name + value}
      {...easeInOutAnimationVerticalDislocate({
        delay: 0.3,
        transition: 0.3,
      })}
      className="h-full select-none rounded bg-custom-gray-500 p-2 font-mono text-9xl text-white sm:rounded-lg sm:p-0 md:p-4"
    >
      {value}
    </motion.div>
  );
}
