interface MinusIconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const MinusIcon = (props: MinusIconProps) => (
  <svg
    width={25}
    height={3}
    viewBox="0 0 25 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.988 1.38a1 1 0 011-1h22a1 1 0 110 2h-22a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </svg>
);
