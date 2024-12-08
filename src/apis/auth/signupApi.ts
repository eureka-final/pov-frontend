import axios from 'axios';
import { axiosInstance } from '../axiosInstance';
import type { User } from '../../types/user';
import { ACCESS_TOKEN_KEY } from '../../constants/api';

/* 회원가입 요청 API */
export const postSignUpApi = async (user: User) => {
  try {
    const response = await axiosInstance.post('/api/auth/signup', user);
    console.log(response);

    // Access Token을 Session Storage에 저장
    const headers = response.headers;
    const accessToken = headers['authorization'];
    if (accessToken) {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }
    return response.data;
  } catch (error) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      return status;
    }
    return '알 수 없는 오류가 발생했습니다.';
  }
};
