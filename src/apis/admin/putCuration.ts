import { axiosInstance } from '../axiosInstance';
import type { CurationForm } from '../../types/curations';
import { END_POINTS } from '../../constants/api';

export interface PutCurationParams extends CurationForm {
  curationId: string;
}

export const putCuration = async ({ curationId, ...information }: PutCurationParams): Promise<CurationForm> => {
  const response = await axiosInstance.put<CurationForm>(END_POINTS.CURATION_DETAIL(curationId), information);
  return response.data;
};
