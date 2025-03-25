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

interface IPrevBtnProps {
  isDisabled: boolean;
}

function PrevBtn({ isDisabled }: IPrevBtnProps) {
  const { goPrevPage } = usePaginationContext();

  return (
    <Center
      as="button"
      disabled={isDisabled}
      onClick={goPrevPage}
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
