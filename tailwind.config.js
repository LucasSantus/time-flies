const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
