import { QueryCache, QueryClient } from '@tanstack/react-query';

import { NETWORK } from '@/constants/api';
import { useApiError } from "@/hooks/queries/useApiError";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { handleError } = useApiError();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: NETWORK.RETRY_COUNT, // 재시도 횟수 설정
      refetchOnWindowFocus: false, // 포커스 시 재요청 방지
      throwOnError: true, // ErrorBoundary로 에러 전파 (v5 이후의 적용 방법)
    },
    mutations: {
      onError: handleError, // 뮤테이션 에러 처리
    },
  },
  queryCache: new QueryCache({
    onError: handleError, // 쿼리 캐시 레벨의 에러 처리
  }),
});