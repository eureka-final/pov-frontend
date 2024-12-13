import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

interface EntryParams {
    premiereId: string;
}

export const postEntry = async ({ premiereId } : EntryParams) => {
  const response = await axiosInstance.post(
    END_POINTS.PREMIERE_ENTRY(premiereId),
  );
  return response.data;
};