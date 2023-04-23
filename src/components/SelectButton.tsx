import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ISelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isSelected: boolean;
}

export const SelectButton: React.FC<ISelectButtonProps> = ({ title, isSelected, ...props }) => {
  return (
    <button
      className={classNames("w-full rounded border border-custom-gray-800", { "shadow-lg": isSelected })}
      {...props}
    >
      {title}
    </button>
  );
};
