import React from 'react';
import { CSSObject } from '@emotion/react';

import type { PolymorpicProps } from 'src/ui/@types/polymorpic';

interface ContainerProps {
  maxWidth: CSSObject['maxWidth'];
  minWdith: CSSObject['maxWidth'];
  etcStyles?: CSSObject;
}

function Container<T extends React.ElementType = 'div'>({
  as,
  maxWidth,
  minWdith,
  etcStyles = {},
  children,
  ...attribute
}: PolymorpicProps<T, ContainerProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={{
        maxWidth: maxWidth,
        minWidth: minWdith,
        margin: '0 auto',
        ...etcStyles,
      }}
      {...attribute}
    >
      {children}
    </Element>
  );
}

export default Container;
