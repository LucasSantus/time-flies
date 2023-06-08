import { ITheme, IThemeSelector } from "@/types/Themes";

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
  if (isSelected)
    return (
      <button
        aria-label={theme}
        className="rounded-lg bg-slate-700 p-1.5 dark:bg-custom-gray-600"
        onClick={onSelectTheme}
      >
        {icon}
      </button>
    );
};
