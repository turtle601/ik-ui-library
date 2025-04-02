import React, { cloneElement } from 'react';

import { isChildElement } from '@/ui/lib';

export const allocatedIdxForChildren = (
  children: React.ReactNode,
  displayName: string,
  errorMessage: string
) => {
  return React.Children.map(children, (child, idx) => {
    if (!isChildElement<{ id: string }>(child, displayName)) {
      throw new Error(errorMessage);
    }

    return cloneElement(child, {
      id: `${idx}`,
    });
  });
};
