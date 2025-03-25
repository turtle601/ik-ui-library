import { useCallback, useMemo, useState } from 'react';
import { PaginationContext } from '../model';

interface IProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: IProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);

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
