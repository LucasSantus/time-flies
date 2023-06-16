"use client";

import Link from "next/link";

export const metadata = {
  title: "Time Flies",
  description: "A simple countdown timer with a beautiful UI",
};

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-2 rounded-lg">
        <span className="text-9xl font-bold text-slate-200">404</span>
        <span className="text-xl font-medium text-slate-200">
          A página solicitada não foi encontrada!
        </span>
        <Link
          href="/"
          className="mt-4 text-blue-500 underline hover:text-blue-400"
        >
          Ir para tela principal
        </Link>
      </section>
    </div>
  );
}
