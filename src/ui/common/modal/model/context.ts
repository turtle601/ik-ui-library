import { createContext } from 'react';

import type { EtcStylesType } from '../../../@types/style';

export interface ModalContextProps {
  isOpen: boolean;
  content: React.ReactNode;
  isBackDropClose?: boolean;
  contentWrapperStyles?: EtcStylesType;
  contentDefaultStyles?: EtcStylesType;
  breakPoint?: number;
  open: (content: React.ReactNode) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);
