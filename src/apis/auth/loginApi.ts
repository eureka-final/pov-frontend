import { axiosInstance } from '../axiosInstance';

/* 로그인 요청 API */
export const postLoginApi = async (email: string, socialType: string) => {
  try {
    const response = await axiosInstance.post('/api/auth/login', {
      email: email,
      socialType: socialType,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
