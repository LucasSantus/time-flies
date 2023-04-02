interface ITimerNumberProps {
  number: string;
}

export const TimerNumber: React.FC<ITimerNumberProps> = ({ number }) => {
  return (
    <div className="h-full rounded bg-[#29292E] p-2 font-mono text-9xl text-white sm:rounded-lg sm:p-0 md:p-3">
      {number}
    </div>
  );
};
