import { axiosInstance } from '../axiosInstance';
import type { ClubFormData, InviteCode } from '../../types/club';
import { END_POINTS } from '../../constants/api';

export const postClub = async ({ ...information }) => {
  const response = await axiosInstance.post<ClubFormData>(
    END_POINTS.CLUBS,
    information
  );
  return response.data;
};

export interface InviteClubParams {
  clubId: string;
}

export const postInviteClub = async ({ clubId }: InviteClubParams) => {
  const { data } = await axiosInstance.post<InviteCode>(END_POINTS.INVITE_CLUB(clubId));
  return data;
};