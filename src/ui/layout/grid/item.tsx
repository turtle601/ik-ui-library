import { ElementType, ReactNode } from 'react';
import { css } from '@emotion/react';

import type { PolymorpicProps } from '../../@types/polymorpic';
import type { EtcStylesType } from '../../@types/style';

export interface IGridItemProps {
  xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  etcStyles?: EtcStylesType;
}

function Item<T extends ElementType = 'div'>({
  as,
  xs,
  children,
  etcStyles = {},
  ...attributes
}: PolymorpicProps<T, IGridItemProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={css({
        width: '100%',
        gridColumn: `auto / span ${xs || 4}`,
        ...etcStyles,
      })}
      {...attributes}
    >
      {children}
    </Element>
  );
}

export default Item;
