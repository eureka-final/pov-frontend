import type { InternalAxiosRequestConfig } from 'axios';

import { ACCESS_TOKEN_KEY } from '../constants/api';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

/* 요청 Interceptor 설정 */
export const checkSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  config.headers.Authorization = `${accessToken}`;

  return config;
};
