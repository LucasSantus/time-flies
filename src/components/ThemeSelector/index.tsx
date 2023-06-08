"use client";

import { THEMES } from "@/data/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeSelectorOption } from "./ThemeSelectorOption";

export const ThemeSelector: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme: seletedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 rounded-lg bg-slate-700 p-1 dark:bg-custom-gray-600">
        {THEMES.map(({ theme, icon }) => (
          <ThemeSelectorOption
            key={theme}
            theme={theme}
            icon={icon}
            isSelected={theme === seletedTheme}
            onSelectTheme={() => setTheme(theme)}
          />
        ))}
      </div>
    </div>
  );
};
