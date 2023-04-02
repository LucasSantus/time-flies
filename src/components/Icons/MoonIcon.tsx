interface MoonIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const MoonIcon = (props: MoonIconProps) => (
  <svg width={32} height={33} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2.763c.333.333.46.819.333 1.271a13.634 13.634 0 003.498 13.342 13.68 13.68 0 0013.36 3.492l.353 1.253 1.256.35a16.27 16.27 0 01-4.26 7.226 16.322 16.322 0 01-22.966-.083A16.25 16.25 0 014.69 4.683 16.304 16.304 0 0111.927.429c.454-.126.94.001 1.273.334zm15.52 21.09a16.306 16.306 0 01-13.533-4.636 16.253 16.253 0 01-4.643-13.514 13.665 13.665 0 00-7.46 15.974 13.666 13.666 0 003.534 6.096 13.696 13.696 0 0013.16 3.555 13.695 13.695 0 008.943-7.475z"
      fill="currentColor"
    />
  </svg>
);
