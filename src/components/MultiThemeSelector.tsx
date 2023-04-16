import { themes } from "@/contants/themes";
import { useSelectedMultiTheme } from "@/hooks/useMultiTheme";
import { getThemeNameFromCookie } from "@/utils/themes";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface MultiThemeSelectorProps {}

export const MultiThemeSelector: React.FC<MultiThemeSelectorProps> = () => {
  const [themeName, setThemeName] = useState("");
  const { theme, setSelectedTheme } = useSelectedMultiTheme();

  useEffect(() => {
    setThemeName(getThemeNameFromCookie());
  }, [theme]);

  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center">
      <div className="flex flex-wrap">
        {themes.map((theme) => {
          const { name, backgroundPrimary, textPrimary } = theme;

          const handleClick = () => {
            setSelectedTheme(name);
          };

          return (
            <div
              key={name}
              className={classNames("w-1/2 cursor-pointer rounded-lg p-4 hover:shadow-lg", {
                "shadow-lg": name === themeName,
              })}
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
