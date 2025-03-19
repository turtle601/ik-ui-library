import React from 'react';
import { Global } from '@emotion/react';

import type { Preview } from '@storybook/react';

import { globalStyle } from '../src/config/styles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <Global styles={globalStyle} />
          <Story />
        </>
      );
    },
  ],
};

export default preview;
