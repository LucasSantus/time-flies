import "@/styles/globals.css";

import { fontSans } from "@/config/fonts";
import { projectConfig } from "@/config/project";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: projectConfig.name,
    template: `%s - ${projectConfig.name}`,
  },
  description: projectConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx(
          "min-h-screen bg-primary font-sans antialiased transition-all delay-150 duration-150 dark:bg-background",
          fontSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
