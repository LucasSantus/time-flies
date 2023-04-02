'use client';

import { Contexts } from '../context';
import './../assets/css/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Contexts>
      <html lang="en">
        <head />
        <body>
          <div className="w-screen h-screen bg-slate-200 p-96">{children}</div>
        </body>
      </html>
    </Contexts>
  );
}
