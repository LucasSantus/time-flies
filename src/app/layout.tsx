import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time Flies",
  description: "Social data personal of  dev tree",
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
          "bg-custom-reseda-900 h-screen bg-slate-800 dark:bg-custom-gray-800",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
