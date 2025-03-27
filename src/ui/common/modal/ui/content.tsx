import ReactDOM from 'react-dom';

import ContentWrapper from './contentWrapper';

import { useModal } from '../model';

interface ContentProps {
  dom: HTMLElement;
}

function Content({ dom }: ContentProps) {
  const { isOpen, content } = useModal();

  return (
    isOpen &&
    ReactDOM.createPortal(<ContentWrapper>{content}</ContentWrapper>, dom)
  );
}

export default Content;
