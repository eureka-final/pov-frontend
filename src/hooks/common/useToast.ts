import { useToastStore } from '@/stores/useToastStore';

export const useToast = () => {
  const addToast = useToastStore((state) => state.addToast);

  const createToast = (message: string, variant: 'default' | 'success' | 'error' = 'error') => {
    addToast({ variant, message });
  };

  return { createToast };
};