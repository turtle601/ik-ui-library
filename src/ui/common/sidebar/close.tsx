import React, { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useSidebarStore } from './model/useSidebar';

import type { EtcStylesType } from '@/ui/@types/style';

interface CloseProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  externalOnClick?: VoidFunction;
  etcStyles?: EtcStylesType;
}

function Close({
  children,
  externalOnClick,
  etcStyles = {},
  ...attributes
}: CloseProps) {
  const { close } = useSidebarStore();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (externalOnClick) {
      externalOnClick();
    }

    close();
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

export default Close;
