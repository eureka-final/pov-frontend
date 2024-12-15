import { axiosInstance } from '../axiosInstance';

export const putNoticeRead = async (noticeId: string) => {
  try {
    const response = await axiosInstance.put(`/api/notices/${noticeId}/read`);
    console.log(response);

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
