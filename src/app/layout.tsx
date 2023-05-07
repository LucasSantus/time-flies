import { PropsWithChildren } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import "./../assets/css/globals.css";

export const metadata = {
  title: "Time Flies",
  description: "teste de corno",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
      <body className="h-screen w-screen bg-slate-800 dark:bg-custom-gray-800">
        <main>{children}</main>
      </body>
    </html>
  );
}
