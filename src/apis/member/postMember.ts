import { axiosInstance } from '../axiosInstance';

export const postFcmToken = async (token: string) => {
  try {
    const response = await axiosInstance.post('/api/members/fcmToken', {
      fcmToken: token,
    });

    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
