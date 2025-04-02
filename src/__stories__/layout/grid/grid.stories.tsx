import { CSSObject } from '@emotion/react';

import { Grid } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const getGridItemStyle = (): CSSObject => {
  return {
    width: '100%',
    height: '100%',
    border: '1px solid black',
  };
};

export const Example: Story = {
  render: () => (
    <Grid.Container
      gap={'8px'}
      etcStyles={{
        width: '500px',
        height: '500px',
      }}
    >
      {Array(9)
        .fill(0)
        .map((v, i) => {
          return (
            <Grid.Item
              key={i}
              xs={4}
              etcStyles={{
                ...getGridItemStyle(),
              }}
            >
              {i}
            </Grid.Item>
          );
        })}
    </Grid.Container>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Grid.Container
      gap={'8px'}
      responsive={[
        [4, 400],
        [8, 1024],
      ]}
      etcStyles={{
        width: '500px',
        height: '500px',
      }}
    >
      {Array(9)
        .fill(0)
        .map((v, i) => {
          return (
            <Grid.Item
              key={i}
              xs={4}
              etcStyles={{
                ...getGridItemStyle(),
              }}
            >
              {i}
            </Grid.Item>
          );
        })}
    </Grid.Container>
  ),
};
