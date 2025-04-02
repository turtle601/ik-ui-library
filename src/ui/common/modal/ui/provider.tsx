import { useCallback, useState } from 'react';

import { ModalContext } from '../model';
import { EtcStylesType } from '../../../@types/style';

interface ModalProvider {
  children: React.ReactNode;
  isBackDropClose?: boolean;
  contentWrapperStyles?: EtcStylesType;
  contentDefaultStyles?: EtcStylesType;
  breakPoint?: number;
}

function Provider({ children }: ModalProvider) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const open = useCallback((content: React.ReactNode) => {
    setIsOpen(true);
    setContent(content);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        content,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default Provider;
