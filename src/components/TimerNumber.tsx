interface ITimerNumberProps {
  number: string;
}

export const TimerNumber: React.FC<ITimerNumberProps> = ({ number }) => {
  return <div className="p-1 text-9xl h-full rounded">{number}</div>;
};
