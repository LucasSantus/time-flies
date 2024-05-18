import dynamic from "next/dynamic";
import { CountdownDialogFinished } from "./countdown-dialog-finished";
import { CountdownStructureNumbers } from "./countdown-structure-numbers";

const CountdownStructureButtons = dynamic(
  () =>
    import("./countdown-structure-buttons").then(
      ({ CountdownStructureButtons }) => CountdownStructureButtons,
    ),
  {
    ssr: false,
  },
);

export function Countdown(): JSX.Element {
  return (
    <section className="flex h-full w-full items-start justify-center sm:items-center">
      <div className="grid min-w-fit items-center justify-center gap-8 rounded-md border border-custom-gray-200 p-7 transition-all delay-150 duration-150 dark:border-none dark:bg-custom-gray-700">
        <CountdownStructureNumbers />

        <CountdownStructureButtons />

        <CountdownDialogFinished />
      </div>
    </section>
  );
}
