/** @type {import("./src/types/Locale").Locale} */
const defaultLocale = "pt-BR";

/** @type {import("./src/types/Locale").Locale[]} */
const locales = ["pt-BR", "en-US"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale,
    locales,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
