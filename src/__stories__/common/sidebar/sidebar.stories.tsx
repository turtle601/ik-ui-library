import React from 'react';
import { css } from '@emotion/react';

import { Center, Sidebar } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const Item = () => {
  return (
    <div
      css={css({
        width: '300px',
        height: '100vh',
        backgroundColor: '#fff',
      })}
    ></div>
  );
};

export const Default: Story = {
  render: () => (
    <>
      <Sidebar.Open>
        <Center
          etcStyles={{
            width: '150px',
            height: '100px',
          }}
        >
          sidebar 열기
        </Center>
      </Sidebar.Open>
      <Sidebar.Content dom={document.querySelector('#sidebar') as HTMLElement}>
        <Item />
      </Sidebar.Content>
    </>
  ),
};
