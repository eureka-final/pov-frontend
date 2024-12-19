import axios from 'axios';
import { axiosInstance } from '../axiosInstance';
import { ACCESS_TOKEN_KEY } from '../../constants/api';
import { User } from '../../types/user';

/* 회원가입 요청 API */
export const postSignUp = async (user: User) => {
  try {
    const response = await axiosInstance.post('/api/auth/signup', user);

    // Access Token을 Session Storage에 저장
    const headers = response.headers;
    const accessToken = headers['authorization'];
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
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

/* 로그아웃 요청 API */
export const postLogout = async () => {
  try {
    const response = await axiosInstance.post('/api/members/logout');
    localStorage.removeItem(ACCESS_TOKEN_KEY);

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
