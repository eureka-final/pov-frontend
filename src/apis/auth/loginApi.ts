import { axiosInstance } from '../axiosInstance';
import { ACCESS_TOKEN_KEY } from '../../constants/api';

/* 로그인 요청 API */
export const postLoginApi = async (email: string, socialType: string) => {
  try {
    const response = await axiosInstance.post('/api/auth/login', {
      email: email,
      socialType: socialType,
    });

    // Access Token을 Session Storage에 저장
    const headers = response.headers;
    const accessToken = headers['authorization'];
    if (accessToken) {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
