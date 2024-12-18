import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

export interface JoinClubParams {
    clubId: string;
}

export const postJoin = async ({ clubId }: JoinClubParams) => {
  const response = await axiosInstance.post(
    END_POINTS.JOIN_CLUB(clubId),
  );
  return response.data;
};

export interface InviteClubParams {
  privateQueries: string;
}

export const postPrivateJoin =async ({ privateQueries }: InviteClubParams) => {
  const response = await axiosInstance.post(
    END_POINTS.JOIN_PRIVATE_CLUB(privateQueries),
  );
  return response.data;
};
