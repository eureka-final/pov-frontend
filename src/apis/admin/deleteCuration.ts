import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

export interface DeleteCurationParams {
  curationId: string;
}

export const deleteCuration = async ({ curationId }: DeleteCurationParams) => {
  return await axiosInstance.delete(END_POINTS.CURATION_DETAIL(curationId));
};
