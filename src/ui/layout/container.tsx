import React, { CSSProperties } from 'react';

import type { PolymorpicProps } from '../@types/polymorpic';

interface ContainerProps {
  maxWidth: CSSProperties['maxWidth'];
  minWidth: CSSProperties['minWidth'];
  etcStyles?: CSSProperties;
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
