import { Variants, motion } from "framer-motion";
import React from "react";

interface ICountdownColonProps {
  variants?: Variants;
}

export const CountdownColon: React.FC<ICountdownColonProps> = ({ variants }) => {
  return (
    <motion.div {...variants}>
      <span className="hidden select-none items-center justify-center pb-10 text-5xl text-custom-green-500 sm:flex sm:text-9xl">
        :
      </span>

      <div className="flex items-center justify-center sm:hidden">
        <div className="my-2 w-14 select-none border border-b-custom-green-300" />
      </div>
    </motion.div>
  );
};
