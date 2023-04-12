import { SIZE_ICON } from "@/contants/globals";
import { IThemesModeTypes } from "@/types/Theme";
import { Moon, Sun } from "phosphor-react";

export const THEME_MODES: IThemesModeTypes[] = [
  {
    theme: "light",
    icon: (
      <Sun
        size={SIZE_ICON}
        className="bg-custom-reseda-500 flex h-9 w-9 items-center justify-center rounded-md p-1 text-white shadow-md hover:opacity-75"
      />
    ),
  },
  {
    theme: "dark",
    icon: (
      <Moon
        size={SIZE_ICON}
        className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-700 p-1 text-white shadow-md hover:opacity-75"
      />
    ),
  },
];
