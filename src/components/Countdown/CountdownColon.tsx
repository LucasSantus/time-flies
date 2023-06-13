import { Variants, motion } from "framer-motion";
import React from "react";

interface ICountdownColonProps {
  framerMotionAnimation?: Variants;
}

export const CountdownColon: React.FC<ICountdownColonProps> = ({
  framerMotionAnimation,
}) => (
  <motion.div {...framerMotionAnimation}>
    <span className="hidden select-none text-custom-green-500 sm:flex sm:text-9xl">
      :
    </span>

    <div className="flex sm:hidden">
      <div className="my-2 w-14 select-none border border-b-custom-green-300" />
    </div>
  </motion.div>
);
