import { Variants, motion } from "framer-motion";

interface ITimerNumberProps {
  number: string;
  animateVariants?: Variants;
}

export const TimerNumber: React.FC<ITimerNumberProps> = ({ number, animateVariants }) => {
  return (
    <motion.div
      {...animateVariants}
      className="h-full select-none rounded bg-[#29292E] p-2 font-mono text-9xl text-white sm:rounded-lg sm:p-0 md:p-3"
    >
      {number}
    </motion.div>
  );
};
