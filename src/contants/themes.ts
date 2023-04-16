export interface ITheme {
  name: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundThird: string;
  backgroundSuccess: string;
  backgroundError: string;
  backgroundLight: string;
  textPrimary: string;
  textSecondary: string;
  textThird: string;
  textSuccess: string;
  textError: string;
  textLight: string;
}

export const themes: ITheme[] = [
  {
    name: "dark",
    backgroundPrimary: "bg-custom-gray-800",
    backgroundSecondary: "bg-custom-gray-700",
    backgroundThird: "bg-custom-gray-500",
    backgroundSuccess: "",
    backgroundError: "",
    backgroundLight: "",
    textPrimary: "",
    textSecondary: "",
    textThird: "",
    textSuccess: "",
    textError: "",
    textLight: "",
  },
  {
    name: "light",
    backgroundPrimary: "bg-red-800",
    backgroundSecondary: "bg-red-700",
    backgroundThird: "bg-red-600",
    backgroundSuccess: "",
    backgroundError: "",
    backgroundLight: "",
    textPrimary: "",
    textSecondary: "",
    textThird: "",
    textSuccess: "",
    textError: "",
    textLight: "",
  },
];

export const DEFAULT_THEME_NAME = themes[0].name;
export const DEFAULT_THEME = themes[0];
