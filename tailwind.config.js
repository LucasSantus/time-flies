const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        custom: {
          green: {
            800: "#015F43",
            500: "#00875F",
            300: "#00B37E",
          },
          red: {
            800: "#00875F",
            500: "#F03847",
          },
          gray: {
            800: "#121214",
            700: "#202024",
            600: "#323238",
            500: "#29292E",
            400: "#7C7C8A",
            300: "#8D8D99",
            200: "#C4C4CC",
            100: "#E1E1E6",
          },
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
