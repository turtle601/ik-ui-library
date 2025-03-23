import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react';

import { css } from '@emotion/react';

import { allocateTabIdForChildren } from './lib/allcateTabIdForChildren';

import type { ButtonProps } from './button';
import type { EtcStylesType } from '../../@types/style';

interface ButtonsProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactElement<ButtonProps>[];
  etcStyle?: EtcStylesType;
}

function Buttons({ etcStyle = {}, children, ...attribute }: ButtonsProps) {
  return (
    <ul
      css={css({
        width: '100%',
        ...etcStyle,
      })}
      {...attribute}
    >
      {allocateTabIdForChildren(children, 'Tab.Button')}
    </ul>
  );
}

export default Buttons;
