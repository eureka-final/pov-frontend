import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/user';

interface AuthState {
  user: User | null;
  fcmDeviceToken: string | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
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
      name: 'user',
    }
  )
);

export const clearAuthStore = () => {
  const { clearStorage } = useAuthStore.persist;
  clearStorage();
};

export const useClearUser = () => {
  const handleLogout = () => {
    // zustand에 저장된 user data clear
    clearAuthStore();

    // 세션 스토리지에 저장된 액세스 토큰 clear
    sessionStorage.clear();

    // 쿠키에 저장된 refresh token clear
    const refreshTokenKey = 'refresh-token';
    document.cookie = `${refreshTokenKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  return handleLogout();
};
