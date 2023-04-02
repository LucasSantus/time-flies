import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  title: string;
  icon?: React.ReactNode;
  type?: "interrupt" | "start";
  onClick: () => void;
}

export const TimerButton: React.FC<IButtonProps> = ({ title, icon, type = "start", onClick }) => {
  return (
    <button
      type="button"
      className={classNames(
        "flex items-center justify-center gap-1 rounded-md py-3 text-base font-semibold text-white shadow-sm",

        type === "interrupt"
          ? "border-custom-red-500/30 bg-custom-red-500 hover:bg-custom-red-500/90"
          : "border-custom-green-500/30 bg-custom-green-500 hover:bg-custom-green-500/90",
      )}
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </button>
  );
};
