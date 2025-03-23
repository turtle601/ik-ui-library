import { ComponentPropsWithoutRef, CSSProperties } from 'react';
import { css } from '@emotion/react';

import { useTabStore } from './model/useTab';

export interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  tabId?: number;
  etcStyles?: CSSProperties;
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
