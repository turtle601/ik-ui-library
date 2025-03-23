import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react';

import { css } from '@emotion/react';

import { allocateTabIdForChildren } from './lib/allcateTabIdForChildren';

import type { ButtonProps } from './button';

interface ButtonsProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactElement<ButtonProps>[];
  etcStyle?: CSSProperties;
}

function Buttons({ etcStyle = {}, children, ...attribute }: ButtonsProps) {
  return (
    <ul
      css={css({
        ...etcStyle,
      })}
      {...attribute}
    >
      {allocateTabIdForChildren(children, 'Tab.Button')}
    </ul>
  );
}

export default Buttons;
