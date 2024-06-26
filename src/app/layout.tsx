import "@/styles/globals.css";

import { fontSans } from "@/config/fonts";
import { projectConfig } from "@/config/project";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  authors: [{ name: projectConfig.creator, url: projectConfig.links.github }],
  category: projectConfig.category,
  creator: projectConfig.creator,
  title: {
    absolute: projectConfig.name,
    template: "%s | " + projectConfig.name,
  },
  description: projectConfig.description,
  keywords: projectConfig.keywords,
  publisher: projectConfig.creator,
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
          "min-h-screen bg-background font-sans antialiased transition-all delay-300 duration-300 dark:bg-custom-gray-800",
          fontSans.variable,
        )}
      >
        <Providers>
          <SpeedInsights />
          {children}
        </Providers>
      </body>
    </html>
  );
}
