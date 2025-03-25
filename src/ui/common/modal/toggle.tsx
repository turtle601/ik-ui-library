import React, { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useModalStore } from './model/useModal';

import type { EtcStylesType } from '../../@types/style';

interface ToggleProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  modalContent?: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Toggle({
  children,
  modalContent = null,
  etcStyles = {},
  ...attributes
}: ToggleProps) {
  const { toggle } = useModalStore();

  const handleClick = () => {
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
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Toggle;
