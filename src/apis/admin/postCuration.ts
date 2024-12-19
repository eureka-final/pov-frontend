import { axiosInstance } from '../axiosInstance';
import type { CurationForm } from '../../types/curations';
import { END_POINTS } from '../../constants/api';

export const postCuration = async ({ ...information }) => {
  const response = await axiosInstance.post<CurationForm>(END_POINTS.CURATIONS, information);
  return response.data;
};
