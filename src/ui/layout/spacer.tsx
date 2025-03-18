import React from 'react';

import type { CSSObject } from '@emotion/react';

export type SpacerType = 'vertical' | 'horizontal';

import { css } from '@emotion/react';

const getSpacerStyle = <T extends SpacerType>({
  direction,
  space = 'auto',
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
  flex?: CSSObject['flex'];
  space?: CSSObject[T extends 'vertical' ? 'width' : 'height'];
  direction: T;
}

function Spacer<T extends SpacerType>({
  direction,
  space,
  flex = 'none',
}: ISpacerProps<T>) {
  return (
    <div css={css({ ...getSpacerStyle({ direction, space }), flex })}></div>
  );
}

export default Spacer;
