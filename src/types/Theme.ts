export interface IThemeTypes {
  theme: "dark" | "light";
}

export interface IThemesModeTypes extends IThemeTypes {
  icon: JSX.Element;
}

export interface IThemeContextProps {
  theme: IThemeTypes["theme"];
  setTheme: React.Dispatch<React.SetStateAction<IThemeTypes["theme"]>>;
}
