import { SIZE_ICON } from "@/contants/globals";
import { IThemesModeTypes } from "@/types/Theme";
import classNames from "classnames";
import { Moon, Sun } from "phosphor-react";

const CLASSNAMES =
  "flex h-9 w-9 items-center justify-center rounded-md bg-slate-500 p-1 text-white shadow-md hover:opacity-75";

export const THEME_MODES: IThemesModeTypes[] = [
  {
    theme: "light",
    icon: <Sun size={SIZE_ICON} className={classNames(CLASSNAMES, "bg-slate-700")} />,
  },
  {
    theme: "dark",
    icon: <Moon size={SIZE_ICON} className={classNames(CLASSNAMES, "bg-slate-900")} />,
  },
];
