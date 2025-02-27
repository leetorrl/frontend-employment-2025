import { create } from 'zustand';

const useCountupdown = create((set) => ({
  count: 0,
  upcount: () => set((state) => ({ count: state.count + 1 })),
  downcount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCountupdown;