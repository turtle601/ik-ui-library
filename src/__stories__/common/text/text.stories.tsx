import { css } from '@emotion/react';

import { Text } from '@/ui';
import { spacer } from '@/config';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  component: Text,
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
