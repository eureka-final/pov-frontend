import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

interface JoinClubParams {
    clubId: string;
}

export const postJoin = async ({ clubId }: JoinClubParams) => {
  const response = await axiosInstance.post(
    END_POINTS.JOIN_CLUB(clubId),
  );
  return response.data;
};
