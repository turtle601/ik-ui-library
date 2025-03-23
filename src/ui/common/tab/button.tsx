import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

import { css } from '@emotion/react';

import { useTabStore } from './model/useTab';
import type { EtcStylesType } from '../../@types/style';

export interface ButtonProps extends ComponentPropsWithoutRef<'li'> {
  tabId?: number;
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Button({
  tabId,
  children,
  etcStyles = {},
  ...attribute
}: ButtonProps) {
  const { setFocusId } = useTabStore();

  const handleClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { onClick } = attribute;

    if (onClick) {
      onClick(e);
    }

    tabId && setFocusId(tabId);
  };

  return (
    <li
      css={css({
        cursor: 'pointer',
        ...etcStyles,
      })}
      onClick={handleClick}
      {...attribute}
    >
      {children}
    </li>
  );
}

Button.displayName = 'Tab.Button';

export default Button;
