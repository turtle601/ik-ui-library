import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  toggle: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
