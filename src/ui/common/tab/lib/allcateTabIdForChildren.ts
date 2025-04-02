import React, { cloneElement } from 'react';

import { isChildElement } from '@/ui/lib';

export const allocateTabIdForChildren = (
  children: React.ReactNode,
  displayName: string
) => {
  return React.Children.map(children, (child, idx) => {
    if (isChildElement<{ tabId: number }>(child, displayName)) {
      return cloneElement(child, {
        tabId: idx + 1,
      });
    }

    throw new Error(`자식 요소에는 ${displayName} 컴포넌트만 올 수 있습니다`);
  });
};
