import { ITheme, IThemeSelector } from "@/types/Themes";
import classNames from "classnames";

interface IThemeSelectorOptionProps {
  theme: ITheme;
  icon: IThemeSelector["icon"];
  isSelected: boolean;
  onSelectTheme: () => void;
}

export const ThemeSelectorOption: React.FC<IThemeSelectorOptionProps> = ({
  theme,
  icon,
  isSelected,
  onSelectTheme,
}) => {
  return (
    <button
      aria-label={theme}
      className={classNames("rounded-lg p-1.5", {
        "bg-slate-800 dark:bg-custom-gray-800": isSelected,
      })}
      onClick={onSelectTheme}
    >
      {icon}
    </button>
  );
};
