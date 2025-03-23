import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from '../ui/common';

const meta: Meta<typeof Tab> = {
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <>
      <Tab.Buttons>
        <Tab.Button>
          {(isActive) => {
            return <>1번</>;
          }}
        </Tab.Button>
        <Tab.Button>
          {(isActive) => {
            return <>2번</>;
          }}
        </Tab.Button>
      </Tab.Buttons>
      <Tab.Panels>
        <Tab.Panel>1번 내용</Tab.Panel>
        <Tab.Panel>2번 내용</Tab.Panel>
      </Tab.Panels>
    </>
  ),
};
