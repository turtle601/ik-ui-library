import React, {
  Children,
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
} from 'react';

import Responsive from '@/ui/layout/responsive';

import {
  getBreakpoint,
  getBreakPointStyles,
  getDefaultStyle,
  XS,
} from '@/ui/layout/grid/lib';

import type { EtcStylesType } from '@/ui/@types/style';
import { isChildElement } from '@/ui/lib';

interface IGridContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  gap?: CSSProperties['gap'];
  responsive?: [XS, number][];
  etcStyles?: EtcStylesType;
}

function Container({
  children,
  gap = '0px',
  responsive = [],
  etcStyles = {},
  ...attributes
}: IGridContainerProps) {
  React.Children.map(children, (child) => {
    if (!isChildElement(child, 'Grid.Item')) {
      throw new Error(
        'Grid.Container 내부에는 Grid.Item 요소만 들어올 수 있습니다'
      );
    }
  });

  const sortedResponsive =
    responsive.length > 1 ? responsive.sort((a, b) => a[0] - b[0]) : responsive;

  return (
    <Responsive
      defaultStyles={getDefaultStyle(sortedResponsive, gap, etcStyles)}
      breakpoint={getBreakpoint(sortedResponsive)}
      breakPointStyles={getBreakPointStyles(sortedResponsive)}
      {...attributes}
    >
      {children}
    </Responsive>
  );
}

export default Container;
