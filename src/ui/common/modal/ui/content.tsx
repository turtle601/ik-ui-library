import { useModal } from '@/ui/common/modal/model';

function Content() {
  const { isOpen, content } = useModal();

  return isOpen && <>{content}</>;
}

export default Content;
