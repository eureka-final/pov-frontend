import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '../constants/api';

const createInstance = (): AxiosInstance => {
  /* Axios Instance 생성 */
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  /* 요청 Interceptor 설정 */
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      // Request Error 처리
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  /* 응답 Interceptor 설정 */
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      /* 401 : Access Token Unauthorized */
      if (error.response?.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        try {
          const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/reissue`, { withCredentials: true });

          const { accessToken } = data;
          sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          }
          return instance(originalRequest); // 실패한 요청 재실행
        } catch (refreshError) {
          console.warn('Token refresh failed. Redirecting to signin...');
          window.location.href = '/signin'; // refresh token도 만료된 경우 로그인 페이지로 이동
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const instance = createInstance();
