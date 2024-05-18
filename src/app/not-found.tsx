import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BugIcon, LayoutGridIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-1 flex-col items-center justify-center bg-foreground text-center text-background">
      <div className="space-y-3">
        <BugIcon className="inline-block size-16" />
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-7xl">
          404 Not Found
        </h1>
        <h3 className="text-lg font-medium tracking-tighter md:text-xl lg:text-2xl">
          Uh oh! Está página não existe!
        </h3>
        <p className="mx-auto max-w-lg px-2 text-muted-foreground">
          Essa rota não existe. O melhor a fazer é dar meia volta e regressar a
          um local seguro.
        </p>
        <Link
          className={cn(
            buttonVariants({
              variant: "gray",
              size: "default",
              className: "items-center gap-1 !text-primary-foreground",
            }),
          )}
          href="/"
        >
          <LayoutGridIcon className="size-4" />
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
