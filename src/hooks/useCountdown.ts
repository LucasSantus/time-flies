import { CountdownContext } from '@/context/CountdownContext';
import { useContext } from 'react';

export const useCountdown = () => useContext(CountdownContext);
