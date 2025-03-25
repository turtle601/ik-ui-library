import { css } from '@emotion/react';

import React from 'react';
import { usePaginationContext } from '../model';

import {
  getActiveNumBtnStyle,
  getCommonBtnStyle,
  getHoverBtnStyle,
  getNumBtnStyle,
} from '../lib';

export interface INumBtnProps {
  pageNum: number;
  externalOnClick?: () => void;
}

function NumBtn({ pageNum, externalOnClick }: INumBtnProps) {
  const { currentPage, goTargetPage } = usePaginationContext();

  const isActive = pageNum === currentPage;

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    goTargetPage(pageNum);
  };

  return (
    <button
      onClick={handleClick}
      css={css({
        ...getCommonBtnStyle(),
        ...getHoverBtnStyle(),
        ...(isActive ? getActiveNumBtnStyle() : getNumBtnStyle()),
      })}
    >
      {pageNum}
    </button>
  );
}

export default React.memo(NumBtn);
