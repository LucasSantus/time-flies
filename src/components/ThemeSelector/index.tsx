"use client";

import { THEMES } from "@/data/themes";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { motion } from "framer-motion";
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
    <div className="flex">
      {THEMES.map(({ theme, icon }) => (
        <motion.div
          key={theme}
          {...bounceAnimationHorizontalDislocate({
            delay: 0.2,
          })}
        >
          <ThemeSelectorOption
            theme={theme}
            icon={icon}
            isSelected={theme !== seletedTheme}
            onSelectTheme={() => setTheme(theme)}
          />
        </motion.div>
      ))}
    </div>
  );
};
