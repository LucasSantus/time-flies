import { ThemeSelectorData } from "@/types/ThemeSelectorItem";
import { Moon, Sun } from "lucide-react";

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
