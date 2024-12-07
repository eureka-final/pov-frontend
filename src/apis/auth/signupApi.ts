import { instance } from '../axiosInstance';
import type { User } from '../../types/user';
import axios from 'axios';

/* 회원가입 요청 API */
export const postSignUpApi = async (user: User) => {
  try {
    const response = await instance.post('/api/auth/signup', user);
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
