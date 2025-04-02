import React from 'react';

import { css } from '@emotion/react';

import { borderRadius } from '@/config';
import { Center, Modal, Responsive, useModal } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal.Provider>
      <Modal.Open modalContent={<ProtalWrapper>안녕</ProtalWrapper>}>
        <Center
          etcStyles={{
            width: '150px',
            height: '100px',
          }}
        >
          Modal 열기
        </Center>
      </Modal.Open>
      <Modal.Portal dom={document.querySelector('#modal') as HTMLElement} />
    </Modal.Provider>
  ),
};

interface ProtalWrapperProps {
  children: React.ReactNode;
}

function ProtalWrapper({ children }: ProtalWrapperProps) {
  const { close } = useModal();

  return (
    <div
      onClick={close}
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: 'rgba(22,28,45,.2)',
        width: '100vw',
        height: '100vh',
      })}
    >
      <Responsive
        defaultStyles={{
          width: '100%',
          height: '80%',
          zIndex: 11,
          position: 'absolute',
          bottom: 0,
        }}
        breakpoint={[768]}
        breakPointStyles={[
          {
            width: '500px',
            height: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: borderRadius.md,
          },
        ]}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          css={css({
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
          })}
        >
          {children}
        </div>
      </Responsive>
    </div>
  );
}
