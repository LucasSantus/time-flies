"use client";

import { useMultiTheme } from "@/hooks/useMultiTheme";
import classNames from "classnames";
import { Variants, motion } from "framer-motion";

interface ICountdownNumberProps {
  number: string;
  variants?: Variants;
}

export const CountdownNumber: React.FC<ICountdownNumberProps> = ({ number, variants }) => {
  const { backgroundThird } = useMultiTheme();

  return (
    <motion.div
      {...variants}
      className={classNames(
        "h-full select-none rounded p-2 font-mono text-9xl text-white sm:rounded-lg sm:p-0 md:p-3",
        backgroundThird,
      )}
    >
      {number}
    </motion.div>
  );
};
