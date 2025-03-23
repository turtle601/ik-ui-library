import { css } from '@emotion/react';

import { PropsWithChildren } from 'react';

import type { EtcStylesType } from '../@types/style';

const getMediaStyle = (breakpoint: number, breakPointStyle: EtcStylesType) => {
  return {
    [`@media (min-width: ${breakpoint}px)`]: {
      ...breakPointStyle,
    },
  };
};

interface ResponsiveProps {
  defaultStyles?: EtcStylesType;
  breakpoint: number[];
  breakPointStyles: EtcStylesType[];
}

function Responsive({
  breakpoint,
  breakPointStyles,
  defaultStyles = {},
  children,
}: PropsWithChildren<ResponsiveProps>) {
  return (
    <div
      css={css({
        ...defaultStyles,
        ...breakPointStyles.reduce(
          (acc, style, index) => ({
            ...acc,
            ...getMediaStyle(breakpoint[index], style),
          }),
          {}
        ),
      })}
    >
      {children}
    </div>
  );
}

export default Responsive;
