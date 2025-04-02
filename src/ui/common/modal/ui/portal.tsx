import React from 'react';

import ReactDOM from 'react-dom';

import { useModal } from '@/ui/common/modal/model';

interface ProtalProps {
  dom: HTMLElement;
}

function Portal({ dom }: ProtalProps) {
  const { isOpen, content } = useModal();

  return isOpen && ReactDOM.createPortal(<>{content}</>, dom);
}

export default Portal;
