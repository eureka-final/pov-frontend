import { instance } from '../axiosInstance';

/* 로그인 요청 API */
export const postLoginApi = async (email: string, socialType: string) => {
  try {
    const response = await instance.post('/api/auth/login', {
      email: email,
      socialType: socialType,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
