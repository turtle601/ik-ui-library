import React, { CSSProperties } from 'react';

import Flex from './flex';

import type { PolymorpicProps } from '../@types/polymorpic';

interface ICenterProps {
  direction?: CSSProperties['flexDirection'];
  etcStyles?: CSSProperties;
}

const Center = <T extends React.ElementType = 'div'>({
  as,
  direction = 'row',
  etcStyles = {},
  children,
  ...attribute
}: PolymorpicProps<T, ICenterProps>) => {
  const Element = as || 'div';

  return (
    <Flex
      as={Element}
      direction={direction}
      justify="center"
      align="center"
      etcStyles={etcStyles}
      {...attribute}
    >
      {children}
    </Flex>
  );
};

export default Center;
