import React from 'react';
import { css, CSSObject } from '@emotion/react';
import { PolymorpicProps } from '../@types/polymorpic';

interface FlexProps {
  direction?: CSSObject['flexDirection'];
  justify?: CSSObject['justifyContent'];
  align?: CSSObject['alignItems'];
  gap?: CSSObject['gap'];
  etcStyles?: CSSObject;
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
