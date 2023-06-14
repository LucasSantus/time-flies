export type Theme = "dark" | "light";

export interface ThemeSelector {
  theme: Theme;
  icon: JSX.Element;
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
