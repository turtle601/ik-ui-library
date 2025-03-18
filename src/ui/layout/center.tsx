import React from 'react';

import { CSSObject } from '@emotion/react';

import Flex from 'src/ui/layout/flex';

import type { PolymorpicProps } from 'src/ui/@types/polymorpic';

interface ICenterProps {
  direction?: CSSObject['flexDirection'];
  etcStyles?: CSSObject;
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
