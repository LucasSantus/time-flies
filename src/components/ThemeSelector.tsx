"use client";

import { ThemeSelectorData } from "@/types/ThemeSelectorItem";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSelectorProps {}

export const THEMES: ThemeSelectorData = [
  {
    theme: "light",
    icon: <Sun size={23} className="text-white" />,
  },
  {
    theme: "dark",
    icon: <Moon size={23} className="text-white" />,
  },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = () => {
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
          {theme !== seletedTheme && (
            <button
              aria-label={theme}
              className="rounded-lg bg-slate-700 p-1.5 dark:bg-custom-gray-600"
              onClick={() => setTheme(theme)}
            >
              {icon}
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
};
