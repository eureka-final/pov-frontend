import { create } from 'zustand';

export interface Toast {
  id: number;
  variant: 'default' | 'success' | 'error';
  message: string;
}

interface ToastStore {
  toastList: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: number) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toastList: [],
  addToast: (toast) => {
    const id = Date.now(); // Unique ID
    set((state) => ({
      toastList: [...state.toastList, { id, ...toast }],
    }));
  },
  removeToast: (id) => {
    set((state) => ({
      toastList: state.toastList.filter((toast) => toast.id !== id),
    }));
  },
}));