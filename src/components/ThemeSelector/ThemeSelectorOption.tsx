import { Theme, ThemeSelector } from "@/types/Themes";

interface ThemeSelectorOptionProps {
  theme: Theme;
  icon: ThemeSelector["icon"];
  isSelected: boolean;
  onSelectTheme: () => void;
}

export const ThemeSelectorOption: React.FC<ThemeSelectorOptionProps> = ({
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
