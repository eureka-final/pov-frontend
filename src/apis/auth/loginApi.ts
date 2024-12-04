import { useNavigate } from 'react-router-dom';
import { instance } from '../axiosInstance';
import axios from 'axios';

/* 로그인 요청 API */
export const postAuthLoginApi = async (email: string, socialType: string) => {
  try {
    const response = await instance.post('/api/auth/login', {
      email: email,
      socialType: socialType,
    });

    console.log(response.data);
    window.alert('로그인 성공');
    window.location.href = '/main';
    return response.data;
  } catch (error) {
    // TODO API - 라우터 이동 로직 분리 리팩토링 필요
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        window.alert('회원가입으로 이동');
        window.location.href = '/signup';
        return;
      }
      if (error.response?.status === 400) {
        window.alert('로그인 실패');
        window.location.href = '/login';
        return;
      }
    }
    window.alert('로그인 실패');
    window.location.href = '/login';
  }
};
