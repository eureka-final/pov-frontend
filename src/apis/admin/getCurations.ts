import { axiosInstance } from '../axiosInstance';
import type { CurationResponse, AdminCurationResponse } from '../../types/curations';
import { END_POINTS } from '../../constants/api';

export const getCurations = async (): Promise<CurationResponse> => {
  const response = await axiosInstance.get<CurationResponse>(END_POINTS.CURATIONS);
  return response.data;
};

export const getCurationDetail = async (curationId: string): Promise<AdminCurationResponse> => {
  const response = await axiosInstance.get<AdminCurationResponse>(END_POINTS.CURATION_DETAIL(curationId));
  return response.data;
};
