import { CountdownDialogFinished } from "./countdown-dialog-finished";
import { CountdownStructureButtons } from "./countdown-structure-buttons";
import { CountdownStructureNumbers } from "./countdown-structure-numbers";

export function Countdown(): JSX.Element {
  return (
    <section className="flex h-full w-full items-start justify-center sm:items-center">
      <div
        // {...easeInOutAnimationScale({})}
        className="grid min-w-fit items-center justify-center gap-8 rounded-md bg-custom-gray-700 p-7 transition-all delay-150 duration-150"
      >
        <CountdownStructureNumbers />

        <CountdownStructureButtons />

        <CountdownDialogFinished />
      </div>
    </section>
  );
}
