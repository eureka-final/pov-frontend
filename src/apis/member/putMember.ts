import { axiosInstance, axiosInstanceMulipart } from '../axiosInstance';

export const putNickname = async (newNickname: string): Promise<any> => {
  try {
    const response = await axiosInstance.put('/api/members/profiles/nickname', { nickname: newNickname });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putFavorGenres = async (newFavorGenres: string[]): Promise<any> => {
  try {
    const response = await axiosInstance.put('/api/members/profiles/genres', { genres: newFavorGenres });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putProfileImage = async (newProfileImage: File): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append('profileImage', newProfileImage);
    const response = await axiosInstanceMulipart.put('/api/members/profiles/image', formData);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putMemberNotice = async (isNoticeActive: boolean): Promise<any> => {
  try {
    console.log(isNoticeActive);
    const response = await axiosInstance.put('/api/members/notice', null, { params: { isNoticeActive: isNoticeActive } });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
