import { instance } from '../axiosInstance';
import type { User } from '../../types/user';

/* 회원가입 요청 API */
export const postAuthSignUpApi = async (user: User) => {
  try {
    const response = await instance.post('/api/auth/signup', user);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('error occured during get auth sign in :', error);
  }
};
