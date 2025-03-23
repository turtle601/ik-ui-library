import { create } from 'zustand';

interface TabState {
  focusId: number;
  setFocusId: (id: number) => void;
}

export const useTabStore = create<TabState>((set) => ({
  focusId: 1,
  setFocusId: (id: number) => set((state) => ({ focusId: id })),
}));
