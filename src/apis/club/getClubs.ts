import { axiosInstance } from '../axiosInstance';
import type { ClubsResponse, ClubDetailDataResponse } from '../../types/club';
import { END_POINTS } from '../../constants/api';

export const getClubs  = async () => {
  const { data } = await axiosInstance.get<ClubsResponse>(END_POINTS.CLUBS);
  return data;
};

export const getMyClubs = async () => {
  const { data } = await axiosInstance.get<ClubsResponse>(END_POINTS.MY_CLUBS);
  return data;
};

export const getDetailClub = async (clubId: string) => {
  const { data } = await axiosInstance.get<ClubDetailDataResponse>(END_POINTS.CLUB(clubId));
  return data;
};