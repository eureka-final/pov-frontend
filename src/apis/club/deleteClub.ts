import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

interface DeleteClubParams {
    clubId: string;
}

export const deleteClub = async ({ clubId }: DeleteClubParams) => {
  return await axiosInstance.delete(END_POINTS.CLUB(clubId));
};