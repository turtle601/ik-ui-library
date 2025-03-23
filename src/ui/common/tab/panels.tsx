import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { css } from '@emotion/react';

import { allocateTabIdForChildren } from './lib/allcateTabIdForChildren';

import type { PanelProps } from './panel';
import type { EtcStylesType } from '../../@types/style';

interface PanelsProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactElement<PanelProps>[];
  etcStyle?: EtcStylesType;
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
