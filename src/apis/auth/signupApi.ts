import { instance } from '../axiosInstance';
import type { User } from '../../types/user';
import axios from 'axios';

/* 회원가입 요청 API */
export const postSignUpApi = async (user: User) => {
  try {
    const response = await instance.post('/api/auth/signup', user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 409) {
        return 'Conflict: 이미 존재하는 사용자입니다.';
      }

      if (status === 400) {
        return 'Bad Request: 잘못된 소셜 로그인 타입입니다.';
      }
    }
    return '알 수 없는 오류가 발생했습니다.';
  }
};
