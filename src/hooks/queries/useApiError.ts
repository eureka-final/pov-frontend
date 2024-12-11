import { useCallback, useState } from 'react';
import { HTTP_STATUS_CODE } from '../../constants/api';

// 기본 핸들러 정의
const defaultHandlers = {
  
  common: () => {
    console.log('공통 처리 로직 수행');
  },
  default: () => {
    console.error('정의되지 않은 에러입니다.');
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    default: () => {
      console.error('400 bad validation - 올바르지 않은 데이터 형식');
    },
  },
  [HTTP_STATUS_CODE.UNAUTHORIZED]: {
    default: () => {
      console.error('401 Unauthorized - 로그인 인증 필요');
    },
  },
  [HTTP_STATUS_CODE.FORBIDDEN]: {
    default: () => {
      console.error('403 Forbidden - 접근 권한 없음');
    },
  },
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    default: () => {
      console.error('404 Not Found - 존재하지 않는 URL');
    },
  },
  [HTTP_STATUS_CODE.CONFLICT]: {
    default: () => {
      console.error('409 Conflict - 리소스 충돌');
    },
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_LOGIC_ERROR]: {
    default: () => {
      console.error('500 Internal Server Logic Error');
    },
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    default: () => {
      console.error('502 Internal Server Error');
    },
  },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as Record<string, any>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useApiError = (handlers: Record<string, any> = {}) => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any) => {
      const httpStatus = String(error.status || 'default'); // HTTP 상태 코드 (문자열 변환)

      if (handlers[httpStatus]?.default) {
        // 우선순위 1: 컴포넌트에서 재정의한 (HTTP 상태)
        handlers[httpStatus].default();
      } else if (typeof defaultHandlers[httpStatus] === 'object') {
        // 우선순위 2: 기본 핸들러의 (HTTP 상태)
        (defaultHandlers[httpStatus] as { default: () => void }).default();
        
        // ErrorBoundary로 에러를 전파
        setError(error as Error);
      } else {
        // 우선순위 3: 정의되지 않은 에러
        defaultHandlers.default();
      }

      // 공통 처리 로직
      // defaultHandlers.common(error);

    },
    [handlers]
  );

  // J.E 실행 컨텍스트에 에러 전파
  if(error) {
    throw error;
  }
  return { handleError };
};
