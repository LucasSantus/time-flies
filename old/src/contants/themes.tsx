import { IThemeSelector } from "@/types/Themes";
import { Moon, Sun } from "phosphor-react";

export const THEMES: IThemeSelector[] = [
  {
    theme: "light",
    icon: <Sun size={23} className="text-slate-400 dark:text-custom-gray-400" />,
  },
  {
    theme: "dark",
    icon: <Moon size={23} className="text-slate-400 dark:text-custom-gray-400" />,
  },
];
