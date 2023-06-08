/* eslint-disable react/display-name */
import { Variants, motion } from "framer-motion";
import React from "react";
import { useFormContext } from "react-hook-form";

interface ICountdownInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  attribute: string;
  variants: Variants;
}

export const CountdownInput: React.FC<ICountdownInputProps> = ({ label, attribute, variants, ...props }) => {
  const { register } = useFormContext();

  return (
    <motion.div {...variants}>
      <label htmlFor={attribute} className="text-base font-medium text-gray-900 dark:text-custom-gray-100">
        {label}
      </label>
      <input
        id={attribute}
        type="number"
        className="h-12 w-full rounded border border-slate-200 bg-slate-50 p-2 text-lg font-medium shadow-md dark:border-none dark:bg-custom-gray-500 dark:text-custom-gray-100"
        {...register(attribute)}
        {...props}
      />
    </motion.div>
  );
};
