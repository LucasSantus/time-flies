import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import React from "react";

export interface IButtonProps {
  className: string;
  variants: Variants;
  onClick?: () => void;
  title?: string;
  icon?: React.ReactNode;
  type?: "button" | "reset" | "submit" | undefined;
}

export const Button: React.FC<IButtonProps> = ({ title, icon, className, variants, onClick, type = "button" }) => {
  return (
    <motion.button
      {...variants}
      type={type}
      className={classNames(
        "flex h-12 w-full items-center justify-center gap-1 rounded-md py-3 text-base font-semibold text-white shadow-md",
        className,
      )}
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </motion.button>
  );
};
