import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

import { css } from '@emotion/react';

import { useTabStore } from './model/useTab';

import type { EtcStylesType } from '../../@types/style';

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<'li'>, 'children'> {
  tabId?: number;
  etcStyles?: EtcStylesType;
  children: (isActive: boolean) => React.ReactNode;
}

function Button({
  tabId,
  children,
  etcStyles = {},
  ...attribute
}: ButtonProps) {
  const { focusId, setFocusId } = useTabStore();

  const isActive = focusId === tabId;

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
        width: '100%',
        cursor: 'pointer',
        ...etcStyles,
      })}
      onClick={handleClick}
      {...attribute}
    >
      {children(isActive)}
    </li>
  );
}

Button.displayName = 'Tab.Button';

export default Button;
