import React from "react";

export const TimerColon: React.FC = () => {
  return (
    <>
      <span className="hidden items-center justify-center pb-10 text-5xl text-custom-green-500 sm:flex sm:text-9xl">
        :
      </span>

      <div className="flex items-center justify-center sm:hidden">
        <div className="my-2 w-14 border border-b-custom-green-300" />
      </div>
    </>
  );
};
