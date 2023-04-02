interface PlusIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const PlusIcon = (props: PlusIconProps) => (
  <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.988 12.38a1 1 0 011-1h22a1 1 0 110 2h-22a1 1 0 01-1-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.988.38a1 1 0 011 1v22a1 1 0 01-2 0v-22a1 1 0 011-1z"
      fill="currentColor"
    />
  </svg>
);
