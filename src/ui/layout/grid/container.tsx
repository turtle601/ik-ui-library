import { CSSProperties, ElementType, ReactNode } from 'react';

import { css } from '@emotion/react';

import type { PolymorpicProps } from '../../@types/polymorpic';
import type { EtcStylesType } from '../../@types/style';

interface IGridContainerProps {
  children: ReactNode;
  gap?: CSSProperties['gap'];
  etcStyles?: EtcStylesType;
}

function Container<T extends ElementType = 'div'>({
  as,
  children,
  gap = '0px',
  etcStyles = {},
  ...attributes
}: PolymorpicProps<T, IGridContainerProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={css({
        display: 'grid',
        width: '100%',
        height: 'auto',
        gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
        gap: gap || '0px',
        ...etcStyles,
      })}
      {...attributes}
    >
      {children}
    </Element>
  );
}

export default Container;
