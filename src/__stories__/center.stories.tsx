import { css } from '@emotion/react';

import { Center } from '../ui';

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

export const Default: Story = {
  render: () => (
    <Center
      etcStyles={{
        width: '200px',
        height: '200px',
        border: '1px solid red',
      }}
    >
      <Item />
    </Center>
  ),
};
