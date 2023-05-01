import { Variants, motion } from "framer-motion";
import React from "react";

interface ICountdownInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  attribute: string;
  variants: Variants;
}

export const CountdownInput: React.FC<ICountdownInputProps> = ({ label, attribute, variants, ...props }) => {
  return (
    <motion.div {...variants}>
      <label htmlFor={attribute} className="text-base font-medium text-gray-900 dark:text-custom-gray-100">
        {label}
      </label>
      <input
        type="number"
        className="h-12 w-full rounded border border-slate-200 bg-slate-50 p-2 text-lg font-medium shadow-md dark:border-none dark:bg-custom-gray-500 dark:text-custom-gray-100"
        {...props}
      />
    </motion.div>
  );
};
