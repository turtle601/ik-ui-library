import { CSSProperties, ElementType, ReactNode } from 'react';

import { css, CSSObject } from '@emotion/react';

import type { PolymorpicProps } from 'src/ui/@types/polymorpic';

interface GridContainerProps {
  gap?: CSSProperties['gap'];
  gridItemSize: `${number}%`;
  etcStyles?: CSSObject;
  children: ReactNode;
}

function Container<T extends ElementType = 'div'>({
  as,
  children,
  gap = '0px',
  gridItemSize,
  etcStyles = {},
  ...attributes
}: PolymorpicProps<T, GridContainerProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={css({
        display: 'grid',
        width: '100%',
        height: 'auto',
        gridTemplateColumns: `repeat(auto-fill, minmax(${gridItemSize}, auto))`,
        gap: gap,
        ...etcStyles,
      })}
      {...attributes}
    >
      {children}
    </Element>
  );
}

export default Container;
