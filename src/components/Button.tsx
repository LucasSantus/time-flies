import { BUTTON_STYLES } from "@/constants/button";
import clsx from "clsx";
import { motion, MotionProps, Variants } from "framer-motion";
import React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon: React.ReactNode;
  variants: Variants;
  color: "success" | "error" | "warning" | "info" | "gray" | "dark";
}

export const Button: React.FC<IButtonProps & MotionProps> = ({
  title,
  icon,
  variants,
  color,
  ...rest
}) => (
  <motion.button
    {...rest}
    {...variants}
    aria-label={title}
    className={clsx(
      "flex h-12 w-full items-center justify-center gap-1 rounded-md py-3 text-base font-semibold text-white shadow-md",
      BUTTON_STYLES[color]
    )}
  >
    {icon}
    {title && title}
  </motion.button>
);
