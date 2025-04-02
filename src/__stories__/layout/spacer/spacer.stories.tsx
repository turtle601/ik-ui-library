import { css } from '@emotion/react';

import { spacer } from '@/config';
import { Center, Flex, Spacer } from '@/ui';

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
        width: '120px',
        height: '48px',
        backgroundColor: '#000',
      })}
    ></div>
  );
};

export const HorizontalSpacer: Story = {
  render: () => (
    <Flex
      etcStyles={{
        width: '500px',
        height: '500px',
      }}
    >
      <Item />
      <Spacer direction="horizontal" space={spacer.spacing3} />
      <Item />
    </Flex>
  ),
};

export const VerticalSpacer: Story = {
  render: () => (
    <Flex
      direction="column"
      etcStyles={{
        width: '500px',
        height: '500px',
      }}
    >
      <Item />
      <Spacer direction="vertical" space={spacer.spacing3} />
      <Item />
    </Flex>
  ),
};
