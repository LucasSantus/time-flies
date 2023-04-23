import { THEME_MODES } from "@/contants/themes";
import { useThemeMode } from "@/hooks/Themes/useThemeMode";
import { IThemeTypes } from "@/types/Themes";
import { SelectButton } from "./SelectButton";

export const ThemesMode: React.FC = () => {
  const { getThemeMode, setThemeMode } = useThemeMode();

  const handleClick = async (theme: IThemeTypes["theme"]) => {
    setThemeMode(theme);
  };

  return (
    <div className="flex flex-col gap-3">
      {THEME_MODES.map(({ theme }) => (
        <SelectButton
          isSelected={getThemeMode() === theme}
          key={theme}
          title={theme}
          onClick={() => handleClick(theme)}
        />
        // <Button className="" variants={animateButton({ delay: 0.7 })} key={theme} onClick={() => handleClick(theme)} />
      ))}
    </div>
  );
};
