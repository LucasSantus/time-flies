import { Theme } from "./Theme";

export interface ThemeSelectorItem {
  theme: Theme;
  icon: JSX.Element;
}

export type ThemeSelectorData = ThemeSelectorItem[];
