import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

export const postTemp = async ({ ...information }) => {
  const response = await axiosInstance.post(
    END_POINTS.PAYMENT_TEMP,
    information
  );
  return response.data;
};

export const postPayment = async ({ ...information }) => {
  const response = await axiosInstance.post(
    END_POINTS.PAYMENT,
    information
  );
  return response.data;
};
