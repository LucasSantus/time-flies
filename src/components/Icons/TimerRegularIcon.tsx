interface TimerRegularIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const TimerRegularIcon = (props: TimerRegularIconProps) => (
  <svg width={28} height={33} viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.951 1.612c0-.68.551-1.231 1.23-1.231h6.714a1.23 1.23 0 010 2.461h-6.713a1.23 1.23 0 01-1.231-1.23zm4.588 5.775c-6.1 0-11.077 5.026-11.077 11.266s4.976 11.266 11.077 11.266c6.1 0 11.076-5.026 11.076-11.266S19.638 7.387 13.54 7.387zM0 18.653C0 11.089 6.044 4.925 13.539 4.925c7.494 0 13.538 6.164 13.538 13.728s-6.044 13.728-13.539 13.728C6.045 32.38 0 26.217 0 18.653zm19.94-6.501a1.23 1.23 0 01.014 1.74l-5.539 5.624a1.23 1.23 0 01-1.753-1.727l5.538-5.624a1.23 1.23 0 011.74-.013z"
      fill="currentColor"
    />
  </svg>
);
