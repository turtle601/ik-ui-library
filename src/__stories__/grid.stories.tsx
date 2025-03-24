import { CSSObject } from '@emotion/react';

import { Grid } from '../ui';

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

export const Default: Story = {
  render: () => (
    <Grid.Container
      gap={'8px'}
      etcStyles={{
        width: '100%',
      }}
    >
      <Grid.Item
        xs={12}
        etcStyles={{
          ...getGridItemStyle(),
        }}
      >
        그리드
      </Grid.Item>
      {Array(9)
        .fill(0)
        .map((v, i) => {
          return (
            <Grid.Item
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
