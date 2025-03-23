import { ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

import { useTabStore } from './model/useTab';

import type { EtcStylesType } from '../../@types/style';

export interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  tabId?: number;
  etcStyles?: EtcStylesType;
  children: React.ReactNode;
}

function Panel({ tabId, children, etcStyles = {}, ...attribute }: PanelProps) {
  const { focusId } = useTabStore();

  const isFocus = focusId === tabId;

  return (
    isFocus && (
      <div
        css={css({
          ...etcStyles,
        })}
        {...attribute}
      >
        {children}
      </div>
    )
  );
}

Panel.displayName = 'Tab.Panel';

export default Panel;
