import { axiosInstance } from '../axiosInstance';
import type { ClubFormData } from '../../types/club';
import { END_POINTS } from '../../constants/api';

export interface PutClubParams extends ClubFormData {
  clubId: string;
}

export const putClub = async ({ clubId, ...information }: PutClubParams): Promise<ClubFormData> => {
  const response = await axiosInstance.put<ClubFormData>(
    END_POINTS.CLUB(clubId),
    information
  );
  return response.data;
};