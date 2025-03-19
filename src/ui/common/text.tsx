import { ElementType } from 'react';
import { css, CSSObject } from '@emotion/react';

import { color, fontSize, fontWeight } from '../../config/styles';

import type { PolymorpicProps } from '../@types/polymorpic';

export interface ITextProps {
  /** 텍스트 메세지 */
  label: string;
  /** 텍스트 크기 */
  textSize?: keyof typeof fontSize;
  /** 텍스트 굵기 (ex. bold, regular ... ) */
  textWeight?: keyof typeof fontWeight;
  /** 텍스트 색상 */
  textColor?: keyof typeof color;
  /** 그 외 커스텀 설정 */
  etcStyles?: CSSObject;
}

function Text<T extends ElementType = 'span'>({
  as,
  textSize = 'md',
  textColor = 'gray400',
  textWeight = 'regular',
  label,
  etcStyles,
  ...attribute
}: PolymorpicProps<T, ITextProps>) {
  const Element = as || 'span';

  console.log(color[textColor]);
  console.log(fontWeight[textWeight]);
  console.log(fontSize[textSize]);

  return (
    <Element
      css={css({
        color: color[textColor],
        fontWeight: fontWeight[textWeight],
        fontSize: fontSize[textSize],
        ...etcStyles,
      })}
      {...attribute}
    >
      {label}
    </Element>
  );
}

export default Text;
