import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode;
  toggle: (content: React.ReactNode) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  toggle: (content: React.ReactNode) =>
    set((state) => ({ isOpen: !state.isOpen, content })),
}));
