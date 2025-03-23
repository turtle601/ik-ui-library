import { css } from '@emotion/react';
import React, { CSSProperties } from 'react';

import type { PolymorpicProps } from '../@types/polymorpic';
import type { EtcStylesType } from '../@types/style';

interface FlexProps {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  etcStyles?: EtcStylesType;
  children: React.ReactNode;
}

function Flex<T extends React.ElementType = 'div'>({
  as,
  direction = 'row',
  justify = 'start',
  align = 'auto',
  gap = '0px',
  etcStyles = {},
  children,
  ...attribute
}: PolymorpicProps<T, FlexProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={css({
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        ...etcStyles,
      })}
      {...attribute}
    >
      {children}
    </Element>
  );
}

export default Flex;
