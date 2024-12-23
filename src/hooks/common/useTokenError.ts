import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { useAuthStore } from '@/stores/useAuthStore';
import { useToast } from '@/hooks/common/useToast';

export const useTokenError = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const clearSession = useAuthStore((state) => state.clearSession);

  const handleTokenError = () => {
    queryClient.clear(); // React Query 캐시 초기화
    clearSession(); // Zustand를 통해 세션 초기화
    navigate('/login'); //로그인 페이지로 이동

    createToast('다시 로그인해 주세요.');
  };

  return { handleTokenError };
};
