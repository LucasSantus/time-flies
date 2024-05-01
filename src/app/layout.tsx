import "@/styles/globals.css";

import { fontSans } from "@/config/fonts";
import { projectConfig } from "@/config/project";
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: projectConfig.name,
    template: `%s - ${projectConfig.name}`,
  },
  description: projectConfig.description,
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
        <Providers>
        <SpeedInsights />{children}</Providers>
      </body>
    </html>
  );
}
