import { useThemeMode } from "@/hooks/Themes/useThemeMode";
import { IThemeTypes } from "@/types/Theme";
import { THEME_MODES } from "./constants";

export const ThemesMode: React.FC = () => {
  const { getThemeMode, setThemeMode } = useThemeMode();

  const handleClick = async (theme: IThemeTypes["theme"]) => {
    setThemeMode(theme);
  };

  return (
    <>
      {THEME_MODES.filter(({ theme }) => theme !== getThemeMode()).map(({ icon, theme }, index) => (
        <button key={index} onClick={() => handleClick(theme)}>
          {icon}
        </button>
      ))}
    </>
  );
};
