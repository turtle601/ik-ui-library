import React from 'react';
import ReactDOM from 'react-dom';

import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import { useSidebarStore } from './model/useSidebar';

import type { EtcStylesType } from '../../@types/style';

interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  dom: HTMLElement;
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Content({
  dom,
  children,
  etcStyles = {},
  ...attribute
}: ContentProps) {
  const { isOpen, close } = useSidebarStore();

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
        onClick={close}
        {...attribute}
      >
        <div
          css={css({
            width: 'min-content',
            height: 'min-content',
            zIndex: 11,
          })}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>,
      dom
    )
  );
}

export default Content;
