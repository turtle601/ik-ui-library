import { createContext } from 'react';

export interface ModalContextProps {
  isOpen: boolean;
  content: React.ReactNode;
  open: (content: React.ReactNode) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);
