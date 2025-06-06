import React, { CSSProperties } from 'react';

import { css } from '@emotion/react';
import { spacer } from '@/config';

export type SpacerType = 'vertical' | 'horizontal';
import type { EtcStylesType } from '@/ui/@types/style';

const getSpacerStyle = <T extends SpacerType>({
  direction,
  space,
}: ISpacerProps<T>) => {
  if (direction === 'vertical') {
    return {
      width: '100%',
      height: `${space}`,
    };
  }

  return {
    width: `${space}`,
    height: 'auto',
  };
};

interface ISpacerProps<T extends SpacerType> {
  flex?: CSSProperties['flex'];
  space?: (typeof spacer)[keyof typeof spacer];
  direction: T;
}

function Spacer<T extends SpacerType>({
  direction,
  space,
  flex = 'none',
  etcStyles = {},
}: ISpacerProps<T> & { etcStyles?: EtcStylesType }) {
  return (
    <div
      css={css({ ...getSpacerStyle({ direction, space }), flex, ...etcStyles })}
    ></div>
  );
}

export default Spacer;
