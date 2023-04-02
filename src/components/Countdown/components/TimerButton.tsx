import React, { PropsWithChildren } from 'react';

interface IButtonProps extends PropsWithChildren {
  title: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const TimerButton: React.FC<IButtonProps> = ({ title, icon, onClick }) => {
  return (
    <button
      type="button"
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </button>
  );
};
