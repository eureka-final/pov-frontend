import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

export interface DeleteClubParams {
    clubId: string;
}

export const deleteLeaveClub = async ({ clubId }: DeleteClubParams) => {
  return await axiosInstance.delete(END_POINTS.LEAVE_CLUB(clubId));
};