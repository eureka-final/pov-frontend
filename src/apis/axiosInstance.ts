import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '../constants/api';
import { useApiError } from '../hooks/queries/useApiError';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { handleError } = useApiError();

const createInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 요청 Interceptor
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  // 응답 Interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        // handleError로 401 처리 위임
        handleError(error);

        // 토큰 재발급 요청
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/auth/reissue`,
            {},
            { withCredentials: true }
          );

          const { accessToken } = data;
          sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          }

          return instance(originalRequest); // 실패한 요청 재실행
        } catch (refreshError) {
          // 토큰 갱신 실패 시 handleError 사용
          handleError({
            response: { status: HTTP_STATUS_CODE.UNAUTHORIZED },
          });

          return Promise.reject(refreshError);
        }
      }

      // 기타 에러에 대한 처리
      handleError(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const instance = createInstance();
