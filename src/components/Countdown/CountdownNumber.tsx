import { ISeparatedTimes } from "@/types/SeparatedTimes";
import { Variants, motion } from "framer-motion";

interface ICountdownNumberProps {
  attribute: keyof ISeparatedTimes;
  number: string;
  variants: Variants;
}

export const CountdownNumber: React.FC<ICountdownNumberProps> = ({ attribute, number, variants }) => (
  <motion.div
    key={attribute + number}
    {...variants}
    className="h-full select-none rounded bg-slate-600 p-2 font-mono text-9xl text-white dark:bg-custom-gray-500 sm:rounded-lg sm:p-0 md:p-3"
  >
    {number}
  </motion.div>
);
