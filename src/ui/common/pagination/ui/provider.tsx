import { useCallback, useMemo, useState } from 'react';
import { PaginationContext } from '../model';

export interface IProviderProps {
  currentPageNum?: number;
  children: React.ReactNode;
}

function Provider({ currentPageNum = 1, children }: IProviderProps) {
  const [currentPage, setCurrentPage] = useState(currentPageNum);

  const goPrevPage = useCallback(() => {
    setCurrentPage((page) => page - 1);
  }, []);

  const goNextPage = useCallback(() => {
    setCurrentPage((page) => page + 1);
  }, []);

  const goTargetPage = useCallback((targetPage: number) => {
    setCurrentPage(targetPage);
  }, []);

  const value = useMemo(
    () => ({
      currentPage,
      goPrevPage,
      goNextPage,
      goTargetPage,
    }),
    [currentPage]
  );

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

export default Provider;
