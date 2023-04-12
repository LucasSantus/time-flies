import { animateButton } from "@/contants/animate";
import { THEME_MODES } from "@/contants/themes";
import { useThemeMode } from "@/hooks/Themes/useThemeMode";
import { IThemeTypes } from "@/types/Theme";
import { Button } from "./Button";

export const ThemesMode: React.FC = () => {
  const { getThemeMode, setThemeMode } = useThemeMode();

  const handleClick = async (theme: IThemeTypes["theme"]) => {
    setThemeMode(theme);
  };

  return (
    <>
      {THEME_MODES.filter(({ theme }) => theme !== getThemeMode()).map(({ icon, theme }, index) => (
        <Button
          className=""
          icon={icon}
          variants={animateButton({ delay: 0.7 })}
          key={index}
          onClick={() => handleClick(theme)}
        />
      ))}
    </>
  );
};
