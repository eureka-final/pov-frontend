import { axiosInstance } from '../axiosInstance';
import type { ClubsResponse, ClubDetailDataResponse, ClubMemberDataResponse } from '../../types/club';
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

export const getMemberClub = async (clubId: string) => {
  const { data } = await axiosInstance.get<ClubMemberDataResponse>(END_POINTS.JOIN_CLUB(clubId));
  return data;
};

export const getInviteClub = async (clubId: string) => {
  const { data } = await axiosInstance.get<ClubMemberDataResponse>(END_POINTS.INVITE_CLUB(clubId));
  return data;
};