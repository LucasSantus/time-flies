import { Variants, motion } from "framer-motion";
import React from "react";

interface CountdownColonProps {
  animation?: Variants;
}

export const CountdownColon: React.FC<CountdownColonProps> = ({
  animation,
}) => (
  <motion.div {...animation}>
    <div className="hidden h-full select-none items-center sm:flex">
      <div className="text-custom-green-500 sm:text-9xl">:</div>
    </div>

    <div className="flex sm:hidden">
      <div className="my-2 w-14 select-none border border-b-custom-green-300" />
    </div>
  </motion.div>
);
