import { ElementType, ReactNode } from 'react';
import { css } from '@emotion/react';

import type { XS } from '@/ui/layout/grid/lib';
import type { PolymorpicProps } from '@/ui/@types/polymorpic';
import type { EtcStylesType } from '@/ui/@types/style';

export interface IGridItemProps {
  xs: XS;
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

Item.displayName = 'Grid.Item';

export default Item;
