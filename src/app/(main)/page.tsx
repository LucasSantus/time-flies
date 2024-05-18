import { Countdown } from "@/app/(main)/_components/countdown";
import { ThemeToggler } from "@/components/theme-toggler";

export default function Main() {
  return (
    <div className="flex flex-col md:h-screen">
      <div className="flex sm:justify-end">
        <div className="m-5 flex gap-2">
          <ThemeToggler />
        </div>
      </div>

      <Countdown />
    </div>
  );
}
