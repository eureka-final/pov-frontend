import { axiosInstance } from '../axiosInstance';

export const getNotices = async () => {
  try {
    const response = await axiosInstance.get('/api/notices');
    console.log(response);

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
