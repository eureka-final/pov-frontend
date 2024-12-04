import { useCallback } from 'react';

interface DefaultHandlers {
  common: () => void;
  default: () => void;
  [key: string]:
    | {
        default?: () => void;
        [serviceCode: string]: (() => void) | undefined;
      }
    | (() => void);
}

// 기본 핸들러 정의
const defaultHandlers: DefaultHandlers = {
  common: () => {
    console.log('공통 처리 로직 수행');
  },
  default: () => {
    console.error('정의되지 않은 에러입니다.');
  },
  401: {
    default: () => {
      console.error('401 Unauthorized - 로그인 필요');
      sessionStorage.removeItem('ACCESS_TOKEN_KEY');
      window.location.href = '/signin';
    },
  },
  403: {
    default: () => {
      console.error('403 Forbidden - 접근 권한 없음');
    },
  },
  404: {
    default: () => {
      console.error('404 Not Found - 존재하지 않는 URL');
    },
  },
  409: {
    10001: () => {
      console.error('409 - 리소스 충돌: 특정 케이스 10001');
    },
    10002: () => {
      console.error('409 - 리소스 충돌: 특정 케이스 10002');
    },
  },
  500: {
    default: () => {
      console.error('500 Internal Server Error');
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useApiError = (handlers: Record<string, any> = {}) => {
  const handleError = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any) => {
      const httpStatus = String(error.status || 'default'); // HTTP 상태 코드 (문자열 변환)
      const serviceCode = String(error.response?.meta?.code || 'default'); // 서비스 에러 코드 (문자열 변환)

      if (
        handlers[httpStatus] &&
        typeof handlers[httpStatus] === 'object' && 
        serviceCode in handlers[httpStatus]
      ) {
        // 우선순위 1: 컴포넌트에서 재정의한 (HTTP 상태 + 서비스 코드)
        handlers[httpStatus][serviceCode]();
      } else if (handlers[httpStatus]?.default) {
        // 우선순위 2: 컴포넌트에서 재정의한 (HTTP 상태)
        handlers[httpStatus].default();
      } else if (
        defaultHandlers[httpStatus] &&
        typeof defaultHandlers[httpStatus] === 'object' &&
        serviceCode in defaultHandlers[httpStatus]
      ) {
        // 우선순위 3: 기본 핸들러의 (HTTP 상태 + 서비스 코드)
        (defaultHandlers[httpStatus] as Record<string, () => void>)[
          serviceCode
        ]();
      } else if (typeof defaultHandlers[httpStatus] === 'object') {
        // 우선순위 4: 기본 핸들러의 (HTTP 상태)
        (defaultHandlers[httpStatus] as { default: () => void }).default();
      } else {
        // 우선순위 5: 정의되지 않은 에러
        defaultHandlers.default();
      }

      // 공통 처리 로직
      defaultHandlers.common();
    },
    [handlers]
  );

  return { handleError };
};
