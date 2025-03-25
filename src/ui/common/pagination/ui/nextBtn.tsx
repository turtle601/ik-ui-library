import React from 'react';
import { css } from '@emotion/react';

import { usePaginationContext } from '../model';
import { Center } from '../../../layout';

import RightArrowIcon from '../../../../asset/arrow/right.svg';

import {
  getCommonBtnStyle,
  getDisableBtnStyle,
  getHoverBtnStyle,
} from '../lib';

export interface INextBtnProps {
  isDisabled: boolean;
  externalOnClick?: () => void;
}

function NextBtn({ isDisabled, externalOnClick }: INextBtnProps) {
  const { goNextPage } = usePaginationContext();

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    goNextPage();
  };

  return (
    <Center
      as="button"
      disabled={isDisabled}
      onClick={handleClick}
      css={css({
        ...getCommonBtnStyle(),
        ...getHoverBtnStyle(),
        ...getDisableBtnStyle(),
      })}
    >
      <RightArrowIcon width={'16px'} height={'16px'} fill={'currentColor'} />
    </Center>
  );
}

export default React.memo(NextBtn);
