import axios from 'axios';
import { axiosInstance } from '../axiosInstance';
import { ACCESS_TOKEN_KEY } from '../../constants/api';

/* 회원가입 요청 API */
export const postSignUp = async (nickname: string, birth: string, favorGenres: string[]) => {
  try {
    const response = await axiosInstance.post('/api/auth/signup', {
      nickname: nickname,
      birth: birth,
      favorGenres: favorGenres,
    });
    console.log(response);

    // Access Token을 Session Storage에 저장
    const headers = response.headers;
    const accessToken = headers['authorization'];
    console.log('accessToken =', accessToken);

    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
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

/* 로그인 요청 API */
export const postLogin = async (email: string, socialType: string) => {
  try {
    const response = await axiosInstance.post('/api/auth/login', {
      email: email,
      socialType: socialType,
    });

    // Access Token을 Session Storage에 저장
    const headers = response.headers;
    const accessToken = headers['authorization'];

    console.log('accessToken =', accessToken);

    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
