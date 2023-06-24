import { Countdown } from "@/components/Countdown";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function Home() {
  console.log("teste");

  return (
    <div className="flex flex-col md:h-screen">
      <section className="flex sm:justify-end">
        <div className="m-5 flex gap-2">
          <ThemeSelector />
        </div>
      </section>

      <section className="flex h-full w-full items-start justify-center sm:items-center">
        <Countdown />
      </section>
    </div>
  );
}
