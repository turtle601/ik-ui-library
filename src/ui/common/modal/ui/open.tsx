import React, { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { useModal } from '../model';
import ContentWrapper from './contentWrapper';

interface OpenProps extends ComponentPropsWithoutRef<'button'> {
  modalContent: React.ReactNode;
  children: React.ReactNode;
  externalOnClick?: VoidFunction;
  etcStyles?: CSSProperties;
}

function Open({
  modalContent,
  children,
  externalOnClick,
  etcStyles = {},
  ...attributes
}: OpenProps) {
  const { open } = useModal();

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    open(modalContent);
  };

  return (
    <button
      style={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        ...etcStyles,
      }}
      onClick={handleClick}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Open;
