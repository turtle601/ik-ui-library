import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react';
import { css } from '@emotion/react';

import { allocateTabIdForChildren } from './lib/allcateTabIdForChildren';

import type { PanelProps } from './panel';

interface PanelsProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactElement<PanelProps>[];
  etcStyle?: CSSProperties;
}

function Panels({ children, etcStyle = {}, ...attribute }: PanelsProps) {
  return (
    <div
      css={css({
        ...etcStyle,
      })}
      {...attribute}
    >
      {allocateTabIdForChildren(children, 'Tab.Panel')}
    </div>
  );
}

export default Panels;
