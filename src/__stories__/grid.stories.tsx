import { css } from '@emotion/react';
import { CSSProperties } from 'react';

import { Grid } from '../ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const getGridItemStyle = (): CSSProperties => {
  return {
    width: '100%',
    height: '100%',
    border: '1px solid black',
  };
};

export const Default: Story = {
  render: () => (
    <Grid.Container
      gridItemSize="20%"
      gap={'4px'}
      etcStyles={{
        width: '500px',
      }}
    >
      {Array(10)
        .fill(0)
        .map((v, i) => {
          return <div css={css({ ...getGridItemStyle() })}>그리드</div>;
        })}
    </Grid.Container>
  ),
};
