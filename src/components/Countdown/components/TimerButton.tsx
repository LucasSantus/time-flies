import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  title: string;
  icon?: React.ReactNode;
  type?: "interrupt" | "start";
  variantsAnimation: Variants;
  onClick: () => void;
}

export const TimerButton: React.FC<IButtonProps> = ({ title, icon, type = "start", variantsAnimation, onClick }) => {
  const TYPE_BUTTON =
    type === "interrupt"
      ? "border-custom-red-500/30 bg-custom-red-500 hover:bg-custom-red-500/60"
      : "border-custom-green-500/30 bg-custom-green-500 hover:bg-custom-green-500/60";

  return (
    <motion.button
      {...variantsAnimation}
      type="button"
      className={classNames(
        "flex items-center justify-center gap-1 rounded-md py-3 text-base font-semibold text-white shadow-sm",
        TYPE_BUTTON,
      )}
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </motion.button>
  );
};
