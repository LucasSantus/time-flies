import { Countdown } from "@/components/Countdown";
import { Contexts } from "@/context";

export default function Home() {
  return (
    <Contexts>
      <div className="flex h-full items-center justify-center">
        <Countdown />
      </div>
    </Contexts>
  );
}
