export interface ITheme {
  title: "dark" | "light";
}

export interface IThemeSelector extends ITheme {
  icon: JSX.Element;
}

export interface IThemeContextProps extends ITheme {
  setTheme: React.Dispatch<React.SetStateAction<ITheme["title"]>>;
}
