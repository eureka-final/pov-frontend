import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ACCESS_TOKEN_KEY } from '../constants/api';
import type { User } from '../types/user';

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      setUser: (user) => set({ user: user }),
      setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
      clearSession: () => set({ isLoggedIn: false }),
    }),
    {
      name: ACCESS_TOKEN_KEY,
    }
  )
);
