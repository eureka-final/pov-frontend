import { axiosInstance } from '../axiosInstance';

export const deleteMember = async () => {
  try {
    const response = await axiosInstance.delete('/api/members');

    if (response) {
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
