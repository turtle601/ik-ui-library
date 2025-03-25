import { useContext } from 'react';
import { PaginationContext } from './context';

export const usePaginationContext = () => {
  const state = useContext(PaginationContext);
  if (state === null) throw new Error('Cannot find PaginationContext');
  return state;
};
