import axios from 'axios';

import { checkSetToken, handleRefreshToken } from './intersceptors';

import { BASE_URL, NETWORK } from '../constants/api';

/* Axios Instance 생성 */
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* 요청 Interceptor */
axiosInstance.interceptors.request.use(checkSetToken);
/* 응답 Interceptor */
axiosInstance.interceptors.response.use((response) => response);
// axiosInstance.interceptors.response.use((response) => response, handleRefreshToken); // TODO 테스트 후 삭제
