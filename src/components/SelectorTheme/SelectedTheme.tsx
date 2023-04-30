import { ISelectorTheme } from "@/types/Themes";
import classNames from "classnames";

interface ISelectedThemeProps {
  icon: ISelectorTheme["icon"];
  isSelected: boolean;
  onSelectTheme: () => void;
}

export const SelectedTheme: React.FC<ISelectedThemeProps> = ({ icon, isSelected, onSelectTheme }) => {
  return (
    <button
      className={classNames("rounded-lg p-1.5", {
        "bg-slate-800 dark:bg-custom-gray-800": isSelected,
      })}
      onClick={onSelectTheme}
    >
      {icon}
    </button>
  );
};
