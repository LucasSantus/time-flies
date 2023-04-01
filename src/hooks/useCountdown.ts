import { useContext } from 'react';
import { CountdownContext, CountdownContextData } from '../context/CountdownContext';

export function useCountdown(): CountdownContextData {
  const countdownContext = useContext(CountdownContext);
  if (!countdownContext) {
    throw new Error('useCountdown must be used within a CountdownProvider');
  }

  return countdownContext;
}
