import React, { cloneElement } from 'react';

const isTabButton = <P>(
  child: unknown,
  displayName: string
): child is React.ReactElement<P> => {
  return (
    React.isValidElement(child) &&
    (child.type as any).displayName === displayName
  );
};

export const allocateTabIdForChildren = (
  children: React.ReactNode,
  displayName: string
) => {
  return React.Children.map(children, (child, idx) => {
    if (isTabButton<{ tabId: number }>(child, displayName)) {
      return cloneElement(child, {
        tabId: idx + 1,
      });
    }

    throw new Error(`자식 요소에는 ${displayName} 컴포넌트만 올 수 있습니다`);
  });
};
