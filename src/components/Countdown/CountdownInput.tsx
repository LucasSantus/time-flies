/* eslint-disable react/display-name */
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { motion } from "framer-motion";
import React from "react";
import { useFormContext } from "react-hook-form";

interface ICountdownInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  attribute: string;
}

export const CountdownInput: React.FC<ICountdownInputProps> = ({
  attribute,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <motion.div {...easeInOutAnimationVerticalDislocate({ delay: 0.7 })}>
      <input
        id={attribute}
        type="number"
        className="h-12 w-full rounded border border-slate-200 bg-slate-50 p-2 text-center text-lg font-medium shadow-sm dark:border-none dark:bg-custom-gray-500 dark:text-custom-gray-100"
        {...register(attribute)}
        {...props}
      />
    </motion.div>
  );
};
