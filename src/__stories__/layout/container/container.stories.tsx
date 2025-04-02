import { css } from '@emotion/react';

import { Center, Container } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Center> = {};

export default meta;

type Story = StoryObj<typeof Center>;

const Item = () => {
  return (
    <div
      css={css({
        width: '100%',
        height: '48px',
        border: '1px solid #000',
      })}
    >
      Container
    </div>
  );
};

export const Example: Story = {
  render: () => (
    <Container
      maxWidth={'1200px'}
      minWidth={'700px'}
      etcStyles={{ width: '100%' }}
    >
      <Item />
    </Container>
  ),
};
