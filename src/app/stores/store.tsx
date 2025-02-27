import { create } from 'zustand';

interface AppState {
  globalCount: number;
  setGlobalCount: (count: number) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
  globalCount: 0,
  setGlobalCount: (count: number) => set({ globalCount: count }),
  isDarkMode: false,
  setIsDarkMode: (isDark: boolean) => set({ isDarkMode: isDark }),
}));

export default useAppStore;
