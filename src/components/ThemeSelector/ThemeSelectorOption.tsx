import { ITheme, IThemeSelector } from "@/types/Themes";
import clsx from "clsx";

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
      className={clsx("rounded-lg p-1.5", {
        "bg-slate-800 dark:bg-custom-gray-800": isSelected,
      })}
      onClick={onSelectTheme}
    >
      {icon}
    </button>
  );
};
