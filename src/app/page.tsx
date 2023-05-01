import { Countdown } from "@/components/Countdown";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <div className="m-5 flex gap-2">
          <ThemeSelector />
        </div>
      </div>

      {/* TODO: Centralizar corretamente o componente abaixo */}
      <div className="flex items-center justify-center">
        <Countdown />
      </div>
    </div>
  );
}
