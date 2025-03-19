import { SerializedStyles, css } from '@emotion/react';

import { color } from '../styles';

export const globalStyle: SerializedStyles = css({
  '*': {
    padding: 0,
    margin: 0,
    border: 'none',
    boxSizing: 'border-box',
    fontFamily: `Spoqa Han Sans Neo, sans-serif`,
  },

  'ul, ol, li': {
    listStyle: 'none',
  },

  body: {
    width: '100%',
    height: '100vh',
    color: color.gray400,
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
