import React from 'react';
import ReactDOM from 'react-dom';

import { css, CSSObject } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import { useSidebarStore } from './model/useSidebar';

interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  dom: HTMLElement;
  children: React.ReactNode;
  etcStyles?: CSSObject;
}

function Content({
  dom,
  children,
  etcStyles = {},
  ...attribute
}: ContentProps) {
  const { isOpen, toggle } = useSidebarStore();

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
