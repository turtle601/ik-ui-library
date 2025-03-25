import { css } from '@emotion/react';

import React from 'react';
import { usePaginationContext } from '../model';

import {
  getActiveNumBtnStyle,
  getCommonBtnStyle,
  getHoverBtnStyle,
  getNumBtnStyle,
} from '../lib';

interface INumBtnProps {
  pageNum: number;
}

function NumBtn({ pageNum }: INumBtnProps) {
  const { currentPage, goTargetPage } = usePaginationContext();

  const isActive = pageNum === currentPage;

  return (
    <button
      onClick={() => goTargetPage(pageNum)}
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
