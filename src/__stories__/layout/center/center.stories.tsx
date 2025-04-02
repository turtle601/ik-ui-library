import { css } from '@emotion/react';

import { Center } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Center> = {
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Center>;

const Item = () => {
  return (
    <div
      css={css({
        width: '48px',
        height: '48px',
        backgroundColor: '#000',
      })}
    ></div>
  );
};

export const Example: Story = {
  render: () => (
    <Center
      etcStyles={{
        width: '500px',
        height: '500px',
        border: '1px solid #000',
      }}
    >
      <Item />
    </Center>
  ),
};
