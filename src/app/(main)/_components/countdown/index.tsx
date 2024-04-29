"use client";

import { CountdownStructureButtons } from "./CountdownStructureButtons";
import { CountdownStructureNumbers } from "./CountdownStructureNumbers";

export function Countdown(): JSX.Element {
  // const { isFinished } = useCountdown();

  return (
    <section className="flex h-full w-full items-start justify-center sm:items-center">
      <div
        // {...easeInOutAnimationScale({})}
        className="grid min-w-fit items-center justify-center gap-8 rounded-md bg-slate-700 p-7 transition-all delay-150 duration-150 dark:bg-custom-gray-700"
      >
        <CountdownStructureNumbers />

        <CountdownStructureButtons />

        {/* {isFinished && (
        <ModalProvider>
          <Modal isOpenDefault={true}>
            <CountdownFinished />
          </Modal>
        </ModalProvider>
      )} */}
      </div>
    </section>
  );
}
