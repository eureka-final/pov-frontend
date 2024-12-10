import { axiosInstance } from '../axiosInstance';

import type { TokenData } from '../../types/auth';

import { END_POINTS } from '../../constants/api';

export const postRefreshToken = async () => {
  const { data } = await axiosInstance.post<TokenData>(END_POINTS.TOKEN);

  return data;
};
