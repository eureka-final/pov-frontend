import { axiosInstance } from '../axiosInstance';
import type { ClubFormData } from '../../types/club';
import { END_POINTS } from '../../constants/api';

export const postClub = async ({ ...information }) => {
  const response = await axiosInstance.post<ClubFormData>(
    END_POINTS.CLUB,
    information
  );
  return response.data;
};
