import { axiosInstance } from '../axiosInstance';
import type { ClubsData } from '../../types/club';
import { END_POINTS } from '../../constants/api';
import axios from 'axios';

export const getClubs  = async () => {
  const { data } = await axios.get<ClubsData[]>(END_POINTS.CLUBS);
  return data;
};

export const getMyClubs = async () => {
  const { data } = await axios.get<ClubsData[]>(END_POINTS.MY_CLUBS);
  return data;
};

export const getDetailClubs = async (clubId: string) => {
  const { data } = await axios.get<ClubsData[]>(END_POINTS.CLUB(clubId));
  return data;
};