import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;

  close: () => void;
  open: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  close: () => set((state) => ({ isOpen: false })),
  open: () => set((state) => ({ isOpen: true })),
}));
