import { createContext } from 'react';
/**
 * A simple react context that signals when a collection has been updated.
 */
export const UpdateCollection = createContext<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}>({ value: 0, setValue: () => {} });
