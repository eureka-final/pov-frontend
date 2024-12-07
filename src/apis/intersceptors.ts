import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { axiosInstance } from './axiosInstance';
import { postRefreshToken } from './auth/postRefreshToken';

import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '../constants/api';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

/* 요청 Interceptor 설정 */
export const checkSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.headers || config.headers.Authorization) return config;

  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    window.location.href = '/login';
    throw new Error('토큰이 유효하지 않습니다');
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

/* 응답 Interceptor 설정 */
export const handleRefreshToken = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) throw new Error('에러가 발생했습니다.');

  if (error.response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    try {
      const { accessToken } = await postRefreshToken();
      sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

      if (originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      }

      return axiosInstance(originalRequest); // 실패한 요청 재실행
    } catch (refreshError) {
      console.warn('Token refresh failed. Redirecting to signin...');
      window.location.href = '/login'; // refresh token도 만료된 경우 로그인 페이지로 이동
      return Promise.reject(refreshError);
    }
  }
};
