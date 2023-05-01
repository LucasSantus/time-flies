import { IThemeSelector } from "@/types/Themes";
import classNames from "classnames";

interface IThemeSelectorOptionProps {
  icon: IThemeSelector["icon"];
  isSelected: boolean;
  onSelectTheme: () => void;
}

export const ThemeSelectorOption: React.FC<IThemeSelectorOptionProps> = ({ icon, isSelected, onSelectTheme }) => {
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
