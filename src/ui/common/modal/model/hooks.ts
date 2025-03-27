import { useContext } from 'react';
import { ModalContext } from './context';

export const useModal = () => {
  const state = useContext(ModalContext);

  if (state === null) {
    throw new Error('ModalContext is null');
  }

  return state;
};
