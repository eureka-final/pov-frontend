import { axiosInstance } from '../axiosInstance';
import type { ClubFormData, LeaderData } from '../../types/club';
import { END_POINTS } from '../../constants/api';

export interface PutClubParams extends ClubFormData {
  clubId: string;
}

export interface PutLeaderParams extends LeaderData {
  clubId: string;
}

export const putClub = async ({ clubId, ...information }: PutClubParams): Promise<ClubFormData> => {
  const response = await axiosInstance.put<ClubFormData>(
    END_POINTS.CLUB(clubId),
    information
  );
  return response.data;
};

export const putLeader = async ({ clubId, ...information }: PutLeaderParams) => {
  const response = await axiosInstance.put(
    END_POINTS.LEADER_CLUB(clubId),
    information
  );
  return response.data;
};