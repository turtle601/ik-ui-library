import type { CSSProperties } from 'react';

import type { XS } from '@/ui/layout/grid/lib/type';
import type { EtcStylesType } from '@/ui/@types/style';

export const getDefaultStyle = (
  sortedResponsive: [XS, number][],
  gap?: CSSProperties['gap'],
  etcStyles?: EtcStylesType
) => {
  const column = sortedResponsive.length > 0 ? sortedResponsive[0][0] : 12;

  return {
    display: 'grid',
    width: '100%',
    height: 'auto',
    gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
    gap: gap || '0px',
    ...etcStyles,
  };
};

export const getBreakpoint = (sortedResponsive: [XS, number][]) => {
  if (sortedResponsive.length > 0) {
    return sortedResponsive.map((responsive) => responsive[1]);
  }

  return [];
};

export const getBreakPointStyles = (
  sortedResponsive: [XS, number][]
): EtcStylesType[] => {
  if (sortedResponsive.length > 1) {
    const resposiveStyle: EtcStylesType[] = sortedResponsive
      .slice(1)
      .map((responsive) => {
        return {
          gridTemplateColumns: `repeat(${responsive[0]}, minmax(0, 1fr))`,
        };
      });

    return [
      ...resposiveStyle,
      {
        gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
      },
    ];
  }

  return [
    {
      gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
    },
  ];
};
