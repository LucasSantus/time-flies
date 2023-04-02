interface SunIconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const SunIcon = (props: SunIconProps) => (
  <svg
    width={32}
    height={33}
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9.448a6.933 6.933 0 100 13.866 6.933 6.933 0 000-13.866zM6.933 16.38a9.067 9.067 0 1118.134 0 9.067 9.067 0 01-18.134 0zM16 .38c.59 0 1.067.478 1.067 1.068v2.666a1.067 1.067 0 01-2.134 0V1.448c0-.59.478-1.067 1.067-1.067zM4.686 5.067a1.067 1.067 0 011.508 0l1.88 1.88a1.067 1.067 0 11-1.508 1.508l-1.88-1.88a1.067 1.067 0 010-1.508zM0 16.38c0-.588.478-1.066 1.067-1.066h2.666a1.067 1.067 0 010 2.134H1.067C.477 17.448 0 16.97 0 16.38zM8.074 24.307a1.067 1.067 0 010 1.508l-1.88 1.88a1.067 1.067 0 11-1.508-1.508l1.88-1.88a1.067 1.067 0 011.508 0zM16 27.58c.59 0 1.067.478 1.067 1.068v2.666a1.067 1.067 0 01-2.134 0v-2.666c0-.59.478-1.067 1.067-1.067zM23.926 24.307a1.067 1.067 0 011.508 0l1.88 1.88a1.067 1.067 0 11-1.508 1.508l-1.88-1.88a1.067 1.067 0 010-1.508zM27.2 16.38c0-.588.478-1.066 1.067-1.066h2.666a1.067 1.067 0 010 2.134h-2.666c-.59 0-1.067-.478-1.067-1.067zM27.314 5.067a1.067 1.067 0 010 1.508l-1.88 1.88a1.067 1.067 0 01-1.508-1.508l1.88-1.88a1.067 1.067 0 011.508 0z"
      fill="currentColor"
    />
  </svg>
);
