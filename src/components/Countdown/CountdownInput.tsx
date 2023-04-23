import { Variants, motion } from "framer-motion";
import React from "react";

interface ICountdownInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  reference: string;
  variants: Variants;
}

export const CountdownInput: React.FC<ICountdownInputProps> = ({ label, reference, variants, ...props }) => {
  return (
    <motion.div {...variants}>
      <div>
        <label htmlFor={reference}>{label}</label>
        <input type="number" className="h-12 w-full rounded border p-2 text-lg font-medium" {...props} />
      </div>
    </motion.div>
  );
};
