import { THEME_MODES } from "@/contants/themes";
import { useThemeMode } from "@/hooks/Themes/useThemeMode";
import { ITheme } from "@/types/Themes";
import { SelectedTheme } from "./SelectedTheme";

export const SelectorTheme: React.FC = () => {
  const { getThemeMode, setThemeMode } = useThemeMode();

  const handleClick = async (theme: ITheme["title"]) => {
    setThemeMode(theme);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 rounded-lg bg-slate-700 p-1 dark:bg-custom-gray-600">
        {THEME_MODES.map(({ title, icon }) => (
          <SelectedTheme
            key={title}
            icon={icon}
            isSelected={getThemeMode() === title}
            onSelectTheme={() => handleClick(title)}
          />
        ))}
      </div>
    </div>
  );
};
