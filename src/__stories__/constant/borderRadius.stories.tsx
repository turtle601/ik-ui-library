import { borderRadius, color } from '@/config';
import { Center } from '@/ui';
import { css, CSSObject } from '@emotion/react';

import type { StoryObj } from '@storybook/react';

const meta = {
  tags: ['autodocs'],
} as const;

export default meta;

type Story = StoryObj;

const getGridItemStyle = (): CSSObject => {
  return {
    width: '80px',
    height: '80px',
  };
};

export const BorderRadiusTable: Story = {
  render: () => {
    return (
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: `repeat(3, 200px)`,
          gap: '12px',
        })}
      >
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          small
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          medium
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          large
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          12px
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          20px
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          32px
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          <div
            css={css({
              width: '64px',
              height: '64px',
              backgroundColor: color['primary-4'],
              borderRadius: borderRadius.sm,
            })}
          ></div>
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          <div
            css={css({
              width: '64px',
              height: '64px',
              backgroundColor: color['primary-4'],
              borderRadius: borderRadius.md,
            })}
          ></div>
        </Center>
        <Center
          etcStyles={{
            ...getGridItemStyle(),
          }}
        >
          <div
            css={css({
              width: '64px',
              height: '64px',
              backgroundColor: color['primary-4'],
              borderRadius: borderRadius.lg,
            })}
          ></div>
        </Center>
      </div>
    );
  },
};
