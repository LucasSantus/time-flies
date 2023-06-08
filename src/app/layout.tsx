import clsx from "clsx";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time Flies",
  description: "A simple countdown timer with a beautiful UI",
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
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
