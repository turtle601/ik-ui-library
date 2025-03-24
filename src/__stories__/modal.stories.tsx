import React from 'react';

import { css } from '@emotion/react';

import { Sidebar } from '../ui/common/sidebar';

import type { Meta, StoryObj } from '@storybook/react';
import { Center } from '../ui';
import { Modal } from '../ui/common/modal';

const meta: Meta<typeof Sidebar> = {};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const Item = () => {
  return (
    <div
      css={css({
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      })}
    >
      안녕
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <>
      <Modal.Toggle>
        <Center
          etcStyles={{
            width: '150px',
            height: '100px',
          }}
        >
          modal 열기
        </Center>
      </Modal.Toggle>
      <Modal.Content
        breakpoint={768}
        dom={document.querySelector('#modal') as HTMLElement}
      >
        <Item />
      </Modal.Content>
    </>
  ),
};
