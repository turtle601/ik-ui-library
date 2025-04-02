import React from 'react';

export const isChildElement = <P>(
  child: unknown,
  displayName: string
): child is React.ReactElement<P> => {
  return (
    React.isValidElement(child) &&
    (child.type as any).displayName === displayName
  );
};
