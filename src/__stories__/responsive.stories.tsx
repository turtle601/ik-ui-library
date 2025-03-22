import React from 'react';

import Responsive from '../ui/layout/responsive';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Responsive> = {
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Responsive>;

export const Default: Story = {
  render: () => (
    <Responsive
      breakpoint={[720, 1200]}
      defaultStyles={{ color: 'green' }}
      breakPointStyles={[{ color: 'red' }, { color: 'blue' }]}
    >
      안녕하세요:
    </Responsive>
  ),
};
