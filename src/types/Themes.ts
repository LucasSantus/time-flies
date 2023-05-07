export type ITheme = "dark" | "light";

export interface IThemeSelector {
  theme: ITheme;
  icon: JSX.Element;
}

export interface IThemeContextProps {
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}
