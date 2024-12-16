import { axiosInstance } from '../axiosInstance';

/* 로그아웃 요청 API */
export const postLogoutApi = async () => {
  try {
    const response = await axiosInstance.post('/api/members/logout');

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
