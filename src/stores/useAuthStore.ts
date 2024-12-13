import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ACCESS_TOKEN_KEY } from '../constants/api';
import type { User } from '../types/user';

interface AuthState {
  user: User | null;
  fcmDeviceToken: string | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  setFcmDeviceToken: (fcmDeviceToken: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      fcmDeviceToken: null,
      isLoggedIn: false,
      setUser: (user) => set({ user: user }),
      setFcmDeviceToken: (token) => set({ fcmDeviceToken: token }),
      setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
      clearSession: () => set({ isLoggedIn: false }),
    }),
    {
      name: ACCESS_TOKEN_KEY,
    }
  )
);
