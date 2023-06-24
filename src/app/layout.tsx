import { ClosePageAlert } from "@/components/ClosePageAlert";
import { fontSans } from "@/config/fonts";
import { projectConfig } from "@/config/project";
import { Providers } from "@/contexts/Providers";
import clsx from "clsx";
import { Metadata } from "next";
import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";
import { NoScript } from "./no-script";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Time Flies",
//   description: "A simple countdown timer with a beautiful UI",
// };

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "h-screen bg-slate-800 dark:bg-custom-gray-800",
          fontSans.variable
        )}
      >
        <Providers>
          <NoScript />
          <ClosePageAlert />
          {children}
        </Providers>
      </body>
    </html>
  );
}
