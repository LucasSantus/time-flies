import { themes } from "@/contants/themes";
import { useSelectedMultiTheme } from "@/hooks/useMultiTheme";
import { useTranslations } from "@/hooks/useTranslations";
import { getThemeNameFromCookie } from "@/utils/themes";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface MultiThemeSelectorProps {}

export const MultiThemeSelector: React.FC<MultiThemeSelectorProps> = () => {
  const [themeName, setThemeName] = useState("");
  const { theme, setSelectedTheme } = useSelectedMultiTheme();

  const { selectThemes } = useTranslations("general");

  useEffect(() => {
    setThemeName(getThemeNameFromCookie());
  }, [theme]);

  return (
    <div className="flex flex-col gap-3">
      <div>{selectThemes}</div>
      <div className="grid grid-cols-3 gap-3">
        {themes.map(({ name, backgroundPrimary, textPrimary }) => {
          const handleClick = () => {
            setSelectedTheme(name);
          };

          return (
            <div
              key={name}
              className={classNames(
                "cursor-pointer rounded-lg border p-2 transition-shadow delay-300 hover:shadow-lg",
                {
                  "shadow-lg": name === themeName,
                },
              )}
              onClick={handleClick}
              style={{ backgroundColor: backgroundPrimary }}
            >
              <p className={classNames(textPrimary, "text-xl font-bold")}>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
