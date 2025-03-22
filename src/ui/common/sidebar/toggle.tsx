import React, { ComponentPropsWithoutRef } from 'react';

import { useSidebarStore } from './model/useSidebar';

interface ToggleProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

function Toggle({ children, ...attributes }: ToggleProps) {
  const { toggle } = useSidebarStore();

  return (
    <button onClick={toggle} {...attributes}>
      {children}
    </button>
  );
}

export default Toggle;
