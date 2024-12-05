import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ACCESS_TOKEN_KEY } from '../constants/api';

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
      clearSession: () => set({ isLoggedIn: false }),
    }),
    {
      name: ACCESS_TOKEN_KEY,
    }
  )
);
