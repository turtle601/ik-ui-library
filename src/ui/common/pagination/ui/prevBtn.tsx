import React from 'react';
import { css } from '@emotion/react';

import { usePaginationContext } from '../model';
import { Center } from '../../../layout';

import LeftArrowIcon from '../../../../asset/arrow/left.svg';

import {
  getCommonBtnStyle,
  getDisableBtnStyle,
  getHoverBtnStyle,
} from '../lib';

export interface IPrevBtnProps {
  isDisabled: boolean;
  externalOnClick?: () => void;
}

function PrevBtn({ isDisabled, externalOnClick }: IPrevBtnProps) {
  const { goPrevPage } = usePaginationContext();

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    goPrevPage();
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
      <LeftArrowIcon width={'16px'} height={'16px'} fill={'currentColor'} />
    </Center>
  );
}

export default React.memo(PrevBtn);
