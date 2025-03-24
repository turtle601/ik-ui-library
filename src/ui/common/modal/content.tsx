import ReactDOM from 'react-dom';
import { css } from '@emotion/react';
import React, { ComponentPropsWithoutRef } from 'react';

import { Responsive } from '../../layout';

import { useModalStore } from './model/useModal';

import type { EtcStylesType } from '../../@types/style';
import { borderRadius } from '../../../config';

interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  dom: HTMLElement;
  breakpoint: number;
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Content({
  dom,
  children,
  breakpoint,
  etcStyles = {},
  ...attribute
}: ContentProps) {
  const { isOpen, toggle } = useModalStore();

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div
        css={css({
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10,
          backgroundColor: 'rgba(22,28,45,.2)',
          ...etcStyles,
        })}
        onClick={toggle}
        {...attribute}
      >
        <Responsive
          defaultStyles={{
            width: '100%',
            height: '80%',
            position: 'absolute',
            bottom: 0,
          }}
          breakpoint={[breakpoint]}
          breakPointStyles={[
            {
              width: '500px',
              height: '500px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: borderRadius.md,
            },
          ]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </Responsive>
      </div>,
      dom
    )
  );
}

export default Content;
