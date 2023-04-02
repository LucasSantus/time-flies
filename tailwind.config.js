const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        custom: {
          green: {
            800: '#015F43',
            500: '#00875F',
            300: '#00B37E',
          },
          red: {
            800: '#00875F',
            500: '#F03847',
          },
          gray: {
            900: '#121214',
            800: '#202024',
            700: '#323238',
            600: '#7C7C8A',
            500: '#8D8D99',
            400: '#C4C4CC',
            300: '#E1E1E6',
          },
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
