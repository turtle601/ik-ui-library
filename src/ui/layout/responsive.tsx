import { css } from '@emotion/react';

import { CSSProperties, PropsWithChildren } from 'react';

const getMediaStyle = (breakpoint: number, breakPointStyle: CSSProperties) => {
  return {
    [`@media (min-width: ${breakpoint}px)`]: {
      ...breakPointStyle,
    },
  };
};

interface ResponsiveProps {
  defaultStyles?: CSSProperties;
  breakpoint: number[];
  breakPointStyles: CSSProperties[];
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
