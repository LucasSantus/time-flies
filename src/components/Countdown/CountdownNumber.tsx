"use client";

import { Variants, motion } from "framer-motion";

interface ICountdownNumberProps {
  number: string;
  animateVariants?: Variants;
}

export const CountdownNumber: React.FC<ICountdownNumberProps> = ({ number, animateVariants }) => {
  return (
    <motion.div
      variants={animateVariants}
      className="h-full select-none rounded bg-[#29292E] p-2 font-mono text-9xl text-white sm:rounded-lg sm:p-0 md:p-3"
    >
      {number}
    </motion.div>
  );
};
