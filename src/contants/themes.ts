export interface IThemeCustomTest {
  name: string;
  body: string;
  primary: string;
  secondary: string;
  third: string;
  success: string;
  danger: string;
  info: string;
  light: string;
  dark: string;
}

export interface INameTheme {
  name: "dark" | "light";
}

export interface ITheme {
  name: INameTheme["name"];
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

// export const themes: IThemeCustomTest[] = [
//   {
//     name: "dark",
//     body: "custom-gray-800",
//     primary: "custom-gray-700",
//     secondary: "custom-gray-600",
//     third: "",
//     success: "",
//     danger: "",
//     info: "",
//     light: "",
//     dark: "",
//   },
//   {
//     name: "light",
//     body: "",
//     primary: "",
//     secondary: "",
//     third: "",
//     success: "",
//     danger: "",
//     info: "",
//     light: "",
//     dark: "",
//   },
// ];

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
    backgroundPrimary: "bg-slate-800",
    backgroundSecondary: "bg-slate-700",
    backgroundThird: "bg-slate-600",
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
