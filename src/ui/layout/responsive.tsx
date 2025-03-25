import { css } from '@emotion/react';

import { ComponentPropsWithRef, PropsWithChildren } from 'react';

import type { EtcStylesType } from '../@types/style';

const getMediaStyle = (breakpoint: number, breakPointStyle: EtcStylesType) => {
  return {
    [`@media (min-width: ${breakpoint}px)`]: {
      ...breakPointStyle,
    },
  };
};

interface ResponsiveProps extends ComponentPropsWithRef<'div'> {
  defaultStyles?: EtcStylesType;
  breakpoint: number[];
  breakPointStyles: EtcStylesType[];
}

function Responsive({
  breakpoint,
  breakPointStyles,
  defaultStyles = {},
  children,
  ...attribute
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
      {...attribute}
    >
      {children}
    </div>
  );
}

export default Responsive;
