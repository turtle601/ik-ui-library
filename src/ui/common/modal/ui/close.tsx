import React, { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { useModal } from '../model';

interface CloseProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  externalOnClick?: VoidFunction;
  etcStyles?: CSSProperties;
}

function Close({
  children,
  externalOnClick,
  etcStyles = {},
  ...attributes
}: CloseProps) {
  const { close } = useModal();

  const handleClick = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    close();
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

export default Close;
