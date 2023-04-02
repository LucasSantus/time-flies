interface PlayRegularIconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const PlayRegularIcon = (props: PlayRegularIconProps) => (
  <svg
    width={28}
    height={33}
    viewBox="0 0 28 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.232.692a2.395 2.395 0 012.454.055L26.48 14.281c.356.216.652.522.857.888a2.475 2.475 0 010 2.424 2.43 2.43 0 01-.857.888L4.686 32.014l-.003.002a2.398 2.398 0 01-2.45.053 2.442 2.442 0 01-.91-.902 2.49 2.49 0 01-.335-1.245V2.84c0-.438.116-.868.335-1.246.219-.377.533-.688.91-.902zm23.623 14.643l-.625 1.038.008-.005a.016.016 0 00-.006.005.016.016 0 000 .015.016.016 0 00.006.006l.617-1.06zm-.639 1.046L3.413 2.843v27.076l.004-.002 21.8-13.536z"
      fill="currentColor"
    />
  </svg>
);
