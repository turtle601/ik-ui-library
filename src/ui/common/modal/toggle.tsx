import React, { MouseEventHandler } from 'react';
import { css } from '@emotion/react';

import { useModalStore } from './model/useModal';

import type { EtcStylesType } from '../../@types/style';

interface ToggleProps {
  children: React.ReactNode;
  modalContent?: React.ReactNode;
  etcStyles?: EtcStylesType;
  externalOnClick?: MouseEventHandler<HTMLButtonElement>;
}

function Toggle({
  children,
  modalContent = null,
  externalOnClick,
  etcStyles = {},
}: ToggleProps) {
  const { toggle } = useModalStore();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (externalOnClick) {
      externalOnClick(event);
    }

    toggle(modalContent);
  };

  return (
    <button
      css={css({
        width: '100%',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        ...etcStyles,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Toggle;
