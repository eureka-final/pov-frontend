import { axiosInstance } from '../axiosInstance';
import { ACCESS_TOKEN_KEY } from '../../constants/api';
/* 로그아웃 요청 API */
export const postLogoutApi = async () => {
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
