import React, { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useSidebarStore } from './model/useSidebar';

import type { EtcStylesType } from '../../@types/style';

interface ToggleProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Toggle({ children, etcStyles = {}, ...attributes }: ToggleProps) {
  const { onClick } = attributes;
  const { toggle } = useSidebarStore();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }

    toggle();
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
