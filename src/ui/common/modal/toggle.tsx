import React, { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useModalStore } from './model/useModal';

import type { EtcStylesType } from '../../@types/style';

interface ToggleProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Toggle({ children, etcStyles = {}, ...attributes }: ToggleProps) {
  const { toggle } = useModalStore();

  return (
    <button
      css={css({
        width: '100%',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        ...etcStyles,
      })}
      onClick={toggle}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Toggle;
