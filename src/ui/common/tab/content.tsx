import { ComponentPropsWithoutRef } from 'react';

import { useTabStore } from './model/useTab';

import type { EtcStylesType } from '../../@types/style';

interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  tabId: number;
  children: React.ReactNode;
  etcStyles?: EtcStylesType;
}

function Content({ tabId, children, ...attribute }: ContentProps) {
  const { focusId } = useTabStore();

  const isFocus = focusId === tabId;

  return isFocus && <div {...attribute}>{children}</div>;
}

export default Content;
