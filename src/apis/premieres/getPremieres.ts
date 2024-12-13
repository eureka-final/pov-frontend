import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { PremieresResponse } from '../../types/premieres';

export const getPremieres  = async () => {
  const { data } = await axiosInstance.get<PremieresResponse>(END_POINTS.PREMIERES);
  return data;
};
