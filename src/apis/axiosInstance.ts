import axios from 'axios';

import { checkSetToken } from './intersceptors';

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

export const axiosInstanceMulipart = axios.create({
  baseURL: BASE_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

/* 요청 Interceptor */
axiosInstance.interceptors.request.use(checkSetToken);
/* 응답 Interceptor */
axiosInstance.interceptors.response.use((response) => response);

/* 요청 Interceptor */
axiosInstanceMulipart.interceptors.request.use(checkSetToken);
/* 응답 Interceptor */
axiosInstanceMulipart.interceptors.response.use((response) => response);