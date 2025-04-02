import React, { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useSidebarStore } from './model/useSidebar';

import type { EtcStylesType } from '@/ui/@types/style';

interface OpenProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  externalOnClick?: VoidFunction;
  etcStyles?: EtcStylesType;
}

function Open({
  children,
  externalOnClick,
  etcStyles = {},
  ...attributes
}: OpenProps) {
  const { open } = useSidebarStore();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (externalOnClick) {
      externalOnClick();
    }

    open();
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

export default Open;
