import { Context, createContext, useContext } from 'react';

interface IPaginationContextProps {
  currentPage: number;
  goPrevPage: VoidFunction;
  goNextPage: VoidFunction;
  goTargetPage: (targetPage: number) => void;
}

export const PaginationContext: Context<IPaginationContextProps | null> =
  createContext<IPaginationContextProps | null>(null);
