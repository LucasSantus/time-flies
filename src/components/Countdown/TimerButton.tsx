import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  className: string;
  variantsAnimation: Variants;
  onClick: () => void;
  title?: string;
  icon?: React.ReactNode;
  type?: "button" | "reset" | "submit" | undefined;
}

export const TimerButton: React.FC<IButtonProps> = ({
  title,
  icon,
  className,
  variantsAnimation,
  onClick,
  type = "button",
}) => {
  return (
    <motion.button
      {...variantsAnimation}
      type={type}
      className={classNames(
        "flex h-12 w-full items-center justify-center gap-1 rounded-md py-3 text-base font-semibold text-white shadow-sm",
        className,
      )}
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </motion.button>
  );
};
