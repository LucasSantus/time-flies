import classNames from "classnames";
import React from "react";

interface IDropdownItemProps {
  title: string;
  onClick: () => void;
}

export const DropdownItem: React.FC<IDropdownItemProps> = ({
  title,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-slate-200"
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
