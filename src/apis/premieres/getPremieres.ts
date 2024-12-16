import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { PremieresDetailDataResponse, PremieresResponse } from '../../types/premiere';

export const getPremieres  = async () => {
  const { data } = await axiosInstance.get<PremieresResponse>(END_POINTS.PREMIERES);
  return data;
};

export const getDetailPermieres  = async (premiereId: string) => {
  const { data } = await axiosInstance.get<PremieresDetailDataResponse>(END_POINTS.PREMIERE_DETAIL(premiereId));
  return data;
};

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
