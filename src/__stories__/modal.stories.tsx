import { css } from '@emotion/react';

import { Sidebar } from '../ui/common/sidebar';

import type { Meta, StoryObj } from '@storybook/react';

import { Center, Modal } from '../ui';

const meta: Meta<typeof Sidebar> = {};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <Modal.Provider
      breakPoint={768}
      contentDefaultStyles={{
        width: '100%',
        height: '80%',
        zIndex: 11,
        position: 'absolute',
        bottom: 0,
        border: '1px solid red',
      }}
    >
      <Modal.Open
        modalContent={
          <div
            css={css({
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
            })}
          >
            안녕
          </div>
        }
      >
        <Center
          etcStyles={{
            width: '150px',
            height: '100px',
          }}
        >
          modal 열기
        </Center>
      </Modal.Open>
      <Modal.Content dom={document.querySelector('#modal') as HTMLElement} />
    </Modal.Provider>
  ),
};

export const Map: Story = {
  render: () => (
    <Modal.Provider
      isBackDropClose={false}
      contentDefaultStyles={{
        width: '100%',
        position: 'absolute',
        height: '200px',
        zIndex: 12,
        bottom: '12px',
        border: '1px solid red',
      }}
    >
      <Modal.Open
        modalContent={
          <div
            css={css({
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
            })}
          >
            안녕
          </div>
        }
      >
        <Center
          etcStyles={{
            width: '150px',
            height: '100px',
          }}
        >
          modal 열기
        </Center>
      </Modal.Open>
      <Modal.Content dom={document.querySelector('#modal') as HTMLElement} />
    </Modal.Provider>
  ),
};
