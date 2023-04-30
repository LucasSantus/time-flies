import { ISelectorTheme } from "@/types/Themes";
import { Moon, Sun } from "phosphor-react";

export const THEME_MODES: ISelectorTheme[] = [
  {
    title: "light",
    icon: <Sun size={23} className="text-slate-400 dark:text-custom-gray-400" />,
  },
  {
    title: "dark",
    icon: <Moon size={23} className="text-slate-400 dark:text-custom-gray-400" />,
  },
];
