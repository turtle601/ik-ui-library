import React, { CSSProperties } from 'react';

import Flex from './flex';

import type { PolymorpicProps } from '../@types/polymorpic';
import type { EtcStylesType } from '../@types/style';

interface ICenterProps {
  direction?: CSSProperties['flexDirection'];
  etcStyles?: EtcStylesType;
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
