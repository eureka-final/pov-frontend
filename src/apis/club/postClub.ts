import { axiosInstance } from '../axiosInstance';
import type { ClubFormData } from '../../types/club';
import { END_POINTS } from '../../constants/api';
import axios from 'axios';

export const postClub = async ({ ...information }) => {
  const response = await axios.post<ClubFormData>(
    END_POINTS.CLUBS,
    information
  );
  return response.data;
};
