import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { PremieresDetailDataResponse, PremieresResponse } from '../../types/premieres';

export const getPremieres  = async () => {
  const { data } = await axiosInstance.get<PremieresResponse>(END_POINTS.PREMIERES);
  return data;
};

export const getDetailPermieres  = async (premiereId: string) => {
  const { data } = await axiosInstance.get<PremieresDetailDataResponse>(END_POINTS.PREMIERE_DETAIL(premiereId));
  return data;
};
