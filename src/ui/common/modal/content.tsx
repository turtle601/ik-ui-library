import ReactDOM from 'react-dom';
import { css } from '@emotion/react';
import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

import { Responsive } from '../../layout';

import { useModalStore } from './model/useModal';

import type { EtcStylesType } from '../../@types/style';
import { borderRadius } from '../../../config';

interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  dom: HTMLElement;
  breakpoint: number;
  etcStyles?: EtcStylesType;
}

function Content({
  dom,
  breakpoint,
  etcStyles = {},
  ...attribute
}: ContentProps) {
  const { isOpen, content, toggle } = useModalStore();

  const closeModal: MouseEventHandler<HTMLDivElement> = (event) => {
    toggle(null);
  };

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
        onClick={closeModal}
        {...attribute}
      >
        <Responsive
          defaultStyles={{
            width: '100%',
            height: '80%',
            zIndex: 11,
            position: 'absolute',
            bottom: 0,
          }}
          breakpoint={[breakpoint]}
          breakPointStyles={[
            {
              width: '500px',
              height: '500px',
              position: 'absolute',
              zIndex: 11,
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
          {content}
        </Responsive>
      </div>,
      dom
    )
  );
}

export default Content;
