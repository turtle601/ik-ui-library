import React from 'react';

import { css } from '@emotion/react';

import { Siderbar } from '../ui/common/sidebar';

import type { Meta, StoryObj } from '@storybook/react';
import { Center } from '../ui';

const meta: Meta<typeof Siderbar> = {};

export default meta;

type Story = StoryObj<typeof Siderbar>;

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
      <Siderbar.Toggle>
        <Center
          etcStyles={{
            width: '150px',
            height: '100px',
          }}
        >
          sidebar 열기
        </Center>
      </Siderbar.Toggle>
      <Siderbar.Content dom={document.querySelector('#sidebar') as HTMLElement}>
        <Item />
      </Siderbar.Content>
    </>
  ),
};
