import { axiosInstance } from '../axiosInstance';

export const getPremieresEntry = async () => {
  try {
    const response = await axiosInstance.get('/api/premieres/entry/my');
    console.log(response);

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
