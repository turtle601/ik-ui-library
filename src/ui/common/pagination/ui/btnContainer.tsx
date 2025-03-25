import React from 'react';

import { usePaginationContext } from '../model';

import { getMakePageNumList } from '../lib';

interface IChildrenParams {
  pageNumList: number[];
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

interface IBtnContainerProps {
  totalPage: number;
  range: number;
  children: ({
    pageNumList,
    isPrevDisabled,
    isNextDisabled,
  }: IChildrenParams) => React.ReactNode;
}

function BtnContainer({ totalPage, range, children }: IBtnContainerProps) {
  const { currentPage } = usePaginationContext();

  const isNextDisabled = currentPage === totalPage;
  const isPrevDisabled = currentPage === 1;
  const isShow = totalPage > 1;
  const pageNumList = getMakePageNumList(currentPage, totalPage, range);

  return (
    isShow && <>{children({ pageNumList, isPrevDisabled, isNextDisabled })}</>
  );
}

export default React.memo(BtnContainer);
