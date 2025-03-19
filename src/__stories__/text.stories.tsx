import { css } from '@emotion/react';

import type { Meta, StoryObj } from '@storybook/react';
import { spacer } from '../config/styles';
import { Text } from '../ui/common';

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

const message = 'The quick brown fox jumps over the lazy dog' as const;

export const Default: Story = {
  render: () => {
    return (
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: `repeat(2, 1fr)`,
          gap: spacer.spacing6,
        })}
      >
        <div>
          <Text label="lg : " textWeight="bold" />
          <Text label="size: 12px: " />
          <Text label={message} textSize="xs" />
        </div>
        <div>
          <Text label="sm : " textWeight="bold" />
          <Text label="size: 14px: " />
          <Text label={message} textSize="sm" />
        </div>
        <div>
          <Text label="md : " textWeight="bold" />
          <Text label="size: 16px: " />
          <Text label={message} textSize="md" />
        </div>
      </div>
    );
  },
};
