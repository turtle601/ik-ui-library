import React, { ComponentPropsWithoutRef } from 'react';

import { useSidebarStore } from './model/useSidebar';

import type { EtcStylesType } from '../../@types/style';
import { css } from '@emotion/react';

interface ToggleProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Toggle({ children, etcStyles = {}, ...attributes }: ToggleProps) {
  const { toggle } = useSidebarStore();

  return (
    <button css={css({ ...etcStyles })} onClick={toggle} {...attributes}>
      {children}
    </button>
  );
}

export default Toggle;
